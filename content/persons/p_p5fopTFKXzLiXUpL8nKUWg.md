---
schema: wang-person/v1
id: p_p5fopTFKXzLiXUpL8nKUWg
status: active
merged_into: null
display_name: 王僖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5wYarKKrvP5576hAL7Csxr
        subject_person_id: p_p5fopTFKXzLiXUpL8nKUWg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2cRtT8xEyq1NcFat6EVSam
          claim_id: c_5wYarKKrvP5576hAL7Csxr
          source_id: s_HNXYd6LRZyZeCgLxYwTkxD
          stance: supports
          locator: CBDB:22211
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22211）
          source: &a1
            id: s_HNXYd6LRZyZeCgLxYwTkxD
            source_type: api_record
            title: 中国历代人物传记资料库：王僖（CBDB 22211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22211&o=json
            external_identifier: CBDB:22211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.847Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QK5V25GiRDLkjHP5NL5pc1
        subject_person_id: p_p5fopTFKXzLiXUpL8nKUWg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僖，宋人物。籍贯崑山，曾任縣令。（中国历代人物传记资料库 CBDB 22211）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yeiB3qkCWxAFN8CYmEwNjm
          claim_id: c_QK5V25GiRDLkjHP5NL5pc1
          source_id: s_HNXYd6LRZyZeCgLxYwTkxD
          stance: supports
          locator: CBDB:22211
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

# 王僖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王僖 | accepted |
| bio.summary | 王僖，宋人物。籍贯崑山，曾任縣令。（中国历代人物传记资料库 CBDB 22211） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王僖（CBDB 22211）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22211&o=json)
