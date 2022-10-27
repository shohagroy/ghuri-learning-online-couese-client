import React from "react";

const Blog = () => {
  return (
    <div className="bg-[#0f256e]">
      <div className="max-w-[1200px] py-[10vh] md:py-28 mx-auto ">
        <section className="bg-gray-100 text-gray-100">
          <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
            <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900">
              <img
                src="https://nordicapis.com/wp-content/uploads/What-is-CORS-.png"
                alt="What is Cors"
                className="w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500"
              />
              <div className="p-6 space-y-2 lg:col-span-5">
                <h3 className="text-2xl font-semibold sm:text-4xl ">
                  What is Cors ?
                </h3>
                <p>
                  Cross-origin resource sharing (CORS) is a browser mechanism
                  which enables controlled access to resources located outside
                  of a given domain. It extends and adds flexibility to the
                  same-origin policy (SOP). However, it also provides potential
                  for cross-domain attacks, if a website's CORS policy is poorly
                  configured and implemented. CORS is not a protection against
                  cross-origin attacks such as cross-site request forgery
                  (CSRF).
                </p>
              </div>
            </div>
          </div>

          <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
            <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900">
              <img
                src="https://www.tristatetechnology.com/tristate-website/blog/wp-content/uploads/2019/06/firebase11.jpg"
                alt="What is Cors"
                className="md:hidden w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500"
              />
              <div className="p-6 space-y-2 flex-row-reverse lg:col-span-5">
                <h3 className="text-2xl font-semibold sm:text-4xl ">
                  Why are you using firebase?
                </h3>
                <p>
                  Firebase helps you develop high-quality apps, grow your user
                  base, and earn more money. Each feature works independently,
                  and they work even better together.
                </p>
                <p>
                  Google Analytics for Firebase allows you to track your users'
                  journey through realtime and custom reporting. As mentioned
                  previously, Firebase supports IOS, Android, Web, and Unity
                  products, allowing you to track your users across a wide range
                  of devices
                </p>
              </div>
              <img
                src="https://www.tristatetechnology.com/tristate-website/blog/wp-content/uploads/2019/06/firebase11.jpg"
                alt="What is Cors"
                className=" hidden md:block w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500"
              />
              <h3 className="text-2xl col-span-12 px-3 font-semibold sm:text-4xl">
                What other options do you have to implement authentication?
              </h3>
              <p className="col-span-12 px-3 pb-3">
                Authentication is used by a server when the server needs to know
                exactly who is accessing their information or site.
                Authentication is used by a client when the client needs to know
                that the server is system it claims to be. In authentication,
                the user or computer has to prove its identity to the server or
                client. Usually, authentication by a server entails the use of a
                user name and password. Other ways to authenticate can be
                through cards, retina scans, voice recognition, and
                fingerprints. Authentication by a client usually involves the
                server giving a certificate to the client in which a trusted
                third party such as Verisign or Thawte states that the server
                belongs to the entity (such as a bank) that the client expects
                it to. Authentication does not determine what tasks the
                individual can do or what files the individual can see.
                Authentication merely identifies and verifies who the person or
                system is.
              </p>
            </div>
          </div>

          <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
            <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900">
              <img
                src="https://i.ytimg.com/vi/M6iYyo25QZo/maxresdefault.jpg"
                alt="What is Cors"
                className="w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500"
              />
              <div className="p-6 space-y-2 lg:col-span-5">
                <h3 className="text-2xl font-semibold sm:text-4xl ">
                  How does the private route work?
                </h3>
                <p>
                  The private route component is used to protect selected pages
                  in a React app from unauthenticated users.
                </p>
                <p>
                  The private route component is similar to the public route,
                  the only change is that redirect URL and authenticate
                  condition. If the user is not authenticated he will be
                  redirected to the login page and the user can only access the
                  authenticated routes If he is authenticated (Logged in).
                </p>
              </div>
            </div>
          </div>

          <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
            <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-900">
              <img
                src="https://www.designveloper.com/wp-content/uploads/2019/12/what-is-node-js-and-how-does-it-work.png"
                alt="What is Cors"
                className="md:hidden w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500"
              />
              <div className="p-6 space-y-2 flex-row-reverse lg:col-span-5">
                <h3 className="text-2xl font-semibold sm:text-4xl ">
                  What is Node?
                </h3>
                <p>
                  Node. js is a JavaScript runtime environment that achieves low
                  latency and high throughput by taking a “non-blocking”
                  approach to serving requests. In other words, Node. js wastes
                  no time or resources on waiting for I/O requests to return.
                </p>

                <p>
                  Node. js is a cross-platform open-source runtime environment
                  to run web applications outside the client's browser. Node. js
                  allows rapid development, and it is scalable, with a vast
                  ecosystem of modules that make development easier.
                </p>
              </div>
              <img
                src="https://www.designveloper.com/wp-content/uploads/2019/12/what-is-node-js-and-how-does-it-work.png"
                alt="What is Cors"
                className=" hidden md:block w-full h-64 rounded sm:h-96 lg:col-span-7 bg-gray-500"
              />
              <h3 className="text-2xl col-span-12 px-3 font-semibold sm:text-4xl">
                How does Node work?
              </h3>
              <p className="col-span-12 px-3">
                It is a used as backend service where javascript works on the
                server-side of the application. This way javascript is used on
                both frontend and backend. Node. js runs on chrome v8 engine
                which converts javascript code into machine code, it is highly
                scalable, lightweight, fast, and data-intensive.
              </p>
              <p className="col-span-12 px-3 pb-3">
                Node allows developers to write JavaScript code that runs
                directly in a computer process itself instead of in a browser.
                Node can, therefore, be used to write server-side applications
                with access to the operating system, file system, and everything
                else required to build fully-functional applications.
                <br />
                js (Node) is not a framework nor a language but a run time open
                source development platform for executing JavaScript code
                server-side.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
