---
schema: wang-person/v1
id: p_Sm6c4S1VvE6gFEpe131Svb
status: active
merged_into: null
display_name: 王傑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SCFkyx6zc9PbQYu4T5BMFv
        subject_person_id: p_Sm6c4S1VvE6gFEpe131Svb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vWfeRF5wXqpKzAXvtKcs7P
          claim_id: c_SCFkyx6zc9PbQYu4T5BMFv
          source_id: s_zdGMb2SXnx7DETrxcufaFp
          stance: supports
          locator: CBDB:509829
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（509829）
          source: &a1
            id: s_zdGMb2SXnx7DETrxcufaFp
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 509829）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=509829&o=json
            external_identifier: CBDB:509829
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.177Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2DVS6eB8xTVuwFFYAKYU6S
        subject_person_id: p_Sm6c4S1VvE6gFEpe131Svb
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
        - id: cs_uupi2PDMPbp6cWhEsMPTP7
          claim_id: c_2DVS6eB8xTVuwFFYAKYU6S
          source_id: s_zdGMb2SXnx7DETrxcufaFp
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

# 王傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傑 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王傑（CBDB 509829）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=509829&o=json)
