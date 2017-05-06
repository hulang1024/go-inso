/*
go-inso_bookmark.html文件中包含该脚本副本。
*/
(function() {
// 判断是否为osu官网
if(["osu.ppy.sh", "new.ppy.sh"].indexOf(location.hostname) == -1)
{
   alert("不是osu官网");
   return;
}
// 得到beatmap id
var url = location.href;
var bid = url.substr(url.lastIndexOf("/") + 1);
if(isNaN(parseInt(bid)))
{
  alert("不能获取图谱id");
  return;
}
// 拼接inso URL
url = "http://inso.link/yukiho/?b=" + bid;
// 在当前页面打开该URL
location.href = url;
})();