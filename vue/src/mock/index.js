const Mock = require('mockjs');
//格式： Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/api/cms/articleList', 'get', require('./json/ArticleList'));
Mock.mock('/api/cms/globalSetting', 'get', require('./json/GlobalSetting'));
Mock.mock('/api/cms/adList', 'get', require('./json/AdList'));