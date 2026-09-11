---
schema: wang-person/v1
id: p_WAG4bv7AnBN5QxauzvM7pQ
status: active
merged_into: null
display_name: 王宰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q3KJ51ctugLBM4s5wo4D15
        subject_person_id: p_WAG4bv7AnBN5QxauzvM7pQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9YCbA1HRmyrZTYG9i6KHrh
          claim_id: c_Q3KJ51ctugLBM4s5wo4D15
          source_id: s_Zevec5HMMVQcqeCNKhbw8z
          stance: supports
          locator: CBDB:279066
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（279066）
          source: &a1
            id: s_Zevec5HMMVQcqeCNKhbw8z
            source_type: api_record
            title: 中国历代人物传记资料库：王宰（CBDB 279066）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279066&o=json
            external_identifier: CBDB:279066
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.976Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VATYj1pCUjAhEXeH8AAmfF
        subject_person_id: p_WAG4bv7AnBN5QxauzvM7pQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宰，明人物。正德六年進士，籍贯遂寧。（中国历代人物传记资料库 CBDB 279066）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__HoEgL2cAOrShhiZfGppwE
          claim_id: c_VATYj1pCUjAhEXeH8AAmfF
          source_id: s_Zevec5HMMVQcqeCNKhbw8z
          stance: supports
          locator: CBDB:279066
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

# 王宰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宰 | accepted |
| bio.summary | 王宰，明人物。正德六年進士，籍贯遂寧。（中国历代人物传记资料库 CBDB 279066） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宰（CBDB 279066）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279066&o=json)
