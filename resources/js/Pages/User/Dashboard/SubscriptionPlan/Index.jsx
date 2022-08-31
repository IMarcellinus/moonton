import Authenticated from "@/Layouts/Authenticated/Index";
import SubscriptionCard from "@/Components/SubscriptionCard";
import { Inertia } from "@inertiajs/inertia";

export default function SubscriptionPlan({ auth, subscriptionPlans }) {
    const selectSubscription = (id) => {
        Inertia.post(
            route("user.dashboard.subscriptionPlan.userSubscribe", {
                subscriptionPlan: id,
            })
        );
    };

    return (
        <Authenticated auth={auth}>
            <div className="py-20 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from
                    movies.
                </p>

                {/* <!-- Pricing Card --> */}
                <div className="flex justify-center gap-10 mt-[70px]">
                    {/* Basic */}
                    {subscriptionPlans.map((SubscriptionPlan) => (
                        <SubscriptionCard
                            name={SubscriptionPlan.name}
                            price={SubscriptionPlan.price}
                            durationInMonth={
                                SubscriptionPlan.active_period_in_months
                            }
                            features={JSON.parse(SubscriptionPlan.features)}
                            isPremium={SubscriptionPlan.name === "Premium"}
                            key={SubscriptionPlan.id}
                            onSelectSubscription={() =>
                                selectSubscription(SubscriptionPlan.id)
                            }
                        />
                    ))}
                    {/* <!-- For Greatest --> */}
                    {/* <SubscriptionCard
                        isPremium
                        name="Premium"
                        price={800000}
                        durationInMonth={6}
                        features={["Feature 1", "Feature 2", "Feature 3"]}
                    /> */}
                </div>
                {/* <!-- /Pricing Card --> */}
            </div>
        </Authenticated>
    );
}
