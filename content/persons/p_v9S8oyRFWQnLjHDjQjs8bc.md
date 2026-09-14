---
schema: wang-person/v1
id: p_v9S8oyRFWQnLjHDjQjs8bc
status: active
merged_into: null
display_name: 王寅
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iBDCWHzC8LLK4jmrGgjAv9
        subject_person_id: p_v9S8oyRFWQnLjHDjQjs8bc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GWoC4F3FYDRfkPDjk3Gf47
          claim_id: c_iBDCWHzC8LLK4jmrGgjAv9
          source_id: s_P2Qs5521hThEdkmPWDzduG
          stance: supports
          locator: CBDB:334516
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（334516）
          source: &a1
            id: s_P2Qs5521hThEdkmPWDzduG
            source_type: api_record
            title: 中国历代人物传记资料库：王寅（CBDB 334516）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334516&o=json
            external_identifier: CBDB:334516
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.445Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tzWmAe4zBG7Emyw6DTvx52
        subject_person_id: p_v9S8oyRFWQnLjHDjQjs8bc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寅，明人物。隆慶二年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 334516）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_T7TREbzx-NcXR11QdX4qE-
          claim_id: c_tzWmAe4zBG7Emyw6DTvx52
          source_id: s_P2Qs5521hThEdkmPWDzduG
          stance: supports
          locator: CBDB:334516
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_fvJ4VMB0MxNSx-C-NzJWvp
        subject_person_id: p_v9S8oyRFWQnLjHDjQjs8bc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kNK3hhmWa9pT6tDvK4Pp9u
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H8bLkOMum2KbsYsysL9dtQ
          claim_id: c_fvJ4VMB0MxNSx-C-NzJWvp
          source_id: s_P2Qs5521hThEdkmPWDzduG
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kNK3hhmWa9pT6tDvK4Pp9u
        status: active
        display_name: 王任重
        merged_into_person_id: null
    - claim:
        id: c_lHVIoGnVBSDtuH8vXisEA9
        subject_person_id: p_v9S8oyRFWQnLjHDjQjs8bc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9ykAqz3teDmM63tMZoaV1m
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GrrRRWLEdnH_lyQe7aL91J
          claim_id: c_lHVIoGnVBSDtuH8vXisEA9
          source_id: s_6IR3W6-qLDJrdsXsFoBvCB
          stance: supports
          locator: CBDB：兄弟 王任重（126522）之父／母 王寅
          quotation: null
          interpretation_note: 由兄弟关系推断：王任聘 与 王任重 为同胞（CBDB 记「弟」），王任重 之父／母即 王任聘 之父／母。
          source:
            id: s_6IR3W6-qLDJrdsXsFoBvCB
            source_type: api_record
            title: 中国历代人物传记资料库：王任聘（CBDB 334519）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334519&o=json
            external_identifier: CBDB:334519
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9ykAqz3teDmM63tMZoaV1m
        status: active
        display_name: 王任聘
        merged_into_person_id: null
    - claim:
        id: c_K1kwpvvTT8KueecVwd1YXt
        subject_person_id: p_v9S8oyRFWQnLjHDjQjs8bc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rYMJL55y1FnVEUGLgE11wj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XfjLfUG2MzanH2a0RK9ZaX
          claim_id: c_K1kwpvvTT8KueecVwd1YXt
          source_id: s_OIhZ7aCWCIWtTY0kGGSDtW
          stance: supports
          locator: CBDB：兄弟 王任重（126522）之父／母 王寅
          quotation: null
          interpretation_note: 由兄弟关系推断：王任翰 与 王任重 为同胞（CBDB 记「弟」），王任重 之父／母即 王任翰 之父／母。
          source:
            id: s_OIhZ7aCWCIWtTY0kGGSDtW
            source_type: api_record
            title: 中国历代人物传记资料库：王任翰（CBDB 334521）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334521&o=json
            external_identifier: CBDB:334521
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rYMJL55y1FnVEUGLgE11wj
        status: active
        display_name: 王任翰
        merged_into_person_id: null
    - claim:
        id: c_uFEwxzf1b5T7fAe4EfI_gs
        subject_person_id: p_v9S8oyRFWQnLjHDjQjs8bc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ybe5jUPL3jqpTv7TRwnMv5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bSr-4geElkcFAD-pek0n7b
          claim_id: c_uFEwxzf1b5T7fAe4EfI_gs
          source_id: s_rJdssbctaNth_xueaBnXe_
          stance: supports
          locator: CBDB：兄弟 王任重（126522）之父／母 王寅
          quotation: null
          interpretation_note: 由兄弟关系推断：王任選 与 王任重 为同胞（CBDB 记「兄」），王任重 之父／母即 王任選 之父／母。
          source:
            id: s_rJdssbctaNth_xueaBnXe_
            source_type: api_record
            title: 中国历代人物传记资料库：王任選（CBDB 334522）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334522&o=json
            external_identifier: CBDB:334522
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ybe5jUPL3jqpTv7TRwnMv5
        status: active
        display_name: 王任選
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王寅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寅 | accepted |
| bio.summary | 王寅，明人物。隆慶二年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 334516） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_kNK3hhmWa9pT6tDvK4Pp9u | 王任重 | accepted |
| children | p_9ykAqz3teDmM63tMZoaV1m | 王任聘 | accepted |
| children | p_rYMJL55y1FnVEUGLgE11wj | 王任翰 | accepted |
| children | p_ybe5jUPL3jqpTv7TRwnMv5 | 王任選 | accepted |

## 外部来源

- [中国历代人物传记资料库：王任翰（CBDB 334521）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334521&o=json)
- [中国历代人物传记资料库：王任聘（CBDB 334519）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334519&o=json)
- [中国历代人物传记资料库：王任選（CBDB 334522）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334522&o=json)
- [中国历代人物传记资料库：王寅（CBDB 334516）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334516&o=json)
