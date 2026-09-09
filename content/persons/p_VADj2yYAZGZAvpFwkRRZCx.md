---
schema: wang-person/v1
id: p_VADj2yYAZGZAvpFwkRRZCx
status: active
merged_into: null
display_name: 王開
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ec1yQA6fsNWXV83BePbY9J
        subject_person_id: p_VADj2yYAZGZAvpFwkRRZCx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王開
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HFhfq4Y4VK84YUTm8nhtHz
          claim_id: c_Ec1yQA6fsNWXV83BePbY9J
          source_id: s_a4g8v1fFpC7MQeUx1GsaXg
          stance: supports
          locator: CBDB:445659
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（445659）
          source: &a1
            id: s_a4g8v1fFpC7MQeUx1GsaXg
            source_type: api_record
            title: 中国历代人物传记资料库：王開（CBDB 445659）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445659&o=json
            external_identifier: CBDB:445659
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.223Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mBFjaP4qhM5R816nVf7w6p
        subject_person_id: p_VADj2yYAZGZAvpFwkRRZCx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SLsVNDdGRhUCJm8TWH5gn9
          claim_id: c_mBFjaP4qhM5R816nVf7w6p
          source_id: s_a4g8v1fFpC7MQeUx1GsaXg
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
  descendants: []
  other: []
---

# 王開

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王開 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王開（CBDB 445659）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=445659&o=json)
