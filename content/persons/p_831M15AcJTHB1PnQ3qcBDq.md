---
schema: wang-person/v1
id: p_831M15AcJTHB1PnQ3qcBDq
status: active
merged_into: null
display_name: 王遇春
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VszJyczBahJ67MK49o6GsB
        subject_person_id: p_831M15AcJTHB1PnQ3qcBDq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遇春
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uDEZJE3w5NKkhngtswdE9d
          claim_id: c_VszJyczBahJ67MK49o6GsB
          source_id: s_AnBhYasfEbf84Hv12nNd3V
          stance: supports
          locator: CBDB:320870
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（320870）
          source: &a1
            id: s_AnBhYasfEbf84Hv12nNd3V
            source_type: api_record
            title: 中国历代人物传记资料库：王遇春（CBDB 320870）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320870&o=json
            external_identifier: CBDB:320870
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.073Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XsdF6VApFH6uu9Nb8ueZf1
        subject_person_id: p_831M15AcJTHB1PnQ3qcBDq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遇春，明人物。嘉靖三十五年進士，籍贯安邑。（中国历代人物传记资料库 CBDB 320870）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fN5rXCe9MlM7W-L5B3SAw6
          claim_id: c_XsdF6VApFH6uu9Nb8ueZf1
          source_id: s_AnBhYasfEbf84Hv12nNd3V
          stance: supports
          locator: CBDB:320870
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7Td2aQwn0Khe8voKTnRzfa
        subject_person_id: p_MU2tTmhiuXd4gZeWVvtKyQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_831M15AcJTHB1PnQ3qcBDq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u4xeok0Nv2XtOvxJOpK6fb
          claim_id: c_7Td2aQwn0Khe8voKTnRzfa
          source_id: s_wFqti7Jv9wZzPk1i27_SfS
          stance: supports
          locator: CBDB：兄弟 王得春（204563）之父／母 王惟
          quotation: null
          interpretation_note: 由兄弟关系推断：王遇春 与 王得春 为同胞（CBDB 记「兄」），王得春 之父／母即 王遇春 之父／母。
          source:
            id: s_wFqti7Jv9wZzPk1i27_SfS
            source_type: api_record
            title: 中国历代人物传记资料库：王遇春（CBDB 320870）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320870&o=json
            external_identifier: CBDB:320870
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MU2tTmhiuXd4gZeWVvtKyQ
        status: active
        display_name: 王惟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_CvpgLBV588JQcX4CfdKmtY
        subject_person_id: p_831M15AcJTHB1PnQ3qcBDq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_W2D9MwuPsN8G7PZXkTNBD2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DGANQxXxQoxH67d9yIsV5I
          claim_id: c_CvpgLBV588JQcX4CfdKmtY
          source_id: s_wFqti7Jv9wZzPk1i27_SfS
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204563 王得春）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_wFqti7Jv9wZzPk1i27_SfS
            source_type: api_record
            title: 中国历代人物传记资料库：王遇春（CBDB 320870）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320870&o=json
            external_identifier: CBDB:320870
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_W2D9MwuPsN8G7PZXkTNBD2
        status: active
        display_name: 王得春
        merged_into_person_id: null
---

# 王遇春

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遇春 | accepted |
| bio.summary | 王遇春，明人物。嘉靖三十五年進士，籍贯安邑。（中国历代人物传记资料库 CBDB 320870） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MU2tTmhiuXd4gZeWVvtKyQ | 王惟 | accepted |
| other | p_W2D9MwuPsN8G7PZXkTNBD2 | 王得春 | accepted |

## 外部来源

- [中国历代人物传记资料库：王遇春（CBDB 320870）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=320870&o=json)
