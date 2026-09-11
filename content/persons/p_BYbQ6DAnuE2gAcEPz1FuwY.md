---
schema: wang-person/v1
id: p_BYbQ6DAnuE2gAcEPz1FuwY
status: active
merged_into: null
display_name: 王允持
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PCvYFtc5mkpyuQwB7m56dT
        subject_person_id: p_BYbQ6DAnuE2gAcEPz1FuwY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允持
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HEVMgUqD1FJjSR6Kvjopbf
          claim_id: c_PCvYFtc5mkpyuQwB7m56dT
          source_id: s_CetMbsqKjPbMJSmpzocNwC
          stance: supports
          locator: CBDB:71443
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71443）
          source: &a1
            id: s_CetMbsqKjPbMJSmpzocNwC
            source_type: api_record
            title: 中国历代人物传记资料库：王允持（CBDB 71443）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71443&o=json
            external_identifier: CBDB:71443
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.676Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_1sZpTU3pNHAJhCok4tkvih
        subject_person_id: p_BYbQ6DAnuE2gAcEPz1FuwY
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1637年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wyvgeCZuzgXmy4sqQ5HSn1
          claim_id: c_1sZpTU3pNHAJhCok4tkvih
          source_id: s_CetMbsqKjPbMJSmpzocNwC
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_MCEPehUR135BETUo1zvRPt
        subject_person_id: p_BYbQ6DAnuE2gAcEPz1FuwY
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1693年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PKFeS4eBaGcfeaGyWGTqxa
          claim_id: c_MCEPehUR135BETUo1zvRPt
          source_id: s_CetMbsqKjPbMJSmpzocNwC
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CdNnsqWqy5BFrvw6VXeoCg
        subject_person_id: p_BYbQ6DAnuE2gAcEPz1FuwY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允持（1637年—1693年），清人物。籍贯無錫。（中国历代人物传记资料库 CBDB 71443）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IlYV3dNodrtcvPexGpSSkR
          claim_id: c_CdNnsqWqy5BFrvw6VXeoCg
          source_id: s_CetMbsqKjPbMJSmpzocNwC
          stance: supports
          locator: CBDB:71443
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

# 王允持

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王允持 | accepted |
| birth.date | 1637年 | accepted |
| death.date | 1693年 | accepted |
| bio.summary | 王允持（1637年—1693年），清人物。籍贯無錫。（中国历代人物传记资料库 CBDB 71443） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王允持（CBDB 71443）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71443&o=json)
