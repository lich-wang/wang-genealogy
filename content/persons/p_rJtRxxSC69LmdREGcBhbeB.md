---
schema: wang-person/v1
id: p_rJtRxxSC69LmdREGcBhbeB
status: active
merged_into: null
display_name: 王應時
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_516LbPAyWGxZGS2VZ8tx1q
        subject_person_id: p_rJtRxxSC69LmdREGcBhbeB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應時
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6VCc12f8uH1gpQYEsw1hQR
          claim_id: c_516LbPAyWGxZGS2VZ8tx1q
          source_id: s_FSkW1b1i8qB7hpnx8AZLAX
          stance: supports
          locator: CBDB:203967
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203967）
          source: &a1
            id: s_FSkW1b1i8qB7hpnx8AZLAX
            source_type: api_record
            title: 中国历代人物传记资料库：王應時（CBDB 203967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203967&o=json
            external_identifier: CBDB:203967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.809Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_RxBFSxLp1bgbNZttSZUnPM
        subject_person_id: p_rJtRxxSC69LmdREGcBhbeB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1518年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o3KgFpGVqmqUMMx7EAz4d8
          claim_id: c_RxBFSxLp1bgbNZttSZUnPM
          source_id: s_FSkW1b1i8qB7hpnx8AZLAX
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LqEkHQJ96bDuev3RevBqiM
        subject_person_id: p_rJtRxxSC69LmdREGcBhbeB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ziJ9EKwR8TAs5wtkHs54mC
          claim_id: c_LqEkHQJ96bDuev3RevBqiM
          source_id: s_FSkW1b1i8qB7hpnx8AZLAX
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
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
          source:
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
      object_person:
        id: p_kVM4bpGPXhX1ZS3CSQyiA2
        status: active
        display_name: 王亶
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王應時

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應時 | accepted |
| birth.date | 1518年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_kVM4bpGPXhX1ZS3CSQyiA2 | 王亶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王亶（CBDB 312613）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312613&o=json)
- [中国历代人物传记资料库：王應時（CBDB 203967）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203967&o=json)
