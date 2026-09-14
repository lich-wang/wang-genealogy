---
schema: wang-person/v1
id: p_5GVxKWPxJYFcrW9t5dcAK7
status: active
merged_into: null
display_name: 王鏞
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KHAou5eJGAUxXybsx83b8d
        subject_person_id: p_5GVxKWPxJYFcrW9t5dcAK7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2U4HQDCgVC6MfJy5u7G55J
          claim_id: c_KHAou5eJGAUxXybsx83b8d
          source_id: s_wPTPuxHqGjShLAWEGM1LMk
          stance: supports
          locator: CBDB:327937
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327937）
          source: &a1
            id: s_wPTPuxHqGjShLAWEGM1LMk
            source_type: api_record
            title: 中国历代人物传记资料库：王鏞（CBDB 327937）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327937&o=json
            external_identifier: CBDB:327937
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.270Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zD788J3bxVEBad3VV7Y2JN
        subject_person_id: p_5GVxKWPxJYFcrW9t5dcAK7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏞，明人物。嘉靖四十一年進士，籍贯臨汾。（中国历代人物传记资料库 CBDB 327937）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PKPzwVNqheJy3LA_H4p4qw
          claim_id: c_zD788J3bxVEBad3VV7Y2JN
          source_id: s_wPTPuxHqGjShLAWEGM1LMk
          stance: supports
          locator: CBDB:327937
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_rNaf2W364700iGk_OwLsqv
        subject_person_id: p_5GVxKWPxJYFcrW9t5dcAK7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZK3fTgg7z2XBX2KyZPuyDP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RP52r9EsujM3SDYqHNHwki
          claim_id: c_rNaf2W364700iGk_OwLsqv
          source_id: s_wPTPuxHqGjShLAWEGM1LMk
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第七十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZK3fTgg7z2XBX2KyZPuyDP
        status: active
        display_name: 王澤
        merged_into_person_id: null
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
        id: p_4CAyx8nzp4Ax1cCShRKKk5
        status: active
        display_name: 王潤
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鏞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鏞 | accepted |
| bio.summary | 王鏞，明人物。嘉靖四十一年進士，籍贯臨汾。（中国历代人物传记资料库 CBDB 327937） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ZK3fTgg7z2XBX2KyZPuyDP | 王澤 | accepted |
| children | p_4CAyx8nzp4Ax1cCShRKKk5 | 王潤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王潤（CBDB 327942）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327942&o=json)
- [中国历代人物传记资料库：王鏞（CBDB 327937）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327937&o=json)
