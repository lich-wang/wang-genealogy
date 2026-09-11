---
schema: wang-person/v1
id: p_CrzPztwB18UHoJserX9fwo
status: active
merged_into: null
display_name: 王禾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qMrf6n5jRP2jnEoqcFHtoX
        subject_person_id: p_CrzPztwB18UHoJserX9fwo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2dFSaFNKnzFQQbP3fgi7XE
          claim_id: c_qMrf6n5jRP2jnEoqcFHtoX
          source_id: s_R3jzTg3du1DHgiVo4vEBYQ
          stance: supports
          locator: CBDB:543275
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（543275）
          source: &a1
            id: s_R3jzTg3du1DHgiVo4vEBYQ
            source_type: api_record
            title: 中国历代人物传记资料库：王禾（CBDB 543275）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=543275&o=json
            external_identifier: CBDB:543275
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.481Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zM3JwsCN1Tf7eDLT23NBsM
        subject_person_id: p_CrzPztwB18UHoJserX9fwo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禾，宋人物。籍贯宜章，入仕進士。（中国历代人物传记资料库 CBDB 543275）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Q7H1t5JQQKKAzIXaO0LWKD
          claim_id: c_zM3JwsCN1Tf7eDLT23NBsM
          source_id: s_R3jzTg3du1DHgiVo4vEBYQ
          stance: supports
          locator: CBDB:543275
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

# 王禾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禾 | accepted |
| bio.summary | 王禾，宋人物。籍贯宜章，入仕進士。（中国历代人物传记资料库 CBDB 543275） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王禾（CBDB 543275）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=543275&o=json)
