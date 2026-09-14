---
schema: wang-person/v1
id: p_DiUjnBUrVdppFuT1xGUKRn
status: active
merged_into: null
display_name: 王績
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XNMxHHsUx85aCyCsFA4C1s
        subject_person_id: p_DiUjnBUrVdppFuT1xGUKRn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王績
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XWbQoh4U5qSrcypp71qaM8
          claim_id: c_XNMxHHsUx85aCyCsFA4C1s
          source_id: s_h7dSqToxPusngYizpym5b2
          stance: supports
          locator: CBDB:257675
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（257675）
          source: &a1
            id: s_h7dSqToxPusngYizpym5b2
            source_type: api_record
            title: 中国历代人物传记资料库：王績（CBDB 257675）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257675&o=json
            external_identifier: CBDB:257675
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.428Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XaogSutifZTBMnuYoahTYZ
        subject_person_id: p_DiUjnBUrVdppFuT1xGUKRn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王績，明人物。成化二十三年進士，籍贯濱州。（中国历代人物传记资料库 CBDB 257675）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LTLBBp_CS8QBm8tu2yTYD2
          claim_id: c_XaogSutifZTBMnuYoahTYZ
          source_id: s_h7dSqToxPusngYizpym5b2
          stance: supports
          locator: CBDB:257675
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Zc8uKmIsDTQZyzAEyyKu7H
        subject_person_id: p_mJNJQFE9z1VKCuzwAbNY9W
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DiUjnBUrVdppFuT1xGUKRn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fm-RMrFfCqmh8np4k1FNbH
          claim_id: c_Zc8uKmIsDTQZyzAEyyKu7H
          source_id: s_qNjn5RUq9Gih_o0ItChffY
          stance: supports
          locator: CBDB：兄弟 王綸（126787）之父／母 王信
          quotation: null
          interpretation_note: 由兄弟关系推断：王績 与 王綸 为同胞（CBDB 记「兄」），王綸 之父／母即 王績 之父／母。
          source:
            id: s_qNjn5RUq9Gih_o0ItChffY
            source_type: api_record
            title: 中国历代人物传记资料库：王績（CBDB 257675）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257675&o=json
            external_identifier: CBDB:257675
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mJNJQFE9z1VKCuzwAbNY9W
        status: active
        display_name: 王信
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_6U_TnUc6tCb1OliVjtz07O
        subject_person_id: p_DiUjnBUrVdppFuT1xGUKRn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NCS3B6qxdWUziaAFj1bjfH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1UQfOuWRKjgX89Hm4mdNb1
          claim_id: c_6U_TnUc6tCb1OliVjtz07O
          source_id: s_qNjn5RUq9Gih_o0ItChffY
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126787 王綸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qNjn5RUq9Gih_o0ItChffY
            source_type: api_record
            title: 中国历代人物传记资料库：王績（CBDB 257675）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257675&o=json
            external_identifier: CBDB:257675
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NCS3B6qxdWUziaAFj1bjfH
        status: active
        display_name: 王綸
        merged_into_person_id: null
    - claim:
        id: c_3uXFkW1hhW6pBeomlPMjvL
        subject_person_id: p_DiUjnBUrVdppFuT1xGUKRn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ppyWLxr8Sp6zZ7s3LPugbF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cVatUG44LFv1O2e6magaN0
          claim_id: c_3uXFkW1hhW6pBeomlPMjvL
          source_id: s_qNjn5RUq9Gih_o0ItChffY
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200972 王綬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qNjn5RUq9Gih_o0ItChffY
            source_type: api_record
            title: 中国历代人物传记资料库：王績（CBDB 257675）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257675&o=json
            external_identifier: CBDB:257675
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ppyWLxr8Sp6zZ7s3LPugbF
        status: active
        display_name: 王綬
        merged_into_person_id: null
---

# 王績

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王績 | accepted |
| bio.summary | 王績，明人物。成化二十三年進士，籍贯濱州。（中国历代人物传记资料库 CBDB 257675） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mJNJQFE9z1VKCuzwAbNY9W | 王信 | accepted |
| other | p_NCS3B6qxdWUziaAFj1bjfH | 王綸 | accepted |
| other | p_ppyWLxr8Sp6zZ7s3LPugbF | 王綬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王績（CBDB 257675）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257675&o=json)
