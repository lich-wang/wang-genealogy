---
schema: wang-person/v1
id: p_87vQWSqin1Cc8rN4TeH3X4
status: active
merged_into: null
display_name: 王完
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ARLVLd5nM7vfByScm9jT7H
        subject_person_id: p_87vQWSqin1Cc8rN4TeH3X4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王完
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JAK49pgzdfeZtjNbikMYTG
          claim_id: c_ARLVLd5nM7vfByScm9jT7H
          source_id: s_KQ6ArrG8dTNSX2Tu6p17mt
          stance: supports
          locator: CBDB:201827
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201827）
          source: &a1
            id: s_KQ6ArrG8dTNSX2Tu6p17mt
            source_type: api_record
            title: 中国历代人物传记资料库：王完（CBDB 201827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201827&o=json
            external_identifier: CBDB:201827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.695Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4fxWonC2FxdiKnjPDfxvu2
        subject_person_id: p_87vQWSqin1Cc8rN4TeH3X4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1481年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cTFuuMJ7ACm8SCqwFoa6iq
          claim_id: c_4fxWonC2FxdiKnjPDfxvu2
          source_id: s_KQ6ArrG8dTNSX2Tu6p17mt
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BMeg4uZuBKjRxPCcL4zCf6
        subject_person_id: p_87vQWSqin1Cc8rN4TeH3X4
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
        - id: cs_nDGKATpwLJp5A2hxi7UJEa
          claim_id: c_BMeg4uZuBKjRxPCcL4zCf6
          source_id: s_KQ6ArrG8dTNSX2Tu6p17mt
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

# 王完

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王完 | accepted |
| birth.date | 1481年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王完（CBDB 201827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201827&o=json)
