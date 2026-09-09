---
schema: wang-person/v1
id: p_y6pnd754cbqUjwon4BdVN3
status: active
merged_into: null
display_name: 王誌
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CwmgWiHExxBm3fpZBWkZeq
        subject_person_id: p_y6pnd754cbqUjwon4BdVN3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6xSLzWYm2PADu1ajfUVCFy
          claim_id: c_CwmgWiHExxBm3fpZBWkZeq
          source_id: s_YertP9rL7h5kSWyPEsWD7c
          stance: supports
          locator: CBDB:415414
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（415414）
          source: &a1
            id: s_YertP9rL7h5kSWyPEsWD7c
            source_type: api_record
            title: 中国历代人物传记资料库：王誌（CBDB 415414）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415414&o=json
            external_identifier: CBDB:415414
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.010Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FpX4fe2LtEMbvm8DS6PFj9
        subject_person_id: p_y6pnd754cbqUjwon4BdVN3
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
        - id: cs_GA7kWmhZ8mj2pS89Au8x1e
          claim_id: c_FpX4fe2LtEMbvm8DS6PFj9
          source_id: s_YertP9rL7h5kSWyPEsWD7c
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

# 王誌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王誌 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王誌（CBDB 415414）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415414&o=json)
