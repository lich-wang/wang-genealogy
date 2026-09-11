---
schema: wang-person/v1
id: p_5kHWtHG41N7FxgK4Dffrc3
status: active
merged_into: null
display_name: 王逈
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_juprr1UUoj3pgNJ14eyP3G
        subject_person_id: p_5kHWtHG41N7FxgK4Dffrc3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gtnNa5uPzXKyMKT7gHgCVK
          claim_id: c_juprr1UUoj3pgNJ14eyP3G
          source_id: s_iDLP9kwstSDn23CpsKbxXL
          stance: supports
          locator: CBDB:276423
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（276423）
          source: &a1
            id: s_iDLP9kwstSDn23CpsKbxXL
            source_type: api_record
            title: 中国历代人物传记资料库：王逈（CBDB 276423）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276423&o=json
            external_identifier: CBDB:276423
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.941Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nMLjBboPvJ1Z3gbeYnkMxr
        subject_person_id: p_5kHWtHG41N7FxgK4Dffrc3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王逈，明人物。正德六年進士，籍贯武城。（中国历代人物传记资料库 CBDB 276423）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_m8DW7na2JKi-Fm7U9XEvmp
          claim_id: c_nMLjBboPvJ1Z3gbeYnkMxr
          source_id: s_iDLP9kwstSDn23CpsKbxXL
          stance: supports
          locator: CBDB:276423
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

# 王逈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王逈 | accepted |
| bio.summary | 王逈，明人物。正德六年進士，籍贯武城。（中国历代人物传记资料库 CBDB 276423） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王逈（CBDB 276423）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276423&o=json)
