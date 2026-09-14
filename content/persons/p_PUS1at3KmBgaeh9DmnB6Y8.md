---
schema: wang-person/v1
id: p_PUS1at3KmBgaeh9DmnB6Y8
status: active
merged_into: null
display_name: 王靖
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Jg6oc6JpNcK63Nr22QQsKp
        subject_person_id: p_PUS1at3KmBgaeh9DmnB6Y8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王靖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xxtV1krnGgkPv5yJFQJVVJ
          claim_id: c_Jg6oc6JpNcK63Nr22QQsKp
          source_id: s_95eYw5KECxF5aaCTHXEQps
          stance: supports
          locator: CBDB:236882
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（236882）
          source: &a1
            id: s_95eYw5KECxF5aaCTHXEQps
            source_type: api_record
            title: 中国历代人物传记资料库：王靖（CBDB 236882）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236882&o=json
            external_identifier: CBDB:236882
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.820Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iLfJf5EUKZMdBhn2d9tHed
        subject_person_id: p_PUS1at3KmBgaeh9DmnB6Y8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王靖，明人物。正統四年進士，籍贯江夏。（中国历代人物传记资料库 CBDB 236882）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rY4Gi3IrsTU66vuIzTkCi4
          claim_id: c_iLfJf5EUKZMdBhn2d9tHed
          source_id: s_95eYw5KECxF5aaCTHXEQps
          stance: supports
          locator: CBDB:236882
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_f_7pY_-SaE_iUmmS_MXsWg
        subject_person_id: p_wxNC97go3Ly1JHGAcv6FvX
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_PUS1at3KmBgaeh9DmnB6Y8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lfoVrQO5RPFpF4RjE1AXFc
          claim_id: c_f_7pY_-SaE_iUmmS_MXsWg
          source_id: s_WErHu4swbby0Ycqs77UbAL
          stance: supports
          locator: CBDB：兄弟 王竑（67649）之父／母 王佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王靖 与 王竑 为同胞（CBDB 记「弟」），王竑 之父／母即 王靖 之父／母。
          source:
            id: s_WErHu4swbby0Ycqs77UbAL
            source_type: api_record
            title: 中国历代人物传记资料库：王靖（CBDB 236882）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236882&o=json
            external_identifier: CBDB:236882
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wxNC97go3Ly1JHGAcv6FvX
        status: active
        display_name: 王佐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_-11sc2JK9JNhdSE-nmd8e7
        subject_person_id: p_PUS1at3KmBgaeh9DmnB6Y8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eFMUZgTCSMLNfAAU1Qe6q2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZGILftyHiWv01cqFzoO9D1
          claim_id: c_-11sc2JK9JNhdSE-nmd8e7
          source_id: s_WErHu4swbby0Ycqs77UbAL
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67649 王竑）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_WErHu4swbby0Ycqs77UbAL
            source_type: api_record
            title: 中国历代人物传记资料库：王靖（CBDB 236882）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236882&o=json
            external_identifier: CBDB:236882
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eFMUZgTCSMLNfAAU1Qe6q2
        status: active
        display_name: 王竑
        merged_into_person_id: null
---

# 王靖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王靖 | accepted |
| bio.summary | 王靖，明人物。正統四年進士，籍贯江夏。（中国历代人物传记资料库 CBDB 236882） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wxNC97go3Ly1JHGAcv6FvX | 王佐 | accepted |
| other | p_eFMUZgTCSMLNfAAU1Qe6q2 | 王竑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王靖（CBDB 236882）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236882&o=json)
