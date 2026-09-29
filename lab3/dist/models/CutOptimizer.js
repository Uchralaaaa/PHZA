export class CutOptimizer {
    static optimizeCutting(material, items) {
        let totalUsedArea = 0;
        items.forEach(item => {
            totalUsedArea += item.width * item.height;
        });
        return totalUsedArea <= material.getTotalArea();
    }
}
