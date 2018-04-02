<?php
?>
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="lugeja.js"></script>
  <script src="scripts.js"></script>
  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <div id="container">
      <div id="content">
        <header class="topmenu-container">
          <div class="input-container">
            <div><input id="kuulatekst" name="speech" placeholder="Krjuta siia"></input></div>
            <div><button id="kuulaklikk" style="cursor: pointer;" alt="Kuula teksti valitud häälega" src="https://cdn2.iconfinder.com/data/icons/media-and-navigation-buttons-round/512/Button_3-512.png" width="96">Ütlen</button></div>
          </div>
        </header>
        <div class="app-view">
        <div class="topicmenu-container">
          <div class="topicmenu-inner">
            <div class="topicmenu-element img-button" id="places"><span>Kohad</span></div>
            <div class="topicmenu-element img-button" id="animals"><span>Loomad</span></div>
            
          </div>
        </div>
        <div class="middle-container">
          <div class="middle-inner">
              <div id="wordcontainer"><div/>
          </div>
        </div>
      </div>
      </div>
      <div id="sound"></div>
      </div>
  </div>
</body>

<?php
?>
