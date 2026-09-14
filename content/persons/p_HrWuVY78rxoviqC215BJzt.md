---
schema: wang-person/v1
id: p_HrWuVY78rxoviqC215BJzt
status: active
merged_into: null
display_name: 王世祚
cbdb_id: 233802
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZC1CDGfCWcSSxapa6mA1yt
        subject_person_id: p_HrWuVY78rxoviqC215BJzt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世祚，明人物。籍贯南充，入仕廩生。（中国历代人物传记资料库 CBDB 233802）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_luKE40WGKEaIsfSuI0c-Zk
          claim_id: c_ZC1CDGfCWcSSxapa6mA1yt
          source_id: s_itMJyyTcH7fc4jet755YAj
          stance: supports
          locator: CBDB:233802
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_itMJyyTcH7fc4jet755YAj
            source_type: api_record
            title: 中国历代人物传记资料库：王世祚（CBDB 233802）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233802&o=json
            external_identifier: CBDB:233802
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tb3Eh1kb81Cjp7kyrMknGo
        subject_person_id: p_HrWuVY78rxoviqC215BJzt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世祚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_dHqYFSdsVc8AFjnXhgXq95
          claim_id: c_tb3Eh1kb81Cjp7kyrMknGo
          source_id: s_itMJyyTcH7fc4jet755YAj
          stance: supports
          locator: CBDB:233802
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Kmk70eqJRqrRl6MyH5ibdv
        subject_person_id: p_z6ACPFtm9wPnLGvKH6v1N8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HrWuVY78rxoviqC215BJzt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gYU_dC9Fdy1ZDKbCBLBNs9
          claim_id: c_Kmk70eqJRqrRl6MyH5ibdv
          source_id: s_uDYdBTYg5P1NhTbzxs3dWf
          stance: supports
          locator: CBDB：兄弟 王世蔭（207683）之父／母 王樓
          quotation: null
          interpretation_note: 由兄弟关系推断：王世祚 与 王世蔭 为同胞（CBDB 记「兄」），王世蔭 之父／母即 王世祚 之父／母。
          source:
            id: s_uDYdBTYg5P1NhTbzxs3dWf
            source_type: api_record
            title: 中国历代人物传记资料库：王世祚（CBDB 233802）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233802&o=json
            external_identifier: CBDB:233802
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_z6ACPFtm9wPnLGvKH6v1N8
        status: active
        display_name: 王樓
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_jT7B_FbqeXsSMenrTbRpzb
        subject_person_id: p_HrWuVY78rxoviqC215BJzt
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Rv5ych5iExch2twdfSXkLP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k5lbpCPiPxXEO1sA-Y-YqC
          claim_id: c_jT7B_FbqeXsSMenrTbRpzb
          source_id: s_uDYdBTYg5P1NhTbzxs3dWf
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207683 王世蔭）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_uDYdBTYg5P1NhTbzxs3dWf
            source_type: api_record
            title: 中国历代人物传记资料库：王世祚（CBDB 233802）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233802&o=json
            external_identifier: CBDB:233802
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Rv5ych5iExch2twdfSXkLP
        status: active
        display_name: 王世蔭
        merged_into_person_id: null
---

# 王世祚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王世祚，明人物。籍贯南充，入仕廩生。（中国历代人物传记资料库 CBDB 233802） | accepted |
| name.primary | 王世祚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_z6ACPFtm9wPnLGvKH6v1N8 | 王樓 | accepted |
| other | p_Rv5ych5iExch2twdfSXkLP | 王世蔭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王世祚（CBDB 233802）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233802&o=json)
