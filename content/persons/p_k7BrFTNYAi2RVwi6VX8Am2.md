---
schema: wang-person/v1
id: p_k7BrFTNYAi2RVwi6VX8Am2
status: active
merged_into: null
display_name: 王濤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jE3HWimoEL6JBNtSTsNa3w
        subject_person_id: p_k7BrFTNYAi2RVwi6VX8Am2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ge1Q3kES4RSR4XqFFT67VD
          claim_id: c_jE3HWimoEL6JBNtSTsNa3w
          source_id: s_8eCLutUpU5CYsf7r17zvqK
          stance: supports
          locator: CBDB:20106
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（20106）
          source: &a1
            id: s_8eCLutUpU5CYsf7r17zvqK
            source_type: api_record
            title: 中国历代人物传记资料库：王濤（CBDB 20106）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20106&o=json
            external_identifier: CBDB:20106
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.759Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7MmNLA1jPW2yNyknr8B34L
        subject_person_id: p_k7BrFTNYAi2RVwi6VX8Am2
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
        - id: cs_KBXyTDST4Xo94CGqzfkbfs
          claim_id: c_7MmNLA1jPW2yNyknr8B34L
          source_id: s_8eCLutUpU5CYsf7r17zvqK
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

# 王濤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濤 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王濤（CBDB 20106）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=20106&o=json)
