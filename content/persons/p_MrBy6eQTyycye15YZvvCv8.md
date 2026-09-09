---
schema: wang-person/v1
id: p_MrBy6eQTyycye15YZvvCv8
status: active
merged_into: null
display_name: 王瑛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L4yyoEHiTDCMVqwVCiwfMF
        subject_person_id: p_MrBy6eQTyycye15YZvvCv8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_x3TMLe1pHP1HDmUg6TF5kE
          claim_id: c_L4yyoEHiTDCMVqwVCiwfMF
          source_id: s_eMb9QkEtkDabr7duKZRoVQ
          stance: supports
          locator: CBDB:488948
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（488948）
          source: &a1
            id: s_eMb9QkEtkDabr7duKZRoVQ
            source_type: api_record
            title: 中国历代人物传记资料库：王瑛（CBDB 488948）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=488948&o=json
            external_identifier: CBDB:488948
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.010Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CxE2uCLxuR7zz9FXf8CMEn
        subject_person_id: p_MrBy6eQTyycye15YZvvCv8
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
        - id: cs_TkFn9bMfGd3aEQNw7P3nQB
          claim_id: c_CxE2uCLxuR7zz9FXf8CMEn
          source_id: s_eMb9QkEtkDabr7duKZRoVQ
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

# 王瑛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑛 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑛（CBDB 488948）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=488948&o=json)
