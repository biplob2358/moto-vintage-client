import React from 'react';
import img from '../../../Assets/Banner/comparison-angular-react-vue.png'
import useTitle from '../../../hooks/useTitle';

const Blogs = () => {
    useTitle("Blog");
    return (
        <div className='container mx-auto'>
            <div className="card mb-4 w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Q1.What are the different ways to manage a state in a React application?</h2>
                    <p>
                        <span className='font-bold'>Local (UI) state –</span> Local state is data we manage in one or another component.

                        Local state is most often managed in React using the useState hook.

                        For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.

                        <br />
                        <br />
                        <span className='font-bold'>Global (UI) state – </span> Global state is data we manage across multiple components.

                        Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.

                        A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application.

                        Sometimes state we think should be local might become global.
                        <br />
                        <br />

                        <span className='font-bold'>Server state –</span> Data that comes from an external server that must be integrated with our UI state.

                        Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.

                        There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state.

                        Fortunately there are tools such as SWR and React Query that make managing server state much easier.
                        <br />
                        <br />
                        <span className='font-bold'>URL state – </span> Data that exists on our URLs, including the pathname and query parameters.
                    </p>
                </div>
            </div>
            <div className="card mb-4 w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Q2.How does prototypical inheritance work?</h2>
                    <p>
                        When it comes to inheritance, JavaScript only has one construct: objects. Each object has a private property which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with null as its prototype
                    </p>
                </div>
            </div>
            <div className="card mb-4 w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Q3.What is a unit test? Why should we write unit tests?</h2>
                    <p>
                        A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.
                        <br />
                        <br />
                        The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages
                    </p>
                </div>
            </div>
            <div className="card mb-4 w-full bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">Q4.React vs. Angular vs. Vue?</h2>
                    <p>
                        <img src={img} alt="" />

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;