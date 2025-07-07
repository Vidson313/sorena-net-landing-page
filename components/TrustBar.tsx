import React, { useState, useEffect, useRef } from 'react';

interface Stat {
    value: string;
    label: string;
}

const stats: Stat[] = [
    { value: '12,000+', label: 'مشتری خوشحال' },
    { value: '25,000+', label: 'محصول فروخته‌شده' },
    { value: '8+', label: 'سال سابقه' },
    { value: '99%', label: 'رضایت مشتری' },
];

const AnimatedCounter: React.FC<{ value: string }> = ({ value }) => {
    const target = parseInt(value.replace(/[^\d]/g, ''), 10);
    const suffix = value.replace(/[\d,]/g, '');
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLParagraphElement>(null);

    const easeOutExpo = (t: number) => t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let start = 0;
                    const duration = 2500;
                    const startTime = Date.now();

                    const animate = () => {
                        const now = Date.now();
                        const timePassed = now - startTime;
                        const progress = Math.min(timePassed / duration, 1);
                        const easedProgress = easeOutExpo(progress);
                        
                        setCount(Math.floor(easedProgress * (target - start) + start));

                        if (progress < 1) {
                            requestAnimationFrame(animate);
                        } else {
                            setCount(target);
                            if(ref.current) observer.unobserve(ref.current);
                        }
                    };
                    requestAnimationFrame(animate);
                }
            },
            { threshold: 0.5 }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [target]);

    return (
        <p ref={ref} className="text-3xl md:text-4xl font-bold text-white">
            {count.toLocaleString('fa-IR')}{suffix}
        </p>
    );
};

const TrustBar: React.FC = () => {
    return (
        <div className="bg-white/5 backdrop-blur-md border-y border-white/10">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat) => (
                        <div key={stat.label}>
                            <AnimatedCounter value={stat.value} />
                            <p className="text-sm text-gray-text mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TrustBar;