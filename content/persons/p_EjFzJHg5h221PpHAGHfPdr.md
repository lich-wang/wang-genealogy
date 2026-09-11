---
schema: wang-person/v1
id: p_EjFzJHg5h221PpHAGHfPdr
status: active
merged_into: null
display_name: 王萬
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2se5UVGY9NBgv2FreMGGje
        subject_person_id: p_EjFzJHg5h221PpHAGHfPdr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kR9JUoL3PywX9REkT545TJ
          claim_id: c_2se5UVGY9NBgv2FreMGGje
          source_id: s_etuAeVXckvLAns2ALrv3CZ
          stance: supports
          locator: CBDB:38988
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38988）
          source: &a1
            id: s_etuAeVXckvLAns2ALrv3CZ
            source_type: api_record
            title: 中国历代人物传记资料库：王萬（CBDB 38988）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38988&o=json
            external_identifier: CBDB:38988
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.578Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_vo6jx9snYs436Q2D4QPWgm
        subject_person_id: p_EjFzJHg5h221PpHAGHfPdr
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1234年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xa8vvX6C4QF5E538gG4QJY
          claim_id: c_vo6jx9snYs436Q2D4QPWgm
          source_id: s_etuAeVXckvLAns2ALrv3CZ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HK1GWtAL2zjHM6NahKfioh
        subject_person_id: p_EjFzJHg5h221PpHAGHfPdr
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
        - id: cs_kGWV1NHg5AVNzJMAgtpknX
          claim_id: c_HK1GWtAL2zjHM6NahKfioh
          source_id: s_etuAeVXckvLAns2ALrv3CZ
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
        id: c_k6y2Rx_lh5LnufLP8aZ1WI
        subject_person_id: p_EjFzJHg5h221PpHAGHfPdr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_n1ssVsuqw2dQiJ1WX373Gj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_URpiNVIiSzzkbP1ax8HUOF
          claim_id: c_k6y2Rx_lh5LnufLP8aZ1WI
          source_id: s_Y5FkJfmGHCmt6saoLa3s35
          stance: supports
          locator: 鶴山先生大全文集，84/墓誌銘：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Y5FkJfmGHCmt6saoLa3s35
            source_type: api_record
            title: 中国历代人物传记资料库：王遵（CBDB 43811）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=43811&o=json
            external_identifier: CBDB:43811
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.650Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_n1ssVsuqw2dQiJ1WX373Gj
        status: active
        display_name: 王遵
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王萬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萬 | accepted |
| death.date | 1234年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_n1ssVsuqw2dQiJ1WX373Gj | 王遵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王萬（CBDB 38988）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38988&o=json)
- [中国历代人物传记资料库：王遵（CBDB 43811）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=43811&o=json)
