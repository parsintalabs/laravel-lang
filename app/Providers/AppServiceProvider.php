<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        $default = request()->getPreferredLanguage(['en', 'id', 'zh_CN']);
        $lang = session('locale', $default);
        app()->setLocale($lang);
        \Carbon\Carbon::setLocale($lang);
    }
}
