---
schema: wang-person/v1
id: p_HVq5WLPkkL1SgUDkn67MEE
status: active
merged_into: null
display_name: 王聲宏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hj18u3Jp7zPLGbZB9L6qe6
        subject_person_id: p_HVq5WLPkkL1SgUDkn67MEE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聲宏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_d45sepPGn3CF9AED5W3iN2
          claim_id: c_hj18u3Jp7zPLGbZB9L6qe6
          source_id: s_uShXtTuW1EVRgaL6Gz6Eir
          stance: supports
          locator: CBDB:636833
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636833）
          source: &a1
            id: s_uShXtTuW1EVRgaL6Gz6Eir
            source_type: api_record
            title: 中国历代人物传记资料库：王聲宏（CBDB 636833）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636833&o=json
            external_identifier: CBDB:636833
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.118Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EFgaaKupx9U3kABrWwn64e
        subject_person_id: p_HVq5WLPkkL1SgUDkn67MEE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聲宏，清人物。籍贯松江府，曾任復設訓導。（中国历代人物传记资料库 CBDB 636833）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_K7mRlFCXjK4p0i3tw8m9MH
          claim_id: c_EFgaaKupx9U3kABrWwn64e
          source_id: s_uShXtTuW1EVRgaL6Gz6Eir
          stance: supports
          locator: CBDB:636833
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

# 王聲宏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王聲宏 | accepted |
| bio.summary | 王聲宏，清人物。籍贯松江府，曾任復設訓導。（中国历代人物传记资料库 CBDB 636833） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王聲宏（CBDB 636833）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636833&o=json)
