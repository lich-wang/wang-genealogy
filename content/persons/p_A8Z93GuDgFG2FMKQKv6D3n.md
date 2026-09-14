---
schema: wang-person/v1
id: p_A8Z93GuDgFG2FMKQKv6D3n
status: active
merged_into: null
display_name: 王鯆
cbdb_id: 252489
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4ZvjBJMDLwbjcw61b2CqwA
        subject_person_id: p_A8Z93GuDgFG2FMKQKv6D3n
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鯆，明人物。成化十四年進士，籍贯祥符。（中国历代人物传记资料库 CBDB 252489）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_FRhnavD2KGg211AOmzDbs5
          claim_id: c_4ZvjBJMDLwbjcw61b2CqwA
          source_id: s_zJ5hCniN67ES78bGkCSFFu
          stance: supports
          locator: CBDB:252489
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_zJ5hCniN67ES78bGkCSFFu
            source_type: api_record
            title: 中国历代人物传记资料库：王鯆（CBDB 252489）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252489&o=json
            external_identifier: CBDB:252489
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_uCkzGFHFLVoxFfM3Ac7wSP
        subject_person_id: p_A8Z93GuDgFG2FMKQKv6D3n
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鯆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_z2WFsixL7dnWZ4YQRR2e7r
          claim_id: c_uCkzGFHFLVoxFfM3Ac7wSP
          source_id: s_zJ5hCniN67ES78bGkCSFFu
          stance: supports
          locator: CBDB:252489
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_B-_at9KhArY-Sqt0iS4UFM
        subject_person_id: p_4H62vCdFCPfwbu588ZF5Rs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A8Z93GuDgFG2FMKQKv6D3n
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9t6D0GcXK4CGVxSTypceRb
          claim_id: c_B-_at9KhArY-Sqt0iS4UFM
          source_id: s_4YHSY5Zr6UL3ciq-FlxMGa
          stance: supports
          locator: CBDB：兄弟 王鯨（200003）之父／母 王紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王鯆 与 王鯨 为同胞（CBDB 记「兄」），王鯨 之父／母即 王鯆 之父／母。
          source:
            id: s_4YHSY5Zr6UL3ciq-FlxMGa
            source_type: api_record
            title: 中国历代人物传记资料库：王鯆（CBDB 252489）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252489&o=json
            external_identifier: CBDB:252489
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4H62vCdFCPfwbu588ZF5Rs
        status: active
        display_name: 王紀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ba5cIsYJcQ1wd4At1BvBUj
        subject_person_id: p_5841EMmKzggT2c8As9ptEU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_A8Z93GuDgFG2FMKQKv6D3n
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YU9lwBhpVaAdjCyVwkR7aF
          claim_id: c_ba5cIsYJcQ1wd4At1BvBUj
          source_id: s_4YHSY5Zr6UL3ciq-FlxMGa
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200003 王鯨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_4YHSY5Zr6UL3ciq-FlxMGa
            source_type: api_record
            title: 中国历代人物传记资料库：王鯆（CBDB 252489）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252489&o=json
            external_identifier: CBDB:252489
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5841EMmKzggT2c8As9ptEU
        status: active
        display_name: 王鯨
        merged_into_person_id: null
---

# 王鯆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鯆，明人物。成化十四年進士，籍贯祥符。（中国历代人物传记资料库 CBDB 252489） | accepted |
| name.primary | 王鯆 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4H62vCdFCPfwbu588ZF5Rs | 王紀 | accepted |
| other | p_5841EMmKzggT2c8As9ptEU | 王鯨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鯆（CBDB 252489）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=252489&o=json)
