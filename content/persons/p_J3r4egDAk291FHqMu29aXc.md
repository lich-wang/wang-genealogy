---
schema: wang-person/v1
id: p_J3r4egDAk291FHqMu29aXc
status: active
merged_into: null
display_name: 王得名
cbdb_id: 263527
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bAaa6qZat8GwRSPHwvrhj5
        subject_person_id: p_J3r4egDAk291FHqMu29aXc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得名，史料所见人物。本项目依据《中国历代人物传记资料库：王得名（CBDB 263527）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_YLtwezY81lRFrg8D4J2h_-
          claim_id: c_bAaa6qZat8GwRSPHwvrhj5
          source_id: s_pw1fLBYZYjbo4P2BtNgVEg
          stance: supports
          locator: CBDB:263527
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_pw1fLBYZYjbo4P2BtNgVEg
            source_type: api_record
            title: 中国历代人物传记资料库：王得名（CBDB 263527）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263527&o=json
            external_identifier: CBDB:263527
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_sgGufFPuoCkSpEF9Q7nDBz
        subject_person_id: p_J3r4egDAk291FHqMu29aXc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王得名
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_if5esUQHZ6XAMKDxQRv8Ja
          claim_id: c_sgGufFPuoCkSpEF9Q7nDBz
          source_id: s_pw1fLBYZYjbo4P2BtNgVEg
          stance: supports
          locator: CBDB:263527
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
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
        id: c_WS3Mk_f3oxMt8Wk8OFCRgT
        subject_person_id: p_J3r4egDAk291FHqMu29aXc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3aWXbEScEDV2akyzL58TPm
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_02cLvq4hEGy0luxpX16owz
          claim_id: c_WS3Mk_f3oxMt8Wk8OFCRgT
          source_id: s_P9Q1v9Dux4zedhvCVweS3V
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第一百八十名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_P9Q1v9Dux4zedhvCVweS3V
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎（CBDB 67757）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67757&o=json
            external_identifier: CBDB:67757
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.010Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3aWXbEScEDV2akyzL58TPm
        status: active
        display_name: 王鼎
        merged_into_person_id: null
  other: []
---

# 王得名

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王得名，史料所见人物。本项目依据《中国历代人物传记资料库：王得名（CBDB 263527）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王得名 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_3aWXbEScEDV2akyzL58TPm | 王鼎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王得名（CBDB 263527）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263527&o=json)
- [中国历代人物传记资料库：王鼎（CBDB 67757）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67757&o=json)
