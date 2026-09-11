---
schema: wang-person/v1
id: p_rxyMJpi4DYL3V342yLAuaM
status: active
merged_into: null
display_name: 王幾
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VoS7c6D4gsMJeM4F7TABvP
        subject_person_id: p_rxyMJpi4DYL3V342yLAuaM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王幾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WBmeqG552Gi28fDHJjCQ6E
          claim_id: c_VoS7c6D4gsMJeM4F7TABvP
          source_id: s_JWMEVmGgJJz3NFkTNMBmmC
          stance: supports
          locator: CBDB:7369
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（7369）
          source: &a1
            id: s_JWMEVmGgJJz3NFkTNMBmmC
            source_type: api_record
            title: 中国历代人物传记资料库：王幾（CBDB 7369）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7369&o=json
            external_identifier: CBDB:7369
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.474Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EvzHyQJAAsEPrDCPaEWXr5
        subject_person_id: p_rxyMJpi4DYL3V342yLAuaM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZGJsEYzCe67EWFv8DrfjgB
          claim_id: c_EvzHyQJAAsEPrDCPaEWXr5
          source_id: s_JWMEVmGgJJz3NFkTNMBmmC
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_y70rFwBnm1ypvHNpdWPa-x
        subject_person_id: p_rxyMJpi4DYL3V342yLAuaM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_urfcgqW6JdMhzi59mL1W3n
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k9shQwCaGoq9pUv9vydHB9
          claim_id: c_y70rFwBnm1ypvHNpdWPa-x
          source_id: s_JWMEVmGgJJz3NFkTNMBmmC
          stance: supports
          locator: CBDB 双向互证（子 王居正 ⇄ 父 王幾）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_urfcgqW6JdMhzi59mL1W3n
        status: active
        display_name: 王居正
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_gN6apPGRzkSxXREzwTjsi4
        subject_person_id: p_rxyMJpi4DYL3V342yLAuaM
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_d45BeB3NNFz153MkVh4Ynp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L4TaanCCfJdz9qpqsSO_xa
          claim_id: c_gN6apPGRzkSxXREzwTjsi4
          source_id: s_5RJllQccP_7h-76PtmBw9U
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1000;1002：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5RJllQccP_7h-76PtmBw9U
            source_type: api_record
            title: 中国历代人物传记资料库：曾德操（CBDB 5129）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5129&o=json
            external_identifier: CBDB:5129
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_d45BeB3NNFz153MkVh4Ynp
        status: active
        display_name: 曾德操
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王幾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王幾 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_urfcgqW6JdMhzi59mL1W3n | 王居正 | accepted |
| spouses | p_d45BeB3NNFz153MkVh4Ynp | 曾德操 | accepted |

## 外部来源

- [中国历代人物传记资料库：曾德操（CBDB 5129）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5129&o=json)
- [中国历代人物传记资料库：王幾（CBDB 7369）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7369&o=json)
