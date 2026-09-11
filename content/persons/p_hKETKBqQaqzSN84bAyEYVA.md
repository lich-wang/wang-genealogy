---
schema: wang-person/v1
id: p_hKETKBqQaqzSN84bAyEYVA
status: active
merged_into: null
display_name: 王組
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EJ1G5HTHer7Xm3JBkfDk7R
        subject_person_id: p_hKETKBqQaqzSN84bAyEYVA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王組
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WP7GMAe4dEBJ1KSojXyesh
          claim_id: c_EJ1G5HTHer7Xm3JBkfDk7R
          source_id: s_SksL9Y7PWfmtkqiUYf653Y
          stance: supports
          locator: CBDB:333623
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（333623）
          source: &a1
            id: s_SksL9Y7PWfmtkqiUYf653Y
            source_type: api_record
            title: 中国历代人物传记资料库：王組（CBDB 333623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333623&o=json
            external_identifier: CBDB:333623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.421Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GnR1otVtfs4rqen4SVyHkE
        subject_person_id: p_hKETKBqQaqzSN84bAyEYVA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王組，明人物。隆慶二年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 333623）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ez0rInHK4z-5hdYu_-wkkw
          claim_id: c_GnR1otVtfs4rqen4SVyHkE
          source_id: s_SksL9Y7PWfmtkqiUYf653Y
          stance: supports
          locator: CBDB:333623
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

# 王組

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王組 | accepted |
| bio.summary | 王組，明人物。隆慶二年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 333623） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王組（CBDB 333623）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333623&o=json)
