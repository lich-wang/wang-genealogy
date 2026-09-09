---
schema: wang-person/v1
id: p_J7HfQys9cX1ZJhzFd4pGGz
status: active
merged_into: null
display_name: 王鼎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CtxYVJuUJ9pGLiNKU21Zox
        subject_person_id: p_J7HfQys9cX1ZJhzFd4pGGz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鼎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2GX1VsED3Q91dARUb983hT
          claim_id: c_CtxYVJuUJ9pGLiNKU21Zox
          source_id: s_2kevUgmwEeDE5MZSiXaCxu
          stance: supports
          locator: CBDB:57206
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（57206）
          source: &a1
            id: s_2kevUgmwEeDE5MZSiXaCxu
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 57206）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57206&o=json
            external_identifier: CBDB:57206
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.803Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_woF4hKWRuNX6oPsB9XZE8e
        subject_person_id: p_J7HfQys9cX1ZJhzFd4pGGz
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1768年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9nzcBVo87gzC7zW6Vsjiq7
          claim_id: c_woF4hKWRuNX6oPsB9XZE8e
          source_id: s_2kevUgmwEeDE5MZSiXaCxu
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
        id: c_E9FSYQeyC1bvinpee4BVCh
        subject_person_id: p_J7HfQys9cX1ZJhzFd4pGGz
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1842年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BMDMaKyNsccERxcjKc5xb5
          claim_id: c_E9FSYQeyC1bvinpee4BVCh
          source_id: s_2kevUgmwEeDE5MZSiXaCxu
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
        id: c_2H3xy4ZhqGax8N7zoUART3
        subject_person_id: p_J7HfQys9cX1ZJhzFd4pGGz
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
        - id: cs_n4r4fuW6zAw9tE5Tc3eJ3C
          claim_id: c_2H3xy4ZhqGax8N7zoUART3
          source_id: s_2kevUgmwEeDE5MZSiXaCxu
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

# 王鼎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鼎 | accepted |
| birth.date | 1768年 | accepted |
| death.date | 1842年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鼎（CBDB 57206）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57206&o=json)
