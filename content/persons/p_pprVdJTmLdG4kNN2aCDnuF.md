---
schema: wang-person/v1
id: p_pprVdJTmLdG4kNN2aCDnuF
status: active
merged_into: null
display_name: 王元佐
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JpHQSEq9v5kF9rD6eFnF2P
        subject_person_id: p_pprVdJTmLdG4kNN2aCDnuF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nyXta2WSGefi1GtKL7VEjJ
          claim_id: c_JpHQSEq9v5kF9rD6eFnF2P
          source_id: s_jAU68tusz9pf7xe95V8486
          stance: supports
          locator: CBDB:701712
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（701712）
          source: &a1
            id: s_jAU68tusz9pf7xe95V8486
            source_type: api_record
            title: 中国历代人物传记资料库：王元佐（CBDB 701712）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701712&o=json
            external_identifier: CBDB:701712
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.806Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gH98mQLL25PiyMtq6Rpy7T
        subject_person_id: p_pprVdJTmLdG4kNN2aCDnuF
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
        - id: cs_CrAHRCcCEgJVT6waf15zGk
          claim_id: c_gH98mQLL25PiyMtq6Rpy7T
          source_id: s_jAU68tusz9pf7xe95V8486
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ilysx57vj0hdtt8NbKv9Kj
        subject_person_id: p_pprVdJTmLdG4kNN2aCDnuF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ev4qDzh7MqpBr9oWtHwgx2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wK2PfmLV1mxV7FY6woNNFf
          claim_id: c_ilysx57vj0hdtt8NbKv9Kj
          source_id: s_ayEdS7jveowDgyxAqPJhSY
          stance: supports
          locator: 錢塘縣志，lgid=219830：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ayEdS7jveowDgyxAqPJhSY
            source_type: api_record
            title: 中国历代人物传记资料库：王道寧（CBDB 701714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701714&o=json
            external_identifier: CBDB:701714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.609Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ev4qDzh7MqpBr9oWtHwgx2
        status: active
        display_name: 王道寧
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元佐 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ev4qDzh7MqpBr9oWtHwgx2 | 王道寧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道寧（CBDB 701714）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701714&o=json)
- [中国历代人物传记资料库：王元佐（CBDB 701712）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701712&o=json)
