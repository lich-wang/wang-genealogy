---
schema: wang-person/v1
id: p_ayW5qG1vMKBQxPjRXZf4bJ
status: active
merged_into: null
display_name: 王與汝
cbdb_id: 294547
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SByLdtA17mawXY7MgwHjK7
        subject_person_id: p_ayW5qG1vMKBQxPjRXZf4bJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王與汝，明人物。嘉靖十一年進士，籍贯東莞。（中国历代人物传记资料库 CBDB 294547）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_KDvI8hhrM9LdwJo39Vgy-g
          claim_id: c_SByLdtA17mawXY7MgwHjK7
          source_id: s_hApHhKfNdJn59cXhHZYLXT
          stance: supports
          locator: CBDB:294547
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_hApHhKfNdJn59cXhHZYLXT
            source_type: api_record
            title: 中国历代人物传记资料库：王與汝（CBDB 294547）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294547&o=json
            external_identifier: CBDB:294547
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_pt8tKeceRii9bTeLUo6FZc
        subject_person_id: p_ayW5qG1vMKBQxPjRXZf4bJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王與汝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2gARnMS7f9CjFUJL9Jb4p5
          claim_id: c_pt8tKeceRii9bTeLUo6FZc
          source_id: s_hApHhKfNdJn59cXhHZYLXT
          stance: supports
          locator: CBDB:294547
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-Yc6ypsmWA6CTeq2F80hy9
        subject_person_id: p_DkL4KAP3Vyt4DGq87NkgHu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ayW5qG1vMKBQxPjRXZf4bJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uz0ZjrJMI9AgGiG-MgG-5F
          claim_id: c_-Yc6ypsmWA6CTeq2F80hy9
          source_id: s_Yn3DSW3gkDun6k59Tc8Dzj
          stance: supports
          locator: CBDB：兄弟 王玉汝（202795）之父／母 王尚學
          quotation: null
          interpretation_note: 由兄弟关系推断：王與汝 与 王玉汝 为同胞（CBDB 记「兄」），王玉汝 之父／母即 王與汝 之父／母。
          source:
            id: s_Yn3DSW3gkDun6k59Tc8Dzj
            source_type: api_record
            title: 中国历代人物传记资料库：王與汝（CBDB 294547）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294547&o=json
            external_identifier: CBDB:294547
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DkL4KAP3Vyt4DGq87NkgHu
        status: active
        display_name: 王尚學
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Mn7t76nsDQwZRWEaD77cTK
        subject_person_id: p_aJQ3escM6jBxZ8EP2idom6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ayW5qG1vMKBQxPjRXZf4bJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R9tyhEZGUXcWdBGIHJkobl
          claim_id: c_Mn7t76nsDQwZRWEaD77cTK
          source_id: s_Yn3DSW3gkDun6k59Tc8Dzj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202795 王玉汝）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Yn3DSW3gkDun6k59Tc8Dzj
            source_type: api_record
            title: 中国历代人物传记资料库：王與汝（CBDB 294547）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294547&o=json
            external_identifier: CBDB:294547
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aJQ3escM6jBxZ8EP2idom6
        status: active
        display_name: 王玉汝
        merged_into_person_id: null
---

# 王與汝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王與汝，明人物。嘉靖十一年進士，籍贯東莞。（中国历代人物传记资料库 CBDB 294547） | accepted |
| name.primary | 王與汝 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DkL4KAP3Vyt4DGq87NkgHu | 王尚學 | accepted |
| other | p_aJQ3escM6jBxZ8EP2idom6 | 王玉汝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王與汝（CBDB 294547）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294547&o=json)
