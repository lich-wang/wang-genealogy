---
schema: wang-person/v1
id: p_F1dDe3PyFQrT9iTGfXubC5
status: active
merged_into: null
display_name: 王昌
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7J2QJczo94Y2QpXTW1pQbY
        subject_person_id: p_F1dDe3PyFQrT9iTGfXubC5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_j4HyXJSiSfgnimH3CMy8jj
          claim_id: c_7J2QJczo94Y2QpXTW1pQbY
          source_id: s_P4aF6xywQmyXH4f6oEAXmD
          stance: supports
          locator: CBDB:261996
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（261996）
          source: &a1
            id: s_P4aF6xywQmyXH4f6oEAXmD
            source_type: api_record
            title: 中国历代人物传记资料库：王昌（CBDB 261996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261996&o=json
            external_identifier: CBDB:261996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.571Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fHtYU8eXyJJcx46nRXymi9
        subject_person_id: p_F1dDe3PyFQrT9iTGfXubC5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌，明人物。弘治三年進士，籍贯臨川，曾任知縣。（中国历代人物传记资料库 CBDB 261996）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hq7AaF9ByLUimXYiLr38b-
          claim_id: c_fHtYU8eXyJJcx46nRXymi9
          source_id: s_P4aF6xywQmyXH4f6oEAXmD
          stance: supports
          locator: CBDB:261996
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_l-x0y04afmiAA2Je7qXxQQ
        subject_person_id: p_Kk6HtmUPLWpRJz2JGAVP8C
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_F1dDe3PyFQrT9iTGfXubC5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nF8F-rOLXVdeBhVdkH6PtR
          claim_id: c_l-x0y04afmiAA2Je7qXxQQ
          source_id: s_hQjTySkisn8Esyz4U1WnGt
          stance: supports
          locator: CBDB：兄弟 王顯（198552）之父／母 王常
          quotation: null
          interpretation_note: 由兄弟关系推断：王昌 与 王顯 为同胞（CBDB 记「兄」），王顯 之父／母即 王昌 之父／母。
          source:
            id: s_hQjTySkisn8Esyz4U1WnGt
            source_type: api_record
            title: 中国历代人物传记资料库：王昌（CBDB 261996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261996&o=json
            external_identifier: CBDB:261996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Kk6HtmUPLWpRJz2JGAVP8C
        status: active
        display_name: 王常
        merged_into_person_id: null
    - claim:
        id: c_n8J0l8TL_Q9bLy23rCL1xl
        subject_person_id: p_HxJiGj8JHn8DhGEqa1wJaa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_F1dDe3PyFQrT9iTGfXubC5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qCDJJZRJAVsUEBhtT5AOrc
          claim_id: c_n8J0l8TL_Q9bLy23rCL1xl
          source_id: s_hQjTySkisn8Esyz4U1WnGt
          stance: supports
          locator: CBDB：兄弟 王統（200725）之父／母 王大綸
          quotation: null
          interpretation_note: 由兄弟关系推断：王昌 与 王統 为同胞（CBDB 记「弟」），王統 之父／母即 王昌 之父／母。
          source:
            id: s_hQjTySkisn8Esyz4U1WnGt
            source_type: api_record
            title: 中国历代人物传记资料库：王昌（CBDB 261996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261996&o=json
            external_identifier: CBDB:261996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HxJiGj8JHn8DhGEqa1wJaa
        status: active
        display_name: 王大綸
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_HM8SaSA5hGoKUPxwdDvfu1
        subject_person_id: p_F1dDe3PyFQrT9iTGfXubC5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_upmMFAstLHjgZ6eyALiaEs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hVY8IsDQhwW30qHA9pdyge
          claim_id: c_HM8SaSA5hGoKUPxwdDvfu1
          source_id: s_hQjTySkisn8Esyz4U1WnGt
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198552 王顯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hQjTySkisn8Esyz4U1WnGt
            source_type: api_record
            title: 中国历代人物传记资料库：王昌（CBDB 261996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261996&o=json
            external_identifier: CBDB:261996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_upmMFAstLHjgZ6eyALiaEs
        status: active
        display_name: 王顯
        merged_into_person_id: null
    - claim:
        id: c_MGwWN7iVpo_Y0zK7enJbzM
        subject_person_id: p_2LSGWLrXs7XnndXnW76V8U
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_F1dDe3PyFQrT9iTGfXubC5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5mUiTHM0ZVJRykWAlZpeS0
          claim_id: c_MGwWN7iVpo_Y0zK7enJbzM
          source_id: s_hQjTySkisn8Esyz4U1WnGt
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200725 王統）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hQjTySkisn8Esyz4U1WnGt
            source_type: api_record
            title: 中国历代人物传记资料库：王昌（CBDB 261996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261996&o=json
            external_identifier: CBDB:261996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2LSGWLrXs7XnndXnW76V8U
        status: active
        display_name: 王統
        merged_into_person_id: null
---

# 王昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昌 | accepted |
| bio.summary | 王昌，明人物。弘治三年進士，籍贯臨川，曾任知縣。（中国历代人物传记资料库 CBDB 261996） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Kk6HtmUPLWpRJz2JGAVP8C | 王常 | accepted |
| parents | p_HxJiGj8JHn8DhGEqa1wJaa | 王大綸 | accepted |
| other | p_upmMFAstLHjgZ6eyALiaEs | 王顯 | accepted |
| other | p_2LSGWLrXs7XnndXnW76V8U | 王統 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昌（CBDB 261996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261996&o=json)
