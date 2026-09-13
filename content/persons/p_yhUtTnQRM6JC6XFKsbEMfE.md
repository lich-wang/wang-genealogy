---
schema: wang-person/v1
id: p_yhUtTnQRM6JC6XFKsbEMfE
status: active
merged_into: null
display_name: 王均海
cbdb_id: 278098
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_f3okHPP2htQgtWw2yfiKq1
        subject_person_id: p_yhUtTnQRM6JC6XFKsbEMfE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王均海，史料所见人物。本项目依据《中国历代人物传记资料库：王均海（CBDB 278098）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_J5M3wFTFctOdZ48xVplgWV
          claim_id: c_f3okHPP2htQgtWw2yfiKq1
          source_id: s_EvbJ7YEhDjCCKwi1Uqh8vR
          stance: supports
          locator: CBDB:278098
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_EvbJ7YEhDjCCKwi1Uqh8vR
            source_type: api_record
            title: 中国历代人物传记资料库：王均海（CBDB 278098）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278098&o=json
            external_identifier: CBDB:278098
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8N6yxt7TWwALHQYXgpPH9F
        subject_person_id: p_yhUtTnQRM6JC6XFKsbEMfE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王均海
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_RkEgQNn4YZKCqaLeZXQAkt
          claim_id: c_8N6yxt7TWwALHQYXgpPH9F
          source_id: s_EvbJ7YEhDjCCKwi1Uqh8vR
          stance: supports
          locator: CBDB:278098
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
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
        id: c_aSQfDVjWBkUuwJGULf5nxi
        subject_person_id: p_yhUtTnQRM6JC6XFKsbEMfE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nqkQ2QrQi1t9x1JULvJyMw
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9JR-_tUoYiyt8Ut3i84gAQ
          claim_id: c_aSQfDVjWBkUuwJGULf5nxi
          source_id: s_EvbJ7YEhDjCCKwi1Uqh8vR
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第一百七十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EvbJ7YEhDjCCKwi1Uqh8vR
            source_type: api_record
            title: 中国历代人物传记资料库：王均海（CBDB 278098）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278098&o=json
            external_identifier: CBDB:278098
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_nqkQ2QrQi1t9x1JULvJyMw
        status: active
        display_name: 王寬
        merged_into_person_id: null
  other: []
---

# 王均海

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王均海，史料所见人物。本项目依据《中国历代人物传记资料库：王均海（CBDB 278098）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王均海 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_nqkQ2QrQi1t9x1JULvJyMw | 王寬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王均海（CBDB 278098）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278098&o=json)
