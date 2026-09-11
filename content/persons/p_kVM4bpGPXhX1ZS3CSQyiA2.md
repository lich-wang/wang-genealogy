---
schema: wang-person/v1
id: p_kVM4bpGPXhX1ZS3CSQyiA2
status: active
merged_into: null
display_name: 王亶
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MD3wGSvWLCnKSmnpYudvEH
        subject_person_id: p_kVM4bpGPXhX1ZS3CSQyiA2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ps5pKZ48EtCbNHLjdPA8yF
          claim_id: c_MD3wGSvWLCnKSmnpYudvEH
          source_id: s_txWMW77HDPJHkyCSFFRJMK
          stance: supports
          locator: CBDB:312613
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（312613）
          source: &a1
            id: s_txWMW77HDPJHkyCSFFRJMK
            source_type: api_record
            title: 中国历代人物传记资料库：王亶（CBDB 312613）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312613&o=json
            external_identifier: CBDB:312613
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.871Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mXKLTM27rBL6xVp7t6CEN7
        subject_person_id: p_kVM4bpGPXhX1ZS3CSQyiA2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亶，明人物。嘉靖二十九年進士。（中国历代人物传记资料库 CBDB 312613）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JyczrOSun6_2dxwZ1k3Y4G
          claim_id: c_mXKLTM27rBL6xVp7t6CEN7
          source_id: s_txWMW77HDPJHkyCSFFRJMK
          stance: supports
          locator: CBDB:312613
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
        id: c_kuLdsKF97P2vu1IXJqp9GA
        subject_person_id: p_kVM4bpGPXhX1ZS3CSQyiA2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_rJtRxxSC69LmdREGcBhbeB
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p7K45hP66WGogE2lXYsOFl
          claim_id: c_kuLdsKF97P2vu1IXJqp9GA
          source_id: s_txWMW77HDPJHkyCSFFRJMK
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第二甲第八十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rJtRxxSC69LmdREGcBhbeB
        status: active
        display_name: 王應時
        merged_into_person_id: null
  other: []
---

# 王亶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王亶 | accepted |
| bio.summary | 王亶，明人物。嘉靖二十九年進士。（中国历代人物传记资料库 CBDB 312613） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_rJtRxxSC69LmdREGcBhbeB | 王應時 | accepted |

## 外部来源

- [中国历代人物传记资料库：王亶（CBDB 312613）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312613&o=json)
