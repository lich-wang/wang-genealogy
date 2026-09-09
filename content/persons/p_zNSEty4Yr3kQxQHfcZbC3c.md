---
schema: wang-person/v1
id: p_zNSEty4Yr3kQxQHfcZbC3c
status: active
merged_into: null
display_name: 王憲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_y5qtY1L6TLZPe2Gj8RQF9H
        subject_person_id: p_zNSEty4Yr3kQxQHfcZbC3c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bH2n1gpvf4veTJU5xH8fY8
          claim_id: c_y5qtY1L6TLZPe2Gj8RQF9H
          source_id: s_mLNoiH7QDVNqUAVcTFPJyA
          stance: supports
          locator: CBDB:255759
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（255759）
          source: &a1
            id: s_mLNoiH7QDVNqUAVcTFPJyA
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 255759）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255759&o=json
            external_identifier: CBDB:255759
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.352Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Jk3GDdNmsBuAjLKUG7fXsH
        subject_person_id: p_zNSEty4Yr3kQxQHfcZbC3c
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
        - id: cs_z6j1DB1j3jhm4ANvJMAGKR
          claim_id: c_Jk3GDdNmsBuAjLKUG7fXsH
          source_id: s_mLNoiH7QDVNqUAVcTFPJyA
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

# 王憲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王憲 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王憲（CBDB 255759）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255759&o=json)
