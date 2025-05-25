import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Icons } from "@/components/icons"
import { Team } from "@/components/team"


export const metadata = {
  title: "Mō Mātou - Tamoko Whenua Development Collective",
  description: "Discover our whakapapa, kaupapa, and mahi as we work towards a sustainable future for Te Tai Tokerau and beyond.",
}

export default function AboutPage() {
  const values = [
    {
      title: "Kaitiakitanga",
      description: "We uphold our responsibility as kaitiaki to protect and nurture our taiao (environment) for future generations.",
      icon: Icons.leaf,
    },
    {
      title: "Whanaungatanga",
      description: "We build and maintain strong, meaningful relationships that connect us to our communities and whenua.",
      icon: Icons.users,
    },
    {
      title: "Manaakitanga",
      description: "We extend care, respect, and hospitality to all, honoring the mana of every individual and community.",
      icon: Icons.handshake,
    },
    {
      title: "Kotahitanga",
      description: "We work in unity and solidarity, recognizing that together we are stronger and can achieve more.",
      icon: Icons.handshake,
    },
  ]

  return (
    <div className="container py-12 md:py-16">
      <div className="mx-auto max-w-5xl space-y-16">
        <div className="space-y-6 text-center">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/80 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Ko wai mātou
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            He kākano i ruia mai i Rangiātea
            <span className="block mt-4 text-primary">
              Tamoko Whenua Development Collective
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Weaving together traditional knowledge and contemporary practice to create sustainable futures for Te Tai Tokerau.
          </p>
        </div>

        <section className="space-y-8">
          <div className="relative">
            <div className="absolute -left-8 top-0 h-full w-1 bg-primary/20 rounded-full"></div>
            <h2 className="text-3xl font-bold tracking-tight relative pl-6">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-primary"></span>
              Ō Mātou Kōrero
            </h2>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Tamoko Whenua Development Collective was born from a vision shared by a group of Māori leaders and community developers in Te Tai Tokerau. Our name, which translates to 'the contours of the land,' reflects our deep connection to whenua and our commitment to sustainable development that honors the natural landscape and its people.
            </p>
            <p>
              Founded in 2010, our collective has grown from a small whānau initiative to a respected iwi-Māori organization working across Northland. We bring together mātauranga Māori (traditional knowledge) with contemporary development practices to create innovative solutions that address the unique challenges and opportunities in our rohe.
            </p>
            <p>
              Our work is grounded in Te Tiriti o Waitangi, and we are committed to upholding the mana motuhake of hapū and iwi while fostering meaningful partnerships with government, businesses, and community organizations.
            </p>
          </div>
        </section>

        <section className="space-y-8">
          <div className="relative">
            <div className="absolute -left-8 top-0 h-full w-1 bg-primary/20 rounded-full"></div>
            <h2 className="text-3xl font-bold tracking-tight relative pl-6">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-primary"></span>
              Te Whāinga Matua
            </h2>
          </div>
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/maori-pattern.png')] opacity-5"></div>
            <div className="relative bg-gradient-to-r from-primary/90 to-primary/80 p-8 md:p-12 text-background">
              <blockquote className="space-y-6">
                <p className="text-2xl md:text-3xl font-medium leading-relaxed italic">
                  "Whakatipu rawa, whakapakari hapori, whakamana i te iwi Māori me ōna hapori katoa."
                </p>
                <p className="text-xl">
                  "To grow resources, strengthen communities, and empower Māori and all our communities."
                </p>
              </blockquote>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          <div className="relative">
            <div className="absolute -left-8 top-0 h-full w-1 bg-primary/20 rounded-full"></div>
            <h2 className="text-3xl font-bold tracking-tight relative pl-6">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-primary"></span>
              Ō Mātou Uara
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card key={index} className="h-full group hover:shadow-lg transition-shadow duration-300">
                  <CardHeader className="flex flex-row items-start space-x-4 pb-2">
                    <div className="rounded-full bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-foreground">{value.title}</CardTitle>
                      <p className="text-muted-foreground mt-1">{value.description}</p>
                    </div>
                  </CardHeader>
                </Card>
              )
            })}
          </div>
        </section>

        <section className="space-y-8">
          <div className="relative">
            <div className="absolute -left-8 top-0 h-full w-1 bg-primary/20 rounded-full"></div>
            <h2 className="text-3xl font-bold tracking-tight relative pl-6">
              <span className="absolute left-0 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-primary"></span>
              Te Aronga
            </h2>
          </div>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Our approach is deeply rooted in Te Ao Māori perspectives, recognizing the interconnectedness of all things. We work with whānau, hapū, and iwi to develop solutions that are culturally grounded, environmentally sustainable, and economically viable.
            </p>
            <p>
              We believe in the power of mātauranga Māori (traditional knowledge) and combine this with contemporary development practices to create innovative solutions. Our approach is:
            </p>
            <ul className="space-y-3 pl-6 list-disc">
              <li><span className="font-medium">Whānau-centered:</span> Prioritizing the wellbeing and aspirations of whānau in all our work</li>
              <li><span className="font-medium">Place-based:</span> Developing solutions that are specific to the whenua and communities we serve</li>
              <li><span className="font-medium">Intergenerational:</span> Making decisions that consider the impact on future generations</li>
              <li><span className="font-medium">Collaborative:</span> Working in partnership with communities, iwi, and stakeholders</li>
            </ul>
            <p>
              Through this approach, we aim to create meaningful, lasting change that honors our past while building a sustainable future for generations to come.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <Team />
      </div>
    </div>
  )
}
