---
schema: wang-person/v1
id: p_QfrUjSmQ4GsHQFSweEh618
status: active
merged_into: null
display_name: 王肅
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SkYPC8PQYLcw37SU9hkJU7
        subject_person_id: p_QfrUjSmQ4GsHQFSweEh618
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4S95Gcgmab1Q1JpRozfv1b
          claim_id: c_SkYPC8PQYLcw37SU9hkJU7
          source_id: s_eb3dboXFEhJdNbHXWXFNUb
          stance: supports
          locator: CBDB:135476
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（135476）
          source: &a1
            id: s_eb3dboXFEhJdNbHXWXFNUb
            source_type: api_record
            title: 中国历代人物传记资料库：王肅（CBDB 135476）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135476&o=json
            external_identifier: CBDB:135476
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.340Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AJxCa37gmFEEeH2FPCCqDq
        subject_person_id: p_QfrUjSmQ4GsHQFSweEh618
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王肅，史料所见人物。本项目依据《中国历代人物传记资料库：王肅（CBDB 135476）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_67wuBia1OnNG9p3nLu1o9-
          claim_id: c_AJxCa37gmFEEeH2FPCCqDq
          source_id: s_eb3dboXFEhJdNbHXWXFNUb
          stance: supports
          locator: CBDB:135476
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_XDQvhgaLzvwTzUX64QU4fi
        subject_person_id: p_QfrUjSmQ4GsHQFSweEh618
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Z4MvEXmQJi515G5XB2HFGM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7KoE4FCV2n7YTkFfN_9TQY
          claim_id: c_XDQvhgaLzvwTzUX64QU4fi
          source_id: s_wcR5TAetxYb7Peh1rn9RiC
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3209：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wcR5TAetxYb7Peh1rn9RiC
            source_type: api_record
            title: 中国历代人物传记资料库：王元姬（CBDB 135477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135477&o=json
            external_identifier: CBDB:135477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:37.980Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_Z4MvEXmQJi515G5XB2HFGM
        status: active
        display_name: 王元姬
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王肅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王肅 | accepted |
| bio.summary | 王肅，史料所见人物。本项目依据《中国历代人物传记资料库：王肅（CBDB 135476）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Z4MvEXmQJi515G5XB2HFGM | 王元姬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王肅（CBDB 135476）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135476&o=json)
- [中国历代人物传记资料库：王元姬（CBDB 135477）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135477&o=json)
