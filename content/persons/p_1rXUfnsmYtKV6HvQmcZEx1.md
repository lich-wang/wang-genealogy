---
schema: wang-person/v1
id: p_1rXUfnsmYtKV6HvQmcZEx1
status: active
merged_into: null
display_name: 王之屏
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D9nb79Hp9DTmoyTki7A3FJ
        subject_person_id: p_1rXUfnsmYtKV6HvQmcZEx1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之屏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yWUQFD4zUF8GTJJxNUFGP4
          claim_id: c_D9nb79Hp9DTmoyTki7A3FJ
          source_id: s_Ueah6NxBLTeksqUa8dTE5L
          stance: supports
          locator: CBDB:205448
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205448）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QG69UqyFnkFQQPR9VsynJu
        subject_person_id: p_1rXUfnsmYtKV6HvQmcZEx1
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1534年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FbnunqBUqMHLvojLDq3QRS
          claim_id: c_QG69UqyFnkFQQPR9VsynJu
          source_id: s_Ueah6NxBLTeksqUa8dTE5L
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PDS5MQyBKJGxU41xA5241m
        subject_person_id: p_1rXUfnsmYtKV6HvQmcZEx1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之屏（生于1534年），明人物。明清進士進士，籍贯穎州，入仕進士。（中国历代人物传记资料库 CBDB 205448）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__SGLmdi6nPgvFx3aTJYGky
          claim_id: c_PDS5MQyBKJGxU41xA5241m
          source_id: s_Ueah6NxBLTeksqUa8dTE5L
          stance: supports
          locator: CBDB:205448
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source: *a1
      object_person:
        id: p_L1K6UGcPzEpvk1UMcnFzF5
        status: active
        display_name: 王崇儒
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_tShifK6jdmH3R2dYc5qMUI
        subject_person_id: p_1rXUfnsmYtKV6HvQmcZEx1
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_YSySVDFkHoiwLMp7djFurG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uEMNadQBoSdiX6MdUdYW9T
          claim_id: c_tShifK6jdmH3R2dYc5qMUI
          source_id: s_Aike37LC1u9Nr8xg7r0zoH
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二百九十三名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Aike37LC1u9Nr8xg7r0zoH
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王之屏妻)（CBDB 333325）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333325&o=json
            external_identifier: CBDB:333325
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_YSySVDFkHoiwLMp7djFurG
        status: active
        display_name: 張氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_pIR0V7Al4qUIe0QsOXdPrQ
        subject_person_id: p_wjQjQdSMH1jr1xFFHBSxDy
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1rXUfnsmYtKV6HvQmcZEx1
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sBN61AcY3h5Veu-AzehrAJ
          claim_id: c_pIR0V7Al4qUIe0QsOXdPrQ
          source_id: s_Ueah6NxBLTeksqUa8dTE5L
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二百九十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wjQjQdSMH1jr1xFFHBSxDy
        status: active
        display_name: 王舉
        merged_into_person_id: null
    - claim:
        id: c_uCuw4YBNZhhChIowmMl7z8
        subject_person_id: p_mWQzXBk4QWpHyLxDXbMW2R
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1rXUfnsmYtKV6HvQmcZEx1
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VsZOen7fp6QTLZCgjkr2jX
          claim_id: c_uCuw4YBNZhhChIowmMl7z8
          source_id: s_Ueah6NxBLTeksqUa8dTE5L
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二百九十三名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_mWQzXBk4QWpHyLxDXbMW2R
        status: active
        display_name: 王環
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_Mis2zDfkqvLRtNLz2tuXp-
        subject_person_id: p_1rXUfnsmYtKV6HvQmcZEx1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NUAVv2juZCbr8F6sC1twi9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ttfPSCC_03DijPOejl4dXP
          claim_id: c_Mis2zDfkqvLRtNLz2tuXp-
          source_id: s_Wx9PjXH78tyqeWN9kUy43A
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205448 王之屏）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_rcoYHJP0GIIkcOkMy8fQEh
        subject_person_id: p_1rXUfnsmYtKV6HvQmcZEx1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Yh2HTAs8PNRnitNcbXUhxZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4Nr987GyjfeXMxhjmUGyWg
          claim_id: c_rcoYHJP0GIIkcOkMy8fQEh
          source_id: s_2yc-IBjo1VRjOs2pUVpFej
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205448 王之屏）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: c_ftFGfCg-lzn44aaYwq5NWE
        subject_person_id: p_1rXUfnsmYtKV6HvQmcZEx1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_egzMgfxPQmC1Wp76S5M8be
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vRQkf_RFh-RwzyaECI-Rih
          claim_id: c_ftFGfCg-lzn44aaYwq5NWE
          source_id: s_4epqaBm4AHdkj48lLHVwIL
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205448 王之屏）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: p_iY12quE52o3voj5ou4w6ew
        status: active
        display_name: 王之鳳
        merged_into_person_id: null
---

# 王之屏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之屏 | accepted |
| birth.date | 1534年 | accepted |
| bio.summary | 王之屏（生于1534年），明人物。明清進士進士，籍贯穎州，入仕進士。（中国历代人物传记资料库 CBDB 205448） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_L1K6UGcPzEpvk1UMcnFzF5 | 王崇儒 | accepted |
| spouses | p_YSySVDFkHoiwLMp7djFurG | 張氏 | accepted |
| ancestors | p_wjQjQdSMH1jr1xFFHBSxDy | 王舉 | accepted |
| ancestors | p_mWQzXBk4QWpHyLxDXbMW2R | 王環 | accepted |
| other | p_NUAVv2juZCbr8F6sC1twi9 | 王之居 | accepted |
| other | p_Yh2HTAs8PNRnitNcbXUhxZ | 王之槙 | accepted |
| other | p_egzMgfxPQmC1Wp76S5M8be | 王之民 | accepted |
| other | p_iY12quE52o3voj5ou4w6ew | 王之鳳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王之槙（CBDB 333328）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333328&o=json)
- [中国历代人物传记资料库：王之鳳（CBDB 333329）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333329&o=json)
- [中国历代人物传记资料库：王之居（CBDB 333327）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333327&o=json)
- [中国历代人物传记资料库：王之民（CBDB 333326）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333326&o=json)
- [中国历代人物传记资料库：王之屏（CBDB 205448）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205448&o=json)
- [中国历代人物传记资料库：張氏(王之屏妻)（CBDB 333325）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333325&o=json)
