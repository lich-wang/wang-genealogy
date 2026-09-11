---
schema: wang-person/v1
id: p_6Rn3P6sCARfenYM6rpAuiR
status: active
merged_into: null
display_name: 王極
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tZz3d76rq6rZpRWLAN4m6p
        subject_person_id: p_6Rn3P6sCARfenYM6rpAuiR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王極
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F6y6vbgrjdttcuHLX6bMiy
          claim_id: c_tZz3d76rq6rZpRWLAN4m6p
          source_id: s_n6P9jTdBVpq5iLMMvPkyoB
          stance: supports
          locator: CBDB:550747
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（550747）
          source: &a1
            id: s_n6P9jTdBVpq5iLMMvPkyoB
            source_type: api_record
            title: 中国历代人物传记资料库：王極（CBDB 550747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550747&o=json
            external_identifier: CBDB:550747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.565Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BwmzPZCcCYBPGFhoJHoYDu
        subject_person_id: p_6Rn3P6sCARfenYM6rpAuiR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王極，宋人物。籍贯遂寧，曾任吏部侍郎。（中国历代人物传记资料库 CBDB 550747）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jZ9tTjZyBRyJJrkLC1A8gB
          claim_id: c_BwmzPZCcCYBPGFhoJHoYDu
          source_id: s_n6P9jTdBVpq5iLMMvPkyoB
          stance: supports
          locator: CBDB:550747
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

# 王極

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王極 | accepted |
| bio.summary | 王極，宋人物。籍贯遂寧，曾任吏部侍郎。（中国历代人物传记资料库 CBDB 550747） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王極（CBDB 550747）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550747&o=json)
