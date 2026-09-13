---
schema: wang-person/v1
id: p_mxMEcjfeSZUgdtaXm76A75
status: active
merged_into: null
display_name: 王禮道
cbdb_id: 217159
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7EiJ4DQR7agLqNFTDAM73p
        subject_person_id: p_mxMEcjfeSZUgdtaXm76A75
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禮道，史料所见人物。本项目依据《中国历代人物传记资料库：王禮道（CBDB 217159）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_pVK486HJHH-B8Y2kXkwq7f
          claim_id: c_7EiJ4DQR7agLqNFTDAM73p
          source_id: s_Z7EwEAkDLAH13ZFu9nr6Q2
          stance: supports
          locator: CBDB:217159
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_Z7EwEAkDLAH13ZFu9nr6Q2
            source_type: api_record
            title: 中国历代人物传记资料库：王禮道（CBDB 217159）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217159&o=json
            external_identifier: CBDB:217159
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qfFj7rcE2DTTgzFPfpYHxL
        subject_person_id: p_mxMEcjfeSZUgdtaXm76A75
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禮道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZxihtkW9FKypH4Zzz6913N
          claim_id: c_qfFj7rcE2DTTgzFPfpYHxL
          source_id: s_Z7EwEAkDLAH13ZFu9nr6Q2
          stance: supports
          locator: CBDB:217159
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
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
        id: c_hwb9VjhFiye2CO9ZQoL-A6
        subject_person_id: p_mxMEcjfeSZUgdtaXm76A75
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JL51TddY85M5VjjQdk9Dbd
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qiJPlaCQCaWpSDk2jccJEN
          claim_id: c_hwb9VjhFiye2CO9ZQoL-A6
          source_id: s_Z7EwEAkDLAH13ZFu9nr6Q2
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第一百五十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Z7EwEAkDLAH13ZFu9nr6Q2
            source_type: api_record
            title: 中国历代人物传记资料库：王禮道（CBDB 217159）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217159&o=json
            external_identifier: CBDB:217159
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_JL51TddY85M5VjjQdk9Dbd
        status: active
        display_name: 王衡
        merged_into_person_id: null
  other: []
---

# 王禮道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王禮道，史料所见人物。本项目依据《中国历代人物传记资料库：王禮道（CBDB 217159）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王禮道 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_JL51TddY85M5VjjQdk9Dbd | 王衡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王禮道（CBDB 217159）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217159&o=json)
