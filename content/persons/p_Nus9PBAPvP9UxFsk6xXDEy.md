---
schema: wang-person/v1
id: p_Nus9PBAPvP9UxFsk6xXDEy
status: active
merged_into: null
display_name: 王子苯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jWjiZJKKXKCJYVWnoemQSk
        subject_person_id: p_Nus9PBAPvP9UxFsk6xXDEy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子苯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oeGC9z4Zr3qGPPTj2A6a1L
          claim_id: c_jWjiZJKKXKCJYVWnoemQSk
          source_id: s_dRRFjrdEc6bJqrwyHDKwJV
          stance: supports
          locator: CBDB:636993
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636993）
          source: &a1
            id: s_dRRFjrdEc6bJqrwyHDKwJV
            source_type: api_record
            title: 中国历代人物传记资料库：王子苯（CBDB 636993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636993&o=json
            external_identifier: CBDB:636993
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.176Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rNGcXPHFxvsJShyd5tjA5E
        subject_person_id: p_Nus9PBAPvP9UxFsk6xXDEy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子苯，清人物。籍贯青州府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 636993）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5jnX_J2SeovW5lbI-kdTb4
          claim_id: c_rNGcXPHFxvsJShyd5tjA5E
          source_id: s_dRRFjrdEc6bJqrwyHDKwJV
          stance: supports
          locator: CBDB:636993
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

# 王子苯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子苯 | accepted |
| bio.summary | 王子苯，清人物。籍贯青州府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 636993） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王子苯（CBDB 636993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636993&o=json)
