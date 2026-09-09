---
schema: wang-person/v1
id: p_VYgKjF5PML5e5SAv3X7je5
status: active
merged_into: null
display_name: 王扶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2f1NWJVsyBKC4RzZFiVpe8
        subject_person_id: p_VYgKjF5PML5e5SAv3X7je5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王扶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kQ3eMSDKMB16y85aPbf79E
          claim_id: c_2f1NWJVsyBKC4RzZFiVpe8
          source_id: s_4MD2VaupadVLw8sh5EGQAp
          stance: supports
          locator: CBDB:459468
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（459468）
          source: &a1
            id: s_4MD2VaupadVLw8sh5EGQAp
            source_type: api_record
            title: 中国历代人物传记资料库：王扶（CBDB 459468）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=459468&o=json
            external_identifier: CBDB:459468
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.696Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XkVAMmz17aqDC5rLVEEW6o
        subject_person_id: p_VYgKjF5PML5e5SAv3X7je5
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
        - id: cs_CXyvSdd6Kyo8sb569PxPLo
          claim_id: c_XkVAMmz17aqDC5rLVEEW6o
          source_id: s_4MD2VaupadVLw8sh5EGQAp
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

# 王扶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王扶 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王扶（CBDB 459468）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=459468&o=json)
