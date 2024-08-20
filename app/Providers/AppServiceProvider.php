<?php

namespace App\Providers;

use App\Contracts\MenuInterface;
use App\Contracts\ReservationInterface;
use App\Services\MenuService;
use App\Services\ReservationService;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        Inertia::share('app', [
            'name' => config('app.name'),
            'url' => config('app.url'),
        ]);

        $this->app->singleton(MenuInterface::class, MenuService::class);

        $this->app->singleton(ReservationInterface::class, ReservationService::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
