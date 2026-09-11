---
schema: wang-person/v1
id: p_gFzNJYLrCsGMzLrQTm2bAy
status: active
merged_into: null
display_name: 王開化
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Nrt89odMobdNjpx6RXG6dZ
        subject_person_id: p_gFzNJYLrCsGMzLrQTm2bAy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王開化
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9FXDGJCJ49i7qBeVAJHDBA
          claim_id: c_Nrt89odMobdNjpx6RXG6dZ
          source_id: s_Pm99XJzBsWKbhPgkuQ45Nw
          stance: supports
          locator: CBDB:69375
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69375）
          source: &a1
            id: s_Pm99XJzBsWKbhPgkuQ45Nw
            source_type: api_record
            title: 中国历代人物传记资料库：王開化（CBDB 69375）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69375&o=json
            external_identifier: CBDB:69375
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.113Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_adKH1gpV8qeogYsGiwhbi8
        subject_person_id: p_gFzNJYLrCsGMzLrQTm2bAy
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1861年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_neLZrjv61jKf6WsdjBF3qS
          claim_id: c_adKH1gpV8qeogYsGiwhbi8
          source_id: s_Pm99XJzBsWKbhPgkuQ45Nw
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DgpwuL8HMCHi1QBFALaxo7
        subject_person_id: p_gFzNJYLrCsGMzLrQTm2bAy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王開化（卒于1861年），清人物。籍贯湘鄉，入仕科舉制舉: 童子舉。（中国历代人物传记资料库 CBDB 69375）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_o5ghCzFPElgENmP99FZ5UO
          claim_id: c_DgpwuL8HMCHi1QBFALaxo7
          source_id: s_Pm99XJzBsWKbhPgkuQ45Nw
          stance: supports
          locator: CBDB:69375
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

# 王開化

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王開化 | accepted |
| death.date | 1861年 | accepted |
| bio.summary | 王開化（卒于1861年），清人物。籍贯湘鄉，入仕科舉制舉: 童子舉。（中国历代人物传记资料库 CBDB 69375） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王開化（CBDB 69375）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69375&o=json)
