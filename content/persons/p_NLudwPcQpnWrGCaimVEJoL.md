---
schema: wang-person/v1
id: p_NLudwPcQpnWrGCaimVEJoL
status: active
merged_into: null
display_name: 王煉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YTgkgdgDkMUnehXRnnKmWE
        subject_person_id: p_NLudwPcQpnWrGCaimVEJoL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kBrtcWhT2RsroNk6MTf89b
          claim_id: c_YTgkgdgDkMUnehXRnnKmWE
          source_id: s_W9B5N6Cd2x6uC3C3jRyzLk
          stance: supports
          locator: CBDB:296940
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（296940）
          source: &a1
            id: s_W9B5N6Cd2x6uC3C3jRyzLk
            source_type: api_record
            title: 中国历代人物传记资料库：王煉（CBDB 296940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296940&o=json
            external_identifier: CBDB:296940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.536Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1esubyBwbMd8GjhFg19C1M
        subject_person_id: p_NLudwPcQpnWrGCaimVEJoL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王煉，明人物。嘉靖十四年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 296940）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YTjdyGO_YV2VPz51YNiwY8
          claim_id: c_1esubyBwbMd8GjhFg19C1M
          source_id: s_W9B5N6Cd2x6uC3C3jRyzLk
          stance: supports
          locator: CBDB:296940
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6GQ3HC4O-MSZEwuuq1TC1u
        subject_person_id: p_wVWD91i8nHFULhDK68aKM7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NLudwPcQpnWrGCaimVEJoL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V-v4YU1D5L_iQo4Y3XasoU
          claim_id: c_6GQ3HC4O-MSZEwuuq1TC1u
          source_id: s_pZzX2L4-7UwKeQ18i9SBqq
          stance: supports
          locator: CBDB：兄弟 王燁（126822）之父／母 王材
          quotation: null
          interpretation_note: 由兄弟关系推断：王煉 与 王燁 为同胞（CBDB 记「兄」），王燁 之父／母即 王煉 之父／母。
          source:
            id: s_pZzX2L4-7UwKeQ18i9SBqq
            source_type: api_record
            title: 中国历代人物传记资料库：王煉（CBDB 296940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296940&o=json
            external_identifier: CBDB:296940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wVWD91i8nHFULhDK68aKM7
        status: active
        display_name: 王材
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_tVrClx7-e-dsqiyebipt-T
        subject_person_id: p_NLudwPcQpnWrGCaimVEJoL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ve3PDbNGqaNQgddGuw2C43
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pIbpJzcDRonrgNQePwhyXg
          claim_id: c_tVrClx7-e-dsqiyebipt-T
          source_id: s_pZzX2L4-7UwKeQ18i9SBqq
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126822 王燁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_pZzX2L4-7UwKeQ18i9SBqq
            source_type: api_record
            title: 中国历代人物传记资料库：王煉（CBDB 296940）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296940&o=json
            external_identifier: CBDB:296940
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ve3PDbNGqaNQgddGuw2C43
        status: active
        display_name: 王燁
        merged_into_person_id: null
---

# 王煉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王煉 | accepted |
| bio.summary | 王煉，明人物。嘉靖十四年進士，籍贯金壇。（中国历代人物传记资料库 CBDB 296940） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wVWD91i8nHFULhDK68aKM7 | 王材 | accepted |
| other | p_ve3PDbNGqaNQgddGuw2C43 | 王燁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王煉（CBDB 296940）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296940&o=json)
