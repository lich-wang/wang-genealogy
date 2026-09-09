---
schema: wang-person/v1
id: p_GLUcVE7QHXNvRFTG2BvVS7
status: active
merged_into: null
display_name: 王元持
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FN6MFHGJPo7C5sUCAHJJmQ
        subject_person_id: p_GLUcVE7QHXNvRFTG2BvVS7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元持
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oNkLjyFqfHPTu79ApXee7s
          claim_id: c_FN6MFHGJPo7C5sUCAHJJmQ
          source_id: s_pvx63RdmRi8MNLF9vEXhDZ
          stance: supports
          locator: CBDB:544100
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（544100）
          source: &a1
            id: s_pvx63RdmRi8MNLF9vEXhDZ
            source_type: api_record
            title: 中国历代人物传记资料库：王元持（CBDB 544100）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=544100&o=json
            external_identifier: CBDB:544100
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.452Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TN2QzVfB89EaRf8ewiw44i
        subject_person_id: p_GLUcVE7QHXNvRFTG2BvVS7
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
        - id: cs_7pC2UyCWbcEMKRVLcZTocv
          claim_id: c_TN2QzVfB89EaRf8ewiw44i
          source_id: s_pvx63RdmRi8MNLF9vEXhDZ
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

# 王元持

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元持 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元持（CBDB 544100）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=544100&o=json)
