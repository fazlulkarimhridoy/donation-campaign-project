
const Banner = () => {
    return (
        <div>
            <div className="hero h-[350px]">
                
                <div className="hero-content text-center text-neutral-content">
                    <div>
                        <h1 className="mb-10 text-4xl text-black font-bold">I Grow By Helping People In Need</h1>
                        <div className="join">
                            <div>
                                <div>
                                    <input className="w-[350px] input input-bordered join-item" placeholder="Search here" />
                                </div>
                            </div>
                            <div className="indicator">
                                <button className="btn bg-red-500 text-white join-item">Search</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;