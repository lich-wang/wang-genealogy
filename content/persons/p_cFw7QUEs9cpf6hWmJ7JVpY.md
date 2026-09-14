---
schema: wang-person/v1
id: p_cFw7QUEs9cpf6hWmJ7JVpY
status: active
merged_into: null
display_name: 王賓
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FMyUKrcdU2EHQ3jETVBZmN
        subject_person_id: p_cFw7QUEs9cpf6hWmJ7JVpY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ejL5bjoyEoMAh875fWtmLW
          claim_id: c_FMyUKrcdU2EHQ3jETVBZmN
          source_id: s_FNyYMbECP96LnZWkBtj8H3
          stance: supports
          locator: CBDB:255126
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（255126）
          source: &a1
            id: s_FNyYMbECP96LnZWkBtj8H3
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 255126）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255126&o=json
            external_identifier: CBDB:255126
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.332Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PvHPVYhrGKUezwsn8qYupP
        subject_person_id: p_cFw7QUEs9cpf6hWmJ7JVpY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王賓，明人物。成化十七年進士，籍贯淳安，曾任知府。（中国历代人物传记资料库 CBDB 255126）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EZLcPcfX742nKhdwQ4ffHc
          claim_id: c_PvHPVYhrGKUezwsn8qYupP
          source_id: s_FNyYMbECP96LnZWkBtj8H3
          stance: supports
          locator: CBDB:255126
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_khuW-xtItRVSim6f9sGWJ1
        subject_person_id: p_Y1LJt1fbRrve98s4v1UUF2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cFw7QUEs9cpf6hWmJ7JVpY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uqkccfMxtMuHGgh_nhXvR9
          claim_id: c_khuW-xtItRVSim6f9sGWJ1
          source_id: s_t5JVvMlfMGzkRJj5akZz6I
          stance: supports
          locator: CBDB：兄弟 王宥（200225）之父／母 王志積
          quotation: null
          interpretation_note: 由兄弟关系推断：王賓 与 王宥 为同胞（CBDB 记「弟」），王宥 之父／母即 王賓 之父／母。
          source:
            id: s_t5JVvMlfMGzkRJj5akZz6I
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 255126）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255126&o=json
            external_identifier: CBDB:255126
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Y1LJt1fbRrve98s4v1UUF2
        status: active
        display_name: 王志積
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_JuV73w_wNm6dkGNijoU36u
        subject_person_id: p_15Nh8Xnsw6Q2WxxXdtixbY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cFw7QUEs9cpf6hWmJ7JVpY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BVIt71OGXm37GbAIVq5MSV
          claim_id: c_JuV73w_wNm6dkGNijoU36u
          source_id: s_t5JVvMlfMGzkRJj5akZz6I
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200225 王宥）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_t5JVvMlfMGzkRJj5akZz6I
            source_type: api_record
            title: 中国历代人物传记资料库：王賓（CBDB 255126）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255126&o=json
            external_identifier: CBDB:255126
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_15Nh8Xnsw6Q2WxxXdtixbY
        status: active
        display_name: 王宥
        merged_into_person_id: null
---

# 王賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王賓 | accepted |
| bio.summary | 王賓，明人物。成化十七年進士，籍贯淳安，曾任知府。（中国历代人物传记资料库 CBDB 255126） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Y1LJt1fbRrve98s4v1UUF2 | 王志積 | accepted |
| other | p_15Nh8Xnsw6Q2WxxXdtixbY | 王宥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王賓（CBDB 255126）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255126&o=json)
