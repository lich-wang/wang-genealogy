---
schema: wang-person/v1
id: p_JCEBfgJS1yGTY2zVnJtCeE
status: active
merged_into: null
display_name: 王玉生
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eMDQb26Za8npHEJFp2B9WG
        subject_person_id: p_JCEBfgJS1yGTY2zVnJtCeE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉生
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tTHVcbqL5x2tmTGPje6tQh
          claim_id: c_eMDQb26Za8npHEJFp2B9WG
          source_id: s_y2BdvLnL45LyWch4r3aN5E
          stance: supports
          locator: CBDB:555076
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（555076）
          source: &a1
            id: s_y2BdvLnL45LyWch4r3aN5E
            source_type: api_record
            title: 中国历代人物传记资料库：王玉生（CBDB 555076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555076&o=json
            external_identifier: CBDB:555076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.517Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zhjy3ENJwQBwCC9i6Cqfez
        subject_person_id: p_JCEBfgJS1yGTY2zVnJtCeE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玉生，清人物。籍贯南召。（中国历代人物传记资料库 CBDB 555076）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TX7hpI9d8hZUszXQHetRid
          claim_id: c_zhjy3ENJwQBwCC9i6Cqfez
          source_id: s_y2BdvLnL45LyWch4r3aN5E
          stance: supports
          locator: CBDB:555076
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

# 王玉生

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玉生 | accepted |
| bio.summary | 王玉生，清人物。籍贯南召。（中国历代人物传记资料库 CBDB 555076） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玉生（CBDB 555076）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555076&o=json)
