---
schema: wang-person/v1
id: p_wzA4zPM3ZWj9bkTiPdre5c
status: active
merged_into: null
display_name: 王福興
cbdb_id: 273727
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LGhZc1gQY58vQ1oDPkiJEB
        subject_person_id: p_wzA4zPM3ZWj9bkTiPdre5c
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福興，明人物。弘治十八年進士。（中国历代人物传记资料库 CBDB 273727）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_kPv1PHWxLXmWyTbe-6P81C
          claim_id: c_LGhZc1gQY58vQ1oDPkiJEB
          source_id: s_H5jMymBzMCLXj47T9PjpGA
          stance: supports
          locator: CBDB:273727
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_H5jMymBzMCLXj47T9PjpGA
            source_type: api_record
            title: 中国历代人物传记资料库：王福興（CBDB 273727）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273727&o=json
            external_identifier: CBDB:273727
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_YJA5uB8rwX59sEZiphyNGb
        subject_person_id: p_wzA4zPM3ZWj9bkTiPdre5c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福興
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7KMS4bN4NcM8tnbY27QAiG
          claim_id: c_YJA5uB8rwX59sEZiphyNGb
          source_id: s_H5jMymBzMCLXj47T9PjpGA
          stance: supports
          locator: CBDB:273727
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
        id: c_TRQyYVeNGjuAQcuc1J2MTi
        subject_person_id: p_wzA4zPM3ZWj9bkTiPdre5c
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DqGaEwDgvnqbuon9q4h7Cc
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0SbNwPBJEOXrnSZD9veZ6v
          claim_id: c_TRQyYVeNGjuAQcuc1J2MTi
          source_id: s_H5jMymBzMCLXj47T9PjpGA
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_H5jMymBzMCLXj47T9PjpGA
            source_type: api_record
            title: 中国历代人物传记资料库：王福興（CBDB 273727）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273727&o=json
            external_identifier: CBDB:273727
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_DqGaEwDgvnqbuon9q4h7Cc
        status: active
        display_name: 王儼
        merged_into_person_id: null
  other: []
---

# 王福興

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王福興，明人物。弘治十八年進士。（中国历代人物传记资料库 CBDB 273727） | accepted |
| name.primary | 王福興 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_DqGaEwDgvnqbuon9q4h7Cc | 王儼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王福興（CBDB 273727）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273727&o=json)
