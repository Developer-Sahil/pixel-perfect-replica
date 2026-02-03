import { Instagram } from "lucide-react";
// Using existing product images as placeholders for instagram feed
import image1 from "@/assets/hero-tshirt.png";
import image2 from "@/assets/product-1.png";
import image3 from "@/assets/product-2.png";
import image4 from "@/assets/product-3.png";

const posts = [
    { id: 1, image: image1, likes: 245 },
    { id: 2, image: image2, likes: 189 },
    { id: 3, image: image3, likes: 312 },
    { id: 4, image: image4, likes: 156 },
];

const InstagramFeed = () => {
    return (
        <section className="py-24 bg-background border-t border-border/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Instagram className="w-6 h-6 text-primary" />
                        <span className="text-primary font-bold tracking-widest text-sm">@TWISTEDPLANT</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold font-serif text-foreground">
                        Worn By You
                    </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {posts.map((post) => (
                        <a
                            key={post.id}
                            href="https://instagram.com/twistedplant"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative aspect-square overflow-hidden rounded-xl bg-card"
                        >
                            <img
                                src={post.image}
                                alt="Instagram post"
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <Instagram className="w-8 h-8 text-white" />
                            </div>
                        </a>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://instagram.com/twistedplant"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors border-b border-primary/50 pb-1"
                    >
                        Follow on Instagram
                    </a>
                </div>
            </div>
        </section>
    );
};

export default InstagramFeed;
