---
schema: wang-person/v1
id: p_rXgThQ3SLVpXDRziiubL6P
status: active
merged_into: null
display_name: 王宜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6otwmqwEfjVx3NwMQ1cpfW
        subject_person_id: p_rXgThQ3SLVpXDRziiubL6P
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
        - id: cs_CzPJUfY89bJtatTfD44SSv
          claim_id: c_6otwmqwEfjVx3NwMQ1cpfW
          source_id: s_6j6SS5L41KgGbfCS4tnn3p
          stance: supports
          locator: CBDB:236849
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（236849）
          source: &a1
            id: s_6j6SS5L41KgGbfCS4tnn3p
            source_type: api_record
            title: 中国历代人物传记资料库：王宜（CBDB 236849）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236849&o=json
            external_identifier: CBDB:236849
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.817Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_t7naFVpqtAsTQodf4WjH6Z
        subject_person_id: p_rXgThQ3SLVpXDRziiubL6P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宜，明人物。正統四年進士，籍贯祥符。（中国历代人物传记资料库 CBDB 236849）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0trRVYLNX4hMet1Mo6nbX6
          claim_id: c_t7naFVpqtAsTQodf4WjH6Z
          source_id: s_6j6SS5L41KgGbfCS4tnn3p
          stance: supports
          locator: CBDB:236849
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

# 王宜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宜 | accepted |
| bio.summary | 王宜，明人物。正統四年進士，籍贯祥符。（中国历代人物传记资料库 CBDB 236849） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宜（CBDB 236849）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236849&o=json)
