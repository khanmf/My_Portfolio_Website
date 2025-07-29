#!/usr/bin/env python3
"""
Backend API Testing Script for Contact Form Functionality
Tests the contact form endpoints with various scenarios including validation and error handling.
"""

import requests
import json
import sys
from datetime import datetime
import uuid

# Get backend URL from environment
BACKEND_URL = "https://dbc36d73-4ead-4113-a8e7-42427dfdf550.preview.emergentagent.com/api"

def print_test_header(test_name):
    """Print a formatted test header"""
    print(f"\n{'='*60}")
    print(f"TEST: {test_name}")
    print(f"{'='*60}")

def print_result(success, message, details=None):
    """Print test result with formatting"""
    status = "✅ PASS" if success else "❌ FAIL"
    print(f"{status}: {message}")
    if details:
        print(f"Details: {details}")

def test_valid_contact_submission():
    """Test POST /api/contact with valid data"""
    print_test_header("Valid Contact Form Submission")
    
    # Test data as specified in the request
    test_data = {
        "name": "John Doe",
        "email": "john.doe@example.com",
        "subject": "Test Inquiry",
        "project_type": "Scientific Writing",
        "budget": "$1,000 - $5,000",
        "timeline": "2-3 weeks",
        "message": "This is a test message for the contact form functionality."
    }
    
    try:
        response = requests.post(f"{BACKEND_URL}/contact", json=test_data, timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            # Verify response structure
            required_fields = ['id', 'name', 'email', 'subject', 'message', 'timestamp', 'status']
            missing_fields = [field for field in required_fields if field not in data]
            
            if not missing_fields:
                print_result(True, "Contact form submitted successfully")
                print(f"Submission ID: {data.get('id')}")
                print(f"Timestamp: {data.get('timestamp')}")
                print(f"Status: {data.get('status')}")
                return data.get('id')  # Return ID for later tests
            else:
                print_result(False, f"Response missing required fields: {missing_fields}")
                return None
        else:
            print_result(False, f"HTTP {response.status_code}: {response.text}")
            return None
            
    except requests.exceptions.RequestException as e:
        print_result(False, f"Request failed: {str(e)}")
        return None

def test_get_all_submissions():
    """Test GET /api/contact to retrieve all submissions"""
    print_test_header("Get All Contact Submissions")
    
    try:
        response = requests.get(f"{BACKEND_URL}/contact", timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if isinstance(data, list):
                print_result(True, f"Retrieved {len(data)} contact submissions")
                if data:
                    # Verify structure of first submission
                    first_submission = data[0]
                    required_fields = ['id', 'name', 'email', 'subject', 'message']
                    missing_fields = [field for field in required_fields if field not in first_submission]
                    if not missing_fields:
                        print("✓ Submission structure is valid")
                    else:
                        print(f"⚠ Missing fields in submission: {missing_fields}")
                return True
            else:
                print_result(False, "Response is not a list")
                return False
        else:
            print_result(False, f"HTTP {response.status_code}: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        print_result(False, f"Request failed: {str(e)}")
        return False

def test_get_specific_submission(submission_id):
    """Test GET /api/contact/{id} to retrieve specific submission"""
    print_test_header("Get Specific Contact Submission")
    
    if not submission_id:
        print_result(False, "No submission ID provided for testing")
        return False
    
    try:
        response = requests.get(f"{BACKEND_URL}/contact/{submission_id}", timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if data.get('id') == submission_id:
                print_result(True, f"Retrieved specific submission: {submission_id}")
                print(f"Name: {data.get('name')}")
                print(f"Email: {data.get('email')}")
                print(f"Subject: {data.get('subject')}")
                return True
            else:
                print_result(False, f"ID mismatch. Expected: {submission_id}, Got: {data.get('id')}")
                return False
        elif response.status_code == 404:
            print_result(False, "Submission not found (404)")
            return False
        else:
            print_result(False, f"HTTP {response.status_code}: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        print_result(False, f"Request failed: {str(e)}")
        return False

def test_required_field_validation():
    """Test validation for required fields"""
    print_test_header("Required Field Validation")
    
    # Test missing name
    test_cases = [
        {
            "name": "Missing name field",
            "data": {
                "email": "test@example.com",
                "subject": "Test Subject",
                "message": "Test message"
            }
        },
        {
            "name": "Missing email field", 
            "data": {
                "name": "Test User",
                "subject": "Test Subject",
                "message": "Test message"
            }
        },
        {
            "name": "Missing subject field",
            "data": {
                "name": "Test User",
                "email": "test@example.com", 
                "message": "Test message"
            }
        },
        {
            "name": "Missing message field",
            "data": {
                "name": "Test User",
                "email": "test@example.com",
                "subject": "Test Subject"
            }
        }
    ]
    
    validation_passed = True
    
    for test_case in test_cases:
        print(f"\nTesting: {test_case['name']}")
        try:
            response = requests.post(f"{BACKEND_URL}/contact", json=test_case['data'], timeout=10)
            
            if response.status_code == 422:  # Validation error expected
                print_result(True, "Validation correctly rejected missing required field")
            elif response.status_code == 200:
                print_result(False, "Validation should have failed but didn't")
                validation_passed = False
            else:
                print_result(False, f"Unexpected status code: {response.status_code}")
                validation_passed = False
                
        except requests.exceptions.RequestException as e:
            print_result(False, f"Request failed: {str(e)}")
            validation_passed = False
    
    return validation_passed

def test_email_format_validation():
    """Test email format validation"""
    print_test_header("Email Format Validation")
    
    invalid_emails = [
        "invalid-email",
        "test@",
        "@example.com",
        "test.example.com",
        "test@.com"
    ]
    
    validation_passed = True
    
    for invalid_email in invalid_emails:
        print(f"\nTesting invalid email: {invalid_email}")
        test_data = {
            "name": "Test User",
            "email": invalid_email,
            "subject": "Test Subject", 
            "message": "Test message"
        }
        
        try:
            response = requests.post(f"{BACKEND_URL}/contact", json=test_data, timeout=10)
            
            if response.status_code == 422:  # Validation error expected
                print_result(True, "Email validation correctly rejected invalid format")
            elif response.status_code == 200:
                print_result(False, "Email validation should have failed but didn't")
                validation_passed = False
            else:
                print_result(False, f"Unexpected status code: {response.status_code}")
                validation_passed = False
                
        except requests.exceptions.RequestException as e:
            print_result(False, f"Request failed: {str(e)}")
            validation_passed = False
    
    return validation_passed

def test_api_connectivity():
    """Test basic API connectivity"""
    print_test_header("API Connectivity Test")
    
    try:
        response = requests.get(f"{BACKEND_URL}/", timeout=10)
        
        if response.status_code == 200:
            data = response.json()
            if data.get('message') == 'Hello World':
                print_result(True, "API is accessible and responding correctly")
                return True
            else:
                print_result(False, f"Unexpected response: {data}")
                return False
        else:
            print_result(False, f"HTTP {response.status_code}: {response.text}")
            return False
            
    except requests.exceptions.RequestException as e:
        print_result(False, f"API connectivity failed: {str(e)}")
        return False

def run_all_tests():
    """Run all backend tests"""
    print("🚀 Starting Backend API Tests for Contact Form Functionality")
    print(f"Backend URL: {BACKEND_URL}")
    print(f"Test started at: {datetime.now()}")
    
    results = {}
    
    # Test 1: API Connectivity
    results['connectivity'] = test_api_connectivity()
    
    # Test 2: Valid submission
    submission_id = test_valid_contact_submission()
    results['valid_submission'] = submission_id is not None
    
    # Test 3: Get all submissions
    results['get_all'] = test_get_all_submissions()
    
    # Test 4: Get specific submission (only if we have an ID)
    results['get_specific'] = test_get_specific_submission(submission_id)
    
    # Test 5: Required field validation
    results['required_validation'] = test_required_field_validation()
    
    # Test 6: Email format validation
    results['email_validation'] = test_email_format_validation()
    
    # Summary
    print_test_header("TEST SUMMARY")
    total_tests = len(results)
    passed_tests = sum(1 for result in results.values() if result)
    
    print(f"Total Tests: {total_tests}")
    print(f"Passed: {passed_tests}")
    print(f"Failed: {total_tests - passed_tests}")
    print(f"Success Rate: {(passed_tests/total_tests)*100:.1f}%")
    
    print("\nDetailed Results:")
    for test_name, result in results.items():
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"  {test_name}: {status}")
    
    # Return overall success
    return passed_tests == total_tests

if __name__ == "__main__":
    success = run_all_tests()
    sys.exit(0 if success else 1)