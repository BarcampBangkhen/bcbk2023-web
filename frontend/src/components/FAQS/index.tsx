import "flowbite";

export default function FAQS() {
  return (
    <div className='container max-w-7xl mx-auto mt-4 md:mt-16 border border-black'>

      <div className="border border-black text-center mb-16">
        <h2 className="font-medium text-5xl text-Falu100">FAQS</h2>
        <p className=" font-normal text-2xl text-Falu70">Frequently Asked Questions</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div id="accordion-collapse" data-accordion="collapse">
          
          <div className="mb-5">
            <h2 id="accordion-collapse-heading-1" className=" drop-shadow-lg">
              <button type="button" className=" bg-Blond20 flex items-center justify-between w-full p-5 font-medium border border-b-0 border-gray-200 rounded-xl hover:bg-gray-50" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit</span>
                <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
            </h2>
            <div id="accordion-collapse-body-1" className="hidden bg-Blond100 rounded-b-lg" aria-labelledby="accordion-collapse-heading-1">
              <div className="p-3 font-light border-t-none border-x border-b border-Neutral01 text-Neutral03 rounded-b-lg">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta mollitia porro, enim sit sequi voluptates impedit molestias cum veritatis placeat error amet commodi similique autem nam laboriosam delectus, consequatur doloremque!</p>
              </div>
            </div>
          </div>
          
          <div className="mt-5">
            <h2 id="accordion-collapse-heading-2" className=" drop-shadow-lg">
              <button type="button" className=" bg-Blond20 flex items-center justify-between w-full p-5 font-medium text-left text-black border border-b-0 border-gray-200 rounded-xl hover:bg-gray-50" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit</span>
                <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
            </h2>
            <div id="accordion-collapse-body-2" className="hidden bg-Blond100 rounded-b-lg" aria-labelledby="accordion-collapse-heading-1">
              <div className="p-3 font-light border-t-none border-x border-b border-Neutral01 text-Neutral03 rounded-b-lg">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta mollitia porro, enim sit sequi voluptates impedit molestias cum veritatis placeat error amet commodi similique autem nam laboriosam delectus, consequatur doloremque!</p>
              </div>
            </div>
          </div>
          
          <div className="mt-5">
            <h2 id="accordion-collapse-heading-3" className=" drop-shadow-lg">
              <button type="button" className=" bg-Blond20 flex items-center justify-between w-full p-5 font-medium text-left text-black border border-b-0 border-gray-200 rounded-xl hover:bg-gray-50" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit</span>
                <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
            </h2>
            <div id="accordion-collapse-body-3" className="hidden bg-Blond100 rounded-b-lg" aria-labelledby="accordion-collapse-heading-1">
              <div className="p-3 font-light border-t-none border-x border-b border-Neutral01 text-Neutral03 rounded-b-lg">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta mollitia porro, enim sit sequi voluptates impedit molestias cum veritatis placeat error amet commodi similique autem nam laboriosam delectus, consequatur doloremque!</p>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <h2 id="accordion-collapse-heading-3" className=" drop-shadow-lg">
              <button type="button" className=" bg-Blond20 flex items-center justify-between w-full p-5 font-medium text-left text-black border border-b-0 border-gray-200 rounded-xl hover:bg-gray-50" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit</span>
                <svg data-accordion-icon className="w-6 h-6 rotate-180 shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
            </h2>
            <div id="accordion-collapse-body-3" className="hidden bg-Blond100 rounded-b-lg" aria-labelledby="accordion-collapse-heading-1">
              <div className="p-3 font-light border-t-none border-x border-b border-Neutral01 text-Neutral03 rounded-b-lg">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta mollitia porro, enim sit sequi voluptates impedit molestias cum veritatis placeat error amet commodi similique autem nam laboriosam delectus, consequatur doloremque!</p>
              </div>
            </div>
          </div>
          
        </div>
      </div>


      <div className="border border-black text-center mt-10">
        <h2 className="font-normal text-xl text-Neutral04">Still have a question ?</h2>
        <button
          type="button"
          className="py-2 px-6 mt-3 text-Falu100 text-xl font-medium border border-Falu100 rounded"
        >
          Ask a question
        </button>
      </div>
    </div>
  )
}
