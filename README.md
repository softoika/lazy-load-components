# Angularコンポーネントの遅延ロード実験
UIライブラリとしてAngular Materialの代わりに普段使い慣れているPrimeNGを使っているが基本的には同じ。<br>
PrimeNGの`Dialog`と`Table`を依存関係に持ったコンポーネント`app-table-dialog`を、ダイアログを表示するボタンを初めて押したときに遅延ロードするサンプル。

## バンドルサイズと依存関係を確認する
```sh
# stats-json付きでビルドする
$ npm run build:stats
# webpack-bundle-analyzerを起動する
$ npm run analyze
```
↓webpack-bundle-analyzerの出力結果(遅延ロード対象のTableDialogComponentとその依存関係がmain.js外へと分割されている)
![image](https://user-images.githubusercontent.com/25437304/119256618-8310c880-bbfc-11eb-8ee5-3d40c137332a.png)

## 参考記事
- [Welcome to the Ivy League: Lazy Loading Components in Angular v9](https://netbasal.com/welcome-to-the-ivy-league-lazy-loading-components-in-angular-v9-e76f0ee2854a) by [Netanel Basal](https://netbasal.medium.com/?source=post_page-----e76f0ee2854a--------------------------------)
