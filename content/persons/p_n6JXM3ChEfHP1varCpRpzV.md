---
schema: wang-person/v1
id: p_n6JXM3ChEfHP1varCpRpzV
status: active
merged_into: null
display_name: 王鑌
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AQwP33SCK5dnig88dSBmP5
        subject_person_id: p_n6JXM3ChEfHP1varCpRpzV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_73bPVmHdKKPJtg7cadQsha
          claim_id: c_AQwP33SCK5dnig88dSBmP5
          source_id: s_AJ3RN3w3AkwWY5UmtPUcz2
          stance: supports
          locator: CBDB:248854
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（248854）
          source: &a1
            id: s_AJ3RN3w3AkwWY5UmtPUcz2
            source_type: api_record
            title: 中国历代人物传记资料库：王鑌（CBDB 248854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248854&o=json
            external_identifier: CBDB:248854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.164Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZQsmzd7jKp8Kgu2fy14KS8
        subject_person_id: p_n6JXM3ChEfHP1varCpRpzV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑌，明人物。景泰五年進士，籍贯臨安。（中国历代人物传记资料库 CBDB 248854）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__LmdEYSxV-xBUtJygUjxtS
          claim_id: c_ZQsmzd7jKp8Kgu2fy14KS8
          source_id: s_AJ3RN3w3AkwWY5UmtPUcz2
          stance: supports
          locator: CBDB:248854
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Vg8RuDFhdx5_8ZsMIb_Xp4
        subject_person_id: p_DE5MixoNSLiG1c6ccSaisR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_n6JXM3ChEfHP1varCpRpzV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_V8GXoghNtKatfjUiCqaihI
          claim_id: c_Vg8RuDFhdx5_8ZsMIb_Xp4
          source_id: s_SKYsy15jVZq9r6CT-RqyrE
          stance: supports
          locator: CBDB：兄弟 王鉉（198267）之父／母 王瑾
          quotation: null
          interpretation_note: 由兄弟关系推断：王鑌 与 王鉉 为同胞（CBDB 记「兄」），王鉉 之父／母即 王鑌 之父／母。
          source:
            id: s_SKYsy15jVZq9r6CT-RqyrE
            source_type: api_record
            title: 中国历代人物传记资料库：王鑌（CBDB 248854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248854&o=json
            external_identifier: CBDB:248854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DE5MixoNSLiG1c6ccSaisR
        status: active
        display_name: 王瑾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ZUm7nFiIln7wYIyRzNwrxP
        subject_person_id: p_Wk8JVk2gzRitAVsdJ59hd5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_n6JXM3ChEfHP1varCpRpzV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r7T5JLJQx4IMBawD8RC5am
          claim_id: c_ZUm7nFiIln7wYIyRzNwrxP
          source_id: s_SKYsy15jVZq9r6CT-RqyrE
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198267 王鉉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_SKYsy15jVZq9r6CT-RqyrE
            source_type: api_record
            title: 中国历代人物传记资料库：王鑌（CBDB 248854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248854&o=json
            external_identifier: CBDB:248854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Wk8JVk2gzRitAVsdJ59hd5
        status: active
        display_name: 王鉉
        merged_into_person_id: null
---

# 王鑌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑌 | accepted |
| bio.summary | 王鑌，明人物。景泰五年進士，籍贯臨安。（中国历代人物传记资料库 CBDB 248854） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DE5MixoNSLiG1c6ccSaisR | 王瑾 | accepted |
| other | p_Wk8JVk2gzRitAVsdJ59hd5 | 王鉉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鑌（CBDB 248854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248854&o=json)
