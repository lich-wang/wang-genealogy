---
schema: wang-person/v1
id: p_wigusvpVqHD6pH8bsZG35j
status: active
merged_into: null
display_name: 王德宏
cbdb_id: 120769
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EVNVBaSx8GRiY1MAHEAe4A
        subject_person_id: p_wigusvpVqHD6pH8bsZG35j
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德宏，史料所见人物。本项目依据《中国历代人物传记资料库：王德宏（CBDB 120769）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_o6FPzpvkw4rcuZ8Viilj0P
          claim_id: c_EVNVBaSx8GRiY1MAHEAe4A
          source_id: s_S3xsvNP49uy8wQDDYuf8yh
          stance: supports
          locator: CBDB:120769
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_S3xsvNP49uy8wQDDYuf8yh
            source_type: api_record
            title: 中国历代人物传记资料库：王德宏（CBDB 120769）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120769&o=json
            external_identifier: CBDB:120769
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y3HtGPsfZvk5eX84teq3qG
        subject_person_id: p_wigusvpVqHD6pH8bsZG35j
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德宏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_sBiuniY5BhuKZ1o28MVCAP
          claim_id: c_Y3HtGPsfZvk5eX84teq3qG
          source_id: s_S3xsvNP49uy8wQDDYuf8yh
          stance: supports
          locator: CBDB:120769
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1901-2000）｜历史性依据：CBDB 朝代 = 清
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_uWZsjLnCPYILkkQrxrN3tp
        subject_person_id: p_wigusvpVqHD6pH8bsZG35j
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_fkP8NqT7X7XRBgsN7zPQcD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fPMw51ICB6mRA-g9gKANvj
          claim_id: c_uWZsjLnCPYILkkQrxrN3tp
          source_id: s_7rOQ3mxVONSO9eOZxz8XwO
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3894, HuWenKai #749：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7rOQ3mxVONSO9eOZxz8XwO
            source_type: api_record
            title: 中国历代人物传记资料库：諸嫻（CBDB 120765）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120765&o=json
            external_identifier: CBDB:120765
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fkP8NqT7X7XRBgsN7zPQcD
        status: active
        display_name: 諸嫻
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王德宏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王德宏，史料所见人物。本项目依据《中国历代人物传记资料库：王德宏（CBDB 120769）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王德宏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_fkP8NqT7X7XRBgsN7zPQcD | 諸嫻 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德宏（CBDB 120769）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120769&o=json)
- [中国历代人物传记资料库：諸嫻（CBDB 120765）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120765&o=json)
