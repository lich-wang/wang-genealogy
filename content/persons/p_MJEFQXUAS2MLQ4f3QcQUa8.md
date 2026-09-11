---
schema: wang-person/v1
id: p_MJEFQXUAS2MLQ4f3QcQUa8
status: active
merged_into: null
display_name: 王臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ev2iR3Y9ZmH7GHMagwU4Bi
        subject_person_id: p_MJEFQXUAS2MLQ4f3QcQUa8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NZkfPGPkKQ69nNzkygcLXb
          claim_id: c_Ev2iR3Y9ZmH7GHMagwU4Bi
          source_id: s_5krzRfmrwn7u1pprQtNWg2
          stance: supports
          locator: CBDB:474729
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（474729）
          source: &a1
            id: s_5krzRfmrwn7u1pprQtNWg2
            source_type: api_record
            title: 中国历代人物传记资料库：王臣（CBDB 474729）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=474729&o=json
            external_identifier: CBDB:474729
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.383Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qoyzCHChxsCsi7tCV7ng3C
        subject_person_id: p_MJEFQXUAS2MLQ4f3QcQUa8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臣，清人物。曾任軍守備。（中国历代人物传记资料库 CBDB 474729）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2wJk9TFnLfbAP5BfLcy-RO
          claim_id: c_qoyzCHChxsCsi7tCV7ng3C
          source_id: s_5krzRfmrwn7u1pprQtNWg2
          stance: supports
          locator: CBDB:474729
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

# 王臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王臣 | accepted |
| bio.summary | 王臣，清人物。曾任軍守備。（中国历代人物传记资料库 CBDB 474729） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王臣（CBDB 474729）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=474729&o=json)
