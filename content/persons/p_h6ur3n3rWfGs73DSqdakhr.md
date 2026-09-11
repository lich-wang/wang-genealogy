---
schema: wang-person/v1
id: p_h6ur3n3rWfGs73DSqdakhr
status: active
merged_into: null
display_name: 王通
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9H7jCZExbbuE5yrwpejpcu
        subject_person_id: p_h6ur3n3rWfGs73DSqdakhr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王通
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6PHrb6rLasBCA566MfNP1o
          claim_id: c_9H7jCZExbbuE5yrwpejpcu
          source_id: s_DiEMCVMLKv9TA3r98UbYMD
          stance: supports
          locator: CBDB:254530
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（254530）
          source: &a1
            id: s_DiEMCVMLKv9TA3r98UbYMD
            source_type: api_record
            title: 中国历代人物传记资料库：王通（CBDB 254530）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254530&o=json
            external_identifier: CBDB:254530
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.323Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q34iN6tRvpcXM7b8aTzKWL
        subject_person_id: p_h6ur3n3rWfGs73DSqdakhr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王通，明人物。建文二年殿試進士。（中国历代人物传记资料库 CBDB 254530）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9oDdMZgzuv7ooFbzPuf-Re
          claim_id: c_Q34iN6tRvpcXM7b8aTzKWL
          source_id: s_DiEMCVMLKv9TA3r98UbYMD
          stance: supports
          locator: CBDB:254530
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
        id: c_8W3KUs4pCNHpWkDkmlvnOT
        subject_person_id: p_h6ur3n3rWfGs73DSqdakhr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FF1uMbfonZZUerwpoYGsZJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ydt5KTZr5_A-o4FgspoyXQ
          claim_id: c_8W3KUs4pCNHpWkDkmlvnOT
          source_id: s_zCS6b7dveiWpFNsmNscBEW
          stance: supports
          locator: 建文二年殿試登科錄:一卷，第三甲第四十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zCS6b7dveiWpFNsmNscBEW
            source_type: api_record
            title: 中国历代人物传记资料库：王郁（CBDB 200177）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200177&o=json
            external_identifier: CBDB:200177
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.592Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FF1uMbfonZZUerwpoYGsZJ
        status: active
        display_name: 王郁
        merged_into_person_id: null
  other: []
---

# 王通

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王通 | accepted |
| bio.summary | 王通，明人物。建文二年殿試進士。（中国历代人物传记资料库 CBDB 254530） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_FF1uMbfonZZUerwpoYGsZJ | 王郁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王通（CBDB 254530）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=254530&o=json)
- [中国历代人物传记资料库：王郁（CBDB 200177）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200177&o=json)
