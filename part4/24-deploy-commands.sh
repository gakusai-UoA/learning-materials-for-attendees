#!/bin/bash
# Section 7 - ステップ 5: 本番へ公開 (デプロイ)
# 1. 本番のデータベースにもテーブルを作る
npx wrangler d1 execute my-db --remote --file=./schema.sql

# 2. 公開！
npm run deploy
