import React from 'react';

const Blog = () => {
  return (
    <section className='container mx-auto mt-3'>
      <h2 className='text-center text-2xl font-semibold text-light-gray'>---------- Blog ----------</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-y-10 gap-x-14'>
        <div>
          <h3 className='text-green text-lg font-semibold tracking-wide'>Difference between SQL and NoSQL?</h3>
          <p className='text-light-gray'>Most SQL databases can be scaled vertically, by increasing the processing power of existing hardware. NoSQL databases use a master-slave architecture which scales better horizontally, with additional servers or nodes. SQL database schemata always represent relational, tabular data, with rules about consistency and integrity. They contain tables with columns (attributes) and rows (records), and keys have constrained logical relationships.</p>
        </div>
        <div>
          <h3 className='text-green text-lg font-semibold tracking-wide'>What is JWT, and how does it work?</h3>
          <p className='text-light-gray'>JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information. Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.</p>
        </div>
        <div>
          <h3 className='text-green text-lg font-semibold tracking-wide'>What is the difference between javascript and NodeJS?</h3>
          <p className='text-light-gray'>For executing JavaScript on the server, Node.js is a bridge, open-source Js runtime environment. JavaScript code can now execute outside of the browser, thanks to Node.js. Node.js has many components and is primarily used for web development. Javascript is a simple object-oriented programming language for building interactive HTML pages. JavaScript is also commonly used in the development of games and mobile applications. </p>
        </div>
        <div>
          <h3 className='text-green text-lg font-semibold tracking-wide'>How does NodeJS handle multiple requests at the same time?</h3>
          <p className='text-light-gray'>We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded. If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
        </div>
      </div>
    </section>
  );
};

export default Blog;