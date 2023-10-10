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
  font-size: 14px;
`

const Paragraph = styled.p``

const OrderedList = styled.ol``

const Item = styled.li``

const Strong = styled.strong`
  text-transform: uppercase;
`

export default function IntakeTerms() {
  return (
    <ConditionStyles>
      <Paragraph>
        These terms and conditions define the Terms under which you agree to
        retain Eric Phifer LLC to provide Website Design services. Please read
        these terms carefully, as they will become part of the contract between
        you and Eric Phifer LLC, and are what you agree to when you retain Eric
        Phifer LLC to provide Website design and related services.
      </Paragraph>
      <OrderedList>
        <Item>
          <Strong>WEB DESIGN SERVICES.</Strong> Any services that you order and
          pay for (“Deliverables” or “Website”) will be described in detail in
          the order form (“Order Form”). Deliverables may include Website
          design, support, and maintenance, depending on what you order. Eric
          Phifer LLC reserves the right to refuse an application for services
          for any reason.
        </Item>
        <Item>
          <Strong>FEES AND EXPENSES.</Strong> You agree to pay fixed fee. Fees
          shall be paid in advance. You may pay any fees due via Stripe. Eric
          Phifer LLC will not directly process any payment information, and will
          never have access to your payment information.
        </Item>
        <Item>
          <Strong>DELIVERY.</Strong> Eric Phifer LLC will provide Deliverables
          via Netlify hosting, Gatsby framework and Sanity content management
          services. Access to Sanity will be authorized to your chosen email
          address upon completion of the website. If you believe that the
          Deliverables don’t conform to the specifications that you provided,
          you must provide Eric Phifer LLC with a written description (which may
          be provided via email), of the ways that the Deliverables doesn’t
          conform to what you requested, within 15 (fifteen) days following the
          day that Eric Phifer LLC provides you with the finished Deliverable.
          Eric Phifer LLC agrees to make reasonable efforts to correct any
          non-conformities that you describe.
        </Item>
        <Item>
          <Strong>CHANGE IN SPECIFICATIONS.</Strong> You may request that
          changes be made to your original specifications. Your request must be
          in writing, detailing the requested changes. Eric Phifer LLC will use
          its best efforts to implement the requested changes at no additional
          cost to you, if possible without a significant change in expected time
          and scope of Deliverables. If your requested changes require a delay
          in delivery of the Website or involve a significant change in scope,
          then both parties will confer and agree on any change in timing and
          charges.
        </Item>
        <Item>
          <Strong>PROPRIETARY RIGHTS.</Strong> The Website designed for you will
          be considered a work-for-hire, and you will be the owner of all
          intellectual property rights, including but not limited to copyrights,
          in the Website (but not any underlying code) and in any materials or
          information that you provide to Eric Phifer LLC in the course of
          designing the Website. You give Eric Phifer LLC permission to use any
          information or materials you provide to Eric Phifer LLC, solely for
          purposes of developing the Deliverables and designing the Website.
          Eric Phifer LLC will own all intellectual property rights in Eric
          Phifer LLC’s proprietary codes, design techniques, technology, and
          other intellectual property rights developed by Eric Phifer LLC prior
          to or separate from the Deliverables. Eric Phifer LLC reserves the
          right to use any creation for marketing and portfolio purposes.
          Nothing in this agreement is intended to restrict Eric Phifer LLC from
          independently developing substantially similar Website(s) for any
          other clients or third parties, provided that Eric Phifer LLC does not
          directly copy the Website designed for you, and does not use any
          information provided by you.
        </Item>
        <Item>
          <Strong>INTELLECTUAL PROPERTY WARRANTY.</Strong> You agree that any
          content or information you provide to Eric Phifer LLC regarding the
          development of the Deliverables will not violate anyone else’s
          copyrights, trademarks, or other intellectual property rights. Eric
          Phifer LLC agrees that the Deliverables, to the extent provided by
          Eric Phifer LLC, will not violate anyone else’s copyrights,
          trademarks, or other intellectual property rights.
        </Item>
        <Item>
          <Strong>INDEMNITY.</Strong> Eric Phifer LLC agrees to indemnify you
          against any action brought against you by a third party claiming that
          Deliverables provided by Eric Phifer LLC infringe the third party’s
          intellectual property rights. You agree to indemnify Eric Phifer LLC
          against any action brought against Eric Phifer LLC by a third party,
          claiming that information and materials provided by you to Eric Phifer
          LLC infringes the third party’s intellectual property rights.
        </Item>
        <Item>
          <Strong>LIMITATION OF LIABILITY.</Strong> In the event of a dispute
          under this Agreement, you agree that Eric Phifer LLC will not be
          liable to you for any amount exceeding the amounts you paid for the
          services. You will be solely responsible for any use or misuse of the
          Deliverables.
        </Item>
        <Item>
          <Strong>INDEPENDENT CONTRACTOR.</Strong> Eric Phifer LLC will be
          performing services under this Agreement as an independent contractor,
          not as your agent or employee.
        </Item>
        <Item>
          <Strong>GOVERNING LAW AND JURISDICTION.</Strong> This Agreement shall
          be governed and construed in accordance with the laws of Colorado.
        </Item>
      </OrderedList>
    </ConditionStyles>
  )
}
