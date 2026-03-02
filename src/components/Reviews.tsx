import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  { name: 'Steve M.', suburb: 'Caringbah', text: 'Blueys have been looking after our pool for years now. Always on time, always reliable. The pool has never looked better and we don\'t have to worry about a thing.' },
  { name: 'Karen L.', suburb: 'Cronulla', text: 'Excellent service! They fixed our pump issue quickly and at a very reasonable price. Highly recommend Blueys to anyone in the Shire looking for reliable pool care.' },
  { name: 'David T.', suburb: 'Miranda', text: 'After trying a few other pool services, we found Blueys and haven\'t looked back. Professional, honest, and they actually know what they\'re doing. Great value.' },
  { name: 'Sarah P.', suburb: 'Sutherland', text: 'Our pool was green and neglected for months. Blueys had it crystal clear within 48 hours. They also set us up on a regular maintenance plan. Couldn\'t be happier.' },
  { name: 'Michael R.', suburb: 'Engadine', text: 'Having used Blueys for over 5 years, I can confidently say they are the best in the area. Fair pricing, great communication, and our pool always looks amazing.' },
  { name: 'Jenny W.', suburb: 'Gymea', text: 'Blueys renovated our old pool and it looks brand new. The team was friendly, professional, and completed the job earlier than expected. Absolutely recommend them.' },
];

export default function Reviews() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const scrollWidth = scrollRef.current?.scrollWidth || 0;
    const clientWidth = scrollRef.current?.clientWidth || 0;

    gsap.to(scrollRef.current, {
      x: -(scrollWidth - clientWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom top',
        scrub: 1,
      },
    });
  }, { scope: containerRef });

  return (
    <section id="reviews" ref={containerRef} aria-label="Client reviews and testimonials" className="py-32 bg-navy text-white overflow-hidden">
      <div className="px-6 md:px-16 mb-16 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h2 className="text-4xl md:text-6xl font-serif italic mb-4">Client Feedback.</h2>
          <p className="text-cream/60 font-sans max-w-md">
            Don't just take our word for it. Here's what families across the Sutherland Shire have to say about our pool care.
          </p>
        </div>
        <div className="flex items-center gap-2" aria-label="5 out of 5 stars rating">
          <div className="flex text-aqua" aria-hidden="true">
            {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
          </div>
          <span className="font-mono text-sm tracking-widest ml-2">5.0 RATING</span>
        </div>
      </div>

      <div className="pl-6 md:pl-16">
        <div ref={scrollRef} className="flex gap-6 w-max pr-16 pb-12">
          {reviews.map((review, i) => (
            <article
              key={i}
              className="w-[350px] md:w-[450px] bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col gap-6 backdrop-blur-sm"
              aria-label={`Review by ${review.name} from ${review.suburb}`}
            >
              <div className="flex text-aqua" aria-hidden="true">
                {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
              </div>
              <p className="text-lg text-cream/90 leading-relaxed flex-grow">
                "{review.text}"
              </p>
              <div className="mt-auto pt-6 border-t border-white/10 flex justify-between items-center">
                <span className="font-bold font-sans">{review.name}</span>
                <span className="font-mono text-xs text-aqua uppercase tracking-widest">{review.suburb}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
