---
schema: wang-person/v1
id: p_76chS2Ykfr8oSw8ts28q9u
status: active
merged_into: null
display_name: 王應箕
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UYD36kLmmNH6GQn7CCuRRh
        subject_person_id: p_76chS2Ykfr8oSw8ts28q9u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應箕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dU5it5gY6dDT6k88gDrM7r
          claim_id: c_UYD36kLmmNH6GQn7CCuRRh
          source_id: s_GeoBQ5jA8wfMCHp18d739L
          stance: supports
          locator: CBDB:122019
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（122019）
          source: &a1
            id: s_GeoBQ5jA8wfMCHp18d739L
            source_type: api_record
            title: 中国历代人物传记资料库：王應箕（CBDB 122019）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122019&o=json
            external_identifier: CBDB:122019
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.919Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_d4XUMkwzU4KEB6n5c9gbKC
        subject_person_id: p_76chS2Ykfr8oSw8ts28q9u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LcJyjAXA7PtTWu2RE8jvne
          claim_id: c_d4XUMkwzU4KEB6n5c9gbKC
          source_id: s_GeoBQ5jA8wfMCHp18d739L
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MWqb8vwAOGOllg1nXpYvvZ
        subject_person_id: p_4EsUVoMJDcYh5gBjunDRDk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_76chS2Ykfr8oSw8ts28q9u
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_upOH8nSRFWJhX5oFWrlVhI
          claim_id: c_MWqb8vwAOGOllg1nXpYvvZ
          source_id: s_ZwEKUuzv5h7u9TshD9wF6j
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2329, HuWenKai #498：子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZwEKUuzv5h7u9TshD9wF6j
            source_type: api_record
            title: 中国历代人物传记资料库：王有為（CBDB 122022）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122022&o=json
            external_identifier: CBDB:122022
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.920Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4EsUVoMJDcYh5gBjunDRDk
        status: active
        display_name: 王有為
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王應箕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應箕 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4EsUVoMJDcYh5gBjunDRDk | 王有為 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應箕（CBDB 122019）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122019&o=json)
- [中国历代人物传记资料库：王有為（CBDB 122022）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122022&o=json)
