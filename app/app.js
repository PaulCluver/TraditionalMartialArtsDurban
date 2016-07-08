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
                templateUrl: 'partials/bagua/bagua.html',
                controller: 'baguaCtrl'
            })
            .state('XingYiKungFu', {
                url: '/XingYiKungFu',
                templateUrl: 'partials/xingyi/xingyi.html',
                controller: 'xingYiCtrl'
            })
            .state('TaiJiKungFu', {
                url: '/TaiJiKungFu',
                templateUrl: 'partials/taiji/taiji.html'
            })
            .state('MuayThai', {
                url: '/MuayThai',                
                templateUrl: 'partials/muaythai/muaythai.html',
                controller: 'muayThaiCtrl'
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

    traditionalMartialArtsApp.controller('appCtrl', ['$scope', function($scope) {

    }]);

    traditionalMartialArtsApp.service('XingYiDataService', function() {

        this.techniques = [{
            element: 'Metal',
            name: 'Chopping - Pī',
            description: 'The motion of Pi Chuan  goes from up to down, utilizing pushing downward internal energy. This fist is linked to the Metal element, and Pi Chuan focuses on making an extremely strong spine and hands as hard as steel.',
            imgSrc: 'assets/images/xingyi/pi.jpg'
        }, {
            element: 'Water',
            name: 'Drilling - Zuān',
            description: 'The motion of Zuan Chuan goes from down to up using expansive energy. It is linked to the Water Element, and focuses on making the hands able to move around the opponents defense like water moves around a rock.',
            imgSrc: 'assets/images/xingyi/zuan.jpg'
        }, {
            element: 'Wood',
            name: 'Crushing - Bēng',
            description: 'Beng Chuan uses straight-ahead physical motion. It is linked to the Wood Element and focuses on making the fists "grow" out of the body. It is often compared to the force of a powerful plant growing and expanding through concrete with a steady, inexorable force.',
            imgSrc: 'assets/images/xingyi/beng.jpg'
        }, {
            element: 'Fire',
            name: 'Pounding - Pào',
            description: 'The Pao Chuan technique focuses on diagonal physical motion. It is linked to the Fire Element and focuses on explosive and rapidly oscillating releases of power. In Pao Chuan, one hand initially contacts and shifts the opponents center of balance, while the other explodes into their body.',
            imgSrc: 'assets/images/xingyi/pao.jpg'
        }, {
            element: 'Earth',
            name: 'Crossing - Héng',
            description: 'Heng Chuan focuses on the inside of the fist moving horizontally. It is linked to the Earth Element, and focuses on tightening the cross-linkages between the left and right sides of the inside of the abdominal cavity.',
            imgSrc: 'assets/images/xingyi/heng.jpg'
        }];

    });

    traditionalMartialArtsApp.service('XingYiService', function(XingYiDataService) {
        this.getAllTechniques = function() {
            return XingYiDataService.techniques;
        };
    });

    traditionalMartialArtsApp.controller('xingYiCtrl', ['$scope', 'XingYiService', function($scope, XingYiService) {
        $scope.techniques = XingYiService.getAllTechniques();
    }]);

    traditionalMartialArtsApp.service('MuayBoranDataService', function() {

        this.techniques = [{
            MaeMai: [{
                thaiName: 'Salab Fan Pla',
                englishName: 'Cross-Switch Movement',
                description: 'The name of this technique is derived from the shape made when the defender moves his left or right foot one step backwards. This is believed to resemble the shape of a fish tooth.  Salab Fan Pla is a primarily a defensive technique. As the figure illustrates, the attacker throws a punch at the defender. The defender uses the Salab Fan Pla by stepping back obliquely to avoid the fist. Following this the defender either grabs or pushes the attacker’s fist away whilst preparing for another attack. This Mae Mai is generally used to defend against punches. ',
                imgSrc: 'assets/images/muay/salab-fan-pla.jpg'
            }, {
                thaiName: 'Paksa Waeg Rang',
                englishName: 'Bird Peeping Through The Nest',
                description: 'The name of this technique is likened to the action of a bird trying to break into its nest. Paksa Weak Rang is a defensive Mae Mai Muay technique which can be used to defend against attempts to grab ones neck before launching the knee or entering into the clinch. As the picture illustrates, the attacker tries to grab the defenders neck before attacking with the knee. The defender then inserts both arms between the gaps between the attacker’s arms. This is followed by a knee strike. This technique can also be applied to when the attacker throws a punch. The defender can use this technique to push away the attacker’s punch and then respond with other weapons. ',
                imgSrc: 'assets/images/muay/paksa-weak-rang.jpg'
            }, {
                thaiName: 'Chawa Sod Hok',
                englishName: 'Javanese Throws The Spear',
                description: 'The name of this technique is likened to the action of throwing a lance. Chawa Sad Hork is a dynamic defensive technique which lets the defender avoid the attacker’s punch, whilst simultaneously attacking with the elbow. As the figure illustrates, when the attacker throws a punch the defender drops down to escape and then uses his right hand to push away the punch. This is followed up with an elbow strike. ',
                imgSrc: 'assets/images/muay/chawa-sod-hok.jpg'
            }, {
                thaiName: 'Inao Thang Grit',
                englishName: 'Inao Stabs His Kris',
                description: 'The name of this technique is likened to the action of stabbing a knife at an opponent. Like Chawa Sad Hork, Enow Taeng Krit is a dynamic defensive technique which lets the defender avoid the attacker’s punch, whilst simultaneously attacking with the knee. The defender slips to the right to escape the punch and then uses his both hand to push it away. This is followed by a knee strike. Alternately, the defender can strike with the elbow.',
                imgSrc: 'assets/images/muay/inao-thang-grit.jpg'
            }, {
                thaiName: 'Yo Khao Prasumaru',
                englishName: 'Lift Sumer Mountain',
                description: 'The name of this technique is derived from the action made when trying to lift a heavy object. In this case, the object is the attacker’s leg. Here the defender catches the kicking leg, lifts it and then throws the attacker.',
                imgSrc: 'assets/images/muay/yo-khao-prasumaru.jpg'
            }, {
                thaiName: 'Ta Then Kam Fak',
                englishName: 'The old man holds the melon',
                description: 'The name of this technique is likened to a person holding a melon. As the picture illustrates, the defender reacts to the attack by stepping diagonally away from the punch whilst using the right hand to push away the attacker’s punch. Simultaneously, the defender uses the left punch to strike at the attacker’s chin. ',
                imgSrc: 'assets/images/muay/ta-then-kam-fak.jpg'
            }, {
                thaiName: 'Mon Yan Lak Mon',
                englishName: 'The Mon presses against the pillar',
                description: 'The name of this technique is likened to the action that a person makes when thrusting his foot onto a pillar. The defender delivers a foot thrust in order to protect from attack, or to ensure that the attacker does not advance to close. This technique is exclusively used for defence. That said the full power of the foot thrust should be strong enough to injure the attacker and allow the defender to prepare for a counter attack. ',
                imgSrc: 'assets/images/muay/mon-yan-lak.jpg'
            }, {
                thaiName: 'Pak Look Thoy',
                englishName: 'Impaling the stake',
                description: 'The name of this technique is likened to the action of a wooden stick that is being stuck into a tree trunk. Although Pak Look Toi is a defensive technique, it is also one of the most deadly Mae Mai techniques of attack. The defender uses the elbows to block the attackers kick.',
                imgSrc: 'assets/images/muay/pak-look-thoy.jpg'
            }, {
                thaiName: 'Hak Nguang Aiyara',
                englishName: 'Break The Elephants Trunk',
                description: 'The name of this technique is likened to the action of a man trying to break an elephant’s trunk. Hak Nguang Aiyara is used in defence against the kick. When the attacker kicks, the defender grabs the attacker’s leg firmly and then uses the right arm to either push the leg down or elbow it.',
                imgSrc: 'assets/images/muay/hak-nguang-aiyara.jpg'
            }, {
                thaiName: 'Jarakhe Fad Hang',
                englishName: 'Crocodile Swings Its Tail',
                description: 'The name of this technique comes from the thrashing action that a Crocodile makes when swinging its tail. Jarakhae Fad Hang is not a defensive technique. It is typically used after a roundhouse kick to enhance the attack. One should be careful when using this technique as it forces the attacker to expose his back, making him susceptible to a vicious counter attack.',
                imgSrc: 'assets/images/muay/jarakhe-fad-hang.jpg'
            }, {
                thaiName: 'Naka Bid Hang',
                englishName: 'Twist the serpents tail',
                description: 'The name of this technique is likened to the action of a man trying to twist the mythical Naka’s tail. This technique has a similar objective to Hak Nguang Aiyara. The primary difference between this and Hak Nguang Aiyara is that this is a response to a foot thrust and the intention is to break the attacker’s ankle. The defender grabs the attacker’s foot and suddenly twists the ankle. He simultaneously places his foot behind the knee of the attackers supporting leg.',
                imgSrc: 'assets/images/muay/naka-bid-hang.jpg'
            }, {
                thaiName: 'Viroon Hok Glab',
                englishName: 'Bird Somersaults',
                description: 'The name of this technique is likened to the action of a bird quickly turning back to return to its nest. This technique is used to counter an attack by the leg. As the attacker throws the kick, the defender rolls in on the attacking leg and throws the reverse elbow. ',
                imgSrc: 'assets/images/muay/viroon-hok-glab.jpg'
            }, {
                thaiName: 'Dab Chawala',
                englishName: 'Extinguish The Lamps',
                description: 'The name of this technique is likened to the action of a man trying to close or shut down a lamp. Dab Chawala is used in response to a punching attack. As the picture illustrates, the attacker throws a straight punch. The defender uses the left arm to sweep away the punch and simultaneously throw a straight right to the attacker’s eye. This un-complicated technique is used to attack the vulnerable eye sockets.',
                imgSrc: 'assets/images/muay/dab-chawala.jpg'
            }, {
                thaiName: 'Kuanyak Chap Ling',
                englishName: 'Giant Catches The Monkey',
                description: 'The name of this technique is likened to the action of a demon trying to grab and lock the monkey’s neck. This technique is used in response to a punching attack. When the attacker tries to punch at the defenders face, the defender uses the right hand to sweep away the punch whilst simultaneously locking the attacker’s neck. ',
                imgSrc: 'assets/images/muay/kuanyak-chap-ling.jpg'
            }, {
                thaiName: 'Hak Kor Erawan',
                englishName: 'Break The Elephants Trunk',
                description: 'The name of this technique is likened to the action of a man trying to break the mythical elephant’s neck. This technique is used to protect the boxer from either attack by the knee or from the clinch. As the attacker tries to close in on the defender, the defender uses the right hand to push the attacker’s chin and the left to twist the neck. ',
                imgSrc: 'assets/images/muay/hak-kor-erawan.jpg'
            }],
            LukMai: [{
                thaiName: 'Erawan Suey Nga',
                englishName: 'Elephant thrusts its tusks',
                description: 'The name of this technique is likened to the action of an elephant swinging up its tusks to attack. In mimicking this action, the boxer uses the upper-cut elbow to attack the chin. Erawan Soei Nga is used in response to a punching attack. As the picture illustrates, the attacker throws a straight punch. The defender raises the left arm in defence and simultaneously steps forward to attack the chin. ',
                imgSrc: 'assets/images/muay/erawan-soei-nga.jpg'
            }, {
                thaiName: 'Batha Loob Pak',
                englishName: 'Foot touches face',
                description: 'The name of this technique is likened to the action of a man kicking his opponents face.  This technique is used to protect the boxer from a punching attack. As the picture illustrates when the attacker punches, the defender kicks the opponent in the face.',
                imgSrc: 'assets/images/muay/bata-loop-pak.jpg'
            }, {
                thaiName: 'Khun Yak Pa Nang',
                englishName: 'Throwing The Man',
                description: 'The attacker throws the straight left punch and steps forwards, guarding his chin with the right fist. The defender hurries to step the right foot outside the attackers left foot, grabs the waist and throws him to the floor.',
                imgSrc: 'assets/images/muay/khun-yak-pa-nang.jpg'
            }, {
                thaiName: 'Prarama Nao Sorn',
                englishName: 'King Rama Pulls The Arrowstring',
                description: 'This technique is used for defence again the attackers elbow. The attacker steps forward and raises both elbows to strike on the head. The defender steps into the attack, raises the rear arm to block and counters with the opposite uppercut.',
                imgSrc: 'assets/images/muay/pra-ram-nao-sorn.jpg'
            }, {
                thaiName: 'Graisorn Kham Huai',
                englishName: 'Tiger crosses the Stream',
                description: 'In this technique the defender escapes from the attacking kick and throws the straight kick at the back leg. This complimentary technique is used in defence against BATA LOOB PAK. After the attacker tries to kick the chin, the defender steps backwards onto the left foot and bends his body down to escape. He then jumps in with a straight right kick to the inner thigh/knee.',
                imgSrc: 'assets/images/muay/graisorn-khan-hua.jpg'
            }, {
                thaiName: 'Kwang Liew Lang',
                englishName: 'Deer Looks Back',
                description: 'The name of this technique is likened to the action made when a deer turns its head to look back.  Like the sharp horns of the deer, when the boxer turns back, his legs will do damage. This technique is used by the boxer to defend against a punch by launching a reverse back kick.  As the picture illustrates, the defender responds to the attack by stepping backwards to avoid the punch. He then uses a reverse back kick to counter the attack.',
                imgSrc: 'assets/images/muay/kwang-leaw-lang.jpg'
            }, {
                thaiName: 'Hiran Nuan Pan Din',
                englishName: 'Giant Turning The Earth',
                description: 'The attacker launches a right kick to the defensives rib. The defender uses Pak Look Toi and rolls into Wirun Hok Klab.',
                imgSrc: 'assets/images/muay/hiran-muan-pan-din.jpg'
            }, {
                thaiName: 'Naga Mood Badan',
                englishName: 'Serpent Sneaks To The Ocean',
                description: 'The name of this technique is likened to the action of a man dipping his head in the water. One uses this technique to respond to a punching attack. As the picture illustrates when the attacker throws the punch from the back, the defender bends down to avoid the punch. At the same time he responds by kicking the attacker.',
                imgSrc: 'assets/images/muay/naka-bid-hang.jpg'
            }, {
                thaiName: 'Hanuman Thawai Waen',
                englishName: 'Hanuman Presents The Ring',
                description: 'The name of this technique is derived from the Ramayana and describes a punching attack. As the attacking punch is thrown, the defender sweeps this away with his left hand and simultaneously steps forward and uppercuts the attackers chin. It is typically performed with both hands in response to a right punch.',
                imgSrc: 'assets/images/muay/hanuman-tawai-waen.jpg'
            }, {
                thaiName: 'Yuan Thod Hae',
                englishName: 'Vietnamese Casts A Fishing Net',
                description: 'This movement is used for defense against the thrusting by grabbing the leg by the arm and stepping out asides then counter by kicking to the opponent’s knee-joint. The attacker walks in and thrusts with the left foot at the defensive’s abdomen. The defensive steps with the right foot obliquely out of the circle grab the leg out with the left arm. Turns the body to throw up the right foot at the knee-joint at the same time. If the attacker thrusts with the right foot, do the same as above in the go opposite directions. ',
                imgSrc: 'assets/images/muay/yuan-thod-hae.jpg'
            }, {
                thaiName: 'Kamae Kam Sao',
                englishName: 'Taye supports the pillar',
                description: 'The name of this technique is likened to a Cambodian person using his arm to prop up a pillar. This technique is used to protect against a punching attack. As the picture illustrates, when the attacker punches, the defender bends down to avoid the punch and simultaneously uses the palm to strike the attackers chin.',
                imgSrc: 'assets/images/muay/kamae-kham-sao.jpg'
            }, {
                thaiName: 'Sak Phuang Malai',
                englishName: 'Threading the garland of flowers',
                description: 'The name of this technique is likened to the action of a man placing a flower on someone’s ear. As the picture illustrates, when the attacker punches, the defender steps inside to attack the neck/ear with the elbow. ',
                imgSrc: 'assets/images/muay/sak-puang-malai.jpg'
            }, {
                thaiName: 'Hong Peek Hak',
                englishName: 'Swan With A Broken Wing',
                description: 'The attacker throws a straight right. The defender steps into the attack, parrying away the left fist and striking with the right elbow.',
                imgSrc: 'assets/images/muay/hong-peek-hak.jpg'
            }, {
                thaiName: 'Tel Kwad Larn',
                englishName: 'Monk Sweeps The Floor',
                description: 'The name of this technique is likened to the sweeping action of an abbot cleaning a pitch around a temple. This technique is used to avoid a kicking attack by striking the supporting leg. As the picture illustrates, when the attacker uses right kick to attack, the defender bends over to escape from the kick and responds by directing a sweeping kick at the attacker’s knee. ',
                imgSrc: 'assets/images/muay/then-kwad-lan.jpg'
            }, {
                thaiName: 'Fan Look Buab',
                englishName: 'Slicing The Cucumber',
                description: 'The name of this technique is likened to the action of a man slicing a melon. Similarly, the boxer uses an elbow strike to attack the opponent’s neck. As the picture illustrates, when the attacker performs a straight punch, the defender raise the left arm in protection and simultaneously steps in and throws a downward right elbow strike at the attacker’s neck. ',
                imgSrc: 'assets/images/muay/faan-look-buab.jpg'
            }]
        }];

    });

    traditionalMartialArtsApp.service('MuayBoranService', function(MuayBoranDataService) {

        this.getAllTechniques = function() {
            return MuayBoranDataService.techniques;
        };

    });

    traditionalMartialArtsApp.controller('muayThaiCtrl', ['$scope', 'MuayBoranService', function($scope, MuayBoranService) {

        $scope.techniques = MuayBoranService.getAllTechniques();
        $scope.techniquesMaeMai = $scope.techniques[0].MaeMai;
        $scope.techniquesLukMai = $scope.techniques[0].LukMai;

    }]);

    traditionalMartialArtsApp.service('BaGuaDataService', function() {

        this.animals = [{
            animal: 'Lion',
            element: 'Metal',
            naturalImage: 'Heaven',
            description: 'The Qian trigram is the image of heaven. It is known as the Lion palm in its martial form. Qian represents great strength and its nature is pure yang and is named after the 3 solid lines of its trigram. When looked at as a creature it takes on the appearance of the lion. This creature is the most cruel and violent and is known for its bravery. It can kill and eat the tiger and the leopard. It has the skill of shaking its fur. Martially it has the skill of the "golden dragon closing its mouth", the posture of the "lion opens its mouth", and the technique of the "white ape drawing its saber". Internally it is the "qi" which supports the 10,000 things. Martially the "Lion palm" is the beginning of the 10,000 techniques of Bagua. This style must extend both arms out with great force. The "qi" must be full and be throughout from inside to outside and from top to bottom. It uses the 3 linking’s (feet, waist, and hands) in its form and the 3 alignments (tip of hands, tip nose, tip of feet) in its shape, which comes from the 3 solid lines of the Qian trigram. The fists move with and follow the movement of the body, allowing the blood to flow freely.',
            imgSrc: 'assets/images/bagua/lion.jpg'
        }, {
            animal: 'Snake',
            element: 'Water',
            naturalImage: 'Lake',
            description: 'The Kan trigram is symbolized by water. Its martial tactic is "Moving with the Force". Kan means to be "sunk in". It gains the "yang" from the "Qian" trigram which is held inside, sunk in the middle of "yin", which causes the tides to rise and why Kan is "full" in the middle. Kan resides in the north where water flourishes. When looked at as a creature it has the appearance of the Snake form. This creature is the most poisonous, cunning, and malicious of the animals. It has the ability to part and move through the grass. In its martial skills it uses the technique of the "white snake spits the truth" and the posture and skill of the "double headed snake winds around the body". When speaking of its martial strategy it is the "flowing with the momentum palm". The snake is soft and flowing on the outside and hard and strong on the inside. The "Dantian" needs to be kept full. The inside and outside should be like water following along and flowing, leaving no gaps or spaces that it can"t enter.',
            imgSrc: 'assets/images/bagua/snake.jpg'
        }, {
            animal: 'Bear',
            element: 'Earth',
            naturalImage: 'Mountain',
            description: 'The Gen trigram is symbolized by the mountain. It is the "Turning the Back palm" in its martial form. The gen trigram uses a "stopping" force. The gen trigram gets the ending of "yang" from the "Qian" trigram. The end of "yang" represents stillness. It resides in the northeast where "yang" (the sun) is at its weakest. When looked at as a creature it has the appearance of the Bear. Its nature is known for being slow and stupid but can also be the most powerful and awe-inspiring, having the ability to raise the hairs on the back of the neck. In its martial usage it has the bravery to lean (kao) strike to the body, the ability to "uproot trees" and the technique of "shaking its body". This comes from the shape of the Gen trigram. If the fists are practiced correctly the "qi" in centre will develop noticeable colour in the face, be abundant on the back, and be distributed to the four limbs of the body. If the fists are practiced incorrectly the Dantian will become too "yang", the qi will not raise up through the spine and back, the chest will not be concaved and join with the back, and the heart fire will not decrease. ',
            imgSrc: 'assets/images/bagua/bear.jpg'
        }, {
            animal: 'Dragon',
            element: 'Wood',
            naturalImage: 'Thunder',
            description: 'The Zhen trigram is symbolized by thunder. Its martial tactic is the "holding and lifting palm". Zhen represents the beginning of movement. Zhen gets the beginning of "yang" from the "Qian" trigram and the beginning of "yang" means to grow or stir, it resides in the east where trees flourish and the sun rises. When looked at as a creature it takes on the appearance of the Dragon, a creature that has the scales of a fish and is the ruler of all insects. It has the technique of "searching out the bones", the skill of "unpredictable changes", the appearance of flying and soaring. In its martial style it has the technique of the "black dragon coiling around the pillar" and the capability of the "blue dragon playing with the pearls". When speaking of its martial tactic it uses the "continuously lifting palm". In this style the outside is still and the inside is moving.',
            imgSrc: 'assets/images/bagua/dragon.jpg'
        }, {
            animal: 'Phoenix',
            element: 'Wood',
            naturalImage: 'Wind',
            description: 'The Xun trigram is symbolized by the "Wind". Its martial tactic is known as the "windmill palm". When speaking of its martial style, it has the style of "nodding its head", the method of "enforcing the opponent", and the movement of the "lion rolling the ball". Its overall strategy is the use of the "windmill palm". Its body should be hard and strong on top and soft and flowing on the bottom.  If studied very carefully and meticulously the body"s movements will move like the windmill, turning and linking leaving no gaps in its form. If this style is practiced incorrectly the primary qi will not spread through the whole body. For example the axis of a wheel in a machine cannot turn without energy hence the body"s movements will not be moving smoothly with its centre and the pre and post-heaven qi will not transform in the body. ',
            imgSrc: 'assets/images/bagua/phoenix.jpg'
        }, {
            animal: 'Rooster',
            element: 'Fire',
            naturalImage: 'Fire',
            description: 'The Li trigram is symbolized by fire. It is the Enfolding palm" in its martial form. The li trigram means to be "majestic, graceful". When looked at as a creature it has the appearance of the Sparrow Hawk, which can quickly "enter the forest" (wo zhang) to achieve the skill of "overturning the body". In its martial style it has the methods of "pressing", "pointing", and "cutting off", the technique of the "giant python overturning the body", and the capability of "entering the cave". Its martial strategy is the "crouching/ lying palm" which is strong and solid on the outside and soft and flowing on the inside. The area of the middle Dantian must be empty and the chest concaved which comes from the shape of the broken in the middle li trigram. If the fists are practiced correctly and the middle is open the mind will be open to the body"s transformation of the spirit, as the body changes the profound and subtle will become known. If the fists are practiced incorrectly and you fail to understand the use of empty in the middle, the spirit (shen) will not be able to transform. ',
            imgSrc: 'assets/images/bagua/rooster.jpg'
        }, {
            animal: 'Unicorn',
            element: 'Earth',
            naturalImage: 'Earth',
            description: 'The Kun trigram is symbolized by the earth. Its martial tactic is the "returning to the body palm". Kun means to "follow"/ "move along with". When speaking of its martial style it has the posture of the "unicorn spits out the book", the technique of the "Giant Roc spreads its wings", the ability of the "white crane standing on one leg", and the nimbleness to flow with the momentum, reverse the direction and spin its body around. When discussing its martial tactic it is called the "returning to the body palm". This tactic uses both hands pulling in, return to the body and turning to retreat. The inside and out, top and bottom move in harmony. When the fists move according to the laws of the body it will become lightweight, swift and can turn like a whirlwind. To avoid mistakes in this fist the internal abdomen must be kept full and solid and the alertness must not become dispersed. The student needs to examine and research these ideas. Nimbleness and cleverness come from this.',
            imgSrc: 'assets/images/bagua/unicorn.jpg'
        }, {
            animal: 'Monkey',
            element: 'Metal',
            naturalImage: 'Marsh',
            description: 'The Dui trigram is symbolized by the marsh. It is the "Enfolding palm" in its martial form. In its martial style it uses the posture of the "white ape offers the fruit", the method of the "monkey chews the peach", and the skill of the " squatting dragon and crouching tiger". Its martial strategy is the "Embracing palm" which is soft and flowing on the top and strong and solid on the inside and quickly contracts in which comes from the lines of the dui trigram. If the fists are practiced correctly the qi in the lungs will be clear and moist. If the fists are practiced incorrectly qi in the lungs will be in disharmony, breathing will be laboured, turning to coughing and illness. ',
            imgSrc: 'assets/images/bagua/monkey.jpg'
        }];

    });

    traditionalMartialArtsApp.service('BaguaService', function(BaGuaDataService) {
        this.getAllAnimals = function() {
            return BaGuaDataService.animals;
        };
    });

    traditionalMartialArtsApp.controller('baguaCtrl', ['$scope', 'BaguaService', function($scope, BaguaService) {
        $scope.animals = BaguaService.getAllAnimals();
    }]);

}());
