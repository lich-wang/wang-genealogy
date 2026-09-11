---
schema: wang-person/v1
id: p_yj6fkEfBpBQSnB7FiNBbFN
status: active
merged_into: null
display_name: 王文某
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eykSW7rQNNH6dtuZn2Spgt
        subject_person_id: p_yj6fkEfBpBQSnB7FiNBbFN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文某
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_73gEka1rEh1LrAHS2YGhYx
          claim_id: c_eykSW7rQNNH6dtuZn2Spgt
          source_id: s_Mz3KMJLpFJmtPi6Ho2JMHK
          stance: supports
          locator: CBDB:278851
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（278851）
          source: &a1
            id: s_Mz3KMJLpFJmtPi6Ho2JMHK
            source_type: api_record
            title: 中国历代人物传记资料库：王文某（CBDB 278851）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278851&o=json
            external_identifier: CBDB:278851
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.971Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9QpuB3Xt28bXm3Hpy3993Q
        subject_person_id: p_yj6fkEfBpBQSnB7FiNBbFN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文某，明人物。正德六年進士。（中国历代人物传记资料库 CBDB 278851）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Yl7xWUTUPUpoygslE0voxx
          claim_id: c_9QpuB3Xt28bXm3Hpy3993Q
          source_id: s_Mz3KMJLpFJmtPi6Ho2JMHK
          stance: supports
          locator: CBDB:278851
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
  descendants:
    - claim:
        id: c_uBx2Wu0-1O-3B2J8wh_KFo
        subject_person_id: p_yj6fkEfBpBQSnB7FiNBbFN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_87vQWSqin1Cc8rN4TeH3X4
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TGixk2kvPs8FMeL2DSvS4R
          claim_id: c_uBx2Wu0-1O-3B2J8wh_KFo
          source_id: s_KQ6ArrG8dTNSX2Tu6p17mt
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第一百八十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KQ6ArrG8dTNSX2Tu6p17mt
            source_type: api_record
            title: 中国历代人物传记资料库：王完（CBDB 201827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201827&o=json
            external_identifier: CBDB:201827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.695Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_87vQWSqin1Cc8rN4TeH3X4
        status: active
        display_name: 王完
        merged_into_person_id: null
  other: []
---

# 王文某

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文某 | accepted |
| bio.summary | 王文某，明人物。正德六年進士。（中国历代人物传记资料库 CBDB 278851） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_87vQWSqin1Cc8rN4TeH3X4 | 王完 | accepted |

## 外部来源

- [中国历代人物传记资料库：王完（CBDB 201827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201827&o=json)
- [中国历代人物传记资料库：王文某（CBDB 278851）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=278851&o=json)
