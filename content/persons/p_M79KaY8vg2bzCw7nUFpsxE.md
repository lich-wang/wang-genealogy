---
schema: wang-person/v1
id: p_M79KaY8vg2bzCw7nUFpsxE
status: active
merged_into: null
display_name: 王讓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E11FT8PYafu89eNnBK5JUZ
        subject_person_id: p_M79KaY8vg2bzCw7nUFpsxE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王讓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6NZMKwmG732sYoVAGjpvBX
          claim_id: c_E11FT8PYafu89eNnBK5JUZ
          source_id: s_utPkKBVbig4rw6R7vQDhAe
          stance: supports
          locator: CBDB:185485
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（185485）
          source: &a1
            id: s_utPkKBVbig4rw6R7vQDhAe
            source_type: api_record
            title: 中国历代人物传记资料库：王讓（CBDB 185485）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185485&o=json
            external_identifier: CBDB:185485
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.245Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_AtSiLZBhV1zxGBnB5YP4BQ
        subject_person_id: p_M79KaY8vg2bzCw7nUFpsxE
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 875年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RtBjfANG47uShEWaaCmTyZ
          claim_id: c_AtSiLZBhV1zxGBnB5YP4BQ
          source_id: s_utPkKBVbig4rw6R7vQDhAe
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
        id: c_uG8XnKDfVJCYG5WTpN4S4c
        subject_person_id: p_M79KaY8vg2bzCw7nUFpsxE
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
        - id: cs_QcB9mNEHrJ65gRNJcoddHk
          claim_id: c_uG8XnKDfVJCYG5WTpN4S4c
          source_id: s_utPkKBVbig4rw6R7vQDhAe
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

# 王讓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王讓 | accepted |
| death.date | 875年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王讓（CBDB 185485）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185485&o=json)
