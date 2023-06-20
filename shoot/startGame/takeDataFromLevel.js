class DataFromSavedLevel {

    static takeDataFromUrl() {
        return new Promise((resolve, reject) => {
          const params = new URLSearchParams(window.location.search);
          const levelName = params.get('levelName');
          const levelDataURL = '../createLevel/createdLevels/' + levelName;
      
          fetch(levelDataURL)
            .then(response => {
              if (!response.ok) {
                resolve(false);
              } else {
                return response.json(); 
              }
            })
            .then(data => {
              this.addDataToGame(data);
              resolve(true);
            })
            .catch(error => {
              reject(error);
            });
        });
      }
      
    static addDataToGame(data)
    {
        data.forEach(element => {
            if(element['type'] == 'wallblock') {
                wallBlockArray.push(new WallBlock(element['x']/32, element['y']/32 , 32, 32, 'black'));
            }

        });
    }
  }

  