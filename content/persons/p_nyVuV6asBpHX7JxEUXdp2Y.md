---
schema: wang-person/v1
id: p_nyVuV6asBpHX7JxEUXdp2Y
status: active
merged_into: null
display_name: 王漢臣
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sF5yaL7HGNFfSJUzAcXn6r
        subject_person_id: p_nyVuV6asBpHX7JxEUXdp2Y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漢臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L8wCn8SAGqhiKRXsbfGCvS
          claim_id: c_sF5yaL7HGNFfSJUzAcXn6r
          source_id: s_NW8Xpw5VkfHtvyozukfeyd
          stance: supports
          locator: CBDB:219866
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（219866）
          source: &a1
            id: s_NW8Xpw5VkfHtvyozukfeyd
            source_type: api_record
            title: 中国历代人物传记资料库：王漢臣（CBDB 219866）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219866&o=json
            external_identifier: CBDB:219866
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.292Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mcKQD3fFCnXya2KUUejoCj
        subject_person_id: p_nyVuV6asBpHX7JxEUXdp2Y
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
        - id: cs_1KnxVvyp2HSwZLjXBwSsd3
          claim_id: c_mcKQD3fFCnXya2KUUejoCj
          source_id: s_NW8Xpw5VkfHtvyozukfeyd
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
        id: c_bR9KlkoHanaSyJAQiV-IjA
        subject_person_id: p_nyVuV6asBpHX7JxEUXdp2Y
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Hq41nXPS6acQQdhAZabmC1
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_96UO9CSoVcu3NWw3heMWnq
          claim_id: c_bR9KlkoHanaSyJAQiV-IjA
          source_id: s_NW8Xpw5VkfHtvyozukfeyd
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第五十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Hq41nXPS6acQQdhAZabmC1
        status: active
        display_name: 王鑰
        merged_into_person_id: null
  other: []
---

# 王漢臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王漢臣 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Hq41nXPS6acQQdhAZabmC1 | 王鑰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王漢臣（CBDB 219866）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=219866&o=json)
