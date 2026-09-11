---
schema: wang-person/v1
id: p_eTrfGNjgERr263ocMJZiw9
status: active
merged_into: null
display_name: 王舒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ni4iAMPMsFCUFy1GEYVXF9
        subject_person_id: p_eTrfGNjgERr263ocMJZiw9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZbywP1rSjFNzkTScEnhGHb
          claim_id: c_ni4iAMPMsFCUFy1GEYVXF9
          source_id: s_y1PKY9VPxFPh8JtNe2eTbA
          stance: supports
          locator: CBDB:300177
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（300177）
          source: &a1
            id: s_y1PKY9VPxFPh8JtNe2eTbA
            source_type: api_record
            title: 中国历代人物传记资料库：王舒（CBDB 300177）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300177&o=json
            external_identifier: CBDB:300177
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.619Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_es1Frcwws6DVQYJtLBBB56
        subject_person_id: p_eTrfGNjgERr263ocMJZiw9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舒，明人物。嘉靖十七年進士，籍贯南充。（中国历代人物传记资料库 CBDB 300177）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-5edcp7PREfDhCxGE86LRX
          claim_id: c_es1Frcwws6DVQYJtLBBB56
          source_id: s_y1PKY9VPxFPh8JtNe2eTbA
          stance: supports
          locator: CBDB:300177
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

# 王舒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王舒 | accepted |
| bio.summary | 王舒，明人物。嘉靖十七年進士，籍贯南充。（中国历代人物传记资料库 CBDB 300177） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王舒（CBDB 300177）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300177&o=json)
