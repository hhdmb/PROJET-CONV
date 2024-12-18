function convertir() {
    var valeur = parseFloat(document.getElementById("valeur").value);
    var uniteBase = document.getElementById("unitéBASE").value;
    var uniteArriver = document.getElementById("unitéARRIVER").value;
    var resultat;

    if (uniteBase == "1" && uniteArriver == "1") {
        resultat = valeur; // Mètre à Mètre
    } else if (uniteBase == "1" && uniteArriver == "2") {
        resultat = valeur / 1000; // Mètre à Kilomètre
    } else if (uniteBase == "1" && uniteArriver == "3") {
        resultat = valeur * 100; // Mètre à Centimètre
    } else if (uniteBase == "1" && uniteArriver == "4") {
        resultat = valeur * 1000; // Mètre à Millimètre
    } else if (uniteBase == "2" && uniteArriver == "1") {
        resultat = valeur * 1000; // Kilomètre à Mètre
    } else if (uniteBase == "2" && uniteArriver == "2") {
        resultat = valeur; // Kilomètre à Kilomètre
    } else if (uniteBase == "2" && uniteArriver == "3") {
        resultat = valeur * 100000; // Kilomètre à Centimètre
    } else if (uniteBase == "2" && uniteArriver == "4") {
        resultat = valeur * 1000000; // Kilomètre à Millimètre
    } else if (uniteBase == "3" && uniteArriver == "1") {
        resultat = valeur / 100; // Centimètre à Mètre
    } else if (uniteBase == "3" && uniteArriver == "2") {
        resultat = valeur / 100000; // Centimètre à Kilomètre
    } else if (uniteBase == "3" && uniteArriver == "3") {
        resultat = valeur; // Centimètre à Centimètre
    } else if (uniteBase == "3" && uniteArriver == "4") {
        resultat = valeur * 10; // Centimètre à Millimètre
    } else if (uniteBase == "4" && uniteArriver == "1") {
        resultat = valeur / 1000; // Millimètre à Mètre
    } else if (uniteBase == "4" && uniteArriver == "2") {
        resultat = valeur / 1000000; // Millimètre à Kilomètre
    } else if (uniteBase == "4" && uniteArriver == "3") {
        resultat = valeur / 10; // Millimètre à Centimètre
    } else if (uniteBase == "4" && uniteArriver == "4") {
        resultat = valeur; // Millimètre à Millimètre
    } //celcius
     else if(uniteBase == "5"&&uniteArriver=="5") {
        resultat=valeur // Convertit Celsius en celcius
    } else if (uniteBase == "5"&&uniteArriver=="6") {
        resultat=(valeur*9/5)+32 
    }else if(uniteBase == "5"&&uniteArriver=="7"){
        resultat=valeur+273.15
    } //fareinheit
    else if(uniteBase == "6"&&uniteArriver=="6"){
        resultat=valeur
    }
    else if(uniteBase == "6"&&uniteArriver=="5"){
        resultat=(valeur-32)*5/9
    }
    else if(uniteBase == "6"&&uniteArriver=="7"){
        resultat= ((valeur-32)*5/9) *5/9+273.15
    }//Kelvin
    else if(uniteBase == "7"&&uniteArriver=="7"){
        resultat=valeur
    }
    else if(uniteBase == "7"&&uniteArriver=="5"){
        resultat=valeur-273.15
    }
    else if(uniteBase == "7"&&uniteArriver=="6"){
        resultat= ((valeur-273.15)*9/5) +32
    } //volume
    //m3
    else if(uniteBase == "8"&&uniteArriver=="8") {
        resultat=valeur
    }
     else if(uniteBase == "8"&&uniteArriver=="10"){
        resultat=valeur*1000000
     }
     else if(uniteBase == "8"&&uniteArriver=="9"){
        resultat=valeur*1000
     }
     else if(uniteBase == "8"&&uniteArriver=="11"){
        resultat=valeur*1000
     }
     else if(uniteBase == "8"&&uniteArriver=="12"){
        resultat=valeur*100000
     }
     else if(uniteBase == "8"&&uniteArriver=="13"){
        resultat=valeur*1000000
     }//dm3
     else if(uniteBase == "9"&&uniteArriver=="9"){
        resultat=valeur
     }
     else if(uniteBase == "9"&&uniteArriver=="8"){
        resultat=valeur/1000
     }
     else if(uniteBase == "9"&&uniteArriver=="10"){
        resultat=valeur*1000
     }
     else if(uniteBase == "9"&&uniteArriver=="11"){
        resultat=valeur
     }
     else if(uniteBase == "9"&&uniteArriver=="12"){
        valeur*100
     }
     else if(uniteBase == "9"&&uniteArriver=="13"){
        resultat=valeur*1000
     } //cm3
     else if(uniteBase == "10"&&uniteArriver=="10"){
        resultat=valeur
     }
     else if(uniteBase == "10"&&uniteArriver=="8"){
        resultat=valeur/1000000
     }
     else if(uniteBase == "10"&&uniteArriver=="9"){
        resultat=valeur/1000
     }
     else if(uniteBase == "10"&&uniteArriver=="11"){
        resultat=valeur/1000
     }
     else if (uniteBase == "10"&&uniteArriver=="12"){
        resultat=valeur/10
     }
     else if(uniteBase == "10"&&uniteArriver=="13"){
        resultat=valeur
     }//l
     else if(uniteBase == "11"&&uniteArriver=="11"){
        resultat=valeur
     }
     else if(uniteBase == "11"&&uniteArriver=="8"){
        resultat=valeur/1000
     }
     else if(uniteBase == "11"&&uniteArriver=="9"){
        resultat=valeur
     }
     else if(uniteBase == "11"&&uniteArriver=="10"){
        resultat=valeur*1000
     }
     else if(uniteBase == "11"&&uniteArriver=="12"){
        resultat=valeur*100
     }
     else if(uniteBase == "11"&&uniteArriver=="13"){
        resultat=valeur*1000
     }//cl
     else if(uniteBase == "12"&&uniteArriver=="12"){
        resultat=valeur
     }
     else if(uniteBase == "12"&&uniteArriver=="8"){
        resultat=valeur*0.00001
     }
     else if(uniteBase == "12"&&uniteArriver=="9"){
        resultat=valeur*0.01
     }
     else if (uniteBase == "12"&&uniteArriver=="10"){
        resultat=valeur*10
     }
     else if(uniteBase == "12"&&uniteArriver=="11"){
        resultat=valeur*0.01
     }
     else if(uniteBase == "12"&&uniteArriver=="13"){
        resultat=valeur*10
     } //ml
     else if(uniteBase == "13"&&uniteArriver=="13"){
        resultat=valeur
     }
     else if(uniteBase == "13"&&uniteArriver=="8"){
        resultat=valeur*0.000001
     }
     else if(uniteBase == "13"&&uniteArriver=="9"){
        resultat=valeur*0.001
     }
     else if(uniteBase == "13"&&uniteArriver=="10"){
        resultat=valeur*1
     }
     else if(uniteBase == "13"&&uniteArriver=="11"){
        resultat=valeur*0.001
     }
     else if(uniteBase == "13"&&uniteArriver=="12"){
        resultat=valeur*0.1
     }//DEG
     else if(uniteBase == "15"&&uniteArriver=="15"){
        resultat=valeur
     }
     else if(uniteBase == "15"&&uniteArriver=="16"){
        resultat=valeur*3.14/180
     }//RAD
     else if(uniteBase == "16"&&uniteArriver=="16"){
        resultat=valeur
     }
     else if(uniteBase == "16"&&uniteArriver=="15"){
        resultat=valeur*180/3.14
     } //masse
     //T
     else if(uniteBase=="17"&&uniteArriver=="17"){
      resultat=valeur
     }else if(uniteBase=="17"&&uniteArriver=="18"){
      resultat=valeur*1000
     }else if(uniteBase=="17"&&uniteArriver=="19"){
      resultat=valeur*1000000
      //KG
     }else if(uniteBase=="18"&&uniteArriver=="18"){
      resultat=valeur
     }else if(uniteBase=="18"&&uniteArriver=="17"){
      resultat=valeur/1000
     }else if(uniteBase=="18"&&uniteArriver=="19"){
      resultat=valeur*1000
     }//G
     else if(uniteBase=="19"&&uniteArriver=="19"){
      resultat=valeur
     } else if(uniteBase=="19"&&uniteArriver=="17"){
      resultat=valeur/1000000
     }else if(uniteBase=="19"&&uniteArriver=="18"){
        resultat=valeur/1000
     }//SUPERFICIE
     //KM2
     else if(uniteBase=="20"&&uniteArriver=="20"){
      resultat=valeur
     }else if(uniteBase=="20"&&uniteArriver=="21"){
      resultat=valeur*1000000
     }else if(uniteBase=="20"&&uniteArriver=="22"){
      resultat=valeur*10000000000
     }else if(uniteBase=="20"&&uniteArriver=="23"){
      resultat=valeur*100
      //M2
     } else if(uniteBase=="21"&&uniteArriver=="21"){
      resultat=valeur
     }else if(uniteBase=="21"&&uniteArriver=="20"){
      resultat=valeur/1000000
     }else if(uniteBase=="21"&&uniteArriver=="22"){
      resultat=valeur*10000
     }else if(uniteBase=="21"&&uniteArriver=="23"){
      resultat=valeur/10000} 
      //CM2
      else if(uniteBase=="22"&&uniteArriver=="22"){
         resultat=valeur
        }else if(uniteBase=="22"&&uniteArriver=="20"){
         resultat=valeur/10000000000
        }else if(uniteBase=="22"&&uniteArriver=="21"){
         resultat=valeur/10000
        }else if(uniteBase=="22"&&uniteArriver=="23"){
         resultat=valeur/100000000}
     //HA
     else if(uniteBase=="23"&&uniteArriver=="23"){
      resultat=valeur
     }else if(uniteBase=="23"&&uniteArriver=="20"){
      resultat=valeur*0.01
     }else if(uniteBase=="23"&&uniteArriver=="21"){
      resultat=valeur*10000
     }else if(uniteBase=="23"&&uniteArriver=="22"){
      resultat=valeur*100000000}
      //FREQUENCE
      //HERTZ
      else if(uniteBase=="24"&&uniteArriver=="24"){
         resultat=valeur
        }else if(uniteBase=="24"&&uniteArriver=="25"){
         resultat=valeur/1000
        }else if(uniteBase=="24"&&uniteArriver=="26"){
         resultat=valeur*1000000
        }else if(uniteBase=="24"&&uniteArriver=="27"){
         resultat=valeur/10000000000}
      //KH
      else if(uniteBase=="25"&&uniteArriver=="25"){
         resultat=valeur
        }else if(uniteBase=="25"&&uniteArriver=="24"){
         resultat=valeur *1000
        }else if(uniteBase=="25"&&uniteArriver=="26"){
         resultat=valeur/1000
        }else if(uniteBase=="25"&&uniteArriver=="27"){
         resultat=valeur/1000000}
      //MH
      else if(uniteBase=="26"&&uniteArriver=="26"){
         resultat=valeur
        }else if(uniteBase=="26"&&uniteArriver=="24"){
         resultat=valeur*1000000
        }else if(uniteBase=="26"&&uniteArriver=="25"){
         resultat=valeur*1000
        }else if(uniteBase=="26"&&uniteArriver=="27"){
         resultat=valeur/1000}
      //GH
      else if(uniteBase=="27"&&uniteArriver=="27"){
         resultat=valeur
        }else if(uniteBase=="27"&&uniteArriver=="24"){
         resultat=valeur* 1000000000
        }else if(uniteBase=="27"&&uniteArriver=="25"){
         resultat=valeur*1000000
        }else if(uniteBase=="27"&&uniteArriver=="26"){
         resultat=valeur* 1000}
      //ENERGIE
      //JOULE

      //KJ

      //CAL

      //KCAL

    else {
         alert("Erreur: unités non reconnues");}
        
           document.getElementById("resultat").value = resultat; // Afficher le résultat
}


