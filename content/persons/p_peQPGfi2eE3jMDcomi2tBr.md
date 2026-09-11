---
schema: wang-person/v1
id: p_peQPGfi2eE3jMDcomi2tBr
status: active
merged_into: null
display_name: 盧氏
revision: 1
cbdb_id: 152940
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sLVL5VuNjVAMyr7qzl-g9v
        subject_person_id: p_peQPGfi2eE3jMDcomi2tBr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 盧氏，史料所见人物。本项目依据《中国历代人物传记资料库：盧氏(王固己妻)（CBDB 152940）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v2Q3aGZEyk7x363NrhK-a8
          claim_id: c_sLVL5VuNjVAMyr7qzl-g9v
          source_id: s_iQzeHpqOTMaWHlbiTs-q2c
          stance: supports
          locator: CBDB:152940
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_iQzeHpqOTMaWHlbiTs-q2c
            source_type: api_record
            title: 中国历代人物传记资料库：盧氏(王固己妻)（CBDB 152940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152940&o=json
            external_identifier: CBDB:152940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q-BWp2ZbH8rFq0HPtKGn9o
        subject_person_id: p_peQPGfi2eE3jMDcomi2tBr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 盧氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VABLKd9vB8ahazwB5zvaEe
          claim_id: c_Q-BWp2ZbH8rFq0HPtKGn9o
          source_id: s_iQzeHpqOTMaWHlbiTs-q2c
          stance: supports
          locator: CBDB:152940
          quotation: null
          interpretation_note: CBDB 明确记录的王固己配偶
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
        id: c_GwMV1dq0Y5nWnn7oBGtMc3
        subject_person_id: p_acJL151CL8ZU3mDEqikzmS
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_peQPGfi2eE3jMDcomi2tBr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O6iPVHro4XkT1uGmXgyeR7
          claim_id: c_GwMV1dq0Y5nWnn7oBGtMc3
          source_id: s_iQzeHpqOTMaWHlbiTs-q2c
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 471：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_acJL151CL8ZU3mDEqikzmS
        status: active
        display_name: 王固己
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 盧氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 盧氏，史料所见人物。本项目依据《中国历代人物传记资料库：盧氏(王固己妻)（CBDB 152940）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 盧氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_acJL151CL8ZU3mDEqikzmS | 王固己 | accepted |

## 外部来源

- [中国历代人物传记资料库：盧氏(王固己妻)（CBDB 152940）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152940&o=json)
