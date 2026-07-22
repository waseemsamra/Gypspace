import React from 'react'

const Contact = () => {
  return (
    <section className="py-2xl bg-surface-container" id="contact">
      <div className="max-w-container-max mx-auto px-gutter">
        <div className="bg-white rounded-xl border border-outline-variant shadow-sm overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-primary text-on-primary p-xl">
            <h2 className="font-headline-md text-headline-md mb-lg">
              Get in Touch
            </h2>
            <p className="font-body-md opacity-80 mb-xl">
              Our technical consultants are available to discuss your next
              project&apos;s specific requirements.
            </p>
            <div className="space-y-lg">
              <div className="flex items-center gap-md">
                <span className="material-symbols-outlined">call</span>
                <span className="font-mono-utility">+971 4 000 0000</span>
              </div>
              <div className="flex items-center gap-md">
                <span className="material-symbols-outlined">mail</span>
                <span className="font-mono-utility">projects@gypspace.ae</span>
              </div>
              <div className="flex items-center gap-md">
                <span className="material-symbols-outlined">location_on</span>
                <span className="font-body-sm">
                  Tech District, Business Bay, Dubai, UAE
                </span>
              </div>
            </div>
            <div className="mt-2xl pt-2xl border-t border-white/20">
              <p className="font-label-md text-label-md mb-md">
                Follow Our Progress
              </p>
              <div className="flex gap-md">
                <span className="material-symbols-outlined cursor-pointer hover:opacity-70">
                  share
                </span>
                <span className="material-symbols-outlined cursor-pointer hover:opacity-70">
                  corporate_fare
                </span>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 p-xl">
            <form className="grid grid-cols-1 sm:grid-cols-2 gap-lg">
              <div className="flex flex-col gap-xs">
                <label className="font-label-md text-label-md text-on-surface-variant">
                  FULL NAME
                </label>
                <input
                  className="w-full bg-white border border-outline-variant rounded-lg p-md focus:border-primary focus:ring-0 transition-all outline-none"
                  placeholder="John Doe"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-xs">
                <label className="font-label-md text-label-md text-on-surface-variant">
                  EMAIL ADDRESS
                </label>
                <input
                  className="w-full bg-white border border-outline-variant rounded-lg p-md focus:border-primary focus:ring-0 transition-all outline-none"
                  placeholder="j.doe@company.com"
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-xs sm:col-span-2">
                <label className="font-label-md text-label-md text-on-surface-variant">
                  SERVICE OF INTEREST
                </label>
                <select className="w-full bg-white border border-outline-variant rounded-lg p-md focus:border-primary focus:ring-0 transition-all outline-none appearance-none">
                  <option>Engineering Design</option>
                  <option>Project Management</option>
                  <option>Technical Consulting</option>
                </select>
              </div>
              <div className="flex flex-col gap-xs sm:col-span-2">
                <label className="font-label-md text-label-md text-on-surface-variant">
                  PROJECT BRIEF
                </label>
                <textarea
                  className="w-full bg-white border border-outline-variant rounded-lg p-md focus:border-primary focus:ring-0 transition-all outline-none resize-none"
                  placeholder="Describe your technical requirements..."
                  rows="4"
                />
              </div>
              <div className="sm:col-span-2 text-right">
                <button
                  className="bg-primary text-on-primary px-2xl py-md rounded-lg font-label-md text-label-md hover:bg-primary/90 transition-all inline-flex items-center gap-sm"
                  type="submit"
                >
                  Send Inquiry
                  <span className="material-symbols-outlined">send</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact