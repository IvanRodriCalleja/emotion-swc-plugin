use swc_plugin::{ast::*, plugin_transform};

pub struct EmotionVisitor;

impl VisitMut for EmotionVisitor {
    // Implement necessary visit_mut_* methods for actual custom transform.
}

#[plugin_transform]
pub fn process_transform(program: Program, _plugin_config: String, _context: String) -> Program {
    println!("Versión 0.0.1 - emotion-swc-plugin coming soon!");
    program.fold_with(&mut as_folder(EmotionVisitor))
}
