---
schema: wang-person/v1
id: p_L1K6UGcPzEpvk1UMcnFzF5
status: active
merged_into: null
display_name: 王崇儒
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ny18vKJvLSHT1YJs9ieL8D
        subject_person_id: p_L1K6UGcPzEpvk1UMcnFzF5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇儒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CRcpA5gsUx3oGvhYwpQJ3E
          claim_id: c_Ny18vKJvLSHT1YJs9ieL8D
          source_id: s_bsgFtcjcTPJdYQJ4DJGg3h
          stance: supports
          locator: CBDB:333322
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（333322）
          source: &a1
            id: s_bsgFtcjcTPJdYQJ4DJGg3h
            source_type: api_record
            title: 中国历代人物传记资料库：王崇儒（CBDB 333322）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333322&o=json
            external_identifier: CBDB:333322
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.406Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_P6GPG7Co9coZmoEP8M8QpB
        subject_person_id: p_L1K6UGcPzEpvk1UMcnFzF5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇儒，明人物。嘉靖四十四年進士，籍贯穎州。（中国历代人物传记资料库 CBDB 333322）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-TgsdV5NV5u9oy5dtO1Cvi
          claim_id: c_P6GPG7Co9coZmoEP8M8QpB
          source_id: s_bsgFtcjcTPJdYQJ4DJGg3h
          stance: supports
          locator: CBDB:333322
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_beOTgQAVDiG0WLw2FLIfEG
        subject_person_id: p_L1K6UGcPzEpvk1UMcnFzF5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1rXUfnsmYtKV6HvQmcZEx1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K_p_9JpsTAP1l-5SZDEJPe
          claim_id: c_beOTgQAVDiG0WLw2FLIfEG
          source_id: s_Ueah6NxBLTeksqUa8dTE5L
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二百九十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Ueah6NxBLTeksqUa8dTE5L
            source_type: api_record
            title: 中国历代人物传记资料库：王之屏（CBDB 205448）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205448&o=json
            external_identifier: CBDB:205448
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.861Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1rXUfnsmYtKV6HvQmcZEx1
        status: active
        display_name: 王之屏
        merged_into_person_id: null
    - claim:
        id: c_60CCc6gXWEvBj3f9NyMz8W
        subject_person_id: p_L1K6UGcPzEpvk1UMcnFzF5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NUAVv2juZCbr8F6sC1twi9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-iP6ekZ1rgYnU6luJFavNu
          claim_id: c_60CCc6gXWEvBj3f9NyMz8W
          source_id: s_Wx9PjXH78tyqeWN9kUy43A
          stance: supports
          locator: CBDB：兄弟 王之屏（205448）之父／母 王崇儒
          quotation: null
          interpretation_note: 由兄弟关系推断：王之居 与 王之屏 为同胞（CBDB 记「弟」），王之屏 之父／母即 王之居 之父／母。
          source:
            id: s_Wx9PjXH78tyqeWN9kUy43A
            source_type: api_record
            title: 中国历代人物传记资料库：王之居（CBDB 333327）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333327&o=json
            external_identifier: CBDB:333327
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NUAVv2juZCbr8F6sC1twi9
        status: active
        display_name: 王之居
        merged_into_person_id: null
    - claim:
        id: c_o4xXDSmdpAWhQ6MXM-E5D0
        subject_person_id: p_L1K6UGcPzEpvk1UMcnFzF5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Yh2HTAs8PNRnitNcbXUhxZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cNVGWoszMAgPcxr32Y9ZWE
          claim_id: c_o4xXDSmdpAWhQ6MXM-E5D0
          source_id: s_2yc-IBjo1VRjOs2pUVpFej
          stance: supports
          locator: CBDB：兄弟 王之屏（205448）之父／母 王崇儒
          quotation: null
          interpretation_note: 由兄弟关系推断：王之槙 与 王之屏 为同胞（CBDB 记「兄」），王之屏 之父／母即 王之槙 之父／母。
          source:
            id: s_2yc-IBjo1VRjOs2pUVpFej
            source_type: api_record
            title: 中国历代人物传记资料库：王之槙（CBDB 333328）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333328&o=json
            external_identifier: CBDB:333328
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Yh2HTAs8PNRnitNcbXUhxZ
        status: active
        display_name: 王之槙
        merged_into_person_id: null
    - claim:
        id: c_uiCn7UWtzdMSMFWzGqIFU8
        subject_person_id: p_L1K6UGcPzEpvk1UMcnFzF5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_egzMgfxPQmC1Wp76S5M8be
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dBOdGWrMawPbHjLLpxfHWw
          claim_id: c_uiCn7UWtzdMSMFWzGqIFU8
          source_id: s_4epqaBm4AHdkj48lLHVwIL
          stance: supports
          locator: CBDB：兄弟 王之屏（205448）之父／母 王崇儒
          quotation: null
          interpretation_note: 由兄弟关系推断：王之民 与 王之屏 为同胞（CBDB 记「弟」），王之屏 之父／母即 王之民 之父／母。
          source:
            id: s_4epqaBm4AHdkj48lLHVwIL
            source_type: api_record
            title: 中国历代人物传记资料库：王之民（CBDB 333326）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333326&o=json
            external_identifier: CBDB:333326
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_egzMgfxPQmC1Wp76S5M8be
        status: active
        display_name: 王之民
        merged_into_person_id: null
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
        id: p_iY12quE52o3voj5ou4w6ew
        status: active
        display_name: 王之鳳
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王崇儒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇儒 | accepted |
| bio.summary | 王崇儒，明人物。嘉靖四十四年進士，籍贯穎州。（中国历代人物传记资料库 CBDB 333322） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_1rXUfnsmYtKV6HvQmcZEx1 | 王之屏 | accepted |
| children | p_NUAVv2juZCbr8F6sC1twi9 | 王之居 | accepted |
| children | p_Yh2HTAs8PNRnitNcbXUhxZ | 王之槙 | accepted |
| children | p_egzMgfxPQmC1Wp76S5M8be | 王之民 | accepted |
| children | p_iY12quE52o3voj5ou4w6ew | 王之鳳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇儒（CBDB 333322）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333322&o=json)
- [中国历代人物传记资料库：王之槙（CBDB 333328）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333328&o=json)
- [中国历代人物传记资料库：王之鳳（CBDB 333329）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333329&o=json)
- [中国历代人物传记资料库：王之居（CBDB 333327）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333327&o=json)
- [中国历代人物传记资料库：王之民（CBDB 333326）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333326&o=json)
- [中国历代人物传记资料库：王之屏（CBDB 205448）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205448&o=json)
