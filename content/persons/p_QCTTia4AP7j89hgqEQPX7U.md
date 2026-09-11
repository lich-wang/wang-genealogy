---
schema: wang-person/v1
id: p_QCTTia4AP7j89hgqEQPX7U
status: active
merged_into: null
display_name: 王藎
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gEsnygFQYJkFAoWHjknPBP
        subject_person_id: p_QCTTia4AP7j89hgqEQPX7U
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AQA9p1a2k2V8qc3YZ66535
          claim_id: c_gEsnygFQYJkFAoWHjknPBP
          source_id: s_unJZmFwdQK7fkAU6A7cVzZ
          stance: supports
          locator: CBDB:467513
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（467513）
          source: &a1
            id: s_unJZmFwdQK7fkAU6A7cVzZ
            source_type: api_record
            title: 中国历代人物传记资料库：王藎（CBDB 467513）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467513&o=json
            external_identifier: CBDB:467513
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.038Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_btxEohWKit8WN1purgukd6
        subject_person_id: p_QCTTia4AP7j89hgqEQPX7U
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藎，明人物。曾任都御史。（中国历代人物传记资料库 CBDB 467513）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_90szR6uRw-efEY9_Xztu9u
          claim_id: c_btxEohWKit8WN1purgukd6
          source_id: s_unJZmFwdQK7fkAU6A7cVzZ
          stance: supports
          locator: CBDB:467513
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

# 王藎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王藎 | accepted |
| bio.summary | 王藎，明人物。曾任都御史。（中国历代人物传记资料库 CBDB 467513） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王藎（CBDB 467513）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467513&o=json)
