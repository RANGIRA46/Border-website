// Language translations for the Border & Passport Management System
// Supports: English, French, Kiswahili, Kinyarwanda

export type Language = 'en' | 'fr' | 'sw' | 'rw';

export interface Translations {
    // Navigation
    nav: {
        home: string;
        passports: string;
        visas: string;
        permits: string;
        citizenship: string;
        status: string;
        signIn: string;
        signOut: string;
    };

    // Common
    common: {
        apply: string;
        submit: string;
        cancel: string;
        next: string;
        previous: string;
        save: string;
        loading: string;
        search: string;
        filter: string;
        export: string;
        download: string;
        upload: string;
        view: string;
        edit: string;
        delete: string;
        confirm: string;
        yes: string;
        no: string;
    };

    // Home page
    home: {
        hero: {
            badge: string;
            title: string;
            description: string;
            applyPassport: string;
            checkStatus: string;
        };
        services: {
            title: string;
            description: string;
        };
        officerPortal: {
            badge: string;
            title: string;
            description: string;
            accessPortal: string;
            features: string[];
        };
    };

    // Applications
    applications: {
        passport: {
            title: string;
            description: string;
            newApplication: string;
            renewal: string;
            replacement: string;
        };
        visa: {
            title: string;
            description: string;
            tourist: string;
            business: string;
            transit: string;
            diplomatic: string;
        };
        permit: {
            title: string;
            description: string;
            work: string;
            residence: string;
            student: string;
            investment: string;
        };
        citizenship: {
            title: string;
            description: string;
        };
        laissezPasser: {
            title: string;
            description: string;
        };
    };

    // Form fields
    form: {
        personalInfo: string;
        firstName: string;
        lastName: string;
        middleName: string;
        dateOfBirth: string;
        gender: string;
        nationality: string;
        email: string;
        phone: string;
        address: string;
        city: string;
        country: string;
        postalCode: string;
        passportNumber: string;
        nationalId: string;
        applicationId: string;
        selectOption: string;
        male: string;
        female: string;
        other: string;
    };

    // Status
    status: {
        pending: string;
        underReview: string;
        approved: string;
        rejected: string;
        completed: string;
        inProgress: string;
    };

    // Footer
    footer: {
        tagline: string;
        services: string;
        support: string;
        legal: string;
        copyright: string;
    };
}

export const translations: Record<Language, Translations> = {
    en: {
        nav: {
            home: 'Home',
            passports: 'Passports',
            visas: 'Visas',
            permits: 'Permits',
            citizenship: 'Citizenship',
            status: 'Status',
            signIn: 'Sign In',
            signOut: 'Sign Out',
        },
        common: {
            apply: 'Apply',
            submit: 'Submit',
            cancel: 'Cancel',
            next: 'Next',
            previous: 'Previous',
            save: 'Save',
            loading: 'Loading...',
            search: 'Search',
            filter: 'Filter',
            export: 'Export',
            download: 'Download',
            upload: 'Upload',
            view: 'View',
            edit: 'Edit',
            delete: 'Delete',
            confirm: 'Confirm',
            yes: 'Yes',
            no: 'No',
        },
        home: {
            hero: {
                badge: 'Official Government Portal',
                title: 'Secure Borders, Seamless Travel',
                description: 'The advanced digital platform for passport issuance, visa processing, and identity management.',
                applyPassport: 'Apply for Passport',
                checkStatus: 'Check Status',
            },
            services: {
                title: 'Our Services',
                description: 'Access a wide range of immigration and border control services online.',
            },
            officerPortal: {
                badge: 'Restricted Access',
                title: 'Officer Portal',
                description: 'Secure access for border control officers and administrators to manage applications, verify identities, and monitor border crossings.',
                accessPortal: 'Access Portal',
                features: [
                    'Biometric Enrollment & Verification',
                    'Real-time Watchlist Screening',
                    'Entry/Exit Logging',
                    'Advanced Analytics',
                ],
            },
        },
        applications: {
            passport: {
                title: 'Passport Application',
                description: 'Apply for a new passport or renew your existing one',
                newApplication: 'New Passport',
                renewal: 'Renewal',
                replacement: 'Replacement',
            },
            visa: {
                title: 'Visa Application',
                description: 'Apply for travel authorization',
                tourist: 'Tourist Visa',
                business: 'Business Visa',
                transit: 'Transit Visa',
                diplomatic: 'Diplomatic Visa',
            },
            permit: {
                title: 'Permits',
                description: 'Work, residence, and study permits',
                work: 'Work Permit',
                residence: 'Residence Permit',
                student: 'Student Permit',
                investment: 'Investment Permit',
            },
            citizenship: {
                title: 'Citizenship',
                description: 'Apply for citizenship or naturalization',
            },
            laissezPasser: {
                title: 'Laissez-Passer',
                description: 'Emergency travel documents',
            },
        },
        form: {
            personalInfo: 'Personal Information',
            firstName: 'First Name',
            lastName: 'Last Name',
            middleName: 'Middle Name',
            dateOfBirth: 'Date of Birth',
            gender: 'Gender',
            nationality: 'Nationality',
            email: 'Email Address',
            phone: 'Phone Number',
            address: 'Address',
            city: 'City',
            country: 'Country',
            postalCode: 'Postal Code',
            passportNumber: 'Passport Number',
            nationalId: 'National ID',
            applicationId: 'Application ID',
            selectOption: 'Select an option',
            male: 'Male',
            female: 'Female',
            other: 'Other',
        },
        status: {
            pending: 'Pending',
            underReview: 'Under Review',
            approved: 'Approved',
            rejected: 'Rejected',
            completed: 'Completed',
            inProgress: 'In Progress',
        },
        footer: {
            tagline: 'Secure borders, seamless travel. The official platform for national immigration services.',
            services: 'Services',
            support: 'Support',
            legal: 'Legal',
            copyright: '© 2025 National Border & Immigration Services. All rights reserved.',
        },
    },

    fr: {
        nav: {
            home: 'Accueil',
            passports: 'Passeports',
            visas: 'Visas',
            permits: 'Permis',
            citizenship: 'Citoyenneté',
            status: 'Statut',
            signIn: 'Se Connecter',
            signOut: 'Se Déconnecter',
        },
        common: {
            apply: 'Postuler',
            submit: 'Soumettre',
            cancel: 'Annuler',
            next: 'Suivant',
            previous: 'Précédent',
            save: 'Enregistrer',
            loading: 'Chargement...',
            search: 'Rechercher',
            filter: 'Filtrer',
            export: 'Exporter',
            download: 'Télécharger',
            upload: 'Téléverser',
            view: 'Voir',
            edit: 'Modifier',
            delete: 'Supprimer',
            confirm: 'Confirmer',
            yes: 'Oui',
            no: 'Non',
        },
        home: {
            hero: {
                badge: 'Portail Gouvernemental Officiel',
                title: 'Frontières Sécurisées, Voyage Sans Tracas',
                description: 'La plateforme numérique avancée pour la délivrance de passeports, le traitement des visas et la gestion d\'identité.',
                applyPassport: 'Demander un Passeport',
                checkStatus: 'Vérifier le Statut',
            },
            services: {
                title: 'Nos Services',
                description: 'Accédez à une large gamme de services d\'immigration et de contrôle aux frontières en ligne.',
            },
            officerPortal: {
                badge: 'Accès Restreint',
                title: 'Portail des Agents',
                description: 'Accès sécurisé pour les agents de contrôle aux frontières et les administrateurs pour gérer les demandes, vérifier les identités et surveiller les passages frontaliers.',
                accessPortal: 'Accéder au Portail',
                features: [
                    'Inscription et Vérification Biométrique',
                    'Dépistage en Temps Réel des Listes de Surveillance',
                    'Enregistrement des Entrées/Sorties',
                    'Analyses Avancées',
                ],
            },
        },
        applications: {
            passport: {
                title: 'Demande de Passeport',
                description: 'Demandez un nouveau passeport ou renouvelez le vôtre',
                newApplication: 'Nouveau Passeport',
                renewal: 'Renouvellement',
                replacement: 'Remplacement',
            },
            visa: {
                title: 'Demande de Visa',
                description: 'Demandez une autorisation de voyage',
                tourist: 'Visa Touristique',
                business: 'Visa d\'Affaires',
                transit: 'Visa de Transit',
                diplomatic: 'Visa Diplomatique',
            },
            permit: {
                title: 'Permis',
                description: 'Permis de travail, de résidence et d\'études',
                work: 'Permis de Travail',
                residence: 'Permis de Résidence',
                student: 'Permis Étudiant',
                investment: 'Permis d\'Investissement',
            },
            citizenship: {
                title: 'Citoyenneté',
                description: 'Demandez la citoyenneté ou la naturalisation',
            },
            laissezPasser: {
                title: 'Laissez-Passer',
                description: 'Documents de voyage d\'urgence',
            },
        },
        form: {
            personalInfo: 'Informations Personnelles',
            firstName: 'Prénom',
            lastName: 'Nom de Famille',
            middleName: 'Deuxième Prénom',
            dateOfBirth: 'Date de Naissance',
            gender: 'Genre',
            nationality: 'Nationalité',
            email: 'Adresse Email',
            phone: 'Numéro de Téléphone',
            address: 'Adresse',
            city: 'Ville',
            country: 'Pays',
            postalCode: 'Code Postal',
            passportNumber: 'Numéro de Passeport',
            nationalId: 'ID National',
            applicationId: 'ID de Demande',
            selectOption: 'Sélectionner une option',
            male: 'Masculin',
            female: 'Féminin',
            other: 'Autre',
        },
        status: {
            pending: 'En Attente',
            underReview: 'En Révision',
            approved: 'Approuvé',
            rejected: 'Rejeté',
            completed: 'Complété',
            inProgress: 'En Cours',
        },
        footer: {
            tagline: 'Frontières sécurisées, voyage sans tracas. La plateforme officielle des services d\'immigration nationaux.',
            services: 'Services',
            support: 'Assistance',
            legal: 'Légal',
            copyright: '© 2025 Services Nationaux de Frontières et d\'Immigration. Tous droits réservés.',
        },
    },

    sw: {
        nav: {
            home: 'Nyumbani',
            passports: 'Paspoti',
            visas: 'Visa',
            permits: 'Vibali',
            citizenship: 'Uraia',
            status: 'Hali',
            signIn: 'Ingia',
            signOut: 'Toka',
        },
        common: {
            apply: 'Omba',
            submit: 'Wasilisha',
            cancel: 'Ghairi',
            next: 'Ifuatayo',
            previous: 'Iliyopita',
            save: 'Hifadhi',
            loading: 'Inapakia...',
            search: 'Tafuta',
            filter: 'Chuja',
            export: 'Hamisha',
            download: 'Pakua',
            upload: 'Pakia',
            view: 'Tazama',
            edit: 'Hariri',
            delete: 'Futa',
            confirm: 'Thibitisha',
            yes: 'Ndio',
            no: 'Hapana',
        },
        home: {
            hero: {
                badge: 'Lango Rasmi la Serikali',
                title: 'Mipaka Salama, Safari Rahisi',
                description: 'Jukwaa la kidijitali la hali ya juu kwa utoaji wa paspoti, usindikaji wa visa, na usimamizi wa utambulisho.',
                applyPassport: 'Omba Paspoti',
                checkStatus: 'Angalia Hali',
            },
            services: {
                title: 'Huduma Zetu',
                description: 'Pata huduma mbalimbali za uhamiaji na udhibiti wa mipaka mtandaoni.',
            },
            officerPortal: {
                badge: 'Ufikiaji Mdogo',
                title: 'Lango la Maafisa',
                description: 'Ufikiaji salama kwa maafisa wa udhibiti wa mipaka na wasimamizi kusimamia maombi, kuthibitisha vitambulisho, na kufuatilia kuvuka mipaka.',
                accessPortal: 'Ingia Langoni',
                features: [
                    'Usajili na Uthibitishaji wa Biometric',
                    'Ukaguzi wa Orodha ya Ulinzi wa Wakati Halisi',
                    'Kuingia/Kutoka Kumbukumbu',
                    'Uchanganuzi wa Hali ya Juu',
                ],
            },
        },
        applications: {
            passport: {
                title: 'Ombi la Paspoti',
                description: 'Omba paspoti mpya au upyachao yako iliyopo',
                newApplication: 'Paspoti Mpya',
                renewal: 'Upya',
                replacement: 'Mbadala',
            },
            visa: {
                title: 'Ombi la Visa',
                description: 'Omba idhini ya kusafiri',
                tourist: 'Visa ya Utalii',
                business: 'Visa ya Biashara',
                transit: 'Visa ya Kupita',
                diplomatic: 'Visa ya Kidiplomasia',
            },
            permit: {
                title: 'Vibali',
                description: 'Vibali vya kazi, makazi, na masomo',
                work: 'Kibali cha Kazi',
                residence: 'Kibali cha Makazi',
                student: 'Kibali cha Mwanafunzi',
                investment: 'Kibali cha Uwekezaji',
            },
            citizenship: {
                title: 'Uraia',
                description: 'Omba uraia au kutawaliwa',
            },
            laissezPasser: {
                title: 'Laissez-Passer',
                description: 'Hati za dharura za kusafiri',
            },
        },
        form: {
            personalInfo: 'Taarifa Binafsi',
            firstName: 'Jina la Kwanza',
            lastName: 'Jina la Ukoo',
            middleName: 'Jina la Kati',
            dateOfBirth: 'Tarehe ya Kuzaliwa',
            gender: 'Jinsia',
            nationality: 'Uraia',
            email: 'Anwani ya Barua Pepe',
            phone: 'Nambari ya Simu',
            address: 'Anwani',
            city: 'Jiji',
            country: 'Nchi',
            postalCode: 'Msimbo wa Posta',
            passportNumber: 'Nambari ya Paspoti',
            nationalId: 'Kitambulisho cha Kitaifa',
            applicationId: 'Kitambulisho cha Ombi',
            selectOption: 'Chagua chaguo',
            male: 'Mwanaume',
            female: 'Mwanamke',
            other: 'Nyingine',
        },
        status: {
            pending: 'Inasubiri',
            underReview: 'Chini ya Mapitio',
            approved: 'Imeidhinishwa',
            rejected: 'Imekataliwa',
            completed: 'Imekamilika',
            inProgress: 'Inaendelea',
        },
        footer: {
            tagline: 'Mipaka salama, safari rahisi. Jukwaa rasmi la huduma za uhamiaji wa kitaifa.',
            services: 'Huduma',
            support: 'Msaada',
            legal: 'Kisheria',
            copyright: '© 2025 Huduma za Mipaka na Uhamiaji ya Kitaifa. Haki zote zimehifadhiwa.',
        },
    },

    rw: {
        nav: {
            home: 'Ahabanza',
            passports: 'Pasiporo',
            visas: 'Viza',
            permits: 'Uruhushya',
            citizenship: 'Ubwenegihugu',
            status: 'Uko',
            signIn: 'Injira',
            signOut: 'Gusohoka',
        },
        common: {
            apply: 'Gusaba',
            submit: 'Kohereza',
            cancel: 'Kureka',
            next: 'Ibikurikira',
            previous: 'Ibryahise',
            save: 'Kubika',
            loading: 'Irapakira...',
            search: 'Gushakisha',
            filter: 'Kuyungurura',
            export: 'Kohereza',
            download: 'Gukuramo',
            upload: 'Kohereza',
            view: 'Kureba',
            edit: 'Guhindura',
            delete: 'Gusiba',
            confirm: 'Kwemeza',
            yes: 'Yego',
            no: 'Oya',
        },
        home: {
            hero: {
                badge: 'Urubuga Rwa Leta',
                title: 'Imipaka Iteye Umutekano, Urugendo Rworoshye',
                description: 'Urubuga rwa digitale rwo gutanga pasiporo, gutunganya viza, n\'imiyoborere y\'irangamuntu.',
                applyPassport: 'Gusaba Pasiporo',
                checkStatus: 'Kugenzura Uko',
            },
            services: {
                title: 'Serivisi Zacu',
                description: 'Kubona serivisi zitandukanye zo kwimuka no kugenzura imipaka kuri interineti.',
            },
            officerPortal: {
                badge: 'Kugera Byemewe',
                title: 'Urubuga Rw\'abashinzwe',
                description: 'Kugera kwizewe ku bashinzwe kugenzura imipaka n\'abayobozi kugira ngo bayoborere ibyifuzo, kwemeza irangamuntu, no gukurikirana kwambuka imipaka.',
                accessPortal: 'Kwinjira Ku Rubuga',
                features: [
                    'Kwiyandikisha no Kwemeza Biometric',
                    'Gusuzuma Urutonde Rw\'Umutekano Igihe Nyacyo',
                    'Kwinjira/Gusohoka Inyandiko',
                    'Isesengura Ryujuje Ubuziranenge',
                ],
            },
        },
        applications: {
            passport: {
                title: 'Gusaba Pasiporo',
                description: 'Gusaba pasiporo nshya cyangwa gushyira mu bihe iyo ufite',
                newApplication: 'Pasiporo Nshya',
                renewal: 'Gushyira mu bihe',
                replacement: 'Gusimbuza',
            },
            visa: {
                title: 'Gusaba Viza',
                description: 'Gusaba uruhushya rwo kugenda',
                tourist: 'Viza y\'Umukerarugendo',
                business: 'Viza y\'Ubucuruzi',
                transit: 'Viza yo Kunyura',
                diplomatic: 'Viza ya Diplomasi',
            },
            permit: {
                title: 'Uruhushya',
                description: 'Uruhushya rw\'akazi, gutura, no kwiga',
                work: 'Uruhushya rw\'Akazi',
                residence: 'Uruhushya rwo Gutura',
                student: 'Uruhushya rw\'Umunyeshuri',
                investment: 'Uruhushya rw\'Ishoramari',
            },
            citizenship: {
                title: 'Ubwenegihugu',
                description: 'Gusaba ubwenegihugu cyangwa naturalization',
            },
            laissezPasser: {
                title: 'Laissez-Passer',
                description: 'Ibyangombwa byo kugenda byihutirwa',
            },
        },
        form: {
            personalInfo: 'Amakuru Yihariye',
            firstName: 'Izina Ryambere',
            lastName: 'Izina Ryumuryango',
            middleName: 'Izina Ryo Hagati',
            dateOfBirth: 'Itariki y\'Amavuko',
            gender: 'Igitsina',
            nationality: 'Ubwenegihugu',
            email: 'Aderesi ya Email',
            phone: 'Nimero ya Telefone',
            address: 'Aderesi',
            city: 'Umujyi',
            country: 'Igihugu',
            postalCode: 'Kode ya Posita',
            passportNumber: 'Nimero ya Pasiporo',
            nationalId: 'Irangamuntu',
            applicationId: 'Nimero y\'Icyifuzo',
            selectOption: 'Hitamo',
            male: 'Gabo',
            female: 'Gore',
            other: 'Ikindi',
        },
        status: {
            pending: 'Bitegereje',
            underReview: 'Muri Isuzuma',
            approved: 'Byemewe',
            rejected: 'Byanze',
            completed: 'Byarangiye',
            inProgress: 'Biri mu nzira',
        },
        footer: {
            tagline: 'Imipaka iteye umutekano, urugendo rworoshye. Urubuga rw\'ibanze rwa serivisi z\'imipaka n\'imiyaga.',
            services: 'Serivisi',
            support: 'Ubufasha',
            legal: 'Amategeko',
            copyright: '© 2025 Serivisi z\'Imipaka n\'Imiyaga. Uburenganzira bwose burahawe.',
        },
    },
};
