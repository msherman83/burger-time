// // Make sure we wait to attach our handlers until the DOM is fully loaded.
// $(function() {
//   $(".devoured").on("click", function(event) {
//     var id = $(this).data("id");
//     var isDevoured = $(this).data("newsleep");

//     var newBurgerState = {
//       devoured: isDevoured
//     };
//     console.log("isDevoured - " + isDevoured)
//     // Send the PUT request.
//     $.ajax("/api/burgers/" + id, {
//       type: "PUT",
//       data: newBurgerState
//     }).then(
//       function() {
//         console.log("changed sleep to", isDevoured);
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });

//   $(".create-form").on("submit", function(event) {
//     // Make sure to preventDefault on a submit event.
//     event.preventDefault();

//     var newBurger = {
//       burger_name: $("#ca").val().trim(),
//       devoured: $("[name=devoured]").val().trim()
//     };
//     console.log("NewBurger - " + newBurger.burger_name)
//     // Send the POST request.
//     $.ajax("/api/burgers", {
//       type: "POST",
//       data: newBurger
//     }).then(
//       function() {
//         console.log("created new burger");
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });

//   $(".delete-cat").on("click", function(event) {
//     var id = $(this).data("id");

//     // Send the DELETE request.
//     $.ajax("/api/cats/" + id, {
//       type: "DELETE",
//     }).then(
//       function() {
//         console.log("deleted cat", id);
//         // Reload the page to get the updated list
//         location.reload();
//       }
//     );
//   });
// });
