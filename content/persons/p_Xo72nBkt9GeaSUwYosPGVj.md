---
schema: wang-person/v1
id: p_Xo72nBkt9GeaSUwYosPGVj
status: active
merged_into: null
display_name: 王貫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G6h1wTZsLZgY7r5TmkDUNC
        subject_person_id: p_Xo72nBkt9GeaSUwYosPGVj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ExW5466Bx8Q5C3e79gqtVe
          claim_id: c_G6h1wTZsLZgY7r5TmkDUNC
          source_id: s_GCPBV1MrAfs76e144QKXBc
          stance: supports
          locator: CBDB:192094
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（192094）
          source: &a1
            id: s_GCPBV1MrAfs76e144QKXBc
            source_type: api_record
            title: 中国历代人物传记资料库：王貫（CBDB 192094）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192094&o=json
            external_identifier: CBDB:192094
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.390Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_NgCs9aNmzWmQB6qiQ7d1NQ
        subject_person_id: p_Xo72nBkt9GeaSUwYosPGVj
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 729年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DtvLdjTRRMW1GRM2ADNjRP
          claim_id: c_NgCs9aNmzWmQB6qiQ7d1NQ
          source_id: s_GCPBV1MrAfs76e144QKXBc
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
        id: c_wnzXFMChn5S5yMPUvmJYtw
        subject_person_id: p_Xo72nBkt9GeaSUwYosPGVj
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
        - id: cs_T3QJEwNXKUm8fAc29o1Tdg
          claim_id: c_wnzXFMChn5S5yMPUvmJYtw
          source_id: s_GCPBV1MrAfs76e144QKXBc
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

# 王貫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貫 | accepted |
| death.date | 729年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王貫（CBDB 192094）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=192094&o=json)
