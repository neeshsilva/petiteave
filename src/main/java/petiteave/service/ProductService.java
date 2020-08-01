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
public class ProductService {

    private Logger log = LoggerFactory.getLogger(FeedbackService.class);

    ProductRepository productRepository;
    CustomerRepository customerRepository;

    public ProductService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }


    public Product validateProduct(Product productObj) {

        List<Product> products = productRepository.findAll();

        for (Product product : products) {
            if (product.getName().equals(productObj.getName())) {
                return product;
            }
        }

        return new Product();
    }

}
