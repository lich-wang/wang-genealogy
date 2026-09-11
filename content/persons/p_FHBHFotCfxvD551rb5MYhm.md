---
schema: wang-person/v1
id: p_FHBHFotCfxvD551rb5MYhm
status: active
merged_into: null
display_name: 王國棟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uMfGYwogoNgYQ31vQtRT6j
        subject_person_id: p_FHBHFotCfxvD551rb5MYhm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國棟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_w1K2dPzUs6PCqYrDDaNtho
          claim_id: c_uMfGYwogoNgYQ31vQtRT6j
          source_id: s_iRWZxuonCBXzxYL4XiZRK4
          stance: supports
          locator: CBDB:57172
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（57172）
          source: &a1
            id: s_iRWZxuonCBXzxYL4XiZRK4
            source_type: api_record
            title: 中国历代人物传记资料库：王國棟（CBDB 57172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57172&o=json
            external_identifier: CBDB:57172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.795Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_QMaMEnPS9PBjrDQARGxsKe
        subject_person_id: p_FHBHFotCfxvD551rb5MYhm
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1681年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Znj8T48n2s9anJP65Mj28U
          claim_id: c_QMaMEnPS9PBjrDQARGxsKe
          source_id: s_iRWZxuonCBXzxYL4XiZRK4
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
        id: c_vZvfMwQAv4FLzBCP7qi9E5
        subject_person_id: p_FHBHFotCfxvD551rb5MYhm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國棟（卒于1681年），清人物。曾任副將軍、副將、總兵官。（中国历代人物传记资料库 CBDB 57172）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rNcQAKgi4tjwSOQKrbc7IE
          claim_id: c_vZvfMwQAv4FLzBCP7qi9E5
          source_id: s_iRWZxuonCBXzxYL4XiZRK4
          stance: supports
          locator: CBDB:57172
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

# 王國棟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國棟 | accepted |
| death.date | 1681年 | accepted |
| bio.summary | 王國棟（卒于1681年），清人物。曾任副將軍、副將、總兵官。（中国历代人物传记资料库 CBDB 57172） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王國棟（CBDB 57172）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57172&o=json)
