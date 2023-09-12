import React from 'react'
import styled from 'styled-components'

const ConditionStyles = styled.div`
  // set values for the form
  --intake-background: #535353;
  --intake-foreground: #ebebeb;
  font-size: 11pt;
  line-height: 115%;
  font-family: Arial, Calibri, sans-serif;
  color: var(--intake-foreground);
  mso-themecolor: text1;
  mso-themetint: 166;
  font-size: 14px;
  font-family: Arial;

  background: transparent;
`

const Container = styled.div`
  text-align: left;
`

const Title = styled.div`
  font-family: Arial;
  font-size: 26px;
  font-size: 19px;
  line-height: 1.5;
  @media only screen and (max-width: 570px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 475px) {
    font-size: 1.5rem;
  }
`

const Subtitle = styled.div`
  font-family: Arial;
  font-size: 14px;
  font-weight: bold;
  @media only screen and (max-width: 570px) {
    font-size: 1.75rem;
  }
  @media only screen and (max-width: 475px) {
    font-size: 1.25rem;
  }
`

const Heading1 = styled.div`
  margin-top: 2.5rem;
  font-family: Arial;
  font-size: 19px;
  @media only screen and (max-width: 570px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 475px) {
    font-size: 1.35rem;
  }
`

const Heading2 = styled.div`
  font-family: Arial;
  font-size: 17px;
  @media only screen and (max-width: 570px) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 475px) {
    font-size: 1.25rem;
  }
`

const Anchors = styled.a`
  font-family: Arial;
  word-break: break-word;
  font-family: Arial, Calibri, sans-serif;
  opacity: 0.6;
  color: var(--blue);
  word-break: break-word;
  &:hover {
    opacity: 0.8;
  }
  @media only screen and (max-width: 570px) {
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 475px) {
    font-size: 1.25rem;
  }
`

const CenteredContainer = styled.div`
  text-align: left;
  display: flex;
  justify-content: center;
`

const Divider = styled.div`
  line-height: 1;
`

const TextContainer = styled.div`
  line-height: 1.5;
  font-family: Arial, Calibri;
  mso-themecolor: text1;
  mso-themetint: 166;
  @media only screen and (max-width: 570px) {
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 475px) {
    font-size: 1.25rem;
  }
`

const Question = styled.span``

const CompanyName = styled.span`
  font-weight: bold;
`

const Address = styled.span``

const Strong = styled.strong`
  font-weight: bold;
`

const ListItem = styled.li`
  line-height: 1.5;
  text-align: left;
`

const ContentSpan = styled.span`
  font-family: sans-serif;
  font-style: normal;
  font-variant-ligatures: normal;
  font-variant-caps: normal;
  font-weight: 400;
  letter-spacing: normal;
  orphans: 2;
  text-align: justify;
  text-indent: -29.4px;
  text-transform: none;
  white-space: normal;
  widows: 2;
  word-spacing: 0px;
  -webkit-text-stroke-width: 0px;
  text-decoration-style: initial;
  text-decoration-color: initial;
  line-height: 16.8667px;
`

const StyledSpan = styled.span`
  font-family: Arial;
`

const StrongSpan = styled.span`
  line-height: 24.5333px;
  font-weight: bold;
`

const List = styled.ul`
  list-style: none;
  padding: 0;
`

const StyledSpanBlock = styled.span`
  display: inline-block;
`

const StyledSpanStatement = styled.span`
  display: inline-block;
`

const HeadingContainer = styled.div`
  text-align: justify;
  line-height: 1;
`

const BodyText = styled.div`
  margin: 0.5rem 0;
  line-height: 16.8667px;
`

const BlockComponent = styled.span``

export default function IntakeTerms() {
  return (
    <ConditionStyles data-custom-class="body">
      <Container>
        <Title>
          <strong>TERMS OF SERVICE</strong>
        </Title>
        <Subtitle>
          <strong>Last updated</strong> <span>September 04, 2023</span>
        </Subtitle>
        <Divider>
          <br />
        </Divider>
        <Heading1>
          <strong>AGREEMENT TO OUR LEGAL TERMS</strong>
        </Heading1>
        <CenteredContainer>
          <div
            className="MsoNormal"
            id="agreement"
            style={{ lineHeight: '1.5' }}
          >
            <Anchors name="_6aa3gkhykvst" />
          </div>
        </CenteredContainer>
        <Divider>
          <br />
        </Divider>
        <TextContainer data-custom-class="body_text">
          We are{' '}
          <Question className="block-container question question-in-editor">
            Eric Phifer LLC
          </Question>
          , doing business as <Question>Phifer Web Solutions</Question> ("
          <CompanyName>Company</CompanyName>," "<CompanyName>we</CompanyName>
          ," "<CompanyName>us</CompanyName>," "<CompanyName>our</CompanyName>").
          <Address> 180 S Elm St, Fruita, CO 81521</Address>.
        </TextContainer>
        <TextContainer data-custom-class="body_text">
          <div style={{ lineHeight: 1 }}>
            <br />
          </div>
          <div style={{ textAlign: 'left' }}>
            <TextContainer>
              We operate the website <Question>ericphifer.com</Question> (the{' '}
              <Strong>Site</Strong>), as well as any other related products and
              services that refer or link to these legal terms (the{' '}
              <Strong>Legal Terms</Strong>).
            </TextContainer>
          </div>
          <div style={{ lineHeight: 1 }}>
            <br />
          </div>
          <TextContainer>
            <Question>
              We will provide you with a fully operational website. If selected,
              this will include a payment or donation option set up through
              Stripe. The website will be hosted on Netlify.
            </Question>
          </TextContainer>
          <TextContainer>
            <div style={{ lineHeight: 1 }}>
              <br />
            </div>
            You can contact us by phone at <Question>9702100060</Question>,
            email at <Question>eric@ericphiferllc.com</Question>, or by mail to{' '}
            <Question>180 S Elm St</Question>, <Question>Fruita</Question>,{' '}
            <Question>CO</Question>,<Question>81521</Question>,{' '}
            <Question>United States</Question>.
          </TextContainer>
          <div style={{ lineHeight: 1 }}>
            <br />
          </div>
          <TextContainer>
            These Legal Terms constitute a legally binding agreement made
            between you, whether personally or on behalf of an entity (
            <Strong>you</Strong>), and <Question>Eric Phifer LLC</Question>,
            concerning your access to and use of the Services. You agree that by
            accessing the Services, you have read, understood, and agreed to be
            bound by all of these Legal Terms. IF YOU DO NOT AGREE WITH ALL OF
            THESE LEGAL TERMS, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE
            SERVICES AND YOU MUST DISCONTINUE USE IMMEDIATELY.
          </TextContainer>
          <Divider>
            <br />
          </Divider>
          <TextContainer>
            We will provide you with prior notice of any scheduled changes to
            the Services you are using. The modified Legal Terms will become
            effective upon posting or notifying you by{' '}
            <Question>eric@ericphiferllc.com</Question>, as stated in the email
            message. By continuing to use the Services after the effective date
            of any changes, you agree to be bound by the modified terms.
          </TextContainer>
        </TextContainer>
        <TextContainer data-custom-class="body_text">
          <Divider>
            <br />
          </Divider>
          <TextContainer>
            The Services are intended for users who are at least 18 years old.
            Persons under the age of 18 are not permitted to use or register for
            the Services.
          </TextContainer>
          <Divider>
            <br />
          </Divider>
          <TextContainer>
            We recommend that you print a copy of these Legal Terms for your
            records.
          </TextContainer>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>

          {/* Table of Contents */}
          <TextContainer className="heading_1">
            <Strong>TABLE OF CONTENTS</Strong>
          </TextContainer>

          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>

          <TextContainer>
            <Anchors href="#services">1. OUR SERVICES</Anchors>
          </TextContainer>
          <TextContainer>
            <Anchors href="#ip">2. INTELLECTUAL PROPERTY RIGHTS</Anchors>
          </TextContainer>

          <Anchors href="#userreps">3. USER REPRESENTATIONS</Anchors>
        </TextContainer>
        <TextContainer>
          <Anchors href="#purchases">4. PURCHASES AND PAYMENT</Anchors>
        </TextContainer>

        <TextContainer>
          {' '}
          <Anchors href="#returnno">5. POLICY</Anchors>
        </TextContainer>

        <TextContainer>
          {' '}
          <Anchors href="#prohibited">6. PROHIBITED ACTIVITIES</Anchors>
        </TextContainer>

        <TextContainer>
          {' '}
          <Anchors href="#ugc">7. USER GENERATED CONTRIBUTIONS</Anchors>
        </TextContainer>

        <TextContainer>
          {' '}
          <Anchors href="#license">8. CONTRIBUTION LICENSE</Anchors>
        </TextContainer>

        <TextContainer>
          {' '}
          <Anchors href="#thirdparty">
            9. THIRD-PARTY WEBSITES AND CONTENT
          </Anchors>
        </TextContainer>

        <TextContainer>
          {' '}
          <Anchors href="#sitemanage">10. SERVICES MANAGEMENT</Anchors>
        </TextContainer>

        <TextContainer>
          {' '}
          <Anchors href="#ppyes">11. PRIVACY POLICY</Anchors>
        </TextContainer>

        <TextContainer>
          {' '}
          <Anchors href="#copyrightyes">12. COPYRIGHT INFRINGEMENT</Anchors>
        </TextContainer>

        <TextContainer>
          {' '}
          <Anchors href="#terms">13. TERM AND TERMINATION</Anchors>
        </TextContainer>

        <TextContainer>
          {' '}
          <Anchors href="#modifications">
            14. MODIFICATIONS AND INTERRUPTIONS
          </Anchors>
        </TextContainer>

        <TextContainer>
          {' '}
          <Anchors href="#law">15. GOVERNING LAW</Anchors>
        </TextContainer>

        <TextContainer>
          {' '}
          <Anchors href="#disputes">16. DISPUTE RESOLUTION</Anchors>
        </TextContainer>

        <TextContainer>
          {' '}
          <Anchors href="#corrections">17. CORRECTIONS</Anchors>
        </TextContainer>

        <TextContainer>
          {' '}
          <Anchors href="#disclaimer">18. DISCLAIMER</Anchors>
        </TextContainer>

        <TextContainer>
          {' '}
          <Anchors href="#liability">19. LIMITATIONS OF LIABILITY</Anchors>
        </TextContainer>

        <TextContainer>
          {' '}
          <Anchors href="#indemnification">20. INDEMNIFICATION</Anchors>
        </TextContainer>

        <TextContainer>
          {' '}
          <Anchors href="#userdata">21. USER DATA</Anchors>
        </TextContainer>

        <TextContainer>
          {' '}
          <Anchors href="#electronic">
            22. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
          </Anchors>
        </TextContainer>

        <TextContainer>
          {' '}
          <Anchors href="#california">
            23. CALIFORNIA USERS AND RESIDENTS
          </Anchors>
        </TextContainer>

        <TextContainer>
          {' '}
          <Anchors href="#misc">24. MISCELLANEOUS</Anchors>
        </TextContainer>

        <TextContainer>
          {' '}
          <Anchors href="#addclause">25. DELIVERABILITY TERMS</Anchors>
        </TextContainer>

        <TextContainer>
          <Anchors href="#contact">26. CONTACT US</Anchors>
        </TextContainer>
        <TextContainer>
          <div style={{ textAlign: 'left' }}>
            <div
              className="MsoNormal"
              data-custom-class="heading_1"
              style={{ lineHeight: 1.5 }}
            >
              <Anchors name="_b6y29mp52qvx" />
            </div>
            <div className="MsoNormal" style={{ lineHeight: 1.5 }}>
              <br />
            </div>
            <div className="MsoNormal" style={{ lineHeight: 1.5 }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="heading_1"
              id="services"
              style={{ lineHeight: 1.5 }}
            >
              <Strong>1. OUR SERVICES</Strong>
            </div>
            <div className="MsoNormal" style={{ lineHeight: 1.5 }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: 1.5 }}
            >
              The information provided when using the Services is not intended
              for distribution to or use by any person or entity in any
              jurisdiction or country where such distribution or use would be
              contrary to law or regulation or which would subject us to any
              registration requirement within such jurisdiction or country.
              Accordingly, those persons who choose to access the Services from
              other locations do so on their own initiative and are solely
              responsible for compliance with local laws, if and to the extent
              local laws are applicable.
            </div>
            <div className="MsoNormal" style={{ lineHeight: 1.5 }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: 1.5 }}
            >
              The Services are not tailored to comply with industry-specific
              regulations (Health Insurance Portability and Accountability Act
              (HIPAA), Federal Information Security Management Act (FISMA),
              etc.), so if your interactions would be subjected to such laws,
              you may not use the Services. You may not use the Services in a
              way that would violate the Gramm-Leach-Bliley Act (GLBA).
            </div>
            <div className="MsoNormal" style={{ lineHeight: 1.5 }}>
              <br />
            </div>
          </div>
        </TextContainer>
        <TextContainer>
          <div style={{ textAlign: 'left' }}>
            <div
              className="MsoNormal"
              data-custom-class="heading_1"
              style={{ textAlign: 'left', lineHeight: 1.5 }}
            >
              <strong>
                <span id="ip">2. INTELLECTUAL PROPERTY RIGHTS</span>
              </strong>
            </div>
            <div style={{ lineHeight: 1.5 }}>
              <br />
            </div>
            <div style={{ textAlign: 'left' }}>
              <div
                className="MsoNormal"
                data-custom-class="heading_2"
                style={{ lineHeight: 1.5 }}
              >
                <strong>Our intellectual property</strong>
              </div>
              <div style={{ lineHeight: 1.5 }}>
                <br />
              </div>
              <div className="MsoNormal" style={{ lineHeight: 1.5 }}>
                <span>
                  We are the owner or the licensee of all intellectual property
                  rights in our Services, including all source code, databases,
                  functionality, software, website designs, audio, video, text,
                  photographs, and graphics in the Services (collectively, the
                  "Content"), as well as the trademarks, service marks, and
                  logos contained therein (the "Marks").
                </span>
              </div>
              <div style={{ lineHeight: 1.5 }}>
                <br />
              </div>
              <div className="MsoNormal" style={{ lineHeight: 1.5 }}>
                <span>
                  Our Content and Marks are protected by copyright and trademark
                  laws (and various other intellectual property rights and
                  unfair competition laws) and treaties in the United States and
                  around the world.
                </span>
              </div>
              <div style={{ lineHeight: 1.5 }}>
                <br />
              </div>
              <div className="MsoNormal" style={{ lineHeight: 1.5 }}>
                <span>
                  The Content and Marks are provided in or through the Services
                  "AS IS" for your personal, non-commercial use or internal
                  business purpose only.
                </span>
              </div>
              <div style={{ lineHeight: 1.5 }}>
                <br />
              </div>
              <div
                className="MsoNormal"
                data-custom-class="heading_2"
                style={{ lineHeight: 1.5 }}
              >
                <strong>Your use of our Services</strong>
              </div>
              <div style={{ lineHeight: 1.5 }}>
                <br />
              </div>
              <div className="MsoNormal" style={{ lineHeight: 1.5 }}>
                <span>
                  Subject to your compliance with these Legal Terms, including
                  the "PROHIBITED ACTIVITIES" section below, we grant you a
                  non-exclusive, non-transferable, revocable license to:
                </span>
              </div>
              <ul>
                <ListItem
                  className="MsoNormal"
                  data-custom-class="body_text"
                  style={{ lineHeight: 1.5 }}
                >
                  <span>access the Services; and</span>
                </ListItem>
                <ListItem
                  className="MsoNormal"
                  data-custom-class="body_text"
                  style={{ lineHeight: 1.5 }}
                >
                  <span>
                    download or print a copy of any portion of the Content to
                    which you have properly gained access.
                  </span>
                </ListItem>
              </ul>
              <div className="MsoNormal" style={{ lineHeight: 1.5 }}>
                <span>
                  solely for your personal, non-commercial use or internal
                  business purpose.
                </span>
              </div>
              <div style={{ lineHeight: 1.5 }}>
                <br />
              </div>
              <div className="MsoNormal" style={{ lineHeight: 1.5 }}>
                <span>
                  Except as set out in this section or elsewhere in our Legal
                  Terms, no part of the Services and no Content or Marks may be
                  copied, reproduced, aggregated, republished, uploaded, posted,
                  publicly displayed, encoded, translated, transmitted,
                  distributed, sold, licensed, or otherwise exploited for any
                  commercial purpose whatsoever, without our express prior
                  written permission.
                </span>
              </div>
              <div style={{ lineHeight: 1.5 }}>
                <br />
              </div>
              <div className="MsoNormal" style={{ lineHeight: 1.5 }}>
                <span>
                  If you wish to make any use of the Services, Content, or Marks
                  other than as set out in this section or elsewhere in our
                  Legal Terms, please address your request to:{' '}
                  <span className="question">eric@ericphiferllc.com</span>. If
                  we ever grant you the permission to post, reproduce, or
                  publicly display any part of our Services or Content, you must
                  identify us as the owners or licensors of the Services,
                  Content, or Marks and ensure that any copyright or proprietary
                  notice appears or is visible on posting, reproducing, or
                  displaying our Content.
                </span>
              </div>
            </div>
          </div>
        </TextContainer>
        <TextContainer>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div style={{ textAlign: 'left' }}>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: 1.5 }}
            >
              <span>
                We reserve all rights not expressly granted to you in and to the
                Services, Content, and Marks.
              </span>
            </div>
            <div style={{ lineHeight: 1.5 }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: 1.5 }}
            >
              <span>
                Any breach of these Intellectual Property Rights will constitute
                a material breach of our Legal Terms and your right to use our
                Services will terminate immediately.
              </span>
            </div>
            <div style={{ lineHeight: 1.5 }}>
              <br />
            </div>
            <div
              className="MsoNormal"
              data-custom-class="heading_2"
              style={{ lineHeight: 1.5 }}
            >
              <strong>Your submissions and contributions</strong>
            </div>
            <div style={{ lineHeight: 1.5 }}>
              <br />
            </div>
          </div>
          <div
            className="MsoNormal"
            data-custom-class="body_text"
            style={{ lineHeight: 1.5 }}
          >
            <span>
              Please review this section and the{' '}
              <Anchors data-custom-class="link" href="#prohibited">
                PROHIBITED ACTIVITIES
              </Anchors>{' '}
              section carefully prior to using our Services to understand the
              (a) rights you give us and (b) obligations you have when you post
              or upload any content through the Services.
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div
            className="MsoNormal"
            data-custom-class="body_text"
            style={{ lineHeight: 1.5 }}
          >
            <span>
              <strong>Submissions:</strong> By directly sending us any question,
              comment, suggestion, idea, feedback, or other information about
              the Services ("Submissions"), you agree to assign to us all
              intellectual property rights in such Submission. You agree that we
              shall own this Submission and be entitled to its unrestricted use
              and dissemination for any lawful purpose, commercial or otherwise,
              without acknowledgment or compensation to you.
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div
            className="MsoNormal"
            data-custom-class="body_text"
            style={{ lineHeight: 1.5 }}
          >
            <span>
              <strong>Contributions:</strong> The Services may invite you to
              chat, contribute to, or participate in blogs, message boards,
              online forums, and other functionality during which you may
              create, submit, post, display, transmit, publish, distribute, or
              broadcast content and materials to us or through the Services,
              including but not limited to text, writings, video, audio,
              photographs, music, graphics, comments, reviews, rating
              suggestions, personal information, or other material
              (Contributions). Any Submission that is publicly posted shall also
              be treated as a Contribution.
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div
            className="MsoNormal"
            data-custom-class="body_text"
            style={{ lineHeight: 1.5 }}
          >
            <span>
              You understand that Contributions may be viewable by other users
              of the Services and possibly through third-party websites.
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div
            className="MsoNormal"
            data-custom-class="body_text"
            style={{ lineHeight: 1.5 }}
          >
            <span>
              <strong>
                When you post Contributions, you grant us a license (including
                use of your name, trademarks, and logos):
              </strong>{' '}
              By posting any Contributions, you grant us an unrestricted,
              unlimited, irrevocable, perpetual, non-exclusive, transferable,
              royalty-free, fully-paid, worldwide right, and license to: use,
              copy, reproduce, distribute, sell, resell, publish, broadcast,
              retitle, store, publicly perform, publicly display, reformat,
              translate, excerpt (in whole or in part), and exploit your
              Contributions (including, without limitation, your image, name,
              and voice) for any purpose, commercial, advertising, or otherwise,
              to prepare derivative works of, or incorporate into other works,
              your Contributions, and to sublicense the licenses granted in this
              section. Our use and distribution may occur in any media formats
              and through any media channels.
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div
            className="MsoNormal"
            data-custom-class="body_text"
            style={{ lineHeight: 1.5 }}
          >
            <span>
              This license includes our use of your name, company name, and
              franchise name, as applicable, and any of the trademarks, service
              marks, trade names, logos, and personal and commercial images you
              provide.
            </span>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div
            className="MsoNormal"
            data-custom-class="body_text"
            style={{ lineHeight: 1.5 }}
          >
            <span>
              <strong>You are responsible for what you post or upload:</strong>{' '}
              By sending us Submissions and/or posting Contributions through any
              part of the Services or making Contributions accessible through
              the Services by linking your account through the Services to any
              of your social networking accounts, you:
            </span>
          </div>
          <ul>
            <li
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: 1.5 }}
            >
              <span>
                confirm that you have read and agree with our{' '}
                <Anchors data-custom-class="link" href="#prohibited">
                  <span>PROHIBITED ACTIVITIES</span>
                </Anchors>{' '}
                and will not post, send, publish, upload, or transmit through
                the Services any Submission nor post any Contribution that is
                illegal, harassing, hateful, harmful, defamatory, obscene,
                bullying, abusive, discriminatory, threatening to any person or
                group, sexually explicit, false, inaccurate, deceitful, or
                misleading;
              </span>
            </li>
            <li
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: 1.5 }}
            >
              <span>
                to the extent permissible by applicable law, waive any and all
                moral rights to any such Submission and/or Contribution;
              </span>
            </li>
            <li
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: 1.5 }}
            >
              <span>
                warrant that any such Submission and/or Contributions are
                original to you or that you have the necessary rights and
                licenses to submit such Submissions and/or Contributions and
                that you have full authority to grant us the above-mentioned
                rights in relation to your Submissions and/or Contributions; and
              </span>
            </li>
            <li
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: 1.5 }}
            >
              <span>
                warrant and represent that your Submissions and/or Contributions
                do not constitute confidential information.
              </span>
            </li>
          </ul>
          <div
            className="MsoNormal"
            data-custom-class="body_text"
            style={{ lineHeight: 1.5 }}
          >
            You are solely responsible for your Submissions and/or Contributions
            and you expressly agree to reimburse us for any and all losses that
            we may suffer because of your breach of (a) this section, (b) any
            third party’s intellectual property rights, or (c) applicable law.
          </div>
          <div className="MsoNormal" style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div
            className="MsoNormal"
            data-custom-class="body_text"
            style={{ lineHeight: 1.5 }}
          >
            <strong>We may remove or edit your Content:</strong> Although we
            have no obligation to monitor any Contributions, we shall have the
            right to remove or edit any Contributions at any time without notice
            if in our reasonable opinion we consider such Contributions harmful
            or in breach of these Legal Terms. If we remove or edit any such
            Contributions, we may also suspend or disable your account and
            report you to the authorities.
          </div>
          <div className="MsoNormal" style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div
            className="MsoNormal"
            data-custom-class="heading_2"
            style={{ lineHeight: 1.5 }}
          >
            <strong>Copyright infringement</strong>
          </div>
          <div className="MsoNormal" style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div
            className="MsoNormal"
            data-custom-class="body_text"
            style={{ lineHeight: 1.5 }}
          >
            We respect the intellectual property rights of others. If you
            believe that any material available on or through the Services
            infringes upon any copyright you own or control, please immediately
            refer to the{' '}
            <Anchors data-custom-class="link" href="#dmca">
              <span />
              <span />
              <span />
            </Anchors>{' '}
            <Anchors data-custom-class="link" href="#copyrightyes">
              <span />
              <span />
            </Anchors>{' '}
            section below.
          </div>
          <div className="MsoNormal" style={{ lineHeight: 1.5 }}>
            <br />
          </div>
        </TextContainer>
        <div>
          <div
            className="MsoNormal"
            data-custom-class="heading_1"
            id="userreps"
            style={{ lineHeight: 1.5 }}
          >
            <strong>
              <span
                style={{
                  lineHeight: '115%',
                  fontFamily: 'Arial',
                }}
              >
                <strong>
                  <span
                    style={{
                      lineHeight: '115%',
                      fontFamily: 'Arial',
                    }}
                  >
                    <strong>
                      <span
                        style={{
                          lineHeight: '115%',
                          fontFamily: 'Arial',
                        }}
                      >
                        <strong>
                          <span
                            style={{
                              lineHeight: '115%',
                              fontFamily: 'Arial',
                            }}
                          >
                            3.
                          </span>
                        </strong>
                      </span>
                    </strong>
                  </span>
                </strong>
              </span>
              <span
                style={{
                  lineHeight: '115%',
                  fontFamily: 'Arial',
                }}
              >
                {' '}
              </span>
              USER REPRESENTATIONS
            </strong>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div style={{ textAlign: 'left' }}>
            <div
              className="MsoNormal"
              data-custom-class="body_text"
              style={{ lineHeight: 1.5 }}
            >
              <span
                style={{
                  lineHeight: '115%',
                  fontFamily: 'Arial',
                }}
              >
                By using the Services, you represent and warrant that:
              </span>
              <span
                className="block-container if"
                data-type="if"
                id="d2d82ca8-275f-3f86-8149-8a5ef8054af6"
              >
                <span data-type="conditional-block">
                  <span
                    className="block-component"
                    data-record-question-key="user_account_option"
                    data-type="statement"
                  />
                </span>
                <span>
                  (1) you have the legal capacity and you agree to comply with
                  these Legal Terms;
                </span>
                <span
                  className="block-container if"
                  data-type="if"
                  id="8d4c883b-bc2c-f0b4-da3e-6d0ee51aca13"
                >
                  <span data-type="conditional-block">
                    <span
                      className="block-component"
                      data-record-question-key="user_u13_option"
                      data-type="statement"
                    />
                  </span>
                  <span>
                    (2) you are not a minor in the jurisdiction in which you
                    reside
                    <span
                      className="block-container if"
                      data-type="if"
                      id="76948fab-ec9e-266a-bb91-948929c050c9"
                    >
                      <span data-type="conditional-block">
                        <span
                          className="block-component"
                          data-record-question-key="user_o18_option"
                          data-type="statement"
                        />
                      </span>
                      ; (3) you will not access the Services through automated
                      or non-human means, whether through a bot, script, or
                      otherwise; (4) you will not use the Services for any
                      illegal or unauthorized purpose; and (5) your use of the
                      Services will not violate any applicable law or
                      regulation.
                    </span>
                  </span>
                </span>
              </span>
            </div>
          </div>
        </div>
        <div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
          <div style={{ textAlign: 'justify', lineHeight: '115%' }}>
            <div style={{ lineHeight: '17.25px' }}>
              <div
                className="MsoNormal"
                data-custom-class="body_text"
                style={{ lineHeight: 1.5, textAlign: 'left' }}
              >
                <span
                  style={{
                    lineHeight: '16.8667px',
                  }}
                >
                  If you provide any information that is untrue, inaccurate, not
                  current, or incomplete, we have the right to suspend or
                  terminate your account and refuse any and all current or
                  future use of the Services (or any portion thereof).
                </span>
              </div>
              <div
                className="MsoNormal"
                style={{ lineHeight: 1.1, textAlign: 'left' }}
              >
                <span className="block-component" />
              </div>
            </div>
          </div>
          <div style={{ lineHeight: 1.5, textAlign: 'left' }}>
            <span className="block-component">
              <span />
            </span>
            <span>
              <span className="block-component" />
              <span className="statement-end-if-in-editor" />
            </span>
          </div>
          <div style={{ lineHeight: 1.5, textAlign: 'left' }}>
            <span className="block-component">
              <span />
            </span>
          </div>
          <div style={{ lineHeight: 1.5, textAlign: 'left' }}>
            <br />
          </div>
        </div>
        <div>
          <div
            className="MsoNormal"
            data-custom-class="heading_1"
            id="purchases"
            style={{ lineHeight: 1.5 }}
          >
            <Anchors name="_ynub0jdx8pob" />
            <strong>
              <span
                style={{
                  lineHeight: '115%',
                  fontFamily: 'Arial',
                }}
              >
                <strong>
                  <span
                    style={{
                      lineHeight: '115%',
                      fontFamily: 'Arial',
                    }}
                  >
                    <strong>
                      <span
                        style={{
                          lineHeight: '115%',
                          fontFamily: 'Arial',
                        }}
                      >
                        <strong>
                          <span
                            style={{
                              lineHeight: '115%',
                              fontFamily: 'Arial',
                            }}
                          >
                            4.
                          </span>
                        </strong>
                      </span>
                    </strong>
                  </span>
                </strong>
              </span>
              <span
                style={{
                  lineHeight: '115%',
                  fontFamily: 'Arial',
                }}
              >
                {' '}
              </span>
              PURCHASES AND PAYMENT
            </strong>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <br />
          </div>
        </div>
        <div>
          <div
            className="MsoNormal"
            data-custom-class="body_text"
            style={{ lineHeight: 1.5 }}
          >
            <span
              style={{
                lineHeight: '115%',
                fontFamily: 'Arial',
                msoThemetint: 166,
              }}
            >
              We accept the following forms of payment:
            </span>
          </div>
          <div
            className="MsoNormal"
            style={{ textAlign: 'justify', lineHeight: '115%' }}
          >
            <div
              className="MsoNormal"
              style={{ textAlign: 'left', lineHeight: 1 }}
            >
              <br />
            </div>
          </div>
          <div
            className="MsoNormal"
            data-custom-class="body_text"
            style={{ lineHeight: 1.5, marginLeft: 20 }}
          >
            <span
              style={{
                lineHeight: '115%',
                fontFamily: 'Arial',
                msoThemetint: 166,
              }}
            >
              <span className="forloop-component" />-{' '}
              <span className="question">Discover</span>
            </span>
          </div>
          <div
            className="MsoNormal"
            data-custom-class="body_text"
            style={{ lineHeight: 1.5, marginLeft: 20 }}
          >
            <span
              style={{
                lineHeight: '115%',
                fontFamily: 'Arial',
                msoThemetint: 166,
              }}
            >
              <span className="forloop-component" />-{' '}
              <span className="question">American Express</span>
            </span>
          </div>
          <div
            className="MsoNormal"
            data-custom-class="body_text"
            style={{ lineHeight: 1.5, marginLeft: 20 }}
          >
            <span
              style={{
                lineHeight: '115%',
                fontFamily: 'Arial',
                msoThemetint: 166,
              }}
            >
              <span className="forloop-component" />-{' '}
              <span className="question">Mastercard</span>
            </span>
          </div>
          <div
            className="MsoNormal"
            data-custom-class="body_text"
            style={{ lineHeight: 1.5, marginLeft: 20 }}
          >
            <span
              style={{
                lineHeight: '115%',
                fontFamily: 'Arial',
                msoThemetint: 166,
              }}
            >
              <span className="forloop-component" />-{' '}
              <span className="question">Visa</span>
            </span>
          </div>
          <div
            className="MsoNormal"
            data-custom-class="body_text"
            style={{ lineHeight: 1.5, marginLeft: 20 }}
          >
            <span
              style={{
                lineHeight: '115%',
                fontFamily: 'Arial',
                msoThemetint: 166,
              }}
            >
              <span className="forloop-component" />
            </span>
          </div>
          <div className="MsoNormal" style={{ lineHeight: 1 }}>
            <span
              style={{
                lineHeight: '115%',
                fontFamily: 'Arial',
                msoThemetint: 166,
              }}
            >
              <br />
            </span>
          </div>
          <div
            className="MsoNormal"
            data-custom-class="body_text"
            style={{ lineHeight: 1.5 }}
          >
            <span
              style={{
                lineHeight: '115%',
                fontFamily: 'Arial',
                msoThemetint: 166,
              }}
            >
              You agree to provide current, complete, and accurate purchase and
              account information for all purchases made via the Services. You
              further agree to promptly update account and payment information,
              including email address, payment method, and payment card
              expiration date, so that we can complete your transactions and
              contact you as needed. Sales tax will be added to the price of
              purchases as deemed required by us. We may change prices at any
              time. All payments shall be in{' '}
              <span className="question">US dollars</span>.
            </span>
          </div>
        </div>
        <div>
          <div
            className="MsoNormal"
            data-custom-class="body_text"
            style={{ lineHeight: 1.5 }}
          >
            <span
              style={{
                lineHeight: '115%',
                fontFamily: 'Arial',
                msoThemetint: 166,
              }}
            >
              You agree to pay all charges at the prices then in effect for your
              purchases and any applicable shipping fees, and you{' '}
              <span className="block-component" />
              authorize
              <span className="statement-end-if-in-editor" /> us to charge your
              chosen payment provider for any such amounts upon placing your
              order.
              <span
                className="block-container if"
                data-type="if"
                id="9c0216a1-d094-fd73-a062-9615dc795ffc"
              >
                <span data-type="conditional-block">
                  <span
                    className="block-component"
                    data-record-question-key="recurring_charge_option"
                    data-type="statement"
                  />
                  <span data-type="body">
                    If your order is subject to recurring charges, then you
                    consent to our charging your payment method on a recurring
                    basis without requiring your prior approval for each
                    recurring charge, until such time as you cancel the
                    applicable order.
                  </span>
                </span>
                <span
                  className="statement-end-if-in-editor"
                  data-type="close"
                />
              </span>
              We reserve the right to correct any errors or mistakes in pricing,
              even if we have already requested or received payment.
            </span>
          </div>
        </div>
        <TextContainer>
          <div style={{ textAlign: 'left' }}>
            <div
              className="MsoNormal"
              style={{ textAlign: 'justify', lineHeight: 1 }}
            >
              <div className="MsoNormal" style={{ lineHeight: '17.25px' }}>
                <div className="MsoNormal" style={{ lineHeight: 1.1 }}>
                  <div className="MsoNormal" style={{ lineHeight: '17.25px' }}>
                    <div
                      className="MsoNormal"
                      data-custom-class="body_text"
                      style={{ lineHeight: 1.5, textAlign: 'left' }}
                    >
                      <div
                        className="MsoNormal"
                        data-custom-class="body_text"
                        style={{ lineHeight: 1.5 }}
                      >
                        <span
                          style={{
                            lineHeight: '115%',
                            fontFamily: 'Arial',
                            msoThemetint: 166,
                          }}
                        >
                          We reserve the right to refuse any order placed
                          through the Services. We may, in our sole discretion,
                          limit or cancel quantities purchased per person, per
                          household, or per order. These restrictions may
                          include orders placed by or under the same customer
                          account, the same payment method, and/or orders that
                          use the same billing or shipping address. We reserve
                          the right to limit or prohibit orders that, in our
                          sole <span className="block-component" />
                          judgment
                          <span className="statement-end-if-in-editor" />,
                          appear to be placed by dealers, resellers, or
                          distributors.
                        </span>
                      </div>
                      <div>
                        <div className="MsoNormal" style={{ lineHeight: 1.5 }}>
                          <span className="block-component">
                            <span />
                          </span>
                        </div>
                        <div
                          className="MsoNormal"
                          data-custom-class="heading_1"
                          id="returnno"
                          style={{ lineHeight: 1.5 }}
                        >
                          <strong>
                            <span>
                              5. <span className="block-component" /> POLICY
                            </span>
                          </strong>
                        </div>
                        <div className="MsoNormal" style={{ lineHeight: 1.5 }}>
                          <span>
                            All sales are final and no refund will be issued.
                            <span className="statement-end-if-in-editor" />
                          </span>
                        </div>
                        <div className="MsoNormal" style={{ lineHeight: 1.5 }}>
                          <span className="block-component">
                            <span />
                          </span>
                        </div>
                        <div className="MsoNormal" style={{ lineHeight: 1.5 }}>
                          <span className="block-component" />
                        </div>
                      </div>
                      <div>
                        <div
                          className="MsoNormal"
                          style={{ textAlign: 'justify', lineHeight: 1.5 }}
                        >
                          <span
                            style={{
                              lineHeight: '115%',
                              fontFamily: 'Arial',
                            }}
                          >
                            <span
                              data-type="conditional-block"
                              style={{
                                textAlign: 'left',
                              }}
                            >
                              <span data-type="body">
                                <div className="MsoNormal">
                                  <br />
                                </div>
                              </span>
                            </span>
                          </span>
                          <div
                            className="MsoNormal"
                            data-custom-class="heading_1"
                            id="prohibited"
                            style={{ textAlign: 'left', lineHeight: 1.5 }}
                          >
                            <strong>
                              <span
                                style={{
                                  lineHeight: '24.5333px',
                                }}
                              >
                                <strong>
                                  <span
                                    style={{
                                      lineHeight: '115%',
                                      fontFamily: 'Arial',
                                    }}
                                  >
                                    <strong>
                                      <span
                                        style={{
                                          lineHeight: '115%',
                                          fontFamily: 'Arial',
                                        }}
                                      >
                                        <strong>
                                          <span
                                            style={{
                                              lineHeight: '115%',
                                              fontFamily: 'Arial',
                                            }}
                                          >
                                            6.
                                          </span>
                                        </strong>
                                      </span>
                                    </strong>
                                  </span>{' '}
                                </strong>
                                PROHIBITED ACTIVITIES
                              </span>
                            </strong>
                          </div>
                        </div>
                        <div className="MsoNormal" style={{ lineHeight: 1.5 }}>
                          <br />
                        </div>
                        <div
                          className="MsoNormal"
                          style={{ textAlign: 'justify', lineHeight: 1 }}
                        >
                          <div
                            className="MsoNormal"
                            data-custom-class="body_text"
                            style={{ lineHeight: 1.5, textAlign: 'left' }}
                          >
                            <span
                              style={{
                                lineHeight: '16.8667px',
                              }}
                            >
                              You may not access or use the Services for any
                              purpose other than that for which we make the
                              Services available. The Services may not be used
                              in connection with any commercial{' '}
                              <span className="block-component" />
                              endeavors
                              <span className="statement-end-if-in-editor" />{' '}
                              except those that are specifically endorsed or
                              approved by us.
                            </span>
                          </div>
                        </div>
                        <div className="MsoNormal" style={{ lineHeight: 1.5 }}>
                          <br />
                          <span
                            style={{
                              lineHeight: '16.8667px',
                            }}
                          >
                            As a user of the Services, you agree not to:
                          </span>
                          <ul>
                            <ListItem className="MsoNormal body_text">
                              <ContentSpan>
                                Systematically retrieve data or other content
                                from the Services to create or compile, directly
                                or indirectly, a collection, compilation,
                                database, or directory without written
                                permission from us.
                              </ContentSpan>
                            </ListItem>
                            <ListItem className="MsoNormal body_text">
                              <ContentSpan>
                                Trick, defraud, or mislead us and other users,
                                especially in any attempt to learn sensitive
                                account information such as user passwords.
                              </ContentSpan>
                            </ListItem>
                            <ListItem className="MsoNormal body_text">
                              <ContentSpan>
                                Circumvent, disable, or otherwise interfere with
                                security-related features of the Services,
                                including features that prevent or restrict the
                                use or copying of any Content or enforce
                                limitations on the use of the Services and/or
                                the Content contained therein.
                              </ContentSpan>
                            </ListItem>
                            <ListItem className="MsoNormal body_text">
                              <ContentSpan>
                                Disparage, tarnish, or otherwise harm, in our
                                opinion, us and/or the Services.
                              </ContentSpan>
                            </ListItem>
                            <ListItem className="MsoNormal body_text">
                              <ContentSpan>
                                Use any information obtained from the Services
                                in order to harass, abuse, or harm another
                                person.
                              </ContentSpan>
                            </ListItem>
                            <ListItem className="MsoNormal body_text">
                              <ContentSpan>
                                Make improper use of our support services or
                                submit false reports of abuse or misconduct.
                              </ContentSpan>
                            </ListItem>
                            <ListItem className="MsoNormal body_text">
                              <ContentSpan>
                                Use the Services in a manner inconsistent with
                                any applicable laws or regulations.
                              </ContentSpan>
                            </ListItem>
                            <ListItem className="MsoNormal body_text">
                              <ContentSpan>
                                Engage in unauthorized framing of or linking to
                                the Services.
                              </ContentSpan>
                            </ListItem>
                            <ListItem className="MsoNormal body_text">
                              <ContentSpan>
                                Upload or transmit (or attempt to upload or to
                                transmit) viruses, Trojan horses, or other
                                material, including excessive use of capital
                                letters and spamming (continuous posting of
                                repetitive text), that interferes with any
                                party’s uninterrupted use and enjoyment of the
                                Services or modifies, impairs, disrupts, alters,
                                or interferes with the use, features, functions,
                                operation, or maintenance of the Services.
                              </ContentSpan>
                            </ListItem>
                            <ListItem className="MsoNormal body_text">
                              <ContentSpan>
                                Engage in any automated use of the system, such
                                as using scripts to send comments or messages,
                                or using any data mining, robots, or similar
                                data gathering and extraction tools.
                              </ContentSpan>
                            </ListItem>
                            <ListItem className="MsoNormal body_text">
                              <ContentSpan>
                                Delete the copyright or other proprietary rights
                                notice from any Content.
                              </ContentSpan>
                            </ListItem>
                            <ListItem className="MsoNormal body_text">
                              <ContentSpan>
                                Attempt to impersonate another user or person or
                                use the username of another user.
                              </ContentSpan>
                            </ListItem>
                            <ListItem className="MsoNormal body_text">
                              <ContentSpan>
                                Upload or transmit (or attempt to upload or to
                                transmit) any material that acts as a passive or
                                active information collection or transmission
                                mechanism, including without limitation, clear
                                graphics interchange formats ("gifs"), 1×1
                                pixels, web bugs, cookies, or other similar
                                devices (sometimes referred to as "spyware" or
                                "passive collection mechanisms" or "pcms").
                              </ContentSpan>
                            </ListItem>
                            <ListItem className="MsoNormal body_text">
                              <ContentSpan>
                                Interfere with, disrupt, or create an undue
                                burden on the Services or the networks or
                                services connected to the Services.
                              </ContentSpan>
                            </ListItem>
                            <ListItem className="MsoNormal body_text">
                              <ContentSpan>
                                Harass, annoy, intimidate, or threaten any of
                                our employees or agents engaged in providing any
                                portion of the Services to you.
                              </ContentSpan>
                            </ListItem>
                            <ListItem className="MsoNormal body_text">
                              <ContentSpan>
                                Attempt to bypass any measures of the Services
                                designed to prevent or restrict access to the
                                Services, or any portion of the Services.
                              </ContentSpan>
                            </ListItem>
                            <ListItem className="MsoNormal body_text">
                              <ContentSpan>
                                Copy or adapt the Services' software, including
                                but not limited to Flash, PHP, HTML, JavaScript,
                                or other code.
                              </ContentSpan>
                            </ListItem>
                            <ListItem className="MsoNormal body_text">
                              <ContentSpan>
                                Except as permitted by applicable law, decipher,
                                decompile, disassemble, or reverse engineer any
                                of the software comprising or in any way making
                                up a part of the Services.
                              </ContentSpan>
                            </ListItem>
                            <ListItem className="MsoNormal body_text">
                              <ContentSpan>
                                Except as may be the result of standard search
                                engine or Internet browser usage, use, launch,
                                develop, or distribute any automated system,
                                including without limitation, any spider, robot,
                                cheat utility, scraper, or offline reader that
                                accesses the Services, or use or launch any
                                unauthorized script or other software.
                              </ContentSpan>
                            </ListItem>
                            <ListItem className="MsoNormal body_text">
                              <ContentSpan>
                                Use a buying agent or purchasing agent to make
                                purchases on the Services.
                              </ContentSpan>
                            </ListItem>
                            <ListItem className="MsoNormal body_text">
                              <ContentSpan>
                                Make any unauthorized use of the Services,
                                including collecting usernames and/or email
                                addresses of users by electronic or other means
                                for the purpose of sending unsolicited email, or
                                creating user accounts by automated means or
                                under false pretenses.
                              </ContentSpan>
                            </ListItem>
                            <ListItem className="MsoNormal body_text">
                              <ContentSpan>
                                Use the Services as part of any effort to
                                compete with us or otherwise use the Services
                                and/or the Content for any revenue-generating
                                endeavor or commercial enterprise.
                              </ContentSpan>
                            </ListItem>
                          </ul>
                        </div>
                        <Divider>
                          <br />
                        </Divider>
                        <TextContainer>
                          <Heading1>
                            <StyledSpan
                              className="block-container if"
                              data-type="if"
                              style={{ textAlign: 'left' }}
                            >
                              <span data-type="conditional-block">
                                <span data-type="body">
                                  <StyledSpan
                                    className="MsoNormal"
                                    data-custom-class="heading_1"
                                    id="ugc"
                                  >
                                    <StrongSpan>
                                      <StrongSpan>
                                        <StrongSpan>
                                          <StyledSpan>7.</StyledSpan>
                                        </StrongSpan>
                                      </StrongSpan>
                                    </StrongSpan>
                                    USER GENERATED CONTRIBUTIONS
                                  </StyledSpan>
                                </span>
                              </span>
                            </StyledSpan>
                          </Heading1>
                        </TextContainer>
                        <Divider>
                          <br />
                        </Divider>
                        <TextContainer>
                          <StyledSpan
                            className="MsoNormal"
                            style={{ lineHeight: '1.5' }}
                          >
                            <span
                              style={{
                                lineHeight: '16.8667px',
                              }}
                            >
                              <StyledSpan
                                className="block-container if"
                                data-type="if"
                                id="24327c5d-a34f-f7e7-88f1-65a2f788484f"
                                style={{ textAlign: 'left' }}
                              >
                                <span data-type="conditional-block">
                                  <span
                                    className="block-component"
                                    data-record-question-key="user_post_content_option"
                                    data-type="statement"
                                  />
                                </span>
                              </StyledSpan>
                              The Services may invite you to chat, contribute
                              to, or participate in blogs, message boards,
                              online forums, and other functionality, and may
                              provide you with the opportunity to create,
                              submit, post, display, transmit, perform, publish,
                              distribute, or broadcast content and materials to
                              us or on the Services, including but not limited
                              to text, writings, video, audio, photographs,
                              graphics, comments, suggestions, or personal
                              information or other material (collectively,{' '}
                              <span className="block-component">
                                "Contributions"
                              </span>
                              ). Contributions may be viewable by other users of
                              the Services and through third-party websites. As
                              such, any Contributions you transmit may be
                              treated as non-confidential and non-proprietary.
                              When you create or make available any
                              Contributions, you thereby represent and warrant
                              that:
                              <span className="else-block">
                                <span className="block-component" />
                              </span>
                            </span>
                          </StyledSpan>
                        </TextContainer>
                      </div>
                    </div>
                    <List>
                      <ListItem>
                        <StyledSpan>
                          <StyledSpanBlock data-custom-class="body_text">
                            The creation, distribution, transmission, public
                            display, or performance, and the accessing,
                            downloading, or copying of your Contributions do not
                            and will not infringe the proprietary rights,
                            including but not limited to the copyright, patent,
                            trademark, trade secret, or moral rights of any
                            third party.
                          </StyledSpanBlock>
                        </StyledSpan>
                      </ListItem>
                      <ListItem>
                        <StyledSpan>
                          <StyledSpanBlock data-custom-class="body_text">
                            You are the creator and owner of or have the
                            necessary
                            <StyledSpanBlock />
                            licenses
                            <StyledSpanStatement />
                            , rights, consents, releases, and permissions to use
                            and to
                            <StyledSpanBlock />
                            authorize
                            <StyledSpanStatement /> us, the Services, and other
                            users of the Services to use your Contributions in
                            any manner contemplated by the Services and these
                            Legal Terms.
                          </StyledSpanBlock>
                        </StyledSpan>
                      </ListItem>
                      <ListItem>
                        <StyledSpan>
                          You have the written consent, release, and/or
                          permission of each and every identifiable individual
                          person in your Contributions to use the name or
                          likeness of each and every such identifiable
                          individual person to enable inclusion and use of your
                          Contributions in any manner contemplated by the
                          Services and these Legal Terms.
                        </StyledSpan>
                      </ListItem>
                      <ListItem>
                        <StyledSpan>
                          Your Contributions are not false, inaccurate, or
                          misleading.
                        </StyledSpan>
                      </ListItem>
                      <ListItem>
                        <StyledSpan>
                          Your Contributions are not unsolicited or
                          <StyledSpanBlock className="block-component" />
                          unauthorized
                          <StyledSpanStatement />
                          advertising, promotional materials, pyramid schemes,
                          chain letters, spam, mass mailings, or other forms of
                          solicitation.
                        </StyledSpan>
                      </ListItem>
                      <ListItem>
                        <StyledSpan>
                          Your Contributions are not unsolicited or
                          <StyledSpanBlock className="block-component" />
                          unauthorized
                          <StyledSpanStatement />
                          advertising, promotional materials, pyramid schemes,
                          chain letters, spam, mass mailings, or other forms of
                          solicitation.
                        </StyledSpan>
                      </ListItem>
                      <ListItem>
                        <StyledSpan>
                          Your Contributions are not obscene, lewd, lascivious,
                          filthy, violent, harassing,
                          <StyledSpanBlock className="block-component" />
                          libelous
                          <StyledSpanStatement />, slanderous, or otherwise
                          objectionable (as determined by us).
                        </StyledSpan>
                      </ListItem>
                      <ListItem>
                        <StyledSpan>
                          Your Contributions do not ridicule, mock, disparage,
                          intimidate, or abuse anyone.
                        </StyledSpan>
                      </ListItem>
                      <ListItem>
                        <StyledSpan>
                          Your Contributions are not used to harass or threaten
                          (in the legal sense of those terms) any other person
                          and to promote violence against a specific person or
                          class of people.
                        </StyledSpan>
                      </ListItem>
                      <ListItem>
                        <StyledSpan>
                          Your Contributions do not violate any applicable law,
                          regulation, or rule.
                        </StyledSpan>
                      </ListItem>
                      <ListItem>
                        <StyledSpan>
                          Your Contributions do not violate the privacy or
                          publicity rights of any third party.
                        </StyledSpan>
                      </ListItem>
                      <ListItem>
                        <StyledSpan>
                          Your Contributions do not violate any applicable law
                          concerning child pornography, or otherwise intended to
                          protect the health or well-being of minors.
                        </StyledSpan>
                      </ListItem>
                      <ListItem>
                        <StyledSpan>
                          Your Contributions do not include any offensive
                          comments that are connected to race, national origin,
                          gender, sexual preference, or physical handicap.
                        </StyledSpan>
                      </ListItem>
                      <ListItem>
                        <StyledSpan>
                          Your Contributions do not otherwise violate, or link
                          to material that violates, any provision of these
                          Legal Terms, or any applicable law or regulation.
                        </StyledSpan>
                      </ListItem>
                    </List>
                    <TextContainer>
                      <span
                        className="block-container if"
                        data-type="if"
                        style={{ textAlign: 'left' }}
                      >
                        <span data-type="conditional-block">
                          <span data-type="body">
                            <TextContainer
                              className="MsoNormal"
                              data-custom-class="body_text"
                            >
                              <span
                                style={{
                                  lineHeight: '16.8667px',
                                }}
                              >
                                Any use of the Services in violation of the
                                foregoing violates these Legal Terms and may
                                result in, among other things, termination or
                                suspension of your rights to use the Services.
                              </span>
                            </TextContainer>
                          </span>
                        </span>
                      </span>
                    </TextContainer>
                    <Divider>
                      <br />
                    </Divider>
                    <TextContainer>
                      <HeadingContainer>
                        <span
                          className="block-container if"
                          data-type="if"
                          style={{ textAlign: 'left' }}
                        >
                          <span data-type="conditional-block">
                            <span data-type="body">
                              <Heading1
                                className="MsoNormal"
                                data-custom-class="heading_1"
                                id="license"
                              >
                                <StrongSpan>8.</StrongSpan> CONTRIBUTION
                                <span className="block-component" />
                                LICENSE
                                <span className="statement-end-if-in-editor" />
                              </Heading1>
                            </span>
                          </span>
                        </span>
                      </HeadingContainer>
                    </TextContainer>
                    <Divider>
                      <br />
                    </Divider>
                    <TextContainer>
                      <span
                        className="block-container if"
                        data-type="if"
                        id="a088ddfb-d8c1-9e58-6f21-958c3f4f0709"
                        style={{ textAlign: 'left' }}
                      >
                        <span data-type="conditional-block">
                          <span
                            className="block-component"
                            data-record-question-key="user_post_content_option"
                            data-type="statement"
                          />
                        </span>
                      </span>
                      <span
                        className="block-container if"
                        data-type="if"
                        style={{ textAlign: 'left' }}
                      >
                        <span data-type="conditional-block">
                          <span data-type="body">
                            <TextContainer
                              className="MsoNormal"
                              data-custom-class="body_text"
                            >
                              <StyledSpan>
                                By posting your Contributions to any part of the
                                Services
                                <StyledSpanBlock
                                  className="block-container if"
                                  data-type="if"
                                  id="19652acc-9a2a-5ffe-6189-9474402fa6cc"
                                >
                                  <span data-type="conditional-block">
                                    <span
                                      className="block-component"
                                      data-record-question-key="socialnetwork_link_option"
                                      data-type="statement"
                                    />
                                  </span>
                                </StyledSpanBlock>
                                , you automatically grant, and you represent and
                                warrant that you have the right to grant, to us
                                an unrestricted, unlimited, irrevocable,
                                perpetual, non-exclusive, transferable,
                                royalty-free, fully-paid, worldwide right, and{' '}
                                <StyledSpanBlock />
                                license
                                <StyledSpanStatement />
                                to host, use, copy, reproduce, disclose, sell,
                                resell, publish, broadcast, retitle, archive,
                                store, cache, publicly perform, publicly
                                display, reformat, translate, transmit, excerpt
                                (in whole or in part), and distribute such
                                Contributions (including, without limitation,
                                your image and voice) for any purpose,
                                commercial, advertising, or otherwise, and to
                                prepare derivative works of, or incorporate into
                                other works, such Contributions, and grant and{' '}
                                <StyledSpanBlock />
                                authorize sublicenses
                                <StyledSpanStatement />
                                of the foregoing. The use and distribution may
                                occur in any media formats and through any media
                                channels.
                              </StyledSpan>
                            </TextContainer>
                          </span>
                        </span>
                      </span>
                    </TextContainer>
                    <Divider>
                      <br />
                    </Divider>
                    <TextContainer>
                      <span
                        className="block-container if"
                        data-type="if"
                        style={{ textAlign: 'left' }}
                      >
                        <span data-type="conditional-block">
                          <span data-type="body">
                            <TextContainer
                              className="MsoNormal"
                              data-custom-class="body_text"
                            >
                              <StyledSpan>
                                This license will apply to any form, media, or
                                technology now known or hereafter developed, and
                                includes our use of your name, company name, and
                                franchise name, as applicable, and any of the
                                trademarks, service marks, trade names, logos,
                                and personal and commercial images you provide.
                                You waive all moral rights in your
                                Contributions, and you warrant that moral rights
                                have not otherwise been asserted in your
                                Contributions.
                              </StyledSpan>
                            </TextContainer>
                          </span>
                        </span>
                      </span>
                    </TextContainer>
                    <Divider>
                      <br />
                    </Divider>
                    <TextContainer>
                      <TextContainer>
                        We do not assert any ownership over your Contributions.
                        You retain full ownership of all of your Contributions
                        and any intellectual property rights or other
                        proprietary rights associated with your Contributions.
                        We are not liable for any statements or representations
                        in your Contributions provided by you in any area on the
                        Services. You are solely responsible for your
                        Contributions to the Services and you expressly agree to
                        exonerate us from any and all responsibility and to
                        refrain from any legal action against us regarding your
                        Contributions.
                      </TextContainer>
                      <div style={{ lineHeight: '1.5' }}>
                        <br />
                      </div>
                      <TextContainer>
                        We have the right, in our sole and absolute discretion,
                        (1) to edit, redact, or otherwise change any
                        Contributions; (2) to <StyledSpanBlock />
                        re-categorize
                        <StyledSpanStatement /> any Contributions to place them
                        in more appropriate locations on the Services; and (3)
                        to pre-screen or delete any Contributions at any time
                        and for any reason, without notice. We have no
                        obligation to monitor your Contributions.
                      </TextContainer>
                    </TextContainer>
                  </div>
                  <TextContainer>
                    <Heading1 id="thirdparty">
                      9. THIRD-PARTY WEBSITES AND CONTENT
                    </Heading1>
                    <Divider>
                      <br />
                    </Divider>
                  </TextContainer>
                  <TextContainer>
                    <BodyText>
                      The Services may contain (or you may be sent via the{' '}
                      <BlockComponent>Site</BlockComponent>) links to other
                      websites (
                      <BlockComponent>Third-Party Websites</BlockComponent>) as
                      well as articles, photographs, text, graphics, pictures,
                      designs, music, sound, video, information, applications,
                      software, and other content or items belonging to or
                      originating from third parties (
                      <BlockComponent>Third-Party Content</BlockComponent>).
                      Such
                      <BlockComponent>Third-Party</BlockComponent> Websites and{' '}
                      <BlockComponent>Third-Party</BlockComponent> Content are
                      not investigated, monitored, or checked for accuracy,
                      appropriateness, or completeness by us, and we are not
                      responsible for any Third-Party Websites accessed through
                      the Services or any{' '}
                      <BlockComponent>Third-Party</BlockComponent> Content
                      posted on, available through, or installed from the
                      Services, including the content, accuracy, offensiveness,
                      opinions, reliability, privacy practices, or other
                      policies of or contained in the{' '}
                      <BlockComponent>Third-Party</BlockComponent> Websites or
                      the <BlockComponent>Third-Party</BlockComponent> Content.
                      Inclusion of, linking to, or permitting the use or
                      installation of any{' '}
                      <BlockComponent>Third-Party</BlockComponent> Websites or
                      any <BlockComponent>Third-Party</BlockComponent> Content
                      does not imply approval or endorsement thereof by us. If
                      you decide to leave the Services and access the{' '}
                      <BlockComponent>Third-Party</BlockComponent> Websites or
                      to use or install any{' '}
                      <BlockComponent>Third-Party</BlockComponent> Content, you
                      do so at your own risk, and you should be aware these
                      Legal Terms no longer govern. You should review the
                      applicable terms and policies, including privacy and data
                      gathering practices, of any website to which you navigate
                      from the Services or relating to any applications you use
                      or install from the Services. Any purchases you make
                      through <BlockComponent>Third-Party</BlockComponent>{' '}
                      Websites will be through other websites and from other
                      companies, and we take no responsibility whatsoever in
                      relation to such purchases which are exclusively between
                      you and the applicable third party. You agree and
                      acknowledge that we do not endorse the products or
                      services offered on{' '}
                      <BlockComponent>Third-Party</BlockComponent> Websites and
                      you shall hold us blameless from any harm caused by your
                      purchase of such products or services. Additionally, you
                      shall hold us blameless from any losses sustained by you
                      or harm caused to you relating to or resulting in any way
                      from any <BlockComponent>Third-Party</BlockComponent>{' '}
                      Content or any contact with{' '}
                      <BlockComponent>Third-Party</BlockComponent> Websites.
                    </BodyText>
                  </TextContainer>
                </div>
                <TextContainer>
                  <Heading1 id="sitemanage">10. SERVICES MANAGEMENT</Heading1>
                  <div style={{ lineHeight: '1.5' }}>
                    <br />
                  </div>
                  <BodyText>
                    We reserve the right, but not the obligation, to: (1)
                    monitor the Services for violations of these Legal Terms;
                    (2) take appropriate legal action against anyone who, in our
                    sole discretion, violates the law or these Legal Terms,
                    including without limitation, reporting such user to law
                    enforcement authorities; (3) in our sole discretion and
                    without limitation, refuse, restrict access to, limit the
                    availability of, or disable (to the extent technologically
                    feasible) any of your Contributions or any portion thereof;
                    (4) in our sole discretion and without limitation, notice,
                    or liability, to remove from the Services or otherwise
                    disable all files and content that are excessive in size or
                    are in any way burdensome to our systems; and (5) otherwise
                    manage the Services in a manner designed to protect our
                    rights and property and to facilitate the proper functioning
                    of the Services.
                  </BodyText>
                  <div style={{ lineHeight: '1.5' }}>
                    <br />
                  </div>
                  <div style={{ lineHeight: '1.5' }}>
                    <span style={{ textAlign: 'left' }}>
                      {/* Placeholder for privacy_policy_option */}
                    </span>
                  </div>
                  <Heading1 id="ppyes">11. PRIVACY POLICY</Heading1>
                  <div style={{ lineHeight: '1.5' }}>
                    <br />
                  </div>
                </TextContainer>
                <TextContainer>
                  <BodyText>
                    We care about data privacy and security. Please review our
                    Privacy Policy:
                    <strong>
                      <span
                        className="block-container question question-in-editor"
                        data-id="d10c7fd7-0685-12ac-c717-cbc45ff916d1"
                        data-type="question"
                      >
                        ericphifer.com/privacypolicy
                      </span>
                    </strong>
                    . By using the Services, you agree to be bound by our
                    Privacy Policy, which is incorporated into these Legal
                    Terms. Please be advised the Services are hosted in
                    <span className="block-component" />
                    the <span className="question">United States</span>
                    <span className="block-component" />
                    <span className="block-component" />. If you access the
                    Services from any other region of the world with laws or
                    other requirements governing personal data collection, use,
                    or disclosure that differ from applicable laws in
                    <BlockComponent>
                      <span className="block-component" />
                      the <span className="question">United States</span>
                      <span className="block-component" />
                    </BlockComponent>
                    <span className="block-component" />, then through your
                    continued use of the Services, you are transferring your
                    data to
                    <BlockComponent>
                      <span className="block-component" />
                      the <span className="question">United States</span>
                      <span className="block-component" />
                    </BlockComponent>
                    <span className="block-component" />, and you expressly
                    consent to have your data transferred to and processed in
                    <BlockComponent>
                      <span className="block-component" />
                      the <span className="question">United States</span>
                      <span className="block-component" />
                    </BlockComponent>
                  </BodyText>
                  <div style={{ lineHeight: '1.5' }}>
                    <br />
                  </div>
                  <Heading1 id="copyrightyes">
                    12. COPYRIGHT INFRINGEMENTS
                  </Heading1>
                </TextContainer>
                <TextContainer>
                  <div style={{ lineHeight: '1.5', textAlign: 'left' }}>
                    <br />
                  </div>
                  <BodyText>
                    We respect the intellectual property rights of others. If
                    you believe that any material available on or through the
                    Services infringes upon any copyright you own or control,
                    please immediately notify us using the contact information
                    provided below (a <span className="block-component" />
                    "Notification"
                    <span className="statement-end-if-in-editor" />
                    ). A copy of your Notification will be sent to the person
                    who posted or stored the material addressed in the
                    Notification. Please be advised that pursuant to applicable
                    law you may be held liable for damages if you make material
                    misrepresentations in a Notification. Thus, if you are not
                    sure that material located on or linked to by the Services
                    infringes your copyright, you should consider first
                    contacting an attorney.
                  </BodyText>
                  <div style={{ lineHeight: '1.5', textAlign: 'left' }}>
                    <br />
                  </div>
                  <Heading1 id="terms">13. TERM AND TERMINATION</Heading1>
                  <div style={{ lineHeight: '1.5', textAlign: 'left' }}>
                    <br />
                  </div>
                  <BodyText>
                    These Legal Terms shall remain in full force and effect
                    while you use the Services. WITHOUT LIMITING ANY OTHER
                    PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN
                    OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY
                    ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING
                    CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR
                    NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY
                    REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE
                    LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY
                    TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR
                    DELETE{' '}
                    <span
                      className="block-container if"
                      data-type="if"
                      id="a6e121c2-36b4-5066-bf9f-a0a33512e768"
                    >
                      <span data-type="conditional-block">
                        <span
                          className="block-component"
                          data-record-question-key="user_account_option"
                          data-type="statement"
                        />
                      </span>
                      ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME,
                      WITHOUT WARNING, IN OUR SOLE DISCRETION.
                    </span>
                  </BodyText>
                  <div style={{ lineHeight: '1.5', textAlign: 'left' }}>
                    <br />
                  </div>
                  <BodyText>
                    If we terminate or suspend your account for any reason, you
                    are prohibited from registering and creating a new account
                    under your name, a fake or borrowed name, or the name of any
                    third party, even if you may be acting on behalf of the
                    third party. In addition to terminating or suspending your
                    account, we reserve the right to take appropriate legal
                    action, including without limitation pursuing civil,
                    criminal, and injunctive redress.
                  </BodyText>
                  <Divider>
                    <br />
                  </Divider>
                </TextContainer>
                <TextContainer>
                  <Heading1 id="modifications">
                    14. MODIFICATIONS AND INTERRUPTIONS
                  </Heading1>
                  <div style={{ lineHeight: '1.5', textAlign: 'left' }}>
                    <br />
                  </div>
                  <BodyText>
                    We reserve the right to change, modify, or remove the
                    contents of the Services at any time or for any reason at
                    our sole discretion without notice. However, we have no
                    obligation to update any information on our Services.
                    <span className="block-component" />
                    We also reserve the right to modify or discontinue all or
                    part of the Services without notice at any time.
                    <span className="statement-end-if-in-editor" /> We will not
                    be liable to you or any third party for any modification,
                    price change, suspension, or discontinuance of the Services.
                  </BodyText>
                  <div style={{ lineHeight: '1.5', textAlign: 'left' }}>
                    <br />
                  </div>
                  <BodyText>
                    We cannot guarantee the Services will be available at all
                    times. We may experience hardware, software, or other
                    problems or need to perform maintenance related to the
                    Services, resulting in interruptions, delays, or errors. We
                    reserve the right to change, revise, update, suspend,
                    discontinue, or otherwise modify the Services at any time or
                    for any reason without notice to you. You agree that we have
                    no liability whatsoever for any loss, damage, or
                    inconvenience caused by your inability to access or use the
                    Services during any downtime or discontinuance of the
                    Services. Nothing in these Legal Terms will be construed to
                    obligate us to maintain and support the Services or to
                    supply any corrections, updates, or releases in connection
                    therewith.
                  </BodyText>
                  <div style={{ lineHeight: '1.5', textAlign: 'left' }}>
                    <br />
                  </div>
                  <Heading1 id="law">15. GOVERNING LAW</Heading1>
                  <div style={{ lineHeight: '1.5', textAlign: 'left' }}>
                    <br />
                  </div>
                </TextContainer>
                <TextContainer>
                  <BodyText>
                    These Legal Terms and your use of the Services are governed
                    by and construed in accordance with the laws of{' '}
                    <span className="block-container if" data-type="if">
                      <span
                        className="block-component"
                        data-record-question-key="governing_law"
                        data-type="statement"
                      />
                      <span data-type="body">
                        the State of{' '}
                        <span
                          className="block-container question question-in-editor"
                          data-id="b61250bd-6b61-32ea-a9e7-4a02690297c3"
                          data-type="question"
                        >
                          Colorado
                        </span>
                      </span>
                      <span
                        className="statement-end-if-in-editor"
                        data-type="close"
                      />
                    </span>{' '}
                    applicable to agreements made and to be entirely performed
                    within{' '}
                    <span className="block-container if" data-type="if">
                      <span
                        className="block-component"
                        data-record-question-key="governing_law"
                        data-type="statement"
                      />
                      <span data-type="body">
                        the State of{' '}
                        <span
                          className="block-container question question-in-editor"
                          data-id="b61250bd-6b61-32ea-a9e7-4a02690297c3"
                          data-type="question"
                        >
                          Colorado
                        </span>
                      </span>
                      <span
                        className="statement-end-if-in-editor"
                        data-type="close"
                      />
                    </span>
                    , without regard to its conflict of law principles.
                  </BodyText>
                  <div style={{ lineHeight: '1.5', textAlign: 'left' }}>
                    <br />
                  </div>
                  <Heading1 id="disputes">16. DISPUTE RESOLUTION</Heading1>
                  <div style={{ lineHeight: '1.5', textAlign: 'left' }}>
                    <br />
                  </div>
                </TextContainer>
                <TextContainer>
                  <Heading2>Informal Negotiations</Heading2>
                  <div style={{ lineHeight: '1.5', textAlign: 'left' }}>
                    <br />
                  </div>
                  <BodyText>
                    To expedite resolution and control the cost of any dispute,
                    controversy, or claim related to these Legal Terms (each a{' '}
                    <span className="block-component" />
                    "Dispute" and collectively, the "Disputes"
                    <span className="statement-end-if-in-editor" />) brought by
                    either you or us (individually, a{' '}
                    <span className="block-component" />
                    "Party" and collectively, the "Parties"
                    <span className="statement-end-if-in-editor" />
                    ), the Parties agree to first attempt to negotiate any
                    Dispute (except those Disputes expressly provided below)
                    informally for at least{' '}
                    <span className="question">thirty (30)</span>
                    days before initiating arbitration. Such informal
                    negotiations commence upon written notice from one Party to
                    the other Party.
                  </BodyText>
                  <div style={{ lineHeight: '1.5', textAlign: 'left' }}>
                    <br />
                  </div>
                  <Heading2>Binding Arbitration</Heading2>
                  <BodyText>
                    If the Parties are unable to resolve a Dispute through
                    informal negotiations, the Dispute (except those Disputes
                    expressly excluded below) will be finally and exclusively
                    resolved by binding arbitration. YOU UNDERSTAND THAT WITHOUT
                    THIS PROVISION, YOU WOULD HAVE THE RIGHT TO SUE IN COURT AND
                    HAVE A JURY TRIAL. The arbitration shall be commenced and
                    conducted under the Commercial Arbitration Rules of the
                    American Arbitration Association (
                    <span className="block-component" />
                    "AAA"
                    <span className="statement-end-if-in-editor" />) and, where
                    appropriate, the AAA’s Supplementary Procedures for Consumer
                    Related Disputes (
                    <span className="block-component" />
                    "AAA Consumer Rules"
                    <span className="statement-end-if-in-editor" />
                    ), both of which are available at the{' '}
                    <Anchors
                      href="http://www.adr.org"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      American Arbitration Association (AAA) website
                    </Anchors>
                    . Your arbitration fees and your share of arbitrator
                    compensation shall be governed by the AAA Consumer Rules
                    and, where appropriate, limited by the AAA Consumer Rules.
                    The arbitration may be conducted in person, through the
                    submission of documents, by phone, or online. The arbitrator
                    will make a decision in writing, but need not provide a
                    statement of reasons unless requested by either Party. The
                    arbitrator must follow applicable law, and any award may be
                    challenged if the arbitrator fails to do so. Except where
                    otherwise required by the applicable AAA rules or applicable
                    law, the arbitration will take place in{' '}
                    <span className="block-component">
                      <span className="question">Mesa</span>,{' '}
                    </span>
                    <span className="block-component">
                      <span className="question">Colorado</span>
                    </span>
                    . Except as otherwise provided herein, the Parties may
                    litigate in court to compel arbitration, stay proceedings
                    pending arbitration, or to confirm, modify, vacate, or enter
                    judgment on the award entered by the arbitrator.
                  </BodyText>
                  <div style={{ lineHeight: '1.5', textAlign: 'left' }}>
                    <br />
                  </div>
                </TextContainer>
                <TextContainer>
                  <BodyText>
                    If for any reason, a Dispute proceeds in court rather than
                    arbitration, the Dispute shall be commenced or prosecuted in
                    the <span className="block-component" />
                    <span>state and federal courts</span>
                    <span className="statement-end-if-in-editor" />
                    <span>located in</span>
                    <span className="block-component" />
                    <span className="question">Mesa</span>
                    <span>,</span>
                    <span className="statement-end-if-in-editor" />
                    <span className="block-component" />
                    <span className="question">Colorado</span>
                    <span className="statement-end-if-in-editor" />
                    <span>
                      {' '}
                      and the Parties hereby consent to, and waive all{' '}
                    </span>
                    <span className="block-component" />
                    <span>defenses</span>
                    <span className="statement-end-if-in-editor" /> of lack of
                    personal jurisdiction, and forum non conveniens with respect
                    to venue and jurisdiction in such
                    <span className="block-component" /> state and federal
                    courts
                    <span className="statement-end-if-in-editor" />. Application
                    of the United Nations Convention on Contracts for the
                    International Sale of Goods and the Uniform Computer
                    Information Transaction Act (UCITA) are excluded from these
                    Legal Terms.
                  </BodyText>
                  <div style={{ lineHeight: '1.5', textAlign: 'left' }}>
                    <br />
                  </div>
                  <BodyText>
                    <span className="block-component" />
                    In no event shall any Dispute brought by either Party
                    related in any way to the Services be commenced more than{' '}
                    <span className="question">one (1)</span> years after the
                    cause of action arose.
                    <span className="statement-end-if-in-editor" />
                    If this provision is found to be illegal or unenforceable,
                    then neither Party will elect to arbitrate any Dispute
                    falling within that portion of this provision found to be
                    illegal or unenforceable and such Dispute shall be decided
                    by a court of competent jurisdiction within the courts
                    listed for jurisdiction above, and the Parties agree to
                    submit to the personal jurisdiction of that court.
                    <span className="block-component" />
                  </BodyText>
                  <div style={{ lineHeight: '1.5', textAlign: 'left' }}>
                    <br />
                  </div>
                  <Heading2>Restrictions</Heading2>
                  <div style={{ lineHeight: '1.5', textAlign: 'left' }}>
                    <br />
                  </div>
                  <BodyText>
                    The Parties agree that any arbitration shall be limited to
                    the Dispute between the Parties individually. To the full
                    extent permitted by law, (a) no arbitration shall be joined
                    with any other proceeding; (b) there is no right or
                    authority for any Dispute to be arbitrated on a class-action
                    basis or to <span className="block-component" />
                    utilize
                    <span className="statement-end-if-in-editor" /> class action
                    procedures; and (c) there is no right or authority for any
                    Dispute to be brought in a purported representative capacity
                    on behalf of the general public or any other persons.
                  </BodyText>
                  <div style={{ lineHeight: '1.5', textAlign: 'left' }}>
                    <br />
                  </div>
                  <Heading2>
                    Exceptions to Informal Negotiations and Arbitration
                  </Heading2>
                </TextContainer>
                <TextContainer>
                  <div style={{ lineHeight: '1.5', textAlign: 'left' }}>
                    <br />
                  </div>
                  <BodyText>
                    <span className="block-component" />
                    The Parties agree that the following Disputes are not
                    subject to the above provisions concerning informal
                    negotiations binding arbitration: (a) any Disputes seeking
                    to enforce or protect, or concerning the validity of, any of
                    the intellectual property rights of a Party; (b) any Dispute
                    related to, or arising from, allegations of theft, piracy,
                    invasion of privacy, or <span className="block-component" />
                    unauthorized
                    <span className="statement-end-if-in-editor" /> use; and (c)
                    any claim for injunctive relief. If this provision is found
                    to be illegal or unenforceable, then neither Party will
                    elect to arbitrate any Dispute falling within that portion
                    of this provision found to be illegal or unenforceable and
                    such Dispute shall be decided by a court of competent
                    jurisdiction within the courts listed for jurisdiction
                    above, and the Parties agree to submit to the personal
                    jurisdiction of that court.
                    <span className="statement-end-if-in-editor" />
                  </BodyText>
                  <div style={{ lineHeight: '1.5', textAlign: 'left' }}>
                    <br />
                  </div>
                  <Heading1 id="corrections">17. CORRECTIONS</Heading1>
                  <div style={{ lineHeight: '1.5', textAlign: 'left' }}>
                    <br />
                  </div>
                  <BodyText>
                    There may be information on the Services that contains
                    typographical errors, inaccuracies, or omissions, including
                    descriptions, pricing, availability, and various other
                    information. We reserve the right to correct any errors,
                    inaccuracies, or omissions and to change or update the
                    information on the Services at any time, without prior
                    notice.
                  </BodyText>
                  <div style={{ lineHeight: '1.5', textAlign: 'left' }}>
                    <br />
                  </div>
                  <Heading1 id="disclaimer">18. DISCLAIMER</Heading1>
                  <div style={{ lineHeight: '1.5', textAlign: 'left' }}>
                    <br />
                  </div>
                </TextContainer>
                <TextContainer>
                  <BodyText>
                    THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE
                    BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT
                    YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE
                    DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION
                    WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT
                    LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY,
                    FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE
                    MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR
                    COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF ANY
                    WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND
                    WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1)
                    ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS,
                    (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE
                    WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE
                    SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR
                    SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION
                    AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY
                    INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE
                    SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE
                    WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY
                    THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY
                    CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND
                    INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED,
                    TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES.
                    WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME
                    RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR
                    OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY
                    HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION
                    FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT
                    BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING
                    ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF
                    PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR
                    SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD
                    USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE
                    APPROPRIATE.
                  </BodyText>
                  <div style={{ lineHeight: '1.5', textAlign: 'left' }}>
                    <br />
                  </div>
                  <Heading1 id="liability">
                    19. LIMITATIONS OF LIABILITY
                  </Heading1>
                  <div style={{ lineHeight: '1.5', textAlign: 'left' }}>
                    <br />
                  </div>
                </TextContainer>
                <TextContainer>
                  <BodyText>
                    IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS
                    BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT,
                    INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR
                    PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS
                    OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE
                    SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF
                    SUCH DAMAGES.
                  </BodyText>
                  <div className="block-container if">
                    <BodyText>
                      <div data-type="conditional-block">
                        <div
                          className="block-component"
                          data-record-question-key="limitations_liability_option"
                          data-type="statement"
                        />
                        <div data-type="body">
                          NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED
                          HEREIN, OUR LIABILITY TO YOU FOR ANY CAUSE WHATSOEVER
                          AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL
                          TIMES BE LIMITED TO{' '}
                          <div className="block-container if">
                            <div data-type="conditional-block">
                              <div
                                className="block-component"
                                data-record-question-key="limitations_liability_option"
                                data-type="statement"
                              />
                              <div data-type="body">
                                THE LESSER OF THE AMOUNT PAID, IF ANY, BY YOU TO
                                US{' '}
                                <div data-type="conditional-block">
                                  <div
                                    className="block-component"
                                    data-record-question-key="limilation_liability_time_option"
                                    data-type="statement"
                                  />
                                  <div data-type="body">
                                    DURING THE{' '}
                                    <span
                                      className="block-container question question-in-editor"
                                      data-id="98461079-8520-8e55-edbd-84fdc37a26d4"
                                      data-type="question"
                                    >
                                      six (6)
                                    </span>{' '}
                                    MONTH PERIOD PRIOR TO ANY CAUSE OF ACTION
                                    ARISING
                                  </div>
                                </div>{' '}
                                OR{' '}
                                <div className="block-component">
                                  <span className="question">
                                    $4,000.00 USD
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          . CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT
                          ALLOW LIMITATIONS ON IMPLIED WARRANTIES OR THE
                          EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE
                          LAWS APPLY TO YOU, SOME OR ALL OF THE ABOVE
                          DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND
                          YOU MAY HAVE ADDITIONAL RIGHTS.
                        </div>
                      </div>
                    </BodyText>
                  </div>
                </TextContainer>
                <TextContainer>
                  <Heading1 id="indemnification">20. INDEMNIFICATION</Heading1>
                  <BodyText>
                    You agree to defend, indemnify, and hold us harmless,
                    including our subsidiaries, affiliates, and all of our
                    respective officers, agents, partners, and employees, from
                    and against any loss, damage, liability, claim, or demand,
                    including reasonable attorneys’ fees and expenses, made by
                    any third party due to or arising out of:
                    <div className="block-container if">
                      <div data-type="conditional-block">
                        <div
                          className="block-component"
                          data-record-question-key="user_post_content_option"
                          data-type="statement"
                        />
                        <div data-type="body">(1) your Contributions;</div>
                      </div>
                    </div>
                    (2) use of the Services; (3) breach of these Legal Terms;
                    (4) any breach of your representations and warranties set
                    forth in these Legal Terms; (5) your violation of the rights
                    of a third party, including but not limited to intellectual
                    property rights; or (6) any overt harmful act toward any
                    other user of the Services with whom you connected via the
                    Services. Notwithstanding the foregoing, we reserve the
                    right, at your expense, to assume the exclusive defense and
                    control of any matter for which you are required to
                    indemnify us, and you agree to cooperate, at your expense,
                    with our defense of such claims. We will use reasonable
                    efforts to notify you of any such claim, action, or
                    proceeding which is subject to this indemnification upon
                    becoming aware of it.
                  </BodyText>
                </TextContainer>
                <TextContainer>
                  <Heading1 id="userdata">21. USER DATA</Heading1>
                  <BodyText>
                    We will maintain certain data that you transmit to the
                    Services for the purpose of managing the performance of the
                    Services, as well as data relating to your use of the
                    Services. Although we perform regular routine backups of
                    data, you are solely responsible for all data that you
                    transmit or that relates to any activity you have undertaken
                    using the Services. You agree that we shall have no
                    liability to you for any loss or corruption of any such
                    data, and you hereby waive any right of action against us
                    arising from any such loss or corruption of such data.
                  </BodyText>
                </TextContainer>
                <TextContainer>
                  <Heading1 id="electronic">
                    22. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
                  </Heading1>
                  <BodyText>
                    Visiting the Services, sending us emails, and completing
                    online forms constitute electronic communications. You
                    consent to receive electronic communications, and you agree
                    that all agreements, notices, disclosures, and other
                    communications we provide to you electronically, via email
                    and on the Services, satisfy any legal requirement that such
                    communication be in writing. YOU HEREBY AGREE TO THE USE OF
                    ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS,
                    AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS
                    OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE
                    SERVICES. You hereby waive any rights or requirements under
                    any statutes, regulations, rules, ordinances, or other laws
                    in any jurisdiction which require an original signature or
                    delivery or retention of non-electronic records, or to
                    payments or the granting of credits by any means other than
                    electronic means.
                  </BodyText>
                </TextContainer>
                <TextContainer>
                  <Heading1 id="california">
                    23. CALIFORNIA USERS AND RESIDENTS
                  </Heading1>
                  <BodyText>
                    If any complaint with us is not satisfactorily resolved, you
                    can contact the Complaint Assistance Unit of the Division of
                    Consumer Services of the California Department of Consumer
                    Affairs in writing at 1625 North Market Blvd., Suite N 112,
                    Sacramento, California 95834 or by telephone at (800)
                    952-5210 or (916) 445-1254.
                  </BodyText>
                </TextContainer>
                <TextContainer>
                  <Heading1 id="misc">24. MISCELLANEOUS</Heading1>
                  <BodyText>
                    These Legal Terms and any policies or operating rules posted
                    by us on the Services or in respect to the Services
                    constitute the entire agreement and understanding between
                    you and us. Our failure to exercise or enforce any right or
                    provision of these Legal Terms shall not operate as a waiver
                    of such right or provision. These Legal Terms operate to the
                    fullest extent permissible by law. We may assign any or all
                    of our rights and obligations to others at any time. We
                    shall not be responsible or liable for any loss, damage,
                    delay, or failure to act caused by any cause beyond our
                    reasonable control. If any provision or part of a provision
                    of these Legal Terms is determined to be unlawful, void, or
                    unenforceable, that provision or part of the provision is
                    deemed severable from these Legal Terms and does not affect
                    the validity and enforceability of any remaining provisions.
                    There is no joint venture, partnership, employment or agency
                    relationship created between you and us as a result of these
                    Legal Terms or use of the Services. You agree that these
                    Legal Terms will not be construed against us by virtue of
                    having drafted them. You hereby waive any and all defenses
                    you may have based on the electronic form of these Legal
                    Terms and the lack of signing by the parties hereto to
                    execute these Legal Terms.
                  </BodyText>
                </TextContainer>
                <TextContainer>
                  <Heading1 id="addclause">25. DELIVERABILITY TERMS</Heading1>
                  <BodyText>
                    Building of the website will begin upon receiving the full
                    one time payment or the first payment for subscription
                    payments. Completion will occur within 2 business days at
                    least and 7 business days at most. An application may be
                    removed from the review process at any time. Once a payment
                    is made all sales are final. Eric Phifer LLC agrees to
                    maintain the coding, optimization and technical aspects of
                    the clients website. This maintenance has a yearly
                    subscription fee of $750. If payment is not received by the
                    date it is due, the maintenance portion of this agreement
                    will be nullified and the client will be responsible for all
                    maintenance required.
                  </BodyText>
                </TextContainer>
                <TextContainer>
                  <Heading1>CONTACT US</Heading1>
                  <BodyText>
                    In order to resolve a complaint regarding the Services or to
                    receive further information regarding use of the Services,
                    please contact us at:
                  </BodyText>
                  <BodyText>
                    <strong>Eric Phifer LLC</strong>
                  </BodyText>
                  <BodyText>
                    <span>180 S Elm St</span>
                  </BodyText>
                  <BodyText>
                    <span>Fruita, CO 81521</span>
                  </BodyText>
                  <BodyText>
                    <strong>United States</strong>
                  </BodyText>
                  <BodyText>
                    Phone: <span>970-210-0060</span>
                  </BodyText>
                  <BodyText>
                    <span>eric@ericphiferllc.com</span>
                  </BodyText>
                </TextContainer>
              </div>
            </div>
          </div>
        </TextContainer>
      </Container>
    </ConditionStyles>
  )
}
