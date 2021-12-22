import React from 'react';

const Faq = () => {
    return (
        <div>
            <section class="container mt-5 text-center">
            <h1 class="my-5">Frequently Asked <span class="text-info"> Questions</span></h1>
            <div class="row">
                <div class="col-12 col-lg-6">
                    <img class="d-block w-100 pt-5" src="https://i.ibb.co/nzdQb2B/class1.jpg" alt=""/>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="accordion" id="accordionPanelsStayOpenExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                    aria-controls="panelsStayOpen-collapseOne">
                                    <p class="fw-bold">
                                        What are the most important things I should
                                        know about riding a bike?</p>
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show"
                                aria-labelledby="panelsStayOpen-headingOne">
                                <div class="accordion-body">
                                    <p>
                                        Safety First! Always obey the rules of the road. Obey all traffic signals,
                                        signs,
                                        and laws. Get in the mindset of “driving” your bike—not just “riding” your bike.
                                        This will help you be a more focused and legally compliant bike rider.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapseTwo">
                                    <p class="fw-bold">
                                        How can I tell if my helmet is old and I need a
                                        new one?</p>
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingTwo">
                                <div class="accordion-body">
                                    <p>
                                        Bear in mind that if the helmet did its job most people would tell you that they
                                        did
                                        not even hit their head, or did not hit their head that hard. And the thin
                                        shells on
                                        most helmets now tend to hide any dents in the foam. But if you can see marks on
                                        the
                                        shell or measure any foam crush at all, replace the helmet.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapseThree">
                                    <p class="fw-bold">
                                        My bike has been in storage is it safe to ride?
                                    </p>
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingThree">
                                <div class="accordion-body">
                                    <p>
                                        Things are finally starting to warm up and it’s time to get your motorcycle out
                                        of
                                        storage and ready for the riding season. If you’re anything like us you’ve been
                                        chomping at the bit to get your bike out and go for a long ride. At the first
                                        inclination of warm weather you just want to get out and go, but it’s important
                                        to
                                        make sure your bike is as ready to go as you are. This article will give you a
                                        few
                                        tips and pointers to help ensure your bike is ready to go when the warm weather
                                        hits.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingfour">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapsefour" aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapsefour">
                                    <p class="fw-bold">
                                        What rules should I follow when riding my bike?</p>
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapsefour" class="accordion-collapse collapse"
                                aria-labelledby="panelsStayOpen-headingfour">
                                <div class="accordion-body">
                                    <p>
                                        Be visible at all times. - Wear bright and visible clothes. Reflective stripes
                                        ads
                                        viability. Always stay out of blind zones. Alert other drivers before entering
                                        their
                                        blind zone.
                                        Be predictable. - Others on the road must be able to predict your next move.
                                        Give
                                        proper signals before changing a lane or taking deviation.
                                        Everyone in the road is dumb and partially blind. - Well, just imagine so and be
                                        prepared for an unexpected turn or braking.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Faq;