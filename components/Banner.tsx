

function Banner() {
    return (
        <div className="flex flex-col lg:flex-row lg:space-x-5 justify-between font-bold px-10 py-5 mb-10 ">
            <div>
                <h1 className="text-7xl">Pre Content Banner</h1>
                <h2 className="mt-5 md:mt-0">Subheading for precontent banner</h2>
            </div>
            <p className="mt-5 md:mt-2 text-grey-400 max-w-sm">
                New blog design | Improved flex layout | Feature #3
            </p>
        </div>
    )
} 

export default Banner;