---
schema: wang-person/v1
id: p_rYMJL55y1FnVEUGLgE11wj
status: active
merged_into: null
display_name: 王任翰
cbdb_id: 334521
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ADR7MX1G3C8kmpX1m1EMJm
        subject_person_id: p_rYMJL55y1FnVEUGLgE11wj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王任翰，明人物。隆慶二年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 334521）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_bejxJZfe0RXuHBIMdQx0rI
          claim_id: c_ADR7MX1G3C8kmpX1m1EMJm
          source_id: s_cfRF1MDF6ETDFB9cca6aXi
          stance: supports
          locator: CBDB:334521
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_cfRF1MDF6ETDFB9cca6aXi
            source_type: api_record
            title: 中国历代人物传记资料库：王任翰（CBDB 334521）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334521&o=json
            external_identifier: CBDB:334521
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GxSHFvBe5kgwgCABAEtEk2
        subject_person_id: p_rYMJL55y1FnVEUGLgE11wj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王任翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MmGM3WJN17iUGG6yqWx2Nu
          claim_id: c_GxSHFvBe5kgwgCABAEtEk2
          source_id: s_cfRF1MDF6ETDFB9cca6aXi
          stance: supports
          locator: CBDB:334521
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
        id: p_v9S8oyRFWQnLjHDjQjs8bc
        status: active
        display_name: 王寅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_i1Xdd9v6_B9geSn7PN9D35
        subject_person_id: p_kNK3hhmWa9pT6tDvK4Pp9u
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rYMJL55y1FnVEUGLgE11wj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PRuEfBqF_hTURSd37FaW0C
          claim_id: c_i1Xdd9v6_B9geSn7PN9D35
          source_id: s_OIhZ7aCWCIWtTY0kGGSDtW
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126522 王任重）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
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
        id: p_kNK3hhmWa9pT6tDvK4Pp9u
        status: active
        display_name: 王任重
        merged_into_person_id: null
---

# 王任翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王任翰，明人物。隆慶二年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 334521） | accepted |
| name.primary | 王任翰 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_v9S8oyRFWQnLjHDjQjs8bc | 王寅 | accepted |
| other | p_kNK3hhmWa9pT6tDvK4Pp9u | 王任重 | accepted |

## 外部来源

- [中国历代人物传记资料库：王任翰（CBDB 334521）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334521&o=json)
