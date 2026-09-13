---
schema: wang-person/v1
id: p_qZbDAuVDNqywpLNodAFBcs
status: active
merged_into: null
display_name: 王源昌
cbdb_id: 342652
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ngkQ3YonVGzQoVSiDy4EMj
        subject_person_id: p_qZbDAuVDNqywpLNodAFBcs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源昌，明人物。明清進士進士，籍贯黃岡，入仕進士。（中国历代人物传记资料库 CBDB 342652）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Dse_T6mUEDpMGKLzY1VVHw
          claim_id: c_ngkQ3YonVGzQoVSiDy4EMj
          source_id: s_eA3PfFJhnA2wE6HQYzSQf4
          stance: supports
          locator: CBDB:342652
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_eA3PfFJhnA2wE6HQYzSQf4
            source_type: api_record
            title: 中国历代人物传记资料库：王源昌（CBDB 342652）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342652&o=json
            external_identifier: CBDB:342652
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:12.174Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6dkYnYaBfFo3gnSN1rzwxe
        subject_person_id: p_qZbDAuVDNqywpLNodAFBcs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王源昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_E6VXADHPi6nWLnd2fxaBM3
          claim_id: c_6dkYnYaBfFo3gnSN1rzwxe
          source_id: s_eA3PfFJhnA2wE6HQYzSQf4
          stance: supports
          locator: CBDB:342652
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4301-4400）｜历史性依据：CBDB 朝代 = 明
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

# 王源昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王源昌，明人物。明清進士進士，籍贯黃岡，入仕進士。（中国历代人物传记资料库 CBDB 342652） | accepted |
| name.primary | 王源昌 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王源昌（CBDB 342652）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342652&o=json)
