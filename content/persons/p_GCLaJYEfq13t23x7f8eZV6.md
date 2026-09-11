---
schema: wang-person/v1
id: p_GCLaJYEfq13t23x7f8eZV6
status: active
merged_into: null
display_name: 王三聘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qkHDEWk4CrtUkKYCM3Y4Nd
        subject_person_id: p_GCLaJYEfq13t23x7f8eZV6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三聘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sHcx8FRDM3J6USRQGrn7nf
          claim_id: c_qkHDEWk4CrtUkKYCM3Y4Nd
          source_id: s_f4r8zAzaoFee8mZsMDoQ1d
          stance: supports
          locator: CBDB:574512
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（574512）
          source: &a1
            id: s_f4r8zAzaoFee8mZsMDoQ1d
            source_type: api_record
            title: 中国历代人物传记资料库：王三聘（CBDB 574512）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574512&o=json
            external_identifier: CBDB:574512
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.919Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LPtVZjPTXTtJ9xKs9k8LDz
        subject_person_id: p_GCLaJYEfq13t23x7f8eZV6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三聘，明人物。籍贯廣濟。（中国历代人物传记资料库 CBDB 574512）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8KkEhbJwnqpnOwr7h3JfUv
          claim_id: c_LPtVZjPTXTtJ9xKs9k8LDz
          source_id: s_f4r8zAzaoFee8mZsMDoQ1d
          stance: supports
          locator: CBDB:574512
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

# 王三聘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三聘 | accepted |
| bio.summary | 王三聘，明人物。籍贯廣濟。（中国历代人物传记资料库 CBDB 574512） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王三聘（CBDB 574512）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=574512&o=json)
