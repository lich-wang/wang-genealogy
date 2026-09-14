---
schema: wang-person/v1
id: p_NuNTQZExjKcTBss2PH1NRS
status: active
merged_into: null
display_name: 王懋
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QGx15px6Mgfwk5EypPPpRg
        subject_person_id: p_NuNTQZExjKcTBss2PH1NRS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v3WzJyhDDGzhHRdk4G3ui3
          claim_id: c_QGx15px6Mgfwk5EypPPpRg
          source_id: s_FoghBmjpWC2s9SbSqsQ6Wo
          stance: supports
          locator: CBDB:284140
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（284140）
          source: &a1
            id: s_FoghBmjpWC2s9SbSqsQ6Wo
            source_type: api_record
            title: 中国历代人物传记资料库：王懋（CBDB 284140）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284140&o=json
            external_identifier: CBDB:284140
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.184Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1dAehtq4i8NeckLNqDBrHS
        subject_person_id: p_NuNTQZExjKcTBss2PH1NRS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋，明人物。正德十六年進士，籍贯咸寧，曾任行人司行人。（中国历代人物传记资料库 CBDB 284140）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7FRzvWiTklvRUeR7fMUjFg
          claim_id: c_1dAehtq4i8NeckLNqDBrHS
          source_id: s_FoghBmjpWC2s9SbSqsQ6Wo
          stance: supports
          locator: CBDB:284140
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_7mgjT_ApbHai_E2l2rQxZl
        subject_person_id: p_NuNTQZExjKcTBss2PH1NRS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6BcNKRe82htPqYxnsGXoQy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cc13neTgqZN_zjF6G6jn83
          claim_id: c_7mgjT_ApbHai_E2l2rQxZl
          source_id: s_jrE49LbHYi16DqAT581UjL
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第一百零六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jrE49LbHYi16DqAT581UjL
            source_type: api_record
            title: 中国历代人物传记资料库：王用賓（CBDB 202137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202137&o=json
            external_identifier: CBDB:202137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.723Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6BcNKRe82htPqYxnsGXoQy
        status: active
        display_name: 王用賓
        merged_into_person_id: null
    - claim:
        id: c_13tpIskhY0LX8abFkM9BRP
        subject_person_id: p_NuNTQZExjKcTBss2PH1NRS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MQw6zqb5PMzxmJgQ7D4f7W
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_akK-6DkM76SsJGHRQhno22
          claim_id: c_13tpIskhY0LX8abFkM9BRP
          source_id: s_pUK85Rm0Of52ivHYeB26-r
          stance: supports
          locator: CBDB：兄弟 王用賓（202137）之父／母 王懋
          quotation: null
          interpretation_note: 由兄弟关系推断：王用相 与 王用賓 为同胞（CBDB 记「兄」），王用賓 之父／母即 王用相 之父／母。
          source:
            id: s_pUK85Rm0Of52ivHYeB26-r
            source_type: api_record
            title: 中国历代人物传记资料库：王用相（CBDB 284148）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284148&o=json
            external_identifier: CBDB:284148
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MQw6zqb5PMzxmJgQ7D4f7W
        status: active
        display_name: 王用相
        merged_into_person_id: null
    - claim:
        id: c_Z6MY3XbzpIEKTF6v9nVoWD
        subject_person_id: p_NuNTQZExjKcTBss2PH1NRS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WMTDY152yLgD1vUR6EUCH7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sJjsJ013NrX5VT2HUDu2lZ
          claim_id: c_Z6MY3XbzpIEKTF6v9nVoWD
          source_id: s_dqsXq0Cx2D9Yc_07MGg_vW
          stance: supports
          locator: CBDB：兄弟 王用賓（202137）之父／母 王懋
          quotation: null
          interpretation_note: 由兄弟关系推断：王用賢 与 王用賓 为同胞（CBDB 记「兄」），王用賓 之父／母即 王用賢 之父／母。
          source:
            id: s_dqsXq0Cx2D9Yc_07MGg_vW
            source_type: api_record
            title: 中国历代人物传记资料库：王用賢（CBDB 284147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284147&o=json
            external_identifier: CBDB:284147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WMTDY152yLgD1vUR6EUCH7
        status: active
        display_name: 王用賢
        merged_into_person_id: null
    - claim:
        id: c__IausQew1mjqfOLZBJqCxw
        subject_person_id: p_NuNTQZExjKcTBss2PH1NRS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cbYnYQZYQZy71Dxd2nAk58
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-zimoPvQWI9Xmdi9SOyE8J
          claim_id: c__IausQew1mjqfOLZBJqCxw
          source_id: s_QTa7f9__DEeYLQbtYoswLj
          stance: supports
          locator: CBDB：兄弟 王用賓（202137）之父／母 王懋
          quotation: null
          interpretation_note: 由兄弟关系推断：王用予 与 王用賓 为同胞（CBDB 记「兄」），王用賓 之父／母即 王用予 之父／母。
          source:
            id: s_QTa7f9__DEeYLQbtYoswLj
            source_type: api_record
            title: 中国历代人物传记资料库：王用予（CBDB 284145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284145&o=json
            external_identifier: CBDB:284145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cbYnYQZYQZy71Dxd2nAk58
        status: active
        display_name: 王用予
        merged_into_person_id: null
    - claim:
        id: c_ZHYdHKUHMO7xlh4kvIYJl-
        subject_person_id: p_NuNTQZExjKcTBss2PH1NRS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rsAF2KQAbJbejUUt9Zgq9J
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_strSO9vOwHk8FNB5R_sob3
          claim_id: c_ZHYdHKUHMO7xlh4kvIYJl-
          source_id: s_VlvTUPy4AwMdqSWxdbjf8P
          stance: supports
          locator: CBDB：兄弟 王用賓（202137）之父／母 王懋
          quotation: null
          interpretation_note: 由兄弟关系推断：王用卿 与 王用賓 为同胞（CBDB 记「兄」），王用賓 之父／母即 王用卿 之父／母。
          source:
            id: s_VlvTUPy4AwMdqSWxdbjf8P
            source_type: api_record
            title: 中国历代人物传记资料库：王用卿（CBDB 284146）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284146&o=json
            external_identifier: CBDB:284146
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rsAF2KQAbJbejUUt9Zgq9J
        status: active
        display_name: 王用卿
        merged_into_person_id: null
    - claim:
        id: c_LmaJImyFH0vWkG-_DYquXL
        subject_person_id: p_NuNTQZExjKcTBss2PH1NRS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yqzECoS43GzFGAMb7TPXrs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mMTeH19KV7vOJkO8H8eDcK
          claim_id: c_LmaJImyFH0vWkG-_DYquXL
          source_id: s_7E0M6jBgqq_oFIxKcwAc32
          stance: supports
          locator: CBDB：兄弟 王用賓（202137）之父／母 王懋
          quotation: null
          interpretation_note: 由兄弟关系推断：王用臣 与 王用賓 为同胞（CBDB 记「弟」），王用賓 之父／母即 王用臣 之父／母。
          source:
            id: s_7E0M6jBgqq_oFIxKcwAc32
            source_type: api_record
            title: 中国历代人物传记资料库：王用臣（CBDB 284143）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284143&o=json
            external_identifier: CBDB:284143
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yqzECoS43GzFGAMb7TPXrs
        status: active
        display_name: 王用臣
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王懋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懋 | accepted |
| bio.summary | 王懋，明人物。正德十六年進士，籍贯咸寧，曾任行人司行人。（中国历代人物传记资料库 CBDB 284140） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_6BcNKRe82htPqYxnsGXoQy | 王用賓 | accepted |
| children | p_MQw6zqb5PMzxmJgQ7D4f7W | 王用相 | accepted |
| children | p_WMTDY152yLgD1vUR6EUCH7 | 王用賢 | accepted |
| children | p_cbYnYQZYQZy71Dxd2nAk58 | 王用予 | accepted |
| children | p_rsAF2KQAbJbejUUt9Zgq9J | 王用卿 | accepted |
| children | p_yqzECoS43GzFGAMb7TPXrs | 王用臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王懋（CBDB 284140）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284140&o=json)
- [中国历代人物传记资料库：王用賓（CBDB 202137）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202137&o=json)
- [中国历代人物传记资料库：王用臣（CBDB 284143）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284143&o=json)
- [中国历代人物传记资料库：王用卿（CBDB 284146）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284146&o=json)
- [中国历代人物传记资料库：王用賢（CBDB 284147）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284147&o=json)
- [中国历代人物传记资料库：王用相（CBDB 284148）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284148&o=json)
- [中国历代人物传记资料库：王用予（CBDB 284145）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284145&o=json)
