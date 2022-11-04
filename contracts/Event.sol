// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Event is Ownable {
	using Counters for Counters.Counter;
	Counters.Counter private eventIds;

	// TicketClass ticketClass;

	constructor() {
		// ticketClass = new TicketClass(this);
	}

	struct EventData {
		string name; // Name of event
		string location;
		string description;
		string image;
		address eventManager;
		uint64 priceUnit;
		uint256 startDay;
		uint256 endDay;
		bool disable;
	}

	mapping(address => mapping(uint256 => EventData)) private listEventData; // Each event of event manager
	mapping(address => bool) private approvedEventManager;

	// Modifiers
	modifier isEventManager() {
		require(
			approvedEventManager[msg.sender] == true,
			"Only Event Managers are allowed to do this action"
		);
		_;
	}

	// Function

	/**
	 * @dev Allows the Contract admin to approve the Event Manager
	 * @notice onlyOwner modifier should be invoked
	 * @param address_ address that request to be event manager
	 * @return bool true/false if the approval was successful of not
	 */
	function approveEventManager(address address_)
		external
		onlyOwner
		returns (bool)
	{
		require(
			approvedEventManager[address_] == false,
			"Event manager already approved before"
		);

		approvedEventManager[address_] = true;

		return true;
	}

	/**
	 * @dev Allows the Event Manager to create event
	 * @notice isEventManager modifier should be invoked
	 * @notice params is data of event struct
	 * @notice emit NewEvent after create event
	 * @return eventId
	 */
	function createEvent(
		string memory name_,
		string memory location_,
		string memory description_,
		string memory image_,
		uint64 priceUnit_,
		uint256 startDate_,
		uint256 endDate_
	) external isEventManager returns (uint256) {
		// uint256 currentEventId = eventIds.current();

		listEventData[msg.sender][1].name = name_;
		listEventData[msg.sender][1].location = location_;
		listEventData[msg.sender][1].description = description_;
		listEventData[msg.sender][1].image = image_;
		listEventData[msg.sender][1].eventManager = msg.sender;
		listEventData[msg.sender][1].priceUnit = priceUnit_;
		listEventData[msg.sender][1].startDay = startDate_;
		listEventData[msg.sender][1].endDay = endDate_;
		listEventData[msg.sender][1].disable = false;
		// eventIds.increment();
		// emit NewEvent(
		//     name_,
		//     msg.sender,
		//     priceUnit_,
		//     totalTicketClasses_,
		//     startDate_,
		//     endDate_
		// );

		return 1;
	}

	function viewEventDetails(uint64 eventID_)
		external
		view
		returns (
			string memory,
			string memory,
			address,
			uint64,
			uint256,
			uint256
		)
	{
		return (
			listEventData[msg.sender][eventID_].name,
			listEventData[msg.sender][eventID_].description,
			listEventData[msg.sender][eventID_].eventManager,
			listEventData[msg.sender][eventID_].priceUnit,
			listEventData[msg.sender][eventID_].startDay,
			listEventData[msg.sender][eventID_].endDay
		);
	}

	function getApprovedEventManager(address address_)
		external
		view
		returns (bool)
	{
		return approvedEventManager[address_];
	}
}
