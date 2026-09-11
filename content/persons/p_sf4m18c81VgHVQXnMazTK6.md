---
schema: wang-person/v1
id: p_sf4m18c81VgHVQXnMazTK6
status: active
merged_into: null
display_name: 王子蘋
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RoEfoLLm9FvQQDMEUbfW9Y
        subject_person_id: p_sf4m18c81VgHVQXnMazTK6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子蘋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KWcDA9EoC3RccQa39zAxPQ
          claim_id: c_RoEfoLLm9FvQQDMEUbfW9Y
          source_id: s_8SSd48Fpj25TNXxQApdJD5
          stance: supports
          locator: CBDB:636994
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636994）
          source: &a1
            id: s_8SSd48Fpj25TNXxQApdJD5
            source_type: api_record
            title: 中国历代人物传记资料库：王子蘋（CBDB 636994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636994&o=json
            external_identifier: CBDB:636994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.176Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nqL95m3HC4mPvGSgJrqoA6
        subject_person_id: p_sf4m18c81VgHVQXnMazTK6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子蘋，清人物。籍贯青州府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 636994）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Q_OwjVC21qM9cJdr_yw7c6
          claim_id: c_nqL95m3HC4mPvGSgJrqoA6
          source_id: s_8SSd48Fpj25TNXxQApdJD5
          stance: supports
          locator: CBDB:636994
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

# 王子蘋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子蘋 | accepted |
| bio.summary | 王子蘋，清人物。籍贯青州府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 636994） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王子蘋（CBDB 636994）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636994&o=json)
