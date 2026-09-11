---
schema: wang-person/v1
id: p_1T2cH1bL7Nhy7JGdKvC4vh
status: active
merged_into: null
display_name: 王繪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YiwThN4bggDkCnV5E41NsF
        subject_person_id: p_1T2cH1bL7Nhy7JGdKvC4vh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AJNAv5d1HXNS7kKe5kvLCM
          claim_id: c_YiwThN4bggDkCnV5E41NsF
          source_id: s_yQG53kSqWTFMAgnxWZg9e8
          stance: supports
          locator: CBDB:242732
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（242732）
          source: &a1
            id: s_yQG53kSqWTFMAgnxWZg9e8
            source_type: api_record
            title: 中国历代人物传记资料库：王繪（CBDB 242732）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242732&o=json
            external_identifier: CBDB:242732
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.981Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DyKTa529ASTB74xWJDyJPH
        subject_person_id: p_1T2cH1bL7Nhy7JGdKvC4vh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繪，明人物。成化五年進士，籍贯宜興。（中国历代人物传记资料库 CBDB 242732）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YJhKAzlSrbzDLf0L85d46o
          claim_id: c_DyKTa529ASTB74xWJDyJPH
          source_id: s_yQG53kSqWTFMAgnxWZg9e8
          stance: supports
          locator: CBDB:242732
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

# 王繪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繪 | accepted |
| bio.summary | 王繪，明人物。成化五年進士，籍贯宜興。（中国历代人物传记资料库 CBDB 242732） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繪（CBDB 242732）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=242732&o=json)
