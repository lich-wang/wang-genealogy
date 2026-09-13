---
schema: wang-person/v1
id: p_q8fWA7FFJMZ1QDsVLnZF5K
status: active
merged_into: null
display_name: 王自任
cbdb_id: 415314
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PTzsitiB64CgehFRUrShEh
        subject_person_id: p_q8fWA7FFJMZ1QDsVLnZF5K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王自任，清人物。曾任典史。（中国历代人物传记资料库 CBDB 415314）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_wNXvKJhRfUPLd_D_8lBD9n
          claim_id: c_PTzsitiB64CgehFRUrShEh
          source_id: s_Qx7HBMnFdcp5P4BnFfLPNR
          stance: supports
          locator: CBDB:415314
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Qx7HBMnFdcp5P4BnFfLPNR
            source_type: api_record
            title: 中国历代人物传记资料库：王自任（CBDB 415314）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415314&o=json
            external_identifier: CBDB:415314
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:53.628Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NdmKiQVseKVbzS2B42qCwW
        subject_person_id: p_q8fWA7FFJMZ1QDsVLnZF5K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王自任
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_xJAEHX4ATYqifMYa5ybfUK
          claim_id: c_NdmKiQVseKVbzS2B42qCwW
          source_id: s_Qx7HBMnFdcp5P4BnFfLPNR
          stance: supports
          locator: CBDB:415314
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6201-6300）｜历史性依据：CBDB 朝代 = 清
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

# 王自任

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王自任，清人物。曾任典史。（中国历代人物传记资料库 CBDB 415314） | accepted |
| name.primary | 王自任 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王自任（CBDB 415314）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415314&o=json)
