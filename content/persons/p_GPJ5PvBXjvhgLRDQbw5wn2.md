---
schema: wang-person/v1
id: p_GPJ5PvBXjvhgLRDQbw5wn2
status: active
merged_into: null
display_name: 王栻
revision: 12
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nGpdGf8MEYH5N5gqiaHwhp
        subject_person_id: p_GPJ5PvBXjvhgLRDQbw5wn2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王栻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4EyGbcUmzzH2qf1PjgEc8y
          claim_id: c_nGpdGf8MEYH5N5gqiaHwhp
          source_id: s_NLo5mZpLgs4MVDJkKMjgjs
          stance: supports
          locator: CBDB:201553
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201553）
          source: &a1
            id: s_NLo5mZpLgs4MVDJkKMjgjs
            source_type: api_record
            title: 中国历代人物传记资料库：王栻（CBDB 201553）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201553&o=json
            external_identifier: CBDB:201553
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.685Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_kf3dQCqr4eeAdQaTzTUpNf
        subject_person_id: p_GPJ5PvBXjvhgLRDQbw5wn2
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1469年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Woytqqdw5h2xcHSE5DfJxC
          claim_id: c_kf3dQCqr4eeAdQaTzTUpNf
          source_id: s_NLo5mZpLgs4MVDJkKMjgjs
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7Gq99VeosBg8Y9xZyJrhpD
        subject_person_id: p_GPJ5PvBXjvhgLRDQbw5wn2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王栻（生于1469年），明人物。明清進士進士，籍贯金壇，入仕進士。（中国历代人物传记资料库 CBDB 201553）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NSWxF7KdayhV57hdhrRD_-
          claim_id: c_7Gq99VeosBg8Y9xZyJrhpD
          source_id: s_NLo5mZpLgs4MVDJkKMjgjs
          stance: supports
          locator: CBDB:201553
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_n6vL9tcT-rNspw5dCHaRw-
        subject_person_id: p_VcYjKdyzjQFgG3FRqoyThA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GPJ5PvBXjvhgLRDQbw5wn2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NKYKLo9E1sn5NSncgTkQYb
          claim_id: c_n6vL9tcT-rNspw5dCHaRw-
          source_id: s_NLo5mZpLgs4MVDJkKMjgjs
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第五十九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VcYjKdyzjQFgG3FRqoyThA
        status: active
        display_name: 王完
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_k8n39VbT32JIjP0plBV1eq
        subject_person_id: p_GPJ5PvBXjvhgLRDQbw5wn2
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_D3jBdQQz5g9KZVHFuJisBk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xmprNgOIQ09j2Mb6WFYtm-
          claim_id: c_k8n39VbT32JIjP0plBV1eq
          source_id: s_HMIUbj1KjqFbhCY-k1jnSO
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第五十九名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HMIUbj1KjqFbhCY-k1jnSO
            source_type: api_record
            title: 中国历代人物传记资料库：楊氏(王栻妻)（CBDB 274249）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274249&o=json
            external_identifier: CBDB:274249
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_D3jBdQQz5g9KZVHFuJisBk
        status: active
        display_name: 楊氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_XNMBpgALXP8_DUGMzFY0Sb
        subject_person_id: p_9rXTbYHYhmBAvbpZaHj81G
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GPJ5PvBXjvhgLRDQbw5wn2
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EuMvqZQayqZqnoBR7c_EfL
          claim_id: c_XNMBpgALXP8_DUGMzFY0Sb
          source_id: s_NLo5mZpLgs4MVDJkKMjgjs
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第五十九名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9rXTbYHYhmBAvbpZaHj81G
        status: active
        display_name: 王馭
        merged_into_person_id: null
    - claim:
        id: c_I4YMU3rfOGTlDOoKvv3p0v
        subject_person_id: p_WtczkhkRScd1UzDxUThN9H
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GPJ5PvBXjvhgLRDQbw5wn2
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jILdtV-egczf-KnrEmjYQU
          claim_id: c_I4YMU3rfOGTlDOoKvv3p0v
          source_id: s_NLo5mZpLgs4MVDJkKMjgjs
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第五十九名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WtczkhkRScd1UzDxUThN9H
        status: active
        display_name: 王秉
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_0edpKoM75Rq0xsuJoESF-X
        subject_person_id: p_1Tdt1WHwxhhp8PtrFdTxiM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GPJ5PvBXjvhgLRDQbw5wn2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8W9b1KCM2VsNlFLcIGNlE2
          claim_id: c_0edpKoM75Rq0xsuJoESF-X
          source_id: s_cjepQGByJGX0YSILrFuw0Q
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201553 王栻）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_cjepQGByJGX0YSILrFuw0Q
            source_type: api_record
            title: 中国历代人物传记资料库：王棠（CBDB 274257）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274257&o=json
            external_identifier: CBDB:274257
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1Tdt1WHwxhhp8PtrFdTxiM
        status: active
        display_name: 王棠
        merged_into_person_id: null
    - claim:
        id: c_DTIx6yxQFcZm3ry0U77l2E
        subject_person_id: p_519ijmKZEZnSaQg1HPUQPv
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GPJ5PvBXjvhgLRDQbw5wn2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FKgstqTCYR9xW4LnKSIau6
          claim_id: c_DTIx6yxQFcZm3ry0U77l2E
          source_id: s_mdhvEasFF6Epjr6y7LsFIU
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201553 王栻）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_mdhvEasFF6Epjr6y7LsFIU
            source_type: api_record
            title: 中国历代人物传记资料库：王桐（CBDB 274253）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274253&o=json
            external_identifier: CBDB:274253
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_519ijmKZEZnSaQg1HPUQPv
        status: active
        display_name: 王桐
        merged_into_person_id: null
    - claim:
        id: c_fY4I9eyELIhvEKrCvZUP0g
        subject_person_id: p_GPJ5PvBXjvhgLRDQbw5wn2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Gvg6zP1WTyesXjCRtigLs8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O6Tv6DZrVNtvDOBx2xQyfR
          claim_id: c_fY4I9eyELIhvEKrCvZUP0g
          source_id: s_xe8Z0TOP1eDrfTsFIIWOGh
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201553 王栻）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xe8Z0TOP1eDrfTsFIIWOGh
            source_type: api_record
            title: 中国历代人物传记资料库：王材（CBDB 274256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274256&o=json
            external_identifier: CBDB:274256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Gvg6zP1WTyesXjCRtigLs8
        status: active
        display_name: 王材
        merged_into_person_id: null
    - claim:
        id: c_82yFpCLU0nRKmlmwSU1TnM
        subject_person_id: p_GPJ5PvBXjvhgLRDQbw5wn2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_KYEBcY6jhAhD23bP7JRJH5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1P-PmkqJAKdJlyjBU7e3l2
          claim_id: c_82yFpCLU0nRKmlmwSU1TnM
          source_id: s_uEmaLMFBKJp9Wols4WdqyD
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201553 王栻）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uEmaLMFBKJp9Wols4WdqyD
            source_type: api_record
            title: 中国历代人物传记资料库：王粱（CBDB 274254）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274254&o=json
            external_identifier: CBDB:274254
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KYEBcY6jhAhD23bP7JRJH5
        status: active
        display_name: 王粱
        merged_into_person_id: null
    - claim:
        id: c_TAk0MgevEoT8Hh8i6yJNMx
        subject_person_id: p_GPJ5PvBXjvhgLRDQbw5wn2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_QKtZTJreMi9kMCoBP181T6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7IvidNqEqcx5v1VWRe4_4z
          claim_id: c_TAk0MgevEoT8Hh8i6yJNMx
          source_id: s_Q6GiUYYjbPTidEXd38dSHy
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201553 王栻）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Q6GiUYYjbPTidEXd38dSHy
            source_type: api_record
            title: 中国历代人物传记资料库：王楠（CBDB 274250）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274250&o=json
            external_identifier: CBDB:274250
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QKtZTJreMi9kMCoBP181T6
        status: active
        display_name: 王楠
        merged_into_person_id: null
    - claim:
        id: c_9J8EUz2kEb5Z1D9NfsWE7n
        subject_person_id: p_GPJ5PvBXjvhgLRDQbw5wn2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_T3zFhMbC6bLnHvvZKjF9mo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gLBvFWVA6AmbSrOhBgD1wy
          claim_id: c_9J8EUz2kEb5Z1D9NfsWE7n
          source_id: s_q3PoleFVwpcV4N1smNenUP
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201553 王栻）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_q3PoleFVwpcV4N1smNenUP
            source_type: api_record
            title: 中国历代人物传记资料库：王椿（CBDB 274252）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274252&o=json
            external_identifier: CBDB:274252
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_T3zFhMbC6bLnHvvZKjF9mo
        status: active
        display_name: 王椿
        merged_into_person_id: null
    - claim:
        id: c_Mn1ZOIWQ8u9gSkuqJQnY4p
        subject_person_id: p_GPJ5PvBXjvhgLRDQbw5wn2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Z3N3h8ZY4dzfju6Wwi9grE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pi3ZVxrf0O3c4c6P0B-ONn
          claim_id: c_Mn1ZOIWQ8u9gSkuqJQnY4p
          source_id: s_ypLCTZh44-f2EuqYtfc4No
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201553 王栻）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ypLCTZh44-f2EuqYtfc4No
            source_type: api_record
            title: 中国历代人物传记资料库：王渠（CBDB 274255）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274255&o=json
            external_identifier: CBDB:274255
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Z3N3h8ZY4dzfju6Wwi9grE
        status: active
        display_name: 王渠
        merged_into_person_id: null
    - claim:
        id: c_agP2chaSn1CDm0JsMzDU-e
        subject_person_id: p_GPJ5PvBXjvhgLRDQbw5wn2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZXrQ1fTpKHnb6v8k9QauhD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RfulOidFCclCRkhDw6wV6K
          claim_id: c_agP2chaSn1CDm0JsMzDU-e
          source_id: s_G95iMgoDLBbhFNYZP-uKlN
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201553 王栻）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_G95iMgoDLBbhFNYZP-uKlN
            source_type: api_record
            title: 中国历代人物传记资料库：王標（CBDB 274259）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274259&o=json
            external_identifier: CBDB:274259
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZXrQ1fTpKHnb6v8k9QauhD
        status: active
        display_name: 王標
        merged_into_person_id: null
    - claim:
        id: c_J2zU4xsV54Zc6NtNyPtEcT
        subject_person_id: p_GPJ5PvBXjvhgLRDQbw5wn2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cUHFpK4uLF1JjUJFFBaYi4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0i1is8O5xB3u_Maro9KqDE
          claim_id: c_J2zU4xsV54Zc6NtNyPtEcT
          source_id: s_uD66Kve1svHKtYDnqnuTke
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201553 王栻）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uD66Kve1svHKtYDnqnuTke
            source_type: api_record
            title: 中国历代人物传记资料库：王杉（CBDB 274258）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274258&o=json
            external_identifier: CBDB:274258
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cUHFpK4uLF1JjUJFFBaYi4
        status: active
        display_name: 王杉
        merged_into_person_id: null
---

# 王栻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王栻 | accepted |
| birth.date | 1469年 | accepted |
| bio.summary | 王栻（生于1469年），明人物。明清進士進士，籍贯金壇，入仕進士。（中国历代人物传记资料库 CBDB 201553） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VcYjKdyzjQFgG3FRqoyThA | 王完 | accepted |
| spouses | p_D3jBdQQz5g9KZVHFuJisBk | 楊氏 | accepted |
| ancestors | p_9rXTbYHYhmBAvbpZaHj81G | 王馭 | accepted |
| ancestors | p_WtczkhkRScd1UzDxUThN9H | 王秉 | accepted |
| other | p_1Tdt1WHwxhhp8PtrFdTxiM | 王棠 | accepted |
| other | p_519ijmKZEZnSaQg1HPUQPv | 王桐 | accepted |
| other | p_Gvg6zP1WTyesXjCRtigLs8 | 王材 | accepted |
| other | p_KYEBcY6jhAhD23bP7JRJH5 | 王粱 | accepted |
| other | p_QKtZTJreMi9kMCoBP181T6 | 王楠 | accepted |
| other | p_T3zFhMbC6bLnHvvZKjF9mo | 王椿 | accepted |
| other | p_Z3N3h8ZY4dzfju6Wwi9grE | 王渠 | accepted |
| other | p_ZXrQ1fTpKHnb6v8k9QauhD | 王標 | accepted |
| other | p_cUHFpK4uLF1JjUJFFBaYi4 | 王杉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王標（CBDB 274259）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274259&o=json)
- [中国历代人物传记资料库：王材（CBDB 274256）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274256&o=json)
- [中国历代人物传记资料库：王椿（CBDB 274252）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274252&o=json)
- [中国历代人物传记资料库：王粱（CBDB 274254）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274254&o=json)
- [中国历代人物传记资料库：王楠（CBDB 274250）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274250&o=json)
- [中国历代人物传记资料库：王渠（CBDB 274255）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274255&o=json)
- [中国历代人物传记资料库：王杉（CBDB 274258）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274258&o=json)
- [中国历代人物传记资料库：王栻（CBDB 201553）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201553&o=json)
- [中国历代人物传记资料库：王棠（CBDB 274257）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274257&o=json)
- [中国历代人物传记资料库：王桐（CBDB 274253）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274253&o=json)
- [中国历代人物传记资料库：楊氏(王栻妻)（CBDB 274249）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274249&o=json)
