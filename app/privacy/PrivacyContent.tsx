"use client";

import { useState } from "react";

export default function PrivacyContent() {
  const [view, setView] = useState<"simplified" | "complete">("simplified");

  return (
    <div className="max-w-[900px] mx-auto text-[13px] min-[800px]:text-[14px] xl:text-[16px] leading-[1.8]">
      <h1 className="text-[24px] min-[800px]:text-[28px] xl:text-[32px] font-medium">
        Privacy Policy of <span className="font-bold">www.dans.jp/</span>
      </h1>
      <p className="mt-[16px]">This Application collects some Personal Data from its Users.</p>

      <div className="mt-[30px] flex gap-[20px] border-b border-black/20">
        <button
          type="button"
          onClick={() => setView("simplified")}
          className={`pb-[10px] border-b-2 transition-colors ${
            view === "simplified" ? "border-black font-medium" : "border-transparent opacity-50 hover:opacity-80"
          }`}
        >
          Show the simplified Privacy Policy
        </button>
        <button
          type="button"
          onClick={() => setView("complete")}
          className={`pb-[10px] border-b-2 transition-colors ${
            view === "complete" ? "border-black font-medium" : "border-transparent opacity-50 hover:opacity-80"
          }`}
        >
          Show the complete Privacy Policy
        </button>
      </div>

      <div className="mt-[30px]">{view === "simplified" ? <SimplifiedPolicy /> : <CompletePolicy />}</div>
    </div>
  );
}

function Divider() {
  return <div className="my-[30px] border-t border-black/20" />;
}

function PersonIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block mr-[8px] -translate-y-[1px]"
    >
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M4 20c0-4.418 3.582-8 8-8s8 3.582 8 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GraphIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block mr-[8px] -translate-y-[1px]"
    >
      <path d="M3 21V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M3 21H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M6 17V13M11 17V9M16 17V11M21 17V6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block mr-[8px] -translate-y-[1px]"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3.5 6L12 13L20.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="inline-block mr-[8px] -translate-y-[1px]"
    >
      <path
        d="M6 3H14L19 8V19C19 20.1046 18.1046 21 17 21H6C5.44772 21 5 20.5523 5 20V4C5 3.44772 5.44772 3 6 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M14 3V8H19" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M8.5 12H15.5M8.5 15.5H15.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function SimplifiedPolicy() {
  return (
    <div>
      <h2 className="text-[18px] min-[800px]:text-[20px] font-medium">
        Personal Data processed for the following purposes and using the following services:
      </h2>

      <div className="mt-[20px] grid grid-cols-1 min-[800px]:grid-cols-2 gap-[24px]">
        <div>
          <p className="font-medium">
            <GraphIcon />
            Analytics
          </p>
          <p className="mt-[8px]">Google Analytics (Universal Analytics)</p>
          <p>Personal Data: Trackers; Usage Data</p>
        </div>
        <div>
          <p className="font-medium">
            <EmailIcon />
            Contacting the User
          </p>
          <p className="mt-[8px]">Contact form</p>
          <p>Personal Data: city; country; email address; first name; last name; phone number</p>
        </div>
        <div>
          <p className="font-medium">
            <DocumentIcon />
            Displaying content from external platforms
          </p>
          <p className="mt-[8px]">Google Fonts</p>
          <p>Personal Data: Usage Data; various types of Data as specified in the privacy policy of the service</p>
        </div>
      </div>

      <Divider />

      <h2 className="text-[18px] min-[800px]:text-[20px] font-medium">Contact information</h2>
      <div className="mt-[20px]">
        <p className="font-medium">
          <PersonIcon />
          Owner and Data Controller
        </p>
        <p className="mt-[8px]">DANS INC/Triumph Design Resource s.r.l</p>
        <p>Via Ebro 4</p>
        <p>20141 Milano(Italia)</p>
        <p className="mt-[12px]">
          <span className="font-medium">Owner contact email:</span> info@dans.jp
        </p>
      </div>

      <Divider />

      <p>Latest update: July 14, 2023</p>
      <p className="mt-[16px]">
        Dans hosts this content and only collects the Personal Data strictly necessary for it to be provided.
      </p>
    </div>
  );
}

function CompletePolicy() {
  return (
    <div>
      <p>This document can be printed for reference by using the print command in the settings of any browser.</p>

      <Divider />

      <h2 className="text-[18px] min-[800px]:text-[20px] font-medium">
        <PersonIcon />
        Owner and Data Controller
      </h2>
      <div className="mt-[16px]">
        <p>DANS INC/Triumph Design Resource s.r.l</p>
        <p>Via Ebro 4</p>
        <p>20141 Milano(Italia)</p>
        <p className="mt-[12px]">
          <span className="font-medium">Owner contact email:</span> info@dans.jp
        </p>
      </div>

      <Divider />

      <h2 className="text-[18px] min-[800px]:text-[20px] font-medium">Types of Data collected</h2>
      <p className="mt-[16px]">
        Among the types of Personal Data that this Application collects, by itself or through third parties, there
        are: Trackers; Usage Data; first name; last name; phone number; country; email address; city.
      </p>
      <p className="mt-[16px]">
        Complete details on each type of Personal Data collected are provided in the dedicated sections of this
        privacy policy or by specific explanation texts displayed prior to the Data collection. Personal Data may be
        freely provided by the User, or, in case of Usage Data, collected automatically when using this Application.
        Unless specified otherwise, all Data requested by this Application is mandatory and failure to provide this
        Data may make it impossible for this Application to provide its services. In cases where this Application
        specifically states that some Data is not mandatory, Users are free not to communicate this Data without
        consequences to the availability or the functioning of the Service. Users who are uncertain about which
        Personal Data is mandatory are welcome to contact the Owner. Any use of Cookies – or of other tracking tools
        — by this Application or by the owners of third-party services used by this Application serves the purpose
        of providing the Service required by the User, in addition to any other purposes described in the present
        document.
      </p>
      <p className="mt-[16px]">
        Users are responsible for any third-party Personal Data obtained, published or shared through this
        Application.
      </p>

      <Divider />

      <h2 className="text-[18px] min-[800px]:text-[20px] font-medium">Mode and place of processing the Data</h2>
      <h3 className="mt-[16px] font-medium">Methods of processing</h3>
      <p className="mt-[8px]">
        The Owner takes appropriate security measures to prevent unauthorized access, disclosure, modification, or
        unauthorized destruction of the Data. The Data processing is carried out using computers and/or IT enabled
        tools, following organizational procedures and modes strictly related to the purposes indicated. In addition
        to the Owner, in some cases, the Data may be accessible to certain types of persons in charge, involved with
        the operation of this Application (administration, sales, marketing, legal, system administration) or
        external parties (such as third-party technical service providers, mail carriers, hosting providers, IT
        companies, communications agencies) appointed, if necessary, as Data Processors by the Owner. The updated
        list of these parties may be requested from the Owner at any time.
      </p>

      <h3 className="mt-[20px] font-medium">Place</h3>
      <p className="mt-[8px]">
        The Data is processed at the Owner&apos;s operating offices and in any other places where the parties
        involved in the processing are located.
      </p>
      <p className="mt-[16px]">
        Depending on the User&apos;s location, data transfers may involve transferring the User&apos;s Data to a
        country other than their own. To find out more about the place of processing of such transferred Data, Users
        can check the section containing details about the processing of Personal Data.
      </p>

      <h3 className="mt-[20px] font-medium">Retention time</h3>
      <p className="mt-[8px]">
        Unless specified otherwise in this document, Personal Data shall be processed and stored for as long as
        required by the purpose they have been collected for and may be retained for longer due to applicable legal
        obligation or based on the Users&rsquo; consent.
      </p>

      <Divider />

      <h2 className="text-[18px] min-[800px]:text-[20px] font-medium">The purposes of processing</h2>
      <p className="mt-[16px]">
        The Data concerning the User is collected to allow the Owner to provide its Service, comply with its legal
        obligations, respond to enforcement requests, protect its rights and interests (or those of its Users or
        third parties), detect any malicious or fraudulent activity, as well as the following: Analytics, Contacting
        the User and Displaying content from external platforms.
      </p>
      <p className="mt-[16px]">
        For specific information about the Personal Data used for each purpose, the User may refer to the section
        “Detailed information on the processing of Personal Data”.
      </p>

      <Divider />

      <h2 className="text-[18px] min-[800px]:text-[20px] font-medium">
        Detailed information on the processing of Personal Data
      </h2>
      <p className="mt-[16px]">Personal Data is collected for the following purposes and using the following services:</p>
      <ul className="mt-[12px] list-disc pl-[20px]">
        <li>Analytics</li>
        <li>Contacting the User</li>
        <li>Displaying content from external platforms</li>
      </ul>

      <Divider />

      <h2 className="text-[18px] min-[800px]:text-[20px] font-medium">Further Information for Users</h2>
      <h3 className="mt-[16px] font-medium">Legal basis of processing</h3>
      <p className="mt-[8px]">The Owner may process Personal Data relating to Users if one of the following applies:</p>
      <ul className="mt-[12px] list-disc pl-[20px]">
        <li>Users have given their consent for one or more specific purposes.</li>
        <li>
          provision of Data is necessary for the performance of an agreement with the User and/or for any
          pre-contractual obligations thereof;
        </li>
        <li>processing is necessary for compliance with a legal obligation to which the Owner is subject;</li>
        <li>
          processing is related to a task that is carried out in the public interest or in the exercise of official
          authority vested in the Owner;
        </li>
        <li>
          processing is necessary for the purposes of the legitimate interests pursued by the Owner or by a third
          party.
        </li>
      </ul>
      <p className="mt-[16px]">
        In any case, the Owner will gladly help to clarify the specific legal basis that applies to the processing,
        and in particular whether the provision of Personal Data is a statutory or contractual requirement, or a
        requirement necessary to enter into a contract.
      </p>

      <h3 className="mt-[20px] font-medium">Further information about retention time</h3>
      <p className="mt-[8px]">
        Unless specified otherwise in this document, Personal Data shall be processed and stored for as long as
        required by the purpose they have been collected for and may be retained for longer due to applicable legal
        obligation or based on the Users&rsquo; consent.
      </p>
      <p className="mt-[16px]">Therefore:</p>
      <ul className="mt-[12px] list-disc pl-[20px]">
        <li>
          Personal Data collected for purposes related to the performance of a contract between the Owner and the
          User shall be retained until such contract has been fully performed.
        </li>
        <li>
          Personal Data collected for the purposes of the Owner&rsquo;s legitimate interests shall be retained as
          long as needed to fulfill such purposes. Users may find specific information regarding the legitimate
          interests pursued by the Owner within the relevant sections of this document or by contacting the Owner.
        </li>
      </ul>
      <p className="mt-[16px]">
        The Owner may be allowed to retain Personal Data for a longer period whenever the User has given consent to
        such processing, as long as such consent is not withdrawn. Furthermore, the Owner may be obliged to retain
        Personal Data for a longer period whenever required to fulfil a legal obligation or upon order of an
        authority.
      </p>
      <p className="mt-[16px]">
        Once the retention period expires, Personal Data shall be deleted. Therefore, the right of access, the right
        to erasure, the right to rectification and the right to data portability cannot be enforced after expiration
        of the retention period.
      </p>

      <Divider />

      <h2 className="text-[18px] min-[800px]:text-[20px] font-medium">
        The rights of Users based on the General Data Protection Regulation (GDPR)
      </h2>
      <p className="mt-[16px]">Users may exercise certain rights regarding their Data processed by the Owner.</p>
      <p className="mt-[16px]">In particular, Users have the right to do the following, to the extent permitted by law:</p>
      <ul className="mt-[12px] list-disc pl-[20px] space-y-[8px]">
        <li>
          Withdraw their consent at any time. Users have the right to withdraw consent where they have previously
          given their consent to the processing of their Personal Data.
        </li>
        <li>
          Object to processing of their Data. Users have the right to object to the processing of their Data if the
          processing is carried out on a legal basis other than consent.
        </li>
        <li>
          Access their Data. Users have the right to learn if Data is being processed by the Owner, obtain
          disclosure regarding certain aspects of the processing and obtain a copy of the Data undergoing processing.
        </li>
        <li>
          Verify and seek rectification. Users have the right to verify the accuracy of their Data and ask for it to
          be updated or corrected.
        </li>
        <li>
          Restrict the processing of their Data. Users have the right to restrict the processing of their Data. In
          this case, the Owner will not process their Data for any purpose other than storing it.
        </li>
        <li>
          Have their Personal Data deleted or otherwise removed. Users have the right to obtain the erasure of their
          Data from the Owner.
        </li>
        <li>
          Receive their Data and have it transferred to another controller. Users have the right to receive their
          Data in a structured, commonly used and machine readable format and, if technically feasible, to have it
          transmitted to another controller without any hindrance.
        </li>
        <li>Lodge a complaint. Users have the right to bring a claim before their competent data protection authority.</li>
      </ul>
      <p className="mt-[16px]">
        Users are also entitled to learn about the legal basis for Data transfers abroad including to any
        international organization governed by public international law or set up by two or more countries, such as
        the UN, and about the security measures taken by the Owner to safeguard their Data.
      </p>

      <h3 className="mt-[20px] font-medium">Details about the right to object to processing</h3>
      <p className="mt-[8px]">
        Where Personal Data is processed for a public interest, in the exercise of an official authority vested in
        the Owner or for the purposes of the legitimate interests pursued by the Owner, Users may object to such
        processing by providing a ground related to their particular situation to justify the objection.
      </p>
      <p className="mt-[16px]">
        Users must know that, however, should their Personal Data be processed for direct marketing purposes, they
        can object to that processing at any time, free of charge and without providing any justification. Where the
        User objects to processing for direct marketing purposes, the Personal Data will no longer be processed for
        such purposes. To learn whether the Owner is processing Personal Data for direct marketing purposes, Users
        may refer to the relevant sections of this document.
      </p>

      <h3 className="mt-[20px] font-medium">How to exercise these rights</h3>
      <p className="mt-[8px]">
        Any requests to exercise User rights can be directed to the Owner through the contact details provided in
        this document. Such requests are free of charge and will be answered by the Owner as early as possible and
        always within one month, providing Users with the information required by law. Any rectification or erasure
        of Personal Data or restriction of processing will be communicated by the Owner to each recipient, if any,
        to whom the Personal Data has been disclosed unless this proves impossible or involves disproportionate
        effort. At the Users&rsquo; request, the Owner will inform them about those recipients.
      </p>

      <Divider />

      <h2 className="text-[18px] min-[800px]:text-[20px] font-medium">
        Additional information about Data collection and processing
      </h2>
      <h3 className="mt-[16px] font-medium">Legal action</h3>
      <p className="mt-[8px]">
        The User&apos;s Personal Data may be used for legal purposes by the Owner in Court or in the stages leading
        to possible legal action arising from improper use of this Application or the related Services. The User
        declares to be aware that the Owner may be required to reveal personal data upon request of public
        authorities.
      </p>

      <h3 className="mt-[20px] font-medium">Additional information about User&apos;s Personal Data</h3>
      <p className="mt-[8px]">
        In addition to the information contained in this privacy policy, this Application may provide the User with
        additional and contextual information concerning particular Services or the collection and processing of
        Personal Data upon request.
      </p>

      <h3 className="mt-[20px] font-medium">System logs and maintenance</h3>
      <p className="mt-[8px]">
        For operation and maintenance purposes, this Application and any third-party services may collect files that
        record interaction with this Application (System logs) or use other Personal Data (such as the IP Address)
        for this purpose.
      </p>

      <h3 className="mt-[20px] font-medium">Information not contained in this policy</h3>
      <p className="mt-[8px]">
        More details concerning the collection or processing of Personal Data may be requested from the Owner at any
        time. Please see the contact information at the beginning of this document.
      </p>

      <h3 className="mt-[20px] font-medium">Changes to this privacy policy</h3>
      <p className="mt-[8px]">
        The Owner reserves the right to make changes to this privacy policy at any time by notifying its Users on
        this page and possibly within this Application and/or - as far as technically and legally feasible - sending
        a notice to Users via any contact information available to the Owner. It is strongly recommended to check
        this page often, referring to the date of the last modification listed at the bottom.
      </p>
      <p className="mt-[16px]">
        Should the changes affect processing activities performed on the basis of the User&rsquo;s consent, the
        Owner shall collect new consent from the User, where required.
      </p>

      <Divider />

      <p>Latest update: July 14, 2023</p>
      <p className="mt-[16px]">
        Dans hosts this content and only collects the Personal Data strictly necessary for it to be provided.
      </p>
    </div>
  );
}
