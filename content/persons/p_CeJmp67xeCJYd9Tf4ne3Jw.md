---
schema: wang-person/v1
id: p_CeJmp67xeCJYd9Tf4ne3Jw
status: active
merged_into: null
display_name: 王讜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qXBdvNQ2AWqFhyepk247Lv
        subject_person_id: p_CeJmp67xeCJYd9Tf4ne3Jw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王讜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tqPNHjQvfkHrhq8W63TpNk
          claim_id: c_qXBdvNQ2AWqFhyepk247Lv
          source_id: s_23UEwHvpmK8RidrY1f2VF5
          stance: supports
          locator: CBDB:491261
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（491261）
          source: &a1
            id: s_23UEwHvpmK8RidrY1f2VF5
            source_type: api_record
            title: 中国历代人物传记资料库：王讜（CBDB 491261）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491261&o=json
            external_identifier: CBDB:491261
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.170Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZZp3DUiZYKjpPCeGMBu9Aj
        subject_person_id: p_CeJmp67xeCJYd9Tf4ne3Jw
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
        - id: cs_7eKo55raEPS4J2198GVZXL
          claim_id: c_ZZp3DUiZYKjpPCeGMBu9Aj
          source_id: s_23UEwHvpmK8RidrY1f2VF5
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

# 王讜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王讜 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王讜（CBDB 491261）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=491261&o=json)
