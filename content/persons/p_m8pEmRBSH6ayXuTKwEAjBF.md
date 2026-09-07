---
schema: wang-person/v1
id: p_m8pEmRBSH6ayXuTKwEAjBF
status: active
merged_into: null
display_name: 王惟真
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9jDW4x7P2VoxzeuPhmLSHL
        subject_person_id: p_m8pEmRBSH6ayXuTKwEAjBF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟真，明人物。中国历代人物传记资料库（CBDB）以人物编号 240858 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_vYMtpj6hwqrceZ7L6QTiyt
          claim_id: c_9jDW4x7P2VoxzeuPhmLSHL
          source_id: s_7UCYwv12hL8uoTS1hCGekt
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_7UCYwv12hL8uoTS1hCGekt
            source_type: api_record
            title: 维基数据：王惟真（Q45459375）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45459375
            external_identifier: Q45459375
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:38.809Z
            metadata_json: null
        - id: cs_ooLPETtcFsVm4mcnP7PpO5
          claim_id: c_9jDW4x7P2VoxzeuPhmLSHL
          source_id: s_JWt2Et9S3FX1mKPHVPZw8A
          stance: supports
          locator: CBDB:240858
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_JWt2Et9S3FX1mKPHVPZw8A
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王惟真（240858）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240858&o=json
            external_identifier: CBDB:240858
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:38.991Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tkZHKEUr3uQh5Bx11MaGUN
        subject_person_id: p_m8pEmRBSH6ayXuTKwEAjBF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟真
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_WdvQfgVd6ecsbvR9aKLEpq
          claim_id: c_tkZHKEUr3uQh5Bx11MaGUN
          source_id: s_7UCYwv12hL8uoTS1hCGekt
          stance: supports
          locator: Q45459375
          quotation: null
          interpretation_note: null
          source:
            id: s_7UCYwv12hL8uoTS1hCGekt
            source_type: api_record
            title: 维基数据：王惟真（Q45459375）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45459375
            external_identifier: Q45459375
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:38.809Z
            metadata_json: null
        - id: cs_zQq8GuEAq2WWPyuyJvxaqe
          claim_id: c_tkZHKEUr3uQh5Bx11MaGUN
          source_id: s_JWt2Et9S3FX1mKPHVPZw8A
          stance: supports
          locator: Q45459375
          quotation: null
          interpretation_note: null
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

# 王惟真

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王惟真，明人物。中国历代人物传记资料库（CBDB）以人物编号 240858 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王惟真 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王惟真（Q45459375）](https://www.wikidata.org/wiki/Q45459375)
- [CBDB 中国历代人物传记资料库：王惟真（240858）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240858&o=json)
