---
schema: wang-person/v1
id: p_E3C34zi64uUyBpfRDrcwo5
status: active
merged_into: null
display_name: 王虬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ztwBzqezKHatsgvqcXxviT
        subject_person_id: p_E3C34zi64uUyBpfRDrcwo5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王虬
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iJ26dUCJSXk9pFCNK8yB1Y
          claim_id: c_ztwBzqezKHatsgvqcXxviT
          source_id: s_HZUSxZRxBquA4wM38zHGmp
          stance: supports
          locator: CBDB:92010
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92010）
          source: &a1
            id: s_HZUSxZRxBquA4wM38zHGmp
            source_type: api_record
            title: 中国历代人物传记资料库：王虬（CBDB 92010）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92010&o=json
            external_identifier: CBDB:92010
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.082Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7ZQENgbcZvtPkrbccEDE9X
        subject_person_id: p_E3C34zi64uUyBpfRDrcwo5
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
        - id: cs_kXCvYsFLoXnVnM66bufGu2
          claim_id: c_7ZQENgbcZvtPkrbccEDE9X
          source_id: s_HZUSxZRxBquA4wM38zHGmp
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

# 王虬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王虬 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王虬（CBDB 92010）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92010&o=json)
