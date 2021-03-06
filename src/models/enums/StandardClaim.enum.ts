/**
 * This specification defines a set of standard Claims.
 *
 * @remarks
 *
 * They can be requested to be returned either in the UserInfo Response, or in
 * the ID Token
 */
export enum StandardClaim {
    /**
     * End-User's preferred postal address.
     *
     * @remarks
     *
     * The value of the address member is a JSON [RFC4627] structure containing
     * some or all of the members defined in @see {@link Address}.
     *
     */
    Address = 'address',

    /**
     * End-User's birthday, represented as an ISO 8601:2004 [ISO8601‑2004]
     * `YYYY-MM-DD` format.
     *
     * @remarks
     *
     * The year MAY be `0000`, indicating that it is omitted. To represent only
     * the year, `YYYY` format is allowed.
     */
    BirthDate = 'birthdate',

    /**
     * End-User's preferred e-mail address.
     *
     * @remarks
     *
     * Its value MUST conform to the RFC 5322 [RFC5322] addr-spec syntax. The
     * Relying Party MUST NOT rely upon this value being unique.
     */
    Email = 'email',

    /**
     * True if the End-User's e-mail address has been verified; otherwise
     * false.
     *
     * @remarks
     *
     * When this Claim Value is true, this means that the OpenID Provider took
     * affirmative steps to ensure that this e-mail address was controlled by
     * the End-User at the time the verification was performed.
     */
    EmailVerified = 'email_verified',

    /**
     * Given name(s) or first name(s) of the End-User.
     *
     * @remarks
     * Note that in some cultures, people can have multiple given names; all
     * can be present, with the names being separated by space characters.
     */
    FirstName = 'given_name',

    /**
     * End-User's gender.
     *
     * @remarks
     *
     * Values defined by this specification are female and male. Other values
     * MAY be used when neither of the defined values are applicable.
     */
    Gender = 'gender',

    /**
     * Surname(s) or last name(s) of the End-User.
     *
     * @remarks
     * Note that in some cultures, people can have multiple family names or no
     * family name; all can be present, with the names being separated by space
     * characters.
     */
    LastName = 'family_name',

    /**
     * End-User's locale, represented as a BCP47 [RFC5646] language tag.
     *
     * @remarks
     *
     * This is typically an ISO 639-1 Alpha-2 [ISO639‑1] language code in
     * owercase and an ISO 3166-1 Alpha-2 [ISO3166‑1] country code in
     * uppercase, separated by a dash. For example, en-US or fr-CA. As a
     * compatibility note, some implementations have used an underscore as the
     * separator rather than a dash, for example, en_US; Relying Parties MAY
     * choose to accept this locale syntax as well.
     */
    Locale = 'locale',

    /**
     * Middle name(s) of the End-User.
     *
     * @remarks
     * Note that in some cultures, people can have multiple middle names; all
     * can be present, with the names being separated by space characters. Also
     * note that in some cultures, middle names are not used.
     */
    MiddleName = 'middle_name',

    /**
     * End-User's full name in displayable form including all name parts,
     * possibly including titles and suffixes, ordered according to the
     * End-User's locale and preferences.
     */
    Name = 'name',

    /**
     * Casual name of the End-User that may or may not be the same as the
     * given_name.
     */
    NickName = 'nickname',

    /**
     * URL of the End-User's profile picture.
     *
     * @remarks
     *
     * This URL MUST refer to an image file (for example, a PNG, JPEG, or GIF
     * image file), rather than to a Web page containing an image.
     */
    Picture = 'picture',

    /**
     * End-User's preferred telephone number.
     *
     * @remarks
     *
     * E.164 is RECOMMENDED as the format of this Claim, for example,
     * `+1 (425) 555-1212` or `+56 (2) 687 2400`. If the phone number contains
     * an extension, it is RECOMMENDED that the extension be represented using
     * the RFC 3966 [RFC3966] extension syntax, for example,
     * `+1 (604) 555-1234;ext=5678`.
     */
    PhoneNumber = 'phone_number',

    /**
     * True if the End-User's phone number has been verified; otherwise false
     *
     * @remarks
     *
     * When this Claim Value is true, this means that the OP took affirmative
     * steps to ensure that this phone number was controlled by the End-User at
     * the time the verification was performed. The means by which a phone
     * number is verified is context-specific, and dependent upon the trust
     * framework or contractual agreements within which the parties are
     * operating. When true, the phone_number Claim MUST be in E.164 format
     * and any extensions MUST be represented in RFC 3966 format.
     */
    PhoneNumberVerified = 'phone_number_verified',

    /**
     * Shorthand name by which the End-User wishes to be referred to at the
     * Relying Party, such as janedoe or j.doe.
     *
     * @remarks
     *
     * This value MAY be any valid JSON string including special characters
     * such as @, /, or whitespace. The Relying Party MUST NOT rely upon this
     * value being unique.
     */
    PreferredUserName = 'preferred_username',

    /**
     * URL of the End-User's profile page.
     */
    Profile = 'profile',

    /**
     * The unique identifier for the end-user for a issuer/identity provider.
     */
    SubjectIdentifier = 'sub',

    /**
     * Time the End-User's information was last updated.
     *
     * @remarks
     *
     * Its value is a JSON number representing the number of seconds from
     * `1970-01-01T0:0:0Z` as measured in UTC until the date/time.
     */
    UpdatedAt = 'updated_at',

    /**
     * URL of the End-User's Web page or blog.
     */
    Website = 'website',

    /**
     * String from zoneinfo time zone database representing the End-User's time
     * zone.
     *
     * @remarks
     *
     * For example, `Europe/Paris` or `America/Los_Angeles`.
     */
    ZoneInfo = 'zoneinfo'
}
