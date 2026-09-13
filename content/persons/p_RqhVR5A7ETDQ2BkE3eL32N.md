---
schema: wang-person/v1
id: p_RqhVR5A7ETDQ2BkE3eL32N
status: active
merged_into: null
display_name: 王雲祥
cbdb_id: 415587
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ph7JwVkVMKP1eVAadB1Aoa
        subject_person_id: p_RqhVR5A7ETDQ2BkE3eL32N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲祥，明人物。曾任主簿。（中国历代人物传记资料库 CBDB 415587）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_49ePnt7yktmvMhZJFVA0g3
          claim_id: c_ph7JwVkVMKP1eVAadB1Aoa
          source_id: s_YJ4XFUM5DGS9ve8fmaKQYj
          stance: supports
          locator: CBDB:415587
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_YJ4XFUM5DGS9ve8fmaKQYj
            source_type: api_record
            title: 中国历代人物传记资料库：王雲祥（CBDB 415587）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415587&o=json
            external_identifier: CBDB:415587
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:03.710Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tbX4Exk9GrnDQPTCSTpeXE
        subject_person_id: p_RqhVR5A7ETDQ2BkE3eL32N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_cpMWrTHEvX8HM68zhWQzCK
          claim_id: c_tbX4Exk9GrnDQPTCSTpeXE
          source_id: s_YJ4XFUM5DGS9ve8fmaKQYj
          stance: supports
          locator: CBDB:415587
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6401-6500）｜历史性依据：CBDB 朝代 = 明
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

# 王雲祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王雲祥，明人物。曾任主簿。（中国历代人物传记资料库 CBDB 415587） | accepted |
| name.primary | 王雲祥 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王雲祥（CBDB 415587）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=415587&o=json)
