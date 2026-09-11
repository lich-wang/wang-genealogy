---
schema: wang-person/v1
id: p_TJqwo9PYn9Wa7jb1JfTd9H
status: active
merged_into: null
display_name: 王全
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cdNuEWzoPFZ5xNvf11X25J
        subject_person_id: p_TJqwo9PYn9Wa7jb1JfTd9H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王全
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WN4PpYdFU6FNqvEyy8ch27
          claim_id: c_cdNuEWzoPFZ5xNvf11X25J
          source_id: s_N3ny66ED2qB7YEycjnB47h
          stance: supports
          locator: CBDB:314476
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（314476）
          source: &a1
            id: s_N3ny66ED2qB7YEycjnB47h
            source_type: api_record
            title: 中国历代人物传记资料库：王全（CBDB 314476）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314476&o=json
            external_identifier: CBDB:314476
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.927Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_g3g5d5t48oa8HBZR1zuWph
        subject_person_id: p_TJqwo9PYn9Wa7jb1JfTd9H
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
        - id: cs_L8nNRMuR7JE1FxYBa2QR2E
          claim_id: c_g3g5d5t48oa8HBZR1zuWph
          source_id: s_N3ny66ED2qB7YEycjnB47h
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
        id: c_4B6JJ7QhELzjDa3cUPkdL0
        subject_person_id: p_TJqwo9PYn9Wa7jb1JfTd9H
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ukJ2qr82oEuCTM4WYW3F7J
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YtSsWWNTZXZCgZlaDDIBZO
          claim_id: c_4B6JJ7QhELzjDa3cUPkdL0
          source_id: s_N3ny66ED2qB7YEycjnB47h
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第一百八十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ukJ2qr82oEuCTM4WYW3F7J
        status: active
        display_name: 王文翰
        merged_into_person_id: null
  other: []
---

# 王全

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王全 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_ukJ2qr82oEuCTM4WYW3F7J | 王文翰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王全（CBDB 314476）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314476&o=json)
