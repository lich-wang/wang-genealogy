---
schema: wang-person/v1
id: p_2Z9ovzoyssBJVDk5H5EyEb
status: active
merged_into: null
display_name: 王昌祖
cbdb_id: 236490
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2bPFLiz5qN7DDM3aspu9t8
        subject_person_id: p_2Z9ovzoyssBJVDk5H5EyEb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌祖，明人物。籍贯武進。（中国历代人物传记资料库 CBDB 236490）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_-Qr8TJZKSyYnP26gtOKdct
          claim_id: c_2bPFLiz5qN7DDM3aspu9t8
          source_id: s_EAMrqL4fTtNEozd1WWB6NH
          stance: supports
          locator: CBDB:236490
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_EAMrqL4fTtNEozd1WWB6NH
            source_type: api_record
            title: 中国历代人物传记资料库：王昌祖（CBDB 236490）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236490&o=json
            external_identifier: CBDB:236490
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_AT53NrCiQuQNvjuER8SA3E
        subject_person_id: p_2Z9ovzoyssBJVDk5H5EyEb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_x7T2gBJavcc3C4d3ywYNXy
          claim_id: c_AT53NrCiQuQNvjuER8SA3E
          source_id: s_EAMrqL4fTtNEozd1WWB6NH
          stance: supports
          locator: CBDB:236490
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xBLQX9nfOpxfxWFtVpjoia
        subject_person_id: p_qoAdHHLt7NBY3aQndi4h7A
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2Z9ovzoyssBJVDk5H5EyEb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VW6NNaOmS6uOSLMDqgFp6c
          claim_id: c_xBLQX9nfOpxfxWFtVpjoia
          source_id: s_7rqXWHYOu9lCOGgtNBe-_Z
          stance: supports
          locator: CBDB：兄弟 王念祖（207816）之父／母 王舜卿
          quotation: null
          interpretation_note: 由兄弟关系推断：王昌祖 与 王念祖 为同胞（CBDB 记「兄」），王念祖 之父／母即 王昌祖 之父／母。
          source:
            id: s_7rqXWHYOu9lCOGgtNBe-_Z
            source_type: api_record
            title: 中国历代人物传记资料库：王昌祖（CBDB 236490）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236490&o=json
            external_identifier: CBDB:236490
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qoAdHHLt7NBY3aQndi4h7A
        status: active
        display_name: 王舜卿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_qGDC1zOvnzlfALqANo5Lgr
        subject_person_id: p_2Z9ovzoyssBJVDk5H5EyEb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nwL2xVd75q361KsBtDP6KW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m61oGgZQ72_p3gYR_ejuuj
          claim_id: c_qGDC1zOvnzlfALqANo5Lgr
          source_id: s_7rqXWHYOu9lCOGgtNBe-_Z
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207816 王念祖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7rqXWHYOu9lCOGgtNBe-_Z
            source_type: api_record
            title: 中国历代人物传记资料库：王昌祖（CBDB 236490）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236490&o=json
            external_identifier: CBDB:236490
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nwL2xVd75q361KsBtDP6KW
        status: active
        display_name: 王念祖
        merged_into_person_id: null
---

# 王昌祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王昌祖，明人物。籍贯武進。（中国历代人物传记资料库 CBDB 236490） | accepted |
| name.primary | 王昌祖 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qoAdHHLt7NBY3aQndi4h7A | 王舜卿 | accepted |
| other | p_nwL2xVd75q361KsBtDP6KW | 王念祖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昌祖（CBDB 236490）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236490&o=json)
