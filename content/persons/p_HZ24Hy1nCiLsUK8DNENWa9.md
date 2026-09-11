---
schema: wang-person/v1
id: p_HZ24Hy1nCiLsUK8DNENWa9
status: active
merged_into: null
display_name: 王佩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rFAgna3YTJRQXbJYnjpDha
        subject_person_id: p_HZ24Hy1nCiLsUK8DNENWa9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zUtGPVM1agpQbHHLTCidFX
          claim_id: c_rFAgna3YTJRQXbJYnjpDha
          source_id: s_zuWLQ2PQ8Vw7bQHbiVPHBE
          stance: supports
          locator: CBDB:477305
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（477305）
          source: &a1
            id: s_zuWLQ2PQ8Vw7bQHbiVPHBE
            source_type: api_record
            title: 中国历代人物传记资料库：王佩（CBDB 477305）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=477305&o=json
            external_identifier: CBDB:477305
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.515Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4PGa6HSZ63Gnib5BQhG7Mm
        subject_person_id: p_HZ24Hy1nCiLsUK8DNENWa9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佩，明人物。入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 477305）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oRlgHgLOqiiCsh8dEOc8ad
          claim_id: c_4PGa6HSZ63Gnib5BQhG7Mm
          source_id: s_zuWLQ2PQ8Vw7bQHbiVPHBE
          stance: supports
          locator: CBDB:477305
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

# 王佩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佩 | accepted |
| bio.summary | 王佩，明人物。入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 477305） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王佩（CBDB 477305）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=477305&o=json)
