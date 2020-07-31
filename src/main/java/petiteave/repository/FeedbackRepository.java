package petiteave.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import petiteave.domain.Feedback;



import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * Spring Data  repository for the Feedback entity.
 */
@SuppressWarnings("unused")
@Repository
public interface FeedbackRepository extends JpaRepository<Feedback, Long> {
    Page<Feedback> findAllByCustomerUserLogin(String login, Pageable pageable);
    Optional<Feedback> findOneByIdAndCustomerUserLogin(Long id, String login);
}
