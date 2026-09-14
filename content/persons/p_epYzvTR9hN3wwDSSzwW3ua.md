---
schema: wang-person/v1
id: p_epYzvTR9hN3wwDSSzwW3ua
status: active
merged_into: null
display_name: 王謙益
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3f3UvRtFHGA2GfAvF3bh4v
        subject_person_id: p_epYzvTR9hN3wwDSSzwW3ua
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謙益
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9LnTS7EUQQFwzMmCuQJT83
          claim_id: c_3f3UvRtFHGA2GfAvF3bh4v
          source_id: s_NsU6DF3ZC5DB9uJmv2KDuW
          stance: supports
          locator: CBDB:297373
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297373）
          source: &a1
            id: s_NsU6DF3ZC5DB9uJmv2KDuW
            source_type: api_record
            title: 中国历代人物传记资料库：王謙益（CBDB 297373）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297373&o=json
            external_identifier: CBDB:297373
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.571Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r6D2e7z5JeATpJG6v3YAeA
        subject_person_id: p_epYzvTR9hN3wwDSSzwW3ua
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謙益，明人物。嘉靖十四年進士，籍贯臨晉。（中国历代人物传记资料库 CBDB 297373）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ChIT5VlRQulDmDauYuNhdc
          claim_id: c_r6D2e7z5JeATpJG6v3YAeA
          source_id: s_NsU6DF3ZC5DB9uJmv2KDuW
          stance: supports
          locator: CBDB:297373
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_N2IilvP6o6Vx5R8ivYlIjv
        subject_person_id: p_epYzvTR9hN3wwDSSzwW3ua
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yPDG6qr1bXraqFkBrL15Y6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HB7JY8kBjRNgIYvzfNZBYM
          claim_id: c_N2IilvP6o6Vx5R8ivYlIjv
          source_id: s_NsU6DF3ZC5DB9uJmv2KDuW
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百二十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yPDG6qr1bXraqFkBrL15Y6
        status: active
        display_name: 王光宇
        merged_into_person_id: null
    - claim:
        id: c_NcwcNtcXf09GwG2-6S9ymB
        subject_person_id: p_epYzvTR9hN3wwDSSzwW3ua
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1FFsqRFebi26v7Y7w87KMn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GUkr4xkTCJgTIvK54WT3Go
          claim_id: c_NcwcNtcXf09GwG2-6S9ymB
          source_id: s__P6g7E7KgQXmgxWg4i4Dry
          stance: supports
          locator: CBDB：兄弟 王光宇（202958）之父／母 王謙益
          quotation: null
          interpretation_note: 由兄弟关系推断：王光庭 与 王光宇 为同胞（CBDB 记「兄」），王光宇 之父／母即 王光庭 之父／母。
          source:
            id: s__P6g7E7KgQXmgxWg4i4Dry
            source_type: api_record
            title: 中国历代人物传记资料库：王光庭（CBDB 297381）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297381&o=json
            external_identifier: CBDB:297381
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1FFsqRFebi26v7Y7w87KMn
        status: active
        display_name: 王光庭
        merged_into_person_id: null
    - claim:
        id: c_epgMgZpv40QJOq8HWQd01z
        subject_person_id: p_epYzvTR9hN3wwDSSzwW3ua
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CqdH2vNBX5dBAHtdLtF8hN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nXtEgKgszbjd_xol6kK3M7
          claim_id: c_epgMgZpv40QJOq8HWQd01z
          source_id: s_EZC0-C4HKXIiJEAqWHFyC4
          stance: supports
          locator: CBDB：兄弟 王光宇（202958）之父／母 王謙益
          quotation: null
          interpretation_note: 由兄弟关系推断：王光宙 与 王光宇 为同胞（CBDB 记「兄」），王光宇 之父／母即 王光宙 之父／母。
          source:
            id: s_EZC0-C4HKXIiJEAqWHFyC4
            source_type: api_record
            title: 中国历代人物传记资料库：王光宙（CBDB 297378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297378&o=json
            external_identifier: CBDB:297378
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CqdH2vNBX5dBAHtdLtF8hN
        status: active
        display_name: 王光宙
        merged_into_person_id: null
    - claim:
        id: c_QPtELwqrIcCqFDD4hAMWQ5
        subject_person_id: p_epYzvTR9hN3wwDSSzwW3ua
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_V898suxPCSrLXwSuQBHL2A
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jgQRmC_Hadji93KTvrXyYW
          claim_id: c_QPtELwqrIcCqFDD4hAMWQ5
          source_id: s_0DJaVD3Q6MMcBA1L_VtGiG
          stance: supports
          locator: CBDB：兄弟 王光宇（202958）之父／母 王謙益
          quotation: null
          interpretation_note: 由兄弟关系推断：王光宅 与 王光宇 为同胞（CBDB 记「兄」），王光宇 之父／母即 王光宅 之父／母。
          source:
            id: s_0DJaVD3Q6MMcBA1L_VtGiG
            source_type: api_record
            title: 中国历代人物传记资料库：王光宅（CBDB 297379）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297379&o=json
            external_identifier: CBDB:297379
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_V898suxPCSrLXwSuQBHL2A
        status: active
        display_name: 王光宅
        merged_into_person_id: null
    - claim:
        id: c_cILe74L6e4v0Osb3Ucglz-
        subject_person_id: p_epYzvTR9hN3wwDSSzwW3ua
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_n4W76agmMSwS5KaFeJrxVE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wTi6lyciUvyUda90cimGd3
          claim_id: c_cILe74L6e4v0Osb3Ucglz-
          source_id: s_unVr5mrbTD1AFTF45yB5fJ
          stance: supports
          locator: CBDB：兄弟 王光宇（202958）之父／母 王謙益
          quotation: null
          interpretation_note: 由兄弟关系推断：王光世 与 王光宇 为同胞（CBDB 记「弟」），王光宇 之父／母即 王光世 之父／母。
          source:
            id: s_unVr5mrbTD1AFTF45yB5fJ
            source_type: api_record
            title: 中国历代人物传记资料库：王光世（CBDB 297377）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297377&o=json
            external_identifier: CBDB:297377
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_n4W76agmMSwS5KaFeJrxVE
        status: active
        display_name: 王光世
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王謙益

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王謙益 | accepted |
| bio.summary | 王謙益，明人物。嘉靖十四年進士，籍贯臨晉。（中国历代人物传记资料库 CBDB 297373） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_yPDG6qr1bXraqFkBrL15Y6 | 王光宇 | accepted |
| children | p_1FFsqRFebi26v7Y7w87KMn | 王光庭 | accepted |
| children | p_CqdH2vNBX5dBAHtdLtF8hN | 王光宙 | accepted |
| children | p_V898suxPCSrLXwSuQBHL2A | 王光宅 | accepted |
| children | p_n4W76agmMSwS5KaFeJrxVE | 王光世 | accepted |

## 外部来源

- [中国历代人物传记资料库：王光世（CBDB 297377）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297377&o=json)
- [中国历代人物传记资料库：王光庭（CBDB 297381）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297381&o=json)
- [中国历代人物传记资料库：王光宅（CBDB 297379）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297379&o=json)
- [中国历代人物传记资料库：王光宙（CBDB 297378）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297378&o=json)
- [中国历代人物传记资料库：王謙益（CBDB 297373）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297373&o=json)
