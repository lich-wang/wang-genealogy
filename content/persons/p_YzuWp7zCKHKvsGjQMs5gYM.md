---
schema: wang-person/v1
id: p_YzuWp7zCKHKvsGjQMs5gYM
status: active
merged_into: null
display_name: 王芹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3wWWgYDckJNwBFbqB9s36i
        subject_person_id: p_YzuWp7zCKHKvsGjQMs5gYM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fMKKmDdwkY6reRUkXd6hyx
          claim_id: c_3wWWgYDckJNwBFbqB9s36i
          source_id: s_rLuGe28SKWn9iN5yCEHpwc
          stance: supports
          locator: CBDB:539978
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（539978）
          source: &a1
            id: s_rLuGe28SKWn9iN5yCEHpwc
            source_type: api_record
            title: 中国历代人物传记资料库：王芹（CBDB 539978）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=539978&o=json
            external_identifier: CBDB:539978
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.441Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7GDNa7AzBrFtreu338KhaD
        subject_person_id: p_YzuWp7zCKHKvsGjQMs5gYM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芹，宋人物。籍贯崑山，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 539978）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bbd0L4ZYzOK-UJhYr-N_7A
          claim_id: c_7GDNa7AzBrFtreu338KhaD
          source_id: s_rLuGe28SKWn9iN5yCEHpwc
          stance: supports
          locator: CBDB:539978
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

# 王芹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王芹 | accepted |
| bio.summary | 王芹，宋人物。籍贯崑山，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 539978） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王芹（CBDB 539978）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=539978&o=json)
