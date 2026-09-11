---
schema: wang-person/v1
id: p_E7BSns8fMsKpZY1c37SApJ
status: active
merged_into: null
display_name: 王朝典
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DKxuv2zWBJA5CZLzBHxWLo
        subject_person_id: p_E7BSns8fMsKpZY1c37SApJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝典
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fLLdJbjHU1htE7gxwB19zf
          claim_id: c_DKxuv2zWBJA5CZLzBHxWLo
          source_id: s_Ke7RTgt9t7gFh8DiUfh5dN
          stance: supports
          locator: CBDB:638610
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638610）
          source: &a1
            id: s_Ke7RTgt9t7gFh8DiUfh5dN
            source_type: api_record
            title: 中国历代人物传记资料库：王朝典（CBDB 638610）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638610&o=json
            external_identifier: CBDB:638610
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.693Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4c3Z8GDqJGuQGR44d3nD6g
        subject_person_id: p_E7BSns8fMsKpZY1c37SApJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝典，清人物。籍贯遵化州，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 638610）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_arYyK4XBKnIJ-pCjC2APM1
          claim_id: c_4c3Z8GDqJGuQGR44d3nD6g
          source_id: s_Ke7RTgt9t7gFh8DiUfh5dN
          stance: supports
          locator: CBDB:638610
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

# 王朝典

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朝典 | accepted |
| bio.summary | 王朝典，清人物。籍贯遵化州，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 638610） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王朝典（CBDB 638610）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638610&o=json)
