---
schema: wang-person/v1
id: p_Fx3QdgBeXUo7fgBNyaTDbq
status: active
merged_into: null
display_name: 王夢經
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dqGFrjG1zzsf8vpARUdYqv
        subject_person_id: p_Fx3QdgBeXUo7fgBNyaTDbq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢經
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_K9A5Bso69JWAqGWpVYByoj
          claim_id: c_dqGFrjG1zzsf8vpARUdYqv
          source_id: s_dERQeSX9zMxeAgZZyR3GkE
          stance: supports
          locator: CBDB:536610
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（536610）
          source: &a1
            id: s_dERQeSX9zMxeAgZZyR3GkE
            source_type: api_record
            title: 中国历代人物传记资料库：王夢經（CBDB 536610）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=536610&o=json
            external_identifier: CBDB:536610
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.405Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5K4cRN7cPwPGioQL6mCAAL
        subject_person_id: p_Fx3QdgBeXUo7fgBNyaTDbq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢經，宋人物。籍贯隆興府，入仕進士。（中国历代人物传记资料库 CBDB 536610）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YMDZuD86ykmJr2cIApL72E
          claim_id: c_5K4cRN7cPwPGioQL6mCAAL
          source_id: s_dERQeSX9zMxeAgZZyR3GkE
          stance: supports
          locator: CBDB:536610
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

# 王夢經

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王夢經 | accepted |
| bio.summary | 王夢經，宋人物。籍贯隆興府，入仕進士。（中国历代人物传记资料库 CBDB 536610） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王夢經（CBDB 536610）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=536610&o=json)
