---
schema: wang-person/v1
id: p_3uJyMW5XZoMjyd6QhQ3poA
status: active
merged_into: null
display_name: 鄧氏
revision: 1
cbdb_id: 136192
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MChSA3FZOHYvFWwuoX4aXo
        subject_person_id: p_3uJyMW5XZoMjyd6QhQ3poA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 鄧氏，史料所见人物。本项目依据《中国历代人物传记资料库：鄧氏(王玥母)（CBDB 136192）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zdqBzZ_Hl8h7tEcaonWVxm
          claim_id: c_MChSA3FZOHYvFWwuoX4aXo
          source_id: s_QcMO59V2lsxdN0nC_cgNWD
          stance: supports
          locator: CBDB:136192
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_QcMO59V2lsxdN0nC_cgNWD
            source_type: api_record
            title: 中国历代人物传记资料库：鄧氏(王玥母)（CBDB 136192）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136192&o=json
            external_identifier: CBDB:136192
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_g6jesKCi4-szTmhsl2erbE
        subject_person_id: p_3uJyMW5XZoMjyd6QhQ3poA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 鄧氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j1j306zKeLiNBM049Jws5B
          claim_id: c_g6jesKCi4-szTmhsl2erbE
          source_id: s_QcMO59V2lsxdN0nC_cgNWD
          stance: supports
          locator: CBDB:136192
          quotation: null
          interpretation_note: CBDB 明确记录的王其仁配偶
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
        id: c_5sXyEmP1M5EMgnd5BEzrZL
        subject_person_id: p_gqyGCnz9XCXA3WqKdw1Xzf
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_3uJyMW5XZoMjyd6QhQ3poA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kw7iDCnyORdAOAzVVATD5P
          claim_id: c_5sXyEmP1M5EMgnd5BEzrZL
          source_id: s_QcMO59V2lsxdN0nC_cgNWD
          stance: supports
          locator: CBDB 双向互证（妻子 鄧氏(王玥母)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_gqyGCnz9XCXA3WqKdw1Xzf
        status: active
        display_name: 王其仁
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 鄧氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 鄧氏，史料所见人物。本项目依据《中国历代人物传记资料库：鄧氏(王玥母)（CBDB 136192）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 鄧氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_gqyGCnz9XCXA3WqKdw1Xzf | 王其仁 | accepted |

## 外部来源

- [中国历代人物传记资料库：鄧氏(王玥母)（CBDB 136192）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=136192&o=json)
