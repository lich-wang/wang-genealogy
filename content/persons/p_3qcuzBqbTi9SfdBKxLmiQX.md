---
schema: wang-person/v1
id: p_3qcuzBqbTi9SfdBKxLmiQX
status: active
merged_into: null
display_name: 王紳
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FEJkM6QgGXBDUMmuWnwQQA
        subject_person_id: p_3qcuzBqbTi9SfdBKxLmiQX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kF8wGnpHn8B3XnnkLP3gfd
          claim_id: c_FEJkM6QgGXBDUMmuWnwQQA
          source_id: s_4A7FptRs5DAt8sZb46AqdX
          stance: supports
          locator: CBDB:209207
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（209207）
          source: &a1
            id: s_4A7FptRs5DAt8sZb46AqdX
            source_type: api_record
            title: 中国历代人物传记资料库：王紳（CBDB 209207）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209207&o=json
            external_identifier: CBDB:209207
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.977Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p8En5cQBqFWX3rVNxyD25Q
        subject_person_id: p_3qcuzBqbTi9SfdBKxLmiQX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紳，明人物。隆慶五年進士，籍贯文安，入仕監生。（中国历代人物传记资料库 CBDB 209207）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8KMt_Up9EmIIU93kxTgx1m
          claim_id: c_p8En5cQBqFWX3rVNxyD25Q
          source_id: s_4A7FptRs5DAt8sZb46AqdX
          stance: supports
          locator: CBDB:209207
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_i8MQHyZuyORHbSdmRFAHXX
        subject_person_id: p_s94RydQTdDQooKZ8AoB28k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3qcuzBqbTi9SfdBKxLmiQX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VqtFvnh6S-ta4ZpRdN5sNm
          claim_id: c_i8MQHyZuyORHbSdmRFAHXX
          source_id: s_CJMg7ZYvRmPJWFbzXkzkQL
          stance: supports
          locator: CBDB：兄弟 王緘（68345）之父／母 王儀
          quotation: null
          interpretation_note: 由兄弟关系推断：王紳 与 王緘 为同胞（CBDB 记「弟」），王緘 之父／母即 王紳 之父／母。
          source:
            id: s_CJMg7ZYvRmPJWFbzXkzkQL
            source_type: api_record
            title: 中国历代人物传记资料库：王紳（CBDB 209207）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209207&o=json
            external_identifier: CBDB:209207
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_s94RydQTdDQooKZ8AoB28k
        status: active
        display_name: 王儀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_YesXt83DFZjgw-dR4fWQZS
        subject_person_id: p_3qcuzBqbTi9SfdBKxLmiQX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Ux2gsGHcSC8JtKGeSs9ttp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DiTQ4qF-wlIMH0ep5qge0X
          claim_id: c_YesXt83DFZjgw-dR4fWQZS
          source_id: s_CJMg7ZYvRmPJWFbzXkzkQL
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 68345 王緘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_CJMg7ZYvRmPJWFbzXkzkQL
            source_type: api_record
            title: 中国历代人物传记资料库：王紳（CBDB 209207）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209207&o=json
            external_identifier: CBDB:209207
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ux2gsGHcSC8JtKGeSs9ttp
        status: active
        display_name: 王緘
        merged_into_person_id: null
---

# 王紳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紳 | accepted |
| bio.summary | 王紳，明人物。隆慶五年進士，籍贯文安，入仕監生。（中国历代人物传记资料库 CBDB 209207） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_s94RydQTdDQooKZ8AoB28k | 王儀 | accepted |
| other | p_Ux2gsGHcSC8JtKGeSs9ttp | 王緘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紳（CBDB 209207）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209207&o=json)
