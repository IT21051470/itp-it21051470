
$("#addStaffDispatchDetails").submit(function(event){
    alert("Data Inserted Successfully!");
})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var DispatchId = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/users/${DispatchId}`,
            "method" : "DELETE"
        }

        if(confirm("Do you really want to delete this record?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully!");
                location.reload();
            })
        }

    })
}