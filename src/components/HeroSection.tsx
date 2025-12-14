import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Points, PointMaterial } from '@react-three/drei';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Play, CheckCircle2 } from 'lucide-react';
import * as THREE from 'three';

// --- 3D Background Components ---
const Particles = (props: any) => {
    const ref = useRef<THREE.Points>(null);
    const sphere = useMemo(() => {
        const count = 2000; // Increased particle count for cosmic feel
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count * 3; i++) {
            const r = 20 * Math.cbrt(Math.random());
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);
            positions[i] = r * Math.sin(phi) * Math.cos(theta);
            positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
            positions[i + 2] = r * Math.cos(phi);
        }
        return positions;
    }, []);

    useFrame((_state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 30; // Very slow rotation
            ref.current.rotation.y -= delta / 40;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#003087" // Navy particles
                    size={0.03}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.4}
                />
            </Points>
        </group>
    );
};

// Aurora / Ambient Glow Effect using MeshDistortMaterial
const AmbientGlow = () => {
    return (
        <group>
            {/* Center-ish glow */}
            <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
                <Sphere args={[6, 32, 32]} position={[0, -2, -10]} scale={[2.5, 1, 1]}>
                    <MeshDistortMaterial
                        color="#1FA996" // Teal
                        attach="material"
                        distort={0.4}
                        speed={2}
                        roughness={1}
                        metalness={0}
                        opacity={0.2}
                        transparent
                    />
                </Sphere>
            </Float>
            {/* Hint of Electric Green */}
            <Float speed={2} rotationIntensity={0.4} floatIntensity={0.5}>
                <Sphere args={[3, 32, 32]} position={[5, 2, -12]}>
                    <MeshDistortMaterial
                        color="#FABE61" // Orange accent
                        attach="material"
                        distort={0.5}
                        speed={3}
                        roughness={1}
                        metalness={0}
                        opacity={0.15}
                        transparent
                    />
                </Sphere>
            </Float>
        </group>
    )
}

const Hero3DBackground = () => {
    return (
        <div className="absolute inset-0 z-0 opacity-100 bg-brand-gray">
            {/* CSS Gradient fallback/overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-brand-gray to-brand-gray opacity-80 z-[-1]" />

            <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                <ambientLight intensity={0.8} />
                <Particles />
                <AmbientGlow />
                <fog attach="fog" args={['#F5F5F5', 5, 20]} />
            </Canvas>
        </div>
    );
};

// --- Hero Section Component ---
const HeroSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (textRef.current) {
            gsap.from(textRef.current.children, {
                y: 30,
                opacity: 0,
                duration: 1.2,
                stagger: 0.15,
                ease: "power3.out",
                delay: 0.1
            });
        }
    }, { scope: containerRef });

    return (
        <section ref={containerRef} id="hero" className="relative min-h-[110vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
            {/* 3D Background */}
            <Hero3DBackground />

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">

                <div ref={textRef} className="max-w-5xl mx-auto space-y-8 flex flex-col items-center">

                    {/* Top Logo / Icon (Optional, similar to reference) */}
                    <div className="mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-teal to-brand-navy blur-xl absolute opacity-30 animate-pulse" />
                        <div className="relative w-12 h-12 flex items-center justify-center">
                            <CheckCircle2 className="w-8 h-8 text-brand-teal" />
                        </div>
                    </div>

                    {/* Headline - Mixed Font Styles like reference */}
                    <h1 className="text-6xl md:text-8xl font-serif text-brand-navy tracking-tight lead-none">
                        Infrastructure <span className="font-heading font-normal italic text-brand-navy/60">for the</span> <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-navy via-brand-teal to-brand-navy animate-text">
                            Modern Enterprise
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-brand-navy/70 max-w-2xl leading-relaxed font-light">
                        Bank-grade security meets venture-grade growth. <br className="hidden md:block" />
                        The technical partner for established founders.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-8 w-full justify-center">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-brand-orange text-white rounded-full font-bold text-lg hover:bg-brand-orange/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-brand-orange/20"
                        >
                            Start Tech Audit
                        </a>
                        <a
                            href="#work"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-brand-navy/20 text-brand-navy rounded-full font-medium text-lg hover:bg-brand-navy/5 hover:border-brand-navy/30 transition-all duration-300"
                        >
                            <Play className="w-4 h-4 fill-current" />
                            View Case Studies
                        </a>
                    </div>

                    {/* Social Proof / Trust Indicators (Bottom of Hero) */}
                    <div className="pt-20 opacity-80">
                        <p className="text-xs font-mono uppercase tracking-widest text-brand-navy/60 mb-6">Trusted by High-Compliance Leaders</p>
                        <div className="flex flex-wrap justify-center gap-12 grayscale invert opacity-70">
                            {/* Placeholder Logos */}
                            {['FinTech_Corp', 'MedSecure', 'LogiChain', 'HealthVF'].map((name) => (
                                <span key={name} className="text-xl font-heading font-bold">{name}</span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Fade at the bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-gray to-transparent z-10" />
        </section>
    );
};

export default HeroSection;
