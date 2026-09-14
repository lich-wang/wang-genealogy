---
schema: wang-person/v1
id: p_4CAyx8nzp4Ax1cCShRKKk5
status: active
merged_into: null
display_name: 王潤
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hjzjFiJo4eseETYSgSwikY
        subject_person_id: p_4CAyx8nzp4Ax1cCShRKKk5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6hcPEhjqaGqo5qq5LiPsMA
          claim_id: c_hjzjFiJo4eseETYSgSwikY
          source_id: s_2a8Ba2AphnUB712UfmLiG6
          stance: supports
          locator: CBDB:327942
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327942）
          source: &a1
            id: s_2a8Ba2AphnUB712UfmLiG6
            source_type: api_record
            title: 中国历代人物传记资料库：王潤（CBDB 327942）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327942&o=json
            external_identifier: CBDB:327942
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.270Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4AQqdp6Po4Ji1N6o5J6fSU
        subject_person_id: p_4CAyx8nzp4Ax1cCShRKKk5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王潤，明人物。嘉靖四十一年進士，籍贯臨汾。（中国历代人物传记资料库 CBDB 327942）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qisF_YhYhsnomE7Ek_-EaI
          claim_id: c_4AQqdp6Po4Ji1N6o5J6fSU
          source_id: s_2a8Ba2AphnUB712UfmLiG6
          stance: supports
          locator: CBDB:327942
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_lCaQWXdVNAJkc-ar770yI5
        subject_person_id: p_5GVxKWPxJYFcrW9t5dcAK7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4CAyx8nzp4Ax1cCShRKKk5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-2AgDoqwJ5RCoRBcqBwOCD
          claim_id: c_lCaQWXdVNAJkc-ar770yI5
          source_id: s_fheQwDdv5nCoHVFrldFqf_
          stance: supports
          locator: CBDB：兄弟 王澤（205074）之父／母 王鏞
          quotation: null
          interpretation_note: 由兄弟关系推断：王潤 与 王澤 为同胞（CBDB 记「弟」），王澤 之父／母即 王潤 之父／母。
          source:
            id: s_fheQwDdv5nCoHVFrldFqf_
            source_type: api_record
            title: 中国历代人物传记资料库：王潤（CBDB 327942）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327942&o=json
            external_identifier: CBDB:327942
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5GVxKWPxJYFcrW9t5dcAK7
        status: active
        display_name: 王鏞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_6Y3JgLSSozPPffupevtRQK
        subject_person_id: p_4CAyx8nzp4Ax1cCShRKKk5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZK3fTgg7z2XBX2KyZPuyDP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q2P3ra8jkvIRWWhKrWWxnj
          claim_id: c_6Y3JgLSSozPPffupevtRQK
          source_id: s_fheQwDdv5nCoHVFrldFqf_
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205074 王澤）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_fheQwDdv5nCoHVFrldFqf_
            source_type: api_record
            title: 中国历代人物传记资料库：王潤（CBDB 327942）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327942&o=json
            external_identifier: CBDB:327942
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZK3fTgg7z2XBX2KyZPuyDP
        status: active
        display_name: 王澤
        merged_into_person_id: null
---

# 王潤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王潤 | accepted |
| bio.summary | 王潤，明人物。嘉靖四十一年進士，籍贯臨汾。（中国历代人物传记资料库 CBDB 327942） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5GVxKWPxJYFcrW9t5dcAK7 | 王鏞 | accepted |
| other | p_ZK3fTgg7z2XBX2KyZPuyDP | 王澤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王潤（CBDB 327942）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327942&o=json)
