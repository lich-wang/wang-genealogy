---
schema: wang-person/v1
id: p_zAaTmpZ4QqHCnCdrp71Tu3
status: active
merged_into: null
display_name: 王若毅
cbdb_id: 101294
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qXVnJyBXntZqUXG2VEYda7
        subject_person_id: p_zAaTmpZ4QqHCnCdrp71Tu3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王若毅，元人物。籍贯金壇，曾任巡檢。（中国历代人物传记资料库 CBDB 101294）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_XekouRnnYF5l3gymQqgjNy
          claim_id: c_qXVnJyBXntZqUXG2VEYda7
          source_id: s_djcg2EFcFTFYLAz4Rch58b
          stance: supports
          locator: CBDB:101294
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_djcg2EFcFTFYLAz4Rch58b
            source_type: api_record
            title: 中国历代人物传记资料库：王若毅（CBDB 101294）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101294&o=json
            external_identifier: CBDB:101294
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:50.362Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Fa3D2s3934ENRvg1m9qikz
        subject_person_id: p_zAaTmpZ4QqHCnCdrp71Tu3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王若毅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2ZQvJRnCpFFxicTZdwCzvM
          claim_id: c_Fa3D2s3934ENRvg1m9qikz
          source_id: s_djcg2EFcFTFYLAz4Rch58b
          stance: supports
          locator: CBDB:101294
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1701-1800）｜历史性依据：CBDB 朝代 = 元
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
  other:
    - claim:
        id: c_s0lEg_WODIE_BlWr1jgOZR
        subject_person_id: p_wFsxRPC4HsykYkaEHBkxU8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zAaTmpZ4QqHCnCdrp71Tu3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_igFOyyOE7gOykU3d_HaeIe
          claim_id: c_s0lEg_WODIE_BlWr1jgOZR
          source_id: s_D1z2VhjN9GCr7kojgDV867
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 101294 王若毅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_D1z2VhjN9GCr7kojgDV867
            source_type: api_record
            title: 中国历代人物传记资料库：王若拙（CBDB 101292）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101292&o=json
            external_identifier: CBDB:101292
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wFsxRPC4HsykYkaEHBkxU8
        status: active
        display_name: 王若拙
        merged_into_person_id: null
---

# 王若毅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王若毅，元人物。籍贯金壇，曾任巡檢。（中国历代人物传记资料库 CBDB 101294） | accepted |
| name.primary | 王若毅 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_wFsxRPC4HsykYkaEHBkxU8 | 王若拙 | accepted |

## 外部来源

- [中国历代人物传记资料库：王若毅（CBDB 101294）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101294&o=json)
- [中国历代人物传记资料库：王若拙（CBDB 101292）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101292&o=json)
