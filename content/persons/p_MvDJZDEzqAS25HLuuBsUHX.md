---
schema: wang-person/v1
id: p_MvDJZDEzqAS25HLuuBsUHX
status: active
merged_into: null
display_name: 王汝樞
cbdb_id: 327814
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_owPCJh9eP5C2jFrsrGoJxJ
        subject_person_id: p_MvDJZDEzqAS25HLuuBsUHX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝樞，明人物。嘉靖四十一年進士，籍贯安肅。（中国历代人物传记资料库 CBDB 327814）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_IwWQVEzRcYeANsvC6oWVyL
          claim_id: c_owPCJh9eP5C2jFrsrGoJxJ
          source_id: s_u9gz6wuf8yiYCKW6VB6KCW
          stance: supports
          locator: CBDB:327814
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_u9gz6wuf8yiYCKW6VB6KCW
            source_type: api_record
            title: 中国历代人物传记资料库：王汝樞（CBDB 327814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327814&o=json
            external_identifier: CBDB:327814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_pn8yre5pGdRA5gcLwefpQL
        subject_person_id: p_MvDJZDEzqAS25HLuuBsUHX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝樞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_pS8AjMCkW6iwrqKcpDxK5e
          claim_id: c_pn8yre5pGdRA5gcLwefpQL
          source_id: s_u9gz6wuf8yiYCKW6VB6KCW
          stance: supports
          locator: CBDB:327814
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4JQFwpsiczjtcPtFvSdGE-
        subject_person_id: p_UKG4Ew4EBc4jxmGX5ju4GS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MvDJZDEzqAS25HLuuBsUHX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oY-DYxq4XGzdhzH730iDQ7
          claim_id: c_4JQFwpsiczjtcPtFvSdGE-
          source_id: s_-6da2U72qen45CSjSgfwtf
          stance: supports
          locator: CBDB：兄弟 王汝梅（205063）之父／母 王廷珪
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝樞 与 王汝梅 为同胞（CBDB 记「兄」），王汝梅 之父／母即 王汝樞 之父／母。
          source:
            id: s_-6da2U72qen45CSjSgfwtf
            source_type: api_record
            title: 中国历代人物传记资料库：王汝樞（CBDB 327814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327814&o=json
            external_identifier: CBDB:327814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UKG4Ew4EBc4jxmGX5ju4GS
        status: active
        display_name: 王廷珪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_EWzuNI4vdWAXbVUU9JYYk8
        subject_person_id: p_MvDJZDEzqAS25HLuuBsUHX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zhBu44YVnXVCpZPdAJQVQK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ogkj8FpuB1vdEFtlDmLatB
          claim_id: c_EWzuNI4vdWAXbVUU9JYYk8
          source_id: s_-6da2U72qen45CSjSgfwtf
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205063 王汝梅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-6da2U72qen45CSjSgfwtf
            source_type: api_record
            title: 中国历代人物传记资料库：王汝樞（CBDB 327814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327814&o=json
            external_identifier: CBDB:327814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zhBu44YVnXVCpZPdAJQVQK
        status: active
        display_name: 王汝梅
        merged_into_person_id: null
---

# 王汝樞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王汝樞，明人物。嘉靖四十一年進士，籍贯安肅。（中国历代人物传记资料库 CBDB 327814） | accepted |
| name.primary | 王汝樞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_UKG4Ew4EBc4jxmGX5ju4GS | 王廷珪 | accepted |
| other | p_zhBu44YVnXVCpZPdAJQVQK | 王汝梅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝樞（CBDB 327814）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327814&o=json)
