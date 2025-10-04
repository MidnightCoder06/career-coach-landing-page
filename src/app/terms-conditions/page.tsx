import Header from "@/components/layout/Header";

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Terms & Conditions</h1>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-sm text-muted-foreground mb-8">Last updated: January 1, 2025</p>
              
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
                <p className="mb-4">
                  By accessing and using More Than A Dev's services, you accept and agree to be bound 
                  by the terms and provision of this agreement. If you do not agree to abide by the 
                  above, please do not use this service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Services Description</h2>
                <p className="mb-4">
                  More Than A Dev provides career guidance, strategy consulting, and educational 
                  resources for technology professionals seeking alternative career paths. Our services include:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>One-on-one career strategy sessions</li>
                  <li>Resume and LinkedIn optimization guidance</li>
                  <li>Interview preparation for alternative tech roles</li>
                  <li>Career transition roadmaps and action plans</li>
                  <li>Educational content and resources</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. User Responsibilities</h2>
                <p className="mb-4">As a user of our services, you agree to:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Provide accurate and complete information</li>
                  <li>Attend scheduled sessions on time</li>
                  <li>Respect our time and expertise</li>
                  <li>Not share proprietary materials without permission</li>
                  <li>Use our services for lawful purposes only</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Payment and Refunds</h2>
                <p className="mb-4">
                  Payment terms and refund policies will be clearly communicated at the time of service 
                  purchase. Generally:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Payment is due at the time of booking</li>
                  <li>Cancellations must be made 24 hours in advance</li>
                  <li>Refunds are considered on a case-by-case basis</li>
                  <li>No-shows may forfeit their session fee</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Intellectual Property</h2>
                <p className="mb-4">
                  All content, materials, and resources provided by More Than A Dev are protected by 
                  intellectual property rights. You may not reproduce, distribute, or create derivative 
                  works without explicit written permission.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Disclaimer of Warranties</h2>
                <p className="mb-4">
                  Our services are provided "as is" without any warranties, express or implied. We do not 
                  guarantee specific career outcomes, job placements, or salary increases. Results may vary 
                  based on individual circumstances, effort, and market conditions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">7. Limitation of Liability</h2>
                <p className="mb-4">
                  More Than A Dev shall not be liable for any indirect, incidental, special, or 
                  consequential damages arising from the use of our services. Our total liability 
                  shall not exceed the amount paid for the specific service in question.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">8. Privacy</h2>
                <p className="mb-4">
                  Your privacy is important to us. Please review our Privacy Policy, which also governs 
                  your use of our services, to understand our practices.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">9. Modifications</h2>
                <p className="mb-4">
                  We reserve the right to modify these terms at any time. Changes will be effective 
                  immediately upon posting. Your continued use of our services constitutes acceptance 
                  of the modified terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">10. Governing Law</h2>
                <p className="mb-4">
                  These terms shall be governed by and construed in accordance with the laws of 
                  [Your Jurisdiction], without regard to its conflict of law provisions.
                </p>
              </section>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
