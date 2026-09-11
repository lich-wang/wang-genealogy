---
schema: wang-person/v1
id: p_Tzp1hs3CZ8gsSsQLzx3NAN
status: active
merged_into: null
display_name: 王承光
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YDPSvmuX2xdxJHn8cjxcEU
        subject_person_id: p_Tzp1hs3CZ8gsSsQLzx3NAN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RRxxDJkLeqdryN8WDFPdVF
          claim_id: c_YDPSvmuX2xdxJHn8cjxcEU
          source_id: s_YW4z4BCU4AxoJb2eF1qC6G
          stance: supports
          locator: CBDB:216149
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（216149）
          source: &a1
            id: s_YW4z4BCU4AxoJb2eF1qC6G
            source_type: api_record
            title: 中国历代人物传记资料库：王承光（CBDB 216149）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216149&o=json
            external_identifier: CBDB:216149
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.221Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_q3B6zRLRaXKRfG4oa9kWhm
        subject_person_id: p_Tzp1hs3CZ8gsSsQLzx3NAN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承光，明人物。萬曆五年進士，籍贯黃縣。（中国历代人物传记资料库 CBDB 216149）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WXmVSXSKoSdQA1A97VfDKQ
          claim_id: c_q3B6zRLRaXKRfG4oa9kWhm
          source_id: s_YW4z4BCU4AxoJb2eF1qC6G
          stance: supports
          locator: CBDB:216149
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王承光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承光 | accepted |
| bio.summary | 王承光，明人物。萬曆五年進士，籍贯黃縣。（中国历代人物传记资料库 CBDB 216149） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承光（CBDB 216149）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216149&o=json)
