---
schema: wang-person/v1
id: p_M1PFNJsfKadpAQXffxK3F9
status: active
merged_into: null
display_name: 王應中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rRNeetYoHeHSqzCUQtkxnV
        subject_person_id: p_M1PFNJsfKadpAQXffxK3F9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XYY8fmMivH8fiPTH3qS3eZ
          claim_id: c_rRNeetYoHeHSqzCUQtkxnV
          source_id: s_JtVg3q72i8GxMFAp5uCsGo
          stance: supports
          locator: CBDB:221577
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221577）
          source: &a1
            id: s_JtVg3q72i8GxMFAp5uCsGo
            source_type: api_record
            title: 中国历代人物传记资料库：王應中（CBDB 221577）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221577&o=json
            external_identifier: CBDB:221577
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.315Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9QQ33wpVMuYLU7U5VdeBKw
        subject_person_id: p_M1PFNJsfKadpAQXffxK3F9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應中，明人物。萬曆八年進士，籍贯龍溪。（中国历代人物传记资料库 CBDB 221577）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Jo23ZtArS8Vdg3iEF9idnZ
          claim_id: c_9QQ33wpVMuYLU7U5VdeBKw
          source_id: s_JtVg3q72i8GxMFAp5uCsGo
          stance: supports
          locator: CBDB:221577
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

# 王應中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應中 | accepted |
| bio.summary | 王應中，明人物。萬曆八年進士，籍贯龍溪。（中国历代人物传记资料库 CBDB 221577） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應中（CBDB 221577）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221577&o=json)
