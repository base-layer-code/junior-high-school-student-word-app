// GitHub上のJSONファイルを読み込む（リンクさせる）
fetch('items.json.history-many')
    .then(response => response.json())
    .then(itemPool => {
        // ここに、今までのプログラム（ガチャの処理など）を書く
        console.log("データの読み込み完了！", itemPool);

        // 例：Normalランクの最初のアイテムを表示してみる
        const area = document.getElementById('display-area');
        area.innerText = "最初のアイテムは: " + itemPool.Normal[0];
    })
    .catch(error => console.error("読み込みエラー:", error));
