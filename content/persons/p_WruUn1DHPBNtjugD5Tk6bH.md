---
schema: wang-person/v1
id: p_WruUn1DHPBNtjugD5Tk6bH
status: active
merged_into: null
display_name: 王登元
cbdb_id: 118477
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_83cL5JFxocE6Pj76WJT4gP
        subject_person_id: p_WruUn1DHPBNtjugD5Tk6bH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王登元，清人物。中国历代人物传记资料库（CBDB）以人物编号 118477 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_VIrgbXkABxjkG3-CRU--xW
          claim_id: c_83cL5JFxocE6Pj76WJT4gP
          source_id: s_syXaxx5o85RR33B7uX75ba
          stance: supports
          locator: CBDB:118477
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_syXaxx5o85RR33B7uX75ba
            source_type: api_record
            title: 中国历代人物传记资料库：王登元（CBDB 118477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118477&o=json
            external_identifier: CBDB:118477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.102Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_cLCHFWLwUzkBBZR9BoQwot
        subject_person_id: p_WruUn1DHPBNtjugD5Tk6bH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王登元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_TMBQUfd9cVMvntsNQZTJ9w
          claim_id: c_cLCHFWLwUzkBBZR9BoQwot
          source_id: s_syXaxx5o85RR33B7uX75ba
          stance: supports
          locator: CBDB:118477
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1801-1900）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_syXaxx5o85RR33B7uX75ba
            source_type: api_record
            title: 中国历代人物传记资料库：王登元（CBDB 118477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118477&o=json
            external_identifier: CBDB:118477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.102Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_F9lDCShhUvm6sDt6FTNDN_
        subject_person_id: p_WruUn1DHPBNtjugD5Tk6bH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Z6PGfSbJxCtm9NB1vtVbam
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U3HsacXFpJzzzjENqulr3A
          claim_id: c_F9lDCShhUvm6sDt6FTNDN_
          source_id: s_JrHA77LB1CXXeN61RPdCfK
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2586：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JrHA77LB1CXXeN61RPdCfK
            source_type: api_record
            title: 中国历代人物传记资料库：王淑卿（CBDB 118476）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118476&o=json
            external_identifier: CBDB:118476
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.877Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Z6PGfSbJxCtm9NB1vtVbam
        status: active
        display_name: 王淑卿
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王登元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王登元，清人物。中国历代人物传记资料库（CBDB）以人物编号 118477 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王登元 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Z6PGfSbJxCtm9NB1vtVbam | 王淑卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王登元（CBDB 118477）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118477&o=json)
- [中国历代人物传记资料库：王淑卿（CBDB 118476）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=118476&o=json)
