---
schema: wang-person/v1
id: p_pYRXGFH1MvQseutGkDjD1M
status: active
merged_into: null
display_name: 王恆
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Np5J5TAAJ5AMSahrW7qS7P
        subject_person_id: p_pYRXGFH1MvQseutGkDjD1M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dKf4zjRQmC1fHzt2GeP6pj
          claim_id: c_Np5J5TAAJ5AMSahrW7qS7P
          source_id: s_v9nETfcY38UC2or7obBRRR
          stance: supports
          locator: CBDB:193559
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（193559）
          source: &a1
            id: s_v9nETfcY38UC2or7obBRRR
            source_type: api_record
            title: 中国历代人物传记资料库：王恆（CBDB 193559）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193559&o=json
            external_identifier: CBDB:193559
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.443Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_PwV64cjyoAHGyZi66i6Ekd
        subject_person_id: p_pYRXGFH1MvQseutGkDjD1M
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 790年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KBkZDNq6xaPhVYGKEyd64M
          claim_id: c_PwV64cjyoAHGyZi66i6Ekd
          source_id: s_v9nETfcY38UC2or7obBRRR
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
        id: c_AG6D6Puroz5JXLFGPWNJX3
        subject_person_id: p_pYRXGFH1MvQseutGkDjD1M
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恆（卒于790年），唐人物。籍贯三原，身份为書法家，曾任羽林軍。（中国历代人物传记资料库 CBDB 193559）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9gZ0xWQzzflgqyvES4QBia
          claim_id: c_AG6D6Puroz5JXLFGPWNJX3
          source_id: s_v9nETfcY38UC2or7obBRRR
          stance: supports
          locator: CBDB:193559
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hl_CE0LD0K_oDHlnnWM0WU
        subject_person_id: p_158f7PNpeKDhP8PqDUi5rA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pYRXGFH1MvQseutGkDjD1M
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gQCcfL7gn5MUvBtlYTsbxZ
          claim_id: c_hl_CE0LD0K_oDHlnnWM0WU
          source_id: s_QLDimjK4ySvbqQYyeCU6yH
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)，R 33701：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QLDimjK4ySvbqQYyeCU6yH
            source_type: api_record
            title: 中国历代人物传记资料库：王馴（CBDB 159059）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159059&o=json
            external_identifier: CBDB:159059
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.930Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_158f7PNpeKDhP8PqDUi5rA
        status: active
        display_name: 王馴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王恆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恆 | accepted |
| death.date | 790年 | accepted |
| bio.summary | 王恆（卒于790年），唐人物。籍贯三原，身份为書法家，曾任羽林軍。（中国历代人物传记资料库 CBDB 193559） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_158f7PNpeKDhP8PqDUi5rA | 王馴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恆（CBDB 193559）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193559&o=json)
- [中国历代人物传记资料库：王馴（CBDB 159059）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159059&o=json)
