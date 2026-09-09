---
schema: wang-person/v1
id: p_segKycy9FXiZMaTd2sd8uK
status: active
merged_into: null
display_name: 王慶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iuFt4qWK4erzQHY616moQb
        subject_person_id: p_segKycy9FXiZMaTd2sd8uK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6p472GAfXq5VZcAfErz2CJ
          claim_id: c_iuFt4qWK4erzQHY616moQb
          source_id: s_tgeSTGn8jrM3e3eKUV5ebo
          stance: supports
          locator: CBDB:284127
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（284127）
          source: &a1
            id: s_tgeSTGn8jrM3e3eKUV5ebo
            source_type: api_record
            title: 中国历代人物传记资料库：王慶（CBDB 284127）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284127&o=json
            external_identifier: CBDB:284127
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.181Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5EvFFUVcFZRJAcaHGcoM5z
        subject_person_id: p_segKycy9FXiZMaTd2sd8uK
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
        - id: cs_iTmafeSAja5gvbKup4Be4q
          claim_id: c_5EvFFUVcFZRJAcaHGcoM5z
          source_id: s_tgeSTGn8jrM3e3eKUV5ebo
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

# 王慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慶（CBDB 284127）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284127&o=json)
