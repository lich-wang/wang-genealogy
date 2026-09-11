---
schema: wang-person/v1
id: p_6qE93EG4KutQnJtopohJ6K
status: active
merged_into: null
display_name: 王萬祥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T3bEnqyNxEG586GZXhFu3X
        subject_person_id: p_6qE93EG4KutQnJtopohJ6K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nBwx1DP4U6pKUAsTr9p58e
          claim_id: c_T3bEnqyNxEG586GZXhFu3X
          source_id: s_idNFWy8njLJm7AW3iezFnj
          stance: supports
          locator: CBDB:69442
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69442）
          source: &a1
            id: s_idNFWy8njLJm7AW3iezFnj
            source_type: api_record
            title: 中国历代人物传记资料库：王萬祥（CBDB 69442）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69442&o=json
            external_identifier: CBDB:69442
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.271Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Tcn3m5Nn48bErGHL8xcmK3
        subject_person_id: p_6qE93EG4KutQnJtopohJ6K
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1643年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NoXytDHLNndimoZcvt5Ltd
          claim_id: c_Tcn3m5Nn48bErGHL8xcmK3
          source_id: s_idNFWy8njLJm7AW3iezFnj
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_SNUcuPUWzfU2zuwQS5EtVJ
        subject_person_id: p_6qE93EG4KutQnJtopohJ6K
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1701年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LWx1b1vvDBoPQCit61jvMJ
          claim_id: c_SNUcuPUWzfU2zuwQS5EtVJ
          source_id: s_idNFWy8njLJm7AW3iezFnj
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KZb2EkWiGkcE2vmd3zFCqT
        subject_person_id: p_6qE93EG4KutQnJtopohJ6K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬祥（1643年—1701年），清人物。籍贯會寧，曾任提標中軍副將、總兵、總兵官。（中国历代人物传记资料库 CBDB 69442）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_D-LDxO_02zxf81qhsM712x
          claim_id: c_KZb2EkWiGkcE2vmd3zFCqT
          source_id: s_idNFWy8njLJm7AW3iezFnj
          stance: supports
          locator: CBDB:69442
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

# 王萬祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萬祥 | accepted |
| birth.date | 1643年 | accepted |
| death.date | 1701年 | accepted |
| bio.summary | 王萬祥（1643年—1701年），清人物。籍贯會寧，曾任提標中軍副將、總兵、總兵官。（中国历代人物传记资料库 CBDB 69442） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王萬祥（CBDB 69442）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69442&o=json)
