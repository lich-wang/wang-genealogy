---
schema: wang-person/v1
id: p_LxXprdLcPoJS36QKiuZr69
status: active
merged_into: null
display_name: 王嘉堅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_C3G652M8JWaQozQPWp34vY
        subject_person_id: p_LxXprdLcPoJS36QKiuZr69
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嘉堅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MJMx4Y59JW88AbT9xNhrzS
          claim_id: c_C3G652M8JWaQozQPWp34vY
          source_id: s_oNFgyAZN3ADwbRFxpRdD56
          stance: supports
          locator: CBDB:636609
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636609）
          source: &a1
            id: s_oNFgyAZN3ADwbRFxpRdD56
            source_type: api_record
            title: 中国历代人物传记资料库：王嘉堅（CBDB 636609）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636609&o=json
            external_identifier: CBDB:636609
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.049Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8H3sg6cL5NcK4WVJtVoLCz
        subject_person_id: p_LxXprdLcPoJS36QKiuZr69
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王嘉堅，清人物。籍贯桂陽，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 636609）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WHlS7yeZ_0NMNoq7kOwIOe
          claim_id: c_8H3sg6cL5NcK4WVJtVoLCz
          source_id: s_oNFgyAZN3ADwbRFxpRdD56
          stance: supports
          locator: CBDB:636609
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

# 王嘉堅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嘉堅 | accepted |
| bio.summary | 王嘉堅，清人物。籍贯桂陽，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 636609） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嘉堅（CBDB 636609）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636609&o=json)
