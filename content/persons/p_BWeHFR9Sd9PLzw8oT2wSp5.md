---
schema: wang-person/v1
id: p_BWeHFR9Sd9PLzw8oT2wSp5
status: active
merged_into: null
display_name: 王鑒
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ceRMSuDWNkqF1qRpEAFk8v
        subject_person_id: p_BWeHFR9Sd9PLzw8oT2wSp5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9ozf978Rp9Df4sE4eJbAM1
          claim_id: c_ceRMSuDWNkqF1qRpEAFk8v
          source_id: s_btifFD7s3brSCtBXScW1vR
          stance: supports
          locator: CBDB:311216
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（311216）
          source: &a1
            id: s_btifFD7s3brSCtBXScW1vR
            source_type: api_record
            title: 中国历代人物传记资料库：王鑒（CBDB 311216）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311216&o=json
            external_identifier: CBDB:311216
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.851Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_REaDzLZoruJYSD2Phj88mt
        subject_person_id: p_BWeHFR9Sd9PLzw8oT2wSp5
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
        - id: cs_6XJH12m2NM347eEiKyNUo3
          claim_id: c_REaDzLZoruJYSD2Phj88mt
          source_id: s_btifFD7s3brSCtBXScW1vR
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
  ancestors: []
  descendants:
    - claim:
        id: c_0kPbvuLxsMAAR_GCIxTWSJ
        subject_person_id: p_BWeHFR9Sd9PLzw8oT2wSp5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dBDSp35EhkaWHCV6D81q6n
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZoEp3I3WgykK9ng2auRhy7
          claim_id: c_0kPbvuLxsMAAR_GCIxTWSJ
          source_id: s_btifFD7s3brSCtBXScW1vR
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第一百六十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dBDSp35EhkaWHCV6D81q6n
        status: active
        display_name: 王大猷
        merged_into_person_id: null
  other: []
---

# 王鑒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑒 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_dBDSp35EhkaWHCV6D81q6n | 王大猷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑒（CBDB 311216）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311216&o=json)
