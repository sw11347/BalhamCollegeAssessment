/**
 * @Name: getAllCourses
 * @Parametre: None
 * @returns: Courses Array
 */
function getAllCourses (){
    courses = [];

    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async:false,
        url: 'https://balham-college-db.herokuapp.com/api/Course/',
        success: function (data) {
            courses = data;
        },
        error: function (err) {
            console.log(err);
        }

    });
    return courses;
}