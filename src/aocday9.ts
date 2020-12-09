function day9() {
  console.time();
  
  const puzzle = `2
  24
  36
  21
  45
  47
  20
  46
  31
  30
  22
  27
  34
  29
  17
  8
  13
  33
  35
  18
  26
  44
  5
  41
  42
  7
  28
  12
  43
  61
  68
  36
  70
  46
  15
  19
  20
  30
  21
  51
  17
  24
  31
  37
  58
  22
  25
  26
  49
  27
  32
  45
  29
  34
  50
  35
  38
  52
  36
  39
  40
  41
  67
  60
  77
  42
  72
  51
  47
  48
  55
  53
  56
  70
  61
  85
  81
  63
  90
  71
  73
  75
  104
  76
  79
  88
  83
  106
  89
  93
  95
  167
  103
  100
  101
  128
  134
  165
  124
  166
  136
  138
  139
  200
  154
  148
  176
  155
  159
  189
  171
  188
  196
  240
  194
  195
  201
  248
  235
  360
  334
  258
  260
  327
  320
  309
  567
  519
  348
  302
  385
  419
  498
  330
  359
  383
  382
  389
  542
  395
  396
  531
  791
  569
  518
  931
  587
  643
  629
  611
  691
  920
  713
  959
  1211
  715
  726
  988
  689
  741
  765
  771
  784
  913
  1434
  927
  1049
  1207
  1087
  1753
  1198
  1404
  1240
  1300
  1302
  1402
  1525
  1499
  1415
  1430
  1772
  1473
  1454
  1460
  2386
  1852
  1858
  1840
  2111
  2014
  1976
  3174
  2285
  2438
  2498
  2602
  3790
  2540
  2875
  2704
  2955
  2845
  4338
  3630
  2884
  2914
  2927
  3306
  3300
  3969
  4772
  5488
  4299
  3990
  5040
  5199
  4723
  4783
  5738
  7580
  5811
  5588
  5244
  5549
  7213
  11055
  5729
  6184
  5798
  8695
  7697
  9787
  8029
  8773
  7959
  9189
  9848
  13318
  8713
  9506
  9922
  9967
  10027
  16732
  11982
  10793
  10832
  21830
  11278
  18621
  11527
  11913
  13495
  13757
  15656
  15726
  26519
  26580
  25693
  17902
  18219
  18561
  18635
  19428
  19473
  20859
  28602
  20820
  33875
  22110
  21625
  22359
  25670
  37256
  30955
  27183
  25408
  27252
  59545
  31382
  50017
  36121
  36463
  37196
  36854
  36780
  49461
  38063
  41538
  66946
  47033
  44469
  42445
  62133
  43735
  43984
  47767
  68721
  96494
  64379
  52591
  52660
  63373
  84963
  75117
  72584
  81798
  112834
  73634
  116407
  87719
  86180
  79601
  201370
  89478
  137623
  86429
  90212
  125782
  91502
  91751
  100358
  125175
  105251
  125244
  134458
  116033
  137007
  148751
  146218
  155432
  163112
  153235
  297570
  176641
  177682
  194729
  263470
  175907
  244986
  177931
  178180
  181714
  207784
  183253
  192109
  205609
  230426
  242258
  241277
  250491
  253040
  283225
  294969
  299453
  308667
  316347
  329142
  352548
  372909
  355862
  353838
  354087
  356111
  359645
  361184
  425511
  364967
  450042
  637312
  397718
  603039
  491768
  729020
  660637
  545460
  714065
  578194
  734093
  608120
  625014
  645489
  964223
  713483
  781622
  707925
  709949
  823229
  1069109
  1201717
  726151
  762685
  815009
  1035030
  889486
  943178
  2144895
  1037228
  1123654
  1153580
  1497606
  1186314
  1359816
  1233134
  1423432
  1270503
  1427111
  1421408
  1522934
  1417874
  1434076
  1638238
  2180559
  1488836
  1541160
  1577694
  2075800
  1968589
  1832664
  2587656
  2550765
  2190808
  2592950
  2968271
  2574988
  2419448
  2783248
  3100628
  2660245
  3689951
  2688377
  3011770
  4266071
  4149148
  4013223
  2922912
  4628834
  3029996
  3908464
  3118854
  3410358
  4023472
  7117419
  4252112
  4974056
  4610256
  4765796
  6673468
  5628516
  5348622
  5079693
  5443493
  5583157
  5672015
  5611289
  6333270
  6041766
  7688708
  5952908
  6148850
  6440354
  9600734
  7027318
  6529212
  7142326
  10193413
  9924127
  8862368
  9863401
  9376052
  12589204
  10209289
  10428315
  10523186
  11283304
  12051643
  19078961
  11536065
  11713781
  11653055
  13641616
  13730474
  12101758
  13582680
  12678062
  18563383
  17236607
  22295171
  13671538
  16004694
  22574829
  18238420
  18725769
  19239453
  21964380
  20637604
  30775518
  23754813
  21806490
  25444255
  34309142
  23249846
  23189120
  30892508
  24331117
  24779820
  25684438
  29676232
  28682756
  29914669
  43826724
  30908145
  52489498
  31909958
  34243114
  36964189
  37477873
  37965222
  56336763
  42444094
  43887450
  44995610
  45056336
  47250745
  46438966
  47520237
  47580963
  66640421
  50464258
  49110937
  69775430
  57594396
  58358988
  58597425
  60822814
  65151259
  68873367
  66153072
  68874147
  112402004
  91434576
  79921967
  80409316
  88883060
  86331544
  88943786
  90051946
  95101200
  93689711
  93959203
  105175359
  109061683
  99575195
  106705333
  107469925
  164299729
  115953384
  215528579
  119420239
  125974073
  175275330
  165728267
  157817933
  148796114
  179497162
  160331283
  237739900
  306614047
  250631273
  176383490
  184044986
  183741657
  193264906
  193534398
  199134562
  204750554
  206280528
  223423309
  290273802
  226890164
  294695569
  299998370
  279751522
  488371173
  274770187
  342111757
  326059550
  309127397
  342330512
  336714773
  344072940
  390022185
  390325514
  622082034
  369648396
  367786643
  377006563
  479520741
  392668960
  405415090
  503174831
  429703837
  450313473
  506641686
  501660351
  636807326
  554521709
  583897584
  600829737
  676914040
  845286588
  742129863
  651457909
  679045285
  680787713
  759973910
  542529149
  1130978650
  737435039
  880181394
  744793206
  931364188
  872189701
  798084050
  835118927
  880017310
  972232986
  1153118260
  1540213913
  1044189500
  1233566994
  1097050858
  1126426733
  1143358886
  1279964188
  1193987058
  1221574434
  1223316862
  1287322355
  1302503059
  1340613199
  2233867247
  1482228245
  2211328376
  1624810516
  1678101360
  1633202977
  1670273751
  1715136237
  2291037916
  2141240358
  2223477591
  3513831435
  2187548386
  2582467247
  2240409744
  2348001167
  2496490117
  2337345944
  2415561492
  2417303920
  2444891296
  3774443335
  2627935554
  2643116258
  2822841444
  3152501996
  3812358902
  3393237597
  4276319235
  3385409988
  3857822137
  4493115195
  4514515507
  4328788744
  4364717949
  4411025977
  4991117425
  4822876991
  4577755688
  5802713908
  4685347111
  4752907436
  4754649864
  5597393292
  5045239474
  7315956639
  5450776998
  5271051812
  5465957702
  5975343440
  8376527413
  13842485115
  6778647585
  10304132184
  7243232125
  10511197176
  8821903939
  9014135855
  14287861641
  9050065060
  10847953382
  10721828810
  9263102799
  9330663124
  9507557300
  9439996975
  10350300728
  9799889338
  10316291286
  12781914341
  14464912853
  14781440122
  10737009514
  11441301142
  12753991025
  16683229100
  14021879710
  16286204885
  16065136064
  25024871155
  19330427141
  17871968999
  18064200915
  18380728184
  18313167859
  18593765923
  18703099774
  18770660099
  43795531254
  21087310242
  23518923855
  28380492201
  20116180624
  24223215483
  22178310656
  26222741264
  35664516625
  23491000539
  24195292167
  32335047569
  32969433985
  34879970808
  33937105063
  34129336979
  36906933782
  35936169914
  36185136858
  36377368774
  37473759873
  39790410016
  42112689778
  45310525725
  47714216022
  41203490866
  42294491280
  57192649468
  58363447514
  89527697037
  60408352341
  45669311195
  55826048108
  47686292706
  57164726152
  56530339736
  65304481554
  66906539048
  68066442042
  78230661194
  70314473837
  72121306772
  72313538688
  72562505632
  73851128647
  77264169889
  82084901296
  83316180644
  83497982146
  106077663536
  86872802061
  101495359303
  121130529662
  93355603901
  102199650931
  128139586796
  134972981090
  103512340814
  104851018858
  135618955391
  143535142748
  151564424188
  137221012885
  225415552835
  156060487778
  185597242110
  144434845460
  144876044320
  146413634279
  151115298536
  159349071185
  165582883442
  176671784545
  170370784207
  228328584991
  180228405962
  194850963204
  271674729544
  231651927610
  232990605654
  239823999948
  249925975093
  208363359672
  240469974249
  283634647164
  295999269648
  281655858345
  323085418824
  386237634227
  289310889780
  290848479739
  291289678599
  295991342856
  297528932815
  310464369721
  329719855392
  335953667649
  347042568752
  471076885701
  375079369166
  388591765634
  403214322876
  574924325763
  471475927558
  441353965326
  448833333921
  458289334765
  490019218017
  606455712577
  565290505509
  570966748125
  667893492572
  807030553350
  580159369519
  580600568379
  739167990525
  890187299247
  593520275671
  640184225113
  1042442675683
  665673523041
  1075121658174
  722121937918
  778293692042
  763671134800
  791806088510
  920309261479
  1155692741058
  899643300091
  1173679645190
  907122668686
  948308552782
  1055309723526
  1136257253634
  1145449875028
  1248494060951
  1371965458029
  1160759937898
  1174120844050
  1220784793492
  1259193798712
  1357191410471
  1385326364181
  2060403237989
  1387795460959
  1429344657841
  1500415629960
  1541964826842
  1555477223310
  1663314434891
  1847951852873
  2475786484789
  2814671022022
  2407538298646
  2169093346274
  1855431221468
  2003618276308
  3092659092732
  2281707128662
  2366234668520
  3859049497776
  2334880781948
  2381544731390
  2885741994141
  2479978592204
  2646989259671
  4335409813672
  2773121825140
  2817140118800
  2888211090919
  2971309484683
  3042380456802
  3205279261733
  4701115450468
  3511266287764
  5152020900748
  4236975952858
  4861523323594
  4024524567742
  4221665889988
  5451288076887
  4846213260724
  4616587910610
  5408615125322
  4716425513338
  7442255214591
  4814859374152
  6504503159946
  5685257853937
  5420111084811
  7832832808277
  9906923743925
  5930591547721
  5705351209719
  14128589633913
  6013689941485
  6247659718535
  11366026483540
  9433139693064
  9196524141701
  8641112478352
  8838253800598
  8246190457730
  8740950081080
  8938091403326
  10223474499474
  9333013423948
  11615849401658
  11113966335041
  14721783118077
  10828549315637
  10234970458963
  11105368938748
  11125462294530
  11719041151204
  11944281489206
  11635942757440
  11953010928254
  17373122013065
  15185751121861
  12261349660020
  29326132941319
  16887302936082
  16987140538810
  17084444258328
  21360432753493
  19371652752260
  17184281861056
  20693961009334
  18271104827274
  22179251948169
  26674794046331
  27319414717291
  21063519774600
  21340339397711
  35258245366084
  33304714242699
  28092509477558
  22761405051970
  29009064770505
  23580224246646
  28940151467064
  50666472339030
  29148652596102
  27447100781881
  62453366838801
  56468067313393
  62244865709763
  34071584797138
  34268726119384
  37642757579534
  35455386688330
  38247801635656
  56447978067553
  56598584763795
  42403859172311
  43824924826570
  61390999514429
  57848950366030
  65694902417537
  46341629298616
  50208505833851
  58216791740300
  72765076293634
  52520375713710
  77859245860641
  87365444336402
  63220237393240
  56595753377983
  61518685579019
  91923454001723`;

  const puzzle2 = `35
  20
  15
  25
  47
  40
  62
  55
  65
  95
  102
  117
  150
  182
  127
  219
  299
  277
  309
  576`

  const puzzleArr = puzzle.split('\n').map(s => s.trim());

  function getInvalidNumber(arr: string[], pre: number) {
    return arr.find((num, i) => {
      if (i < pre) {
        return false;
      }
  
      const map = {};
      for (let j = pre; j > 0; j--) {
        map[+num - +arr[i - j]] = true;
      }
      const isFailed = Array(pre).fill('').every((_, j) => {
        return !map[+arr[i - j]];
      })
  
      return isFailed;
    })
  }

  // part1
  const answer1 = getInvalidNumber(puzzleArr, 25)
  console.log('part1', answer1)

  // part2
  const answer2 = (function(){
    const invalidNumber = +answer1;

    function getList(target: number, arr: string[]) {
      if (!arr.length) {
        return 0;
      }

      const result: number[] = [];
      let sum = 0;
      arr.forEach((num) => {
        if (sum < target) {
          result.push(+num)
          sum += +num;
        }
      })

      return sum === target ? Math.max(...result) + Math.min(...result) : getList(target, arr.slice(1))
    } 

    return getList(invalidNumber, puzzleArr)
  }())
  console.log('part2', answer2)

  console.timeEnd();
}

day9();