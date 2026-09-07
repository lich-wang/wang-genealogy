---
schema: wang-person/v1
id: p_Jdra2pmbS6B6k7DYWxMEfe
status: active
merged_into: null
display_name: 王稔
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5f17aCx5JZxh1hrGUzh4tW
        subject_person_id: p_Jdra2pmbS6B6k7DYWxMEfe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稔，明人物。CBDB 记录其籍贯记录为義烏。中国历代人物传记资料库（CBDB）以人物编号 437666 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_Sj7T7ES9fAwsGXoKAgSgyg
          claim_id: c_5f17aCx5JZxh1hrGUzh4tW
          source_id: s_FqpUXshWv7mco37mErhgRu
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_FqpUXshWv7mco37mErhgRu
            source_type: api_record
            title: 维基数据：王稔（Q65903522）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65903522
            external_identifier: Q65903522
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:09.724Z
            metadata_json: null
        - id: cs__sGXaWXuQpo9lgyp6Rdp-x
          claim_id: c_5f17aCx5JZxh1hrGUzh4tW
          source_id: s_Jj75DHJNQz5q44Z5DdE8su
          stance: supports
          locator: CBDB:437666
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Jj75DHJNQz5q44Z5DdE8su
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王稔（437666）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437666&o=json
            external_identifier: CBDB:437666
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:09.910Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_t9yA2ra7jKueJuaAVAynxP
        subject_person_id: p_Jdra2pmbS6B6k7DYWxMEfe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稔
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Bx28dLZE6phJDdABHdym6D
          claim_id: c_t9yA2ra7jKueJuaAVAynxP
          source_id: s_Jj75DHJNQz5q44Z5DdE8su
          stance: supports
          locator: Q65903522
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_qUnHraH91m7dYETxv5VR5R
          claim_id: c_t9yA2ra7jKueJuaAVAynxP
          source_id: s_FqpUXshWv7mco37mErhgRu
          stance: supports
          locator: Q65903522
          quotation: null
          interpretation_note: null
          source:
            id: s_FqpUXshWv7mco37mErhgRu
            source_type: api_record
            title: 维基数据：王稔（Q65903522）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65903522
            external_identifier: Q65903522
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:09.724Z
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

# 王稔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王稔，明人物。CBDB 记录其籍贯记录为義烏。中国历代人物传记资料库（CBDB）以人物编号 437666 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王稔 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王稔（Q65903522）](https://www.wikidata.org/wiki/Q65903522)
- [CBDB 中国历代人物传记资料库：王稔（437666）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437666&o=json)
