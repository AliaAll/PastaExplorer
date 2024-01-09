//Version 1 
//Author: Alia Allegro.

var MAP_WIDTH  = 1000;
var MAP_HEIGHT = 1000;

var mapContainer = document.getElementById("map");
var map = new Raphael(mapContainer, MAP_WIDTH, MAP_HEIGHT);
var style = {
    fill: "#ddd",
    stroke: "#aaa",
    "stroke-width": 1,
    "stroke-linejoin": "round",
    cursor: "pointer",
  };
  
 
var regions = {};
regions["piemonte"] = map.path("m 155.49 305.92 c -1.4437 -0.59815 -2.1616 -0.6329 -4.4552 -0.21565 c -3.2447 0.59028 -5.6706 0.15651 -8.8733 -1.5866 c -3.0091 -1.6378 -4.776 -3.7533 -4.776 -5.7185 c 0 -0.86126 -0.31915 -2.1831 -0.70923 -2.9374 l -0.70923 -1.3715 l 2.4913 -2.5176 c 1.3702 -1.3847 2.4913 -2.8359 2.4913 -3.2249 c 0 -0.38903 -0.42278 -1.7246 -0.93951 -2.968 c -0.76467 -1.84 -1.2875 -2.4243 -2.8095 -3.1397 c -2.2392 -1.0525 -2.5941 -1.4694 -3.4691 -4.0742 c -0.3704 -1.1027 -0.80786 -2.3139 -0.97212 -2.6917 c -0.23632 -0.5435 0.37838 -0.88604 2.9451 -1.6412 c 1.7841 -0.52488 3.9447 -1.4258 4.8014 -2.0021 c 1.7337 -1.1663 3.0629 -3.4804 3.0955 -5.3891 c 0.0344 -2.0178 0.69792 -2.7593 3.6747 -4.1071 c 2.1202 -0.95989 3.4061 -1.253 5.2571 -1.1982 c 3.9748 0.11769 6.1313 -0.31422 7.5565 -1.5134 c 1.749 -1.4717 2.0815 -3.428 1.1077 -6.5172 c -0.43285 -1.3732 -0.64657 -2.9403 -0.48745 -3.5742 c 0.15585 -0.62094 1.4985 -2.5833 2.9836 -4.3609 c 3.7008 -4.4295 4.2112 -5.4851 3.4919 -7.2218 c -0.52297 -1.2626 -0.48368 -1.4181 0.5218 -2.0659 c 0.59805 -0.3853 1.6541 -1.2539 2.3468 -1.9302 c 0.6927 -0.67633 1.3194 -1.2297 1.3928 -1.2297 c 0.0733 0 0.2219 1.0682 0.33017 2.3738 c 0.13915 1.678 0.5471 2.833 1.3917 3.9403 c 0.65717 0.8616 1.1949 1.7912 1.1949 2.0657 c 0 0.55063 1.3811 1.3914 2.9943 1.8228 l 1.0416 0.27855 l -1.3022 1.7763 c -2.4505 3.3427 -3.4626 8.8386 -1.9031 10.335 c 0.45679 0.43835 1.2714 2.1394 1.8104 3.7802 c 0.53891 1.6407 1.3681 3.4767 1.8426 4.0799 c 1.1216 1.426 1.0879 1.902 -0.19466 2.7423 c -0.73904 0.48423 -1.5838 0.60864 -2.806 0.41322 c -1.3157 -0.21039 -1.8963 -0.10168 -2.3451 0.43914 c -0.96947 1.1682 -0.25976 4.9613 1.6319 8.7222 l 1.6807 3.3414 l 2.3925 0.24018 c 1.8482 0.18553 2.6084 0.49964 3.3414 1.3806 c 3.856 4.6345 5.6778 7.3139 6.0257 8.8621 c 0.46187 2.0557 0.0793 2.2272 -1.9582 0.87783 c -2.0266 -1.3422 -3.6736 -1.1702 -4.5873 0.47887 c -1.6364 2.9537 -1.603 2.9334 -3.4062 2.0735 c -1.5619 -0.74481 -1.6807 -0.73963 -3.4232 0.14932 c -1.0723 0.54706 -3.1004 1.0242 -4.9956 1.1752 c -3.4296 0.27335 -4.7498 0.7236 -4.7498 1.6199 c 0 0.31064 -0.80193 2.2231 -1.7821 4.2499 c -0.98013 2.0268 -1.7821 4.1763 -1.7821 4.7768 c 0 1.9277 -3.1974 2.5282 -6.399 1.2017 Z");
regions["lombardia"] = map.path("m 190.16 285.4 c -0.25817 -0.18003 -1.6124 -1.7714 -3.0095 -3.5364 c -3.2109 -4.0565 -5.2616 -5.6737 -6.7281 -5.3056 c -0.5956 0.14948 -1.3781 0.15851 -1.7389 0.02 c -0.75702 -0.29049 -2.7393 -4.5943 -3.1537 -6.8471 l -0.28156 -1.5307 l 1.0813 1.0158 c 0.72223 0.6785 1.3761 0.92225 1.9692 0.73403 c 1.0891 -0.34565 4.5342 -4.014 4.5342 -4.828 c 0 -0.32475 -0.57423 -1.3818 -1.2761 -2.3489 c -0.70184 -0.96715 -1.6253 -2.8611 -2.0522 -4.2088 c -0.42688 -1.3477 -1.2776 -3.2305 -1.8906 -4.1841 c -0.86439 -1.3447 -1.0563 -2.0921 -0.85527 -3.3309 c 0.31892 -1.9652 1.6266 -3.8001 2.8375 -3.9813 c 1.0839 -0.16221 2.7912 1.8105 2.7912 3.2252 c 0 1.9387 2.02 2.6645 3.8494 1.3831 c 0.74462 -0.52155 0.97316 -1.2672 1.1512 -3.7564 c 0.22701 -3.1727 0.80072 -4.6622 3.3646 -8.7357 c 0.77116 -1.2252 1.6376 -3.23 1.9254 -4.4552 c 0.28782 -1.2252 0.61301 -2.5283 0.72265 -2.8959 c 0.12525 -0.41988 0.59456 0.10245 1.2626 1.4052 c 1.2056 2.3512 2.9897 3.9494 4.3796 3.9233 c 0.51828 -0.01 2.0284 -0.60228 3.3558 -1.3168 c 1.3274 -0.71453 2.5545 -1.212 2.7269 -1.1054 c 0.17242 0.10656 0.42565 0.75456 0.56274 1.44 c 0.68422 3.4211 3.5652 4.6483 5.3318 2.2712 c 0.84443 -1.1362 0.84776 -1.2271 0.0918 -2.5069 c -0.72916 -1.2344 -0.73311 -1.4012 -0.0561 -2.3678 c 0.69871 -0.99755 0.67412 -1.0894 -0.60461 -2.2573 c -0.9296 -0.84906 -1.333 -1.6337 -1.333 -2.5931 c 0 -2.1824 1.0743 -2.1846 5.2241 -0.0106 c 4.3682 2.2884 4.8221 2.7192 4.1627 3.9514 c -0.26204 0.48962 -0.47643 2.7634 -0.47643 5.0528 c 0 3.2409 -0.17205 4.4065 -0.77701 5.2641 c -1.6018 2.2709 -0.24182 10.146 1.8937 10.966 c 0.39415 0.15125 1.5426 -0.0494 2.5521 -0.44599 c 1.0095 -0.39654 1.9133 -0.64317 2.0084 -0.54805 c 0.0951 0.0951 -0.46541 1.304 -1.2456 2.6864 c -1.9014 3.369 -2.2649 7.2185 -0.96021 10.168 c 1.1466 2.592 7.5409 9.3041 10.032 10.53 c 1.0271 0.50554 2.5295 1.4978 3.3387 2.205 l 1.4713 1.2858 l -4.8127 0.21773 c -4.1838 0.18929 -5.0537 0.10124 -6.6573 -0.67391 l -1.8447 -0.89165 l -1.3427 0.95611 c -1.7273 1.2299 -2.5613 1.2038 -5.5721 -0.1746 c -1.3584 -0.62189 -3.5052 -1.2533 -4.7708 -1.4032 c -2.0653 -0.2446 -2.3746 -0.4268 -3.0194 -1.779 c -0.91693 -1.9228 -2.0953 -2.2038 -5.5652 -1.3272 c -1.6481 0.41639 -2.8317 0.52758 -2.92 0.27431 c -0.25744 -0.73833 -2.91 -0.45922 -4.4273 0.46584 c -0.80143 0.48864 -2.0709 1.8411 -2.821 3.0056 c -1.2362 1.919 -1.3402 2.3569 -1.1114 4.6789 c 0.25156 2.5526 -0.0681 3.0917 -1.3171 2.2208 Z");
regions["bolzano"] = map.path("m 228.36 254.02 c -0.29404 -0.29404 -0.53462 -0.80436 -0.53462 -1.134 c 0 -0.32968 -0.49209 -1.0915 -1.0935 -1.693 c -1.2629 -1.2629 -3.2036 -1.4285 -5.121 -0.437 c -0.99265 0.51332 -1.3651 0.53762 -1.7072 0.11138 c -0.84009 -1.0468 -0.85888 -4.1171 -0.0442 -7.2279 c 0.44918 -1.7152 0.82141 -4.109 0.82718 -5.3194 c 0.006 -1.2104 0.25062 -3.3634 0.54411 -4.7843 c 0.51949 -2.5151 0.50272 -2.6162 -0.63296 -3.8137 c -1.1416 -1.2037 -3.0193 -5.9402 -3.0193 -7.616 c 0 -1.0595 1.6418 -3.1928 2.4572 -3.1928 c 0.33576 0 1.3152 0.41578 2.1765 0.92397 c 1.0376 0.6122 2.696 1.0094 4.9148 1.1772 l 3.3488 0.25326 l 0.90439 -2.1098 c 1.5633 -3.6471 3.2485 -4.3986 11.061 -4.9327 c 2.2806 -0.15591 5.5359 -0.66849 7.234 -1.1391 c 1.6981 -0.47058 3.1586 -0.8556 3.2454 -0.8556 s 0.39095 0.77793 0.67582 1.7287 c 0.30416 1.0152 1.7124 3.0608 3.4119 4.9561 c 1.5917 1.7751 2.894 3.3938 2.894 3.5973 c 0 0.67075 -3.2221 0.99736 -4.6709 0.47347 c -2.3259 -0.84106 -2.92 -0.64762 -3.64 1.1851 c -0.45269 1.1524 -1.2753 2.0622 -2.5738 2.8465 c -1.7058 1.0303 -1.9433 1.3827 -2.237 3.3183 c -0.53938 3.555 -0.43873 4.325 0.82743 6.3308 c 1.6185 2.5639 1.4109 3.6956 -0.79067 4.311 c -1.9079 0.53336 -2.9538 1.6487 -2.9538 3.15 c 0 0.89058 -0.1699 0.96346 -1.7515 0.75133 c -3.4319 -0.46032 -7.2256 2.3229 -8.4725 6.2158 c -0.87683 2.7374 -3.831 4.3741 -5.28 2.9251 Z");
regions["veneto"] = map.path("m 259.9 280.37 c -2.3651 -1.8358 -10.342 -2.209 -13.401 -0.62697 c -0.6913 0.35748 -1.6934 0.64997 -2.2268 0.64997 c -1.6116 0 -6.4906 -2.6581 -8.6869 -4.7328 c -1.1354 -1.0725 -2.2231 -1.95 -2.4171 -1.95 c -0.19401 0 -1.7267 -1.0538 -3.406 -2.3417 s -3.5967 -2.6907 -4.2608 -3.1173 c -2.1706 -1.3942 -3.2676 -7.1789 -1.9566 -10.317 c 0.82538 -1.9754 1.131 -2.1067 3.1935 -1.3718 c 0.96393 0.34341 2.6971 0.63318 3.8515 0.64394 c 2.5722 0.024 3.3778 -0.72326 4.5738 -4.2418 c 0.72162 -2.123 1.2444 -2.8115 3.2725 -4.3097 c 2.3441 -1.7317 2.4625 -1.767 4.109 -1.2236 c 2.2689 0.74882 2.9182 0.40682 3.2576 -1.716 c 0.25251 -1.5791 0.47874 -1.8476 1.9565 -2.3221 c 2.2426 -0.72001 3.1406 -1.5806 3.7413 -3.5853 c 0.4673 -1.5597 0.4007 -1.8334 -0.93109 -3.8257 c -1.2264 -1.8347 -1.4031 -2.4356 -1.2184 -4.1438 c 0.14935 -1.3813 0.51406 -2.2063 1.1817 -2.6731 c 0.5311 -0.37135 1.6294 -1.2265 2.4407 -1.9004 c 1.222 -1.015 1.903 -1.2252 3.969 -1.2252 c 1.3716 0 3.2739 -0.3121 4.2273 -0.69356 c 1.04 -0.4161 2.6908 -0.63889 4.1267 -0.55689 l 2.3934 0.13666 l -3.1332 3.3414 c -4.9776 5.3084 -5.5478 6.1227 -5.5478 7.9233 c 0 1.2598 0.35916 1.9855 1.623 3.2799 l 1.623 1.6622 l -0.732 1.5426 c -1.169 2.4636 -0.77634 4.6528 1.0699 5.9641 c 0.42318 0.30058 0.8904 1.0285 1.0383 1.6176 c 0.27815 1.1082 2.6252 2.5269 4.1327 2.498 c 0.45304 -0.009 1.3249 -0.3023 1.9375 -0.65249 c 0.61259 -0.35018 1.5495 -0.6438 2.082 -0.65248 c 1.3026 -0.0212 3.5532 1.9362 3.8178 3.3207 c 0.2537 1.3272 -0.36942 1.5099 -0.77639 0.22765 c -0.19882 -0.62645 -0.67408 -0.89104 -1.6005 -0.89104 c -1.1007 0 -1.3607 0.21496 -1.5788 1.3057 c -0.35608 1.7804 -1.452 2.852 -5.7572 5.6293 c -5.2136 3.3633 -6.8703 5.9375 -6.8768 10.685 c -0.001 0.99239 -0.24466 2.0465 -0.54066 2.3425 c -0.42055 0.42055 -0.0311 1.0516 1.7821 2.8876 c 2.3842 2.4142 2.8495 3.5823 1.6155 4.0558 c -0.84846 0.32559 -0.62609 0.39829 -1.9684 -0.64361 Z");
regions["friuli Venezia Gulia"] = map.path("m 276.4 251.03 c -0.72263 -1.7446 -1.5954 -1.9795 -5.9938 -1.6131 c -3.569 0.29729 -3.6608 0.27953 -4.8855 -0.94518 c -0.68648 -0.68648 -1.5354 -1.8036 -1.8865 -2.4826 c -0.56217 -1.0871 -0.55253 -1.4004 0.0808 -2.6251 c 0.96009 -1.8566 0.49984 -4.1645 -1.1619 -5.8263 l -1.2912 -1.2912 l 1.2891 -2.0946 c 0.76958 -1.2504 2.3356 -2.8152 3.8856 -3.8828 c 1.4281 -0.98349 2.797 -2.2449 3.042 -2.8031 c 0.24503 -0.5582 0.93759 -1.1388 1.539 -1.2902 c 1.023 -0.25758 12.71 0.47072 16.777 1.0455 l 1.8321 0.25893 l -3.1687 2.7626 c -2.418 2.1081 -3.2002 3.078 -3.3017 4.0943 c -0.1739 1.7404 1.4505 3.9018 2.689 3.578 c 0.86639 -0.22656 3.0299 0.50149 2.995 1.0079 c -0.01 0.14444 -0.6114 0.95674 -1.3366 1.8051 c -1.7951 2.1002 -1.7879 3.9092 0.0181 4.5388 c 0.7351 0.25625 1.3366 0.52207 1.3366 0.59069 c 0 0.0686 -0.33188 0.90106 -0.73752 1.8499 c -0.40564 0.94881 -0.70008 2.3767 -0.65432 3.173 c 0.0959 1.6686 0.13458 1.6601 -3.6252 0.78818 c -2.7014 -0.6265 -3.8018 -0.55268 -6.1685 0.41382 c -0.51537 0.21047 -0.87208 -0.0845 -1.2731 -1.0526 Z");
regions["valle d'Aosta"] = map.path("m 140.62 260.48 c -0.30629 -0.1137 -0.55689 -0.5176 -0.55689 -0.89756 c 0 -1.6232 -1.1417 -4.268 -2.5552 -5.9194 l -1.5211 -1.7771 l 1.2523 -0.47613 c 0.68877 -0.26187 3.2599 -0.77988 5.7136 -1.1511 c 2.4537 -0.37125 5.7186 -1.0599 7.2552 -1.5303 c 3.4917 -1.069 4.4248 -1.0686 6.182 0.003 c 1.6493 1.0057 2.3207 2.7578 2.4879 6.4928 l 0.11971 2.6731 l -4.0096 0.35826 c -2.2053 0.19704 -5.6135 0.73796 -7.5738 1.202 c -4.3782 1.0365 -6.0704 1.2912 -6.7941 1.0225 Z");
regions["liguria"] = map.path("m 151.2 317.19 c 0 -0.33447 0.91288 -1.8482 2.0286 -3.3638 s 2.2212 -3.2622 2.4565 -3.8812 c 0.26701 -0.70229 0.66498 -1.0346 1.0584 -0.8836 c 4.3232 1.659 7.822 -0.27223 7.822 -4.3175 c 0 -0.85689 0.56461 -2.3414 1.3788 -3.6252 c 0.75833 -1.1958 1.5539 -2.6346 1.7679 -3.1975 c 0.31789 -0.83612 0.62107 -0.97705 1.6565 -0.76997 c 0.79006 0.15801 2.5974 -0.19303 4.7992 -0.93214 c 3.2284 -1.0837 3.6282 -1.1287 4.6526 -0.52359 c 1.5914 0.94006 3.6139 0.0271 4.6154 -2.0833 c 1.0339 -2.1787 1.3311 -2.2659 2.9839 -0.87508 c 1.2501 1.0519 1.7744 1.1948 4.0542 1.1048 c 3.692 -0.1458 4.3868 0.33178 4.3868 3.0152 c 0 2.1145 0.0503 2.1965 1.8934 3.0899 c 1.9234 0.93222 9.2566 7.987 7.7601 7.4655 c -0.44885 -0.15643 -1.0673 -0.28442 -1.3744 -0.28442 c -0.30706 0 -2.2454 -1.0317 -4.3074 -2.2926 c -5.0999 -3.1187 -8.859 -4.9323 -13.172 -6.3548 c -5.0095 -1.6522 -6.751 -1.6612 -8.9026 -0.0456 c -3.1692 2.3795 -8.2592 7.5496 -10.313 10.475 c -3.7413 5.3296 -5.1141 6.3982 -9.9123 7.7154 c -4.0574 1.1139 -5.3328 1.2489 -5.3328 0.56449 Z");
regions["campania"] = map.path("m 338.59 435.39 c -1.4435 -1.2286 -3.1932 -2.3475 -3.8883 -2.4866 c -1.7457 -0.34914 -1.9905 -0.78941 -2.5363 -4.561 c -0.7913 -5.468 -4.2374 -11.178 -6.7465 -11.178 c -0.44134 0 -1.5222 0.30073 -2.4018 0.66828 c -2.5934 1.0836 -3.3957 0.88735 -4.1422 -1.013 c -1.0448 -2.6599 -3.2051 -3.857 -7.2961 -4.0431 l -3.4156 -0.15538 l -0.94321 -2.0722 c -0.51877 -1.1397 -1.8537 -3.7354 -2.9666 -5.7681 c -1.9359 -3.5362 -1.995 -3.7508 -1.367 -4.9653 c 0.36103 -0.69816 0.78873 -2.0968 0.95044 -3.1081 c 0.34784 -2.1753 0.84144 -2.6293 1.5069 -1.3859 c 0.79195 1.4798 2.1114 1.1089 3.1253 -0.87856 c 0.50002 -0.98014 1.2343 -1.7821 1.6318 -1.7821 c 0.39744 0 2.3481 0.67928 4.3347 1.5095 c 1.9867 0.83024 3.9286 1.6127 4.3155 1.7388 c 1.1944 0.38937 4.9287 -0.52074 7.9632 -1.9408 c 2.7086 -1.2675 2.931 -1.3046 3.4626 -0.57762 c 0.31244 0.4273 0.57475 1.0894 0.5829 1.4714 c 0.0187 0.87442 1.179 2.2413 2.7772 3.2716 c 1.0121 0.65247 1.1516 0.94617 0.77966 1.6412 c -0.82488 1.5413 -0.51328 2.6636 0.99487 3.5831 c 0.79637 0.48555 1.9742 0.88357 2.6174 0.88448 c 2.0366 0.003 4.0223 0.55246 4.2631 1.1798 c 0.46541 1.2128 -0.30356 2.7211 -1.6775 3.2902 c -1.7519 0.72565 -2.2822 2.0853 -1.6744 4.2927 c 0.56526 2.0527 2.398 5.7653 3.0428 6.1638 c 0.25435 0.1572 0.95054 1.249 1.5471 2.4262 c 0.59654 1.1772 2.194 3.5187 3.55 5.2033 c 1.6002 1.988 2.4674 3.4809 2.471 4.2539 c 0.007 1.5444 -1.8966 3.7902 -3.5146 4.1456 c -0.69771 0.15324 -1.7296 0.76943 -2.2932 1.3693 c -0.56356 0.59987 -1.3405 1.0828 -1.7266 1.0732 c -0.3861 -0.01 -1.883 -1.0227 -3.3266 -2.2513 Z");
regions["puglia"] = map.path("m 410.71 437.22 c -2.0138 -1.0036 -3.5482 -3.0441 -4.0217 -5.3484 c -0.43823 -2.1324 -2.1221 -5.3565 -3.4388 -6.5841 c -0.89905 -0.83826 -1.8578 -1.0845 -5.5017 -1.4133 c -6.6267 -0.59791 -11.364 -1.8468 -9.6477 -2.5432 c 0.3063 -0.12429 0.5569 -0.70665 0.5569 -1.2942 c 0 -1.3823 -1.3481 -1.7336 -5.3615 -1.3972 c -2.881 0.24153 -4.31 0.75689 -6.5266 2.3538 c -0.92537 0.66664 -1.0071 0.63493 -1.6706 -0.64815 c -0.3837 -0.74199 -0.91808 -2.4116 -1.1875 -3.7103 c -0.66234 -3.1924 -1.4124 -4.2328 -3.5034 -4.8593 c -1.495 -0.44792 -2.089 -0.40792 -3.8329 0.25805 l -2.0637 0.78812 l -2.5175 -2.4844 c -1.3847 -1.3664 -3.2615 -2.7934 -4.1707 -3.171 c -1.3413 -0.5571 -1.7438 -1.0233 -2.1337 -2.4712 c -0.81984 -3.0447 -1.5274 -3.2482 -10.002 -2.8771 c -8.5065 0.37256 -8.7126 0.30711 -8.378 -2.6613 c 0.20981 -1.8614 0.14705 -1.9946 -1.2808 -2.7185 c -2.1101 -1.0696 -3.0608 -1.992 -3.0608 -2.9694 c 0 -0.46259 -0.91921 -1.8238 -2.0427 -3.0249 c -2.1681 -2.3179 -2.3651 -3.6875 -0.61026 -4.2444 c 1.6335 -0.51846 2.2072 -1.5354 2.2135 -3.9237 c 0.009 -3.3204 0.33993 -4.1872 1.705 -4.4626 c 0.65162 -0.13148 5.056 -0.58258 9.7875 -1.0024 c 8.4681 -0.75147 8.621 -0.74974 9.7733 0.11055 c 0.64382 0.48068 1.2494 1.1104 1.3457 1.3994 s -0.91636 1.6802 -2.2504 3.0915 c -1.3341 1.4113 -2.6533 3.004 -2.9315 3.5392 c -1.1391 2.1908 -0.2726 4.8087 2.2477 6.7912 c 2.236 1.7589 12.92 6.1031 22.641 9.2063 c 4.5054 1.4382 6.0185 2.2085 14.219 7.2382 c 2.062 1.2648 4.0774 2.2995 4.4787 2.2995 c 1.1863 0 7.6246 3.301 10.123 5.19 c 4.5762 3.4604 10.741 9.4908 11.658 11.403 l 0.9086 1.8954 l -0.88589 3.7717 c -0.78056 3.3232 -1.7654 5.3622 -2.5896 5.3611 c -0.1458 -0.00019 -1.067 -0.40002 -2.0472 -0.8885 Z");
regions["basilicata"] = map.path("m 358.05 438.73 c -1.0891 -1.1777 -3.5506 -1.437 -5.7398 -0.60467 c -2.1295 0.80962 -2.3309 -0.0706 -0.92454 -4.041 c 0.76012 -2.1459 1.1373 -3.9074 0.95774 -4.473 c -0.16288 -0.51319 -1.4863 -2.2464 -2.9409 -3.8514 c -1.4546 -1.6051 -3.5776 -4.5937 -4.7178 -6.6414 c -1.1402 -2.0476 -2.4372 -3.8386 -2.8824 -3.9798 c -1.3778 -0.43729 -0.96153 -2.2791 0.99467 -4.4014 c 1.1537 -1.2516 1.8992 -2.544 2.0682 -3.5854 c 0.32991 -2.033 1.4312 -2.7849 4.6296 -3.1608 c 2.7614 -0.32454 3.9728 0.35423 3.9728 2.226 c 0 1.2092 0.9851 2.1618 3.167 3.0624 c 0.88421 0.36497 2.9594 1.8886 4.6115 3.3858 s 3.2803 2.7222 3.6181 2.7222 c 0.33789 0 1.4056 -0.3166 2.3727 -0.70356 c 2.9157 -1.1666 3.6824 -0.79987 4.2648 2.0401 c 0.27635 1.3477 0.89272 3.1281 1.3697 3.9564 c 0.47699 0.82836 1.0978 1.9041 1.3796 2.3905 c 0.58544 1.0107 -0.0484 3.3069 -1.753 6.3503 c -0.8384 1.4969 -1.4045 1.9144 -3.5379 2.609 c -2.507 0.81629 -2.55 0.85942 -3.3358 3.3414 c -0.70669 2.2323 -1.019 2.6269 -2.7838 3.5168 c -2.4646 1.2428 -3.5271 1.2077 -4.7904 -0.15843 Z");
regions["calabria"] = map.path("m 353.96 502.32 c -0.68962 -0.68962 -0.9475 -1.5011 -0.9475 -2.9816 c 0 -2.3102 0.46444 -3.4093 2.2467 -5.3169 c 2.288 -2.4489 3.8494 -9.127 2.6556 -11.358 c -0.69557 -1.2997 -0.094 -2.124 2.1539 -2.9513 c 2.6845 -0.988 3.9984 -2.1661 5.0669 -4.543 l 0.86416 -1.9224 l -1.7913 -2.9783 c -2.1145 -3.5157 -2.4253 -4.2933 -3.6442 -9.1165 c -0.59948 -2.3722 -1.7701 -5.1548 -3.3216 -7.8956 c -3.3266 -5.8766 -5.7175 -13.366 -4.2671 -13.366 c 0.22472 0 1.3446 0.40124 2.4887 0.89165 c 3.6337 1.5576 8.4653 1.5988 10.79 0.0921 c 0.29958 -0.19416 0.80079 -1.6477 1.1138 -3.2301 c 0.62301 -3.1497 1.5553 -3.8123 2.3169 -1.6466 c 0.3177 0.90339 0.21465 2.1063 -0.38764 4.525 c -0.9913 3.9808 -0.7518 6.656 0.72272 8.0727 c 0.56963 0.54726 2.348 1.4216 3.9519 1.9429 c 3.7844 1.23 8.3756 3.9434 9.3438 5.5222 c 0.8881 1.4481 1.8655 6.6886 1.9428 10.417 l 0.0537 2.5913 l -2.0048 0.56573 c -4.4308 1.2503 -6.4755 2.0334 -8.0777 3.0937 c -2.9024 1.9207 -3.1976 2.7408 -3.2481 9.0236 c -0.0501 6.2377 -0.37866 7.2581 -2.6412 8.2034 c -2.5329 1.0583 -5.2547 5.1416 -6.1216 9.1836 c -0.60795 2.8348 -1.6758 3.596 -5.4723 3.9007 c -2.4781 0.19891 -2.9598 0.10737 -3.7868 -0.71959 Z");
regions["sicilia"] = map.path("m 330.74 543.24 c -4.5068 -0.61606 -6.6926 -2.0811 -9.4007 -6.301 c -1.5946 -2.4848 -2.8916 -3.1561 -8.9571 -4.6364 c -6.6923 -1.6332 -9.8696 -2.7573 -11.851 -4.1927 c -0.96671 -0.70028 -2.6346 -1.7194 -3.7064 -2.2647 c -1.0718 -0.54529 -3.1152 -1.8875 -4.5409 -2.9826 c -3.2461 -2.4935 -9.859 -4.9222 -14.469 -5.3142 c -2.4866 -0.21141 -3.351 -0.46462 -3.6791 -1.0777 c -0.23588 -0.44075 -0.97858 -1.064 -1.6505 -1.3851 c -1.1346 -0.54215 -1.2311 -0.8031 -1.3551 -3.6638 c -0.16461 -3.7982 0.39536 -5.223 2.7264 -6.9373 c 2.207 -1.623 2.8193 -1.6515 4.7582 -0.22102 c 0.83031 0.61258 1.9423 1.1138 2.471 1.1138 c 1.3272 0 3.777 -1.7417 4.6343 -3.2947 c 0.53682 -0.97245 1.2577 -1.43 2.9292 -1.8592 c 2.3517 -0.60387 2.7043 -0.49444 2.9591 0.91823 c 0.12207 0.67691 0.68783 0.98243 2.3822 1.2864 c 1.2222 0.21927 2.3929 0.69052 2.6016 1.0472 c 0.54745 0.93552 4.7338 2.7845 6.3032 2.7839 c 0.7351 -0.00026 2.339 -0.30501 3.5641 -0.67722 c 1.2252 -0.37221 4.7271 -0.88017 7.782 -1.1288 c 7.9931 -0.6505 11.97 -1.7008 13.225 -3.4928 c 0.50164 -0.7162 1.3308 -0.86054 5.8274 -1.0145 l 5.2426 -0.17946 l 3.7865 -2.1267 c 2.0826 -1.1697 4.1388 -2.4455 4.5693 -2.8351 c 2.7486 -2.4874 -0.20274 4.5111 -5.0998 12.093 c -0.93586 1.449 -1.9082 3.4538 -2.1607 4.4552 c -0.25252 1.0013 -0.99459 3.475 -1.649 5.497 c -1.0792 3.3345 -1.1392 3.866 -0.64461 5.7152 c 0.29991 1.1213 1.0431 2.7713 1.6515 3.6667 c 0.60841 0.89535 1.1062 1.989 1.1062 2.4303 c 0 0.44133 0.50607 1.8011 1.1246 3.0217 l 1.1246 2.2193 l -1.7862 2.9616 c -0.98243 1.6289 -1.9128 3.6362 -2.0675 4.4608 c -0.44528 2.3735 -1.8513 2.7208 -7.7513 1.9142 Z");
regions["molise"] = map.path("m 314.7 391.68 c -2.9575 -1.3786 -5.2446 -1.74 -7.0029 -1.1066 c -0.81135 0.29227 -1.0344 0.16927 -1.2499 -0.68936 c -0.3704 -1.4758 0.38764 -3.1791 2.563 -5.7588 c 1.7108 -2.0289 1.8087 -2.2719 1.0796 -2.68 c -0.76056 -0.42563 -0.76221 -0.49254 -0.032 -1.2994 c 1.4697 -1.624 3.8156 -0.84127 4.8422 1.6157 c 1.1014 2.6361 1.5602 2.3327 6.2377 -4.1264 c 2.1587 -2.9809 3.2196 -3.5339 5.8374 -3.0428 c 2.1998 0.41268 3.3134 2.3387 3.3155 5.7345 c 0.002 2.7482 -0.54433 4.3145 -1.5043 4.3145 c -0.32095 0 -0.93833 0.39202 -1.3719 0.87116 c -0.76421 0.84445 -0.77245 1.0774 -0.16559 4.684 c 0.1195 0.71017 -0.36138 1.0657 -2.5255 1.867 c -3.7266 1.3799 -6.4654 1.2751 -10.023 -0.38338 Z");
regions["sardegna"] = map.path("m 180.07 476.71 c -2.3466 -1.5924 -3.6317 -3.1613 -5.28 -6.4459 c -1.2455 -2.4818 -1.4331 -3.2996 -1.3853 -6.0376 c 0.0626 -3.5835 1.1819 -8.9014 2.2008 -10.456 c 0.37452 -0.5716 0.79733 -2.4275 0.93958 -4.1242 c 0.28113 -3.3533 -0.33833 -5.0206 -2.0694 -5.57 c -1.2815 -0.40673 -1.6457 -1.9517 -0.63439 -2.6912 c 0.69795 -0.51032 0.82321 -1.2388 0.82321 -4.7876 c 0 -2.9618 -0.22393 -4.705 -0.76586 -5.9619 c -0.42123 -0.9769 -0.97523 -2.6047 -1.2311 -3.6174 c -0.25588 -1.0127 -1.4756 -3.21 -2.7105 -4.8828 c -4.0852 -5.5341 -3.7291 -6.6861 2.0732 -6.7072 c 3.6443 -0.0133 4.2557 -0.15014 7.3301 -1.6409 c 2.5738 -1.248 4.1066 -2.4154 6.5878 -5.0169 c 1.7785 -1.8647 3.5493 -3.3904 3.9351 -3.3904 c 0.38652 0 1.0603 -0.80125 1.5004 -1.7844 l 0.79889 -1.7844 l 1.0461 1.1135 c 0.57536 0.61245 1.2921 1.1135 1.5927 1.1135 c 0.61573 0 3.3226 2.9275 3.3226 3.5934 c 0 0.23742 0.42263 0.8543 0.93918 1.3708 c 0.68304 0.68304 0.80501 1.0734 0.44723 1.4311 c -0.83251 0.8325 -0.55523 1.7266 1.0056 3.2424 c 1.5095 1.466 5.3101 9.791 5.2745 11.553 c -0.009 0.46327 -0.85314 2.2746 -1.8751 4.0251 c -2.4431 4.185 -2.6758 5.8934 -1.1559 8.4869 l 1.1694 1.9954 l -0.6896 7.9782 c -0.37927 4.388 -1.0009 9.7895 -1.3814 12.003 c -0.38049 2.2138 -0.84885 5.1622 -1.0408 6.5519 c -0.19195 1.3898 -0.48582 2.7482 -0.65303 3.0188 c -0.4892 0.79154 -1.6269 0.57216 -3.1813 -0.61341 c -2.0368 -1.5536 -4.6385 -1.8835 -7.1848 -0.91103 c -2.2295 0.85146 -2.9336 1.9519 -3.5175 5.4979 c -0.37873 2.2997 -2.1484 4.5686 -3.5633 4.5686 c -0.55875 0 -1.759 -0.5043 -2.6673 -1.1207 Z");
regions["lazio"] = map.path("m 290.49 398.63 c -0.73793 -0.2249 -2.8102 -0.27962 -4.6051 -0.12158 c -3.0642 0.2698 -3.3372 0.21877 -4.4723 -0.83601 c -0.6649 -0.61784 -3.0151 -2.1055 -5.2227 -3.306 c -2.6636 -1.4485 -4.9954 -3.1656 -6.9321 -5.1047 c -1.6051 -1.6071 -3.8584 -3.6704 -5.0073 -4.5851 c -1.3245 -1.0544 -2.1958 -2.1494 -2.3809 -2.992 c -0.42522 -1.936 -3.8397 -5.4995 -7.0931 -7.4026 c -2.5722 -1.5047 -3.0392 -2.0231 -5.1705 -5.7402 c -3.5285 -6.154 -3.5568 -7.4694 -0.25217 -11.725 c 1.12 -1.4423 2.1422 -3.1311 2.2716 -3.7529 c 0.1294 -0.62182 0.32918 -1.5916 0.44394 -2.1552 c 0.29905 -1.4684 1.0769 -0.75932 1.0769 0.98164 c 0 1.8865 1.2663 3.043 3.6893 3.3692 c 1.5876 0.21377 2.0652 0.54509 3.1802 2.2061 c 0.72165 1.075 1.971 2.3434 2.7764 2.8186 c 0.80537 0.47519 1.9936 1.5578 2.6404 2.4059 c 1.8401 2.4125 2.8998 2.1473 8.0626 -2.0183 c 4.0129 -3.2378 5.4492 -4.1962 7.3793 -4.924 c 0.86092 -0.32467 2.3418 -1.1918 3.2908 -1.927 c 1.3845 -1.0725 1.803 -1.2143 2.1175 -0.71766 c 0.64478 1.0181 0.47955 1.3046 -1.1435 1.9828 c -3.3016 1.3795 -3.3227 4.7691 -0.0742 11.941 l 1.1647 2.5714 l -2.201 -0.0958 c -2.9019 -0.12626 -4.0488 0.84651 -4.0488 3.4342 c 0 2.3597 0.67852 3.1961 2.8568 3.5216 c 2.4109 0.36024 5.1151 2.3289 5.5606 4.0482 c 0.25988 1.0029 0.72534 1.4981 1.6735 1.7803 c 0.72241 0.21506 1.8549 0.67255 2.5167 1.0167 c 0.77189 0.40135 1.8229 0.52656 2.9317 0.34925 c 2.1927 -0.35063 5.3576 1.0552 7.2642 3.2266 c 1.6632 1.8943 1.6917 3.0255 0.13363 5.3124 c -0.66733 0.97951 -1.4425 2.6866 -1.7226 3.7935 c -0.34362 1.3579 -0.85816 2.1922 -1.5819 2.565 c -1.2328 0.63496 -7.1319 0.68658 -9.1227 0.0798 Z");
regions["abruzzo"] =map.path("m 300.55 382.05 c -2.2738 -1.0533 -3.3313 -1.3004 -4.8552 -1.1345 c -1.8468 0.20108 -2.1263 0.0675 -5.3668 -2.5652 c -1.8802 -1.5275 -4.3745 -3.3356 -5.5429 -4.018 c -3.1813 -1.858 -2.8674 -2.7155 0.91762 -2.5064 c 1.7749 0.0981 3.6665 -1.0331 3.6665 -2.1925 c 0 -0.46157 -0.70118 -1.8812 -1.5582 -3.1547 c -1.4784 -2.1969 -2.9141 -5.9696 -2.9141 -7.6577 c 0 -0.50657 0.69048 -1.04 1.9873 -1.5352 c 1.5736 -0.60096 2.1694 -1.144 2.8619 -2.6086 c 1.136 -2.4024 2.2208 -3.3689 6.5414 -5.8278 l 3.5641 -2.0284 l 1.7325 3.3193 c 0.95287 1.8256 2.9861 4.7871 4.5182 6.5811 c 3.7682 4.4122 10.222 10.386 12.248 11.338 c 2.0012 0.94006 2.3094 1.3581 2.3182 3.145 c 0.008 1.632 -2.4856 6.8465 -3.4514 7.2171 c -0.36915 0.14166 -1.716 -0.30762 -2.993 -0.9984 c -3.2522 -1.7593 -4.0364 -1.4425 -6.6171 2.6729 c -2.4567 3.9177 -2.6827 3.9803 -7.0569 1.9539 Z");
regions["marche"] = map.path("m 286.72 348.19 c -1.2031 -2.3834 -1.482 -2.6476 -3.0606 -2.9001 c -2.2174 -0.35457 -4.5104 -1.8997 -5.6078 -3.7788 c -0.4727 -0.80938 -1.3514 -3.4087 -1.9526 -5.7763 c -1.6091 -6.3368 -2.7782 -8.3475 -5.1577 -8.8701 c -2.1055 -0.46245 -6.9569 -2.8648 -7.2318 -3.5811 c -0.1365 -0.35572 -0.6749 -0.64676 -1.1964 -0.64676 c -0.92077 0 -0.91469 -0.0399 0.20958 -1.376 c 1.3415 -1.5943 1.3688 -1.7424 0.53223 -2.8864 c -0.47995 -0.65638 -1.1047 -0.83471 -2.6834 -0.766 c -1.1318 0.0493 -2.0578 -0.0626 -2.0578 -0.24848 c 0 -0.74706 1.474 -2.3715 2.7513 -3.032 c 1.2907 -0.66743 1.4334 -0.64709 2.9916 0.42644 c 0.89999 0.62001 2.6007 1.383 3.7793 1.6956 c 2.5385 0.67322 3.248 0.36234 4.595 -2.0135 l 0.92397 -1.6297 l 4.0931 3.268 c 2.2512 1.7974 5.9352 4.3584 8.1867 5.6911 c 4.5276 2.68 5.9101 4.1107 8.2201 8.5067 c 1.9776 3.7633 4.8078 12.166 4.625 13.732 c -0.12127 1.0383 -0.56689 1.3463 -3.4932 2.4146 c -2.382 0.8696 -3.7568 1.6837 -4.7433 2.8089 c -0.76399 0.87138 -1.6164 1.5843 -1.8943 1.5843 c -0.27786 0 -1.1009 -1.18 -1.8289 -2.6223 Z");
regions["umbria"] = map.path("m 267.01 360.21 c -0.77927 -0.98391 -1.8012 -1.7889 -2.2709 -1.7889 c -0.4987 0 -1.4056 -0.79086 -2.1796 -1.9007 c -0.72906 -1.0454 -1.5856 -2.2631 -1.9035 -2.706 c -0.33386 -0.46514 -1.2391 -0.84743 -2.1433 -0.90513 c -2.0489 -0.13075 -2.6834 -0.57097 -2.6834 -1.8619 c 0 -0.58285 -0.31104 -1.3708 -0.6912 -1.7509 c -0.54769 -0.54768 -0.6034 -1.0418 -0.26831 -2.3799 c 0.2326 -0.92878 0.54769 -3.1762 0.7002 -4.9943 c 0.35575 -4.2408 1.2079 -6.0685 3.0779 -6.6015 c 1.8553 -0.52884 2.1371 -2.2455 0.70005 -4.2637 c -0.68577 -0.96307 -0.83993 -1.4807 -0.47703 -1.6016 c 0.2949 -0.0983 0.53927 -0.71541 0.54303 -1.3713 c 0.014 -2.4351 0.47358 -2.5348 4.423 -0.95876 c 2.0038 0.79961 3.7506 1.6276 3.8818 1.8399 c 0.13122 0.21232 0.69476 0.38604 1.2523 0.38604 c 1.0412 0 2.4632 1.2675 3.3464 2.9828 c 0.74443 1.4458 3.0815 8.6241 3.4287 10.531 c 0.40729 2.2372 2.0291 3.9278 3.768 3.9278 c 0.89967 0 1.6979 0.38169 2.3382 1.1181 c 0.53469 0.61494 1.2377 1.1181 1.5624 1.1181 c 0.3246 0 0.59019 0.26423 0.59019 0.58717 c 0 1.0966 -2.4796 2.9687 -5.1479 3.8868 c -1.4622 0.50308 -3.2669 1.4784 -4.0103 2.1674 c -0.74343 0.68901 -2.2075 1.9089 -3.2536 2.7109 c -1.046 0.80199 -2.0238 1.944 -2.1728 2.5378 c -0.3719 1.4818 -0.76681 1.3656 -2.4101 -0.70932 Z");
regions["toscana"] = map.path("m 238.98 361.32 c -1.0417 -0.43977 -1.7352 -1.2582 -2.581 -3.0463 c -1.3422 -2.8371 -5.5538 -7.2218 -7.6727 -7.988 c -1.334 -0.48237 -1.4552 -0.68179 -1.3911 -2.2886 c 0.0565 -1.4178 -0.17099 -1.9676 -1.1699 -2.8269 c -0.68718 -0.59109 -1.8154 -1.0667 -2.5304 -1.0667 c -1.6788 0 -1.8686 -0.38066 -1.9679 -3.9469 c -0.0701 -2.5188 -0.40948 -3.6837 -2.1724 -7.4574 c -2.6264 -5.6221 -3.2898 -7.5152 -4.3753 -12.486 c -1.0508 -4.812 -2.2598 -7.4411 -4.155 -9.0354 c -0.78026 -0.65635 -1.6484 -1.7176 -1.9291 -2.3584 c -0.28075 -0.64076 -1.9411 -2.7517 -3.6896 -4.6911 c -1.7486 -1.9393 -3.1792 -3.7697 -3.1792 -4.0676 c 0 -0.68364 1.4535 -2.0218 2.1961 -2.0218 c 0.3082 0 1.3992 0.6756 2.4245 1.5013 c 1.0253 0.82573 3.3736 2.3621 5.2184 3.4142 s 4.3605 2.658 5.5904 3.5688 c 3.6341 2.6911 4.1314 2.8761 5.4346 2.0223 c 1.0489 -0.68727 1.1834 -0.6857 1.9664 0.0229 c 2.2517 2.0377 9.2222 1.4137 12.875 -1.1527 c 2.2764 -1.5995 2.761 -1.5196 5.9175 0.97546 c 1.5242 1.2048 2.187 2.0215 2.0116 2.4786 c -0.53061 1.3828 0.62746 4.0776 2.3277 5.4166 c 2.4485 1.9283 6.0863 3.6457 8.3915 3.9617 c 1.1121 0.15243 2.1243 0.44274 2.2494 0.64514 c 0.24293 0.39307 -1.4004 3.7774 -2.9095 5.9919 c -1.2099 1.7755 -1.1572 3.0039 0.19786 4.6144 c 1.4453 1.7176 1.409 2.1288 -0.23895 2.7033 c -1.9699 0.68673 -2.668 2.7326 -2.668 7.8191 c 0 4.4964 -0.17605 4.9027 -2.3622 5.4514 c -1.5855 0.39794 -2.1084 1.4086 -2.1169 4.092 c -0.008 2.4776 -0.0872 2.6233 -2.3411 4.3034 c -1.4394 1.0729 -1.6771 1.4982 -1.6771 3.0005 c 0 1.2166 -0.23871 1.8724 -0.78265 2.1504 c -1.5157 0.7746 -3.4813 0.89537 -4.8904 0.30048 Z");
regions["emilia-Romagna"] = map.path("m 252.64 316.82 c -1.9492 -1.03 -3.9674 -3.3178 -3.9674 -4.4975 c 0 -0.46955 0.23882 -1.7467 0.53072 -2.838 c 0.60535 -2.2633 0.0749 -3.395 -1.5918 -3.3956 c -0.52333 -0.0002 -2.2274 -0.60396 -3.7868 -1.3417 s -3.281 -1.3413 -3.8257 -1.3413 c -0.54469 0 -1.9857 0.63732 -3.2023 1.4163 c -1.5812 1.0124 -2.9133 1.4744 -4.6717 1.62 c -1.3529 0.11206 -2.6944 0.39094 -2.9811 0.61973 c -0.32985 0.26319 -1.4229 0.15389 -2.9759 -0.2976 c -1.35 -0.39247 -2.9577 -0.58732 -3.5726 -0.433 c -0.87147 0.21872 -1.4971 -0.0596 -2.838 -1.2625 c -0.94607 -0.84868 -3.8333 -2.6835 -6.416 -4.0774 c -2.5828 -1.3939 -5.0649 -3.0309 -5.5159 -3.6378 c -0.67118 -0.90321 -1.1986 -1.1008 -2.907 -1.0892 c -1.1479 0.008 -2.4777 0.30971 -2.9552 0.67085 c -1.6651 1.2594 -4.275 0.37361 -4.275 -1.4509 c 0 -1.4426 -1.9188 -3.916 -3.146 -4.0553 c -0.60649 -0.0689 -1.5928 -0.23299 -2.1918 -0.36472 l -1.089 -0.23952 l 1.089 -0.54165 c 1.0137 -0.50418 1.1102 -0.85939 1.3944 -5.1328 c 0.21542 -3.2391 0.55165 -5.0129 1.1417 -6.0232 c 1.015 -1.7379 2.9073 -2.5362 4.159 -1.7546 c 1.1927 0.74484 4.1026 0.67968 5.1538 -0.1154 c 1.2869 -0.97337 1.8481 -0.83016 2.3462 0.59869 c 0.35377 1.0148 0.80795 1.3495 2.1681 1.5976 c 0.94631 0.17259 3.4921 1.018 5.6572 1.8788 c 5.5699 2.2142 6.6539 2.3318 7.8206 0.84857 c 0.7352 -0.93466 1.1149 -1.102 1.7467 -0.77005 c 0.44403 0.2333 4.4299 0.54439 8.8575 0.69132 c 4.4276 0.14692 9.2789 0.39366 10.781 0.54829 c 2.482 0.25557 2.9008 0.16854 4.5996 -0.95569 l 1.869 -1.2369 l 3.7026 0.55086 c 2.0364 0.30298 3.9269 0.68946 4.201 0.85886 c 0.28791 0.17794 0.7112 3.0437 1.0024 6.7863 c 0.86924 11.172 1.9857 14.28 7.119 19.817 c 1.7119 1.8463 3.4426 3.9952 3.8461 4.7754 c 0.69301 1.3401 0.6894 1.4101 -0.0653 1.2647 c -0.43939 -0.0846 -1.0899 -0.75619 -1.4455 -1.4924 c -0.35566 -0.73618 -0.79212 -1.6404 -0.96993 -2.0094 c -0.41227 -0.85548 -3.0142 -0.80198 -5.2541 0.10803 c -0.9116 0.37036 -2.2486 0.85017 -2.9712 1.0663 c -0.99726 0.29824 -1.6191 1.0122 -2.5814 2.9635 c -0.69724 1.4138 -1.5148 2.5617 -1.8169 2.5509 c -0.30204 -0.0109 -1.2795 -0.40568 -2.1721 -0.87737 Z");

for(var regionName in regions) {
    regions[regionName].attr(style);
}
var animationSpeed = 500;
var hoverStyle = {
  fill: "#D3B552"
}

function direct(regionName){
  location.href = regionName.toLowerCase() +'.html';
}


for(var regionName in regions) {
    (function (region) {
        region.attr(style);
        region.node.id = regionName
        ;

        region[0].addEventListener("mouseover", function() {
            region.animate(hoverStyle, animationSpeed);
        }, true);

        region[0].addEventListener("mouseout", function() {
          region.animate(style, animationSpeed);
        }, true);

        region[0].addEventListener("click",function() {
          direct(region.node.id);
          console.log(region.node.id);
        });

    })(regions[regionName]);
}


