---
schema: wang-person/v1
id: p_4B6uyLiJF7roVcrV9bfTFW
status: active
merged_into: null
display_name: 王敬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K41jMwpJdLGBCNXLb6bdt9
        subject_person_id: p_4B6uyLiJF7roVcrV9bfTFW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6rDJDRmJ8JkiJHD2ZS8p4T
          claim_id: c_K41jMwpJdLGBCNXLb6bdt9
          source_id: s_L2axT6YbJVnzMYPMHz3RKd
          stance: supports
          locator: CBDB:126757
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126757）
          source: &a1
            id: s_L2axT6YbJVnzMYPMHz3RKd
            source_type: api_record
            title: 中国历代人物传记资料库：王敬（CBDB 126757）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126757&o=json
            external_identifier: CBDB:126757
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.181Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_P4KG4ELoi5xiYfUE2Dkd79
        subject_person_id: p_4B6uyLiJF7roVcrV9bfTFW
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
        - id: cs_eA7uSr3XA2fENvokW3oNeg
          claim_id: c_P4KG4ELoi5xiYfUE2Dkd79
          source_id: s_L2axT6YbJVnzMYPMHz3RKd
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

# 王敬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敬 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敬（CBDB 126757）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126757&o=json)
