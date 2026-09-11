---
schema: wang-person/v1
id: p_D5MgmHLU4rk55iYNiZc736
status: active
merged_into: null
display_name: 王宣
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qkbjrAnocFEm2fwfEE6G2B
        subject_person_id: p_D5MgmHLU4rk55iYNiZc736
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Guxcxv8bPV13HWdka71JQi
          claim_id: c_qkbjrAnocFEm2fwfEE6G2B
          source_id: s_QGmM2G4C5qN5ZvXNohgoyY
          stance: supports
          locator: CBDB:45477
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（45477）
          source: &a1
            id: s_QGmM2G4C5qN5ZvXNohgoyY
            source_type: api_record
            title: 中国历代人物传记资料库：王宣（CBDB 45477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45477&o=json
            external_identifier: CBDB:45477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.657Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BxULVmcWKPyWdVBXV3e2mm
        subject_person_id: p_D5MgmHLU4rk55iYNiZc736
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣，史料所见人物。本项目依据《中国历代人物传记资料库：王宣（CBDB 45477）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pWjBUB9usy3KwvUmEc7ndg
          claim_id: c_BxULVmcWKPyWdVBXV3e2mm
          source_id: s_QGmM2G4C5qN5ZvXNohgoyY
          stance: supports
          locator: CBDB:45477
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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
        id: c_BgkyydOOXqx33Nd1XD6gB5
        subject_person_id: p_D5MgmHLU4rk55iYNiZc736
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_EY3BamwDJhMzFnRMqmdX3y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qP1wVja8MSG9DHniIQWg0p
          claim_id: c_BgkyydOOXqx33Nd1XD6gB5
          source_id: s_9U-ZprQMn2oJoGrPVbzYKF
          stance: supports
          locator: CBDB 双向互证（妻子 曹氏(王宣妻)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9U-ZprQMn2oJoGrPVbzYKF
            source_type: api_record
            title: 中国历代人物传记资料库：曹氏(王宣妻)（CBDB 45476）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45476&o=json
            external_identifier: CBDB:45476
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EY3BamwDJhMzFnRMqmdX3y
        status: active
        display_name: 曹氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王宣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宣 | accepted |
| bio.summary | 王宣，史料所见人物。本项目依据《中国历代人物传记资料库：王宣（CBDB 45477）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_EY3BamwDJhMzFnRMqmdX3y | 曹氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：曹氏(王宣妻)（CBDB 45476）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45476&o=json)
- [中国历代人物传记资料库：王宣（CBDB 45477）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45477&o=json)
