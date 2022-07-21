echo "***** Article Tests *****"

ENDPOINT=http://localhost:3000/api/articles
CONTENT_TYPE="Content-Type: application/json"

echo "***** Fetch Test *****"

curl --silent $ENDPOINT | jq

echo "***** Create Test *****"

echo "***** POST *****"

ID=$(curl --silent --request POST $ENDPOINT --header "$CONTENT_TYPE" \
  --data '{"article":{"author":"Jane","title":"A new post","body":"Exclusive data!"}}' | \
  jq --raw-output '._id')

curl --silent $ENDPOINT | jq

echo "***** Find Test *****"

curl --silent $ENDPOINT/$ID | jq

echo "***** Update Test *****"

echo "***** PUT $ENDPOINT/$ID *****"

curl --silent --request PUT $ENDPOINT/$ID --header "$CONTENT_TYPE" \
  --data '{"article":{"body":"Exclusive information!"}}' | jq

curl --silent $ENDPOINT | jq

echo "***** Remove Test *****"

echo "***** DELETE $ENDPOINT/$ID *****"

curl --silent --request DELETE $ENDPOINT/$ID

curl --silent $ENDPOINT | jq

echo "***** Comment Tests *****"

echo "***** Create Article to get new article Id *****"

echo "***** POST *****"

ID_ARTICLE=$(curl --silent --request POST $ENDPOINT --header "$CONTENT_TYPE" \
  --data '{"article":{"author":"Jane","title":"A new post","body":"Exclusive data!"}}' | \
  jq --raw-output '._id')

echo "***** Article Id = "$ID_ARTICLE" *****"

ENDPOINT_COMMENT=http://localhost:3000/api/comments

echo "***** Fetch Test *****"

curl --silent $ENDPOINT_COMMENT?article=$ID_ARTICLE | jq

echo "***** Create Test *****"

echo "***** POST *****"

ID_COMMENT=$(curl --silent --request POST $ENDPOINT_COMMENT --header "$CONTENT_TYPE" \
  --data '{"comment":{"author":"Jhon","body":"This is a comment", "article":"'$ID_ARTICLE'"}}' | \
  jq --raw-output '._id')

curl --silent $ENDPOINT_COMMENT?article=$ID_ARTICLE | jq

echo "***** Find Test *****"

curl --silent $ENDPOINT_COMMENT/$ID_COMMENT | jq

echo "***** Update Test *****"

echo "***** PUT $ENDPOINT_COMMENT/$ID_COMMENT *****"

curl --silent --request PUT $ENDPOINT_COMMENT/$ID_COMMENT --header "$CONTENT_TYPE" \
  --data '{"comment":{"author":"Jhon","body":"This is an updated comment", "article":"'$ID_ARTICLE'"}}' | jq

curl --silent $ENDPOINT_COMMENT?article=$ID_ARTICLE | jq

echo "***** Delete Test *****"

echo "***** DELETE $ENDPOINT_COMMENT/$ID_COMMENT *****"

curl --silent --request DELETE $ENDPOINT_COMMENT/$ID_COMMENT

curl --silent $ENDPOINT_COMMENT?article=$ID_ARTICLE | jq

echo "***** Delete created Article *****"

curl --silent --request DELETE $ENDPOINT/$ID_ARTICLE

curl --silent $ENDPOINT | jq
