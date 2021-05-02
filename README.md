# sh2

## オープンな地図データと地図アプリの動かし方
index.html を開く

## オープンな地図データと地図アプリの作り方

このリポジトリをfork  
```npm i```
```bash
brew install osmium-tool
or
arch -x86_64 brew install osmium-tool

brew install tippecanoe
or 
arch -x86_64 brew install tippecanoe
```
OSMの地図データダウンロードする (Rakefile内のREGION/AREA、[OSM download](http://download.geofabrik.de/)）  
日本で1.5Gbほど  

make-extent.js に緯度経度の領域をセットする（仮に福井県となっている）  
```rake tiles```  
docs/style.json の表示する中心 center を変更する  
docs/style.json のホストを編集する  
docs/index.html のホストを編集する  
docs をルートとしてwebサーバーを起動する  
