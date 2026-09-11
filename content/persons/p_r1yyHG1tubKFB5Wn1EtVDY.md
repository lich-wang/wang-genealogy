---
schema: wang-person/v1
id: p_r1yyHG1tubKFB5Wn1EtVDY
status: active
merged_into: null
display_name: 王承鋆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xC1vQGWgKvBbd4rDuHcT24
        subject_person_id: p_r1yyHG1tubKFB5Wn1EtVDY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承鋆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_31ikxp9c7i9ReGJsYB7ADk
          claim_id: c_xC1vQGWgKvBbd4rDuHcT24
          source_id: s_u9UL6YNUB6z9Tg6GmttwZg
          stance: supports
          locator: CBDB:638107
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638107）
          source: &a1
            id: s_u9UL6YNUB6z9Tg6GmttwZg
            source_type: api_record
            title: 中国历代人物传记资料库：王承鋆（CBDB 638107）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638107&o=json
            external_identifier: CBDB:638107
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.526Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fuvjxWQ5M9mMqtvWr16GnX
        subject_person_id: p_r1yyHG1tubKFB5Wn1EtVDY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承鋆，清人物。籍贯黃陂，入仕鄉貢舉人，曾任知縣、知州。（中国历代人物传记资料库 CBDB 638107）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vk5ybWvE5mUN0BM6kui6L3
          claim_id: c_fuvjxWQ5M9mMqtvWr16GnX
          source_id: s_u9UL6YNUB6z9Tg6GmttwZg
          stance: supports
          locator: CBDB:638107
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

# 王承鋆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承鋆 | accepted |
| bio.summary | 王承鋆，清人物。籍贯黃陂，入仕鄉貢舉人，曾任知縣、知州。（中国历代人物传记资料库 CBDB 638107） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承鋆（CBDB 638107）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638107&o=json)
