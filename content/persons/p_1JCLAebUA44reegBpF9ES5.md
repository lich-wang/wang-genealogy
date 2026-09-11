---
schema: wang-person/v1
id: p_1JCLAebUA44reegBpF9ES5
status: active
merged_into: null
display_name: 王午基
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DJjfQKSj2ixS89ApxcPssJ
        subject_person_id: p_1JCLAebUA44reegBpF9ES5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王午基
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NY8ZDfBb4UVevS7q6QHNed
          claim_id: c_DJjfQKSj2ixS89ApxcPssJ
          source_id: s_AzpaYL58JCKWfpepaRA1cj
          stance: supports
          locator: CBDB:636423
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636423）
          source: &a1
            id: s_AzpaYL58JCKWfpepaRA1cj
            source_type: api_record
            title: 中国历代人物传记资料库：王午基（CBDB 636423）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636423&o=json
            external_identifier: CBDB:636423
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.986Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uJgXNnHDobUbULH3otdyBs
        subject_person_id: p_1JCLAebUA44reegBpF9ES5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王午基，清人物。籍贯登封，曾任訓導。（中国历代人物传记资料库 CBDB 636423）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MwHI8Zek-3tTl76U6JUKDk
          claim_id: c_uJgXNnHDobUbULH3otdyBs
          source_id: s_AzpaYL58JCKWfpepaRA1cj
          stance: supports
          locator: CBDB:636423
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

# 王午基

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王午基 | accepted |
| bio.summary | 王午基，清人物。籍贯登封，曾任訓導。（中国历代人物传记资料库 CBDB 636423） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王午基（CBDB 636423）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636423&o=json)
