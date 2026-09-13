---
schema: wang-person/v1
id: p_uDYRKyMyfPzTyBM5v6wNw4
status: active
merged_into: null
display_name: 王齊由
cbdb_id: 151198
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hf59EfV1pk82F8qSSH4b1R
        subject_person_id: p_uDYRKyMyfPzTyBM5v6wNw4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王齊由，史料所见人物。本项目依据《中国历代人物传记资料库：王齊由（CBDB 151198）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_RoiXNhkn8VBx7HKMe080kg
          claim_id: c_hf59EfV1pk82F8qSSH4b1R
          source_id: s_n3m31vPGVfAkWPRrT6VsvH
          stance: supports
          locator: CBDB:151198
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_n3m31vPGVfAkWPRrT6VsvH
            source_type: api_record
            title: 中国历代人物传记资料库：王齊由（CBDB 151198）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151198&o=json
            external_identifier: CBDB:151198
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5TdBrr26PEuALfDSbM5FQc
        subject_person_id: p_uDYRKyMyfPzTyBM5v6wNw4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王齊由
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_59q4ssRE5hbLSFDcFznhXH
          claim_id: c_5TdBrr26PEuALfDSbM5FQc
          source_id: s_n3m31vPGVfAkWPRrT6VsvH
          stance: supports
          locator: CBDB:151198
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2101-2200）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
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
        id: c_up58a7T87P4kwMTOUlqQVI
        subject_person_id: p_9R2PnjU4TFsdVKYkKG9ey1
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_uDYRKyMyfPzTyBM5v6wNw4
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WX17QMlBClDBuWS8lFC8mR
          claim_id: c_up58a7T87P4kwMTOUlqQVI
          source_id: s_4GMYnMdeW3aw1wHLc1HKGC
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 33：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4GMYnMdeW3aw1wHLc1HKGC
            source_type: api_record
            title: 中国历代人物传记资料库：王師（CBDB 140308）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140308&o=json
            external_identifier: CBDB:140308
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.492Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9R2PnjU4TFsdVKYkKG9ey1
        status: active
        display_name: 王師
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王齊由

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王齊由，史料所见人物。本项目依据《中国历代人物传记资料库：王齊由（CBDB 151198）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王齊由 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_9R2PnjU4TFsdVKYkKG9ey1 | 王師 | accepted |

## 外部来源

- [中国历代人物传记资料库：王齊由（CBDB 151198）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151198&o=json)
- [中国历代人物传记资料库：王師（CBDB 140308）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140308&o=json)
