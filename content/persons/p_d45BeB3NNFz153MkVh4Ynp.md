---
schema: wang-person/v1
id: p_d45BeB3NNFz153MkVh4Ynp
status: active
merged_into: null
display_name: 曾德操
revision: 1
cbdb_id: 5129
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VH4KqMJ_vi9w0G7NzQ2p_u
        subject_person_id: p_d45BeB3NNFz153MkVh4Ynp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 曾德操（1044—1074），宋人物。籍贯南豐，入仕封贈。（中国历代人物传记资料库 CBDB 5129）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QA16sQR8B1zFXXHK2Sh_3j
          claim_id: c_VH4KqMJ_vi9w0G7NzQ2p_u
          source_id: s_5RJllQccP_7h-76PtmBw9U
          stance: supports
          locator: CBDB:5129
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_z4JdrAXBe-N8gNkuD-6PU6
        subject_person_id: p_d45BeB3NNFz153MkVh4Ynp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 曾德操
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tdpi9JO4uc7HHAcN6P3dOH
          claim_id: c_z4JdrAXBe-N8gNkuD-6PU6
          source_id: s_5RJllQccP_7h-76PtmBw9U
          stance: supports
          locator: CBDB:5129
          quotation: null
          interpretation_note: CBDB 明确记录的王幾配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
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
          source: *a1
      object_person:
        id: p_rxyMJpi4DYL3V342yLAuaM
        status: active
        display_name: 王幾
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 曾德操

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 曾德操（1044—1074），宋人物。籍贯南豐，入仕封贈。（中国历代人物传记资料库 CBDB 5129） | accepted |
| name.primary | 曾德操 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_rxyMJpi4DYL3V342yLAuaM | 王幾 | accepted |

## 外部来源

- [中国历代人物传记资料库：曾德操（CBDB 5129）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5129&o=json)
