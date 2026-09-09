---
schema: wang-person/v1
id: p_pWRyWVDkHYsG17JvKgB7Nj
status: active
merged_into: null
display_name: 王擴
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PERonx3spzHHcN3986vRfP
        subject_person_id: p_pWRyWVDkHYsG17JvKgB7Nj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王擴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vZ4q7T9W2TUhJ7rBf4t15g
          claim_id: c_PERonx3spzHHcN3986vRfP
          source_id: s_7kLF5V29K12B1ojnGPehoB
          stance: supports
          locator: CBDB:495673
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（495673）
          source: &a1
            id: s_7kLF5V29K12B1ojnGPehoB
            source_type: api_record
            title: 中国历代人物传记资料库：王擴（CBDB 495673）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=495673&o=json
            external_identifier: CBDB:495673
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.508Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WK5Vmohk7k6WikFD3w4PJ9
        subject_person_id: p_pWRyWVDkHYsG17JvKgB7Nj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为金人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2EW4K9ne5UxMDEpSBPHKDo
          claim_id: c_WK5Vmohk7k6WikFD3w4PJ9
          source_id: s_7kLF5V29K12B1ojnGPehoB
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

# 王擴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王擴 | accepted |
| bio.summary | CBDB 记载为金人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王擴（CBDB 495673）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=495673&o=json)
