---
schema: wang-person/v1
id: p_57qkzjBAj7pdfvVDKvy3hu
status: active
merged_into: null
display_name: 王桂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_f8AzR4ywhmW1Rc41aDuhoZ
        subject_person_id: p_57qkzjBAj7pdfvVDKvy3hu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_V8NjoiDyKWi5k6Uwy5UQUh
          claim_id: c_f8AzR4ywhmW1Rc41aDuhoZ
          source_id: s_gLTnxHxB5P4o7n5B6v1GDC
          stance: supports
          locator: CBDB:576105
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（576105）
          source: &a1
            id: s_gLTnxHxB5P4o7n5B6v1GDC
            source_type: api_record
            title: 中国历代人物传记资料库：王桂（CBDB 576105）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576105&o=json
            external_identifier: CBDB:576105
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.940Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2Nr29kjhKuHKU82mw3YHRf
        subject_person_id: p_57qkzjBAj7pdfvVDKvy3hu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桂，清人物。籍贯封邱，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576105）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5VWTbZBGedvVtstfLbZlFX
          claim_id: c_2Nr29kjhKuHKU82mw3YHRf
          source_id: s_gLTnxHxB5P4o7n5B6v1GDC
          stance: supports
          locator: CBDB:576105
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

# 王桂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王桂 | accepted |
| bio.summary | 王桂，清人物。籍贯封邱，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576105） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王桂（CBDB 576105）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576105&o=json)
