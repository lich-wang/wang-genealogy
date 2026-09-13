---
schema: wang-person/v1
id: p_AbZUuyWRBSPKbc1QtJF8Su
status: active
merged_into: null
display_name: 王閱
cbdb_id: 244960
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i1UFLaimHBqGz53gpe4vJC
        subject_person_id: p_AbZUuyWRBSPKbc1QtJF8Su
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王閱，明人物。成化五年進士，籍贯武城。（中国历代人物传记资料库 CBDB 244960）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_WvIkMDO8JcWHmLqip2HKwR
          claim_id: c_i1UFLaimHBqGz53gpe4vJC
          source_id: s_3ggV2YNqVLbZX2xRE43euw
          stance: supports
          locator: CBDB:244960
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_3ggV2YNqVLbZX2xRE43euw
            source_type: api_record
            title: 中国历代人物传记资料库：王閱（CBDB 244960）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244960&o=json
            external_identifier: CBDB:244960
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_FtyxLwPyhhuHNaJHjZSofe
        subject_person_id: p_AbZUuyWRBSPKbc1QtJF8Su
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王閱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_cvkDvW5wnXjrEpkwvAU9z9
          claim_id: c_FtyxLwPyhhuHNaJHjZSofe
          source_id: s_3ggV2YNqVLbZX2xRE43euw
          stance: supports
          locator: CBDB:244960
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
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

# 王閱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王閱，明人物。成化五年進士，籍贯武城。（中国历代人物传记资料库 CBDB 244960） | accepted |
| name.primary | 王閱 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王閱（CBDB 244960）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244960&o=json)
