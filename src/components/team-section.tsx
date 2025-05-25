import { Card, CardContent } from "@/components/ui/card"
import { Section } from "@/components/ui/section"

export function TeamSection() {
  return (
    <Section id="team" className="py-16">
      <div className="w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Meet Our Co-Founders
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Tamoko Whenua Development Collective is led by two dedicated professionals, combining decades of experience in civil construction and engineering.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center text-xl font-medium">
                  BM
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Ben Mahanga</h3>
                  <p className="text-muted-foreground">Co-Founder & Director</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Ben brings extensive experience in civil construction and project management, having worked on major infrastructure projects across New Zealand and Australia.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center text-xl font-medium">
                  CB
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Christo Brits</h3>
                  <p className="text-muted-foreground">Co-Founder & Director</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                Christo is a seasoned engineer with a passion for innovative solutions in civil infrastructure, focusing on bridging traditional knowledge and modern practices.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  )
}
