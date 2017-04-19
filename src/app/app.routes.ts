import { Routes, RouterModule } from "@angular/router";
import { HomeComponent, ContactComponent, WorkSamplesComponent,
         CodeLabComponent, BlogComponent } from "./pages/pages-barrel"

const APP_ROUTES: Routes = [
  {path: "", component: HomeComponent},
  {path: "blog", component: BlogComponent},
  {path: "contact", component: ContactComponent},
  {path: "code-lab", component: CodeLabComponent},
  {path: "work-samples", component: WorkSamplesComponent}
]

export const router = RouterModule.forRoot(APP_ROUTES)
