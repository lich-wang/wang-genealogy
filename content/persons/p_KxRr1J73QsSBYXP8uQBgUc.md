---
schema: wang-person/v1
id: p_KxRr1J73QsSBYXP8uQBgUc
status: active
merged_into: null
display_name: 王鎮圻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M6Ey8X2w5g9BuJD3h8RppP
        subject_person_id: p_KxRr1J73QsSBYXP8uQBgUc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎮圻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MpLfUNBuG8Nyk37MMbxVMb
          claim_id: c_M6Ey8X2w5g9BuJD3h8RppP
          source_id: s_Yo18fivBpRA3t9eS4XJjYQ
          stance: supports
          locator: CBDB:640690
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640690）
          source: &a1
            id: s_Yo18fivBpRA3t9eS4XJjYQ
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮圻（CBDB 640690）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640690&o=json
            external_identifier: CBDB:640690
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.333Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_T7Nmj5U52eu7hLd5vGQKHd
        subject_person_id: p_KxRr1J73QsSBYXP8uQBgUc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎮圻，清人物。籍贯遂寧，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 640690）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YXKMJBMGnY5DRm7fg7-iAW
          claim_id: c_T7Nmj5U52eu7hLd5vGQKHd
          source_id: s_Yo18fivBpRA3t9eS4XJjYQ
          stance: supports
          locator: CBDB:640690
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鎮圻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎮圻 | accepted |
| bio.summary | 王鎮圻，清人物。籍贯遂寧，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 640690） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鎮圻（CBDB 640690）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640690&o=json)
