---
schema: wang-person/v1
id: p_MYXxrYqFHmgUiy1w9F36dK
status: active
merged_into: null
display_name: 王普
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eMVVcxDkYLPi3a98ec24LF
        subject_person_id: p_MYXxrYqFHmgUiy1w9F36dK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王普
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jQGw5npyXSrzN7PxnWfE5q
          claim_id: c_eMVVcxDkYLPi3a98ec24LF
          source_id: s_DfR57UQ4KcTxd6yMPM9yPN
          stance: supports
          locator: CBDB:38338
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38338）
          source: &a1
            id: s_DfR57UQ4KcTxd6yMPM9yPN
            source_type: api_record
            title: 中国历代人物传记资料库：王普（CBDB 38338）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38338&o=json
            external_identifier: CBDB:38338
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.434Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i7CNmjEB7FhYgDEjh6V5wv
        subject_person_id: p_MYXxrYqFHmgUiy1w9F36dK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王普，宋人物。籍贯成都府，曾任舍人院。（中国历代人物传记资料库 CBDB 38338）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IomwhrPwr9sclYdCuLZA1U
          claim_id: c_i7CNmjEB7FhYgDEjh6V5wv
          source_id: s_DfR57UQ4KcTxd6yMPM9yPN
          stance: supports
          locator: CBDB:38338
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

# 王普

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王普 | accepted |
| bio.summary | 王普，宋人物。籍贯成都府，曾任舍人院。（中国历代人物传记资料库 CBDB 38338） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王普（CBDB 38338）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38338&o=json)
