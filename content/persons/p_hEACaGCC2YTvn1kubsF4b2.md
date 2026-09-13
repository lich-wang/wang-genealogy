---
schema: wang-person/v1
id: p_hEACaGCC2YTvn1kubsF4b2
status: active
merged_into: null
display_name: 王夢應
cbdb_id: 38313
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CH2bvc3CdGQn5mtPWJsA2C
        subject_person_id: p_hEACaGCC2YTvn1kubsF4b2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢應，宋人物。籍贯攸縣，入仕進士，曾任縣尉。（中国历代人物传记资料库 CBDB 38313）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_rZCi7j_lNWQ6O7xCKeam-b
          claim_id: c_CH2bvc3CdGQn5mtPWJsA2C
          source_id: s_9fkXs8vuZhFkSBMacmRS8i
          stance: supports
          locator: CBDB:38313
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_9fkXs8vuZhFkSBMacmRS8i
            source_type: api_record
            title: 中国历代人物传记资料库：王夢應（CBDB 38313）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38313&o=json
            external_identifier: CBDB:38313
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:46.515Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_YT8swVCbatSiW7nLawykH4
        subject_person_id: p_hEACaGCC2YTvn1kubsF4b2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王夢應
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3UEUWtKJfcXTctLyWEPxvg
          claim_id: c_YT8swVCbatSiW7nLawykH4
          source_id: s_9fkXs8vuZhFkSBMacmRS8i
          stance: supports
          locator: CBDB:38313
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1201-1300）｜历史性依据：CBDB 朝代 = 宋
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

# 王夢應

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王夢應，宋人物。籍贯攸縣，入仕進士，曾任縣尉。（中国历代人物传记资料库 CBDB 38313） | accepted |
| name.primary | 王夢應 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王夢應（CBDB 38313）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38313&o=json)
