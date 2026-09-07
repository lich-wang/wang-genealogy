---
schema: wang-person/v1
id: p_AKaTYUWNKCzouUxFhiCAGD
status: active
merged_into: null
display_name: 王铨
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_e9YEL4yCcjhbDc7bzZs5vd
        subject_person_id: p_AKaTYUWNKCzouUxFhiCAGD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王铨，明人物。CBDB 记录其籍贯记录为吳縣，入仕记录为貢生: 歲貢、常貢、挨貢，曾任府經歷。中国历代人物传记资料库（CBDB）以人物编号 34582 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_i2n2peGBSnkvBLE9Y314Bi
          claim_id: c_e9YEL4yCcjhbDc7bzZs5vd
          source_id: s_tvgt6REcBJS37AUDJweQn6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_tvgt6REcBJS37AUDJweQn6
            source_type: api_record
            title: 维基数据：王铨（Q45426337）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426337
            external_identifier: Q45426337
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:33.804Z
            metadata_json: null
        - id: cs_QgS-LSuyzwc5w11fMkmvlL
          claim_id: c_e9YEL4yCcjhbDc7bzZs5vd
          source_id: s_c6WZPVKkEr1nGLDhS7GC1D
          stance: supports
          locator: CBDB:34582
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_c6WZPVKkEr1nGLDhS7GC1D
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王銓（34582）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34582&o=json
            external_identifier: CBDB:34582
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:33.976Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_cXRpfs16NLPx5dd2wKHMrY
        subject_person_id: p_AKaTYUWNKCzouUxFhiCAGD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王铨
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9HnKgV4nDxwBKPTiHm4XXQ
          claim_id: c_cXRpfs16NLPx5dd2wKHMrY
          source_id: s_tvgt6REcBJS37AUDJweQn6
          stance: supports
          locator: Q45426337
          quotation: null
          interpretation_note: null
          source:
            id: s_tvgt6REcBJS37AUDJweQn6
            source_type: api_record
            title: 维基数据：王铨（Q45426337）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45426337
            external_identifier: Q45426337
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:33.804Z
            metadata_json: null
        - id: cs_9KZgRo2XXQKmPJrUxBVGo6
          claim_id: c_cXRpfs16NLPx5dd2wKHMrY
          source_id: s_c6WZPVKkEr1nGLDhS7GC1D
          stance: supports
          locator: Q45426337
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

# 王铨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王铨，明人物。CBDB 记录其籍贯记录为吳縣，入仕记录为貢生: 歲貢、常貢、挨貢，曾任府經歷。中国历代人物传记资料库（CBDB）以人物编号 34582 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王铨 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王铨（Q45426337）](https://www.wikidata.org/wiki/Q45426337)
- [CBDB 中国历代人物传记资料库：王銓（34582）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34582&o=json)
