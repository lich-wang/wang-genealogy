---
schema: wang-person/v1
id: p_FcbG3jDLN4BY1mSZPFAFA3
status: active
merged_into: null
display_name: 王僧劭
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wwqeFzF9vZ2VDGZE8c8C91
        subject_person_id: p_FcbG3jDLN4BY1mSZPFAFA3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僧劭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7e7sFkZhAtkcUYvezcUzRB
          claim_id: c_wwqeFzF9vZ2VDGZE8c8C91
          source_id: s_g9hD3MVVaHmW3N4y5Tepuu
          stance: supports
          locator: CBDB:683586
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（683586）
          source: &a1
            id: s_g9hD3MVVaHmW3N4y5Tepuu
            source_type: api_record
            title: 中国历代人物传记资料库：王僧劭（CBDB 683586）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683586&o=json
            external_identifier: CBDB:683586
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.459Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vgD4q3BGR6QCZS3EQJRu7U
        subject_person_id: p_FcbG3jDLN4BY1mSZPFAFA3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王僧劭，史料所见人物。本项目依据《中国历代人物传记资料库：王僧劭（CBDB 683586）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_os5BQcVcQfij5HSI2dpMKq
          claim_id: c_vgD4q3BGR6QCZS3EQJRu7U
          source_id: s_g9hD3MVVaHmW3N4y5Tepuu
          stance: supports
          locator: CBDB:683586
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_LIYVdc87t3gEfZrOccwG7J
        subject_person_id: p_61gqb4S8dGq6zPHhmQTQtX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FcbG3jDLN4BY1mSZPFAFA3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SM4ERdh_2YZTnQOCxxJiFo
          claim_id: c_LIYVdc87t3gEfZrOccwG7J
          source_id: s_DUKeF7wRFiELwn65VSgJtw
          stance: supports
          locator: 袁宏道集箋校，584：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DUKeF7wRFiELwn65VSgJtw
            source_type: api_record
            title: 中国历代人物传记资料库：王野（CBDB 576949）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576949&o=json
            external_identifier: CBDB:576949
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.963Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_61gqb4S8dGq6zPHhmQTQtX
        status: active
        display_name: 王野
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王僧劭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王僧劭 | accepted |
| bio.summary | 王僧劭，史料所见人物。本项目依据《中国历代人物传记资料库：王僧劭（CBDB 683586）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_61gqb4S8dGq6zPHhmQTQtX | 王野 | accepted |

## 外部来源

- [中国历代人物传记资料库：王僧劭（CBDB 683586）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=683586&o=json)
- [中国历代人物传记资料库：王野（CBDB 576949）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576949&o=json)
