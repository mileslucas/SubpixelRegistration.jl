var documenterSearchIndex = {"docs":
[{"location":"api/#API/Reference","page":"API/Reference","title":"API/Reference","text":"","category":"section"},{"location":"api/","page":"API/Reference","title":"API/Reference","text":"","category":"page"},{"location":"api/","page":"API/Reference","title":"API/Reference","text":"Modules = [SubpixelRegistration]","category":"page"},{"location":"api/#SubpixelRegistration.calculate_stats-Tuple{Any, Any, Any}","page":"API/Reference","title":"SubpixelRegistration.calculate_stats","text":"SubpixelRegistration.calculate_stats(crosscor_maxima, source_freq, target_freq)\n\nCalculate the normalized root-mean-square error (NRMSE) and total phase difference between the two complex arrays, source_freq and target_freq, with maximum cross-correlation value crosscor_maxima\n\n\n\n\n\n","category":"method"},{"location":"api/#SubpixelRegistration.coregister!-Tuple{AbstractArray}","page":"API/Reference","title":"SubpixelRegistration.coregister!","text":"coregister!(cube; dims, kwargs...)\n\nCoregister slices in cube, modifying it in place.\n\nSee also\n\ncoregister\n\n\n\n\n\n","category":"method"},{"location":"api/#SubpixelRegistration.coregister-Tuple{AbstractArray}","page":"API/Reference","title":"SubpixelRegistration.coregister","text":"coregister(cube; dims, refidx=firstindex(cube, dims), upsample_factor=1)\n\nCoregister a cube of data along dims, using the refidx slice as the source frame. Other keyword arguments will be passed to phase_offset\n\nSee also\n\ncoregister!\n\n\n\n\n\n","category":"method"},{"location":"api/#SubpixelRegistration.fourier_shift!-Union{Tuple{T}, Tuple{AbstractMatrix{<:Complex{T}}, Any}, Tuple{AbstractMatrix{<:Complex{T}}, Any, Any}} where T","page":"API/Reference","title":"SubpixelRegistration.fourier_shift!","text":"fourier_shift!(image_freq::AbstractMatrix{<:Complex}, shift, phasediff=0)\n\nShift the given image, which is already in frequency-space, by shift along each axis. Modifies image_freq in place.\n\n\n\n\n\n","category":"method"},{"location":"api/#SubpixelRegistration.fourier_shift-Tuple{Any, Any, Vararg{Any}}","page":"API/Reference","title":"SubpixelRegistration.fourier_shift","text":"fourier_shift(image, shift)\n\nShift the given image by shift along each axis, using the Fourier phase information.\n\n\n\n\n\n","category":"method"},{"location":"api/#SubpixelRegistration.phase_offset-Tuple{AbstractArray, AbstractArray}","page":"API/Reference","title":"SubpixelRegistration.phase_offset","text":"phase_offset(source, target; upsample_factor=1, normalize=false)\n\nReturn the shift between source and target along each axis by measuring the maximum in the cross-correlation between the images. This algorithm can achieve 1/upsample_factor precision by locally upsampling the cross-correlation via a matrix-multiplication DFT.[1] If normalize is true, the phase of the cross-correlation in Fourier space is divided by its magnitude. In some applications, phase normalization can increase performance, but usually at a trade-off for worse low-noise performance.\n\nExamples\n\njulia> image = reshape(1.0:100.0, 10, 10);\n\njulia> shift = (-1.6, 2.8)\n(-1.6, 2.8)\n\njulia> target = fourier_shift(image, shift);\n\njulia> phase_offset(image, target)\n(shift = (2.0, -3.0), error = 0.013095117382042387, phasediff = 0.0)\n\njulia> phase_offset(image, target; upsample_factor=5)\n(shift = (1.6, -2.8), error = -9972.926257260056, phasediff = 0.0)\n\njulia> phase_offset(image, target; upsample_factor=5, normalize=true)\n(shift = (1.8, -2.8), error = 0.9999999971143979, phasediff = 0.0)\n\njulia> @. isapprox(ans.shift, -1 * shift, atol=1/5)\n(true, true)\n\n[1]: Manuel Guizar-Sicairos, Samuel T. Thurman, and James R. Fienup, \"Efficient subpixel image registration algorithms,\" Opt. Lett. 33, 156-158 (2008)\n\n\n\n\n\n","category":"method"},{"location":"api/#SubpixelRegistration.phase_offset-Union{Tuple{T}, Tuple{Any, AbstractMatrix{<:Complex{T}}, Any}} where T","page":"API/Reference","title":"SubpixelRegistration.phase_offset","text":"phase_offset(plan, source_freq, target_freq; upsample_factor=1, normalize=false)\n\nReturns the phase shift between the two images which have already been Fourier transformed with the given plan.\n\n\n\n\n\n","category":"method"},{"location":"api/#SubpixelRegistration.register-Tuple{Any, Any}","page":"API/Reference","title":"SubpixelRegistration.register","text":"register(source, target; upsample_factor=1)\n\nRegister target image to source image by first finding the phase offset (phase_offset), and then Fourier shifting target with fourier_shift.\n\nExamples\n\njulia> image = reshape(1.0:100.0, 10, 10);\n\njulia> shift = (-1.6, 2.8)\n(-1.6, 2.8)\n\njulia> target = fourier_shift(image, shift);\n\njulia> target_shift = register(image, target; upsample_factor=5);\n\nSee also\n\nphase_offset\n\n\n\n\n\n","category":"method"},{"location":"api/#SubpixelRegistration.upsampled_dft-Union{Tuple{T}, Tuple{AbstractMatrix{T}, Any, Any, Any}} where T<:Complex","page":"API/Reference","title":"SubpixelRegistration.upsampled_dft","text":"SubpixelRegistration.upsampled_dft(data, region_size, upsample_factor, offsets)\n\nCalculate the cross-correlation in a region of size region_size via an upsampled DFT. The DFT uses matrix-multiplication to super-sample the input by upsample_factor. The frequencies will be shifted and centered around offsets.\n\n\n\n\n\n","category":"method"},{"location":"","page":"Home","title":"Home","text":"CurrentModule = SubpixelRegistration","category":"page"},{"location":"#SubpixelRegistration.jl","page":"Home","title":"SubpixelRegistration.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"(Image: Code) (Image: Build Status) (Image: PkgEval) (Image: Coverage) (Image: License)","category":"page"},{"location":"","page":"Home","title":"Home","text":"Image registration with subpixel precision using an upsampled discrete Fourier transform cross-correlation. This uses an efficient matrix-multiplication algorithm for upsampling the cross-correlation following Guizar-Sicairos, Thurman, and Fienup (2008).[1]","category":"page"},{"location":"","page":"Home","title":"Home","text":"[1]: Manuel Guizar-Sicairos, Samuel T. Thurman, and James R. Fienup, \"Efficient subpixel image registration algorithms,\" Opt. Lett. 33, 156-158 (2008)","category":"page"},{"location":"#Installation","page":"Home","title":"Installation","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"julia>] add SubpixelRegistration","category":"page"},{"location":"#Usage","page":"Home","title":"Usage","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"using ColorTypes\nusing ImageIO\nusing ImageShow\nusing SubpixelRegistration\nusing TestImages\n\nimage = testimage(\"cameraman\")","category":"page"},{"location":"","page":"Home","title":"Home","text":"warning: Pixel Convention\nThe pixel convention adopted here is that the bottom-left pixel center is (1, 1). The column-major memory layout of julia puts the x axis as the rows of a matrix and the y axis as the columns. In other words, the shifts are described by (dx, dy). This is the same pixel convention as FITS, WCS, DS9, IRAF, and SourceExtractor.","category":"page"},{"location":"","page":"Home","title":"Home","text":"shift = (22.4, -13.32)\nsource = Float64.(image)\nshifted = fourier_shift(source, shift)\nGray.(shifted)","category":"page"},{"location":"","page":"Home","title":"Home","text":"phase_offset(source, shifted; upsample_factor=1)","category":"page"},{"location":"","page":"Home","title":"Home","text":"phase_offset(source, shifted; upsample_factor=100)","category":"page"},{"location":"","page":"Home","title":"Home","text":"registered = register(source, shifted; upsample_factor=100)\nGray.(registered)","category":"page"},{"location":"#Benchmarks","page":"Home","title":"Benchmarks","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"This code has been benchmarked against the scikit-image implementation. This benchmark is a measure of the time it takes to measure the offset between two images with various sizes and with various upsample factors. The number of pixels scales with the square of the size, describing the non-linear power law.","category":"page"},{"location":"","page":"Home","title":"Home","text":"System Information","category":"page"},{"location":"","page":"Home","title":"Home","text":"julia> versioninfo()\nJulia Version 1.8.0-beta2\nCommit b655b2c008 (2022-03-21 12:50 UTC)\nPlatform Info:\n  OS: macOS (arm64-apple-darwin21.3.0)\n  CPU: 10 × Apple M1 Max\n  WORD_SIZE: 64\n  LIBM: libopenlibm\n  LLVM: libLLVM-13.0.1 (ORCJIT, apple-m1)\n  Threads: 8 on 8 virtual cores","category":"page"},{"location":"","page":"Home","title":"Home","text":"Benchmark Results","category":"page"},{"location":"","page":"Home","title":"Home","text":"using CSV, DataFrames, StatsPlots, SubpixelRegistration # hide\nbenchdir = joinpath(dirname(pathof(SubpixelRegistration)), \"..\", \"bench\") # hide\nresults = DataFrame(CSV.File(joinpath(benchdir, \"benchmark_results.csv\"))) # hide\ngroups = groupby(results, :upsample_factor) # hide\nplot(xlabel=\"image size\", ylabel=\"time (s)\") # hide\nshapes = [:o :dtriangle :diamond] # hide\nfor (g, shape) in zip(groups, shapes) # hide\n    @df g plot!(:size, [:time_py :time_jl]; c=[1 2], shape, label=\"\") # hide\nend # hide\nplot!(yscale=:log10) # hide\n# create faux-legends # hide\nbbox_ = bbox(0, 0, 1, 1, :bottom, :left) # hide\nplot!([1 2]; c=[1 2], label=[\"scikit-image\" \"SubpixelRegistration.jl\"], inset=(1, bbox_), # hide\n    bg=:transparent, border=:none, axes=false, sp=2, leg=:topleft, bgcolorlegend=:white) # hide\nups = hcat((string(k.upsample_factor) for k in keys(groups))...) # hide\nscatter!([0 0 0]; shape=shapes, c=:black, alpha=0.4, label=ups, inset=(1, bbox_), # hide\n    bg=:transparent, border=:none, axes=false, sp=3, ylim=(1, 2), # hide\n    legtitle=\"upsample\\nfactor\", leg=:bottomright, legendtitlefontsize=9, bgcolorlegend=:white) # hide\n","category":"page"},{"location":"#Contributing-and-Support","page":"Home","title":"Contributing and Support","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"If you would like to contribute, feel free to open a pull request. If you want to discuss something before contributing, head over to discussions and join or open a new topic. If you're having problems with something, please open an issue.","category":"page"}]
}
