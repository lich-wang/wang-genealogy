---
schema: wang-person/v1
id: p_nmksiEiPj8BciQGG5LZXMB
status: active
merged_into: null
display_name: 王理
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_12vnWK6Yj9biMMTkPB9aCU
        subject_person_id: p_nmksiEiPj8BciQGG5LZXMB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王理，明人物。CBDB 记录其曾任判官。中国历代人物传记资料库（CBDB）以人物编号 337964 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_1CQfJjVUDQsyKFvUyfxsEs
          claim_id: c_12vnWK6Yj9biMMTkPB9aCU
          source_id: s_pYzRbbN51bzA3eo9bup8B9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_pYzRbbN51bzA3eo9bup8B9
            source_type: api_record
            title: 维基数据：王理（Q45538785）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45538785
            external_identifier: Q45538785
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:58.883Z
            metadata_json: null
        - id: cs_cCz9r0gMffiIiXR80jXhLJ
          claim_id: c_12vnWK6Yj9biMMTkPB9aCU
          source_id: s_QzD9YgKQN9tnyqiz6zvP7V
          stance: supports
          locator: CBDB:337964
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_QzD9YgKQN9tnyqiz6zvP7V
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王理（337964）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337964&o=json
            external_identifier: CBDB:337964
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:59.054Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Zf2ky3uFk9K2nnovsYeyFT
        subject_person_id: p_nmksiEiPj8BciQGG5LZXMB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王理
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_jhNwWhQxuNKh8bGepKZ3fc
          claim_id: c_Zf2ky3uFk9K2nnovsYeyFT
          source_id: s_pYzRbbN51bzA3eo9bup8B9
          stance: supports
          locator: Q45538785
          quotation: null
          interpretation_note: null
          source:
            id: s_pYzRbbN51bzA3eo9bup8B9
            source_type: api_record
            title: 维基数据：王理（Q45538785）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45538785
            external_identifier: Q45538785
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:58.883Z
            metadata_json: null
        - id: cs_t65yM68zkoYiyVt55kMHr7
          claim_id: c_Zf2ky3uFk9K2nnovsYeyFT
          source_id: s_QzD9YgKQN9tnyqiz6zvP7V
          stance: supports
          locator: Q45538785
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

# 王理

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王理，明人物。CBDB 记录其曾任判官。中国历代人物传记资料库（CBDB）以人物编号 337964 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王理 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王理（Q45538785）](https://www.wikidata.org/wiki/Q45538785)
- [CBDB 中国历代人物传记资料库：王理（337964）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=337964&o=json)
