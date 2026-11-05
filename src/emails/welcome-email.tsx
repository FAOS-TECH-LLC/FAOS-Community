import { Html, Head, Body, Container, Heading, Text, Button } from '@react-email/components'

export default function WelcomeEmail({ name = 'Creator' }: { name: string }) {
  return (
    <Html>
      <Head />
      <Body style={{ backgroundColor: '#0b0c10', color: '#ffffff', fontFamily: 'sans-serif', padding: '20px' }}>
        <Container style={{ backgroundColor: '#12131c', border: '1px solid #1f2937', borderRadius: '16px', padding: '32px' }}>
          <Heading style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>
            Welcome to FAOS COMMUNITY, {name}! 🚀
          </Heading>
          <Text style={{ fontSize: '14px', color: '#9ca3af', lineHeight: '1.5', marginBottom: '24px' }}>
            We are thrilled to have you onboard. Explore live spaces, connect with global members, and scale your community engagement today.
          </Text>
          <Button
            href="https://community.faos-tech.asia/feed"
            style={{ backgroundColor: '#9333ea', color: '#ffffff', padding: '12px 24px', borderRadius: '12px', fontSize: '14px', textDecoration: 'none' }}
          >
            Enter Community Feed
          </Button>
        </Container>
      </Body>
    </Html>
  )
}