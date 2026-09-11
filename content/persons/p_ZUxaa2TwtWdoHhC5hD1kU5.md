---
schema: wang-person/v1
id: p_ZUxaa2TwtWdoHhC5hD1kU5
status: active
merged_into: null
display_name: 王室龍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nyNhmsijSSXPHAZdarKPBp
        subject_person_id: p_ZUxaa2TwtWdoHhC5hD1kU5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王室龍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MC521xDa2RXa2RGoFUt9GK
          claim_id: c_nyNhmsijSSXPHAZdarKPBp
          source_id: s_BHNs1A4Z6K9DFcGAjoVbWU
          stance: supports
          locator: CBDB:637156
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637156）
          source: &a1
            id: s_BHNs1A4Z6K9DFcGAjoVbWU
            source_type: api_record
            title: 中国历代人物传记资料库：王室龍（CBDB 637156）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637156&o=json
            external_identifier: CBDB:637156
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.222Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_81eq4pvZr3bUPKxVdcjXHt
        subject_person_id: p_ZUxaa2TwtWdoHhC5hD1kU5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王室龍，清人物。籍贯長沙，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 637156）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QhZ17EXOIRZeFIH6YXoR6-
          claim_id: c_81eq4pvZr3bUPKxVdcjXHt
          source_id: s_BHNs1A4Z6K9DFcGAjoVbWU
          stance: supports
          locator: CBDB:637156
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

# 王室龍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王室龍 | accepted |
| bio.summary | 王室龍，清人物。籍贯長沙，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 637156） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王室龍（CBDB 637156）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637156&o=json)
