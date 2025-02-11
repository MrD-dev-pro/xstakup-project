
import './module.css';
import { useState } from 'react';
import React from 'react';

function Privacy() {
    const[isIntroVisible, setIsIntroVisible] = useState(false);
    const[isDefVisible, setIsDefVisible] = useState(false);
    const[isConVisible, setIsConVisible] = useState(false);
    const[isPerVisible, setIsPerVisible] = useState(false);
    const[isAccVisible, setIsAccVisible] = useState(false);
    const[isInfoVisible, setIsInfoVisible] = useState(false);
    const[isProVisible, setIsProVisible] = useState(false);
    const[isAgeVisible, setIsAgeVisible] = useState(false);
    const[isOurVisible, setIsOurVisible] = useState(false);
    const[isRitVisible, setIsRitVisible] = useState(false);
    const[isSurVisible, setIsSurVisible] = useState(false);
    const[isBorVisible, setIsBorVisible] = useState(false);
    const[isUseVisible, setIsUseVisible] = useState(false);
    const[isStoVisible, setIsStoVisible] = useState(false);
    const[isExcVisible, setIsExcVisible] = useState(false);
    const[isVioVisible, setIsVioVisible] = useState(false);
    const[isResVisible, setIsResVisible] = useState(false);
    const[isCotVisible, setIsCotVisible] = useState(false);
    const[isAmeVisible, setIsAmeVisible] = useState(false);
    
    //introduction
    const introDisplay = () => {
      setIsIntroVisible(prev => !prev);
    };
    //definition
    const defDisplay = () => {
      setIsDefVisible(prev => !prev);
    };
    //consent
    const conDisplay = () => {
      setIsConVisible(prev => !prev);
    };
    //personal infomation
    const perDisplay = () => {
      setIsPerVisible(prev => !prev);
    };
    //access
    const accDisplay = () => {
      setIsAccVisible(prev => !prev);
    };
    //information
    const infoDisplay = () => {
      setIsInfoVisible(prev => !prev);
    };
    //provision
    const proDisplay = () => {
      setIsProVisible(prev => !prev);
    };
    //age
    const ageDisplay = () => {
      setIsAgeVisible(prev => !prev);
    };
    //your information
    const ourDisplay = () => {
      setIsOurVisible(prev => !prev);
    };
    //your right
    const ritDisplay = () => {
      setIsRitVisible(prev => !prev);
    };
    //disclosures
    const surDisplay = () => {
      setIsSurVisible(prev => !prev);
    };
     //cross border
     const borDisplay = () => {
      setIsBorVisible(prev => !prev);
    };
    //cross border
    const useDisplay = () => {
      setIsUseVisible(prev => !prev);
    };
    //period of storage
    const stoDisplay = () => {
      setIsStoVisible(prev => !prev);
    };
    //exceptions
    const excDisplay = () => {
      setIsExcVisible(prev => !prev);
    };
     //violation
     const vioDisplay = () => {
      setIsVioVisible(prev => !prev);
    };
    //dispute
    const resDisplay = () => {
      setIsResVisible(prev => !prev);
    };
    //contact
    const cotDisplay = () => {
      setIsCotVisible(prev => !prev);
    };
     //amendment
     const ameDisplay = () => {
      setIsAmeVisible(prev => !prev);
    };

  return (
    <div className="min-h-screen w-screen bg-[#f6f8f8] p-0 m-0 overflow-x-hidden ">
      <div className='mb-[50px]'>
        <div className='policy_body'>
        <h1 className="policy">Privacy <span id="policy">Policy</span></h1>
        <p className='last'>Last updated: Jan, 2025</p>
        </div>
          {/* introduction */}
        <div className="container">
          <div className="card">
            <div className="intro_1" onClick={introDisplay}>
              <h2 className="intro1 ">Introduction</h2>
            </div> 


            {isIntroVisible &&(<div className="text">
              <p className='ml-10 mr-10 mb-10 leading-loose '>
              XStakUp, the flagship custom software development service of 
              FutureXTech (“XStakUp, “we”, “us”, “our”, “Company”), recognizes your privacy rights 
              as guaranteed under the 1999 Constitution of the Federal Republic of Nigeria, The Nigerian Data Protection Regulation 2019 issued by the National Information Technology Development Agency (NITDA), and the privacy provisions in other relevant laws applicable to our business in Nigeria. Thus, it is important to us as a law-abiding and transparency-driven organisation that your Personal Data is managed, processed and protected in accordance with the provisions of the applicable laws. In the course of our business and your engagement with us and third parties through our Platforms (this includes but are not limited to our websites, mobile applications (App), digital platforms including XstakUp Platform, physical operations/offices, amongst others), we may process your Personal Data, subject however to the terms of this policy. This Privacy Policy (“Policy”) therefore explains our privacy practices with respect to how we collect & process your Personal Data and describes your right as a user of our platform and services. This Policy applies to our lead generation forms and all related 
              services and tools regardless of how they are accessed or used.–
              </p >
              <p className='ml-10 mr-10 mb-10 leading-loose'>
              In this Privacy Policy, “we”, “us or “our” refers to XStakUp and its successors, agents and assigns, while “you”, “your” refers to you or any person who subscribes for, uses or authorizes the use of the Service.

              As a prospect, you accept this Privacy Policy when you sign up for, or use our products, services, content, technologies or functions offered on the Software/Application and all related sites and services (“Services”).
              </p>
              
              <p className='text-[20px] mt-[10px] mb-[10px] ml-10 leading-loose'>
              Our Privacy Policy explains our user’s privacy rights regarding:
              </p>
              <ul className='list-disc pl-5 tracking-wide ml-10 leading-loose'>
                  <li>
                  What information we collect
                  </li>
                  <li>
                  Why we collect such information
                  </li>
                  <li>
                  The use of such information
                  </li>
                  <li>
                  The storage, sharing and protection of such information
                  </li>
              </ul>
            </div>)}
          </div>
        </div>

                {/* definition */}
        <div className="container">
          <div className="card">
            <div className="intro_2" onClick={defDisplay}>
              <h2 className="intro2 ">Definition</h2>
            </div> 


            {isDefVisible &&(<div className="text">
              <p className='ml-10 mr-10 mb-10 leading-loose'>
                <h2>For the purpose of this Policy:</h2>
              Personal Data/Information means any information relating to you, including your name, identification number, location data, online identifier address, photo, email address, pins, passwords, licenses, bank details, posts on our Platforms, religion, date of birth, health, race/tribe, nationality, ethnicity, political views, trade union membership, criminal records, medical information, and other unique identifiers such as but not limited to Media Access Control (MAC) address, Internet Protocol (IP) address, International Mobile Equipment Identity (IMEI) number, Bank Verification Number (BVN), International Mobile Subscriber Identity (IMSI) number, Subscriber Identification Module (SIM) and others. It also includes factors specific to your physical, physiological, genetic, mental, economic, cultural or social identity.
              </p>
              <p className='ml-10 mr-10 mb-10 leading-loose'>
              Process/Processing means any operation or set of operations which is performed on your Personal Data or sets of Personal Data, whether or not by automated means, such as collection, recording, organisation, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction.
              </p>
              
            </div>)}
          </div>
        </div>

              {/* consent */}
        <div className="container">
          <div className="card">
            <div className="intro_3" onClick={conDisplay}>
              <h2 className="intro3 ">Consent</h2>
            </div> 

            {isConVisible &&(<div className="text">
              <p className='ml-10 mr-10 mb-10 leading-loose'>
              We kindly request that you carefully read through this Policy, particularly with respect to the processing of your Personal Data. If you proceed to use our Software/Application, it will be deemed that you have provided your express consent to the terms of this Policy.
              </p>
            </div>)}

          </div>
        </div>

              {/* collection of personal data */}
        <div className="container">
          <div className="card">
            <div className="intro_4" onClick={perDisplay}>
              <h2 className="intro4 ">Collection of Personal Data</h2>
            </div> 

            {isPerVisible &&(<div className="text">
              <p className='ml-10 mr-10 mb-10 leading-loose'>
              In the course of your engagement with us or with third parties through the form, we may collect your Personal Data in the following ways:
              </p>
              <ul className='list-disc pl-5 tracking-wide ml-10 leading-loose'>
                  <li>
                   Automatic Information Collection: We may automatically collect Information upon your engagement with us or our Software/Application through your computer, mobile phones, forms, documents made available to us and other access devices. The information sent includes, but is not limited to, data about our pages you access, Computer IP address, Device ID or unique identifier, device type, geo-location information; computer and connection information; mobile network information; statistics on page views; traffic to and from our Platform. We also collect anonymous information through our use of cookies and web beacons to customize your experience of our Platform and to improve account security. You may decline our use of cookies unless the same is essential for the use of our Platform. Please note however that refusal to permit the use of cookies may affect your use of or experience on our Platform.
                  </li>
                  <li>
                   Information from downloads: When you download or use our digital Software, we may receive information about your location and your mobile device, including a unique identifier for your device. We may use this information to provide you with location-based services, such as advertisements, search results, and other personalized content. You may disable your location in the settings menu of the device.
                  </li>
                  <li>
                   Physically or Digitally Provided Information: We may collect and process your information when you complete forms, questionnaires, surveys etc. We may also collect Information from the data you provide to us through documents, letters, e-mail, agreements, correspondence, Identity cards, passports, or through any other means by which you wilfully provide information to us.
                  </li>
                  <li>
                   Third Parties: We may also receive your information from third parties such as relatives, guardians, financial institutions, identity verification services, vendors, service providers etc.
                  </li>
                  <li>
                   Social Media: We also receive information through your engagements with us on social media sites (e.g., Facebook, Instagram, LinkedIn, Twitter, etc). These include but are not limited to your replies to our posts, your comments, enquiries, messages
                   to us, etc. We may also collect information from your public profile and updates on social media.
                  </li>
              </ul>
              
            </div>)}
          </div>
        </div>
              
              {/* accessing your personal information */}
        <div className="container">
          <div className="card">
            <div className="intro_5" onClick={accDisplay}>
              <h2 className="intro5 ">Accessing your Personal Information</h2>
            </div> 

            {isAccVisible &&(<div className="text">
              <p className='ml-10 mr-10 mb-10 leading-loose'>
              When accessing our Software, we may collect information about you and your interactions with the Services which we undertake to keep secure and confidential.

              We may offer you the ability to connect with our Software using a mobile device, either through a mobile application (App), computer, website, or by any other means. The provisions of this Privacy Policy apply to all computer devices.

              When you access, download or use our mobile application or access one of our mobile-optimized sites, we may receive information about your location and your mobile device, including a unique identifier for your device. We may use this information to provide you with location-based services, such as advertising, search results, and other personalized content. Most mobile devices allow you to control or disable location services in the device&apos;s settings menu. If you have questions about how to disable your device’s location services, we recommend you contact your mobile service carrier or the manufacturer of your particular device.
              </p>
            </div>)}

          </div>
        </div>
         
              {/* using your personal information */}
        <div className="container">
          <div className="card">
            <div className="intro_6" onClick={infoDisplay}>
              <h2 className="intro6 ">Using Your Personal Information</h2>
            </div> 

            {isInfoVisible &&(<div className="text">
              <p className='ml-10 mr-10 mb-10 leading-loose'>
              In the course of your engagements with us or through our Software/Platform, we collect personal information for various legal reasons, largely to enable us to personalize your experience and to provide a more efficient service to you. Some of the reasons we collect information are to:
              </p>
              <ul className='list-disc pl-5 tracking-wide ml-10 leading-loose'>
                  <li>
                   provide services and customer support;
                  </li>
                  <li>
                   improve and develop our product;
                  </li>
                  <li>
                    identify your needs for the provision or use of our services;
                  </li>
                  <li>
                    personalize our products and make recommendations;
                  </li>
                  <li>
                    advertise and market to you which includes sending promotional communications, target advertising and presenting you with relevant offers;
                  </li>
                  <li>
                    analyse our performance, meet our legal obligations, develop our workforce and do research;
                  </li>
                  <li>
                    create an account with us for the provision or use of our services;
                  </li>
                  <li>
                    communicate with you about your account with us and send you information or request feedback about features on our website and applications or changes to our policies;
                  </li>
                  <li>
                    send you periodic emails and updates pertaining to our products and services;
                  </li>
                  <li>
                    verify customers’ identity, including during account creation and password reset processes;
                  </li>
                  <li>
                    manage your account and provide you with efficient customer service;
                  </li>
                  <li>
                    detect, investigate and prevent activities that may violate our policies or be illegal;
                  </li>
                  <li>
                    manage risks, or detect, prevent, and/or remediate fraud, violation of policies and applicable user agreements or other potentially prohibited or illegal activities;
                  </li>
                  <li>
                    execute our contractual obligations to you;
                  </li>
                  <li>
                    improve our services and functionality by customizing user experience;
                  </li>
                  <li>
                    measure the performance of our services and improve their content and layout;
                  </li>
                  <li>
                    manage and protect our information technology infrastructure;
                  </li>
                  <li>
                    enable on-demand services by digitizing and standardizing the reporting of Know Your Customers data;
                  </li>
                  <li>
                    provide targeted marketing and advertising, provide service update notices, and deliver promotional offers based on communication preferences;
                  </li>
                  <li>
                    obtain a means by which we may contact you; either by telephone, text (SMS), email messaging, social media, etc.;
                  </li>
                  <li>
                    conduct background checks, compare information for accuracy and verify same with third parties;
                  </li>
                  <li>
                    identify or address a violation and administer our policies and terms of use;
                  </li>
                  <li>
                    comply with legal, contractual and regulatory obligations;
                  </li>
                  <li>
                    execute your specific requests or use same for a specific purpose as you may instruct;
                  </li>
                  <li>
                    investigate and respond to your complaints or enquiries; and
                  </li>
                  <li>
                   process your access to our services, Software, or functions from time to time;

                  If we intend to use 
                  any Personal Information 
                  in any manner that is not consistent with 
                  this Privacy Policy, you will be informed of 
                  such anticipated use prior to or at the time at 
                  which the Personal information is required and obtain your consent.
                  </li>
              </ul>

            </div>)}

          </div>
        </div>

              {/* storage and protection of your data */}
        <div className="container">
          <div className="card">
            <div className="intro_7" onClick={proDisplay}>
              <h2 className="intro7 ">Storage and protection of your Data</h2>
            </div> 

            {isProVisible &&(<div className="text">
              <p className='ml-10 mr-10 mb-10 leading-loose'>
              We protect your personal information using physical, technical, and administrative security measures to reduce the risks of loss, misuse, unauthorized access, unauthorised disclosure and alteration. Access to our various platforms is restricted to authorized users only. Your Information is also stored on our secure servers as well as secure physical locations and cloud infrastructure (where applicable). Please be aware that, despite our best efforts, no security measures are perfect or impenetrable. We will retain your personal information for the length of time needed to fulfil the purposes outlined in this privacy policy unless a longer retention period is required or permitted by law. To dispose of personal data, we may anonymize it, delete it or take other appropriate steps. Personal Data may persist in copies made for backup and business continuity purposes for additional time.
                We will take all 
                necessary measures to ensure that your Personal Data is safe, however, 
                you are also required to ensure that access codes, PINs, passwords, usernames, and all 
                other information or hints that may enable third party access to your accounts on our 
                Platforms are secure. We therefore strongly advise you to keep such i nformation secure and 
                confidential. If you use a third party’s device (laptops, phones, public internet, etc.) to 
                access your account, kindly ensure that you always log out. Kindly note however that certain 
                devices are programmed to save passwords or usernames, as such, we advise that you use third 
                party devices with extreme caution. If you believe that an unauthorized person has accessed 
                your information, please contact us immediately.
              </ p>
            </div>)}

          </div>
        </div>

              {/* age */}
        <div className="container">
          <div className="card">
            <div className="intro_8" onClick={ageDisplay}>
              <h2 className="intro8 ">Age</h2>
            </div> 

            {isAgeVisible &&(<div className="text">
              <p className='ml-10 mr-10 mb-10 leading-loose'>
              You must be at least 18 years old to use our services or any of our Platforms. All Personal Data which we may process shall be in accordance with this Policy and other applicable laws.
              </p>
            </div>)}

          </div>
        </div>

                {/* Processing your Information */}
        
              
          <div className="container">
          <div className="card">
            <div className="intro_9" onClick={ourDisplay}>
              <h2 className="intro9 ">Processing your information</h2>
            </div> 

            {isOurVisible &&(<div className="text">
              <p className='ml-10 mr-10 mb-10 leading-loose'>
                In order to execute our obligations to you, we may be required to process your information, such as your name, account number, account identity, contact details, office address, bank details, shipping and billing address, or other information needed to complete the transaction. We also work with third parties, including corporate institutions, partners, vendors, service providers, who at one point or the other facilitate transactions executed on our platforms. For completeness, in the course of your engagement with us or use of our services and Software, we may share your information with different stakeholders, including but not limited to Financial institutions; service providers; FutureXTech’s subsidiaries and affiliates; regulatory or judicial authorities; or other third parties pursuant to a subpoena, court order, or other legal process or requirement applicable to XStakUp. Please note that the aforementioned parties may be within or outside Nigeria (where necessary).

                We may also process your information when we believe, in our sole discretion, that the disclosure of your I nformation is necessary to comply with applicable laws and judicial/regulatory orders; conduct investigations; manage existing or imminent risks, prevent fraud, crime or financial loss, or for public safety or to report suspected illegal activity or to investigate violations of our Terms and Conditions.

                In all cases, we will ensure that your information is safe, and notify the receiving party of the confidential nature of your Information, particularly the need to maintain the confidentiality of same and prevent unlawful or unauthorised usage.
              </p>
            </div>)}

          </div>
        </div>

          {/* your right */}
        <div className="container">
          <div className="card">
            <div className="intro_1o" onClick={ritDisplay}>
              <h2 className="intro10 ">Your Rights</h2>
            </div> 

            {isRitVisible &&(<div className="text">
              <p className='ml-10 mr-10 mb-10 leading-loose'>
              You have the following rights regarding your personal information collected by us:
              </p>
              <ul className='list-disc pl-5 tracking-wide ml-10 leading-loose'>
                  <li>
                   Right to access your personal information being held by us. Request for such information may be sent to (hello@xstakup.com);
                  </li>
                  <li>
                   Right to request that your personal data be made available to you in an electronic
                   format or that it should be sent to a third party (Kindly note that we have the right to
                   decline such a request if it is too frequent, unreasonable, and likely to cause substantial cost to us. In any event, we will communicate the reason for our refusal);
                  </li>
                  <li>
                   Right to rectify any inaccurate, incomplete information. As such, if you discover any
                   inaccuracy in your personal information, kindly notify us promptly and provide us with documentary evidence to enable us to update the requisite changes;
                  </li>
                  <li>
                   Right to withdraw consent for the processing of your information, provided that such
                   withdrawal shall not invalidate any processing hitherto done based on the consent previously given by you;
                  </li>
                  <li>
                   Restrict or object to the processing of your personal data provided that we may be
                   compelled to process your data where required under law, regulatory authorities, or court of law; and
                  </li>
                  <li>
                    Right to request that your personal data be deleted. We may however continue to
                    retain the information where required under law, contract, regulatory authorities, or court of law.
                  </li>
              </ul>
            </div>)}

          </div>
        </div>

            {/* Disclosures */}
        <div className="container">
          <div className="card">
            <div className="intro_11" onClick={surDisplay}>
              <h2 className="intro11 ">Disclosures</h2>
            </div> 

            {isSurVisible &&(<div className="text">
              <p className='ml-10 mr-10 mb-10 leading-loose'>
              We may share your personal information with:
              </p>
              <ul className='list-disc pl-5 tracking-wide ml-10 leading-loose'>
                  <li>
                    Members of the XStakUp company to provide joint content, products and services
                  </li>
                  <li>
                   (such as registration, transactions and customer support), to help detect and prevent
                   potentially illegal acts and violations of our policies, and to guide decisions about
                   their products, services, and communications. Members of the group will use this
                   information to send you marketing communications and opportunities only if you have requested their services.
                  </li>
                  <li>
                   Companies that we plan to merge with or are acquired by. (Should such a combination occur, we will require that the new combined entity follow this Privacy
                    Policy with respect to your personal information. If your personal information could
                    be used contrary to this policy, you will receive prior notice).
                  </li>
                  <li>
                   Law enforcement, government officials, or other third parties pursuant to a subpoena, court order, or other legal process or requirement applicable to XStakUp
                   or any of its agents; when we need to do so to comply with law; or when we believe,
                   in our sole discretion, that the disclosure of personal information is necessary to
                   prevent physical harm or financial loss, to report suspected illegal activity or to
                   investigate violations of our Terms & Conditions and other agreements.

                   
                  </li>
                  
              </ul>
              <p>
                  Other unaffiliated third parties, for the following purposes
              </p>
              <ul className='list-disc pl-5 tracking-wide ml-10 leading-loose'>
                <li>
                  Fraud Prevention and Risk Management: to help prevent fraud or assess and manage risk.
                </li>
                <li>
                  Customer Service: for customer service purposes, including to help service your accounts or resolve disputes.
                </li>
                <li>
                  Legal Compliance: to help them comply with anti-money laundering and counter-terrorist financing verification requirements.
                </li>
                <li>
                  Service Providers: to enable service providers under contract with us to support our
                  business operations, such as fraud prevention, marketing, customer service and 
                  technology services. Our contracts dictate that these service providers only use your
                  information in connection with the services they perform for us and not for their own benefit.
                </li>
              </ul>
              
            </div>)}

          </div>
        </div>

           {/* Cross Border Transfers of Personal Information */}
        <div className="container">
          <div className="card">
            <div className="intro_12" onClick={borDisplay}>
              <h2 className="intro12 ">Cross Border Transfers of Personal Information</h2>
            </div> 

            {isBorVisible &&(<div className="text">
              <p className='ml-10 mr-10 mb-10 leading-loose'>
              We operate globally having offices in various continents of the world, and in a bid to serve you better, we may transfer your personal information to third parties in locations around the world for the purposes described in this Privacy Policy. That notwithstanding, XStakUp is committed to adequately protecting your personal Information regardless of where the Data is transferred or hosted. Kindly be assured that all our affiliates are bound by the same level of strict confidentiality with respect to your Information.
              </p>
            </div>)}

          </div>
        </div>

           {/* Use of Cookies and Similar Technologies */}
        <div className="container">
          <div className="card">
            <div className="intro_14" onClick={useDisplay}>
              <h2 className="intro14 ">Use of Cookies and Technology</h2>
            </div> 

            {isUseVisible &&(<div className="text">
              <p className='ml-10 mr-10 mb-10 leading-loose'>
              When you access our Software, we may place small data files on your computer or other device. These data files may be cookies, pixel tags, flash cookies, or other local storage

                provided by your browser or associated applications (collectively referred to as &apos;Cookies&apos;). These technologies are used to recognize users as customers; customize Services, content, and advertising; measure promotional effectiveness; help ensure that account security is not compromised; mitigate risk and prevent fraud; and promote trust and safety on our Platform.
              </p>
              <p className='ml-10 mr-10 mb-10 leading-loose'>
              You can freely decline our Cookies if the web browser or browser add-on permits unless our cookies are required to prevent fraud or ensure the security of platforms we control. However, declining our Cookies may affect your ability to fully utilize of our Software and services.
              </p>
              <p className='ml-10 mr-10 mb-10 leading-loose'>
              This Policy applies to our Lead Generation form alone. We do not exercise control over the sites displayed or linked from within our various Services. These other sites may place their own cookies or other files on your computer, collect data or solicit personal information from you.
              </p>
            </div>)}

          </div>
        </div>

            
              {/* Period of Storage */}
        <div className="container">
          <div className="card">
            <div className="intro_15" onClick={stoDisplay}>
              <h2 className="intro15 ">Period of Storage</h2>
            </div> 

            {isStoVisible &&(<div className="text">
              <p className='ml-10 mr-10 mb-10 leading-loose'>
              We retain your information for as long as necessary for the purpose(s) for which it was collected. The period of data storage is also subject to legal, regulatory, administrative and operational requirements.
              </p>
            </div>)}

          </div>
        </div>

         
              {/* Exceptions */}
              <div className="container">
          <div className="card">
            <div className="intro_16" onClick={excDisplay}>
              <h2 className="intro16 ">Exceptions</h2>
            </div> 

            {isExcVisible &&(<div className="text">
              <p className='ml-10 mr-10 mb-10 leading-loose'>
              Please note that this Policy does not apply to information that is already in the public domain through no fault of ours.
              </p>
            </div>)}

          </div>
        </div>

         {/* Violation */}
         <div className="container">
          <div className="card">
            <div className="intro_17" onClick={vioDisplay}>
              <h2 className="intro17 ">Violation</h2>
            </div> 

            {isVioVisible &&(<div className="text">
              <p className='ml-10 mr-10 mb-10 leading-loose'>
               If you violate the letter or spirit of this Policy, or otherwise create risk or possible legal exposure for us or attempt to violate the privacy rights of XStakUp and its other users, we reserve the right to restrict your access to our Platforms. We will notify you in the event that we are constrained to take such a decision.
              </p>
            </div>)}

          </div>
        </div>

         {/* Dispute resolution */}
         <div className="container">
          <div className="card">
            <div className="intro_18" onClick={resDisplay}>
              <h2 className="intro18 ">Dispute resolution</h2>
            </div> 

            {isResVisible &&(<div className="text">
              <p className='ml-10 mr-10 mb-10 leading-loose'>
               We are dedicated to ensuring that you are satisfied with our management of your Information. However, in the unlikely event that you have a complaint, please contact us via the details below, stating your name and details of your complaint. Upon receipt of your complaint, we will endeavour to contact you within 7 working days with a view to amicably resolving such dispute within the shortest possible time. The foregoing notwithstanding, all disputes arising from this policy, shall first be resolved by negotiation. However, if parties fail to resolve the disputes amicably by such mutual consultations, parties shall further attempt to resolve the dispute by mediation. Where these methods fail, parties have the right to seek out other means of dispute resolution.
              </p>
            </div>)}

          </div>
        </div>

        {/* Contact Us */}
        <div className="container">
          <div className="card">
            <div className="intro_19" onClick={cotDisplay}>
              <h2 className="intro19 ">Contact Us</h2>
            </div> 

            {isCotVisible &&(<div className="text">
              <p className='ml-10 mr-10 mb-10 leading-loose'>
              If you have questions regarding your data privacy rights or would like to submit a related
              </p>
              <p className='ml-10 mr-10 leading-loose'>
              data privacy right request, kindly contact us via the information below:
              </p>
            <ul className='list-disc pl-5 tracking-wide ml-10 leading-loose'>
              <li>
                Enyata Software Engineering Limited
              </li>
              <li>
               <a href="www.xstakup.com" className='text-[#0094c7]'>www.xstakup.com</a>
              </li>
              <li>
                 19 Allen Road, Surulere
              </li>
              <li>
                Lagos State, Nigeria
              </li>
              <li>
              Email: <a href="mailTo:Build@xstakup.com" className='text-[#0094c7] underline'> Build@xstakup.com</a>
              </li>
              <li>
                Phone Number: <a href="tel:+2348062894114" className='text-[#0094c7] underline'>+234 8062894114</a>
              </li>
              <li>
                Please allow up to 7 working days days for requests to be processed. 
              </li>
              <li>
              The Company reserves the right to charge a reasonable fee to process excessive or repeated requests.
              </li>
            </ul>
              
            </div>)}

          </div>
        </div>

          {/* Amendment */}
         <div className="container">
          <div className="card">
            <div className="intro_20" onClick={ameDisplay}>
              <h2 className="intro20 ">Amendment</h2>
            </div> 

            {isAmeVisible &&(<div className="text">
              <p className='ml-10 mr-10 mb-10 leading-loose'>
              We may amend or revise this Policy at any time by posting a revised version on our website. Notice of the amendment shall be posted on our website and the revised version will be effective from the date of publication. Kindly, note that your continued use of our Software after the publication of the revised version constitutes your acceptance of our amended
              </p>
            </div>)}

          </div>
        </div>

      </div>
    </div>
  );
}

export default Privacy;
