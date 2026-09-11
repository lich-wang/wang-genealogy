---
schema: wang-person/v1
id: p_xrBWsuTJASiC9n8hS1Ba4D
status: active
merged_into: null
display_name: 王綏垣
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ws7vkpsaJtHRuxr4CpqUPb
        subject_person_id: p_xrBWsuTJASiC9n8hS1Ba4D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綏垣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jhHA2aSSR1ptag8DXLmWP8
          claim_id: c_Ws7vkpsaJtHRuxr4CpqUPb
          source_id: s_r5qSb3TrLkU8KTdmNi25x4
          stance: supports
          locator: CBDB:527051
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（527051）
          source: &a1
            id: s_r5qSb3TrLkU8KTdmNi25x4
            source_type: api_record
            title: 中国历代人物传记资料库：王綏垣（CBDB 527051）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527051&o=json
            external_identifier: CBDB:527051
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.342Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_s45g5MaBibYaysBkCSDyp7
        subject_person_id: p_xrBWsuTJASiC9n8hS1Ba4D
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綏垣，史料所见人物。本项目依据《中国历代人物传记资料库：王綏垣（CBDB 527051）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XWBE4NpNvTX0LQ0PxX75zl
          claim_id: c_s45g5MaBibYaysBkCSDyp7
          source_id: s_r5qSb3TrLkU8KTdmNi25x4
          stance: supports
          locator: CBDB:527051
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qVybeqBIM3NX2E5Dp5KOOI
        subject_person_id: p_8FQahN2M34nM7B4mb79g6G
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xrBWsuTJASiC9n8hS1Ba4D
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VlIc1iiuIXiiLdCuJOiSnZ
          claim_id: c_qVybeqBIM3NX2E5Dp5KOOI
          source_id: s_4x6YQGwimhjCQTNP9mrxyS
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13213：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4x6YQGwimhjCQTNP9mrxyS
            source_type: api_record
            title: 中国历代人物传记资料库：王燮（CBDB 71293）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71293&o=json
            external_identifier: CBDB:71293
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.576Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8FQahN2M34nM7B4mb79g6G
        status: active
        display_name: 王燮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王綏垣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綏垣 | accepted |
| bio.summary | 王綏垣，史料所见人物。本项目依据《中国历代人物传记资料库：王綏垣（CBDB 527051）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8FQahN2M34nM7B4mb79g6G | 王燮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綏垣（CBDB 527051）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527051&o=json)
- [中国历代人物传记资料库：王燮（CBDB 71293）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71293&o=json)
