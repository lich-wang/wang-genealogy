---
schema: wang-person/v1
id: p_7Yja38GWcuBt14xXp8sQcE
status: active
merged_into: null
display_name: 王榮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EPgGa9w64iJy8w59Grdfgq
        subject_person_id: p_7Yja38GWcuBt14xXp8sQcE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KWLUS2ibK6dDoU7orPjiCS
          claim_id: c_EPgGa9w64iJy8w59Grdfgq
          source_id: s_oSszWEg5kMiHPQWYSM9SdB
          stance: supports
          locator: CBDB:247747
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247747）
          source: &a1
            id: s_oSszWEg5kMiHPQWYSM9SdB
            source_type: api_record
            title: 中国历代人物传记资料库：王榮（CBDB 247747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247747&o=json
            external_identifier: CBDB:247747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.130Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4CfLhjcp1FCJCDjP3RpbFs
        subject_person_id: p_7Yja38GWcuBt14xXp8sQcE
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
        - id: cs_WErmF3X7KYKLXwM5dzFKT9
          claim_id: c_4CfLhjcp1FCJCDjP3RpbFs
          source_id: s_oSszWEg5kMiHPQWYSM9SdB
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

# 王榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王榮 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王榮（CBDB 247747）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247747&o=json)
