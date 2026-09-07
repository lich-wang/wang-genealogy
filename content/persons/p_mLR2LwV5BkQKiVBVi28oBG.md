---
schema: wang-person/v1
id: p_mLR2LwV5BkQKiVBVi28oBG
status: active
merged_into: null
display_name: 王缙
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Fb7jLVgcUB38uxkrpTYNvF
        subject_person_id: p_mLR2LwV5BkQKiVBVi28oBG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王缙（卒于780年），唐人物。CBDB 记录其曾任太子詹事、州刺史。中国历代人物传记资料库（CBDB）以人物编号 184938 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_yU5D3PR6aQEbfADWEvvZPd
          claim_id: c_Fb7jLVgcUB38uxkrpTYNvF
          source_id: s_5qmAs78nS9KmbmEN8TQgud
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_5qmAs78nS9KmbmEN8TQgud
            source_type: api_record
            title: 维基数据：王缙（Q45603209）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45603209
            external_identifier: Q45603209
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:40.541Z
            metadata_json: null
        - id: cs_6s9H7QZwHwf1CBfhaBQxxL
          claim_id: c_Fb7jLVgcUB38uxkrpTYNvF
          source_id: s_RPpZiHDWSHwgmepChP8AMg
          stance: supports
          locator: CBDB:184938
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_RPpZiHDWSHwgmepChP8AMg
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王縉（184938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184938&o=json
            external_identifier: CBDB:184938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:40.685Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_b2UmGP5fh4cNzXt5gu3hhw
        subject_person_id: p_mLR2LwV5BkQKiVBVi28oBG
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 780年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0780-01-01
            latest: 0780-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DgJvzyFrZV4tZYye1wxSqv
          claim_id: c_b2UmGP5fh4cNzXt5gu3hhw
          source_id: s_5qmAs78nS9KmbmEN8TQgud
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_5qmAs78nS9KmbmEN8TQgud
            source_type: api_record
            title: 维基数据：王缙（Q45603209）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45603209
            external_identifier: Q45603209
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:40.541Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_NUuEZBKEZBcHhYukw9kfHq
        subject_person_id: p_mLR2LwV5BkQKiVBVi28oBG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王缙
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_68dY8pEntZKMTBrLR9cQX3
          claim_id: c_NUuEZBKEZBcHhYukw9kfHq
          source_id: s_5qmAs78nS9KmbmEN8TQgud
          stance: supports
          locator: Q45603209
          quotation: null
          interpretation_note: null
          source:
            id: s_5qmAs78nS9KmbmEN8TQgud
            source_type: api_record
            title: 维基数据：王缙（Q45603209）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45603209
            external_identifier: Q45603209
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:40.541Z
            metadata_json: null
        - id: cs_f5yQ83BuxDq5jYdBH8mvHy
          claim_id: c_NUuEZBKEZBcHhYukw9kfHq
          source_id: s_RPpZiHDWSHwgmepChP8AMg
          stance: supports
          locator: Q45603209
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

# 王缙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王缙（卒于780年），唐人物。CBDB 记录其曾任太子詹事、州刺史。中国历代人物传记资料库（CBDB）以人物编号 184938 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 780年 | accepted |
| name.primary | 王缙 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王缙（Q45603209）](https://www.wikidata.org/wiki/Q45603209)
- [CBDB 中国历代人物传记资料库：王縉（184938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=184938&o=json)
