---
schema: wang-person/v1
id: p_BVBKSKkbmm3UpBzszMgVLL
status: active
merged_into: null
display_name: 王漸造
cbdb_id: 279745
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_p8ZGHFWazXAzKRDKANQwyr
        subject_person_id: p_BVBKSKkbmm3UpBzszMgVLL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漸造，明人物。正德十二年進士，籍贯番禺。（中国历代人物传记资料库 CBDB 279745）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_PwjAixcfLwnaTtMj3frBVf
          claim_id: c_p8ZGHFWazXAzKRDKANQwyr
          source_id: s_EfjerZGxzGga2BQcKTA2gF
          stance: supports
          locator: CBDB:279745
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_EfjerZGxzGga2BQcKTA2gF
            source_type: api_record
            title: 中国历代人物传记资料库：王漸造（CBDB 279745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279745&o=json
            external_identifier: CBDB:279745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y3bEF5mp8FTsWhcpL8mSW7
        subject_person_id: p_BVBKSKkbmm3UpBzszMgVLL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漸造
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_w7CXc1QGu3G9xHPFHNBszc
          claim_id: c_Y3bEF5mp8FTsWhcpL8mSW7
          source_id: s_EfjerZGxzGga2BQcKTA2gF
          stance: supports
          locator: CBDB:279745
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tZLarg_HbuMLdZDlqr96Fm
        subject_person_id: p_83yzu33D3zG1xGPeEb9Ebe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BVBKSKkbmm3UpBzszMgVLL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MzB36_7NUBvwEoRwzcSB82
          claim_id: c_tZLarg_HbuMLdZDlqr96Fm
          source_id: s_eKDA9NC-CJG1PzkaHsMEz7
          stance: supports
          locator: CBDB：兄弟 王漸逵（126774）之父／母 王傅
          quotation: null
          interpretation_note: 由兄弟关系推断：王漸造 与 王漸逵 为同胞（CBDB 记「兄」），王漸逵 之父／母即 王漸造 之父／母。
          source:
            id: s_eKDA9NC-CJG1PzkaHsMEz7
            source_type: api_record
            title: 中国历代人物传记资料库：王漸造（CBDB 279745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279745&o=json
            external_identifier: CBDB:279745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_83yzu33D3zG1xGPeEb9Ebe
        status: active
        display_name: 王傅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_kv4fO_I2OZCrNNUiOyNA93
        subject_person_id: p_BVBKSKkbmm3UpBzszMgVLL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zAiQVyNzoej4Q1vwE84ZjB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NioVa479JUDKEChywUJWxz
          claim_id: c_kv4fO_I2OZCrNNUiOyNA93
          source_id: s_eKDA9NC-CJG1PzkaHsMEz7
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126774 王漸逵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_eKDA9NC-CJG1PzkaHsMEz7
            source_type: api_record
            title: 中国历代人物传记资料库：王漸造（CBDB 279745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279745&o=json
            external_identifier: CBDB:279745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zAiQVyNzoej4Q1vwE84ZjB
        status: active
        display_name: 王漸逵
        merged_into_person_id: null
---

# 王漸造

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王漸造，明人物。正德十二年進士，籍贯番禺。（中国历代人物传记资料库 CBDB 279745） | accepted |
| name.primary | 王漸造 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_83yzu33D3zG1xGPeEb9Ebe | 王傅 | accepted |
| other | p_zAiQVyNzoej4Q1vwE84ZjB | 王漸逵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王漸造（CBDB 279745）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279745&o=json)
