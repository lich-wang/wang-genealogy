---
schema: wang-person/v1
id: p_iHyxvVSLCLLevmA84oLG2M
status: active
merged_into: null
display_name: 王大受
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d55ra8t9tuS1B8XaiKbvpu
        subject_person_id: p_iHyxvVSLCLLevmA84oLG2M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大受
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2FxLL5cBNnTqQBfpnR3hJU
          claim_id: c_d55ra8t9tuS1B8XaiKbvpu
          source_id: s_rkBFS7b7s6ZKy1a1N6E1LK
          stance: supports
          locator: CBDB:225724
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（225724）
          source: &a1
            id: s_rkBFS7b7s6ZKy1a1N6E1LK
            source_type: api_record
            title: 中国历代人物传记资料库：王大受（CBDB 225724）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225724&o=json
            external_identifier: CBDB:225724
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.433Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JQS2aDF5YeCrYLo8FCXiwJ
        subject_person_id: p_iHyxvVSLCLLevmA84oLG2M
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WLnFhzofmgd3PPPsVsf7SJ
          claim_id: c_JQS2aDF5YeCrYLo8FCXiwJ
          source_id: s_rkBFS7b7s6ZKy1a1N6E1LK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
  descendants:
    - claim:
        id: c_h0GIPx_jDwcWugOxOMtGUa
        subject_person_id: p_iHyxvVSLCLLevmA84oLG2M
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oKtgLK3Hc3EvgppJQNGw5k
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iZ18R4pJzdZwvlDJam0i5s
          claim_id: c_h0GIPx_jDwcWugOxOMtGUa
          source_id: s_rkBFS7b7s6ZKy1a1N6E1LK
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第三甲第二百六十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oKtgLK3Hc3EvgppJQNGw5k
        status: active
        display_name: 王堦
        merged_into_person_id: null
  other: []
---

# 王大受

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大受 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_oKtgLK3Hc3EvgppJQNGw5k | 王堦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大受（CBDB 225724）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=225724&o=json)
