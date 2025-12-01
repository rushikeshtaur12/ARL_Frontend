import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
    return (
        <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold font-heading text-popcorn-charred mb-4">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-gray-600">
                        Have a project in mind? Let's make it pop!
                    </p>
                </div>

                <div className="bg-popcorn-kernel p-8 rounded-2xl shadow-lg border border-popcorn-butter/20">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
