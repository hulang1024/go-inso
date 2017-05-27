/*
go-inso_bookmark.html文件中包含该脚本副本。
*/
(function() {
var retries = 10;
function waitLoad(onLoad) {
    if(location.hostname == "") {
       if(retries == 0) {
           alert("无法获取URL, 尝试重试吧");
           return;
       }
       retries--;
       setTimeout(waitLoad, 1000);
    } else {
        onLoad();
    }
}

waitLoad(main);

function main() {
    if(["osu.ppy.sh", "new.ppy.sh"].indexOf(location.hostname) == -1) {
        alert("可能不是osu官网");
        return;
    }
    
    /* 获取url路径名 */
    var pathname = location.pathname;
    /* 如果是图谱集url */
    if(pathname.substring(2,1) == 's') {
        /* 获取图谱集中默认难度图谱的路径名 */
        pathname = getActivePathname();
        if(pathname == null) {
            alert("请先选择一个特定的图谱");
            return;
        }
    }

    /* 得到beatmap id */
    var m = pathname.match(/\d+/);
    if(m == null) {
        alert("不能获取图谱id");
        return;
    }
    var beatmapid = m[0];
    
    /* 拼接inso URL */
    var url = "http://inso.link/yukiho/?b=" + beatmapid;
    /* 在当前页面打开该URL */
    location.href = url;
}


function getActivePathname() {
    var a = document.getElementById("tablist").getElementsByClassName("active")[0];
    return a ? a.href.substr(a.href.indexOf("/", 9)) : null;
}
})();