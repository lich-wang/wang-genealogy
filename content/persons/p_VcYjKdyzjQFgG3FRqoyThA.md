---
schema: wang-person/v1
id: p_VcYjKdyzjQFgG3FRqoyThA
status: active
merged_into: null
display_name: 王完
revision: 11
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XdmnFGxr4ihFY7QH1Sb14f
        subject_person_id: p_VcYjKdyzjQFgG3FRqoyThA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王完
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rhCJR6yJ8yKEemZm55xsxr
          claim_id: c_XdmnFGxr4ihFY7QH1Sb14f
          source_id: s_4H3C6QuKjLwiYbqtgAHfk9
          stance: supports
          locator: CBDB:274245
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（274245）
          source: &a1
            id: s_4H3C6QuKjLwiYbqtgAHfk9
            source_type: api_record
            title: 中国历代人物传记资料库：王完（CBDB 274245）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274245&o=json
            external_identifier: CBDB:274245
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.918Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hLvoc9F32xxoi4WBLdUFz5
        subject_person_id: p_VcYjKdyzjQFgG3FRqoyThA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王完，明人物。弘治十八年進士，籍贯金壇，曾任教諭。（中国历代人物传记资料库 CBDB 274245）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rZnIJlx19uflm0SHka9Uy7
          claim_id: c_hLvoc9F32xxoi4WBLdUFz5
          source_id: s_4H3C6QuKjLwiYbqtgAHfk9
          stance: supports
          locator: CBDB:274245
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source:
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
      object_person:
        id: p_GPJ5PvBXjvhgLRDQbw5wn2
        status: active
        display_name: 王栻
        merged_into_person_id: null
    - claim:
        id: c_T0n6dXXpYao9NQp-bWfP63
        subject_person_id: p_VcYjKdyzjQFgG3FRqoyThA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1Tdt1WHwxhhp8PtrFdTxiM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qgAJ_vF_PJu6p-UzCAZ__C
          claim_id: c_T0n6dXXpYao9NQp-bWfP63
          source_id: s_cjepQGByJGX0YSILrFuw0Q
          stance: supports
          locator: CBDB：兄弟 王栻（201553）之父／母 王完
          quotation: null
          interpretation_note: 由兄弟关系推断：王棠 与 王栻 为同胞（CBDB 记「兄」），王栻 之父／母即 王棠 之父／母。
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
        id: c_okERXEdmsS6zzOqOMgqRmq
        subject_person_id: p_VcYjKdyzjQFgG3FRqoyThA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_519ijmKZEZnSaQg1HPUQPv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LUUC1h8lq-QP0gUh5lzC6C
          claim_id: c_okERXEdmsS6zzOqOMgqRmq
          source_id: s_mdhvEasFF6Epjr6y7LsFIU
          stance: supports
          locator: CBDB：兄弟 王栻（201553）之父／母 王完
          quotation: null
          interpretation_note: 由兄弟关系推断：王桐 与 王栻 为同胞（CBDB 记「弟」），王栻 之父／母即 王桐 之父／母。
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
        id: c_5ZP2xaYiovJDvjfA21immw
        subject_person_id: p_VcYjKdyzjQFgG3FRqoyThA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Gvg6zP1WTyesXjCRtigLs8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_758xQzLUVtKmPHW5CxajQb
          claim_id: c_5ZP2xaYiovJDvjfA21immw
          source_id: s_xe8Z0TOP1eDrfTsFIIWOGh
          stance: supports
          locator: CBDB：兄弟 王栻（201553）之父／母 王完
          quotation: null
          interpretation_note: 由兄弟关系推断：王材 与 王栻 为同胞（CBDB 记「弟」），王栻 之父／母即 王材 之父／母。
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
        id: c_yQwWiWwmWH0SzGopxifY_M
        subject_person_id: p_VcYjKdyzjQFgG3FRqoyThA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KYEBcY6jhAhD23bP7JRJH5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2sdeP4zYDHfkrX0UQwJagq
          claim_id: c_yQwWiWwmWH0SzGopxifY_M
          source_id: s_uEmaLMFBKJp9Wols4WdqyD
          stance: supports
          locator: CBDB：兄弟 王栻（201553）之父／母 王完
          quotation: null
          interpretation_note: 由兄弟关系推断：王粱 与 王栻 为同胞（CBDB 记「弟」），王栻 之父／母即 王粱 之父／母。
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
        id: c_wZ0ArJSHRanHvOMdyn054o
        subject_person_id: p_VcYjKdyzjQFgG3FRqoyThA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QKtZTJreMi9kMCoBP181T6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vRt_GilK6NOEeTyS55y0kj
          claim_id: c_wZ0ArJSHRanHvOMdyn054o
          source_id: s_Q6GiUYYjbPTidEXd38dSHy
          stance: supports
          locator: CBDB：兄弟 王栻（201553）之父／母 王完
          quotation: null
          interpretation_note: 由兄弟关系推断：王楠 与 王栻 为同胞（CBDB 记「弟」），王栻 之父／母即 王楠 之父／母。
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
        id: c_JBWKB_enraNHTnjRY9IS7Y
        subject_person_id: p_VcYjKdyzjQFgG3FRqoyThA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_T3zFhMbC6bLnHvvZKjF9mo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jpJnAIGicp3zyQHHV7j9Cg
          claim_id: c_JBWKB_enraNHTnjRY9IS7Y
          source_id: s_q3PoleFVwpcV4N1smNenUP
          stance: supports
          locator: CBDB：兄弟 王栻（201553）之父／母 王完
          quotation: null
          interpretation_note: 由兄弟关系推断：王椿 与 王栻 为同胞（CBDB 记「弟」），王栻 之父／母即 王椿 之父／母。
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
        id: c_0UQaBmPOzZUwOJQ8hNSCGq
        subject_person_id: p_VcYjKdyzjQFgG3FRqoyThA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Z3N3h8ZY4dzfju6Wwi9grE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XrLz_6U0bvnURWL5CSVYa-
          claim_id: c_0UQaBmPOzZUwOJQ8hNSCGq
          source_id: s_ypLCTZh44-f2EuqYtfc4No
          stance: supports
          locator: CBDB：兄弟 王栻（201553）之父／母 王完
          quotation: null
          interpretation_note: 由兄弟关系推断：王渠 与 王栻 为同胞（CBDB 记「弟」），王栻 之父／母即 王渠 之父／母。
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
        id: c_bxH5BjEXDVd2_qPcmaPtf1
        subject_person_id: p_VcYjKdyzjQFgG3FRqoyThA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZXrQ1fTpKHnb6v8k9QauhD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kaybq7u0e33j4_j10V536v
          claim_id: c_bxH5BjEXDVd2_qPcmaPtf1
          source_id: s_G95iMgoDLBbhFNYZP-uKlN
          stance: supports
          locator: CBDB：兄弟 王栻（201553）之父／母 王完
          quotation: null
          interpretation_note: 由兄弟关系推断：王標 与 王栻 为同胞（CBDB 记「兄」），王栻 之父／母即 王標 之父／母。
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
        id: c_dQEE7PX3_wMTUMOgviHAb9
        subject_person_id: p_VcYjKdyzjQFgG3FRqoyThA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cUHFpK4uLF1JjUJFFBaYi4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ujqnu1xojsXJZ4nwpST0-n
          claim_id: c_dQEE7PX3_wMTUMOgviHAb9
          source_id: s_uD66Kve1svHKtYDnqnuTke
          stance: supports
          locator: CBDB：兄弟 王栻（201553）之父／母 王完
          quotation: null
          interpretation_note: 由兄弟关系推断：王杉 与 王栻 为同胞（CBDB 记「兄」），王栻 之父／母即 王杉 之父／母。
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王完

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王完 | accepted |
| bio.summary | 王完，明人物。弘治十八年進士，籍贯金壇，曾任教諭。（中国历代人物传记资料库 CBDB 274245） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_GPJ5PvBXjvhgLRDQbw5wn2 | 王栻 | accepted |
| children | p_1Tdt1WHwxhhp8PtrFdTxiM | 王棠 | accepted |
| children | p_519ijmKZEZnSaQg1HPUQPv | 王桐 | accepted |
| children | p_Gvg6zP1WTyesXjCRtigLs8 | 王材 | accepted |
| children | p_KYEBcY6jhAhD23bP7JRJH5 | 王粱 | accepted |
| children | p_QKtZTJreMi9kMCoBP181T6 | 王楠 | accepted |
| children | p_T3zFhMbC6bLnHvvZKjF9mo | 王椿 | accepted |
| children | p_Z3N3h8ZY4dzfju6Wwi9grE | 王渠 | accepted |
| children | p_ZXrQ1fTpKHnb6v8k9QauhD | 王標 | accepted |
| children | p_cUHFpK4uLF1JjUJFFBaYi4 | 王杉 | accepted |

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
- [中国历代人物传记资料库：王完（CBDB 274245）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274245&o=json)
