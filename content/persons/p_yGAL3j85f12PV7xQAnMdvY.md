---
schema: wang-person/v1
id: p_yGAL3j85f12PV7xQAnMdvY
status: active
merged_into: null
display_name: 王墀贇
cbdb_id: 227358
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Hz9hGYGYZBuCgWaMFvaDgX
        subject_person_id: p_yGAL3j85f12PV7xQAnMdvY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王墀贇，史料所见人物。本项目依据《中国历代人物传记资料库：王墀贇（CBDB 227358）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_N5MTCpWEcJrRtIkEonF1kp
          claim_id: c_Hz9hGYGYZBuCgWaMFvaDgX
          source_id: s_BhBqveXBhQbWkt7ixYHQUC
          stance: supports
          locator: CBDB:227358
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_BhBqveXBhQbWkt7ixYHQUC
            source_type: api_record
            title: 中国历代人物传记资料库：王墀贇（CBDB 227358）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227358&o=json
            external_identifier: CBDB:227358
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Bmib1KL3LGUZwiPeVGNEsJ
        subject_person_id: p_yGAL3j85f12PV7xQAnMdvY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王墀贇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_nadyxtub2UpRhD4tKxdrR9
          claim_id: c_Bmib1KL3LGUZwiPeVGNEsJ
          source_id: s_BhBqveXBhQbWkt7ixYHQUC
          stance: supports
          locator: CBDB:227358
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0I6man7GnD2qw2INpIcD45
        subject_person_id: p_uu4yjus8EVVwp6m8E5Qav5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yGAL3j85f12PV7xQAnMdvY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gpFyr3gab_VXax1L6Hq9GF
          claim_id: c_0I6man7GnD2qw2INpIcD45
          source_id: s_BhBqveXBhQbWkt7ixYHQUC
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百六十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BhBqveXBhQbWkt7ixYHQUC
            source_type: api_record
            title: 中国历代人物传记资料库：王墀贇（CBDB 227358）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227358&o=json
            external_identifier: CBDB:227358
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_uu4yjus8EVVwp6m8E5Qav5
        status: active
        display_name: 王建中
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王墀贇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王墀贇，史料所见人物。本项目依据《中国历代人物传记资料库：王墀贇（CBDB 227358）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王墀贇 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uu4yjus8EVVwp6m8E5Qav5 | 王建中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王墀贇（CBDB 227358）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227358&o=json)
