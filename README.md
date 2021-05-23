# Angularコンポーネントの遅延ロード実験

```sh
# stats-json付きでビルドする
$ npm run build:stats
# webpack-bundle-analyzerを起動する
$ npm run analyze
```
↓webpack-bundle-analyzerの出力結果(遅延ロード対象のTableDialogComponentとその依存関係がmain.js外へと分割されている)
![image](https://user-images.githubusercontent.com/25437304/119256618-8310c880-bbfc-11eb-8ee5-3d40c137332a.png)

## 参考記事
- [Welcome to the Ivy League: Lazy Loading Components in Angular v9](https://netbasal.com/welcome-to-the-ivy-league-lazy-loading-components-in-angular-v9-e76f0ee2854a) by [Netanel Basal](https://netbasal.medium.com/?source=post_page-----e76f0ee2854a--------------------------------)<br>
この記事ではNgModuleを同ファイル内に書いているが、それだとコンポーネントHTMLファイルでモジュールが読み込まれていない扱いになってしまう(エディタ上のみエラーが出て補完が効かない)ので、このリポジトリではモジュールを作成しimportするようにしている。
