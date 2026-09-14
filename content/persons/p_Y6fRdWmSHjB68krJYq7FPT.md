---
schema: wang-person/v1
id: p_Y6fRdWmSHjB68krJYq7FPT
status: active
merged_into: null
display_name: 王杲
revision: 11
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_myLAf9Uw7amTrh8cAjAP4N
        subject_person_id: p_Y6fRdWmSHjB68krJYq7FPT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王杲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NZwp33zEeodDJYLPCBGKnx
          claim_id: c_myLAf9Uw7amTrh8cAjAP4N
          source_id: s_nZsdLgyvHTYFhUqdh94HmL
          stance: supports
          locator: CBDB:200384
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200384）
          source: &a1
            id: s_nZsdLgyvHTYFhUqdh94HmL
            source_type: api_record
            title: 中国历代人物传记资料库：王杲（CBDB 200384）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200384&o=json
            external_identifier: CBDB:200384
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.609Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_TgXsro2QQJSdJhaiEFT1cL
        subject_person_id: p_Y6fRdWmSHjB68krJYq7FPT
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1455年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xnZtstpMFeuB9jWhP7nJqJ
          claim_id: c_TgXsro2QQJSdJhaiEFT1cL
          source_id: s_nZsdLgyvHTYFhUqdh94HmL
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
        id: c_1yx9BA3XSJHPFK8wMKiFrc
        subject_person_id: p_Y6fRdWmSHjB68krJYq7FPT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王杲（生于1455年），明人物。明清進士進士，籍贯龍泉，入仕進士。（中国历代人物传记资料库 CBDB 200384）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_snDCfaqhV7sEoLPnHsDYFJ
          claim_id: c_1yx9BA3XSJHPFK8wMKiFrc
          source_id: s_nZsdLgyvHTYFhUqdh94HmL
          stance: supports
          locator: CBDB:200384
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7B4g9euoX6AZsooX9sFZ3I
        subject_person_id: p_sQKFgBKrX6N7mKYfJwtry2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Y6fRdWmSHjB68krJYq7FPT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BbLAHTEvX9ko5I5qJaMdFu
          claim_id: c_7B4g9euoX6AZsooX9sFZ3I
          source_id: s_EjwpYk3YVv9nwyebg6iaE3
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第一百五十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EjwpYk3YVv9nwyebg6iaE3
            source_type: api_record
            title: 中国历代人物传记资料库：王洪（CBDB 257024）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257024&o=json
            external_identifier: CBDB:257024
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.399Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_sQKFgBKrX6N7mKYfJwtry2
        status: active
        display_name: 王洪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_kR_NSE8S2Waq6uhPIKfNQ4
        subject_person_id: p_7j7J49ngvvxhFKjvaiM9YM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Y6fRdWmSHjB68krJYq7FPT
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XP0kDe01nBXgV5WXd5p8KI
          claim_id: c_kR_NSE8S2Waq6uhPIKfNQ4
          source_id: s_LVpsska5H3con7HuzkMsqm
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第一百五十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LVpsska5H3con7HuzkMsqm
            source_type: api_record
            title: 中国历代人物传记资料库：王勤（CBDB 257023）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257023&o=json
            external_identifier: CBDB:257023
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.399Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7j7J49ngvvxhFKjvaiM9YM
        status: active
        display_name: 王勤
        merged_into_person_id: null
    - claim:
        id: c_Xm-xYf2DoT6zn4gSMaJPMG
        subject_person_id: p_jMF84FXJU1C6tuAfvF1Dz2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Y6fRdWmSHjB68krJYq7FPT
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zrqKBAFC_BM-2QDcsY-obR
          claim_id: c_Xm-xYf2DoT6zn4gSMaJPMG
          source_id: s_GUDYWWbPxZKLxrLpBZ2MAx
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第一百五十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GUDYWWbPxZKLxrLpBZ2MAx
            source_type: api_record
            title: 中国历代人物传记资料库：王永壽（CBDB 257022）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257022&o=json
            external_identifier: CBDB:257022
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.398Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jMF84FXJU1C6tuAfvF1Dz2
        status: active
        display_name: 王永壽
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_viiJHggr3DYX9xeZQ3ZtN1
        subject_person_id: p_Ea9hQd6Q69frdQad5zNKrV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Y6fRdWmSHjB68krJYq7FPT
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J53hY3L1cqoWbbj5Zn-EvF
          claim_id: c_viiJHggr3DYX9xeZQ3ZtN1
          source_id: s_bWCrqxa_SxdJT3jXkdxMYU
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200384 王杲）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bWCrqxa_SxdJT3jXkdxMYU
            source_type: api_record
            title: 中国历代人物传记资料库：王冕（CBDB 257034）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257034&o=json
            external_identifier: CBDB:257034
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ea9hQd6Q69frdQad5zNKrV
        status: active
        display_name: 王冕
        merged_into_person_id: null
    - claim:
        id: c_80xzXbEaye8jyRtu9vikBX
        subject_person_id: p_K7jaohG6D5Gda4GnuYwiPL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Y6fRdWmSHjB68krJYq7FPT
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_enQwl_0yAovZ-LpLfSD1NT
          claim_id: c_80xzXbEaye8jyRtu9vikBX
          source_id: s_NlIth9kNDT99n1tRRgD8cG
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200384 王杲）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_NlIth9kNDT99n1tRRgD8cG
            source_type: api_record
            title: 中国历代人物传记资料库：王昆（CBDB 257028）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257028&o=json
            external_identifier: CBDB:257028
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_K7jaohG6D5Gda4GnuYwiPL
        status: active
        display_name: 王昆
        merged_into_person_id: null
    - claim:
        id: c_V_8TVobdkkq_nyNigmm6E2
        subject_person_id: p_KiqHQvLZramwBA1Zbz9yoN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Y6fRdWmSHjB68krJYq7FPT
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FLBQYkjWVfT6wJJ5SzKJh3
          claim_id: c_V_8TVobdkkq_nyNigmm6E2
          source_id: s_PYnKzawMmpED83OWHifKro
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200384 王杲）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_PYnKzawMmpED83OWHifKro
            source_type: api_record
            title: 中国历代人物传记资料库：王昌（CBDB 257031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257031&o=json
            external_identifier: CBDB:257031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KiqHQvLZramwBA1Zbz9yoN
        status: active
        display_name: 王昌
        merged_into_person_id: null
    - claim:
        id: c_ERFf0Fd7GO0aVHw0QG2pIg
        subject_person_id: p_U63UV8xnqF5BNWDzc6uk94
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Y6fRdWmSHjB68krJYq7FPT
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MPc3kG2y_qlrRrjGRotBqD
          claim_id: c_ERFf0Fd7GO0aVHw0QG2pIg
          source_id: s_ksUBeourDxaxZn3GSE3R_f
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200384 王杲）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ksUBeourDxaxZn3GSE3R_f
            source_type: api_record
            title: 中国历代人物传记资料库：王昊（CBDB 257029）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257029&o=json
            external_identifier: CBDB:257029
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_U63UV8xnqF5BNWDzc6uk94
        status: active
        display_name: 王昊
        merged_into_person_id: null
    - claim:
        id: c_mGI8UyZZrtnFXg7iXp4NV8
        subject_person_id: p_Y6fRdWmSHjB68krJYq7FPT
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Yns1iWuHDB3R29fGN1dznn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vB2M87fqT-zl9GpJyKxI7j
          claim_id: c_mGI8UyZZrtnFXg7iXp4NV8
          source_id: s_fS_aUacUNmB3Na_lzuZBgS
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200384 王杲）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fS_aUacUNmB3Na_lzuZBgS
            source_type: api_record
            title: 中国历代人物传记资料库：王昺（CBDB 257030）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257030&o=json
            external_identifier: CBDB:257030
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Yns1iWuHDB3R29fGN1dznn
        status: active
        display_name: 王昺
        merged_into_person_id: null
    - claim:
        id: c_uEpbDkGWMDW1KnnwziKu6P
        subject_person_id: p_Y6fRdWmSHjB68krJYq7FPT
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_peeTqcu5W5PCnqfBM2QXEG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_boN4Yo1zBsiPAtZc0tvVxJ
          claim_id: c_uEpbDkGWMDW1KnnwziKu6P
          source_id: s_ik-_CaUCEd5yBAcXext1oW
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200384 王杲）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ik-_CaUCEd5yBAcXext1oW
            source_type: api_record
            title: 中国历代人物传记资料库：王易（CBDB 257032）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257032&o=json
            external_identifier: CBDB:257032
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_peeTqcu5W5PCnqfBM2QXEG
        status: active
        display_name: 王易
        merged_into_person_id: null
    - claim:
        id: c_utkRTrqRi65n_xF4QKJqwr
        subject_person_id: p_Y6fRdWmSHjB68krJYq7FPT
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zWVPbLfhnq567spQxsGZdR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GBSIADUCLZqwdcWr_lQkgn
          claim_id: c_utkRTrqRi65n_xF4QKJqwr
          source_id: s_NcP7Rp-u83m8f2yLrPMeUf
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200384 王杲）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_NcP7Rp-u83m8f2yLrPMeUf
            source_type: api_record
            title: 中国历代人物传记资料库：王旦（CBDB 257033）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257033&o=json
            external_identifier: CBDB:257033
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zWVPbLfhnq567spQxsGZdR
        status: active
        display_name: 王旦
        merged_into_person_id: null
---

# 王杲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王杲 | accepted |
| birth.date | 1455年 | accepted |
| bio.summary | 王杲（生于1455年），明人物。明清進士進士，籍贯龍泉，入仕進士。（中国历代人物传记资料库 CBDB 200384） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_sQKFgBKrX6N7mKYfJwtry2 | 王洪 | accepted |
| ancestors | p_7j7J49ngvvxhFKjvaiM9YM | 王勤 | accepted |
| ancestors | p_jMF84FXJU1C6tuAfvF1Dz2 | 王永壽 | accepted |
| other | p_Ea9hQd6Q69frdQad5zNKrV | 王冕 | accepted |
| other | p_K7jaohG6D5Gda4GnuYwiPL | 王昆 | accepted |
| other | p_KiqHQvLZramwBA1Zbz9yoN | 王昌 | accepted |
| other | p_U63UV8xnqF5BNWDzc6uk94 | 王昊 | accepted |
| other | p_Yns1iWuHDB3R29fGN1dznn | 王昺 | accepted |
| other | p_peeTqcu5W5PCnqfBM2QXEG | 王易 | accepted |
| other | p_zWVPbLfhnq567spQxsGZdR | 王旦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昺（CBDB 257030）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257030&o=json)
- [中国历代人物传记资料库：王昌（CBDB 257031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257031&o=json)
- [中国历代人物传记资料库：王旦（CBDB 257033）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257033&o=json)
- [中国历代人物传记资料库：王杲（CBDB 200384）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200384&o=json)
- [中国历代人物传记资料库：王昊（CBDB 257029）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257029&o=json)
- [中国历代人物传记资料库：王洪（CBDB 257024）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257024&o=json)
- [中国历代人物传记资料库：王昆（CBDB 257028）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257028&o=json)
- [中国历代人物传记资料库：王冕（CBDB 257034）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257034&o=json)
- [中国历代人物传记资料库：王勤（CBDB 257023）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257023&o=json)
- [中国历代人物传记资料库：王易（CBDB 257032）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257032&o=json)
- [中国历代人物传记资料库：王永壽（CBDB 257022）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257022&o=json)
