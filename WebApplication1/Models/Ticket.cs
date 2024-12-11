using System.ComponentModel.DataAnnotations;
using WebApplication1.Enums;

namespace WebApplication1.Models
{
    public class Ticket
    {
        public int Id { get; set; }

        [Required (ErrorMessage = "Title is reqiured")]
        [StringLength(100, ErrorMessage = "Title cannot exceed 100 characters")]
        public string Title { get; set; }

        [Required (ErrorMessage = "Discription is required")]
        [StringLength(1000, ErrorMessage = "Description cannot exceed 1000 characters")]

        public string Description { get; set; }

        public DateTime CreatedDate { get; set; } = DateTime.Now;
        public DateTime UpdatedDate { get; set; } = DateTime.Now;
        public TicketStatus Status { get; set; }

        [Required(ErrorMessage = "Priority must be selected")]
        public TicketPriority Priority { get; set; }

        public string? CreatedById { get; set; }
        public string? AssignedToId { get; set; }

        [Required(ErrorMessage = "Category is required")]
        [StringLength(50, ErrorMessage = "Category cannot exceed 50 characters")] public string Category { get; set; }
        public User? CreatedBy { get; set; }
        public User? AssignedTo { get; set; }
    }
}