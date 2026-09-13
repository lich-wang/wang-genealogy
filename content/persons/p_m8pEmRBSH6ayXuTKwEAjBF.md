---
schema: wang-person/v1
id: p_m8pEmRBSH6ayXuTKwEAjBF
status: active
merged_into: null
display_name: 王惟真
cbdb_id: 240858
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9jDW4x7P2VoxzeuPhmLSHL
        subject_person_id: p_m8pEmRBSH6ayXuTKwEAjBF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟真，明人物。正統十三年進士。（中国历代人物传记资料库 CBDB 240858）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_vYMtpj6hwqrceZ7L6QTiyt
          claim_id: c_9jDW4x7P2VoxzeuPhmLSHL
          source_id: s_7UCYwv12hL8uoTS1hCGekt
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_7UCYwv12hL8uoTS1hCGekt
            source_type: api_record
            title: 维基数据：王惟真（Q45459375）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45459375
            external_identifier: Q45459375
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:38.809Z
            metadata_json: null
        - id: cs_ooLPETtcFsVm4mcnP7PpO5
          claim_id: c_9jDW4x7P2VoxzeuPhmLSHL
          source_id: s_JWt2Et9S3FX1mKPHVPZw8A
          stance: supports
          locator: CBDB:240858
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_JWt2Et9S3FX1mKPHVPZw8A
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王惟真（240858）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240858&o=json
            external_identifier: CBDB:240858
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:38.991Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tkZHKEUr3uQh5Bx11MaGUN
        subject_person_id: p_m8pEmRBSH6ayXuTKwEAjBF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟真
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_WdvQfgVd6ecsbvR9aKLEpq
          claim_id: c_tkZHKEUr3uQh5Bx11MaGUN
          source_id: s_7UCYwv12hL8uoTS1hCGekt
          stance: supports
          locator: Q45459375
          quotation: null
          interpretation_note: null
          source:
            id: s_7UCYwv12hL8uoTS1hCGekt
            source_type: api_record
            title: 维基数据：王惟真（Q45459375）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45459375
            external_identifier: Q45459375
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:38.809Z
            metadata_json: null
        - id: cs_zQq8GuEAq2WWPyuyJvxaqe
          claim_id: c_tkZHKEUr3uQh5Bx11MaGUN
          source_id: s_JWt2Et9S3FX1mKPHVPZw8A
          stance: supports
          locator: Q45459375
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BSXeTNNDMMBuwhnPspLjxd
        subject_person_id: p_1LjXtHaC5ZgBX5ntEmabuX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_m8pEmRBSH6ayXuTKwEAjBF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x1RTdSnJZD3zpL87Qxy9pP
          claim_id: c_BSXeTNNDMMBuwhnPspLjxd
          source_id: s_7UCYwv12hL8uoTS1hCGekt
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_4qCre3MNW46qp7KeFA9i7p
          claim_id: c_BSXeTNNDMMBuwhnPspLjxd
          source_id: s_5pS5Fu42DzUqhFJYMrzKSW
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_5pS5Fu42DzUqhFJYMrzKSW
            source_type: api_record
            title: 维基数据：王彦成（Q45459312）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45459312
            external_identifier: Q45459312
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_1LjXtHaC5ZgBX5ntEmabuX
        status: active
        display_name: 王彦成
        merged_into_person_id: null
  children:
    - claim:
        id: c_Jv9RULJNH2TaXY9B9HTSqv
        subject_person_id: p_m8pEmRBSH6ayXuTKwEAjBF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8ZBDQjrPzNEsJHrpRrVWkK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5Rehfvm9LbMZSMz8oaoK5e
          claim_id: c_Jv9RULJNH2TaXY9B9HTSqv
          source_id: s_FUQz5AGTdZDWThBYY1AEr4
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_FUQz5AGTdZDWThBYY1AEr4
            source_type: api_record
            title: 维基数据：王仲智（Q45459440）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45459440
            external_identifier: Q45459440
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:33.526Z
            metadata_json: null
        - id: cs_EY8sHiRJV4CnCivKbmBn7j
          claim_id: c_Jv9RULJNH2TaXY9B9HTSqv
          source_id: s_7UCYwv12hL8uoTS1hCGekt
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
      object_person:
        id: p_8ZBDQjrPzNEsJHrpRrVWkK
        status: active
        display_name: 王仲智
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_fSQ-VTwtD8LvMmkxoh1R7o
        subject_person_id: p_m8pEmRBSH6ayXuTKwEAjBF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_T2DCj9d6XKU4djHJMs2kSM
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hzEtTfDaPdwLuzkEWK_wbG
          claim_id: c_fSQ-VTwtD8LvMmkxoh1R7o
          source_id: s_JWt2Et9S3FX1mKPHVPZw8A
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第二十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_T2DCj9d6XKU4djHJMs2kSM
        status: active
        display_name: 王恕
        merged_into_person_id: null
  other: []
---

# 王惟真

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王惟真，明人物。正統十三年進士。（中国历代人物传记资料库 CBDB 240858） | accepted |
| name.primary | 王惟真 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1LjXtHaC5ZgBX5ntEmabuX | 王彦成 | accepted |
| children | p_8ZBDQjrPzNEsJHrpRrVWkK | 王仲智 | accepted |
| descendants | p_T2DCj9d6XKU4djHJMs2kSM | 王恕 | accepted |

## 外部来源

- [维基数据：王惟真（Q45459375）](https://www.wikidata.org/wiki/Q45459375)
- [维基数据：王彦成（Q45459312）](https://www.wikidata.org/wiki/Q45459312)
- [维基数据：王仲智（Q45459440）](https://www.wikidata.org/wiki/Q45459440)
- [CBDB 中国历代人物传记资料库：王惟真（240858）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240858&o=json)
