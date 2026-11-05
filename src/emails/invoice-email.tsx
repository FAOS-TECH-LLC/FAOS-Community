import { Html, Head, Body, Container, Heading, Text } from '@react-email/components'

export default function InvoiceEmail({ amount = '$49.00', invoiceId = 'inv_01' }: { amount: string; invoiceId: string }) {
  return (
    <Html>
      <Head />
      <Body style={{ backgroundColor: '#0b0c10', color: '#ffffff', fontFamily: 'sans-serif', padding: '20px' }}>
        <Container style={{ backgroundColor: '#12131c', border: '1px solid #1f2937', borderRadius: '16px', padding: '32px' }}>
          <Heading style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
            Payment Successful 🧾
          </Heading>
          <Text style={{ fontSize: '14px', color: '#9ca3af', marginBottom: '8px' }}>
            Invoice ID: <strong>{invoiceId}</strong>
          </Text>
          <Text style={{ fontSize: '14px', color: '#9ca3af', marginBottom: '24px' }}>
            Amount Paid: <strong style={{ color: '#ffffff' }}>{amount}</strong>
          </Text>
          <Text style={{ fontSize: '12px', color: '#6b7280' }}>
            Thank you for subscribing to FAOS Community Pro Plan.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}