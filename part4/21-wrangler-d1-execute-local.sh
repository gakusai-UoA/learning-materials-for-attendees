#!/bin/bash
# Section 7 - ステップ 3: ローカル環境でスキーマを実行
npx wrangler d1 execute my-db --local --file=./schema.sql
