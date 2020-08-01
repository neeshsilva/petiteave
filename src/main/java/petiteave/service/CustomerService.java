package petiteave.service;

import org.h2.util.json.JSONArray;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import petiteave.domain.Customer;
import petiteave.domain.Product;
import petiteave.repository.ProductRepository;
import petiteave.repository.CustomerRepository;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

@Service
@Transactional
public class CustomerService {

    private Logger log = LoggerFactory.getLogger(FeedbackService.class);

    CustomerRepository customerRepository;

    public CustomerService(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }


    public Customer validateCustomer(Customer customerObj) {

        List<Customer> customers = customerRepository.findAll();

        for (Customer customer : customers) {
            if (customer.getName().equals(customerObj.getName())) {
                return customer;
            }
        }


        return new Customer();
    }

}
