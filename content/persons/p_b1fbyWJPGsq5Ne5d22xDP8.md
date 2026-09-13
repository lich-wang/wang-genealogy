---
schema: wang-person/v1
id: p_b1fbyWJPGsq5Ne5d22xDP8
status: active
merged_into: null
display_name: 王孟韓
cbdb_id: 253916
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sv592MG2PWtj2gv5Vqk7vW
        subject_person_id: p_b1fbyWJPGsq5Ne5d22xDP8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟韓，明人物。建文二年殿試進士。（中国历代人物传记资料库 CBDB 253916）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_ZpPddiruS8razxw4FwmcFU
          claim_id: c_sv592MG2PWtj2gv5Vqk7vW
          source_id: s_1ghkTvyGTvALoeVSdtcZFj
          stance: supports
          locator: CBDB:253916
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_1ghkTvyGTvALoeVSdtcZFj
            source_type: api_record
            title: 中国历代人物传记资料库：王孟韓（CBDB 253916）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253916&o=json
            external_identifier: CBDB:253916
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DJXfzY45nbH1GB6yAACEFL
        subject_person_id: p_b1fbyWJPGsq5Ne5d22xDP8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟韓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5zNyiUQZavZ1Fkv8fYQbHM
          claim_id: c_DJXfzY45nbH1GB6yAACEFL
          source_id: s_1ghkTvyGTvALoeVSdtcZFj
          stance: supports
          locator: CBDB:253916
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
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
  descendants:
    - claim:
        id: c_rBBpWT-WDq28VPkr7FhGdS
        subject_person_id: p_b1fbyWJPGsq5Ne5d22xDP8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CxY5QtqK8BuHWqQgSQqbEb
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__R5AoeV8kQDKrQsOEY_Z9Q
          claim_id: c_rBBpWT-WDq28VPkr7FhGdS
          source_id: s_N2gM7RZc4LBqAHUJjH3STW
          stance: supports
          locator: 建文二年殿試登科錄:一卷，第一甲第二名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_N2gM7RZc4LBqAHUJjH3STW
            source_type: api_record
            title: 中国历代人物传记资料库：王艮（CBDB 66624）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66624&o=json
            external_identifier: CBDB:66624
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.959Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CxY5QtqK8BuHWqQgSQqbEb
        status: active
        display_name: 王艮
        merged_into_person_id: null
  other: []
---

# 王孟韓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王孟韓，明人物。建文二年殿試進士。（中国历代人物传记资料库 CBDB 253916） | accepted |
| name.primary | 王孟韓 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_CxY5QtqK8BuHWqQgSQqbEb | 王艮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王艮（CBDB 66624）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66624&o=json)
- [中国历代人物传记资料库：王孟韓（CBDB 253916）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253916&o=json)
