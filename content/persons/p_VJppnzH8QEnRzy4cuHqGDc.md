---
schema: wang-person/v1
id: p_VJppnzH8QEnRzy4cuHqGDc
status: active
merged_into: null
display_name: 王文亮
cbdb_id: 19904
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pwCuU5F6QFXwQMG2kSQGCX
        subject_person_id: p_VJppnzH8QEnRzy4cuHqGDc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文亮，吳越人物。中国历代人物传记资料库（CBDB）以人物编号 19904 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_1uQgBO1r4Fsm6FPwqSEHLd
          claim_id: c_pwCuU5F6QFXwQMG2kSQGCX
          source_id: s_AsEuxTodssftFsDx1PUFNd
          stance: supports
          locator: CBDB:19904
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_AsEuxTodssftFsDx1PUFNd
            source_type: api_record
            title: 中国历代人物传记资料库：王文亮（CBDB 19904）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19904&o=json
            external_identifier: CBDB:19904
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_zYV4MAxCcCfs5x6WrQDHfa
        subject_person_id: p_VJppnzH8QEnRzy4cuHqGDc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文亮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CDMiTJAEwkDhd6XGVQPUiB
          claim_id: c_zYV4MAxCcCfs5x6WrQDHfa
          source_id: s_AsEuxTodssftFsDx1PUFNd
          stance: supports
          locator: CBDB:19904
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 吳越
          source:
            id: s_AsEuxTodssftFsDx1PUFNd
            source_type: api_record
            title: 中国历代人物传记资料库：王文亮（CBDB 19904）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19904&o=json
            external_identifier: CBDB:19904
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ATMvgRpCjNbqVzWErhBT-s
        subject_person_id: p_3HbG7JXXtPKukrdr9i2R2p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VJppnzH8QEnRzy4cuHqGDc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_95xQlpQsEVPPGcjaEPbi1N
          claim_id: c_ATMvgRpCjNbqVzWErhBT-s
          source_id: s_8EZKKN6B3ewFrNACM4tGBs
          stance: supports
          locator: CBDB 双向互证（子 王文亮 ⇄ 父 王韶）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_8EZKKN6B3ewFrNACM4tGBs
            source_type: api_record
            title: 中国历代人物传记资料库：王韶（CBDB 19903）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19903&o=json
            external_identifier: CBDB:19903
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.754Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3HbG7JXXtPKukrdr9i2R2p
        status: active
        display_name: 王韶
        merged_into_person_id: null
  children:
    - claim:
        id: c_S60TAavPGl7H4DApsDVKVV
        subject_person_id: p_VJppnzH8QEnRzy4cuHqGDc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BiNVgvYz3nJ9G3CCb78YaH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4gneAVh7FEvjLH71QaLpFR
          claim_id: c_S60TAavPGl7H4DApsDVKVV
          source_id: s_EJcpUPACuG7TChvvw4mLdp
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1408：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EJcpUPACuG7TChvvw4mLdp
            source_type: api_record
            title: 中国历代人物传记资料库：王周（CBDB 19905）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19905&o=json
            external_identifier: CBDB:19905
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.754Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BiNVgvYz3nJ9G3CCb78YaH
        status: active
        display_name: 王周
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王文亮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王文亮，吳越人物。中国历代人物传记资料库（CBDB）以人物编号 19904 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王文亮 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3HbG7JXXtPKukrdr9i2R2p | 王韶 | accepted |
| children | p_BiNVgvYz3nJ9G3CCb78YaH | 王周 | accepted |

## 外部来源

- [中国历代人物传记资料库：王韶（CBDB 19903）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19903&o=json)
- [中国历代人物传记资料库：王文亮（CBDB 19904）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19904&o=json)
- [中国历代人物传记资料库：王周（CBDB 19905）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19905&o=json)
