(function() {

    'use strict';

    var traditionalMartialArtsApp = angular.module('traditionalMartialArtsApp', ['ui.router']);

    traditionalMartialArtsApp.constant('VERSION', '0.1');

    traditionalMartialArtsApp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {

        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'partials/home/home.html'
            })
            .state('error', {
                url: '/error',
                templateUrl: 'partials/error/error.html'
            })
             .state('BaguaKungFu', {
                url: '/BaguaKungFu',
                templateUrl: 'partials/bagua/bagua.html'
            })
            .state('XingYiKungFu', {
                url: '/XingYiKungFu',
                templateUrl: 'partials/xingyi/xingyi.html'
            })
            .state('TaiJiKungFu', {
                url: '/TaiJiKungFu',
                templateUrl: 'partials/taiji/taiji.html'
            })
            .state('MuayBoran', {
                url: '/MuayBoran',
                controller: 'muayBoranCtrl',
                templateUrl: 'partials/muayboran/muayboran.html'
            })
            .state('classes', {
                url: '/classes',
                templateUrl: 'partials/classes/classes.html'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'partials/contact/contact.html'
            });
    });

    traditionalMartialArtsApp.service('MuayBoranDataService', function() {

        this.techniques = [{
            MaeMai: [
            {
                thaiName: 'Salab Fan Pla',
                englishName: 'Cross-Switch Movement',
                description: 'The name of this technique is derived from the shape made when the defender moves his left or right foot one step backwards. This is believed to resemble the shape of a fish tooth.  Salab Fan Pla is a primarily a defensive technique. As the figure illustrates, the attacker throws a punch at the defender. The defender uses the Salab Fan Pla by stepping back obliquely to avoid the fist. Following this the defender either grabs or pushes the attacker’s fist away whilst preparing for another attack. This Mae Mai is generally used to defend against punches. ',
                imgSrc: 'assets/images/salab-fan-pla.jpg'
            },
            {
                thaiName: 'Paksa Waeg Rang',
                englishName: 'Bird Peeping Through The Nest',
                description: 'The name of this technique is likened to the action of a bird trying to break into its nest. Paksa Weak Rang is a defensive Mae Mai Muay technique which can be used to defend against attempts to grab ones neck before launching the knee or entering into the clinch. As the picture illustrates, the attacker tries to grab the defenders neck before attacking with the knee. The defender then inserts both arms between the gaps between the attacker’s arms. This is followed by a knee strike. This technique can also be applied to when the attacker throws a punch. The defender can use this technique to push away the attacker’s punch and then respond with other weapons. ',
                imgSrc: 'assets/images/paksa-weak-rang.jpg'
            },
            {
                thaiName: 'Chawa Sod Hok',
                englishName: 'Javanese Throws The Spear',
                description: 'The name of this technique is likened to the action of throwing a lance. Chawa Sad Hork is a dynamic defensive technique which lets the defender avoid the attacker’s punch, whilst simultaneously attacking with the elbow. As the figure illustrates, when the attacker throws a punch the defender drops down to escape and then uses his right hand to push away the punch. This is followed up with an elbow strike. ',
                imgSrc: 'assets/images/chawa-sod-hok.jpg'
            },
            {
                thaiName: 'Inao Thang Grit',
                englishName: 'Inao Stabs His Kris',
                description: 'The name of this technique is likened to the action of stabbing a knife at an opponent. Like Chawa Sad Hork, Enow Taeng Krit is a dynamic defensive technique which lets the defender avoid the attacker’s punch, whilst simultaneously attacking with the knee. The defender slips to the right to escape the punch and then uses his both hand to push it away. This is followed by a knee strike. Alternately, the defender can strike with the elbow.',
                imgSrc: 'assets/images/inao-thang-grit.jpg'
            },
            {
                thaiName: 'Yo Khao Prasumaru',
                englishName: 'Lift Sumer Mountain',
                description: 'The name of this technique is derived from the action made when trying to lift a heavy object. In this case, the object is the attacker’s leg. Here the defender catches the kicking leg, lifts it and then throws the attacker.',
                imgSrc: 'assets/images/yo-khao-prasumaru.jpg'
            },
            {
                thaiName: 'Ta Then Kam Fak',
                englishName: 'The old man holds the melon',
                description: 'The name of this technique is likened to a person holding a melon. As the picture illustrates, the defender reacts to the attack by stepping diagonally away from the punch whilst using the right hand to push away the attacker’s punch. Simultaneously, the defender uses the left punch to strike at the attacker’s chin. ',
                imgSrc: 'assets/images/ta-then-kam-fak.jpg'
            },
            {
                thaiName: 'Mon Yan Lak Mon',
                englishName: 'The Mon presses against the pillar',
                description: 'The name of this technique is likened to the action that a person makes when thrusting his foot onto a pillar. The defender delivers a foot thrust in order to protect from attack, or to ensure that the attacker does not advance to close. This technique is exclusively used for defence. That said the full power of the foot thrust should be strong enough to injure the attacker and allow the defender to prepare for a counter attack. ',
                imgSrc: 'assets/images/mon-yan-lak.jpg'
            },
            {
                thaiName: 'Pak Look Thoy',
                englishName: 'Impaling the stake',
                description: 'The name of this technique is likened to the action of a wooden stick that is being stuck into a tree trunk. Although Pak Look Toi is a defensive technique, it is also one of the most deadly Mae Mai techniques of attack. The defender uses the elbows to block the attackers kick.',
                imgSrc: 'assets/images/pak-look-thoy.jpg'
            },
            {
                thaiName: 'Hak Nguang Aiyara',
                englishName: 'Break The Elephants Trunk',
                description: 'The name of this technique is likened to the action of a man trying to break an elephant’s trunk. Hak Nguang Aiyara is used in defence against the kick. When the attacker kicks, the defender grabs the attacker’s leg firmly and then uses the right arm to either push the leg down or elbow it.',
                imgSrc: 'assets/images/hak-nguang-aiyara.jpg'
            },
            {
                thaiName: 'Jarakhe Fad Hang',
                englishName: 'Crocodile Swings Its Tail',
                description: 'The name of this technique comes from the thrashing action that a Crocodile makes when swinging its tail. Jarakhae Fad Hang is not a defensive technique. It is typically used after a roundhouse kick to enhance the attack. One should be careful when using this technique as it forces the attacker to expose his back, making him susceptible to a vicious counter attack.',
                imgSrc: 'assets/images/jarakhe-fad-hang.jpg'
            },
            {
                thaiName: 'Naka Bid Hang',
                englishName: 'Twist the serpents tail',
                description: 'The name of this technique is likened to the action of a man trying to twist the mythical Naka’s tail. This technique has a similar objective to Hak Nguang Aiyara. The primary difference between this and Hak Nguang Aiyara is that this is a response to a foot thrust and the intention is to break the attacker’s ankle. The defender grabs the attacker’s foot and suddenly twists the ankle. He simultaneously places his foot behind the knee of the attackers supporting leg.',
                imgSrc: 'assets/images/naka-bid-hang.jpg'
            },
            {
                thaiName: 'Viroon Hok Glab',
                englishName: 'Bird Somersaults',
                description: 'The name of this technique is likened to the action of a bird quickly turning back to return to its nest. This technique is used to counter an attack by the leg. As the attacker throws the kick, the defender rolls in on the attacking leg and throws the reverse elbow. ',
                imgSrc: 'assets/images/viroon-hok-glab.jpg'
            },
            {
                thaiName: 'Dab Chawala',
                englishName: 'Extinguish The Lamps',
                description: 'The name of this technique is likened to the action of a man trying to close or shut down a lamp. Dab Chawala is used in response to a punching attack. As the picture illustrates, the attacker throws a straight punch. The defender uses the left arm to sweep away the punch and simultaneously throw a straight right to the attacker’s eye. This un-complicated technique is used to attack the vulnerable eye sockets.',
                imgSrc: 'assets/images/dab-chawala.jpg'
            },
            {
                thaiName: 'Kuanyak Chap Ling',
                englishName: 'Giant Catches The Monkey',
                description: 'The name of this technique is likened to the action of a demon trying to grab and lock the monkey’s neck. This technique is used in response to a punching attack. When the attacker tries to punch at the defenders face, the defender uses the right hand to sweep away the punch whilst simultaneously locking the attacker’s neck. ',
                imgSrc: 'assets/images/kuanyak-chap-ling.jpg'
            },
            {
                thaiName: 'Hak Kor Erawan',
                englishName: 'Break The Elephants Trunk',
                description: 'The name of this technique is likened to the action of a man trying to break the mythical elephant’s neck. This technique is used to protect the boxer from either attack by the knee or from the clinch. As the attacker tries to close in on the defender, the defender uses the right hand to push the attacker’s chin and the left to twist the neck. ',
                imgSrc: 'assets/images/hak-kor-erawan.jpg'
            }],
            LukMai: [
           {
                thaiName: 'Erawan Suey Nga',
                englishName: 'Elephant thrusts its tusks',
                description: 'The name of this technique is likened to the action of an elephant swinging up its tusks to attack. In mimicking this action, the boxer uses the upper-cut elbow to attack the chin. Erawan Soei Nga is used in response to a punching attack. As the picture illustrates, the attacker throws a straight punch. The defender raises the left arm in defence and simultaneously steps forward to attack the chin. ',
                imgSrc: 'assets/images/erawan-soei-nga.jpg'
            },
            {
                thaiName: 'Batha Loob Pak',
                englishName: 'Foot touches face',
                description: 'The name of this technique is likened to the action of a man kicking his opponents face.  This technique is used to protect the boxer from a punching attack. As the picture illustrates when the attacker punches, the defender kicks the opponent in the face.',
                imgSrc: 'assets/images/bata-loop-pak.jpg'
            },
            {
                thaiName: 'Khun Yak Pa Nang',
                englishName: 'Throwing The Man',
                description: 'The attacker throws the straight left punch and steps forwards, guarding his chin with the right fist. The defender hurries to step the right foot outside the attackers left foot, grabs the waist and throws him to the floor.',
                imgSrc: 'assets/images/khun-yak-pa-nang.jpg'
            },
            {
                thaiName: 'Prarama Nao Sorn',
                englishName: 'King Rama Pulls The Arrowstring',
                description: 'This technique is used for defence again the attackers elbow. The attacker steps forward and raises both elbows to strike on the head. The defender steps into the attack, raises the rear arm to block and counters with the opposite uppercut.',
                imgSrc: 'assets/images/pra-ram-nao-sorn.jpg'
            },
            {
                thaiName: 'Graisorn Kham Huai',
                englishName: 'Tiger crosses the Stream',
                description: 'In this technique the defender escapes from the attacking kick and throws the straight kick at the back leg. This complimentary technique is used in defence against BATA LOOB PAK. After the attacker tries to kick the chin, the defender steps backwards onto the left foot and bends his body down to escape. He then jumps in with a straight right kick to the inner thigh/knee.',
                imgSrc: 'assets/images/graisorn-khan-hua.jpg'
            },
            {
                thaiName: 'Kwang Liew Lang',
                englishName: 'Deer Looks Back',
                description: 'The name of this technique is likened to the action made when a deer turns its head to look back.  Like the sharp horns of the deer, when the boxer turns back, his legs will do damage. This technique is used by the boxer to defend against a punch by launching a reverse back kick.  As the picture illustrates, the defender responds to the attack by stepping backwards to avoid the punch. He then uses a reverse back kick to counter the attack.',
                imgSrc: 'assets/images/kwang-leaw-lang.jpg'
            },
            {
                thaiName: 'Hiran Nuan Pan Din',
                englishName: 'Giant Turning The Earth',
                description: 'The attacker launches a right kick to the defensives rib. The defender uses Pak Look Toi and rolls into Wirun Hok Klab.',
                imgSrc: 'assets/images/hiran-muan-pan-din.jpg'
            },
            {
                thaiName: 'Naga Mood Badan',
                englishName: 'Serpent Sneaks To The Ocean',
                description: 'The name of this technique is likened to the action of a man dipping his head in the water. One uses this technique to respond to a punching attack. As the picture illustrates when the attacker throws the punch from the back, the defender bends down to avoid the punch. At the same time he responds by kicking the attacker.',
                imgSrc: 'assets/images/naka-bid-hang.jpg'
            },
            {
                thaiName: 'Hanuman Thawai Waen',
                englishName: 'Hanuman Presents The Ring',
                description: 'The name of this technique is derived from the Ramayana and describes a punching attack. As the attacking punch is thrown, the defender sweeps this away with his left hand and simultaneously steps forward and uppercuts the attackers chin. It is typically performed with both hands in response to a right punch.',
                imgSrc: 'assets/images/hanuman-tawai-waen.jpg'
            },
            {
                thaiName: 'Yuan Thod Hae',
                englishName: 'Vietnamese Casts A Fishing Net',
                description: 'This movement is used for defense against the thrusting by grabbing the leg by the arm and stepping out asides then counter by kicking to the opponent’s knee-joint. The attacker walks in and thrusts with the left foot at the defensive’s abdomen. The defensive steps with the right foot obliquely out of the circle grab the leg out with the left arm. Turns the body to throw up the right foot at the knee-joint at the same time. If the attacker thrusts with the right foot, do the same as above in the go opposite directions. ',
                imgSrc: 'assets/images/yuan-thod-hae.jpg'
            },
            {
                thaiName: 'Kamae Kam Sao',
                englishName: 'Taye supports the pillar',
                description: 'The name of this technique is likened to a Cambodian person using his arm to prop up a pillar. This technique is used to protect against a punching attack. As the picture illustrates, when the attacker punches, the defender bends down to avoid the punch and simultaneously uses the palm to strike the attackers chin.',
                imgSrc: 'assets/images/kamae-kham-sao.jpg'
            },
            {
                thaiName: 'Sak Phuang Malai',
                englishName: 'Threading the garland of flowers',
                description: 'The name of this technique is likened to the action of a man placing a flower on someone’s ear. As the picture illustrates, when the attacker punches, the defender steps inside to attack the neck/ear with the elbow. ',
                imgSrc: 'assets/images/sak-puang-malai.jpg'
            },
            {
                thaiName: 'Hong Peek Hak',
                englishName: 'Swan With A Broken Wing',
                description: 'The attacker throws a straight right. The defender steps into the attack, parrying away the left fist and striking with the right elbow.',
                imgSrc: 'assets/images/hong-peek-hak.jpg'
            },
            {
                thaiName: 'Tel Kwad Larn',
                englishName: 'Monk Sweeps The Floor',
                description: 'The name of this technique is likened to the sweeping action of an abbot cleaning a pitch around a temple. This technique is used to avoid a kicking attack by striking the supporting leg. As the picture illustrates, when the attacker uses right kick to attack, the defender bends over to escape from the kick and responds by directing a sweeping kick at the attacker’s knee. ',
                imgSrc: 'assets/images/then-kwad-lan.jpg'
            },
            {
                thaiName: 'Fan Look Buab',
                englishName: 'Slicing The Cucumber',
                description: 'The name of this technique is likened to the action of a man slicing a melon. Similarly, the boxer uses an elbow strike to attack the opponent’s neck. As the picture illustrates, when the attacker performs a straight punch, the defender raise the left arm in protection and simultaneously steps in and throws a downward right elbow strike at the attacker’s neck. ',
                imgSrc: 'assets/images/faan-look-buab.jpg'
            }]
        }];

    });

    traditionalMartialArtsApp.service('MuayBoranService', function(MuayBoranDataService) {

        this.getAllTechniques = function() {
            return MuayBoranDataService.techniques;
        };

    });

    traditionalMartialArtsApp.controller('muayBoranCtrl', ['$scope', 'MuayBoranService', function($scope, MuayBoranService) {

        $scope.techniques = MuayBoranService.getAllTechniques();
        $scope.techniquesMaeMai = $scope.techniques[0].MaeMai;
        $scope.techniquesLukMai = $scope.techniques[0].LukMai;

    }]);

    traditionalMartialArtsApp.controller('appCtrl', ['$scope', function($scope) {

    }]);

    

}());
