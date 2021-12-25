var images=[
"https://media.istockphoto.com/vectors/illustration-that-mommy-wearing-shortsleeved-clothes-points-at-your-vector-id874464674?k=20&m=874464674&s=170667a&w=0&h=le_YPdAsZzGccu6BWP-ctDKWsnJYggGx_0st5Glq1oA=",
"https://lh3.googleusercontent.com/proxy/tH6ZDOGtBAPbeWy4lQSo0uz-QuS1-d0QV2W1eyPp1n_OvYzIJTTd6IlPwN2chWnEwkM8MkcTnlzThK5pwZdcoQ9t",
"http://clipart-library.com/image_gallery/202476.jpg",
"https://thumbs.dreamstime.com/b/grandmother-portrait-cute-old-woman-bag-walking-stick-wearing-glasses-short-grey-hair-senior-lady-walk-grandma-86364329.jpg",
"https://image.shutterstock.com/image-vector/cute-kid-teen-boy-show-600w-1509139481.jpg"]

var names=["My Mother/Mahalakshmi","My Dad/Sriram",
"My Grandfather/V.Baskaran","My Grandmother/Rajshwari","Me/M.S.GUHAN"]
var i = 0;

function update(){
  i++
  var numbers_of_family_member_in_array = 5
  if(i > numbers_of_family_member_in_array){
    i=0
  
  }
  var updateImage = images[i];
  var upadateName = names[i];
  document.getElementById("family_member_image").src = updateImage;
  document.getElementById("family_member_name").innerHTML = upadateName;  

}
