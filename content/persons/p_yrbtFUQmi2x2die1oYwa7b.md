---
schema: wang-person/v1
id: p_yrbtFUQmi2x2die1oYwa7b
status: active
merged_into: null
display_name: 王斌
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7HtXuLqP83hhxsQGgYLtTG
        subject_person_id: p_yrbtFUQmi2x2die1oYwa7b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7HwDCZY2AHUcpAvNbkF3gZ
          claim_id: c_7HtXuLqP83hhxsQGgYLtTG
          source_id: s_qBt4L6ytE5jq33sMXrAqa6
          stance: supports
          locator: CBDB:241028
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（241028）
          source: &a1
            id: s_qBt4L6ytE5jq33sMXrAqa6
            source_type: api_record
            title: 中国历代人物传记资料库：王斌（CBDB 241028）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241028&o=json
            external_identifier: CBDB:241028
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.937Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mKD6N5YBL2cAvP2StBWuMD
        subject_person_id: p_yrbtFUQmi2x2die1oYwa7b
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斌，明人物。正統十三年進士。（中国历代人物传记资料库 CBDB 241028）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_btcGLJ79j9nhfg6lRzsgsU
          claim_id: c_mKD6N5YBL2cAvP2StBWuMD
          source_id: s_qBt4L6ytE5jq33sMXrAqa6
          stance: supports
          locator: CBDB:241028
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_ecZxNsFJ7AmvpAu_2bFtzn
        subject_person_id: p_yrbtFUQmi2x2die1oYwa7b
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_yUh5Ys3GsJr5X9EvLigP9m
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lSD8Kc8d472J5skbcq2oaf
          claim_id: c_ecZxNsFJ7AmvpAu_2bFtzn
          source_id: s_qBt4L6ytE5jq33sMXrAqa6
          stance: supports
          locator: 正統十三年進士登科錄:一卷，第三甲第四十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yUh5Ys3GsJr5X9EvLigP9m
        status: active
        display_name: 王璧
        merged_into_person_id: null
  other: []
---

# 王斌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王斌 | accepted |
| bio.summary | 王斌，明人物。正統十三年進士。（中国历代人物传记资料库 CBDB 241028） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_yUh5Ys3GsJr5X9EvLigP9m | 王璧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王斌（CBDB 241028）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241028&o=json)
