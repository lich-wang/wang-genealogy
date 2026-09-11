---
schema: wang-person/v1
id: p_D6iTtW3jyBf7Zp2H1Jv16F
status: active
merged_into: null
display_name: 邵氏
revision: 1
cbdb_id: 562910
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MuB0R3oTyPZy1ymVDh54nH
        subject_person_id: p_D6iTtW3jyBf7Zp2H1Jv16F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 邵氏，史料所见人物。本项目依据《中国历代人物传记资料库：邵氏(邵公輔女)（CBDB 562910）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K4ZgU7RIKOfDW5BEQNEtUB
          claim_id: c_MuB0R3oTyPZy1ymVDh54nH
          source_id: s_iMLFbwCD_BGcPMWybRb04n
          stance: supports
          locator: CBDB:562910
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_iMLFbwCD_BGcPMWybRb04n
            source_type: api_record
            title: 中国历代人物传记资料库：邵氏(邵公輔女)（CBDB 562910）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562910&o=json
            external_identifier: CBDB:562910
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_deuV2OEzrIiZ1e3rA4GrdS
        subject_person_id: p_D6iTtW3jyBf7Zp2H1Jv16F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 邵氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4kEAIkne3U15doyX3rmb-v
          claim_id: c_deuV2OEzrIiZ1e3rA4GrdS
          source_id: s_iMLFbwCD_BGcPMWybRb04n
          stance: supports
          locator: CBDB:562910
          quotation: null
          interpretation_note: CBDB 明确记录的王敦詩配偶
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
        id: c_e41yeHsSmOrUW1cd11rVKz
        subject_person_id: p_NUHqPktjA4K6nzuBNfdci1
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_D6iTtW3jyBf7Zp2H1Jv16F
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WsJcUD-7PqnrW8Z_9ZdG0p
          claim_id: c_e41yeHsSmOrUW1cd11rVKz
          source_id: s_iMLFbwCD_BGcPMWybRb04n
          stance: supports
          locator: 山左冢墓遺文，邵公輔墓誌：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NUHqPktjA4K6nzuBNfdci1
        status: active
        display_name: 王敦詩
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 邵氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 邵氏，史料所见人物。本项目依据《中国历代人物传记资料库：邵氏(邵公輔女)（CBDB 562910）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 邵氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_NUHqPktjA4K6nzuBNfdci1 | 王敦詩 | accepted |

## 外部来源

- [中国历代人物传记资料库：邵氏(邵公輔女)（CBDB 562910）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562910&o=json)
