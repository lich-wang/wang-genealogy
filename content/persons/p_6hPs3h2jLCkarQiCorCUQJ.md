---
schema: wang-person/v1
id: p_6hPs3h2jLCkarQiCorCUQJ
status: active
merged_into: null
display_name: 王預
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NcivLQ6SMzYS5rYxRHW8Gu
        subject_person_id: p_6hPs3h2jLCkarQiCorCUQJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王預
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LBuDSBn7q6rNnZgRCCLUrf
          claim_id: c_NcivLQ6SMzYS5rYxRHW8Gu
          source_id: s_xjNejv1YhAt2JgXuUUNkWU
          stance: supports
          locator: CBDB:266765
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（266765）
          source: &a1
            id: s_xjNejv1YhAt2JgXuUUNkWU
            source_type: api_record
            title: 中国历代人物传记资料库：王預（CBDB 266765）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266765&o=json
            external_identifier: CBDB:266765
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.737Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oQG5v8f6F8ZTaAJFkAHSxo
        subject_person_id: p_6hPs3h2jLCkarQiCorCUQJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王預，明人物。弘治九年進士，籍贯永嘉，曾任同知。（中国历代人物传记资料库 CBDB 266765）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RbW7n1lq6sL6Z63g3cnVWG
          claim_id: c_oQG5v8f6F8ZTaAJFkAHSxo
          source_id: s_xjNejv1YhAt2JgXuUUNkWU
          stance: supports
          locator: CBDB:266765
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PX-vLI88kwd67461MdKm6W
        subject_person_id: p_NkjrkfLSubJRquGWk6KTAC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6hPs3h2jLCkarQiCorCUQJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YNuZXq6oOb5nWgj6ZMikhc
          claim_id: c_PX-vLI88kwd67461MdKm6W
          source_id: s_d9cYzj1NOhjrwgPXs7KX68
          stance: supports
          locator: CBDB：兄弟 王瓚（126892）之父／母 王祚
          quotation: null
          interpretation_note: 由兄弟关系推断：王預 与 王瓚 为同胞（CBDB 记「弟」），王瓚 之父／母即 王預 之父／母。
          source:
            id: s_d9cYzj1NOhjrwgPXs7KX68
            source_type: api_record
            title: 中国历代人物传记资料库：王預（CBDB 266765）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266765&o=json
            external_identifier: CBDB:266765
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NkjrkfLSubJRquGWk6KTAC
        status: active
        display_name: 王祚
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_xliPXqSgJnQTup57BqzIVX
        subject_person_id: p_6hPs3h2jLCkarQiCorCUQJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aJMiNXJSvn8avCPNUFL6Jr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GS73p-9sURGyzvRdIxF1R6
          claim_id: c_xliPXqSgJnQTup57BqzIVX
          source_id: s_d9cYzj1NOhjrwgPXs7KX68
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126892 王瓚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_d9cYzj1NOhjrwgPXs7KX68
            source_type: api_record
            title: 中国历代人物传记资料库：王預（CBDB 266765）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266765&o=json
            external_identifier: CBDB:266765
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aJMiNXJSvn8avCPNUFL6Jr
        status: active
        display_name: 王瓚
        merged_into_person_id: null
---

# 王預

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王預 | accepted |
| bio.summary | 王預，明人物。弘治九年進士，籍贯永嘉，曾任同知。（中国历代人物传记资料库 CBDB 266765） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NkjrkfLSubJRquGWk6KTAC | 王祚 | accepted |
| other | p_aJMiNXJSvn8avCPNUFL6Jr | 王瓚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王預（CBDB 266765）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266765&o=json)
