import React from 'react';

import './Timeline.css';

const timeline = props => {

    return (
        <div className="timeline">
            <div className="container left">
                <div className="content">
                    <h2>Citibank, N.A. </h2>
                    <h3>Application Development Senior Manager - VP</h3>
                    <h3>2014 - Till Date</h3>
                    <p>Lead matrix and direct project and development teams to collate, evaluate and prioritize projects
                        while overseeing/directing the software development team and mitigating conflicts within the different
                        stakeholder groups. Ensure sufficient processes and tools are in place to meet the business requirements
                        and customer satisfaction, meeting high-quality standards to achieve eminence and reliability in all aspects
                        of development in KYC projects. Plan and allocate project work, monitoring milestones
                        and development of quality standards. Actively oversaw implementation of in-house Java/J2EE based
                        CitiKYC Product’s workflow implementation, an innovative customer on-boarding system supporting all lines of business across the bank and its subsidiaries, with the application serving the needs of 93 different countries,
                        in which the system went live.</p>
                </div>
            </div>
            <div className="container right">
                <div className="content">
                    <h2>Citibank, N.A. Singapore </h2>
                    <h3>Application Development Manager - AVP</h3>
                    <h3>2011 - 2014</h3>
                    <p>Managed the complete software development life cycle, including need assessment,
                        strategic management, and delivering quality technical/business software solutions. Accountable
                        for all technical deliverables, project plan, financials, projections, dependency tracking, resourcing,
                        and timescales for eCADD ( an in-house Citi Product) serving KYC needs of 90 different countries.
                    </p>
                </div>
            </div>
            <div className="container left">
                <div className="content">
                    <h2>Chubb Insurance, NJ </h2>
                    <h3>Senior Java/J2EE Developer</h3>
                    <h3>2008 - 2011</h3>
                    <p>Designed and developed Service layer between Java and Smalltalk using Java, MQ, XML
                        and persistence module to persist data into IBM Legacy Database.
                        Converted COBOL logic to Java API’s
                    </p>
                </div>
            </div>
            <div className="container right">
                <div className="content">
                    <h2>Nucleus Software Solution Pte, Singapore </h2>
                    <h3>Senior Systems Analyst</h3>
                    <h3>2006 - 2007</h3>
                    <p> Responsible for Interface migration from CRMS system to Citibank Credit Engine for 12 countries.
                        Coordinated with Citibank Project Managers across 10 applications on project requirement and implementation
                        and Citibank UK Credit Engine team to set up new interfaces with customer onboarding platforms.
                    </p>
                </div>
            </div>
            <div className="container left">
                <div className="content">
                    <h2>Nucleus Software Solutions, Noida, India </h2>
                    <h3>Systems Analyst</h3>
                    <h3>2005 - 2006</h3>
                    <p> Technical Architect for module within COTS solution (Nucleus FInnOne Banking Suite).
                        Efficiently managed entire day-to-day activities covering wide functional areas include designing
                        and developing the workflow program, debugging and troubleshooting of the application.
                    </p>
                </div>
            </div>
            <div className="container right">
                <div className="content">
                    <h2>Nucleus Software Solutions,India/Singapore </h2>
                    <h3>Senior Software Engineer</h3>
                    <h3>2000 - 2004</h3>
                    <p> Led development effort, including coding, testing, debugging and documenting programs for
                        complex or large projects Developed LATAM / CEEMEA region-specific requirements.
                        Prepared specifications and user requirements thereby translating detailed design into
                        computer software.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default timeline;
