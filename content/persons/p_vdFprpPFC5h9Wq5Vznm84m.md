---
schema: wang-person/v1
id: p_vdFprpPFC5h9Wq5Vznm84m
status: active
merged_into: null
display_name: 王依仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_e6zPpAfD9Kvf51CpZQwkSP
        subject_person_id: p_vdFprpPFC5h9Wq5Vznm84m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王依仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3XA4X3VfADYgLnWRY1uB3n
          claim_id: c_e6zPpAfD9Kvf51CpZQwkSP
          source_id: s_CAU3X2ghQFKDfHrab1VqaS
          stance: supports
          locator: CBDB:413872
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（413872）
          source: &a1
            id: s_CAU3X2ghQFKDfHrab1VqaS
            source_type: api_record
            title: 中国历代人物传记资料库：王依仁（CBDB 413872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413872&o=json
            external_identifier: CBDB:413872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.914Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yFTLeHCExgw1yhx3XDeBH6
        subject_person_id: p_vdFprpPFC5h9Wq5Vznm84m
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R8CME2bLREaKY4gRJSKsnK
          claim_id: c_yFTLeHCExgw1yhx3XDeBH6
          source_id: s_CAU3X2ghQFKDfHrab1VqaS
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

# 王依仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王依仁 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王依仁（CBDB 413872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413872&o=json)
