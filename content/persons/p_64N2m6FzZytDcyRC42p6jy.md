---
schema: wang-person/v1
id: p_64N2m6FzZytDcyRC42p6jy
status: active
merged_into: null
display_name: 王添喜
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ErsdxKnqnqD1v22XJMcyRb
        subject_person_id: p_64N2m6FzZytDcyRC42p6jy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王添喜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VQuWstJZGcdBThg1QFWQdh
          claim_id: c_ErsdxKnqnqD1v22XJMcyRb
          source_id: s_hDo6Ft6V59P49bKixV67CD
          stance: supports
          locator: CBDB:526965
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（526965）
          source: &a1
            id: s_hDo6Ft6V59P49bKixV67CD
            source_type: api_record
            title: 中国历代人物传记资料库：王添喜（CBDB 526965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526965&o=json
            external_identifier: CBDB:526965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.320Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EtFX9Yed1RVqr3VCcpc78z
        subject_person_id: p_64N2m6FzZytDcyRC42p6jy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王添喜，史料所见人物。本项目依据《中国历代人物传记资料库：王添喜（CBDB 526965）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ceDTjl-oSUm-acI8_KNR9q
          claim_id: c_EtFX9Yed1RVqr3VCcpc78z
          source_id: s_hDo6Ft6V59P49bKixV67CD
          stance: supports
          locator: CBDB:526965
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_CWtA6sxU1RqeAj5nM1AJiB
        subject_person_id: p_dKrdHweWB3nFL1PMJagWsh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_64N2m6FzZytDcyRC42p6jy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1ubNAprFM1660l0M6HcnzX
          claim_id: c_CWtA6sxU1RqeAj5nM1AJiB
          source_id: s_hDo6Ft6V59P49bKixV67CD
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13151：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dKrdHweWB3nFL1PMJagWsh
        status: active
        display_name: 王萬岱
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王添喜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王添喜 | accepted |
| bio.summary | 王添喜，史料所见人物。本项目依据《中国历代人物传记资料库：王添喜（CBDB 526965）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dKrdHweWB3nFL1PMJagWsh | 王萬岱 | accepted |

## 外部来源

- [中国历代人物传记资料库：王添喜（CBDB 526965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526965&o=json)
