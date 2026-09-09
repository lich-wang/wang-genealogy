---
schema: wang-person/v1
id: p_HXUXMWp5A8AZsGt1Qnh1X3
status: active
merged_into: null
display_name: 王延美
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EX95Pz3ZZfMYQ412aoQQP7
        subject_person_id: p_HXUXMWp5A8AZsGt1Qnh1X3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延美
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_j732u8jQeEF2f74BN8HSyo
          claim_id: c_EX95Pz3ZZfMYQ412aoQQP7
          source_id: s_3SJijtBcLrotCWZtWjTnDx
          stance: supports
          locator: CBDB:414450
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（414450）
          source: &a1
            id: s_3SJijtBcLrotCWZtWjTnDx
            source_type: api_record
            title: 中国历代人物传记资料库：王延美（CBDB 414450）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414450&o=json
            external_identifier: CBDB:414450
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.954Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EKfcPEXNM8v4wJHdswxugG
        subject_person_id: p_HXUXMWp5A8AZsGt1Qnh1X3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为閩國人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k3aHc8x85WZic4u9zdFDB3
          claim_id: c_EKfcPEXNM8v4wJHdswxugG
          source_id: s_3SJijtBcLrotCWZtWjTnDx
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

# 王延美

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王延美 | accepted |
| bio.summary | CBDB 记载为閩國人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王延美（CBDB 414450）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414450&o=json)
