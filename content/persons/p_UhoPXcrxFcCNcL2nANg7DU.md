---
schema: wang-person/v1
id: p_UhoPXcrxFcCNcL2nANg7DU
status: active
merged_into: null
display_name: 王佐
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rf74UpZgsUsKr4nH2wHrQ6
        subject_person_id: p_UhoPXcrxFcCNcL2nANg7DU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B6hdNjxtzJkXbCYU9gHLS2
          claim_id: c_rf74UpZgsUsKr4nH2wHrQ6
          source_id: s_F2qvP4xqRrWUNyezpGi78K
          stance: supports
          locator: CBDB:276670
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（276670）
          source: &a1
            id: s_F2qvP4xqRrWUNyezpGi78K
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 276670）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276670&o=json
            external_identifier: CBDB:276670
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.947Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RAFvxm24zLV7pUJnGZ37fk
        subject_person_id: p_UhoPXcrxFcCNcL2nANg7DU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐，明人物。正德六年進士，籍贯句容。（中国历代人物传记资料库 CBDB 276670）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WkBstBKXkOqBLZocRK-G7Q
          claim_id: c_RAFvxm24zLV7pUJnGZ37fk
          source_id: s_F2qvP4xqRrWUNyezpGi78K
          stance: supports
          locator: CBDB:276670
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_cILxVDu3cFVwKzRAkMgWa-
        subject_person_id: p_oATKFKdRvk6K28ajcm7R48
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UhoPXcrxFcCNcL2nANg7DU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fu6BhvGbwaRrhoJEFwJyDt
          claim_id: c_cILxVDu3cFVwKzRAkMgWa-
          source_id: s_SnDcX5WY4Sw2sgVWFChRd0
          stance: supports
          locator: CBDB：兄弟 王介（201700）之父／母 王惟德
          quotation: null
          interpretation_note: 由兄弟关系推断：王佐 与 王介 为同胞（CBDB 记「弟」），王介 之父／母即 王佐 之父／母。
          source:
            id: s_SnDcX5WY4Sw2sgVWFChRd0
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 276670）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276670&o=json
            external_identifier: CBDB:276670
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oATKFKdRvk6K28ajcm7R48
        status: active
        display_name: 王惟德
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_U3czJoiwHHgFsSjfUUGWtK
        subject_person_id: p_UhoPXcrxFcCNcL2nANg7DU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oEEcQRCAqs4YewibUGGkH9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_enrL8VFQn5wNVCUn8ovIy2
          claim_id: c_U3czJoiwHHgFsSjfUUGWtK
          source_id: s_SnDcX5WY4Sw2sgVWFChRd0
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201700 王介）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_SnDcX5WY4Sw2sgVWFChRd0
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 276670）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276670&o=json
            external_identifier: CBDB:276670
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oEEcQRCAqs4YewibUGGkH9
        status: active
        display_name: 王介
        merged_into_person_id: null
---

# 王佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佐 | accepted |
| bio.summary | 王佐，明人物。正德六年進士，籍贯句容。（中国历代人物传记资料库 CBDB 276670） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oATKFKdRvk6K28ajcm7R48 | 王惟德 | accepted |
| other | p_oEEcQRCAqs4YewibUGGkH9 | 王介 | accepted |

## 外部来源

- [中国历代人物传记资料库：王佐（CBDB 276670）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276670&o=json)
