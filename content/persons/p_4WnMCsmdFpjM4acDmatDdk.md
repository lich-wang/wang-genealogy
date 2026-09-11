---
schema: wang-person/v1
id: p_4WnMCsmdFpjM4acDmatDdk
status: active
merged_into: null
display_name: 吳氏
revision: 1
cbdb_id: 279341
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mQhq3sGiKpZFSsUtl6n-eR
        subject_person_id: p_4WnMCsmdFpjM4acDmatDdk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 吳氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SYA7foRTm1UThgOlEoVT-J
          claim_id: c_mQhq3sGiKpZFSsUtl6n-eR
          source_id: s_v7gQil8zqpRpKEc7DUNYLN
          stance: supports
          locator: CBDB:279341
          quotation: null
          interpretation_note: CBDB 明确记录的王遵配偶
          source: &a1
            id: s_v7gQil8zqpRpKEc7DUNYLN
            source_type: api_record
            title: 中国历代人物传记资料库：吳氏(王遵妻)（CBDB 279341）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279341&o=json
            external_identifier: CBDB:279341
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_j1bnQVZNUjqMt_2Co6EzgI
        subject_person_id: p_kS75cqd3Wh2NjJNrFJL2j4
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_4WnMCsmdFpjM4acDmatDdk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i-KfOSbjRmNpMN5JowGILq
          claim_id: c_j1bnQVZNUjqMt_2Co6EzgI
          source_id: s_v7gQil8zqpRpKEc7DUNYLN
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第二百三十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kS75cqd3Wh2NjJNrFJL2j4
        status: active
        display_name: 王遵
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 吳氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 吳氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_kS75cqd3Wh2NjJNrFJL2j4 | 王遵 | accepted |

## 外部来源

- [中国历代人物传记资料库：吳氏(王遵妻)（CBDB 279341）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279341&o=json)
