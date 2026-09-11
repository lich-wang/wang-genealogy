---
schema: wang-person/v1
id: p_tvv54AegXaTEPSDVc3cu9J
status: active
merged_into: null
display_name: 沈關關
revision: 1
cbdb_id: 70069
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZAH6QSKpBX425Sm4Lhk_eO
        subject_person_id: p_tvv54AegXaTEPSDVc3cu9J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 沈關關，史料所见人物。本项目依据《中国历代人物传记资料库：沈關關（CBDB 70069）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8MUry_Q8NmZSbsvgC7DgsF
          claim_id: c_ZAH6QSKpBX425Sm4Lhk_eO
          source_id: s_owuIN9MRmc41fa1vWz63Sl
          stance: supports
          locator: CBDB:70069
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_owuIN9MRmc41fa1vWz63Sl
            source_type: api_record
            title: 中国历代人物传记资料库：沈關關（CBDB 70069）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70069&o=json
            external_identifier: CBDB:70069
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HQMOfSTrJ34mKlmdI2Iytt
        subject_person_id: p_tvv54AegXaTEPSDVc3cu9J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 沈關關
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kJ82ZSacPaRJbnLacrxbV4
          claim_id: c_HQMOfSTrJ34mKlmdI2Iytt
          source_id: s_owuIN9MRmc41fa1vWz63Sl
          stance: supports
          locator: CBDB:70069
          quotation: null
          interpretation_note: CBDB 明确记录的王珬配偶
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
        id: c_2crjKOMFC9bPzcXnEoy4ST
        subject_person_id: p_iHYsTxJDvwPJVuGHqHYPJ5
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_tvv54AegXaTEPSDVc3cu9J
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sHLG15HDMZUa1V0BxNUmrM
          claim_id: c_2crjKOMFC9bPzcXnEoy4ST
          source_id: s_owuIN9MRmc41fa1vWz63Sl
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #1268：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_iHYsTxJDvwPJVuGHqHYPJ5
        status: active
        display_name: 王珬
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 沈關關

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 沈關關，史料所见人物。本项目依据《中国历代人物传记资料库：沈關關（CBDB 70069）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 沈關關 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_iHYsTxJDvwPJVuGHqHYPJ5 | 王珬 | accepted |

## 外部来源

- [中国历代人物传记资料库：沈關關（CBDB 70069）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=70069&o=json)
