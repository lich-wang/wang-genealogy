---
schema: wang-person/v1
id: p_KA2HkQ1qdLYhBgz4ZSBGt7
status: active
merged_into: null
display_name: 王綱
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bQhuPerBTWK4uce6bRbpZh
        subject_person_id: p_KA2HkQ1qdLYhBgz4ZSBGt7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_259zbJcdrHT5woC6T7qdE7
          claim_id: c_bQhuPerBTWK4uce6bRbpZh
          source_id: s_pVottD6QNt7gMJ6Q1Yv6eh
          stance: supports
          locator: CBDB:271762
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（271762）
          source: &a1
            id: s_pVottD6QNt7gMJ6Q1Yv6eh
            source_type: api_record
            title: 中国历代人物传记资料库：王綱（CBDB 271762）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271762&o=json
            external_identifier: CBDB:271762
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.878Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4h8hCnXVoU887MhEXTUi1L
        subject_person_id: p_KA2HkQ1qdLYhBgz4ZSBGt7
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
        - id: cs_p6KCM3XqZB2NKZMmWA1yTd
          claim_id: c_4h8hCnXVoU887MhEXTUi1L
          source_id: s_pVottD6QNt7gMJ6Q1Yv6eh
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
        id: c_BPDjOvddOGrqF53dH2oAML
        subject_person_id: p_KA2HkQ1qdLYhBgz4ZSBGt7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_stHoVQftjNFmSu9T7T3WAa
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vlUNu0Uc_Bq5yhjy6A8QTS
          claim_id: c_BPDjOvddOGrqF53dH2oAML
          source_id: s_pVottD6QNt7gMJ6Q1Yv6eh
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第一百一十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_stHoVQftjNFmSu9T7T3WAa
        status: active
        display_name: 王昇
        merged_into_person_id: null
  other: []
---

# 王綱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綱 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_stHoVQftjNFmSu9T7T3WAa | 王昇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綱（CBDB 271762）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271762&o=json)
