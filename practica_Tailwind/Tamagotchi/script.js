    let intelecto = 50;
    let oratoria = 50;
    let energia = 50;
    
    let agobiado= 0;
    
    
    function actualizarBarras() {

      document.getElementById("barraIntelecto").style.width = intelecto + "%";
      document.getElementById("barraOratoria").style.width = oratoria + "%";
      document.getElementById("barraEnergia").style.width = energia + "%";

      const promedio = (intelecto + oratoria + energia) / 3;
      const img = document.getElementById("personaje");

      if (agobiado >= 20) {
        img.src = "img/fumando.gif";
        return; 
      }
      if (promedio >= 70) img.src = "img/contento.gif";
      else if (promedio >= 50) img.src = "img/serio.gif";
      else img.src = "img/triste.gif";
    }

    function leer() {
      intelecto = Math.min(100, intelecto + 20);
      oratoria = Math.max(0, oratoria - 5);
      energia = Math.max(0, energia - 5);
      agobiado++;
      actualizarBarras();
    }

    function debatir() {
      oratoria = Math.min(100, oratoria + 20);
      energia = Math.max(0, energia - 15);
      intelecto = Math.max(0, intelecto - 10);
      agobiado=0;
      actualizarBarras();
    }

    function meditar() {
      energia = Math.min(100, energia + 30);
      oratoria = Math.max(0, oratoria - 5);
      agobiado=0;
      actualizarBarras();
    }

    




    