---
schema: wang-person/v1
id: p_QLg57kGsktZ3ogwQyMCe5D
status: active
merged_into: null
display_name: 王濟
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mgV462DDcKCsJbPnJ1mCbM
        subject_person_id: p_QLg57kGsktZ3ogwQyMCe5D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8TVaD5HAkHFGw6536p7A6U
          claim_id: c_mgV462DDcKCsJbPnJ1mCbM
          source_id: s_7FHkPzg54v5bTgsJ2E7GM9
          stance: supports
          locator: CBDB:126843
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126843）
          source: &a1
            id: s_7FHkPzg54v5bTgsJ2E7GM9
            source_type: api_record
            title: 中国历代人物传记资料库：王濟（CBDB 126843）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126843&o=json
            external_identifier: CBDB:126843
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.256Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q9YpNcB92MNHfoBT8PVcBy
        subject_person_id: p_QLg57kGsktZ3ogwQyMCe5D
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濟，明人物。明清進士進士，籍贯烏程，入仕進士，曾任知府。（中国历代人物传记资料库 CBDB 126843）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8_F9UYjr_UrxMLd2Ws3OHJ
          claim_id: c_Q9YpNcB92MNHfoBT8PVcBy
          source_id: s_7FHkPzg54v5bTgsJ2E7GM9
          stance: supports
          locator: CBDB:126843
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_a3i0IipBysidvP2IbMQzfR
        subject_person_id: p_uPy1xxHnaF5N46mHou6eoZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QLg57kGsktZ3ogwQyMCe5D
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OPmfo5nL0g4x0fW0cFDwDv
          claim_id: c_a3i0IipBysidvP2IbMQzfR
          source_id: s_JFEUMBoStgcGfpBonVnTYd
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第二甲第四十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JFEUMBoStgcGfpBonVnTYd
            source_type: api_record
            title: 中国历代人物传记资料库：王禮（CBDB 255104）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255104&o=json
            external_identifier: CBDB:255104
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.328Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_uPy1xxHnaF5N46mHou6eoZ
        status: active
        display_name: 王禮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_fdwqn518h5LNI4WeUhNoSF
        subject_person_id: p_Q77UD6T281bv2U6BNYSTjJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_QLg57kGsktZ3ogwQyMCe5D
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HdiIY9qlZeLb7URv2T9YcJ
          claim_id: c_fdwqn518h5LNI4WeUhNoSF
          source_id: s_Xw34hBKGV4fxGSCGucmh28
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第二甲第四十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Xw34hBKGV4fxGSCGucmh28
            source_type: api_record
            title: 中国历代人物传记资料库：王希賢（CBDB 255102）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255102&o=json
            external_identifier: CBDB:255102
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.328Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Q77UD6T281bv2U6BNYSTjJ
        status: active
        display_name: 王希賢
        merged_into_person_id: null
    - claim:
        id: c_78XHnqKJHubF7e4O0Dmq8G
        subject_person_id: p_94pBfwALAX3sUH1uWsCED7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_QLg57kGsktZ3ogwQyMCe5D
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HP4YeNaXsGWpRv8Uru1qkI
          claim_id: c_78XHnqKJHubF7e4O0Dmq8G
          source_id: s_VJRuJ4TAtx8Zh4TLUYvQ13
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第二甲第四十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VJRuJ4TAtx8Zh4TLUYvQ13
            source_type: api_record
            title: 中国历代人物传记资料库：王重理（CBDB 255101）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255101&o=json
            external_identifier: CBDB:255101
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_94pBfwALAX3sUH1uWsCED7
        status: active
        display_name: 王重理
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_QGS861t883NqTtHIyfx9Yx
        subject_person_id: p_6g9qerdHZLg85rR6amgb33
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_QLg57kGsktZ3ogwQyMCe5D
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Yy7KUsOn6Nq1yPAhGqeJ22
          claim_id: c_QGS861t883NqTtHIyfx9Yx
          source_id: s_0oEsevZSt0suZMtIDAJOjB
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126843 王濟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0oEsevZSt0suZMtIDAJOjB
            source_type: api_record
            title: 中国历代人物传记资料库：王觀（CBDB 255107）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255107&o=json
            external_identifier: CBDB:255107
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6g9qerdHZLg85rR6amgb33
        status: active
        display_name: 王觀
        merged_into_person_id: null
---

# 王濟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濟 | accepted |
| bio.summary | 王濟，明人物。明清進士進士，籍贯烏程，入仕進士，曾任知府。（中国历代人物传记资料库 CBDB 126843） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uPy1xxHnaF5N46mHou6eoZ | 王禮 | accepted |
| ancestors | p_Q77UD6T281bv2U6BNYSTjJ | 王希賢 | accepted |
| ancestors | p_94pBfwALAX3sUH1uWsCED7 | 王重理 | accepted |
| other | p_6g9qerdHZLg85rR6amgb33 | 王觀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王觀（CBDB 255107）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255107&o=json)
- [中国历代人物传记资料库：王濟（CBDB 126843）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126843&o=json)
- [中国历代人物传记资料库：王禮（CBDB 255104）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255104&o=json)
- [中国历代人物传记资料库：王希賢（CBDB 255102）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255102&o=json)
- [中国历代人物传记资料库：王重理（CBDB 255101）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255101&o=json)
