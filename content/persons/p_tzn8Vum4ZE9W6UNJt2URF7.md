---
schema: wang-person/v1
id: p_tzn8Vum4ZE9W6UNJt2URF7
status: active
merged_into: null
display_name: 王元方
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YcLtoWtE1NrbqTHnQZg786
        subject_person_id: p_tzn8Vum4ZE9W6UNJt2URF7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元方
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EepxhhpxfJYLfKTYD8Niu1
          claim_id: c_YcLtoWtE1NrbqTHnQZg786
          source_id: s_reot2hibWxMryjcpbmoDfC
          stance: supports
          locator: CBDB:175757
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175757）
          source: &a1
            id: s_reot2hibWxMryjcpbmoDfC
            source_type: api_record
            title: 中国历代人物传记资料库：王元方（CBDB 175757）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175757&o=json
            external_identifier: CBDB:175757
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.105Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_KaFkSVoZaMkjotxprGedk9
        subject_person_id: p_tzn8Vum4ZE9W6UNJt2URF7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 632年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Sd6xVwuCNCoyscC5Ri7bKM
          claim_id: c_KaFkSVoZaMkjotxprGedk9
          source_id: s_reot2hibWxMryjcpbmoDfC
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
        id: c_PcAxe9s5CgxuHScg1VWQq8
        subject_person_id: p_tzn8Vum4ZE9W6UNJt2URF7
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
        - id: cs_nByVEQKPt7tYig4EwyyPEu
          claim_id: c_PcAxe9s5CgxuHScg1VWQq8
          source_id: s_reot2hibWxMryjcpbmoDfC
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
        id: c_Etw4uvwwidqaC9pHG0BVQm
        subject_person_id: p_mvjMNdfTTwoLQPLYKCSTQr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tzn8Vum4ZE9W6UNJt2URF7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F1JEydOYKVDFe1ckRNzTv2
          claim_id: c_Etw4uvwwidqaC9pHG0BVQm
          source_id: s_qM3hu2KJqieQspo6CFRvHo
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qM3hu2KJqieQspo6CFRvHo
            source_type: api_record
            title: 中国历代人物传记资料库：王規（CBDB 175745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175745&o=json
            external_identifier: CBDB:175745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.093Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mvjMNdfTTwoLQPLYKCSTQr
        status: active
        display_name: 王規
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元方

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元方 | accepted |
| death.date | 632年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mvjMNdfTTwoLQPLYKCSTQr | 王規 | accepted |

## 外部来源

- [中国历代人物传记资料库：王規（CBDB 175745）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175745&o=json)
- [中国历代人物传记资料库：王元方（CBDB 175757）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175757&o=json)
