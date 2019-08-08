import React, {useState} from "react";
import StyledTermsModal from "./styles";
import PropTypes from "prop-types";

const TermsModal = ({ closeTermsModal }) => {
    const [extended, setExtended] = useState(false);

    return (
        <StyledTermsModal>
            <span onClick={closeTermsModal} />
            <p>
                Loop respects your privacy and is committed to protecting your personal data.
                Our Privacy Policy gives you information about how Loop collects, uses and
                protects any personal data that you provide to us, including any personal data
                provided through our website. It is important that you read our Privacy Policy.
            </p>
            <p>
                Any changes we may make to our Privacy Policy in the future will be posted on
                this page, so you will always know what personal data we collect about you, the
                purposes we might use it for and to whom we might disclose it.
            </p>
            {extended && (
                <p>
                    This version of our Privacy Policy was published in May 2018 in line with
                    the General Data Protection Regulation (GDPR) and applies to the collection
                    and use of personal data by Loop from 25 May 2018. Earlier versions of our
                    Privacy Policy can be obtained by contacting Loop’s Data Protection Officer
                    (whose contact details are set out in the Important information and who we
                    are section of our Privacy Policy). Profiling Where you have registered to
                    our service, Loop will use your personal data to build a profile of energy
                    usage in your home to help save you money and recommend alternative energy
                    providers. This involves tracking electricity and/or gas use in your home in
                    real time and using your personal data to identify patterns in your energy
                    consumption and make assumptions and decisions about you based on your usage
                    profile. These activities are intended to be beneficial to you in terms of
                    identifying opportunities for you to save money, but you should be aware
                    that Loop will gain certain insights into the personal routines of your
                    household in order to provide these opportunities. Such insights are only
                    used for the purposes set out in our Privacy Policy. Important information
                    and who we are Trust Power Limited (company number 10144503) is the entity
                    responsible for the collection and use of personal data by Loop. Trust Power
                    Limited is registered as a data controller at the Information Commissioner’s
                    Office (ICO) with registration number ZA435150. Loop has appointed a Data
                    Protection Officer who can answer questions in relation to our Privacy
                    Policy. If you have any questions or would like more information about the
                    collection and use of personal data by Loop, you can contact our Data
                    Protection Officer by sending an email to contactus@your-loop.com or by
                    writing to us at Trust Power Limited, 2nd Floor, 13 Berkeley Street, London,
                    UK W1J 8DW. It is important that the personal data we hold about you is
                    accurate and current. Please keep us informed if your personal data changes
                    during your relationship with us. Your legal rights Under certain
                    circumstances, you have legal rights under GDPR in relation to your personal
                    data which are known as data subject rights. Those rights are: The right to
                    request access to your personal data. This is commonly known as a ‘subject
                    access request’. The right to request correction of your personal data. The
                    right to request erasure of your personal data. This is commonly known as
                    ‘the right to be forgotten. The right to object to use of your personal
                    data. The right to request restriction of use of your personal data. The
                    right to request transfer of your personal data. The right to withdraw
                    consent, where consent is being relied upon to use your personal data. Where
                    you seek to exercise any of your data subject rights, we may need to request
                    specific information from you to help us confirm your identity and establish
                    your right to exercise such rights. This is a security measure to ensure
                    that your personal data is not disclosed to any person who has no right to
                    receive it. We may also contact you to ask you for further information in
                    relation to your request to exercise your data subject rights to speed up
                    our response. If you wish to exercise any of your data subject rights set
                    out above, please contact the Data Protection Officer using the contact
                    information set out in the Important information and who we are section of
                    our Privacy Policy. You will not have to pay a fee to access your personal
                    data (or to exercise any of the other rights). However, we may charge a
                    reasonable fee if your request is clearly unfounded, repetitive or
                    excessive. Alternatively, we may refuse to comply with your request in these
                    circumstances. You have the right to make a complaint at any time to the ICO
                    regarding the collection and use of personal data by Loop. However, we would
                    appreciate being given the chance to help you with your concerns before you
                    approach the ICO, so please contact us using the details above in the first
                    instance. The personal data we collect about you Personal data is any
                    information about an individual which can identify that person. It does not
                    include any information where the individual’s identity has been removed
                    (this is known as anonymous data), which we may collect, use and share for
                    any purpose. We may collect the following personal data about you: Personal
                    data you give us You may provide your personal data to us by completing your
                    home profile or updating your online account, filling in forms or submitting
                    a job application via our website or linked third party websites, or by
                    corresponding with us by phone, e-mail or otherwise. We may also ask you for
                    information when you enter a competition or promotion sponsored by Loop, or
                    complete surveys that we use for research purposes. The personal data you
                    give us may include your name, address, e-mail address and phone number,
                    financial information, personal description and photograph and other
                    information regarding your work, education and employment history,
                    activities and personal circumstances. You will provide household energy
                    data to us via the Loop service. Some of this data will be personal data for
                    the purposes of GDPR. Personal data we collect about you With regard to each
                    of your visits to our website, we may automatically collect the following
                    personal data: technical information, including the internet protocol (IP)
                    address used to connect your computer to the internet, your browser type and
                    version, time zone setting, browser plug-in types and versions, operating
                    system and platform; and information about your visit, including the full
                    uniform resource locators (URL) clickstream to, through and from our website
                    (including date and time), page response times, download errors, length of
                    visits to certain pages, page interaction information (such as scrolling,
                    clicks, and mouse-overs), and methods used to browse away from our website.
                    Our website uses cookies that we put on your computer, if you agree, to
                    distinguish you from other users of our website. This helps us to provide
                    you with a good experience when you browse our website and also allows us to
                    improve our website. Further information about cookies can be found at
                    www.allaboutcookies.org. Personal data we receive from other sources We may
                    receive personal data about you if you use any of the other websites
                    operated, or other services provided, by other companies within our group.
                    We may also receive personal data about you from our research and project
                    partners and publicly available sources. How we use your personal data We
                    will only use your personal data when the law allows us to. Most commonly,
                    we will use your personal data in the following circumstances: Where it is
                    necessary for our legitimate interests (or those of a third party) and your
                    interests and fundamental rights do not override those interests. Where we
                    need to comply with a legal or regulatory obligation. Where we need to
                    perform the contract we are about to enter into or have entered into with
                    you. Generally we do not rely on consent as a legal basis to use your
                    personal data other than where you have agreed that your personal data may
                    be used by us or any third party to send you marketing information. You have
                    the right to withdraw your consent to such uses at any time. Set out below
                    is a description of all the ways we plan to use your personal data. We will
                    only use your personal data for the purposes for which we collected it,
                    unless we reasonably consider that we need to use it for another reason and
                    that reason is compatible with the original purpose. If we need to use your
                    personal data for an unrelated purpose, we will notify you and will explain
                    the legal basis which allows us to do so. Please note that we may use your
                    personal data without your knowledge or consent where this is required or
                    permitted by law. Personal data you give to us or that we collect about you
                    We may use personal data in the following ways: to allow you to access our
                    website; to provide you with information, products and services that you may
                    request from us and/or carry out our obligations arising from any contracts
                    entered into between you and us (including, without limitation, to build a
                    profile of energy usage in your home to help save you money and recommend
                    alternative energy providers); to provide you with other information that is
                    similar to that which you have already enquired about or that we feel may
                    interest you, for example relating to new or similar products or services,
                    unless you have opted not to receive such information; to notify you about
                    changes to our service; to enable us to comply with applicable legal and
                    regulatory requirements; to improve our products and services, including for
                    market research; to improve our website and ensure that content from our
                    website is presented in the most effective manner for you and for your
                    computer; to monitor and administer our website and for internal operations,
                    including troubleshooting, data analysis, testing, research, statistical and
                    survey purposes; to allow you to participate in any interactive features of
                    our service, when you choose to do so; to deal with any enquiries,
                    applications or CVs submitted by you in connection with any vacancies
                    advertised by Loop; as part of our efforts to keep our website safe and
                    secure; and for internal record keeping. Where you have registered to
                    receive our service, we will send you a weekly digest email relating to your
                    energy usage in the previous week. You can change your preferences as
                    regards the frequency of the delivery of digest emails via your Loop user
                    profile. Personal data we receive from other sources We may combine personal
                    data we receive from other sources with the personal data you give to us or
                    that we collect about you. We may use personal data we receive from other
                    sources and/or combined personal data for the purposes set out in paragraph
                    1 of this section of our Privacy Policy (depending on the types of personal
                    data we receive). Disclosures of your personal data To other members of our
                    group We may share your personal data with any companies within our group,
                    which means our subsidiaries, our ultimate holding company and its
                    subsidiaries, as defined in section 1159 of the Companies Act 2006, and any
                    associated companies which have common ownership. To third parties We may
                    share your personal data with selected third parties, including: business
                    partners and service providers in connection with products and services that
                    you may request from us or the performance of any contract we enter into
                    with them or you (including, without limitation, recommended alternative
                    energy providers where you choose to switch to them via our service or
                    introduction); and analytics and search engine providers that assist us in
                    the improvement and optimisation of our website. We may also share your
                    personal data with other third parties: in the event that we sell or buy any
                    business or assets, in which case we may disclose or transfer your personal
                    data to the prospective seller or buyer of such business or assets; if we
                    are under a duty to disclose or share your personal data with any regulatory
                    or law enforcement authorities and are required to do so; in order to
                    exercise or defend our legal rights or in connection with any legal
                    proceedings or anticipated legal proceedings; and in order to comply with
                    any other legal obligation or enforce or apply our Terms of Use and any
                    other agreements. We require all third parties to respect the security of
                    your personal data and to treat it in accordance with the law. We do not
                    allow our third party service providers to use your personal data for their
                    own purposes and only permit them to use your personal data for specified
                    purposes and in accordance with our instructions. International transfers
                    The majority of the personal data we collect will be stored and used in the
                    UK at our offices and in our secure data centre(s). We will only transfer
                    your data outside of the European Economic Area (EEA) where it is necessary
                    for us to do so. Whenever we transfer your personal data out of the EEA, we
                    ensure protection is afforded to it by ensuring at least one of the
                    following safeguards is implemented: We will only transfer your personal
                    data to service providers located in countries that have been deemed to
                    provide an adequate level of protection for personal data by the European
                    Commission. Where we use certain service providers, we may use specific
                    contracts approved by the European Commission which give personal data the
                    same protection it has in Europe. Where we use service providers based in
                    the US, we may transfer personal data to them if they are certified under
                    the Privacy Shield, which requires them to provide similar protection to
                    personal data shared between the Europe and the US. Security of personal
                    data We have put in place appropriate physical, electronic and managerial
                    security measures to prevent your personal data from being accidentally
                    lost, used or accessed in an unauthorised way, altered or disclosed. In
                    addition, we limit access to your personal data to those directors,
                    employees and other third parties who have a business need to know. They
                    will only use your personal data for specified purposes and are required to
                    keep your personal data confidential. We have put in place procedures to
                    deal with any suspected personal data breach and will notify you and any
                    applicable regulator of a breach where we are legally required to do so.
                    Unfortunately, the transmission of information via the internet is not
                    completely secure. Although we will do our best to protect your personal
                    data, we cannot guarantee the security of your personal data transmitted to
                    our website; any transmission is at your own risk. Retention of personal
                    data We will only retain your personal data for as long as necessary to
                    fulfil the purposes we collected it for, including for the purposes of
                    satisfying any legal, accounting, or reporting requirements. To determine
                    the appropriate retention period for your personal data, we consider the
                    amount, nature, and sensitivity of your personal data, the potential risk of
                    harm from unauthorised use or disclosure of your personal data, the purposes
                    for which we use your personal data, whether we can achieve those purposes
                    through other means and applicable legal requirements. Marketing information
                    Neither we, nor any group company, will use your personal data for marketing
                    purposes which are unrelated to the products or services we provide to you
                    without your explicit consent. We will inform you (before collecting your
                    personal data) if we intend to use, or disclose to any group company, your
                    personal data for such marketing purposes. You will be given the opportunity
                    to opt out of receiving any marketing information you receive from us or any
                    of our group companies, whether or not they are related to the products or
                    services we provide to you, by checking certain boxes on the forms we use to
                    collect your personal data or unsubscribing from marketing emails via the
                    hyperlink provided in such emails. You may also opt out of receiving any
                    future marketing information at any other time by contacting the Data
                    Protection Officer using the contact information set out in the Important
                    information and who we are section of our Privacy Policy. Loop partners with
                    selected third parties who may be able to provide products or services to
                    you which will help to reduce your energy consumption or may otherwise be of
                    interest to you. However, we will not disclose your personal data to these
                    selected third parties for these purposes, or any other marketing purposes,
                    without your explicit consent. Third party websites etc. Our website may,
                    from time to time, include links to third party websites, plug-ins and
                    applications. Clicking on those links or enabling those connections may
                    allow third parties to collect or share personal data about you. We do not
                    control these third party websites, plug-ins or applications and are not
                    responsible, and do not accept any liability, for their compliance with data
                    protection laws. When you leave this website, we encourage you to read the
                    privacy policies of every website you visit or plug-in or application you
                    download, in particular before submitting any personal data to those
                    websites, plug-ins or applications.
                </p>
            )}
            <button onClick={() => setExtended(!extended)}>
                {extended ? "Shrink the full policy" : "View the full policy"}
            </button>
        </StyledTermsModal>
    );
};

TermsModal.propTypes = {
    closeTermsModal: PropTypes.func.isRequired,
};

export default TermsModal;
