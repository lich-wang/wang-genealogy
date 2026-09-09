---
schema: wang-person/v1
id: p_hJDQjUPQs4fNxVuSNP9o2j
status: active
merged_into: null
display_name: 王錫九
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xXC6LspJArAkdxKVsZN4PB
        subject_person_id: p_hJDQjUPQs4fNxVuSNP9o2j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫九
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7gR3kDiG4xwqtUFuK89Qrp
          claim_id: c_xXC6LspJArAkdxKVsZN4PB
          source_id: s_jbq2cGfHxGHYNQLHhgLqqU
          stance: supports
          locator: CBDB:72113
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72113）
          source: &a1
            id: s_jbq2cGfHxGHYNQLHhgLqqU
            source_type: api_record
            title: 中国历代人物传记资料库：王錫九（CBDB 72113）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72113&o=json
            external_identifier: CBDB:72113
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.000Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_WVfNPag6HDLw9a4fywNL7L
        subject_person_id: p_hJDQjUPQs4fNxVuSNP9o2j
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1797年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3MmssdEKAGHh3QSNvyNf3D
          claim_id: c_WVfNPag6HDLw9a4fywNL7L
          source_id: s_jbq2cGfHxGHYNQLHhgLqqU
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
        id: c_k58z7Vr4LPGFR8zdKDBNcK
        subject_person_id: p_hJDQjUPQs4fNxVuSNP9o2j
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1855年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KjBdFzCqAwvDDT6wA7ZVTh
          claim_id: c_k58z7Vr4LPGFR8zdKDBNcK
          source_id: s_jbq2cGfHxGHYNQLHhgLqqU
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
        id: c_EpkN259BQdehXaVFM4oABk
        subject_person_id: p_hJDQjUPQs4fNxVuSNP9o2j
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z1KE5jBkE31ZAWB8fhLNHW
          claim_id: c_EpkN259BQdehXaVFM4oABk
          source_id: s_jbq2cGfHxGHYNQLHhgLqqU
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

# 王錫九

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫九 | accepted |
| birth.date | 1797年 | accepted |
| death.date | 1855年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫九（CBDB 72113）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72113&o=json)
