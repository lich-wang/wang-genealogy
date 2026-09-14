---
schema: wang-person/v1
id: p_C4shoAc4qHJ5329427rx5b
status: active
merged_into: null
display_name: 王愈
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1kAx9fjS2s15hG7XjZiENo
        subject_person_id: p_C4shoAc4qHJ5329427rx5b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MmzRnzv5HGneLUMk5YyXGj
          claim_id: c_1kAx9fjS2s15hG7XjZiENo
          source_id: s_YxMkkbVip4bnZ7T6AiMZTX
          stance: supports
          locator: CBDB:276679
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（276679）
          source: &a1
            id: s_YxMkkbVip4bnZ7T6AiMZTX
            source_type: api_record
            title: 中国历代人物传记资料库：王愈（CBDB 276679）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276679&o=json
            external_identifier: CBDB:276679
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.950Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zxuGpw1xEvuYxQCXuEiCaw
        subject_person_id: p_C4shoAc4qHJ5329427rx5b
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愈，明人物。正德六年進士，籍贯南昌府，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 276679）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JmqxjgELAFn8VA7VLtU9Fr
          claim_id: c_zxuGpw1xEvuYxQCXuEiCaw
          source_id: s_YxMkkbVip4bnZ7T6AiMZTX
          stance: supports
          locator: CBDB:276679
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tD9NtL1gXCcXP1i-E3JfG0
        subject_person_id: p_xxLayHX5L9RnRbPwYHogx1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C4shoAc4qHJ5329427rx5b
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oxPvyq8MKJ1VBuLpbAXhR8
          claim_id: c_tD9NtL1gXCcXP1i-E3JfG0
          source_id: s_VDC71PssuexVRoyHCMLz3C
          stance: supports
          locator: CBDB：兄弟 王思（68065）之父／母 王俅
          quotation: null
          interpretation_note: 由兄弟关系推断：王愈 与 王思 为同胞（CBDB 记「弟」），王思 之父／母即 王愈 之父／母。
          source:
            id: s_VDC71PssuexVRoyHCMLz3C
            source_type: api_record
            title: 中国历代人物传记资料库：王愈（CBDB 276679）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276679&o=json
            external_identifier: CBDB:276679
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xxLayHX5L9RnRbPwYHogx1
        status: active
        display_name: 王俅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_t3C8uEQT-yIKmONid0n7V8
        subject_person_id: p_C4shoAc4qHJ5329427rx5b
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TdY8PeNMMQnspsGSLcC9h4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4nU44aCnPPyhyIBHN-kVeL
          claim_id: c_t3C8uEQT-yIKmONid0n7V8
          source_id: s_VDC71PssuexVRoyHCMLz3C
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 68065 王思）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VDC71PssuexVRoyHCMLz3C
            source_type: api_record
            title: 中国历代人物传记资料库：王愈（CBDB 276679）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276679&o=json
            external_identifier: CBDB:276679
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TdY8PeNMMQnspsGSLcC9h4
        status: active
        display_name: 王思
        merged_into_person_id: null
---

# 王愈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王愈 | accepted |
| bio.summary | 王愈，明人物。正德六年進士，籍贯南昌府，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 276679） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xxLayHX5L9RnRbPwYHogx1 | 王俅 | accepted |
| other | p_TdY8PeNMMQnspsGSLcC9h4 | 王思 | accepted |

## 外部来源

- [中国历代人物传记资料库：王愈（CBDB 276679）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276679&o=json)
