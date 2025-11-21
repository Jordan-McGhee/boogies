import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Contact() {
    return (
        <section id="contact" className="py-10">
            <h2 className="text-3xl font-bold font-sub">Get Started</h2>
            <div className="grid md:grid-cols-2 gap-10 mt-10">
                <Card className="bg-white/10 backdrop-blur p-6 rounded-2xl border border-white/10">
                    <CardContent className="space-y-4 font-sub">
                        <input className="w-full p-3 rounded-xl bg-white/10 text-white placeholder-white/50" placeholder="Name" />
                        <input className="w-full p-3 rounded-xl bg-white/10 text-white placeholder-white/50" placeholder="Email" />
                        <input className="w-full p-3 rounded-xl bg-white/10 text-white placeholder-white/50" placeholder="Location" />
                        <textarea className="w-full p-3 rounded-xl bg-white/10 text-white placeholder-white/50" rows={4} placeholder="Tell us about your space" />
                        <Button className="w-full bg-white text-purple-700 rounded-xl py-3 font-semibold">Submit</Button>
                    </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur p-6 rounded-2xl border border-white/10 font-sub">
                    <CardTitle>Book a site visit</CardTitle>
                    <CardContent className="mt-2 text-white/80">
                        We’ll measure your space and share revenue projections.
                        <ul className="mt-4 list-disc pl-5 space-y-1">
                            <li>Fast installation</li>
                            <li>Custom branding</li>
                            <li>Remote monitoring</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
