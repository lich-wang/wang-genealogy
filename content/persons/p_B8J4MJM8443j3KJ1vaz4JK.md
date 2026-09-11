---
schema: wang-person/v1
id: p_B8J4MJM8443j3KJ1vaz4JK
status: active
merged_into: null
display_name: 王紀
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5PhAb6WaHBKYHUoaXDowyg
        subject_person_id: p_B8J4MJM8443j3KJ1vaz4JK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ikx7nF8NjsnkfCxmYt3rDk
          claim_id: c_5PhAb6WaHBKYHUoaXDowyg
          source_id: s_NnHXrMm5CZGGA2r3jQ3ujq
          stance: supports
          locator: CBDB:327980
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327980）
          source: &a1
            id: s_NnHXrMm5CZGGA2r3jQ3ujq
            source_type: api_record
            title: 中国历代人物传记资料库：王紀（CBDB 327980）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327980&o=json
            external_identifier: CBDB:327980
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.280Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HR3e5Y1KEyZmmJWyzkmFfh
        subject_person_id: p_B8J4MJM8443j3KJ1vaz4JK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紀，明人物。嘉靖四十一年進士。（中国历代人物传记资料库 CBDB 327980）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2vHx1o107lUYZf84tazv4R
          claim_id: c_HR3e5Y1KEyZmmJWyzkmFfh
          source_id: s_NnHXrMm5CZGGA2r3jQ3ujq
          stance: supports
          locator: CBDB:327980
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_qkLAV-_OoraOyIEy6LUbpg
        subject_person_id: p_B8J4MJM8443j3KJ1vaz4JK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_26qvS1eCyosKLR6T6UCexR
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vkjqqbPm4LBX6EwJLLtLhw
          claim_id: c_qkLAV-_OoraOyIEy6LUbpg
          source_id: s_NnHXrMm5CZGGA2r3jQ3ujq
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第七十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_26qvS1eCyosKLR6T6UCexR
        status: active
        display_name: 王時舉
        merged_into_person_id: null
  other: []
---

# 王紀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紀 | accepted |
| bio.summary | 王紀，明人物。嘉靖四十一年進士。（中国历代人物传记资料库 CBDB 327980） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_26qvS1eCyosKLR6T6UCexR | 王時舉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紀（CBDB 327980）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327980&o=json)
