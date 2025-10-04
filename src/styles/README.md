# CSS Architecture Guide

## 🎯 **Naming Convention**

### **Component-Specific Classes**
Use BEM-like naming with component prefixes:
- `.contact-page__heading` (ContactPage specific)
- `.contact-section__box` (ContactSection specific)  
- `.services-page__card` (ServicesPage specific)

### **Shared Component Classes**
Use semantic, reusable class names:
- `.card` - Base card component
- `.card--compact` - Card variant
- `.form-field` - Form input styling
- `.form-button` - Form button styling
- `.section-heading` - Section titles

### **Utility Classes**
- `.success-message` - Success notifications
- `.error-message` - Error notifications
- `.hidden` / `.show` - Animation utilities

## 📁 **File Organization**

```
src/styles/
├── shared.css          # Reusable components
├── variables.css       # CSS custom properties
└── components/         # Component-specific styles
    ├── ContactPage.css
    ├── ContactSection.css
    └── ServicesPage.css
```

## 🔧 **Usage Examples**

### **Before (Conflicting):**
```css
/* ContactPage.css */
.contact-heading { ... }

/* ContactSection.css */  
.contact-heading { ... } /* CONFLICT! */
```

### **After (Organized):**
```css
/* ContactPage.css */
.contact-page__heading { ... }

/* ContactSection.css */
.contact-section__heading { ... }

/* shared.css */
.section-heading { ... } /* Reusable */
```

## 🚀 **Migration Strategy**

1. **Phase 1**: Create shared components ✅
2. **Phase 2**: Update component CSS files to use new naming
3. **Phase 3**: Remove duplicate styles
4. **Phase 4**: Update React components to use new class names

## ⚡ **Benefits**

- ✅ No more CSS conflicts
- ✅ Predictable styling behavior  
- ✅ Easier maintenance
- ✅ Reusable components
- ✅ Better performance (less CSS)
