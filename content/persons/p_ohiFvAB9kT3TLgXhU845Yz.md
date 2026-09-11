---
schema: wang-person/v1
id: p_ohiFvAB9kT3TLgXhU845Yz
status: active
merged_into: null
display_name: 張雅宜
revision: 1
cbdb_id: 120424
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qwCbaIeBTgDraLZX-4P9Bk
        subject_person_id: p_ohiFvAB9kT3TLgXhU845Yz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張雅宜，史料所见人物。本项目依据《中国历代人物传记资料库：張雅宜（CBDB 120424）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cuAyUsKxP5gsPkbsekoKdX
          claim_id: c_qwCbaIeBTgDraLZX-4P9Bk
          source_id: s_5tecD2AflkBcW4w3e3GgCZ
          stance: supports
          locator: CBDB:120424
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_5tecD2AflkBcW4w3e3GgCZ
            source_type: api_record
            title: 中国历代人物传记资料库：張雅宜（CBDB 120424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120424&o=json
            external_identifier: CBDB:120424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_dlnDpRsLDWbLMGNqLj-JWm
        subject_person_id: p_ohiFvAB9kT3TLgXhU845Yz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 張雅宜
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uH2XE6wPpAUhQNh-m1wiDM
          claim_id: c_dlnDpRsLDWbLMGNqLj-JWm
          source_id: s_5tecD2AflkBcW4w3e3GgCZ
          stance: supports
          locator: CBDB:120424
          quotation: null
          interpretation_note: CBDB 明确记录的王栻配偶
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
        id: c_o9Hw3oOZTvxkRRtBik1ioy
        subject_person_id: p_yzi9jBNDpeiW68FaH679vw
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ohiFvAB9kT3TLgXhU845Yz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-SaipqY_zMJ0vS0qfiep_c
          claim_id: c_o9Hw3oOZTvxkRRtBik1ioy
          source_id: s_5tecD2AflkBcW4w3e3GgCZ
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4070, HuWenKai #523：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yzi9jBNDpeiW68FaH679vw
        status: active
        display_name: 王栻
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 張雅宜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 張雅宜，史料所见人物。本项目依据《中国历代人物传记资料库：張雅宜（CBDB 120424）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 張雅宜 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_yzi9jBNDpeiW68FaH679vw | 王栻 | accepted |

## 外部来源

- [中国历代人物传记资料库：張雅宜（CBDB 120424）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120424&o=json)
