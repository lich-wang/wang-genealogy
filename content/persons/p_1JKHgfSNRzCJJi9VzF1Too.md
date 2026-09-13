---
schema: wang-person/v1
id: p_1JKHgfSNRzCJJi9VzF1Too
status: active
merged_into: null
display_name: 王明尊
cbdb_id: 414780
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Sv637JjZf6CN9AFPQAx8eA
        subject_person_id: p_1JKHgfSNRzCJJi9VzF1Too
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明尊，明人物。曾任典史。（中国历代人物传记资料库 CBDB 414780）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_7HOwG9UR1keDDdxqPtnMrD
          claim_id: c_Sv637JjZf6CN9AFPQAx8eA
          source_id: s_KeeFXTf75KHAg9DVLbm7Vh
          stance: supports
          locator: CBDB:414780
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_KeeFXTf75KHAg9DVLbm7Vh
            source_type: api_record
            title: 中国历代人物传记资料库：王明尊（CBDB 414780）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414780&o=json
            external_identifier: CBDB:414780
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:38.799Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_fB2SuWDQCRcgvbMVFykXFy
        subject_person_id: p_1JKHgfSNRzCJJi9VzF1Too
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明尊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_75ayRpG3ALRRZqQ5ZBz8dP
          claim_id: c_fB2SuWDQCRcgvbMVFykXFy
          source_id: s_KeeFXTf75KHAg9DVLbm7Vh
          stance: supports
          locator: CBDB:414780
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（5701-5800）｜历史性依据：CBDB 朝代 = 明
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

# 王明尊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王明尊，明人物。曾任典史。（中国历代人物传记资料库 CBDB 414780） | accepted |
| name.primary | 王明尊 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王明尊（CBDB 414780）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414780&o=json)
