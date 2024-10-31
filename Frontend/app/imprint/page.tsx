"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";

const Imprint = () => {
  const router = useRouter();

  const handleStartDemoClick = () => {
    router.push("/start");
  };

  const handleLogoClick = () => {
    router.push('/'); // Redirect to the home page
  };

  return (
    <div className="h-screen bg-[#FAF7F2]">
      <ScrollArea className="h-full">
        <div className="min-h-[calc(100vh-52px)] p-4 md:px-8">
          <div className="min-h-screen bg-[#FAF7F2]">
            
            {/* Header */}
            <header className="py-6 px-4 md:px-8 flex flex-col justify-between items-center bg-[#FAF7F2] z-50 fixed top-0 left-0 right-0">
              <div className="w-full flex justify-between items-center">
                <div
                  className="relative z-20 flex items-center text-2xl font-bold cursor-pointer"
                  onClick={handleLogoClick} // Handle click to redirect
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-6 w-6"
                  >
                    <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                  </svg>
                  NovusCode
                </div>
                <nav>
                  <div className="flex space-x-4">
                    <Button
                      variant="default"
                      className="bg-black hover:bg-gray-800 text-white"
                      onClick={handleStartDemoClick}
                    >
                      Start Demo
                    </Button>
                    <Button
                      variant="secondary"
                      className="bg-white hover:text-black"
                      onClick={handleStartDemoClick}
                    >
                      Login
                    </Button>
                  </div>
                </nav>
              </div>

            </header>

            {/* Content */}
            <main className="container mx-auto px-4 md:px-8 py-24 bg-[#FAF7F2]">
              <div className="text-center">
                <h1 className="text-4xl font-bold mb-4">Impressum</h1>
                <p className="text-lg text-left mb-4">
                  <strong>Angaben gemäß § 5 TMG</strong><br />
                  NovusCode<br />
                  Schöfferstraße 2<br />
                  64295 Darmstadt<br />
                  <br />
                  Vertreten durch:<br />
                  Delschad Jankir<br />
                  <br />
                  <strong>Kontakt</strong><br />
                  E-Mail: delschad-jankir@novuscode.de<br />
                  <br />
                  <strong>Streitschlichtung</strong><br />
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" className="text-blue-500 hover:underline">https://ec.europa.eu/consumers/odr</a>.<br />
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.<br />
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.<br />
                  <br />
                  <strong>Haftung für Inhalte</strong><br />
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.<br />
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.<br />
                  <br />
                  <strong>Haftung für Links</strong><br />
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.<br />
                  Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.<br />
                  <br />
                  <strong>Urheberrecht</strong><br />
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.<br />
                  Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.<br />
                  <br />
                  Quelle: <a href="https://www.e-recht24.de" className="text-blue-500 hover:underline">https://www.e-recht24.de</a>
                </p>
              </div>
            </main>

            {/* Footer */}
            <footer className="py-8 text-center border-t border-gray-200">
              <div className="container mx-auto">
                <p className="text-black">
                  &copy; {new Date().getFullYear()} <span className="font-semibold">NovusCode</span>. All rights reserved.
                </p>
                <ul className="flex justify-center space-x-4 mt-4">
                  <li>
                    <a href="/imprint" className="text-black hover:text-blue-500 transition-colors duration-300">Imprint</a>
                  </li>
                  <li>
                    <a href="/privacy-policy" className="text-black hover:text-blue-500 transition-colors duration-300">Privacy policy</a>
                  </li>
                  <li>
                    <a href="/terms-of-service" className="text-black hover:text-blue-500 transition-colors duration-300">Terms of Service</a>
                  </li>
                </ul>
              </div>
            </footer>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
};

export default Imprint;
