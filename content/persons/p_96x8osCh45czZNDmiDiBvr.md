---
schema: wang-person/v1
id: p_96x8osCh45czZNDmiDiBvr
status: active
merged_into: null
display_name: 王三槐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kJDanKd1iGebN1EiP4JBDB
        subject_person_id: p_96x8osCh45czZNDmiDiBvr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三槐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pUhfiL1SV3Ntd7vCQLHqV9
          claim_id: c_kJDanKd1iGebN1EiP4JBDB
          source_id: s_Mx4ncFheCuUMEidpV3w6DH
          stance: supports
          locator: CBDB:214234
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（214234）
          source: &a1
            id: s_Mx4ncFheCuUMEidpV3w6DH
            source_type: api_record
            title: 中国历代人物传记资料库：王三槐（CBDB 214234）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214234&o=json
            external_identifier: CBDB:214234
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.150Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sq4ptaEFbB9TiU7ok3NSyp
        subject_person_id: p_96x8osCh45czZNDmiDiBvr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三槐，明人物。萬曆二年進士，籍贯汲縣。（中国历代人物传记资料库 CBDB 214234）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6dlSEu8f8slxnJUKGgDa8-
          claim_id: c_sq4ptaEFbB9TiU7ok3NSyp
          source_id: s_Mx4ncFheCuUMEidpV3w6DH
          stance: supports
          locator: CBDB:214234
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

# 王三槐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三槐 | accepted |
| bio.summary | 王三槐，明人物。萬曆二年進士，籍贯汲縣。（中国历代人物传记资料库 CBDB 214234） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王三槐（CBDB 214234）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214234&o=json)
