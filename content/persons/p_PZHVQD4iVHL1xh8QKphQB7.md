---
schema: wang-person/v1
id: p_PZHVQD4iVHL1xh8QKphQB7
status: active
merged_into: null
display_name: 王希顏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DekGkdYopTh6H5vxMJnvcx
        subject_person_id: p_PZHVQD4iVHL1xh8QKphQB7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希顏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ReJb71eU4wJRu3scHSvesh
          claim_id: c_DekGkdYopTh6H5vxMJnvcx
          source_id: s_9PgcLJU3UknpFFibAtLLpk
          stance: supports
          locator: CBDB:287988
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（287988）
          source: &a1
            id: s_9PgcLJU3UknpFFibAtLLpk
            source_type: api_record
            title: 中国历代人物传记资料库：王希顏（CBDB 287988）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287988&o=json
            external_identifier: CBDB:287988
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.281Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CqjTQhyaVTTC8y1rVyTMjL
        subject_person_id: p_PZHVQD4iVHL1xh8QKphQB7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希顏，明人物。嘉靖八年進士，籍贯東莞，曾任典膳。（中国历代人物传记资料库 CBDB 287988）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EWyJSXavD9HWEqShKxXRtg
          claim_id: c_CqjTQhyaVTTC8y1rVyTMjL
          source_id: s_9PgcLJU3UknpFFibAtLLpk
          stance: supports
          locator: CBDB:287988
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

# 王希顏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希顏 | accepted |
| bio.summary | 王希顏，明人物。嘉靖八年進士，籍贯東莞，曾任典膳。（中国历代人物传记资料库 CBDB 287988） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王希顏（CBDB 287988）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287988&o=json)
