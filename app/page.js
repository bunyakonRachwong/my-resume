import AboutPage from "@/components/about";
import ContactPage from "@/components/Contact";
import GithubIcon from "@/components/icon";
import ServicesPage from "@/components/Services";

export default function HomePage() {
  return (
    <main>
      <section id="home" className="h-screen flex flex-col bg-gray-100 items-center justify-center">
      <div className="flex items-center">
        <h1 className="text-6xl font-bold">Bunyakon</h1>
        <div className="avatar">
          <div className="w-54 rounded-full mx-4">
            <img src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp" />
          </div>
        </div>
        <h1 className="text-6xl font-bold"> Rachiwong</h1>
      </div>
      <div className="mt-8">
        <GithubIcon/>
      </div>
      </section>
      <AboutPage/>
      <ServicesPage/>
      <ContactPage/>
    </main>
  );
}
