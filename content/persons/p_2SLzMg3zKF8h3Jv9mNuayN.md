---
schema: wang-person/v1
id: p_2SLzMg3zKF8h3Jv9mNuayN
status: active
merged_into: null
display_name: 王順天
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mw2dnaqPL6RcXtor2X1fkA
        subject_person_id: p_2SLzMg3zKF8h3Jv9mNuayN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王順天
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M71d7UXm47b8L4BcaqdSUe
          claim_id: c_mw2dnaqPL6RcXtor2X1fkA
          source_id: s_HDUcFtwLgZVE7AZATRpxp5
          stance: supports
          locator: CBDB:695234
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（695234）
          source: &a1
            id: s_HDUcFtwLgZVE7AZATRpxp5
            source_type: api_record
            title: 中国历代人物传记资料库：王順天（CBDB 695234）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=695234&o=json
            external_identifier: CBDB:695234
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.536Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TUr6jFuRA8GRyA5md4PAAK
        subject_person_id: p_2SLzMg3zKF8h3Jv9mNuayN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王順天，清人物。身份为死國難。（中国历代人物传记资料库 CBDB 695234）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_P9FlFljh5COTJJqOKuZ4HG
          claim_id: c_TUr6jFuRA8GRyA5md4PAAK
          source_id: s_HDUcFtwLgZVE7AZATRpxp5
          stance: supports
          locator: CBDB:695234
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

# 王順天

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王順天 | accepted |
| bio.summary | 王順天，清人物。身份为死國難。（中国历代人物传记资料库 CBDB 695234） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王順天（CBDB 695234）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=695234&o=json)
