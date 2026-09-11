---
schema: wang-person/v1
id: p_JJkrCV4jc7hBF4kPPQXXmu
status: active
merged_into: null
display_name: 王訥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SHEjx78nGy4QnF8Fck2pWd
        subject_person_id: p_JJkrCV4jc7hBF4kPPQXXmu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ut6pFW3RZJq1GBqhCUGhXb
          claim_id: c_SHEjx78nGy4QnF8Fck2pWd
          source_id: s_fx6BGwhFJ7mJbCzrYdKXLQ
          stance: supports
          locator: CBDB:153512
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（153512）
          source: &a1
            id: s_fx6BGwhFJ7mJbCzrYdKXLQ
            source_type: api_record
            title: 中国历代人物传记资料库：王訥（CBDB 153512）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153512&o=json
            external_identifier: CBDB:153512
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.861Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vhoBMZ9wgtj7RXiBN3o1sd
        subject_person_id: p_JJkrCV4jc7hBF4kPPQXXmu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王訥，唐人物。籍贯桂陽。（中国历代人物传记资料库 CBDB 153512）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mzCbxd5vk6z97Ze3cUQ-bX
          claim_id: c_vhoBMZ9wgtj7RXiBN3o1sd
          source_id: s_fx6BGwhFJ7mJbCzrYdKXLQ
          stance: supports
          locator: CBDB:153512
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_OF16RJcPsZcMwDNw9QyO65
        subject_person_id: p_JJkrCV4jc7hBF4kPPQXXmu
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qmH2i84ThoivJ4KWnaiDMQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TyDq6I8J2zoP5tke2S7ANr
          claim_id: c_OF16RJcPsZcMwDNw9QyO65
          source_id: s_fx6BGwhFJ7mJbCzrYdKXLQ
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tianbao 62：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qmH2i84ThoivJ4KWnaiDMQ
        status: active
        display_name: 王訓
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王訥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王訥 | accepted |
| bio.summary | 王訥，唐人物。籍贯桂陽。（中国历代人物传记资料库 CBDB 153512） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_qmH2i84ThoivJ4KWnaiDMQ | 王訓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王訥（CBDB 153512）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153512&o=json)
