/* eslint-disable react/no-unknown-property */
import { Link, NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-white border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <NavLink to="/" className="flex items-center">
                            <img
                                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                className="mr-3 h-16"
                                alt="Logo"
                            />
                        </NavLink>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Resources</h2>
                            <ul className="text-gray-500 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        About
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>

                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">Follow Me</h2>

                            <ul className="text-gray-500 font-medium text-center">
                                <li className="mb-4">
                                    <Link
                                        to="https://github.com/love00245"
                                        target="blank"
                                    >
                                        Github
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.linkedin.com/in/lovepreet-singh-71a21516a/" className="hover:underline" target="blank">
                                        LinkedIn
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="flex justify-end">
                    <span className="text-gray-500">
                        © 2024 Lovepreet Singh. All Rights Reserved.
                    </span>
                </div>

            </div>
        </footer>
    );
}
