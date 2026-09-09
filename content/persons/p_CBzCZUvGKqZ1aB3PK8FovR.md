---
schema: wang-person/v1
id: p_CBzCZUvGKqZ1aB3PK8FovR
status: active
merged_into: null
display_name: 王嵩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DszQJqyR1kjCXUhW3YXuFP
        subject_person_id: p_CBzCZUvGKqZ1aB3PK8FovR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嵩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7Y12tpH8YfGajmRBXFEqa7
          claim_id: c_DszQJqyR1kjCXUhW3YXuFP
          source_id: s_Jc94yu1rqiAmMd6C2tQtVH
          stance: supports
          locator: CBDB:175872
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175872）
          source: &a1
            id: s_Jc94yu1rqiAmMd6C2tQtVH
            source_type: api_record
            title: 中国历代人物传记资料库：王嵩（CBDB 175872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175872&o=json
            external_identifier: CBDB:175872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.170Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ty1RsfHHRcp3N3cLLSGer2
        subject_person_id: p_CBzCZUvGKqZ1aB3PK8FovR
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 798年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F97N4Y6jv9fmz7S75t5wKj
          claim_id: c_ty1RsfHHRcp3N3cLLSGer2
          source_id: s_Jc94yu1rqiAmMd6C2tQtVH
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
        id: c_FPBcQ5nztk6RKtB1SkP9eJ
        subject_person_id: p_CBzCZUvGKqZ1aB3PK8FovR
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
        - id: cs_Rk3Mahp73Ddnp9u4CzxWv8
          claim_id: c_FPBcQ5nztk6RKtB1SkP9eJ
          source_id: s_Jc94yu1rqiAmMd6C2tQtVH
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

# 王嵩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嵩 | accepted |
| death.date | 798年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嵩（CBDB 175872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175872&o=json)
