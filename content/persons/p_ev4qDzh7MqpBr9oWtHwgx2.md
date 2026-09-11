---
schema: wang-person/v1
id: p_ev4qDzh7MqpBr9oWtHwgx2
status: active
merged_into: null
display_name: 王道寧
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LsER7HCTQKoyQuhvB7U1FC
        subject_person_id: p_ev4qDzh7MqpBr9oWtHwgx2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JGTXC8zNBCXcb2waZhEohi
          claim_id: c_LsER7HCTQKoyQuhvB7U1FC
          source_id: s_ayEdS7jveowDgyxAqPJhSY
          stance: supports
          locator: CBDB:701714
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（701714）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_omj9fkwXzx66HdKSkPGRMf
        subject_person_id: p_ev4qDzh7MqpBr9oWtHwgx2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道寧，清人物。籍贯錢塘，入仕邑庠生。（中国历代人物传记资料库 CBDB 701714）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_K5hQQ-HV-E5eZLFmTH_awE
          claim_id: c_omj9fkwXzx66HdKSkPGRMf
          source_id: s_ayEdS7jveowDgyxAqPJhSY
          stance: supports
          locator: CBDB:701714
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source: *a1
      object_person:
        id: p_pprVdJTmLdG4kNN2aCDnuF
        status: active
        display_name: 王元佐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王道寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道寧 | accepted |
| bio.summary | 王道寧，清人物。籍贯錢塘，入仕邑庠生。（中国历代人物传记资料库 CBDB 701714） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pprVdJTmLdG4kNN2aCDnuF | 王元佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道寧（CBDB 701714）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=701714&o=json)
