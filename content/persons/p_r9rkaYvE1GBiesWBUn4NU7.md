---
schema: wang-person/v1
id: p_r9rkaYvE1GBiesWBUn4NU7
status: active
merged_into: null
display_name: 王諴
cbdb_id: 513598
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pei8omRuLQMQBD6H93pW9F
        subject_person_id: p_r9rkaYvE1GBiesWBUn4NU7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諴，清人物。中国历代人物传记资料库（CBDB）以人物编号 513598 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_dQUc28df7WoVbj3pU3muu2
          claim_id: c_pei8omRuLQMQBD6H93pW9F
          source_id: s_XztqkzWwKQMrJ3aAba74iS
          stance: supports
          locator: CBDB:513598
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_XztqkzWwKQMrJ3aAba74iS
            source_type: api_record
            title: 中国历代人物传记资料库：王諴（CBDB 513598）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513598&o=json
            external_identifier: CBDB:513598
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:15.776Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_zncVbF9e9uPVojV4fcC57M
        subject_person_id: p_r9rkaYvE1GBiesWBUn4NU7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王諴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_su5ECkw1f9Fj5dDFCDQgGL
          claim_id: c_zncVbF9e9uPVojV4fcC57M
          source_id: s_XztqkzWwKQMrJ3aAba74iS
          stance: supports
          locator: CBDB:513598
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6801-6900）｜历史性依据：CBDB 朝代 = 清
          source:
            id: s_XztqkzWwKQMrJ3aAba74iS
            source_type: api_record
            title: 中国历代人物传记资料库：王諴（CBDB 513598）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513598&o=json
            external_identifier: CBDB:513598
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:15.776Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zhv4e_C17eVlJ8guS0jNG3
        subject_person_id: p_YJJh3vK9C6L5dnHbABAr2E
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_r9rkaYvE1GBiesWBUn4NU7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K4RYBvM1raUj_-dIWev_eK
          claim_id: c_zhv4e_C17eVlJ8guS0jNG3
          source_id: s_XztqkzWwKQMrJ3aAba74iS
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），77：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YJJh3vK9C6L5dnHbABAr2E
        status: active
        display_name: 王蘭生
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王諴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王諴，清人物。中国历代人物传记资料库（CBDB）以人物编号 513598 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王諴 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YJJh3vK9C6L5dnHbABAr2E | 王蘭生 | accepted |

## 外部来源

- [中国历代人物传记资料库：王諴（CBDB 513598）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=513598&o=json)
