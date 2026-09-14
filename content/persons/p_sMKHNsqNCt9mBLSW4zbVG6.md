---
schema: wang-person/v1
id: p_sMKHNsqNCt9mBLSW4zbVG6
status: active
merged_into: null
display_name: 王容
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8pPP8BFXSmKThmgTBuS48F
        subject_person_id: p_sMKHNsqNCt9mBLSW4zbVG6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王容
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dYagsGQpieqo5G6cqZ2Xvk
          claim_id: c_8pPP8BFXSmKThmgTBuS48F
          source_id: s_nFBiX4gDFcaWwFc3xy23TK
          stance: supports
          locator: CBDB:312615
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（312615）
          source: &a1
            id: s_nFBiX4gDFcaWwFc3xy23TK
            source_type: api_record
            title: 中国历代人物传记资料库：王容（CBDB 312615）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312615&o=json
            external_identifier: CBDB:312615
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.872Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6Sp9s2w5F3kqsNNoVkQCv9
        subject_person_id: p_sMKHNsqNCt9mBLSW4zbVG6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王容，明人物。嘉靖二十九年進士，籍贯侯官，曾任壽官。（中国历代人物传记资料库 CBDB 312615）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-4J2HI6UIufoQGK-LJH1N5
          claim_id: c_6Sp9s2w5F3kqsNNoVkQCv9
          source_id: s_nFBiX4gDFcaWwFc3xy23TK
          stance: supports
          locator: CBDB:312615
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_JijlW2lMsbLLfQACcMOCie
        subject_person_id: p_sMKHNsqNCt9mBLSW4zbVG6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rJtRxxSC69LmdREGcBhbeB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gtd-wdFy7ykIfn9JKRtew0
          claim_id: c_JijlW2lMsbLLfQACcMOCie
          source_id: s_nFBiX4gDFcaWwFc3xy23TK
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第二甲第八十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rJtRxxSC69LmdREGcBhbeB
        status: active
        display_name: 王應時
        merged_into_person_id: null
    - claim:
        id: c_WwbV1nYXBe5JhAVGzPGD0N
        subject_person_id: p_sMKHNsqNCt9mBLSW4zbVG6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4RwG2rA1MEHAicMiDNgUpx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_07KB1ybi-DwvsJyqrG0Yof
          claim_id: c_WwbV1nYXBe5JhAVGzPGD0N
          source_id: s_bI6Jv9L3ogVPH0K9n8epgX
          stance: supports
          locator: CBDB：兄弟 王應時（203967）之父／母 王容
          quotation: null
          interpretation_note: 由兄弟关系推断：王應鍾 与 王應時 为同胞（CBDB 记「弟」），王應時 之父／母即 王應鍾 之父／母。
          source:
            id: s_bI6Jv9L3ogVPH0K9n8epgX
            source_type: api_record
            title: 中国历代人物传记资料库：王應鍾（CBDB 312620）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312620&o=json
            external_identifier: CBDB:312620
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4RwG2rA1MEHAicMiDNgUpx
        status: active
        display_name: 王應鍾
        merged_into_person_id: null
    - claim:
        id: c_bAUatLYsmrNj_QQNqFXIgO
        subject_person_id: p_sMKHNsqNCt9mBLSW4zbVG6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6P49iir1mVmmRNwpaPLZdm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mvzFl1bLTk6LwjTJTfT5-g
          claim_id: c_bAUatLYsmrNj_QQNqFXIgO
          source_id: s_8LlQb13l0JG49VnUPutJj5
          stance: supports
          locator: CBDB：兄弟 王應時（203967）之父／母 王容
          quotation: null
          interpretation_note: 由兄弟关系推断：王應鈺 与 王應時 为同胞（CBDB 记「兄」），王應時 之父／母即 王應鈺 之父／母。
          source:
            id: s_8LlQb13l0JG49VnUPutJj5
            source_type: api_record
            title: 中国历代人物传记资料库：王應鈺（CBDB 312623）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312623&o=json
            external_identifier: CBDB:312623
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6P49iir1mVmmRNwpaPLZdm
        status: active
        display_name: 王應鈺
        merged_into_person_id: null
    - claim:
        id: c_ux14RETojtr8SdPHloET4D
        subject_person_id: p_sMKHNsqNCt9mBLSW4zbVG6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9jKpMWA7Keaqffspbp7SCP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TMlvQBw9AQ6qD9QCSHqUQQ
          claim_id: c_ux14RETojtr8SdPHloET4D
          source_id: s_STpiXg29vUTf0TA4k3u0Tj
          stance: supports
          locator: CBDB：兄弟 王應時（203967）之父／母 王容
          quotation: null
          interpretation_note: 由兄弟关系推断：王應民 与 王應時 为同胞（CBDB 记「兄」），王應時 之父／母即 王應民 之父／母。
          source:
            id: s_STpiXg29vUTf0TA4k3u0Tj
            source_type: api_record
            title: 中国历代人物传记资料库：王應民（CBDB 312624）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312624&o=json
            external_identifier: CBDB:312624
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9jKpMWA7Keaqffspbp7SCP
        status: active
        display_name: 王應民
        merged_into_person_id: null
    - claim:
        id: c_yM7InlruWBKwBfxtZb2tJ9
        subject_person_id: p_sMKHNsqNCt9mBLSW4zbVG6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JGt1MkSi7BCejfPkiAJ9yB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kN2KjN-gtFx4IIVVFdZgsT
          claim_id: c_yM7InlruWBKwBfxtZb2tJ9
          source_id: s_F8OvlWM3ZsX8lZUDQQZ810
          stance: supports
          locator: CBDB：兄弟 王應時（203967）之父／母 王容
          quotation: null
          interpretation_note: 由兄弟关系推断：王應鎬 与 王應時 为同胞（CBDB 记「弟」），王應時 之父／母即 王應鎬 之父／母。
          source:
            id: s_F8OvlWM3ZsX8lZUDQQZ810
            source_type: api_record
            title: 中国历代人物传记资料库：王應鎬（CBDB 312619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312619&o=json
            external_identifier: CBDB:312619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JGt1MkSi7BCejfPkiAJ9yB
        status: active
        display_name: 王應鎬
        merged_into_person_id: null
    - claim:
        id: c_Lkia5xWIfZM0YA14DKt2EE
        subject_person_id: p_sMKHNsqNCt9mBLSW4zbVG6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_N3ZYQwdyfBwdq6MP4YBJ4Y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PQ_fGkdAW1LjK79tC-ZIzW
          claim_id: c_Lkia5xWIfZM0YA14DKt2EE
          source_id: s_aW2ul7sjqO7Bal03Gdiwxj
          stance: supports
          locator: CBDB：兄弟 王應時（203967）之父／母 王容
          quotation: null
          interpretation_note: 由兄弟关系推断：王應期 与 王應時 为同胞（CBDB 记「兄」），王應時 之父／母即 王應期 之父／母。
          source:
            id: s_aW2ul7sjqO7Bal03Gdiwxj
            source_type: api_record
            title: 中国历代人物传记资料库：王應期（CBDB 312622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312622&o=json
            external_identifier: CBDB:312622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_N3ZYQwdyfBwdq6MP4YBJ4Y
        status: active
        display_name: 王應期
        merged_into_person_id: null
    - claim:
        id: c_jXoui9jmNZgKoWQge0tCQZ
        subject_person_id: p_sMKHNsqNCt9mBLSW4zbVG6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_R2DLKwPnAk8fkgsQi8Uqhj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-B1Bol1kTtoj03nsOREvHj
          claim_id: c_jXoui9jmNZgKoWQge0tCQZ
          source_id: s_KgGUW0hz-UFEJYby0tfXIE
          stance: supports
          locator: CBDB：兄弟 王應時（203967）之父／母 王容
          quotation: null
          interpretation_note: 由兄弟关系推断：王應曾 与 王應時 为同胞（CBDB 记「弟」），王應時 之父／母即 王應曾 之父／母。
          source:
            id: s_KgGUW0hz-UFEJYby0tfXIE
            source_type: api_record
            title: 中国历代人物传记资料库：王應曾（CBDB 312621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312621&o=json
            external_identifier: CBDB:312621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_R2DLKwPnAk8fkgsQi8Uqhj
        status: active
        display_name: 王應曾
        merged_into_person_id: null
    - claim:
        id: c_qaQ2JIEDmLrf6vWt4qb6oo
        subject_person_id: p_sMKHNsqNCt9mBLSW4zbVG6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yMaA4CmZh9RAw9kLQycP1M
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ePUkWonpOjPQOKN89cobZ6
          claim_id: c_qaQ2JIEDmLrf6vWt4qb6oo
          source_id: s_8QlDbcio5tRLRAF7Afht0Y
          stance: supports
          locator: CBDB：兄弟 王應時（203967）之父／母 王容
          quotation: null
          interpretation_note: 由兄弟关系推断：王應聘 与 王應時 为同胞（CBDB 记「兄」），王應時 之父／母即 王應聘 之父／母。
          source:
            id: s_8QlDbcio5tRLRAF7Afht0Y
            source_type: api_record
            title: 中国历代人物传记资料库：王應聘（CBDB 312625）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312625&o=json
            external_identifier: CBDB:312625
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yMaA4CmZh9RAw9kLQycP1M
        status: active
        display_name: 王應聘
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王容

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王容 | accepted |
| bio.summary | 王容，明人物。嘉靖二十九年進士，籍贯侯官，曾任壽官。（中国历代人物传记资料库 CBDB 312615） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_rJtRxxSC69LmdREGcBhbeB | 王應時 | accepted |
| children | p_4RwG2rA1MEHAicMiDNgUpx | 王應鍾 | accepted |
| children | p_6P49iir1mVmmRNwpaPLZdm | 王應鈺 | accepted |
| children | p_9jKpMWA7Keaqffspbp7SCP | 王應民 | accepted |
| children | p_JGt1MkSi7BCejfPkiAJ9yB | 王應鎬 | accepted |
| children | p_N3ZYQwdyfBwdq6MP4YBJ4Y | 王應期 | accepted |
| children | p_R2DLKwPnAk8fkgsQi8Uqhj | 王應曾 | accepted |
| children | p_yMaA4CmZh9RAw9kLQycP1M | 王應聘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王容（CBDB 312615）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312615&o=json)
- [中国历代人物传记资料库：王應曾（CBDB 312621）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312621&o=json)
- [中国历代人物传记资料库：王應鎬（CBDB 312619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312619&o=json)
- [中国历代人物传记资料库：王應民（CBDB 312624）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312624&o=json)
- [中国历代人物传记资料库：王應聘（CBDB 312625）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312625&o=json)
- [中国历代人物传记资料库：王應期（CBDB 312622）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312622&o=json)
- [中国历代人物传记资料库：王應鈺（CBDB 312623）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312623&o=json)
- [中国历代人物传记资料库：王應鍾（CBDB 312620）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312620&o=json)
