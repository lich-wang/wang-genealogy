---
schema: wang-person/v1
id: p_iY12quE52o3voj5ou4w6ew
status: active
merged_into: null
display_name: 王之鳳
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GzcT7Jd3mxHnSnSqn6PDnR
        subject_person_id: p_iY12quE52o3voj5ou4w6ew
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之鳳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XRvm5EEw5UqY2NubEd97q9
          claim_id: c_GzcT7Jd3mxHnSnSqn6PDnR
          source_id: s_VXwr6rigcby2cP24uqV6vh
          stance: supports
          locator: CBDB:333329
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（333329）
          source: &a1
            id: s_VXwr6rigcby2cP24uqV6vh
            source_type: api_record
            title: 中国历代人物传记资料库：王之鳳（CBDB 333329）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333329&o=json
            external_identifier: CBDB:333329
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.407Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_b3sfMQLQDhzNHdjbsvm7oh
        subject_person_id: p_iY12quE52o3voj5ou4w6ew
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之鳳，明人物。嘉靖四十四年進士，籍贯穎州。（中国历代人物传记资料库 CBDB 333329）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Qqj-Gdy9v3vr0IbY1Wi8Xn
          claim_id: c_b3sfMQLQDhzNHdjbsvm7oh
          source_id: s_VXwr6rigcby2cP24uqV6vh
          stance: supports
          locator: CBDB:333329
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_iv3BN-_ftLBZtJ7dWebPCJ
        subject_person_id: p_L1K6UGcPzEpvk1UMcnFzF5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iY12quE52o3voj5ou4w6ew
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kdCW3GgP94vr3gsrvuFKfG
          claim_id: c_iv3BN-_ftLBZtJ7dWebPCJ
          source_id: s_JfbOWSbdQT_yQw6ZJtNG07
          stance: supports
          locator: CBDB：兄弟 王之屏（205448）之父／母 王崇儒
          quotation: null
          interpretation_note: 由兄弟关系推断：王之鳳 与 王之屏 为同胞（CBDB 记「兄」），王之屏 之父／母即 王之鳳 之父／母。
          source:
            id: s_JfbOWSbdQT_yQw6ZJtNG07
            source_type: api_record
            title: 中国历代人物传记资料库：王之鳳（CBDB 333329）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333329&o=json
            external_identifier: CBDB:333329
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_L1K6UGcPzEpvk1UMcnFzF5
        status: active
        display_name: 王崇儒
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_iR-kgd3UnjDH5peA4-SGyV
        subject_person_id: p_1rXUfnsmYtKV6HvQmcZEx1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_iY12quE52o3voj5ou4w6ew
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xsf6pgtPc0DjpbenCz5uUZ
          claim_id: c_iR-kgd3UnjDH5peA4-SGyV
          source_id: s_JfbOWSbdQT_yQw6ZJtNG07
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205448 王之屏）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JfbOWSbdQT_yQw6ZJtNG07
            source_type: api_record
            title: 中国历代人物传记资料库：王之鳳（CBDB 333329）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333329&o=json
            external_identifier: CBDB:333329
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1rXUfnsmYtKV6HvQmcZEx1
        status: active
        display_name: 王之屏
        merged_into_person_id: null
---

# 王之鳳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之鳳 | accepted |
| bio.summary | 王之鳳，明人物。嘉靖四十四年進士，籍贯穎州。（中国历代人物传记资料库 CBDB 333329） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_L1K6UGcPzEpvk1UMcnFzF5 | 王崇儒 | accepted |
| other | p_1rXUfnsmYtKV6HvQmcZEx1 | 王之屏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王之鳳（CBDB 333329）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333329&o=json)
