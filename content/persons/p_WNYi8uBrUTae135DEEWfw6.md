---
schema: wang-person/v1
id: p_WNYi8uBrUTae135DEEWfw6
status: active
merged_into: null
display_name: 王佃
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yXE7SiYaobTsiN74786DJ9
        subject_person_id: p_WNYi8uBrUTae135DEEWfw6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1geq77KZdC6wNUzg3DuStg
          claim_id: c_yXE7SiYaobTsiN74786DJ9
          source_id: s_CN9mHNFDkpHYQpCwgpJhd4
          stance: supports
          locator: CBDB:312747
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（312747）
          source: &a1
            id: s_CN9mHNFDkpHYQpCwgpJhd4
            source_type: api_record
            title: 中国历代人物传记资料库：王佃（CBDB 312747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312747&o=json
            external_identifier: CBDB:312747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.878Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1W1Ty1LzEoXBhNDM13b5m3
        subject_person_id: p_WNYi8uBrUTae135DEEWfw6
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
        - id: cs_jTLfWBrhAxPdWkGNTfnH4D
          claim_id: c_1W1Ty1LzEoXBhNDM13b5m3
          source_id: s_CN9mHNFDkpHYQpCwgpJhd4
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

# 王佃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佃 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王佃（CBDB 312747）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312747&o=json)
