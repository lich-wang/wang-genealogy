---
schema: wang-person/v1
id: p_1AythoREbDbJi54YNX5Fzu
status: active
merged_into: null
display_name: 王稚
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AabZsFuRAAyzMxx1k5hP34
        subject_person_id: p_1AythoREbDbJi54YNX5Fzu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稚，明人物。CBDB 记录其籍贯记录为義烏，曾任知縣。中国历代人物传记资料库（CBDB）以人物编号 437667 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_ftmaWCs8FuQdWfr7E84qNk
          claim_id: c_AabZsFuRAAyzMxx1k5hP34
          source_id: s_6BVAHnW6BcUppeWzVRPp9r
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_6BVAHnW6BcUppeWzVRPp9r
            source_type: api_record
            title: 维基数据：王稚（Q65903525）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65903525
            external_identifier: Q65903525
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:09.724Z
            metadata_json: null
        - id: cs_6_VbW3V5IKOqMmRJOsbgGd
          claim_id: c_AabZsFuRAAyzMxx1k5hP34
          source_id: s_PrqmfhgL7ebigEQLi1Ja6T
          stance: supports
          locator: CBDB:437667
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_PrqmfhgL7ebigEQLi1Ja6T
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王稚（437667）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437667&o=json
            external_identifier: CBDB:437667
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:09.909Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_v2kwFW8s4XhZsfu5GrBQpL
        subject_person_id: p_1AythoREbDbJi54YNX5Fzu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王稚
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_aMkcsPqMqHZejtwo7Kzuct
          claim_id: c_v2kwFW8s4XhZsfu5GrBQpL
          source_id: s_PrqmfhgL7ebigEQLi1Ja6T
          stance: supports
          locator: Q65903525
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_hy9aHKPzFX36UMPHDQYppN
          claim_id: c_v2kwFW8s4XhZsfu5GrBQpL
          source_id: s_6BVAHnW6BcUppeWzVRPp9r
          stance: supports
          locator: Q65903525
          quotation: null
          interpretation_note: null
          source:
            id: s_6BVAHnW6BcUppeWzVRPp9r
            source_type: api_record
            title: 维基数据：王稚（Q65903525）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65903525
            external_identifier: Q65903525
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

# 王稚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王稚，明人物。CBDB 记录其籍贯记录为義烏，曾任知縣。中国历代人物传记资料库（CBDB）以人物编号 437667 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王稚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [维基数据：王稚（Q65903525）](https://www.wikidata.org/wiki/Q65903525)
- [CBDB 中国历代人物传记资料库：王稚（437667）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437667&o=json)
