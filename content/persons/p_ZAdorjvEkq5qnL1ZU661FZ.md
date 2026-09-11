---
schema: wang-person/v1
id: p_ZAdorjvEkq5qnL1ZU661FZ
status: active
merged_into: null
display_name: 王文鍏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3doKon8JTzLwyGLReAaFup
        subject_person_id: p_ZAdorjvEkq5qnL1ZU661FZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文鍏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dxSadC7xpfWAXroFTmXPB3
          claim_id: c_3doKon8JTzLwyGLReAaFup
          source_id: s_ZcVJnJs1VsVWYtLdRetKHD
          stance: supports
          locator: CBDB:638291
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638291）
          source: &a1
            id: s_ZcVJnJs1VsVWYtLdRetKHD
            source_type: api_record
            title: 中国历代人物传记资料库：王文鍏（CBDB 638291）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638291&o=json
            external_identifier: CBDB:638291
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.580Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JHB7RwBAD1XJsmcp5EvsA1
        subject_person_id: p_ZAdorjvEkq5qnL1ZU661FZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文鍏，清人物。籍贯延安府，曾任訓導。（中国历代人物传记资料库 CBDB 638291）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EdWXK429KjZDw-0mpZQe39
          claim_id: c_JHB7RwBAD1XJsmcp5EvsA1
          source_id: s_ZcVJnJs1VsVWYtLdRetKHD
          stance: supports
          locator: CBDB:638291
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

# 王文鍏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文鍏 | accepted |
| bio.summary | 王文鍏，清人物。籍贯延安府，曾任訓導。（中国历代人物传记资料库 CBDB 638291） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文鍏（CBDB 638291）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638291&o=json)
