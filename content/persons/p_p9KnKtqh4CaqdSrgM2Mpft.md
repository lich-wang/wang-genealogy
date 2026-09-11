---
schema: wang-person/v1
id: p_p9KnKtqh4CaqdSrgM2Mpft
status: active
merged_into: null
display_name: 王池
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GqoH2svu8EvCKpBsxQb4xR
        subject_person_id: p_p9KnKtqh4CaqdSrgM2Mpft
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王池
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HaKvrKSBaEcHXMSwPMxK12
          claim_id: c_GqoH2svu8EvCKpBsxQb4xR
          source_id: s_8W3LPRhnNh9ath3NKsrUvF
          stance: supports
          locator: CBDB:639042
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639042）
          source: &a1
            id: s_8W3LPRhnNh9ath3NKsrUvF
            source_type: api_record
            title: 中国历代人物传记资料库：王池（CBDB 639042）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639042&o=json
            external_identifier: CBDB:639042
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.821Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iuL4AsY1aFYF5EhM6M7AH6
        subject_person_id: p_p9KnKtqh4CaqdSrgM2Mpft
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王池，清人物。籍贯保定，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 639042）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jRUPKpMT3urzizIDUBFMfz
          claim_id: c_iuL4AsY1aFYF5EhM6M7AH6
          source_id: s_8W3LPRhnNh9ath3NKsrUvF
          stance: supports
          locator: CBDB:639042
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

# 王池

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王池 | accepted |
| bio.summary | 王池，清人物。籍贯保定，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 639042） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王池（CBDB 639042）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639042&o=json)
