"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeclass = void 0;
var questions_1 = require("./questions");
var employeeclass = /** @class */ (function () {
    function employeeclass() {
    }
    employeeclass.prototype.getDepartmentIdByEmpId = function (empid) {
        //find
        return questions_1.employees.filter(function (emp) { return emp.empid === empid; }).map(function (emp) { return emp.departmentId; })[0];
    };
    employeeclass.prototype.getAllEmpIds = function () {
        return questions_1.employees.map(function (emp) { return emp.empid; });
    };
    employeeclass.prototype.getAllEmpNames = function () {
        return questions_1.employees.map(function (emp) { return emp.name; });
    };
    employeeclass.prototype.getAllEmpPositions = function () {
        return questions_1.employees.map(function (emp) { return emp.position; });
    };
    return employeeclass;
}());
exports.employeeclass = employeeclass;
