import type { INodeProperties } from 'n8n-workflow';

export const defaultDescription: INodeProperties[] = [
                {
			"displayName": "Operation",
			"name": "operation",
			"type": "options",
			"noDataExpression": true,
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					]
				}
			},
			"options": [
				{
					"name": "GET Box Menus",
					"value": "GET Box Menus",
					"action": "GET Box Menus",
					"description": "Returns predefined folders and workbooks of the Box for all the spaces",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/box/menus"
						}
					}
				},
				{
					"name": "GET Business Groups",
					"value": "GET Business Groups",
					"action": "GET Business Groups",
					"description": "Returns a list of groups custom ordered by name",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/business-groups"
						}
					}
				},
				{
					"name": "PATCH Business Groups",
					"value": "PATCH Business Groups",
					"action": "PATCH Business Groups",
					"description": "Modifies an object",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/business-groups"
						}
					}
				},
				{
					"name": "POST Business Groups",
					"value": "POST Business Groups",
					"action": "POST Business Groups",
					"description": "Adds a group (only for managers and ADN collaborators)",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/business-groups"
						}
					}
				},
				{
					"name": "GET Business Groups All",
					"value": "GET Business Groups All",
					"action": "GET Business Groups All",
					"description": "Returns list of groups custom for managers",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/business-groups/all"
						}
					}
				},
				{
					"name": "GET Business Groups Spaces",
					"value": "GET Business Groups Spaces",
					"action": "GET Business Groups Spaces",
					"description": "Returns spaces of the business group with id",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/business-groups/{{$parameter[\"id\"]}}/spaces"
						}
					}
				},
				{
					"name": "DELETE Business Groups Spaces",
					"value": "DELETE Business Groups Spaces",
					"action": "DELETE Business Groups Spaces",
					"description": "Remove a customer space from partner",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/business-groups/{{$parameter[\"id\"]}}/spaces/{{$parameter[\"spaceId\"]}}"
						}
					}
				},
				{
					"name": "POST Business Groups Spaces Legal Entities Customers Guest In Space",
					"value": "POST Business Groups Spaces Legal Entities Customers Guest In Space",
					"action": "POST Business Groups Spaces Legal Entities Customers Guest In Space",
					"description": "send an invitation to manager the private space of personId",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/business-groups/{{$parameter[\"id\"]}}/spaces/{{$parameter[\"spaceId\"]}}/legal-entities/{{$parameter[\"personId\"]}}/customers/{{$parameter[\"folderId\"]}}/guest-in-space"
						}
					}
				},
				{
					"name": "POST Business Groups Spaces Legal Entities Customers Spaces",
					"value": "POST Business Groups Spaces Legal Entities Customers Spaces",
					"action": "POST Business Groups Spaces Legal Entities Customers Spaces",
					"description": "Add a Space in a group",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/business-groups/{{$parameter[\"id\"]}}/spaces/{{$parameter[\"spaceId\"]}}/legal-entities/{{$parameter[\"personId\"]}}/customers/{{$parameter[\"folderId\"]}}/spaces"
						}
					}
				},
				{
					"name": "GET Hub Business Groups Menus",
					"value": "GET Hub Business Groups Menus",
					"action": "GET Hub Business Groups Menus",
					"description": "Returns predefined folders and workbooks of the Hub for all the spaces of the business group",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/hub/business-groups/{{$parameter[\"Id\"]}}/menus"
						}
					}
				},
				{
					"name": "POST Hub Documents",
					"value": "POST Hub Documents",
					"action": "POST Hub Documents",
					"description": "Add a document (this document is analyzed to be saved in the correct folder and correct space)",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/hub/documents"
						}
					}
				},
				{
					"name": "GET Hub Menus",
					"value": "GET Hub Menus",
					"action": "GET Hub Menus",
					"description": "Returns predefined folders and workbooks of the Hub for all the spaces",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/hub/menus"
						}
					}
				},
				{
					"name": "GET Hub Menus All",
					"value": "GET Hub Menus All",
					"action": "GET Hub Menus All",
					"description": "Returns predefined folders and workbooks of the Hub for all the spaces and customer spaces",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/hub/menus/all"
						}
					}
				},
				{
					"name": "POST Hub Payslips",
					"value": "POST Hub Payslips",
					"action": "POST Hub Payslips",
					"description": "Add a payslip (this document is analyzed to be saved in the correct folder and correct space)",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/hub/payslips"
						}
					}
				},
				{
					"name": "POST Hub Spaces Documents",
					"value": "POST Hub Spaces Documents",
					"action": "POST Hub Spaces Documents",
					"description": "Add a document in a space (this document is analyzed to be saved in the correct folder)",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/hub/spaces/{{$parameter[\"spaceId\"]}}/documents"
						}
					}
				},
				{
					"name": "GET Hub Spaces Menus",
					"value": "GET Hub Spaces Menus",
					"action": "GET Hub Spaces Menus",
					"description": "Returns predefined folders and workbooks of the Hub for the space",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/hub/spaces/{{$parameter[\"spaceId\"]}}/menus"
						}
					}
				},
				{
					"name": "POST Hub Spaces Payslips",
					"value": "POST Hub Spaces Payslips",
					"action": "POST Hub Spaces Payslips",
					"description": "Add a payslip in a space (this document is analyzed to be saved in the correct folder)",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/hub/spaces/{{$parameter[\"spaceId\"]}}/payslips"
						}
					}
				},
				{
					"name": "GET Menus",
					"value": "GET Menus",
					"action": "GET Menus",
					"description": "Returns predefined entries",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/menus"
						}
					}
				},
				{
					"name": "POST Menus Documents",
					"value": "POST Menus Documents",
					"action": "POST Menus Documents",
					"description": "add a document to the target menuId",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/menus/{{$parameter[\"menuId\"]}}/documents"
						}
					}
				},
				{
					"name": "GET Profile",
					"value": "GET Profile",
					"action": "GET Profile",
					"description": "Returns status of member",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/profile"
						}
					}
				},
				{
					"name": "PATCH Profile",
					"value": "PATCH Profile",
					"action": "PATCH Profile",
					"description": "modify infos of profile",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/profile"
						}
					}
				},
				{
					"name": "POST Profile",
					"value": "POST Profile",
					"action": "POST Profile",
					"description": "create infos of profile",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/profile"
						}
					}
				},
				{
					"name": "PATCH Profile Email",
					"value": "PATCH Profile Email",
					"action": "PATCH Profile Email",
					"description": "modify email of profile",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/profile/email"
						}
					}
				},
				{
					"name": "GET Profile ID File",
					"value": "GET Profile ID File",
					"action": "GET Profile ID File",
					"description": "Returns status of member",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/profile/id-file"
						}
					}
				},
				{
					"name": "PATCH Profile Mobile",
					"value": "PATCH Profile Mobile",
					"action": "PATCH Profile Mobile",
					"description": "modify mobile of profile",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/profile/mobile"
						}
					}
				},
				{
					"name": "GET Registration",
					"value": "GET Registration",
					"action": "GET Registration",
					"description": "Returns the method to get the validation code or the link to register after invitation",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/registration"
						}
					}
				},
				{
					"name": "POST Registration",
					"value": "POST Registration",
					"action": "POST Registration",
					"description": "complete the invitation",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/registration"
						}
					}
				},
				{
					"name": "GET Session",
					"value": "GET Session",
					"action": "GET Session",
					"description": "Returns member id of user logged",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/session"
						}
					}
				},
				{
					"name": "GET Spaces",
					"value": "GET Spaces",
					"action": "GET Spaces",
					"description": "Returns spaces of my group",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces"
						}
					}
				},
				{
					"name": "POST Spaces",
					"value": "POST Spaces",
					"action": "POST Spaces",
					"description": "Add a Space in my group",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces"
						}
					}
				},
				{
					"name": "GET Spaces All",
					"value": "GET Spaces All",
					"action": "GET Spaces All",
					"description": "Returns all spaces",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/all"
						}
					}
				},
				{
					"name": "DELETE Spaces",
					"value": "DELETE Spaces",
					"action": "DELETE Spaces",
					"description": "Delete a Space (only space not delivered to customer)",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/spaces/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "PATCH Spaces",
					"value": "PATCH Spaces",
					"action": "PATCH Spaces",
					"description": "Modify a Space (except private)",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "GET Spaces Accounting Year",
					"value": "GET Spaces Accounting Year",
					"action": "GET Spaces Accounting Year",
					"description": "Returns list of accounting years for the space {id}",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"id\"]}}/accounting-year"
						}
					}
				},
				{
					"name": "POST Spaces Accounting Year",
					"value": "POST Spaces Accounting Year",
					"action": "POST Spaces Accounting Year",
					"description": "Create a accounting year for the space id",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"id\"]}}/accounting-year"
						}
					}
				},
				{
					"name": "GET Spaces Collective Decision",
					"value": "GET Spaces Collective Decision",
					"action": "GET Spaces Collective Decision",
					"description": "Returns list of collective decisions for the space {id}",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"id\"]}}/collective-decision"
						}
					}
				},
				{
					"name": "POST Spaces Collective Decision",
					"value": "POST Spaces Collective Decision",
					"action": "POST Spaces Collective Decision",
					"description": "Create a colletive decision for the space id",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"id\"]}}/collective-decision"
						}
					}
				},
				{
					"name": "GET Spaces Company Entities",
					"value": "GET Spaces Company Entities",
					"action": "GET Spaces Company Entities",
					"description": "Returns list of company entities",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"id\"]}}/company-entities"
						}
					}
				},
				{
					"name": "POST Spaces Company Entities",
					"value": "POST Spaces Company Entities",
					"action": "POST Spaces Company Entities",
					"description": "Add a Company Entity in a Space",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"id\"]}}/company-entities"
						}
					}
				},
				{
					"name": "GET Spaces Company Entities All",
					"value": "GET Spaces Company Entities All",
					"action": "GET Spaces Company Entities All",
					"description": "Returns list of company entities even company entities archived",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"id\"]}}/company-entities/all"
						}
					}
				},
				{
					"name": "PATCH Spaces Company Entities",
					"value": "PATCH Spaces Company Entities",
					"action": "PATCH Spaces Company Entities",
					"description": "Modify a company entity",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"id\"]}}/company-entities/{{$parameter[\"companyId\"]}}"
						}
					}
				},
				{
					"name": "GET Spaces Company Entities Details",
					"value": "GET Spaces Company Entities Details",
					"action": "GET Spaces Company Entities Details",
					"description": "Returns all details of a company entity",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"id\"]}}/company-entities/{{$parameter[\"personId\"]}}/details"
						}
					}
				},
				{
					"name": "POST Spaces Company Entities Details",
					"value": "POST Spaces Company Entities Details",
					"action": "POST Spaces Company Entities Details",
					"description": "Replace or Add a contact detail for a person",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"id\"]}}/company-entities/{{$parameter[\"personId\"]}}/details"
						}
					}
				},
				{
					"name": "DELETE Spaces Company Entities Details",
					"value": "DELETE Spaces Company Entities Details",
					"action": "DELETE Spaces Company Entities Details",
					"description": "delete a contact detail for a company entity",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/spaces/{{$parameter[\"id\"]}}/company-entities/{{$parameter[\"personId\"]}}/details/{{$parameter[\"designation\"]}}"
						}
					}
				},
				{
					"name": "POST Spaces Documents Download",
					"value": "POST Spaces Documents Download",
					"action": "POST Spaces Documents Download",
					"description": "create an archive with documents",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"id\"]}}/documents/download"
						}
					}
				},
				{
					"name": "GET Spaces Folders Persons",
					"value": "GET Spaces Folders Persons",
					"action": "GET Spaces Folders Persons",
					"description": "return the access of a person in a customer contract",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"id\"]}}/folders/{{$parameter[\"folderId\"]}}/persons/{{$parameter[\"memberId\"]}}"
						}
					}
				},
				{
					"name": "PATCH Spaces Folders Persons",
					"value": "PATCH Spaces Folders Persons",
					"action": "PATCH Spaces Folders Persons",
					"description": "Add/Modify/Delete a person in a customer contract (except manager)",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"id\"]}}/folders/{{$parameter[\"folderId\"]}}/persons/{{$parameter[\"memberId\"]}}"
						}
					}
				},
				{
					"name": "PATCH Spaces Folders Persons Activeaccess",
					"value": "PATCH Spaces Folders Persons Activeaccess",
					"action": "PATCH Spaces Folders Persons Activeaccess",
					"description": "open an access",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"id\"]}}/folders/{{$parameter[\"folderId\"]}}/persons/{{$parameter[\"memberId\"]}}/activeaccess"
						}
					}
				},
				{
					"name": "PATCH Spaces Folders Persons Unactiveaccess",
					"value": "PATCH Spaces Folders Persons Unactiveaccess",
					"action": "PATCH Spaces Folders Persons Unactiveaccess",
					"description": "close an access",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"id\"]}}/folders/{{$parameter[\"folderId\"]}}/persons/{{$parameter[\"memberId\"]}}/unactiveaccess"
						}
					}
				},
				{
					"name": "POST Spaces Folders Persons Guest In Space",
					"value": "POST Spaces Folders Persons Guest In Space",
					"action": "POST Spaces Folders Persons Guest In Space",
					"description": "invite a owner in a space",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"id\"]}}/folders/{{$parameter[\"folderId\"]}}/persons/{{$parameter[\"personId\"]}}/guest-in-space"
						}
					}
				},
				{
					"name": "GET Spaces Groups",
					"value": "GET Spaces Groups",
					"action": "GET Spaces Groups",
					"description": "Returns list of groups",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"id\"]}}/groups"
						}
					}
				},
				{
					"name": "POST Spaces Groups",
					"value": "POST Spaces Groups",
					"action": "POST Spaces Groups",
					"description": "Add a group in a Space",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"id\"]}}/groups"
						}
					}
				},
				{
					"name": "GET Spaces Groups All",
					"value": "GET Spaces Groups All",
					"action": "GET Spaces Groups All",
					"description": "Returns list of groups even archived of the space",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"id\"]}}/groups/all"
						}
					}
				},
				{
					"name": "PATCH Spaces Groups",
					"value": "PATCH Spaces Groups",
					"action": "PATCH Spaces Groups",
					"description": "Modify a group",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"id\"]}}/groups/{{$parameter[\"groupId\"]}}"
						}
					}
				},
				{
					"name": "DELETE Spaces Groups Folders",
					"value": "DELETE Spaces Groups Folders",
					"action": "DELETE Spaces Groups Folders",
					"description": "delete access to a folder for a group",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/spaces/{{$parameter[\"id\"]}}/groups/{{$parameter[\"groupId\"]}}/folders/{{$parameter[\"folderId\"]}}"
						}
					}
				},
				{
					"name": "PATCH Spaces Groups Folders",
					"value": "PATCH Spaces Groups Folders",
					"action": "PATCH Spaces Groups Folders",
					"description": "Add access to a folder for a group",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"id\"]}}/groups/{{$parameter[\"groupId\"]}}/folders/{{$parameter[\"folderId\"]}}"
						}
					}
				},
				{
					"name": "DELETE Spaces Groups Persons",
					"value": "DELETE Spaces Groups Persons",
					"action": "DELETE Spaces Groups Persons",
					"description": "Delete a person of a group",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/spaces/{{$parameter[\"id\"]}}/groups/{{$parameter[\"groupId\"]}}/persons/{{$parameter[\"memberId\"]}}"
						}
					}
				},
				{
					"name": "PATCH Spaces Groups Persons",
					"value": "PATCH Spaces Groups Persons",
					"action": "PATCH Spaces Groups Persons",
					"description": "Add a person to a group",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"id\"]}}/groups/{{$parameter[\"groupId\"]}}/persons/{{$parameter[\"memberId\"]}}"
						}
					}
				},
				{
					"name": "GET Spaces Legal",
					"value": "GET Spaces Legal",
					"action": "GET Spaces Legal",
					"description": "Returns legal information of a space (except private)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"id\"]}}/legal"
						}
					}
				},
				{
					"name": "PATCH Spaces Legal",
					"value": "PATCH Spaces Legal",
					"action": "PATCH Spaces Legal",
					"description": "Modify legal information of a Space (except private)",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"id\"]}}/legal"
						}
					}
				},
				{
					"name": "GET Spaces Logo",
					"value": "GET Spaces Logo",
					"action": "GET Spaces Logo",
					"description": "Returns a space with the logo",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"id\"]}}/logo"
						}
					}
				},
				{
					"name": "GET Spaces Persons",
					"value": "GET Spaces Persons",
					"action": "GET Spaces Persons",
					"description": "Returns list of persons",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"id\"]}}/persons"
						}
					}
				},
				{
					"name": "POST Spaces Persons",
					"value": "POST Spaces Persons",
					"action": "POST Spaces Persons",
					"description": "Add a Person in a Space",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"id\"]}}/persons"
						}
					}
				},
				{
					"name": "GET Spaces Persons All",
					"value": "GET Spaces Persons All",
					"action": "GET Spaces Persons All",
					"description": "Returns list of persons even persons archived",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"id\"]}}/persons/all"
						}
					}
				},
				{
					"name": "PATCH Spaces Persons Player",
					"value": "PATCH Spaces Persons Player",
					"action": "PATCH Spaces Persons Player",
					"description": "Modify the role of a person",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"id\"]}}/persons/{{$parameter[\"memberId\"]}}/player"
						}
					}
				},
				{
					"name": "DELETE Spaces Persons",
					"value": "DELETE Spaces Persons",
					"action": "DELETE Spaces Persons",
					"description": "delete a person",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/spaces/{{$parameter[\"id\"]}}/persons/{{$parameter[\"personId\"]}}"
						}
					}
				},
				{
					"name": "PATCH Spaces Persons",
					"value": "PATCH Spaces Persons",
					"action": "PATCH Spaces Persons",
					"description": "Modify a person",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"id\"]}}/persons/{{$parameter[\"personId\"]}}"
						}
					}
				},
				{
					"name": "GET Spaces Persons Details",
					"value": "GET Spaces Persons Details",
					"action": "GET Spaces Persons Details",
					"description": "Returns all details of a person",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"id\"]}}/persons/{{$parameter[\"personId\"]}}/details"
						}
					}
				},
				{
					"name": "POST Spaces Persons Details",
					"value": "POST Spaces Persons Details",
					"action": "POST Spaces Persons Details",
					"description": "Replace or Add a contact detail for a person",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"id\"]}}/persons/{{$parameter[\"personId\"]}}/details"
						}
					}
				},
				{
					"name": "DELETE Spaces Persons Details",
					"value": "DELETE Spaces Persons Details",
					"action": "DELETE Spaces Persons Details",
					"description": "delete a contact detail for a person",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/spaces/{{$parameter[\"id\"]}}/persons/{{$parameter[\"personId\"]}}/details/{{$parameter[\"designation\"]}}"
						}
					}
				},
				{
					"name": "GET Spaces Persons Folders",
					"value": "GET Spaces Persons Folders",
					"action": "GET Spaces Persons Folders",
					"description": "Returns list of folders with exceptionnal access of the person personId",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"id\"]}}/persons/{{$parameter[\"personId\"]}}/folders"
						}
					}
				},
				{
					"name": "GET Spaces Persons Groups",
					"value": "GET Spaces Persons Groups",
					"action": "GET Spaces Persons Groups",
					"description": "Returns list of groups of the person personId",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"id\"]}}/persons/{{$parameter[\"personId\"]}}/groups"
						}
					}
				},
				{
					"name": "GET Spaces Persons Portfolios",
					"value": "GET Spaces Persons Portfolios",
					"action": "GET Spaces Persons Portfolios",
					"description": "Returns list of portfolios of the person personId",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"id\"]}}/persons/{{$parameter[\"personId\"]}}/portfolios"
						}
					}
				},
				{
					"name": "POST Spaces Persons Portfolios",
					"value": "POST Spaces Persons Portfolios",
					"action": "POST Spaces Persons Portfolios",
					"description": "Create a portfolio for the person personId",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"id\"]}}/persons/{{$parameter[\"personId\"]}}/portfolios"
						}
					}
				},
				{
					"name": "PATCH Spaces Portfolios Persons",
					"value": "PATCH Spaces Portfolios Persons",
					"action": "PATCH Spaces Portfolios Persons",
					"description": "Add/Modify/Delete a person in a portfolio (except manager)",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"id\"]}}/portfolios/{{$parameter[\"portfolioId\"]}}/persons/{{$parameter[\"memberId\"]}}"
						}
					}
				},
				{
					"name": "GET Spaces Professional Vehicles",
					"value": "GET Spaces Professional Vehicles",
					"action": "GET Spaces Professional Vehicles",
					"description": "Returns list of professionalvehicles for the space {id}",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"id\"]}}/professional-vehicles"
						}
					}
				},
				{
					"name": "POST Spaces Professional Vehicles",
					"value": "POST Spaces Professional Vehicles",
					"action": "POST Spaces Professional Vehicles",
					"description": "Create a professional vehicle for the space",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"id\"]}}/professional-vehicles"
						}
					}
				},
				{
					"name": "GET Spaces Settings Nf 203 Logs",
					"value": "GET Spaces Settings Nf 203 Logs",
					"action": "GET Spaces Settings Nf 203 Logs",
					"description": "Returns state of activation of logs",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"id\"]}}/settings/nf203/logs"
						}
					}
				},
				{
					"name": "POST Spaces Settings Nf 203 Logs",
					"value": "POST Spaces Settings Nf 203 Logs",
					"action": "POST Spaces Settings Nf 203 Logs",
					"description": "Enable/Disable logs",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"id\"]}}/settings/nf203/logs"
						}
					}
				},
				{
					"name": "GET Spaces Status",
					"value": "GET Spaces Status",
					"action": "GET Spaces Status",
					"description": "Returns all status of the space",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"id\"]}}/status"
						}
					}
				},
				{
					"name": "POST Spaces Status",
					"value": "POST Spaces Status",
					"action": "POST Spaces Status",
					"description": "Replace or Add a status",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"id\"]}}/status"
						}
					}
				},
				{
					"name": "DELETE Spaces Status",
					"value": "DELETE Spaces Status",
					"action": "DELETE Spaces Status",
					"description": "delete a status of the space",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/spaces/{{$parameter[\"id\"]}}/status/{{$parameter[\"code\"]}}"
						}
					}
				},
				{
					"name": "GET Spaces Tax Contracts",
					"value": "GET Spaces Tax Contracts",
					"action": "GET Spaces Tax Contracts",
					"description": "Returns list of tax contracts for the space {id}",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"id\"]}}/tax-contracts"
						}
					}
				},
				{
					"name": "POST Spaces Tax Contracts",
					"value": "POST Spaces Tax Contracts",
					"action": "POST Spaces Tax Contracts",
					"description": "Create a tax contract for the space",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"id\"]}}/tax-contracts"
						}
					}
				},
				{
					"name": "GET Spaces Triggers",
					"value": "GET Spaces Triggers",
					"action": "GET Spaces Triggers",
					"description": "Returns list of triggers for the space {id}",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"id\"]}}/triggers"
						}
					}
				},
				{
					"name": "DELETE Spaces Triggers",
					"value": "DELETE Spaces Triggers",
					"action": "DELETE Spaces Triggers",
					"description": "Deletes a trigger for the space id",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/spaces/{{$parameter[\"id\"]}}/triggers/{{$parameter[\"name\"]}}"
						}
					}
				},
				{
					"name": "POST Spaces Triggers",
					"value": "POST Spaces Triggers",
					"action": "POST Spaces Triggers",
					"description": "Creates a trigger for the space id",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"id\"]}}/triggers/{{$parameter[\"name\"]}}"
						}
					}
				},
				{
					"name": "DELETE Spaces Common Folders",
					"value": "DELETE Spaces Common Folders",
					"action": "DELETE Spaces Common Folders",
					"description": "Delete a common folder",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/common-folders/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "PATCH Spaces Common Folders",
					"value": "PATCH Spaces Common Folders",
					"action": "PATCH Spaces Common Folders",
					"description": "Modify a common folder",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/common-folders/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "GET Spaces Company Entities Follow Ups",
					"value": "GET Spaces Company Entities Follow Ups",
					"action": "GET Spaces Company Entities Follow Ups",
					"description": "Returns folder of the company entity",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/company-entities/{{$parameter[\"id\"]}}/follow-ups"
						}
					}
				},
				{
					"name": "GET Spaces Customers",
					"value": "GET Spaces Customers",
					"action": "GET Spaces Customers",
					"description": "Returns folder with Id and customer data",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/customers"
						}
					}
				},
				{
					"name": "GET Spaces Customers All",
					"value": "GET Spaces Customers All",
					"action": "GET Spaces Customers All",
					"description": "Returns folder with Id and customer data (even archived)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/customers/all"
						}
					}
				},
				{
					"name": "GET Spaces Documents",
					"value": "GET Spaces Documents",
					"action": "GET Spaces Documents",
					"description": "Returns documents of the folder",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/documents"
						}
					}
				},
				{
					"name": "PATCH Spaces Documents",
					"value": "PATCH Spaces Documents",
					"action": "PATCH Spaces Documents",
					"description": "modify a doc",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/documents/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "GET Spaces Documents Extend",
					"value": "GET Spaces Documents Extend",
					"action": "GET Spaces Documents Extend",
					"description": "read the data of a document",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/documents/{{$parameter[\"documentId\"]}}/extend"
						}
					}
				},
				{
					"name": "POST Spaces Documents Extend",
					"value": "POST Spaces Documents Extend",
					"action": "POST Spaces Documents Extend",
					"description": "Add a data to a document",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/documents/{{$parameter[\"documentId\"]}}/extend"
						}
					}
				},
				{
					"name": "GET Spaces Documents Folders",
					"value": "GET Spaces Documents Folders",
					"action": "GET Spaces Documents Folders",
					"description": "Returns versions of the document",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/documents/{{$parameter[\"documentId\"]}}/folders"
						}
					}
				},
				{
					"name": "POST Spaces Documents Mailing",
					"value": "POST Spaces Documents Mailing",
					"action": "POST Spaces Documents Mailing",
					"description": "send by mail a document",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/documents/{{$parameter[\"documentId\"]}}/mailing"
						}
					}
				},
				{
					"name": "GET Spaces Documents Mailingprice",
					"value": "GET Spaces Documents Mailingprice",
					"action": "GET Spaces Documents Mailingprice",
					"description": "returns the number of pages and the price of the pdf to send by mail",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/documents/{{$parameter[\"documentId\"]}}/mailingprice"
						}
					}
				},
				{
					"name": "GET Spaces Documents Versions",
					"value": "GET Spaces Documents Versions",
					"action": "GET Spaces Documents Versions",
					"description": "Returns versions of the document",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/documents/{{$parameter[\"documentId\"]}}/versions"
						}
					}
				},
				{
					"name": "POST Spaces Documents Versions",
					"value": "POST Spaces Documents Versions",
					"action": "POST Spaces Documents Versions",
					"description": "Add a version to a document and set it as current",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/documents/{{$parameter[\"documentId\"]}}/versions"
						}
					}
				},
				{
					"name": "GET Spaces Documents Versions Current",
					"value": "GET Spaces Documents Versions Current",
					"action": "GET Spaces Documents Versions Current",
					"description": "Returns current version of the document",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/documents/{{$parameter[\"documentId\"]}}/versions/current"
						}
					}
				},
				{
					"name": "GET Spaces Documents Access",
					"value": "GET Spaces Documents Access",
					"action": "GET Spaces Documents Access",
					"description": "Returns accesses of one document",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/documents/{{$parameter[\"id\"]}}/access"
						}
					}
				},
				{
					"name": "GET Spaces Documents Accounting",
					"value": "GET Spaces Documents Accounting",
					"action": "GET Spaces Documents Accounting",
					"description": "Returns the document with the accounting property",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/documents/{{$parameter[\"id\"]}}/accounting"
						}
					}
				},
				{
					"name": "GET Spaces Documents Download",
					"value": "GET Spaces Documents Download",
					"action": "GET Spaces Documents Download",
					"description": "Returns content of one document",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/documents/{{$parameter[\"id\"]}}/download"
						}
					}
				},
				{
					"name": "GET Spaces Employees",
					"value": "GET Spaces Employees",
					"action": "GET Spaces Employees",
					"description": "Returns folders with Id and employee data",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/employees"
						}
					}
				},
				{
					"name": "GET Spaces Employees All",
					"value": "GET Spaces Employees All",
					"action": "GET Spaces Employees All",
					"description": "Returns folders with Id and employee data (even archived)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/employees/all"
						}
					}
				},
				{
					"name": "GET Spaces Employers",
					"value": "GET Spaces Employers",
					"action": "GET Spaces Employers",
					"description": "Returns folders with Id and employer data",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/employers"
						}
					}
				},
				{
					"name": "GET Spaces Employers All",
					"value": "GET Spaces Employers All",
					"action": "GET Spaces Employers All",
					"description": "Returns folders with Id and employer data (even archived)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/employers/all"
						}
					}
				},
				{
					"name": "GET Spaces Extend",
					"value": "GET Spaces Extend",
					"action": "GET Spaces Extend",
					"description": "read the data of a space",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/extend"
						}
					}
				},
				{
					"name": "POST Spaces Extend",
					"value": "POST Spaces Extend",
					"action": "POST Spaces Extend",
					"description": "Add a data to a space",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/extend"
						}
					}
				},
				{
					"name": "GET Spaces Folders",
					"value": "GET Spaces Folders",
					"action": "GET Spaces Folders",
					"description": "Returns folders of the space",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders"
						}
					}
				},
				{
					"name": "GET Spaces Folders All",
					"value": "GET Spaces Folders All",
					"action": "GET Spaces Folders All",
					"description": "Returns folders of the space (even archived)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/all"
						}
					}
				},
				{
					"name": "DELETE Spaces Folders Bank Statements",
					"value": "DELETE Spaces Folders Bank Statements",
					"action": "DELETE Spaces Folders Bank Statements",
					"description": "delete a bank statement",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"folderId\"]}}/bank-statements/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "PATCH Spaces Folders Bank Statements",
					"value": "PATCH Spaces Folders Bank Statements",
					"action": "PATCH Spaces Folders Bank Statements",
					"description": "modify a bank statement",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"folderId\"]}}/bank-statements/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "DELETE Spaces Folders Contractual Documents",
					"value": "DELETE Spaces Folders Contractual Documents",
					"action": "DELETE Spaces Folders Contractual Documents",
					"description": "delete a contractual document",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"folderId\"]}}/contractual-documents/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "PATCH Spaces Folders Contractual Documents",
					"value": "PATCH Spaces Folders Contractual Documents",
					"action": "PATCH Spaces Folders Contractual Documents",
					"description": "modify a contractual document",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"folderId\"]}}/contractual-documents/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "DELETE Spaces Folders Corporate Tax Declarations",
					"value": "DELETE Spaces Folders Corporate Tax Declarations",
					"action": "DELETE Spaces Folders Corporate Tax Declarations",
					"description": "delete a corporate tax declaration",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"folderId\"]}}/corporate-tax-declarations/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "PATCH Spaces Folders Corporate Tax Declarations",
					"value": "PATCH Spaces Folders Corporate Tax Declarations",
					"action": "PATCH Spaces Folders Corporate Tax Declarations",
					"description": "modify a coporate tax declaration",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"folderId\"]}}/corporate-tax-declarations/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "DELETE Spaces Folders Expense Proofs",
					"value": "DELETE Spaces Folders Expense Proofs",
					"action": "DELETE Spaces Folders Expense Proofs",
					"description": "delete an expense proof",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"folderId\"]}}/expense-proofs/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "PATCH Spaces Folders Expense Proofs",
					"value": "PATCH Spaces Folders Expense Proofs",
					"action": "PATCH Spaces Folders Expense Proofs",
					"description": "modify an expense report",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"folderId\"]}}/expense-proofs/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "DELETE Spaces Folders Expense Reports",
					"value": "DELETE Spaces Folders Expense Reports",
					"action": "DELETE Spaces Folders Expense Reports",
					"description": "delete an expense report",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"folderId\"]}}/expense-reports/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "PATCH Spaces Folders Expense Reports",
					"value": "PATCH Spaces Folders Expense Reports",
					"action": "PATCH Spaces Folders Expense Reports",
					"description": "modify an expense report",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"folderId\"]}}/expense-reports/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "DELETE Spaces Folders Invoices",
					"value": "DELETE Spaces Folders Invoices",
					"action": "DELETE Spaces Folders Invoices",
					"description": "delete an invoice document",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"folderId\"]}}/invoices/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "PATCH Spaces Folders Invoices",
					"value": "PATCH Spaces Folders Invoices",
					"action": "PATCH Spaces Folders Invoices",
					"description": "modify a invoice",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"folderId\"]}}/invoices/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "GET Spaces Folders Nominative Social Declarations",
					"value": "GET Spaces Folders Nominative Social Declarations",
					"action": "GET Spaces Folders Nominative Social Declarations",
					"description": "get a nominative social declaration",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"folderId\"]}}/nominative-social-declarations/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "DELETE Spaces Folders Other Taxes",
					"value": "DELETE Spaces Folders Other Taxes",
					"action": "DELETE Spaces Folders Other Taxes",
					"description": "delete a tax declaration",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"folderId\"]}}/other-taxes/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "PATCH Spaces Folders Other Taxes",
					"value": "PATCH Spaces Folders Other Taxes",
					"action": "PATCH Spaces Folders Other Taxes",
					"description": "modify an other tax declaration",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"folderId\"]}}/other-taxes/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "DELETE Spaces Folders Payrolls",
					"value": "DELETE Spaces Folders Payrolls",
					"action": "DELETE Spaces Folders Payrolls",
					"description": "delete a payroll",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"folderId\"]}}/payrolls/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "PATCH Spaces Folders Payrolls",
					"value": "PATCH Spaces Folders Payrolls",
					"action": "PATCH Spaces Folders Payrolls",
					"description": "modify a payroll",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"folderId\"]}}/payrolls/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "POST Spaces Folders Payrolls Refresh",
					"value": "POST Spaces Folders Payrolls Refresh",
					"action": "POST Spaces Folders Payrolls Refresh",
					"description": "recalculate a payroll",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"folderId\"]}}/payrolls/{{$parameter[\"documentId\"]}}/refresh"
						}
					}
				},
				{
					"name": "DELETE Spaces Folders Payslips",
					"value": "DELETE Spaces Folders Payslips",
					"action": "DELETE Spaces Folders Payslips",
					"description": "delete a payslip",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"folderId\"]}}/payslips/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "PATCH Spaces Folders Payslips",
					"value": "PATCH Spaces Folders Payslips",
					"action": "PATCH Spaces Folders Payslips",
					"description": "modify a payslip",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"folderId\"]}}/payslips/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "DELETE Spaces Folders Social Contracts",
					"value": "DELETE Spaces Folders Social Contracts",
					"action": "DELETE Spaces Folders Social Contracts",
					"description": "delete a social contract",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"folderId\"]}}/social-contracts/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "PATCH Spaces Folders Social Contracts",
					"value": "PATCH Spaces Folders Social Contracts",
					"action": "PATCH Spaces Folders Social Contracts",
					"description": "modify a social contract",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"folderId\"]}}/social-contracts/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "DELETE Spaces Folders Social Declarations",
					"value": "DELETE Spaces Folders Social Declarations",
					"action": "DELETE Spaces Folders Social Declarations",
					"description": "delete a social declaration",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"folderId\"]}}/social-declarations/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "PATCH Spaces Folders Social Declarations",
					"value": "PATCH Spaces Folders Social Declarations",
					"action": "PATCH Spaces Folders Social Declarations",
					"description": "modify a social declaration",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"folderId\"]}}/social-declarations/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "DELETE Spaces Folders Vat Declarations",
					"value": "DELETE Spaces Folders Vat Declarations",
					"action": "DELETE Spaces Folders Vat Declarations",
					"description": "delete a VAT declaration",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"folderId\"]}}/vat-declarations/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "PATCH Spaces Folders Vat Declarations",
					"value": "PATCH Spaces Folders Vat Declarations",
					"action": "PATCH Spaces Folders Vat Declarations",
					"description": "modify a vat declaration",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"folderId\"]}}/vat-declarations/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "PATCH Spaces Folders",
					"value": "PATCH Spaces Folders",
					"action": "PATCH Spaces Folders",
					"description": "Modify a Folder (except Name, Class, ModificationDate and ArchivalDate)",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "DELETE Spaces Folders Accounting Year",
					"value": "DELETE Spaces Folders Accounting Year",
					"action": "DELETE Spaces Folders Accounting Year",
					"description": "delete an AccountingYear",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/accounting-year"
						}
					}
				},
				{
					"name": "PATCH Spaces Folders Accounting Year",
					"value": "PATCH Spaces Folders Accounting Year",
					"action": "PATCH Spaces Folders Accounting Year",
					"description": "Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and AccountingYear data",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/accounting-year"
						}
					}
				},
				{
					"name": "GET Spaces Folders Accountings",
					"value": "GET Spaces Folders Accountings",
					"action": "GET Spaces Folders Accountings",
					"description": "Returns accountings documents of the folder (results and taxation or accountingyear)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/accountings"
						}
					}
				},
				{
					"name": "GET Spaces Folders Accountings Journal",
					"value": "GET Spaces Folders Accountings Journal",
					"action": "GET Spaces Folders Accountings Journal",
					"description": "journal of accountings document delivered to a customer",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/accountings-journal"
						}
					}
				},
				{
					"name": "DELETE Spaces Folders Bank",
					"value": "DELETE Spaces Folders Bank",
					"action": "DELETE Spaces Folders Bank",
					"description": "Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and Bank data",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/bank"
						}
					}
				},
				{
					"name": "GET Spaces Folders Bank",
					"value": "GET Spaces Folders Bank",
					"action": "GET Spaces Folders Bank",
					"description": "Returns folder with Id and bank data",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/bank"
						}
					}
				},
				{
					"name": "PATCH Spaces Folders Bank",
					"value": "PATCH Spaces Folders Bank",
					"action": "PATCH Spaces Folders Bank",
					"description": "Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Bank data",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/bank"
						}
					}
				},
				{
					"name": "GET Spaces Folders Bank Statements",
					"value": "GET Spaces Folders Bank Statements",
					"action": "GET Spaces Folders Bank Statements",
					"description": "Returns bank statements of the folder bank",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/bank-statements"
						}
					}
				},
				{
					"name": "POST Spaces Folders Bank Statements",
					"value": "POST Spaces Folders Bank Statements",
					"action": "POST Spaces Folders Bank Statements",
					"description": "Add a bank statement in a folder bank",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/bank-statements"
						}
					}
				},
				{
					"name": "PATCH Spaces Folders Collective Decision",
					"value": "PATCH Spaces Folders Collective Decision",
					"action": "PATCH Spaces Folders Collective Decision",
					"description": "Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Collective Decision data",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/collective-decision"
						}
					}
				},
				{
					"name": "GET Spaces Folders Common Folders",
					"value": "GET Spaces Folders Common Folders",
					"action": "GET Spaces Folders Common Folders",
					"description": "Returns common folders of a folder",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/common-folders"
						}
					}
				},
				{
					"name": "POST Spaces Folders Common Folders",
					"value": "POST Spaces Folders Common Folders",
					"action": "POST Spaces Folders Common Folders",
					"description": "Add a common folder in another folder",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/common-folders"
						}
					}
				},
				{
					"name": "GET Spaces Folders Common Folders All",
					"value": "GET Spaces Folders Common Folders All",
					"action": "GET Spaces Folders Common Folders All",
					"description": "Returns common folders (even archived) of a folder",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/common-folders/all"
						}
					}
				},
				{
					"name": "GET Spaces Folders Contracting Partner",
					"value": "GET Spaces Folders Contracting Partner",
					"action": "GET Spaces Folders Contracting Partner",
					"description": "Returns all contracting partners of a contract",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/contracting-partner"
						}
					}
				},
				{
					"name": "GET Spaces Folders Contracting Partner Space",
					"value": "GET Spaces Folders Contracting Partner Space",
					"action": "GET Spaces Folders Contracting Partner Space",
					"description": "Returns collector space of a contract",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/contracting-partner/space"
						}
					}
				},
				{
					"name": "GET Spaces Folders Contractual Documents",
					"value": "GET Spaces Folders Contractual Documents",
					"action": "GET Spaces Folders Contractual Documents",
					"description": "Returns documents of the folder",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/contractual-documents"
						}
					}
				},
				{
					"name": "POST Spaces Folders Contractual Documents",
					"value": "POST Spaces Folders Contractual Documents",
					"action": "POST Spaces Folders Contractual Documents",
					"description": "Add a document in a folder",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/contractual-documents"
						}
					}
				},
				{
					"name": "GET Spaces Folders Contractual Relationship",
					"value": "GET Spaces Folders Contractual Relationship",
					"action": "GET Spaces Folders Contractual Relationship",
					"description": "Returns folder with Id and contractual-relationship data",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/contractual-relationship"
						}
					}
				},
				{
					"name": "GET Spaces Folders Coporate Tax Declarations",
					"value": "GET Spaces Folders Coporate Tax Declarations",
					"action": "GET Spaces Folders Coporate Tax Declarations",
					"description": "Returns corporate tax declarations",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/coporate-tax-declarations"
						}
					}
				},
				{
					"name": "POST Spaces Folders Coporate Tax Declarations",
					"value": "POST Spaces Folders Coporate Tax Declarations",
					"action": "POST Spaces Folders Coporate Tax Declarations",
					"description": "Add a corporate tax declaration",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/coporate-tax-declarations"
						}
					}
				},
				{
					"name": "DELETE Spaces Folders Customer",
					"value": "DELETE Spaces Folders Customer",
					"action": "DELETE Spaces Folders Customer",
					"description": "delete a customer",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/customer"
						}
					}
				},
				{
					"name": "GET Spaces Folders Customer",
					"value": "GET Spaces Folders Customer",
					"action": "GET Spaces Folders Customer",
					"description": "Returns folder with Id and customer data",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/customer"
						}
					}
				},
				{
					"name": "PATCH Spaces Folders Customer",
					"value": "PATCH Spaces Folders Customer",
					"action": "PATCH Spaces Folders Customer",
					"description": "Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Customer data",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/customer"
						}
					}
				},
				{
					"name": "GET Spaces Folders Deliveries Journal",
					"value": "GET Spaces Folders Deliveries Journal",
					"action": "GET Spaces Folders Deliveries Journal",
					"description": "journal of documents delivered to a customer",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/deliveries-journal"
						}
					}
				},
				{
					"name": "GET Spaces Folders Documents",
					"value": "GET Spaces Folders Documents",
					"action": "GET Spaces Folders Documents",
					"description": "Returns documents of the folder",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/documents"
						}
					}
				},
				{
					"name": "POST Spaces Folders Documents",
					"value": "POST Spaces Folders Documents",
					"action": "POST Spaces Folders Documents",
					"description": "Add a document in a folder",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/documents"
						}
					}
				},
				{
					"name": "PATCH Spaces Folders Documents Detach",
					"value": "PATCH Spaces Folders Documents Detach",
					"action": "PATCH Spaces Folders Documents Detach",
					"description": "Detach a doc of a folder",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/documents/{{$parameter[\"documentId\"]}}/detach"
						}
					}
				},
				{
					"name": "DELETE Spaces Folders Employee",
					"value": "DELETE Spaces Folders Employee",
					"action": "DELETE Spaces Folders Employee",
					"description": "Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and Employee data",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/employee"
						}
					}
				},
				{
					"name": "GET Spaces Folders Employee",
					"value": "GET Spaces Folders Employee",
					"action": "GET Spaces Folders Employee",
					"description": "Returns folder with Id and employee data",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/employee"
						}
					}
				},
				{
					"name": "PATCH Spaces Folders Employee",
					"value": "PATCH Spaces Folders Employee",
					"action": "PATCH Spaces Folders Employee",
					"description": "Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Employee data",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/employee"
						}
					}
				},
				{
					"name": "GET Spaces Folders Expense Proofs",
					"value": "GET Spaces Folders Expense Proofs",
					"action": "GET Spaces Folders Expense Proofs",
					"description": "Returns expense proofs of the folder (social, followup or exchange)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/expense-proofs"
						}
					}
				},
				{
					"name": "POST Spaces Folders Expense Proofs",
					"value": "POST Spaces Folders Expense Proofs",
					"action": "POST Spaces Folders Expense Proofs",
					"description": "Add a expense proof in a folder followup or exchange",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/expense-proofs"
						}
					}
				},
				{
					"name": "GET Spaces Folders Expense Reports",
					"value": "GET Spaces Folders Expense Reports",
					"action": "GET Spaces Folders Expense Reports",
					"description": "Returns expense reports of the folder (social or followup)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/expense-reports"
						}
					}
				},
				{
					"name": "POST Spaces Folders Expense Reports",
					"value": "POST Spaces Folders Expense Reports",
					"action": "POST Spaces Folders Expense Reports",
					"description": "Add a expense report in a folder followup",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/expense-reports"
						}
					}
				},
				{
					"name": "GET Spaces Folders Expense Reports Expense Proofs",
					"value": "GET Spaces Folders Expense Reports Expense Proofs",
					"action": "GET Spaces Folders Expense Reports Expense Proofs",
					"description": "Returns expense proofs linked to the expenseReportId",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/expense-reports/{{$parameter[\"expenseReportId\"]}}/expense-proofs"
						}
					}
				},
				{
					"name": "DELETE Spaces Folders Insurance",
					"value": "DELETE Spaces Folders Insurance",
					"action": "DELETE Spaces Folders Insurance",
					"description": "Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and Insurance data",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/insurance"
						}
					}
				},
				{
					"name": "GET Spaces Folders Insurance",
					"value": "GET Spaces Folders Insurance",
					"action": "GET Spaces Folders Insurance",
					"description": "Returns folder with Id and insurance data",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/insurance"
						}
					}
				},
				{
					"name": "PATCH Spaces Folders Insurance",
					"value": "PATCH Spaces Folders Insurance",
					"action": "PATCH Spaces Folders Insurance",
					"description": "Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Insurance data",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/insurance"
						}
					}
				},
				{
					"name": "GET Spaces Folders Invoices",
					"value": "GET Spaces Folders Invoices",
					"action": "GET Spaces Folders Invoices",
					"description": "Returns invoices of the folder (customer, provider, accountingyear or root folders customers or providers)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/invoices"
						}
					}
				},
				{
					"name": "POST Spaces Folders Invoices",
					"value": "POST Spaces Folders Invoices",
					"action": "POST Spaces Folders Invoices",
					"description": "Add a invoice in a folder of a customer or a provider",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/invoices"
						}
					}
				},
				{
					"name": "GET Spaces Folders Legal Entity",
					"value": "GET Spaces Folders Legal Entity",
					"action": "GET Spaces Folders Legal Entity",
					"description": "Returns legal entity of a follow up folder",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/legal-entity"
						}
					}
				},
				{
					"name": "DELETE Spaces Folders Loan",
					"value": "DELETE Spaces Folders Loan",
					"action": "DELETE Spaces Folders Loan",
					"description": "Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and Loan data",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/loan"
						}
					}
				},
				{
					"name": "GET Spaces Folders Loan",
					"value": "GET Spaces Folders Loan",
					"action": "GET Spaces Folders Loan",
					"description": "Returns folder with Id and loan data",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/loan"
						}
					}
				},
				{
					"name": "PATCH Spaces Folders Loan",
					"value": "PATCH Spaces Folders Loan",
					"action": "PATCH Spaces Folders Loan",
					"description": "Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Loan data",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/loan"
						}
					}
				},
				{
					"name": "GET Spaces Folders Messages",
					"value": "GET Spaces Folders Messages",
					"action": "GET Spaces Folders Messages",
					"description": "Returns messages of the folder",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/messages"
						}
					}
				},
				{
					"name": "POST Spaces Folders Messages",
					"value": "POST Spaces Folders Messages",
					"action": "POST Spaces Folders Messages",
					"description": "Write a message in the journal of a folder",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/messages"
						}
					}
				},
				{
					"name": "PATCH Spaces Folders Messages",
					"value": "PATCH Spaces Folders Messages",
					"action": "PATCH Spaces Folders Messages",
					"description": "Modify a Message",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/messages/{{$parameter[\"messageId\"]}}"
						}
					}
				},
				{
					"name": "GET Spaces Folders Other Taxes",
					"value": "GET Spaces Folders Other Taxes",
					"action": "GET Spaces Folders Other Taxes",
					"description": "Returns other taxes declarations",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/other-taxes"
						}
					}
				},
				{
					"name": "POST Spaces Folders Other Taxes",
					"value": "POST Spaces Folders Other Taxes",
					"action": "POST Spaces Folders Other Taxes",
					"description": "Add a tax declaration",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/other-taxes"
						}
					}
				},
				{
					"name": "GET Spaces Folders Passwords",
					"value": "GET Spaces Folders Passwords",
					"action": "GET Spaces Folders Passwords",
					"description": "Returns identifiers/passwords of the folder",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/passwords"
						}
					}
				},
				{
					"name": "POST Spaces Folders Passwords",
					"value": "POST Spaces Folders Passwords",
					"action": "POST Spaces Folders Passwords",
					"description": "Write a identifier/password in aa folder",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/passwords"
						}
					}
				},
				{
					"name": "DELETE Spaces Folders Passwords",
					"value": "DELETE Spaces Folders Passwords",
					"action": "DELETE Spaces Folders Passwords",
					"description": "delete a password",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/passwords/{{$parameter[\"passwordId\"]}}"
						}
					}
				},
				{
					"name": "PATCH Spaces Folders Passwords",
					"value": "PATCH Spaces Folders Passwords",
					"action": "PATCH Spaces Folders Passwords",
					"description": "Modify a Password",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/passwords/{{$parameter[\"passwordId\"]}}"
						}
					}
				},
				{
					"name": "GET Spaces Folders Payrolls",
					"value": "GET Spaces Folders Payrolls",
					"action": "GET Spaces Folders Payrolls",
					"description": "Returns payrolls of the folder social",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/payrolls"
						}
					}
				},
				{
					"name": "POST Spaces Folders Payrolls",
					"value": "POST Spaces Folders Payrolls",
					"action": "POST Spaces Folders Payrolls",
					"description": "Add a payroll in a folder social",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/payrolls"
						}
					}
				},
				{
					"name": "DELETE Spaces Folders Payrolls Nominative Social Declaration",
					"value": "DELETE Spaces Folders Payrolls Nominative Social Declaration",
					"action": "DELETE Spaces Folders Payrolls Nominative Social Declaration",
					"description": "delete a nominative social declaration in a folder social",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/payrolls/{{$parameter[\"payrollId\"]}}/nominative-social-declaration"
						}
					}
				},
				{
					"name": "POST Spaces Folders Payrolls Nominative Social Declaration",
					"value": "POST Spaces Folders Payrolls Nominative Social Declaration",
					"action": "POST Spaces Folders Payrolls Nominative Social Declaration",
					"description": "Add a nominative social declaration in a folder social",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/payrolls/{{$parameter[\"payrollId\"]}}/nominative-social-declaration"
						}
					}
				},
				{
					"name": "GET Spaces Folders Payslips",
					"value": "GET Spaces Folders Payslips",
					"action": "GET Spaces Folders Payslips",
					"description": "Returns payslips of the folder employee",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/payslips"
						}
					}
				},
				{
					"name": "POST Spaces Folders Payslips",
					"value": "POST Spaces Folders Payslips",
					"action": "POST Spaces Folders Payslips",
					"description": "Add a payslip in a folder employee",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/payslips"
						}
					}
				},
				{
					"name": "DELETE Spaces Folders Portfolio",
					"value": "DELETE Spaces Folders Portfolio",
					"action": "DELETE Spaces Folders Portfolio",
					"description": "delete a secondary portfolio of a customer contract",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/portfolio/{{$parameter[\"portfolioId\"]}}"
						}
					}
				},
				{
					"name": "DELETE Spaces Folders Professional Vehicle",
					"value": "DELETE Spaces Folders Professional Vehicle",
					"action": "DELETE Spaces Folders Professional Vehicle",
					"description": "delete a Professional Vehicle",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/professional-vehicle"
						}
					}
				},
				{
					"name": "PATCH Spaces Folders Professional Vehicle",
					"value": "PATCH Spaces Folders Professional Vehicle",
					"action": "PATCH Spaces Folders Professional Vehicle",
					"description": "Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Professional Vehicle data",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/professional-vehicle"
						}
					}
				},
				{
					"name": "DELETE Spaces Folders Provider",
					"value": "DELETE Spaces Folders Provider",
					"action": "DELETE Spaces Folders Provider",
					"description": "delete a provider",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/provider"
						}
					}
				},
				{
					"name": "GET Spaces Folders Provider",
					"value": "GET Spaces Folders Provider",
					"action": "GET Spaces Folders Provider",
					"description": "Returns folder with Id and provider data",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/provider"
						}
					}
				},
				{
					"name": "PATCH Spaces Folders Provider",
					"value": "PATCH Spaces Folders Provider",
					"action": "PATCH Spaces Folders Provider",
					"description": "Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Provider data",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/provider"
						}
					}
				},
				{
					"name": "GET Spaces Folders Required Documents",
					"value": "GET Spaces Folders Required Documents",
					"action": "GET Spaces Folders Required Documents",
					"description": "list of the required documents for a person",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/required-documents"
						}
					}
				},
				{
					"name": "PATCH Spaces Folders Required Documents",
					"value": "PATCH Spaces Folders Required Documents",
					"action": "PATCH Spaces Folders Required Documents",
					"description": "Modify the status of a requireddocument",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/required-documents/{{$parameter[\"requireddocumentid\"]}}"
						}
					}
				},
				{
					"name": "POST Spaces Folders Required Documents",
					"value": "POST Spaces Folders Required Documents",
					"action": "POST Spaces Folders Required Documents",
					"description": "Add a required document to a line",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/required-documents/{{$parameter[\"requireddocumentid\"]}}"
						}
					}
				},
				{
					"name": "DELETE Spaces Folders Required Documents Documents",
					"value": "DELETE Spaces Folders Required Documents Documents",
					"action": "DELETE Spaces Folders Required Documents Documents",
					"description": "delete a document from a required document",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/required-documents/{{$parameter[\"requireddocumentid\"]}}/documents/{{$parameter[\"documentId\"]}}"
						}
					}
				},
				{
					"name": "GET Spaces Folders Sections",
					"value": "GET Spaces Folders Sections",
					"action": "GET Spaces Folders Sections",
					"description": "Returns sections of the folder",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/sections"
						}
					}
				},
				{
					"name": "GET Spaces Folders Social Contracts",
					"value": "GET Spaces Folders Social Contracts",
					"action": "GET Spaces Folders Social Contracts",
					"description": "Returns social contracts of the folder employee",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/social-contracts"
						}
					}
				},
				{
					"name": "POST Spaces Folders Social Contracts",
					"value": "POST Spaces Folders Social Contracts",
					"action": "POST Spaces Folders Social Contracts",
					"description": "Add a social contract in a folder employee",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/social-contracts"
						}
					}
				},
				{
					"name": "GET Spaces Folders Social Declarations",
					"value": "GET Spaces Folders Social Declarations",
					"action": "GET Spaces Folders Social Declarations",
					"description": "Returns social declarations",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/social-declarations"
						}
					}
				},
				{
					"name": "POST Spaces Folders Social Declarations",
					"value": "POST Spaces Folders Social Declarations",
					"action": "POST Spaces Folders Social Declarations",
					"description": "Add a social declaration",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/social-declarations"
						}
					}
				},
				{
					"name": "DELETE Spaces Folders Social Regimes",
					"value": "DELETE Spaces Folders Social Regimes",
					"action": "DELETE Spaces Folders Social Regimes",
					"description": "delete a social regime",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/social-regimes"
						}
					}
				},
				{
					"name": "GET Spaces Folders Social Regimes",
					"value": "GET Spaces Folders Social Regimes",
					"action": "GET Spaces Folders Social Regimes",
					"description": "Returns folder with Id and social regime data",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/social-regimes"
						}
					}
				},
				{
					"name": "PATCH Spaces Folders Social Regimes",
					"value": "PATCH Spaces Folders Social Regimes",
					"action": "PATCH Spaces Folders Social Regimes",
					"description": "Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Social Regime data",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/social-regimes"
						}
					}
				},
				{
					"name": "GET Spaces Folders Sum Invoices",
					"value": "GET Spaces Folders Sum Invoices",
					"action": "GET Spaces Folders Sum Invoices",
					"description": "Returns sum of invoices of the folder (customer, provider, accountingyear or root folders customers or providers)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/sum-invoices"
						}
					}
				},
				{
					"name": "DELETE Spaces Folders Tax Contract",
					"value": "DELETE Spaces Folders Tax Contract",
					"action": "DELETE Spaces Folders Tax Contract",
					"description": "Delete a Folder (except Name, Class, ModificationDate and ArchivalDate) and tax contract data",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/tax-contract"
						}
					}
				},
				{
					"name": "PATCH Spaces Folders Tax Contract",
					"value": "PATCH Spaces Folders Tax Contract",
					"action": "PATCH Spaces Folders Tax Contract",
					"description": "Modify a Folder (except Name, Class, ModificationDate and ArchivalDate) and Tax Contract data",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/tax-contract"
						}
					}
				},
				{
					"name": "GET Spaces Folders Vat Declarations",
					"value": "GET Spaces Folders Vat Declarations",
					"action": "GET Spaces Folders Vat Declarations",
					"description": "Returns vat declarations",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/vat-declarations"
						}
					}
				},
				{
					"name": "POST Spaces Folders Vat Declarations",
					"value": "POST Spaces Folders Vat Declarations",
					"action": "POST Spaces Folders Vat Declarations",
					"description": "Add a vat declaration",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/vat-declarations"
						}
					}
				},
				{
					"name": "DELETE Spaces Folders",
					"value": "DELETE Spaces Folders",
					"action": "DELETE Spaces Folders",
					"description": "delete a class document",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/{{$parameter[\"documentClass\"]}}"
						}
					}
				},
				{
					"name": "POST Spaces Folders",
					"value": "POST Spaces Folders",
					"action": "POST Spaces Folders",
					"description": "Add a document in a folder",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/folders/{{$parameter[\"id\"]}}/{{$parameter[\"documentClass\"]}}"
						}
					}
				},
				{
					"name": "GET Spaces Legal Entities Banks",
					"value": "GET Spaces Legal Entities Banks",
					"action": "GET Spaces Legal Entities Banks",
					"description": "Returns list of bank folders for a legal-entity",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/legal-entities/{{$parameter[\"id\"]}}/banks"
						}
					}
				},
				{
					"name": "POST Spaces Legal Entities Banks",
					"value": "POST Spaces Legal Entities Banks",
					"action": "POST Spaces Legal Entities Banks",
					"description": "Add a folder for a bank",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/legal-entities/{{$parameter[\"id\"]}}/banks"
						}
					}
				},
				{
					"name": "GET Spaces Legal Entities Banks All",
					"value": "GET Spaces Legal Entities Banks All",
					"action": "GET Spaces Legal Entities Banks All",
					"description": "Returns folder of the banks even archived",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/legal-entities/{{$parameter[\"id\"]}}/banks/all"
						}
					}
				},
				{
					"name": "GET Spaces Legal Entities Contracts",
					"value": "GET Spaces Legal Entities Contracts",
					"action": "GET Spaces Legal Entities Contracts",
					"description": "Returns all contract folders of the legal entity",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/legal-entities/{{$parameter[\"id\"]}}/contracts"
						}
					}
				},
				{
					"name": "GET Spaces Legal Entities Contractual Relationships",
					"value": "GET Spaces Legal Entities Contractual Relationships",
					"action": "GET Spaces Legal Entities Contractual Relationships",
					"description": "Returns folder of the others contract with legal entity",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/legal-entities/{{$parameter[\"id\"]}}/contractual-relationships"
						}
					}
				},
				{
					"name": "GET Spaces Legal Entities Contractual Relationships All",
					"value": "GET Spaces Legal Entities Contractual Relationships All",
					"action": "GET Spaces Legal Entities Contractual Relationships All",
					"description": "Returns folder of the others contract with legal entity (even archived)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/legal-entities/{{$parameter[\"id\"]}}/contractual-relationships/all"
						}
					}
				},
				{
					"name": "GET Spaces Legal Entities Customers",
					"value": "GET Spaces Legal Entities Customers",
					"action": "GET Spaces Legal Entities Customers",
					"description": "Returns folder of the customer",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/legal-entities/{{$parameter[\"id\"]}}/customers"
						}
					}
				},
				{
					"name": "POST Spaces Legal Entities Customers",
					"value": "POST Spaces Legal Entities Customers",
					"action": "POST Spaces Legal Entities Customers",
					"description": "Add a folder for a customer",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/legal-entities/{{$parameter[\"id\"]}}/customers"
						}
					}
				},
				{
					"name": "GET Spaces Legal Entities Customers All",
					"value": "GET Spaces Legal Entities Customers All",
					"action": "GET Spaces Legal Entities Customers All",
					"description": "Returns folder of the customers (even archived)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/legal-entities/{{$parameter[\"id\"]}}/customers/all"
						}
					}
				},
				{
					"name": "GET Spaces Legal Entities Insurances",
					"value": "GET Spaces Legal Entities Insurances",
					"action": "GET Spaces Legal Entities Insurances",
					"description": "Returns list of insurance folders for a legal-entity",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/legal-entities/{{$parameter[\"id\"]}}/insurances"
						}
					}
				},
				{
					"name": "POST Spaces Legal Entities Insurances",
					"value": "POST Spaces Legal Entities Insurances",
					"action": "POST Spaces Legal Entities Insurances",
					"description": "Add a folder for a insurance",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/legal-entities/{{$parameter[\"id\"]}}/insurances"
						}
					}
				},
				{
					"name": "GET Spaces Legal Entities Insurances All",
					"value": "GET Spaces Legal Entities Insurances All",
					"action": "GET Spaces Legal Entities Insurances All",
					"description": "Returns folder of the insurances even archived",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/legal-entities/{{$parameter[\"id\"]}}/insurances/all"
						}
					}
				},
				{
					"name": "GET Spaces Legal Entities Loans",
					"value": "GET Spaces Legal Entities Loans",
					"action": "GET Spaces Legal Entities Loans",
					"description": "Returns folder of the loan",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/legal-entities/{{$parameter[\"id\"]}}/loans"
						}
					}
				},
				{
					"name": "POST Spaces Legal Entities Loans",
					"value": "POST Spaces Legal Entities Loans",
					"action": "POST Spaces Legal Entities Loans",
					"description": "Add a folder for a loan",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/legal-entities/{{$parameter[\"id\"]}}/loans"
						}
					}
				},
				{
					"name": "GET Spaces Legal Entities Loans All",
					"value": "GET Spaces Legal Entities Loans All",
					"action": "GET Spaces Legal Entities Loans All",
					"description": "Returns folder of the loans even archived",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/legal-entities/{{$parameter[\"id\"]}}/loans/all"
						}
					}
				},
				{
					"name": "GET Spaces Legal Entities Providers",
					"value": "GET Spaces Legal Entities Providers",
					"action": "GET Spaces Legal Entities Providers",
					"description": "Returns list of providers folders for a legal-entity",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/legal-entities/{{$parameter[\"id\"]}}/providers"
						}
					}
				},
				{
					"name": "POST Spaces Legal Entities Providers",
					"value": "POST Spaces Legal Entities Providers",
					"action": "POST Spaces Legal Entities Providers",
					"description": "Add a folder for a provider",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/legal-entities/{{$parameter[\"id\"]}}/providers"
						}
					}
				},
				{
					"name": "GET Spaces Legal Entities Providers All",
					"value": "GET Spaces Legal Entities Providers All",
					"action": "GET Spaces Legal Entities Providers All",
					"description": "Returns folder of the providers even archived",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/legal-entities/{{$parameter[\"id\"]}}/providers/all"
						}
					}
				},
				{
					"name": "GET Spaces Legal Entities Social Regimes",
					"value": "GET Spaces Legal Entities Social Regimes",
					"action": "GET Spaces Legal Entities Social Regimes",
					"description": "Returns list of social regimes folders for a legal-entity",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/legal-entities/{{$parameter[\"id\"]}}/social-regimes"
						}
					}
				},
				{
					"name": "POST Spaces Legal Entities Social Regimes",
					"value": "POST Spaces Legal Entities Social Regimes",
					"action": "POST Spaces Legal Entities Social Regimes",
					"description": "Add a folder for a social regime",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/legal-entities/{{$parameter[\"id\"]}}/social-regimes"
						}
					}
				},
				{
					"name": "GET Spaces Legal Entities Social Regimes All",
					"value": "GET Spaces Legal Entities Social Regimes All",
					"action": "GET Spaces Legal Entities Social Regimes All",
					"description": "Returns folder of the social regimes even archived",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/legal-entities/{{$parameter[\"id\"]}}/social-regimes/all"
						}
					}
				},
				{
					"name": "GET Spaces Loans",
					"value": "GET Spaces Loans",
					"action": "GET Spaces Loans",
					"description": "Returns list of all loan folders of the space",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/loans"
						}
					}
				},
				{
					"name": "GET Spaces Loans All",
					"value": "GET Spaces Loans All",
					"action": "GET Spaces Loans All",
					"description": "Returns list of all loan folders even archived of the space",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/loans/all"
						}
					}
				},
				{
					"name": "PATCH Spaces Persons Call For Document",
					"value": "PATCH Spaces Persons Call For Document",
					"action": "PATCH Spaces Persons Call For Document",
					"description": "modify the invitation of a person to collect documents",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/persons/{{$parameter[\"id\"]}}/call-for-document"
						}
					}
				},
				{
					"name": "POST Spaces Persons Call For Document",
					"value": "POST Spaces Persons Call For Document",
					"action": "POST Spaces Persons Call For Document",
					"description": "invite a person to collect documents",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/persons/{{$parameter[\"id\"]}}/call-for-document"
						}
					}
				},
				{
					"name": "GET Spaces Persons Employees",
					"value": "GET Spaces Persons Employees",
					"action": "GET Spaces Persons Employees",
					"description": "Returns folder of the employee",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/persons/{{$parameter[\"id\"]}}/employees"
						}
					}
				},
				{
					"name": "POST Spaces Persons Employees",
					"value": "POST Spaces Persons Employees",
					"action": "POST Spaces Persons Employees",
					"description": "Add a folder for a employee",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/persons/{{$parameter[\"id\"]}}/employees"
						}
					}
				},
				{
					"name": "GET Spaces Persons Employees All",
					"value": "GET Spaces Persons Employees All",
					"action": "GET Spaces Persons Employees All",
					"description": "Returns folder of all employees (even archived)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/persons/{{$parameter[\"id\"]}}/employees/all"
						}
					}
				},
				{
					"name": "GET Spaces Persons Exchange",
					"value": "GET Spaces Persons Exchange",
					"action": "GET Spaces Persons Exchange",
					"description": "Returns folder exchange of the person",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/persons/{{$parameter[\"id\"]}}/exchange"
						}
					}
				},
				{
					"name": "GET Spaces Persons Follow Ups",
					"value": "GET Spaces Persons Follow Ups",
					"action": "GET Spaces Persons Follow Ups",
					"description": "Returns folder of the person",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/persons/{{$parameter[\"id\"]}}/follow-ups"
						}
					}
				},
				{
					"name": "DELETE Spaces Persons Guest In Space",
					"value": "DELETE Spaces Persons Guest In Space",
					"action": "DELETE Spaces Persons Guest In Space",
					"description": "delete the invitation of a person in a space",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/persons/{{$parameter[\"id\"]}}/guest-in-space"
						}
					}
				},
				{
					"name": "PATCH Spaces Persons Guest In Space",
					"value": "PATCH Spaces Persons Guest In Space",
					"action": "PATCH Spaces Persons Guest In Space",
					"description": "invite a person in a space",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/persons/{{$parameter[\"id\"]}}/guest-in-space"
						}
					}
				},
				{
					"name": "POST Spaces Persons Guest In Space",
					"value": "POST Spaces Persons Guest In Space",
					"action": "POST Spaces Persons Guest In Space",
					"description": "invite a person in a space",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/persons/{{$parameter[\"id\"]}}/guest-in-space"
						}
					}
				},
				{
					"name": "DELETE Spaces Persons Invitation",
					"value": "DELETE Spaces Persons Invitation",
					"action": "DELETE Spaces Persons Invitation",
					"description": "delete the invitation of a person in a space",
					"routing": {
						"request": {
							"method": "DELETE",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/persons/{{$parameter[\"id\"]}}/invitation"
						}
					}
				},
				{
					"name": "GET Spaces Persons Invitation",
					"value": "GET Spaces Persons Invitation",
					"action": "GET Spaces Persons Invitation",
					"description": "Returns invitation of a person",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/persons/{{$parameter[\"id\"]}}/invitation"
						}
					}
				},
				{
					"name": "PATCH Spaces Persons Invitation",
					"value": "PATCH Spaces Persons Invitation",
					"action": "PATCH Spaces Persons Invitation",
					"description": "modify an invitation",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/persons/{{$parameter[\"id\"]}}/invitation"
						}
					}
				},
				{
					"name": "POST Spaces Persons Invitation",
					"value": "POST Spaces Persons Invitation",
					"action": "POST Spaces Persons Invitation",
					"description": "create an invitation in a space for a person",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/persons/{{$parameter[\"id\"]}}/invitation"
						}
					}
				},
				{
					"name": "POST Spaces Persons Invitation Send",
					"value": "POST Spaces Persons Invitation Send",
					"action": "POST Spaces Persons Invitation Send",
					"description": "send the invitation of a person in a space",
					"routing": {
						"request": {
							"method": "POST",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/persons/{{$parameter[\"id\"]}}/invitation/{{$parameter[\"invitationId\"]}}/send"
						}
					}
				},
				{
					"name": "PATCH Spaces Persons Folders",
					"value": "PATCH Spaces Persons Folders",
					"action": "PATCH Spaces Persons Folders",
					"description": "Modify an access",
					"routing": {
						"request": {
							"method": "PATCH",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/persons/{{$parameter[\"memberId\"]}}/folders/{{$parameter[\"id\"]}}"
						}
					}
				},
				{
					"name": "GET Spaces Providers",
					"value": "GET Spaces Providers",
					"action": "GET Spaces Providers",
					"description": "Returns folder with Id and provider data",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/providers"
						}
					}
				},
				{
					"name": "GET Spaces Providers All",
					"value": "GET Spaces Providers All",
					"action": "GET Spaces Providers All",
					"description": "Returns folder with Id and provider data (even archived)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/providers/all"
						}
					}
				},
				{
					"name": "GET Spaces Search",
					"value": "GET Spaces Search",
					"action": "GET Spaces Search",
					"description": "Research text inside documents, folders or messages",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/search"
						}
					}
				},
				{
					"name": "GET Spaces Social Regimes",
					"value": "GET Spaces Social Regimes",
					"action": "GET Spaces Social Regimes",
					"description": "Returns folder with Id and social regime data",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/social-regimes"
						}
					}
				},
				{
					"name": "GET Spaces Social Regimes All",
					"value": "GET Spaces Social Regimes All",
					"action": "GET Spaces Social Regimes All",
					"description": "Returns folder with Id and social regime data (even archived)",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/social-regimes/all"
						}
					}
				},
				{
					"name": "GET Spaces Spaces Invoicings",
					"value": "GET Spaces Spaces Invoicings",
					"action": "GET Spaces Spaces Invoicings",
					"description": "Returns CSV Invoicings of the spaces for the account of the spaceId",
					"routing": {
						"request": {
							"method": "GET",
							"url": "=/spaces/{{$parameter[\"spaceId\"]}}/spaces-invoicings"
						}
					}
				}
			],
			"default": ""
		},
		{
			"displayName": "GET /box/menus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Box Menus"
					]
				}
			}
		},
		{
			"displayName": "GET /business-groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Business Groups"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"description": "Name of the group",
			"default": "Dupond",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Business Groups"
					]
				}
			}
		},
		{
			"displayName": "PATCH /business-groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Business Groups"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "Client Durand",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Business Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /business-groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Business Groups"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "Client Durand",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Business Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /business-groups/all",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Business Groups All"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"description": "Name of the group",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Business Groups All"
					]
				}
			}
		},
		{
			"displayName": "GET /business-groups/{id}/spaces",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Business Groups Spaces"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the group",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Business Groups Spaces"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"description": "Name of the space",
			"default": "Mon Entreprise",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Business Groups Spaces"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "Type",
			"description": "Type of the space",
			"default": "private",
			"type": "options",
			"options": [
				{
					"name": "Private",
					"value": "private"
				},
				{
					"name": "Enterprise",
					"value": "enterprise"
				},
				{
					"name": "Company",
					"value": "company"
				},
				{
					"name": "Association",
					"value": "association"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Business Groups Spaces"
					]
				}
			}
		},
		{
			"displayName": "Registration Number",
			"name": "RegistrationNumber",
			"description": "registration number of the space",
			"default": "12345",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "RegistrationNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Business Groups Spaces"
					]
				}
			}
		},
		{
			"displayName": "DELETE /business-groups/{id}/spaces/{spaceId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Business Groups Spaces"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the group of the customer space",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Business Groups Spaces"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Business Groups Spaces"
					]
				}
			}
		},
		{
			"displayName": "POST /business-groups/{id}/spaces/{spaceId}/legal-entities/{personId}/customers/{folderId}/guest-in-space",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Business Groups Spaces Legal Entities Customers Guest In Space"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the group",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Business Groups Spaces Legal Entities Customers Guest In Space"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the company space which contains the customer folder",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Business Groups Spaces Legal Entities Customers Guest In Space"
					]
				}
			}
		},
		{
			"displayName": "Person ID",
			"name": "personId",
			"required": true,
			"description": "Id of the person customer",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Business Groups Spaces Legal Entities Customers Guest In Space"
					]
				}
			}
		},
		{
			"displayName": "Folder ID",
			"name": "folderId",
			"required": true,
			"description": "Id of the folder customer",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Business Groups Spaces Legal Entities Customers Guest In Space"
					]
				}
			}
		},
		{
			"displayName": "Groups",
			"name": "Groups",
			"type": "options",
			"default": "[\n  \"tax\",\n  \"legal\"\n]",
			"options": [
				{
					"name": "Tax",
					"value": "tax"
				},
				{
					"name": "Wealth Management",
					"value": "wealth management"
				},
				{
					"name": "Legal",
					"value": "legal"
				}
			],
			"routing": {
				"send": {
					"property": "Groups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Business Groups Spaces Legal Entities Customers Guest In Space"
					]
				}
			}
		},
		{
			"displayName": "Role",
			"name": "Role",
			"type": "options",
			"default": "collaborator",
			"options": [
				{
					"name": "Collaborator",
					"value": "collaborator"
				},
				{
					"name": "Manager",
					"value": "manager"
				}
			],
			"routing": {
				"send": {
					"property": "Role",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Business Groups Spaces Legal Entities Customers Guest In Space"
					]
				}
			}
		},
		{
			"displayName": "POST /business-groups/{id}/spaces/{spaceId}/legal-entities/{personId}/customers/{folderId}/spaces",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Business Groups Spaces Legal Entities Customers Spaces"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the group",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Business Groups Spaces Legal Entities Customers Spaces"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the company space which contains the customer folder",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Business Groups Spaces Legal Entities Customers Spaces"
					]
				}
			}
		},
		{
			"displayName": "Person ID",
			"name": "personId",
			"required": true,
			"description": "Id of the person customer",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Business Groups Spaces Legal Entities Customers Spaces"
					]
				}
			}
		},
		{
			"displayName": "Folder ID",
			"name": "folderId",
			"required": true,
			"description": "Id of the folder customer",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Business Groups Spaces Legal Entities Customers Spaces"
					]
				}
			}
		},
		{
			"displayName": "Logo",
			"name": "Logo",
			"type": "json",
			"default": "{\n  \"Content64Encoded\": \"NIFHAZFA07GA=\",\n  \"Name\": \"toto.png\"\n}",
			"routing": {
				"send": {
					"property": "Logo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Business Groups Spaces Legal Entities Customers Spaces"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "Mon Entreprise",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Business Groups Spaces Legal Entities Customers Spaces"
					]
				}
			}
		},
		{
			"displayName": "Template Space ID",
			"name": "TemplateSpaceId",
			"type": "string",
			"default": "PKOJOFOFKAOKF",
			"routing": {
				"send": {
					"property": "TemplateSpaceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Business Groups Spaces Legal Entities Customers Spaces"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "Type",
			"type": "options",
			"default": "company",
			"options": [
				{
					"name": "Enterprise",
					"value": "enterprise"
				},
				{
					"name": "Company",
					"value": "company"
				},
				{
					"name": "Association",
					"value": "association"
				}
			],
			"routing": {
				"send": {
					"property": "Type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Business Groups Spaces Legal Entities Customers Spaces"
					]
				}
			}
		},
		{
			"displayName": "GET /hub/business-groups/{Id}/menus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Hub Business Groups Menus"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "Id",
			"required": true,
			"description": "Id of the business group",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Hub Business Groups Menus"
					]
				}
			}
		},
		{
			"displayName": "POST /hub/documents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Hub Documents"
					]
				}
			}
		},
		{
			"displayName": "Accounting",
			"name": "Accounting",
			"type": "json",
			"default": "{\n  \"AccountedOn\": \"20181202\",\n  \"Workbook\": \"fiscal\",\n  \"YearMonth\": 201902\n}",
			"routing": {
				"send": {
					"property": "Accounting",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Hub Documents"
					]
				}
			}
		},
		{
			"displayName": "Add Contract Allowed",
			"name": "AddContractAllowed",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "AddContractAllowed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Hub Documents"
					]
				}
			}
		},
		{
			"displayName": "Author",
			"name": "Author",
			"type": "string",
			"default": "Antoine Dupond",
			"routing": {
				"send": {
					"property": "Author",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Hub Documents"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "my document",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Hub Documents"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "Date",
			"type": "string",
			"default": "20161203",
			"routing": {
				"send": {
					"property": "Date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Hub Documents"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "File",
			"name": "File",
			"type": "json",
			"default": "{\n  \"Content64Encoded\": \"gjgjJ9FJA829H9HA18B\",\n  \"Name\": \"Mon Document\"\n}",
			"routing": {
				"send": {
					"property": "File",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Hub Documents"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Title",
			"name": "Title",
			"type": "string",
			"default": "Facture décembre",
			"routing": {
				"send": {
					"property": "Title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Hub Documents"
					]
				}
			}
		},
		{
			"displayName": "GET /hub/menus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Hub Menus"
					]
				}
			}
		},
		{
			"displayName": "GET /hub/menus/all",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Hub Menus All"
					]
				}
			}
		},
		{
			"displayName": "POST /hub/payslips",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Hub Payslips"
					]
				}
			}
		},
		{
			"displayName": "Accounting",
			"name": "Accounting",
			"type": "json",
			"default": "{\n  \"AccountedOn\": \"20181202\",\n  \"Workbook\": \"fiscal\",\n  \"YearMonth\": 201902\n}",
			"routing": {
				"send": {
					"property": "Accounting",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Hub Payslips"
					]
				}
			}
		},
		{
			"displayName": "Add Contract Allowed",
			"name": "AddContractAllowed",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "AddContractAllowed",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Hub Payslips"
					]
				}
			}
		},
		{
			"displayName": "Author",
			"name": "Author",
			"type": "string",
			"default": "Antoine Dupond",
			"routing": {
				"send": {
					"property": "Author",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Hub Payslips"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "my document",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Hub Payslips"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "Date",
			"type": "string",
			"default": "20161203",
			"routing": {
				"send": {
					"property": "Date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Hub Payslips"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "File",
			"name": "File",
			"type": "json",
			"default": "{\n  \"Content64Encoded\": \"gjgjJ9FJA829H9HA18B\",\n  \"Name\": \"Mon Document\"\n}",
			"routing": {
				"send": {
					"property": "File",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Hub Payslips"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Title",
			"name": "Title",
			"type": "string",
			"default": "Facture décembre",
			"routing": {
				"send": {
					"property": "Title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Hub Payslips"
					]
				}
			}
		},
		{
			"displayName": "POST /hub/spaces/{spaceId}/documents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Hub Spaces Documents"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Hub Spaces Documents"
					]
				}
			}
		},
		{
			"displayName": "Accounting",
			"name": "Accounting",
			"type": "json",
			"default": "{\n  \"AccountedOn\": \"20181202\",\n  \"Workbook\": \"fiscal\",\n  \"YearMonth\": 201902\n}",
			"routing": {
				"send": {
					"property": "Accounting",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Hub Spaces Documents"
					]
				}
			}
		},
		{
			"displayName": "Author",
			"name": "Author",
			"type": "string",
			"default": "Antoine Dupond",
			"routing": {
				"send": {
					"property": "Author",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Hub Spaces Documents"
					]
				}
			}
		},
		{
			"displayName": "Code",
			"name": "Code",
			"type": "string",
			"default": "COD",
			"routing": {
				"send": {
					"property": "Code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Hub Spaces Documents"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "my document",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Hub Spaces Documents"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "Date",
			"type": "string",
			"default": "20161203",
			"routing": {
				"send": {
					"property": "Date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Hub Spaces Documents"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "File",
			"name": "File",
			"type": "json",
			"default": "{\n  \"Content64Encoded\": \"gjgjJ9FJA829H9HA18B\",\n  \"Name\": \"Mon Document\"\n}",
			"routing": {
				"send": {
					"property": "File",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Hub Spaces Documents"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Title",
			"name": "Title",
			"type": "string",
			"default": "Facture décembre",
			"routing": {
				"send": {
					"property": "Title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Hub Spaces Documents"
					]
				}
			}
		},
		{
			"displayName": "GET /hub/spaces/{spaceId}/menus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Hub Spaces Menus"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Hub Spaces Menus"
					]
				}
			}
		},
		{
			"displayName": "POST /hub/spaces/{spaceId}/payslips",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Hub Spaces Payslips"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Hub Spaces Payslips"
					]
				}
			}
		},
		{
			"displayName": "Accounting",
			"name": "Accounting",
			"type": "json",
			"default": "{\n  \"AccountedOn\": \"20181202\",\n  \"Workbook\": \"fiscal\",\n  \"YearMonth\": 201902\n}",
			"routing": {
				"send": {
					"property": "Accounting",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Hub Spaces Payslips"
					]
				}
			}
		},
		{
			"displayName": "Author",
			"name": "Author",
			"type": "string",
			"default": "Antoine Dupond",
			"routing": {
				"send": {
					"property": "Author",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Hub Spaces Payslips"
					]
				}
			}
		},
		{
			"displayName": "Code",
			"name": "Code",
			"type": "string",
			"default": "COD",
			"routing": {
				"send": {
					"property": "Code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Hub Spaces Payslips"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "my document",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Hub Spaces Payslips"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "Date",
			"type": "string",
			"default": "20161203",
			"routing": {
				"send": {
					"property": "Date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Hub Spaces Payslips"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "File",
			"name": "File",
			"type": "json",
			"default": "{\n  \"Content64Encoded\": \"gjgjJ9FJA829H9HA18B\",\n  \"Name\": \"Mon Document\"\n}",
			"routing": {
				"send": {
					"property": "File",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Hub Spaces Payslips"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Title",
			"name": "Title",
			"type": "string",
			"default": "Facture décembre",
			"routing": {
				"send": {
					"property": "Title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Hub Spaces Payslips"
					]
				}
			}
		},
		{
			"displayName": "GET /menus",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Menus"
					]
				}
			}
		},
		{
			"displayName": "POST /menus/{menuId}/documents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Menus Documents"
					]
				}
			}
		},
		{
			"displayName": "Menu ID",
			"name": "menuId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Menus Documents"
					]
				}
			}
		},
		{
			"displayName": "Author",
			"name": "Author",
			"type": "string",
			"default": "Antoine Dupond",
			"routing": {
				"send": {
					"property": "Author",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Menus Documents"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "my document",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Menus Documents"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "Date",
			"type": "string",
			"default": "20161203",
			"routing": {
				"send": {
					"property": "Date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Menus Documents"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "File",
			"name": "File",
			"type": "json",
			"default": "{\n  \"Content64Encoded\": \"gjgjJ9FJA829H9HA18B\",\n  \"Name\": \"Mon Document\"\n}",
			"routing": {
				"send": {
					"property": "File",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Menus Documents"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Title",
			"name": "Title",
			"type": "string",
			"default": "Facture décembre",
			"routing": {
				"send": {
					"property": "Title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Menus Documents"
					]
				}
			}
		},
		{
			"displayName": "GET /profile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Profile"
					]
				}
			}
		},
		{
			"displayName": "Contract",
			"name": "Contract",
			"description": "to get a contract (if not signed error 404 + html contract)",
			"default": "member",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Contract",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Profile"
					]
				}
			}
		},
		{
			"displayName": "PATCH /profile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Profile"
					]
				}
			}
		},
		{
			"displayName": "Birth",
			"name": "Birth",
			"type": "json",
			"default": "{\n  \"City\": \"Créteil\",\n  \"Country\": \"FR\",\n  \"Date\": \"19800101\",\n  \"ZipCode\": \"94000\"\n}",
			"routing": {
				"send": {
					"property": "Birth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Profile"
					]
				}
			}
		},
		{
			"displayName": "Birth Name",
			"name": "BirthName",
			"type": "string",
			"default": "Dupond",
			"routing": {
				"send": {
					"property": "BirthName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Profile"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "Email",
			"type": "string",
			"default": "paule@durand.fr",
			"routing": {
				"send": {
					"property": "Email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Profile"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "FirstName",
			"type": "string",
			"default": "Paule",
			"routing": {
				"send": {
					"property": "FirstName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Profile"
					]
				}
			}
		},
		{
			"displayName": "ID File",
			"name": "IDFile",
			"type": "json",
			"default": "{\n  \"Content64Encoded\": \"PIHFPAH20FBIA=\",\n  \"Name\": \"id.png\"\n}",
			"routing": {
				"send": {
					"property": "IDFile",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Profile"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "Durand",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Profile"
					]
				}
			}
		},
		{
			"displayName": "Sex",
			"name": "Sex",
			"type": "options",
			"default": "male",
			"options": [
				{
					"name": "Male",
					"value": "male"
				},
				{
					"name": "Female",
					"value": "female"
				}
			],
			"routing": {
				"send": {
					"property": "Sex",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Profile"
					]
				}
			}
		},
		{
			"displayName": "POST /profile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Profile"
					]
				}
			}
		},
		{
			"displayName": "Birth",
			"name": "Birth",
			"type": "json",
			"default": "{\n  \"City\": \"Créteil\",\n  \"Country\": \"FR\",\n  \"Date\": \"19800101\",\n  \"ZipCode\": \"94000\"\n}",
			"routing": {
				"send": {
					"property": "Birth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Profile"
					]
				}
			}
		},
		{
			"displayName": "Birth Name",
			"name": "BirthName",
			"type": "string",
			"default": "Dupond",
			"routing": {
				"send": {
					"property": "BirthName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Profile"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "Email",
			"type": "string",
			"default": "paule@durand.fr",
			"routing": {
				"send": {
					"property": "Email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Profile"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "FirstName",
			"type": "string",
			"default": "Paule",
			"routing": {
				"send": {
					"property": "FirstName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Profile"
					]
				}
			}
		},
		{
			"displayName": "ID File",
			"name": "IDFile",
			"type": "json",
			"default": "{\n  \"Content64Encoded\": \"PIHFPAH20FBIA=\",\n  \"Name\": \"id.png\"\n}",
			"routing": {
				"send": {
					"property": "IDFile",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Profile"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "Durand",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Profile"
					]
				}
			}
		},
		{
			"displayName": "Sex",
			"name": "Sex",
			"type": "options",
			"default": "male",
			"options": [
				{
					"name": "Male",
					"value": "male"
				},
				{
					"name": "Female",
					"value": "female"
				}
			],
			"routing": {
				"send": {
					"property": "Sex",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Profile"
					]
				}
			}
		},
		{
			"displayName": "PATCH /profile/email",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Profile Email"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "Email",
			"type": "string",
			"default": "paule@durand.fr",
			"routing": {
				"send": {
					"property": "Email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Profile Email"
					]
				}
			}
		},
		{
			"displayName": "GET /profile/id-file",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Profile ID File"
					]
				}
			}
		},
		{
			"displayName": "Contract",
			"name": "Contract",
			"description": "to get a contract (if not signed error 404 + html contract)",
			"default": "member",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Contract",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Profile ID File"
					]
				}
			}
		},
		{
			"displayName": "PATCH /profile/mobile",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Profile Mobile"
					]
				}
			}
		},
		{
			"displayName": "Mobile",
			"name": "Mobile",
			"type": "string",
			"default": 33606060606,
			"routing": {
				"send": {
					"property": "Mobile",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Profile Mobile"
					]
				}
			}
		},
		{
			"displayName": "GET /registration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Registration"
					]
				}
			}
		},
		{
			"displayName": "Code",
			"name": "Code",
			"required": true,
			"description": "Code of the invitation",
			"default": "HFIHA",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Code",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Registration"
					]
				}
			}
		},
		{
			"displayName": "POST /registration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Registration"
					]
				}
			}
		},
		{
			"displayName": "Code",
			"name": "Code",
			"type": "string",
			"default": "OJFOA",
			"routing": {
				"send": {
					"property": "Code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Registration"
					]
				}
			}
		},
		{
			"displayName": "Secret",
			"name": "Secret",
			"type": "string",
			"default": 123456,
			"routing": {
				"send": {
					"property": "Secret",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Registration"
					]
				}
			}
		},
		{
			"displayName": "GET /session",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Session"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"description": "Name of the space",
			"default": "Mon Entreprise",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "Type",
			"description": "Type of the space",
			"default": "private",
			"type": "options",
			"options": [
				{
					"name": "Private",
					"value": "private"
				},
				{
					"name": "Enterprise",
					"value": "enterprise"
				},
				{
					"name": "Company",
					"value": "company"
				},
				{
					"name": "Association",
					"value": "association"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces"
					]
				}
			}
		},
		{
			"displayName": "Registration Number",
			"name": "RegistrationNumber",
			"description": "registration number of the space",
			"default": "12345",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "RegistrationNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces"
					]
				}
			}
		},
		{
			"displayName": "Legal Statut",
			"name": "LegalStatut",
			"type": "string",
			"default": "SA",
			"routing": {
				"send": {
					"property": "LegalStatut",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces"
					]
				}
			}
		},
		{
			"displayName": "Logo",
			"name": "Logo",
			"type": "json",
			"default": "{\n  \"Content64Encoded\": \"NIFHAZFA07GA=\",\n  \"Name\": \"toto.png\"\n}",
			"routing": {
				"send": {
					"property": "Logo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "Mon Entreprise",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces"
					]
				}
			}
		},
		{
			"displayName": "Registration Number",
			"name": "RegistrationNumber",
			"type": "string",
			"default": 5146486846,
			"routing": {
				"send": {
					"property": "RegistrationNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces"
					]
				}
			}
		},
		{
			"displayName": "Template Space ID",
			"name": "TemplateSpaceId",
			"type": "string",
			"default": "PKOJOFOFKAOKF",
			"routing": {
				"send": {
					"property": "TemplateSpaceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "Type",
			"type": "options",
			"default": "company",
			"options": [
				{
					"name": "Enterprise",
					"value": "enterprise"
				},
				{
					"name": "Company",
					"value": "company"
				},
				{
					"name": "Association",
					"value": "association"
				}
			],
			"routing": {
				"send": {
					"property": "Type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/all",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces All"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"description": "Name of the space",
			"default": "Mon Entreprise",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces All"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "Type",
			"description": "Type of the space",
			"default": "private",
			"type": "options",
			"options": [
				{
					"name": "Private",
					"value": "private"
				},
				{
					"name": "Enterprise",
					"value": "enterprise"
				},
				{
					"name": "Company",
					"value": "company"
				},
				{
					"name": "Association",
					"value": "association"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces All"
					]
				}
			}
		},
		{
			"displayName": "DELETE /spaces/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces"
					]
				}
			}
		},
		{
			"displayName": "Logo",
			"name": "Logo",
			"type": "json",
			"default": "{\n  \"Content64Encoded\": \"NIFHAZFA07GA=\",\n  \"Name\": \"toto.png\"\n}",
			"routing": {
				"send": {
					"property": "Logo",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "Mon Entreprise",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces"
					]
				}
			}
		},
		{
			"displayName": "Template Space ID",
			"name": "TemplateSpaceId",
			"type": "string",
			"default": "PHAOH8486",
			"routing": {
				"send": {
					"property": "TemplateSpaceId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{id}/accounting-year",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Accounting Year"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P15646476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Accounting Year"
					]
				}
			}
		},
		{
			"displayName": "End",
			"name": "End",
			"description": "End date of the accounting year (YYYYMM or YYYYMMDD) (range not available)",
			"default": "201603",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "End",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Accounting Year"
					]
				}
			}
		},
		{
			"displayName": "Effective Date",
			"name": "EffectiveDate",
			"description": "Effective date inside  the accounting year  (range not available)",
			"default": "20160301",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "EffectiveDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Accounting Year"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{id}/accounting-year",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Accounting Year"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P198746",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Accounting Year"
					]
				}
			}
		},
		{
			"displayName": "About",
			"name": "About",
			"type": "string",
			"default": "<b> Mon premier dossier </b>",
			"routing": {
				"send": {
					"property": "About",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Accounting Year"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "ogm of the company",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Accounting Year"
					]
				}
			}
		},
		{
			"displayName": "End",
			"name": "End",
			"type": "string",
			"default": "20181231",
			"routing": {
				"send": {
					"property": "End",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Accounting Year"
					]
				}
			}
		},
		{
			"displayName": "Home",
			"name": "Home",
			"type": "boolean",
			"default": "yes",
			"routing": {
				"send": {
					"property": "Home",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Accounting Year"
					]
				}
			}
		},
		{
			"displayName": "Keywords",
			"name": "Keywords",
			"type": "json",
			"default": "[\n  \"paris\",\n  \"comptabilité\"\n]",
			"routing": {
				"send": {
					"property": "Keywords",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Accounting Year"
					]
				}
			}
		},
		{
			"displayName": "Level",
			"name": "Level",
			"type": "options",
			"default": "confidential",
			"options": [
				{
					"name": "Confidential",
					"value": "confidential"
				},
				{
					"name": "Regular",
					"value": "regular"
				},
				{
					"name": "Public",
					"value": "public"
				}
			],
			"routing": {
				"send": {
					"property": "Level",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Accounting Year"
					]
				}
			}
		},
		{
			"displayName": "Net Income",
			"name": "NetIncome",
			"type": "number",
			"default": 52634.36,
			"routing": {
				"send": {
					"property": "NetIncome",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Accounting Year"
					]
				}
			}
		},
		{
			"displayName": "Net Position",
			"name": "NetPosition",
			"type": "number",
			"default": 14580.36,
			"routing": {
				"send": {
					"property": "NetPosition",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Accounting Year"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "Start",
			"type": "string",
			"default": "20180101",
			"routing": {
				"send": {
					"property": "Start",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Accounting Year"
					]
				}
			}
		},
		{
			"displayName": "Tax",
			"name": "Tax",
			"type": "number",
			"default": 45698.36,
			"routing": {
				"send": {
					"property": "Tax",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Accounting Year"
					]
				}
			}
		},
		{
			"displayName": "Taxable Income",
			"name": "TaxableIncome",
			"type": "number",
			"default": 869523.36,
			"routing": {
				"send": {
					"property": "TaxableIncome",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Accounting Year"
					]
				}
			}
		},
		{
			"displayName": "Turnover",
			"name": "Turnover",
			"type": "number",
			"default": 1025.36,
			"routing": {
				"send": {
					"property": "Turnover",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Accounting Year"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{id}/collective-decision",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Collective Decision"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P15646476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Collective Decision"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "Date",
			"description": "Date of the collective decision YYYMMDD",
			"default": "20160302,null",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Collective Decision"
					]
				}
			}
		},
		{
			"displayName": "Event",
			"name": "Event",
			"description": "Event of the collective decision (see post for the list of events)",
			"default": "OGM",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Event",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Collective Decision"
					]
				}
			}
		},
		{
			"displayName": "Range",
			"name": "Range",
			"description": "index range of the results",
			"default": "10-19",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Range",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Collective Decision"
					]
				}
			}
		},
		{
			"displayName": "Has Company Registration Certificate",
			"name": "HasCompanyRegistrationCertificate",
			"description": "If true returns only invoices with a CompanyRegistrationCertificate",
			"default": "true",
			"type": "options",
			"options": [
				{
					"name": "True",
					"value": "true"
				},
				{
					"name": "False",
					"value": "false"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "HasCompanyRegistrationCertificate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Collective Decision"
					]
				}
			}
		},
		{
			"displayName": "Has Status",
			"name": "HasStatus",
			"description": "If true returns only invoices with a Status",
			"default": "true",
			"type": "options",
			"options": [
				{
					"name": "True",
					"value": "true"
				},
				{
					"name": "False",
					"value": "false"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "HasStatus",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Collective Decision"
					]
				}
			}
		},
		{
			"displayName": "Has Sirene Register",
			"name": "HasSireneRegister",
			"description": "If true returns only invoices with a SireneRegister",
			"default": "true",
			"type": "options",
			"options": [
				{
					"name": "True",
					"value": "true"
				},
				{
					"name": "False",
					"value": "false"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "HasSireneRegister",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Collective Decision"
					]
				}
			}
		},
		{
			"displayName": "Has Minutes",
			"name": "HasMinutes",
			"description": "If true returns only invoices with Minutes",
			"default": "true",
			"type": "options",
			"options": [
				{
					"name": "True",
					"value": "true"
				},
				{
					"name": "False",
					"value": "false"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "HasMinutes",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Collective Decision"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{id}/collective-decision",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Collective Decision"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P198746",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Collective Decision"
					]
				}
			}
		},
		{
			"displayName": "About",
			"name": "About",
			"type": "string",
			"default": "<b> Mon premier dossier </b>",
			"routing": {
				"send": {
					"property": "About",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Collective Decision"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "ogm of the company",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Collective Decision"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "Date",
			"type": "string",
			"default": "20180202",
			"routing": {
				"send": {
					"property": "Date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Collective Decision"
					]
				}
			}
		},
		{
			"displayName": "Dividend Distributions",
			"name": "DividendDistributions",
			"type": "number",
			"default": 1025.36,
			"routing": {
				"send": {
					"property": "DividendDistributions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Collective Decision"
					]
				}
			}
		},
		{
			"displayName": "Dividend Distributions Date",
			"name": "DividendDistributionsDate",
			"type": "string",
			"default": "20180203",
			"routing": {
				"send": {
					"property": "DividendDistributionsDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Collective Decision"
					]
				}
			}
		},
		{
			"displayName": "Event",
			"name": "Event",
			"type": "options",
			"default": "EGM",
			"description": "for space type 'company' enums allowed are  'EGM','CGM','OGM','ConstituentAssembly','SolePartner','OtherEvent','Office','ExecutiveCommittee','Consulting','Board','PartnersMeeting' and for space type 'association' enums allowed are 'EGM','CGM','OGM','Other','Office','ExecutiveCommittee'",
			"options": [
				{
					"name": "EGM",
					"value": "EGM"
				},
				{
					"name": "CGM",
					"value": "CGM"
				},
				{
					"name": "OGM",
					"value": "OGM"
				},
				{
					"name": "Constituent Assembly",
					"value": "ConstituentAssembly"
				},
				{
					"name": "Sole Partner",
					"value": "SolePartner"
				},
				{
					"name": "Other Event",
					"value": "OtherEvent"
				},
				{
					"name": "Other",
					"value": "Other"
				},
				{
					"name": "Office",
					"value": "Office"
				},
				{
					"name": "Executive Committee",
					"value": "ExecutiveCommittee"
				},
				{
					"name": "Consulting",
					"value": "Consulting"
				},
				{
					"name": "Board",
					"value": "Board"
				},
				{
					"name": "Partners Meeting",
					"value": "PartnersMeeting"
				}
			],
			"routing": {
				"send": {
					"property": "Event",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Collective Decision"
					]
				}
			}
		},
		{
			"displayName": "Home",
			"name": "Home",
			"type": "boolean",
			"default": "yes",
			"routing": {
				"send": {
					"property": "Home",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Collective Decision"
					]
				}
			}
		},
		{
			"displayName": "Keywords",
			"name": "Keywords",
			"type": "json",
			"default": "[\n  \"paris\",\n  \"comptabilité\"\n]",
			"routing": {
				"send": {
					"property": "Keywords",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Collective Decision"
					]
				}
			}
		},
		{
			"displayName": "Level",
			"name": "Level",
			"type": "options",
			"default": "confidential",
			"options": [
				{
					"name": "Confidential",
					"value": "confidential"
				},
				{
					"name": "Regular",
					"value": "regular"
				},
				{
					"name": "Public",
					"value": "public"
				}
			],
			"routing": {
				"send": {
					"property": "Level",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Collective Decision"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{id}/company-entities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Company Entities"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P15646476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Company Entities"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"description": "Name of the company entity",
			"default": "Source de France",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Company Entities"
					]
				}
			}
		},
		{
			"displayName": "Legal Name",
			"name": "LegalName",
			"description": "Legal name of the company entity",
			"default": "Source de France SAS",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "LegalName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Company Entities"
					]
				}
			}
		},
		{
			"displayName": "Registration Number",
			"name": "RegistrationNumber",
			"description": "registration number of the company entity",
			"default": "12356213854",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "RegistrationNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Company Entities"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{id}/company-entities",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Company Entities"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "T198746",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Company Entities"
					]
				}
			}
		},
		{
			"displayName": "Ape Code",
			"name": "ApeCode",
			"type": "string",
			"default": "420F",
			"routing": {
				"send": {
					"property": "ApeCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Company Entities"
					]
				}
			}
		},
		{
			"displayName": "Archival Date",
			"name": "ArchivalDate",
			"type": "string",
			"default": "20160203",
			"routing": {
				"send": {
					"property": "ArchivalDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Company Entities"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "my brother",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Company Entities"
					]
				}
			}
		},
		{
			"displayName": "Legal Name",
			"name": "LegalName",
			"type": "string",
			"default": "Mon entreprise Dupond",
			"routing": {
				"send": {
					"property": "LegalName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Company Entities"
					]
				}
			}
		},
		{
			"displayName": "Legal Statut",
			"name": "LegalStatut",
			"type": "string",
			"default": "SAS",
			"routing": {
				"send": {
					"property": "LegalStatut",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Company Entities"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "Dupond",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Company Entities"
					]
				}
			}
		},
		{
			"displayName": "Registration Number",
			"name": "RegistrationNumber",
			"type": "string",
			"default": "236542158",
			"routing": {
				"send": {
					"property": "RegistrationNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Company Entities"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "Type",
			"type": "string",
			"default": "EPT",
			"routing": {
				"send": {
					"property": "Type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Company Entities"
					]
				}
			}
		},
		{
			"displayName": "Vat Number",
			"name": "VatNumber",
			"type": "string",
			"default": "46546847864",
			"routing": {
				"send": {
					"property": "VatNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Company Entities"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{id}/company-entities/all",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Company Entities All"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P15646476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Company Entities All"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"description": "Name of the company entity",
			"default": "Source de France",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Company Entities All"
					]
				}
			}
		},
		{
			"displayName": "Registration Number",
			"name": "RegistrationNumber",
			"description": "registration number of the company entity",
			"default": "12356213854",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "RegistrationNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Company Entities All"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{id}/company-entities/{companyId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Company Entities"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P187867864",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Company Entities"
					]
				}
			}
		},
		{
			"displayName": "Company ID",
			"name": "companyId",
			"required": true,
			"description": "Id of the company entity to modify",
			"default": "P1863763784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Company Entities"
					]
				}
			}
		},
		{
			"displayName": "Ape Code",
			"name": "ApeCode",
			"type": "string",
			"default": "420F",
			"routing": {
				"send": {
					"property": "ApeCode",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Company Entities"
					]
				}
			}
		},
		{
			"displayName": "Archival Date",
			"name": "ArchivalDate",
			"type": "string",
			"default": "20160203",
			"routing": {
				"send": {
					"property": "ArchivalDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Company Entities"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "my brother",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Company Entities"
					]
				}
			}
		},
		{
			"displayName": "Legal Name",
			"name": "LegalName",
			"type": "string",
			"default": "Mon entreprise Dupond",
			"routing": {
				"send": {
					"property": "LegalName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Company Entities"
					]
				}
			}
		},
		{
			"displayName": "Legal Statut",
			"name": "LegalStatut",
			"type": "string",
			"default": "SAS",
			"routing": {
				"send": {
					"property": "LegalStatut",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Company Entities"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "Dupond",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Company Entities"
					]
				}
			}
		},
		{
			"displayName": "Registration Number",
			"name": "RegistrationNumber",
			"type": "string",
			"default": "236542158",
			"routing": {
				"send": {
					"property": "RegistrationNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Company Entities"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "Type",
			"type": "string",
			"default": "EPT",
			"routing": {
				"send": {
					"property": "Type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Company Entities"
					]
				}
			}
		},
		{
			"displayName": "Vat Number",
			"name": "VatNumber",
			"type": "string",
			"default": "46546847864",
			"routing": {
				"send": {
					"property": "VatNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Company Entities"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{id}/company-entities/{personId}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Company Entities Details"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P15646476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Company Entities Details"
					]
				}
			}
		},
		{
			"displayName": "Person ID",
			"name": "personId",
			"required": true,
			"description": "Id of the company entity to get",
			"default": "T18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Company Entities Details"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{id}/company-entities/{personId}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Company Entities Details"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Company Entities Details"
					]
				}
			}
		},
		{
			"displayName": "Person ID",
			"name": "personId",
			"required": true,
			"description": "Id of the person or memberId",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Company Entities Details"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "Address",
			"type": "json",
			"default": "{\n  \"City\": \"Paris\",\n  \"Complement\": \"batiment A\",\n  \"Country\": \"France\",\n  \"Street\": \"2, rue du chateau\",\n  \"ZipCode\": \"75001\"\n}",
			"routing": {
				"send": {
					"property": "Address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Company Entities Details"
					]
				}
			}
		},
		{
			"displayName": "Designation",
			"name": "Designation",
			"type": "string",
			"default": "Office",
			"routing": {
				"send": {
					"property": "Designation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Company Entities Details"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "Email",
			"type": "json",
			"default": "[\n  [\n    \"bertrand@monmail.com\"\n  ]\n]",
			"routing": {
				"send": {
					"property": "Email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Company Entities Details"
					]
				}
			}
		},
		{
			"displayName": "Phone",
			"name": "Phone",
			"type": "json",
			"default": "[\n  [\n    \"+33606060606\"\n  ]\n]",
			"routing": {
				"send": {
					"property": "Phone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Company Entities Details"
					]
				}
			}
		},
		{
			"displayName": "DELETE /spaces/{id}/company-entities/{personId}/details/{designation}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Company Entities Details"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Company Entities Details"
					]
				}
			}
		},
		{
			"displayName": "Person ID",
			"name": "personId",
			"required": true,
			"description": "Id of the person or memberId",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Company Entities Details"
					]
				}
			}
		},
		{
			"displayName": "Designation",
			"name": "designation",
			"required": true,
			"description": "designation",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Company Entities Details"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{id}/documents/download",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Documents Download"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P198746",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Documents Download"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "DocumentId",
			"type": "json",
			"default": "[\n  \"POFA872498\"\n]",
			"routing": {
				"send": {
					"property": "DocumentId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Documents Download"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{id}/folders/{folderId}/persons/{memberId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Persons"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Persons"
					]
				}
			}
		},
		{
			"displayName": "Member ID",
			"name": "memberId",
			"required": true,
			"description": "memberId of the person",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Persons"
					]
				}
			}
		},
		{
			"displayName": "Folder ID",
			"name": "folderId",
			"required": true,
			"description": "id of the customer folder",
			"default": "T18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Persons"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{id}/folders/{folderId}/persons/{memberId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Persons"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Persons"
					]
				}
			}
		},
		{
			"displayName": "Member ID",
			"name": "memberId",
			"required": true,
			"description": "memberId of the person",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Persons"
					]
				}
			}
		},
		{
			"displayName": "Folder ID",
			"name": "folderId",
			"required": true,
			"description": "id of the customer folder",
			"default": "T18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Persons"
					]
				}
			}
		},
		{
			"displayName": "Groups",
			"name": "Groups",
			"type": "options",
			"default": "[\n  \"social\",\n  \"legal\"\n]",
			"options": [
				{
					"name": "Tax",
					"value": "tax"
				},
				{
					"name": "Wealth Management",
					"value": "wealth management"
				},
				{
					"name": "Social",
					"value": "social"
				},
				{
					"name": "Social Manager",
					"value": "social manager"
				},
				{
					"name": "Purchases",
					"value": "purchases"
				},
				{
					"name": "Sales",
					"value": "sales"
				},
				{
					"name": "Legal",
					"value": "legal"
				},
				{
					"name": "Accounting",
					"value": "accounting"
				}
			],
			"routing": {
				"send": {
					"property": "Groups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Persons"
					]
				}
			}
		},
		{
			"displayName": "Is Admin",
			"name": "IsAdmin",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "IsAdmin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Persons"
					]
				}
			}
		},
		{
			"displayName": "Role",
			"name": "Role",
			"type": "options",
			"default": "collaborator",
			"options": [
				{
					"name": "Collaborator",
					"value": "collaborator"
				},
				{
					"name": "Assistant",
					"value": "assistant"
				},
				{
					"name": "Empty",
					"value": "empty"
				}
			],
			"routing": {
				"send": {
					"property": "Role",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Persons"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{id}/folders/{folderId}/persons/{memberId}/activeaccess",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Persons Activeaccess"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Persons Activeaccess"
					]
				}
			}
		},
		{
			"displayName": "Member ID",
			"name": "memberId",
			"required": true,
			"description": "memberId of the person",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Persons Activeaccess"
					]
				}
			}
		},
		{
			"displayName": "Folder ID",
			"name": "folderId",
			"required": true,
			"description": "id of the customer folder",
			"default": "T18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Persons Activeaccess"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{id}/folders/{folderId}/persons/{memberId}/unactiveaccess",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Persons Unactiveaccess"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Persons Unactiveaccess"
					]
				}
			}
		},
		{
			"displayName": "Member ID",
			"name": "memberId",
			"required": true,
			"description": "memberId of the person",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Persons Unactiveaccess"
					]
				}
			}
		},
		{
			"displayName": "Folder ID",
			"name": "folderId",
			"required": true,
			"description": "id of the customer folder",
			"default": "T18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Persons Unactiveaccess"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{id}/folders/{folderId}/persons/{personId}/guest-in-space",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Persons Guest In Space"
					]
				}
			}
		},
		{
			"displayName": "Folder ID",
			"name": "folderId",
			"required": true,
			"description": "Id of the folder customer",
			"default": "T198NFNIAJFAA46",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Persons Guest In Space"
					]
				}
			}
		},
		{
			"displayName": "Person ID",
			"name": "personId",
			"required": true,
			"description": "Id of the person to invite to his space",
			"default": "P198NFNIAJFAA46",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Persons Guest In Space"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Persons Guest In Space"
					]
				}
			}
		},
		{
			"displayName": "Person ID",
			"name": "PersonId",
			"type": "string",
			"default": "PAIHIHFA79TFA",
			"routing": {
				"send": {
					"property": "PersonId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Persons Guest In Space"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{id}/groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Groups"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P15646476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Groups"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"description": "Name of the groups",
			"default": "RH",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Groups"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{id}/groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Groups"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "T198746",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Groups"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "EndDate",
			"type": "string",
			"default": "20160203",
			"routing": {
				"send": {
					"property": "EndDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Groups"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "RH",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{id}/groups/all",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Groups All"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P15646476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Groups All"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"description": "Name of the group",
			"default": "RH",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Groups All"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{id}/groups/{groupId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Groups"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P187867864",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Groups"
					]
				}
			}
		},
		{
			"displayName": "Group ID",
			"name": "groupId",
			"required": true,
			"description": "Id of the group to modify",
			"default": "P1863763784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Groups"
					]
				}
			}
		},
		{
			"displayName": "End Date",
			"name": "EndDate",
			"type": "string",
			"default": "20160203",
			"routing": {
				"send": {
					"property": "EndDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Groups"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "RH",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Groups"
					]
				}
			}
		},
		{
			"displayName": "DELETE /spaces/{id}/groups/{groupId}/folders/{folderId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Groups Folders"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P187867864",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Groups Folders"
					]
				}
			}
		},
		{
			"displayName": "Group ID",
			"name": "groupId",
			"required": true,
			"description": "Id of the group to modify",
			"default": "P1863763784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Groups Folders"
					]
				}
			}
		},
		{
			"displayName": "Folder ID",
			"name": "folderId",
			"required": true,
			"description": "Id of the folder",
			"default": "P1863763784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Groups Folders"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{id}/groups/{groupId}/folders/{folderId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Groups Folders"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P187867864",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Groups Folders"
					]
				}
			}
		},
		{
			"displayName": "Group ID",
			"name": "groupId",
			"required": true,
			"description": "Id of the group to modify",
			"default": "P1863763784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Groups Folders"
					]
				}
			}
		},
		{
			"displayName": "Folder ID",
			"name": "folderId",
			"required": true,
			"description": "Id of the folder",
			"default": "P1863763784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Groups Folders"
					]
				}
			}
		},
		{
			"displayName": "Right",
			"name": "Right",
			"type": "options",
			"default": "read",
			"options": [
				{
					"name": "Read",
					"value": "read"
				},
				{
					"name": "Write",
					"value": "write"
				}
			],
			"routing": {
				"send": {
					"property": "Right",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Groups Folders"
					]
				}
			}
		},
		{
			"displayName": "DELETE /spaces/{id}/groups/{groupId}/persons/{memberId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Groups Persons"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P187867864",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Groups Persons"
					]
				}
			}
		},
		{
			"displayName": "Group ID",
			"name": "groupId",
			"required": true,
			"description": "Id of the group to modify",
			"default": "P1863763784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Groups Persons"
					]
				}
			}
		},
		{
			"displayName": "Member ID",
			"name": "memberId",
			"required": true,
			"description": "MemberId of the person",
			"default": "P1863763784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Groups Persons"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{id}/groups/{groupId}/persons/{memberId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Groups Persons"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P187867864",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Groups Persons"
					]
				}
			}
		},
		{
			"displayName": "Group ID",
			"name": "groupId",
			"required": true,
			"description": "Id of the group to modify",
			"default": "P1863763784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Groups Persons"
					]
				}
			}
		},
		{
			"displayName": "Member ID",
			"name": "memberId",
			"required": true,
			"description": "MemberId of the person",
			"default": "P1863763784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Groups Persons"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{id}/legal",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{id}/legal",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Legal"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Legal"
					]
				}
			}
		},
		{
			"displayName": "Identification Number",
			"name": "IdentificationNumber",
			"type": "string",
			"default": "548",
			"routing": {
				"send": {
					"property": "IdentificationNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Legal"
					]
				}
			}
		},
		{
			"displayName": "Registration Date",
			"name": "RegistrationDate",
			"type": "string",
			"default": "20190325",
			"routing": {
				"send": {
					"property": "RegistrationDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Legal"
					]
				}
			}
		},
		{
			"displayName": "Registration Number",
			"name": "RegistrationNumber",
			"type": "string",
			"default": "123456",
			"routing": {
				"send": {
					"property": "RegistrationNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Legal"
					]
				}
			}
		},
		{
			"displayName": "VAT Number",
			"name": "VATNumber",
			"type": "string",
			"default": "123",
			"routing": {
				"send": {
					"property": "VATNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Legal"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{id}/logo",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Logo"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Logo"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{id}/persons",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Persons"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P15646476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Persons"
					]
				}
			}
		},
		{
			"displayName": "Function",
			"name": "Function",
			"description": "Function of the person",
			"default": "employee",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Function",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Persons"
					]
				}
			}
		},
		{
			"displayName": "Range",
			"name": "Range",
			"description": "index range of the results",
			"default": "10-19",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Range",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Persons"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"description": "Name of the person",
			"default": "Germain",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Persons"
					]
				}
			}
		},
		{
			"displayName": "Validated",
			"name": "Validated",
			"description": "Status of the person",
			"default": "true",
			"type": "options",
			"options": [
				{
					"name": "True",
					"value": "true"
				},
				{
					"name": "False",
					"value": "false"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Validated",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Persons"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "Email",
			"description": "Email of the person",
			"default": "maxgermain@maxgermain.com",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Persons"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{id}/persons",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P198746",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "Address",
			"type": "json",
			"default": "{\n  \"City\": \"Paris\",\n  \"Complement\": \"batiment A\",\n  \"Country\": \"France\",\n  \"Street\": \"2, rue du chateau\",\n  \"ZipCode\": \"75001\"\n}",
			"routing": {
				"send": {
					"property": "Address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons"
					]
				}
			}
		},
		{
			"displayName": "Archival Date",
			"name": "ArchivalDate",
			"type": "string",
			"default": "20160203",
			"routing": {
				"send": {
					"property": "ArchivalDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons"
					]
				}
			}
		},
		{
			"displayName": "Birth",
			"name": "Birth",
			"type": "json",
			"default": "{\n  \"Date\": 19671231,\n  \"Place\": \"Lille\"\n}",
			"routing": {
				"send": {
					"property": "Birth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "my brother",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "Email",
			"type": "string",
			"default": "bertrand@monmail.com",
			"routing": {
				"send": {
					"property": "Email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "FirstName",
			"type": "string",
			"default": "Bertrand",
			"routing": {
				"send": {
					"property": "FirstName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons"
					]
				}
			}
		},
		{
			"displayName": "Mobile",
			"name": "Mobile",
			"type": "string",
			"default": "+33606060606",
			"routing": {
				"send": {
					"property": "Mobile",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "Dupond",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons"
					]
				}
			}
		},
		{
			"displayName": "Sex",
			"name": "Sex",
			"type": "options",
			"default": "male",
			"options": [
				{
					"name": "Male",
					"value": "male"
				},
				{
					"name": "Female",
					"value": "female"
				}
			],
			"routing": {
				"send": {
					"property": "Sex",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{id}/persons/all",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Persons All"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P15646476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Persons All"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"description": "Name of the person",
			"default": "Germain",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Persons All"
					]
				}
			}
		},
		{
			"displayName": "Function",
			"name": "Function",
			"description": "Function of the person",
			"default": "employee",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Function",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Persons All"
					]
				}
			}
		},
		{
			"displayName": "Range",
			"name": "Range",
			"description": "index range of the results",
			"default": "10-19",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Range",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Persons All"
					]
				}
			}
		},
		{
			"displayName": "Validated",
			"name": "Validated",
			"description": "Status of the person",
			"default": "true",
			"type": "options",
			"options": [
				{
					"name": "True",
					"value": "true"
				},
				{
					"name": "False",
					"value": "false"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Validated",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Persons All"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "Email",
			"description": "Email of the person",
			"default": "maxgermain@maxgermain.com",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Email",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Persons All"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{id}/persons/{memberId}/player",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons Player"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons Player"
					]
				}
			}
		},
		{
			"displayName": "Member ID",
			"name": "memberId",
			"required": true,
			"description": "memberId of the person",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons Player"
					]
				}
			}
		},
		{
			"displayName": "Client Management",
			"name": "ClientManagement",
			"type": "options",
			"default": "no",
			"options": [
				{
					"name": "No",
					"value": "no"
				},
				{
					"name": "Manager",
					"value": "manager"
				},
				{
					"name": "Adn",
					"value": "adn"
				}
			],
			"routing": {
				"send": {
					"property": "ClientManagement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons Player"
					]
				}
			}
		},
		{
			"displayName": "Is Admin",
			"name": "IsAdmin",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "IsAdmin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons Player"
					]
				}
			}
		},
		{
			"required": true,
			"displayName": "Player",
			"name": "Player",
			"type": "options",
			"default": "guest",
			"options": [
				{
					"name": "Guest",
					"value": "guest"
				},
				{
					"name": "Owner",
					"value": "owner"
				},
				{
					"name": "Manager",
					"value": "manager"
				},
				{
					"name": "Assistant",
					"value": "assistant"
				},
				{
					"name": "Collaborator",
					"value": "collaborator"
				}
			],
			"routing": {
				"send": {
					"property": "Player",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons Player"
					]
				}
			}
		},
		{
			"displayName": "Player End",
			"name": "PlayerEnd",
			"type": "string",
			"default": "20210203",
			"routing": {
				"send": {
					"property": "PlayerEnd",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons Player"
					]
				}
			}
		},
		{
			"displayName": "DELETE /spaces/{id}/persons/{personId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Persons"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Persons"
					]
				}
			}
		},
		{
			"displayName": "Person ID",
			"name": "personId",
			"required": true,
			"description": "Id of the person to modify or memberId",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Persons"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{id}/persons/{personId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons"
					]
				}
			}
		},
		{
			"displayName": "Person ID",
			"name": "personId",
			"required": true,
			"description": "Id of the person to modify or memberId",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "Address",
			"type": "json",
			"default": "{\n  \"City\": \"Paris\",\n  \"Complement\": \"batiment A\",\n  \"Country\": \"France\",\n  \"Street\": \"2, rue du chateau\",\n  \"ZipCode\": \"75001\"\n}",
			"routing": {
				"send": {
					"property": "Address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons"
					]
				}
			}
		},
		{
			"displayName": "Archival Date",
			"name": "ArchivalDate",
			"type": "string",
			"default": "20160203",
			"routing": {
				"send": {
					"property": "ArchivalDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons"
					]
				}
			}
		},
		{
			"displayName": "Birth",
			"name": "Birth",
			"type": "json",
			"default": "{\n  \"Date\": 19671231,\n  \"Place\": \"Lille\"\n}",
			"routing": {
				"send": {
					"property": "Birth",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "my brother",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "Email",
			"type": "string",
			"default": "bertrand@monmail.com",
			"routing": {
				"send": {
					"property": "Email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons"
					]
				}
			}
		},
		{
			"displayName": "First Name",
			"name": "FirstName",
			"type": "string",
			"default": "Bertrand",
			"routing": {
				"send": {
					"property": "FirstName",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons"
					]
				}
			}
		},
		{
			"displayName": "Mobile",
			"name": "Mobile",
			"type": "string",
			"default": "+33606060606",
			"routing": {
				"send": {
					"property": "Mobile",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "Dupond",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons"
					]
				}
			}
		},
		{
			"displayName": "Sex",
			"name": "Sex",
			"type": "options",
			"default": "male",
			"options": [
				{
					"name": "Male",
					"value": "male"
				},
				{
					"name": "Female",
					"value": "female"
				}
			],
			"routing": {
				"send": {
					"property": "Sex",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{id}/persons/{personId}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Persons Details"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P15646476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Persons Details"
					]
				}
			}
		},
		{
			"displayName": "Person ID",
			"name": "personId",
			"required": true,
			"description": "Id of the person to get or memberId",
			"default": "T18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Persons Details"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{id}/persons/{personId}/details",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Details"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Details"
					]
				}
			}
		},
		{
			"displayName": "Person ID",
			"name": "personId",
			"required": true,
			"description": "Id of the person or memberId",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Details"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "Address",
			"type": "json",
			"default": "{\n  \"City\": \"Paris\",\n  \"Complement\": \"batiment A\",\n  \"Country\": \"France\",\n  \"Street\": \"2, rue du chateau\",\n  \"ZipCode\": \"75001\"\n}",
			"routing": {
				"send": {
					"property": "Address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Details"
					]
				}
			}
		},
		{
			"displayName": "Designation",
			"name": "Designation",
			"type": "string",
			"default": "Office",
			"routing": {
				"send": {
					"property": "Designation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Details"
					]
				}
			}
		},
		{
			"displayName": "Email",
			"name": "Email",
			"type": "json",
			"default": "[\n  [\n    \"bertrand@monmail.com\"\n  ]\n]",
			"routing": {
				"send": {
					"property": "Email",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Details"
					]
				}
			}
		},
		{
			"displayName": "Phone",
			"name": "Phone",
			"type": "json",
			"default": "[\n  [\n    \"+33606060606\"\n  ]\n]",
			"routing": {
				"send": {
					"property": "Phone",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Details"
					]
				}
			}
		},
		{
			"displayName": "DELETE /spaces/{id}/persons/{personId}/details/{designation}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Persons Details"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Persons Details"
					]
				}
			}
		},
		{
			"displayName": "Person ID",
			"name": "personId",
			"required": true,
			"description": "Id of the person or memberId",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Persons Details"
					]
				}
			}
		},
		{
			"displayName": "Designation",
			"name": "designation",
			"required": true,
			"description": "designation",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Persons Details"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{id}/persons/{personId}/folders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Persons Folders"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P15646476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Persons Folders"
					]
				}
			}
		},
		{
			"displayName": "Person ID",
			"name": "personId",
			"required": true,
			"description": "Id of the person to get folders",
			"default": "T18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Persons Folders"
					]
				}
			}
		},
		{
			"displayName": "Range",
			"name": "Range",
			"description": "index range of the results",
			"default": "10-19",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Range",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Persons Folders"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{id}/persons/{personId}/groups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Persons Groups"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P15646476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Persons Groups"
					]
				}
			}
		},
		{
			"displayName": "Person ID",
			"name": "personId",
			"required": true,
			"description": "Id of the person to get groups",
			"default": "T18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Persons Groups"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{id}/persons/{personId}/portfolios",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Persons Portfolios"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P15646476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Persons Portfolios"
					]
				}
			}
		},
		{
			"displayName": "Person ID",
			"name": "personId",
			"required": true,
			"description": "Id of the person to get portfolios",
			"default": "T18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Persons Portfolios"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{id}/persons/{personId}/portfolios",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Portfolios"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P198746",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Portfolios"
					]
				}
			}
		},
		{
			"displayName": "Person ID",
			"name": "personId",
			"required": true,
			"description": "Id of the person who will be the owner of the portfolio",
			"default": "T18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Portfolios"
					]
				}
			}
		},
		{
			"displayName": "About",
			"name": "About",
			"type": "string",
			"default": "<b> Mon premier dossier </b>",
			"routing": {
				"send": {
					"property": "About",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Portfolios"
					]
				}
			}
		},
		{
			"displayName": "Archival Date",
			"name": "ArchivalDate",
			"type": "string",
			"default": "20160203",
			"routing": {
				"send": {
					"property": "ArchivalDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Portfolios"
					]
				}
			}
		},
		{
			"displayName": "Designation",
			"name": "Designation",
			"type": "string",
			"default": "My Portfolio",
			"routing": {
				"send": {
					"property": "Designation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Portfolios"
					]
				}
			}
		},
		{
			"displayName": "Home",
			"name": "Home",
			"type": "boolean",
			"default": "yes",
			"routing": {
				"send": {
					"property": "Home",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Portfolios"
					]
				}
			}
		},
		{
			"displayName": "Keywords",
			"name": "Keywords",
			"type": "json",
			"default": "[\n  \"paris\",\n  \"comptabilité\"\n]",
			"routing": {
				"send": {
					"property": "Keywords",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Portfolios"
					]
				}
			}
		},
		{
			"displayName": "Level",
			"name": "Level",
			"type": "options",
			"default": "confidential",
			"options": [
				{
					"name": "Confidential",
					"value": "confidential"
				},
				{
					"name": "Regular",
					"value": "regular"
				},
				{
					"name": "Public",
					"value": "public"
				}
			],
			"routing": {
				"send": {
					"property": "Level",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Portfolios"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "Dupond",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Portfolios"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{id}/portfolios/{portfolioId}/persons/{memberId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Portfolios Persons"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Portfolios Persons"
					]
				}
			}
		},
		{
			"displayName": "Member ID",
			"name": "memberId",
			"required": true,
			"description": "memberId of the person",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Portfolios Persons"
					]
				}
			}
		},
		{
			"displayName": "Portfolio ID",
			"name": "portfolioId",
			"required": true,
			"description": "id of the portfolio",
			"default": "T18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Portfolios Persons"
					]
				}
			}
		},
		{
			"displayName": "Apply",
			"name": "Apply",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "Apply",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Portfolios Persons"
					]
				}
			}
		},
		{
			"displayName": "Groups",
			"name": "Groups",
			"type": "options",
			"default": "[\n  \"social\",\n  \"legal\"\n]",
			"options": [
				{
					"name": "Tax",
					"value": "tax"
				},
				{
					"name": "Wealth Management",
					"value": "wealth management"
				},
				{
					"name": "Social",
					"value": "social"
				},
				{
					"name": "Social Manager",
					"value": "social manager"
				},
				{
					"name": "Purchases",
					"value": "purchases"
				},
				{
					"name": "Sales",
					"value": "sales"
				},
				{
					"name": "Legal",
					"value": "legal"
				},
				{
					"name": "Accounting",
					"value": "accounting"
				}
			],
			"routing": {
				"send": {
					"property": "Groups",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Portfolios Persons"
					]
				}
			}
		},
		{
			"displayName": "Is Admin",
			"name": "IsAdmin",
			"type": "boolean",
			"default": false,
			"routing": {
				"send": {
					"property": "IsAdmin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Portfolios Persons"
					]
				}
			}
		},
		{
			"displayName": "Role",
			"name": "Role",
			"type": "options",
			"default": "collaborator",
			"options": [
				{
					"name": "Collaborator",
					"value": "collaborator"
				},
				{
					"name": "Assistant",
					"value": "assistant"
				},
				{
					"name": "Empty",
					"value": "empty"
				}
			],
			"routing": {
				"send": {
					"property": "Role",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Portfolios Persons"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{id}/professional-vehicles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Professional Vehicles"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P15646476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Professional Vehicles"
					]
				}
			}
		},
		{
			"displayName": "Designation",
			"name": "Designation",
			"description": "designation of the vehicle",
			"default": "peugeot",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Designation",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Professional Vehicles"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{id}/professional-vehicles",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Professional Vehicles"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P198746",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Professional Vehicles"
					]
				}
			}
		},
		{
			"displayName": "About",
			"name": "About",
			"type": "string",
			"default": "<b> Mon premier dossier </b>",
			"routing": {
				"send": {
					"property": "About",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Professional Vehicles"
					]
				}
			}
		},
		{
			"displayName": "Brand",
			"name": "Brand",
			"type": "string",
			"default": "Renault",
			"routing": {
				"send": {
					"property": "Brand",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Professional Vehicles"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "Peugeot Lyon",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Professional Vehicles"
					]
				}
			}
		},
		{
			"displayName": "Company Tax",
			"name": "CompanyTax",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "CompanyTax",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Professional Vehicles"
					]
				}
			}
		},
		{
			"displayName": "Date In",
			"name": "DateIn",
			"type": "string",
			"default": "20201802",
			"routing": {
				"send": {
					"property": "DateIn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Professional Vehicles"
					]
				}
			}
		},
		{
			"displayName": "Date Out",
			"name": "DateOut",
			"type": "string",
			"default": "20201802",
			"routing": {
				"send": {
					"property": "DateOut",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Professional Vehicles"
					]
				}
			}
		},
		{
			"displayName": "Designation",
			"name": "Designation",
			"type": "string",
			"default": "peugeot siège",
			"routing": {
				"send": {
					"property": "Designation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Professional Vehicles"
					]
				}
			}
		},
		{
			"displayName": "Home",
			"name": "Home",
			"type": "boolean",
			"default": "yes",
			"routing": {
				"send": {
					"property": "Home",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Professional Vehicles"
					]
				}
			}
		},
		{
			"displayName": "Keywords",
			"name": "Keywords",
			"type": "json",
			"default": "[\n  \"paris\",\n  \"clio\"\n]",
			"routing": {
				"send": {
					"property": "Keywords",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Professional Vehicles"
					]
				}
			}
		},
		{
			"displayName": "Level",
			"name": "Level",
			"type": "options",
			"default": "confidential",
			"options": [
				{
					"name": "Confidential",
					"value": "confidential"
				},
				{
					"name": "Regular",
					"value": "regular"
				},
				{
					"name": "Public",
					"value": "public"
				}
			],
			"routing": {
				"send": {
					"property": "Level",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Professional Vehicles"
					]
				}
			}
		},
		{
			"displayName": "Model",
			"name": "Model",
			"type": "string",
			"default": "Clio",
			"routing": {
				"send": {
					"property": "Model",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Professional Vehicles"
					]
				}
			}
		},
		{
			"displayName": "Registration Date",
			"name": "RegistrationDate",
			"type": "string",
			"default": "20181231",
			"routing": {
				"send": {
					"property": "RegistrationDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Professional Vehicles"
					]
				}
			}
		},
		{
			"displayName": "Registration Number",
			"name": "RegistrationNumber",
			"type": "string",
			"default": "AA001AA",
			"routing": {
				"send": {
					"property": "RegistrationNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Professional Vehicles"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "Type",
			"type": "string",
			"default": "car",
			"routing": {
				"send": {
					"property": "Type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Professional Vehicles"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "Value",
			"type": "number",
			"default": 1500.23,
			"routing": {
				"send": {
					"property": "Value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Professional Vehicles"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{id}/settings/nf203/logs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Settings Nf 203 Logs"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P15646476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Settings Nf 203 Logs"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{id}/settings/nf203/logs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Settings Nf 203 Logs"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P198746",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Settings Nf 203 Logs"
					]
				}
			}
		},
		{
			"displayName": "Enabled",
			"name": "Enabled",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "Enabled",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Settings Nf 203 Logs"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{id}/status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Status"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P15646476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Status"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{id}/status",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Status"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Status"
					]
				}
			}
		},
		{
			"displayName": "Code",
			"name": "Code",
			"type": "string",
			"default": "COD",
			"routing": {
				"send": {
					"property": "Code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Status"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "my first code",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Status"
					]
				}
			}
		},
		{
			"displayName": "Label",
			"name": "Label",
			"type": "string",
			"default": "code 1",
			"routing": {
				"send": {
					"property": "Label",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Status"
					]
				}
			}
		},
		{
			"displayName": "DELETE /spaces/{id}/status/{code}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Status"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Status"
					]
				}
			}
		},
		{
			"displayName": "Code",
			"name": "code",
			"required": true,
			"description": "code of the status",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Status"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{id}/tax-contracts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Tax Contracts"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P15646476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Tax Contracts"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{id}/tax-contracts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Tax Contracts"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P198746",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Tax Contracts"
					]
				}
			}
		},
		{
			"displayName": "About",
			"name": "About",
			"type": "string",
			"default": "<b> Mon premier dossier </b>",
			"routing": {
				"send": {
					"property": "About",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Tax Contracts"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "ogm of the company",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Tax Contracts"
					]
				}
			}
		},
		{
			"displayName": "Designation",
			"name": "Designation",
			"type": "string",
			"default": "année 2019",
			"routing": {
				"send": {
					"property": "Designation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Tax Contracts"
					]
				}
			}
		},
		{
			"displayName": "End",
			"name": "End",
			"type": "string",
			"default": "20181231",
			"routing": {
				"send": {
					"property": "End",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Tax Contracts"
					]
				}
			}
		},
		{
			"displayName": "Home",
			"name": "Home",
			"type": "boolean",
			"default": "yes",
			"routing": {
				"send": {
					"property": "Home",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Tax Contracts"
					]
				}
			}
		},
		{
			"displayName": "Keywords",
			"name": "Keywords",
			"type": "json",
			"default": "[\n  \"paris\",\n  \"comptabilité\"\n]",
			"routing": {
				"send": {
					"property": "Keywords",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Tax Contracts"
					]
				}
			}
		},
		{
			"displayName": "Level",
			"name": "Level",
			"type": "options",
			"default": "confidential",
			"options": [
				{
					"name": "Confidential",
					"value": "confidential"
				},
				{
					"name": "Regular",
					"value": "regular"
				},
				{
					"name": "Public",
					"value": "public"
				}
			],
			"routing": {
				"send": {
					"property": "Level",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Tax Contracts"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "Start",
			"type": "string",
			"default": "20180101",
			"routing": {
				"send": {
					"property": "Start",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Tax Contracts"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{id}/triggers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Triggers"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P15646476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Triggers"
					]
				}
			}
		},
		{
			"displayName": "DELETE /spaces/{id}/triggers/{name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Triggers"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P198746",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Triggers"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"required": true,
			"description": "trigger name",
			"default": "collect",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Triggers"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{id}/triggers/{name}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Triggers"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the space",
			"default": "P198746",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Triggers"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "name",
			"required": true,
			"description": "trigger name",
			"default": "collect",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Triggers"
					]
				}
			}
		},
		{
			"displayName": "DELETE /spaces/{spaceId}/common-folders/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Common Folders"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "T18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Common Folders"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Common Folders"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{spaceId}/common-folders/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Common Folders"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "T18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Common Folders"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Common Folders"
					]
				}
			}
		},
		{
			"displayName": "About",
			"name": "About",
			"type": "string",
			"default": "<b> Mon premier dossier </b>",
			"routing": {
				"send": {
					"property": "About",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Common Folders"
					]
				}
			}
		},
		{
			"displayName": "Archival Date",
			"name": "ArchivalDate",
			"type": "string",
			"default": "20160203",
			"routing": {
				"send": {
					"property": "ArchivalDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Common Folders"
					]
				}
			}
		},
		{
			"displayName": "Home",
			"name": "Home",
			"type": "boolean",
			"default": "yes",
			"routing": {
				"send": {
					"property": "Home",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Common Folders"
					]
				}
			}
		},
		{
			"displayName": "Keywords",
			"name": "Keywords",
			"type": "json",
			"default": "[\n  \"paris\",\n  \"comptabilité\"\n]",
			"routing": {
				"send": {
					"property": "Keywords",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Common Folders"
					]
				}
			}
		},
		{
			"displayName": "Level",
			"name": "Level",
			"type": "options",
			"default": "confidential",
			"options": [
				{
					"name": "Confidential",
					"value": "confidential"
				},
				{
					"name": "Regular",
					"value": "regular"
				},
				{
					"name": "Public",
					"value": "public"
				}
			],
			"routing": {
				"send": {
					"property": "Level",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Common Folders"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "Dupond",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Common Folders"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/company-entities/{id}/follow-ups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Company Entities Follow Ups"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the company entity",
			"default": "T15646IFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Company Entities Follow Ups"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Company Entities Follow Ups"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/customers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Customers"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Customers"
					]
				}
			}
		},
		{
			"displayName": "Customer Number",
			"name": "CustomerNumber",
			"description": "CustomerNumber of the customer",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "CustomerNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Customers"
					]
				}
			}
		},
		{
			"displayName": "With Contracting Partner",
			"name": "WithContractingPartner",
			"description": "if present returns infos of the ContractingPartner too",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "WithContractingPartner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Customers"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/customers/all",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Customers All"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Customers All"
					]
				}
			}
		},
		{
			"displayName": "Customer Number",
			"name": "CustomerNumber",
			"description": "CustomerNumber of the employee",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "CustomerNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Customers All"
					]
				}
			}
		},
		{
			"displayName": "With Contracting Partner",
			"name": "WithContractingPartner",
			"description": "if present returns infos of the ContractingPartner too",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "WithContractingPartner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Customers All"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/documents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Documents"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Documents"
					]
				}
			}
		},
		{
			"displayName": "Full Text",
			"name": "FullText",
			"description": "Text to find",
			"default": "durand",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "FullText",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Documents"
					]
				}
			}
		},
		{
			"displayName": "Range",
			"name": "Range",
			"description": "index range of the results",
			"default": "10-19",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Range",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Documents"
					]
				}
			}
		},
		{
			"displayName": "Class",
			"name": "Class",
			"description": "class of the document to find",
			"default": "payslip",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Class",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Documents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{spaceId}/documents/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Documents"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Documents"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Id of the document",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Documents"
					]
				}
			}
		},
		{
			"displayName": "Accounting",
			"name": "Accounting",
			"type": "json",
			"default": "{\n  \"AccountedOn\": \"20181202\",\n  \"Workbook\": \"fiscal\",\n  \"YearMonth\": 201802\n}",
			"routing": {
				"send": {
					"property": "Accounting",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Documents"
					]
				}
			}
		},
		{
			"displayName": "Author",
			"name": "Author",
			"type": "string",
			"default": "Antoine Dupond",
			"routing": {
				"send": {
					"property": "Author",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Documents"
					]
				}
			}
		},
		{
			"displayName": "Code",
			"name": "Code",
			"type": "string",
			"default": "COD",
			"routing": {
				"send": {
					"property": "Code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Documents"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "my document",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Documents"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "Date",
			"type": "string",
			"default": "20161203",
			"routing": {
				"send": {
					"property": "Date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Documents"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "Title",
			"type": "string",
			"default": "Facture décembre",
			"routing": {
				"send": {
					"property": "Title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Documents"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/documents/{documentId}/extend",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Documents Extend"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Id of the document",
			"default": "P15646IFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Documents Extend"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Documents Extend"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{spaceId}/documents/{documentId}/extend",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Documents Extend"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Id of the document",
			"default": "P1987HGFKJFAA46",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Documents Extend"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Documents Extend"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/documents/{documentId}/folders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Documents Folders"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Id of the document",
			"default": "P15646IFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Documents Folders"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Documents Folders"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{spaceId}/documents/{documentId}/mailing",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Documents Mailing"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Id of the document",
			"default": "P1987HGFKJFAA46",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Documents Mailing"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Documents Mailing"
					]
				}
			}
		},
		{
			"displayName": "Address",
			"name": "Address",
			"type": "json",
			"default": "{\n  \"City\": \"Paris\",\n  \"Complement\": \"batiment A\",\n  \"Country\": \"France\",\n  \"Street\": \"2, rue du chateau\",\n  \"ZipCode\": \"75001\"\n}",
			"routing": {
				"send": {
					"property": "Address",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Documents Mailing"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "Société Dupond",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Documents Mailing"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/documents/{documentId}/mailingprice",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Documents Mailingprice"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Id of the document",
			"default": "P1987HGFKJFAA46",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Documents Mailingprice"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Documents Mailingprice"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/documents/{documentId}/versions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Documents Versions"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Id of the document",
			"default": "P15646IFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Documents Versions"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Documents Versions"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{spaceId}/documents/{documentId}/versions",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Documents Versions"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Id of the document",
			"default": "P1987HGFKJFAA46",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Documents Versions"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Documents Versions"
					]
				}
			}
		},
		{
			"displayName": "Author",
			"name": "Author",
			"type": "string",
			"default": "Antoine Dupond",
			"routing": {
				"send": {
					"property": "Author",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Documents Versions"
					]
				}
			}
		},
		{
			"displayName": "Code",
			"name": "Code",
			"type": "string",
			"default": "COD",
			"routing": {
				"send": {
					"property": "Code",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Documents Versions"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "my document",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Documents Versions"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "Date",
			"type": "string",
			"default": "20161203",
			"routing": {
				"send": {
					"property": "Date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Documents Versions"
					]
				}
			}
		},
		{
			"displayName": "File",
			"name": "File",
			"type": "json",
			"default": "{\n  \"Content64Encoded\": \"gjgjJ9FJA829H9HA18B\",\n  \"Name\": \"MonDocument.pdf\"\n}",
			"routing": {
				"send": {
					"property": "File",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Documents Versions"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "Title",
			"type": "string",
			"default": "Facture décembre",
			"routing": {
				"send": {
					"property": "Title",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Documents Versions"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/documents/{documentId}/versions/current",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Documents Versions Current"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Id of the document",
			"default": "P15646IFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Documents Versions Current"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Documents Versions Current"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/documents/{id}/access",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Documents Access"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the document",
			"default": "P15646IFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Documents Access"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Documents Access"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/documents/{id}/accounting",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Documents Accounting"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the document",
			"default": "P15646IFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Documents Accounting"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Documents Accounting"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/documents/{id}/download",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Documents Download"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the document",
			"default": "P15646IFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Documents Download"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Documents Download"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/employees",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Employees"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Employees"
					]
				}
			}
		},
		{
			"displayName": "SS Number",
			"name": "SSNumber",
			"description": "SSNumber of the employee",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "SSNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Employees"
					]
				}
			}
		},
		{
			"displayName": "Employee Number",
			"name": "EmployeeNumber",
			"description": "EmployeeNumber of the employee",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "EmployeeNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Employees"
					]
				}
			}
		},
		{
			"displayName": "With Contracting Partner",
			"name": "WithContractingPartner",
			"description": "if present returns infos of the ContractingPartner too",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "WithContractingPartner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Employees"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/employees/all",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Employees All"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Employees All"
					]
				}
			}
		},
		{
			"displayName": "SS Number",
			"name": "SSNumber",
			"description": "SSNumber of the employee",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "SSNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Employees All"
					]
				}
			}
		},
		{
			"displayName": "Employee Number",
			"name": "EmployeeNumber",
			"description": "EmployeeNumber of the employee",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "EmployeeNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Employees All"
					]
				}
			}
		},
		{
			"displayName": "With Contracting Partner",
			"name": "WithContractingPartner",
			"description": "if present returns infos of the ContractingPartner too",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "WithContractingPartner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Employees All"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/employers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Employers"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Employers"
					]
				}
			}
		},
		{
			"displayName": "Employee Number",
			"name": "EmployeeNumber",
			"description": "EmployeeNumber of the employer contract",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "EmployeeNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Employers"
					]
				}
			}
		},
		{
			"displayName": "With Contracting Partner",
			"name": "WithContractingPartner",
			"description": "if present returns infos of the ContractingPartner too",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "WithContractingPartner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Employers"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/employers/all",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Employers All"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Employers All"
					]
				}
			}
		},
		{
			"displayName": "Employee Number",
			"name": "EmployeeNumber",
			"description": "EmployeeNumber of the employer contract",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "EmployeeNumber",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Employers All"
					]
				}
			}
		},
		{
			"displayName": "With Contracting Partner",
			"name": "WithContractingPartner",
			"description": "if present returns infos of the ContractingPartner too",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "WithContractingPartner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Employers All"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/extend",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Extend"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Extend"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{spaceId}/extend",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Extend"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Extend"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/folders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"description": "Name of the folder",
			"default": "Secrétariat juridique",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders"
					]
				}
			}
		},
		{
			"displayName": "Keywords",
			"name": "Keywords",
			"description": "keywords attached to the folder",
			"default": "juridique",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Keywords",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders"
					]
				}
			}
		},
		{
			"displayName": "Root Folders",
			"name": "RootFolders",
			"description": "only root folders",
			"default": "all",
			"type": "options",
			"options": [
				{
					"name": "All",
					"value": "all"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "RootFolders",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders"
					]
				}
			}
		},
		{
			"displayName": "Range",
			"name": "Range",
			"description": "index range of the results",
			"default": "10-19",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Range",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders"
					]
				}
			}
		},
		{
			"displayName": "Class",
			"name": "Class",
			"description": "class of the folder",
			"default": "social",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Class",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/folders/all",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders All"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"description": "Name of the folder",
			"default": "Secrétariat juridique",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders All"
					]
				}
			}
		},
		{
			"displayName": "Range",
			"name": "Range",
			"description": "index range of the results",
			"default": "10-19",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Range",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders All"
					]
				}
			}
		},
		{
			"displayName": "Keywords",
			"name": "Keywords",
			"description": "keywords attached to the folder",
			"default": "juridique",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Keywords",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders All"
					]
				}
			}
		},
		{
			"displayName": "Class",
			"name": "Class",
			"description": "class of the folder",
			"default": "social",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Class",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders All"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders All"
					]
				}
			}
		},
		{
			"displayName": "DELETE /spaces/{spaceId}/folders/{folderId}/bank-statements/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Bank Statements"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Bank Statements"
					]
				}
			}
		},
		{
			"displayName": "Folder ID",
			"name": "folderId",
			"required": true,
			"description": "Id of the folder",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Bank Statements"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Id of the document",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Bank Statements"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{spaceId}/folders/{folderId}/bank-statements/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Bank Statements"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Bank Statements"
					]
				}
			}
		},
		{
			"displayName": "Folder ID",
			"name": "folderId",
			"required": true,
			"description": "Id of the folder",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Bank Statements"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Id of the document",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Bank Statements"
					]
				}
			}
		},
		{
			"displayName": "Balance",
			"name": "Balance",
			"type": "number",
			"default": 1352.63,
			"routing": {
				"send": {
					"property": "Balance",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Bank Statements"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "Number",
			"type": "number",
			"default": "10015848",
			"routing": {
				"send": {
					"property": "Number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Bank Statements"
					]
				}
			}
		},
		{
			"displayName": "Statement Date",
			"name": "StatementDate",
			"type": "string",
			"default": "20160801",
			"routing": {
				"send": {
					"property": "StatementDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Bank Statements"
					]
				}
			}
		},
		{
			"displayName": "DELETE /spaces/{spaceId}/folders/{folderId}/contractual-documents/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Contractual Documents"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Contractual Documents"
					]
				}
			}
		},
		{
			"displayName": "Folder ID",
			"name": "folderId",
			"required": true,
			"description": "Id of the folder",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Contractual Documents"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Id of the document",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Contractual Documents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{spaceId}/folders/{folderId}/contractual-documents/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Contractual Documents"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Contractual Documents"
					]
				}
			}
		},
		{
			"displayName": "Folder ID",
			"name": "folderId",
			"required": true,
			"description": "Id of the folder",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Contractual Documents"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Id of the document",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Contractual Documents"
					]
				}
			}
		},
		{
			"displayName": "Amount",
			"name": "Amount",
			"type": "string",
			"default": "1001.36",
			"routing": {
				"send": {
					"property": "Amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Contractual Documents"
					]
				}
			}
		},
		{
			"displayName": "Designation",
			"name": "Designation",
			"type": "string",
			"default": "contrat client",
			"routing": {
				"send": {
					"property": "Designation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Contractual Documents"
					]
				}
			}
		},
		{
			"displayName": "Reference",
			"name": "Reference",
			"type": "string",
			"default": "151465AFHIA",
			"routing": {
				"send": {
					"property": "Reference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Contractual Documents"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "StartDate",
			"type": "string",
			"default": "20181128",
			"routing": {
				"send": {
					"property": "StartDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Contractual Documents"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "Type",
			"type": "options",
			"default": "quotation",
			"options": [
				{
					"name": "Contract",
					"value": "contract"
				},
				{
					"name": "Engagement Letter",
					"value": "engagement-letter"
				},
				{
					"name": "Amendment",
					"value": "amendment"
				},
				{
					"name": "Purchase Order",
					"value": "purchase-order"
				},
				{
					"name": "Delivery Order",
					"value": "delivery-order"
				},
				{
					"name": "Quotation",
					"value": "quotation"
				},
				{
					"name": "Other",
					"value": "other"
				}
			],
			"routing": {
				"send": {
					"property": "Type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Contractual Documents"
					]
				}
			}
		},
		{
			"displayName": "DELETE /spaces/{spaceId}/folders/{folderId}/corporate-tax-declarations/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Corporate Tax Declarations"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Corporate Tax Declarations"
					]
				}
			}
		},
		{
			"displayName": "Folder ID",
			"name": "folderId",
			"required": true,
			"description": "Id of the folder",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Corporate Tax Declarations"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Id of the document",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Corporate Tax Declarations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{spaceId}/folders/{folderId}/corporate-tax-declarations/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Corporate Tax Declarations"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Corporate Tax Declarations"
					]
				}
			}
		},
		{
			"displayName": "Folder ID",
			"name": "folderId",
			"required": true,
			"description": "Id of the folder",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Corporate Tax Declarations"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Id of the document",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Corporate Tax Declarations"
					]
				}
			}
		},
		{
			"displayName": "Amount",
			"name": "Amount",
			"type": "number",
			"default": 132.63,
			"routing": {
				"send": {
					"property": "Amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Corporate Tax Declarations"
					]
				}
			}
		},
		{
			"displayName": "Declaration Date",
			"name": "DeclarationDate",
			"type": "string",
			"default": "20160801",
			"routing": {
				"send": {
					"property": "DeclarationDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Corporate Tax Declarations"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "Order",
			"type": "options",
			"default": "1st advance",
			"options": [
				{
					"name": "1st Advance",
					"value": "1st advance"
				},
				{
					"name": "2nd Advance",
					"value": "2nd advance"
				},
				{
					"name": "3rd Advance",
					"value": "3rd advance"
				},
				{
					"name": "4th Advance",
					"value": "4th advance"
				},
				{
					"name": "Regularization",
					"value": "regularization"
				}
			],
			"routing": {
				"send": {
					"property": "Order",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Corporate Tax Declarations"
					]
				}
			}
		},
		{
			"displayName": "Rate",
			"name": "Rate",
			"type": "number",
			"default": 10.63,
			"routing": {
				"send": {
					"property": "Rate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Corporate Tax Declarations"
					]
				}
			}
		},
		{
			"displayName": "Tax Base",
			"name": "TaxBase",
			"type": "number",
			"default": 123.36,
			"routing": {
				"send": {
					"property": "TaxBase",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Corporate Tax Declarations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /spaces/{spaceId}/folders/{folderId}/expense-proofs/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "Folder ID",
			"name": "folderId",
			"required": true,
			"description": "Id of the folder",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Id of the document",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{spaceId}/folders/{folderId}/expense-proofs/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "Folder ID",
			"name": "folderId",
			"required": true,
			"description": "Id of the folder",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Id of the document",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "Account",
			"name": "Account",
			"type": "options",
			"default": "CAB",
			"options": [
				{
					"name": "CAB",
					"value": "CAB"
				},
				{
					"name": "IKM",
					"value": "IKM"
				},
				{
					"name": "PRK",
					"value": "PRK"
				},
				{
					"name": "TXI",
					"value": "TXI"
				},
				{
					"name": "VOY",
					"value": "VOY"
				},
				{
					"name": "PTT",
					"value": "PTT"
				},
				{
					"name": "FHR",
					"value": "FHR"
				},
				{
					"name": "DIV",
					"value": "DIV"
				},
				{
					"name": "RES",
					"value": "RES"
				}
			],
			"routing": {
				"send": {
					"property": "Account",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "Archival Date",
			"name": "ArchivalDate",
			"type": "string",
			"default": 20211231,
			"routing": {
				"send": {
					"property": "ArchivalDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "Before VAT",
			"name": "BeforeVAT",
			"type": "number",
			"default": 1000,
			"routing": {
				"send": {
					"property": "BeforeVAT",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "Expense Date",
			"name": "ExpenseDate",
			"type": "string",
			"default": "20200202",
			"routing": {
				"send": {
					"property": "ExpenseDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "Expense Report ID",
			"name": "ExpenseReportId",
			"type": "string",
			"default": "PFOIAHF874984",
			"routing": {
				"send": {
					"property": "ExpenseReportId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "Provider",
			"name": "Provider",
			"type": "string",
			"default": "G7",
			"routing": {
				"send": {
					"property": "Provider",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "Reason",
			"name": "Reason",
			"type": "string",
			"default": "taxi",
			"routing": {
				"send": {
					"property": "Reason",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "Status",
			"type": "options",
			"default": "R",
			"options": [
				{
					"name": "R",
					"value": "R"
				},
				{
					"name": "V",
					"value": "V"
				},
				{
					"name": "W",
					"value": "W"
				}
			],
			"routing": {
				"send": {
					"property": "Status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "VAT",
			"name": "VAT",
			"type": "number",
			"default": 19.5,
			"routing": {
				"send": {
					"property": "VAT",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "DELETE /spaces/{spaceId}/folders/{folderId}/expense-reports/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Expense Reports"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Expense Reports"
					]
				}
			}
		},
		{
			"displayName": "Folder ID",
			"name": "folderId",
			"required": true,
			"description": "Id of the folder",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Expense Reports"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Id of the document",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Expense Reports"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{spaceId}/folders/{folderId}/expense-reports/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Expense Reports"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Expense Reports"
					]
				}
			}
		},
		{
			"displayName": "Folder ID",
			"name": "folderId",
			"required": true,
			"description": "Id of the folder",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Expense Reports"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Id of the document",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Expense Reports"
					]
				}
			}
		},
		{
			"displayName": "Before VAT",
			"name": "BeforeVAT",
			"type": "number",
			"default": 1000,
			"routing": {
				"send": {
					"property": "BeforeVAT",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Expense Reports"
					]
				}
			}
		},
		{
			"displayName": "Expense Date",
			"name": "ExpenseDate",
			"type": "string",
			"default": "20200202",
			"routing": {
				"send": {
					"property": "ExpenseDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Expense Reports"
					]
				}
			}
		},
		{
			"displayName": "Incl VAT",
			"name": "InclVAT",
			"type": "number",
			"default": 1200,
			"routing": {
				"send": {
					"property": "InclVAT",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Expense Reports"
					]
				}
			}
		},
		{
			"displayName": "Processing Date",
			"name": "ProcessingDate",
			"type": "string",
			"default": "20200203",
			"routing": {
				"send": {
					"property": "ProcessingDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Expense Reports"
					]
				}
			}
		},
		{
			"displayName": "VAT",
			"name": "VAT",
			"type": "number",
			"default": 19.5,
			"routing": {
				"send": {
					"property": "VAT",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Expense Reports"
					]
				}
			}
		},
		{
			"displayName": "DELETE /spaces/{spaceId}/folders/{folderId}/invoices/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "Folder ID",
			"name": "folderId",
			"required": true,
			"description": "Id of the folder",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Id of the document",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{spaceId}/folders/{folderId}/invoices/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "Folder ID",
			"name": "folderId",
			"required": true,
			"description": "Id of the folder",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Id of the document",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "Before VAT",
			"name": "BeforeVAT",
			"type": "number",
			"default": 1000,
			"routing": {
				"send": {
					"property": "BeforeVAT",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "Due Date",
			"name": "DueDate",
			"type": "string",
			"default": 20190130,
			"routing": {
				"send": {
					"property": "DueDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "Incl VAT",
			"name": "InclVAT",
			"type": "number",
			"default": 1200,
			"routing": {
				"send": {
					"property": "InclVAT",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "Invoice Date",
			"name": "InvoiceDate",
			"type": "string",
			"default": "20200202",
			"routing": {
				"send": {
					"property": "InvoiceDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "Number",
			"type": "string",
			"default": "036459879874",
			"routing": {
				"send": {
					"property": "Number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "Payment Date",
			"name": "PaymentDate",
			"type": "string",
			"default": 20190131,
			"routing": {
				"send": {
					"property": "PaymentDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "Type",
			"type": "options",
			"default": "commercial-invoice",
			"options": [
				{
					"name": "Commercial Invoice",
					"value": "commercial-invoice"
				},
				{
					"name": "Credit Note",
					"value": "credit-note"
				},
				{
					"name": "Amending Invoice",
					"value": "amending-invoice"
				},
				{
					"name": "Self Billing",
					"value": "self-billing"
				},
				{
					"name": "Credit Self Billing",
					"value": "credit-self-billing"
				},
				{
					"name": "Down Payment Invoice",
					"value": "down-payment-invoice"
				},
				{
					"name": "Informations Invoice",
					"value": "informations-invoice"
				}
			],
			"routing": {
				"send": {
					"property": "Type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "VAT",
			"name": "VAT",
			"type": "number",
			"default": 19.5,
			"routing": {
				"send": {
					"property": "VAT",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/folders/{folderId}/nominative-social-declarations/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Nominative Social Declarations"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Nominative Social Declarations"
					]
				}
			}
		},
		{
			"displayName": "Folder ID",
			"name": "folderId",
			"required": true,
			"description": "Id of the folder",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Nominative Social Declarations"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Id of the document",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Nominative Social Declarations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /spaces/{spaceId}/folders/{folderId}/other-taxes/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Other Taxes"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Other Taxes"
					]
				}
			}
		},
		{
			"displayName": "Folder ID",
			"name": "folderId",
			"required": true,
			"description": "Id of the folder",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Other Taxes"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Id of the document",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Other Taxes"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{spaceId}/folders/{folderId}/other-taxes/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Other Taxes"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Other Taxes"
					]
				}
			}
		},
		{
			"displayName": "Folder ID",
			"name": "folderId",
			"required": true,
			"description": "Id of the folder",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Other Taxes"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Id of the document",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Other Taxes"
					]
				}
			}
		},
		{
			"displayName": "Amount",
			"name": "Amount",
			"type": "number",
			"default": 132.63,
			"routing": {
				"send": {
					"property": "Amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Other Taxes"
					]
				}
			}
		},
		{
			"displayName": "Declaration Date",
			"name": "DeclarationDate",
			"type": "string",
			"default": "20160801",
			"routing": {
				"send": {
					"property": "DeclarationDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Other Taxes"
					]
				}
			}
		},
		{
			"displayName": "Reference",
			"name": "Reference",
			"type": "string",
			"default": "décla CFE",
			"routing": {
				"send": {
					"property": "Reference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Other Taxes"
					]
				}
			}
		},
		{
			"displayName": "DELETE /spaces/{spaceId}/folders/{folderId}/payrolls/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Payrolls"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Payrolls"
					]
				}
			}
		},
		{
			"displayName": "Folder ID",
			"name": "folderId",
			"required": true,
			"description": "Id of the folder",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Payrolls"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Id of the document",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Payrolls"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{spaceId}/folders/{folderId}/payrolls/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Payrolls"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Payrolls"
					]
				}
			}
		},
		{
			"displayName": "Folder ID",
			"name": "folderId",
			"required": true,
			"description": "Id of the folder",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Payrolls"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Id of the document",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Payrolls"
					]
				}
			}
		},
		{
			"displayName": "Begin",
			"name": "Begin",
			"type": "string",
			"default": "20160801",
			"routing": {
				"send": {
					"property": "Begin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Payrolls"
					]
				}
			}
		},
		{
			"displayName": "Employee Contributions",
			"name": "EmployeeContributions",
			"type": "number",
			"default": 1352.63,
			"routing": {
				"send": {
					"property": "EmployeeContributions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Payrolls"
					]
				}
			}
		},
		{
			"displayName": "Employer Contributions",
			"name": "EmployerContributions",
			"type": "number",
			"default": 132.63,
			"routing": {
				"send": {
					"property": "EmployerContributions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Payrolls"
					]
				}
			}
		},
		{
			"displayName": "End",
			"name": "End",
			"type": "string",
			"default": "20160831",
			"routing": {
				"send": {
					"property": "End",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Payrolls"
					]
				}
			}
		},
		{
			"displayName": "Net Amount",
			"name": "NetAmount",
			"type": "number",
			"default": 1005.63,
			"routing": {
				"send": {
					"property": "NetAmount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Payrolls"
					]
				}
			}
		},
		{
			"displayName": "Total Gross Amount",
			"name": "TotalGrossAmount",
			"type": "number",
			"default": 1548.63,
			"routing": {
				"send": {
					"property": "TotalGrossAmount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Payrolls"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{spaceId}/folders/{folderId}/payrolls/{documentId}/refresh",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Payrolls Refresh"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Payrolls Refresh"
					]
				}
			}
		},
		{
			"displayName": "Folder ID",
			"name": "folderId",
			"required": true,
			"description": "Id of the folder",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Payrolls Refresh"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Id of the document",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Payrolls Refresh"
					]
				}
			}
		},
		{
			"displayName": "DELETE /spaces/{spaceId}/folders/{folderId}/payslips/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Payslips"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Payslips"
					]
				}
			}
		},
		{
			"displayName": "Folder ID",
			"name": "folderId",
			"required": true,
			"description": "Id of the folder",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Payslips"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Id of the document",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Payslips"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{spaceId}/folders/{folderId}/payslips/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Payslips"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Payslips"
					]
				}
			}
		},
		{
			"displayName": "Folder ID",
			"name": "folderId",
			"required": true,
			"description": "Id of the folder",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Payslips"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Id of the document",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Payslips"
					]
				}
			}
		},
		{
			"displayName": "Begin",
			"name": "Begin",
			"type": "string",
			"default": "20160801",
			"routing": {
				"send": {
					"property": "Begin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Payslips"
					]
				}
			}
		},
		{
			"displayName": "Employee Contributions",
			"name": "EmployeeContributions",
			"type": "number",
			"default": 2000.5,
			"routing": {
				"send": {
					"property": "EmployeeContributions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Payslips"
					]
				}
			}
		},
		{
			"displayName": "Employer Contributions",
			"name": "EmployerContributions",
			"type": "number",
			"default": 400.5,
			"routing": {
				"send": {
					"property": "EmployerContributions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Payslips"
					]
				}
			}
		},
		{
			"displayName": "End",
			"name": "End",
			"type": "string",
			"default": "20160831",
			"routing": {
				"send": {
					"property": "End",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Payslips"
					]
				}
			}
		},
		{
			"displayName": "Fixed Gross Amount",
			"name": "FixedGrossAmount",
			"type": "number",
			"default": 1352.63,
			"routing": {
				"send": {
					"property": "FixedGrossAmount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Payslips"
					]
				}
			}
		},
		{
			"displayName": "Net Amount",
			"name": "NetAmount",
			"type": "number",
			"default": 1005.63,
			"routing": {
				"send": {
					"property": "NetAmount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Payslips"
					]
				}
			}
		},
		{
			"displayName": "Total Gross Amount",
			"name": "TotalGrossAmount",
			"type": "number",
			"default": 1548.63,
			"routing": {
				"send": {
					"property": "TotalGrossAmount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Payslips"
					]
				}
			}
		},
		{
			"displayName": "Vacation",
			"name": "Vacation",
			"type": "number",
			"default": 20.5,
			"routing": {
				"send": {
					"property": "Vacation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Payslips"
					]
				}
			}
		},
		{
			"displayName": "Variable Gross Amount",
			"name": "VariableGrossAmount",
			"type": "number",
			"default": 132.63,
			"routing": {
				"send": {
					"property": "VariableGrossAmount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Payslips"
					]
				}
			}
		},
		{
			"displayName": "DELETE /spaces/{spaceId}/folders/{folderId}/social-contracts/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Social Contracts"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Social Contracts"
					]
				}
			}
		},
		{
			"displayName": "Folder ID",
			"name": "folderId",
			"required": true,
			"description": "Id of the folder",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Social Contracts"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Id of the document",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Social Contracts"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{spaceId}/folders/{folderId}/social-contracts/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Social Contracts"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Social Contracts"
					]
				}
			}
		},
		{
			"displayName": "Folder ID",
			"name": "folderId",
			"required": true,
			"description": "Id of the folder",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Social Contracts"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Id of the document",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Social Contracts"
					]
				}
			}
		},
		{
			"displayName": "Contract Date",
			"name": "ContractDate",
			"type": "string",
			"default": "20190202",
			"routing": {
				"send": {
					"property": "ContractDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Social Contracts"
					]
				}
			}
		},
		{
			"displayName": "Contract Duration",
			"name": "ContractDuration",
			"type": "string",
			"default": "6 mois",
			"routing": {
				"send": {
					"property": "ContractDuration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Social Contracts"
					]
				}
			}
		},
		{
			"displayName": "Contractual Change",
			"name": "ContractualChange",
			"type": "string",
			"default": "augmentation",
			"routing": {
				"send": {
					"property": "ContractualChange",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Social Contracts"
					]
				}
			}
		},
		{
			"displayName": "Position",
			"name": "Position",
			"type": "string",
			"default": "cadre",
			"routing": {
				"send": {
					"property": "Position",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Social Contracts"
					]
				}
			}
		},
		{
			"displayName": "Wage Developments",
			"name": "WageDevelopments",
			"type": "number",
			"default": 1548.63,
			"routing": {
				"send": {
					"property": "WageDevelopments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Social Contracts"
					]
				}
			}
		},
		{
			"displayName": "DELETE /spaces/{spaceId}/folders/{folderId}/social-declarations/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Social Declarations"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Social Declarations"
					]
				}
			}
		},
		{
			"displayName": "Folder ID",
			"name": "folderId",
			"required": true,
			"description": "Id of the folder",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Social Declarations"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Id of the document",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Social Declarations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{spaceId}/folders/{folderId}/social-declarations/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Social Declarations"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Social Declarations"
					]
				}
			}
		},
		{
			"displayName": "Folder ID",
			"name": "folderId",
			"required": true,
			"description": "Id of the folder",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Social Declarations"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Id of the document",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Social Declarations"
					]
				}
			}
		},
		{
			"displayName": "Amount",
			"name": "Amount",
			"type": "number",
			"default": 132.63,
			"routing": {
				"send": {
					"property": "Amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Social Declarations"
					]
				}
			}
		},
		{
			"displayName": "Declaration Date",
			"name": "DeclarationDate",
			"type": "string",
			"default": "20160801",
			"routing": {
				"send": {
					"property": "DeclarationDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Social Declarations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /spaces/{spaceId}/folders/{folderId}/vat-declarations/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Vat Declarations"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Vat Declarations"
					]
				}
			}
		},
		{
			"displayName": "Folder ID",
			"name": "folderId",
			"required": true,
			"description": "Id of the folder",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Vat Declarations"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Id of the document",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Vat Declarations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{spaceId}/folders/{folderId}/vat-declarations/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Vat Declarations"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Vat Declarations"
					]
				}
			}
		},
		{
			"displayName": "Folder ID",
			"name": "folderId",
			"required": true,
			"description": "Id of the folder",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Vat Declarations"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Id of the document",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Vat Declarations"
					]
				}
			}
		},
		{
			"displayName": "Begin",
			"name": "Begin",
			"type": "string",
			"default": "20160801",
			"routing": {
				"send": {
					"property": "Begin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Vat Declarations"
					]
				}
			}
		},
		{
			"displayName": "Collected VAT",
			"name": "CollectedVAT",
			"type": "number",
			"default": 1548.63,
			"routing": {
				"send": {
					"property": "CollectedVAT",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Vat Declarations"
					]
				}
			}
		},
		{
			"displayName": "Credit VAT",
			"name": "CreditVAT",
			"type": "number",
			"default": 400.5,
			"routing": {
				"send": {
					"property": "CreditVAT",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Vat Declarations"
					]
				}
			}
		},
		{
			"displayName": "Deductible VAT",
			"name": "DeductibleVAT",
			"type": "number",
			"default": 20.5,
			"routing": {
				"send": {
					"property": "DeductibleVAT",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Vat Declarations"
					]
				}
			}
		},
		{
			"displayName": "End",
			"name": "End",
			"type": "string",
			"default": "20160831",
			"routing": {
				"send": {
					"property": "End",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Vat Declarations"
					]
				}
			}
		},
		{
			"displayName": "Exempt Turnover",
			"name": "ExemptTurnover",
			"type": "number",
			"default": 132.63,
			"routing": {
				"send": {
					"property": "ExemptTurnover",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Vat Declarations"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "Number",
			"type": "string",
			"default": "153126",
			"routing": {
				"send": {
					"property": "Number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Vat Declarations"
					]
				}
			}
		},
		{
			"displayName": "Payable VAT",
			"name": "PayableVAT",
			"type": "number",
			"default": 2000.5,
			"routing": {
				"send": {
					"property": "PayableVAT",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Vat Declarations"
					]
				}
			}
		},
		{
			"displayName": "Taxable Turnover",
			"name": "TaxableTurnover",
			"type": "number",
			"default": 1352.63,
			"routing": {
				"send": {
					"property": "TaxableTurnover",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Vat Declarations"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{spaceId}/folders/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "T18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders"
					]
				}
			}
		},
		{
			"displayName": "About",
			"name": "About",
			"type": "string",
			"default": "<b> Mon premier dossier </b>",
			"routing": {
				"send": {
					"property": "About",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders"
					]
				}
			}
		},
		{
			"displayName": "Home",
			"name": "Home",
			"type": "boolean",
			"default": "yes",
			"routing": {
				"send": {
					"property": "Home",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders"
					]
				}
			}
		},
		{
			"displayName": "Keywords",
			"name": "Keywords",
			"type": "json",
			"default": "[\n  \"paris\",\n  \"comptabilité\"\n]",
			"routing": {
				"send": {
					"property": "Keywords",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders"
					]
				}
			}
		},
		{
			"displayName": "Level",
			"name": "Level",
			"type": "options",
			"default": "confidential",
			"options": [
				{
					"name": "Confidential",
					"value": "confidential"
				},
				{
					"name": "Regular",
					"value": "regular"
				},
				{
					"name": "Public",
					"value": "public"
				}
			],
			"routing": {
				"send": {
					"property": "Level",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders"
					]
				}
			}
		},
		{
			"displayName": "DELETE /spaces/{spaceId}/folders/{id}/accounting-year",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Accounting Year"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "T18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Accounting Year"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Accounting Year"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{spaceId}/folders/{id}/accounting-year",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Accounting Year"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "T18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Accounting Year"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Accounting Year"
					]
				}
			}
		},
		{
			"displayName": "About",
			"name": "About",
			"type": "string",
			"default": "<b> Mon premier dossier </b>",
			"routing": {
				"send": {
					"property": "About",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Accounting Year"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "ogm of the company",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Accounting Year"
					]
				}
			}
		},
		{
			"displayName": "End",
			"name": "End",
			"type": "string",
			"default": "20181231",
			"routing": {
				"send": {
					"property": "End",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Accounting Year"
					]
				}
			}
		},
		{
			"displayName": "Home",
			"name": "Home",
			"type": "boolean",
			"default": "yes",
			"routing": {
				"send": {
					"property": "Home",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Accounting Year"
					]
				}
			}
		},
		{
			"displayName": "Keywords",
			"name": "Keywords",
			"type": "json",
			"default": "[\n  \"paris\",\n  \"comptabilité\"\n]",
			"routing": {
				"send": {
					"property": "Keywords",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Accounting Year"
					]
				}
			}
		},
		{
			"displayName": "Level",
			"name": "Level",
			"type": "options",
			"default": "confidential",
			"options": [
				{
					"name": "Confidential",
					"value": "confidential"
				},
				{
					"name": "Regular",
					"value": "regular"
				},
				{
					"name": "Public",
					"value": "public"
				}
			],
			"routing": {
				"send": {
					"property": "Level",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Accounting Year"
					]
				}
			}
		},
		{
			"displayName": "Net Income",
			"name": "NetIncome",
			"type": "number",
			"default": 52634.36,
			"routing": {
				"send": {
					"property": "NetIncome",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Accounting Year"
					]
				}
			}
		},
		{
			"displayName": "Net Position",
			"name": "NetPosition",
			"type": "number",
			"default": 14580.36,
			"routing": {
				"send": {
					"property": "NetPosition",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Accounting Year"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "Start",
			"type": "string",
			"default": "20180101",
			"routing": {
				"send": {
					"property": "Start",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Accounting Year"
					]
				}
			}
		},
		{
			"displayName": "Tax",
			"name": "Tax",
			"type": "number",
			"default": 45698.36,
			"routing": {
				"send": {
					"property": "Tax",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Accounting Year"
					]
				}
			}
		},
		{
			"displayName": "Taxable Income",
			"name": "TaxableIncome",
			"type": "number",
			"default": 869523.36,
			"routing": {
				"send": {
					"property": "TaxableIncome",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Accounting Year"
					]
				}
			}
		},
		{
			"displayName": "Turnover",
			"name": "Turnover",
			"type": "number",
			"default": 1025.36,
			"routing": {
				"send": {
					"property": "Turnover",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Accounting Year"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/folders/{id}/accountings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Accountings"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "T15646IFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Accountings"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Accountings"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "Date",
			"description": "date range of the documents",
			"default": "20160321,null",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Accountings"
					]
				}
			}
		},
		{
			"displayName": "Folder Date",
			"name": "FolderDate",
			"description": "date range of attachment",
			"default": "20180306,null",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "FolderDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Accountings"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "Title",
			"description": "Title of the accounting document",
			"default": "Accounting",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Title",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Accountings"
					]
				}
			}
		},
		{
			"displayName": "Workbook",
			"name": "Workbook",
			"description": "workbook of the accounting",
			"default": "Accounting",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Workbook",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Accountings"
					]
				}
			}
		},
		{
			"displayName": "Class",
			"name": "Class",
			"description": "class of the accounting",
			"default": "Invoice",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Class",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Accountings"
					]
				}
			}
		},
		{
			"displayName": "Accounted On",
			"name": "AccountedOn",
			"description": "accountedon of the accounting (boolean available)",
			"default": "20180201,null",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "AccountedOn",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Accountings"
					]
				}
			}
		},
		{
			"displayName": "With Folders",
			"name": "WithFolders",
			"description": "if present, the folders containing the documents are returned",
			"default": "yes",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "WithFolders",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Accountings"
					]
				}
			}
		},
		{
			"displayName": "Range",
			"name": "Range",
			"description": "index range of the results",
			"default": "10-19",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Range",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Accountings"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/folders/{id}/accountings-journal",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Accountings Journal"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the customer folder",
			"default": "T15646IFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Accountings Journal"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Accountings Journal"
					]
				}
			}
		},
		{
			"displayName": "Delivery Date",
			"name": "DeliveryDate",
			"description": "delivery dates of the document",
			"default": "20191123082536,null",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "DeliveryDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Accountings Journal"
					]
				}
			}
		},
		{
			"displayName": "Accounting Date",
			"name": "AccountingDate",
			"description": "accounting dates of the document",
			"default": "20170215,null",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "AccountingDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Accountings Journal"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "Number",
			"description": "numbers of the document",
			"default": "12,17",
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "Number",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Accountings Journal"
					]
				}
			}
		},
		{
			"displayName": "Workbook",
			"name": "Workbook",
			"description": "workbook of the document",
			"default": "cashwoucher",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Workbook",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Accountings Journal"
					]
				}
			}
		},
		{
			"displayName": "Year Month",
			"name": "YearMonth",
			"description": "yearmonth of the document",
			"default": "201802",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "YearMonth",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Accountings Journal"
					]
				}
			}
		},
		{
			"displayName": "Class",
			"name": "Class",
			"description": "class of the document",
			"default": "invoice",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Class",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Accountings Journal"
					]
				}
			}
		},
		{
			"displayName": "Code",
			"name": "Code",
			"description": "code of the document",
			"default": "delivered",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Code",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Accountings Journal"
					]
				}
			}
		},
		{
			"displayName": "Target Folder Name",
			"name": "TargetFolderName",
			"description": "Name of the target folder of the document",
			"default": "Exercice*",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "TargetFolderName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Accountings Journal"
					]
				}
			}
		},
		{
			"displayName": "DELETE /spaces/{spaceId}/folders/{id}/bank",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Bank"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "T18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Bank"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Bank"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/folders/{id}/bank",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Bank"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "T15646476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Bank"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Bank"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{spaceId}/folders/{id}/bank",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Bank"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "T18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Bank"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Bank"
					]
				}
			}
		},
		{
			"displayName": "About",
			"name": "About",
			"type": "string",
			"default": "<b> Mon premier dossier </b>",
			"routing": {
				"send": {
					"property": "About",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Bank"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "pieces company",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Bank"
					]
				}
			}
		},
		{
			"displayName": "Contract Reference",
			"name": "ContractReference",
			"type": "string",
			"default": "13587449420F",
			"routing": {
				"send": {
					"property": "ContractReference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Bank"
					]
				}
			}
		},
		{
			"displayName": "Designation",
			"name": "Designation",
			"type": "string",
			"default": "client pièces détachées",
			"routing": {
				"send": {
					"property": "Designation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Bank"
					]
				}
			}
		},
		{
			"displayName": "End",
			"name": "End",
			"type": "string",
			"default": "20190101",
			"routing": {
				"send": {
					"property": "End",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Bank"
					]
				}
			}
		},
		{
			"displayName": "Home",
			"name": "Home",
			"type": "boolean",
			"default": "yes",
			"routing": {
				"send": {
					"property": "Home",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Bank"
					]
				}
			}
		},
		{
			"displayName": "Keywords",
			"name": "Keywords",
			"type": "json",
			"default": "[\n  \"paris\",\n  \"comptabilité\"\n]",
			"routing": {
				"send": {
					"property": "Keywords",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Bank"
					]
				}
			}
		},
		{
			"displayName": "Level",
			"name": "Level",
			"type": "options",
			"default": "confidential",
			"options": [
				{
					"name": "Confidential",
					"value": "confidential"
				},
				{
					"name": "Regular",
					"value": "regular"
				},
				{
					"name": "Public",
					"value": "public"
				}
			],
			"routing": {
				"send": {
					"property": "Level",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Bank"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "Start",
			"type": "string",
			"default": "20180630",
			"routing": {
				"send": {
					"property": "Start",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Bank"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/folders/{id}/bank-statements",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Bank Statements"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder bank",
			"default": "T15646IFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Bank Statements"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Bank Statements"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "Date",
			"description": "range date of the documents",
			"default": "20160321, null",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Bank Statements"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "Number",
			"description": "Number of the bank statement",
			"default": "201603",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Number",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Bank Statements"
					]
				}
			}
		},
		{
			"displayName": "Range",
			"name": "Range",
			"description": "index range of the results",
			"default": "10-19",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Range",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Bank Statements"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{spaceId}/folders/{id}/bank-statements",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Bank Statements"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder bank",
			"default": "P1987HGFKJFAA46",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Bank Statements"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Bank Statements"
					]
				}
			}
		},
		{
			"displayName": "Balance",
			"name": "Balance",
			"type": "number",
			"default": 1352.63,
			"routing": {
				"send": {
					"property": "Balance",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Bank Statements"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "DocumentId",
			"type": "string",
			"default": "PBUFBAUBF1531",
			"routing": {
				"send": {
					"property": "DocumentId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Bank Statements"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "Number",
			"type": "number",
			"default": "10015848",
			"routing": {
				"send": {
					"property": "Number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Bank Statements"
					]
				}
			}
		},
		{
			"displayName": "Statement Date",
			"name": "StatementDate",
			"type": "string",
			"default": "20160801",
			"routing": {
				"send": {
					"property": "StatementDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Bank Statements"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{spaceId}/folders/{id}/collective-decision",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Collective Decision"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "T18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Collective Decision"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Collective Decision"
					]
				}
			}
		},
		{
			"displayName": "About",
			"name": "About",
			"type": "string",
			"default": "<b> Mon premier dossier </b>",
			"routing": {
				"send": {
					"property": "About",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Collective Decision"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "ogm of the company",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Collective Decision"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "Date",
			"type": "string",
			"default": "20180202",
			"routing": {
				"send": {
					"property": "Date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Collective Decision"
					]
				}
			}
		},
		{
			"displayName": "Dividend Distributions",
			"name": "DividendDistributions",
			"type": "number",
			"default": 1025.36,
			"routing": {
				"send": {
					"property": "DividendDistributions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Collective Decision"
					]
				}
			}
		},
		{
			"displayName": "Dividend Distributions Date",
			"name": "DividendDistributionsDate",
			"type": "string",
			"default": "20180203",
			"routing": {
				"send": {
					"property": "DividendDistributionsDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Collective Decision"
					]
				}
			}
		},
		{
			"displayName": "Event",
			"name": "Event",
			"type": "options",
			"default": "EGM",
			"description": "for space type 'company' enums allowed are  'EGM','CGM','OGM','ConstituentAssembly','SolePartner','OtherEvent','Office','ExecutiveCommittee','Consulting','Board','PartnersMeeting' and for space type 'association' enums allowed are 'EGM','CGM','OGM','Other','Office','ExecutiveCommittee'",
			"options": [
				{
					"name": "EGM",
					"value": "EGM"
				},
				{
					"name": "CGM",
					"value": "CGM"
				},
				{
					"name": "OGM",
					"value": "OGM"
				},
				{
					"name": "Constituent Assembly",
					"value": "ConstituentAssembly"
				},
				{
					"name": "Sole Partner",
					"value": "SolePartner"
				},
				{
					"name": "Other Event",
					"value": "OtherEvent"
				},
				{
					"name": "Other",
					"value": "Other"
				},
				{
					"name": "Office",
					"value": "Office"
				},
				{
					"name": "Executive Committee",
					"value": "ExecutiveCommittee"
				},
				{
					"name": "Consulting",
					"value": "Consulting"
				},
				{
					"name": "Board",
					"value": "Board"
				},
				{
					"name": "Partners Meeting",
					"value": "PartnersMeeting"
				}
			],
			"routing": {
				"send": {
					"property": "Event",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Collective Decision"
					]
				}
			}
		},
		{
			"displayName": "Home",
			"name": "Home",
			"type": "boolean",
			"default": "yes",
			"routing": {
				"send": {
					"property": "Home",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Collective Decision"
					]
				}
			}
		},
		{
			"displayName": "Keywords",
			"name": "Keywords",
			"type": "json",
			"default": "[\n  \"paris\",\n  \"comptabilité\"\n]",
			"routing": {
				"send": {
					"property": "Keywords",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Collective Decision"
					]
				}
			}
		},
		{
			"displayName": "Level",
			"name": "Level",
			"type": "options",
			"default": "confidential",
			"options": [
				{
					"name": "Confidential",
					"value": "confidential"
				},
				{
					"name": "Regular",
					"value": "regular"
				},
				{
					"name": "Public",
					"value": "public"
				}
			],
			"routing": {
				"send": {
					"property": "Level",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Collective Decision"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/folders/{id}/common-folders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Common Folders"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "P15646IFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Common Folders"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Common Folders"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"description": "Name of the folder",
			"default": "Folder one",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Common Folders"
					]
				}
			}
		},
		{
			"displayName": "Keywords",
			"name": "Keywords",
			"description": "keywords attached to the folder",
			"default": "juridique",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Keywords",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Common Folders"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{spaceId}/folders/{id}/common-folders",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Common Folders"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "P1987HGFKJFAA46",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Common Folders"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Common Folders"
					]
				}
			}
		},
		{
			"displayName": "About",
			"name": "About",
			"type": "string",
			"default": "<b> Mon premier dossier </b>",
			"routing": {
				"send": {
					"property": "About",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Common Folders"
					]
				}
			}
		},
		{
			"displayName": "Archival Date",
			"name": "ArchivalDate",
			"type": "string",
			"default": "20160203",
			"routing": {
				"send": {
					"property": "ArchivalDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Common Folders"
					]
				}
			}
		},
		{
			"displayName": "Home",
			"name": "Home",
			"type": "boolean",
			"default": "yes",
			"routing": {
				"send": {
					"property": "Home",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Common Folders"
					]
				}
			}
		},
		{
			"displayName": "Keywords",
			"name": "Keywords",
			"type": "json",
			"default": "[\n  \"paris\",\n  \"comptabilité\"\n]",
			"routing": {
				"send": {
					"property": "Keywords",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Common Folders"
					]
				}
			}
		},
		{
			"displayName": "Level",
			"name": "Level",
			"type": "options",
			"default": "confidential",
			"options": [
				{
					"name": "Confidential",
					"value": "confidential"
				},
				{
					"name": "Regular",
					"value": "regular"
				},
				{
					"name": "Public",
					"value": "public"
				}
			],
			"routing": {
				"send": {
					"property": "Level",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Common Folders"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"type": "string",
			"default": "Dupond",
			"routing": {
				"send": {
					"property": "Name",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Common Folders"
					]
				}
			}
		},
		{
			"displayName": "Rights",
			"name": "Rights",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "Rights",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Common Folders"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/folders/{id}/common-folders/all",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Common Folders All"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "P15646IFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Common Folders All"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Common Folders All"
					]
				}
			}
		},
		{
			"displayName": "Name",
			"name": "Name",
			"description": "Name of the folder",
			"default": "Folder one",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Name",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Common Folders All"
					]
				}
			}
		},
		{
			"displayName": "Keywords",
			"name": "Keywords",
			"description": "keywords attached to the folder",
			"default": "juridique",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Keywords",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Common Folders All"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/folders/{id}/contracting-partner",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Contracting Partner"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder (contract)",
			"default": "T15646IFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Contracting Partner"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Contracting Partner"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/folders/{id}/contracting-partner/space",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Contracting Partner Space"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder (contract)",
			"default": "T15646IFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Contracting Partner Space"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Contracting Partner Space"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/folders/{id}/contractual-documents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Contractual Documents"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "T15646IFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Contractual Documents"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Contractual Documents"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "Date",
			"description": "date range of the documents",
			"default": "20160321,null",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Contractual Documents"
					]
				}
			}
		},
		{
			"displayName": "Folder Date",
			"name": "FolderDate",
			"description": "date range of attachment",
			"default": "20180306,null",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "FolderDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Contractual Documents"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "Type",
			"description": "Type of the document",
			"default": "amendment",
			"type": "options",
			"options": [
				{
					"name": "Contract",
					"value": "contract"
				},
				{
					"name": "Engagement Letter",
					"value": "engagement-letter"
				},
				{
					"name": "Amendment",
					"value": "amendment"
				},
				{
					"name": "Purchase Order",
					"value": "purchase-order"
				},
				{
					"name": "Delivery Order",
					"value": "delivery-order"
				},
				{
					"name": "Quotation",
					"value": "quotation"
				},
				{
					"name": "Other",
					"value": "other"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Type",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Contractual Documents"
					]
				}
			}
		},
		{
			"displayName": "Range",
			"name": "Range",
			"description": "index range of the results",
			"default": "10-19",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Range",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Contractual Documents"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{spaceId}/folders/{id}/contractual-documents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Contractual Documents"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "P1987HGFKJFAA46",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Contractual Documents"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Contractual Documents"
					]
				}
			}
		},
		{
			"displayName": "Amount",
			"name": "Amount",
			"type": "string",
			"default": "1001.36",
			"routing": {
				"send": {
					"property": "Amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Contractual Documents"
					]
				}
			}
		},
		{
			"displayName": "Designation",
			"name": "Designation",
			"type": "string",
			"default": "contrat client",
			"routing": {
				"send": {
					"property": "Designation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Contractual Documents"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "DocumentId",
			"type": "string",
			"default": "PBUFBAUBF1531",
			"routing": {
				"send": {
					"property": "DocumentId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Contractual Documents"
					]
				}
			}
		},
		{
			"displayName": "Reference",
			"name": "Reference",
			"type": "string",
			"default": "151465AFHIA",
			"routing": {
				"send": {
					"property": "Reference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Contractual Documents"
					]
				}
			}
		},
		{
			"displayName": "Start Date",
			"name": "StartDate",
			"type": "string",
			"default": "20181128",
			"routing": {
				"send": {
					"property": "StartDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Contractual Documents"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "Type",
			"type": "options",
			"default": "quotation",
			"options": [
				{
					"name": "Contract",
					"value": "contract"
				},
				{
					"name": "Engagement Letter",
					"value": "engagement-letter"
				},
				{
					"name": "Amendment",
					"value": "amendment"
				},
				{
					"name": "Purchase Order",
					"value": "purchase-order"
				},
				{
					"name": "Delivery Order",
					"value": "delivery-order"
				},
				{
					"name": "Quotation",
					"value": "quotation"
				},
				{
					"name": "Other",
					"value": "other"
				}
			],
			"routing": {
				"send": {
					"property": "Type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Contractual Documents"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/folders/{id}/contractual-relationship",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Contractual Relationship"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "T15646476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Contractual Relationship"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Contractual Relationship"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/folders/{id}/coporate-tax-declarations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Coporate Tax Declarations"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder result and taxation",
			"default": "T15646IFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Coporate Tax Declarations"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Coporate Tax Declarations"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "Date",
			"description": "range date of the documents",
			"default": "20160321, null",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Coporate Tax Declarations"
					]
				}
			}
		},
		{
			"displayName": "Range",
			"name": "Range",
			"description": "index range of the results",
			"default": "10-19",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Range",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Coporate Tax Declarations"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{spaceId}/folders/{id}/coporate-tax-declarations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Coporate Tax Declarations"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder result and taxation",
			"default": "P1987HGFKJFAA46",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Coporate Tax Declarations"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Coporate Tax Declarations"
					]
				}
			}
		},
		{
			"displayName": "Amount",
			"name": "Amount",
			"type": "number",
			"default": 132.63,
			"routing": {
				"send": {
					"property": "Amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Coporate Tax Declarations"
					]
				}
			}
		},
		{
			"displayName": "Declaration Date",
			"name": "DeclarationDate",
			"type": "string",
			"default": "20160801",
			"routing": {
				"send": {
					"property": "DeclarationDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Coporate Tax Declarations"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "DocumentId",
			"type": "string",
			"default": "PBUFBAUBF1531",
			"routing": {
				"send": {
					"property": "DocumentId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Coporate Tax Declarations"
					]
				}
			}
		},
		{
			"displayName": "Order",
			"name": "Order",
			"type": "options",
			"default": "1st advance",
			"options": [
				{
					"name": "1st Advance",
					"value": "1st advance"
				},
				{
					"name": "2nd Advance",
					"value": "2nd advance"
				},
				{
					"name": "3rd Advance",
					"value": "3rd advance"
				},
				{
					"name": "4th Advance",
					"value": "4th advance"
				},
				{
					"name": "Regularization",
					"value": "regularization"
				}
			],
			"routing": {
				"send": {
					"property": "Order",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Coporate Tax Declarations"
					]
				}
			}
		},
		{
			"displayName": "Rate",
			"name": "Rate",
			"type": "number",
			"default": 10.63,
			"routing": {
				"send": {
					"property": "Rate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Coporate Tax Declarations"
					]
				}
			}
		},
		{
			"displayName": "Tax Base",
			"name": "TaxBase",
			"type": "number",
			"default": 123.36,
			"routing": {
				"send": {
					"property": "TaxBase",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Coporate Tax Declarations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /spaces/{spaceId}/folders/{id}/customer",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Customer"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "T18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Customer"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Customer"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/folders/{id}/customer",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Customer"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "T15646476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Customer"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Customer"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{spaceId}/folders/{id}/customer",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Customer"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "T18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Customer"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Customer"
					]
				}
			}
		},
		{
			"displayName": "About",
			"name": "About",
			"type": "string",
			"default": "<b> Mon premier dossier </b>",
			"routing": {
				"send": {
					"property": "About",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Customer"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "pieces company",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Customer"
					]
				}
			}
		},
		{
			"displayName": "Customer Number",
			"name": "CustomerNumber",
			"type": "string",
			"default": "13587449420F",
			"routing": {
				"send": {
					"property": "CustomerNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Customer"
					]
				}
			}
		},
		{
			"displayName": "Designation",
			"name": "Designation",
			"type": "string",
			"default": "client pièces détachées",
			"routing": {
				"send": {
					"property": "Designation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Customer"
					]
				}
			}
		},
		{
			"displayName": "End",
			"name": "End",
			"type": "string",
			"default": "20190101",
			"routing": {
				"send": {
					"property": "End",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Customer"
					]
				}
			}
		},
		{
			"displayName": "Home",
			"name": "Home",
			"type": "boolean",
			"default": "yes",
			"routing": {
				"send": {
					"property": "Home",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Customer"
					]
				}
			}
		},
		{
			"displayName": "Keep Old",
			"name": "KeepOld",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "KeepOld",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Customer"
					]
				}
			}
		},
		{
			"displayName": "Keywords",
			"name": "Keywords",
			"type": "json",
			"default": "[\n  \"paris\",\n  \"comptabilité\"\n]",
			"routing": {
				"send": {
					"property": "Keywords",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Customer"
					]
				}
			}
		},
		{
			"displayName": "Level",
			"name": "Level",
			"type": "options",
			"default": "confidential",
			"options": [
				{
					"name": "Confidential",
					"value": "confidential"
				},
				{
					"name": "Regular",
					"value": "regular"
				},
				{
					"name": "Public",
					"value": "public"
				}
			],
			"routing": {
				"send": {
					"property": "Level",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Customer"
					]
				}
			}
		},
		{
			"displayName": "Portfolio ID",
			"name": "PortfolioId",
			"type": "string",
			"default": "T1OJFOAZ7449420F",
			"routing": {
				"send": {
					"property": "PortfolioId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Customer"
					]
				}
			}
		},
		{
			"displayName": "Secondary Portfolio ID",
			"name": "SecondaryPortfolioId",
			"type": "string",
			"default": "T1OJFOAZ7449420F",
			"routing": {
				"send": {
					"property": "SecondaryPortfolioId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Customer"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "Start",
			"type": "string",
			"default": "20180630",
			"routing": {
				"send": {
					"property": "Start",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Customer"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/folders/{id}/deliveries-journal",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Deliveries Journal"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the customer folder",
			"default": "T15646IFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Deliveries Journal"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Deliveries Journal"
					]
				}
			}
		},
		{
			"displayName": "Delivery Date",
			"name": "DeliveryDate",
			"description": "delivery dates of the document",
			"default": "20191123082536,null",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "DeliveryDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Deliveries Journal"
					]
				}
			}
		},
		{
			"displayName": "Accounting Date",
			"name": "AccountingDate",
			"description": "accounting dates of the document",
			"default": "20170215,null",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "AccountingDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Deliveries Journal"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "Number",
			"description": "numbers of the document",
			"default": "12,17",
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "Number",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Deliveries Journal"
					]
				}
			}
		},
		{
			"displayName": "Class",
			"name": "Class",
			"description": "class of the document",
			"default": "invoice",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Class",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Deliveries Journal"
					]
				}
			}
		},
		{
			"displayName": "Target Folder Name",
			"name": "TargetFolderName",
			"description": "Name of the target folder of the document",
			"default": "Exercice*",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "TargetFolderName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Deliveries Journal"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/folders/{id}/documents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Documents"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "T15646IFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Documents"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Documents"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "Date",
			"description": "date range of the documents",
			"default": "20160321,null",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Documents"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "Title",
			"description": "Title of the document",
			"default": "Facture EDF",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Title",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Documents"
					]
				}
			}
		},
		{
			"displayName": "Folder Date",
			"name": "FolderDate",
			"description": "date range of attachment",
			"default": "20180306,null",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "FolderDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Documents"
					]
				}
			}
		},
		{
			"displayName": "Class",
			"name": "Class",
			"description": "Class of document",
			"default": "Contract",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Class",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Documents"
					]
				}
			}
		},
		{
			"displayName": "Range",
			"name": "Range",
			"description": "index range of the results",
			"default": "10-19",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Range",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Documents"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{spaceId}/folders/{id}/documents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Documents"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "P1987HGFKJFAA46",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Documents"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Documents"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "DocumentId",
			"type": "string",
			"default": "PBUFBAUBF1531",
			"routing": {
				"send": {
					"property": "DocumentId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Documents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{spaceId}/folders/{id}/documents/{documentId}/detach",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Documents Detach"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Documents Detach"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Documents Detach"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Id of the document",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Documents Detach"
					]
				}
			}
		},
		{
			"displayName": "DELETE /spaces/{spaceId}/folders/{id}/employee",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Employee"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "T18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Employee"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Employee"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/folders/{id}/employee",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Employee"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "T15646476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Employee"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Employee"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{spaceId}/folders/{id}/employee",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Employee"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "T18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Employee"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Employee"
					]
				}
			}
		},
		{
			"displayName": "About",
			"name": "About",
			"type": "string",
			"default": "<b> Mon premier dossier </b>",
			"routing": {
				"send": {
					"property": "About",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Employee"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "pieces company",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Employee"
					]
				}
			}
		},
		{
			"displayName": "Contract Type",
			"name": "ContractType",
			"type": "string",
			"default": "01",
			"routing": {
				"send": {
					"property": "ContractType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Employee"
					]
				}
			}
		},
		{
			"displayName": "Employee Number",
			"name": "EmployeeNumber",
			"type": "string",
			"default": "13587FAZCD420F",
			"routing": {
				"send": {
					"property": "EmployeeNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Employee"
					]
				}
			}
		},
		{
			"displayName": "End",
			"name": "End",
			"type": "string",
			"default": "20190101",
			"routing": {
				"send": {
					"property": "End",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Employee"
					]
				}
			}
		},
		{
			"displayName": "Function",
			"name": "Function",
			"type": "string",
			"default": "commercial",
			"routing": {
				"send": {
					"property": "Function",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Employee"
					]
				}
			}
		},
		{
			"displayName": "Home",
			"name": "Home",
			"type": "boolean",
			"default": "yes",
			"routing": {
				"send": {
					"property": "Home",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Employee"
					]
				}
			}
		},
		{
			"displayName": "Keywords",
			"name": "Keywords",
			"type": "json",
			"default": "[\n  \"paris\",\n  \"comptabilité\"\n]",
			"routing": {
				"send": {
					"property": "Keywords",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Employee"
					]
				}
			}
		},
		{
			"displayName": "Level",
			"name": "Level",
			"type": "options",
			"default": "confidential",
			"options": [
				{
					"name": "Confidential",
					"value": "confidential"
				},
				{
					"name": "Regular",
					"value": "regular"
				},
				{
					"name": "Public",
					"value": "public"
				}
			],
			"routing": {
				"send": {
					"property": "Level",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Employee"
					]
				}
			}
		},
		{
			"displayName": "Postal Mail",
			"name": "PostalMail",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "PostalMail",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Employee"
					]
				}
			}
		},
		{
			"displayName": "SS Number",
			"name": "SSNumber",
			"type": "string",
			"default": "1542012365985215",
			"routing": {
				"send": {
					"property": "SSNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Employee"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "Start",
			"type": "string",
			"default": "20180630",
			"routing": {
				"send": {
					"property": "Start",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Employee"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/folders/{id}/expense-proofs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "T15646IFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "Date",
			"description": "date range of the documents",
			"default": "20160321,null",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "Folder Date",
			"name": "FolderDate",
			"description": "date range of attachment",
			"default": "20180306,null",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "FolderDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "Status",
			"description": "Status of the expense proof",
			"default": "R",
			"type": "options",
			"options": [
				{
					"name": "R",
					"value": "R"
				},
				{
					"name": "W",
					"value": "W"
				},
				{
					"name": "V",
					"value": "V"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Status",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "No Expense Report",
			"name": "NoExpenseReport",
			"description": "To return expense proofs not attached to an expense report",
			"default": "1",
			"type": "boolean",
			"routing": {
				"send": {
					"type": "query",
					"property": "NoExpenseReport",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "Range",
			"name": "Range",
			"description": "index range of the results",
			"default": "10-19",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Range",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{spaceId}/folders/{id}/expense-proofs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "P1987HGFKJFAA46",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "Account",
			"name": "Account",
			"type": "options",
			"default": "CAB",
			"options": [
				{
					"name": "CAB",
					"value": "CAB"
				},
				{
					"name": "IKM",
					"value": "IKM"
				},
				{
					"name": "PRK",
					"value": "PRK"
				},
				{
					"name": "TXI",
					"value": "TXI"
				},
				{
					"name": "VOY",
					"value": "VOY"
				},
				{
					"name": "PTT",
					"value": "PTT"
				},
				{
					"name": "FHR",
					"value": "FHR"
				},
				{
					"name": "DIV",
					"value": "DIV"
				},
				{
					"name": "RES",
					"value": "RES"
				}
			],
			"routing": {
				"send": {
					"property": "Account",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "Archival Date",
			"name": "ArchivalDate",
			"type": "string",
			"default": 20211231,
			"routing": {
				"send": {
					"property": "ArchivalDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "Before VAT",
			"name": "BeforeVAT",
			"type": "number",
			"default": 1000,
			"routing": {
				"send": {
					"property": "BeforeVAT",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "DocumentId",
			"type": "string",
			"default": "PBUFBAUBF1531",
			"routing": {
				"send": {
					"property": "DocumentId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "Expense Date",
			"name": "ExpenseDate",
			"type": "string",
			"default": "20200202",
			"routing": {
				"send": {
					"property": "ExpenseDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "Expense Report ID",
			"name": "ExpenseReportId",
			"type": "string",
			"default": "PFOIAHF874984",
			"routing": {
				"send": {
					"property": "ExpenseReportId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "Provider",
			"name": "Provider",
			"type": "string",
			"default": "G7",
			"routing": {
				"send": {
					"property": "Provider",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "Reason",
			"name": "Reason",
			"type": "string",
			"default": "taxi",
			"routing": {
				"send": {
					"property": "Reason",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "Status",
			"type": "options",
			"default": "R",
			"options": [
				{
					"name": "R",
					"value": "R"
				},
				{
					"name": "V",
					"value": "V"
				},
				{
					"name": "W",
					"value": "W"
				}
			],
			"routing": {
				"send": {
					"property": "Status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "VAT",
			"name": "VAT",
			"type": "number",
			"default": 19.5,
			"routing": {
				"send": {
					"property": "VAT",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/folders/{id}/expense-reports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Expense Reports"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "T15646IFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Expense Reports"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Expense Reports"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "Date",
			"description": "date range of the documents",
			"default": "20160321,null",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Expense Reports"
					]
				}
			}
		},
		{
			"displayName": "Folder Date",
			"name": "FolderDate",
			"description": "date range of attachment",
			"default": "20180306,null",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "FolderDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Expense Reports"
					]
				}
			}
		},
		{
			"displayName": "With Extend",
			"name": "WithExtend",
			"description": "If present returns also the data extend",
			"default": "true",
			"type": "options",
			"options": [
				{
					"name": "True",
					"value": "true"
				},
				{
					"name": "False",
					"value": "false"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "WithExtend",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Expense Reports"
					]
				}
			}
		},
		{
			"displayName": "Range",
			"name": "Range",
			"description": "index range of the results",
			"default": "10-19",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Range",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Expense Reports"
					]
				}
			}
		},
		{
			"displayName": "Processing Date",
			"name": "ProcessingDate",
			"description": "range of processing date (boolean available)",
			"default": "20180526,null",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ProcessingDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Expense Reports"
					]
				}
			}
		},
		{
			"displayName": "Expense Date",
			"name": "ExpenseDate",
			"description": "range of ExpenseDate (valid available)",
			"default": "20180526,null",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "ExpenseDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Expense Reports"
					]
				}
			}
		},
		{
			"displayName": "Sort Order",
			"name": "SortOrder",
			"description": "order of sort (if absent default is asc)",
			"default": "asc",
			"type": "options",
			"options": [
				{
					"name": "Asc",
					"value": "asc"
				},
				{
					"name": "Desc",
					"value": "desc"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "SortOrder",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Expense Reports"
					]
				}
			}
		},
		{
			"displayName": "Sort Name",
			"name": "SortName",
			"description": "name of value for sort",
			"default": "ExpenseDate",
			"type": "options",
			"options": [
				{
					"name": "Expense Date",
					"value": "ExpenseDate"
				},
				{
					"name": "Incl VAT",
					"value": "InclVAT"
				},
				{
					"name": "Title",
					"value": "Title"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "SortName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Expense Reports"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{spaceId}/folders/{id}/expense-reports",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Expense Reports"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "P1987HGFKJFAA46",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Expense Reports"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Expense Reports"
					]
				}
			}
		},
		{
			"displayName": "Before VAT",
			"name": "BeforeVAT",
			"type": "number",
			"default": 1000,
			"routing": {
				"send": {
					"property": "BeforeVAT",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Expense Reports"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "Date",
			"type": "string",
			"default": "20161203",
			"routing": {
				"send": {
					"property": "Date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Expense Reports"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "DocumentId",
			"type": "string",
			"default": "PBUFBAUBF1531",
			"routing": {
				"send": {
					"property": "DocumentId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Expense Reports"
					]
				}
			}
		},
		{
			"displayName": "Expense Date",
			"name": "ExpenseDate",
			"type": "string",
			"default": "20200202",
			"routing": {
				"send": {
					"property": "ExpenseDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Expense Reports"
					]
				}
			}
		},
		{
			"displayName": "Incl VAT",
			"name": "InclVAT",
			"type": "number",
			"default": 1200,
			"routing": {
				"send": {
					"property": "InclVAT",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Expense Reports"
					]
				}
			}
		},
		{
			"displayName": "Processing Date",
			"name": "ProcessingDate",
			"type": "string",
			"default": "20200203",
			"routing": {
				"send": {
					"property": "ProcessingDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Expense Reports"
					]
				}
			}
		},
		{
			"displayName": "VAT",
			"name": "VAT",
			"type": "number",
			"default": 19.5,
			"routing": {
				"send": {
					"property": "VAT",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Expense Reports"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/folders/{id}/expense-reports/{expenseReportId}/expense-proofs",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Expense Reports Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "T15646IFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Expense Reports Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Expense Reports Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "Expense Report ID",
			"name": "expenseReportId",
			"required": true,
			"description": "Id of the expense report",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Expense Reports Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "Date",
			"description": "Date of the documents (YYYY or YYYYMM or YYYYMMDD)",
			"default": "20160321",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Expense Reports Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "Status",
			"description": "Status of the expense proof",
			"default": "R",
			"type": "options",
			"options": [
				{
					"name": "R",
					"value": "R"
				},
				{
					"name": "W",
					"value": "W"
				},
				{
					"name": "V",
					"value": "V"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "Status",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Expense Reports Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "Folder Date",
			"name": "FolderDate",
			"description": "Date of upload of the document (YYYY or YYYYMM or YYYYMMDD)",
			"default": 20180202000000,
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "FolderDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Expense Reports Expense Proofs"
					]
				}
			}
		},
		{
			"displayName": "DELETE /spaces/{spaceId}/folders/{id}/insurance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Insurance"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "T18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Insurance"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Insurance"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/folders/{id}/insurance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Insurance"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "T15646476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Insurance"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Insurance"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{spaceId}/folders/{id}/insurance",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Insurance"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "T18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Insurance"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Insurance"
					]
				}
			}
		},
		{
			"displayName": "About",
			"name": "About",
			"type": "string",
			"default": "<b> Mon premier dossier </b>",
			"routing": {
				"send": {
					"property": "About",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Insurance"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "pieces company",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Insurance"
					]
				}
			}
		},
		{
			"displayName": "Customer Number",
			"name": "CustomerNumber",
			"type": "string",
			"default": "13587449420F",
			"routing": {
				"send": {
					"property": "CustomerNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Insurance"
					]
				}
			}
		},
		{
			"displayName": "Designation",
			"name": "Designation",
			"type": "string",
			"default": "client pièces détachées",
			"routing": {
				"send": {
					"property": "Designation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Insurance"
					]
				}
			}
		},
		{
			"displayName": "End",
			"name": "End",
			"type": "string",
			"default": "20190101",
			"routing": {
				"send": {
					"property": "End",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Insurance"
					]
				}
			}
		},
		{
			"displayName": "Home",
			"name": "Home",
			"type": "boolean",
			"default": "yes",
			"routing": {
				"send": {
					"property": "Home",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Insurance"
					]
				}
			}
		},
		{
			"displayName": "Keywords",
			"name": "Keywords",
			"type": "json",
			"default": "[\n  \"paris\",\n  \"comptabilité\"\n]",
			"routing": {
				"send": {
					"property": "Keywords",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Insurance"
					]
				}
			}
		},
		{
			"displayName": "Level",
			"name": "Level",
			"type": "options",
			"default": "confidential",
			"options": [
				{
					"name": "Confidential",
					"value": "confidential"
				},
				{
					"name": "Regular",
					"value": "regular"
				},
				{
					"name": "Public",
					"value": "public"
				}
			],
			"routing": {
				"send": {
					"property": "Level",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Insurance"
					]
				}
			}
		},
		{
			"displayName": "Policy Number",
			"name": "PolicyNumber",
			"type": "string",
			"default": "1358",
			"routing": {
				"send": {
					"property": "PolicyNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Insurance"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "Start",
			"type": "string",
			"default": "20180630",
			"routing": {
				"send": {
					"property": "Start",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Insurance"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/folders/{id}/invoices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "T15646IFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "Title",
			"name": "Title",
			"description": "Title of the documents",
			"default": "factrure",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Title",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "Date",
			"description": "date range of the documents",
			"default": "20160321,null",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "Number",
			"description": "Number of the invoice",
			"default": 23585,
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Number",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "Incl VAT",
			"name": "InclVAT",
			"description": "amount incl. VAT",
			"default": "100.50,123.69",
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "InclVAT",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "Before VAT",
			"name": "BeforeVAT",
			"description": "amount before VAT",
			"default": "102.50,123.69",
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "BeforeVAT",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "Due Date",
			"name": "DueDate",
			"description": "date due payment",
			"default": "20201231,20211231",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "DueDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "Payment Date",
			"name": "PaymentDate",
			"description": "date of payment (boolean and valid available)",
			"default": "20201201,20211201",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "PaymentDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "Invoice Date",
			"name": "InvoiceDate",
			"description": "range date of invoice",
			"default": "20201201",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "InvoiceDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "Folder Date",
			"name": "FolderDate",
			"description": "date range of attachment",
			"default": "20180306,null",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "FolderDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "Accounted On",
			"name": "AccountedOn",
			"description": "value of AccountedOn (boolean available but not range)",
			"default": "20220101",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "AccountedOn",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "With Extend",
			"name": "WithExtend",
			"description": "If present returns also the data extend",
			"default": "202102,null",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "WithExtend",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "Extend",
			"name": "Extend",
			"description": "json object to filter extend data",
			"default": "[{\"Name\":\"field1\",\"Equals\":\"test\"},{\"Name\":\"field2\",\"Start\":\"20180101\"},{\"Name\":\"field3\",\"End\":\"20190101\"}]",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Extend",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "Range",
			"name": "Range",
			"description": "index range of the results",
			"default": "10-19",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Range",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "Sort Order",
			"name": "SortOrder",
			"description": "order of sort (if absent default is asc)",
			"default": "asc",
			"type": "options",
			"options": [
				{
					"name": "Asc",
					"value": "asc"
				},
				{
					"name": "Desc",
					"value": "desc"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "SortOrder",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "Sort Name",
			"name": "SortName",
			"description": "name of value for sort",
			"default": "PaymentDate",
			"type": "options",
			"options": [
				{
					"name": "Due Date",
					"value": "DueDate"
				},
				{
					"name": "Payment Date",
					"value": "PaymentDate"
				},
				{
					"name": "Invoice Date",
					"value": "InvoiceDate"
				},
				{
					"name": "Incl VAT",
					"value": "InclVAT"
				},
				{
					"name": "Contracting",
					"value": "Contracting"
				},
				{
					"name": "Title",
					"value": "Title"
				}
			],
			"routing": {
				"send": {
					"type": "query",
					"property": "SortName",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{spaceId}/folders/{id}/invoices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "P1987HGFKJFAA46",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "Before VAT",
			"name": "BeforeVAT",
			"type": "number",
			"default": 1000,
			"routing": {
				"send": {
					"property": "BeforeVAT",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "Date",
			"type": "string",
			"default": "20161203",
			"routing": {
				"send": {
					"property": "Date",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "DocumentId",
			"type": "string",
			"default": "PBUFBAUBF1531",
			"routing": {
				"send": {
					"property": "DocumentId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "Due Date",
			"name": "DueDate",
			"type": "string",
			"default": 20190130,
			"routing": {
				"send": {
					"property": "DueDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "Incl VAT",
			"name": "InclVAT",
			"type": "number",
			"default": 1200,
			"routing": {
				"send": {
					"property": "InclVAT",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "Invoice Date",
			"name": "InvoiceDate",
			"type": "string",
			"default": "20200202",
			"routing": {
				"send": {
					"property": "InvoiceDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "Number",
			"type": "string",
			"default": "036459879874",
			"routing": {
				"send": {
					"property": "Number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "Payment Date",
			"name": "PaymentDate",
			"type": "string",
			"default": 20190131,
			"routing": {
				"send": {
					"property": "PaymentDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "Type",
			"type": "options",
			"default": "commercial-invoice",
			"options": [
				{
					"name": "Commercial Invoice",
					"value": "commercial-invoice"
				},
				{
					"name": "Credit Note",
					"value": "credit-note"
				},
				{
					"name": "Amending Invoice",
					"value": "amending-invoice"
				},
				{
					"name": "Self Billing",
					"value": "self-billing"
				},
				{
					"name": "Credit Self Billing",
					"value": "credit-self-billing"
				},
				{
					"name": "Down Payment Invoice",
					"value": "down-payment-invoice"
				},
				{
					"name": "Informations Invoice",
					"value": "informations-invoice"
				}
			],
			"routing": {
				"send": {
					"property": "Type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "VAT",
			"name": "VAT",
			"type": "number",
			"default": 19.5,
			"routing": {
				"send": {
					"property": "VAT",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Invoices"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/folders/{id}/legal-entity",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Legal Entity"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder (followup)",
			"default": "T15646IFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Legal Entity"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Legal Entity"
					]
				}
			}
		},
		{
			"displayName": "DELETE /spaces/{spaceId}/folders/{id}/loan",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Loan"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "T18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Loan"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Loan"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/folders/{id}/loan",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Loan"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "T15646476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Loan"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Loan"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{spaceId}/folders/{id}/loan",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Loan"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "T18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Loan"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Loan"
					]
				}
			}
		},
		{
			"displayName": "About",
			"name": "About",
			"type": "string",
			"default": "<b> Mon premier dossier </b>",
			"routing": {
				"send": {
					"property": "About",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Loan"
					]
				}
			}
		},
		{
			"displayName": "Amount",
			"name": "Amount",
			"type": "number",
			"default": 1000,
			"routing": {
				"send": {
					"property": "Amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Loan"
					]
				}
			}
		},
		{
			"displayName": "Category",
			"name": "Category",
			"type": "options",
			"default": "debt spreading",
			"options": [
				{
					"name": "Debt Spreading",
					"value": "debt spreading"
				},
				{
					"name": "Bank Loan",
					"value": "bank loan"
				},
				{
					"name": "Current Account",
					"value": "current account"
				},
				{
					"name": "Overdraft Agreement",
					"value": "overdraft agreement"
				},
				{
					"name": "Leasing",
					"value": "leasing"
				},
				{
					"name": "Obligation",
					"value": "obligation"
				}
			],
			"routing": {
				"send": {
					"property": "Category",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Loan"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "pieces company",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Loan"
					]
				}
			}
		},
		{
			"displayName": "Designation",
			"name": "Designation",
			"type": "string",
			"default": "emprunt entreprise",
			"routing": {
				"send": {
					"property": "Designation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Loan"
					]
				}
			}
		},
		{
			"displayName": "Due Amount",
			"name": "DueAmount",
			"type": "number",
			"default": 1000.6,
			"routing": {
				"send": {
					"property": "DueAmount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Loan"
					]
				}
			}
		},
		{
			"displayName": "End",
			"name": "End",
			"type": "string",
			"default": "20190101",
			"routing": {
				"send": {
					"property": "End",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Loan"
					]
				}
			}
		},
		{
			"displayName": "Home",
			"name": "Home",
			"type": "boolean",
			"default": "yes",
			"routing": {
				"send": {
					"property": "Home",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Loan"
					]
				}
			}
		},
		{
			"displayName": "Keywords",
			"name": "Keywords",
			"type": "json",
			"default": "[\n  \"paris\",\n  \"comptabilité\"\n]",
			"routing": {
				"send": {
					"property": "Keywords",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Loan"
					]
				}
			}
		},
		{
			"displayName": "Level",
			"name": "Level",
			"type": "options",
			"default": "confidential",
			"options": [
				{
					"name": "Confidential",
					"value": "confidential"
				},
				{
					"name": "Regular",
					"value": "regular"
				},
				{
					"name": "Public",
					"value": "public"
				}
			],
			"routing": {
				"send": {
					"property": "Level",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Loan"
					]
				}
			}
		},
		{
			"displayName": "Months Number",
			"name": "MonthsNumber",
			"type": "number",
			"default": 12,
			"routing": {
				"send": {
					"property": "MonthsNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Loan"
					]
				}
			}
		},
		{
			"displayName": "Rate",
			"name": "Rate",
			"type": "number",
			"default": 2.5,
			"routing": {
				"send": {
					"property": "Rate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Loan"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "Start",
			"type": "string",
			"default": "20180630",
			"routing": {
				"send": {
					"property": "Start",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Loan"
					]
				}
			}
		},
		{
			"displayName": "Total Cost",
			"name": "TotalCost",
			"type": "number",
			"default": 10200,
			"routing": {
				"send": {
					"property": "TotalCost",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Loan"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/folders/{id}/messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Messages"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "Text",
			"description": "Name of the message",
			"default": "*welcom*",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Text",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Messages"
					]
				}
			}
		},
		{
			"displayName": "Range",
			"name": "Range",
			"description": "index range of the results",
			"default": "10-19",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Range",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Messages"
					]
				}
			}
		},
		{
			"displayName": "Message Date",
			"name": "MessageDate",
			"description": "date of the message",
			"default": "20190202",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "MessageDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Messages"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Messages"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Messages"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{spaceId}/folders/{id}/messages",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Messages"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Messages"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Messages"
					]
				}
			}
		},
		{
			"displayName": "Level",
			"name": "Level",
			"type": "options",
			"default": "confidential",
			"options": [
				{
					"name": "Confidential",
					"value": "confidential"
				},
				{
					"name": "Regular",
					"value": "regular"
				}
			],
			"routing": {
				"send": {
					"property": "Level",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Messages"
					]
				}
			}
		},
		{
			"displayName": "Message Date",
			"name": "MessageDate",
			"type": "string",
			"default": "20160203",
			"routing": {
				"send": {
					"property": "MessageDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Messages"
					]
				}
			}
		},
		{
			"displayName": "Notify",
			"name": "Notify",
			"type": "json",
			"default": "{\n  \"How\": \"sms\",\n  \"MemberIds\": [\n    [\n      \"PJOFJAFJAOJ\",\n      \"PJFJAPJF\"\n    ]\n  ]\n}",
			"routing": {
				"send": {
					"property": "Notify",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Messages"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "Text",
			"type": "string",
			"default": "<p> hello world </p>",
			"routing": {
				"send": {
					"property": "Text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Messages"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{spaceId}/folders/{id}/messages/{messageId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Messages"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Messages"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Messages"
					]
				}
			}
		},
		{
			"displayName": "Message ID",
			"name": "messageId",
			"required": true,
			"description": "Id of the message",
			"default": "TJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Messages"
					]
				}
			}
		},
		{
			"displayName": "Level",
			"name": "Level",
			"type": "options",
			"default": "confidential",
			"options": [
				{
					"name": "Confidential",
					"value": "confidential"
				},
				{
					"name": "Regular",
					"value": "regular"
				}
			],
			"routing": {
				"send": {
					"property": "Level",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Messages"
					]
				}
			}
		},
		{
			"displayName": "Message Date",
			"name": "MessageDate",
			"type": "string",
			"default": "20160203",
			"routing": {
				"send": {
					"property": "MessageDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Messages"
					]
				}
			}
		},
		{
			"displayName": "Notify",
			"name": "Notify",
			"type": "json",
			"default": "{\n  \"How\": \"sms\",\n  \"MemberIds\": [\n    [\n      \"PJOFJAFJAOJ\",\n      \"PJFJAPJF\"\n    ]\n  ]\n}",
			"routing": {
				"send": {
					"property": "Notify",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Messages"
					]
				}
			}
		},
		{
			"displayName": "Text",
			"name": "Text",
			"type": "string",
			"default": "<p> hello world </p>",
			"routing": {
				"send": {
					"property": "Text",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Messages"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/folders/{id}/other-taxes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Other Taxes"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder taxcontract",
			"default": "T15646IFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Other Taxes"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Other Taxes"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "Date",
			"description": "range date of the documents",
			"default": "20160321, null",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Other Taxes"
					]
				}
			}
		},
		{
			"displayName": "Range",
			"name": "Range",
			"description": "index range of the results",
			"default": "10-19",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Range",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Other Taxes"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{spaceId}/folders/{id}/other-taxes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Other Taxes"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder tax contract",
			"default": "P1987HGFKJFAA46",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Other Taxes"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Other Taxes"
					]
				}
			}
		},
		{
			"displayName": "Amount",
			"name": "Amount",
			"type": "number",
			"default": 132.63,
			"routing": {
				"send": {
					"property": "Amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Other Taxes"
					]
				}
			}
		},
		{
			"displayName": "Declaration Date",
			"name": "DeclarationDate",
			"type": "string",
			"default": "20160801",
			"routing": {
				"send": {
					"property": "DeclarationDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Other Taxes"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "DocumentId",
			"type": "string",
			"default": "PBUFBAUBF1531",
			"routing": {
				"send": {
					"property": "DocumentId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Other Taxes"
					]
				}
			}
		},
		{
			"displayName": "Reference",
			"name": "Reference",
			"type": "string",
			"default": "décla CFE",
			"routing": {
				"send": {
					"property": "Reference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Other Taxes"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/folders/{id}/passwords",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Passwords"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Passwords"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Passwords"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{spaceId}/folders/{id}/passwords",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Passwords"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Passwords"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Passwords"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "mon compte google",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Passwords"
					]
				}
			}
		},
		{
			"displayName": "Designation",
			"name": "Designation",
			"type": "string",
			"default": "compte google",
			"routing": {
				"send": {
					"property": "Designation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Passwords"
					]
				}
			}
		},
		{
			"displayName": "Ident",
			"name": "Ident",
			"type": "string",
			"default": "test",
			"routing": {
				"send": {
					"property": "Ident",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Passwords"
					]
				}
			}
		},
		{
			"displayName": "Link",
			"name": "Link",
			"type": "string",
			"default": "www.google.fr",
			"routing": {
				"send": {
					"property": "Link",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Passwords"
					]
				}
			}
		},
		{
			"displayName": "Password",
			"name": "Password",
			"type": "string",
			"default": "azerty",
			"routing": {
				"send": {
					"property": "Password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Passwords"
					]
				}
			}
		},
		{
			"displayName": "DELETE /spaces/{spaceId}/folders/{id}/passwords/{passwordId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Passwords"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Passwords"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Passwords"
					]
				}
			}
		},
		{
			"displayName": "Password ID",
			"name": "passwordId",
			"required": true,
			"description": "Id of the password",
			"default": "TJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Passwords"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{spaceId}/folders/{id}/passwords/{passwordId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Passwords"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Passwords"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Passwords"
					]
				}
			}
		},
		{
			"displayName": "Password ID",
			"name": "passwordId",
			"required": true,
			"description": "Id of the password",
			"default": "TJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Passwords"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "mon compte google",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Passwords"
					]
				}
			}
		},
		{
			"displayName": "Designation",
			"name": "Designation",
			"type": "string",
			"default": "compte google",
			"routing": {
				"send": {
					"property": "Designation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Passwords"
					]
				}
			}
		},
		{
			"displayName": "Ident",
			"name": "Ident",
			"type": "string",
			"default": "test",
			"routing": {
				"send": {
					"property": "Ident",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Passwords"
					]
				}
			}
		},
		{
			"displayName": "Link",
			"name": "Link",
			"type": "string",
			"default": "www.google.fr",
			"routing": {
				"send": {
					"property": "Link",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Passwords"
					]
				}
			}
		},
		{
			"displayName": "Password",
			"name": "Password",
			"type": "string",
			"default": "azerty",
			"routing": {
				"send": {
					"property": "Password",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Passwords"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/folders/{id}/payrolls",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Payrolls"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder social",
			"default": "T15646IFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Payrolls"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Payrolls"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "Date",
			"description": "range date of the documents",
			"default": "20160321, null",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Payrolls"
					]
				}
			}
		},
		{
			"displayName": "Begin",
			"name": "Begin",
			"description": "begin date of the payrolls",
			"default": "20160321,null",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Begin",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Payrolls"
					]
				}
			}
		},
		{
			"displayName": "End",
			"name": "End",
			"description": "end date of the payrolls",
			"default": "20160321,null",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "End",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Payrolls"
					]
				}
			}
		},
		{
			"displayName": "Range",
			"name": "Range",
			"description": "index range of the results",
			"default": "10-19",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Range",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Payrolls"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{spaceId}/folders/{id}/payrolls",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Payrolls"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder social",
			"default": "P1987HGFKJFAA46",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Payrolls"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Payrolls"
					]
				}
			}
		},
		{
			"displayName": "Begin",
			"name": "Begin",
			"type": "string",
			"default": "20160801",
			"routing": {
				"send": {
					"property": "Begin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Payrolls"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "DocumentId",
			"type": "string",
			"default": "PBUFBAUBF1531",
			"routing": {
				"send": {
					"property": "DocumentId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Payrolls"
					]
				}
			}
		},
		{
			"displayName": "Employee Contributions",
			"name": "EmployeeContributions",
			"type": "number",
			"default": 1352.63,
			"routing": {
				"send": {
					"property": "EmployeeContributions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Payrolls"
					]
				}
			}
		},
		{
			"displayName": "Employer Contributions",
			"name": "EmployerContributions",
			"type": "number",
			"default": 132.63,
			"routing": {
				"send": {
					"property": "EmployerContributions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Payrolls"
					]
				}
			}
		},
		{
			"displayName": "End",
			"name": "End",
			"type": "string",
			"default": "20160831",
			"routing": {
				"send": {
					"property": "End",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Payrolls"
					]
				}
			}
		},
		{
			"displayName": "Net Amount",
			"name": "NetAmount",
			"type": "number",
			"default": 1005.63,
			"routing": {
				"send": {
					"property": "NetAmount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Payrolls"
					]
				}
			}
		},
		{
			"displayName": "Total Gross Amount",
			"name": "TotalGrossAmount",
			"type": "number",
			"default": 1548.63,
			"routing": {
				"send": {
					"property": "TotalGrossAmount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Payrolls"
					]
				}
			}
		},
		{
			"displayName": "DELETE /spaces/{spaceId}/folders/{id}/payrolls/{payrollId}/nominative-social-declaration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Payrolls Nominative Social Declaration"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder social",
			"default": "P1987HGFKJFAA46",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Payrolls Nominative Social Declaration"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Payrolls Nominative Social Declaration"
					]
				}
			}
		},
		{
			"displayName": "Payroll ID",
			"name": "payrollId",
			"required": true,
			"description": "Id of the payroll",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Payrolls Nominative Social Declaration"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{spaceId}/folders/{id}/payrolls/{payrollId}/nominative-social-declaration",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Payrolls Nominative Social Declaration"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder social",
			"default": "P1987HGFKJFAA46",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Payrolls Nominative Social Declaration"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Payrolls Nominative Social Declaration"
					]
				}
			}
		},
		{
			"displayName": "Payroll ID",
			"name": "payrollId",
			"required": true,
			"description": "Id of the payroll",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Payrolls Nominative Social Declaration"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "DocumentId",
			"type": "string",
			"default": "PBUFBAUBF1531",
			"routing": {
				"send": {
					"property": "DocumentId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Payrolls Nominative Social Declaration"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/folders/{id}/payslips",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Payslips"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder employee",
			"default": "T15646IFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Payslips"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Payslips"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "Date",
			"description": "range date of the documents",
			"default": "20160321, null",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Payslips"
					]
				}
			}
		},
		{
			"displayName": "Range",
			"name": "Range",
			"description": "index range of the results",
			"default": "10-19",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Range",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Payslips"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{spaceId}/folders/{id}/payslips",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Payslips"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder employee",
			"default": "P1987HGFKJFAA46",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Payslips"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Payslips"
					]
				}
			}
		},
		{
			"displayName": "Begin",
			"name": "Begin",
			"type": "string",
			"default": "20160801",
			"routing": {
				"send": {
					"property": "Begin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Payslips"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "DocumentId",
			"type": "string",
			"default": "PBUFBAUBF1531",
			"routing": {
				"send": {
					"property": "DocumentId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Payslips"
					]
				}
			}
		},
		{
			"displayName": "Employee Contributions",
			"name": "EmployeeContributions",
			"type": "number",
			"default": 2000.5,
			"routing": {
				"send": {
					"property": "EmployeeContributions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Payslips"
					]
				}
			}
		},
		{
			"displayName": "Employer Contributions",
			"name": "EmployerContributions",
			"type": "number",
			"default": 400.5,
			"routing": {
				"send": {
					"property": "EmployerContributions",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Payslips"
					]
				}
			}
		},
		{
			"displayName": "End",
			"name": "End",
			"type": "string",
			"default": "20160831",
			"routing": {
				"send": {
					"property": "End",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Payslips"
					]
				}
			}
		},
		{
			"displayName": "Fixed Gross Amount",
			"name": "FixedGrossAmount",
			"type": "number",
			"default": 1352.63,
			"routing": {
				"send": {
					"property": "FixedGrossAmount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Payslips"
					]
				}
			}
		},
		{
			"displayName": "Net Amount",
			"name": "NetAmount",
			"type": "number",
			"default": 1005.63,
			"routing": {
				"send": {
					"property": "NetAmount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Payslips"
					]
				}
			}
		},
		{
			"displayName": "Total Gross Amount",
			"name": "TotalGrossAmount",
			"type": "number",
			"default": 1548.63,
			"routing": {
				"send": {
					"property": "TotalGrossAmount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Payslips"
					]
				}
			}
		},
		{
			"displayName": "Vacation",
			"name": "Vacation",
			"type": "number",
			"default": 20.5,
			"routing": {
				"send": {
					"property": "Vacation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Payslips"
					]
				}
			}
		},
		{
			"displayName": "Variable Gross Amount",
			"name": "VariableGrossAmount",
			"type": "number",
			"default": 132.63,
			"routing": {
				"send": {
					"property": "VariableGrossAmount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Payslips"
					]
				}
			}
		},
		{
			"displayName": "DELETE /spaces/{spaceId}/folders/{id}/portfolio/{portfolioId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Portfolio"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "T18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Portfolio"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Portfolio"
					]
				}
			}
		},
		{
			"displayName": "Portfolio ID",
			"name": "portfolioId",
			"required": true,
			"description": "Id of the portfolio",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Portfolio"
					]
				}
			}
		},
		{
			"displayName": "DELETE /spaces/{spaceId}/folders/{id}/professional-vehicle",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Professional Vehicle"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "T18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Professional Vehicle"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Professional Vehicle"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{spaceId}/folders/{id}/professional-vehicle",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Professional Vehicle"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "T18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Professional Vehicle"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Professional Vehicle"
					]
				}
			}
		},
		{
			"displayName": "About",
			"name": "About",
			"type": "string",
			"default": "<b> Mon premier dossier </b>",
			"routing": {
				"send": {
					"property": "About",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Professional Vehicle"
					]
				}
			}
		},
		{
			"displayName": "Brand",
			"name": "Brand",
			"type": "string",
			"default": "Renault",
			"routing": {
				"send": {
					"property": "Brand",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Professional Vehicle"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "Peugeot Lyon",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Professional Vehicle"
					]
				}
			}
		},
		{
			"displayName": "Company Tax",
			"name": "CompanyTax",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "CompanyTax",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Professional Vehicle"
					]
				}
			}
		},
		{
			"displayName": "Date In",
			"name": "DateIn",
			"type": "string",
			"default": "20201802",
			"routing": {
				"send": {
					"property": "DateIn",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Professional Vehicle"
					]
				}
			}
		},
		{
			"displayName": "Date Out",
			"name": "DateOut",
			"type": "string",
			"default": "20201802",
			"routing": {
				"send": {
					"property": "DateOut",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Professional Vehicle"
					]
				}
			}
		},
		{
			"displayName": "Designation",
			"name": "Designation",
			"type": "string",
			"default": "peugeot siège",
			"routing": {
				"send": {
					"property": "Designation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Professional Vehicle"
					]
				}
			}
		},
		{
			"displayName": "Home",
			"name": "Home",
			"type": "boolean",
			"default": "yes",
			"routing": {
				"send": {
					"property": "Home",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Professional Vehicle"
					]
				}
			}
		},
		{
			"displayName": "Keywords",
			"name": "Keywords",
			"type": "json",
			"default": "[\n  \"paris\",\n  \"clio\"\n]",
			"routing": {
				"send": {
					"property": "Keywords",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Professional Vehicle"
					]
				}
			}
		},
		{
			"displayName": "Level",
			"name": "Level",
			"type": "options",
			"default": "confidential",
			"options": [
				{
					"name": "Confidential",
					"value": "confidential"
				},
				{
					"name": "Regular",
					"value": "regular"
				},
				{
					"name": "Public",
					"value": "public"
				}
			],
			"routing": {
				"send": {
					"property": "Level",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Professional Vehicle"
					]
				}
			}
		},
		{
			"displayName": "Model",
			"name": "Model",
			"type": "string",
			"default": "Clio",
			"routing": {
				"send": {
					"property": "Model",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Professional Vehicle"
					]
				}
			}
		},
		{
			"displayName": "Registration Date",
			"name": "RegistrationDate",
			"type": "string",
			"default": "20181231",
			"routing": {
				"send": {
					"property": "RegistrationDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Professional Vehicle"
					]
				}
			}
		},
		{
			"displayName": "Registration Number",
			"name": "RegistrationNumber",
			"type": "string",
			"default": "AA001AA",
			"routing": {
				"send": {
					"property": "RegistrationNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Professional Vehicle"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "Type",
			"type": "string",
			"default": "car",
			"routing": {
				"send": {
					"property": "Type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Professional Vehicle"
					]
				}
			}
		},
		{
			"displayName": "Value",
			"name": "Value",
			"type": "number",
			"default": 1500.23,
			"routing": {
				"send": {
					"property": "Value",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Professional Vehicle"
					]
				}
			}
		},
		{
			"displayName": "DELETE /spaces/{spaceId}/folders/{id}/provider",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Provider"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "T18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Provider"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Provider"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/folders/{id}/provider",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Provider"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "T15646476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Provider"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Provider"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{spaceId}/folders/{id}/provider",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Provider"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "T18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Provider"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Provider"
					]
				}
			}
		},
		{
			"displayName": "About",
			"name": "About",
			"type": "string",
			"default": "<b> Mon premier dossier </b>",
			"routing": {
				"send": {
					"property": "About",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Provider"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "pieces company",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Provider"
					]
				}
			}
		},
		{
			"displayName": "Designation",
			"name": "Designation",
			"type": "string",
			"default": "client pièces détachées",
			"routing": {
				"send": {
					"property": "Designation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Provider"
					]
				}
			}
		},
		{
			"displayName": "End",
			"name": "End",
			"type": "string",
			"default": "20190101",
			"routing": {
				"send": {
					"property": "End",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Provider"
					]
				}
			}
		},
		{
			"displayName": "Home",
			"name": "Home",
			"type": "boolean",
			"default": "yes",
			"routing": {
				"send": {
					"property": "Home",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Provider"
					]
				}
			}
		},
		{
			"displayName": "Keywords",
			"name": "Keywords",
			"type": "json",
			"default": "[\n  \"paris\",\n  \"comptabilité\"\n]",
			"routing": {
				"send": {
					"property": "Keywords",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Provider"
					]
				}
			}
		},
		{
			"displayName": "Level",
			"name": "Level",
			"type": "options",
			"default": "confidential",
			"options": [
				{
					"name": "Confidential",
					"value": "confidential"
				},
				{
					"name": "Regular",
					"value": "regular"
				},
				{
					"name": "Public",
					"value": "public"
				}
			],
			"routing": {
				"send": {
					"property": "Level",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Provider"
					]
				}
			}
		},
		{
			"displayName": "Provider Number",
			"name": "ProviderNumber",
			"type": "string",
			"default": "13587449420F",
			"routing": {
				"send": {
					"property": "ProviderNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Provider"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "Start",
			"type": "string",
			"default": "20180630",
			"routing": {
				"send": {
					"property": "Start",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Provider"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/folders/{id}/required-documents",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Required Documents"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder either exchange either followup",
			"default": "T15646IFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Required Documents"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Required Documents"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{spaceId}/folders/{id}/required-documents/{requireddocumentid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Required Documents"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder exchange or followup",
			"default": "P18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Required Documents"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Required Documents"
					]
				}
			}
		},
		{
			"displayName": "Requireddocumentid",
			"name": "requireddocumentid",
			"required": true,
			"description": "Id of the requireddocument",
			"default": "T156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Required Documents"
					]
				}
			}
		},
		{
			"displayName": "Status",
			"name": "Status",
			"type": "options",
			"default": "waiting",
			"options": [
				{
					"name": "Waiting",
					"value": "waiting"
				},
				{
					"name": "Ended",
					"value": "ended"
				},
				{
					"name": "Validated",
					"value": "validated"
				}
			],
			"routing": {
				"send": {
					"property": "Status",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Required Documents"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{spaceId}/folders/{id}/required-documents/{requireddocumentid}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Required Documents"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder exchange or followup",
			"default": "P1987HGFKJFAA46",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Required Documents"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Required Documents"
					]
				}
			}
		},
		{
			"displayName": "Requireddocumentid",
			"name": "requireddocumentid",
			"required": true,
			"description": "Id of the requireddocument",
			"default": "T156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Required Documents"
					]
				}
			}
		},
		{
			"displayName": "File",
			"name": "File",
			"type": "json",
			"default": "{\n  \"Content64Encoded\": \"gjgjJ9FJA829H9HA18B\",\n  \"Name\": \"MonDocument.pdf\"\n}",
			"routing": {
				"send": {
					"property": "File",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Required Documents"
					]
				}
			}
		},
		{
			"displayName": "DELETE /spaces/{spaceId}/folders/{id}/required-documents/{requireddocumentid}/documents/{documentId}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Required Documents Documents"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder exchange or followup",
			"default": "P1987HGFKJFAA46",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Required Documents Documents"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Required Documents Documents"
					]
				}
			}
		},
		{
			"displayName": "Requireddocumentid",
			"name": "requireddocumentid",
			"required": true,
			"description": "Id of the requireddocument",
			"default": "T156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Required Documents Documents"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "documentId",
			"required": true,
			"description": "Id of the document to delete",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Required Documents Documents"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/folders/{id}/sections",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Sections"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "T15646IFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Sections"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Sections"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/folders/{id}/social-contracts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Social Contracts"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder employee",
			"default": "T15646IFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Social Contracts"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Social Contracts"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "Date",
			"description": "range date of the documents",
			"default": "20160321, null",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Social Contracts"
					]
				}
			}
		},
		{
			"displayName": "Range",
			"name": "Range",
			"description": "index range of the results",
			"default": "10-19",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Range",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Social Contracts"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{spaceId}/folders/{id}/social-contracts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Social Contracts"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder employee",
			"default": "P1987HGFKJFAA46",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Social Contracts"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Social Contracts"
					]
				}
			}
		},
		{
			"displayName": "Contract Date",
			"name": "ContractDate",
			"type": "string",
			"default": "20190202",
			"routing": {
				"send": {
					"property": "ContractDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Social Contracts"
					]
				}
			}
		},
		{
			"displayName": "Contract Duration",
			"name": "ContractDuration",
			"type": "string",
			"default": "6 mois",
			"routing": {
				"send": {
					"property": "ContractDuration",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Social Contracts"
					]
				}
			}
		},
		{
			"displayName": "Contractual Change",
			"name": "ContractualChange",
			"type": "string",
			"default": "augmentation",
			"routing": {
				"send": {
					"property": "ContractualChange",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Social Contracts"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "DocumentId",
			"type": "string",
			"default": "PBUFBAUBF1531",
			"routing": {
				"send": {
					"property": "DocumentId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Social Contracts"
					]
				}
			}
		},
		{
			"displayName": "Position",
			"name": "Position",
			"type": "string",
			"default": "cadre",
			"routing": {
				"send": {
					"property": "Position",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Social Contracts"
					]
				}
			}
		},
		{
			"displayName": "Wage Developments",
			"name": "WageDevelopments",
			"type": "number",
			"default": 1548.63,
			"routing": {
				"send": {
					"property": "WageDevelopments",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Social Contracts"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/folders/{id}/social-declarations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Social Declarations"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder socialregime",
			"default": "T15646IFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Social Declarations"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Social Declarations"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "Date",
			"description": "range date of the documents",
			"default": "20160321, null",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Social Declarations"
					]
				}
			}
		},
		{
			"displayName": "Range",
			"name": "Range",
			"description": "index range of the results",
			"default": "10-19",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Range",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Social Declarations"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{spaceId}/folders/{id}/social-declarations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Social Declarations"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder social regime",
			"default": "P1987HGFKJFAA46",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Social Declarations"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Social Declarations"
					]
				}
			}
		},
		{
			"displayName": "Amount",
			"name": "Amount",
			"type": "number",
			"default": 132.63,
			"routing": {
				"send": {
					"property": "Amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Social Declarations"
					]
				}
			}
		},
		{
			"displayName": "Declaration Date",
			"name": "DeclarationDate",
			"type": "string",
			"default": "20160801",
			"routing": {
				"send": {
					"property": "DeclarationDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Social Declarations"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "DocumentId",
			"type": "string",
			"default": "PBUFBAUBF1531",
			"routing": {
				"send": {
					"property": "DocumentId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Social Declarations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /spaces/{spaceId}/folders/{id}/social-regimes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Social Regimes"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "T18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Social Regimes"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Social Regimes"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/folders/{id}/social-regimes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Social Regimes"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "T15646476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Social Regimes"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Social Regimes"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{spaceId}/folders/{id}/social-regimes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Social Regimes"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "T18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Social Regimes"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Social Regimes"
					]
				}
			}
		},
		{
			"displayName": "About",
			"name": "About",
			"type": "string",
			"default": "<b> Mon premier dossier </b>",
			"routing": {
				"send": {
					"property": "About",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Social Regimes"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "pieces company",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Social Regimes"
					]
				}
			}
		},
		{
			"displayName": "Designation",
			"name": "Designation",
			"type": "string",
			"default": "client pièces détachées",
			"routing": {
				"send": {
					"property": "Designation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Social Regimes"
					]
				}
			}
		},
		{
			"displayName": "End",
			"name": "End",
			"type": "string",
			"default": "20190101",
			"routing": {
				"send": {
					"property": "End",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Social Regimes"
					]
				}
			}
		},
		{
			"displayName": "Home",
			"name": "Home",
			"type": "boolean",
			"default": "yes",
			"routing": {
				"send": {
					"property": "Home",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Social Regimes"
					]
				}
			}
		},
		{
			"displayName": "Keywords",
			"name": "Keywords",
			"type": "json",
			"default": "[\n  \"paris\",\n  \"comptabilité\"\n]",
			"routing": {
				"send": {
					"property": "Keywords",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Social Regimes"
					]
				}
			}
		},
		{
			"displayName": "Level",
			"name": "Level",
			"type": "options",
			"default": "confidential",
			"options": [
				{
					"name": "Confidential",
					"value": "confidential"
				},
				{
					"name": "Regular",
					"value": "regular"
				},
				{
					"name": "Public",
					"value": "public"
				}
			],
			"routing": {
				"send": {
					"property": "Level",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Social Regimes"
					]
				}
			}
		},
		{
			"displayName": "Periodicity",
			"name": "Periodicity",
			"type": "options",
			"default": "monthly",
			"options": [
				{
					"name": "Monthly",
					"value": "monthly"
				},
				{
					"name": "Quarterly",
					"value": "quarterly"
				},
				{
					"name": "Half Yearly",
					"value": "half-yearly"
				},
				{
					"name": "Annual",
					"value": "annual"
				},
				{
					"name": "Null",
					"value": "null"
				}
			],
			"routing": {
				"send": {
					"property": "Periodicity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Social Regimes"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "Start",
			"type": "string",
			"default": "20180630",
			"routing": {
				"send": {
					"property": "Start",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Social Regimes"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "Type",
			"type": "options",
			"default": "mandatory",
			"options": [
				{
					"name": "Mandatory",
					"value": "mandatory"
				},
				{
					"name": "Optional",
					"value": "optional"
				},
				{
					"name": "Null",
					"value": "null"
				}
			],
			"routing": {
				"send": {
					"property": "Type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Social Regimes"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/folders/{id}/sum-invoices",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Sum Invoices"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "T15646IFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Sum Invoices"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Sum Invoices"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "Number",
			"description": "Number of the invoice",
			"default": 23585,
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Number",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Sum Invoices"
					]
				}
			}
		},
		{
			"displayName": "Incl Vat",
			"name": "InclVat",
			"description": "amount incl. VAT",
			"default": "100.50,101.50",
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "InclVat",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Sum Invoices"
					]
				}
			}
		},
		{
			"displayName": "Before VAT",
			"name": "BeforeVAT",
			"description": "amount before VAT",
			"default": "102.50,101.50",
			"type": "number",
			"routing": {
				"send": {
					"type": "query",
					"property": "BeforeVAT",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Sum Invoices"
					]
				}
			}
		},
		{
			"displayName": "Due Date",
			"name": "DueDate",
			"description": "range date due payment",
			"default": "20201231",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "DueDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Sum Invoices"
					]
				}
			}
		},
		{
			"displayName": "Payment Date",
			"name": "PaymentDate",
			"description": "range date of payment",
			"default": "20201201,null",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "PaymentDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Sum Invoices"
					]
				}
			}
		},
		{
			"displayName": "Invoice Date",
			"name": "InvoiceDate",
			"description": "range date of invoice",
			"default": "20201201,null",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "InvoiceDate",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Sum Invoices"
					]
				}
			}
		},
		{
			"displayName": "DELETE /spaces/{spaceId}/folders/{id}/tax-contract",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Tax Contract"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "T18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Tax Contract"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders Tax Contract"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{spaceId}/folders/{id}/tax-contract",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Tax Contract"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "T18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Tax Contract"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Tax Contract"
					]
				}
			}
		},
		{
			"displayName": "About",
			"name": "About",
			"type": "string",
			"default": "<b> Mon premier dossier </b>",
			"routing": {
				"send": {
					"property": "About",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Tax Contract"
					]
				}
			}
		},
		{
			"displayName": "Archival Date",
			"name": "ArchivalDate",
			"type": "string",
			"default": "20160203",
			"routing": {
				"send": {
					"property": "ArchivalDate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Tax Contract"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "pieces company",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Tax Contract"
					]
				}
			}
		},
		{
			"displayName": "Designation",
			"name": "Designation",
			"type": "string",
			"default": "taxes foncières",
			"routing": {
				"send": {
					"property": "Designation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Tax Contract"
					]
				}
			}
		},
		{
			"displayName": "End",
			"name": "End",
			"type": "string",
			"default": "20190101",
			"routing": {
				"send": {
					"property": "End",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Tax Contract"
					]
				}
			}
		},
		{
			"displayName": "Home",
			"name": "Home",
			"type": "boolean",
			"default": "yes",
			"routing": {
				"send": {
					"property": "Home",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Tax Contract"
					]
				}
			}
		},
		{
			"displayName": "Keywords",
			"name": "Keywords",
			"type": "json",
			"default": "[\n  \"paris\",\n  \"comptabilité\"\n]",
			"routing": {
				"send": {
					"property": "Keywords",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Tax Contract"
					]
				}
			}
		},
		{
			"displayName": "Level",
			"name": "Level",
			"type": "options",
			"default": "confidential",
			"options": [
				{
					"name": "Confidential",
					"value": "confidential"
				},
				{
					"name": "Regular",
					"value": "regular"
				},
				{
					"name": "Public",
					"value": "public"
				}
			],
			"routing": {
				"send": {
					"property": "Level",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Tax Contract"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "Start",
			"type": "string",
			"default": "20180630",
			"routing": {
				"send": {
					"property": "Start",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Folders Tax Contract"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/folders/{id}/vat-declarations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Vat Declarations"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder result and taxation",
			"default": "T15646IFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Vat Declarations"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Vat Declarations"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "Date",
			"description": "range date of the documents",
			"default": "20160321, null",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Vat Declarations"
					]
				}
			}
		},
		{
			"displayName": "Range",
			"name": "Range",
			"description": "index range of the results",
			"default": "10-19",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Range",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Folders Vat Declarations"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{spaceId}/folders/{id}/vat-declarations",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Vat Declarations"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder result and taxation",
			"default": "P1987HGFKJFAA46",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Vat Declarations"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Vat Declarations"
					]
				}
			}
		},
		{
			"displayName": "Begin",
			"name": "Begin",
			"type": "string",
			"default": "20160801",
			"routing": {
				"send": {
					"property": "Begin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Vat Declarations"
					]
				}
			}
		},
		{
			"displayName": "Collected VAT",
			"name": "CollectedVAT",
			"type": "number",
			"default": 1548.63,
			"routing": {
				"send": {
					"property": "CollectedVAT",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Vat Declarations"
					]
				}
			}
		},
		{
			"displayName": "Credit VAT",
			"name": "CreditVAT",
			"type": "number",
			"default": 400.5,
			"routing": {
				"send": {
					"property": "CreditVAT",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Vat Declarations"
					]
				}
			}
		},
		{
			"displayName": "Deductible VAT",
			"name": "DeductibleVAT",
			"type": "number",
			"default": 20.5,
			"routing": {
				"send": {
					"property": "DeductibleVAT",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Vat Declarations"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "DocumentId",
			"type": "string",
			"default": "PBUFBAUBF1531",
			"routing": {
				"send": {
					"property": "DocumentId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Vat Declarations"
					]
				}
			}
		},
		{
			"displayName": "End",
			"name": "End",
			"type": "string",
			"default": "20160831",
			"routing": {
				"send": {
					"property": "End",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Vat Declarations"
					]
				}
			}
		},
		{
			"displayName": "Exempt Turnover",
			"name": "ExemptTurnover",
			"type": "number",
			"default": 132.63,
			"routing": {
				"send": {
					"property": "ExemptTurnover",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Vat Declarations"
					]
				}
			}
		},
		{
			"displayName": "Number",
			"name": "Number",
			"type": "string",
			"default": "153126",
			"routing": {
				"send": {
					"property": "Number",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Vat Declarations"
					]
				}
			}
		},
		{
			"displayName": "Payable VAT",
			"name": "PayableVAT",
			"type": "number",
			"default": 2000.5,
			"routing": {
				"send": {
					"property": "PayableVAT",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Vat Declarations"
					]
				}
			}
		},
		{
			"displayName": "Taxable Turnover",
			"name": "TaxableTurnover",
			"type": "number",
			"default": 1352.63,
			"routing": {
				"send": {
					"property": "TaxableTurnover",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders Vat Declarations"
					]
				}
			}
		},
		{
			"displayName": "DELETE /spaces/{spaceId}/folders/{id}/{documentClass}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "PJOFJAFA8Y",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders"
					]
				}
			}
		},
		{
			"displayName": "Document Class",
			"name": "documentClass",
			"required": true,
			"description": "class of the document",
			"default": "birthCertificate",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Folders"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{spaceId}/folders/{id}/{documentClass}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "P1987HGFKJFAA46",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders"
					]
				}
			}
		},
		{
			"displayName": "Document Class",
			"name": "documentClass",
			"required": true,
			"description": "class of the document",
			"default": "birthCertificate",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders"
					]
				}
			}
		},
		{
			"displayName": "Document ID",
			"name": "DocumentId",
			"type": "string",
			"default": "PBUFBAUBF1531",
			"routing": {
				"send": {
					"property": "DocumentId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Folders"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/legal-entities/{id}/banks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Banks"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the legal-entity",
			"default": "T15646476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Banks"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Banks"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{spaceId}/legal-entities/{id}/banks",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Banks"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the bank or memberId",
			"default": "T1987HGFA46",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Banks"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Banks"
					]
				}
			}
		},
		{
			"displayName": "About",
			"name": "About",
			"type": "string",
			"default": "<b> Mon premier dossier </b>",
			"routing": {
				"send": {
					"property": "About",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Banks"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "pieces company",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Banks"
					]
				}
			}
		},
		{
			"displayName": "Contract Reference",
			"name": "ContractReference",
			"type": "string",
			"default": "13587449420F",
			"routing": {
				"send": {
					"property": "ContractReference",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Banks"
					]
				}
			}
		},
		{
			"displayName": "Designation",
			"name": "Designation",
			"type": "string",
			"default": "client pièces détachées",
			"routing": {
				"send": {
					"property": "Designation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Banks"
					]
				}
			}
		},
		{
			"displayName": "End",
			"name": "End",
			"type": "string",
			"default": "20190101",
			"routing": {
				"send": {
					"property": "End",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Banks"
					]
				}
			}
		},
		{
			"displayName": "Home",
			"name": "Home",
			"type": "boolean",
			"default": "yes",
			"routing": {
				"send": {
					"property": "Home",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Banks"
					]
				}
			}
		},
		{
			"displayName": "Keywords",
			"name": "Keywords",
			"type": "json",
			"default": "[\n  \"paris\",\n  \"comptabilité\"\n]",
			"routing": {
				"send": {
					"property": "Keywords",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Banks"
					]
				}
			}
		},
		{
			"displayName": "Level",
			"name": "Level",
			"type": "options",
			"default": "confidential",
			"options": [
				{
					"name": "Confidential",
					"value": "confidential"
				},
				{
					"name": "Regular",
					"value": "regular"
				},
				{
					"name": "Public",
					"value": "public"
				}
			],
			"routing": {
				"send": {
					"property": "Level",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Banks"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "Start",
			"type": "string",
			"default": "20180630",
			"routing": {
				"send": {
					"property": "Start",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Banks"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/legal-entities/{id}/banks/all",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Banks All"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the bank",
			"default": "T15646476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Banks All"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Banks All"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/legal-entities/{id}/contracts",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Contracts"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the legal entity or memberId",
			"default": "T15646476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Contracts"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Contracts"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/legal-entities/{id}/contractual-relationships",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Contractual Relationships"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the legal-entity or memberId",
			"default": "T15646476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Contractual Relationships"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Contractual Relationships"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/legal-entities/{id}/contractual-relationships/all",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Contractual Relationships All"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the legal-entity or memberId",
			"default": "T15646476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Contractual Relationships All"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Contractual Relationships All"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/legal-entities/{id}/customers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Customers"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the customer or memberId",
			"default": "T15646476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Customers"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Customers"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{spaceId}/legal-entities/{id}/customers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Customers"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the customer or memberId",
			"default": "T1987HGFA46",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Customers"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Customers"
					]
				}
			}
		},
		{
			"displayName": "About",
			"name": "About",
			"type": "string",
			"default": "<b> Mon premier dossier </b>",
			"routing": {
				"send": {
					"property": "About",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Customers"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "pieces company",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Customers"
					]
				}
			}
		},
		{
			"displayName": "Customer Number",
			"name": "CustomerNumber",
			"type": "string",
			"default": "13587449420F",
			"routing": {
				"send": {
					"property": "CustomerNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Customers"
					]
				}
			}
		},
		{
			"displayName": "Designation",
			"name": "Designation",
			"type": "string",
			"default": "client pièces détachées",
			"routing": {
				"send": {
					"property": "Designation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Customers"
					]
				}
			}
		},
		{
			"displayName": "End",
			"name": "End",
			"type": "string",
			"default": "20190101",
			"routing": {
				"send": {
					"property": "End",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Customers"
					]
				}
			}
		},
		{
			"displayName": "Home",
			"name": "Home",
			"type": "boolean",
			"default": "yes",
			"routing": {
				"send": {
					"property": "Home",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Customers"
					]
				}
			}
		},
		{
			"displayName": "Keywords",
			"name": "Keywords",
			"type": "json",
			"default": "[\n  \"paris\",\n  \"comptabilité\"\n]",
			"routing": {
				"send": {
					"property": "Keywords",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Customers"
					]
				}
			}
		},
		{
			"displayName": "Level",
			"name": "Level",
			"type": "options",
			"default": "confidential",
			"options": [
				{
					"name": "Confidential",
					"value": "confidential"
				},
				{
					"name": "Regular",
					"value": "regular"
				},
				{
					"name": "Public",
					"value": "public"
				}
			],
			"routing": {
				"send": {
					"property": "Level",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Customers"
					]
				}
			}
		},
		{
			"displayName": "Portfolio ID",
			"name": "PortfolioId",
			"type": "string",
			"default": "T1OJFOAZ7449420F",
			"routing": {
				"send": {
					"property": "PortfolioId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Customers"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "Start",
			"type": "string",
			"default": "20180630",
			"routing": {
				"send": {
					"property": "Start",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Customers"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/legal-entities/{id}/customers/all",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Customers All"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the customer or memberId",
			"default": "T15646476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Customers All"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Customers All"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/legal-entities/{id}/insurances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Insurances"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the insurance",
			"default": "T15646476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Insurances"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Insurances"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{spaceId}/legal-entities/{id}/insurances",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Insurances"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the insurance or memberId",
			"default": "T1987HGFA46",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Insurances"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Insurances"
					]
				}
			}
		},
		{
			"displayName": "About",
			"name": "About",
			"type": "string",
			"default": "<b> Mon premier dossier </b>",
			"routing": {
				"send": {
					"property": "About",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Insurances"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "pieces company",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Insurances"
					]
				}
			}
		},
		{
			"displayName": "Customer Number",
			"name": "CustomerNumber",
			"type": "string",
			"default": "13587449420F",
			"routing": {
				"send": {
					"property": "CustomerNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Insurances"
					]
				}
			}
		},
		{
			"displayName": "Designation",
			"name": "Designation",
			"type": "string",
			"default": "client pièces détachées",
			"routing": {
				"send": {
					"property": "Designation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Insurances"
					]
				}
			}
		},
		{
			"displayName": "End",
			"name": "End",
			"type": "string",
			"default": "20190101",
			"routing": {
				"send": {
					"property": "End",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Insurances"
					]
				}
			}
		},
		{
			"displayName": "Home",
			"name": "Home",
			"type": "boolean",
			"default": "yes",
			"routing": {
				"send": {
					"property": "Home",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Insurances"
					]
				}
			}
		},
		{
			"displayName": "Keywords",
			"name": "Keywords",
			"type": "json",
			"default": "[\n  \"paris\",\n  \"comptabilité\"\n]",
			"routing": {
				"send": {
					"property": "Keywords",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Insurances"
					]
				}
			}
		},
		{
			"displayName": "Level",
			"name": "Level",
			"type": "options",
			"default": "confidential",
			"options": [
				{
					"name": "Confidential",
					"value": "confidential"
				},
				{
					"name": "Regular",
					"value": "regular"
				},
				{
					"name": "Public",
					"value": "public"
				}
			],
			"routing": {
				"send": {
					"property": "Level",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Insurances"
					]
				}
			}
		},
		{
			"displayName": "Policy Number",
			"name": "PolicyNumber",
			"type": "string",
			"default": "1358",
			"routing": {
				"send": {
					"property": "PolicyNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Insurances"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "Start",
			"type": "string",
			"default": "20180630",
			"routing": {
				"send": {
					"property": "Start",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Insurances"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/legal-entities/{id}/insurances/all",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Insurances All"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the insurance",
			"default": "T15646476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Insurances All"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Insurances All"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/legal-entities/{id}/loans",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Loans"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the loan",
			"default": "T15646476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Loans"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Loans"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{spaceId}/legal-entities/{id}/loans",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Loans"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the loan or memberId",
			"default": "T1987HGFA46",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Loans"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Loans"
					]
				}
			}
		},
		{
			"displayName": "About",
			"name": "About",
			"type": "string",
			"default": "<b> Mon premier dossier </b>",
			"routing": {
				"send": {
					"property": "About",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Loans"
					]
				}
			}
		},
		{
			"displayName": "Amount",
			"name": "Amount",
			"type": "number",
			"default": 1000,
			"routing": {
				"send": {
					"property": "Amount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Loans"
					]
				}
			}
		},
		{
			"displayName": "Category",
			"name": "Category",
			"type": "options",
			"default": "debt spreading",
			"options": [
				{
					"name": "Debt Spreading",
					"value": "debt spreading"
				},
				{
					"name": "Bank Loan",
					"value": "bank loan"
				},
				{
					"name": "Current Account",
					"value": "current account"
				},
				{
					"name": "Overdraft Agreement",
					"value": "overdraft agreement"
				},
				{
					"name": "Leasing",
					"value": "leasing"
				},
				{
					"name": "Obligation",
					"value": "obligation"
				}
			],
			"routing": {
				"send": {
					"property": "Category",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Loans"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "pieces company",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Loans"
					]
				}
			}
		},
		{
			"displayName": "Designation",
			"name": "Designation",
			"type": "string",
			"default": "emprunt entreprise",
			"routing": {
				"send": {
					"property": "Designation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Loans"
					]
				}
			}
		},
		{
			"displayName": "Due Amount",
			"name": "DueAmount",
			"type": "number",
			"default": 1000.6,
			"routing": {
				"send": {
					"property": "DueAmount",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Loans"
					]
				}
			}
		},
		{
			"displayName": "End",
			"name": "End",
			"type": "string",
			"default": "20190101",
			"routing": {
				"send": {
					"property": "End",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Loans"
					]
				}
			}
		},
		{
			"displayName": "Home",
			"name": "Home",
			"type": "boolean",
			"default": "yes",
			"routing": {
				"send": {
					"property": "Home",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Loans"
					]
				}
			}
		},
		{
			"displayName": "Keywords",
			"name": "Keywords",
			"type": "json",
			"default": "[\n  \"paris\",\n  \"comptabilité\"\n]",
			"routing": {
				"send": {
					"property": "Keywords",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Loans"
					]
				}
			}
		},
		{
			"displayName": "Level",
			"name": "Level",
			"type": "options",
			"default": "confidential",
			"options": [
				{
					"name": "Confidential",
					"value": "confidential"
				},
				{
					"name": "Regular",
					"value": "regular"
				},
				{
					"name": "Public",
					"value": "public"
				}
			],
			"routing": {
				"send": {
					"property": "Level",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Loans"
					]
				}
			}
		},
		{
			"displayName": "Months Number",
			"name": "MonthsNumber",
			"type": "number",
			"default": 12,
			"routing": {
				"send": {
					"property": "MonthsNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Loans"
					]
				}
			}
		},
		{
			"displayName": "Rate",
			"name": "Rate",
			"type": "number",
			"default": 2.5,
			"routing": {
				"send": {
					"property": "Rate",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Loans"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "Start",
			"type": "string",
			"default": "20180630",
			"routing": {
				"send": {
					"property": "Start",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Loans"
					]
				}
			}
		},
		{
			"displayName": "Total Cost",
			"name": "TotalCost",
			"type": "number",
			"default": 10200,
			"routing": {
				"send": {
					"property": "TotalCost",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Loans"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/legal-entities/{id}/loans/all",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Loans All"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the loan",
			"default": "T15646476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Loans All"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Loans All"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/legal-entities/{id}/providers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Providers"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the provider or memberId",
			"default": "P15646476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Providers"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Providers"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{spaceId}/legal-entities/{id}/providers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Providers"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the provider or memberId",
			"default": "P1987HGFA46",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Providers"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Providers"
					]
				}
			}
		},
		{
			"displayName": "About",
			"name": "About",
			"type": "string",
			"default": "<b> Mon premier dossier </b>",
			"routing": {
				"send": {
					"property": "About",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Providers"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "pieces company",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Providers"
					]
				}
			}
		},
		{
			"displayName": "Designation",
			"name": "Designation",
			"type": "string",
			"default": "client pièces détachées",
			"routing": {
				"send": {
					"property": "Designation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Providers"
					]
				}
			}
		},
		{
			"displayName": "End",
			"name": "End",
			"type": "string",
			"default": "20190101",
			"routing": {
				"send": {
					"property": "End",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Providers"
					]
				}
			}
		},
		{
			"displayName": "Home",
			"name": "Home",
			"type": "boolean",
			"default": "yes",
			"routing": {
				"send": {
					"property": "Home",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Providers"
					]
				}
			}
		},
		{
			"displayName": "Keywords",
			"name": "Keywords",
			"type": "json",
			"default": "[\n  \"paris\",\n  \"comptabilité\"\n]",
			"routing": {
				"send": {
					"property": "Keywords",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Providers"
					]
				}
			}
		},
		{
			"displayName": "Level",
			"name": "Level",
			"type": "options",
			"default": "confidential",
			"options": [
				{
					"name": "Confidential",
					"value": "confidential"
				},
				{
					"name": "Regular",
					"value": "regular"
				},
				{
					"name": "Public",
					"value": "public"
				}
			],
			"routing": {
				"send": {
					"property": "Level",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Providers"
					]
				}
			}
		},
		{
			"displayName": "Provider Number",
			"name": "ProviderNumber",
			"type": "string",
			"default": "13587449420F",
			"routing": {
				"send": {
					"property": "ProviderNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Providers"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "Start",
			"type": "string",
			"default": "20180630",
			"routing": {
				"send": {
					"property": "Start",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Providers"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/legal-entities/{id}/providers/all",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Providers All"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the provider or memberId",
			"default": "P15646476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Providers All"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Providers All"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/legal-entities/{id}/social-regimes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Social Regimes"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the legal entity or memberId",
			"default": "P15646476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Social Regimes"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Social Regimes"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{spaceId}/legal-entities/{id}/social-regimes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Social Regimes"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the legal entity or memberId",
			"default": "P1987HGFA46",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Social Regimes"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Social Regimes"
					]
				}
			}
		},
		{
			"displayName": "About",
			"name": "About",
			"type": "string",
			"default": "<b> Mon premier dossier </b>",
			"routing": {
				"send": {
					"property": "About",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Social Regimes"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "pieces company",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Social Regimes"
					]
				}
			}
		},
		{
			"displayName": "Designation",
			"name": "Designation",
			"type": "string",
			"default": "client pièces détachées",
			"routing": {
				"send": {
					"property": "Designation",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Social Regimes"
					]
				}
			}
		},
		{
			"displayName": "End",
			"name": "End",
			"type": "string",
			"default": "20190101",
			"routing": {
				"send": {
					"property": "End",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Social Regimes"
					]
				}
			}
		},
		{
			"displayName": "Home",
			"name": "Home",
			"type": "boolean",
			"default": "yes",
			"routing": {
				"send": {
					"property": "Home",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Social Regimes"
					]
				}
			}
		},
		{
			"displayName": "Keywords",
			"name": "Keywords",
			"type": "json",
			"default": "[\n  \"paris\",\n  \"comptabilité\"\n]",
			"routing": {
				"send": {
					"property": "Keywords",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Social Regimes"
					]
				}
			}
		},
		{
			"displayName": "Level",
			"name": "Level",
			"type": "options",
			"default": "confidential",
			"options": [
				{
					"name": "Confidential",
					"value": "confidential"
				},
				{
					"name": "Regular",
					"value": "regular"
				},
				{
					"name": "Public",
					"value": "public"
				}
			],
			"routing": {
				"send": {
					"property": "Level",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Social Regimes"
					]
				}
			}
		},
		{
			"displayName": "Periodicity",
			"name": "Periodicity",
			"type": "options",
			"default": "monthly",
			"options": [
				{
					"name": "Monthly",
					"value": "monthly"
				},
				{
					"name": "Quarterly",
					"value": "quarterly"
				},
				{
					"name": "Half Yearly",
					"value": "half-yearly"
				},
				{
					"name": "Annual",
					"value": "annual"
				},
				{
					"name": "Null",
					"value": "null"
				}
			],
			"routing": {
				"send": {
					"property": "Periodicity",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Social Regimes"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "Start",
			"type": "string",
			"default": "20180630",
			"routing": {
				"send": {
					"property": "Start",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Social Regimes"
					]
				}
			}
		},
		{
			"displayName": "Type",
			"name": "Type",
			"type": "options",
			"default": "mandatory",
			"options": [
				{
					"name": "Mandatory",
					"value": "mandatory"
				},
				{
					"name": "Optional",
					"value": "optional"
				},
				{
					"name": "Null",
					"value": "null"
				}
			],
			"routing": {
				"send": {
					"property": "Type",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Legal Entities Social Regimes"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/legal-entities/{id}/social-regimes/all",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Social Regimes All"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the legal entity or memberId",
			"default": "P15646476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Social Regimes All"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Legal Entities Social Regimes All"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/loans",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Loans"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Loans"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/loans/all",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Loans All"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Loans All"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{spaceId}/persons/{id}/call-for-document",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons Call For Document"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the person",
			"default": "P198NFNIAJFAA46",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons Call For Document"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons Call For Document"
					]
				}
			}
		},
		{
			"displayName": "Categories",
			"name": "Categories",
			"type": "json",
			"default": "[\n  [\n    \"ID\",\n    \"Invoices\"\n  ]\n]",
			"routing": {
				"send": {
					"property": "Categories",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons Call For Document"
					]
				}
			}
		},
		{
			"displayName": "Client Management",
			"name": "ClientManagement",
			"type": "options",
			"default": "no",
			"options": [
				{
					"name": "No",
					"value": "no"
				},
				{
					"name": "Manager",
					"value": "manager"
				},
				{
					"name": "Adn",
					"value": "adn"
				}
			],
			"routing": {
				"send": {
					"property": "ClientManagement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons Call For Document"
					]
				}
			}
		},
		{
			"displayName": "Is Admin",
			"name": "IsAdmin",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "IsAdmin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons Call For Document"
					]
				}
			}
		},
		{
			"displayName": "Player",
			"name": "Player",
			"type": "options",
			"default": "guest",
			"options": [
				{
					"name": "Guest",
					"value": "guest"
				},
				{
					"name": "Owner",
					"value": "owner"
				},
				{
					"name": "Manager",
					"value": "manager"
				},
				{
					"name": "Assistant",
					"value": "assistant"
				},
				{
					"name": "Collaborator",
					"value": "collaborator"
				}
			],
			"routing": {
				"send": {
					"property": "Player",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons Call For Document"
					]
				}
			}
		},
		{
			"displayName": "Player End",
			"name": "PlayerEnd",
			"type": "string",
			"default": "20190601",
			"routing": {
				"send": {
					"property": "PlayerEnd",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons Call For Document"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{spaceId}/persons/{id}/call-for-document",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Call For Document"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the person or memberId",
			"default": "P198NFNIAJFAA46",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Call For Document"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Call For Document"
					]
				}
			}
		},
		{
			"displayName": "Categories",
			"name": "Categories",
			"type": "json",
			"default": "[\n  \"ID\",\n  \"Invoices\"\n]",
			"routing": {
				"send": {
					"property": "Categories",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Call For Document"
					]
				}
			}
		},
		{
			"displayName": "Client Management",
			"name": "ClientManagement",
			"type": "options",
			"default": "no",
			"options": [
				{
					"name": "No",
					"value": "no"
				},
				{
					"name": "Manager",
					"value": "manager"
				},
				{
					"name": "Adn",
					"value": "adn"
				}
			],
			"routing": {
				"send": {
					"property": "ClientManagement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Call For Document"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "first invitation",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Call For Document"
					]
				}
			}
		},
		{
			"displayName": "Contact",
			"name": "Contact",
			"type": "string",
			"default": "Dupond",
			"routing": {
				"send": {
					"property": "Contact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Call For Document"
					]
				}
			}
		},
		{
			"displayName": "Is Admin",
			"name": "IsAdmin",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "IsAdmin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Call For Document"
					]
				}
			}
		},
		{
			"displayName": "Message",
			"name": "Message",
			"type": "string",
			"default": "<p> Bienvenue dans l'espace de l'entreprise SOCIETE </p>",
			"routing": {
				"send": {
					"property": "Message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Call For Document"
					]
				}
			}
		},
		{
			"displayName": "Player",
			"name": "Player",
			"type": "options",
			"default": "guest",
			"options": [
				{
					"name": "Guest",
					"value": "guest"
				},
				{
					"name": "Owner",
					"value": "owner"
				},
				{
					"name": "Manager",
					"value": "manager"
				},
				{
					"name": "Assistant",
					"value": "assistant"
				},
				{
					"name": "Collaborator",
					"value": "collaborator"
				}
			],
			"routing": {
				"send": {
					"property": "Player",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Call For Document"
					]
				}
			}
		},
		{
			"displayName": "Player End",
			"name": "PlayerEnd",
			"type": "string",
			"default": "20190601",
			"routing": {
				"send": {
					"property": "PlayerEnd",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Call For Document"
					]
				}
			}
		},
		{
			"displayName": "Signature",
			"name": "Signature",
			"type": "string",
			"default": "cordialement",
			"routing": {
				"send": {
					"property": "Signature",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Call For Document"
					]
				}
			}
		},
		{
			"displayName": "Subject",
			"name": "Subject",
			"type": "string",
			"default": "invitation sur le coffre",
			"routing": {
				"send": {
					"property": "Subject",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Call For Document"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/persons/{id}/employees",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Persons Employees"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the person or memberId",
			"default": "P15HBGUFA76",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Persons Employees"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Persons Employees"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{spaceId}/persons/{id}/employees",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Employees"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the employee",
			"default": "P198JFUAFA46",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Employees"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Employees"
					]
				}
			}
		},
		{
			"displayName": "About",
			"name": "About",
			"type": "string",
			"default": "<b> Mon premier dossier </b>",
			"routing": {
				"send": {
					"property": "About",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Employees"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "pieces company",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Employees"
					]
				}
			}
		},
		{
			"displayName": "Contract Type",
			"name": "ContractType",
			"type": "string",
			"default": "01",
			"routing": {
				"send": {
					"property": "ContractType",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Employees"
					]
				}
			}
		},
		{
			"displayName": "Employee Number",
			"name": "EmployeeNumber",
			"type": "string",
			"default": "13587FAZCD420F",
			"routing": {
				"send": {
					"property": "EmployeeNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Employees"
					]
				}
			}
		},
		{
			"displayName": "End",
			"name": "End",
			"type": "string",
			"default": "20190101",
			"routing": {
				"send": {
					"property": "End",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Employees"
					]
				}
			}
		},
		{
			"displayName": "Function",
			"name": "Function",
			"type": "string",
			"default": "commercial",
			"routing": {
				"send": {
					"property": "Function",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Employees"
					]
				}
			}
		},
		{
			"displayName": "Home",
			"name": "Home",
			"type": "boolean",
			"default": "yes",
			"routing": {
				"send": {
					"property": "Home",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Employees"
					]
				}
			}
		},
		{
			"displayName": "Keywords",
			"name": "Keywords",
			"type": "json",
			"default": "[\n  \"paris\",\n  \"comptabilité\"\n]",
			"routing": {
				"send": {
					"property": "Keywords",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Employees"
					]
				}
			}
		},
		{
			"displayName": "Level",
			"name": "Level",
			"type": "options",
			"default": "confidential",
			"options": [
				{
					"name": "Confidential",
					"value": "confidential"
				},
				{
					"name": "Regular",
					"value": "regular"
				},
				{
					"name": "Public",
					"value": "public"
				}
			],
			"routing": {
				"send": {
					"property": "Level",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Employees"
					]
				}
			}
		},
		{
			"displayName": "Postal Mail",
			"name": "PostalMail",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "PostalMail",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Employees"
					]
				}
			}
		},
		{
			"displayName": "SS Number",
			"name": "SSNumber",
			"type": "string",
			"default": "1542012365985215",
			"routing": {
				"send": {
					"property": "SSNumber",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Employees"
					]
				}
			}
		},
		{
			"displayName": "Start",
			"name": "Start",
			"type": "string",
			"default": "20180630",
			"routing": {
				"send": {
					"property": "Start",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Employees"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/persons/{id}/employees/all",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Persons Employees All"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the person or memberId",
			"default": "P15HBGUFA76",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Persons Employees All"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Persons Employees All"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/persons/{id}/exchange",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Persons Exchange"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the person or memberId",
			"default": "T15646IFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Persons Exchange"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Persons Exchange"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/persons/{id}/follow-ups",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Persons Follow Ups"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the person or memberId",
			"default": "T15646IFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Persons Follow Ups"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Persons Follow Ups"
					]
				}
			}
		},
		{
			"displayName": "DELETE /spaces/{spaceId}/persons/{id}/guest-in-space",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Persons Guest In Space"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the person",
			"default": "P198NFNIAJFAA46",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Persons Guest In Space"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Persons Guest In Space"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{spaceId}/persons/{id}/guest-in-space",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons Guest In Space"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the person",
			"default": "P198NFNIAJFAA46",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons Guest In Space"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons Guest In Space"
					]
				}
			}
		},
		{
			"displayName": "Client Management",
			"name": "ClientManagement",
			"type": "options",
			"default": "no",
			"options": [
				{
					"name": "No",
					"value": "no"
				},
				{
					"name": "Manager",
					"value": "manager"
				},
				{
					"name": "Adn",
					"value": "adn"
				}
			],
			"routing": {
				"send": {
					"property": "ClientManagement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons Guest In Space"
					]
				}
			}
		},
		{
			"displayName": "Folders",
			"name": "Folders",
			"type": "json",
			"default": "[\n  {\n    \"Id\": \"PK8481482\",\n    \"Right\": \"read\"\n  }\n]",
			"routing": {
				"send": {
					"property": "Folders",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons Guest In Space"
					]
				}
			}
		},
		{
			"displayName": "Group Ids",
			"name": "GroupIds",
			"type": "json",
			"default": "[\n  [\n    \"PJFIA84\",\n    \"PHAJHFJHA\"\n  ]\n]",
			"routing": {
				"send": {
					"property": "GroupIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons Guest In Space"
					]
				}
			}
		},
		{
			"displayName": "Is Admin",
			"name": "IsAdmin",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "IsAdmin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons Guest In Space"
					]
				}
			}
		},
		{
			"displayName": "Player",
			"name": "Player",
			"type": "options",
			"default": "guest",
			"options": [
				{
					"name": "Guest",
					"value": "guest"
				},
				{
					"name": "Owner",
					"value": "owner"
				},
				{
					"name": "Manager",
					"value": "manager"
				},
				{
					"name": "Assistant",
					"value": "assistant"
				},
				{
					"name": "Collaborator",
					"value": "collaborator"
				}
			],
			"routing": {
				"send": {
					"property": "Player",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons Guest In Space"
					]
				}
			}
		},
		{
			"displayName": "Player End",
			"name": "PlayerEnd",
			"type": "string",
			"default": "20190601",
			"routing": {
				"send": {
					"property": "PlayerEnd",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons Guest In Space"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{spaceId}/persons/{id}/guest-in-space",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Guest In Space"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the person",
			"default": "P198NFNIAJFAA46",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Guest In Space"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Guest In Space"
					]
				}
			}
		},
		{
			"displayName": "Client Management",
			"name": "ClientManagement",
			"type": "options",
			"default": "no",
			"options": [
				{
					"name": "No",
					"value": "no"
				},
				{
					"name": "Manager",
					"value": "manager"
				},
				{
					"name": "Adn",
					"value": "adn"
				}
			],
			"routing": {
				"send": {
					"property": "ClientManagement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Guest In Space"
					]
				}
			}
		},
		{
			"displayName": "Comment",
			"name": "Comment",
			"type": "string",
			"default": "first invitation",
			"routing": {
				"send": {
					"property": "Comment",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Guest In Space"
					]
				}
			}
		},
		{
			"displayName": "Contact",
			"name": "Contact",
			"type": "string",
			"default": "Dupond",
			"routing": {
				"send": {
					"property": "Contact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Guest In Space"
					]
				}
			}
		},
		{
			"displayName": "Folders",
			"name": "Folders",
			"type": "json",
			"default": "[\n  {\n    \"Id\": \"PK8481482\",\n    \"Right\": \"read\"\n  }\n]",
			"routing": {
				"send": {
					"property": "Folders",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Guest In Space"
					]
				}
			}
		},
		{
			"displayName": "Group Ids",
			"name": "GroupIds",
			"type": "json",
			"default": "[\n  [\n    \"PJFIA84\",\n    \"PHAJHFJHA\"\n  ]\n]",
			"routing": {
				"send": {
					"property": "GroupIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Guest In Space"
					]
				}
			}
		},
		{
			"displayName": "Is Admin",
			"name": "IsAdmin",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "IsAdmin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Guest In Space"
					]
				}
			}
		},
		{
			"displayName": "Member ID",
			"name": "MemberId",
			"type": "string",
			"default": "PAIHIHFA79TFA",
			"routing": {
				"send": {
					"property": "MemberId",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Guest In Space"
					]
				}
			}
		},
		{
			"displayName": "Message",
			"name": "Message",
			"type": "string",
			"default": "<p> Bienvenue dans l'espace de l'entreprise SOCIETE </p>",
			"routing": {
				"send": {
					"property": "Message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Guest In Space"
					]
				}
			}
		},
		{
			"displayName": "Player",
			"name": "Player",
			"type": "options",
			"default": "guest",
			"options": [
				{
					"name": "Guest",
					"value": "guest"
				},
				{
					"name": "Owner",
					"value": "owner"
				},
				{
					"name": "Manager",
					"value": "manager"
				},
				{
					"name": "Assistant",
					"value": "assistant"
				},
				{
					"name": "Collaborator",
					"value": "collaborator"
				}
			],
			"routing": {
				"send": {
					"property": "Player",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Guest In Space"
					]
				}
			}
		},
		{
			"displayName": "Player End",
			"name": "PlayerEnd",
			"type": "string",
			"default": "20190601",
			"routing": {
				"send": {
					"property": "PlayerEnd",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Guest In Space"
					]
				}
			}
		},
		{
			"displayName": "Signature",
			"name": "Signature",
			"type": "string",
			"default": "cordialement",
			"routing": {
				"send": {
					"property": "Signature",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Guest In Space"
					]
				}
			}
		},
		{
			"displayName": "Subject",
			"name": "Subject",
			"type": "string",
			"default": "invitation sur le coffre",
			"routing": {
				"send": {
					"property": "Subject",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Guest In Space"
					]
				}
			}
		},
		{
			"displayName": "DELETE /spaces/{spaceId}/persons/{id}/invitation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Persons Invitation"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the person",
			"default": "P198NFNIAJFAA46",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Persons Invitation"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"DELETE Spaces Persons Invitation"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/persons/{id}/invitation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Persons Invitation"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the person",
			"default": "P198NFNIAJFAA46",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Persons Invitation"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Persons Invitation"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{spaceId}/persons/{id}/invitation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons Invitation"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the person",
			"default": "P198NFNIAJFAA46",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons Invitation"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons Invitation"
					]
				}
			}
		},
		{
			"displayName": "Client Management",
			"name": "ClientManagement",
			"type": "options",
			"default": "no",
			"options": [
				{
					"name": "No",
					"value": "no"
				},
				{
					"name": "Manager",
					"value": "manager"
				},
				{
					"name": "Adn",
					"value": "adn"
				}
			],
			"routing": {
				"send": {
					"property": "ClientManagement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons Invitation"
					]
				}
			}
		},
		{
			"displayName": "Employee Access",
			"name": "EmployeeAccess",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "EmployeeAccess",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons Invitation"
					]
				}
			}
		},
		{
			"displayName": "Folders",
			"name": "Folders",
			"type": "json",
			"default": "[\n  {\n    \"Id\": \"PK8481482\",\n    \"Right\": \"read\"\n  }\n]",
			"routing": {
				"send": {
					"property": "Folders",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons Invitation"
					]
				}
			}
		},
		{
			"displayName": "Group Ids",
			"name": "GroupIds",
			"type": "json",
			"default": "[\n  [\n    \"PJFIA84\",\n    \"PHAJHFJHA\"\n  ]\n]",
			"routing": {
				"send": {
					"property": "GroupIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons Invitation"
					]
				}
			}
		},
		{
			"displayName": "Is Admin",
			"name": "IsAdmin",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "IsAdmin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons Invitation"
					]
				}
			}
		},
		{
			"displayName": "Player",
			"name": "Player",
			"type": "options",
			"default": "guest",
			"options": [
				{
					"name": "Guest",
					"value": "guest"
				},
				{
					"name": "Owner",
					"value": "owner"
				},
				{
					"name": "Manager",
					"value": "manager"
				},
				{
					"name": "Assistant",
					"value": "assistant"
				},
				{
					"name": "Collaborator",
					"value": "collaborator"
				}
			],
			"routing": {
				"send": {
					"property": "Player",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons Invitation"
					]
				}
			}
		},
		{
			"displayName": "Player End",
			"name": "PlayerEnd",
			"type": "string",
			"default": "20190601",
			"routing": {
				"send": {
					"property": "PlayerEnd",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons Invitation"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{spaceId}/persons/{id}/invitation",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Invitation"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the person",
			"default": "P198NFNIAJFAA46",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Invitation"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Invitation"
					]
				}
			}
		},
		{
			"displayName": "Client Management",
			"name": "ClientManagement",
			"type": "options",
			"default": "no",
			"options": [
				{
					"name": "No",
					"value": "no"
				},
				{
					"name": "Manager",
					"value": "manager"
				},
				{
					"name": "Adn",
					"value": "adn"
				}
			],
			"routing": {
				"send": {
					"property": "ClientManagement",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Invitation"
					]
				}
			}
		},
		{
			"displayName": "Employee Access",
			"name": "EmployeeAccess",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "EmployeeAccess",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Invitation"
					]
				}
			}
		},
		{
			"displayName": "Folders",
			"name": "Folders",
			"type": "json",
			"default": "[\n  {\n    \"Id\": \"PK8481482\",\n    \"Right\": \"read\"\n  }\n]",
			"routing": {
				"send": {
					"property": "Folders",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Invitation"
					]
				}
			}
		},
		{
			"displayName": "Group Ids",
			"name": "GroupIds",
			"type": "json",
			"default": "[\n  [\n    \"PJFIA84\",\n    \"PHAJHFJHA\"\n  ]\n]",
			"routing": {
				"send": {
					"property": "GroupIds",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Invitation"
					]
				}
			}
		},
		{
			"displayName": "Is Admin",
			"name": "IsAdmin",
			"type": "boolean",
			"default": true,
			"routing": {
				"send": {
					"property": "IsAdmin",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Invitation"
					]
				}
			}
		},
		{
			"displayName": "Player",
			"name": "Player",
			"type": "options",
			"default": "guest",
			"options": [
				{
					"name": "Guest",
					"value": "guest"
				},
				{
					"name": "Owner",
					"value": "owner"
				},
				{
					"name": "Manager",
					"value": "manager"
				},
				{
					"name": "Assistant",
					"value": "assistant"
				},
				{
					"name": "Collaborator",
					"value": "collaborator"
				}
			],
			"routing": {
				"send": {
					"property": "Player",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Invitation"
					]
				}
			}
		},
		{
			"displayName": "Player End",
			"name": "PlayerEnd",
			"type": "string",
			"default": "20190601",
			"routing": {
				"send": {
					"property": "PlayerEnd",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Invitation"
					]
				}
			}
		},
		{
			"displayName": "POST /spaces/{spaceId}/persons/{id}/invitation/{invitationId}/send",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Invitation Send"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the person",
			"default": "P198NFNIAJFAA46",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Invitation Send"
					]
				}
			}
		},
		{
			"displayName": "Invitation ID",
			"name": "invitationId",
			"required": true,
			"description": "Id of the invitation",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Invitation Send"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Invitation Send"
					]
				}
			}
		},
		{
			"displayName": "Contact",
			"name": "Contact",
			"type": "string",
			"default": "Dupond",
			"routing": {
				"send": {
					"property": "Contact",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Invitation Send"
					]
				}
			}
		},
		{
			"displayName": "Message",
			"name": "Message",
			"type": "string",
			"default": "<p> Bienvenue dans l'espace de l'envtreprise SOCIETE </p>",
			"routing": {
				"send": {
					"property": "Message",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Invitation Send"
					]
				}
			}
		},
		{
			"displayName": "Signature",
			"name": "Signature",
			"type": "string",
			"default": "cordialement",
			"routing": {
				"send": {
					"property": "Signature",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Invitation Send"
					]
				}
			}
		},
		{
			"displayName": "Subject",
			"name": "Subject",
			"type": "string",
			"default": "invitation sur le coffre",
			"routing": {
				"send": {
					"property": "Subject",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"POST Spaces Persons Invitation Send"
					]
				}
			}
		},
		{
			"displayName": "PATCH /spaces/{spaceId}/persons/{memberId}/folders/{id}",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons Folders"
					]
				}
			}
		},
		{
			"displayName": "ID",
			"name": "id",
			"required": true,
			"description": "Id of the folder",
			"default": "T18784",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons Folders"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons Folders"
					]
				}
			}
		},
		{
			"displayName": "Member ID",
			"name": "memberId",
			"required": true,
			"description": "memberId of the person",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons Folders"
					]
				}
			}
		},
		{
			"displayName": "About",
			"name": "About",
			"type": "string",
			"default": "<b> Mon premier dossier </b>",
			"routing": {
				"send": {
					"property": "About",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons Folders"
					]
				}
			}
		},
		{
			"displayName": "Home",
			"name": "Home",
			"type": "boolean",
			"default": "yes",
			"routing": {
				"send": {
					"property": "Home",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons Folders"
					]
				}
			}
		},
		{
			"displayName": "Keywords",
			"name": "Keywords",
			"type": "json",
			"default": "[\n  \"paris\",\n  \"comptabilité\"\n]",
			"routing": {
				"send": {
					"property": "Keywords",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ JSON.parse($value) }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons Folders"
					]
				}
			}
		},
		{
			"displayName": "Level",
			"name": "Level",
			"type": "options",
			"default": "confidential",
			"options": [
				{
					"name": "Confidential",
					"value": "confidential"
				},
				{
					"name": "Regular",
					"value": "regular"
				},
				{
					"name": "Public",
					"value": "public"
				}
			],
			"routing": {
				"send": {
					"property": "Level",
					"propertyInDotNotation": false,
					"type": "body",
					"value": "={{ $value }}"
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"PATCH Spaces Persons Folders"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/providers",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Providers"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Providers"
					]
				}
			}
		},
		{
			"displayName": "With Contracting Partner",
			"name": "WithContractingPartner",
			"description": "if present returns infos of the ContractingPartner too",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "WithContractingPartner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Providers"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/providers/all",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Providers All"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Providers All"
					]
				}
			}
		},
		{
			"displayName": "With Contracting Partner",
			"name": "WithContractingPartner",
			"description": "if present returns infos of the ContractingPartner too",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "WithContractingPartner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Providers All"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/search",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Search"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Search"
					]
				}
			}
		},
		{
			"displayName": "Query",
			"name": "Query",
			"description": "Text to find",
			"default": "durand",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Query",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Search"
					]
				}
			}
		},
		{
			"displayName": "Range",
			"name": "Range",
			"description": "index range of the results",
			"default": "10-19",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Range",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Search"
					]
				}
			}
		},
		{
			"displayName": "Query Context",
			"name": "QueryContext",
			"description": "context of research",
			"default": "{\n  \"Class\": \"Folder\",\n  \"Filters\": {\n    \"DocumentClass\": \"payslip\",\n    \"ExcludedFolders\": [\n      null\n    ],\n    \"IncludedFolders\": [\n      [\n        \"POJFA9492\"\n      ]\n    ]\n  }\n}",
			"type": "json",
			"routing": {
				"send": {
					"type": "query",
					"property": "QueryContext",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Search"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/social-regimes",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Social Regimes"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Social Regimes"
					]
				}
			}
		},
		{
			"displayName": "With Contracting Partner",
			"name": "WithContractingPartner",
			"description": "if present returns infos of the ContractingPartner too",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "WithContractingPartner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Social Regimes"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/social-regimes/all",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Social Regimes All"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Social Regimes All"
					]
				}
			}
		},
		{
			"displayName": "With Contracting Partner",
			"name": "WithContractingPartner",
			"description": "if present returns infos of the ContractingPartner too",
			"default": "",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "WithContractingPartner",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Social Regimes All"
					]
				}
			}
		},
		{
			"displayName": "GET /spaces/{spaceId}/spaces-invoicings",
			"name": "operation",
			"type": "notice",
			"typeOptions": {
				"theme": "info"
			},
			"default": "",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Spaces Invoicings"
					]
				}
			}
		},
		{
			"displayName": "Space ID",
			"name": "spaceId",
			"required": true,
			"description": "Id of the space",
			"default": "P156HUFHA476",
			"type": "string",
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Spaces Invoicings"
					]
				}
			}
		},
		{
			"displayName": "Date",
			"name": "Date",
			"description": "date range of the documents",
			"default": "20160321,null",
			"type": "string",
			"routing": {
				"send": {
					"type": "query",
					"property": "Date",
					"value": "={{ $value }}",
					"propertyInDotNotation": false
				}
			},
			"displayOptions": {
				"show": {
					"resource": [
						"Default"
					],
					"operation": [
						"GET Spaces Spaces Invoicings"
					]
				}
			}
		},
];
