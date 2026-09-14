---
schema: wang-person/v1
id: p_SXrnVya55CwoArA8f7hzUE
status: active
merged_into: null
display_name: 王達
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L6SYDjwF6cqDd84984qaJ8
        subject_person_id: p_SXrnVya55CwoArA8f7hzUE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王達
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UBJ4bncXbrQiqiTwmPLx22
          claim_id: c_L6SYDjwF6cqDd84984qaJ8
          source_id: s_xK9pbrCvp26Y629yjBwrDF
          stance: supports
          locator: CBDB:290813
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（290813）
          source: &a1
            id: s_xK9pbrCvp26Y629yjBwrDF
            source_type: api_record
            title: 中国历代人物传记资料库：王達（CBDB 290813）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290813&o=json
            external_identifier: CBDB:290813
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.346Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zKoE9aKhCDEXwtG1JfC6D4
        subject_person_id: p_SXrnVya55CwoArA8f7hzUE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王達，明人物。嘉靖十一年進士，籍贯南充。（中国历代人物传记资料库 CBDB 290813）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1qK40_e1MO016-jVv0kOgz
          claim_id: c_zKoE9aKhCDEXwtG1JfC6D4
          source_id: s_xK9pbrCvp26Y629yjBwrDF
          stance: supports
          locator: CBDB:290813
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Rx_bHFlnz9xTCT1NH0XDcg
        subject_person_id: p_N7qE8Uar4CzK9TTK6UVM28
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SXrnVya55CwoArA8f7hzUE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Hz4LpkNOcLBWCxRKrfOXvc
          claim_id: c_Rx_bHFlnz9xTCT1NH0XDcg
          source_id: s_Ny-f8fa-XjaDXXbzmxGDYo
          stance: supports
          locator: CBDB：兄弟 王廷（69148）之父／母 王希文
          quotation: null
          interpretation_note: 由兄弟关系推断：王達 与 王廷 为同胞（CBDB 记「弟」），王廷 之父／母即 王達 之父／母。
          source:
            id: s_Ny-f8fa-XjaDXXbzmxGDYo
            source_type: api_record
            title: 中国历代人物传记资料库：王達（CBDB 290813）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290813&o=json
            external_identifier: CBDB:290813
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_N7qE8Uar4CzK9TTK6UVM28
        status: active
        display_name: 王希文
        merged_into_person_id: null
    - claim:
        id: c_vu-xYlOPRRiejo_90F132A
        subject_person_id: p_rw3SZ4WX6NQUFQKsyEHVZ4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SXrnVya55CwoArA8f7hzUE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dJk_DMsCT-EizIy461xwGT
          claim_id: c_vu-xYlOPRRiejo_90F132A
          source_id: s_Ny-f8fa-XjaDXXbzmxGDYo
          stance: supports
          locator: CBDB：兄弟 王遵（202897）之父／母 王希德
          quotation: null
          interpretation_note: 由兄弟关系推断：王達 与 王遵 为同胞（CBDB 记「弟」），王遵 之父／母即 王達 之父／母。
          source:
            id: s_Ny-f8fa-XjaDXXbzmxGDYo
            source_type: api_record
            title: 中国历代人物传记资料库：王達（CBDB 290813）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290813&o=json
            external_identifier: CBDB:290813
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rw3SZ4WX6NQUFQKsyEHVZ4
        status: active
        display_name: 王希德
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_7GHxWlZBGlc_bcAmqHMHoj
        subject_person_id: p_SXrnVya55CwoArA8f7hzUE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pv2pDE9A1jj2uMGHCGpC7T
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QgKQgMIfRquSm7qVFKbg30
          claim_id: c_7GHxWlZBGlc_bcAmqHMHoj
          source_id: s_Ny-f8fa-XjaDXXbzmxGDYo
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 69148 王廷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Ny-f8fa-XjaDXXbzmxGDYo
            source_type: api_record
            title: 中国历代人物传记资料库：王達（CBDB 290813）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290813&o=json
            external_identifier: CBDB:290813
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pv2pDE9A1jj2uMGHCGpC7T
        status: active
        display_name: 王廷
        merged_into_person_id: null
    - claim:
        id: c_UyXIrDaEtFOotk0YRGI6lv
        subject_person_id: p_2LvZRKXC4bvnUqu11G57yb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_SXrnVya55CwoArA8f7hzUE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DIlKXExUlZDq8R1v_u83X6
          claim_id: c_UyXIrDaEtFOotk0YRGI6lv
          source_id: s_Ny-f8fa-XjaDXXbzmxGDYo
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202897 王遵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Ny-f8fa-XjaDXXbzmxGDYo
            source_type: api_record
            title: 中国历代人物传记资料库：王達（CBDB 290813）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290813&o=json
            external_identifier: CBDB:290813
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2LvZRKXC4bvnUqu11G57yb
        status: active
        display_name: 王遵
        merged_into_person_id: null
---

# 王達

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王達 | accepted |
| bio.summary | 王達，明人物。嘉靖十一年進士，籍贯南充。（中国历代人物传记资料库 CBDB 290813） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_N7qE8Uar4CzK9TTK6UVM28 | 王希文 | accepted |
| parents | p_rw3SZ4WX6NQUFQKsyEHVZ4 | 王希德 | accepted |
| other | p_pv2pDE9A1jj2uMGHCGpC7T | 王廷 | accepted |
| other | p_2LvZRKXC4bvnUqu11G57yb | 王遵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王達（CBDB 290813）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290813&o=json)
