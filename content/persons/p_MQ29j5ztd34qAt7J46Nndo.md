---
schema: wang-person/v1
id: p_MQ29j5ztd34qAt7J46Nndo
status: active
merged_into: null
display_name: 王永積
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5xnAT9v2t9hiBbJB712TkF
        subject_person_id: p_MQ29j5ztd34qAt7J46Nndo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永積
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AD4r68FQpCLpXux2mgsUZj
          claim_id: c_5xnAT9v2t9hiBbJB712TkF
          source_id: s_DWHTi4B4JsQiK8eXKGh3Jc
          stance: supports
          locator: CBDB:71508
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71508）
          source: &a1
            id: s_DWHTi4B4JsQiK8eXKGh3Jc
            source_type: api_record
            title: 中国历代人物传记资料库：王永積（CBDB 71508）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71508&o=json
            external_identifier: CBDB:71508
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.729Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HsgLzD1v4Zse8sMMtuwWUC
        subject_person_id: p_MQ29j5ztd34qAt7J46Nndo
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1600年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L3hw1KGTKXPRAjzQzzi7YS
          claim_id: c_HsgLzD1v4Zse8sMMtuwWUC
          source_id: s_DWHTi4B4JsQiK8eXKGh3Jc
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
        id: c_TGPiJXU3U1qtpKCDDCGf32
        subject_person_id: p_MQ29j5ztd34qAt7J46Nndo
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1660年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jo5J3Bv4KBCkDjxmAJkUCW
          claim_id: c_TGPiJXU3U1qtpKCDDCGf32
          source_id: s_DWHTi4B4JsQiK8eXKGh3Jc
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
        id: c_Sc1UnAHaSq8zxE2uJ6o3Uj
        subject_person_id: p_MQ29j5ztd34qAt7J46Nndo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永積（1600年—1660年），清人物。籍贯無錫。（中国历代人物传记资料库 CBDB 71508）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BCs0JloZSI6VnUOXN3cV2_
          claim_id: c_Sc1UnAHaSq8zxE2uJ6o3Uj
          source_id: s_DWHTi4B4JsQiK8eXKGh3Jc
          stance: supports
          locator: CBDB:71508
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

# 王永積

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永積 | accepted |
| birth.date | 1600年 | accepted |
| death.date | 1660年 | accepted |
| bio.summary | 王永積（1600年—1660年），清人物。籍贯無錫。（中国历代人物传记资料库 CBDB 71508） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王永積（CBDB 71508）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71508&o=json)
