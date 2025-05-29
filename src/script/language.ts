interface translation {
    english: string;
    german: string;
    russian: string;
    romanian: string;
    turkish: string;
    spanish: string;
}

interface dictionary {
    [key: string]: translation;
}

const dictionary: dictionary = {
    "input.number.placeholder": {
        english: "Press play, then enter<br>the number you heard here",
        german: "Drücke Play, dann gebe<br>die gehörte Zahl hier ein",
        russian: "Нажмите кнопку воспроизведения,<br>а затем введите услышанный номер",
        romanian: "Apăsați play, apoi introduceți<br>numărul pe care l-ați auzit aici",
        turkish: "Oynat düğmesine basın, sonra<br>duyduğunuz numarayı buraya girin",
        spanish: "Presiona reproducir, luego introduce<br>el número que escuchaste aquí",
    },
    "setting.range.title": {
        english: "Numbers up to",
        german: "Zahlen bis zu",
        russian: "Числа до",
        romanian: "Numere până la",
        turkish: "Şu sayılara kadar",
        spanish: "Números hasta",
    },
    "setting.voice.title": {
        english: "Spoken Language",
        german: "Gesprochene Sprache",
        russian: "Речевой язык",
        romanian: "Limba vorbită",
        turkish: "Konuşulan dil",
        spanish: "Idioma hablado",
    },
    "setting.voice.language.english": {
        english: "English",
        german: "Englisch",
        russian: "Английский",
        romanian: "Engleză",
        turkish: "İngilizce",
        spanish: "Inglés",
    },
    "setting.voice.language.german": {
        english: "German",
        german: "Deutsch",
        russian: "Немецкий",
        romanian: "Germană",
        turkish: "Alman",
        spanish: "Alemán",
    },
    "setting.voice.language.russian": {
        english: "Russian",
        german: "Russisch",
        russian: "Русский",
        romanian: "Rusă",
        turkish: "Rusça",
        spanish: "Ruso",
    },
    "setting.voice.language.romanian": {
        english: "Romanian",
        german: "Rumänisch",
        russian: "Румынский",
        romanian: "Română",
        turkish: "Romence",
        spanish: "Rumano",
    },
    "setting.voice.language.turkish": {
        english: "Turkish",
        german: "Türkisch",
        russian: "Турецкий",
        romanian: "Turcă",
        turkish: "Türk",
        spanish: "Turco",
    },
    "setting.voice.language.spanish": {
        english: "Spanish",
        german: "Spanisch",
        russian: "Испанский",
        romanian: "Spaniolă",
        turkish: "İspanyol",
        spanish: "Español",
    },
    "stats.title.en-US": {
        english: "Stats for English numbers",
        german: "Statistiken für englische Zahlen",
        russian: "Статистика по английским номерам",
        romanian: "Statistici pentru numere engleză",
        turkish: "İngilizce numaralar için istatistikler",
        spanish: "Estadísticas para números en inglés",
    },
    "stats.title.de-DE": {
        english: "Stats for German numbers",
        german: "Statistiken für deutsche Zahlen",
        russian: "Статистика по немецким номерам",
        romanian: "Statistici pentru numere germane",
        turkish: "Alman numaralar için istatistikler",
        spanish: "Estadísticas para números en alemán",
    },
    "stats.title.ru-RU": {
        english: "Stats for Russian numbers",
        german: "Statistiken für russische Zahlen",
        russian: "Статистика по российским номерам",
        romanian: "Statistici pentru numere rusești",
        turkish: "Rus numaralar için istatistikler",
        spanish: "Estadísticas para números en ruso",
    },
    "stats.title.ro-RO": {
        english: "Stats for Romanian numbers",
        german: "Statistiken für rumänische Zahlen",
        russian: "Статистика по румынским номерам",
        romanian: "Statistici pentru numere români",
        turkish: "Romence numaralar için istatistikler",
        spanish: "Estadísticas para números en rumano",
    },
    "stats.title.tr-TR": {
        english: "Stats for Turkish numbers",
        german: "Statistiken für türkische Zahlen",
        russian: "Статистика по турецким номерам",
        romanian: "Statistici pentru numere turcești",
        turkish: "Türk numaralar için istatistikler",
        spanish: "Estadísticas para números en turco",
    },
    "stats.title.es-ES": {
        english: "Stats for Spanish numbers",
        german: "Statistiken für spanische Zahlen",
        russian: "Статистика по испанским номерам",
        romanian: "Statistici pentru numere spaniole",
        turkish: "İspanyol numaralar için istatistikler",
        spanish: "Estadísticas para números en español",
    },
    "stats.solved.total": {
        english: "Total solved :",
        german: "Insgesamt gelöst :",
        russian: "Всего решено :",
        romanian: "Total rezolvat :",
        turkish: "Toplam çözülen :",
        spanish: "Total resuelto :",
    },
    "stats.solved.10": {
        english: "up to 10 :",
        german: "bis zu 10 :",
        russian: "до 10 :",
        romanian: "până la 10 :",
        turkish: "10'a kadar :",
        spanish: "hasta 10 :",
    },
    "stats.solved.100": {
        english: "up to 100 :",
        german: "bis zu 100 :",
        russian: "до 100 :",
        romanian: "până la 100 :",
        turkish: "100'e kadar :",
        spanish: "hasta 100 :",
    },
    "stats.solved.1000": {
        english: "up to 1000 :",
        german: "bis zu 1000 :",
        russian: "до 1000 :",
        romanian: "până la 1000 :",
        turkish: "1000'e kadar :",
        spanish: "hasta 1000 :",
    },
    "stats.solved.1000000": {
        english: "up to 1000000 :",
        german: "bis zu 100000 :",
        russian: "до 100000 :",
        romanian: "până la 100000 :",
        turkish: "100000'e kadar :",
        spanish: "hasta 1000000 :",
    },
    "stats.solved.streak": {
        english: "Longest winning streak :",
        german: "Längste Gewinnsträhne :",
        russian: "Самая длинная выигрышная серия :",
        romanian: "Cea mai lungă serie de câștiguri :",
        turkish: "En uzun kazanma serisi :",
        spanish: "Racha ganadora más larga :",
    },
    "stats.solved.highest": {
        english: "Highest number :",
        german: "Höchste Zahl :",
        russian: "Наибольшее число :",
        romanian: "Cel mai mare număr :",
        turkish: "En yüksek sayı :",
        spanish: "Número más alto :",
    },
    "stats.solved.quickest": {
        english: "Quickest solve :",
        german: "Schnellste Lösung :",
        russian: "Самое быстрое решение :",
        romanian: "Cea mai rapidă rezolvare :",
        turkish: "En hızlı çözüm :",
        spanish: "Solución más rápida :",
    },
};

function determineLanguage(): string {
    let language: string;
    let languageCode: string;
    let location: string[] = window.location.href.split("#");

    if (location.length > 1) {
        languageCode = location[1];
    } else {
        languageCode = navigator.language.split("-")[0];
    }

    switch (languageCode) {
        case "de":
            language = "german";
            break;
        case "ru":
            language = "russian";
            break;
        case "ro":
            language = "romanian";
            break;
        case "tk":
            language = "turkish";
            break;
        case "es":
            language = "spanish";
            break;
        default:
            language = "english";
            break;
    }

    return language;
}

function propagateLanguage(): void {
    let language: string = determineLanguage();

    let elements: NodeList = document.querySelectorAll('[data-dict]');
    elements.forEach((element: HTMLElement) => {
        let key: string = element.getAttribute("data-dict");
        element.innerHTML = dictionary[key][language];
    });
}

window.addEventListener('hashchange', function () {
    propagateLanguage();
});

const observer = new MutationObserver(() => {
    propagateLanguage();
});
document.querySelectorAll('[data-dict]').forEach((element: HTMLElement) => {
    observer.observe(element, { attributes: true })
});

propagateLanguage();