---
schema: wang-person/v1
id: p_FqyJ8MM3qRa1V1hzxnF6ko
status: active
merged_into: null
display_name: 王珙
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w3PHxE7ny8FH1jEN71FG1s
        subject_person_id: p_FqyJ8MM3qRa1V1hzxnF6ko
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_y9GdMGPx5HpgqRoSzKYao5
          claim_id: c_w3PHxE7ny8FH1jEN71FG1s
          source_id: s_3YkNg6YgpiTfaueBEX5SJp
          stance: supports
          locator: CBDB:185930
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（185930）
          source: &a1
            id: s_3YkNg6YgpiTfaueBEX5SJp
            source_type: api_record
            title: 中国历代人物传记资料库：王珙（CBDB 185930）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185930&o=json
            external_identifier: CBDB:185930
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.253Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_V7pYDEi4zGxF2NeJAniH88
        subject_person_id: p_FqyJ8MM3qRa1V1hzxnF6ko
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 924年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fLtFdBCKq3NW4siUy1PLto
          claim_id: c_V7pYDEi4zGxF2NeJAniH88
          source_id: s_3YkNg6YgpiTfaueBEX5SJp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2fftBxJQQSoYifaP5wWhLJ
        subject_person_id: p_FqyJ8MM3qRa1V1hzxnF6ko
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ShKYcL2RuwXcBWiemkHrNW
          claim_id: c_2fftBxJQQSoYifaP5wWhLJ
          source_id: s_3YkNg6YgpiTfaueBEX5SJp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uWNMATrxQg4umpWxmakxbF
        subject_person_id: p_8WSGHAfAoQ3TLEpo8p8wJU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FqyJ8MM3qRa1V1hzxnF6ko
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ylKvDfrRt2OjTQuq7YLhLh
          claim_id: c_uWNMATrxQg4umpWxmakxbF
          source_id: s_7Kh4ohyjr1CuQj4gARXkoz
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7Kh4ohyjr1CuQj4gARXkoz
            source_type: api_record
            title: 中国历代人物传记资料库：王重榮（CBDB 185355）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185355&o=json
            external_identifier: CBDB:185355
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.243Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8WSGHAfAoQ3TLEpo8p8wJU
        status: active
        display_name: 王重榮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王珙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珙 | accepted |
| death.date | 924年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8WSGHAfAoQ3TLEpo8p8wJU | 王重榮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珙（CBDB 185930）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185930&o=json)
- [中国历代人物传记资料库：王重榮（CBDB 185355）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185355&o=json)
