---
schema: wang-person/v1
id: p_qSBAn4LkCdEVnmE9AJKKUb
status: active
merged_into: null
display_name: 王排須
cbdb_id: 152722
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6uC8758VwnHHNdLPGfcuKV
        subject_person_id: p_qSBAn4LkCdEVnmE9AJKKUb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王排須，史料所见人物。本项目依据《中国历代人物传记资料库：王排須（CBDB 152722）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_7yLXyT8vj9jvA0ETWL3BsO
          claim_id: c_6uC8758VwnHHNdLPGfcuKV
          source_id: s_JVT14nFSwGBcW9nywGNVhy
          stance: supports
          locator: CBDB:152722
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_JVT14nFSwGBcW9nywGNVhy
            source_type: api_record
            title: 中国历代人物传记资料库：王排須（CBDB 152722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152722&o=json
            external_identifier: CBDB:152722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_MbTi7VnMoYCfYtAWbXLTMu
        subject_person_id: p_qSBAn4LkCdEVnmE9AJKKUb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王排須
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_x8HRp5qTHDkEzj2GXBfTS6
          claim_id: c_MbTi7VnMoYCfYtAWbXLTMu
          source_id: s_JVT14nFSwGBcW9nywGNVhy
          stance: supports
          locator: CBDB:152722
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2101-2200）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_qSEUCp_sYoelsOoWcvsnGT
        subject_person_id: p_qSBAn4LkCdEVnmE9AJKKUb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dExgzHMR9pXsascQGAS3S8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iJKB4R3dQWah6-yKDXKfnK
          claim_id: c_qSEUCp_sYoelsOoWcvsnGT
          source_id: s_NsQTQt3aey9qWokCD7Yqqc
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 413：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NsQTQt3aey9qWokCD7Yqqc
            source_type: api_record
            title: 中国历代人物传记资料库：王景曜（CBDB 140586）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140586&o=json
            external_identifier: CBDB:140586
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.519Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dExgzHMR9pXsascQGAS3S8
        status: active
        display_name: 王景曜
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王排須

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王排須，史料所见人物。本项目依据《中国历代人物传记资料库：王排須（CBDB 152722）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王排須 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_dExgzHMR9pXsascQGAS3S8 | 王景曜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景曜（CBDB 140586）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140586&o=json)
- [中国历代人物传记资料库：王排須（CBDB 152722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152722&o=json)
