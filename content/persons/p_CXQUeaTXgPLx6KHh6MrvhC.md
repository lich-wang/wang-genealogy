---
schema: wang-person/v1
id: p_CXQUeaTXgPLx6KHh6MrvhC
status: active
merged_into: null
display_name: 王原析
cbdb_id: 327873
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_D6aY8xZQqibaWW3NGeRoU6
        subject_person_id: p_CXQUeaTXgPLx6KHh6MrvhC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王原析，明人物。嘉靖四十一年進士，籍贯番禺。（中国历代人物传记资料库 CBDB 327873）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_U-ee_Jdlfb4YX3we5tvfx-
          claim_id: c_D6aY8xZQqibaWW3NGeRoU6
          source_id: s_5azUtwCnFUPNw29U9P6Q9p
          stance: supports
          locator: CBDB:327873
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_5azUtwCnFUPNw29U9P6Q9p
            source_type: api_record
            title: 中国历代人物传记资料库：王原析（CBDB 327873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327873&o=json
            external_identifier: CBDB:327873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_BwNS638gpYLcEKmJV6LaGY
        subject_person_id: p_CXQUeaTXgPLx6KHh6MrvhC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王原析
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_c3CnJ8WxjrAJKhtU8AvUhC
          claim_id: c_BwNS638gpYLcEKmJV6LaGY
          source_id: s_5azUtwCnFUPNw29U9P6Q9p
          stance: supports
          locator: CBDB:327873
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_c6qnbVn1uFpWXxBYShCDdo
        subject_person_id: p_2ER4qeybN68kj6wmWDD4De
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_CXQUeaTXgPLx6KHh6MrvhC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ok0R6asr19fMG3xEWNLrgN
          claim_id: c_c6qnbVn1uFpWXxBYShCDdo
          source_id: s_hD7cec05IfOtTBMIZ_7pnW
          stance: supports
          locator: CBDB：兄弟 王原相（205067）之父／母 王渐逵
          quotation: null
          interpretation_note: 由兄弟关系推断：王原析 与 王原相 为同胞（CBDB 记「兄」），王原相 之父／母即 王原析 之父／母。
          source:
            id: s_hD7cec05IfOtTBMIZ_7pnW
            source_type: api_record
            title: 中国历代人物传记资料库：王原析（CBDB 327873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327873&o=json
            external_identifier: CBDB:327873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2ER4qeybN68kj6wmWDD4De
        status: active
        display_name: 王渐逵
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_NUhv01lSWuCRf28Ig42nCm
        subject_person_id: p_CXQUeaTXgPLx6KHh6MrvhC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ghyYDQ5eZ8uxN8ip6BX7KC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FdyYPpMaG0yILEhB760_Dl
          claim_id: c_NUhv01lSWuCRf28Ig42nCm
          source_id: s_hD7cec05IfOtTBMIZ_7pnW
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205067 王原相）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hD7cec05IfOtTBMIZ_7pnW
            source_type: api_record
            title: 中国历代人物传记资料库：王原析（CBDB 327873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327873&o=json
            external_identifier: CBDB:327873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ghyYDQ5eZ8uxN8ip6BX7KC
        status: active
        display_name: 王原相
        merged_into_person_id: null
---

# 王原析

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王原析，明人物。嘉靖四十一年進士，籍贯番禺。（中国历代人物传记资料库 CBDB 327873） | accepted |
| name.primary | 王原析 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2ER4qeybN68kj6wmWDD4De | 王渐逵 | accepted |
| other | p_ghyYDQ5eZ8uxN8ip6BX7KC | 王原相 | accepted |

## 外部来源

- [中国历代人物传记资料库：王原析（CBDB 327873）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327873&o=json)
