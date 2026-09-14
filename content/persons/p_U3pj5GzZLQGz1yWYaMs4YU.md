---
schema: wang-person/v1
id: p_U3pj5GzZLQGz1yWYaMs4YU
status: active
merged_into: null
display_name: 王納訓
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vZ38ptHaWxHeUsoMrBZgSe
        subject_person_id: p_U3pj5GzZLQGz1yWYaMs4YU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王納訓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ey87U7MidfZXpBPqwhb15o
          claim_id: c_vZ38ptHaWxHeUsoMrBZgSe
          source_id: s_A12Gn9asFG2DG3N7rGqmwA
          stance: supports
          locator: CBDB:288218
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（288218）
          source: &a1
            id: s_A12Gn9asFG2DG3N7rGqmwA
            source_type: api_record
            title: 中国历代人物传记资料库：王納訓（CBDB 288218）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288218&o=json
            external_identifier: CBDB:288218
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.288Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vEd1tYPEi5hHDDPQGyYq48
        subject_person_id: p_U3pj5GzZLQGz1yWYaMs4YU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王納訓，明人物。嘉靖八年進士，籍贯襄城。（中国历代人物传记资料库 CBDB 288218）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eUVmGJhOzZ_-3JLv-VgBhg
          claim_id: c_vEd1tYPEi5hHDDPQGyYq48
          source_id: s_A12Gn9asFG2DG3N7rGqmwA
          stance: supports
          locator: CBDB:288218
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-hz7KitrkRXkhVLirwV2pM
        subject_person_id: p_enQPN3zVXFi7qM1WJLyJty
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_U3pj5GzZLQGz1yWYaMs4YU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9yaDxTcls76KuFxG33r5h7
          claim_id: c_-hz7KitrkRXkhVLirwV2pM
          source_id: s_iwtxCF2o5sQ9JBUffppZj8
          stance: supports
          locator: CBDB：兄弟 王納言（68459）之父／母 王汝楫
          quotation: null
          interpretation_note: 由兄弟关系推断：王納訓 与 王納言 为同胞（CBDB 记「兄」），王納言 之父／母即 王納訓 之父／母。
          source:
            id: s_iwtxCF2o5sQ9JBUffppZj8
            source_type: api_record
            title: 中国历代人物传记资料库：王納訓（CBDB 288218）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288218&o=json
            external_identifier: CBDB:288218
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_enQPN3zVXFi7qM1WJLyJty
        status: active
        display_name: 王汝楫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_czAQD5LAHBXLJ8mori31W_
        subject_person_id: p_TTntK269568eA9RALQmA43
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_U3pj5GzZLQGz1yWYaMs4YU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-pj1h7LdYmV0qnCKYRM7Uc
          claim_id: c_czAQD5LAHBXLJ8mori31W_
          source_id: s_iwtxCF2o5sQ9JBUffppZj8
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 68459 王納言）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_iwtxCF2o5sQ9JBUffppZj8
            source_type: api_record
            title: 中国历代人物传记资料库：王納訓（CBDB 288218）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288218&o=json
            external_identifier: CBDB:288218
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TTntK269568eA9RALQmA43
        status: active
        display_name: 王納言
        merged_into_person_id: null
---

# 王納訓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王納訓 | accepted |
| bio.summary | 王納訓，明人物。嘉靖八年進士，籍贯襄城。（中国历代人物传记资料库 CBDB 288218） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_enQPN3zVXFi7qM1WJLyJty | 王汝楫 | accepted |
| other | p_TTntK269568eA9RALQmA43 | 王納言 | accepted |

## 外部来源

- [中国历代人物传记资料库：王納訓（CBDB 288218）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288218&o=json)
