import { Html, Head, Body, Container, Heading, Text, Button } from '@react-email/components'

export default function ResetPasswordEmail({ resetLink = '#' }: { resetLink: string }) {
  return (
    <Html>
      <Head />
      <Body style={{ backgroundColor: '#0b0c10', color: '#ffffff', fontFamily: 'sans-serif', padding: '20px' }}>
        <Container style={{ backgroundColor: '#12131c', border: '1px solid #1f2937', borderRadius: '16px', padding: '32px' }}>
          <Heading style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
            Reset Your Password 🔒
          </Heading>
          <Text style={{ fontSize: '14px', color: '#9ca3af', lineHeight: '1.5', marginBottom: '24px' }}>
            We received a request to reset your password. Click the button below to proceed. If you didn't request this, you can safely ignore this email.
          </Text>
          <Button
            href={resetLink}
            style={{ backgroundColor: '#9333ea', color: '#ffffff', padding: '12px 24px', borderRadius: '12px', fontSize: '14px', textDecoration: 'none' }}
          >
            Reset Password
          </Button>
        </Container>
      </Body>
    </Html>
  )
}