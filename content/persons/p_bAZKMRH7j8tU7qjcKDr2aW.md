---
schema: wang-person/v1
id: p_bAZKMRH7j8tU7qjcKDr2aW
status: active
merged_into: null
display_name: 王鍊
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hWsXVLYk78sCjVXh6Sf9Po
        subject_person_id: p_bAZKMRH7j8tU7qjcKDr2aW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MxwHsnYCMYSEa57J2MG4F6
          claim_id: c_hWsXVLYk78sCjVXh6Sf9Po
          source_id: s_ACm8w4JZEVVCLWWJasq9v8
          stance: supports
          locator: CBDB:313479
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（313479）
          source: &a1
            id: s_ACm8w4JZEVVCLWWJasq9v8
            source_type: api_record
            title: 中国历代人物传记资料库：王鍊（CBDB 313479）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313479&o=json
            external_identifier: CBDB:313479
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.908Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9H7Gb8MMaZqtYHoKMth3Cj
        subject_person_id: p_bAZKMRH7j8tU7qjcKDr2aW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍊，明人物。嘉靖二十九年進士，籍贯永嘉，曾任府教授。（中国历代人物传记资料库 CBDB 313479）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aiuiBLiICn5cZ60HRNA9dm
          claim_id: c_9H7Gb8MMaZqtYHoKMth3Cj
          source_id: s_ACm8w4JZEVVCLWWJasq9v8
          stance: supports
          locator: CBDB:313479
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ojG94FzsJyYRwQnIJFS0Fi
        subject_person_id: p_bAZKMRH7j8tU7qjcKDr2aW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5GKmc7UBMnwgzBKbep1LTG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MNsjqfYS77doF0oXjNzvzA
          claim_id: c_ojG94FzsJyYRwQnIJFS0Fi
          source_id: s_Nm1QHMi2nHmFQJMsjfaAoh
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第八十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Nm1QHMi2nHmFQJMsjfaAoh
            source_type: api_record
            title: 中国历代人物传记资料库：王諍（CBDB 126801）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126801&o=json
            external_identifier: CBDB:126801
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.214Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5GKmc7UBMnwgzBKbep1LTG
        status: active
        display_name: 王諍
        merged_into_person_id: null
    - claim:
        id: c_WYp-0scRYylh--DBYwvea5
        subject_person_id: p_bAZKMRH7j8tU7qjcKDr2aW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BefirQ5qAsYuyzL4CSTwoe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Dl_qAZc-28tG4bqNEO6ovJ
          claim_id: c_WYp-0scRYylh--DBYwvea5
          source_id: s_XaLqZ22xcGRAGSza010d4G
          stance: supports
          locator: CBDB：兄弟 王諍（126801）之父／母 王鍊
          quotation: null
          interpretation_note: 由兄弟关系推断：王誡 与 王諍 为同胞（CBDB 记「弟」），王諍 之父／母即 王誡 之父／母。
          source:
            id: s_XaLqZ22xcGRAGSza010d4G
            source_type: api_record
            title: 中国历代人物传记资料库：王誡（CBDB 313485）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313485&o=json
            external_identifier: CBDB:313485
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BefirQ5qAsYuyzL4CSTwoe
        status: active
        display_name: 王誡
        merged_into_person_id: null
    - claim:
        id: c_zJVVFHtfT96GrI56ha_t0C
        subject_person_id: p_bAZKMRH7j8tU7qjcKDr2aW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hBm6vHDc7fWZ3yuVi2Vit4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gdC-BaU7eMk7VnB2rW4882
          claim_id: c_zJVVFHtfT96GrI56ha_t0C
          source_id: s_zntLQdgCS8XtgGkovL7HDs
          stance: supports
          locator: CBDB：兄弟 王諍（126801）之父／母 王鍊
          quotation: null
          interpretation_note: 由兄弟关系推断：王訓 与 王諍 为同胞（CBDB 记「弟」），王諍 之父／母即 王訓 之父／母。
          source:
            id: s_zntLQdgCS8XtgGkovL7HDs
            source_type: api_record
            title: 中国历代人物传记资料库：王訓（CBDB 313482）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313482&o=json
            external_identifier: CBDB:313482
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hBm6vHDc7fWZ3yuVi2Vit4
        status: active
        display_name: 王訓
        merged_into_person_id: null
    - claim:
        id: c_T82P5Iv8DZrkKiPabIjeJt
        subject_person_id: p_bAZKMRH7j8tU7qjcKDr2aW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pj1hQzuo8QaWabdrm9w4P8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e5K8lG24sdfeNsscwWWbDk
          claim_id: c_T82P5Iv8DZrkKiPabIjeJt
          source_id: s_u2nMamULpp7PMvNILIKuE7
          stance: supports
          locator: CBDB：兄弟 王諍（126801）之父／母 王鍊
          quotation: null
          interpretation_note: 由兄弟关系推断：王誥 与 王諍 为同胞（CBDB 记「弟」），王諍 之父／母即 王誥 之父／母。
          source:
            id: s_u2nMamULpp7PMvNILIKuE7
            source_type: api_record
            title: 中国历代人物传记资料库：王誥（CBDB 313483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313483&o=json
            external_identifier: CBDB:313483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pj1hQzuo8QaWabdrm9w4P8
        status: active
        display_name: 王誥
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鍊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鍊 | accepted |
| bio.summary | 王鍊，明人物。嘉靖二十九年進士，籍贯永嘉，曾任府教授。（中国历代人物传记资料库 CBDB 313479） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_5GKmc7UBMnwgzBKbep1LTG | 王諍 | accepted |
| children | p_BefirQ5qAsYuyzL4CSTwoe | 王誡 | accepted |
| children | p_hBm6vHDc7fWZ3yuVi2Vit4 | 王訓 | accepted |
| children | p_pj1hQzuo8QaWabdrm9w4P8 | 王誥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王誥（CBDB 313483）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313483&o=json)
- [中国历代人物传记资料库：王誡（CBDB 313485）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313485&o=json)
- [中国历代人物传记资料库：王鍊（CBDB 313479）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313479&o=json)
- [中国历代人物传记资料库：王訓（CBDB 313482）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313482&o=json)
- [中国历代人物传记资料库：王諍（CBDB 126801）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126801&o=json)
