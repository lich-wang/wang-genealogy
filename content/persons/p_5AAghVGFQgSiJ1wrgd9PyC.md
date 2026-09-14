---
schema: wang-person/v1
id: p_5AAghVGFQgSiJ1wrgd9PyC
status: active
merged_into: null
display_name: 王懋修
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MgzR2JEXENTgjQ7u9nkF3e
        subject_person_id: p_5AAghVGFQgSiJ1wrgd9PyC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋修
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CAbxKgR9jukfwkTPG6biF6
          claim_id: c_MgzR2JEXENTgjQ7u9nkF3e
          source_id: s_Nt3WsUCXwZzn1BP76WnzEo
          stance: supports
          locator: CBDB:334284
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（334284）
          source: &a1
            id: s_Nt3WsUCXwZzn1BP76WnzEo
            source_type: api_record
            title: 中国历代人物传记资料库：王懋修（CBDB 334284）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334284&o=json
            external_identifier: CBDB:334284
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.444Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Lfk9xCZtK6HN5tDqDL9Zq8
        subject_person_id: p_5AAghVGFQgSiJ1wrgd9PyC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋修，明人物。隆慶二年進士，籍贯文昌。（中国历代人物传记资料库 CBDB 334284）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pyH5Wus98I8wF_VhgB8KPK
          claim_id: c_Lfk9xCZtK6HN5tDqDL9Zq8
          source_id: s_Nt3WsUCXwZzn1BP76WnzEo
          stance: supports
          locator: CBDB:334284
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xc59mUtNZn0rEg4Dm35MhC
        subject_person_id: p_iK7J2v9nYEqAqfNJHxwFuC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5AAghVGFQgSiJ1wrgd9PyC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zd3sVcI6opP8yiYO6kfb_Q
          claim_id: c_xc59mUtNZn0rEg4Dm35MhC
          source_id: s_KnQn5NPWcnMCN-9wys2W8x
          stance: supports
          locator: CBDB：兄弟 王懋德（126854）之父／母 王良弼
          quotation: null
          interpretation_note: 由兄弟关系推断：王懋修 与 王懋德 为同胞（CBDB 记「兄」），王懋德 之父／母即 王懋修 之父／母。
          source:
            id: s_KnQn5NPWcnMCN-9wys2W8x
            source_type: api_record
            title: 中国历代人物传记资料库：王懋修（CBDB 334284）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334284&o=json
            external_identifier: CBDB:334284
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iK7J2v9nYEqAqfNJHxwFuC
        status: active
        display_name: 王良弼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_dhixAaJgh7-lhqKQB9m7c8
        subject_person_id: p_5AAghVGFQgSiJ1wrgd9PyC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_FL6Az72NGqaTwTmAdfMBte
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gN3Zeu5n850bPVJJujbsqm
          claim_id: c_dhixAaJgh7-lhqKQB9m7c8
          source_id: s_KnQn5NPWcnMCN-9wys2W8x
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126854 王懋德）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KnQn5NPWcnMCN-9wys2W8x
            source_type: api_record
            title: 中国历代人物传记资料库：王懋修（CBDB 334284）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334284&o=json
            external_identifier: CBDB:334284
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FL6Az72NGqaTwTmAdfMBte
        status: active
        display_name: 王懋德
        merged_into_person_id: null
---

# 王懋修

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懋修 | accepted |
| bio.summary | 王懋修，明人物。隆慶二年進士，籍贯文昌。（中国历代人物传记资料库 CBDB 334284） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iK7J2v9nYEqAqfNJHxwFuC | 王良弼 | accepted |
| other | p_FL6Az72NGqaTwTmAdfMBte | 王懋德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王懋修（CBDB 334284）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334284&o=json)
