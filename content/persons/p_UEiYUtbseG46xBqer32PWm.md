---
schema: wang-person/v1
id: p_UEiYUtbseG46xBqer32PWm
status: active
merged_into: null
display_name: 王桐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KqhnLqpmpD71B32AvZi2kB
        subject_person_id: p_UEiYUtbseG46xBqer32PWm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UDgyrYTH8ZQn3Xfu2f97yC
          claim_id: c_KqhnLqpmpD71B32AvZi2kB
          source_id: s_1vM1apBkuNc3TT3mAMdXYo
          stance: supports
          locator: CBDB:510804
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（510804）
          source: &a1
            id: s_1vM1apBkuNc3TT3mAMdXYo
            source_type: api_record
            title: 中国历代人物传记资料库：王桐（CBDB 510804）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510804&o=json
            external_identifier: CBDB:510804
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.259Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GKEHwRCJH891zGBc6RaDa8
        subject_person_id: p_UEiYUtbseG46xBqer32PWm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桐，清人物。入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 510804）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FI0BSNuIq_mMiZ6y8eIXLS
          claim_id: c_GKEHwRCJH891zGBc6RaDa8
          source_id: s_1vM1apBkuNc3TT3mAMdXYo
          stance: supports
          locator: CBDB:510804
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

# 王桐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王桐 | accepted |
| bio.summary | 王桐，清人物。入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 510804） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王桐（CBDB 510804）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510804&o=json)
