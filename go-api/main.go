package main

import (
	"encoding/json"
	"net/http"
)

// レスポンス用の構造体
type Response struct {
	Message string `json:"message"`
}

func main() {
	// ハンドラーを定義
	http.HandleFunc("/hello", func(w http.ResponseWriter, r *http.Request) {
		if r.Method != http.MethodGet {
			http.Error(w, "Invalid request method", http.StatusMethodNotAllowed)
			return
		}

		response := Response{Message: "Hello, World!"}

		// JSONをレスポンスとして送る
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(response)
	})

	// サーバーを起動
	http.ListenAndServe(":8080", nil)
}
