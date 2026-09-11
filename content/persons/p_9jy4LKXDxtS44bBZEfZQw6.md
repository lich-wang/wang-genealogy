---
schema: wang-person/v1
id: p_9jy4LKXDxtS44bBZEfZQw6
status: active
merged_into: null
display_name: 王燮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tiCuJap1RHdNrTcoskpm4s
        subject_person_id: p_9jy4LKXDxtS44bBZEfZQw6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ABvbF7iZbroK6yk1C6yhWv
          claim_id: c_tiCuJap1RHdNrTcoskpm4s
          source_id: s_Nh15XL7KcCXzsJHWvNjDVu
          stance: supports
          locator: CBDB:71291
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71291）
          source: &a1
            id: s_Nh15XL7KcCXzsJHWvNjDVu
            source_type: api_record
            title: 中国历代人物传记资料库：王燮（CBDB 71291）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71291&o=json
            external_identifier: CBDB:71291
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.574Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_U7Hm85p4eMZ2KyqdU2a6Hk
        subject_person_id: p_9jy4LKXDxtS44bBZEfZQw6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1648年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eu4RixZ6HF9sNFvJK2R7EK
          claim_id: c_U7Hm85p4eMZ2KyqdU2a6Hk
          source_id: s_Nh15XL7KcCXzsJHWvNjDVu
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MvH6d9j1vDqhwUrZ55VKJf
        subject_person_id: p_9jy4LKXDxtS44bBZEfZQw6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王燮（生于1648年），清人物。籍贯嘉興。（中国历代人物传记资料库 CBDB 71291）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8TcORLld_47LMz17IGbM3a
          claim_id: c_MvH6d9j1vDqhwUrZ55VKJf
          source_id: s_Nh15XL7KcCXzsJHWvNjDVu
          stance: supports
          locator: CBDB:71291
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

# 王燮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王燮 | accepted |
| birth.date | 1648年 | accepted |
| bio.summary | 王燮（生于1648年），清人物。籍贯嘉興。（中国历代人物传记资料库 CBDB 71291） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王燮（CBDB 71291）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71291&o=json)
