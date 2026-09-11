---
schema: wang-person/v1
id: p_zdz5MPWDLd5QUwRs5APxfM
status: active
merged_into: null
display_name: 王斌
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_g7bKwGCLj1qPKyL5aacjj7
        subject_person_id: p_zdz5MPWDLd5QUwRs5APxfM
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
        - id: cs_7yQtGdYaGZ4Vdu3syNAQ7Z
          claim_id: c_g7bKwGCLj1qPKyL5aacjj7
          source_id: s_9Ns7PP2rwmMitTBD4htM7i
          stance: supports
          locator: CBDB:279873
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（279873）
          source: &a1
            id: s_9Ns7PP2rwmMitTBD4htM7i
            source_type: api_record
            title: 中国历代人物传记资料库：王斌（CBDB 279873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279873&o=json
            external_identifier: CBDB:279873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.993Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dCtPZkaKbDzDA1ETTjUDvo
        subject_person_id: p_zdz5MPWDLd5QUwRs5APxfM
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
        - id: cs_XfesRG6RGG9RNN4WLnGZFq
          claim_id: c_dCtPZkaKbDzDA1ETTjUDvo
          source_id: s_9Ns7PP2rwmMitTBD4htM7i
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
        id: c_2VkaCTs5klbcateolr9Czj
        subject_person_id: p_zdz5MPWDLd5QUwRs5APxfM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HkNX6H623Y1z9EYnBdcJJC
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LFa5NrNduo_fSAw6hxVcih
          claim_id: c_2VkaCTs5klbcateolr9Czj
          source_id: s_9Ns7PP2rwmMitTBD4htM7i
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第四十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HkNX6H623Y1z9EYnBdcJJC
        status: active
        display_name: 王三錫
        merged_into_person_id: null
  other: []
---

# 王斌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王斌 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_HkNX6H623Y1z9EYnBdcJJC | 王三錫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王斌（CBDB 279873）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279873&o=json)
