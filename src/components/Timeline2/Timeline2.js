import React from 'react';

import './Timeline.css';

const Timeline2 = props => {

    return (
        <div className="container">
            <div className="row">
                <div className="main-timeline">
                    <div className="timeline">
                        <div className="timeline-icon"></div>
                        <div className="timeline-content">
                            <span className="date">Mar 2014 - Till Date</span>
                            <h5 className="title">Application Development Senior Manager - VP, Citibank, N.A</h5>
                            <p className="description">
                                Lead matrix and direct project and development teams to collate, evaluate and prioritize projects
                                while overseeing/directing the software development team and mitigating conflicts within the different
                                stakeholder groups. Ensure sufficient processes and tools are in place to meet the business requirements
                                and customer satisfaction, meeting high-quality standards to achieve eminence and reliability in all aspects
                                of development in KYC projects. Plan and allocate project work, monitoring milestones
                                and development of quality standards. Actively oversaw implementation of in-house Java/J2EE based
                                CitiKYC Product’s workflow implementation, an innovative customer on-boarding system supporting all lines of business across the bank and its subsidiaries, with the application serving the needs of 93 different countries,
                                in which the system went live.
                            </p>
                        </div>
                    </div>

                    <div className="timeline">
                        <div className="timeline-icon"></div>
                        <div className="timeline-content">
                            <span className="date">2011 - 2014</span>
                            <h5 className="title">Application Development Manager - AVP, Citibank, N.A</h5>
                            <p className="description">
                                Managed the complete software development life cycle, including need assessment,
                                strategic management, and delivering quality technical/business software solutions. Accountable
                                for all technical deliverables, project plan, financials, projections, dependency tracking, resourcing,
                                and timescales for eCADD ( an in-house Citi Product) serving KYC needs of 90 different countries.
                            </p>
                        </div>
                    </div>

                    <div className="timeline">
                        <div className="timeline-icon"></div>
                        <div className="timeline-content">
                            <span className="date">2008 - 2011</span>
                            <h5 className="title">Senior Java/J2EE Developer, Contractor, Chubb Insurance </h5>
                            <p className="description">
                                Designed and developed Service layer between Java and Smalltalk using Java, MQ, XML
                                and persistence module to persist data into IBM Legacy Database.
                                Converted COBOL logic to Java API’s
                            </p>
                        </div>
                    </div>

                    <div className="timeline">
                        <div className="timeline-icon"></div>
                        <div className="timeline-content">
                            <span className="date">2005 - 2006</span>
                            <h5 className="title">Senior Systems Analyst, Nucleus Software, Noida & Singapore</h5>
                            <p className="description">
                                Responsible for Interface migration from CRMS system to Citibank Credit Engine for 12 countries.
                                Coordinated with Citibank Project Managers across 10 applications on project requirement and implementation
                                and Citibank UK Credit Engine team to set up new interfaces with customer onboarding platforms.
                            </p>
                        </div>
                    </div>

                    <div className="timeline">
                        <div className="timeline-icon"></div>
                        <div className="timeline-content">
                            <span className="date">2000 - 2004</span>
                            <h5 className="title">Senior Software Engineer, Nuclues Software Solutions, Delhi & Singapore</h5>
                            <p className="description">
                                Led development effort, including coding, testing, debugging and documenting programs for
                                complex or large projects Developed LATAM / CEEMEA region-specific requirements.
                                Prepared specifications and user requirements thereby translating detailed design into
                                computer software.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Timeline2;
