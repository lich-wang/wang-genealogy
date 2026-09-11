---
schema: wang-person/v1
id: p_9at3GZ21HMCWweDrYG8Wky
status: active
merged_into: null
display_name: 王馭超
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_R3QeNWdYTq8bLs84hAtxvC
        subject_person_id: p_9at3GZ21HMCWweDrYG8Wky
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王馭超
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Hmt6Qk4v6mGvXpaTtHNih6
          claim_id: c_R3QeNWdYTq8bLs84hAtxvC
          source_id: s_oPPXjNK14vWX5soeah2oDz
          stance: supports
          locator: CBDB:526959
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（526959）
          source: &a1
            id: s_oPPXjNK14vWX5soeah2oDz
            source_type: api_record
            title: 中国历代人物传记资料库：王馭超（CBDB 526959）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526959&o=json
            external_identifier: CBDB:526959
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.318Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AhjYxusw5BQzVDT25P1jxJ
        subject_person_id: p_9at3GZ21HMCWweDrYG8Wky
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王馭超，史料所见人物。本项目依据《中国历代人物传记资料库：王馭超（CBDB 526959）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9qUozW7cR5W9oDPQhlnD4o
          claim_id: c_AhjYxusw5BQzVDT25P1jxJ
          source_id: s_oPPXjNK14vWX5soeah2oDz
          stance: supports
          locator: CBDB:526959
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_owezUOtEYaVnI2w1TbMgBT
        subject_person_id: p_9at3GZ21HMCWweDrYG8Wky
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PYVqWyV8rjtdfNYSbEwCgK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0uYKkBh1Hg3h9BancO9dch
          claim_id: c_owezUOtEYaVnI2w1TbMgBT
          source_id: s_oPPXjNK14vWX5soeah2oDz
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13138：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PYVqWyV8rjtdfNYSbEwCgK
        status: active
        display_name: 王筠
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王馭超

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王馭超 | accepted |
| bio.summary | 王馭超，史料所见人物。本项目依据《中国历代人物传记资料库：王馭超（CBDB 526959）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_PYVqWyV8rjtdfNYSbEwCgK | 王筠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王馭超（CBDB 526959）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526959&o=json)
