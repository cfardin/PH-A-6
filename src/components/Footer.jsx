import { FaYoutube, FaFacebookF, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-[#0f172a] text-gray-400 px-6 pt-30 pb-20">
            <div className="w-10/12 m-auto">

                {/* top part */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-10">

                    <div className="md:col-span-1">
                        <h2 className="text-white text-2xl font-bold mb-3">DigiTools</h2>
                        <p className="text-sm leading-relaxed">
                            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-4">Product</h4>
                        <ul className="space-y-2 text-sm">
                            <li>Features</li>
                            <li>Pricing</li>
                            <li>Templates</li>
                            <li>Integrations</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm">
                            <li>About</li>
                            <li>Blog</li>
                            <li>Careers</li>
                            <li>Press</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Resources</h4>
                        <ul className="space-y-2 text-sm">
                            <li>Documentation</li>
                            <li>Help Center</li>
                            <li>Community</li>
                            <li>Contact</li>
                        </ul>
                    </div>

                    {/* social */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Social Links</h4>
                        <div className="flex gap-3">
                            <div className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-purple-600 transition-colors cursor-pointer">
                                <FaYoutube />
                            </div>
                            <div className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-purple-600 transition-colors cursor-pointer">
                                <FaFacebookF />
                            </div>
                            <div className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center text-white hover:bg-purple-600 transition-colors cursor-pointer">
                                <FaXTwitter />
                            </div>
                        </div>
                    </div>
                </div>





                <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-4 border-t border-gray-700 pt-6 ">
                    <p>© 2026 Digitools. All rights reserved.</p>
                    <div className="flex gap-6">
                        <span className="hover:text-white cursor-pointer">Privacy Policy</span>
                        <span className="hover:text-white cursor-pointer">Terms of Service</span>
                        <span className="hover:text-white cursor-pointer">Cookies</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;