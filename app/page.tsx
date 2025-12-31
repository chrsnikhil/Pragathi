import PsychometricTest from "../components/PsychometricTest";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative overflow-hidden">
      <div className="z-10 w-full max-w-5xl items-center justify-center font-mono text-sm lg:flex">
        <PsychometricTest />
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-500/20 rounded-full blur-[120px]" />
      </div>
    </main>
  );
}
