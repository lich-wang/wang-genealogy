---
schema: wang-person/v1
id: p_TVYqoQ3gGR7yWV7C5141TK
status: active
merged_into: null
display_name: 王廷遷
cbdb_id: 325995
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r6HX3k8zBdfYb1GBNkCrA1
        subject_person_id: p_TVYqoQ3gGR7yWV7C5141TK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷遷，明人物。嘉靖三十八年進士，籍贯黃岡，入仕監生。（中国历代人物传记资料库 CBDB 325995）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Sz3rMHuN2BvGuXAjHI35x7
          claim_id: c_r6HX3k8zBdfYb1GBNkCrA1
          source_id: s_LhqmQLHcwJCTWeuc9DZH5B
          stance: supports
          locator: CBDB:325995
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_LhqmQLHcwJCTWeuc9DZH5B
            source_type: api_record
            title: 中国历代人物传记资料库：王廷遷（CBDB 325995）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325995&o=json
            external_identifier: CBDB:325995
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_13LHza4dbA9H9UPZGZaKhj
        subject_person_id: p_TVYqoQ3gGR7yWV7C5141TK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷遷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_pifVDucE3jHbxnxkAvmHDd
          claim_id: c_13LHza4dbA9H9UPZGZaKhj
          source_id: s_LhqmQLHcwJCTWeuc9DZH5B
          stance: supports
          locator: CBDB:325995
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_r62MBIKdTyzxZprEzbv4nQ
        subject_person_id: p_CF5LJP7gMSDjjxZDLTJKd5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TVYqoQ3gGR7yWV7C5141TK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c8WhYi4DH4NrHxLqd7jxOl
          claim_id: c_r62MBIKdTyzxZprEzbv4nQ
          source_id: s_xHbpWeNVaORA8C0lslXVDh
          stance: supports
          locator: CBDB：兄弟 王廷瞻（34669）之父／母 王濟
          quotation: null
          interpretation_note: 由兄弟关系推断：王廷遷 与 王廷瞻 为同胞（CBDB 记「兄」），王廷瞻 之父／母即 王廷遷 之父／母。
          source:
            id: s_xHbpWeNVaORA8C0lslXVDh
            source_type: api_record
            title: 中国历代人物传记资料库：王廷遷（CBDB 325995）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325995&o=json
            external_identifier: CBDB:325995
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CF5LJP7gMSDjjxZDLTJKd5
        status: active
        display_name: 王濟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_hrAHXPPfDUs9cDMgCL8pmY
        subject_person_id: p_TVYqoQ3gGR7yWV7C5141TK
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yJdXEyhNkYGEWdnouNB9Xu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ziDK8OQ8G0HZHUDTONgm-9
          claim_id: c_hrAHXPPfDUs9cDMgCL8pmY
          source_id: s_xHbpWeNVaORA8C0lslXVDh
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 34669 王廷瞻）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xHbpWeNVaORA8C0lslXVDh
            source_type: api_record
            title: 中国历代人物传记资料库：王廷遷（CBDB 325995）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325995&o=json
            external_identifier: CBDB:325995
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yJdXEyhNkYGEWdnouNB9Xu
        status: active
        display_name: 王廷瞻
        merged_into_person_id: null
---

# 王廷遷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王廷遷，明人物。嘉靖三十八年進士，籍贯黃岡，入仕監生。（中国历代人物传记资料库 CBDB 325995） | accepted |
| name.primary | 王廷遷 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CF5LJP7gMSDjjxZDLTJKd5 | 王濟 | accepted |
| other | p_yJdXEyhNkYGEWdnouNB9Xu | 王廷瞻 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷遷（CBDB 325995）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325995&o=json)
