---
schema: wang-person/v1
id: p_AKJK3cnSu6LxLkm37VsJHP
status: active
merged_into: null
display_name: 王兟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2SKS2CeHvkBJXTeTKrEYMK
        subject_person_id: p_AKJK3cnSu6LxLkm37VsJHP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_j41zMLyDsdPkkKEotEYkFj
          claim_id: c_2SKS2CeHvkBJXTeTKrEYMK
          source_id: s_6RMYKowebA1FffXJCG1Gxv
          stance: supports
          locator: CBDB:636312
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636312）
          source: &a1
            id: s_6RMYKowebA1FffXJCG1Gxv
            source_type: api_record
            title: 中国历代人物传记资料库：王兟（CBDB 636312）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636312&o=json
            external_identifier: CBDB:636312
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.948Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_icY8ANvgWar195rJzCTtpV
        subject_person_id: p_AKJK3cnSu6LxLkm37VsJHP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兟，清人物。籍贯錢塘，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636312）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_C1YdpKkcbJMqfIEfR68mDR
          claim_id: c_icY8ANvgWar195rJzCTtpV
          source_id: s_6RMYKowebA1FffXJCG1Gxv
          stance: supports
          locator: CBDB:636312
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

# 王兟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王兟 | accepted |
| bio.summary | 王兟，清人物。籍贯錢塘，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636312） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王兟（CBDB 636312）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636312&o=json)
