---
schema: wang-person/v1
id: p_nT1UNCZyvDbXe3ZzPGhbdz
status: active
merged_into: null
display_name: 王宏
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LMvrkgivEbvz1Vt6KzQeEf
        subject_person_id: p_nT1UNCZyvDbXe3ZzPGhbdz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_d9mNJcSjiNrX9uMGLW6c9n
          claim_id: c_LMvrkgivEbvz1Vt6KzQeEf
          source_id: s_z5H7mnAfz3wRDELLh5djkn
          stance: supports
          locator: CBDB:296930
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（296930）
          source: &a1
            id: s_z5H7mnAfz3wRDELLh5djkn
            source_type: api_record
            title: 中国历代人物传记资料库：王宏（CBDB 296930）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296930&o=json
            external_identifier: CBDB:296930
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.529Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tqpjFcN7NrsDYA9oQsTnQj
        subject_person_id: p_nT1UNCZyvDbXe3ZzPGhbdz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏，明人物。嘉靖十四年進士，曾任壽官。（中国历代人物传记资料库 CBDB 296930）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iFeksl_PJO2ckjHqgOqWde
          claim_id: c_tqpjFcN7NrsDYA9oQsTnQj
          source_id: s_z5H7mnAfz3wRDELLh5djkn
          stance: supports
          locator: CBDB:296930
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
        id: c_Zx7iHnU8nGyTc5SJVPucMe
        subject_person_id: p_nT1UNCZyvDbXe3ZzPGhbdz
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ve3PDbNGqaNQgddGuw2C43
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rvELy-tOO73QX1MYcovX_Z
          claim_id: c_Zx7iHnU8nGyTc5SJVPucMe
          source_id: s_z5H7mnAfz3wRDELLh5djkn
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第八十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ve3PDbNGqaNQgddGuw2C43
        status: active
        display_name: 王燁
        merged_into_person_id: null
  other: []
---

# 王宏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宏 | accepted |
| bio.summary | 王宏，明人物。嘉靖十四年進士，曾任壽官。（中国历代人物传记资料库 CBDB 296930） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_ve3PDbNGqaNQgddGuw2C43 | 王燁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宏（CBDB 296930）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296930&o=json)
