---
schema: wang-person/v1
id: p_1N6xv9M4BsN9VGrAgKCpoh
status: active
merged_into: null
display_name: 王某
cbdb_id: 190103
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Dtc88i3mkLaAarcK9ASiTJ
        subject_person_id: p_1N6xv9M4BsN9VGrAgKCpoh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王某（卒于810年），唐人物。CBDB 记录其籍贯记录为河南府。中国历代人物传记资料库（CBDB）以人物编号 190103 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_fwLUEkVEhK6K7tWdJd3CHd
          claim_id: c_Dtc88i3mkLaAarcK9ASiTJ
          source_id: s_YAFebhncBhZ8NameaQ8RjH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_YAFebhncBhZ8NameaQ8RjH
            source_type: api_record
            title: 维基数据：王某（Q45587690）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45587690
            external_identifier: Q45587690
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:00.338Z
            metadata_json: null
        - id: cs_7YKq6z_kO0wm3yWI7zYM4u
          claim_id: c_Dtc88i3mkLaAarcK9ASiTJ
          source_id: s_qyWEovv5aDqd14yq7yKHn6
          stance: supports
          locator: CBDB:190103
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_qyWEovv5aDqd14yq7yKHn6
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王某（190103）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190103&o=json
            external_identifier: CBDB:190103
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:00.582Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_2XLahY7UBsh8nMKKHbDpRr
        subject_person_id: p_1N6xv9M4BsN9VGrAgKCpoh
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 810年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0810-01-01
            latest: 0810-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AtFaZ9eECgVXe8iioYHNMw
          claim_id: c_2XLahY7UBsh8nMKKHbDpRr
          source_id: s_YAFebhncBhZ8NameaQ8RjH
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_YAFebhncBhZ8NameaQ8RjH
            source_type: api_record
            title: 维基数据：王某（Q45587690）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45587690
            external_identifier: Q45587690
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:00.338Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_AJdoqUsiPx3NceST6s2qn9
        subject_person_id: p_1N6xv9M4BsN9VGrAgKCpoh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王某
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NB8AJgi1GujsP27K67WpQh
          claim_id: c_AJdoqUsiPx3NceST6s2qn9
          source_id: s_YAFebhncBhZ8NameaQ8RjH
          stance: supports
          locator: Q45587690
          quotation: null
          interpretation_note: null
          source:
            id: s_YAFebhncBhZ8NameaQ8RjH
            source_type: api_record
            title: 维基数据：王某（Q45587690）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45587690
            external_identifier: Q45587690
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:00.338Z
            metadata_json: null
        - id: cs_b2L2jHb5XGZ5BCd4nMpbZC
          claim_id: c_AJdoqUsiPx3NceST6s2qn9
          source_id: s_qyWEovv5aDqd14yq7yKHn6
          stance: supports
          locator: Q45587690
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_G8nJ2KXx6BW2muG95gGDkk
        subject_person_id: p_c8C8PQBtyD8TinfV8tVU4U
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1N6xv9M4BsN9VGrAgKCpoh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aYq5ang9w8HLtQTsx2PLh6
          claim_id: c_G8nJ2KXx6BW2muG95gGDkk
          source_id: s_YAFebhncBhZ8NameaQ8RjH
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_zgNEy9FvXJCtavJ8obD9kL
          claim_id: c_G8nJ2KXx6BW2muG95gGDkk
          source_id: s_wjVLxMLRqXwKjCian14tbq
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_wjVLxMLRqXwKjCian14tbq
            source_type: api_record
            title: 维基数据：王澄（Q45685584）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45685584
            external_identifier: Q45685584
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:53.553Z
            metadata_json: null
      object_person:
        id: p_c8C8PQBtyD8TinfV8tVU4U
        status: active
        display_name: 王澄
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王某

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王某（卒于810年），唐人物。CBDB 记录其籍贯记录为河南府。中国历代人物传记资料库（CBDB）以人物编号 190103 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 810年 | accepted |
| name.primary | 王某 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_c8C8PQBtyD8TinfV8tVU4U | 王澄 | accepted |

## 外部来源

- [维基数据：王澄（Q45685584）](https://www.wikidata.org/wiki/Q45685584)
- [维基数据：王某（Q45587690）](https://www.wikidata.org/wiki/Q45587690)
- [CBDB 中国历代人物传记资料库：王某（190103）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190103&o=json)
