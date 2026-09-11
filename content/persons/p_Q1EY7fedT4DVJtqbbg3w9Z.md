---
schema: wang-person/v1
id: p_Q1EY7fedT4DVJtqbbg3w9Z
status: active
merged_into: null
display_name: 王果
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6PieyvETvnF2BfCxoKkfCK
        subject_person_id: p_Q1EY7fedT4DVJtqbbg3w9Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王果
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Vi5b4ctCbB5MdEN74FZPuh
          claim_id: c_6PieyvETvnF2BfCxoKkfCK
          source_id: s_QZPjFWKZx6UhDNsP5BX6CL
          stance: supports
          locator: CBDB:194269
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（194269）
          source: &a1
            id: s_QZPjFWKZx6UhDNsP5BX6CL
            source_type: api_record
            title: 中国历代人物传记资料库：王果（CBDB 194269）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194269&o=json
            external_identifier: CBDB:194269
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.449Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8X4J2ZrUpDK86Bn5sD9H4q
        subject_person_id: p_Q1EY7fedT4DVJtqbbg3w9Z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王果，唐人物。曾任州司馬。（中国历代人物传记资料库 CBDB 194269）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MLc7Plr7Lz1M7eh4VZ-nap
          claim_id: c_8X4J2ZrUpDK86Bn5sD9H4q
          source_id: s_QZPjFWKZx6UhDNsP5BX6CL
          stance: supports
          locator: CBDB:194269
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pVbrxqgsiRkebmgekXloHA
        subject_person_id: p_4PcyxiY7T9znwDcUL2Ny7S
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Q1EY7fedT4DVJtqbbg3w9Z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xaBzrEZEgtau9t9VuyUg8e
          claim_id: c_pVbrxqgsiRkebmgekXloHA
          source_id: s_DGpWcX24MGjLD5GLZa3MBV
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DGpWcX24MGjLD5GLZa3MBV
            source_type: api_record
            title: 中国历代人物传记资料库：王遇（CBDB 194267）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194267&o=json
            external_identifier: CBDB:194267
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.448Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4PcyxiY7T9znwDcUL2Ny7S
        status: active
        display_name: 王遇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王果

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王果 | accepted |
| bio.summary | 王果，唐人物。曾任州司馬。（中国历代人物传记资料库 CBDB 194269） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4PcyxiY7T9znwDcUL2Ny7S | 王遇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王果（CBDB 194269）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194269&o=json)
- [中国历代人物传记资料库：王遇（CBDB 194267）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194267&o=json)
