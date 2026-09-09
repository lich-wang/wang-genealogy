---
schema: wang-person/v1
id: p_VQ61EHFFsKEWGrvdUGnjC7
status: active
merged_into: null
display_name: 王康
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rdxYLFMHSH7biq8q8zLpZF
        subject_person_id: p_VQ61EHFFsKEWGrvdUGnjC7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王康
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ARZ8biEu7mvqLSc81vA26r
          claim_id: c_rdxYLFMHSH7biq8q8zLpZF
          source_id: s_gQrgamXHfdq9C5agrGnT11
          stance: supports
          locator: CBDB:689471
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（689471）
          source: &a1
            id: s_gQrgamXHfdq9C5agrGnT11
            source_type: api_record
            title: 中国历代人物传记资料库：王康（CBDB 689471）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689471&o=json
            external_identifier: CBDB:689471
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.553Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_MKLFa4MEjzFW2mB5v3MxnZ
        subject_person_id: p_VQ61EHFFsKEWGrvdUGnjC7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1086年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T1VvqumKbUAwo7ah6niGJ8
          claim_id: c_MKLFa4MEjzFW2mB5v3MxnZ
          source_id: s_gQrgamXHfdq9C5agrGnT11
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_z2pMdcMJHeRpepfmdG4vMD
        subject_person_id: p_VQ61EHFFsKEWGrvdUGnjC7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1110年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ighvy1F3YcApEh67ea5fQd
          claim_id: c_z2pMdcMJHeRpepfmdG4vMD
          source_id: s_gQrgamXHfdq9C5agrGnT11
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
        id: c_44JyiH6G46pWxwvYUHQxob
        subject_person_id: p_VQ61EHFFsKEWGrvdUGnjC7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_enoQubrx9VGqZUCQfEeJ2a
          claim_id: c_44JyiH6G46pWxwvYUHQxob
          source_id: s_gQrgamXHfdq9C5agrGnT11
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

# 王康

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王康 | accepted |
| birth.date | 1086年 | accepted |
| death.date | 1110年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王康（CBDB 689471）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=689471&o=json)
