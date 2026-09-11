---
schema: wang-person/v1
id: p_WdXyPBvM2GjYY6SceTjhxx
status: active
merged_into: null
display_name: 王啟監
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wkAvSbo3rH1FRxCVQ4H89G
        subject_person_id: p_WdXyPBvM2GjYY6SceTjhxx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟監
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YtfrpZ7NC4Ze2QZY2gpfsn
          claim_id: c_wkAvSbo3rH1FRxCVQ4H89G
          source_id: s_C68Ux2Q8tAuv9RDgaP1n5f
          stance: supports
          locator: CBDB:636558
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636558）
          source: &a1
            id: s_C68Ux2Q8tAuv9RDgaP1n5f
            source_type: api_record
            title: 中国历代人物传记资料库：王啟監（CBDB 636558）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636558&o=json
            external_identifier: CBDB:636558
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.030Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NBnk4t6uM76LjamSHFhyfg
        subject_person_id: p_WdXyPBvM2GjYY6SceTjhxx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟監，清人物。籍贯保寧府，曾任訓導。（中国历代人物传记资料库 CBDB 636558）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DMJviW0TjgtqyeGpVoPgPj
          claim_id: c_NBnk4t6uM76LjamSHFhyfg
          source_id: s_C68Ux2Q8tAuv9RDgaP1n5f
          stance: supports
          locator: CBDB:636558
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

# 王啟監

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王啟監 | accepted |
| bio.summary | 王啟監，清人物。籍贯保寧府，曾任訓導。（中国历代人物传记资料库 CBDB 636558） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王啟監（CBDB 636558）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636558&o=json)
