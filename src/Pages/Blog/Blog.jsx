import './Blog.css';

const Blog = () => {
    return (
        <div>
            {/* Banner */}
            <div>
                <div className="banner w-full bg-repeat-x bg-center h-48">
                    <div className="absolute flex items-center h-48 w-full py-auto bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <h1 className='font-extrabold text-3xl lg:text-5xl flex mx-auto text-center text-white'>BLOGS</h1>
                    </div>
                </div>
            </div>
            {/* Q/A */}
            <div className='my-16 lg:mx-24'>
                {/* Question-1 */}
                <div className="chat chat-start">
                    <div className="chat-bubble"><span className='font-semibold text-lg'>Question-1:</span> <br /> What is an access token and refresh token? <br /> How do they work and where should we store them on the client-side?</div>
                </div>
                <div className="chat chat-end ">
                    <div className="text-justify chat-bubble bg-[#bae6fd] text-black"><span className='font-semibold text-lg'>Answer:</span> <br /><span className='font-semibold'>Access Token:</span>
                        Issued by authentication server upon successful authentication
                        Used to authorize and authenticate subsequent requests
                        Short-lived and expires after a period of time <br />
                        <span className='font-semibold'>Refresh Token:</span>
                        Also issued during authentication process
                        Longer expiration time compared to access tokens
                        Used to obtain a new access token without reauthentication <br />
                        <span className='font-semibold'>Storage on Client-side:</span>

                        Access tokens: Stored securely (in memory or OS/framework storage) <br />
                        Refresh tokens: Stored securely (encrypted cookies, secure storage mechanisms)
                        Use measures to protect tokens from unauthorized access
                        Implement proper security measures when handling tokens to minimize risks.</div>
                </div>
                {/* Question-2 */}
                <div className="chat chat-start">
                    <div className="chat-bubble"><span className='font-semibold text-lg'>Question-2:</span> <br /> Compare SQL and NoSQL databases?</div>
                </div>
                <div className="chat chat-end ">
                    <div className="text-justify chat-bubble bg-[#bae6fd] text-black"><span className='font-semibold text-lg'>Answer:</span> <br />Here`s a concise comparison of SQL and NoSQL databases:
                        <br />
                        <span className='font-semibold'>SQL Databases:</span>
                        Structured, tabular data model
                        Rigid schemas and SQL query language
                        Strong consistency, ACID properties
                        Vertical scalability, replication support <br />
                        <span className='font-semibold'>NoSQL Databases:</span>
                        Flexible data models (key-value, document, columnar, graph)
                        Dynamic or schema-less nature
                        Various query languages/APIs
                        Horizontal scalability, high performance
                        Choosing between SQL and NoSQL depends on data structure, query complexity, consistency needs, and scalability requirements.</div>
                </div>
                {/* Question-3 */}
                <div className="chat chat-start">
                    <div className="chat-bubble"><span className='font-semibold text-lg'>Question-3:</span> <br /> What is express js? <br /> What is Nest JS?</div>
                </div>
                <div className="chat chat-end ">
                    <div className="text-justify chat-bubble bg-[#bae6fd] text-black"><span className='font-semibold text-lg'>Answer:</span> <br />
                        <span className='font-semibold'>Express.js:</span>
                        Minimalistic and flexible web application framework for Node.js
                        Unopinionated approach, providing control over application structure
                        Middleware-based architecture for handling requests and responses
                        Extensible with a large ecosystem of middleware and plugins <br />
                        <span className='font-semibold'>NestJS:</span>
                        Progressive, opinionated framework for scalable Node.js applications
                        Inspired by Angular`s architecture and design patterns
                        Offers dependency injection, decorators, powerful routing, and middleware support
                        Promotes modular and structured development with TypeScript
                        Express.js focuses on flexibility, while NestJS provides structure and Angular-inspired features. The choice depends on project needs and preferred development style.</div>
                </div>
                {/* Question-4 */}
                <div className="chat chat-start">
                    <div className="chat-bubble"><span className='font-semibold text-lg'>Question-4:</span> <br /> What is MongoDB aggregate and how does it work</div>
                </div>
                <div className="chat chat-end ">
                    <div className="text-justify chat-bubble bg-[#bae6fd] text-black"><span className='font-semibold text-lg'>Answer:</span> <br />
                        MongoDB`s aggregate operation processes and analyzes data in a collection.
                        It uses a pipeline of stages to perform operations on documents.
                        Stages can include matching, transformation, and aggregation.
                        The output can be returned as a cursor or stored in a new collection.
                        It provides powerful capabilities for data analysis and manipulation in MongoDB.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;