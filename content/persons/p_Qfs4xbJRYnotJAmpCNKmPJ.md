---
schema: wang-person/v1
id: p_Qfs4xbJRYnotJAmpCNKmPJ
status: active
merged_into: null
display_name: 王敞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bkXmt2y4ty1Hnt7yi6kGZt
        subject_person_id: p_Qfs4xbJRYnotJAmpCNKmPJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_c9gKkqWgQauUue1BswLv3G
          claim_id: c_bkXmt2y4ty1Hnt7yi6kGZt
          source_id: s_xEd8G2mF9W2u7RT8cpCJ8h
          stance: supports
          locator: CBDB:343940
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（343940）
          source: &a1
            id: s_xEd8G2mF9W2u7RT8cpCJ8h
            source_type: api_record
            title: 中国历代人物传记资料库：王敞（CBDB 343940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343940&o=json
            external_identifier: CBDB:343940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.598Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WNrHL5MAiijgKG5yfQHutV
        subject_person_id: p_Qfs4xbJRYnotJAmpCNKmPJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敞，清人物。明清進士進士，籍贯安邱，入仕進士。（中国历代人物传记资料库 CBDB 343940）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fADWdQItc184doPVYS_tQ0
          claim_id: c_WNrHL5MAiijgKG5yfQHutV
          source_id: s_xEd8G2mF9W2u7RT8cpCJ8h
          stance: supports
          locator: CBDB:343940
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

# 王敞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敞 | accepted |
| bio.summary | 王敞，清人物。明清進士進士，籍贯安邱，入仕進士。（中国历代人物传记资料库 CBDB 343940） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敞（CBDB 343940）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=343940&o=json)
