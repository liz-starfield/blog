import{_ as a,a as n,b as t,c as s,d as i,e as o,f as r,g as l,h as c,i as p,j as d,k as u,l as m,m as h}from"./028_after_flash_attention-tADJ-9m9.js";import{_ as g}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as f,c as k,f as b,a as e,b as y,e as v}from"./app-dpf1czaz.js";const _={},w=e("h1",{id:"distributed-training-part-5-introduction-to-gpu",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#distributed-training-part-5-introduction-to-gpu","aria-hidden":"true"},"#"),y(" Distributed Training Part 5: Introduction to GPU")],-1),x=v('<h2 id="_1-gpu-architecture" tabindex="-1"><a class="header-anchor" href="#_1-gpu-architecture" aria-hidden="true">#</a> 1. GPU Architecture</h2><p>In terms of computation, it has a highly hierarchical structure</p><ul><li>A GPU consists of a set of computational units called Streaming Multiprocessors (SMs).</li><li>Each SM contains and controls a set of streaming processors, also known as cores. For example, the Nvidia H100 GPU has 132 SMs, each with 128 cores, totaling 16,896 cores.</li><li>Each core can handle multiple threads simultaneously.</li></ul><figure><img src="'+a+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>In terms of memory, it also has a highly hierarchical structure, including multiple layers of cache and memory</p><ul><li>Registers are the smallest units, private to threads during execution</li><li>Shared Memory and L1 cache are shared by threads running on a single SM</li><li>A higher level is the L2 cache shared by all SMs</li><li>Finally, there is global memory, which is the largest memory on the GPU (e.g., the H100 boasts 80 GB), but it is also the slowest to access and query</li></ul><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>The goal of a GPU is to leverage this hierarchical organization of computation/memory to run as many workloads as possible in parallel on the GPU cores.</p><p>A piece of code running on GPU cores is called a kernel. It can be written in high-level languages in CUDA or Triton and then compiled into PTX (Parallel Thread Execution), the low-level assembly language used by NVIDIA GPUs.</p><p>To run a kernel, a specific piece of code called host code is also needed, which executes on the CPU/host and is responsible for preparing data allocation and loading data and code.</p><p>The scheduling of a kernel typically follows:</p><ul><li>Threads are grouped into warps of size 32. All threads in a warp execute instructions synchronously but process different parts of the data.</li><li>Warps are grouped into larger and more flexible blocks (e.g., size 256), each block still assigned to a single SM. An SM can run multiple blocks in parallel, but depending on resource availability, not all blocks can be assigned for execution immediately, and some blocks may be queued, waiting for resources.</li></ul><h2 id="_2-how-to-improve-performance-with-kernels" tabindex="-1"><a class="header-anchor" href="#_2-how-to-improve-performance-with-kernels" aria-hidden="true">#</a> 2. How to Improve Performance with Kernels</h2><h3 id="_2-1-tools-for-writing-kernel-code" tabindex="-1"><a class="header-anchor" href="#_2-1-tools-for-writing-kernel-code" aria-hidden="true">#</a> 2.1. Tools for Writing Kernel Code</h3><ul><li>Pytorch: easy but slow</li><li>torch.compile: easy, fast, but not flexible</li><li>triton: harder, faster, and more flexible</li><li>CUDA: hardest, fastest, and most flexible (if you get it right)</li></ul><h3 id="_2-2-torch-compile-decorator" tabindex="-1"><a class="header-anchor" href="#_2-2-torch-compile-decorator" aria-hidden="true">#</a> 2.2. torch.compile Decorator</h3><p>If you want to add a new operation lacking in a kernel or speed up an existing PyTorch function, writing a kernel from scratch might seem the most straightforward approach. However, creating high-performance CUDA Kernels from scratch requires extensive experience and a steep learning curve. A better starting point is often to use torch.compile, which captures your operations and generates low-level, high-performance Kernels in Triton, dynamically optimizing PyTorch code.</p><p>Suppose you want to write a Kernel for the activation function of the Exponential Linear Unit:</p><figure><img src="'+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>After writing a PyTorch implementation, you only need to decorate it with @torch.compile</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token decorator annotation punctuation">@torch<span class="token punctuation">.</span>compile</span>
<span class="token keyword">def</span> <span class="token function">elu</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> alpha<span class="token operator">=</span><span class="token number">1.0</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> torch<span class="token punctuation">.</span>where<span class="token punctuation">(</span>x <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">,</span> alpha <span class="token operator">*</span> <span class="token punctuation">(</span>torch<span class="token punctuation">.</span>exp<span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The performance improvement is significant</p><figure><img src="`+s+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Once you run a Python script with the @torch.compile decorator, the corresponding Triton Kernel is generated.</p><p>To view the Triton Kernel generated by @torch.compile, simply set the environment variable TORCH_LOGS to &quot;output_code&quot;</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">TORCH_LOGS</span><span class="token operator">=</span><span class="token string">&quot;output_code&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>The corresponding Triton Kernel (variables renamed and comments added for readability):</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token decorator annotation punctuation">@triton<span class="token punctuation">.</span>jit</span>
<span class="token keyword">def</span> <span class="token function">elu_kernel</span><span class="token punctuation">(</span>input_ptr<span class="token punctuation">,</span> output_ptr<span class="token punctuation">,</span> num_elements<span class="token punctuation">,</span> BLOCK_SIZE<span class="token punctuation">:</span> tl<span class="token punctuation">.</span>constexpr<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># Calculate the starting index for this block</span>
    block_start <span class="token operator">=</span> tl<span class="token punctuation">.</span>program_id<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">*</span> BLOCK_SIZE
    <span class="token comment"># Create an array of indices for this block</span>
    block_indices <span class="token operator">=</span> block_start <span class="token operator">+</span> tl<span class="token punctuation">.</span>arange<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> BLOCK_SIZE<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
    <span class="token comment"># Create a mask to ensure only valid indices are processed</span>
    valid_mask <span class="token operator">=</span> block_indices <span class="token operator">&lt;</span> num_elements
    <span class="token comment"># Load input values from the input pointer based on valid indices</span>
    input_values <span class="token operator">=</span> tl<span class="token punctuation">.</span>load<span class="token punctuation">(</span>input_ptr <span class="token operator">+</span> block_indices<span class="token punctuation">,</span> valid_mask<span class="token punctuation">)</span>
    <span class="token comment"># Define the ELU parameters</span>
    zero_value <span class="token operator">=</span> <span class="token number">0.0</span>  <span class="token comment"># Threshold for ELU activation</span>
    negative_mask <span class="token operator">=</span> input_values <span class="token operator">&lt;</span> zero_value
    exp_values <span class="token operator">=</span> tl<span class="token punctuation">.</span>math<span class="token punctuation">.</span>exp<span class="token punctuation">(</span>input_values<span class="token punctuation">)</span>
    <span class="token comment"># Define the ELU output shift</span>
    one_value <span class="token operator">=</span> <span class="token number">1.0</span>
    shifted_exp_values <span class="token operator">=</span> exp_values <span class="token operator">-</span> one_value

    output_values <span class="token operator">=</span> tl<span class="token punctuation">.</span>where<span class="token punctuation">(</span>negative_mask<span class="token punctuation">,</span> shifted_exp_values<span class="token punctuation">,</span> input_values<span class="token punctuation">)</span>

    <span class="token comment"># Store the computed output values back to the output pointer</span>
    tl<span class="token punctuation">.</span>store<span class="token punctuation">(</span>output_ptr <span class="token operator">+</span> block_indices<span class="token punctuation">,</span> output_values<span class="token punctuation">,</span> valid_mask<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here, tl.program_id(0) provides a unique block ID, which we use to determine the segment of data the block will process. Using this block ID, block_start calculates the starting index for each block segment, while block_indices specify the range of indices within the segment. valid_mask ensures that only indices within num_elements are processed, safely loading data with tl.load. The ELU function is then applied, modifying values based on whether they are negative, and finally, the results are written back to memory with tl.store.</p><h3 id="_2-3-implementing-triton-kernels" tabindex="-1"><a class="header-anchor" href="#_2-3-implementing-triton-kernels" aria-hidden="true">#</a> 2.3. Implementing Triton Kernels</h3><p>If this performance improvement is not enough, consider implementing Triton Kernels</p><figure><img src="`+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Even in Triton, sometimes due to the language&#39;s limitations in handling low-level details (such as shared memory and scheduling within SMs), we cannot fully achieve the device&#39;s optimal performance. Triton&#39;s functionality is limited to blocks and their scheduling across SMs. For deeper control, you need to implement kernels directly in CUDA, where you can access all the underlying low-level details.</p><h3 id="_2-4-implementing-cuda-kernels" tabindex="-1"><a class="header-anchor" href="#_2-4-implementing-cuda-kernels" aria-hidden="true">#</a> 2.4. Implementing CUDA Kernels</h3><p>Techniques to improve kernel efficiency:</p><ul><li>Optimize memory access patterns to reduce latency</li><li>Use shared memory to store frequently accessed data</li><li>Manage thread workloads to minimize idle time</li></ul><h4 id="_2-4-1-optimizing-memory-access-memory-coalescing" tabindex="-1"><a class="header-anchor" href="#_2-4-1-optimizing-memory-access-memory-coalescing" aria-hidden="true">#</a> 2.4.1. Optimizing Memory Access / Memory Coalescing</h4><p>Compared to cache, Global Memory has longer latency and lower bandwidth, which is often the bottleneck for most applications.</p><p>In CUDA devices, global memory is implemented using DRAM</p><p>Memory coalescing takes advantage of DRAM&#39;s burst data transfer mode, where accessing one memory address simultaneously transfers a series of contiguous memory locations.</p><p>Maximize memory access efficiency by ensuring that 32 threads in a warp access adjacent memory (For instance, if thread 0 accesses location M, thread 1 accesses M + 1, thread 2 accesses M + 2, and so forth)</p><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><figure><img src="'+r+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Problem</p><ul><li>Low throughput</li><li>Warning of uncoalesced memory access</li></ul><p>Reason Matrix elements are stored in row-major order, as shown below:</p><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>But threads load data in column-major order, preventing memory access coalescing</p><p>Solution: Let threads load data in row-major order to coalesce memory access</p><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Throughput increased tenfold</p><h4 id="_2-4-2-using-shared-memory-tiling" tabindex="-1"><a class="header-anchor" href="#_2-4-2-using-shared-memory-tiling" aria-hidden="true">#</a> 2.4.2. Using Shared Memory / Tiling</h4><p>Shared memory is a small, fast-access memory space shared by all threads in a block, reducing the need to repeatedly load data from slow global memory</p><p>Use tiling to load data into shared memory at once, allowing all threads in a block to reuse the same shared data, enabling quick access to all necessary data for matrix multiplication</p><figure><img src="'+p+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Throughput increased to 410 GB/s, kernel execution time reduced by about 43%, achieving approximately 6.6 TFLOPs of performance</p><h4 id="_2-4-3-thread-coarsening" tabindex="-1"><a class="header-anchor" href="#_2-4-3-thread-coarsening" aria-hidden="true">#</a> 2.4.3. Thread Coarsening</h4><p>Thread coarsening combines several threads into a single coarse thread, significantly reducing shared memory access as each coarse thread can handle multiple output elements</p><h4 id="_2-4-4-minimizing-control-divergence" tabindex="-1"><a class="header-anchor" href="#_2-4-4-minimizing-control-divergence" aria-hidden="true">#</a> 2.4.4. Minimizing Control Divergence</h4><p>SIMD: single instruction, multiple data</p><p>An SM (Streaming Multiprocessor) executes all threads in a warp using the SIMD model</p><p>The advantage of SIMD is efficiency: control hardware responsible for instruction fetching and scheduling is shared by multiple execution units, minimizing hardware overhead related to control functions, allowing more hardware to focus on improving arithmetic throughput</p><h2 id="_3-fused-kernels" tabindex="-1"><a class="header-anchor" href="#_3-fused-kernels" aria-hidden="true">#</a> 3. Fused Kernels</h2><p>GPU and CPU operations can be asynchronous. Specifically, host code on the CPU can schedule workloads on the GPU in a non-blocking manner.</p><p>Avoid switching back and forth between host and GPU Kernel commands</p><p>A series of kernels that need to switch back and forth between global memory and compute units:</p><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Complete all operations at once:</p><figure><img src="'+u+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>How to avoid this back-and-forth switching? The best way is to make our GPU as autonomous as possible. This can be achieved by packaging as many consecutive computational operations as possible into a single kernel for the GPU to run, known as a &quot;Fused Kernel.&quot;</p><p>Fused Kernels are particularly efficient and easy to write for consecutive point-like operations, which are executed independently on each input token. In this case, it makes no sense to first put the computed values back into global memory and then move them to SM memory to start a new kernel. A more efficient approach is to keep all values locally until a series of computations are completed.</p><p>In Transformer models, there are many places where this &quot;fusing&quot; method can be applied: every time we encounter a series of point-like operations, such as in the computations involved in layer normalization.</p><h2 id="_4-flash-attention" tabindex="-1"><a class="header-anchor" href="#_4-flash-attention" aria-hidden="true">#</a> 4. Flash Attention</h2><p>Flash Attention, proposed by Tri Dao, aims to optimize attention computation by writing custom CUDA kernels, making it faster and more memory-efficient. The core idea of Flash Attention is to efficiently utilize various GPU memories, avoiding excessive reliance on the slowest memory: the GPU&#39;s global memory.</p><h3 id="_4-1-before-optimization" tabindex="-1"><a class="header-anchor" href="#_4-1-before-optimization" aria-hidden="true">#</a> 4.1. Before Optimization</h3><figure><img src="'+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>HBM: High Bandwidth Memory (represents global memory, not efficient at all)</p><p>The basic implementation of the attention mechanism involves a lot of transfers between memory and work units. It requires instantiating S and P matrices in HBM, meaning results need to be sent to HBM first and then returned to SRAM for subsequent computations.</p><p>Because HBM&#39;s bandwidth is quite low, it is the bottleneck for attention computation</p><h3 id="_4-2-flash-attention-optimization" tabindex="-1"><a class="header-anchor" href="#_4-2-flash-attention-optimization" aria-hidden="true">#</a> 4.2. Flash Attention Optimization</h3><p>The key is to compute the S matrix in small chunks so that it can fit into the smaller shared memory of the SM. But we can do better by completely avoiding the instantiation of the large S matrix and instead only keeping the necessary statistics needed to compute the softmax normalization factor. This way, we can compute O directly in SRAM at once, rather than moving intermediate results back and forth. In this case, we not only utilize shared memory but also alleviate the memory bottleneck caused by instantiating the attention matrix (the bulk of activations).</p><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>The concept of Flash Attention addresses many bottlenecks in model training, quickly becoming the default way to perform attention in all Transformer models.</p><p>After Flash-Attention 1, the same lab released two improved versions: Flash-Attention 2 and Flash-Attention 3. Compared to Flash-Attention 1, the improvements in Flash-Attention 2 and 3 focus more on low-level implementation optimizations for GPUs rather than the general attention mechanism. Specifically, these optimizations include: (1) minimizing the number of non-matmul operations as much as possible; (2) for Flash-Attention 2, carefully distributing workloads to warps and thread blocks; for Flash-Attention 3, optimizing support for FP8 and Tensor Core for the latest Hopper (H100) architecture.</p>',84);function T(z,M){return f(),k("div",null,[w,b(" more "),x])}const P=g(_,[["render",T],["__file","028_distribution_and_parallelism_4.html.vue"]]);export{P as default};
