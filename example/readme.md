### validator example for express.js

### 测试
##### npm install
##### npm run start

打开postman， 选择post，输入
- `https://localhost:4000/api/post` 正常模式
- `https://localhost:4000/api/post?singleStep=true` 单步模式


#### post data
```json
{
	
	"title":"",
	"author":"",
	"order":"",
	"license":"",
	"count": {
		"views" : ""
	},
	"tags": ""
}
```

#### result 

##### 单步模式
```json
{
    "code": 422,
    "error": "title is required"
}
```

##### 正常模式
```json
{
    "code": 422,
    "error": {
        "title": "title is required",
        "author": "author is required",
        "order": "order is required",
        "license": "license is required",
        "count.views": "count.views is required"
    }
}
```