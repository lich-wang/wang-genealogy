---
schema: wang-person/v1
id: p_No5AFFGJfsoRBBiGDGe6iD
status: active
merged_into: null
display_name: 王纘曾
cbdb_id: 513579
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NjukD9qgbX1yeALi3oXeJ9
        subject_person_id: p_No5AFFGJfsoRBBiGDGe6iD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王纘曾，清人物。中国历代人物传记资料库（CBDB）以人物编号 513579 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_Z2LLbPtl3ERCOZva9KSxPP
          claim_id: c_NjukD9qgbX1yeALi3oXeJ9
          source_id: s_wMLrjZJhUQF7Qfzsh6QLwn
          stance: supports
          locator: CBDB:513579
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_wMLrjZJhUQF7Qfzsh6QLwn
            source_type: api_record
            title: 中国历代人物传记资料库：王纘曾（CBDB 513579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513579&o=json
            external_identifier: CBDB:513579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:15.776Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1Hu3dyMSEt3VFyq8k3L2Rv
        subject_person_id: p_No5AFFGJfsoRBBiGDGe6iD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王纘曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MDZynkeMgkt8GNvbVxBL8F
          claim_id: c_1Hu3dyMSEt3VFyq8k3L2Rv
          source_id: s_wMLrjZJhUQF7Qfzsh6QLwn
          stance: supports
          locator: CBDB:513579
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6801-6900）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_wMLrjZJhUQF7Qfzsh6QLwn
            source_type: api_record
            title: 中国历代人物传记资料库：王纘曾（CBDB 513579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513579&o=json
            external_identifier: CBDB:513579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:15.776Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_WZF8oy55XznlHBc_Hoo5yl
        subject_person_id: p_tebqY22pd9wZzkQFGZaaDe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_No5AFFGJfsoRBBiGDGe6iD
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6_3v75r4538NcB4E8UzG-F
          claim_id: c_WZF8oy55XznlHBc_Hoo5yl
          source_id: s_wMLrjZJhUQF7Qfzsh6QLwn
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），71：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tebqY22pd9wZzkQFGZaaDe
        status: active
        display_name: 王熙
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王纘曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王纘曾，清人物。中国历代人物传记资料库（CBDB）以人物编号 513579 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王纘曾 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_tebqY22pd9wZzkQFGZaaDe | 王熙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王纘曾（CBDB 513579）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513579&o=json)
