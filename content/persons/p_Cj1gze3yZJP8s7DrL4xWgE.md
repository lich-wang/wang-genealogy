---
schema: wang-person/v1
id: p_Cj1gze3yZJP8s7DrL4xWgE
status: active
merged_into: null
display_name: 王成之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5W8Bi3vQG4G6JXNP5X5iKX
        subject_person_id: p_Cj1gze3yZJP8s7DrL4xWgE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王成之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_K9BcB9eP564oUz4u2arzN6
          claim_id: c_5W8Bi3vQG4G6JXNP5X5iKX
          source_id: s_4D1tv4k4Y9yeZ4vZJgwPCX
          stance: supports
          locator: CBDB:528735
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（528735）
          source: &a1
            id: s_4D1tv4k4Y9yeZ4vZJgwPCX
            source_type: api_record
            title: 中国历代人物传记资料库：王成之（CBDB 528735）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=528735&o=json
            external_identifier: CBDB:528735
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.350Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jJ58DmX72xsDn5CWsRreQP
        subject_person_id: p_Cj1gze3yZJP8s7DrL4xWgE
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
        - id: cs_74Dpv6zaGmQ2LMJXGuNEkk
          claim_id: c_jJ58DmX72xsDn5CWsRreQP
          source_id: s_4D1tv4k4Y9yeZ4vZJgwPCX
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王成之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王成之 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王成之（CBDB 528735）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=528735&o=json)
