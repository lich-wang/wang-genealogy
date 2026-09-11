---
schema: wang-person/v1
id: p_ZCfGVDKighqeDmYkscbvFX
status: active
merged_into: null
display_name: 王汝中
cbdb_id: 525981
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pbvAfWqHMRwRWfRBy7dYw1
        subject_person_id: p_ZCfGVDKighqeDmYkscbvFX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝中，明人物。中国历代人物传记资料库（CBDB）以人物编号 525981 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_DGRiB5kSlr87Y32cwBTSSG
          claim_id: c_pbvAfWqHMRwRWfRBy7dYw1
          source_id: s_BEaq6aGNxJUY4Tf74jamZG
          stance: supports
          locator: CBDB:525981
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_BEaq6aGNxJUY4Tf74jamZG
            source_type: api_record
            title: 中国历代人物传记资料库：王汝中（CBDB 525981）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525981&o=json
            external_identifier: CBDB:525981
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GTMC9MoWQXnP4ajgXuaQ3n
        subject_person_id: p_ZCfGVDKighqeDmYkscbvFX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_tVYZkesd7Mgg9V8Czv9sr8
          claim_id: c_GTMC9MoWQXnP4ajgXuaQ3n
          source_id: s_BEaq6aGNxJUY4Tf74jamZG
          stance: supports
          locator: CBDB:525981
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7001-7100）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_BEaq6aGNxJUY4Tf74jamZG
            source_type: api_record
            title: 中国历代人物传记资料库：王汝中（CBDB 525981）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525981&o=json
            external_identifier: CBDB:525981
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_E0tAvWkRgyDv9HVVwcDXdU
        subject_person_id: p_4wJCgbadTAePpZ2BNEDAoG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZCfGVDKighqeDmYkscbvFX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UJadP5G0UkErCTgDCdDeGx
          claim_id: c_E0tAvWkRgyDv9HVVwcDXdU
          source_id: s_j9QtHgAMFKQAVkqGX1LKYM
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），11899：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_j9QtHgAMFKQAVkqGX1LKYM
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 68238）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68238&o=json
            external_identifier: CBDB:68238
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.060Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4wJCgbadTAePpZ2BNEDAoG
        status: active
        display_name: 王憲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王汝中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王汝中，明人物。中国历代人物传记资料库（CBDB）以人物编号 525981 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王汝中 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4wJCgbadTAePpZ2BNEDAoG | 王憲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝中（CBDB 525981）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525981&o=json)
- [中国历代人物传记资料库：王憲（CBDB 68238）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68238&o=json)
