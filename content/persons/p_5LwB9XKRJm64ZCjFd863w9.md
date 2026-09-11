---
schema: wang-person/v1
id: p_5LwB9XKRJm64ZCjFd863w9
status: active
merged_into: null
display_name: 王斌
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PgC7pKZLJpHeK9mUDL1az3
        subject_person_id: p_5LwB9XKRJm64ZCjFd863w9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VGgt3orZSEi7o4cnWFTTRQ
          claim_id: c_PgC7pKZLJpHeK9mUDL1az3
          source_id: s_FvucsFNBb8yA87oPznDAn4
          stance: supports
          locator: CBDB:231534
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（231534）
          source: &a1
            id: s_FvucsFNBb8yA87oPznDAn4
            source_type: api_record
            title: 中国历代人物传记资料库：王斌（CBDB 231534）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231534&o=json
            external_identifier: CBDB:231534
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.646Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_2bNU5gS4ty9ahEGaAPNYif
        subject_person_id: p_5LwB9XKRJm64ZCjFd863w9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斌，明人物。宣德八年進士，籍贯信陽，曾任知縣。（中国历代人物传记资料库 CBDB 231534）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AGBN8NbfveGTrWNaigPAAX
          claim_id: c_2bNU5gS4ty9ahEGaAPNYif
          source_id: s_FvucsFNBb8yA87oPznDAn4
          stance: supports
          locator: CBDB:231534
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_uSB3k9rP5zg7kQ1aLYRXOB
        subject_person_id: p_5LwB9XKRJm64ZCjFd863w9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Np4Z8JvLtkdK8vcDcqWsz6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qspwv6ef6C4fIOc9LRC7ky
          claim_id: c_uSB3k9rP5zg7kQ1aLYRXOB
          source_id: s_FvucsFNBb8yA87oPznDAn4
          stance: supports
          locator: 宣德八年進士登科錄:一卷，第三甲第三十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Np4Z8JvLtkdK8vcDcqWsz6
        status: active
        display_name: 王瑨
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王斌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王斌 | accepted |
| bio.summary | 王斌，明人物。宣德八年進士，籍贯信陽，曾任知縣。（中国历代人物传记资料库 CBDB 231534） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Np4Z8JvLtkdK8vcDcqWsz6 | 王瑨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王斌（CBDB 231534）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231534&o=json)
