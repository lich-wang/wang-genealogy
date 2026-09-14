---
schema: wang-person/v1
id: p_XDFGKptw1EWAKBbTEUcvCN
status: active
merged_into: null
display_name: 王銀
revision: 11
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mDiUdcqpH1bQjdWqtcRxBE
        subject_person_id: p_XDFGKptw1EWAKBbTEUcvCN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DHLFzW7vEq31SqQPAY4hSH
          claim_id: c_mDiUdcqpH1bQjdWqtcRxBE
          source_id: s_g7PvXEm32PrkrhEsYaPNjG
          stance: supports
          locator: CBDB:283926
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（283926）
          source: &a1
            id: s_g7PvXEm32PrkrhEsYaPNjG
            source_type: api_record
            title: 中国历代人物传记资料库：王銀（CBDB 283926）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283926&o=json
            external_identifier: CBDB:283926
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G6EhMQJoRUQkHQ8R7xP6WR
        subject_person_id: p_XDFGKptw1EWAKBbTEUcvCN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銀，明人物。正德十六年進士，籍贯崑山，曾任承事郎。（中国历代人物传记资料库 CBDB 283926）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qsGIFrkhFPm6vMB7nxZ7_4
          claim_id: c_G6EhMQJoRUQkHQ8R7xP6WR
          source_id: s_g7PvXEm32PrkrhEsYaPNjG
          stance: supports
          locator: CBDB:283926
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_73TwUCaNvmGDE2Sj9UgBAy
        subject_person_id: p_XDFGKptw1EWAKBbTEUcvCN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uQx6CsD653L6hRpaz3mPf9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qOhS3JptvL8TsEhaO5MoFp
          claim_id: c_73TwUCaNvmGDE2Sj9UgBAy
          source_id: s_g7PvXEm32PrkrhEsYaPNjG
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第八十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uQx6CsD653L6hRpaz3mPf9
        status: active
        display_name: 王同祖
        merged_into_person_id: null
    - claim:
        id: c_2W5t8R5z1iwOnwAsKwDTH-
        subject_person_id: p_XDFGKptw1EWAKBbTEUcvCN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1LEh3MeYQq6cJbuU57kEwb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hvR0H3oNYnFuT-XesvD-oF
          claim_id: c_2W5t8R5z1iwOnwAsKwDTH-
          source_id: s_3Da37TYtnd1BnjLerJfID8
          stance: supports
          locator: CBDB：兄弟 王同祖（126516）之父／母 王銀
          quotation: null
          interpretation_note: 由兄弟关系推断：王橞 与 王同祖 为同胞（CBDB 记「弟」），王同祖 之父／母即 王橞 之父／母。
          source:
            id: s_3Da37TYtnd1BnjLerJfID8
            source_type: api_record
            title: 中国历代人物传记资料库：王橞（CBDB 283934）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283934&o=json
            external_identifier: CBDB:283934
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1LEh3MeYQq6cJbuU57kEwb
        status: active
        display_name: 王橞
        merged_into_person_id: null
    - claim:
        id: c_EnT530sIUD9Pan2qmA9f0X
        subject_person_id: p_XDFGKptw1EWAKBbTEUcvCN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ARfUyaPkiWPDdKQtBaMiRZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hxzG8a5WHV2bqDizZ3ydtF
          claim_id: c_EnT530sIUD9Pan2qmA9f0X
          source_id: s_Agi8l7ZbAKkPcHffxQY2lj
          stance: supports
          locator: CBDB：兄弟 王同祖（126516）之父／母 王銀
          quotation: null
          interpretation_note: 由兄弟关系推断：王梓 与 王同祖 为同胞（CBDB 记「兄」），王同祖 之父／母即 王梓 之父／母。
          source:
            id: s_Agi8l7ZbAKkPcHffxQY2lj
            source_type: api_record
            title: 中国历代人物传记资料库：王梓（CBDB 283937）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283937&o=json
            external_identifier: CBDB:283937
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ARfUyaPkiWPDdKQtBaMiRZ
        status: active
        display_name: 王梓
        merged_into_person_id: null
    - claim:
        id: c_s3bkV04wxD0XFG1WL02ZLZ
        subject_person_id: p_XDFGKptw1EWAKBbTEUcvCN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CLeaiBYUN5tbTn66BTGdrC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I0BfYGEsDgj-n-CCWRYteN
          claim_id: c_s3bkV04wxD0XFG1WL02ZLZ
          source_id: s_B9554MvmzsgBYlBh1JXUyo
          stance: supports
          locator: CBDB：兄弟 王同祖（126516）之父／母 王銀
          quotation: null
          interpretation_note: 由兄弟关系推断：王椿 与 王同祖 为同胞（CBDB 记「弟」），王同祖 之父／母即 王椿 之父／母。
          source:
            id: s_B9554MvmzsgBYlBh1JXUyo
            source_type: api_record
            title: 中国历代人物传记资料库：王椿（CBDB 283929）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283929&o=json
            external_identifier: CBDB:283929
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CLeaiBYUN5tbTn66BTGdrC
        status: active
        display_name: 王椿
        merged_into_person_id: null
    - claim:
        id: c_Ldo2i9AuhD-mKF2ccxB7zQ
        subject_person_id: p_XDFGKptw1EWAKBbTEUcvCN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JPM14fvg5d7KEzXULUSSQ9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c5MMXrEGg-zPKmmVhfG0UA
          claim_id: c_Ldo2i9AuhD-mKF2ccxB7zQ
          source_id: s_VJSBnudgb9aiGr97QFKPmD
          stance: supports
          locator: CBDB：兄弟 王同祖（126516）之父／母 王銀
          quotation: null
          interpretation_note: 由兄弟关系推断：王栒 与 王同祖 为同胞（CBDB 记「弟」），王同祖 之父／母即 王栒 之父／母。
          source:
            id: s_VJSBnudgb9aiGr97QFKPmD
            source_type: api_record
            title: 中国历代人物传记资料库：王栒（CBDB 283933）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283933&o=json
            external_identifier: CBDB:283933
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JPM14fvg5d7KEzXULUSSQ9
        status: active
        display_name: 王栒
        merged_into_person_id: null
    - claim:
        id: c_l3cpRWkmjHL5UlsM5hu3hS
        subject_person_id: p_XDFGKptw1EWAKBbTEUcvCN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KA4HmoiV97LWU9V3M1kT13
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4U3K2VoN7Thw6VNcm8kzVP
          claim_id: c_l3cpRWkmjHL5UlsM5hu3hS
          source_id: s_8Y--frPAlTXOkeJv53nufB
          stance: supports
          locator: CBDB：兄弟 王同祖（126516）之父／母 王銀
          quotation: null
          interpretation_note: 由兄弟关系推断：王楫 与 王同祖 为同胞（CBDB 记「兄」），王同祖 之父／母即 王楫 之父／母。
          source:
            id: s_8Y--frPAlTXOkeJv53nufB
            source_type: api_record
            title: 中国历代人物传记资料库：王楫（CBDB 283938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283938&o=json
            external_identifier: CBDB:283938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KA4HmoiV97LWU9V3M1kT13
        status: active
        display_name: 王楫
        merged_into_person_id: null
    - claim:
        id: c_dKLwtcFuNWye7ViDe7uwaZ
        subject_person_id: p_XDFGKptw1EWAKBbTEUcvCN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_McmP9Bbqr5YXPbvtw6cjyH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TJztQDfG9Y_cRZVaOZk9wL
          claim_id: c_dKLwtcFuNWye7ViDe7uwaZ
          source_id: s_vceNACIXt_L61moC7aI6Ky
          stance: supports
          locator: CBDB：兄弟 王同祖（126516）之父／母 王銀
          quotation: null
          interpretation_note: 由兄弟关系推断：王杞 与 王同祖 为同胞（CBDB 记「弟」），王同祖 之父／母即 王杞 之父／母。
          source:
            id: s_vceNACIXt_L61moC7aI6Ky
            source_type: api_record
            title: 中国历代人物传记资料库：王杞（CBDB 283935）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283935&o=json
            external_identifier: CBDB:283935
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_McmP9Bbqr5YXPbvtw6cjyH
        status: active
        display_name: 王杞
        merged_into_person_id: null
    - claim:
        id: c__kQUMbe3PkizQ1P90yQRR4
        subject_person_id: p_XDFGKptw1EWAKBbTEUcvCN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XAHZeesRJrm1DKRLnVWrTc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h_GUsva_bFBmJdJ9SjRLu6
          claim_id: c__kQUMbe3PkizQ1P90yQRR4
          source_id: s_KxlsPD6_u9YrGskJOQmI9E
          stance: supports
          locator: CBDB：兄弟 王同祖（126516）之父／母 王銀
          quotation: null
          interpretation_note: 由兄弟关系推断：王栻 与 王同祖 为同胞（CBDB 记「弟」），王同祖 之父／母即 王栻 之父／母。
          source:
            id: s_KxlsPD6_u9YrGskJOQmI9E
            source_type: api_record
            title: 中国历代人物传记资料库：王栻（CBDB 283931）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283931&o=json
            external_identifier: CBDB:283931
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XAHZeesRJrm1DKRLnVWrTc
        status: active
        display_name: 王栻
        merged_into_person_id: null
    - claim:
        id: c_WAMflOjPEloZMwmjHiTWIv
        subject_person_id: p_XDFGKptw1EWAKBbTEUcvCN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mCXNDqUDAdX2G6Y6vF1Rhe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FnJZjr5tW8S8xuivnio5v9
          claim_id: c_WAMflOjPEloZMwmjHiTWIv
          source_id: s_CzArowBMFToJkXV_wNNfnh
          stance: supports
          locator: CBDB：兄弟 王同祖（126516）之父／母 王銀
          quotation: null
          interpretation_note: 由兄弟关系推断：王楠 与 王同祖 为同胞（CBDB 记「弟」），王同祖 之父／母即 王楠 之父／母。
          source:
            id: s_CzArowBMFToJkXV_wNNfnh
            source_type: api_record
            title: 中国历代人物传记资料库：王楠（CBDB 283930）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283930&o=json
            external_identifier: CBDB:283930
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mCXNDqUDAdX2G6Y6vF1Rhe
        status: active
        display_name: 王楠
        merged_into_person_id: null
    - claim:
        id: c_DsTCwuARR3dY_-5-QeFBO8
        subject_person_id: p_XDFGKptw1EWAKBbTEUcvCN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uJ8EyK9tK2GQ4mFQmLF235
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CC6iffpg4npqZgu_lVRCxA
          claim_id: c_DsTCwuARR3dY_-5-QeFBO8
          source_id: s_Zi2V_5YbqusMEYMFCB6mfn
          stance: supports
          locator: CBDB：兄弟 王同祖（126516）之父／母 王銀
          quotation: null
          interpretation_note: 由兄弟关系推断：王棟 与 王同祖 为同胞（CBDB 记「弟」），王同祖 之父／母即 王棟 之父／母。
          source:
            id: s_Zi2V_5YbqusMEYMFCB6mfn
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 283936）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283936&o=json
            external_identifier: CBDB:283936
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uJ8EyK9tK2GQ4mFQmLF235
        status: active
        display_name: 王棟
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王銀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銀 | accepted |
| bio.summary | 王銀，明人物。正德十六年進士，籍贯崑山，曾任承事郎。（中国历代人物传记资料库 CBDB 283926） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_uQx6CsD653L6hRpaz3mPf9 | 王同祖 | accepted |
| children | p_1LEh3MeYQq6cJbuU57kEwb | 王橞 | accepted |
| children | p_ARfUyaPkiWPDdKQtBaMiRZ | 王梓 | accepted |
| children | p_CLeaiBYUN5tbTn66BTGdrC | 王椿 | accepted |
| children | p_JPM14fvg5d7KEzXULUSSQ9 | 王栒 | accepted |
| children | p_KA4HmoiV97LWU9V3M1kT13 | 王楫 | accepted |
| children | p_McmP9Bbqr5YXPbvtw6cjyH | 王杞 | accepted |
| children | p_XAHZeesRJrm1DKRLnVWrTc | 王栻 | accepted |
| children | p_mCXNDqUDAdX2G6Y6vF1Rhe | 王楠 | accepted |
| children | p_uJ8EyK9tK2GQ4mFQmLF235 | 王棟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王椿（CBDB 283929）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283929&o=json)
- [中国历代人物传记资料库：王棟（CBDB 283936）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283936&o=json)
- [中国历代人物传记资料库：王橞（CBDB 283934）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283934&o=json)
- [中国历代人物传记资料库：王楫（CBDB 283938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283938&o=json)
- [中国历代人物传记资料库：王楠（CBDB 283930）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283930&o=json)
- [中国历代人物传记资料库：王杞（CBDB 283935）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283935&o=json)
- [中国历代人物传记资料库：王栻（CBDB 283931）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283931&o=json)
- [中国历代人物传记资料库：王栒（CBDB 283933）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283933&o=json)
- [中国历代人物传记资料库：王銀（CBDB 283926）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283926&o=json)
- [中国历代人物传记资料库：王梓（CBDB 283937）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283937&o=json)
