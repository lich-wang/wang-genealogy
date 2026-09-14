---
schema: wang-person/v1
id: p_mk7g7S4D3bQEXDd4TQZ87J
status: active
merged_into: null
display_name: 王言
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1BjtEqHdpqNGuFwS4tCtg3
        subject_person_id: p_mk7g7S4D3bQEXDd4TQZ87J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3C4wC5mrMM9rn5PAdoHJQ4
          claim_id: c_1BjtEqHdpqNGuFwS4tCtg3
          source_id: s_AyFU1YoxuNRAXfYCvRKqQo
          stance: supports
          locator: CBDB:227348
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（227348）
          source: &a1
            id: s_AyFU1YoxuNRAXfYCvRKqQo
            source_type: api_record
            title: 中国历代人物传记资料库：王言（CBDB 227348）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227348&o=json
            external_identifier: CBDB:227348
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.503Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bcEX97DDV9oFmokfj23yya
        subject_person_id: p_mk7g7S4D3bQEXDd4TQZ87J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言，明人物。萬曆丙戌科進士進士，籍贯平湖。（中国历代人物传记资料库 CBDB 227348）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IK6SOKNXt7QA-xRGEANa5Z
          claim_id: c_bcEX97DDV9oFmokfj23yya
          source_id: s_AyFU1YoxuNRAXfYCvRKqQo
          stance: supports
          locator: CBDB:227348
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_apU2kiOluYSNuLNDLIRkLS
        subject_person_id: p_mk7g7S4D3bQEXDd4TQZ87J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uu4yjus8EVVwp6m8E5Qav5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J6Z_xZDoQ4o2lNy-lbNnT7
          claim_id: c_apU2kiOluYSNuLNDLIRkLS
          source_id: s_AyFU1YoxuNRAXfYCvRKqQo
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百六十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uu4yjus8EVVwp6m8E5Qav5
        status: active
        display_name: 王建中
        merged_into_person_id: null
    - claim:
        id: c_p6MmlGwkyMoPFW0IikT1kn
        subject_person_id: p_mk7g7S4D3bQEXDd4TQZ87J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TLiKfxEJx81hhpTUmNf6QJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o2eUfXZkdBisdwfprPXl2-
          claim_id: c_p6MmlGwkyMoPFW0IikT1kn
          source_id: s_HdNDyLs0DO8c7LTppU-8Wn
          stance: supports
          locator: CBDB：兄弟 王建中（207082）之父／母 王言
          quotation: null
          interpretation_note: 由兄弟关系推断：王建藩 与 王建中 为同胞（CBDB 记「兄」），王建中 之父／母即 王建藩 之父／母。
          source:
            id: s_HdNDyLs0DO8c7LTppU-8Wn
            source_type: api_record
            title: 中国历代人物传记资料库：王建藩（CBDB 227354）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227354&o=json
            external_identifier: CBDB:227354
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TLiKfxEJx81hhpTUmNf6QJ
        status: active
        display_name: 王建藩
        merged_into_person_id: null
    - claim:
        id: c_25YfxaGvHfpZ34ixT_LGK6
        subject_person_id: p_mk7g7S4D3bQEXDd4TQZ87J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VAz5UsvgLmXHoVaqVm7DE4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HR_SRl0kKki-h0FrAAw7N1
          claim_id: c_25YfxaGvHfpZ34ixT_LGK6
          source_id: s_KOk0KyElUYltonbaNPzjqM
          stance: supports
          locator: CBDB：兄弟 王建中（207082）之父／母 王言
          quotation: null
          interpretation_note: 由兄弟关系推断：王建元 与 王建中 为同胞（CBDB 记「兄」），王建中 之父／母即 王建元 之父／母。
          source:
            id: s_KOk0KyElUYltonbaNPzjqM
            source_type: api_record
            title: 中国历代人物传记资料库：王建元（CBDB 227353）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227353&o=json
            external_identifier: CBDB:227353
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VAz5UsvgLmXHoVaqVm7DE4
        status: active
        display_name: 王建元
        merged_into_person_id: null
    - claim:
        id: c_sEsL-pPPHuDlTZrm9vX1Bt
        subject_person_id: p_mk7g7S4D3bQEXDd4TQZ87J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZCMREA5DX8tESe1naDSaAb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wNMJF3tUZgFvVzwWgNBqYk
          claim_id: c_sEsL-pPPHuDlTZrm9vX1Bt
          source_id: s_HLS-Xqvu9cg2jWpN3viKeY
          stance: supports
          locator: CBDB：兄弟 王建中（207082）之父／母 王言
          quotation: null
          interpretation_note: 由兄弟关系推断：王建屏 与 王建中 为同胞（CBDB 记「兄」），王建中 之父／母即 王建屏 之父／母。
          source:
            id: s_HLS-Xqvu9cg2jWpN3viKeY
            source_type: api_record
            title: 中国历代人物传记资料库：王建屏（CBDB 227355）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227355&o=json
            external_identifier: CBDB:227355
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZCMREA5DX8tESe1naDSaAb
        status: active
        display_name: 王建屏
        merged_into_person_id: null
    - claim:
        id: c_IuKOdj_8eszcEqiykuSVyO
        subject_person_id: p_mk7g7S4D3bQEXDd4TQZ87J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tiHLM9dbSeFNccj8nA4CRe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GgAKx5IJbIZwceZG6lK5iP
          claim_id: c_IuKOdj_8eszcEqiykuSVyO
          source_id: s_KaQNwusWrCF4Ui6EuowUQs
          stance: supports
          locator: CBDB：兄弟 王建中（207082）之父／母 王言
          quotation: null
          interpretation_note: 由兄弟关系推断：王拱極 与 王建中 为同胞（CBDB 记「兄」），王建中 之父／母即 王拱極 之父／母。
          source:
            id: s_KaQNwusWrCF4Ui6EuowUQs
            source_type: api_record
            title: 中国历代人物传记资料库：王拱極（CBDB 227352）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227352&o=json
            external_identifier: CBDB:227352
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tiHLM9dbSeFNccj8nA4CRe
        status: active
        display_name: 王拱極
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王言 | accepted |
| bio.summary | 王言，明人物。萬曆丙戌科進士進士，籍贯平湖。（中国历代人物传记资料库 CBDB 227348） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_uu4yjus8EVVwp6m8E5Qav5 | 王建中 | accepted |
| children | p_TLiKfxEJx81hhpTUmNf6QJ | 王建藩 | accepted |
| children | p_VAz5UsvgLmXHoVaqVm7DE4 | 王建元 | accepted |
| children | p_ZCMREA5DX8tESe1naDSaAb | 王建屏 | accepted |
| children | p_tiHLM9dbSeFNccj8nA4CRe | 王拱極 | accepted |

## 外部来源

- [中国历代人物传记资料库：王拱極（CBDB 227352）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227352&o=json)
- [中国历代人物传记资料库：王建藩（CBDB 227354）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227354&o=json)
- [中国历代人物传记资料库：王建屏（CBDB 227355）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227355&o=json)
- [中国历代人物传记资料库：王建元（CBDB 227353）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227353&o=json)
- [中国历代人物传记资料库：王言（CBDB 227348）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227348&o=json)
