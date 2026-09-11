---
schema: wang-person/v1
id: p_E38Vi9yCuXKKkEW4FjUZeL
status: active
merged_into: null
display_name: 王維翰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MZcSvgL8Tt74u6sGCmBcXm
        subject_person_id: p_E38Vi9yCuXKKkEW4FjUZeL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YvAECZ87FMRFF6d8CvXqLi
          claim_id: c_MZcSvgL8Tt74u6sGCmBcXm
          source_id: s_x9yAXaaUNH13M6MNJRTTBq
          stance: supports
          locator: CBDB:498710
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（498710）
          source: &a1
            id: s_x9yAXaaUNH13M6MNJRTTBq
            source_type: api_record
            title: 中国历代人物传记资料库：王維翰（CBDB 498710）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=498710&o=json
            external_identifier: CBDB:498710
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.717Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GkCvbE5KB3ost9Fvu1eBRS
        subject_person_id: p_E38Vi9yCuXKKkEW4FjUZeL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維翰，金人物。曾任轉運副使。（中国历代人物传记资料库 CBDB 498710）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_HAV9YCOwHY8fimcPeO_WwY
          claim_id: c_GkCvbE5KB3ost9Fvu1eBRS
          source_id: s_x9yAXaaUNH13M6MNJRTTBq
          stance: supports
          locator: CBDB:498710
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

# 王維翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維翰 | accepted |
| bio.summary | 王維翰，金人物。曾任轉運副使。（中国历代人物传记资料库 CBDB 498710） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王維翰（CBDB 498710）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=498710&o=json)
