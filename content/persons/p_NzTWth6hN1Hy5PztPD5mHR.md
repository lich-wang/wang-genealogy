---
schema: wang-person/v1
id: p_NzTWth6hN1Hy5PztPD5mHR
status: active
merged_into: null
display_name: 王宜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DMTjJC3q585rmhs8dYLPFi
        subject_person_id: p_NzTWth6hN1Hy5PztPD5mHR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_f6S5VmLSEAPHZ39z5LTZbP
          claim_id: c_DMTjJC3q585rmhs8dYLPFi
          source_id: s_nQEpA6JdhnfaP8QkWQLf92
          stance: supports
          locator: CBDB:315710
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（315710）
          source: &a1
            id: s_nQEpA6JdhnfaP8QkWQLf92
            source_type: api_record
            title: 中国历代人物传记资料库：王宜（CBDB 315710）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315710&o=json
            external_identifier: CBDB:315710
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.950Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4SXPzP3p9ziHnN1PnZErwE
        subject_person_id: p_NzTWth6hN1Hy5PztPD5mHR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2uxiiVmmaVjcyvPm89TB9k
          claim_id: c_4SXPzP3p9ziHnN1PnZErwE
          source_id: s_nQEpA6JdhnfaP8QkWQLf92
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王宜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宜 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宜（CBDB 315710）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315710&o=json)
