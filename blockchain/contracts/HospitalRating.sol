// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract HospitalRating {

    struct Hospital {
        string name;
        uint256 totalRating;
        uint256 ratingCount;
    }

    mapping(uint256 => Hospital) public hospitals;
    uint256 public hospitalCount;

    function addHospital(string memory _name) public {
        hospitalCount++;
        hospitals[hospitalCount] = Hospital(_name, 0, 0);
    }

    function rateHospital(uint256 _id, uint256 _rating) public {
        require(_rating >= 1 && _rating <= 5, "Invalid rating");
        require(_id > 0 && _id <= hospitalCount, "Hospital not found");

        hospitals[_id].totalRating += _rating;
        hospitals[_id].ratingCount++;
    }

    function getAverageRating(uint256 _id) public view returns (uint256) {
        require(hospitals[_id].ratingCount > 0, "No ratings yet");
        return hospitals[_id].totalRating / hospitals[_id].ratingCount;
    }
}