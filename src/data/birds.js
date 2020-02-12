const birdsData = [
	[
		{
			"id": "485016",
			"name": "Коростель",
			"species": "Crex crex",
			"audio": "//www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485016-2019-06-29 Litsvyanka prairie magique Rale des genets chant 1.mp3",
			"description": "Коросте́ль, или дерга́ч (лат. Crex crex) — небольшая птица семейства пастушковых. Гнездится во влажных высокотравных лугах, густо поросших кустарниковых болотах, засеянных пашнях и других открытых ландшафтах в умеренных широтах Евразии.",
			"url": "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%80%D0%BE%D1%81%D1%82%D0%B5%D0%BB%D1%8C",
			"image": "https://upload.wikimedia.org/wikipedia/commons/2/22/Corncrake_%28Crex_crex%29.jpg"
		},
		{
			"id": "501518",
			"name": "Морянка",
			"species": "Clangula hyemalis",
			"audio": "//www.xeno-canto.org/sounds/uploaded/YKITMEIRRE/XC501518-jk190619-715 Havlit Edderfrugle.mp3",
			"description": "Моря́нка, или саук, или аллейка (лат. Clangula hyemalis) — представитель семейства утиных, небольшая полярная нырковая утка. Легче всего определяется по очень длинному и тонкому хвосту самцов, который постоянно держится приподнятым над поверхностью воды (похожий характерный хвост также имеется у шилохвостей).",
			"url": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%80%D1%8F%D0%BD%D0%BA%D0%B0",
			"image": "https://upload.wikimedia.org/wikipedia/commons/8/8e/Long-tailed-duck.jpg"
		},
		{
			"id": "499408",
			"name": "Короткохвостка",
			"species": "Urosphena squameiceps",
			"audio": "//www.xeno-canto.org/sounds/uploaded/REONYQMGDY/XC499408-stubtail.mp3",
			"description": "Короткохвостка (лат. Urosphena squameiceps) — один из видов в семейства короткокрылых камышовок (Cettiidae).",
			"url": "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D1%80%D0%BE%D1%82%D0%BA%D0%BE%D1%85%D0%B2%D0%BE%D1%81%D1%82%D0%BA%D0%B0",
			"image": "https://upload.wikimedia.org/wikipedia/commons/a/ac/Urosphena_squameiceps_%280s1%29.JPG"
		},
		{
			"id": "494716",
			"name": "Черноголовая гаичка",
			"species": "Poecile palustris",
			"audio": "//www.xeno-canto.org/sounds/uploaded/LELYWQKUZX/XC494716-Poecile palustris 181201_001, B.MP3",
			"description": "Черноголо́вая, или боло́тная га́ичка (лат. Poecile palustris, используется также название Parus palustris) — вид птиц из семейства синицевых (Paridae). В более ранних русскоязычных источниках упоминается как просто гаичка.",
			"url": "https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D1%80%D0%BD%D0%BE%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D0%B0%D1%8F_%D0%B3%D0%B0%D0%B8%D1%87%D0%BA%D0%B0",
			"image": "https://upload.wikimedia.org/wikipedia/commons/3/3a/Parus_palustris02.jpg"
		},
		{
			"id": "269763",
			"name": "Сизый голубь",
			"species": "Columba livia",
			"audio": "//www.xeno-canto.org/sounds/uploaded/LELYWQKUZX/XC269763-Columba 150718_031,A2.MP3",
			"description": "Си́зый го́лубь (лат. Columba livia) — широко распространённая птица семейства голубиных, родиной которой считаются Южная Европа, Юго-Западная Азия и Северная Африка. Ещё в глубокой древности эти птицы были приручены человеком, в результате были выведены так называемые домашние голуби (Columba livia var.",
			"url": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B8%D0%B7%D1%8B%D0%B9_%D0%B3%D0%BE%D0%BB%D1%83%D0%B1%D1%8C",
			"image": "https://upload.wikimedia.org/wikipedia/commons/d/de/Orsopapera-colombo_002.JPG"
		},
		{
			"id": "365356",
			"name": "Стрепет",
			"species": "Tetrax tetrax",
			"audio": "//www.xeno-canto.org/sounds/uploaded/LELYWQKUZX/XC365356-Tetrax tetrax 170416_001,утро,A flai.MP3",
			"description": "Стре́пет (лат. Tetrax tetrax) — птица из семейства дрофиные.",
			"url": "https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D1%80%D0%B5%D0%BF%D0%B5%D1%82",
			"image": "https://upload.wikimedia.org/wikipedia/commons/3/3b/Tetrax_tetrax_1921.jpg"
		}
	],
	[
		{
			"id": "484192",
			"name": "Зарянка",
			"species": "Erithacus rubecula",
			"audio": "//www.xeno-canto.org/sounds/uploaded/LELYWQKUZX/XC484192-Erithacus rubecula 190601_015, A Alarm call.MP3",
			"description": "Заря́нка (лат. Erithacus rubecula) — птица из семейства мухоловковых (Muscicapidae). Согласно энциклопедическому словарю Брокгауза и Ефрона в XIX веке использовались также названия малиновка, зорька, зорянка и ольшанка.",
			"url": "https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D1%80%D1%8F%D0%BD%D0%BA%D0%B0",
			"image": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Erithacus_rubecula_with_cocked_head.jpg"
		},
		{
			"id": "497174",
			"name": "Сойка",
			"species": "Garrulus glandarius",
			"audio": "//www.xeno-canto.org/sounds/uploaded/LELYWQKUZX/XC497174-Garrulus glandarius 190910_001,B.MP3.~~~.MP3",
			"description": "Со́йка (также обыкновенная сойка; также кареза; лат. Garrulus glandarius) — птица рода соек семейства врановых отряда воробьинообразных.",
			"url": "https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%B9%D0%BA%D0%B0",
			"image": "https://upload.wikimedia.org/wikipedia/commons/f/fa/Garrulus_glandarius_B_Luc_Viatour.jpg"
		},
		{
			"id": "365601",
			"name": "Болотный лунь",
			"species": "Circus aeruginosus",
			"audio": "//www.xeno-canto.org/sounds/uploaded/LELYWQKUZX/XC365601-Circus aeruginosus, L-170414_001,Маныч,тростн,ночь,AAB.MP3",
			"description": "Болотный лунь, или камышовый лунь (лат. Circus aeruginosus) — птица семейства ястребиных.",
			"url": "https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D0%BB%D0%BE%D1%82%D0%BD%D1%8B%D0%B9_%D0%BB%D1%83%D0%BD%D1%8C",
			"image": "https://upload.wikimedia.org/wikipedia/commons/6/62/Circus_aeruginosus_samiec2.jpg"
		},
		{
			"id": "486365",
			"name": "Деревенская ласточка",
			"species": "Hirundo rustica",
			"audio": "//www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC486365-Hirondelle rustique tytleri chant +.mp3",
			"description": "Деревенская ласточка, или ласточка-касатка (лат. Hirundo rustica) — маленькая перелётная птица, живущая в Европе, Азии, Африке и Америке. Отличается длинным хвостом с глубоким разрезом в форме вилки и изогнутыми длинными острыми крыльями.",
			"url": "https://ru.wikipedia.org/wiki/%D0%94%D0%B5%D1%80%D0%B5%D0%B2%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%BB%D0%B0%D1%81%D1%82%D0%BE%D1%87%D0%BA%D0%B0",
			"image": "https://upload.wikimedia.org/wikipedia/commons/2/24/Landsvale.jpg"
		},
		{
			"id": "497505",
			"name": "Краснозобик",
			"species": "Calidris ferruginea",
			"audio": "//www.xeno-canto.org/sounds/uploaded/LELYWQKUZX/XC497505-Calidris ferruginea 190813_001,B.MP3",
			"description": "Краснозобик (лат. Calidris ferruginea) — вид птиц семейства бекасовые (Scolopacidae).",
			"url": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B7%D0%BE%D0%B1%D0%B8%D0%BA",
			"image": "https://upload.wikimedia.org/wikipedia/commons/f/f5/Calidris_ferruginea_%28Marek_Szczepanek%29.jpg"
		},
		{
			"id": "484251",
			"name": "Гаршнеп",
			"species": "Lymnocryptes minimus",
			"audio": "//www.xeno-canto.org/sounds/uploaded/LELYWQKUZX/XC484251-Lymnocryptes minimus ли 190504_002,12-00--18-00, Широкундыш, отмель,ч.1,18.MP3",
			"description": "Га́ршнеп (лат. Lymnocryptes minimus) — вид птиц из семейства бекасовых (Scolopacidae), выделяемый в отдельный род.",
			"url": "https://ru.wikipedia.org/wiki/%D0%93%D0%B0%D1%80%D1%88%D0%BD%D0%B5%D0%BF",
			"image": "https://upload.wikimedia.org/wikipedia/commons/6/61/Lymnocryptes_minimus_%28Marek_Szczepanek%29.jpg"
		}
	],
	[
		{
			"id": "341604",
			"name": "Малый перепелятник",
			"species": "Accipiter gularis",
			"audio": "//www.xeno-canto.org/sounds/uploaded/LELYWQKUZX/XC341604-Accipiter gularis 160528_002,AA2.MP3",
			"description": "Малый перепелятник (вариант: японский перепелятник) (лат. Accipiter gularis) — вид хищных перелётных птиц из семейства ястребиных (Accipitridae).",
			"url": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BB%D1%8B%D0%B9_%D0%BF%D0%B5%D1%80%D0%B5%D0%BF%D0%B5%D0%BB%D1%8F%D1%82%D0%BD%D0%B8%D0%BA",
			"image": "https://upload.wikimedia.org/wikipedia/commons/0/0c/20100710_tumi_nagoya_03.jpg"
		},
		{
			"id": "396682",
			"name": "Дутыш",
			"species": "Calidris melanotos",
			"audio": "//www.xeno-canto.org/sounds/uploaded/SPMWIWZKKC/XC396682-170710_0368_Pectoral_Sandpiper_美洲尖尾濱鷸_Calidris_melanotos.mp3",
			"description": "Ду́тыш, в более ранних источниках кули́к-ду́тыш (лат. Calidris melanotos) — небольшая птица, гнездящаяся от Таймыра через Чукотку до Аляски и Канады.\nВесит до 110 грамм (самцы крупнее самок).",
			"url": "https://ru.wikipedia.org/wiki/%D0%94%D1%83%D1%82%D1%8B%D1%88",
			"image": "https://upload.wikimedia.org/wikipedia/commons/9/96/Pectoral_Sandpiper3.jpg"
		},
		{
			"id": "423124",
			"name": "Просянка",
			"species": "Emberiza calandra",
			"audio": "//www.xeno-canto.org/sounds/uploaded/CNORMZSGIQ/XC423124- (Miliaria calandra).mp3",
			"description": "Просянка (Miliaria calandra, Emberiza calandra) — птица семейства овсянковых.\nОдними зоологами выделяется в монотипичный род Miliaria, другими относится к обширному роду Emberiza.",
			"url": "https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%BE%D1%81%D1%8F%D0%BD%D0%BA%D0%B0",
			"image": "https://upload.wikimedia.org/wikipedia/commons/e/ec/Triguero%2C_Miliaria_calandria._%287141793829%29.jpg"
		},
		{
			"id": "365760",
			"name": "Морской голубок",
			"species": "Chroicocephalus genei",
			"audio": "//www.xeno-canto.org/sounds/uploaded/LELYWQKUZX/XC365760-Chroicocephalus genei, L-170413_001a,Маныч,залив,утр,1b.MP3",
			"description": "Морской голубок, или тонококлювая чайка (лат. Chroicocephalus genei) — вид птиц, из семейства чайковых (Laridae).",
			"url": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%80%D1%81%D0%BA%D0%BE%D0%B9_%D0%B3%D0%BE%D0%BB%D1%83%D0%B1%D0%BE%D0%BA",
			"image": "https://upload.wikimedia.org/wikipedia/commons/e/e5/Larus_genei.jpg"
		},
		{
			"id": "381982",
			"name": "Шилохвость",
			"species": "Anas acuta",
			"audio": "//www.xeno-canto.org/sounds/uploaded/YKITMEIRRE/XC381982-170607_0049 Spidsand Red.mp3",
			"description": "Ши́лохвость, обыкновенная шилохвость, шилохвостка, острохвост или (устар.) шилень (лат. Anas acuta) — многочисленная и одна из наиболее распространённых уток в мире. Гнездится на разнообразных внутренних водоёмах Европы, Азии и Северной Америки.",
			"url": "https://ru.wikipedia.org/wiki/%D0%A8%D0%B8%D0%BB%D0%BE%D1%85%D0%B2%D0%BE%D1%81%D1%82%D1%8C",
			"image": "https://upload.wikimedia.org/wikipedia/commons/0/0b/Northern_Pintails_%28Male_%26_Female%29_I_IMG_0911.jpg"
		},
		{
			"id": "432281",
			"name": "Чирок-свистунок",
			"species": "Anas crecca",
			"audio": "//www.xeno-canto.org/sounds/uploaded/LELYWQKUZX/XC432281-Anas crecca 180528_006,AA+ female,male.MP3",
			"description": "Чиро́к-свистуно́к (лат. Anas crecca) — водоплавающая птица из семейства утиных. Самая маленькая из речных уток, она считается обычной и одной из самых многочисленных в пределах границ своего обитания.",
			"url": "https://ru.wikipedia.org/wiki/%D0%A7%D0%B8%D1%80%D0%BE%D0%BA-%D1%81%D0%B2%D0%B8%D1%81%D1%82%D1%83%D0%BD%D0%BE%D0%BA",
			"image": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Common_Teal_%28Anas_crecca%29_near_Hodal%2C_Haryana_W_IMG_6512.jpg"
		}
	],
	[
		{
			"id": "382129",
			"name": "Тундряная куропатка",
			"species": "Lagopus muta",
			"audio": "//www.xeno-canto.org/sounds/uploaded/YKITMEIRRE/XC382129-170615_0140 Fjeldrype af reden & hannen red.mp3",
			"description": "Ту́ндряная куропа́тка, тундря́ная куропатка, ту́ндреная куропатка, тундрянка (лат. Lagopus mutus) — птица из подсемейства тетеревиных, отряда курообразных.",
			"url": "https://ru.wikipedia.org/wiki/%D0%A2%D1%83%D0%BD%D0%B4%D1%80%D1%8F%D0%BD%D0%B0%D1%8F_%D0%BA%D1%83%D1%80%D0%BE%D0%BF%D0%B0%D1%82%D0%BA%D0%B0",
			"image": "https://upload.wikimedia.org/wikipedia/commons/a/a3/Lagopus_muta2.jpg"
		},
		{
			"id": "266570",
			"name": "Камышница",
			"species": "Gallinula chloropus",
			"audio": "//www.xeno-canto.org/sounds/uploaded/LELYWQKUZX/XC266570-Limosa lapponica baueri 150508_001,вечер 20-30-ночь2-30,3,AB.MP3",
			"description": "Камы́шница, а также камышовая, водяная, или болотная курочка, изредка лы́ска (лат. Gallinula chloropus) — небольшая, размером с голубя, водоплавающая птица из семейства пастушковых, широко распространённая на всех материках, за исключением Австралии и Антарктиды. Типичный обитатель разнообразных водоёмов со стоячей или проточной водой и заболоченными, заросшими берегами.",
			"url": "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BC%D1%8B%D1%88%D0%BD%D0%B8%D1%86%D0%B0",
			"image": "https://upload.wikimedia.org/wikipedia/commons/2/2b/Kokoszka%28Grzecho_Lukasik%29.jpg"
		},
		{
			"id": "495307",
			"name": "Пеночка-весничка",
			"species": "Phylloscopus trochilus",
			"audio": "//www.xeno-canto.org/sounds/uploaded/LELYWQKUZX/XC495307-Phylloscopus trochilus 180513_003,A2.MP3",
			"description": "Пе́ночка-весни́чка (лат. Phylloscopus trochilus) — певчая птица из семейства пеночковых (Phylloscopidae).",
			"url": "https://ru.wikipedia.org/wiki/%D0%9F%D0%B5%D0%BD%D0%BE%D1%87%D0%BA%D0%B0-%D0%B2%D0%B5%D1%81%D0%BD%D0%B8%D1%87%D0%BA%D0%B0",
			"image": "https://upload.wikimedia.org/wikipedia/commons/a/a7/Phylloscopus.trochilus.-.lindsey.jpg"
		},
		{
			"id": "493729",
			"name": "Кобчик",
			"species": "Falco vespertinus",
			"audio": "//www.xeno-canto.org/sounds/uploaded/LELYWQKUZX/XC493729-Falco vespertinus 190821_001,AAAB3+ begging call.MP3",
			"description": "Кобчик (лат. Falco vespertinus) — вид хищных птиц рода соколов.",
			"url": "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%B1%D1%87%D0%B8%D0%BA",
			"image": "https://upload.wikimedia.org/wikipedia/commons/9/94/Falco_vespertinus_3_%28Martin_Mecnarowski%29.jpg"
		},
		{
			"id": "513685",
			"name": "Пеночка-теньковка",
			"species": "Phylloscopus collybita",
			"audio": "//www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513685-190710_1187_Phy.colly.mp3",
			"description": "Пе́ночка-тенько́вка, тенько́вка, или пе́ночка-кузне́чик (лат. Phylloscopus collybita) — мелкая лесная птица семейства славковых (с 2006 года некоторые авторы выделяют два рода, Phylloscopus и Seicercus, в отдельное семейство Phylloscopidae) с зеленовато-бурым верхом и беловатым низом. Гнездится в светлых хвойных и смешанных лесах Европы и Азии, местами распространяясь далеко на север.",
			"url": "https://ru.wikipedia.org/wiki/%D0%9F%D0%B5%D0%BD%D0%BE%D1%87%D0%BA%D0%B0-%D1%82%D0%B5%D0%BD%D1%8C%D0%BA%D0%BE%D0%B2%D0%BA%D0%B0",
			"image": "https://upload.wikimedia.org/wikipedia/commons/a/a6/Phylloscopus_collybita_%28taxobox%29.jpg"
		},
		{
			"id": "513484",
			"name": "Овсянка-ремез",
			"species": "Emberiza rustica",
			"audio": "//www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513484-190707_1157_Emb.rustica.mp3",
			"description": "Овсянка-ремез (Emberiza rustica) — птица семейства овсянковых.",
			"url": "https://ru.wikipedia.org/wiki/%D0%9E%D0%B2%D1%81%D1%8F%D0%BD%D0%BA%D0%B0-%D1%80%D0%B5%D0%BC%D0%B5%D0%B7",
			"image": "http://storage.onbird.ru/bird/avatar/big ovsyanka-remez (onbird.ru).jpg"
		}
	],
	[
		{
			"id": "485544",
			"name": "Каменка-плешанка",
			"species": "Oenanthe pleschanka",
			"audio": "//www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485544-2019-06-24 Ulan Ude Orongoi lake et lacs sales de Gusionizerk Traquet pie cris de vol.mp3",
			"description": "Каменка-плешанка (лат. Oenanthe pleschanka) — вид птиц из семейства мухоловковых.",
			"url": "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D0%BC%D0%B5%D0%BD%D0%BA%D0%B0-%D0%BF%D0%BB%D0%B5%D1%88%D0%B0%D0%BD%D0%BA%D0%B0",
			"image": "https://upload.wikimedia.org/wikipedia/commons/a/aa/Pied_Wheatear_-_Tanzania_2008-02-29_0225_%2819406836875%29.jpg"
		},
		{
			"id": "310152",
			"name": "Коноплянка",
			"species": "Linaria cannabina",
			"audio": "//www.xeno-canto.org/sounds/uploaded/LELYWQKUZX/XC310152-Linnaria 160402_002,A.MP3",
			"description": "Конопля́нка, или реполо́в (лат. Carduelis cannabina) — певчая птица семейства вьюрковых отряда воробьинообразных.",
			"url": "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BD%D0%BE%D0%BF%D0%BB%D1%8F%D0%BD%D0%BA%D0%B0",
			"image": "https://upload.wikimedia.org/wikipedia/commons/0/07/Linotte_m%C3%A9lodieuse.jpg"
		},
		{
			"id": "343057",
			"name": "Белокрылый погоныш",
			"species": "Coturnicops exquisitus",
			"audio": "//www.xeno-canto.org/sounds/uploaded/XVXHTBZRRW/XC343057-Swinhoe's Rail song 20160626 2322 (long) (SWR07) RUS OA Muraviovka Park TW LS_5.mp3",
			"description": "Белокрылый погоныш (лат. Coturnicops exquisitus) — вид птиц из семейства пастушковых.",
			"url": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%BB%D0%BE%D0%BA%D1%80%D1%8B%D0%BB%D1%8B%D0%B9_%D0%BF%D0%BE%D0%B3%D0%BE%D0%BD%D1%8B%D1%88",
			"image": "https://upload.wikimedia.org/wikipedia/commons/1/14/Coturnicops_exquisitus_Keulemans.jpg"
		},
		{
			"id": "492942",
			"name": "Грач",
			"species": "Corvus frugilegus",
			"audio": "//www.xeno-canto.org/sounds/uploaded/LELYWQKUZX/XC492942-Corvus frugilegus 190528_001,A.MP3",
			"description": "Грач (лат. Corvus frugilegus) — широко распространённая в Евразии птица рода воронов.",
			"url": "https://ru.wikipedia.org/wiki/%D0%93%D1%80%D0%B0%D1%87",
			"image": "https://upload.wikimedia.org/wikipedia/commons/f/f5/Rook_-_Corvus_frugilegus_%28476445950%29.jpg"
		},
		{
			"id": "489499",
			"name": "Пуночка",
			"species": "Plectrophenax nivalis",
			"audio": "//www.xeno-canto.org/sounds/uploaded/URBYIFOEHW/XC489499-Schneeammer9_Ges_23-6-2019_Tolbachik.mp3",
			"description": "Пуночка, или снежный подорожник (лат. Plectrophenax nivalis) — кругополярная птица из семейства подорожниковых (Calcariidae), гнездящаяся в области тундр Старого и Нового Света.\nСвоё название пуночка получила от лапландского слова «пунак».",
			"url": "https://ru.wikipedia.org/wiki/%D0%9F%D1%83%D0%BD%D0%BE%D1%87%D0%BA%D0%B0",
			"image": "https://upload.wikimedia.org/wikipedia/commons/8/8c/Snj%C3%B3tittlingur.jpg"
		},
		{
			"id": "505257",
			"name": "Урагус",
			"species": "Carpodacus sibiricus",
			"audio": "//www.xeno-canto.org/sounds/uploaded/LBWCUENEBH/XC505257-ussuriensis T494.mp3",
			"description": "Ура́гус, или длиннохвостая чечевица, или длиннохвостый снегирь (лат. Carpodacus sibiricus) — певчая птица семейства вьюрковых. Долгое время птица находилась в монотипичном роде Uragus, пока его не объединили вместе с алыми вьюрками Haematospiza и бонийскими дубоносами  Chaunoproctus в трибу чечевиц Carpodacini .",
			"url": "https://ru.wikipedia.org/wiki/%D0%A3%D1%80%D0%B0%D0%B3%D1%83%D1%81",
			"image": "https://upload.wikimedia.org/wikipedia/commons/2/21/%D0%A1%D0%B0%D0%BC%D0%B5%D1%86_%D0%A3%D1%80%D0%B0%D0%B3%D1%83%D1%81%D0%B0.jpg"
		}
	],
	[
		{
			"id": "396697",
			"name": "Лапландский подорожник",
			"species": "Calcarius lapponicus",
			"audio": "//www.xeno-canto.org/sounds/uploaded/SPMWIWZKKC/XC396697-170708_0309_Lapland_Bunting_鐵爪鵐_Calcarius_lapponicus.mp3",
			"description": "Лапландский подорожник (лат. Calcarius lapponicus) — вид птиц из семейства подорожниковых (Calcariidae). Гнездится, как и пуночка, в северной тундре.",
			"url": "https://ru.wikipedia.org/wiki/%D0%9B%D0%B0%D0%BF%D0%BB%D0%B0%D0%BD%D0%B4%D1%81%D0%BA%D0%B8%D0%B9_%D0%BF%D0%BE%D0%B4%D0%BE%D1%80%D0%BE%D0%B6%D0%BD%D0%B8%D0%BA",
			"image": "https://upload.wikimedia.org/wikipedia/commons/8/89/Lapland_Longspur_%28Calcarius_lapponicus%29.jpg"
		},
		{
			"id": "365795",
			"name": "Лебедь-шипун",
			"species": "Cygnus olor",
			"audio": "//www.xeno-canto.org/sounds/uploaded/LELYWQKUZX/XC365795-Cygnus olor, L-170413_004,Маныч,залив,утр,B.MP3",
			"description": "Ле́бедь-шипу́н (лат. Cygnus olor) — птица из семейства утиных.",
			"url": "https://ru.wikipedia.org/wiki/%D0%9B%D0%B5%D0%B1%D0%B5%D0%B4%D1%8C-%D1%88%D0%B8%D0%BF%D1%83%D0%BD",
			"image": "https://upload.wikimedia.org/wikipedia/commons/a/a2/CygneVaires.jpg"
		},
		{
			"id": "424287",
			"name": "Лебедь-кликун",
			"species": "Cygnus cygnus",
			"audio": "//www.xeno-canto.org/sounds/uploaded/CEYSYKSPYR/XC424287-DR0000_0539.mp3",
			"description": "Лебедь-кликун (лат. Cygnus cygnus) — водоплавающая птица из семейства утиных.\nЛебедь-кликун является национальным символом Финляндии.",
			"url": "https://ru.wikipedia.org/wiki/%D0%9B%D0%B5%D0%B1%D0%B5%D0%B4%D1%8C-%D0%BA%D0%BB%D0%B8%D0%BA%D1%83%D0%BD",
			"image": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Cygnus_cygnus_from_zh.JPG"
		},
		{
			"id": "365995",
			"name": "Серый гусь",
			"species": "Anser anser",
			"audio": "//www.xeno-canto.org/sounds/uploaded/LELYWQKUZX/XC365995-Anser anser. L-170413_004,Маныч,залив,утр,AAAB+.MP3",
			"description": "Се́рый гусь (лат. Anser anser) — водоплавающая птица семейства утиных, один из самых известных видов диких гусей.",
			"url": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D1%80%D1%8B%D0%B9_%D0%B3%D1%83%D1%81%D1%8C",
			"image": "https://upload.wikimedia.org/wikipedia/commons/7/72/Anser_anser_2_%28Piotr_Kuczynski%29.jpg"
		},
		{
			"id": "490322",
			"name": "Чечевица",
			"species": "Carpodacus erythrinus",
			"audio": "//www.xeno-canto.org/sounds/uploaded/URBYIFOEHW/XC490322-Kamin1a_19-6-2019_Esso.mp3",
			"description": "Обыкновенная чечевица, или просто чечевица — птица семейства вьюрковых. Размером с воробья. У взрослого самца спина, крылья и хвост красновато-бурые, голова и грудь ярко-красные, брюшко (а у птиц из восточной части ареала — нередко и грудь) белое с розовым оттенком. Самки и молодые птицы буровато-серые, брюшко светлее спины.",
			"url": "https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D1%87%D0%B5%D0%B2%D0%B8%D1%86%D0%B0",
			"image": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Dziwonia%28Carpodacus_erythrinus%29cropped.jpg/413px-Dziwonia%28Carpodacus_erythrinus%29cropped.jpg"
		},
		{
			"id": "492946",
			"name": "Мухоловка-пеструшка",
			"species": "Ficedula hypoleuca",
			"audio": "//www.xeno-canto.org/sounds/uploaded/LELYWQKUZX/XC492946-Ficedula hypoleuca 190528_001, male song, AA (симм.комбин.синтаксис)-3.MP3",
			"description": "Мухоло́вка-пестру́шка, мухоловка черноголовая или березовка (лат. Ficedula hypoleuca) — певчая птица семейства мухоловковых (Muscicapidae).",
			"url": "https://ru.wikipedia.org/wiki/%D0%9C%D1%83%D1%85%D0%BE%D0%BB%D0%BE%D0%B2%D0%BA%D0%B0-%D0%BF%D0%B5%D1%81%D1%82%D1%80%D1%83%D1%88%D0%BA%D0%B0",
			"image": "https://upload.wikimedia.org/wikipedia/commons/e/e2/Trauerschn%C3%A4pper_auf_Esche_cutted.jpg"
		}
	],
	[
		{
			"id": "489901",
			"name": "Рябинник",
			"species": "Turdus pilaris",
			"audio": "//www.xeno-canto.org/sounds/uploaded/LELYWQKUZX/XC489901-Turdud pilaris 190518_006, A.MP3",
			"description": "Ряби́нник, или дрозд-рябинник (лат. Turdus pilaris), — распространённый вид европейских дроздов.\nГнездится повсеместно в Европе, начиная от северной границы лесной растительности до северной границы степной полосы, а также в Сибири — до водораздела между Енисеем и Леной.",
			"url": "https://ru.wikipedia.org/wiki/%D0%A0%D1%8F%D0%B1%D0%B8%D0%BD%D0%BD%D0%B8%D0%BA",
			"image": "https://upload.wikimedia.org/wikipedia/commons/b/bf/Turdus_pilaris_on_Crataegus_in_winter.jpg"
		},
		{
			"id": "487121",
			"name": "Клёст-еловик",
			"species": "Loxia curvirostra",
			"audio": "//www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC487121-Bec croises groupe vol.mp3",
			"description": "Клёст-елови́к, или обыкнове́нный клёст (лат. Loxia curvirostra), — лесная певчая птица из семейства вьюрковых (Fringillidae), отряда воробьинообразных (Passeriformes). Характеризуется мощным клювом с перекрещивающимися кончиками и питанием семенами ели и других хвойных деревьев (отсюда русское название вида).",
			"url": "https://ru.wikipedia.org/wiki/%D0%9A%D0%BB%D1%91%D1%81%D1%82-%D0%B5%D0%BB%D0%BE%D0%B2%D0%B8%D0%BA",
			"image": "https://upload.wikimedia.org/wikipedia/commons/1/10/Loxia_curvirostra_-Karwendel_mountains%2C_Austria.jpg"
		},
		{
			"id": "494721",
			"name": "Зимородок",
			"species": "Alcedo atthis",
			"audio": "//www.xeno-canto.org/sounds/uploaded/LELYWQKUZX/XC494721-Alcedo 180503_026, song,B.MP3",
			"description": "Запрос Зимородок перенаправлен на эту статью, это название может относиться также к птицам рода зимородки и семейства зимородковыеОбыкновенный зиморо́док, или голубой зимородок (лат. Alcedo atthis) — мелкая птица семейства зимородковых (Alcedinidae), немного крупнее воробья.",
			"url": "https://ru.wikipedia.org/wiki/%D0%9E%D0%B1%D1%8B%D0%BA%D0%BD%D0%BE%D0%B2%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D0%B7%D0%B8%D0%BC%D0%BE%D1%80%D0%BE%D0%B4%D0%BE%D0%BA",
			"image": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Kingfisher_eating_a_tadpole.jpg"
		},
		{
			"id": "365793",
			"name": "Чайконосая крачка",
			"species": "Gelochelidon nilotica",
			"audio": "//www.xeno-canto.org/sounds/uploaded/LELYWQKUZX/XC365793-Gelochelidon nilotica, L-170413_001a,Маныч,залив,утр,C.MP3",
			"description": "Чайконо́сая кра́чка (лат. Gelochelidon nilotica) — вид птиц из семейства чайковых (Laridae), единственный в роде чайконосых крачек (Gelochelidon).",
			"url": "https://ru.wikipedia.org/wiki/%D0%A7%D0%B0%D0%B9%D0%BA%D0%BE%D0%BD%D0%BE%D1%81%D0%B0%D1%8F_%D0%BA%D1%80%D0%B0%D1%87%D0%BA%D0%B0",
			"image": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Gull-billed_Tern.jpg"
		},
		{
			"id": "473868",
			"name": "Пёстрый китайский фазан",
			"species": "Syrmaticus reevesii",
			"audio": "//www.xeno-canto.org/sounds/uploaded/LELYWQKUZX/XC473868-Syrmaticus reevesii 0420_111645, A+ male song.MP3",
			"description": "Пёстрый китайский фазан (лат. Syrmaticus reevesii) — вид птиц семейства фазановых. Научное название дано в честь британского натуралиста Джона Ривза (1774—1856), который в 1831 году привёз в Европу первого живого самца этого вида.",
			"url": "https://ru.wikipedia.org/wiki/%D0%9F%D1%91%D1%81%D1%82%D1%80%D1%8B%D0%B9_%D0%BA%D0%B8%D1%82%D0%B0%D0%B9%D1%81%D0%BA%D0%B8%D0%B9_%D1%84%D0%B0%D0%B7%D0%B0%D0%BD",
			"image": "https://upload.wikimedia.org/wikipedia/commons/a/ad/K%C3%B6nigsfasan_%28Syrmaticus_reevesii%29_cropped.jpg"
		},
		{
			"id": "36321",
			"name": "Клуша",
			"species": "Larus fuscus",
			"audio": "//www.xeno-canto.org/sounds/uploaded/SNUDCZVUQK/LarFusHeug 22609 1224.mp3",
			"description": "Клу́ша (лат. Larus fuscus) — крупная чайка, гнездящаяся на атлантическом побережье Европы и вдоль северного побережья Российской Федерации.",
			"url": "https://ru.wikipedia.org/wiki/%D0%9A%D0%BB%D1%83%D1%88%D0%B0",
			"image": "https://upload.wikimedia.org/wikipedia/commons/5/5b/Selk%C3%A4lokki.jpg"
		}
	],
	[
		{
			"id": "488310",
			"name": "Варакушка",
			"species": "Luscinia svecica",
			"audio": "//www.xeno-canto.org/sounds/uploaded/LELYWQKUZX/XC488310-Luscinia svecica imm Vanellus indicus 190607_024, AAB.MP3",
			"description": "Вара́кушка (лат. Luscinia svecica) — птица семейства мухоловковые отряда воробьинообразных. Ранее вместе со всем родом соловьи его относили к семейству дроздовых.",
			"url": "https://ru.wikipedia.org/wiki/%D0%92%D0%B0%D1%80%D0%B0%D0%BA%D1%83%D1%88%D0%BA%D0%B0",
			"image": "https://upload.wikimedia.org/wikipedia/commons/4/43/Luscinia_svecica_volgae.jpg"
		},
		{
			"id": "495544",
			"name": "Северная бормотушка",
			"species": "Iduna caligata",
			"audio": "//www.xeno-canto.org/sounds/uploaded/LELYWQKUZX/XC495544-Iduna caligata 180618_001,Пихтулино, лов, 11-00, CB.MP3.~~~.MP3",
			"description": "Се́верная бормоту́шка, или бормоту́шка (лат. Iduna caligata), — перелётная птица семейства камышовковых (Acrocephalidae).",
			"url": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B5%D0%B2%D0%B5%D1%80%D0%BD%D0%B0%D1%8F_%D0%B1%D0%BE%D1%80%D0%BC%D0%BE%D1%82%D1%83%D1%88%D0%BA%D0%B0",
			"image": "https://upload.wikimedia.org/wikipedia/commons/9/96/%D0%91%D0%BE%D1%80%D0%BC%D0%BE%D1%82%D1%83%D1%88%D0%BA%D0%B0_Iduna_caligata.JPG"
		},
		{
			"id": "396636",
			"name": "Сапсан",
			"species": "Falco peregrinus",
			"audio": "//www.xeno-canto.org/sounds/uploaded/SPMWIWZKKC/XC396636-170708_0237_Peregrine_Falcon_遊隼_Falco_peregrinus.mp3",
			"description": "Сапса́н (лат. Falco peregrinus) — хищная птица из семейства соколиных, распространённая на всех континентах, кроме Антарктиды. Размером с серую ворону, выделяется тёмным, аспидно-серым оперением спины, пёстрым светлым брюхом и чёрной верхней частью головы, а также чёрными «усами».",
			"url": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%BF%D1%81%D0%B0%D0%BD",
			"image": "https://upload.wikimedia.org/wikipedia/commons/2/21/Falco_peregrinus_-_01.jpg"
		},
		{
			"id": "30550",
			"name": "Красноголовый королёк",
			"species": "Regulus ignicapilla",
			"audio": "//www.xeno-canto.org/sounds/uploaded/CEYSYKSPYR/STE-009_Regulus_ignicapillus .mp3",
			"description": "Красноголовый королёк (лат. Regulus ignicapilla) — певчая птица семейства корольковых. Распространена в Европе и Северной Африке, где населяет широколиственные, смешанные и хвойные леса умеренных широт.",
			"url": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B3%D0%BE%D0%BB%D0%BE%D0%B2%D1%8B%D0%B9_%D0%BA%D0%BE%D1%80%D0%BE%D0%BB%D1%91%D0%BA",
			"image": "https://upload.wikimedia.org/wikipedia/commons/0/08/Regulus_ignicapilla_Arundel.jpg"
		},
		{
			"id": "152510",
			"name": "Алтайский улар",
			"species": "Tetraogallus altaicus",
			"audio": "//www.xeno-canto.org/sounds/uploaded/BOSPPVTSIB/XC152510-Altai Snowcock 2.mp3",
			"description": "Алта́йский ула́р, или алтайская горная индейка (лат. Tetraogallus altaicus) — вид птиц рода Улары (Tetraogallus).",
			"url": "https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D1%82%D0%B0%D0%B9%D1%81%D0%BA%D0%B8%D0%B9_%D1%83%D0%BB%D0%B0%D1%80",
			"image": "https://upload.wikimedia.org/wikipedia/commons/4/44/BirdsAsiaJohnGoVIIGoul_0132.jpg"
		},
		{
			"id": "182375",
			"name": "Лесной жаворонок",
			"species": "Lullula arborea",
			"audio": "//www.xeno-canto.org/sounds/uploaded/LELYWQKUZX/XC182375-Lullula arborea 140519_029,D.MP3",
			"description": "Лесной жаворонок, или юла (лат. Lullula arborea), — вид воробьиных птиц из семейства жаворонковых (Alaudidae), единственный в одноимённом роде (Lullula). Небольшая птица бурого цвета с тёмными продольными пестринами, низ, бровь и полоски по бокам хвоста и бровь охристо-белые, грудь однотонная с бурыми пятнами по бокам. На голове небольшой хохолок. Часто садится на деревья, что нетипично для большинства жаворонков. Голос — звонкая трель «тюю-люлю» или «люлюлю», часто поёт в воздухе, летая кругами. Название «юла» происходит от его песни «юли-юли-юли» или «юль-юль-юль».",
			"url": "https://ru.wikipedia.org/wiki/%D0%9B%D0%B5%D1%81%D0%BD%D0%BE%D0%B9_%D0%B6%D0%B0%D0%B2%D0%BE%D1%80%D0%BE%D0%BD%D0%BE%D0%BA",
			"image": "https://download.ams.birds.cornell.edu/api/v1/asset/45937431/1200"
		}
	],
	[
		{
			"id": "340645",
			"name": "Стенолаз",
			"species": "Tichodroma muraria",
			"audio": "//www.xeno-canto.org/sounds/uploaded/LELYWQKUZX/XC340645-Tichodroma muraria 161012_002-1,лов,C.MP3",
			"description": "Стенола́з или краснокры́лый стенола́з (лат. Tichodroma muraria), — вид воробьиных птиц, единственный в одноимённом роде (Tichodroma) и в семействе Tichodromidae. Обитает на скалах в горах.",
			"url": "https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D0%B5%D0%BD%D0%BE%D0%BB%D0%B0%D0%B7",
			"image": "https://upload.wikimedia.org/wikipedia/commons/5/5e/Tichodroma_muraria02_cropped.jpg"
		},
		{
			"id": "501701",
			"name": "Горихвостка-чернушка",
			"species": "Phoenicurus ochruros",
			"audio": "//www.xeno-canto.org/sounds/uploaded/LELYWQKUZX/XC501701-Phoenicurus ochruros 191009_006, Bf-.MP3",
			"description": "Горихво́стка-черну́шка (лат. Phoenicurus ochruros) — мелкая певчая птица из семейства мухоловковых, распространённая в Европе и Центральной Азии. Несколько меньше воробья, выделяется прежде всего тёмным оперением большей части тела и ржавчато-оранжевым хвостом.",
			"url": "https://ru.wikipedia.org/wiki/%D0%93%D0%BE%D1%80%D0%B8%D1%85%D0%B2%D0%BE%D1%81%D1%82%D0%BA%D0%B0-%D1%87%D0%B5%D1%80%D0%BD%D1%83%D1%88%D0%BA%D0%B0",
			"image": "https://upload.wikimedia.org/wikipedia/commons/d/d9/Colirrojotizon.JPG"
		},
		{
			"id": "487214",
			"name": "Чеграва",
			"species": "Hydroprogne caspia",
			"audio": "//www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC487214-Sterne caspienne nocmig vol.mp3",
			"description": "Чегра́ва (лат. Hydroprogne caspia) — вид крупных птиц из семейства чайковых. Единственный представитель рода чеграв (Hydroprogne).",
			"url": "https://ru.wikipedia.org/wiki/%D0%A7%D0%B5%D0%B3%D1%80%D0%B0%D0%B2%D0%B0",
			"image": "https://upload.wikimedia.org/wikipedia/commons/7/72/Sterna-caspia-010.jpg"
		},
		{
			"id": "484282",
			"name": "Чибис",
			"species": "Vanellus vanellus",
			"audio": "//www.xeno-canto.org/sounds/uploaded/LELYWQKUZX/XC484282-Xenus cinereus 190504_002,12-00--18-00, Широкундыш, отмель,ч.1,A1.MP3",
			"description": "Чибис, или пигалица (Vanellus vanellus) — небольшая птица семейства ржанковых.",
			"url": "https://ru.wikipedia.org/wiki/%D0%A7%D0%B8%D0%B1%D0%B8%D1%81",
			"image": "https://upload.wikimedia.org/wikipedia/commons/d/d2/Kiebitz_050424ausschnitt.jpg"
		},
		{
			"id": "431559",
			"name": "Средний кроншнеп",
			"species": "Numenius phaeopus",
			"audio": "//www.xeno-canto.org/sounds/uploaded/LELYWQKUZX/XC431559-Numenius phaeopus 0609_215031,AA.MP3",
			"description": "Сре́дний кро́ншнеп (лат. Numenius phaeopus) — птица семейства бекасовых.",
			"url": "https://ru.wikipedia.org/wiki/%D0%A1%D1%80%D0%B5%D0%B4%D0%BD%D0%B8%D0%B9_%D0%BA%D1%80%D0%BE%D0%BD%D1%88%D0%BD%D0%B5%D0%BF",
			"image": "https://upload.wikimedia.org/wikipedia/commons/0/0c/Whimbrel_Numenius_phaeopus.jpg"
		},
		{
			"id": "200477",
			"name": "Вяхирь",
			"species": "Columba palumbus",
			"audio": "//www.xeno-canto.org/sounds/uploaded/LELYWQKUZX/XC200477-Columba palumbus 0531_122545,C.MP3",
			"description": "Вя́хирь, или ви́тю́тень (лат. Columba palumbus) — вид птиц рода голубей.",
			"url": "https://ru.wikipedia.org/wiki/%D0%92%D1%8F%D1%85%D0%B8%D1%80%D1%8C",
			"image": "https://upload.wikimedia.org/wikipedia/commons/4/41/Common_Wood_Pigeon.jpg"
		}
	],
	[
		{
			"id": "497323",
			"name": "Хохотунья",
			"species": "Larus cachinnans",
			"audio": "//www.xeno-canto.org/sounds/uploaded/LELYWQKUZX/XC497323-Larus cachinnans  190906_002,AB.MP3",
			"description": "Хохоту́нья, или степная чайка (лат. Larus cachinnans) — крупная чайка, гнездится главным образом на территории России и Украины в районах, примыкающих к Чёрному и Каспийскому морям, а также в меньшей степени в Казахстане, Венгрии, Белоруссии и Польше. Населяет морские песчаные пляжи, морские острова, берега степных озёр и рек.",
			"url": "https://ru.wikipedia.org/wiki/%D0%A5%D0%BE%D1%85%D0%BE%D1%82%D1%83%D0%BD%D1%8C%D1%8F",
			"image": "https://upload.wikimedia.org/wikipedia/commons/3/33/Larus_cachinnans_3_%28Marek_Szczepanek%29.jpg"
		},
		{
			"id": "484331",
			"name": "Береговушка",
			"species": "Riparia riparia",
			"audio": "//www.xeno-canto.org/sounds/uploaded/IJRRKWZVQN/XC484331-riprip ä.mp3",
			"description": "Берегову́шка, или берегова́я ла́сточка (лат. Riparia riparia) — небольшая перелётная птица семейства ласточковых, распространённая на всех материках, за исключением Австралии и Антарктиды. В Европе обитает почти повсеместно, в том числе и на территории Российской Федерации.",
			"url": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%B5%D0%B3%D0%BE%D0%B2%D1%83%D1%88%D0%BA%D0%B0",
			"image": "https://upload.wikimedia.org/wikipedia/commons/e/ee/Riparia_Riparia-2006-Ejdzej-1.jpg"
		},
		{
			"id": "349445",
			"name": "Дикуша",
			"species": "Falcipennis falcipennis",
			"audio": "//www.xeno-canto.org/sounds/uploaded/NETFZPZEUQ/XC349445-falcipennis falcipennis.mp3",
			"description": "Дику́ша (лат. Falcipennis falcipennis) — одна из редких и малоизученных птиц семейства тетеревиных. Находится на грани уничтожения.",
			"url": "https://ru.wikipedia.org/wiki/%D0%94%D0%B8%D0%BA%D1%83%D1%88%D0%B0",
			"image": "https://upload.wikimedia.org/wikipedia/commons/6/66/Falcipennis_falcipennis_displaying.jpg"
		},
		{
			"id": "347472",
			"name": "Желтобрюхая синица",
			"species": "Pardaliparus venustulus",
			"audio": "//www.xeno-canto.org/sounds/uploaded/LELYWQKUZX/XC347472-_синица-19июля2 016, зап Уссур.MP3",
			"description": "Желтобрюхая синица (лат. Periparus venustulus) — мелкий вид синиц из семейства Paridae, обитающий в западной и центральной части Китая. Близка к московке.",
			"url": "https://ru.wikipedia.org/wiki/%D0%96%D0%B5%D0%BB%D1%82%D0%BE%D0%B1%D1%80%D1%8E%D1%85%D0%B0%D1%8F_%D1%81%D0%B8%D0%BD%D0%B8%D1%86%D0%B0",
			"image": "https://upload.wikimedia.org/wikipedia/commons/7/75/Yellow-bellied_Tit_%28Pardaliparus_venustulus%29_%288077149502%29.jpg"
		},
		{
			"id": "408241",
			"name": "Свиристель",
			"species": "Bombycilla garrulus",
			"audio": "//www.xeno-canto.org/sounds/uploaded/CNORMZSGIQ/XC408241- (Bombycilla garrulus) 29.03.2018.mp3",
			"description": "Свиристе́ль, или обыкнове́нный свиристе́ль (лат. Bombycilla garrulus) — певчая птица отряда воробьинообразных семейства свиристелевых.",
			"url": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B2%D0%B8%D1%80%D0%B8%D1%81%D1%82%D0%B5%D0%BB%D1%8C",
			"image": "https://upload.wikimedia.org/wikipedia/commons/e/ee/Bombycilla_garrulus_1_%28Martin_Mecnarowski%29.jpg"
		},
		{
			"id": "487136",
			"name": "Дубонос",
			"species": "Coccothraustes coccothraustes",
			"audio": "//www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC487136-Grosbec cassenoyaux cris cisailles.mp3",
			"description": "Дубоно́сы, или обыкнове́нные дубоно́сы (лат. Coccothraustes) — род птиц семейства вьюрковых, состоящий всего из трёх видов.",
			"url": "https://ru.wikipedia.org/wiki/%D0%94%D1%83%D0%B1%D0%BE%D0%BD%D0%BE%D1%81%D1%8B",
			"image": "https://upload.wikimedia.org/wikipedia/commons/6/67/Coccothraustes_coccothraustes_1_%28Marek_Szczepanek%29.jpg"
		}
	]
];

export default birdsData;
