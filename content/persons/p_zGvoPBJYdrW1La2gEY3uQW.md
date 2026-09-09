---
schema: wang-person/v1
id: p_zGvoPBJYdrW1La2gEY3uQW
status: active
merged_into: null
display_name: 王遵業
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ndai2KreXUdGokiU9585Cy
        subject_person_id: p_zGvoPBJYdrW1La2gEY3uQW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遵業
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_i7QJhxxf5e3t1fUZ7HmVxU
          claim_id: c_Ndai2KreXUdGokiU9585Cy
          source_id: s_UBaGrztP65fE9MgxgVB4Zw
          stance: supports
          locator: CBDB:175698
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175698）
          source: &a1
            id: s_UBaGrztP65fE9MgxgVB4Zw
            source_type: api_record
            title: 中国历代人物传记资料库：王遵業（CBDB 175698）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175698&o=json
            external_identifier: CBDB:175698
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.063Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_e7rqEhuqUd2iEWduWQ17F2
        subject_person_id: p_zGvoPBJYdrW1La2gEY3uQW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 510年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7S3u6CMYN4bbMDRPek3d1W
          claim_id: c_e7rqEhuqUd2iEWduWQ17F2
          source_id: s_UBaGrztP65fE9MgxgVB4Zw
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
        id: c_AsYvg72F4jQMB58sppeD2c
        subject_person_id: p_zGvoPBJYdrW1La2gEY3uQW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为南北朝人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uUKNe45V17Jk56ijNBB9ta
          claim_id: c_AsYvg72F4jQMB58sppeD2c
          source_id: s_UBaGrztP65fE9MgxgVB4Zw
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

# 王遵業

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遵業 | accepted |
| death.date | 510年 | accepted |
| bio.summary | CBDB 记载为南北朝人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王遵業（CBDB 175698）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175698&o=json)
