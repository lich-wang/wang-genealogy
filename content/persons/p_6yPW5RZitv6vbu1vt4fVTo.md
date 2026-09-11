---
schema: wang-person/v1
id: p_6yPW5RZitv6vbu1vt4fVTo
status: active
merged_into: null
display_name: 高氏
revision: 1
cbdb_id: 134092
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_e0hTSKXSuFsJV4d0wOYOEC
        subject_person_id: p_6yPW5RZitv6vbu1vt4fVTo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 高氏（1039—1103），宋人物。籍贯金華。（中国历代人物传记资料库 CBDB 134092）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TBBWEDNMEgvyILarOSOdV-
          claim_id: c_e0hTSKXSuFsJV4d0wOYOEC
          source_id: s_ET-FOBz8bxBYilfm45pEUE
          stance: supports
          locator: CBDB:134092
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ET-FOBz8bxBYilfm45pEUE
            source_type: api_record
            title: 中国历代人物传记资料库：高氏(王奕妻)（CBDB 134092）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134092&o=json
            external_identifier: CBDB:134092
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_lQ6cq0GYhD8IQ6NkVkTtD8
        subject_person_id: p_6yPW5RZitv6vbu1vt4fVTo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 高氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_APZJYhStC0yUi5CNeBsvTP
          claim_id: c_lQ6cq0GYhD8IQ6NkVkTtD8
          source_id: s_ET-FOBz8bxBYilfm45pEUE
          stance: supports
          locator: CBDB:134092
          quotation: null
          interpretation_note: CBDB 明确记录的王奕配偶
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
        id: c_zLVI0-0VcwWeL3mCWd3E39
        subject_person_id: p_E5T7DtMSUTdy3hJzYK7e45
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_6yPW5RZitv6vbu1vt4fVTo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dfMSFrge1_0brqXLtv8XCi
          claim_id: c_zLVI0-0VcwWeL3mCWd3E39
          source_id: s_ET-FOBz8bxBYilfm45pEUE
          stance: supports
          locator: CBDB 双向互证（妻子 高氏(王奕妻)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_E5T7DtMSUTdy3hJzYK7e45
        status: active
        display_name: 王奕
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 高氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 高氏（1039—1103），宋人物。籍贯金華。（中国历代人物传记资料库 CBDB 134092） | accepted |
| name.primary | 高氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_E5T7DtMSUTdy3hJzYK7e45 | 王奕 | accepted |

## 外部来源

- [中国历代人物传记资料库：高氏(王奕妻)（CBDB 134092）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134092&o=json)
