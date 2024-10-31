"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";

const PrivacyPolicy = () => {
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
                <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
                <p className="text-lg text-left mb-4">
                  <strong>Allgemeiner Hinweis und Pflichtinformationen</strong><br />
                  Benennung der verantwortlichen Stelle<br />
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br />
                  <br />
                  <strong>NovusCode</strong><br />
                  Delschad Jankir<br />
                  Schöfferstraße 2<br />
                  64295 Darmstadt<br />
                  <br />
                  Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, Kontaktdaten o. Ä.).<br />
                  <br />
                  <strong>Widerruf Ihrer Einwilligung zur Datenverarbeitung</strong><br />
                  Nur mit Ihrer ausdrücklichen Einwilligung sind einige Vorgänge der Datenverarbeitung möglich. Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.<br />
                  <br />
                  <strong>Recht auf Beschwerde bei der zuständigen Aufsichtsbehörde</strong><br />
                  Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen Verstoßes ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Zuständige Aufsichtsbehörde bezüglich datenschutzrechtlicher Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz unseres Unternehmens befindet. Der folgende Link stellt eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten bereit: <a href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" className="text-blue-500 hover:underline">https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</a>.<br />
                  <br />
                  <strong>Recht auf Datenübertragbarkeit</strong><br />
                  Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an Dritte aushändigen zu lassen. Die Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.<br />
                  <br />
                  <strong>Recht auf Auskunft, Berichtigung, Sperrung, Löschung</strong><br />
                  Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, Herkunft der Daten, deren Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Diesbezüglich und auch zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit über die im Impressum aufgeführten Kontaktmöglichkeiten an uns wenden.<br />
                  <br />
                  <strong>SSL- bzw. TLS-Verschlüsselung</strong><br />
                  Aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, die Sie an uns als Seitenbetreiber senden, nutzt unsere Website eine SSL-bzw. TLS-Verschlüsselung. Damit sind Daten, die Sie über diese Website übermitteln, für Dritte nicht mitlesbar. Sie erkennen eine verschlüsselte Verbindung an der „https://“ Adresszeile Ihres Browsers und am Schloss-Symbol in der Browserzeile.<br />
                  <br />
                  <strong>Server-Log-Dateien</strong><br />
                  In Server-Log-Dateien erhebt und speichert der Provider der Website automatisch Informationen, die Ihr Browser automatisch an uns übermittelt. Dies sind:<br />
                  - Besuchte Seite auf unserer Domain<br />
                  - Datum und Uhrzeit der Serveranfrage<br />
                  - Browsertyp und Browserversion<br />
                  - Verwendetes Betriebssystem<br />
                  - Referrer URL<br />
                  - Hostname des zugreifenden Rechners<br />
                  - IP-Adresse<br />
                  Es findet keine Zusammenführung dieser Daten mit anderen Datenquellen statt. Grundlage der Datenverarbeitung bildet Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.<br />
                  <br />
                  <strong>Datenübermittlung bei Vertragsschluss für Warenkauf und Warenversand</strong><br />
                  Personenbezogene Daten werden nur an Dritte nur übermittelt, sofern eine Notwendigkeit im Rahmen der Vertragsabwicklung besteht. Dritte können beispielsweise Bezahldienstleister oder Logistikunternehmen sein. Eine weitergehende Übermittlung der Daten findet nicht statt bzw. nur dann, wenn Sie dieser ausdrücklich zugestimmt haben.<br />
                  Grundlage für die Datenverarbeitung ist Art. 6 Abs. 1 lit. b DSGVO, der die Verarbeitung von Daten zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen gestattet.<br />
                  <br />
                  <strong>Registrierung auf dieser Website</strong><br />
                  Zur Nutzung bestimmter Funktionen können Sie sich auf unserer Website registrieren. Die übermittelten Daten dienen ausschließlich zum Zwecke der Nutzung des jeweiligen Angebotes oder Dienstes. Bei der Registrierung abgefragte Pflichtangaben sind vollständig anzugeben. Andernfalls werden wir die Registrierung ablehnen.<br />
                  Im Falle wichtiger Änderungen, etwa aus technischen Gründen, informieren wir Sie per E-Mail. Die E-Mail wird an die Adresse versendet, die bei der Registrierung angegeben wurde.<br />
                  Die Verarbeitung der bei der Registrierung eingegebenen Daten erfolgt auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit möglich. Für den Widerruf genügt eine formlose Mitteilung per E-Mail. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.<br />
                  Wir speichern die bei der Registrierung erfassten Daten während des Zeitraums, den Sie auf unserer Website registriert sind. Ihren Daten werden gelöscht, sollten Sie Ihre Registrierung aufheben. Gesetzliche Aufbewahrungsfristen bleiben unberührt.<br />
                  <br />
                  <strong>Kontaktformular</strong><br />
                  Per Kontaktformular übermittelte Daten werden einschließlich Ihrer Kontaktdaten gespeichert, um Ihre Anfrage bearbeiten zu können oder um für Anschlussfragen bereit zu stehen.
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

export default PrivacyPolicy;
