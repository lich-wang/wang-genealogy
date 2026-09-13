---
schema: wang-person/v1
id: p_dsXu6qru9Yov26mx6zbQEA
status: active
merged_into: null
display_name: 王保住
cbdb_id: 519667
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6a5Ck7tp9JGrXWM4RNiADc
        subject_person_id: p_dsXu6qru9Yov26mx6zbQEA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王保住，史料所见人物。本项目依据《中国历代人物传记资料库：王保住（CBDB 519667）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_e1yyDcAbfl0Nn_G3E6hwc_
          claim_id: c_6a5Ck7tp9JGrXWM4RNiADc
          source_id: s_TQcgGexPC1JbvAAg6A9hCb
          stance: supports
          locator: CBDB:519667
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_TQcgGexPC1JbvAAg6A9hCb
            source_type: api_record
            title: 中国历代人物传记资料库：王保住（CBDB 519667）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=519667&o=json
            external_identifier: CBDB:519667
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_mXB2XdB7a3ATFRU9rLvctx
        subject_person_id: p_dsXu6qru9Yov26mx6zbQEA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王保住
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_PVAicxeeRfTK6CuYVMoPF1
          claim_id: c_mXB2XdB7a3ATFRU9rLvctx
          source_id: s_TQcgGexPC1JbvAAg6A9hCb
          stance: supports
          locator: CBDB:519667
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6901-7000）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_u2BpUTSN18JEaUAccFSYq2
        subject_person_id: p_ZnCcadL4aN8Yg7QZJZmmev
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dsXu6qru9Yov26mx6zbQEA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z8NoadTms_Z4s2wze617UE
          claim_id: c_u2BpUTSN18JEaUAccFSYq2
          source_id: s_TQcgGexPC1JbvAAg6A9hCb
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），4260：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_TQcgGexPC1JbvAAg6A9hCb
            source_type: api_record
            title: 中国历代人物传记资料库：王保住（CBDB 519667）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=519667&o=json
            external_identifier: CBDB:519667
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_ZnCcadL4aN8Yg7QZJZmmev
        status: active
        display_name: 王依崇阿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王保住

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王保住，史料所见人物。本项目依据《中国历代人物传记资料库：王保住（CBDB 519667）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王保住 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZnCcadL4aN8Yg7QZJZmmev | 王依崇阿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王保住（CBDB 519667）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=519667&o=json)
