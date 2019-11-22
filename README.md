# test_server
node.js/Dockerでスタブサーバーをすぐに構築できます。
## はじめに
dockerを使っているので、インストールをお願いします。

## ビルド手順
```
/bin/sh build.sh
```

## 実行方法
```
/bin/sh run.sh
```

## 内容
現状、アクセスによってそれぞれログを出力する実装になっています。

### ルートURL
```
% curl http://localhost:30000/
Hello World
```

### infoログ
```
% curl http://localhost:30000/info
info logging
% tail -n 1 ~/workspace/simple_server/simple-server/log/app.log
{"message":"info logging","level":"info"}
```

### warnログ
```
% curl http://localhost:30000/warn
warn logging
% tail -n 1 ~/workspace/simple_server/simple-server/log/app.log
{"message":"warn logging","level":"warn"}
```

### errorログ
```
% curl http://localhost:30000/error
error logging
% tail -n 1 ~/workspace/simple_server/simple-server/log/app.log
{"message":"error logging","level":"error"}
```

## 最後に
すごくシンプルな作りにしているので、雛形としてお使い頂けたら幸いです！
