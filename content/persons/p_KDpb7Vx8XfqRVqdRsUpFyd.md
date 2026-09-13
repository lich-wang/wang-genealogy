---
schema: wang-person/v1
id: p_KDpb7Vx8XfqRVqdRsUpFyd
status: active
merged_into: null
display_name: 王獻夫
cbdb_id: 265734
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5XNh6rdxU1kLUsKr7HETry
        subject_person_id: p_KDpb7Vx8XfqRVqdRsUpFyd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻夫，明人物。弘治六年進士，籍贯吳縣。（中国历代人物传记资料库 CBDB 265734）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_8pxbmtdiKNxhuxfgjse1mv
          claim_id: c_5XNh6rdxU1kLUsKr7HETry
          source_id: s_fuVJkzgEQbJFyr4tddLLEu
          stance: supports
          locator: CBDB:265734
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_fuVJkzgEQbJFyr4tddLLEu
            source_type: api_record
            title: 中国历代人物传记资料库：王獻夫（CBDB 265734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265734&o=json
            external_identifier: CBDB:265734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QqDHat6ZcdTRDC9wktwMAo
        subject_person_id: p_KDpb7Vx8XfqRVqdRsUpFyd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王獻夫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_sLDcAv54DviHRvcYx8XBMB
          claim_id: c_QqDHat6ZcdTRDC9wktwMAo
          source_id: s_fuVJkzgEQbJFyr4tddLLEu
          stance: supports
          locator: CBDB:265734
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
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

# 王獻夫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王獻夫，明人物。弘治六年進士，籍贯吳縣。（中国历代人物传记资料库 CBDB 265734） | accepted |
| name.primary | 王獻夫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王獻夫（CBDB 265734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265734&o=json)
