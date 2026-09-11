---
schema: wang-person/v1
id: p_w1e5yHXVcLxb45aWhqxjRz
status: active
merged_into: null
display_name: 王浙
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8A4fzRPJmJaEkREPEy2RDT
        subject_person_id: p_w1e5yHXVcLxb45aWhqxjRz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PsQTk922DyHiKnLxi8XAXD
          claim_id: c_8A4fzRPJmJaEkREPEy2RDT
          source_id: s_aHkj2mFFw7ErJG2vu9GNP3
          stance: supports
          locator: CBDB:134178
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（134178）
          source: &a1
            id: s_aHkj2mFFw7ErJG2vu9GNP3
            source_type: api_record
            title: 中国历代人物传记资料库：王浙（CBDB 134178）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134178&o=json
            external_identifier: CBDB:134178
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.310Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cQ4CT1h7EsH6UcrABFnsBr
        subject_person_id: p_w1e5yHXVcLxb45aWhqxjRz
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
        - id: cs_PndMLvymbMk6zLTsJjJCyG
          claim_id: c_cQ4CT1h7EsH6UcrABFnsBr
          source_id: s_aHkj2mFFw7ErJG2vu9GNP3
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
  ancestors:
    - claim:
        id: c_FgX9aHEekksrKTCz5qf5Cy
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_w1e5yHXVcLxb45aWhqxjRz
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8BYNMGA2UVM2NsBRXwtZQf
          claim_id: c_FgX9aHEekksrKTCz5qf5Cy
          source_id: s_L25tMjRPyRu4qPsx4K9Mwg
          stance: supports
          locator: 宋濂全集，1606：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_L25tMjRPyRu4qPsx4K9Mwg
            source_type: api_record
            title: 中国历代人物传记资料库：王澄（CBDB 100938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100938&o=json
            external_identifier: CBDB:100938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.583Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_vM6985QJehceoGJD1bbJKF
        status: active
        display_name: 王澄
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王浙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王浙 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_vM6985QJehceoGJD1bbJKF | 王澄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王澄（CBDB 100938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100938&o=json)
- [中国历代人物传记资料库：王浙（CBDB 134178）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134178&o=json)
