---
schema: wang-person/v1
id: p_vxysH4B8xpbAGBTVKY3Dh2
status: active
merged_into: null
display_name: 王原道
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LWHxvKNvnR4hbabmJpYxKi
        subject_person_id: p_vxysH4B8xpbAGBTVKY3Dh2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王原道，明人物。中国历代人物传记资料库（CBDB）以人物编号 333144 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_tv1q3zFRFHNBrv8deLgP2q
          claim_id: c_LWHxvKNvnR4hbabmJpYxKi
          source_id: s_FjWPqUA5b5EfEwFHzckW5s
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_FjWPqUA5b5EfEwFHzckW5s
            source_type: api_record
            title: 维基数据：王原道（Q45560451）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45560451
            external_identifier: Q45560451
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:58.883Z
            metadata_json: null
        - id: cs_GG_ZYmmdZCSy8-FygOBJqR
          claim_id: c_LWHxvKNvnR4hbabmJpYxKi
          source_id: s_7fxnVGQ4K4t5Q65SgmoGKa
          stance: supports
          locator: CBDB:333144
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7fxnVGQ4K4t5Q65SgmoGKa
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王原道（333144）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333144&o=json
            external_identifier: CBDB:333144
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:59.060Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CZS2d1ta785jcv2BS9n2Mp
        subject_person_id: p_vxysH4B8xpbAGBTVKY3Dh2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王原道
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Az76jhikuA2KoXqPhSMZ45
          claim_id: c_CZS2d1ta785jcv2BS9n2Mp
          source_id: s_FjWPqUA5b5EfEwFHzckW5s
          stance: supports
          locator: Q45560451
          quotation: null
          interpretation_note: null
          source:
            id: s_FjWPqUA5b5EfEwFHzckW5s
            source_type: api_record
            title: 维基数据：王原道（Q45560451）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45560451
            external_identifier: Q45560451
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:58.883Z
            metadata_json: null
        - id: cs_HRCEHPBUMEseDji866fEPF
          claim_id: c_CZS2d1ta785jcv2BS9n2Mp
          source_id: s_7fxnVGQ4K4t5Q65SgmoGKa
          stance: supports
          locator: Q45560451
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

# 王原道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王原道，明人物。中国历代人物传记资料库（CBDB）以人物编号 333144 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王原道 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王原道（Q45560451）](https://www.wikidata.org/wiki/Q45560451)
- [CBDB 中国历代人物传记资料库：王原道（333144）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333144&o=json)
