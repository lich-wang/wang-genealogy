---
schema: wang-person/v1
id: p_zyXwwgy46r8C5YhZP4K9JK
status: active
merged_into: null
display_name: 宋氏
revision: 1
cbdb_id: 162879
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_icGbZm06e5uHU4HK1Z_OGy
        subject_person_id: p_zyXwwgy46r8C5YhZP4K9JK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 宋氏，史料所见人物。本项目依据《中国历代人物传记资料库：宋氏(王敬妻)（CBDB 162879）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sCMdv-sUVlKovoBCuwWK-H
          claim_id: c_icGbZm06e5uHU4HK1Z_OGy
          source_id: s_Wk2_aHmVpDK2wVB2qnPPVR
          stance: supports
          locator: CBDB:162879
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_Wk2_aHmVpDK2wVB2qnPPVR
            source_type: api_record
            title: 中国历代人物传记资料库：宋氏(王敬妻)（CBDB 162879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162879&o=json
            external_identifier: CBDB:162879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7yuhtiUV6DQCXSKDuwF1A_
        subject_person_id: p_zyXwwgy46r8C5YhZP4K9JK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 宋氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y45bJDdQFD7FRtdSafcHcO
          claim_id: c_7yuhtiUV6DQCXSKDuwF1A_
          source_id: s_Wk2_aHmVpDK2wVB2qnPPVR
          stance: supports
          locator: CBDB:162879
          quotation: null
          interpretation_note: CBDB 明确记录的王敬配偶
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
        id: c_MYCm83NLa1DA508o-UoOW8
        subject_person_id: p_DXHCabHqiAPVfRY4s5GJCY
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_zyXwwgy46r8C5YhZP4K9JK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VUUuKA1YThGFfoVv3O-8SG
          claim_id: c_MYCm83NLa1DA508o-UoOW8
          source_id: s_Wk2_aHmVpDK2wVB2qnPPVR
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Chuigong8：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DXHCabHqiAPVfRY4s5GJCY
        status: active
        display_name: 王敬
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 宋氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 宋氏，史料所见人物。本项目依据《中国历代人物传记资料库：宋氏(王敬妻)（CBDB 162879）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 宋氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_DXHCabHqiAPVfRY4s5GJCY | 王敬 | accepted |

## 外部来源

- [中国历代人物传记资料库：宋氏(王敬妻)（CBDB 162879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162879&o=json)
