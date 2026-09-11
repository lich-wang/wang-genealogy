---
schema: wang-person/v1
id: p_GdC95wYFWMcAiVPUE3aVHt
status: active
merged_into: null
display_name: 王采蘩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PBZPJyEXKjBMGSnYRXoc46
        subject_person_id: p_GdC95wYFWMcAiVPUE3aVHt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王采蘩
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qZb4PLEDGjTYs4c8baBGcS
          claim_id: c_PBZPJyEXKjBMGSnYRXoc46
          source_id: s_XxdUJHruY7esLwSA995Way
          stance: supports
          locator: CBDB:568710
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（568710）
          source: &a1
            id: s_XxdUJHruY7esLwSA995Way
            source_type: api_record
            title: 中国历代人物传记资料库：王采蘩（CBDB 568710）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568710&o=json
            external_identifier: CBDB:568710
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.857Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aqgh7SFn9CsuzPLGhC5Wu3
        subject_person_id: p_GdC95wYFWMcAiVPUE3aVHt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王采蘩，清人物。籍贯蘇州府。（中国历代人物传记资料库 CBDB 568710）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_V6jiOWRc3IO4LXqc7Yp4YD
          claim_id: c_aqgh7SFn9CsuzPLGhC5Wu3
          source_id: s_XxdUJHruY7esLwSA995Way
          stance: supports
          locator: CBDB:568710
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王采蘩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王采蘩 | accepted |
| bio.summary | 王采蘩，清人物。籍贯蘇州府。（中国历代人物传记资料库 CBDB 568710） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王采蘩（CBDB 568710）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=568710&o=json)
