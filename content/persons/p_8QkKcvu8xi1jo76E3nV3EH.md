---
schema: wang-person/v1
id: p_8QkKcvu8xi1jo76E3nV3EH
status: active
merged_into: null
display_name: 王爌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_19zZoXwZGpL5U1ak38CNeu
        subject_person_id: p_8QkKcvu8xi1jo76E3nV3EH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jMPPihqcP2Gm9H7nBoqbDx
          claim_id: c_19zZoXwZGpL5U1ak38CNeu
          source_id: s_uEQETh5RdQy6bx45T7ac2L
          stance: supports
          locator: CBDB:476328
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（476328）
          source: &a1
            id: s_uEQETh5RdQy6bx45T7ac2L
            source_type: api_record
            title: 中国历代人物传记资料库：王爌（CBDB 476328）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476328&o=json
            external_identifier: CBDB:476328
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.452Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eczPP62qRRvBUvNF2tmywF
        subject_person_id: p_8QkKcvu8xi1jo76E3nV3EH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爌，明人物。入仕進士。（中国历代人物传记资料库 CBDB 476328）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bOVQL7bD1e8GHKcYSA7Gxu
          claim_id: c_eczPP62qRRvBUvNF2tmywF
          source_id: s_uEQETh5RdQy6bx45T7ac2L
          stance: supports
          locator: CBDB:476328
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

# 王爌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王爌 | accepted |
| bio.summary | 王爌，明人物。入仕進士。（中国历代人物传记资料库 CBDB 476328） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王爌（CBDB 476328）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476328&o=json)
