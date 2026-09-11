---
schema: wang-person/v1
id: p_qLcC4SmUNJ1rkkQyeeqtKk
status: active
merged_into: null
display_name: 王廷陳
cbdb_id: 34668
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_A2kwrdA2RcDJzDjewFGUFd
        subject_person_id: p_qLcC4SmUNJ1rkkQyeeqtKk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷陳，明人物。中国历代人物传记资料库（CBDB）以人物编号 34668 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_Th-XM-kU9QmGyuPy3zTpWU
          claim_id: c_A2kwrdA2RcDJzDjewFGUFd
          source_id: s_qjhQCVEp1sFgwz2z9YqyeK
          stance: supports
          locator: CBDB:34668
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_qjhQCVEp1sFgwz2z9YqyeK
            source_type: api_record
            title: 中国历代人物传记资料库：王廷陳（CBDB 34668）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34668&o=json
            external_identifier: CBDB:34668
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_FqLCDSaaMPBBFfTE43vPgb
        subject_person_id: p_qLcC4SmUNJ1rkkQyeeqtKk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷陳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NEYeNrMwSgLrNvZ2ennxmH
          claim_id: c_FqLCDSaaMPBBFfTE43vPgb
          source_id: s_qjhQCVEp1sFgwz2z9YqyeK
          stance: supports
          locator: CBDB:34668
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1101-1200）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_qjhQCVEp1sFgwz2z9YqyeK
            source_type: api_record
            title: 中国历代人物传记资料库：王廷陳（CBDB 34668）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34668&o=json
            external_identifier: CBDB:34668
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uuk-aauvY6odbrhYONJ4aG
        subject_person_id: p_bFLYoeb8HyJD4DvaQdT9rC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qLcC4SmUNJ1rkkQyeeqtKk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MPT1OelsU3aJi4dq_AIDHY
          claim_id: c_uuk-aauvY6odbrhYONJ4aG
          source_id: s_LCd9Pe6zy4XvosNMv3X8uh
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LCd9Pe6zy4XvosNMv3X8uh
            source_type: api_record
            title: 中国历代人物传记资料库：王濟（CBDB 279534）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279534&o=json
            external_identifier: CBDB:279534
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.985Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bFLYoeb8HyJD4DvaQdT9rC
        status: active
        display_name: 王濟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_4xaFbTKSXT0qtHpfSI0Twg
        subject_person_id: p_g4twhoub1NzNDbDHptPzJX
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qLcC4SmUNJ1rkkQyeeqtKk
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dM9rjW2fd8aAlrTsy-64TL
          claim_id: c_4xaFbTKSXT0qtHpfSI0Twg
          source_id: s_YkbBB1kk6cWXoE8hhwTBKb
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YkbBB1kk6cWXoE8hhwTBKb
            source_type: api_record
            title: 中国历代人物传记资料库：王思旻（CBDB 279532）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279532&o=json
            external_identifier: CBDB:279532
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.984Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_g4twhoub1NzNDbDHptPzJX
        status: active
        display_name: 王思旻
        merged_into_person_id: null
    - claim:
        id: c_e8OJR5Gkmn9wnOPJWyyF-X
        subject_person_id: p_phDjmWxWjdrApBA3u5EZWu
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qLcC4SmUNJ1rkkQyeeqtKk
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q-cfz_AY6G4099c-zB5mYc
          claim_id: c_e8OJR5Gkmn9wnOPJWyyF-X
          source_id: s_EmKgwKiNH65kFz2QCRFA6s
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EmKgwKiNH65kFz2QCRFA6s
            source_type: api_record
            title: 中国历代人物传记资料库：王文奎（CBDB 279533）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279533&o=json
            external_identifier: CBDB:279533
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.984Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_phDjmWxWjdrApBA3u5EZWu
        status: active
        display_name: 王文奎
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王廷陳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王廷陳，明人物。中国历代人物传记资料库（CBDB）以人物编号 34668 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王廷陳 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_bFLYoeb8HyJD4DvaQdT9rC | 王濟 | accepted |
| ancestors | p_g4twhoub1NzNDbDHptPzJX | 王思旻 | accepted |
| ancestors | p_phDjmWxWjdrApBA3u5EZWu | 王文奎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王濟（CBDB 279534）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279534&o=json)
- [中国历代人物传记资料库：王思旻（CBDB 279532）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279532&o=json)
- [中国历代人物传记资料库：王廷陳（CBDB 34668）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34668&o=json)
- [中国历代人物传记资料库：王文奎（CBDB 279533）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279533&o=json)
