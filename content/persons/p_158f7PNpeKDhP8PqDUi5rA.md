---
schema: wang-person/v1
id: p_158f7PNpeKDhP8PqDUi5rA
status: active
merged_into: null
display_name: 王馴
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GHndADSyYmMyjM7Ypi2q8F
        subject_person_id: p_158f7PNpeKDhP8PqDUi5rA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王馴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GPdTh8FEfLKWdmQcmpNKqN
          claim_id: c_GHndADSyYmMyjM7Ypi2q8F
          source_id: s_QLDimjK4ySvbqQYyeCU6yH
          stance: supports
          locator: CBDB:159059
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（159059）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rHZGH4hWHqLcbmBTnHWkxt
        subject_person_id: p_158f7PNpeKDhP8PqDUi5rA
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
        - id: cs_nHuPYdLrx4f62SMtyycLtA
          claim_id: c_rHZGH4hWHqLcbmBTnHWkxt
          source_id: s_QLDimjK4ySvbqQYyeCU6yH
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
        id: c_LXABCM3u0ebrDdwR-e4wEh
        subject_person_id: p_yWVC23hzSUsYCD3NwnfPLE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_158f7PNpeKDhP8PqDUi5rA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WM5sWWxUcb6rHPYFvJPi0a
          claim_id: c_LXABCM3u0ebrDdwR-e4wEh
          source_id: s_QLDimjK4ySvbqQYyeCU6yH
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)，R 33702：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yWVC23hzSUsYCD3NwnfPLE
        status: active
        display_name: 王瓊
        merged_into_person_id: null
  children:
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
          source: *a1
      object_person:
        id: p_pYRXGFH1MvQseutGkDjD1M
        status: active
        display_name: 王恆
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王馴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王馴 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yWVC23hzSUsYCD3NwnfPLE | 王瓊 | accepted |
| children | p_pYRXGFH1MvQseutGkDjD1M | 王恆 | accepted |

## 外部来源

- [中国历代人物传记资料库：王馴（CBDB 159059）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=159059&o=json)
