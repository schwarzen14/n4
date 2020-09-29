/*
<script>
    */
    window.famobi_env = window.famobi_env || "gp";

    var _fgq = [];

    (function(d, url, fgJS, firstJS) {
        fgJS = d.createElement('script');
        firstJS = d.getElementsByTagName('script')[0];
        fgJS.src = url;
        fgJS.onload = function() {
            if (typeof fg_api == "function" && typeof famobi != "undefined" && famobi instanceof fg_api) {
                return;
            }

            famobi = new fg_api({
                "features": {
                    "highscores": 1,
                    "menu": 1,
                    "standalone": false,
                    "rotation": 1,
                    "leaderboard": 1,
                    "multiplayer": 1,
                    "multiplayer_local": 1,
                    "credits": 1,
                    "tracking": 1,
                    "fullscreen": 1,
                    "screenshot": 0,
                    "payment": 0,
                    "ads": 1
                },
                "game_i18n": {
                    "default": {
                        "levelComplete": {
                            "@text": ["Level Complete!"],
                            "@fontId": 0
                        },
                        "tryAgain": {
                            "@text": ["Try again?"],
                            "@fontId": 0
                        },
                        "gameOver": {
                            "@text": ["Game over!"],
                            "@fontId": 0
                        },
                        "outOfBubbles": {
                            "@text": ["Out of bubbles!"],
                            "@fontId": 0
                        },
                        "startLevel0": {
                            "@text": ["Level goal:"],
                            "@fontId": 0
                        },
                        "startLevel1": {
                            "@text": ["Clear the top!"],
                            "@fontId": 0
                        },
                        "startLevel2": {
                            "@text": ["Release", "the gems!"],
                            "@fontId": 0
                        },
                        "endLevel0": {
                            "@text": ["Congratulations!"],
                            "@fontId": 0
                        },
                        "endLevel1": {
                            "@text": ["Top reached!"],
                            "@fontId": 0
                        },
                        "endLevel2": {
                            "@text": ["All gems released!"],
                            "@fontId": 0
                        },
                        "levelScore": {
                            "@text": ["Level score:"],
                            "@fontId": 0
                        },
                        "totalScore": {
                            "@text": ["Total score:"],
                            "@fontId": 0
                        },
                        "praise0": {
                            "@text": ["Excellent!"],
                            "@fontId": 0
                        },
                        "praise1": {
                            "@text": ["Great!"],
                            "@fontId": 0
                        },
                        "praise2": {
                            "@text": ["Good Play!"],
                            "@fontId": 0
                        },
                        "oneLeft": {
                            "@text": ["One more to find!"],
                            "@fontId": 0
                        },
                        "api.back": "&laquo; Back",
                        "api.more": "&raquo; More Games",
                        "api.fullscreen": "[+] Fullscreen mode",
                        "api.continue": "Continue",
                        "api.play_now": "Play now",
                        "api.ad_modal_header": "Advertisement closes in&hellip;",
                        "api.ad_modal_header2": "Advertisement&hellip;",
                        "api.ad_modal_header3": "Loading&hellip;",
                        "api.ad_modal_header_blocked": "Not available due to policy reasons",
                        "api.teaser_modal_header": "Continue with the next episode&hellip;",
                        "api.no_abo": "No Subscription!",
                        "api.secure_payment": "Secure Payment!",
                        "api.paymentmethod_cc": "Credit Card",
                        "api.paymentmethod_paypal": "PayPal",
                        "api.paymentmethod_sms": "SMS",
                        "api.payment_cta": "Next",
                        "api.install_app_text_2": "\ud83d\ude99&nbsp;&nbsp;\ud83d\ude8c&nbsp;&nbsp;\u26f1&nbsp;&nbsp;Low signal?",
                        "api.install_app_cta_2": "Install Full Game Now",
                        "api.install_app_text_3": "\ud83d\ude99&nbsp;&nbsp;\ud83d\ude8c&nbsp;&nbsp;\u26f1&nbsp;&nbsp;Long journeys?",
                        "api.install_app_cta_3": "Install Full Game Now",
                        "api.install_app_text": "Free full version",
                        "api.install_app_cta": "Get the App",
                        "api.privacy_info": "<p><strong>Data Privacy Information:<\/strong> Our games store your highscores and game progress, track your gaming behaviour and display ads based on your interests. We save an anonymous cookie so we can recognize you. Click on the play button if you agree and are at least 16 years of age.",
                        "api.privacy_link": "<p><a href=\"https:\/\/famobi.com\/vendors\/\" target=\"_blank\" data-famobi-href>Ad Vendors<\/a>&nbsp;<span>&<\/span>&nbsp;<a href=\"https:\/\/famobi.com\/privacy\/\" target=\"_blank\" data-famobi-href>Privacy Policy<\/a><\/p>",
                        "api.people_also_like_headline": "People also like:",
                        "more_games_image_prefix": "https:\/\/games.cdn.famobi.com",
                        "more_games_image": "\/portal\/4638e320-4444-4514-81c4-d80a8c662371\/more-games-button\/600x253\/5a6895c0f28fb.png",
                        "more_games_url": "https:\/\/html5games.com",
                        "preload_image": "\/html5games\/gameapi\/v1\/invisPreloadImage.png",
                        "test_preload_image": "\/html5games\/gameapi\/v1\/testPreloadImage.png"
                    },
                    "de": {
                        "levelComplete": {
                            "@text": ["Level geschafft!"],
                            "@fontId": 0
                        },
                        "tryAgain": {
                            "@text": ["Nochmal?"],
                            "@fontId": 0
                        },
                        "gameOver": {
                            "@text": ["Spiel vorbei!"],
                            "@fontId": 0
                        },
                        "outOfBubbles": {
                            "@text": ["Keine Bubbles mehr!"],
                            "@fontId": 0
                        },
                        "startLevel0": {
                            "@text": ["Levelziel:"],
                            "@fontId": 0
                        },
                        "startLevel1": {
                            "@text": ["R\u00e4ume alle Bubbles oben ab!"],
                            "@fontId": 0
                        },
                        "startLevel2": {
                            "@text": ["Entferne die", "Edelstein-Bubbles!"],
                            "@fontId": 0
                        },
                        "endLevel0": {
                            "@text": ["Gl\u00fcckwunsch!"],
                            "@fontId": 0
                        },
                        "endLevel1": {
                            "@text": ["Geschafft!"],
                            "@fontId": 0
                        },
                        "endLevel2": {
                            "@text": ["Alle Juwelen abger\u00e4umt!"],
                            "@fontId": 0
                        },
                        "levelScore": {
                            "@text": ["Levelpunkte:"],
                            "@fontId": 0
                        },
                        "totalScore": {
                            "@text": ["Gesamtpunkte:"],
                            "@fontId": 0
                        },
                        "praise0": {
                            "@text": ["Fantastisch!"],
                            "@fontId": 0
                        },
                        "praise1": {
                            "@text": ["Super!"],
                            "@fontId": 0
                        },
                        "praise2": {
                            "@text": ["Gut gemacht!"],
                            "@fontId": 0
                        },
                        "oneLeft": {
                            "@text": ["Fast geschafft!"],
                            "@fontId": 0
                        },
                        "api.back": "&laquo; zur&uuml;ck",
                        "api.more": "&raquo; mehr Spiele",
                        "api.fullscreen": "[+] Vollbildmodus",
                        "api.continue": "Weiter",
                        "api.play_now": "Jetzt spielen",
                        "api.ad_modal_header": "Werbung schlie\u00dft automatisch in&hellip;",
                        "api.ad_modal_header2": "Werbung&hellip;",
                        "api.ad_modal_header3": "L\u00e4dt&hellip;",
                        "api.teaser_modal_header": "Spiele jetzt den n\u00e4chsten Teil&hellip;",
                        "api.no_abo": "Kein Abo!",
                        "api.secure_payment": "Sicheres Bezahlen!",
                        "api.paymentmethod_cc": "Kreditkarte",
                        "api.paymentmethod_paypal": "PayPal",
                        "api.paymentmethod_sms": "SMS",
                        "api.payment_cta": "Weiter",
                        "api.install_app_text_2": "\ud83d\ude99&nbsp;&nbsp;\ud83d\ude8c&nbsp;&nbsp;\u26f1&nbsp;&nbsp;Kein Netz?",
                        "api.install_app_cta_2": "Spiel als App installieren",
                        "api.install_app_text_3": "\ud83d\ude99&nbsp;&nbsp;\ud83d\ude8c&nbsp;&nbsp;\u26f1&nbsp;&nbsp;L\u00e4ngere Reise?",
                        "api.install_app_cta_3": "Spiel als App installieren",
                        "api.install_app_text": "Kostenlose Vollversion",
                        "api.install_app_cta": "App installieren",
                        "api.privacy_info": "<p><strong>Information zum Datenschutz:<\/strong> Unsere Spiele speichern deine Highscores und den Spielfortschritt, tracken dein Spielverhalten und zeigen Werbung basierend auf deinen Interessen. Wir speichern einen anonymen Cookie, damit wir dich wiedererkennen k\u00f6nnen. Klicke auf den Play-Button, wenn du zustimmst und mindestens 16 Jahre alt bist.<\/p>",
                        "api.privacy_link": "<p><a href=\"https:\/\/famobi.com\/vendors\/\" target=\"_blank\" data-famobi-href>Anzeigenanbieter<\/a>&nbsp;<span>&<\/span>&nbsp;<a href=\"https:\/\/famobi.com\/privacy\/\" target=\"_blank\" data-famobi-href>Datenschutz-Bestimmungen<\/a><\/p>",
                        "api.people_also_like_headline": "Andere m\u00f6gen auch:"
                    },
                    "en": {
                        "api.back": "&laquo; Back",
                        "api.more": "&raquo; More Games",
                        "api.fullscreen": "[+] Fullscreen mode",
                        "api.continue": "Continue",
                        "api.play_now": "Play now",
                        "api.ad_modal_header": "Advertisement closes in&hellip;",
                        "api.ad_modal_header2": "Advertisement&hellip;",
                        "api.ad_modal_header3": "Loading&hellip;",
                        "api.ad_modal_header_blocked": "Not available due to policy reasons",
                        "api.teaser_modal_header": "Continue with the next episode&hellip;",
                        "api.no_abo": "No Subscription!",
                        "api.secure_payment": "Secure Payment!",
                        "api.paymentmethod_cc": "Credit Card",
                        "api.paymentmethod_paypal": "PayPal",
                        "api.paymentmethod_sms": "SMS",
                        "api.payment_cta": "Next",
                        "api.install_app_text_2": "\ud83d\ude99&nbsp;&nbsp;\ud83d\ude8c&nbsp;&nbsp;\u26f1&nbsp;&nbsp;Low signal?",
                        "api.install_app_cta_2": "Install Full Game Now",
                        "api.install_app_text_3": "\ud83d\ude99&nbsp;&nbsp;\ud83d\ude8c&nbsp;&nbsp;\u26f1&nbsp;&nbsp;Long journeys?",
                        "api.install_app_cta_3": "Install Full Game Now",
                        "api.install_app_text": "Free full version",
                        "api.install_app_cta": "Get the App",
                        "api.privacy_info": "<p><strong>Data Privacy Information:<\/strong> Our games store your highscores and game progress, track your gaming behaviour and display ads based on your interests. We save an anonymous cookie so we can recognize you. Click on the play button if you agree and are at least 16 years of age.",
                        "api.privacy_link": "<p><a href=\"https:\/\/famobi.com\/vendors\/\" target=\"_blank\" data-famobi-href>Ad Vendors<\/a>&nbsp;<span>&<\/span>&nbsp;<a href=\"https:\/\/famobi.com\/privacy\/\" target=\"_blank\" data-famobi-href>Privacy Policy<\/a><\/p>",
                        "api.people_also_like_headline": "People also like:"
                    },
                    "tr": {
                        "levelComplete": {
                            "@text": ["Seviye Tamamland\u0131!"],
                            "@fontId": 0
                        },
                        "tryAgain": {
                            "@text": ["Tekrar dene?"],
                            "@fontId": 0
                        },
                        "gameOver": {
                            "@text": ["Oyun Bitti!"],
                            "@fontId": 0
                        },
                        "outOfBubbles": {
                            "@text": ["Balonlar bitti!"],
                            "@fontId": 0
                        },
                        "startLevel0": {
                            "@text": ["Seviye hedefi:"],
                            "@fontId": 0
                        },
                        "startLevel1": {
                            "@text": ["\u00dcst b\u00f6l\u00fcm\u00fc temizleyin!"],
                            "@fontId": 0
                        },
                        "startLevel2": {
                            "@text": ["Elmaslar\u0131", "serbest b\u0131rak\u0131n!"],
                            "@fontId": 0
                        },
                        "endLevel0": {
                            "@text": ["Tebrikler!"],
                            "@fontId": 0
                        },
                        "endLevel1": {
                            "@text": ["\u00dcst b\u00f6l\u00fcme ula\u015f\u0131ld\u0131!"],
                            "@fontId": 0
                        },
                        "endLevel2": {
                            "@text": ["T\u00fcm elmaslar serbest b\u0131rak\u0131ld\u0131!"],
                            "@fontId": 0
                        },
                        "levelScore": {
                            "@text": ["Seviye puan\u0131:"],
                            "@fontId": 0
                        },
                        "totalScore": {
                            "@text": ["Toplam puan:"],
                            "@fontId": 0
                        },
                        "praise0": {
                            "@text": ["M\u00fckemmel!"],
                            "@fontId": 0
                        },
                        "praise1": {
                            "@text": ["Harika!"],
                            "@fontId": 0
                        },
                        "praise2": {
                            "@text": ["\u0130yi Oyun!"],
                            "@fontId": 0
                        },
                        "oneLeft": {
                            "@text": ["Sadece bir tane kald\u0131!"],
                            "@fontId": 0
                        },
                        "api.back": "&laquo; Geri",
                        "api.more": "&raquo; Daha Fazla Oyun",
                        "api.fullscreen": "Tam ekran",
                        "api.continue": "Devam",
                        "api.play_now": "Oyna",
                        "api.ad_modal_header": "Reklam &ndash; otomatik kapanacakt\u0131r&hellip;",
                        "api.ad_modal_header2": "Reklam&hellip;",
                        "api.ad_modal_header3": "Reklam&hellip;",
                        "api.teaser_modal_header": "Sonraki B\u00f6l\u00fcm&hellip;",
                        "api.no_abo": "Abonelik Yoktur!",
                        "api.secure_payment": "G\u00fcvenli \u00d6deme!",
                        "api.paymentmethod_cc": "Kredi Kart\u0131",
                        "api.paymentmethod_paypal": "PayPal",
                        "api.paymentmethod_sms": "SMS",
                        "api.payment_cta": "Sonraki",
                        "api.install_app_text": "Bedava Tam S\u00fcr\u00fcm!",
                        "api.install_app_cta": "\u015eimdi kur",
                        "api.privacy_info": "<p><strong>Veri Gizlili\u011fi Bilgileri:<\/strong> Oyunlar\u0131m\u0131z y\u00fcksek puanlar\u0131n\u0131z\u0131 ve oyun ilerlemenizi depolar, oyun davran\u0131\u015f\u0131n\u0131z\u0131 izler ve ilgi alanlar\u0131n\u0131za g\u00f6re reklamlar\u0131 g\u00f6sterir. Anonim bir \u00e7erez kaydediyoruz, b\u00f6ylece sizi tan\u0131yabiliriz. Kabul ediyorsan\u0131z ve en az 16 ya\u015f\u0131ndaysan\u0131z oyun butonuna t\u0131klay\u0131n.<\/p>",
                        "api.privacy_link": "<p><a href=\"https:\/\/famobi.com\/vendors\/\" target=\"_blank\" data-famobi-href>Reklam sa\u011flay\u0131c\u0131lar\u0131<\/a>&nbsp;<span>&<\/span>&nbsp;<a href=\"https:\/\/famobi.com\/privacy\/\" target=\"_blank\" data-famobi-href>Gizlilik Politikas\u0131<\/a><\/p>",
                        "api.people_also_like_headline": "Insanlar da gibi:"
                    },
                    "fr": {
                        "levelComplete": {
                            "@text": ["Niveau termin\u00e9 !"],
                            "@fontId": 0
                        },
                        "tryAgain": {
                            "@text": ["R\u00e9essayer ?"],
                            "@fontId": 0
                        },
                        "gameOver": {
                            "@text": ["Game over !"],
                            "@fontId": 0
                        },
                        "outOfBubbles": {
                            "@text": ["Plus de bulles !"],
                            "@fontId": 0
                        },
                        "startLevel0": {
                            "@text": ["Objectif du niveau :"],
                            "@fontId": 0
                        },
                        "startLevel1": {
                            "@text": ["Nettoyez le sommet !"],
                            "@fontId": 0
                        },
                        "startLevel2": {
                            "@text": ["Lib\u00e9rez", "les gemmes !"],
                            "@fontId": 0
                        },
                        "endLevel0": {
                            "@text": ["F\u00e9licitations !"],
                            "@fontId": 0
                        },
                        "endLevel1": {
                            "@text": ["Sommet atteint !"],
                            "@fontId": 0
                        },
                        "endLevel2": {
                            "@text": ["Toutes les gemmes lib\u00e9r\u00e9es !"],
                            "@fontId": 0
                        },
                        "levelScore": {
                            "@text": ["Score du niveau :"],
                            "@fontId": 0
                        },
                        "totalScore": {
                            "@text": ["Score total :"],
                            "@fontId": 0
                        },
                        "praise0": {
                            "@text": ["Excellent !"],
                            "@fontId": 0
                        },
                        "praise1": {
                            "@text": ["Super !"],
                            "@fontId": 0
                        },
                        "praise2": {
                            "@text": ["Bien jou\u00e9 !"],
                            "@fontId": 0
                        },
                        "oneLeft": {
                            "@text": ["Encore une \u00e0 trouver !"],
                            "@fontId": 0
                        },
                        "api.back": "&laquo; Retour",
                        "api.more": "&raquo; Plus de jeux",
                        "api.fullscreen": "[+] Mode plein \u00e9cran",
                        "api.continue": "Continuer",
                        "api.play_now": "Jouer maintenant",
                        "api.ad_modal_header": "Advertisement closes in&hellip;",
                        "api.ad_modal_header2": "R\u00e9clame&hellip;",
                        "api.ad_modal_header3": "Loading&hellip;",
                        "api.ad_modal_header_blocked": "Not available due to policy reasons",
                        "api.teaser_modal_header": "Continue with the next episode&hellip;",
                        "api.no_abo": "No Subscription!",
                        "api.secure_payment": "Secure Payment!",
                        "api.paymentmethod_cc": "Credit Card",
                        "api.paymentmethod_paypal": "PayPal",
                        "api.paymentmethod_sms": "SMS",
                        "api.payment_cta": "Next",
                        "api.install_app_text": "Version compl\u00e8te gratuite!",
                        "api.install_app_cta": "Installer maintenant",
                        "api.privacy_info": "<p><strong>Informations sur la confidentialit\u00e9 des donn\u00e9es:<\/strong> Nos jeux stockent vos scores \u00e9lev\u00e9s et la progression du jeu, suivent votre comportement de jeu et affichent des publicit\u00e9s en fonction de vos int\u00e9r\u00eats. Nous sauvegardons un cookie anonyme afin que nous puissions vous reconna\u00eetre. Cliquez sur le bouton de lecture si vous \u00eates d'accord et avez au moins 16 ans.<\/p>",
                        "api.privacy_link": "<p><a href=\"https:\/\/famobi.com\/vendors\/\" target=\"_blank\" data-famobi-href>Fournisseurs d'annonces<\/a>&nbsp;<span>&<\/span>&nbsp;<a href=\"https:\/\/famobi.com\/privacy\/\" target=\"_blank\" data-famobi-href>Politique de confidentialit\u00e9<\/a><\/p>",
                        "api.people_also_like_headline": "Les gens aiment aussi:"
                    },
                    "pl": {
                        "levelComplete": {
                            "@text": ["Uko\u0144czono poziom!"],
                            "@fontId": 0
                        },
                        "tryAgain": {
                            "@text": ["Spr\u00f3bowa\u0107 ponownie?"],
                            "@fontId": 0
                        },
                        "gameOver": {
                            "@text": ["Gra sko\u0144czona!"],
                            "@fontId": 0
                        },
                        "outOfBubbles": {
                            "@text": ["Brak baniek!"],
                            "@fontId": 0
                        },
                        "startLevel0": {
                            "@text": ["Cel poziomu:"],
                            "@fontId": 0
                        },
                        "startLevel1": {
                            "@text": ["Oczy\u015b\u0107 g\u00f3r\u0119!"],
                            "@fontId": 0
                        },
                        "startLevel2": {
                            "@text": ["Uwolnij", "klejnoty!"],
                            "@fontId": 0
                        },
                        "endLevel0": {
                            "@text": ["Gratulacje!"],
                            "@fontId": 0
                        },
                        "endLevel1": {
                            "@text": ["Osi\u0105gni\u0119to szczyt!"],
                            "@fontId": 0
                        },
                        "endLevel2": {
                            "@text": ["Wszystkie klejnoty uwolniono!"],
                            "@fontId": 0
                        },
                        "levelScore": {
                            "@text": ["Wynik poziomu:"],
                            "@fontId": 0
                        },
                        "totalScore": {
                            "@text": ["Og\u00f3lny wynik:"],
                            "@fontId": 0
                        },
                        "praise0": {
                            "@text": ["Doskonale!"],
                            "@fontId": 0
                        },
                        "praise1": {
                            "@text": ["Znakomicie!"],
                            "@fontId": 0
                        },
                        "praise2": {
                            "@text": ["Dobra gra!"],
                            "@fontId": 0
                        },
                        "oneLeft": {
                            "@text": ["Do znalezienia jeszcze jedna!"],
                            "@fontId": 0
                        },
                        "api.back": "&laquo; Wr\u00f3\u0107",
                        "api.more": "&raquo; Wi\u0119cej gier",
                        "api.fullscreen": "[+] Tryb pe\u0142noekranowy",
                        "api.continue": "Kontynuuj",
                        "api.play_now": "Graj teraz",
                        "api.ad_modal_header": "Reklama zamknie si\u0119 za&hellip;",
                        "api.ad_modal_header2": "Reklama&hellip;",
                        "api.ad_modal_header3": "Reklama&hellip;",
                        "api.ad_modal_header_blocked": "Not available due to policy reasons",
                        "api.teaser_modal_header": "Przejd\u017a do kolejnego odcinka&hellip;",
                        "api.no_abo": "No Subscription!",
                        "api.secure_payment": "Secure Payment!",
                        "api.paymentmethod_cc": "Credit Card",
                        "api.paymentmethod_paypal": "PayPal",
                        "api.paymentmethod_sms": "SMS",
                        "api.payment_cta": "Next",
                        "api.install_app_text": "Bezp\u0142atna pe\u0142na wersja!",
                        "api.install_app_cta": "Zainstaluj teraz",
                        "api.privacy_info": "<p><strong>Informacje dotycz\u0105ce prywatno\u015bci danych:<\/strong> Nasze gry przechowuj\u0105 Twoje najlepsze wyniki i post\u0119py w grze, \u015bledz\u0105 zachowanie graczy i wy\u015bwietlaj\u0105 reklamy w oparciu o Twoje zainteresowania. Zapisujemy anonimowy plik cookie, aby\u015bmy mogli Ci\u0119 rozpozna\u0107. Kliknij przycisk odtwarzania, je\u015bli si\u0119 zgadzasz i masz co najmniej 16 lat.<\/p>",
                        "api.privacy_link": "<p><a href=\"https:\/\/famobi.com\/vendors\/\" target=\"_blank\" data-famobi-href>Dostawcy reklam<\/a>&nbsp;<span>&<\/span>&nbsp;<a href=\"https:\/\/famobi.com\/privacy\/\" target=\"_blank\" data-famobi-href>Polityka prywatno\u015bci<\/a><\/p>",
                        "api.people_also_like_headline": "Ludzie te\u017c lubi\u0105:"
                    },
                    "nl": {
                        "levelComplete": {
                            "@text": ["Level voltooid!"],
                            "@fontId": 0
                        },
                        "tryAgain": {
                            "@text": ["Opnieuw proberen?"],
                            "@fontId": 0
                        },
                        "gameOver": {
                            "@text": ["Game over!"],
                            "@fontId": 0
                        },
                        "outOfBubbles": {
                            "@text": ["Geen bellen meer!"],
                            "@fontId": 0
                        },
                        "startLevel0": {
                            "@text": ["Leveldoel:"],
                            "@fontId": 0
                        },
                        "startLevel1": {
                            "@text": ["Verwijder de bellen aan de top!"],
                            "@fontId": 0
                        },
                        "startLevel2": {
                            "@text": ["Maak de", "edelstenen vrij!"],
                            "@fontId": 0
                        },
                        "endLevel0": {
                            "@text": ["Gefeliciteerd!"],
                            "@fontId": 0
                        },
                        "endLevel1": {
                            "@text": ["Je hebt de top bereikt!"],
                            "@fontId": 0
                        },
                        "endLevel2": {
                            "@text": ["Alle edelstenen zijn vrij!"],
                            "@fontId": 0
                        },
                        "levelScore": {
                            "@text": ["Levelscore:"],
                            "@fontId": 0
                        },
                        "totalScore": {
                            "@text": ["Totale score:"],
                            "@fontId": 0
                        },
                        "praise0": {
                            "@text": ["Uitstekend!"],
                            "@fontId": 0
                        },
                        "praise1": {
                            "@text": ["Geweldig!"],
                            "@fontId": 0
                        },
                        "praise2": {
                            "@text": ["Goed gespeeld!"],
                            "@fontId": 0
                        },
                        "oneLeft": {
                            "@text": ["Je moet er nog eentje vinden!"],
                            "@fontId": 0
                        },
                        "api.back": "&laquo; Vorige",
                        "api.more": "&raquo; Meer games",
                        "api.fullscreen": "[+] Volledig scherm",
                        "api.continue": "Doorgaan",
                        "api.play_now": "Nu spelen",
                        "api.ad_modal_header": "De publiciteit eindigt in&hellip;",
                        "api.ad_modal_header2": "Publiciteit&hellip;",
                        "api.ad_modal_header3": "Publiciteit&hellip;",
                        "api.ad_modal_header_blocked": "Not available due to policy reasons",
                        "api.teaser_modal_header": "Doorgaan met de volgende aflevering&hellip;",
                        "api.no_abo": "No Subscription!",
                        "api.secure_payment": "Secure Payment!",
                        "api.paymentmethod_cc": "Credit Card",
                        "api.paymentmethod_paypal": "PayPal",
                        "api.paymentmethod_sms": "SMS",
                        "api.payment_cta": "Next",
                        "api.install_app_text": "Gratis volledige versie!",
                        "api.install_app_cta": "Installeer nu",
                        "api.privacy_info": "<p><strong>Gegevens Privacy Gegevens:<\/strong> Onze spellen slaan je hoogste scores en voortgang van het spel op, volgen je speelgedrag en geven advertenties weer op basis van je interesses. We slaan een anoniem cookie op zodat we u kunnen herkennen. Klik op de knop Afspelen als u hiermee instemt en ten minste 16 jaar oud bent.<\/p>",
                        "api.privacy_link": "<p><a href=\"https:\/\/famobi.com\/vendors\/\" target=\"_blank\" data-famobi-href>Advertentieleveranciers<\/a>&nbsp;<span>&<\/span>&nbsp;<a href=\"https:\/\/famobi.com\/privacy\/\" target=\"_blank\" data-famobi-href>Privacybeleid<\/a><\/p>",
                        "api.people_also_like_headline": "Mensen houden ook van:"
                    },
                    "pt": {
                        "levelComplete": {
                            "@text": ["N\u00edvel conclu\u00eddo!"],
                            "@fontId": 0
                        },
                        "tryAgain": {
                            "@text": ["Tentar novamente?"],
                            "@fontId": 0
                        },
                        "gameOver": {
                            "@text": ["Fim de jogo!"],
                            "@fontId": 0
                        },
                        "outOfBubbles": {
                            "@text": ["Sem bolhas!"],
                            "@fontId": 0
                        },
                        "startLevel0": {
                            "@text": ["Objetivo do n\u00edvel:"],
                            "@fontId": 0
                        },
                        "startLevel1": {
                            "@text": ["Remover bolhas acima!"],
                            "@fontId": 0
                        },
                        "startLevel2": {
                            "@text": ["Liberar", "as pedras!"],
                            "@fontId": 0
                        },
                        "endLevel0": {
                            "@text": ["Parab\u00e9ns!"],
                            "@fontId": 0
                        },
                        "endLevel1": {
                            "@text": ["Bolhas acima alcan\u00e7adas!"],
                            "@fontId": 0
                        },
                        "endLevel2": {
                            "@text": ["Todas as pedras liberadas!"],
                            "@fontId": 0
                        },
                        "levelScore": {
                            "@text": ["Pontua\u00e7\u00e3o de n\u00edvel:"],
                            "@fontId": 0
                        },
                        "totalScore": {
                            "@text": ["Pontua\u00e7\u00e3o total:"],
                            "@fontId": 0
                        },
                        "praise0": {
                            "@text": ["Excelente!"],
                            "@fontId": 0
                        },
                        "praise1": {
                            "@text": ["\u00d3timo!"],
                            "@fontId": 0
                        },
                        "praise2": {
                            "@text": ["Bom jogo!"],
                            "@fontId": 0
                        },
                        "oneLeft": {
                            "@text": ["Mais uma para descobrir!"],
                            "@fontId": 0
                        },
                        "api.back": "&laquo; Voltar",
                        "api.more": "&raquo; Mais jogos",
                        "api.fullscreen": "[+] Tela cheia",
                        "api.continue": "Continuar",
                        "api.play_now": "Jogar agora",
                        "api.ad_modal_header": "Publicidade fecha em &hellip;",
                        "api.ad_modal_header2": "Publicidade &hellip;",
                        "api.ad_modal_header3": "Publicidade &hellip;",
                        "api.ad_modal_header_blocked": "Not available due to policy reasons",
                        "api.teaser_modal_header": "Continua com o pr\u00f3ximo epis\u00f3dio&hellip;",
                        "api.no_abo": "No Subscription!",
                        "api.secure_payment": "Secure Payment!",
                        "api.paymentmethod_cc": "Credit Card",
                        "api.paymentmethod_paypal": "PayPal",
                        "api.paymentmethod_sms": "SMS",
                        "api.payment_cta": "Next",
                        "api.install_app_text": "Gr\u00e1tis Full Version!",
                        "api.install_app_cta": "Instale agora",
                        "api.privacy_info": "<p><strong>Informa\u00e7\u00f5es de privacidade de dados:<\/strong> Nossos jogos armazenam suas pontua\u00e7\u00f5es mais altas e o progresso do jogo, rastreiam seu comportamento de jogo e exibem an\u00fancios com base em seus interesses. N\u00f3s salvamos um cookie an\u00f4nimo para que possamos reconhec\u00ea-lo. Clique no bot\u00e3o play se voc\u00ea concordar e tiver pelo menos 16 anos de idade.<\/p>",
                        "api.privacy_link": "<p><a href=\"https:\/\/famobi.com\/vendors\/\" target=\"_blank\" data-famobi-href>Fornecedores de an\u00fancios<\/a>&nbsp;<span>&<\/span>&nbsp;<a href=\"https:\/\/famobi.com\/privacy\/\" target=\"_blank\" data-famobi-href>Pol\u00edtica de Privacidade<\/a><\/p>",
                        "api.people_also_like_headline": "As pessoas tamb\u00e9m gostam:"
                    },
                    "ru": {
                        "levelComplete": {
                            "@text": ["\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u043f\u0440\u043e\u0439\u0434\u0435\u043d!"],
                            "@fontId": 0
                        },
                        "tryAgain": {
                            "@text": ["\u0415\u0449\u0451 \u0440\u0430\u0437?"],
                            "@fontId": 0
                        },
                        "gameOver": {
                            "@text": ["\u0418\u0433\u0440\u0430 \u043e\u043a\u043e\u043d\u0447\u0435\u043d\u0430!"],
                            "@fontId": 0
                        },
                        "outOfBubbles": {
                            "@text": ["\u0428\u0430\u0440\u0438\u043a\u0438 \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0438\u0441\u044c!"],
                            "@fontId": 0
                        },
                        "startLevel0": {
                            "@text": ["\u0417\u0430\u0434\u0430\u0447\u0430 \u0443\u0440\u043e\u0432\u043d\u044f:"],
                            "@fontId": 0
                        },
                        "startLevel1": {
                            "@text": ["\u0437\u0430\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0432\u0435\u0440\u0445\u043d\u0438\u0439 \u0440\u044f\u0434!"],
                            "@fontId": 0
                        },
                        "startLevel2": {
                            "@text": ["\u0434\u043e\u0441\u0442\u0430\u0442\u044c", "\u0441\u0430\u043c\u043e\u0446\u0432\u0435\u0442\u044b!"],
                            "@fontId": 0
                        },
                        "endLevel0": {
                            "@text": ["\u041f\u043e\u0437\u0434\u0440\u0430\u0432\u043b\u044f\u0435\u043c!"],
                            "@fontId": 0
                        },
                        "endLevel1": {
                            "@text": ["\u0414\u043e\u0431\u0440\u0430\u043b\u0438\u0441\u044c \u0434\u043e \u0432\u0435\u0440\u0445\u043d\u0435\u0433\u043e \u0440\u044f\u0434\u0430!"],
                            "@fontId": 0
                        },
                        "endLevel2": {
                            "@text": ["\u0412\u0441\u0435 \u0441\u0430\u043c\u043e\u0446\u0432\u0435\u0442\u044b \u043d\u0430\u0439\u0434\u0435\u043d\u044b!"],
                            "@fontId": 0
                        },
                        "levelScore": {
                            "@text": ["\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0443\u0440\u043e\u0432\u043d\u044f:"],
                            "@fontId": 0
                        },
                        "totalScore": {
                            "@text": ["\u041e\u0431\u0449\u0438\u0439 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"],
                            "@fontId": 0
                        },
                        "praise0": {
                            "@text": ["\u041e\u0442\u043b\u0438\u0447\u043d\u043e!"],
                            "@fontId": 0
                        },
                        "praise1": {
                            "@text": ["\u0417\u0434\u043e\u0440\u043e\u0432\u043e!"],
                            "@fontId": 0
                        },
                        "praise2": {
                            "@text": ["\u0425\u043e\u0440\u043e\u0448\u0430\u044f \u0438\u0433\u0440\u0430!"],
                            "@fontId": 0
                        },
                        "oneLeft": {
                            "@text": ["\u041e\u0441\u0442\u0430\u043b\u0441\u044f \u0435\u0449\u0451 \u043e\u0434\u0438\u043d!"],
                            "@fontId": 0
                        },
                        "api.back": "&laquo; \u041d\u0430\u0437\u0430\u0434",
                        "api.more": "&raquo; \u0411\u043e\u043b\u044c\u0448\u0435 \u0438\u0433\u0440",
                        "api.fullscreen": "[+] \u041f\u043e\u043b\u043d\u043e\u044d\u043a\u0440\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c",
                        "api.continue": "\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c",
                        "api.play_now": "\u0418\u0433\u0440\u0430\u0442\u044c",
                        "api.ad_modal_header": "\u0420\u0435\u043a\u043b\u0430\u043c\u0430 &ndash; \u0437\u0430\u043a\u0440\u043e\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437&hellip;",
                        "api.ad_modal_header2": "\u0420\u0435\u043a\u043b\u0430\u043c\u0430&hellip;",
                        "api.ad_modal_header3": "\u0420\u0435\u043a\u043b\u0430\u043c\u0430&hellip;",
                        "api.teaser_modal_header": "\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c\u0443 \u044d\u043f\u0438\u0437\u043e\u0434\u0443&hellip;",
                        "api.no_abo": "No Subscription!",
                        "api.secure_payment": "Secure Payment!",
                        "api.paymentmethod_cc": "Credit Card",
                        "api.paymentmethod_paypal": "PayPal",
                        "api.paymentmethod_sms": "SMS",
                        "api.payment_cta": "Next",
                        "api.install_app_text": "\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u0430\u044f \u041f\u043e\u043b\u043d\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f!",
                        "api.install_app_cta": "\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441",
                        "api.privacy_info": "<p><strong>\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0434\u0430\u043d\u043d\u044b\u0445:<\/strong> \u041d\u0430\u0448\u0438 \u0438\u0433\u0440\u044b \u0445\u0440\u0430\u043d\u044f\u0442 \u0432\u0430\u0448\u0438 \u0432\u044b\u0441\u043e\u043a\u0438\u0435 \u043e\u0446\u0435\u043d\u043a\u0438 \u0438 \u0445\u043e\u0434 \u0438\u0433\u0440\u044b, \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u044e\u0442 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432\u0430\u0448\u0435\u0439 \u0438\u0433\u0440\u044b \u0438 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u044e\u0442 \u0440\u0435\u043a\u043b\u0430\u043c\u0443 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0432\u0430\u0448\u0438\u0445 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043e\u0432. \u041c\u044b \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u043c \u0430\u043d\u043e\u043d\u0438\u043c\u043d\u044b\u0439 \u0444\u0430\u0439\u043b cookie, \u0447\u0442\u043e\u0431\u044b \u043c\u044b \u043c\u043e\u0433\u043b\u0438 \u0443\u0437\u043d\u0430\u0442\u044c \u0432\u0430\u0441.\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u044f, \u0435\u0441\u043b\u0438 \u0432\u044b \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0442\u0435\u0441\u044c \u0438 \u043d\u0435 \u043c\u043e\u043b\u043e\u0436\u0435 16 \u043b\u0435\u0442.<\/p>",
                        "api.privacy_link": "<p><a href=\"https:\/\/famobi.com\/vendors\/\" target=\"_blank\" data-famobi-href>\u041f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u0438 \u0440\u0435\u043a\u043b\u0430\u043c\u044b<\/a>&nbsp;<span>&<\/span>&nbsp;<a href=\"https:\/\/famobi.com\/privacy\/\" target=\"_blank\" data-famobi-href>\u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438<\/a><\/p>",
                        "api.people_also_like_headline": "\u041b\u044e\u0434\u0438 \u0442\u0430\u043a\u0436\u0435 \u043b\u044e\u0431\u044f\u0442:"
                    },
                    "es": {
                        "levelComplete": {
                            "@text": ["\u00a1Nivel completado!"],
                            "@fontId": 0
                        },
                        "tryAgain": {
                            "@text": ["\u00bfIntentar de nuevo?"],
                            "@fontId": 0
                        },
                        "gameOver": {
                            "@text": ["\u00a1Se acab\u00f3 el juego!"],
                            "@fontId": 0
                        },
                        "outOfBubbles": {
                            "@text": ["\u00a1Te quedaste sin burbujas!"],
                            "@fontId": 0
                        },
                        "startLevel0": {
                            "@text": ["Meta para el nivel:"],
                            "@fontId": 0
                        },
                        "startLevel1": {
                            "@text": ["\u00a1Limpia la parte m\u00e1s alta!"],
                            "@fontId": 0
                        },
                        "startLevel2": {
                            "@text": ["\u00a1Libera", "las gemas!"],
                            "@fontId": 0
                        },
                        "endLevel0": {
                            "@text": ["\u00a1Felicitaciones!"],
                            "@fontId": 0
                        },
                        "endLevel1": {
                            "@text": ["\u00a1Alcanzaste lo m\u00e1s alto!"],
                            "@fontId": 0
                        },
                        "endLevel2": {
                            "@text": ["\u00a1Todas las gemas fueron liberadas!"],
                            "@fontId": 0
                        },
                        "levelScore": {
                            "@text": ["Puntaje de nivel:"],
                            "@fontId": 0
                        },
                        "totalScore": {
                            "@text": ["Puntaje total:"],
                            "@fontId": 0
                        },
                        "praise0": {
                            "@text": ["\u00a1Excelente!"],
                            "@fontId": 0
                        },
                        "praise1": {
                            "@text": ["\u00a1Estupendo!"],
                            "@fontId": 0
                        },
                        "praise2": {
                            "@text": ["\u00a1Buen juego!"],
                            "@fontId": 0
                        },
                        "oneLeft": {
                            "@text": ["\u00a1Una m\u00e1s para liberar!"],
                            "@fontId": 0
                        },
                        "api.back": "&laquo; Regresar",
                        "api.more": "&raquo; M\u00e1s juegos",
                        "api.fullscreen": "[+] Modo pantalla completa",
                        "api.continue": "Continuar",
                        "api.play_now": "Reproducir ahora",
                        "api.ad_modal_header": "La publicidad se cerrar\u00e1 en&hellip;",
                        "api.ad_modal_header2": "Anuncio&hellip;",
                        "api.ad_modal_header3": "Anuncio&hellip;",
                        "api.ad_modal_header_blocked": "Not available due to policy reasons",
                        "api.teaser_modal_header": "Continuar con el siguiente episodio&hellip;",
                        "api.no_abo": "No Subscription!",
                        "api.secure_payment": "Secure Payment!",
                        "api.paymentmethod_cc": "Credit Card",
                        "api.paymentmethod_paypal": "PayPal",
                        "api.paymentmethod_sms": "SMS",
                        "api.payment_cta": "Next",
                        "api.install_app_text": "Versi\u00f3n completa gratis!",
                        "api.install_app_cta": "Instalar ahora",
                        "api.privacy_info": "<p><strong>Informaci\u00f3n de privacidad de datos:<\/strong> Nuestros juegos almacenan tus puntajes m\u00e1s altos y el progreso del juego, rastrean tu comportamiento de juego y muestran anuncios en funci\u00f3n de tus intereses. Guardamos una cookie an\u00f3nima para que podamos reconocerte. Haga clic en el bot\u00f3n de reproducci\u00f3n si acepta y tiene al menos 16 a\u00f1os de edad.<\/p>",
                        "api.privacy_link": "<p><a href=\"https:\/\/famobi.com\/vendors\/\" target=\"_blank\" data-famobi-href>Vendedores de anuncios<\/a>&nbsp;<span>&<\/span>&nbsp;<a href=\"https:\/\/famobi.com\/privacy\/\" target=\"_blank\" data-famobi-href>Pol\u00edtica de privacidad<\/a><\/p>",
                        "api.people_also_like_headline": "A la gente tambi\u00e9n le gusta:"
                    },
                    "it": {
                        "api.back": "&laquo; Indietro",
                        "api.more": "&raquo; More Games",
                        "api.fullscreen": "A tutto schermo",
                        "api.ad_modal_header": "Advertisement closes in&hellip;",
                        "api.ad_modal_header2": "Collegamento sponsorizzato&hellip;",
                        "api.ad_modal_header3": "L\u00e4dt&hellip;",
                        "api.teaser_modal_header": "Continue with the next episode&hellip;",
                        "api.no_abo": "No Subscription!",
                        "api.secure_payment": "Secure Payment!",
                        "api.paymentmethod_cc": "Credit Card",
                        "api.paymentmethod_paypal": "PayPal",
                        "api.paymentmethod_sms": "SMS",
                        "api.continue": "Continua",
                        "api.play_now": "Gioca subito",
                        "api.install_app_text": "La versione completa!",
                        "api.install_app_cta": "Installa ora",
                        "api.privacy_info": "<p><strong>Informazioni sulla privacy dei dati:<\/strong> I nostri giochi memorizzano i tuoi punteggi migliori e il progresso del gioco, monitorano il comportamento dei tuoi giochi e visualizzano annunci in base ai tuoi interessi. Salviamo un cookie anonimo in modo che possiamo riconoscerti. Clicca sul pulsante play se sei d'accordo e hai almeno 16 anni.<\/p>",
                        "api.privacy_link": "<p><a href=\"https:\/\/famobi.com\/vendors\/\" target=\"_blank\" data-famobi-href>Fornitori di pubblicitaria<\/a>&nbsp;<span>&<\/span>&nbsp;<a href=\"https:\/\/famobi.com\/privacy\/\" target=\"_blank\" data-famobi-href>Politica sulla riservatezza<\/a><\/p>",
                        "api.people_also_like_headline": "La gente piace anche:"
                    }
                },
                "gameParams": {
                    "languages_available": ["de", "tr", "en"],
                    "flags": {
                        "exclusive": 1
                    },
                    "orientation": "portrait",
                    "aspectRatio": 0.643,
                    "highscores_enabled": 1,
                    "fullscreen_enabled": 1,
                    "related": [{
                        "id": "square-stacker",
                        "name": "Square Stacker",
                        "thumb": "https:\/\/img.cdn.famobi.com\/portal\/html5games\/images\/tmp\/180\/SquareStackerTeaser.jpg"
                    }, {
                        "id": "3d-air-hockey",
                        "name": "3D Air Hockey",
                        "thumb": "https:\/\/img.cdn.famobi.com\/portal\/html5games\/images\/tmp\/180\/3dAirHockeyTeaser.jpg"
                    }, {
                        "id": "bubble-woods",
                        "name": "Bubble Woods",
                        "thumb": "https:\/\/img.cdn.famobi.com\/portal\/html5games\/images\/tmp\/180\/BubbleWoodsTeaser.jpg"
                    }, {
                        "id": "match-3-squared",
                        "name": "Match 3 Squared",
                        "thumb": "https:\/\/img.cdn.famobi.com\/portal\/html5games\/images\/tmp\/180\/Match3SquaredTeaser.jpg"
                    }, {
                        "id": "slam-dunk-basketball",
                        "name": "Slam Dunk Basketball",
                        "thumb": "https:\/\/img.cdn.famobi.com\/portal\/html5games\/images\/tmp\/180\/SlamDunkBasketballTeaserB.jpg"
                    }, {
                        "id": "stick-freak",
                        "name": "Stick Freak",
                        "thumb": "https:\/\/img.cdn.famobi.com\/portal\/html5games\/images\/tmp\/180\/StickFreakTeaser.jpg"
                    }, {
                        "id": "smarty-bubbles",
                        "name": "Smarty Bubbles",
                        "thumb": "https:\/\/img.cdn.famobi.com\/portal\/html5games\/images\/tmp\/180\/SmartyBubbles20160620Teaser.jpg"
                    }, {
                        "id": "123-puzzle",
                        "name": "123 Puzzle",
                        "thumb": "https:\/\/img.cdn.famobi.com\/portal\/html5games\/images\/tmp\/180\/123PuzzleTeaser.jpg"
                    }, {
                        "id": "dunk-brush",
                        "name": "Dunk Brush",
                        "thumb": "https:\/\/img.cdn.famobi.com\/portal\/html5games\/images\/tmp\/180\/DunkBrushTeaser.jpg"
                    }, {
                        "id": "airport-rush",
                        "name": "Airport Rush",
                        "thumb": "https:\/\/img.cdn.famobi.com\/portal\/html5games\/images\/tmp\/180\/AirportRushTeaser.jpg"
                    }, {
                        "id": "3d-basketball",
                        "name": "3D Basketball",
                        "thumb": "https:\/\/img.cdn.famobi.com\/portal\/html5games\/images\/tmp\/180\/3dBasketballTeaser.jpg"
                    }, {
                        "id": "hextris",
                        "name": "Hextris",
                        "thumb": "https:\/\/img.cdn.famobi.com\/portal\/html5games\/images\/tmp\/180\/HextrisTeaser.jpg"
                    }, {
                        "id": "backgammon-classic",
                        "name": "Backgammon Classic",
                        "thumb": "https:\/\/img.cdn.famobi.com\/portal\/html5games\/images\/tmp\/180\/Backgammon_Classic_Teaser.jpg"
                    }, {
                        "id": "classic-bowling",
                        "name": "Classic Bowling",
                        "thumb": "https:\/\/img.cdn.famobi.com\/portal\/html5games\/images\/tmp\/180\/ClassicBowlingTeaser.jpg"
                    }, {
                        "id": "treasure-hunt",
                        "name": "Treasure Hunt",
                        "thumb": "https:\/\/img.cdn.famobi.com\/portal\/html5games\/images\/tmp\/180\/TreasureHuntTeaser.jpg"
                    }],
                    "header_image": "BubbleSpiritHeader.jpg"
                },
                "urlRoot": "https:\/\/play.famobi.com",
                "assetsPath": "https:\/\/play.famobi.com\/assets\/0.2-9aac730e",
                "ts": 1590945585000,
                "short_url": "https:\/\/play.famobi.com\/bubble-spirit",
                "uuid": "b72a0942-e488-4545-ab1e-888d74ce3b19",
                "pid": "4638e320-4444-4514-81c4-d80a8c662371",
                "aid": "A1000-1",
                "name": "\"Bubble Spirit\"",
                "package_id": "\"bubble-spirit\"",
                "languages": ["de", "en", "es", "fr", "it", "nl", "pl", "pt", "ru", "tr"],
                "ads": {
                    "min_s_between": 90,
                    "min_s_before": 10,
                    "show_initial": true,
                    "show_video": true,
                    "npa": false,
                    "description_url": "https:\/\/play.famobi.com\/sda\/description\/bubble-spirit?hl=en",
                    "provider": "dfp",
                    "dfp_available": false,
                    "vast_url": ""
                },
                "i18n": {
                    "default": {
                        "api.back": "&laquo; Back",
                        "api.more": "&raquo; More Games",
                        "api.fullscreen": "[+] Fullscreen mode",
                        "api.continue": "Continue",
                        "api.play_now": "Play now",
                        "api.ad_modal_header": "Advertisement closes in&hellip;",
                        "api.ad_modal_header2": "Advertisement&hellip;",
                        "api.ad_modal_header3": "Loading&hellip;",
                        "api.ad_modal_header_blocked": "Not available due to policy reasons",
                        "api.teaser_modal_header": "Continue with the next episode&hellip;",
                        "api.no_abo": "No Subscription!",
                        "api.secure_payment": "Secure Payment!",
                        "api.paymentmethod_cc": "Credit Card",
                        "api.paymentmethod_paypal": "PayPal",
                        "api.paymentmethod_sms": "SMS",
                        "api.payment_cta": "Next",
                        "api.install_app_text_2": "\ud83d\ude99&nbsp;&nbsp;\ud83d\ude8c&nbsp;&nbsp;\u26f1&nbsp;&nbsp;Low signal?",
                        "api.install_app_cta_2": "Install Full Game Now",
                        "api.install_app_text_3": "\ud83d\ude99&nbsp;&nbsp;\ud83d\ude8c&nbsp;&nbsp;\u26f1&nbsp;&nbsp;Long journeys?",
                        "api.install_app_cta_3": "Install Full Game Now",
                        "api.install_app_text": "Free full version",
                        "api.install_app_cta": "Get the App",
                        "api.privacy_info": "<p><strong>Data Privacy Information:<\/strong> Our games store your highscores and game progress, track your gaming behaviour and display ads based on your interests. We save an anonymous cookie so we can recognize you. Click on the play button if you agree and are at least 16 years of age.",
                        "api.privacy_link": "<p><a href=\"https:\/\/famobi.com\/vendors\/\" target=\"_blank\" data-famobi-href>Ad Vendors<\/a>&nbsp;<span>&<\/span>&nbsp;<a href=\"https:\/\/famobi.com\/privacy\/\" target=\"_blank\" data-famobi-href>Privacy Policy<\/a><\/p>",
                        "api.people_also_like_headline": "People also like:"
                    },
                    "en": {
                        "api.back": "&laquo; Back",
                        "api.more": "&raquo; More Games",
                        "api.fullscreen": "[+] Fullscreen mode",
                        "api.continue": "Continue",
                        "api.play_now": "Play now",
                        "api.ad_modal_header": "Advertisement closes in&hellip;",
                        "api.ad_modal_header2": "Advertisement&hellip;",
                        "api.ad_modal_header3": "Loading&hellip;",
                        "api.ad_modal_header_blocked": "Not available due to policy reasons",
                        "api.teaser_modal_header": "Continue with the next episode&hellip;",
                        "api.no_abo": "No Subscription!",
                        "api.secure_payment": "Secure Payment!",
                        "api.paymentmethod_cc": "Credit Card",
                        "api.paymentmethod_paypal": "PayPal",
                        "api.paymentmethod_sms": "SMS",
                        "api.payment_cta": "Next",
                        "api.install_app_text_2": "\ud83d\ude99&nbsp;&nbsp;\ud83d\ude8c&nbsp;&nbsp;\u26f1&nbsp;&nbsp;Low signal?",
                        "api.install_app_cta_2": "Install Full Game Now",
                        "api.install_app_text_3": "\ud83d\ude99&nbsp;&nbsp;\ud83d\ude8c&nbsp;&nbsp;\u26f1&nbsp;&nbsp;Long journeys?",
                        "api.install_app_cta_3": "Install Full Game Now",
                        "api.install_app_text": "Free full version",
                        "api.install_app_cta": "Get the App",
                        "api.privacy_info": "<p><strong>Data Privacy Information:<\/strong> Our games store your highscores and game progress, track your gaming behaviour and display ads based on your interests. We save an anonymous cookie so we can recognize you. Click on the play button if you agree and are at least 16 years of age.",
                        "api.privacy_link": "<p><a href=\"https:\/\/famobi.com\/vendors\/\" target=\"_blank\" data-famobi-href>Ad Vendors<\/a>&nbsp;<span>&<\/span>&nbsp;<a href=\"https:\/\/famobi.com\/privacy\/\" target=\"_blank\" data-famobi-href>Privacy Policy<\/a><\/p>",
                        "api.people_also_like_headline": "People also like:"
                    },
                    "de": {
                        "api.back": "&laquo; zur&uuml;ck",
                        "api.more": "&raquo; mehr Spiele",
                        "api.fullscreen": "[+] Vollbildmodus",
                        "api.continue": "Weiter",
                        "api.play_now": "Jetzt spielen",
                        "api.ad_modal_header": "Werbung schlie\u00dft automatisch in&hellip;",
                        "api.ad_modal_header2": "Werbung&hellip;",
                        "api.ad_modal_header3": "L\u00e4dt&hellip;",
                        "api.teaser_modal_header": "Spiele jetzt den n\u00e4chsten Teil&hellip;",
                        "api.no_abo": "Kein Abo!",
                        "api.secure_payment": "Sicheres Bezahlen!",
                        "api.paymentmethod_cc": "Kreditkarte",
                        "api.paymentmethod_paypal": "PayPal",
                        "api.paymentmethod_sms": "SMS",
                        "api.payment_cta": "Weiter",
                        "api.install_app_text_2": "\ud83d\ude99&nbsp;&nbsp;\ud83d\ude8c&nbsp;&nbsp;\u26f1&nbsp;&nbsp;Kein Netz?",
                        "api.install_app_cta_2": "Spiel als App installieren",
                        "api.install_app_text_3": "\ud83d\ude99&nbsp;&nbsp;\ud83d\ude8c&nbsp;&nbsp;\u26f1&nbsp;&nbsp;L\u00e4ngere Reise?",
                        "api.install_app_cta_3": "Spiel als App installieren",
                        "api.install_app_text": "Kostenlose Vollversion",
                        "api.install_app_cta": "App installieren",
                        "api.privacy_info": "<p><strong>Information zum Datenschutz:<\/strong> Unsere Spiele speichern deine Highscores und den Spielfortschritt, tracken dein Spielverhalten und zeigen Werbung basierend auf deinen Interessen. Wir speichern einen anonymen Cookie, damit wir dich wiedererkennen k\u00f6nnen. Klicke auf den Play-Button, wenn du zustimmst und mindestens 16 Jahre alt bist.<\/p>",
                        "api.privacy_link": "<p><a href=\"https:\/\/famobi.com\/vendors\/\" target=\"_blank\" data-famobi-href>Anzeigenanbieter<\/a>&nbsp;<span>&<\/span>&nbsp;<a href=\"https:\/\/famobi.com\/privacy\/\" target=\"_blank\" data-famobi-href>Datenschutz-Bestimmungen<\/a><\/p>",
                        "api.people_also_like_headline": "Andere m\u00f6gen auch:"
                    },
                    "es": {
                        "api.back": "&laquo; Regresar",
                        "api.more": "&raquo; M\u00e1s juegos",
                        "api.fullscreen": "[+] Modo pantalla completa",
                        "api.continue": "Continuar",
                        "api.play_now": "Reproducir ahora",
                        "api.ad_modal_header": "La publicidad se cerrar\u00e1 en&hellip;",
                        "api.ad_modal_header2": "Anuncio&hellip;",
                        "api.ad_modal_header3": "Anuncio&hellip;",
                        "api.ad_modal_header_blocked": "Not available due to policy reasons",
                        "api.teaser_modal_header": "Continuar con el siguiente episodio&hellip;",
                        "api.no_abo": "No Subscription!",
                        "api.secure_payment": "Secure Payment!",
                        "api.paymentmethod_cc": "Credit Card",
                        "api.paymentmethod_paypal": "PayPal",
                        "api.paymentmethod_sms": "SMS",
                        "api.payment_cta": "Next",
                        "api.install_app_text": "Versi\u00f3n completa gratis!",
                        "api.install_app_cta": "Instalar ahora",
                        "api.privacy_info": "<p><strong>Informaci\u00f3n de privacidad de datos:<\/strong> Nuestros juegos almacenan tus puntajes m\u00e1s altos y el progreso del juego, rastrean tu comportamiento de juego y muestran anuncios en funci\u00f3n de tus intereses. Guardamos una cookie an\u00f3nima para que podamos reconocerte. Haga clic en el bot\u00f3n de reproducci\u00f3n si acepta y tiene al menos 16 a\u00f1os de edad.<\/p>",
                        "api.privacy_link": "<p><a href=\"https:\/\/famobi.com\/vendors\/\" target=\"_blank\" data-famobi-href>Vendedores de anuncios<\/a>&nbsp;<span>&<\/span>&nbsp;<a href=\"https:\/\/famobi.com\/privacy\/\" target=\"_blank\" data-famobi-href>Pol\u00edtica de privacidad<\/a><\/p>",
                        "api.people_also_like_headline": "A la gente tambi\u00e9n le gusta:"
                    },
                    "fr": {
                        "api.back": "&laquo; Retour",
                        "api.more": "&raquo; Plus de jeux",
                        "api.fullscreen": "[+] Mode plein \u00e9cran",
                        "api.continue": "Continuer",
                        "api.play_now": "Jouer maintenant",
                        "api.ad_modal_header": "Advertisement closes in&hellip;",
                        "api.ad_modal_header2": "R\u00e9clame&hellip;",
                        "api.ad_modal_header3": "Loading&hellip;",
                        "api.ad_modal_header_blocked": "Not available due to policy reasons",
                        "api.teaser_modal_header": "Continue with the next episode&hellip;",
                        "api.no_abo": "No Subscription!",
                        "api.secure_payment": "Secure Payment!",
                        "api.paymentmethod_cc": "Credit Card",
                        "api.paymentmethod_paypal": "PayPal",
                        "api.paymentmethod_sms": "SMS",
                        "api.payment_cta": "Next",
                        "api.install_app_text": "Version compl\u00e8te gratuite!",
                        "api.install_app_cta": "Installer maintenant",
                        "api.privacy_info": "<p><strong>Informations sur la confidentialit\u00e9 des donn\u00e9es:<\/strong> Nos jeux stockent vos scores \u00e9lev\u00e9s et la progression du jeu, suivent votre comportement de jeu et affichent des publicit\u00e9s en fonction de vos int\u00e9r\u00eats. Nous sauvegardons un cookie anonyme afin que nous puissions vous reconna\u00eetre. Cliquez sur le bouton de lecture si vous \u00eates d'accord et avez au moins 16 ans.<\/p>",
                        "api.privacy_link": "<p><a href=\"https:\/\/famobi.com\/vendors\/\" target=\"_blank\" data-famobi-href>Fournisseurs d'annonces<\/a>&nbsp;<span>&<\/span>&nbsp;<a href=\"https:\/\/famobi.com\/privacy\/\" target=\"_blank\" data-famobi-href>Politique de confidentialit\u00e9<\/a><\/p>",
                        "api.people_also_like_headline": "Les gens aiment aussi:"
                    },
                    "it": {
                        "api.back": "&laquo; Indietro",
                        "api.more": "&raquo; More Games",
                        "api.fullscreen": "A tutto schermo",
                        "api.ad_modal_header": "Advertisement closes in&hellip;",
                        "api.ad_modal_header2": "Collegamento sponsorizzato&hellip;",
                        "api.ad_modal_header3": "L\u00e4dt&hellip;",
                        "api.teaser_modal_header": "Continue with the next episode&hellip;",
                        "api.no_abo": "No Subscription!",
                        "api.secure_payment": "Secure Payment!",
                        "api.paymentmethod_cc": "Credit Card",
                        "api.paymentmethod_paypal": "PayPal",
                        "api.paymentmethod_sms": "SMS",
                        "api.continue": "Continua",
                        "api.play_now": "Gioca subito",
                        "api.install_app_text": "La versione completa!",
                        "api.install_app_cta": "Installa ora",
                        "api.privacy_info": "<p><strong>Informazioni sulla privacy dei dati:<\/strong> I nostri giochi memorizzano i tuoi punteggi migliori e il progresso del gioco, monitorano il comportamento dei tuoi giochi e visualizzano annunci in base ai tuoi interessi. Salviamo un cookie anonimo in modo che possiamo riconoscerti. Clicca sul pulsante play se sei d'accordo e hai almeno 16 anni.<\/p>",
                        "api.privacy_link": "<p><a href=\"https:\/\/famobi.com\/vendors\/\" target=\"_blank\" data-famobi-href>Fornitori di pubblicitaria<\/a>&nbsp;<span>&<\/span>&nbsp;<a href=\"https:\/\/famobi.com\/privacy\/\" target=\"_blank\" data-famobi-href>Politica sulla riservatezza<\/a><\/p>",
                        "api.people_also_like_headline": "La gente piace anche:"
                    },
                    "nl": {
                        "api.back": "&laquo; Vorige",
                        "api.more": "&raquo; Meer games",
                        "api.fullscreen": "[+] Volledig scherm",
                        "api.continue": "Doorgaan",
                        "api.play_now": "Nu spelen",
                        "api.ad_modal_header": "De publiciteit eindigt in&hellip;",
                        "api.ad_modal_header2": "Publiciteit&hellip;",
                        "api.ad_modal_header3": "Publiciteit&hellip;",
                        "api.ad_modal_header_blocked": "Not available due to policy reasons",
                        "api.teaser_modal_header": "Doorgaan met de volgende aflevering&hellip;",
                        "api.no_abo": "No Subscription!",
                        "api.secure_payment": "Secure Payment!",
                        "api.paymentmethod_cc": "Credit Card",
                        "api.paymentmethod_paypal": "PayPal",
                        "api.paymentmethod_sms": "SMS",
                        "api.payment_cta": "Next",
                        "api.install_app_text": "Gratis volledige versie!",
                        "api.install_app_cta": "Installeer nu",
                        "api.privacy_info": "<p><strong>Gegevens Privacy Gegevens:<\/strong> Onze spellen slaan je hoogste scores en voortgang van het spel op, volgen je speelgedrag en geven advertenties weer op basis van je interesses. We slaan een anoniem cookie op zodat we u kunnen herkennen. Klik op de knop Afspelen als u hiermee instemt en ten minste 16 jaar oud bent.<\/p>",
                        "api.privacy_link": "<p><a href=\"https:\/\/famobi.com\/vendors\/\" target=\"_blank\" data-famobi-href>Advertentieleveranciers<\/a>&nbsp;<span>&<\/span>&nbsp;<a href=\"https:\/\/famobi.com\/privacy\/\" target=\"_blank\" data-famobi-href>Privacybeleid<\/a><\/p>",
                        "api.people_also_like_headline": "Mensen houden ook van:"
                    },
                    "pl": {
                        "api.back": "&laquo; Wr\u00f3\u0107",
                        "api.more": "&raquo; Wi\u0119cej gier",
                        "api.fullscreen": "[+] Tryb pe\u0142noekranowy",
                        "api.continue": "Kontynuuj",
                        "api.play_now": "Graj teraz",
                        "api.ad_modal_header": "Reklama zamknie si\u0119 za&hellip;",
                        "api.ad_modal_header2": "Reklama&hellip;",
                        "api.ad_modal_header3": "Reklama&hellip;",
                        "api.ad_modal_header_blocked": "Not available due to policy reasons",
                        "api.teaser_modal_header": "Przejd\u017a do kolejnego odcinka&hellip;",
                        "api.no_abo": "No Subscription!",
                        "api.secure_payment": "Secure Payment!",
                        "api.paymentmethod_cc": "Credit Card",
                        "api.paymentmethod_paypal": "PayPal",
                        "api.paymentmethod_sms": "SMS",
                        "api.payment_cta": "Next",
                        "api.install_app_text": "Bezp\u0142atna pe\u0142na wersja!",
                        "api.install_app_cta": "Zainstaluj teraz",
                        "api.privacy_info": "<p><strong>Informacje dotycz\u0105ce prywatno\u015bci danych:<\/strong> Nasze gry przechowuj\u0105 Twoje najlepsze wyniki i post\u0119py w grze, \u015bledz\u0105 zachowanie graczy i wy\u015bwietlaj\u0105 reklamy w oparciu o Twoje zainteresowania. Zapisujemy anonimowy plik cookie, aby\u015bmy mogli Ci\u0119 rozpozna\u0107. Kliknij przycisk odtwarzania, je\u015bli si\u0119 zgadzasz i masz co najmniej 16 lat.<\/p>",
                        "api.privacy_link": "<p><a href=\"https:\/\/famobi.com\/vendors\/\" target=\"_blank\" data-famobi-href>Dostawcy reklam<\/a>&nbsp;<span>&<\/span>&nbsp;<a href=\"https:\/\/famobi.com\/privacy\/\" target=\"_blank\" data-famobi-href>Polityka prywatno\u015bci<\/a><\/p>",
                        "api.people_also_like_headline": "Ludzie te\u017c lubi\u0105:"
                    },
                    "pt": {
                        "api.back": "&laquo; Voltar",
                        "api.more": "&raquo; Mais jogos",
                        "api.fullscreen": "[+] Tela cheia",
                        "api.continue": "Continuar",
                        "api.play_now": "Jogar agora",
                        "api.ad_modal_header": "Publicidade fecha em &hellip;",
                        "api.ad_modal_header2": "Publicidade &hellip;",
                        "api.ad_modal_header3": "Publicidade &hellip;",
                        "api.ad_modal_header_blocked": "Not available due to policy reasons",
                        "api.teaser_modal_header": "Continua com o pr\u00f3ximo epis\u00f3dio&hellip;",
                        "api.no_abo": "No Subscription!",
                        "api.secure_payment": "Secure Payment!",
                        "api.paymentmethod_cc": "Credit Card",
                        "api.paymentmethod_paypal": "PayPal",
                        "api.paymentmethod_sms": "SMS",
                        "api.payment_cta": "Next",
                        "api.install_app_text": "Gr\u00e1tis Full Version!",
                        "api.install_app_cta": "Instale agora",
                        "api.privacy_info": "<p><strong>Informa\u00e7\u00f5es de privacidade de dados:<\/strong> Nossos jogos armazenam suas pontua\u00e7\u00f5es mais altas e o progresso do jogo, rastreiam seu comportamento de jogo e exibem an\u00fancios com base em seus interesses. N\u00f3s salvamos um cookie an\u00f4nimo para que possamos reconhec\u00ea-lo. Clique no bot\u00e3o play se voc\u00ea concordar e tiver pelo menos 16 anos de idade.<\/p>",
                        "api.privacy_link": "<p><a href=\"https:\/\/famobi.com\/vendors\/\" target=\"_blank\" data-famobi-href>Fornecedores de an\u00fancios<\/a>&nbsp;<span>&<\/span>&nbsp;<a href=\"https:\/\/famobi.com\/privacy\/\" target=\"_blank\" data-famobi-href>Pol\u00edtica de Privacidade<\/a><\/p>",
                        "api.people_also_like_headline": "As pessoas tamb\u00e9m gostam:"
                    },
                    "ru": {
                        "api.back": "&laquo; \u041d\u0430\u0437\u0430\u0434",
                        "api.more": "&raquo; \u0411\u043e\u043b\u044c\u0448\u0435 \u0438\u0433\u0440",
                        "api.fullscreen": "[+] \u041f\u043e\u043b\u043d\u043e\u044d\u043a\u0440\u0430\u043d\u043d\u044b\u0439 \u0440\u0435\u0436\u0438\u043c",
                        "api.continue": "\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c",
                        "api.play_now": "\u0418\u0433\u0440\u0430\u0442\u044c",
                        "api.ad_modal_header": "\u0420\u0435\u043a\u043b\u0430\u043c\u0430 &ndash; \u0437\u0430\u043a\u0440\u043e\u0435\u0442\u0441\u044f \u0447\u0435\u0440\u0435\u0437&hellip;",
                        "api.ad_modal_header2": "\u0420\u0435\u043a\u043b\u0430\u043c\u0430&hellip;",
                        "api.ad_modal_header3": "\u0420\u0435\u043a\u043b\u0430\u043c\u0430&hellip;",
                        "api.teaser_modal_header": "\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0441\u043b\u0435\u0434\u0443\u044e\u0449\u0435\u043c\u0443 \u044d\u043f\u0438\u0437\u043e\u0434\u0443&hellip;",
                        "api.no_abo": "No Subscription!",
                        "api.secure_payment": "Secure Payment!",
                        "api.paymentmethod_cc": "Credit Card",
                        "api.paymentmethod_paypal": "PayPal",
                        "api.paymentmethod_sms": "SMS",
                        "api.payment_cta": "Next",
                        "api.install_app_text": "\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u0430\u044f \u041f\u043e\u043b\u043d\u0430\u044f \u0432\u0435\u0440\u0441\u0438\u044f!",
                        "api.install_app_cta": "\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0441\u0435\u0439\u0447\u0430\u0441",
                        "api.privacy_info": "<p><strong>\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438 \u0434\u0430\u043d\u043d\u044b\u0445:<\/strong> \u041d\u0430\u0448\u0438 \u0438\u0433\u0440\u044b \u0445\u0440\u0430\u043d\u044f\u0442 \u0432\u0430\u0448\u0438 \u0432\u044b\u0441\u043e\u043a\u0438\u0435 \u043e\u0446\u0435\u043d\u043a\u0438 \u0438 \u0445\u043e\u0434 \u0438\u0433\u0440\u044b, \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u044e\u0442 \u043f\u043e\u0432\u0435\u0434\u0435\u043d\u0438\u0435 \u0432\u0430\u0448\u0435\u0439 \u0438\u0433\u0440\u044b \u0438 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u044e\u0442 \u0440\u0435\u043a\u043b\u0430\u043c\u0443 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0432\u0430\u0448\u0438\u0445 \u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043e\u0432. \u041c\u044b \u0441\u043e\u0445\u0440\u0430\u043d\u044f\u0435\u043c \u0430\u043d\u043e\u043d\u0438\u043c\u043d\u044b\u0439 \u0444\u0430\u0439\u043b cookie, \u0447\u0442\u043e\u0431\u044b \u043c\u044b \u043c\u043e\u0433\u043b\u0438 \u0443\u0437\u043d\u0430\u0442\u044c \u0432\u0430\u0441.\u041d\u0430\u0436\u043c\u0438\u0442\u0435 \u043a\u043d\u043e\u043f\u043a\u0443 \u0432\u043e\u0441\u043f\u0440\u043e\u0438\u0437\u0432\u0435\u0434\u0435\u043d\u0438\u044f, \u0435\u0441\u043b\u0438 \u0432\u044b \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0442\u0435\u0441\u044c \u0438 \u043d\u0435 \u043c\u043e\u043b\u043e\u0436\u0435 16 \u043b\u0435\u0442.<\/p>",
                        "api.privacy_link": "<p><a href=\"https:\/\/famobi.com\/vendors\/\" target=\"_blank\" data-famobi-href>\u041f\u043e\u0441\u0442\u0430\u0432\u0449\u0438\u043a\u0438 \u0440\u0435\u043a\u043b\u0430\u043c\u044b<\/a>&nbsp;<span>&<\/span>&nbsp;<a href=\"https:\/\/famobi.com\/privacy\/\" target=\"_blank\" data-famobi-href>\u043f\u043e\u043b\u0438\u0442\u0438\u043a\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438<\/a><\/p>",
                        "api.people_also_like_headline": "\u041b\u044e\u0434\u0438 \u0442\u0430\u043a\u0436\u0435 \u043b\u044e\u0431\u044f\u0442:"
                    },
                    "tr": {
                        "api.back": "&laquo; Geri",
                        "api.more": "&raquo; Daha Fazla Oyun",
                        "api.fullscreen": "Tam ekran",
                        "api.continue": "Devam",
                        "api.play_now": "Oyna",
                        "api.ad_modal_header": "Reklam &ndash; otomatik kapanacakt\u0131r&hellip;",
                        "api.ad_modal_header2": "Reklam&hellip;",
                        "api.ad_modal_header3": "Reklam&hellip;",
                        "api.teaser_modal_header": "Sonraki B\u00f6l\u00fcm&hellip;",
                        "api.no_abo": "Abonelik Yoktur!",
                        "api.secure_payment": "G\u00fcvenli \u00d6deme!",
                        "api.paymentmethod_cc": "Kredi Kart\u0131",
                        "api.paymentmethod_paypal": "PayPal",
                        "api.paymentmethod_sms": "SMS",
                        "api.payment_cta": "Sonraki",
                        "api.install_app_text": "Bedava Tam S\u00fcr\u00fcm!",
                        "api.install_app_cta": "\u015eimdi kur",
                        "api.privacy_info": "<p><strong>Veri Gizlili\u011fi Bilgileri:<\/strong> Oyunlar\u0131m\u0131z y\u00fcksek puanlar\u0131n\u0131z\u0131 ve oyun ilerlemenizi depolar, oyun davran\u0131\u015f\u0131n\u0131z\u0131 izler ve ilgi alanlar\u0131n\u0131za g\u00f6re reklamlar\u0131 g\u00f6sterir. Anonim bir \u00e7erez kaydediyoruz, b\u00f6ylece sizi tan\u0131yabiliriz. Kabul ediyorsan\u0131z ve en az 16 ya\u015f\u0131ndaysan\u0131z oyun butonuna t\u0131klay\u0131n.<\/p>",
                        "api.privacy_link": "<p><a href=\"https:\/\/famobi.com\/vendors\/\" target=\"_blank\" data-famobi-href>Reklam sa\u011flay\u0131c\u0131lar\u0131<\/a>&nbsp;<span>&<\/span>&nbsp;<a href=\"https:\/\/famobi.com\/privacy\/\" target=\"_blank\" data-famobi-href>Gizlilik Politikas\u0131<\/a><\/p>",
                        "api.people_also_like_headline": "Insanlar da gibi:"
                    }
                },
                "branding": {
                    "more_games_image_prefix": "https:\/\/games.cdn.famobi.com",
                    "more_games_image": "\/portal\/4638e320-4444-4514-81c4-d80a8c662371\/more-games-button\/600x253\/5a6895c0f28fb.png",
                    "more_games_url": "https:\/\/html5games.com",
                    "preload_image": "\/html5games\/gameapi\/v1\/invisPreloadImage.png",
                    "test_preload_image": "\/html5games\/gameapi\/v1\/testPreloadImage.png"
                },
                "thumb": "https:\/\/img.cdn.famobi.com\/portal\/html5games\/images\/tmp\/BubbleSpirit_Teaser.jpg",
                "blurred_thumb": "https:\/\/img.cdn.famobi.com\/portal\/html5games\/images\/tmp\/blurred\/BubbleSpirit_Teaser.jpg",
                "favicon_32": "https:\/\/img.cdn.famobi.com\/portal\/html5games\/images\/tmp\/32\/BubbleSpirit_Teaser.jpg",
                "favicon_64": "https:\/\/img.cdn.famobi.com\/portal\/html5games\/images\/tmp\/64\/BubbleSpirit_Teaser.jpg",
                "favicon_96": "https:\/\/img.cdn.famobi.com\/portal\/html5games\/images\/tmp\/96\/BubbleSpirit_Teaser.jpg",
                "favicon_192": "https:\/\/img.cdn.famobi.com\/portal\/html5games\/images\/tmp\/192\/BubbleSpirit_Teaser.jpg",
                "type": "html5",
                "tracking_date": "2020-05-29",
                "video": {
                    "sources": []
                },
            }, _fgq, '');
        };
        firstJS.parentNode.insertBefore(fgJS, firstJS);
    })(document, 'js/gameapi.js');

    window.famobi_ts = 1590945585000;
    if ((new Date).getTime() > famobi_ts) {
        window.famobi_gameJS.push(function() {
            window.location = '//play.famobi.com/';
        });
    }