

const news = [


    {Logo:"https://pbs.twimg.com/profile_images/1242184851152928769/wG2eTAfD_normal.jpg", Name:"Uniswap", Category:"Protocol", Followers:"562397", AUM:"3,297,518,399", Founded:"April 2018", Website:"https://uniswap.org/", Twitter:"https://twitter.com/Uniswap", Twitter_handle:"Uniswap"},

    {Logo:"https://pbs.twimg.com/profile_images/1152363392595714048/OVJu6nwQ_normal.png", Name:"Compound", Category:"Protocol", Followers:"156535", AUM:"1,554,407,179", Founded:"May 2011", Website:"https://compound.finance/", Twitter:"https://twitter.com/compoundfinance", Twitter_handle:"compoundfinance"},

    {Logo:"https://pbs.twimg.com/profile_images/1186270065085370368/J1YJtvdI_normal.jpg", Name:"Aave", Category:"Protocol", Followers:"248054", AUM:"766,115,566", Founded:"May 2017", Website:"https://aave.com/", Twitter:"https://twitter.com/AaveAave", Twitter_handle:"AaveAave"},

    {Logo:"https://pbs.twimg.com/profile_images/1392501414887313409/ixijGeIo_normal.jpg", Name:"Badger", Category:"Protocol", Followers:"35724", AUM:"655,426,161", Founded:"August 2020", Website:"https://badger.finance/", Twitter:"https://twitter.com/BadgerDAO", Twitter_handle:"BadgerDAO"},

    {Logo:"https://pbs.twimg.com/profile_images/1413076171571437572/Lqdt6HiZ_400x400.jpg", Name:"SushiChef", Category:"Protocol", Followers:"110453", AUM:"262,401,473", Founded:"September 2020", Website:"https://sushi.com/", Twitter:"https://twitter.com/SushiSwap", Twitter_handle:"SushiSwap"},

    {Logo:"https://pbs.twimg.com/profile_images/1196456510424961025/zacb-9pN_normal.jpg", Name:"Maker", Category:"Protocol", Followers:"164381", AUM:"222,927,865", Founded:"April 2015", Website:"https://makerdao.com/", Twitter:"https://twitter.com/MakerDAO", Twitter_handle:"MakerDAO"},

    {Logo:"https://pbs.twimg.com/profile_images/1220560374346461185/W1sQNVWo_normal.jpg", Name:"Curve Finance", Category:"Protocol", Followers:"138611", AUM:"216,227,448", Founded:"January 2020", Website:"https://curve.fi/", Twitter:"https://twitter.com/CurveFinance", Twitter_handle:"CurveFinance"},

    {Logo:"https://pbs.twimg.com/profile_images/1154798570047967233/ZINt8NSB_normal.jpg", Name:"Tornado", Category:"Protocol", Followers:"21236", AUM:"182,427,865", Founded:"July 2019", Website:"https://tornado.cash/", Twitter:"https://twitter.com/TornadoCash", Twitter_handle:"TornadoCash"},

    {Logo:"https://pbs.twimg.com/profile_images/1174715409100083200/RYCU7_dZ_normal.png", Name:"Balancer", Category:"Protocol", Followers:"89435", AUM:"104,728,397", Founded:"August 2019", Website:"https://balancer.fi/", Twitter:"https://twitter.com/BalancerLabs", Twitter_handle:"BalancerLabs"},

    {Logo:"https://pbs.twimg.com/profile_images/1368769440712597504/Sgc5zYvO_400x400.jpg", Name:"API3", Category:"Protocol", Followers:"25800", AUM:"103,677,441", Founded:"August 2020", Website:"https://api3.org/", Twitter:"https://twitter.com/API3DAO", Twitter_handle:"API3DAO"},

    {Logo:"https://pbs.twimg.com/profile_images/1298694547577462785/m_ZIw4kb_400x400.jpg", Name:"BarnBridge", Category:"Protocol", Followers:"21100", AUM:"95,979,024", Founded:"August 2020", Website:"https://barnbridge.com/", Twitter:"https://twitter.com/Barn_Bridge", Twitter_handle:"Barn_Bridge"},

    {Logo:"https://pbs.twimg.com/profile_images/1356618871030108161/uS04dyYy_400x400.jpg", Name:"Alchemix", Category:"Protocol", Followers:"36400", AUM:"95,729,079", Founded:"August 2020", Website:"https://alchemix.fi/", Twitter:"https://twitter.com/alchemixfi", Twitter_handle:"alchemixfi"},

    {Logo:"https://pbs.twimg.com/profile_images/1313562166616707073/c7w3TmXs_normal.jpg", Name:"Index Coop", Category:"Protocol", Followers:"18453", AUM:"41,895,539", Founded:"October 2020", Website:"https://www.indexcoop.com/", Twitter:"https://twitter.com/indexcoop", Twitter_handle:"indexcoop"},

    {Logo:"https://pbs.twimg.com/profile_images/1226087357461487616/Iq1CHt3I_400x400.jpg", Name:"mStable", Category:"Protocol", Followers:"19400", AUM:"35,662,830", Founded:"May 2019", Website:"https://mstable.org/", Twitter:"https://twitter.com/mstable_", Twitter_handle:"mstable_"},

    {Logo:"https://pbs.twimg.com/profile_images/1286204702338813952/X8fdf5p-_normal.png", Name:"Yearn Finance", Category:"Protocol", Followers:"132091", AUM:"35,050,886", Founded:"February 2020", Website:"https://yearn.finance/", Twitter:"https://twitter.com/iearnfinance", Twitter_handle:"iearnfinance"},

    {Logo:"https://pbs.twimg.com/profile_images/1004666585292951554/WPfTLP3M_400x400.jpg", Name:"Nexus Mutual", Category:"Protocol", Followers:"31000", AUM:"20,107,080", Founded:"July 2017", Website:"https://nexusmutual.io/", Twitter:"https://twitter.com/NexusMutual", Twitter_handle:"NexusMutual"},

    {Logo:"https://pbs.twimg.com/profile_images/1165560108744683520/xiLGl9-f_normal.png", Name:"DXdao", Category:"Service", Followers:"5397", AUM:"17,641,618", Founded:"August 2019", Website:"https://dxdao.eth.link/#/", Twitter:"https://twitter.com/DXdao_", Twitter_handle:"DXdao_"},

    {Logo:"https://pbs.twimg.com/profile_images/1407123088945254409/79YbMxeM_normal.jpg", Name:"Uniswap Grants", Category:"Grant", Followers:"5251", AUM:"9,250,114", Founded:"January 2021", Website:"https://unigrants.org/", Twitter:"https://twitter.com/uniswapgrants", Twitter_handle:"uniswapgrants"},

    {Logo:"https://pbs.twimg.com/profile_images/1393144062312472578/K9L6xyFE_400x400.jpg", Name:"Decentral Games", Category:"Protocol", Followers:"35100", AUM:"7,494,171", Founded:"August 2016", Website:"https://decentral.games/", Twitter:"https://twitter.com/decentralgames", Twitter_handle:"decentralgames"},

    {Logo:"https://pbs.twimg.com/profile_images/1391810983979483136/sPY3LG9N_normal.jpg", Name:"Yam Finance", Category:"Service", Followers:"24319", AUM:"5,972,408", Founded:"August 2020", Website:"https://yam.finance/", Twitter:"https://twitter.com/YamFinance", Twitter_handle:"YamFinance"},

    {Logo:"https://pbs.twimg.com/profile_images/1282933852529291266/PRYeCD6A_normal.jpg", Name:"Aavegotchi", Category:"Protocol", Followers:"38483", AUM:"4,468,823", Founded:"July 2020", Website:"https://aavegotchi.com/", Twitter:"https://twitter.com/aavegotchi", Twitter_handle:"aavegotchi"},

    {Logo:"https://pbs.twimg.com/profile_images/1220560374346461185/W1sQNVWo_normal.jpg", Name:"Curve Grants", Category:"Grant", Followers:"0", AUM:"2,734,593", Founded:"October 2020", Website:"https://news.curve.fi/community-grants/", Twitter:"https://news.curve.fi/community-grants/", Twitter_handle:null},

    {Logo:"https://pbs.twimg.com/profile_images/1299241789669269508/HU-JT5GI_normal.png", Name:"Synthetix", Category:"Protocol", Followers:"139026", AUM:"2,105,441", Founded:"August 2017", Website:"https://synthetix.io/", Twitter:"https://twitter.com/synthetix_io", Twitter_handle:"synthetix_io"},

    {Logo:"https://pbs.twimg.com/profile_images/1354022444953182209/fUvaichP_400x400.png", Name:"Synthetix Grants", Category:"Grant", Followers:"991", AUM:"2,046,132", Founded:"January 2021", Website:"https://grants.synthetix.io/", Twitter:"https://twitter.com/snxgrants", Twitter_handle:"snxgrants"},

    {Logo:"https://pbs.twimg.com/profile_images/1402707727323959308/AJK2Jlhg_normal.jpg", Name:"Compound Grants", Category:"Grant", Followers:"1196", AUM:"1,440,693", Founded:"February 2021", Website:"https://compoundgrants.org/", Twitter:"https://twitter.com/compoundgrants", Twitter_handle:"compoundgrants"},

    {Logo:"https://pbs.twimg.com/profile_images/1389400052448247816/qsOU0pih_normal.jpg", Name:"BanklessDAO", Category:"Media", Followers:"6337", AUM:"1,332,231", Founded:"March 2020", Website:"https://www.bankless.community/", Twitter:"https://twitter.com/banklessDAO", Twitter_handle:"banklessDAO"},

    {Logo:"https://pbs.twimg.com/profile_images/1308500350601580544/439Roxx3_400x400.jpg", Name:"Pickle Finance", Category:"Protocol", Followers:"20300", AUM:"1,034,972", Founded:"August 2020", Website:"https://pickle.finance/", Twitter:"https://twitter.com/picklefinance", Twitter_handle:"picklefinance"},

    {Logo:"https://pbs.twimg.com/profile_images/1244615008723456000/hJLp_LsD_400x400.png", Name:"Hakka Finance", Category:"Protocol", Followers:"7900", AUM:"651,179", Founded:"March 2020", Website:"https://hakka.finance/", Twitter:"https://twitter.com/hakkafinance", Twitter_handle:"hakkafinance"},

    {Logo:"https://pbs.twimg.com/profile_images/1409925543114334208/EdjUdYhC_normal.jpg", Name:"Aave Grants", Category:"Grant", Followers:"2220", AUM:"556,966", Founded:"April 2021", Website:"https://aavegrants.org/", Twitter:"https://twitter.com/AaveGrants", Twitter_handle:"AaveGrants"},

    {Logo:"https://pbs.twimg.com/profile_images/1335815288298721280/le1nzlO6_normal.jpg", Name:"Yield Guild Games", Category:"Service", Followers:"17174", AUM:"0", Founded:"October 2020", Website:"https://yieldguild.io/", Twitter:"https://twitter.com/YieldGuild", Twitter_handle:"YieldGuild"},

    {Logo:"https://pbs.twimg.com/profile_images/1372145317827727361/LD457RFi_normal.jpg", Name:"VitaDAO", Category:"Service", Followers:"3285", AUM:"0", Founded:"February 2021", Website:"https://www.vitadao.com/", Twitter:"https://twitter.com/vita_dao", Twitter_handle:"vita_dao"},

    {Logo:"https://pbs.twimg.com/profile_images/1341919394616770561/vcvBsmsA_normal.jpg", Name:"UniWhales", Category:"Service", Followers:"7425", AUM:"0", Founded:"March 2015", Website:"https://uniwhales.io/", Twitter:"https://twitter.com/uniwhalesio", Twitter_handle:"uniwhalesio"},

    {Logo:"https://pbs.twimg.com/profile_images/1392252472450822146/zNhrByCE_normal.jpg", Name:"Universe", Category:"Protocol", Followers:"10243", AUM:"0", Founded:"February 2021", Website:"https://dao.universe.xyz/", Twitter:"https://twitter.com/universe_xyz", Twitter_handle:"universe_xyz"},

    {Logo:"https://pbs.twimg.com/profile_images/1272388532607152128/n-g5dgbN_normal.png", Name:"TheWIPmeetup", Category:"Social", Followers:"2666", AUM:"0", Founded:"May 2020", Website:"https://discord.com/invite/nft", Twitter:"https://twitter.com/theWIPmeetup", Twitter_handle:"theWIPmeetup"},

    {Logo:"https://pbs.twimg.com/profile_images/1167606228228423680/7H9uAs6S_normal.jpg", Name:"TheLAO", Category:"Investment", Followers:"7956", AUM:"0", Founded:"August 2019", Website:"https://www.thelao.io/", Twitter:"https://twitter.com/TheLAOOfficial", Twitter_handle:"TheLAOOfficial"},

    {Logo:"https://pbs.twimg.com/profile_images/1352642965278240769/KbcFqj3G_normal.png", Name:"Tellor", Category:"Protocol", Followers:"23004", AUM:"0", Founded:"April 2019", Website:"https://www.tellor.io/", Twitter:"https://twitter.com/WeAreTellor", Twitter_handle:"WeAreTellor"},

    {Logo:"https://pbs.twimg.com/profile_images/1371997400387088384/yJLNwIld_normal.jpg", Name:"Syndicate", Category:"Platform", Followers:"10385", AUM:"0", Founded:"August 2020", Website:"https://www.syndicateprotocol.org/", Twitter:"https://twitter.com/SyndicateDAO", Twitter_handle:"SyndicateDAO"},

    {Logo:"https://pbs.twimg.com/profile_images/1317181705132904460/sRbFoqdV_normal.jpg", Name:"Stacker Ventures", Category:"Investment", Followers:"2016", AUM:"0", Founded:"September 2020", Website:"https://stacker.vc/", Twitter:"https://twitter.com/StackerVentures", Twitter_handle:"StackerVentures"},

    {Logo:"https://pbs.twimg.com/profile_images/1367617264636280838/zGCTOPRz_normal.jpg", Name:"SquiggleDAO", Category:"Collector", Followers:"1608", AUM:"0", Founded:"February 2021", Website:"https://squiggledao.com/", Twitter:"https://twitter.com/squiggledao", Twitter_handle:"squiggledao"},

    {Logo:"https://pbs.twimg.com/profile_images/1409275488607027204/PWkCxth2_normal.jpg", Name:"SongCamp", Category:"Social", Followers:"873", AUM:"0", Founded:"April 2021", Website:"https://songcamp.band", Twitter:"https://twitter.com/songcamp_", Twitter_handle:"songcamp_"},

    {Logo:"https://pbs.twimg.com/profile_images/1390523981225148416/x421YwoV_normal.jpg", Name:"Sevens Foundation", Category:"Grant", Followers:"4981", AUM:"0", Founded:"December 2020", Website:"https://www.grants.art/", Twitter:"https://twitter.com/SevensGrant", Twitter_handle:"SevensGrant"},

    {Logo:"https://pbs.twimg.com/profile_images/1343799330222657536/IUqDIi6B_400x400.jpg", Name:"Seed Club", Category:"Social", Followers:"6031", AUM:"0", Founded:"August 2020", Website:"https://seedclub.xyz/", Twitter:"https://twitter.com/seedclubhq", Twitter_handle:"seedclubhq"},

    {Logo:"https://pbs.twimg.com/profile_images/1320861494112854018/7-zRzzum_400x400.jpg", Name:"rekt", Category:"Media", Followers:"36200", AUM:"0", Founded:"August 2020", Website:"https://www.rekt.news/", Twitter:"https://twitter.com/RektHQ", Twitter_handle:"RektHQ"},

    {Logo:"https://pbs.twimg.com/profile_images/1215352997179297792/AT2FCZhE_normal.jpg", Name:"RaribleDAO", Category:"Protocol", Followers:"170196", AUM:"0", Founded:"August 2019", Website:"https://rarible.com/", Twitter:"https://twitter.com/rariblecom", Twitter_handle:"rariblecom"},

    {Logo:"https://pbs.twimg.com/profile_images/1365586680883908610/_LAp7Dsb_normal.jpg", Name:"Rari Capital DAO", Category:"Protocol", Followers:"24819", AUM:"0", Founded:"May 2020", Website:"https://rari.capital/", Twitter:"https://twitter.com/RariCapital", Twitter_handle:"RariCapital"},

    {Logo:"https://pbs.twimg.com/profile_images/1226584267645341696/NQCsdXTC_normal.jpg", Name:"Raid Guild", Category:"Service", Followers:"3915", AUM:"0", Founded:"September 2019", Website:"https://raidguild.org/", Twitter:"https://twitter.com/RaidGuild", Twitter_handle:"RaidGuild"},

    {Logo:"https://pbs.twimg.com/profile_images/1372563232850870274/aREQff_C_normal.jpg", Name:"Radicle", Category:"Social", Followers:"15675", AUM:"0", Founded:"October 2018", Website:"https://radicle.xyz/", Twitter:"https://twitter.com/radicle", Twitter_handle:"radicle"},

    {Logo:"https://pbs.twimg.com/profile_images/1413176754844446720/YxdfBunt_400x400.jpg", Name:"ProsperDAO", Category:"Social", Followers:"61", AUM:"0", Founded:"May 2021", Website:"https://prosperdao.xyz/", Twitter:"https://twitter.com/ProsperDao", Twitter_handle:"ProsperDao"},

    {Logo:"https://pbs.twimg.com/profile_images/1380603982205321217/EuVE1qKL_normal.jpg", Name:"Proof of Humanity", Category:"Social", Followers:"4278", AUM:"0", Founded:"September 2020", Website:"https://www.proofofhumanity.id/", Twitter:"https://twitter.com/proofofhumanity", Twitter_handle:"proofofhumanity"},

    {Logo:"https://pbs.twimg.com/profile_images/1399376178453090305/RJD82RrV_normal.jpg", Name:"PrimeDAO", Category:"Platform", Followers:"3214", AUM:"0", Founded:"July 2020", Website:"https://www.prime.xyz/", Twitter:"https://twitter.com/PrimeDAO_", Twitter_handle:"PrimeDAO_"},

    {Logo:"https://pbs.twimg.com/profile_images/1313563688931069952/MtjyDDDh_normal.jpg", Name:"PoolTogether", Category:"Protocol", Followers:"23411", AUM:"0", Founded:"April 2019", Website:"https://pooltogether.com/", Twitter:"https://twitter.com/PoolTogether_", Twitter_handle:"PoolTogether_"},

    {Logo:"https://pbs.twimg.com/profile_images/1403453134668767236/poMoHcUx_normal.jpg", Name:"PleasrDAO", Category:"Collector", Followers:"12482", AUM:"0", Founded:"March 2021", Website:"https://pleasr.org/", Twitter:"https://twitter.com/PleasrDAO", Twitter_handle:"PleasrDAO"},

    {Logo:"https://pbs.twimg.com/profile_images/1404728139771744256/6sCZ8nqB_normal.jpg", Name:"PieDAO", Category:"Protocol", Followers:"13422", AUM:"0", Founded:"January 2019", Website:"https://www.piedao.org/", Twitter:"https://twitter.com/PieDAO_DeFi", Twitter_handle:"PieDAO_DeFi"},

    {Logo:"https://pbs.twimg.com/profile_images/1410051594125709312/jVA9NRiQ_normal.jpg", Name:"PartyDAO", Category:"Service", Followers:"1481", AUM:"0", Founded:"April 2021", Website:"https://party.mirror.xyz/", Twitter:"https://twitter.com/prtyDAO", Twitter_handle:"prtyDAO"},

    {Logo:"https://pbs.twimg.com/profile_images/1374452255332573184/H5WRfc_d_normal.jpg", Name:"Orca", Category:"Platform", Followers:"1168", AUM:"0", Founded:"December 2020", Website:"https://www.orcaprotocol.org/", Twitter:"https://twitter.com/OrcaProtocol", Twitter_handle:"OrcaProtocol"},

    {Logo:"https://pbs.twimg.com/profile_images/1350145905438175234/ojsHt9O6_normal.jpg", Name:"OPOLIS", Category:"Service", Followers:"2577", AUM:"0", Founded:"March 2012", Website:"https://opolis.co/", Twitter:"https://twitter.com/opolis", Twitter_handle:"opolis"},

    {Logo:"https://pbs.twimg.com/profile_images/1392675686935146501/S2N4kjMl_normal.jpg", Name:"OlympusDAO", Category:"Protocol", Followers:"12876", AUM:"0", Founded:"January 2021", Website:"https://olympusdao.finance/#/", Twitter:"https://twitter.com/OlympusDAO", Twitter_handle:"OlympusDAO"},

    {Logo:"https://pbs.twimg.com/profile_images/1349800663983779840/RGzpFDrE_400x400.jpg", Name:"NeptuneDAO", Category:"Service", Followers:"1825", AUM:"0", Founded:"January 2021", Website:"https://neptunedao.xyz/", Twitter:"https://twitter.com/NEPTUNEDA0", Twitter_handle:"NEPTUNEDA0"},

    {Logo:"https://pbs.twimg.com/profile_images/1407498143781040128/td2ufpfd_normal.png", Name:"Myco", Category:"Service", Followers:"810", AUM:"0", Founded:"November 2020", Website:"https://myco.space/", Twitter:"https://twitter.com/mycodotspace", Twitter_handle:"mycodotspace"},

    {Logo:"https://pbs.twimg.com/profile_images/1396646800119975936/Ppwj-MMS_normal.jpg", Name:"MUSE0", Category:"Collector", Followers:"638", AUM:"0", Founded:"May 2021", Website:"https://muse0.xyz/", Twitter:"https://twitter.com/MUSE0DAO", Twitter_handle:"MUSE0DAO"},

    {Logo:"https://pbs.twimg.com/profile_images/1372883007695060992/3CzDQZV2_normal.jpg", Name:"MolochDAO", Category:"Grant", Followers:"6560", AUM:"0", Founded:"February 2019", Website:"https://www.molochdao.com/", Twitter:"https://twitter.com/MolochDAO", Twitter_handle:"MolochDAO"},

    {Logo:"https://pbs.twimg.com/profile_images/1361215809469771776/5a1H1sqV_normal.jpg", Name:"Mint Fund", Category:"Grant", Followers:"5153", AUM:"0", Founded:"February 2021", Website:"https://themint.fund/", Twitter:"https://twitter.com/themintfund", Twitter_handle:"themintfund"},

    {Logo:"https://pbs.twimg.com/profile_images/1219326469324697600/VbC_m_QR_normal.jpg", Name:"MetaGame", Category:"Social", Followers:"2855", AUM:"0", Founded:"September 2019", Website:"https://wiki.metagame.wtf/", Twitter:"https://twitter.com/MetaFam", Twitter_handle:"MetaFam"},

    {Logo:"https://pbs.twimg.com/profile_images/1410045044027912192/zIm2gPFU_normal.jpg", Name:"MetaFactory", Category:"Service", Followers:"8443", AUM:"0", Founded:"October 2019", Website:"https://shop.metafactory.ai/", Twitter:"https://twitter.com/TheMetaFactory", Twitter_handle:"TheMetaFactory"},

    {Logo:"https://pbs.twimg.com/profile_images/1234120671413731328/Yoa169RO_normal.jpg", Name:"MetaCartel Ventures", Category:"Grant", Followers:"8518", AUM:"0", Founded:"September 2019", Website:"https://metacartel.xyz/", Twitter:"https://twitter.com/VENTURE_DAO", Twitter_handle:"VENTURE_DAO"},

    {Logo:"https://pbs.twimg.com/profile_images/1156297966233067521/Rt2YFQgt_normal.jpg", Name:"MetaCartel", Category:"Investment", Followers:"8594", AUM:"0", Founded:"July 2018", Website:"https://www.metacartel.org/", Twitter:"https://twitter.com/Meta_Cartel", Twitter_handle:"Meta_Cartel"},

    {Logo:"https://pbs.twimg.com/profile_images/1266510169199964160/kyaYogrM_normal.jpg", Name:"Meta Gamma Delta", Category:"Social", Followers:"1051", AUM:"0", Founded:"February 2020", Website:"https://metagammadelta.com/", Twitter:"https://twitter.com/metagammadelta", Twitter_handle:"metagammadelta"},

    {Logo:"https://pbs.twimg.com/profile_images/1403786927673774080/ZgVuisG__normal.jpg", Name:"MeebitsDAO", Category:"Collector", Followers:"2334", AUM:"0", Founded:"May 2021", Website:"https://meebitsdao.world/", Twitter:"https://twitter.com/MeebitsDAO", Twitter_handle:"MeebitsDAO"},

    {Logo:"https://pbs.twimg.com/profile_images/1408282325742358530/bC_3xI30_400x400.jpg", Name:"Llama", Category:"Service", Followers:"1180", AUM:"0", Founded:"August 2020", Website:"https://llama.community/#/", Twitter:"https://twitter.com/llamacommunity_", Twitter_handle:"llamacommunity_"},

    {Logo:"https://pbs.twimg.com/profile_images/1314525613881995264/pGDedFg0_normal.png", Name:"Lido", Category:"Protocol", Followers:"27525", AUM:"0", Founded:"October 2020", Website:"https://lido.fi/", Twitter:"https://twitter.com/LidoFinance", Twitter_handle:"LidoFinance"},

    {Logo:"https://pbs.twimg.com/profile_images/1376348470999724035/nkC7Sf_2_normal.jpg", Name:"LexDAO", Category:"Service", Followers:"1569", AUM:"0", Founded:"November 2019", Website:"https://www.lexdao.coop/", Twitter:"https://twitter.com/lex_DAO", Twitter_handle:"lex_DAO"},

    {Logo:"https://pbs.twimg.com/profile_images/1406023358714634240/PkAGiFDN_normal.jpg", Name:"Kraus House DAO", Category:"Social", Followers:"284", AUM:"0", Founded:"May 2021", Website:"https://krausehouse.club/", Twitter:"https://twitter.com/KrauseHouseDAO", Twitter_handle:"KrauseHouseDAO"},

    {Logo:"https://pbs.twimg.com/profile_images/1395750640245088260/eoBASfMQ_normal.png", Name:"Komorebi Collective", Category:"Investment", Followers:"1119", AUM:"0", Founded:"April 2021", Website:"https://www.syndicateprotocol.org/syndicate/komorebi_collective", Twitter:"https://twitter.com/KomorebiFund", Twitter_handle:"KomorebiFund"},

    {Logo:"https://pbs.twimg.com/profile_images/1235001742716047360/z8n7Rb13_normal.jpg", Name:"KeeperDAO", Category:"Protocol", Followers:"21438", AUM:"0", Founded:"July 2019", Website:"https://keeperdao.com/#/", Twitter:"https://twitter.com/Keeper_DAO", Twitter_handle:"Keeper_DAO"},

    {Logo:"https://pbs.twimg.com/profile_images/1379484940719505412/-Ga43mBt_normal.jpg", Name:"Jenny Metaverse DAO", Category:"Collector", Followers:"11913", AUM:"0", Founded:"April 2021", Website:"https://jennynft.io/", Twitter:"https://twitter.com/JennyMetaverse", Twitter_handle:"JennyMetaverse"},

    {Logo:"https://pbs.twimg.com/profile_images/1289942453819252742/M363P_Pk_normal.png", Name:"JammSession", Category:"Social", Followers:"481", AUM:"0", Founded:"August 2020", Website:"https://www.jammpad.com/", Twitter:"https://twitter.com/JammSession_", Twitter_handle:"JammSession_"},

    {Logo:"https://pbs.twimg.com/profile_images/1350488861089128456/kHRonsI-_normal.jpg", Name:"Inverse Finance", Category:"Protocol", Followers:"12047", AUM:"0", Founded:"December 2020", Website:"https://inverse.finance/", Twitter:"https://twitter.com/InverseFinance", Twitter_handle:"InverseFinance"},

    {Logo:"https://pbs.twimg.com/profile_images/1407454373203021831/ou1yNJg5_normal.jpg", Name:"HoneyDAO", Category:"Service", Followers:"946", AUM:"0", Founded:"April 2021", Website:"https://honeydao.com/", Twitter:"https://twitter.com/HoneyDAO_", Twitter_handle:"HoneyDAO_"},

    {Logo:"https://pbs.twimg.com/profile_images/1401979943626575873/IEyK8aDX_normal.jpg", Name:"HERSTORY", Category:"Collector", Followers:"2224", AUM:"0", Founded:"May 2020", Website:"https://foundation.app/digital-diaspora", Twitter:"https://twitter.com/herstoryDAO", Twitter_handle:"herstoryDAO"},

    {Logo:"https://pbs.twimg.com/profile_images/1389684414133805063/8CupXj3d_normal.jpg", Name:"hDAO", Category:"Protocol", Followers:"1754", AUM:"0", Founded:"May 2021", Website:"https://hicetnuncdao.xyz/", Twitter:"https://twitter.com/hicetnuncDAO", Twitter_handle:"hicetnuncDAO"},

    {Logo:"https://pbs.twimg.com/profile_images/1060558512068030464/wun6fV4T_normal.jpg", Name:"Global Coin Research", Category:"Media", Followers:"3919", AUM:"0", Founded:"April 2018", Website:"https://globalcoinresearch.com/", Twitter:"https://twitter.com/Globalcoinrsrch", Twitter_handle:"Globalcoinrsrch"},

    {Logo:"https://pbs.twimg.com/profile_images/1405178063596318721/yZmYeTXT_normal.png", Name:"Gitcoin", Category:"Protocol", Followers:"51591", AUM:"0", Founded:"April 2017", Website:"https://gitcoin.co/", Twitter:"https://twitter.com/gitcoin", Twitter_handle:"gitcoin"},

    {Logo:"https://pbs.twimg.com/profile_images/1342358166877720577/xRGEXmQN_normal.png", Name:"Friends With Benefits", Category:"Social", Followers:"5163", AUM:"0", Founded:"December 2020", Website:"https://fwb.help/", Twitter:"https://twitter.com/FWBtweets", Twitter_handle:"FWBtweets"},

    {Logo:"https://pbs.twimg.com/profile_images/1335004082503700481/0Hj7q-5w_400x400.png", Name:"Free Company", Category:"Investment", Followers:"612", AUM:"0", Founded:"August 2020", Website:"https://www.frco.xyz/", Twitter:"https://twitter.com/_freecompany", Twitter_handle:"_freecompany"},

    {Logo:"https://pbs.twimg.com/profile_images/1293402536427139072/N2kir6jx_normal.jpg", Name:"Forefront", Category:"Media", Followers:"3568", AUM:"0", Founded:"January 2019", Website:"https://forefront.market/", Twitter:"https://twitter.com/forefront__", Twitter_handle:"forefront__"},

    {Logo:"https://pbs.twimg.com/profile_images/1309614351096127488/TdNyjlBL_normal.jpg", Name:"Flamingo", Category:"Investment", Followers:"13498", AUM:"0", Founded:"September 2020", Website:"https://flamingodao.xyz/", Twitter:"https://twitter.com/FLAMINGODAO", Twitter_handle:"FLAMINGODAO"},

    {Logo:"https://pbs.twimg.com/profile_images/1391125460810076170/wCPb0b88_normal.png", Name:"FingerprintsDAO", Category:"Collector", Followers:"1694", AUM:"0", Founded:"March 2021", Website:"https://www.fingerprintsdao.xyz/", Twitter:"https://twitter.com/FingerprintsDAO", Twitter_handle:"FingerprintsDAO"},

    {Logo:"https://pbs.twimg.com/profile_images/1401796429916561412/GPazF27y_normal.jpg", Name:"FiatLuxDAO", Category:"Social", Followers:"1039", AUM:"0", Founded:"June 2021", Website:"https://foundation.app/@FiatLuxDAO", Twitter:"https://twitter.com/FiatLuxDAO", Twitter_handle:"FiatLuxDAO"},

    {Logo:"https://pbs.twimg.com/profile_images/1327603831979577348/Ryx8ex9s_normal.jpg", Name:"DuckDAO Incubator", Category:"Investment", Followers:"96630", AUM:"0", Founded:"August 2020", Website:"https://duckdao.io/", Twitter:"https://twitter.com/dao_duck", Twitter_handle:"dao_duck"},

    {Logo:"https://pbs.twimg.com/profile_images/1394650708113305600/mXTyCR4L_normal.jpg", Name:"dOrg", Category:"Service", Followers:"1501", AUM:"0", Founded:"March 2019", Website:"https://www.dorg.tech/#/", Twitter:"https://twitter.com/dOrg_tech", Twitter_handle:"dOrg_tech"},

    {Logo:"https://pbs.twimg.com/profile_images/1399699943422582785/GMBQYUD6_normal.jpg", Name:"DoinGud", Category:"Service", Followers:"6211", AUM:"0", Founded:"March 2020", Website:"https://doingud.com/", Twitter:"https://twitter.com/DoinGudHQ", Twitter_handle:"DoinGudHQ"},

    {Logo:"https://pbs.twimg.com/profile_images/1110943075805872128/mE5l9TiV_400x400.png", Name:"Deep Work", Category:"Service", Followers:"590", AUM:"0", Founded:"February 2019", Website:"https://deepwork.studio/", Twitter:"https://twitter.com/deepwork_studio", Twitter_handle:"deepwork_studio"},

    {Logo:"https://pbs.twimg.com/profile_images/1034890446240006145/WGoEtcqK_normal.jpg", Name:"Decred", Category:"Protocol", Followers:"47030", AUM:"0", Founded:"February 2014", Website:"https://www.decred.org/", Twitter:"https://twitter.com/decredproject", Twitter_handle:"decredproject"},

    {Logo:"https://pbs.twimg.com/profile_images/1405600548934537216/T2idgXL0_400x400.jpg", Name:"DarkstarDAO", Category:"Media", Followers:"308", AUM:"0", Founded:"June 2021", Website:"https://darkstar.mirror.xyz/", Twitter:"https://twitter.com/darkstardao", Twitter_handle:"darkstardao"},

    {Logo:"https://pbs.twimg.com/profile_images/932589128125943808/3Lmhssv9_normal.jpg", Name:"DaoStack", Category:"Platform", Followers:"8217", AUM:"0", Founded:"September 2016", Website:"https://daostack.io/", Twitter:"https://twitter.com/daostack", Twitter_handle:"daostack"},

    {Logo:"https://pbs.twimg.com/profile_images/1370501762499686405/jN3kkqke_normal.png", Name:"DaoHaus", Category:"Platform", Followers:"7075", AUM:"0", Founded:"August 2019", Website:"https://daohaus.club/", Twitter:"https://twitter.com/nowdaoit", Twitter_handle:"nowdaoit"},

    {Logo:"https://pbs.twimg.com/profile_images/1328943304789123073/Ymn7mIk6_normal.jpg", Name:"Creator Cabins", Category:"Social", Followers:"962", AUM:"0", Founded:"November 2020", Website:"https://www.creatorcabins.com/", Twitter:"https://twitter.com/creatorcabins", Twitter_handle:"creatorcabins"},

    {Logo:"https://pbs.twimg.com/profile_images/1283747298573381633/so8jjWOm_normal.jpg", Name:"Cream Finance", Category:"Protocol", Followers:"56316", AUM:"0", Founded:"June 2020", Website:"https://cream.finance/", Twitter:"https://twitter.com/CreamdotFinance", Twitter_handle:"CreamdotFinance"},

    {Logo:"https://pbs.twimg.com/profile_images/1038074862974189569/AA1bsW-8_normal.jpg", Name:"Colony", Category:"Platform", Followers:"12800", AUM:"0", Founded:"July 2009", Website:"https://colony.io/", Twitter:"https://twitter.com/joincolony", Twitter_handle:"joincolony"},

    {Logo:"https://pbs.twimg.com/profile_images/1373777343051751427/5m4WnD1N_normal.jpg", Name:"Bright Moments Gallery", Category:"Social", Followers:"369", AUM:"0", Founded:"March 2021", Website:"https://brightmoments.io/", Twitter:"https://twitter.com/brtmoments", Twitter_handle:"brtmoments"},

    {Logo:"https://pbs.twimg.com/profile_images/1382957224448946180/TSp-Iayp_normal.jpg", Name:"Bored Ape Yacht Club", Category:"Social", Followers:"28172", AUM:"0", Founded:"April 2021", Website:"https://boredapeyachtclub.com/#/", Twitter:"https://twitter.com/BoredApeYC", Twitter_handle:"BoredApeYC"},

    {Logo:"https://pbs.twimg.com/profile_images/1404366312722223110/JRNxtvCP_normal.jpg", Name:"BitDAO", Category:"Investment", Followers:"3437", AUM:"0", Founded:"April 2021", Website:"https://www.bitdao.io/", Twitter:"https://twitter.com/BitDAO_Official", Twitter_handle:"BitDAO_Official"},

    {Logo:"https://pbs.twimg.com/profile_images/1377076644104581121/kncyiy4x_normal.jpg", Name:"BeetsDAO", Category:"Collector", Followers:"1087", AUM:"0", Founded:"March 2021", Website:"https://www.beetsdao.com/", Twitter:"https://twitter.com/BeetsDAO", Twitter_handle:"BeetsDAO"},

    {Logo:"https://pbs.twimg.com/profile_images/1394316748116144134/xDV_bhdA_normal.jpg", Name:"BaconDAO", Category:"Service", Followers:"9824", AUM:"0", Founded:"February 2021", Website:"https://bacondao.com/", Twitter:"https://twitter.com/BaconDAO_", Twitter_handle:"BaconDAO_"},

    {Logo:"https://pbs.twimg.com/profile_images/1387446260618219525/kRKidHes_normal.jpg", Name:"Audius", Category:"Protocol", Followers:"52155", AUM:"0", Founded:"July 2018", Website:"https://audius.co/", Twitter:"https://twitter.com/AudiusProject", Twitter_handle:"AudiusProject"},

    {Logo:"https://pbs.twimg.com/profile_images/1406414087873986565/uL_w9skB_normal.jpg", Name:"Audacity Fund", Category:"Investment", Followers:"825", AUM:"0", Founded:"April 2021", Website:"https://www.audacity.fund/", Twitter:"https://twitter.com/audacity_fund", Twitter_handle:"audacity_fund"},

    {Logo:"https://pbs.twimg.com/profile_images/1356647511520337921/7mHNl7X__normal.jpg", Name:"Aragon", Category:"Platform", Followers:"85209", AUM:"0", Founded:"February 2017", Website:"https://aragon.org/", Twitter:"https://twitter.com/AragonProject", Twitter_handle:"AragonProject"},

    {Logo:"https://pbs.twimg.com/profile_images/1395924690216968192/_CgsxOhz_normal.jpg", Name:"AladdinDAO", Category:"Service", Followers:"2443", AUM:"0", Founded:"March 2021", Website:"https://aladdin.club/", Twitter:"https://twitter.com/aladdindao", Twitter_handle:"aladdindao"},

    {Logo:"https://pbs.twimg.com/profile_images/1276286557494837248/SgXEhvrc_normal.png", Name:"1Hive", Category:"Service", Followers:"4551", AUM:"0", Founded:"May 2018", Website:"https://1hive.org/", Twitter:"https://twitter.com/1HiveOrg", Twitter_handle:"1HiveOrg"},

    {Logo:"https://pbs.twimg.com/profile_images/1337448316993478660/QKTkZZvw_400x400.png", Name:"AngelDAO", Category:"Investment", Followers:"735", AUM:"0", Founded:"December 2020", Website:"https://angeldao.org/", Twitter:"https://twitter.com/AngelDAOorg", Twitter_handle:"AngelDAOorg"},

    {Logo:"https://pbs.twimg.com/profile_images/1296271529810960384/6s2QXz6y_400x400.jpg", Name:"Crypto Seed Partners", Category:"Investment", Followers:"50", AUM:"0", Founded:"August 2020", Website:"https://www.cspdao.network/", Twitter:"https://twitter.com/cspdao", Twitter_handle:"cspdao"}


]


export default news;

// Twitter_handle
