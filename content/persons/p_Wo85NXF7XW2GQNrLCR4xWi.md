---
schema: wang-person/v1
id: p_Wo85NXF7XW2GQNrLCR4xWi
status: active
merged_into: null
display_name: 王敬保
cbdb_id: 288682
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_29L24M9a4Sz967hZJJjXcG
        subject_person_id: p_Wo85NXF7XW2GQNrLCR4xWi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬保，明人物。嘉靖八年進士。（中国历代人物传记资料库 CBDB 288682）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_p7o4eLB8MHpHia5wMN1cnm
          claim_id: c_29L24M9a4Sz967hZJJjXcG
          source_id: s_4j6j7LHxJQqKkhNW3Qkdzb
          stance: supports
          locator: CBDB:288682
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_4j6j7LHxJQqKkhNW3Qkdzb
            source_type: api_record
            title: 中国历代人物传记资料库：王敬保（CBDB 288682）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288682&o=json
            external_identifier: CBDB:288682
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q92iKp3pqrMoCwox6fRDqL
        subject_person_id: p_Wo85NXF7XW2GQNrLCR4xWi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敬保
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CBaL75i54NFiK88Ue6P7hp
          claim_id: c_Q92iKp3pqrMoCwox6fRDqL
          source_id: s_4j6j7LHxJQqKkhNW3Qkdzb
          stance: supports
          locator: CBDB:288682
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
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
        id: c_b8Tuw4v8bct5muD23fYRGU
        subject_person_id: p_Wo85NXF7XW2GQNrLCR4xWi
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hdA2EX5rq1DHua8Wnk5XqK
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__kKH7_vyx-MqDMOCsodPz4
          claim_id: c_b8Tuw4v8bct5muD23fYRGU
          source_id: s_UEWpGjBMG8mpTrFMd5NdKQ
          stance: supports
          locator: 嘉靖八年進士登科錄:一卷，第三甲第三十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_UEWpGjBMG8mpTrFMd5NdKQ
            source_type: api_record
            title: 中国历代人物传记资料库：王鉅（CBDB 202468）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202468&o=json
            external_identifier: CBDB:202468
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.743Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hdA2EX5rq1DHua8Wnk5XqK
        status: active
        display_name: 王鉅
        merged_into_person_id: null
  other: []
---

# 王敬保

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王敬保，明人物。嘉靖八年進士。（中国历代人物传记资料库 CBDB 288682） | accepted |
| name.primary | 王敬保 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_hdA2EX5rq1DHua8Wnk5XqK | 王鉅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敬保（CBDB 288682）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288682&o=json)
- [中国历代人物传记资料库：王鉅（CBDB 202468）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202468&o=json)
