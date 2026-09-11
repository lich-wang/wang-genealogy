---
schema: wang-person/v1
id: p_ycmkbQZZF7LzT6Vt2WFeAR
status: active
merged_into: null
display_name: 王詵
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oVC7p2D97gAmyZoqJwpoeM
        subject_person_id: p_ycmkbQZZF7LzT6Vt2WFeAR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fuvn2oPEaaLB2s4LBrdXA4
          claim_id: c_oVC7p2D97gAmyZoqJwpoeM
          source_id: s_WCKbieQXUx1fAmhdhtXMXC
          stance: supports
          locator: CBDB:100885
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100885）
          source: &a1
            id: s_WCKbieQXUx1fAmhdhtXMXC
            source_type: api_record
            title: 中国历代人物传记资料库：王詵（CBDB 100885）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100885&o=json
            external_identifier: CBDB:100885
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.545Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8QocyrVjjjb7q8tQSbfA9a
        subject_person_id: p_ycmkbQZZF7LzT6Vt2WFeAR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詵，元人物。籍贯婺源州，曾任學正。（中国历代人物传记资料库 CBDB 100885）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IQT0vZb90I6wIeTbdCmRsS
          claim_id: c_8QocyrVjjjb7q8tQSbfA9a
          source_id: s_WCKbieQXUx1fAmhdhtXMXC
          stance: supports
          locator: CBDB:100885
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

# 王詵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詵 | accepted |
| bio.summary | 王詵，元人物。籍贯婺源州，曾任學正。（中国历代人物传记资料库 CBDB 100885） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王詵（CBDB 100885）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100885&o=json)
