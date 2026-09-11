---
schema: wang-person/v1
id: p_HTbqz7J23NJU368JQY3gky
status: active
merged_into: null
display_name: 王作聖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DF2oMkt6pQ9q7ZQKi6eATQ
        subject_person_id: p_HTbqz7J23NJU368JQY3gky
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王作聖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1y95GghTt2RUmCGXKXgjzU
          claim_id: c_DF2oMkt6pQ9q7ZQKi6eATQ
          source_id: s_iR24Ac7BWon4JNrsa8bgny
          stance: supports
          locator: CBDB:636007
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636007）
          source: &a1
            id: s_iR24Ac7BWon4JNrsa8bgny
            source_type: api_record
            title: 中国历代人物传记资料库：王作聖（CBDB 636007）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636007&o=json
            external_identifier: CBDB:636007
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.070Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3BQsW9H8WV2VqCPJ1nQeZY
        subject_person_id: p_HTbqz7J23NJU368JQY3gky
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王作聖，清人物。籍贯永壽，曾任教諭。（中国历代人物传记资料库 CBDB 636007）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UowlxpI0EeP-na3YwEHgys
          claim_id: c_3BQsW9H8WV2VqCPJ1nQeZY
          source_id: s_iR24Ac7BWon4JNrsa8bgny
          stance: supports
          locator: CBDB:636007
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

# 王作聖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王作聖 | accepted |
| bio.summary | 王作聖，清人物。籍贯永壽，曾任教諭。（中国历代人物传记资料库 CBDB 636007） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王作聖（CBDB 636007）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636007&o=json)
