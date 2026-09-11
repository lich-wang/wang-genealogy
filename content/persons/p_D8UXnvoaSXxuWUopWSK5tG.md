---
schema: wang-person/v1
id: p_D8UXnvoaSXxuWUopWSK5tG
status: active
merged_into: null
display_name: 王顯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WmZFxCXncY5iFbP9jQ5SBw
        subject_person_id: p_D8UXnvoaSXxuWUopWSK5tG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KS6Q34guXDP8f1yxKQqWjC
          claim_id: c_WmZFxCXncY5iFbP9jQ5SBw
          source_id: s_zP4DvxggwFNVE7JtXwnHAL
          stance: supports
          locator: CBDB:101015
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101015）
          source: &a1
            id: s_zP4DvxggwFNVE7JtXwnHAL
            source_type: api_record
            title: 中国历代人物传记资料库：王顯（CBDB 101015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101015&o=json
            external_identifier: CBDB:101015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.648Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5HD7tN3yUCSGFG9WinBks4
        subject_person_id: p_D8UXnvoaSXxuWUopWSK5tG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯，元人物。曾任縣尹。（中国历代人物传记资料库 CBDB 101015）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sHhueYNkWUw0FJ0D9CFzUC
          claim_id: c_5HD7tN3yUCSGFG9WinBks4
          source_id: s_zP4DvxggwFNVE7JtXwnHAL
          stance: supports
          locator: CBDB:101015
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

# 王顯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王顯 | accepted |
| bio.summary | 王顯，元人物。曾任縣尹。（中国历代人物传记资料库 CBDB 101015） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王顯（CBDB 101015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101015&o=json)
