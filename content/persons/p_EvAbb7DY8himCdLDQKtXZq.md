---
schema: wang-person/v1
id: p_EvAbb7DY8himCdLDQKtXZq
status: active
merged_into: null
display_name: 王連
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TJJBwJWB2ACiKpmnayBWo3
        subject_person_id: p_EvAbb7DY8himCdLDQKtXZq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王連
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oAm4QNtPDiR1obZRujeBMS
          claim_id: c_TJJBwJWB2ACiKpmnayBWo3
          source_id: s_D7h21eHSxKfMBTxBmEqCHD
          stance: supports
          locator: CBDB:210426
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（210426）
          source: &a1
            id: s_D7h21eHSxKfMBTxBmEqCHD
            source_type: api_record
            title: 中国历代人物传记资料库：王連（CBDB 210426）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210426&o=json
            external_identifier: CBDB:210426
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.001Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TxEQxVCQ1LPKfUX5PAud6m
        subject_person_id: p_EvAbb7DY8himCdLDQKtXZq
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
        - id: cs_KAqdxv9MdFyaCu7CFMDqk2
          claim_id: c_TxEQxVCQ1LPKfUX5PAud6m
          source_id: s_D7h21eHSxKfMBTxBmEqCHD
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

# 王連

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王連 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王連（CBDB 210426）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210426&o=json)
