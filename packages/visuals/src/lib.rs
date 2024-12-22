use wasm_bindgen::prelude::*;

/// LagrangeInterpolator for finding 4 nearest points and interpolating
#[wasm_bindgen]
pub struct LagrangeInterpolator {
    x_points: Vec<f64>,
    y_points: Vec<f64>,
}

#[wasm_bindgen]
impl LagrangeInterpolator {
    #[wasm_bindgen(constructor)]
    pub fn new(x_points: Vec<f64>, y_points: Vec<f64>) -> LagrangeInterpolator {
        if x_points.len() != y_points.len() {
            panic!("x_points and y_points must have the same length");
        }
        LagrangeInterpolator { x_points, y_points }
    }

    pub fn interpolate(&self, x: f64) -> f64 {
        let points = self.find_nearest_points(x);
        let (x_subset, y_subset): (Vec<f64>, Vec<f64>) = points.into_iter().unzip();
        self.lagrange_interpolation(x, &x_subset, &y_subset)
    }

    fn find_nearest_points(&self, x: f64) -> Vec<(f64, f64)> {
        let n = self.x_points.len();
        let mut idx = self
            .x_points
            .binary_search_by(|&point| point.partial_cmp(&x).unwrap())
            .unwrap_or_else(|e| e);

        if idx >= n {
            idx = n - 1;
        }

        let mut left = if idx > 0 { idx - 1 } else { 0 };
        let mut right = idx;
        let mut nearest_points = Vec::new();

        while nearest_points.len() < 4 {
            if (nearest_points.len() < 2 || right >= n) {
                nearest_points.push((self.x_points[left], self.y_points[left]));
                if left > 0 {
                    left -= 1;
                } else {
                    break;
                }
            }

            if right < n && (nearest_points.len() < 4) {
                nearest_points.push((self.x_points[right], self.y_points[right]));
                right += 1;
            }
        }

        if nearest_points.len() < 4 {
            if left == 0 {
                while nearest_points.len() < 4 && right < n {
                    nearest_points.push((self.x_points[right], self.y_points[right]));
                    right += 1;
                }
            } else if right == n {
                while nearest_points.len() < 4 && left > 0 {
                    nearest_points.push((self.x_points[left], self.y_points[left]));
                    left -= 1;
                }
            }
        }

        nearest_points.sort_by(|a, b| a.0.partial_cmp(&b.0).unwrap());
        nearest_points
    }

    fn lagrange_interpolation(&self, x: f64, x_points: &[f64], y_points: &[f64]) -> f64 {
        let n = x_points.len();
        let mut result = 0.0;

        for i in 0..n {
            let mut term = y_points[i];
            for j in 0..n {
                if i != j {
                    term *= (x - x_points[j]) / (x_points[i] - x_points[j]);
                }
            }
            result += term;
        }
        result
    }
}
