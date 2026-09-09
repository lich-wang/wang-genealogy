---
schema: wang-person/v1
id: p_AfuEzx374a7WNXTfcMcWwd
status: active
merged_into: null
display_name: 王獻臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KQ2aFMYDaVBQGjC1K3rKXp
        subject_person_id: p_AfuEzx374a7WNXTfcMcWwd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RN5WPCU2SQoQZWDML55DkQ
          claim_id: c_KQ2aFMYDaVBQGjC1K3rKXp
          source_id: s_eiGJS5K3CYMceZonDwA3P8
          stance: supports
          locator: CBDB:67807
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67807）
          source: &a1
            id: s_eiGJS5K3CYMceZonDwA3P8
            source_type: api_record
            title: 中国历代人物传记资料库：王獻臣（CBDB 67807）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67807&o=json
            external_identifier: CBDB:67807
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.023Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2tHk9n68mbtERAd8Stgkhn
        subject_person_id: p_AfuEzx374a7WNXTfcMcWwd
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
        - id: cs_e9M5SyxEFDZwM3QLi5eKnK
          claim_id: c_2tHk9n68mbtERAd8Stgkhn
          source_id: s_eiGJS5K3CYMceZonDwA3P8
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

# 王獻臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王獻臣 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王獻臣（CBDB 67807）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67807&o=json)
