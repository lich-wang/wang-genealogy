---
schema: wang-person/v1
id: p_N79qb8WTuLZEBLK774uBg5
status: active
merged_into: null
display_name: 王之卿
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NGvL9xm6zCpM4ZAiJqExAD
        subject_person_id: p_N79qb8WTuLZEBLK774uBg5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rjC5BJ36b6X5kSTEwgFu74
          claim_id: c_NGvL9xm6zCpM4ZAiJqExAD
          source_id: s_g1oDqi9NaEs4Gyn6HNC9YR
          stance: supports
          locator: CBDB:300176
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（300176）
          source: &a1
            id: s_g1oDqi9NaEs4Gyn6HNC9YR
            source_type: api_record
            title: 中国历代人物传记资料库：王之卿（CBDB 300176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300176&o=json
            external_identifier: CBDB:300176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.618Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CGKmrMSw4Z7H1tufn5RtC9
        subject_person_id: p_N79qb8WTuLZEBLK774uBg5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之卿，明人物。嘉靖十七年進士，籍贯南充。（中国历代人物传记资料库 CBDB 300176）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aT3WUxzIDLglyWVg9I389B
          claim_id: c_CGKmrMSw4Z7H1tufn5RtC9
          source_id: s_g1oDqi9NaEs4Gyn6HNC9YR
          stance: supports
          locator: CBDB:300176
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7c_3tuAJ9qB2n9EL_KOqlM
        subject_person_id: p_t5Pa7BDdJtGhQZXGCYrN2e
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_N79qb8WTuLZEBLK774uBg5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7VWPGvjPGRvpM_-WQpr0Lo
          claim_id: c_7c_3tuAJ9qB2n9EL_KOqlM
          source_id: s_XESvs6Wl3LFrPK7w3l8Pgt
          stance: supports
          locator: CBDB：兄弟 王之臣（203124）之父／母 王棟
          quotation: null
          interpretation_note: 由兄弟关系推断：王之卿 与 王之臣 为同胞（CBDB 记「弟」），王之臣 之父／母即 王之卿 之父／母。
          source:
            id: s_XESvs6Wl3LFrPK7w3l8Pgt
            source_type: api_record
            title: 中国历代人物传记资料库：王之卿（CBDB 300176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300176&o=json
            external_identifier: CBDB:300176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_t5Pa7BDdJtGhQZXGCYrN2e
        status: active
        display_name: 王棟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_HoOn04V_TG0_6lQO3M7Mnj
        subject_person_id: p_N79qb8WTuLZEBLK774uBg5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fYsU7A3SFMfzEtkjj2jnfk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jH4ffyT2ZFLLyONJjg0j9k
          claim_id: c_HoOn04V_TG0_6lQO3M7Mnj
          source_id: s_XESvs6Wl3LFrPK7w3l8Pgt
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203124 王之臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_XESvs6Wl3LFrPK7w3l8Pgt
            source_type: api_record
            title: 中国历代人物传记资料库：王之卿（CBDB 300176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300176&o=json
            external_identifier: CBDB:300176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fYsU7A3SFMfzEtkjj2jnfk
        status: active
        display_name: 王之臣
        merged_into_person_id: null
---

# 王之卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之卿 | accepted |
| bio.summary | 王之卿，明人物。嘉靖十七年進士，籍贯南充。（中国历代人物传记资料库 CBDB 300176） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_t5Pa7BDdJtGhQZXGCYrN2e | 王棟 | accepted |
| other | p_fYsU7A3SFMfzEtkjj2jnfk | 王之臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王之卿（CBDB 300176）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300176&o=json)
