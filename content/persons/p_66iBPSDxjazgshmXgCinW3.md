---
schema: wang-person/v1
id: p_66iBPSDxjazgshmXgCinW3
status: active
merged_into: null
display_name: 王楊
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TqCmPqzQrdHgNHU9YQQ2LX
        subject_person_id: p_66iBPSDxjazgshmXgCinW3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3s1iKdU8Pf2gBXj8f43y8o
          claim_id: c_TqCmPqzQrdHgNHU9YQQ2LX
          source_id: s_BDJUVtAhxdu3Gkx6ebbNdi
          stance: supports
          locator: CBDB:294448
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294448）
          source: &a1
            id: s_BDJUVtAhxdu3Gkx6ebbNdi
            source_type: api_record
            title: 中国历代人物传记资料库：王楊（CBDB 294448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294448&o=json
            external_identifier: CBDB:294448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.463Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_a52ZDKNNAKv7pHVaeLKMMh
        subject_person_id: p_66iBPSDxjazgshmXgCinW3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楊，明人物。嘉靖十一年進士，籍贯象山。（中国历代人物传记资料库 CBDB 294448）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_t2dTZCS0sNMVfjnLRdk3_g
          claim_id: c_a52ZDKNNAKv7pHVaeLKMMh
          source_id: s_BDJUVtAhxdu3Gkx6ebbNdi
          stance: supports
          locator: CBDB:294448
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VeNBj6F2agENYEJd4c0T2V
        subject_person_id: p_ymQLsviGVnJad7qLTZDHb4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_66iBPSDxjazgshmXgCinW3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yRcGf417WUQ516biD0foo1
          claim_id: c_VeNBj6F2agENYEJd4c0T2V
          source_id: s_VdifsS33Qpk4BeXbMfUovO
          stance: supports
          locator: CBDB：兄弟 王梴（202789）之父／母 王渙
          quotation: null
          interpretation_note: 由兄弟关系推断：王楊 与 王梴 为同胞（CBDB 记「兄」），王梴 之父／母即 王楊 之父／母。
          source:
            id: s_VdifsS33Qpk4BeXbMfUovO
            source_type: api_record
            title: 中国历代人物传记资料库：王楊（CBDB 294448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294448&o=json
            external_identifier: CBDB:294448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ymQLsviGVnJad7qLTZDHb4
        status: active
        display_name: 王渙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_RlOMS-Yf5SK9h_p0Do7YfJ
        subject_person_id: p_66iBPSDxjazgshmXgCinW3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TdovnQSDHPgtdb6L5QzgtZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S4BZxtFclMcAMk9aHa7S0d
          claim_id: c_RlOMS-Yf5SK9h_p0Do7YfJ
          source_id: s_VdifsS33Qpk4BeXbMfUovO
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202789 王梴）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VdifsS33Qpk4BeXbMfUovO
            source_type: api_record
            title: 中国历代人物传记资料库：王楊（CBDB 294448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294448&o=json
            external_identifier: CBDB:294448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TdovnQSDHPgtdb6L5QzgtZ
        status: active
        display_name: 王梴
        merged_into_person_id: null
---

# 王楊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楊 | accepted |
| bio.summary | 王楊，明人物。嘉靖十一年進士，籍贯象山。（中国历代人物传记资料库 CBDB 294448） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ymQLsviGVnJad7qLTZDHb4 | 王渙 | accepted |
| other | p_TdovnQSDHPgtdb6L5QzgtZ | 王梴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王楊（CBDB 294448）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294448&o=json)
