---
schema: wang-person/v1
id: p_FmSPeEyjDRjc4JnpqkPJyt
status: active
merged_into: null
display_name: 王宗獻
cbdb_id: 317282
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i1TpuFwx7yEMbbdRPCi6up
        subject_person_id: p_FmSPeEyjDRjc4JnpqkPJyt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗獻，明人物。嘉靖三十二年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 317282）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_f9veOiwgfKlSJxG1XcOPaP
          claim_id: c_i1TpuFwx7yEMbbdRPCi6up
          source_id: s_oaXgcHuuCNhe97vZJhpZAC
          stance: supports
          locator: CBDB:317282
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_oaXgcHuuCNhe97vZJhpZAC
            source_type: api_record
            title: 中国历代人物传记资料库：王宗獻（CBDB 317282）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317282&o=json
            external_identifier: CBDB:317282
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gTrCexDNnDBFM618o1EZ1f
        subject_person_id: p_FmSPeEyjDRjc4JnpqkPJyt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗獻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Fi1aWTTtXWtQ7xDuHCpdZR
          claim_id: c_gTrCexDNnDBFM618o1EZ1f
          source_id: s_oaXgcHuuCNhe97vZJhpZAC
          stance: supports
          locator: CBDB:317282
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_cutzJ986FnBvWGkPxC9nKl
        subject_person_id: p_ZPFLk4wbXyzPE5F5zCLZaL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FmSPeEyjDRjc4JnpqkPJyt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4Nq-cwbq3LO38w7xF8TmPh
          claim_id: c_cutzJ986FnBvWGkPxC9nKl
          source_id: s_uJfNEVh5TCw_7hAxZdvHuK
          stance: supports
          locator: CBDB：兄弟 王宗會（204306）之父／母 王綱
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗獻 与 王宗會 为同胞（CBDB 记「兄」），王宗會 之父／母即 王宗獻 之父／母。
          source:
            id: s_uJfNEVh5TCw_7hAxZdvHuK
            source_type: api_record
            title: 中国历代人物传记资料库：王宗獻（CBDB 317282）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317282&o=json
            external_identifier: CBDB:317282
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZPFLk4wbXyzPE5F5zCLZaL
        status: active
        display_name: 王綱
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_hsdtes-LpQ3Kx1WtjNDIdj
        subject_person_id: p_FmSPeEyjDRjc4JnpqkPJyt
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Lurfy4QMHhzD8PMMpjSfCa
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UPoxhc7-gPlw-VQ19qHRYw
          claim_id: c_hsdtes-LpQ3Kx1WtjNDIdj
          source_id: s_uJfNEVh5TCw_7hAxZdvHuK
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204306 王宗會）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uJfNEVh5TCw_7hAxZdvHuK
            source_type: api_record
            title: 中国历代人物传记资料库：王宗獻（CBDB 317282）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317282&o=json
            external_identifier: CBDB:317282
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Lurfy4QMHhzD8PMMpjSfCa
        status: active
        display_name: 王宗會
        merged_into_person_id: null
---

# 王宗獻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宗獻，明人物。嘉靖三十二年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 317282） | accepted |
| name.primary | 王宗獻 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZPFLk4wbXyzPE5F5zCLZaL | 王綱 | accepted |
| other | p_Lurfy4QMHhzD8PMMpjSfCa | 王宗會 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗獻（CBDB 317282）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317282&o=json)
