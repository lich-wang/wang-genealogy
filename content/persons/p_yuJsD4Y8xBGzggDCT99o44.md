---
schema: wang-person/v1
id: p_yuJsD4Y8xBGzggDCT99o44
status: active
merged_into: null
display_name: 王育德
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9dco53ipCit29yS8k1Dx6T
        subject_person_id: p_yuJsD4Y8xBGzggDCT99o44
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王育德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZENPW9EXAyg8UxFPfCDVTv
          claim_id: c_9dco53ipCit29yS8k1Dx6T
          source_id: s_6Xy2htZ9pE862mD8w92T7m
          stance: supports
          locator: CBDB:324376
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（324376）
          source: &a1
            id: s_6Xy2htZ9pE862mD8w92T7m
            source_type: api_record
            title: 中国历代人物传记资料库：王育德（CBDB 324376）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324376&o=json
            external_identifier: CBDB:324376
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.183Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V5RayDnF9FheYZiDG4yMQw
        subject_person_id: p_yuJsD4Y8xBGzggDCT99o44
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王育德，明人物。嘉靖三十八年進士，籍贯泰和。（中国历代人物传记资料库 CBDB 324376）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FGrq5xzbWFMZVlXEC3peAF
          claim_id: c_V5RayDnF9FheYZiDG4yMQw
          source_id: s_6Xy2htZ9pE862mD8w92T7m
          stance: supports
          locator: CBDB:324376
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

# 王育德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王育德 | accepted |
| bio.summary | 王育德，明人物。嘉靖三十八年進士，籍贯泰和。（中国历代人物传记资料库 CBDB 324376） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王育德（CBDB 324376）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324376&o=json)
