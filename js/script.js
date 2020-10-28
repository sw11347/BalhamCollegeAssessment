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
/**
 * @Name: getAssessments
 * @Parametre: None
 * @returns: Assessments Array
 */
function getAllAssessments (){
    Assessments = [];

    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async:false,
        url: 'https://balham-college-db.herokuapp.com/api/Assessment/',
        success: function (data) {
            Assessments = data;
        },
        error: function (err) {
            console.log(err);
        }

    });
    return Assessments;
}
/**
 * @Name: getEnrolments
 * @Parametre: None
 * @returns: Enrolments Array
 */
function getAllEnrolments (){
    Enrolments = [];

    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async:false,
        url: 'https://balham-college-db.herokuapp.com/api/Enrolment/',
        success: function (data) {
            Enrolments= data;
        },
        error: function (err) {
            console.log(err);
        }

    });
    return Enrolments;
}
/**
 * @Name: getAlLecturers
 * @Parametre: None
 * @returns: Lecturers Array
 */
function getAllLecturers (){
    lecturers = [];

    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async:false,
        url: 'https://balham-college-db.herokuapp.com/api/Lecturer/',
        success: function (data) {
            lecturers = data;
        },
        error: function (err) {
            console.log(err);
        }

    });
    return lecturers;
}
/**
 * @Name: getAllTopics
 * @Parametre: None
 * @returns: Topics Array
 */
function getAllTopics (){
    topics = [];

    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async:false,
        url: 'https://balham-college-db.herokuapp.com/api/ResearchTopic/',
        success: function (data) {
            topics = data;
        },
        error: function (err) {
            console.log(err);
        }

    });
    return topics;
}
function getProjectByLecturer(ProjectID) {
    projects = [];
    $.ajax({
        type: 'Get',
        dataType: 'JSON',
        async:false,
        url: 'https://balham-college-db.herokuapp.com/api/Enrolment/',
        success: function (data) {
            lecturerProj = data;
            var i = 0;
            while (i<lecturerProj.length){
                project = lecturerProj[i];
                if (ProjectID == projects.ResearchProjectID){
                    projects.push(project);
                }
                i++;
            }
        },
        error: function (err) {
            console.log(err);
        }
    });
    return projects;
}

