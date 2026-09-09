---
schema: wang-person/v1
id: p_n2fdAY63xr4h7bBuBGkvKc
status: active
merged_into: null
display_name: 王師甫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_r64mF9tg1xb7NUQHrpQZxq
        subject_person_id: p_n2fdAY63xr4h7bBuBGkvKc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王師甫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Rf9d1XHNB98ADwrW7DN7Rf
          claim_id: c_r64mF9tg1xb7NUQHrpQZxq
          source_id: s_AnmKvSkY4NsuqQiu8wKsdj
          stance: supports
          locator: CBDB:175694
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175694）
          source: &a1
            id: s_AnmKvSkY4NsuqQiu8wKsdj
            source_type: api_record
            title: 中国历代人物传记资料库：王師甫（CBDB 175694）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175694&o=json
            external_identifier: CBDB:175694
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.246Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Q4JTqUXWcbw6DQMABKi54R
        subject_person_id: p_n2fdAY63xr4h7bBuBGkvKc
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 885年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_45zJdqKgMFbvo8zW8QjNQr
          claim_id: c_Q4JTqUXWcbw6DQMABKi54R
          source_id: s_AnmKvSkY4NsuqQiu8wKsdj
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
        id: c_19YTsBcSDsNzd4M84eXjWx
        subject_person_id: p_n2fdAY63xr4h7bBuBGkvKc
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
        - id: cs_DBUSLQrvfp4AdJmnTXcZdE
          claim_id: c_19YTsBcSDsNzd4M84eXjWx
          source_id: s_AnmKvSkY4NsuqQiu8wKsdj
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

# 王師甫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王師甫 | accepted |
| death.date | 885年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王師甫（CBDB 175694）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175694&o=json)
