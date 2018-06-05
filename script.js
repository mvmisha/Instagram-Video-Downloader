function descargar() {
    var link = document.getElementById('link').value
    link = link.substring(0, 41);
    link = link + '__a=1'
    alert(link);
    var xhttp;
    var urlapi;
    urlapi = link
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var objeto = JSON.parse(xhttp.responseText);
            link = objeto.graphql.shortcode_media.video_url

            document.getElementById('download').setAttribute('href', link)
            document.getElementById('download').click();


            //https://www.instagram.com/p/BjovP3Xl12N/?utm_source=ig_share_sheet&igshid=pgwlhdcpgdq2
            //https://www.instagram.com/p/BjnRn6RBymT/?utm_source=ig_share_sheet&igshid=7yurgo4iw19r
            //https://www.instagram.com/p/BjovP3Xl12N/?__a=1
        }
    };
    xhttp.open("GET", urlapi, true);
    xhttp.send();
}
