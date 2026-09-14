---
schema: wang-person/v1
id: p_zgMxPAPh9nRRPkisXUCpxq
status: active
merged_into: null
display_name: 王雲鷖
cbdb_id: 210684
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9crDr2aJu1sHkpgGNQj8Rj
        subject_person_id: p_zgMxPAPh9nRRPkisXUCpxq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲鷖，明人物。隆慶五年進士，籍贯夏邑。（中国历代人物传记资料库 CBDB 210684）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_1VpLPkkg4sFNfTzYTFvJoL
          claim_id: c_9crDr2aJu1sHkpgGNQj8Rj
          source_id: s_B4zXFcdGLay7Hk9MLU8FUE
          stance: supports
          locator: CBDB:210684
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_B4zXFcdGLay7Hk9MLU8FUE
            source_type: api_record
            title: 中国历代人物传记资料库：王雲鷖（CBDB 210684）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210684&o=json
            external_identifier: CBDB:210684
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Lw1KqGTRGS3DzMxkbvxbMV
        subject_person_id: p_zgMxPAPh9nRRPkisXUCpxq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲鷖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_QJM12oGJK9twiZKqB6gBEq
          claim_id: c_Lw1KqGTRGS3DzMxkbvxbMV
          source_id: s_B4zXFcdGLay7Hk9MLU8FUE
          stance: supports
          locator: CBDB:210684
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Ewvwg5b3JT3HjAlqqV2tXa
        subject_person_id: p_uHx4oxAT9ppsKf6aRXRGJM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zgMxPAPh9nRRPkisXUCpxq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AzVO9YDbW9ByvCT-ZfhjOn
          claim_id: c_Ewvwg5b3JT3HjAlqqV2tXa
          source_id: s_bpNzZMATMviwRAOIP7c7FI
          stance: supports
          locator: CBDB：兄弟 王雲鷺（205920）之父／母 王尚貞
          quotation: null
          interpretation_note: 由兄弟关系推断：王雲鷖 与 王雲鷺 为同胞（CBDB 记「弟」），王雲鷺 之父／母即 王雲鷖 之父／母。
          source:
            id: s_bpNzZMATMviwRAOIP7c7FI
            source_type: api_record
            title: 中国历代人物传记资料库：王雲鷖（CBDB 210684）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210684&o=json
            external_identifier: CBDB:210684
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uHx4oxAT9ppsKf6aRXRGJM
        status: active
        display_name: 王尚貞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Cayrj6OJluH_YNlIJeLy5T
        subject_person_id: p_JTc1E7LgQAh6Uz9airZSVG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zgMxPAPh9nRRPkisXUCpxq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R1Ch8a7hGoA_Bp-oVbqE_c
          claim_id: c_Cayrj6OJluH_YNlIJeLy5T
          source_id: s_bpNzZMATMviwRAOIP7c7FI
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205920 王雲鷺）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bpNzZMATMviwRAOIP7c7FI
            source_type: api_record
            title: 中国历代人物传记资料库：王雲鷖（CBDB 210684）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210684&o=json
            external_identifier: CBDB:210684
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JTc1E7LgQAh6Uz9airZSVG
        status: active
        display_name: 王雲鷺
        merged_into_person_id: null
---

# 王雲鷖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王雲鷖，明人物。隆慶五年進士，籍贯夏邑。（中国历代人物传记资料库 CBDB 210684） | accepted |
| name.primary | 王雲鷖 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uHx4oxAT9ppsKf6aRXRGJM | 王尚貞 | accepted |
| other | p_JTc1E7LgQAh6Uz9airZSVG | 王雲鷺 | accepted |

## 外部来源

- [中国历代人物传记资料库：王雲鷖（CBDB 210684）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210684&o=json)
