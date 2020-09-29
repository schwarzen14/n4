const Inter = '1862143337250492_1864243060373853';
var preloadedInterstitial = null;
var count = 0;

function loadInterstitialAd() {
  FBInstant.getInterstitialAdAsync(
    Inter, // Your Ad Placement Id
  ).then(function(interstitial) {
    // Load the Ad asynchronously
    preloadedInterstitial = interstitial;
    return preloadedInterstitial.loadAsync();
  }).then(function() {
    console.log('Interstitial preloaded')
  }).catch(function(err){
    console.error('Interstitial failed to preload: ' + err.message);
  });
}

function showInterstitialAd() {
  preloadedInterstitial.showAsync()
  .then(function() {
    // Perform post-ad success operation
    console.log('Interstitial ad finished successfully');        
  })
  .catch(function(e) {
    console.error(e.message);
      if( count == 2 ){
        AddIcon();
      }
      count++;
  });
}

function AddIcon() {
  FBInstant.canCreateShortcutAsync()
  .then(function(canCreateShortcut) {
    if (canCreateShortcut) {
      FBInstant.createShortcutAsync()
        .then(function() {
          console.log('Shortcut created')
        })
        .catch(function() {
          console.log('Shortcut not created')
        });
    }
  });
}

setTimeout(function(){
const apis = window.FBInstant.getSupportedAPIs();
if(apis.includes("getInterstitialAdAsync")){
setInterval(function(){
    loadInterstitialAd();
    setTimeout(function(){ showInterstitialAd(); }, 1500);
}, 40000);
}
}, 8000);