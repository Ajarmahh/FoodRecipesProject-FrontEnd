function Home(){
    return(
        <div className="p-20  mx-60 my-40 bg-white bg-opacity-90 rounded-3xl">
            <h1 className="font-sans font-bold text-yellow-500 italic text-7xl">Ready to Cook? Discover Recipes </h1>
               <h1 className="text-black text-4xl font-thin mt-6">Let AI Be Your Kitchen Assistant!</h1>
            <p className="font-normal p-3 m-5 text-2xl text-gray-900">
               Browse through our curated recipes, or simply ask our AI Chef about any dish you’re 
               curious about.
            </p>

            <p className="font-light m-4 text-2xl text-gray-900">
               Have ingredients but no idea what to make? Tell our AI what’s in your fridge,
               and it will suggest the perfect meal whether you’re a beginner or a pro!
            </p>
            <section className="mt-10 bg-white dark:bg-yellow-500 text-slate-800 rounded-full">
                <div className="flex  py-8 mx-auto text-center ">
                    <figure className="max-w-screen-md mx-auto">
                        <svg className="h-12 mx-auto mb-3 text-gray-400 dark:text-white" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor"/>
                        </svg> 
                        <blockquote>
                            <p className="text-2xl font-medium text-gray-900 dark:text-white">"The AI is amazing! It helps me find recipes based on what I have at home, making cooking so much easier. I love how I can always get fresh ideas and tips whenever I'm in the kitchen!"</p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <img className="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" />
                            <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                                <div className="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</div>
                                <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-700">NOT CEO at Google</div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </section>
        </div>
    )
};

export default Home