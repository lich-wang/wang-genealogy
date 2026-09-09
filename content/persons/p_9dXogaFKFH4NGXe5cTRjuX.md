---
schema: wang-person/v1
id: p_9dXogaFKFH4NGXe5cTRjuX
status: active
merged_into: null
display_name: 王天佑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_f8Mchaj9fhBwqi9eq4fqFp
        subject_person_id: p_9dXogaFKFH4NGXe5cTRjuX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天佑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xxVWPL9vGUAaoxUCZ4TXK9
          claim_id: c_f8Mchaj9fhBwqi9eq4fqFp
          source_id: s_BPhcejVbKqG8XeNh6BPqMV
          stance: supports
          locator: CBDB:101080
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101080）
          source: &a1
            id: s_BPhcejVbKqG8XeNh6BPqMV
            source_type: api_record
            title: 中国历代人物传记资料库：王天佑（CBDB 101080）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101080&o=json
            external_identifier: CBDB:101080
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.676Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_YfWkjEFhL4mXHR9btcXUkE
        subject_person_id: p_9dXogaFKFH4NGXe5cTRjuX
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1326年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pAE6hBq7ujDvf6KDuw8i8W
          claim_id: c_YfWkjEFhL4mXHR9btcXUkE
          source_id: s_BPhcejVbKqG8XeNh6BPqMV
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
        id: c_FPNEBbXXBLnZNXaZK9jym5
        subject_person_id: p_9dXogaFKFH4NGXe5cTRjuX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x5ZTR3yn1qY1iEEdCCtgwF
          claim_id: c_FPNEBbXXBLnZNXaZK9jym5
          source_id: s_BPhcejVbKqG8XeNh6BPqMV
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

# 王天佑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王天佑 | accepted |
| death.date | 1326年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王天佑（CBDB 101080）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101080&o=json)
