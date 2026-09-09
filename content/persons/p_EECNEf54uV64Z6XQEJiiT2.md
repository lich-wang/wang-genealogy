---
schema: wang-person/v1
id: p_EECNEf54uV64Z6XQEJiiT2
status: active
merged_into: null
display_name: 王治
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eK9PUMAUKiDggR3c7roi6m
        subject_person_id: p_EECNEf54uV64Z6XQEJiiT2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王治
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TmKk1KUo7AtpMfTHLBuNrK
          claim_id: c_eK9PUMAUKiDggR3c7roi6m
          source_id: s_4dvxeUYYTSWFg9dbeZzkCJ
          stance: supports
          locator: CBDB:39347
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39347）
          source: &a1
            id: s_4dvxeUYYTSWFg9dbeZzkCJ
            source_type: api_record
            title: 中国历代人物传记资料库：王治（CBDB 39347）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39347&o=json
            external_identifier: CBDB:39347
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.603Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YBsLZ8FZshB7iffXf6Xw4m
        subject_person_id: p_EECNEf54uV64Z6XQEJiiT2
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
        - id: cs_twoW7PiBtd4VC1PtqxcaKz
          claim_id: c_YBsLZ8FZshB7iffXf6Xw4m
          source_id: s_4dvxeUYYTSWFg9dbeZzkCJ
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

# 王治

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王治 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王治（CBDB 39347）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39347&o=json)
