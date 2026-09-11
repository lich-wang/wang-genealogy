---
schema: wang-person/v1
id: p_iFnuzJLsm6Raw4eHm27FKC
status: active
merged_into: null
display_name: 王鎮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Xv9U1s1D1ySmk1XsESK1Nm
        subject_person_id: p_iFnuzJLsm6Raw4eHm27FKC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QD7z9DGegq5hhjzgMqFdDi
          claim_id: c_Xv9U1s1D1ySmk1XsESK1Nm
          source_id: s_9Qj8LqZKoQZnMVYbfYgBF8
          stance: supports
          locator: CBDB:126865
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126865）
          source: &a1
            id: s_9Qj8LqZKoQZnMVYbfYgBF8
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮（CBDB 126865）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126865&o=json
            external_identifier: CBDB:126865
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.270Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KEEtUP8L91CVUW1tVWJL3f
        subject_person_id: p_iFnuzJLsm6Raw4eHm27FKC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎮，明人物。籍贯上元，身份为武將、外戚，曾任都督同知。（中国历代人物传记资料库 CBDB 126865）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yHto3GbT4NSNBeG9oNTSz-
          claim_id: c_KEEtUP8L91CVUW1tVWJL3f
          source_id: s_9Qj8LqZKoQZnMVYbfYgBF8
          stance: supports
          locator: CBDB:126865
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

# 王鎮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎮 | accepted |
| bio.summary | 王鎮，明人物。籍贯上元，身份为武將、外戚，曾任都督同知。（中国历代人物传记资料库 CBDB 126865） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鎮（CBDB 126865）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126865&o=json)
