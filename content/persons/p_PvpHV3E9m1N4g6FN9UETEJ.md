---
schema: wang-person/v1
id: p_PvpHV3E9m1N4g6FN9UETEJ
status: active
merged_into: null
display_name: 王憲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_78Bep5tpDQQfEiTmAaVgE6
        subject_person_id: p_PvpHV3E9m1N4g6FN9UETEJ
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
        - id: cs_XS3dQrSZb8sW8TAvZ8FGrR
          claim_id: c_78Bep5tpDQQfEiTmAaVgE6
          source_id: s_CnLD5osgYoHpZcSggrUUx3
          stance: supports
          locator: CBDB:315713
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（315713）
          source: &a1
            id: s_CnLD5osgYoHpZcSggrUUx3
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 315713）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315713&o=json
            external_identifier: CBDB:315713
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.951Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KeUKQeCEbJFf41LTkmjXHL
        subject_person_id: p_PvpHV3E9m1N4g6FN9UETEJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王憲，明人物。嘉靖三十二年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 315713）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Rx49hiIzaQaOLZgrtiscSf
          claim_id: c_KeUKQeCEbJFf41LTkmjXHL
          source_id: s_CnLD5osgYoHpZcSggrUUx3
          stance: supports
          locator: CBDB:315713
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

# 王憲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王憲 | accepted |
| bio.summary | 王憲，明人物。嘉靖三十二年進士，籍贯崑山。（中国历代人物传记资料库 CBDB 315713） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王憲（CBDB 315713）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315713&o=json)
