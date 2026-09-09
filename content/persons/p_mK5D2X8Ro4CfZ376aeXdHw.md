---
schema: wang-person/v1
id: p_mK5D2X8Ro4CfZ376aeXdHw
status: active
merged_into: null
display_name: 王鋼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gRbj13M9GdUA1S6LFPTuVX
        subject_person_id: p_mK5D2X8Ro4CfZ376aeXdHw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鋼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PbkJXgUm8k2b1Ej4UsUZju
          claim_id: c_gRbj13M9GdUA1S6LFPTuVX
          source_id: s_Bas5LKW66RzHVuYfiPRrC6
          stance: supports
          locator: CBDB:212296
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（212296）
          source: &a1
            id: s_Bas5LKW66RzHVuYfiPRrC6
            source_type: api_record
            title: 中国历代人物传记资料库：王鋼（CBDB 212296）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212296&o=json
            external_identifier: CBDB:212296
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.076Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_D1NuKP7uNArzkYrBRpmF8V
        subject_person_id: p_mK5D2X8Ro4CfZ376aeXdHw
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
        - id: cs_LxCfwLf4EqFQeZE9siMms4
          claim_id: c_D1NuKP7uNArzkYrBRpmF8V
          source_id: s_Bas5LKW66RzHVuYfiPRrC6
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

# 王鋼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鋼 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鋼（CBDB 212296）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212296&o=json)
