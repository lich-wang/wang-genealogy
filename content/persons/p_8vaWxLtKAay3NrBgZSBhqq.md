---
schema: wang-person/v1
id: p_8vaWxLtKAay3NrBgZSBhqq
status: active
merged_into: null
display_name: 王屬
cbdb_id: 236261
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HX87tM9cBvjsYe6Ea63vxc
        subject_person_id: p_8vaWxLtKAay3NrBgZSBhqq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王屬，明人物。籍贯同州，入仕庠生。（中国历代人物传记资料库 CBDB 236261）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_7-56CNDaC_oSySKyf2NNTg
          claim_id: c_HX87tM9cBvjsYe6Ea63vxc
          source_id: s_QpGysF31fMR7LB4ZE7udUq
          stance: supports
          locator: CBDB:236261
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_QpGysF31fMR7LB4ZE7udUq
            source_type: api_record
            title: 中国历代人物传记资料库：王屬（CBDB 236261）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236261&o=json
            external_identifier: CBDB:236261
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_AMikE9AUPtMjQxWZmaDLKW
        subject_person_id: p_8vaWxLtKAay3NrBgZSBhqq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王屬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_nymkwEQHNQwj8MMZtKgcoo
          claim_id: c_AMikE9AUPtMjQxWZmaDLKW
          source_id: s_QpGysF31fMR7LB4ZE7udUq
          stance: supports
          locator: CBDB:236261
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7Rg0N3I07QFpf2Q4nIGb5B
        subject_person_id: p_8EDFnNdhzDymseXpHLiztk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8vaWxLtKAay3NrBgZSBhqq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YM9M3E5zuKfuC20tyAdFQt
          claim_id: c_7Rg0N3I07QFpf2Q4nIGb5B
          source_id: s_1R5oKAPos1B3vuCMLdhCd3
          stance: supports
          locator: CBDB：兄弟 王弘祖（207804）之父／母 王應誥
          quotation: null
          interpretation_note: 由兄弟关系推断：王屬 与 王弘祖 为同胞（CBDB 记「兄」），王弘祖 之父／母即 王屬 之父／母。
          source:
            id: s_1R5oKAPos1B3vuCMLdhCd3
            source_type: api_record
            title: 中国历代人物传记资料库：王屬（CBDB 236261）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236261&o=json
            external_identifier: CBDB:236261
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8EDFnNdhzDymseXpHLiztk
        status: active
        display_name: 王應誥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_B3c8qpMebDEX7kS4YYdscQ
        subject_person_id: p_8vaWxLtKAay3NrBgZSBhqq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Q4mq6fygocp26TN7xUYfs3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__5-Sn73_xaqPeORZhL3J9u
          claim_id: c_B3c8qpMebDEX7kS4YYdscQ
          source_id: s_1R5oKAPos1B3vuCMLdhCd3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207804 王弘祖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1R5oKAPos1B3vuCMLdhCd3
            source_type: api_record
            title: 中国历代人物传记资料库：王屬（CBDB 236261）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236261&o=json
            external_identifier: CBDB:236261
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Q4mq6fygocp26TN7xUYfs3
        status: active
        display_name: 王弘祖
        merged_into_person_id: null
---

# 王屬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王屬，明人物。籍贯同州，入仕庠生。（中国历代人物传记资料库 CBDB 236261） | accepted |
| name.primary | 王屬 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8EDFnNdhzDymseXpHLiztk | 王應誥 | accepted |
| other | p_Q4mq6fygocp26TN7xUYfs3 | 王弘祖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王屬（CBDB 236261）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236261&o=json)
