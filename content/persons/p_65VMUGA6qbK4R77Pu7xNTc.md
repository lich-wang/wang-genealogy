---
schema: wang-person/v1
id: p_65VMUGA6qbK4R77Pu7xNTc
status: active
merged_into: null
display_name: 王起牧
cbdb_id: 162481
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q4pbnfdMw8i28K2HF2xB9V
        subject_person_id: p_65VMUGA6qbK4R77Pu7xNTc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王起牧，史料所见人物。本项目依据《中国历代人物传记资料库：王起牧（CBDB 162481）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_BiHuj-o8r_pyAIZAfqeuyO
          claim_id: c_Q4pbnfdMw8i28K2HF2xB9V
          source_id: s_4HXB65xMmkL2KJTr63Hvzo
          stance: supports
          locator: CBDB:162481
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_4HXB65xMmkL2KJTr63Hvzo
            source_type: api_record
            title: 中国历代人物传记资料库：王起牧（CBDB 162481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162481&o=json
            external_identifier: CBDB:162481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_x65J7VwWsfkLncfd3tq5mX
        subject_person_id: p_65VMUGA6qbK4R77Pu7xNTc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王起牧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_kqH9YjtXNtTgFSncYJJpmq
          claim_id: c_x65J7VwWsfkLncfd3tq5mX
          source_id: s_4HXB65xMmkL2KJTr63Hvzo
          stance: supports
          locator: CBDB:162481
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uELy3eN7RHEQlwwRdTM1Ds
        subject_person_id: p_gE38wphVgSX2ysH6WXuLZH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_65VMUGA6qbK4R77Pu7xNTc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yhyzwSW8R1W06NyYA52gMg
          claim_id: c_uELy3eN7RHEQlwwRdTM1Ds
          source_id: s_4HXB65xMmkL2KJTr63Hvzo
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Xianheng2：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4HXB65xMmkL2KJTr63Hvzo
            source_type: api_record
            title: 中国历代人物传记资料库：王起牧（CBDB 162481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162481&o=json
            external_identifier: CBDB:162481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_gE38wphVgSX2ysH6WXuLZH
        status: active
        display_name: 王大禮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王起牧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王起牧，史料所见人物。本项目依据《中国历代人物传记资料库：王起牧（CBDB 162481）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王起牧 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gE38wphVgSX2ysH6WXuLZH | 王大禮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王起牧（CBDB 162481）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162481&o=json)
