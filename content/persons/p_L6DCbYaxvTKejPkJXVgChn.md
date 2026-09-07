---
schema: wang-person/v1
id: p_L6DCbYaxvTKejPkJXVgChn
status: active
merged_into: null
display_name: 王升
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_846PaeBRbnBmN786Y3293x
        subject_person_id: p_L6DCbYaxvTKejPkJXVgChn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王升，明人物。中国历代人物传记资料库（CBDB）以人物编号 246749 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_SnciPHp2AGcqTN3y3Vq39p
          claim_id: c_846PaeBRbnBmN786Y3293x
          source_id: s_KM9WYhfJLbb5kUWzQPKTz3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_KM9WYhfJLbb5kUWzQPKTz3
            source_type: api_record
            title: 维基数据：王升（Q45484201）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45484201
            external_identifier: Q45484201
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:57.484Z
            metadata_json: null
        - id: cs_wL-2wI96cJl0UOmx-dvf0H
          claim_id: c_846PaeBRbnBmN786Y3293x
          source_id: s_vYGKv5e2x1htavkJLyVnKL
          stance: supports
          locator: CBDB:246749
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_vYGKv5e2x1htavkJLyVnKL
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王昇（246749）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246749&o=json
            external_identifier: CBDB:246749
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:57.640Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_p6MCAP375MQF4qztDFBkBN
        subject_person_id: p_L6DCbYaxvTKejPkJXVgChn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王升
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3JSYCNUbVo7VQRg4xHm4Jt
          claim_id: c_p6MCAP375MQF4qztDFBkBN
          source_id: s_vYGKv5e2x1htavkJLyVnKL
          stance: supports
          locator: Q45484201
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_KiWoFunUFMBNtNjPuQNcHN
          claim_id: c_p6MCAP375MQF4qztDFBkBN
          source_id: s_KM9WYhfJLbb5kUWzQPKTz3
          stance: supports
          locator: Q45484201
          quotation: null
          interpretation_note: null
          source:
            id: s_KM9WYhfJLbb5kUWzQPKTz3
            source_type: api_record
            title: 维基数据：王升（Q45484201）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45484201
            external_identifier: Q45484201
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:57.484Z
            metadata_json: null
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

# 王升

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王升，明人物。中国历代人物传记资料库（CBDB）以人物编号 246749 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王升 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王升（Q45484201）](https://www.wikidata.org/wiki/Q45484201)
- [CBDB 中国历代人物传记资料库：王昇（246749）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246749&o=json)
