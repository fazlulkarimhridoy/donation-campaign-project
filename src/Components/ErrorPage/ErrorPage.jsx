import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex items-center justify-center h-[80vh]">
            <div className="relative flex w-96 flex-col rounded-xl bg-red-300 bg-clip-border text-white shadow-md">
                <div className="p-6">
                    <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-white antialiased">
                        Oops wrong page!
                    </h5>
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                        There is no page such this name. Go back to the home page and route for a valid one.
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <Link to={'/'}>
                        <button
                            className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-light="true"
                        >
                            Go to Home
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;