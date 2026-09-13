---
schema: wang-person/v1
id: p_D3EQoi8fQsH2iVoHKAD5QL
status: active
merged_into: null
display_name: 王滿五
cbdb_id: 277193
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ntG5C6jpW2J8PyuNpMvHkk
        subject_person_id: p_D3EQoi8fQsH2iVoHKAD5QL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王滿五，明人物。正德六年進士。（中国历代人物传记资料库 CBDB 277193）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_glfL6iICGI3bWGOjuQ0-sW
          claim_id: c_ntG5C6jpW2J8PyuNpMvHkk
          source_id: s_PDsqbJj3Q1ABR74EWmgy14
          stance: supports
          locator: CBDB:277193
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_PDsqbJj3Q1ABR74EWmgy14
            source_type: api_record
            title: 中国历代人物传记资料库：王滿五（CBDB 277193）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277193&o=json
            external_identifier: CBDB:277193
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_6LNU1h5qKtoDBVmMNcHWwT
        subject_person_id: p_D3EQoi8fQsH2iVoHKAD5QL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王滿五
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_T8MS6fMdcCYZ7GMxjRHxwL
          claim_id: c_6LNU1h5qKtoDBVmMNcHWwT
          source_id: s_PDsqbJj3Q1ABR74EWmgy14
          stance: supports
          locator: CBDB:277193
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
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
        id: c_aZCBYGg1KOcmuzOiUhAKU_
        subject_person_id: p_D3EQoi8fQsH2iVoHKAD5QL
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dC2kXoLn9HGUMNL9QippS6
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fAUGanA9tdIUzTFPBPYykB
          claim_id: c_aZCBYGg1KOcmuzOiUhAKU_
          source_id: s_PJTTnFj5euNLKj7gS9owGb
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第二十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PJTTnFj5euNLKj7gS9owGb
            source_type: api_record
            title: 中国历代人物传记资料库：王瑋（CBDB 201725）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201725&o=json
            external_identifier: CBDB:201725
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.691Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dC2kXoLn9HGUMNL9QippS6
        status: active
        display_name: 王瑋
        merged_into_person_id: null
  other: []
---

# 王滿五

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王滿五，明人物。正德六年進士。（中国历代人物传记资料库 CBDB 277193） | accepted |
| name.primary | 王滿五 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_dC2kXoLn9HGUMNL9QippS6 | 王瑋 | accepted |

## 外部来源

- [中国历代人物传记资料库：王滿五（CBDB 277193）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277193&o=json)
- [中国历代人物传记资料库：王瑋（CBDB 201725）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201725&o=json)
