---
schema: wang-person/v1
id: p_CaFAq3crWp9M1ZxohV7MYV
status: active
merged_into: null
display_name: 王文韶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Hc5qs9gyS9EKJMDb7VbJbS
        subject_person_id: p_CaFAq3crWp9M1ZxohV7MYV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文韶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hBnXMoNnL7SFL9HTqmrGz5
          claim_id: c_Hc5qs9gyS9EKJMDb7VbJbS
          source_id: s_BDbh8sVCTPhTPSCoHWq2Jb
          stance: supports
          locator: CBDB:341610
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（341610）
          source: &a1
            id: s_BDbh8sVCTPhTPSCoHWq2Jb
            source_type: api_record
            title: 中国历代人物传记资料库：王文韶（CBDB 341610）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341610&o=json
            external_identifier: CBDB:341610
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.612Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_17MeUVnu4VzyKmVU3n5RrP
        subject_person_id: p_CaFAq3crWp9M1ZxohV7MYV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文韶，清人物。明清進士進士，籍贯仁和，入仕進士。（中国历代人物传记资料库 CBDB 341610）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MvJGeWrVWKgys1TvWjkbgb
          claim_id: c_17MeUVnu4VzyKmVU3n5RrP
          source_id: s_BDbh8sVCTPhTPSCoHWq2Jb
          stance: supports
          locator: CBDB:341610
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王文韶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文韶 | accepted |
| bio.summary | 王文韶，清人物。明清進士進士，籍贯仁和，入仕進士。（中国历代人物传记资料库 CBDB 341610） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文韶（CBDB 341610）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341610&o=json)
