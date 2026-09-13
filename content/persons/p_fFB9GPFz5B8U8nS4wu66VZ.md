---
schema: wang-person/v1
id: p_fFB9GPFz5B8U8nS4wu66VZ
status: active
merged_into: null
display_name: 王翼鳳
cbdb_id: 72220
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4tEHqU1rNpnynj3kFCQHPv
        subject_person_id: p_fFB9GPFz5B8U8nS4wu66VZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翼鳳（卒于1860年），史料所见人物。本项目依据《中国历代人物传记资料库：王翼鳳（CBDB 72220）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_srd8UQEvo4cakVidvCd7yf
          claim_id: c_4tEHqU1rNpnynj3kFCQHPv
          source_id: s_PKkCHLGsJ5wP4xv8vhk7rD
          stance: supports
          locator: CBDB:72220
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_PKkCHLGsJ5wP4xv8vhk7rD
            source_type: api_record
            title: 中国历代人物传记资料库：王翼鳳（CBDB 72220）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72220&o=json
            external_identifier: CBDB:72220
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:37.980Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_oy8pLgR4NFMruMp7nPcAgB
        subject_person_id: p_fFB9GPFz5B8U8nS4wu66VZ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1860年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 1860-01-01
            latest: 1860-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_L9MiatrAiGBzza17SgjrB2
          claim_id: c_oy8pLgR4NFMruMp7nPcAgB
          source_id: s_PKkCHLGsJ5wP4xv8vhk7rD
          stance: supports
          locator: CBDB:72220
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（301-400）｜历史性依据：CBDB 卒年 = 1860
          source:
            id: s_PKkCHLGsJ5wP4xv8vhk7rD
            source_type: api_record
            title: 中国历代人物传记资料库：王翼鳳（CBDB 72220）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72220&o=json
            external_identifier: CBDB:72220
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:37.980Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UxN9QQePBqvh94JzbX7Uw8
        subject_person_id: p_fFB9GPFz5B8U8nS4wu66VZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翼鳳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_piiUzKS7eM9PNaNaWkWa75
          claim_id: c_UxN9QQePBqvh94JzbX7Uw8
          source_id: s_PKkCHLGsJ5wP4xv8vhk7rD
          stance: supports
          locator: CBDB:72220
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（301-400）｜历史性依据：CBDB 卒年 = 1860
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
  descendants: []
  other: []
---

# 王翼鳳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王翼鳳（卒于1860年），史料所见人物。本项目依据《中国历代人物传记资料库：王翼鳳（CBDB 72220）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 1860年 | accepted |
| name.primary | 王翼鳳 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王翼鳳（CBDB 72220）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72220&o=json)
