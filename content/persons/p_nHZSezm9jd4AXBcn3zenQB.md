---
schema: wang-person/v1
id: p_nHZSezm9jd4AXBcn3zenQB
status: active
merged_into: null
display_name: 王超
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ddoj7NbmVFyPh1cDdtC2Y3
        subject_person_id: p_nHZSezm9jd4AXBcn3zenQB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王超
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jkpr2HKJy7UXy4FKEW2wDG
          claim_id: c_ddoj7NbmVFyPh1cDdtC2Y3
          source_id: s_3Qt2ZHPRC86LVL2rkjQBkX
          stance: supports
          locator: CBDB:92086
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92086）
          source: &a1
            id: s_3Qt2ZHPRC86LVL2rkjQBkX
            source_type: api_record
            title: 中国历代人物传记资料库：王超（CBDB 92086）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92086&o=json
            external_identifier: CBDB:92086
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.125Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_J5HNnBB7yKf7egZxZp1Y3H
        subject_person_id: p_nHZSezm9jd4AXBcn3zenQB
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
        - id: cs_idmUiN8Pf3D4Y6KsLjprqC
          claim_id: c_J5HNnBB7yKf7egZxZp1Y3H
          source_id: s_3Qt2ZHPRC86LVL2rkjQBkX
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

# 王超

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王超 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王超（CBDB 92086）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92086&o=json)
