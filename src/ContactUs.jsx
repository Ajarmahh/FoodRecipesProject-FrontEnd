import { useNavigate } from "react-router-dom";

function ContactUs() {
    const navigate = useNavigate()
    return (
        <>
        <div className="w-full flex mt-32 flex-col gap-5 justify-center justify-items-center items-center">
        <div
            id="drawer-contact"
            className="lo bottom-0 left-0 z-40 w-1/3 p-4 m-2 overflow-y-auto bg-white dark:bg-gray-800"
            tabIndex="-1"
            aria-labelledby="drawer-contact-label"
        >
            <h5
                id="drawer-label"
                className="inline-flex items-center mb-6 text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
            >
                <svg
                    className="w-4 h-4 me-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 16"
                >
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
                Contact us
            </h5>
            <form className="mb-6">
                <div className="mb-6">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@example.com"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="subject"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Let us know how we can help you"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your message
                    </label>
                    <textarea
                        id="message"
                        rows="4"
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Your message..."
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 block"
                >
                    Send message
                </button>
            </form>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <a href="#" className="hover:underline">
                    info@MasterKitchen.com
                </a>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
                <a href="#" className="hover:underline">
                    +49 163 xxx xxx
                </a>
            </p>

        </div>
       </div> 

       <div className="block m-11 gap-9 size-1/2 ml-80">
        <div className="mb-6 items-center bg-gray-50 bg-opacity-100 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="min-w-full rounded-lg sm:rounded-none sm:rounded-l-lg" src="../public/images/avatar.jpg" alt="Abdallah Avatar"/>
            </a>
            <div className="p-5 px-16">
                <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    <a href="#">Abdallah Al Sawae'er</a>
                </h3>
                <span className="text-gray-500 dark:text-gray-400">Full Stack developer</span>
                <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">Hey, I’m the guy who created this! Feel free to contact me with any suggestions or problems you face.</p>
                <ul className="flex space-x-4 sm:mt-0">
                    <li>
                        <a href="https://www.linkedin.com/in/abdallah-al-sawae-er-1104b0219/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M20 0a4 4 0 0 1 4 4v16a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h16zM8.95 9.4H6.16v8.1h2.8V9.4zm6.84-.19c-1.32 0-2 .63-2.38 1.16l-.13.18V9.4h-2.79l.01.49V17.5h2.78v-4.52a1.52 1.52 0 0 1 1.52-1.64c.96 0 1.37.66 1.41 1.66v4.5H19v-4.64c0-2.49-1.37-3.65-3.2-3.65zM7.58 5.5C6.62 5.5 6 6.1 6 6.9c0 .73.54 1.32 1.38 1.4h.18c.97 0 1.57-.62 1.57-1.4-.01-.8-.6-1.4-1.55-1.4z" clip-rule="evenodd" /></svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/Ajarmahh" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" /></svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/ab.ajarmah/" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" path d="M12 0c6.6274 0 12 5.3726 12 12s-5.3726 12-12 12S0 18.6274 0 12 5.3726 0 12 0zm3.115 4.5h-6.23c-2.5536 0-4.281 1.6524-4.3805 4.1552L4.5 8.8851v6.1996c0 1.3004.4234 2.4193 1.2702 3.2359.7582.73 1.751 1.1212 2.8818 1.1734l.2633.006h6.1694c1.3004 0 2.389-.4234 3.1754-1.1794.762-.734 1.1817-1.7576 1.2343-2.948l.0056-.2577V8.8851c0-1.2702-.4234-2.3589-1.2097-3.1452-.7338-.762-1.7575-1.1817-2.9234-1.2343l-.252-.0056zM8.9152 5.8911h6.2299c.9072 0 1.6633.2722 2.2076.8166.4713.499.7647 1.1758.8103 1.9607l.0063.2167v6.2298c0 .9375-.3327 1.6936-.877 2.2077-.499.4713-1.176.7392-1.984.7806l-.2237.0057H8.9153c-.9072 0-1.6633-.2722-2.2076-.7863-.499-.499-.7693-1.1759-.8109-2.0073l-.0057-.2306V8.885c0-.9073.2722-1.6633.8166-2.2077.4712-.4713 1.1712-.7392 1.9834-.7806l.2242-.0057h6.2299-6.2299zM12 8.0988c-2.117 0-3.871 1.7238-3.871 3.871A3.8591 3.8591 0 0 0 12 15.8408c2.1472 0 3.871-1.7541 3.871-3.871 0-2.117-1.754-3.871-3.871-3.871zm0 1.3911c1.3609 0 2.4798 1.119 2.4798 2.4799 0 1.3608-1.119 2.4798-2.4798 2.4798-1.3609 0-2.4798-1.119-2.4798-2.4798 0-1.361 1.119-2.4799 2.4798-2.4799zm4.0222-2.3589a.877.877 0 1 0 0 1.754.877.877 0 0 0 0-1.754z" clip-rule="evenodd" /></svg>
                        </a>
                    </li>
                </ul>
            </div>
        </div>  

        </div>  

         <button onClick={()=> navigate(-1)} className="relative inline-flex items-center justify-center w-1/3 p-0.5 mb-11 mt-10 me-2 overflow-hidden text-sm font-medium text-gray-200 rounded-lg group bg-gradient-to-br hover:from-purple-600 hover:to-blue-500 hover:group-hover:from-purple-600 hover:group-hover:to-blue-500 hover:text-white hover:dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 transition-all ease-in duration-75 bg-white dark:bg-gray-800 group-hover:bg-opacity-0">
            <span className="relative px-5 py-2.5">
            Back
            </span>
        </button>
       </>  
    );
}

export default ContactUs;
