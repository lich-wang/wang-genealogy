---
schema: wang-person/v1
id: p_1mCCtztThwQ3eEwiGmQEGV
status: active
merged_into: null
display_name: 王袞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7mgUBAXEMHaVXLUVQLgYCR
        subject_person_id: p_1mCCtztThwQ3eEwiGmQEGV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王袞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MNyCYhERxD1RRx6pFxvWGe
          claim_id: c_7mgUBAXEMHaVXLUVQLgYCR
          source_id: s_9TR2PEP3zbACm9KuYkmJZX
          stance: supports
          locator: CBDB:38039
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38039）
          source: &a1
            id: s_9TR2PEP3zbACm9KuYkmJZX
            source_type: api_record
            title: 中国历代人物传记资料库：王袞（CBDB 38039）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38039&o=json
            external_identifier: CBDB:38039
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.334Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2G5AGJSYvZz3MmCD2ee6QQ
        subject_person_id: p_1mCCtztThwQ3eEwiGmQEGV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y7Rjcfibo2wj5682VMWePY
          claim_id: c_2G5AGJSYvZz3MmCD2ee6QQ
          source_id: s_9TR2PEP3zbACm9KuYkmJZX
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

# 王袞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王袞 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王袞（CBDB 38039）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38039&o=json)
