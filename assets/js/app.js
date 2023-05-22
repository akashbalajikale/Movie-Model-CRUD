let cl =console.log;

 const showModel =document.getElementById("showModel")
 const backDrop = document.getElementById("backDrop");
 const myModel = document.getElementById("myModel");
 const movieClose = [... document.querySelectorAll(".movieClose")]
 const movieForm = document.getElementById("movieForm");
 const titleControl = document.getElementById("title");
 const imgurlControl = document.getElementById("imgurl");
 const ratingControl = document.getElementById("rating");
 const movieContainer = document.getElementById("movieContainer"); 
 const updateBtn = document.getElementById("updateBtn")
const addBtn = document.getElementById("addBtn"); 
const cancelBtn = document.getElementById("cancelBtn"); 

 onshowmodelhandler =(eve)=>{
    backDrop.classList.toggle("visible");
    myModel.classList.toggle("visible");
 }

 const generateUuid = () => {
   return (
       String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx')
   ).replace(/[xy]/g, (character) => {
       const random = (Math.random() * 16) | 0;
       const value = character === "x" ? random : (random & 0x3) | 0x8;

       return value.toString(16);
   });
};
 let movieArray =[
   {
      title :"the fall",
      imgurl :"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhIWFhUXFxUVFRUVFRUVFRUVFRUWFxUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGi0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIARMAtwMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAADBAIFAAEGB//EAEQQAAIBAgQDBQUGAwUGBwAAAAECAAMRBBIhMQVBUSJhcYGRBhMyofAUQlKxwdEHcuEjM2JzghUlNGSz8SRDY3SSorL/xAAbAQACAwEBAQAAAAAAAAAAAAACAwEEBQAGB//EADgRAAIBAgQDBgQEBQUBAAAAAAABAgMRBBIhMUFRcSJhgZGh8AUTMuEUscHRI0JS4vE0YnKCwhX/2gAMAwEAAhEDEQA/AKLLMywwWSyT054jML5ZorH69YsEBCgIuUZRa+t7t1MPUxxNb35ppe+bJlOS4Fh2b7aXteDd8vf3DThf6uXDz8vUpyszLLLDYo0y5CKc6stmUsFDc0udCLaE3iYSStyG0krMEEmystnxZZkfIo92qiwWysFOhYX7ROxkFxxFY1jTRiSxyMpKdoEfDfbXTWLu+XqH2L/Vx5Pbn9ipKyBWWFGvkV1yg5wBci7LY37JvpM+1H3Xusi2zZs+Xt7AZc34dNusnXkTHLz4cuPIrbTVo/isSXWmuVRkUqCosWuSbub6nWDx+INV2qFVUm3ZQZVFgBoLm23zna8gtOfvj5CRE1aP08YVpPSyKQ5BzlbutiD2WvoOz8zIVsUWppTyqAmYhgCGbMbnOb625aTrvkH2bb8OXoKWmo/juIGqtNSiLkFromUtoLlz946Xv3mQwGLNJw4RHt911zL6XkXdr2JtHNa+nO36Cdpq0bw+KKJUQKp94FBZhdlym/YN9L84J6t1VbDsljcDtHNb4jztbTxMk6ytuBkZY1uIlqwre7QEZewFOTsi2qk7abXgxjmFRqgVAWz3XL2BnBByryte46WEi8uXqFlh/Vx5cOf2E7SNo1TxJFN6eVSHKnMR21yXtlN9Abm41gIQJG0ybmSSC5URrCoG0MXCwqaSZK6KCnZ3H/8AZnLlyMInDLgqRqNR+sf4RiQws06Kjw29iPI/pM+rXlB2kbmHwdKrHNDY89xGEKnUTWHwhYgWnf8AEOBX1A3mcO4FY3I2En8bHLfiL/8AkT+blvocpXwGVbW1OplRiKGWd9xHB2ubTkOKWBsNT8hCw9VzBx2GjTVynYQTQ7CDYS8ZcWBIkbQpEgROsMuDImiIS00RBsFcGRNWhLSJEmwdwdpknaatOscTw2Hao4RBdmNgO8x7i3BKmHAL2IPQ7cwSCBobGx2NjaBwuNXDq9VwbMppoV1ZWb76i4vaxvqN5CtxGpUUq7ZrkAMSxJUDS+bUfExt3yg8RUliflU0sq+p8rq/hwNqnhMNH4fKvWk1OT7C520v03u+GltxK0y0laZLxkEbTJuZOJOjp0rx2jw+/ODS/Qekdw1RunykVHJbFGh8tvtK/mN4PhZG063gtN10I0nPYOs2m3pOm4ZiDzMyMW5NWZ6fAKnFrLdF2KQI2mjRAFrQlJ5JjMvga12cj7QDfpOC4kuu09X4lTFvhB8px3Era9gTUwVaytYx/ieG+Zq5W8Dh2WQKy3xji/wCINNmLbV7HmZJRdr3EysiVjREGRJJUhYrNFYciRKzg1ICVmrQpEiROCUgNpNEJIA3P6zZE3iKvu6eYf3j/wBnT62OjN6Gw7z3SviayoUnN+C5vgvP9y5gsPLE1o0lpfd8lxfgvWwni297Vyqf7Kloo5M/4vMj0EKRNYTD5FC89yep5/XdCWg4Sg6VO0vqesn3vV++dxvxDFLEVbw0hFZYrlFbef7cgVplpMiaIlop3B2mSVpkgm52i0IZFtG/cTa0IpyuJjTtsZQJl7w5rWv6SrpU8sscJpqZTrJNGthW4vU6NMVYAc4KtxCxlI2JJMDiq+soLCpvU1JYzTQuMTi7i425iU+KrKwIKjx6RaniiIPFC+oliFBRZWqYtzjcqsTgMx5eMDX4G1riMvVIk6fECNjL16i2MnLhpN50c9XwrLuIsVnT4zGKy6gXlLUw4tcEHu2linNtdpWKVelGDtCV16leVkSscNA9IEpGCcwuVmFYcpIlZwWYFRoZmCjmL67DqT3ARaq4q1S6/wB2nYp8rgHVj3m9/E90cxjFaQRfjrWF/wAFMHtHztbwB6wdOiFUKNgLf1md/qMTr9NP1n/avJm3m/B4L/fWXlS/va8YrnsErNWhis0VmiZOYDaaIhCswicTcDaZJ2m5AVz0/wBxJijaN+7mskzc5pKlYVWlCvoIyEgqiyM1w8uVCg3kMTGxTgq9KErXAd8pW1BNo/I7Q70oEpG6NFVtxdxbFUpW1UIl1blFsRQjIStoV69PMrop2gmSO1KJgGSWUZsk1uSoYtlGU6joRf0k6C02Pa5xcrNAQHBcNB0cTLRS1S5lm3AwRdWuJXVMDlPaOgUsx/wjtExnD45ki3GcWXZaI3azVTzCLpkzdTv/APGU69WtRj2dZPSPV7eC3fcma2DoYXFTu04xis0+6K38XpFW1u9NiqoguzVG0zXCj8NPkPUfLvhikcqoumX06RdlljDUY0aSpx4er4t973KWOxcsTiJVZcdktklokuishYrIFYwyyBEeIUgJWRIhisiVnDFIXIm4UrMnBZj13JN5IxkmisxbnosouVkGSMlZArJuC4i2SRqU43aQZJOYBx0EGpxdqUsnSBenGRkIlTK9qcg1OPtTgmpRikJdMrKtGJ1qEunpzjeJ+2FKliWw7U3spCs1xoSAb5eY1Gt4z50YaydhP4OdZtU1d7+/23ZYNQgzTj9CqtRcyMGB5g3kHoyzGVzMqUcr19SvqMFVnYdlQW8Tuo8zYeUVwlFrF3+NznbqL7J5QmMT3tYUh8NKz1OYar9xO/mT59YyyyrSXzqrrcFeMf8A1LxfZXcr8TQxT/CYVYX+edp1O7jTh4LtyX9UlyAFYMrDkTRWXjITFmWDKxorBlJIxSAZZErD5ZErOCzC7JMhSJudYNSPYykgUjFpq089c9jlFysiVhysiVk3BcRcrIERkrBssNMBoXZZBkhysgywkxbiLMkGyxkrIlYaYpxE3SU3E+BYSo4rYmgKmQbDd9RlVsupFz6XnQMs4r2o4tiExPu1y/ZwoNSw7V1Uscz7qp7K+MTiqijSlzs7dbb+BY+H0JTxEcrtZq++19Vpz2Ln2QTh2IuaeFOHqAshVKjlTmOl72BsQfiXs+etXxTjuHVqi0SajC3uwBo5d2RLNtqV+RnnvEePVKv93UamrZjWJuWK7LY94JsBY37hcP8As1np1qTFQaVJrVqjWCUiyNa5uAMoFhyvc66ypGtUhFRvbNp04N9bbd7W5p1cJRqzc5RUsuvX+mPem9HfWyfcdtwzhvuqQBOZzdqrfiqN8Zv8h3ATK1KXBQEXGoOoPIiL1KM3aTjCKjHZbdDxmKhOrOU5u8m22+bb1KdqcgVljVoRd6MsqaZmSpNMSKyJWNNTkCkK4vVCpWRKxllgmWSEpC7CZCFZucNTPYJkItXqPOaKg7ek85c910IWkSJMiZJBaBESBWGtIkSbg2AMsGVjBWQKwkwHEXKyBWMFZBlh3FOIuVnEe0GDcirSq6pUJLWNr65hbw0t3eYnc1qiqQrGxa5A1uQLXIA1sLjXvnl/HOLlcYajnNTdTdFtb3YaotFlP4uznBPJyOZlTF1IWSb1v78TS+G0ajlJpaW8+nqUp9klurJUYMtjZwGBtsdLeP8ASK0uGM9XI6hAqqTs2Yqwa9yBcXG46nraXuF43RawzZWOwbTwA5E6DaM1sP72wp3LjVCutr8iOYNtRKqaepo2cU1st378uJ0HsvXLK6clsw7s17gen5y2enEfZbhlWmGesoVnABUG9spbW463lyyTWwuaNNKXtHmviEYTrycbW025219SuelF3oyzanBtTlxTMqdBMqWoSDYeWpoSDUoxVCs8Kilq0rRV1lxXpSuq05YhK5n1aTgxJlmQrLMhi7npOGxd99I4HvKnWMYetbcaTzdz6BYsS0xSDBob6iTB6iSCSKyMhWZspy72Nr9baSGCD2vUa7HlpYdwsB9CcdowpEiRCFJGSRYgVlfxfEPTQGlT945ZVCZgt77nUjYXJ7hLIxKupsa1JRUfIBTB0Fr3IB5X0vt8K9IM27W/z4BU4rMr28du6/dz7jznC+2FJmr4cMDUqh8zq11pEK/vDnIBKhV03W4FtCZxPE6xNVgWDZewGAtmVdFJt3W7+s6j22qLh69SjSsWctVrva2atVysQByUIBYX++3PWc/7McFfHYhaQ0X4qjj7tMHW3edh3nuMzJ3clFbLRLv9eh6Ci4xpuo9M2r6cPNWfux0X8NPZn3j/AGyqOwhIog/ecGxfwXYd9/wz0oUFBLBQCdyALnxPOGw+FWmi00UKigKqjYKBYCSKzXowVONjzmKrOtNye2yXd992LlYMrGisGyx6ZTlEWZJErDssgVh3FOIuywTiNMIF1hJi5REKyRGtSls6RapTliE7FCtRuUtSlMljWozUeqhnSoanWGlDLTtCtT+uXrME80pH0BxBB8u3pC0sWPvaTT07xdksIxMW0PJUU7MD5wthz+UosgvtGqeIZedx03hXF2LFKhXwjAqI++hlbQxea+mo3EOhB7jOaOUmtDXE8OwXMouV7Q6Hqp8R87HlEPtQp9q/9m4Lg9GtmII5Bt/HN1AhqvEbAjUaHfnsdPG/ynG/xS4v7mj7ime1WYtYaZQw7Xl8R8Wias3CLa8OvvV9yLFCl8yag/Hpx+3f1PN+MYs4jF1ag7WaqwQDUvc5UAHMkZRbvns3sb7OjBUApA969nrMNe1yQH8KjTxuec43+FXsxnb7bUXsIStAH7zi4er4Lqo779BPUiIGGpW7b8Cx8Qr3fy47Lf8Abw/PoAqEDc21A16nQCRZZLFYcVFKNexFtDY+Ik8v1vLqZlNC5WQKxgrIkQrgOIsywZWMkQbLDUhcoi7LBMsZZZBljExMoijJAPTjrLBssNSEzhcQqU5kYdJuNUitKnqXmHIO1177WU+KnT0hsoG9h3jb05RbC4k7GzA87ZW/1Kd/EHyjhp3tpccjY6eE8zCd0eznHU1lgnEJYcmse4b+Uy/UeYv8xLEZCJQEWpTYpGNmnB5SNvSMzC8goxKm4HjI+8VjY5rnkdR68o2QDFsRR6iMjIXKIUZVU5tUAJN+QygHXwE8iZKvF+JFVJCknXlToI2rDvPLqWWdX7f8aNGiaQazVAF03y3Jc+lh5x32B4MMJQzOLVqtmf8AwKPgp+QJv3k90rTiqtXKtlv196eZcpSeHoOo95bdP86+COwwdBaKLSRcqIoVVGwCiwEZuDFlr33N++T7xLZn5iZWYVm0qdYTLfadexNkxYrIMsZZYMrCuA0LkSBWMESBWEmLcRdlg2WMlZBlhpi3EUZYMrGnWBIjExMoizLNwzLNQ8wpxGTUC7A+B0/Tebp8QF9QV79/X9xFMWCouCANPiYD1uYr9spn4mCnoGBHibTyrk4s9ioKSOgXEHfQ36W9YRGuNx5cvESlpUb9pXYeV/11jVIf47+IjoVW9xMqS4DrnLv6jY+ImN3+okGZuunhf1kSDyPlyPgY5VBTgTy+f5/1gq2gJJ0AJN+QG8xautjoeYPOc/7c49xRXD0hetiG92gG+XTMe4ajXxjVU0uCqTlJROb4Rhvt+OqYpx/Y0WAQcmcaoPAaMf8AR1nZlyITg/B0w9BKKbKNT+JjqzeZhjh42kssdd3uKxM/mS02Wi6AaNa0epVukSqUbQJcjYmPvcpuNi8VryYJEpKOOIOo07pbYfEXHUSHoShkODvNMkha/wAPpN06k7oEaZYMiNWBg3ScmQ4i5EgVhis0RCuLaFmSBZY6VgmSMTFygJFZuHZJkO4lxOZxlVzvc6aW+LzHMSGHCsbGwPeOyfEbqe8aeEep0RfU/XfGhhk57eFrTymRs9pnSViOHumxsOm6+vKM1iCByP1zi7Itha+2hH14wy2y6fLf67tYxaaCHzJ0cSV6+cco4i+4t4c/EftFqai2uo5AWv59IYU+m0OLYqVnwGGUEdR9ek5fgC/acVUxrf3aXoYa/RSRUqjxN1HcGk/a3E9gUAWvU07B7Vz2UGhvqdf9Bj3AcH9mw9Khcn3aBcxN72liMgMtovv/ACLgmQzjaQFQfDfWbN/H6/KO+YV8ht0BiValHE7jbuMG4POMhUFTplYwmUqmQ3EZqU4tUQyyndFVqzH8Hjs22ndf8pZJUDb+v7zlhcGWWG4iNmHmP2ktAou7ESYa8Xo19LjUQ1gdV9INxhjJBEQoeZa8m5Fr7ArSBWGZZCSC0AZJuGImQrgZSjahqNiN9CL/ACkK6k2ynxva3nCAfuNPq0hT1YA2trr+k8/oekuRGGbMuwF9RpqPSTcDNcbHUi5062v33h01cLy0+Z0sbwQH3hp4W0kNWIzNsPSXp9CNU3HhbmYjSqA8/SIe0+JK0si6vVORQOYNgdL87hf9UmMuQDhd2AcGT7TiXxJByIQE6MxXs3XqqEb86h2nSst94lwnDe4pJSGpAuT+J2N2bzN4+fq37R0WLluA+znym0fl9eRk1qcmFphHnDTQDXMllFtPq8wD6M0o6GSIjYi2gZpxerTjJTmDIZb6R8ZiZQuV9RYJ6IjtRbbxashGxjlIS4EsPi2QWOolphsSG1U/0lC73Gu81Rex3se6ELaOpzA+M0GtK/h+Lzix3HzlkpvoZxxMG8gySO3hCK/1znHb7gjNwjJMnXIsciuIJuL+Wny5n166TaPa/M89Qb6cjzHhKWnjSSLhdCwuM3/1Bvbz6R2pUsCBfTmd9wDvbr/3nms3M9VKk1oW+Ea12YWt8I3uR3W5wbk2i2Fr6fX0Y2Kg+XrOz3VhLjZkqNhoTAYW1Wuznan2F/n+8fL9R0msRWshIGosF72Y2UepELgcMUQJvbc9TfU+shSsc4os1a009UxapfeTpuTvGqpwE5OI3n1ta97flraQuR9WnlHB/Zelj8Xj/e1Kq+7rnL7tlF871b3zKfwjbvno3s1wlMJRXD02ZlBYguVLdpiTfKB16S7OMY/za6cOavzKtOTlrl0148nbaxauhtIpW5EX/Pynl3sfxRm4xWqH4MScRTTo3uiGW3gqfOdv7af8Biv8l/yjJRcZJc7e/AGE80XK21/T9y+UcwdPreaZL6i9/wA+6UHsOP8Ad2GOt/dgyg/jDUP2SiP+YTu/8upChrPIDN5YOfdc7qqsF7sW7ocvqfHSRyiFCRE4idXCXlbVpkGXwWBrYYNHRqCJUyrw1bK2uhl7h8RcSnrUJChVZI26Ylpo6cNeRt0imErhheNiQda5NXmSNrzcm52p5z71VNwL8wDYgHv627+Vt+TX2sONdD11Nz4dPGKYnEIbkAg27h6xWlWN7gj6/pPKttM9eoKSuXNIgD6PTT5x6kQADKpNgd762HnePUbn5kwooRMIa2aovRe0f5jovoL/ACjbV7DQ+MribC5Njufru0E3Ta9pDk9iMiZZGvprNirY7bbROmuh+vSM5gBYeOsJNi2kebcF462FxeOK4erWz1yf7O5y2ep8Vgd7/Iz0EcZy4J8UUamwotUCN8SsFJCnQa6TlvYRv/FcS/zx/wDutHf4k4z3eBqLsajJTFudyGNul1Q+s1JWlVjFLXs6/wDVGbDs0pSb07XpJlBg8N9lwvB8UdxiHznquIYnf+RJ3/t1Y4DFf5Tnv2nm/tFwjia4HJWq0WoURTIppbOoWyKVPuxewbU32vO545jRX4TUrb+8wufwLICfmTHVO1lldPX9b/qLheOaLTWnHpb9Bz2FP+78N/lD8zOd/jB/wlI/8wv/AE6sv/YpD/s7Cn/0x+ZlB/GBbYSl/wC4X/pvBpP+OupNVfwH/wAf0R2tW41G1z9fnN0q94zRTcRHEULNp2W+R8RFRbsmWGk20M5+XPof0kgYolUnRx/36qecOTpca9/7xylcTKJN6d4B8MNodG+v2hiBGKYmUSvw1Moe6WdJoJqcjRqC9gyk9zA8r7X6RylcS42HQZkihmQiLHmmMogAk38/26QVDCg7anmLW2juNq5xZu0RzB19Ythqetw21x0PjYTzUlroesjJ5dR6jSI0/WWGBxOSyFbg8xofPqP3lIKzbdO7v7hLHA1TmAK3/r9XnQlZ6CqkNNRnEPc6gi59IKk+TXS1x5wmPYC+vM6bW75THEEE38jIkrMmms0S9aqdQDp++o/ORxFcqbmxv05aCLYRsy+BsfA/1v6x80LWstza+uo12sISTeoptRdmUvAuF+4q16isWNd85Ur8JzMbC38/5RzjnBBi/dCpUKim4qBQAQ9tlJ5c9vxGOOma2Y5cpDACwGg6ftaRfBjXVh2y3LfoNNpZU3fM5a9O6xWlBWyqOnXxGeI4Na9GpRf4aiMt9CVuLXHeP0i1DgKjAnA+9YqUannIAcBmJGm2l7eUnh8MN9dGZtzubXJt4fnCDBrqLsLgKRcfdygWuLfcF/GMhUsrX79vvyAnTu727t/tzOcpfw+KqFTiOKAGmVWKgDoAG0l/7U+zi4+mKTuUyuKl1AJuFZba/wA3yjhoBitywKgjQ2JBFt7a9ZGnhlXLmLEKGsRa3ave4t2d+WnpGfObak5aoU6KScUtGVHBfY9sPXSs2OxNQIScjsSj3BFmF++/lOyxWGDDoeUrcOVpqFDErr8RuddbEx+nW58uXf8AV4efNo9QcmXVCdVCNG9f3m6Y/Cb/AK/vHHa/LyiNXC2Oanp3SbW2OvfcOV0uPSaUm1zqPmPESGHxWuVhZvzjIAO2h/OEmmA1Yym1xoeR36W5GKYTBMrhmYGwbYkk3FtrCGelvYkHfQ8+6RXDk7VG077H+kbGYuULjSm0yaB5Hf62m5OcHIeeKg0NusWrNv5fl/SbmTClsekjuO4f4L87bx6jy8R8pkyChcgfF/jJ7v0lSu1/D85kyRP6mNo/QXOB+6ORsD33ja1Dn33Y39JkyNjsirLd9DG108JO3aYa8zuep/abmTuHvvO9/kHpNb67putv9dJuZC/lAf1EKuh+ukYotYfXWZMhRBlshDG6Mbac/O+8t+H/AN36frMmRlL6wa30LwHFQa6fWkG8yZLZUB4tBkJtqNQekxJkyQ9yOAU7zKf16zJkMhm6+0yZMkM5H//Z",
      rating :"5/5"
   }
 ]
 movieArray = JSON.parse(localStorage.getItem("movieArray")) ?? [];
 cl(movieArray)
 const templating = arr =>{
   let result ='';
   arr.forEach(ele =>{
      result +=`
                     <div class="col-md-4 col-sm-6">
                     <div class="card" id="${ele.id}">
                        <div class="card-header">
                           ${ele.title}
                        </div>
                        <div class="card-body">
                           <img class="img-fluid movieImg"src="${ele.imgurl}" alt="">
                        </div>
                        <div class="card-footer">
                        <div class="row">
                            <div class="col-md-6">
                                <p>${ele.rating}</p>
                            </div>
                            <div class="col-md-6">
                                  <button class="btn btn-success" onclick="onEditbtn(this)">Edit</button>
                                  <button class="btn btn-danger" onclick="onDeletebtn(this)">Delete</button>
                            </div>
                        </div>
                     </div>
                     </div>
               </div>
      `
   })
   movieContainer.innerHTML =result;
 }
 templating(movieArray)

  const onEditbtn = (ele) => {
   let editId =ele.closest(".card").getAttribute("id");
   localStorage.setItem("editId", editId);
   let editobj =movieArray.find(ele => ele.id === editId);
    title.value = editobj.title,
    imgurl.value = editobj.imgurl,
    rating.value = editobj.rating

    updateBtn.classList.remove('d-none');
     addBtn.classList.add('d-none');
   //   cancelBtn.classList.add('d-none');

   onshowmodelhandler()
  };

const onupdateBtn = (eve) => {
   let updateId = localStorage.getItem("editId");
   let updateObj = movieArray.find(ele => ele.id === updateId);

   updateObj.title = title.value;
   updateObj.imgurl = imgurl.value;
   updateObj.rating = rating.value;

   localStorage.setItem("movieArray", JSON.stringify(movieArray));
   templating(movieArray);
   movieForm.reset();
   updateBtn.classList.add('d-none');
   addBtn.classList.remove('d-none');
   cancelBtn.classList.remove('d-none');
   Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'updated',
      timer: 1500
  })
  onshowmodelhandler()
};

const onDeletebtn =(e) => {
   let deleteItem = e.closest('.card').id;
   let deleteIndex = movieArray.findIndex(index => index.id === deleteItem);
   movieArray.splice(deleteIndex, 1);
   localStorage.setItem("movieArray", JSON.stringify(movieArray));
   templating(movieArray);
   movieForm.reset();
   Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Movie deleted successfully',
      timer: 1500
  })
   
};

const onMovie =(eve)=>{
   eve.preventDefault();
   // cl("moviefrom...")
   let obj = {
      title: titleControl.value,
      imgurl: imgurlControl.value,
      rating: ratingControl.value,
      id :generateUuid()
   }
    
   movieArray.unshift(obj);
   // cl(movieArray)
   templating(movieArray)
   localStorage.setItem("movieArray", JSON.stringify(movieArray))
   eve.target.reset();
   onshowmodelhandler()
   Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Movie Added Successfully',
      timer: 1500
  })

}

 showModel.addEventListener("click", onshowmodelhandler)
 movieClose.forEach(ele => ele.addEventListener("click", onshowmodelhandler))
 movieForm.addEventListener("submit", onMovie)
 updateBtn.addEventListener("click", onupdateBtn)


