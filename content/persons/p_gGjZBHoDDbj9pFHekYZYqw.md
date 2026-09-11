---
schema: wang-person/v1
id: p_gGjZBHoDDbj9pFHekYZYqw
status: active
merged_into: null
display_name: 王灌
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K2duFh5XA9zp9Hsm4o7Jry
        subject_person_id: p_gGjZBHoDDbj9pFHekYZYqw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王灌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8oQXiMHK8BtBLt4Mhf8U3R
          claim_id: c_K2duFh5XA9zp9Hsm4o7Jry
          source_id: s_qkW3z3kvfwTuE7YPQuMZem
          stance: supports
          locator: CBDB:312061
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（312061）
          source: &a1
            id: s_qkW3z3kvfwTuE7YPQuMZem
            source_type: api_record
            title: 中国历代人物传记资料库：王灌（CBDB 312061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312061&o=json
            external_identifier: CBDB:312061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.863Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mN9C2VdUcV7r1xkzJQHzXT
        subject_person_id: p_gGjZBHoDDbj9pFHekYZYqw
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
        - id: cs_bt5MK6x9oaQmmbSbQHuyt2
          claim_id: c_mN9C2VdUcV7r1xkzJQHzXT
          source_id: s_qkW3z3kvfwTuE7YPQuMZem
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_u4i-zcB829ywiWwbG3I6aO
        subject_person_id: p_gGjZBHoDDbj9pFHekYZYqw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qCF2nAdW3AwQM2sNjTW55F
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k33HUxL9jqe8W_yibxsZAz
          claim_id: c_u4i-zcB829ywiWwbG3I6aO
          source_id: s_qkW3z3kvfwTuE7YPQuMZem
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第二甲第三十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qCF2nAdW3AwQM2sNjTW55F
        status: active
        display_name: 王獻圖
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王灌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王灌 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_qCF2nAdW3AwQM2sNjTW55F | 王獻圖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王灌（CBDB 312061）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312061&o=json)
