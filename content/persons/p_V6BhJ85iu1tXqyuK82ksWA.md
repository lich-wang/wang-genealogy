---
schema: wang-person/v1
id: p_V6BhJ85iu1tXqyuK82ksWA
status: active
merged_into: null
display_name: 王衡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_r962QcFJZf3bU3DgoPN1rp
        subject_person_id: p_V6BhJ85iu1tXqyuK82ksWA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NJKjvmYz2voG2CzFdUJUq1
          claim_id: c_r962QcFJZf3bU3DgoPN1rp
          source_id: s_fACpUAhBC2DCwm1NYCqkQ7
          stance: supports
          locator: CBDB:262625
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（262625）
          source: &a1
            id: s_fACpUAhBC2DCwm1NYCqkQ7
            source_type: api_record
            title: 中国历代人物传记资料库：王衡（CBDB 262625）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262625&o=json
            external_identifier: CBDB:262625
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.599Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2nUJcrwnpyaKFm9gQEzF24
        subject_person_id: p_V6BhJ85iu1tXqyuK82ksWA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王衡，明人物。景泰五年進士，籍贯濟寧州。（中国历代人物传记资料库 CBDB 262625）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vlUQUTS3cf7yBSBjz4xEW5
          claim_id: c_2nUJcrwnpyaKFm9gQEzF24
          source_id: s_fACpUAhBC2DCwm1NYCqkQ7
          stance: supports
          locator: CBDB:262625
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

# 王衡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王衡 | accepted |
| bio.summary | 王衡，明人物。景泰五年進士，籍贯濟寧州。（中国历代人物传记资料库 CBDB 262625） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王衡（CBDB 262625）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=262625&o=json)
