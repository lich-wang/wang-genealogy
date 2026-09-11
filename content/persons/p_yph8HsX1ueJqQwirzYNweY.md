---
schema: wang-person/v1
id: p_yph8HsX1ueJqQwirzYNweY
status: active
merged_into: null
display_name: 王友仁
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LGuA36BXYzK73hH9U1Yks4
        subject_person_id: p_yph8HsX1ueJqQwirzYNweY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4aXRQSnhtzXhP87AU5HBK9
          claim_id: c_LGuA36BXYzK73hH9U1Yks4
          source_id: s_FrntjdGU65nZEQEaCV78Vq
          stance: supports
          locator: CBDB:101074
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101074）
          source: &a1
            id: s_FrntjdGU65nZEQEaCV78Vq
            source_type: api_record
            title: 中国历代人物传记资料库：王友仁（CBDB 101074）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101074&o=json
            external_identifier: CBDB:101074
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.672Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8CmH7HKhuB1ZaFmR58wQ8F
        subject_person_id: p_yph8HsX1ueJqQwirzYNweY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友仁，元人物。籍贯清江。（中国历代人物传记资料库 CBDB 101074）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yZNhK4mPWUa28pAzdU8aia
          claim_id: c_8CmH7HKhuB1ZaFmR58wQ8F
          source_id: s_FrntjdGU65nZEQEaCV78Vq
          stance: supports
          locator: CBDB:101074
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

# 王友仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王友仁 | accepted |
| bio.summary | 王友仁，元人物。籍贯清江。（中国历代人物传记资料库 CBDB 101074） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王友仁（CBDB 101074）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101074&o=json)
