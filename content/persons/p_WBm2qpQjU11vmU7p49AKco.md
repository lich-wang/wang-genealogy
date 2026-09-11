---
schema: wang-person/v1
id: p_WBm2qpQjU11vmU7p49AKco
status: active
merged_into: null
display_name: 王敏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vjncDcxq1mrFUjFSMqzccq
        subject_person_id: p_WBm2qpQjU11vmU7p49AKco
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HbGG3URyQymebogv1HmX4u
          claim_id: c_vjncDcxq1mrFUjFSMqzccq
          source_id: s_cMSd1oh762jBe8gMxsmrQK
          stance: supports
          locator: CBDB:452932
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（452932）
          source: &a1
            id: s_cMSd1oh762jBe8gMxsmrQK
            source_type: api_record
            title: 中国历代人物传记资料库：王敏（CBDB 452932）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=452932&o=json
            external_identifier: CBDB:452932
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.363Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4bL6JLWjFGq16x5MfGWWni
        subject_person_id: p_WBm2qpQjU11vmU7p49AKco
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敏，明人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任典史、教諭、訓導。（中国历代人物传记资料库 CBDB 452932）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3YZqrVTdJwPIjxVteYzhbN
          claim_id: c_4bL6JLWjFGq16x5MfGWWni
          source_id: s_cMSd1oh762jBe8gMxsmrQK
          stance: supports
          locator: CBDB:452932
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

# 王敏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敏 | accepted |
| bio.summary | 王敏，明人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任典史、教諭、訓導。（中国历代人物传记资料库 CBDB 452932） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王敏（CBDB 452932）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=452932&o=json)
