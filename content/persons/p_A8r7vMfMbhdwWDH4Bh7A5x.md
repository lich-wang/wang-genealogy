---
schema: wang-person/v1
id: p_A8r7vMfMbhdwWDH4Bh7A5x
status: active
merged_into: null
display_name: 王仁宅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_viHs5N4a2XqJ4WrXVxb1i4
        subject_person_id: p_A8r7vMfMbhdwWDH4Bh7A5x
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁宅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Aypj1q4d6P9RFHhzuu6ifN
          claim_id: c_viHs5N4a2XqJ4WrXVxb1i4
          source_id: s_35T6gScP6dK4snXJQSRTNU
          stance: supports
          locator: CBDB:694128
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（694128）
          source: &a1
            id: s_35T6gScP6dK4snXJQSRTNU
            source_type: api_record
            title: 中国历代人物传记资料库：王仁宅（CBDB 694128）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694128&o=json
            external_identifier: CBDB:694128
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.515Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rT4d4VyZgYLDDURdTr5Kcv
        subject_person_id: p_A8r7vMfMbhdwWDH4Bh7A5x
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁宅，清人物。籍贯黟縣，身份为為善鄉里、商人，入仕監生。（中国历代人物传记资料库 CBDB 694128）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ftdWSKgcKdilogI9tcFVAi
          claim_id: c_rT4d4VyZgYLDDURdTr5Kcv
          source_id: s_35T6gScP6dK4snXJQSRTNU
          stance: supports
          locator: CBDB:694128
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

# 王仁宅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁宅 | accepted |
| bio.summary | 王仁宅，清人物。籍贯黟縣，身份为為善鄉里、商人，入仕監生。（中国历代人物传记资料库 CBDB 694128） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仁宅（CBDB 694128）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=694128&o=json)
