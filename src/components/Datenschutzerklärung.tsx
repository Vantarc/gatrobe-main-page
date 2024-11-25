import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';

interface Props {
  page: string;
}

const Datenschutz = () => {


  return (
    <section className={`bg-background py-8`} id="product">
      <div className={`container max-w-5xl mx-auto m-8`}>
        <h1
          className={`w-full my-2 text-5xl font-bold leading-tight text-center text-primary`}
        >
          {"Datenschutz".split(' ').map((word, index) => (
            <span
              key={index}
              className={index % 2 ? 'text-primary' : 'text-border'}
            >
              {word}{' '}
            </span>
          ))}
        </h1>
        <Divider />
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 p-6 m-auto`}>
          <h3
              className={`text-3xl text-primary font-bold leading-none mb-3`}
            >
              {""}
            </h3>
            <p className={`text-gray-400 text-justify`} style={{whiteSpace: "pre-line"}}>{"Diese Datenschutzerklärung klärt Sie über die Art, den Umfang und Zweck \
der Verarbeitung von personenbezogenen Daten (nachfolgend kurz „Daten“) \
innerhalb unseres Onlineangebotes und der mit ihm verbundenen Webseiten, \
Funktionen und Inhalte sowie externen Onlinepräsenzen, wie z.B. unser \
Social Media Profile auf (nachfolgend gemeinsam bezeichnet als \
„Onlineangebot“). Im Hinblick auf die verwendeten Begrifflichkeiten, wie \
z.B. „Verarbeitung“ oder „Verantwortlicher“ verweisen wir auf die \
Definitionen im Art. 4 der Datenschutzgrundverordnung (DSGVO)."}</p>
          </div>
        </div>
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 p-6 m-auto`}>
          <h3
              className={`text-3xl text-primary font-bold leading-none mb-3`}
            >
              {"Verantwortlicher"}
            </h3>
            <p className={`text-gray-400 text-justify`} style={{whiteSpace: "pre-line"}}>{"Arbeitsaal Gatrobe e.V. \n Callinstr. 34 \n 30167 Hannover\n E-Mailadresse: chef@gatrobe.uni-hannover.de "}</p>
          </div>
        </div>
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 p-6 m-auto`}>
          <h3
              className={`text-3xl text-primary font-bold leading-none mb-3`}
            >
              {"Arten der verarbeiteten Daten:"}
            </h3>
            <p className={`text-gray-400 text-justify`} style={{whiteSpace: "pre-line"}}>{"Bestandsdaten (z.B., Namen, Adressen).\n \
Kontaktdaten (z.B., E-Mail, Telefonnummern).\n \
Inhaltsdaten (z.B., Texteingaben, Fotografien, Videos).\n \
Nutzungsdaten (z.B., besuchte Webseiten, Interesse an Inhalten,\n \
Zugriffszeiten).\n \
Meta-/Kommunikationsdaten (z.B., Geräte-Informationen, IP-Adressen)."}</p>
          </div>
        </div>
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 p-6 m-auto`}>
          <h3
              className={`text-3xl text-primary font-bold leading-none mb-3`}
            >
              {"Kategorien betroffener Personen"}
            </h3>
            <p className={`text-gray-400 text-justify`} style={{whiteSpace: "pre-line"}}>{"Besucher und Nutzer des Onlineangebotes (Nachfolgend bezeichnen wir die betroffenen Personen zusammenfassend auch als „Nutzer“)."}</p>
          </div>
        </div>
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 p-6 m-auto`}>
          <h3
              className={`text-3xl text-primary font-bold leading-none mb-3`}
            >
              {"Zweck der Verarbeitung"}
            </h3>
            <p className={`text-gray-400 text-justify`} style={{whiteSpace: "pre-line"}}>{"Zurverfügungstellung des Onlineangebotes, seiner Funktionen und \
Inhalte. \n \
Beantwortung von Kontaktanfragen und Kommunikation mit Nutzern. \n \
Sicherheitsmaßnahmen. \n \
Reichweitenmessung/Marketing \n \
"}</p>
          </div>
        </div>
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 p-6 m-auto`}>
          <h3
              className={`text-3xl text-primary font-bold leading-none mb-3`}
            >
              {"Verwendete Begrifflichkeiten"}
            </h3>
            <p className={`text-gray-400 text-justify`} style={{whiteSpace: "pre-line"}}>{"„Personenbezogene Daten“ sind alle Informationen, die sich auf eine \
identifizierte oder identifizierbare natürliche Person (im Folgenden \
„betroffene Person“) beziehen; als identifizierbar wird eine natürliche \
Person angesehen, die direkt oder indirekt, insbesondere mittels \
Zuordnung zu einer Kennung wie einem Namen, zu einer Kennnummer, zu \
Standortdaten, zu einer Online-Kennung (z.B. Cookie) oder zu einem oder \
mehreren besonderen Merkmalen identifiziert werden kann, die Ausdruck \
der physischen, physiologischen, genetischen, psychischen, \
wirtschaftlichen, kulturellen oder sozialen Identität dieser natürlichen \
Person sind. \
\n\n\
„Verarbeitung“ ist jeder mit oder ohne Hilfe automatisierter Verfahren \
ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang mit \
personenbezogenen Daten. Der Begriff reicht weit und umfasst praktisch \
jeden Umgang mit Daten. \
\n\n\
„Pseudonymisierung“ die Verarbeitung personenbezogener Daten in einer \
Weise, dass die personenbezogenen Daten ohne Hinzuziehung zusätzlicher \
Informationen nicht mehr einer spezifischen betroffenen Person \
zugeordnet werden können, sofern diese zusätzlichen Informationen \
gesondert aufbewahrt werden und technischen und organisatorischen \
Maßnahmen unterliegen, die gewährleisten, dass die personenbezogenen \
Daten nicht einer identifizierten oder identifizierbaren natürlichen \
Person zugewiesen werden. \
\n\n\
„Profiling“ jede Art der automatisierten Verarbeitung personenbezogener \
Daten, die darin besteht, dass diese personenbezogenen Daten verwendet \
werden, um bestimmte persönliche Aspekte, die sich auf eine natürliche \
Person beziehen, zu bewerten, insbesondere um Aspekte bezüglich \
Arbeitsleistung, wirtschaftliche Lage, Gesundheit, persönliche \
Vorlieben, Interessen, Zuverlässigkeit, Verhalten, Aufenthaltsort oder \
Ortswechsel dieser natürlichen Person zu analysieren oder vorherzusagen. \
\n\n\
Als „Verantwortlicher“ wird die natürliche oder juristische Person, \
Behörde, Einrichtung oder andere Stelle, die allein oder gemeinsam mit \
anderen über die Zwecke und Mittel der Verarbeitung von \
personenbezogenen Daten entscheidet, bezeichnet. \
„Auftragsverarbeiter“ eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet. \
"}</p>
          </div>
        </div>
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 p-6 m-auto`}>
          <h3
              className={`text-3xl text-primary font-bold leading-none mb-3`}
            >
              {"Maßgebliche Rechtsgrundlagen"}
            </h3>
            <p className={`text-gray-400 text-justify`} style={{whiteSpace: "pre-line"}}>{"Nach Maßgabe des Art. 13 DSGVO teilen wir Ihnen die Rechtsgrundlagen \
unserer Datenverarbeitungen mit. Sofern die Rechtsgrundlage in der \
Datenschutzerklärung nicht genannt wird, gilt Folgendes: Die \
Rechtsgrundlage für die Einholung von Einwilligungen ist Art. 6 Abs. 1 \
lit. a und Art. 7 DSGVO, die Rechtsgrundlage für die Verarbeitung zur \
Erfüllung unserer Leistungen und Durchführung vertraglicher Maßnahmen \
sowie Beantwortung von Anfragen ist Art. 6 Abs. 1 lit. b DSGVO, die \
Rechtsgrundlage für die Verarbeitung zur Erfüllung unserer rechtlichen \
Verpflichtungen ist Art. 6 Abs. 1 lit. c DSGVO, und die Rechtsgrundlage \
für die Verarbeitung zur Wahrung unserer berechtigten Interessen ist \
Art. 6 Abs. 1 lit. f DSGVO. Für den Fall, dass lebenswichtige Interessen \
der betroffenen Person oder einer anderen natürlichen Person eine \
Verarbeitung personenbezogener Daten erforderlich machen, dient Art. 6 \
Abs. 1 lit. d DSGVO als Rechtsgrundlage."}</p>
          </div>
        </div>
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 p-6 m-auto`}>
          <h3
              className={`text-3xl text-primary font-bold leading-none mb-3`}
            >
              {"Sicherheitsmaßnahmen"}
            </h3>
            <p className={`text-gray-400 text-justify`} style={{whiteSpace: "pre-line"}}>{"Wir treffen nach Maßgabe des Art. 32 DSGVO unter Berücksichtigung des \
Stands der Technik, der Implementierungskosten und der Art, des Umfangs, \
der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen \
Eintrittswahrscheinlichkeit und Schwere des Risikos für die Rechte und \
Freiheiten natürlicher Personen, geeignete technische und \
organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau \
zu gewährleisten. \
 \n \n \
Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, \
Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen \
Zugangs zu den Daten, als auch des sie betreffenden Zugriffs, der \
Eingabe, Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung. \
Des Weiteren haben wir Verfahren eingerichtet, die eine Wahrnehmung von \
Betroffenenrechten, Löschung von Daten und Reaktion auf Gefährdung der \
Daten gewährleisten. Ferner berücksichtigen wir den Schutz \
personenbezogener Daten bereits bei der Entwicklung, bzw. Auswahl von \
Hardware, Software sowie Verfahren, entsprechend dem Prinzip des \
Datenschutzes durch Technikgestaltung und durch datenschutzfreundliche \
Voreinstellungen (Art. 25 DSGVO). \
"}</p>
          </div>
        </div>
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 p-6 m-auto`}>
          <h3
              className={`text-3xl text-primary font-bold leading-none mb-3`}
            >
              {"Zusammenarbeit mit Auftragsverarbeitern und Dritten"}
            </h3>
            <p className={`text-gray-400 text-justify`} style={{whiteSpace: "pre-line"}}>{"\
            Sofern wir im Rahmen unserer Verarbeitung Daten gegenüber anderen \
Personen und Unternehmen (Auftragsverarbeitern oder Dritten) offenbaren, \
sie an diese übermitteln oder ihnen sonst Zugriff auf die Daten \
gewähren, erfolgt dies nur auf Grundlage einer gesetzlichen Erlaubnis \
(z.B. wenn eine Übermittlung der Daten an Dritte, wie an \
Zahlungsdienstleister, gem. Art. 6 Abs. 1 lit. b DSGVO zur \
Vertragserfüllung erforderlich ist), Sie eingewilligt haben, eine \
rechtliche Verpflichtung dies vorsieht oder auf Grundlage unserer \
berechtigten Interessen (z.B. beim Einsatz von Beauftragten, Webhostern, \
etc.). \
 \n \n \
Sofern wir Dritte mit der Verarbeitung von Daten auf Grundlage eines \
sog. „Auftragsverarbeitungsvertrages“ beauftragen, geschieht dies auf \
Grundlage des Art. 28 DSGVO. "}</p>
          </div>
        </div>
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 p-6 m-auto`}>
          <h3
              className={`text-3xl text-primary font-bold leading-none mb-3`}
            >
              {"Übermittlungen in Drittländer"}
            </h3>
            <p className={`text-gray-400 text-justify`} style={{whiteSpace: "pre-line"}}>{"\
            Sofern wir Daten in einem Drittland (d.h. außerhalb der Europäischen \
Union (EU) oder des Europäischen Wirtschaftsraums (EWR)) verarbeiten \
oder dies im Rahmen der Inanspruchnahme von Diensten Dritter oder \
Offenlegung, bzw. Übermittlung von Daten an Dritte geschieht, erfolgt \
dies nur, wenn es zur Erfüllung unserer (vor)vertraglichen Pflichten, \
auf Grundlage Ihrer Einwilligung, aufgrund einer rechtlichen \
Verpflichtung oder auf Grundlage unserer berechtigten Interessen \
geschieht. Vorbehaltlich gesetzlicher oder vertraglicher Erlaubnisse, \
verarbeiten oder lassen wir die Daten in einem Drittland nur beim \
Vorliegen der besonderen Voraussetzungen der Art. 44 ff. DSGVO \
verarbeiten. D.h. die Verarbeitung erfolgt z.B. auf Grundlage besonderer \
Garantien, wie der offiziell anerkannten Feststellung eines der EU \
entsprechenden Datenschutzniveaus (z.B. für die USA durch das „Privacy \
Shield“) oder Beachtung offiziell anerkannter spezieller vertraglicher \
Verpflichtungen (so genannte „Standardvertragsklauseln“). \
"}</p>
          </div>
        </div>
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 p-6 m-auto`}>
          <h3
              className={`text-3xl text-primary font-bold leading-none mb-3`}
            >
              {"Rechte der betroffenen Personen"}
            </h3>
            <p className={`text-gray-400 text-justify`} style={{whiteSpace: "pre-line"}}>{"\
            Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob \
betreffende Daten verarbeitet werden und auf Auskunft über diese Daten \
sowie auf weitere Informationen und Kopie der Daten entsprechend Art. 15 \
DSGVO. \
 \n \n \
Sie haben entsprechend. Art. 16 DSGVO das Recht, die Vervollständigung \
der Sie betreffenden Daten oder die Berichtigung der Sie betreffenden \
unrichtigen Daten zu verlangen. \
 \n \n \
Sie haben nach Maßgabe des Art. 17 DSGVO das Recht zu verlangen, dass \
betreffende Daten unverzüglich gelöscht werden, bzw. alternativ nach \
Maßgabe des Art. 18 DSGVO eine Einschränkung der Verarbeitung der Daten\
zu verlangen.\
\n\n\
Sie haben das Recht zu verlangen, dass die Sie betreffenden Daten, die \
Sie uns bereitgestellt haben nach Maßgabe des Art. 20 DSGVO zu erhalten \
und deren Übermittlung an andere Verantwortliche zu fordern.\
\n\n\
Sie haben ferner gem. Art. 77 DSGVO das Recht, eine Beschwerde bei der \
zuständigen Aufsichtsbehörde einzureichen. \
"}</p>
          </div>
        </div>
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 p-6 m-auto`}>
          <h3
              className={`text-3xl text-primary font-bold leading-none mb-3`}
            >
              {"Widerrufsrecht"}
            </h3>
            <p className={`text-gray-400 text-justify`} style={{whiteSpace: "pre-line"}}>{"Sie haben das Recht, erteilte Einwilligungen gem. Art. 7 Abs. 3 DSGVO mit Wirkung für die Zukunft zu widerrufen"}</p>
          </div>
        </div>
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 p-6 m-auto`}>
          <h3
              className={`text-3xl text-primary font-bold leading-none mb-3`}
            >
              {"Widerspruchsrecht"}
            </h3>
            <p className={`text-gray-400 text-justify`} style={{whiteSpace: "pre-line"}}>{"\
            Sie können der künftigen Verarbeitung der Sie betreffenden Daten nach \
Maßgabe des Art. 21 DSGVO jederzeit widersprechen. Der Widerspruch kann \
insbesondere gegen die Verarbeitung für Zwecke der Direktwerbung \
erfolgen.\
"}</p>
          </div>
        </div>
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 p-6 m-auto`}>
          <h3
              className={`text-3xl text-primary font-bold leading-none mb-3`}
            >
              {"Cookies und Widerspruchsrecht bei Direktwerbung"}
            </h3>
            <p className={`text-gray-400 text-justify`} style={{whiteSpace: "pre-line"}}>{" \
            Als „Cookies“ werden kleine Dateien bezeichnet, die auf Rechnern der \
Nutzer gespeichert werden. Innerhalb der Cookies können unterschiedliche \
Angaben gespeichert werden. Ein Cookie dient primär dazu, die Angaben zu \
einem Nutzer (bzw. dem Gerät auf dem das Cookie gespeichert ist) während \
oder auch nach seinem Besuch innerhalb eines Onlineangebotes zu \
speichern. Als temporäre Cookies, bzw. „Session-Cookies“ oder \
„transiente Cookies“, werden Cookies bezeichnet, die gelöscht werden, \
nachdem ein Nutzer ein Onlineangebot verlässt und seinen Browser \
schließt. In einem solchen Cookie kann z.B. der Inhalt eines Warenkorbs \
in einem Onlineshop oder ein Login-Status gespeichert werden. Als \
„permanent“ oder „persistent“ werden Cookies bezeichnet, die auch nach \
dem Schließen des Browsers gespeichert bleiben. So kann z.B. der \
Login-Status gespeichert werden, wenn die Nutzer diese nach mehreren \
Tagen aufsuchen. Ebenso können in einem solchen Cookie die Interessen \
der Nutzer gespeichert werden, die für Reichweitenmessung oder \
Marketingzwecke verwendet werden. Als „Third-Party-Cookie“ werden \
Cookies bezeichnet, die von anderen Anbietern als dem Verantwortlichen, \
der das Onlineangebot betreibt, angeboten werden (andernfalls, wenn es \
nur dessen Cookies sind spricht man von „First-Party Cookies“). \
\n\n\
Wir können temporäre und permanente Cookies einsetzen und klären \
hierüber im Rahmen unserer Datenschutzerklärung auf. \
\n\n\
Falls die Nutzer nicht möchten, dass Cookies auf ihrem Rechner \
gespeichert werden, werden sie gebeten die entsprechende Option in den \
Systemeinstellungen ihres Browsers zu deaktivieren. Gespeicherte Cookies \
können in den Systemeinstellungen des Browsers gelöscht werden. Der \
Ausschluss von Cookies kann zu Funktionseinschränkungen dieses \
Onlineangebotes führen. \
\n\n\
Ein genereller Widerspruch gegen den Einsatz der zu Zwecken des \
Onlinemarketing eingesetzten Cookies kann bei einer Vielzahl der \
Dienste, vor allem im Fall des Trackings, über die US-amerikanische \
Seite https://www.aboutads.info/choices/ oder die EU-Seite \
https://www.youronlinechoices.com/ erklärt werden. Des Weiteren kann \
die Speicherung von Cookies mittels deren Abschaltung in den \
Einstellungen des Browsers erreicht werden. Bitte beachten Sie, dass \
dann gegebenenfalls nicht alle Funktionen dieses Onlineangebotes genutzt \
werden können."}</p>
          </div>
        </div>
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 p-6 m-auto`}>
          <h3
              className={`text-3xl text-primary font-bold leading-none mb-3`}
            >
              {"Löschung von Daten"}
            </h3>
            <p className={`text-gray-400 text-justify`} style={{whiteSpace: "pre-line"}}>{"\
            Die von uns verarbeiteten Daten werden nach Maßgabe der Art. 17 und 18 \
DSGVO gelöscht oder in ihrer Verarbeitung eingeschränkt. Sofern nicht im \
Rahmen dieser Datenschutzerklärung ausdrücklich angegeben, werden die \
bei uns gespeicherten Daten gelöscht, sobald sie für ihre \
Zweckbestimmung nicht mehr erforderlich sind und der Löschung keine \
gesetzlichen Aufbewahrungspflichten entgegenstehen. Sofern die Daten \
nicht gelöscht werden, weil sie für andere und gesetzlich zulässige \
Zwecke erforderlich sind, wird deren Verarbeitung eingeschränkt. D.h. \
die Daten werden gesperrt und nicht für andere Zwecke verarbeitet. Das \
gilt z.B. für Daten, die aus handels- oder steuerrechtlichen Gründen \
aufbewahrt werden müssen. \
\n\n\
Nach gesetzlichen Vorgaben in Deutschland, erfolgt die Aufbewahrung \
insbesondere für 10 Jahre gemäß §§ 147 Abs. 1 AO, 257 Abs. 1 Nr. 1 und \
4, Abs. 4 HGB (Bücher, Aufzeichnungen, Lageberichte, Buchungsbelege, \
Handelsbücher, für Besteuerung relevanter Unterlagen, etc.) und 6 Jahre \
gemäß § 257 Abs. 1 Nr. 2 und 3, Abs. 4 HGB (Handelsbriefe). \
\n\n\
Nach gesetzlichen Vorgaben in Österreich erfolgt die Aufbewahrung \
insbesondere für 7 J gemäß § 132 Abs. 1 BAO (Buchhaltungsunterlagen, \
Belege/Rechnungen, Konten, Belege, Geschäftspapiere, Aufstellung der \
Einnahmen und Ausgaben, etc.), für 22 Jahre im Zusammenhang mit \
Grundstücken und für 10 Jahre bei Unterlagen im Zusammenhang mit \
elektronisch erbrachten Leistungen, Telekommunikations-, Rundfunk- und \
Fernsehleistungen, die an Nichtunternehmer in EU-Mitgliedstaaten \
erbracht werden und für die der Mini-One-Stop-Shop (MOSS) in Anspruch \
genommen wird."}</p>
          </div>
        </div>
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 p-6 m-auto`}>
          <h3
              className={`text-3xl text-primary font-bold leading-none mb-3`}
            >
              {"Erbringung unserer satzungs- und geschäftsgemäßen Leistungen"}
            </h3>
            <p className={`text-gray-400 text-justify`} style={{whiteSpace: "pre-line"}}>{"\
            Wir verarbeiten die Daten unserer Mitglieder, Unterstützer, \
Interessenten, Kunden oder sonstiger Personen entsprechend Art. 6 Abs. 1 \
lit. b. DSGVO, sofern wir ihnen gegenüber vertragliche Leistungen \
anbieten oder im Rahmen bestehender geschäftlicher Beziehung, z.B. \
gegenüber Mitgliedern, tätig werden oder selbst Empfänger von Leistungen \
und Zuwendungen sind. Im Übrigen verarbeiten wir die Daten betroffener \
Personen gem. Art. 6 Abs. 1 lit. f. DSGVO auf Grundlage unserer \
berechtigten Interessen, z.B. wenn es sich um administrative Aufgaben \
oder Öffentlichkeitsarbeit handelt. \
\n\n\
Die hierbei verarbeiteten Daten, die Art, der Umfang und der Zweck und \
die Erforderlichkeit ihrer Verarbeitung bestimmen sich nach dem \
zugrundeliegenden Vertragsverhältnis. Dazu gehören grundsätzlich \
Bestands- und Stammdaten der Personen (z.B., Name, Adresse, etc.), als \
auch die Kontaktdaten (z.B., E-Mailadresse, Telefon, etc.), die \
Vertragsdaten (z.B., in Anspruch genommene Leistungen, mitgeteilte \
Inhalte und Informationen, Namen von Kontaktpersonen) und sofern wir \
zahlungspflichtige Leistungen oder Produkte anbieten, Zahlungsdaten \
(z.B., Bankverbindung, Zahlungshistorie, etc.). \
\n\n\
Wir löschen Daten, die zur Erbringung unserer satzungs- und \
geschäftsmäßigen Zwecke nicht mehr erforderlich sind. Dies bestimmt sich \
entsprechend der jeweiligen Aufgaben und vertraglichen Beziehungen. Im \
Fall geschäftlicher Verarbeitung bewahren wir die Daten so lange auf, \
wie sie zur Geschäftsabwicklung, als auch im Hinblick auf etwaige \
Gewährleistungs- oder Haftungspflichten relevant sein können. Die \
Erforderlichkeit der Aufbewahrung der Daten wird alle drei Jahre \
überprüft; im Übrigen gelten die gesetzlichen Aufbewahrungspflichten."}</p>
          </div>
        </div>
        <div className={`flex flex-wrap`}>
          <div className={`w-5/6 p-6 m-auto`}>
          <h3
              className={`text-3xl text-primary font-bold leading-none mb-3`}
            >
              {"Registrierfunktion"}
            </h3>
            <p className={`text-gray-400 text-justify`} style={{whiteSpace: "pre-line"}}>{"\
            Nutzer können ein Nutzerkonto anlegen. Im Rahmen der Registrierung \
werden die erforderlichen Pflichtangaben den Nutzern mitgeteilt und auf \
Grundlage des Art. 6 Abs. 1 lit. b DSGVO zu Zwecken der Bereitstellung \
des Nutzerkontos verarbeitet. Zu den verarbeiteten Daten gehören \
insbesondere die Login-Informationen (Name, Passwort sowie eine \
E-Mailadresse). Die im Rahmen der Registrierung eingegebenen Daten \
werden für die Zwecke der Nutzung des Nutzerkontos und dessen Zwecks \
verwendet.\
\n\n\
Die Nutzer können über Informationen, die für deren Nutzerkonto relevant \
sind, wie z.B. technische Änderungen, per E-Mail informiert werden. Wenn \
Nutzer ihr Nutzerkonto gekündigt haben, werden deren Daten im Hinblick \
auf das Nutzerkonto, vorbehaltlich einer gesetzlichen \
Aufbewahrungspflicht, gelöscht. Es obliegt den Nutzern, ihre Daten bei \
erfolgter Kündigung vor dem Vertragsende zu sichern. Wir sind \
berechtigt, sämtliche während der Vertragsdauer gespeicherten Daten des \
Nutzers unwiederbringlich zu löschen. \
\n\n\
Im Rahmen der Inanspruchnahme unserer Registrierungs- und \
Anmeldefunktionen sowie der Nutzung des Nutzerkontos, speichern wir die \
IP-Adresse und den Zeitpunkt der jeweiligen Nutzerhandlung. Die \
Speicherung erfolgt auf Grundlage unserer berechtigten Interessen, als \
auch der Nutzer an Schutz vor Missbrauch und sonstiger unbefugter \
Nutzung. Eine Weitergabe dieser Daten an Dritte erfolgt grundsätzlich \
nicht, außer sie ist zur Verfolgung unserer Ansprüche erforderlich oder \
es besteht hierzu besteht eine gesetzliche Verpflichtung gem. Art. 6 \
Abs. 1 lit. c. DSGVO. Die IP-Adressen werden spätestens nach 7 Tagen \
anonymisiert oder gelöscht.\
"}</p>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default Datenschutz;
