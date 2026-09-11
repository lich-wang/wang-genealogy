---
schema: wang-person/v1
id: p_8WSGHAfAoQ3TLEpo8p8wJU
status: active
merged_into: null
display_name: 王重榮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xKxYJhPvJMQ3rA4pk6u6LQ
        subject_person_id: p_8WSGHAfAoQ3TLEpo8p8wJU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王重榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q5JaNBobGtbdLHT8ukq19L
          claim_id: c_xKxYJhPvJMQ3rA4pk6u6LQ
          source_id: s_7Kh4ohyjr1CuQj4gARXkoz
          stance: supports
          locator: CBDB:185355
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（185355）
          source: &a1
            id: s_7Kh4ohyjr1CuQj4gARXkoz
            source_type: api_record
            title: 中国历代人物传记资料库：王重榮（CBDB 185355）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185355&o=json
            external_identifier: CBDB:185355
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.243Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_2qVBi9Z4HhUA5oYQEEjGgi
        subject_person_id: p_8WSGHAfAoQ3TLEpo8p8wJU
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 887年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qrTpv2aaRLpgRnmYxyrTzc
          claim_id: c_2qVBi9Z4HhUA5oYQEEjGgi
          source_id: s_7Kh4ohyjr1CuQj4gARXkoz
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WvuT22T8fHnWDfM6yoM1pi
        subject_person_id: p_8WSGHAfAoQ3TLEpo8p8wJU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9wj7eT6DBhZgzaro6V11cP
          claim_id: c_WvuT22T8fHnWDfM6yoM1pi
          source_id: s_7Kh4ohyjr1CuQj4gARXkoz
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_DxMoqm4JKRYtQsFzS7n7dr
        subject_person_id: p_8WSGHAfAoQ3TLEpo8p8wJU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3HXZpwyNXgbvZPEVLsVKKN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k81yghhIXgyid3JrFjeXai
          claim_id: c_DxMoqm4JKRYtQsFzS7n7dr
          source_id: s_HrEwKektrEThhrEwHQGiXc
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HrEwKektrEThhrEwHQGiXc
            source_type: api_record
            title: 中国历代人物传记资料库：王瑶（CBDB 185931）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185931&o=json
            external_identifier: CBDB:185931
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.253Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3HXZpwyNXgbvZPEVLsVKKN
        status: active
        display_name: 王瑶
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王重榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王重榮 | accepted |
| death.date | 887年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_3HXZpwyNXgbvZPEVLsVKKN | 王瑶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑶（CBDB 185931）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185931&o=json)
- [中国历代人物传记资料库：王重榮（CBDB 185355）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185355&o=json)
