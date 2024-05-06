import { ApplicationForm } from "./form";

export default function Application() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-3 md:p-24">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-8">
        Application Form
      </h1>

      <ApplicationForm />
    </section>
  );
}
