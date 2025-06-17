import type { Metadata } from "next"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, ImageIcon, FileText, Video, Palette, Globe } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Press Kit | Connected",
  description: "Download Connected's official press kit including logos, brand assets, and company information.",
}

export default function PressKitPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 font-syne">Press Kit</h1>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Download our official brand assets, logos, and company information for media use.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Download Section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
            <div className="text-center mb-12 mx-auto max-w-4xl">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-syne">Quick Downloads</h2>
              <p className="text-lg sm:text-xl text-muted-foreground">Get everything you need in one package</p>
            </div>

            <div className="max-w-2xl mx-auto">
              <Card className="border-2 border-primary/20">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Complete Press Kit</CardTitle>
                  <CardDescription>
                    Includes all logos, brand guidelines, company information, and high-resolution images
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button size="lg" className="mb-4">
                    <Download className="mr-2 h-5 w-5" />
                    Download Full Press Kit (25MB)
                  </Button>
                  <p className="text-sm text-muted-foreground">Last updated: January 2024 • ZIP format</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Individual Assets */}
        <section className="py-16 sm:py-20 bg-lynx-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
            <div className="text-center mb-12 mx-auto max-w-4xl">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-syne">Individual Assets</h2>
              <p className="text-lg sm:text-xl text-muted-foreground">Download specific assets as needed</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {/* Logos */}
              <Card className="mx-auto w-full max-w-sm lg:max-w-none">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <ImageIcon className="h-5 w-5 text-primary" />
                    <CardTitle>Logos</CardTitle>
                  </div>
                  <CardDescription>Official Connected logos in various formats</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Primary Logo (SVG)</span>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Logo Mark (PNG)</span>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">White Version (SVG)</span>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Black Version (SVG)</span>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Brand Guidelines */}
              <Card className="mx-auto w-full max-w-sm lg:max-w-none">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Palette className="h-5 w-5 text-primary" />
                    <CardTitle>Brand Guidelines</CardTitle>
                  </div>
                  <CardDescription>Official brand standards and usage guidelines</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Brand Guidelines (PDF)</span>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Color Palette (PDF)</span>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Typography Guide (PDF)</span>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Company Information */}
              <Card className="mx-auto w-full max-w-sm lg:max-w-none">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <CardTitle>Company Info</CardTitle>
                  </div>
                  <CardDescription>Official company information and fact sheets</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Company Fact Sheet</span>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Executive Bios</span>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Company Timeline</span>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Photos */}
              <Card className="mx-auto w-full max-w-sm lg:max-w-none">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <ImageIcon className="h-5 w-5 text-primary" />
                    <CardTitle>Photos</CardTitle>
                  </div>
                  <CardDescription>High-resolution company and team photos</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Office Photos (ZIP)</span>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Team Photos (ZIP)</span>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Event Photos (ZIP)</span>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Videos */}
              <Card className="mx-auto w-full max-w-sm lg:max-w-none">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Video className="h-5 w-5 text-primary" />
                    <CardTitle>Videos</CardTitle>
                  </div>
                  <CardDescription>Company videos and promotional content</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Company Overview</span>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">CEO Interview</span>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Office Tour</span>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Web Assets */}
              <Card className="mx-auto w-full max-w-sm lg:max-w-none">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Globe className="h-5 w-5 text-primary" />
                    <CardTitle>Web Assets</CardTitle>
                  </div>
                  <CardDescription>Digital assets for online use</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Social Media Kit</span>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Banner Images</span>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Favicon Package</span>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Usage Guidelines */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl font-bold mb-12 text-center font-syne">Usage Guidelines</h2>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-green-200 bg-green-50">
                  <CardHeader>
                    <CardTitle className="text-green-800">✓ Do</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-green-700">
                      <li>• Use official logos and colors</li>
                      <li>• Maintain proper spacing around logos</li>
                      <li>• Use high-resolution images</li>
                      <li>• Follow brand guidelines</li>
                      <li>• Credit Connected appropriately</li>
                      <li>• Contact us for custom requests</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-red-200 bg-red-50">
                  <CardHeader>
                    <CardTitle className="text-red-800">✗ Don't</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-red-700">
                      <li>• Modify or distort logos</li>
                      <li>• Use unauthorized colors</li>
                      <li>• Place logos on busy backgrounds</li>
                      <li>• Use low-resolution images</li>
                      <li>• Misrepresent our company</li>
                      <li>• Use assets for commercial purposes without permission</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Contact for Media */}
        <section className="py-16 sm:py-20 bg-lynx-white">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-7xl">
            <div className="text-center">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 font-syne">Media Contact</h2>
              <p className="text-lg sm:text-xl text-muted-foreground mb-8">
                Need additional assets or have questions about usage?
              </p>
              <div className="max-w-md mx-auto">
                <Card>
                  <CardContent className="p-6 text-center">
                    <h3 className="font-bold mb-2">Press Relations</h3>
                    <p className="text-muted-foreground mb-4">
                      press@connected.com
                      <br />
                      +1 (415) 555-0123
                    </p>
                    <Button>Contact Media Team</Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
