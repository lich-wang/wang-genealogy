---
schema: wang-person/v1
id: p_CRahdmE6JwvnJLwpdCgwWK
status: active
merged_into: null
display_name: 王德庸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CPPWcL4TDn9yzHgFShs2gr
        subject_person_id: p_CRahdmE6JwvnJLwpdCgwWK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德庸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ba9gtvE3o1r4koPX96Gq1T
          claim_id: c_CPPWcL4TDn9yzHgFShs2gr
          source_id: s_qkpPkU9tA2ERGKCbiYZh1x
          stance: supports
          locator: CBDB:637680
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637680）
          source: &a1
            id: s_qkpPkU9tA2ERGKCbiYZh1x
            source_type: api_record
            title: 中国历代人物传记资料库：王德庸（CBDB 637680）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637680&o=json
            external_identifier: CBDB:637680
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.392Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G1xcU8PGZtZQ8vuZdHgo3D
        subject_person_id: p_CRahdmE6JwvnJLwpdCgwWK
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
        - id: cs_5sChLSMP3iQtHQCD8sX8Qh
          claim_id: c_G1xcU8PGZtZQ8vuZdHgo3D
          source_id: s_qkpPkU9tA2ERGKCbiYZh1x
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

# 王德庸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德庸 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德庸（CBDB 637680）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637680&o=json)
