"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";

const TermsOfService = () => {
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
            <main>
              <h1 className="text-2xl font-bold mb-4">Allgemeine Geschäftsbedingungen</h1>
              <h2 className="text-xl font-semibold mb-2">Geltungsbereich und Anbieter</h2>
              <p>1.1 Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für die Nutzung der Plattform „Flipify“ (nachfolgend „Plattform“) durch Verkäufer und Käufer von Online-Shops.</p>
              <p>1.2 Anbieter der Plattform ist die FLIPIFY GmbH, Große Elbstraße 45, 22767 Hamburg, USTID: DE368512840, eingetragen im Handelsregister des Amtsgerichts Hamburg unter HRB 187455, vertreten durch den Geschäftsführer Kevin Helfenstein (nachfolgend „Flipify“).</p>
              <p>Kontakt: info@flipify.de</p>

              <h2 className="text-xl font-semibold mb-2">Leistungsbeschreibung</h2>
              <p>2.1 Flipify ist eine digitale Vermittlungsplattform, die Verkäufer von Online-Shops (nachfolgend „Verkäufer“) und potenzielle Käufer (nachfolgend „Käufer“) zusammenführt.</p>
              <p>2.2 Verkäufer haben die Möglichkeit, gegen eine Gebühr Inserate für ihre Online-Shops zu veröffentlichen. Käufer können diese Inserate einsehen und mit den Verkäufern über die Plattform in Kontakt treten.</p>
              <p>2.3 Flipify erhebt eine Inseratsgebühr, die alle drei Monate fällig wird, sowie eine Transaktionsgebühr bei erfolgreicher Vermittlung und Geldübertragung.</p>

              <h2 className="text-xl font-semibold mb-2">Registrierung und Pflichten der Nutzer</h2>
              <p>3.1 Um die Plattform zu nutzen, müssen sich Verkäufer und Käufer registrieren. Die Registrierung erfordert die Angabe einer gültigen E-Mail-Adresse und des vollständigen Namens. Verkäufer müssen zudem ihre Bankverbindung angeben, um Zahlungen zu erhalten.</p>
              <p>3.2 Alle Angaben müssen vollständig und wahrheitsgemäß sein. Flipify behält sich das Recht vor, falsche Angaben strafrechtlich verfolgen zu lassen.</p>

              <h2 className="text-xl font-semibold mb-2">Vertragsschluss und Abwicklung</h2>
              <p>4.1 Der Kaufvertrag zwischen Verkäufer und Käufer kommt zustande, wenn der Käufer den Kaufprozess über die Plattform abschließt. Anschließend muss das Geld auf ein Treuhandkonto von Flipify eingezahlt werden.</p>
              <p>4.2 Flipify fungiert als Treuhänder und verwahrt das Geld bis zur erfolgreichen Übertragung aller Shop-Daten vom Verkäufer auf den Käufer.</p>
              <p>4.3 Der Verkäufer hat nach Zahlungseingang sieben Tage Zeit, alle erforderlichen Daten zu übertragen. Der Käufer hat anschließend sieben Tage Zeit, diese zu prüfen. Nach erfolgreicher Prüfung gibt Flipify das Geld frei und überweist es an den Verkäufer.</p>
              <p>4.4 Die Transaktionsgebühr wird von Flipify einbehalten. Flipify stellt eine Rechnung nur über die Transaktionsgebühr aus, nicht über den Kaufpreis des Shops.</p>
              <p>4.5 Der Kauf ist rechtskräftig und unwiderruflich, sobald er über die Plattform bestätigt wurde. Ein Widerrufsrecht besteht nicht.</p>

              <h2 className="text-xl font-semibold mb-2">Haftung und Haftungsausschluss</h2>
              <p>5.1 Flipify übernimmt keine Haftung für die Richtigkeit der Angaben in den Inseraten, für Mängel der verkauften Shops oder für sonstige Leistungen der Verkäufer.</p>
              <p>5.2 Der Käufer- und Verkäuferschutz greift nur, wenn der gesamte Kaufprozess über die Plattform abgewickelt wird.</p>

              <h2 className="text-xl font-semibold mb-2">Nutzungsrechte</h2>
              <p>6.1 Alle Rechte an den Inhalten der Plattform, einschließlich der Inserate, verbleiben bei Flipify.</p>

              <h2 className="text-xl font-semibold mb-2">Kündigung und Sperrung</h2>
              <p>7.1 Verkäufer können ihr Abonnement monatlich kündigen, wobei die Mindestlaufzeit drei Monate beträgt. Erfolgt keine rechtzeitige Kündigung, verlängert sich der Vertrag automatisch um weitere drei Monate.</p>
              <p>7.2 Flipify behält sich das Recht vor, Nutzer zu sperren, die sich unangemessen verhalten, oder Inserate zu entfernen, die unrealistisch, überteuert oder betrügerisch erscheinen. Eine Erstattung der Inseratsgebühr erfolgt in solchen Fällen nicht.</p>
              <p>7.3 Der Verkauf von Online-Shops, die Tabak, CBD-Produkte, Glücksspiele oder Kryptowährungen anbieten, ist auf dem Marktplatz Flipify untersagt.</p>

              <h2 className="text-xl font-semibold mb-2">Datenschutz</h2>
              <p>8.1 Die Verarbeitung personenbezogener Daten erfolgt gemäß der separaten Datenschutzerklärung, die auf der Plattform einsehbar ist.</p>

              <h2 className="text-xl font-semibold mb-2">Schlussbestimmungen</h2>
              <p>9.1 Der Gerichtsstand für alle Streitigkeiten aus oder im Zusammenhang mit diesen AGB ist Frankfurt am Main.</p>
              <p>9.2 Flipify behält sich das Recht vor, diese AGB jederzeit zu ändern.</p>
              <p>9.3 Es gilt das Recht der Bundesrepublik Deutschland.</p>
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

export default TermsOfService;
