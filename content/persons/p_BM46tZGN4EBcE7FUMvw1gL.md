---
schema: wang-person/v1
id: p_BM46tZGN4EBcE7FUMvw1gL
status: active
merged_into: null
display_name: 王宗義
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9rH6K71i1PZZ1gF4YcWZKr
        subject_person_id: p_BM46tZGN4EBcE7FUMvw1gL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2Nw3QYJS1YYxT4yMvVYLPM
          claim_id: c_9rH6K71i1PZZ1gF4YcWZKr
          source_id: s_RMH3PJ7uHci9WNBA7i4Hjj
          stance: supports
          locator: CBDB:310364
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（310364）
          source: &a1
            id: s_RMH3PJ7uHci9WNBA7i4Hjj
            source_type: api_record
            title: 中国历代人物传记资料库：王宗義（CBDB 310364）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310364&o=json
            external_identifier: CBDB:310364
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.840Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jzGiB3XRHnwbJGsBmGTknb
        subject_person_id: p_BM46tZGN4EBcE7FUMvw1gL
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
        - id: cs_ukCmUkr68VmD223Hjyq2wB
          claim_id: c_jzGiB3XRHnwbJGsBmGTknb
          source_id: s_RMH3PJ7uHci9WNBA7i4Hjj
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
        id: c__C_tV-R3B9sj5mzEOyRLV3
        subject_person_id: p_BM46tZGN4EBcE7FUMvw1gL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SHuk9Lfw4VDtH93mbkHP9q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yP58sb64SDOo7CQk0FEUM3
          claim_id: c__C_tV-R3B9sj5mzEOyRLV3
          source_id: s_RMH3PJ7uHci9WNBA7i4Hjj
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第八十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_SHuk9Lfw4VDtH93mbkHP9q
        status: active
        display_name: 王遴
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宗義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗義 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_SHuk9Lfw4VDtH93mbkHP9q | 王遴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗義（CBDB 310364）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310364&o=json)
