---
schema: wang-person/v1
id: p_GTQf4XP4NvuqCu2E9bL587
status: active
merged_into: null
display_name: 王即紱
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UHYNpMy2BD63SyWsRQTTjV
        subject_person_id: p_GTQf4XP4NvuqCu2E9bL587
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王即紱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1jPKeXJB2PB3BqVNhVCuzw
          claim_id: c_UHYNpMy2BD63SyWsRQTTjV
          source_id: s_61UPnbHjSoEaDq97C5f2aS
          stance: supports
          locator: CBDB:527063
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（527063）
          source: &a1
            id: s_61UPnbHjSoEaDq97C5f2aS
            source_type: api_record
            title: 中国历代人物传记资料库：王即紱（CBDB 527063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527063&o=json
            external_identifier: CBDB:527063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.343Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6E3MRLxDEcftfs1zq4MEBY
        subject_person_id: p_GTQf4XP4NvuqCu2E9bL587
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YpTpo2FN1CA6oNJSvfojVS
          claim_id: c_6E3MRLxDEcftfs1zq4MEBY
          source_id: s_61UPnbHjSoEaDq97C5f2aS
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_aDZGcEbjnRDSSLxxkMBfTZ
        subject_person_id: p_oZS1XpKQaQAcuLEyVp74rc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GTQf4XP4NvuqCu2E9bL587
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YULugWXnARnPs1yY6-wMHB
          claim_id: c_aDZGcEbjnRDSSLxxkMBfTZ
          source_id: s_61UPnbHjSoEaDq97C5f2aS
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13223：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oZS1XpKQaQAcuLEyVp74rc
        status: active
        display_name: 王繻
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王即紱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王即紱 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oZS1XpKQaQAcuLEyVp74rc | 王繻 | accepted |

## 外部来源

- [中国历代人物传记资料库：王即紱（CBDB 527063）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527063&o=json)
