/**
 * Created by TML5129 on 1/27/17.
 */

let goals = [
    {
        _id : "1",
        name : "Test Goal 1",
        description : "A desc",
        type : 1,
        startDate : new Date(),
        endDate : new Date(),
        frequency : 1,
        period : 1,
        lastModified : new Date(),
        done : false
    }
]

let entries = [
    {
        _id : "5",
        goalId : "1",
        timestamp : new Date(),
        note : "This is a note",
        active : true
    }
]

module.exports = {
    goals : goals,
    entries : entries
}
