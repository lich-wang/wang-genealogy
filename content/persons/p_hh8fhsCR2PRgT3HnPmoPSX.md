---
schema: wang-person/v1
id: p_hh8fhsCR2PRgT3HnPmoPSX
status: active
merged_into: null
display_name: 王三接
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3Wsm25dDDH4ftjX2jA53oP
        subject_person_id: p_hh8fhsCR2PRgT3HnPmoPSX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三接
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M37escHKefxpUsudJL8yVM
          claim_id: c_3Wsm25dDDH4ftjX2jA53oP
          source_id: s_sxJvyqBdTQxrPtSTfsCZYG
          stance: supports
          locator: CBDB:203931
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203931）
          source: &a1
            id: s_sxJvyqBdTQxrPtSTfsCZYG
            source_type: api_record
            title: 中国历代人物传记资料库：王三接（CBDB 203931）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203931&o=json
            external_identifier: CBDB:203931
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.809Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_76PgyRFzvPmSjpDNj3eJyi
        subject_person_id: p_hh8fhsCR2PRgT3HnPmoPSX
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1526年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_chb9AfA7oYSzMM9BPDULGQ
          claim_id: c_76PgyRFzvPmSjpDNj3eJyi
          source_id: s_sxJvyqBdTQxrPtSTfsCZYG
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
        id: c_GrcSvwGJeJWpdEC4socJvL
        subject_person_id: p_hh8fhsCR2PRgT3HnPmoPSX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三接（生于1526年），明人物。明清進士進士，籍贯同安，入仕進士。（中国历代人物传记资料库 CBDB 203931）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nh1cakwVDx9u75e8J6GVV2
          claim_id: c_GrcSvwGJeJWpdEC4socJvL
          source_id: s_sxJvyqBdTQxrPtSTfsCZYG
          stance: supports
          locator: CBDB:203931
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__Zx_zhqpuJroNA9Hjh9JGz
        subject_person_id: p_fn2qF87LdSpD7mFSUY9aBy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hh8fhsCR2PRgT3HnPmoPSX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iSnrQpEgI_wN7w4RE88W9P
          claim_id: c__Zx_zhqpuJroNA9Hjh9JGz
          source_id: s_AWXpp7PGgrbvo4HhzKdng3
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第二甲第四十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AWXpp7PGgrbvo4HhzKdng3
            source_type: api_record
            title: 中国历代人物传记资料库：王濟（CBDB 312131）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312131&o=json
            external_identifier: CBDB:312131
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.864Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fn2qF87LdSpD7mFSUY9aBy
        status: active
        display_name: 王濟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_nYujhX3_K4t3J4Q-_3ZZu4
        subject_person_id: p_n1RAMNCqfHxmzGckd3HNDY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hh8fhsCR2PRgT3HnPmoPSX
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LRcWA2OF3lsmQtPtuAUZC3
          claim_id: c_nYujhX3_K4t3J4Q-_3ZZu4
          source_id: s_CdnT3HZkwYN7yeueLe8bzy
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第二甲第四十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CdnT3HZkwYN7yeueLe8bzy
            source_type: api_record
            title: 中国历代人物传记资料库：王岑（CBDB 312130）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312130&o=json
            external_identifier: CBDB:312130
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.863Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_n1RAMNCqfHxmzGckd3HNDY
        status: active
        display_name: 王岑
        merged_into_person_id: null
    - claim:
        id: c_drrANyxt7fGsMMfWQ4bpPK
        subject_person_id: p_Ve7cK1TkcHimk5vjDXkoQk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hh8fhsCR2PRgT3HnPmoPSX
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__lfQOTQz0OcIKBybstN0Pq
          claim_id: c_drrANyxt7fGsMMfWQ4bpPK
          source_id: s_LUjBrVf57CkKQ2gyvdjknn
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第二甲第四十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LUjBrVf57CkKQ2gyvdjknn
            source_type: api_record
            title: 中国历代人物传记资料库：王欽智（CBDB 312128）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312128&o=json
            external_identifier: CBDB:312128
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_Ve7cK1TkcHimk5vjDXkoQk
        status: active
        display_name: 王欽智
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_pUEXWi0NvZcFrZbzy2bOxR
        subject_person_id: p_HJV1MFkLfcab9XeNGhGirk
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hh8fhsCR2PRgT3HnPmoPSX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MMA6XgIufJseU27jIlVFQb
          claim_id: c_pUEXWi0NvZcFrZbzy2bOxR
          source_id: s_rkdMbzwTVw3WHP49A1FBpx
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203931 王三接）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_rkdMbzwTVw3WHP49A1FBpx
            source_type: api_record
            title: 中国历代人物传记资料库：王三錫（CBDB 312134）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312134&o=json
            external_identifier: CBDB:312134
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HJV1MFkLfcab9XeNGhGirk
        status: active
        display_name: 王三錫
        merged_into_person_id: null
    - claim:
        id: c_ahweMo5RZF8PVQLo2u7oMO
        subject_person_id: p_MMG96uL7Ktj4gzK2e3wPsU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hh8fhsCR2PRgT3HnPmoPSX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_feqvGbKvJGsIQlnwDt0Jfc
          claim_id: c_ahweMo5RZF8PVQLo2u7oMO
          source_id: s_lxYvc4LlhGho1wbomWso7p
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203931 王三接）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_lxYvc4LlhGho1wbomWso7p
            source_type: api_record
            title: 中国历代人物传记资料库：王三聘（CBDB 312135）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312135&o=json
            external_identifier: CBDB:312135
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MMG96uL7Ktj4gzK2e3wPsU
        status: active
        display_name: 王三聘
        merged_into_person_id: null
---

# 王三接

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三接 | accepted |
| birth.date | 1526年 | accepted |
| bio.summary | 王三接（生于1526年），明人物。明清進士進士，籍贯同安，入仕進士。（中国历代人物传记资料库 CBDB 203931） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fn2qF87LdSpD7mFSUY9aBy | 王濟 | accepted |
| ancestors | p_n1RAMNCqfHxmzGckd3HNDY | 王岑 | accepted |
| ancestors | p_Ve7cK1TkcHimk5vjDXkoQk | 王欽智 | accepted |
| other | p_HJV1MFkLfcab9XeNGhGirk | 王三錫 | accepted |
| other | p_MMG96uL7Ktj4gzK2e3wPsU | 王三聘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王岑（CBDB 312130）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312130&o=json)
- [中国历代人物传记资料库：王濟（CBDB 312131）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312131&o=json)
- [中国历代人物传记资料库：王欽智（CBDB 312128）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312128&o=json)
- [中国历代人物传记资料库：王三接（CBDB 203931）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203931&o=json)
- [中国历代人物传记资料库：王三聘（CBDB 312135）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312135&o=json)
- [中国历代人物传记资料库：王三錫（CBDB 312134）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312134&o=json)
