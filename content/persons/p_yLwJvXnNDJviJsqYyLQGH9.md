---
schema: wang-person/v1
id: p_yLwJvXnNDJviJsqYyLQGH9
status: active
merged_into: null
display_name: 王羲
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G76NhBa3QF6wAqJQmLhoa3
        subject_person_id: p_yLwJvXnNDJviJsqYyLQGH9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王羲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L1BZmXVtsALcPQ3Q8AA8dh
          claim_id: c_G76NhBa3QF6wAqJQmLhoa3
          source_id: s_WZ1sAVweNLUG46yJAXmXXQ
          stance: supports
          locator: CBDB:279346
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（279346）
          source: &a1
            id: s_WZ1sAVweNLUG46yJAXmXXQ
            source_type: api_record
            title: 中国历代人物传记资料库：王羲（CBDB 279346）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279346&o=json
            external_identifier: CBDB:279346
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.979Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1zKUFMUcdLA4x62nFNZG8v
        subject_person_id: p_yLwJvXnNDJviJsqYyLQGH9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王羲，明人物。正德六年進士，籍贯宣城。（中国历代人物传记资料库 CBDB 279346）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0kX_b8rgghW8HFXIuoUXK-
          claim_id: c_1zKUFMUcdLA4x62nFNZG8v
          source_id: s_WZ1sAVweNLUG46yJAXmXXQ
          stance: supports
          locator: CBDB:279346
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RF6qIo2ZYOBJsnCYBohv_v
        subject_person_id: p_QzvV4sG1QiUMXjGNxx2is5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yLwJvXnNDJviJsqYyLQGH9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mHuBnG3Bgm7_xD9DpwqVYm
          claim_id: c_RF6qIo2ZYOBJsnCYBohv_v
          source_id: s_1ybqw1CedSuA5YKTnbRPzU
          stance: supports
          locator: CBDB：兄弟 王遵（201860）之父／母 王度
          quotation: null
          interpretation_note: 由兄弟关系推断：王羲 与 王遵 为同胞（CBDB 记「弟」），王遵 之父／母即 王羲 之父／母。
          source:
            id: s_1ybqw1CedSuA5YKTnbRPzU
            source_type: api_record
            title: 中国历代人物传记资料库：王羲（CBDB 279346）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279346&o=json
            external_identifier: CBDB:279346
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QzvV4sG1QiUMXjGNxx2is5
        status: active
        display_name: 王度
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_0As2clE3Dzg4Nmv-SHrvSl
        subject_person_id: p_kS75cqd3Wh2NjJNrFJL2j4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yLwJvXnNDJviJsqYyLQGH9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0d3ac5hVhBVLMxo2sZzBuB
          claim_id: c_0As2clE3Dzg4Nmv-SHrvSl
          source_id: s_1ybqw1CedSuA5YKTnbRPzU
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201860 王遵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1ybqw1CedSuA5YKTnbRPzU
            source_type: api_record
            title: 中国历代人物传记资料库：王羲（CBDB 279346）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279346&o=json
            external_identifier: CBDB:279346
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kS75cqd3Wh2NjJNrFJL2j4
        status: active
        display_name: 王遵
        merged_into_person_id: null
---

# 王羲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王羲 | accepted |
| bio.summary | 王羲，明人物。正德六年進士，籍贯宣城。（中国历代人物传记资料库 CBDB 279346） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QzvV4sG1QiUMXjGNxx2is5 | 王度 | accepted |
| other | p_kS75cqd3Wh2NjJNrFJL2j4 | 王遵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王羲（CBDB 279346）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279346&o=json)
