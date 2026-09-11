---
schema: wang-person/v1
id: p_325jrH1EFBwtWtCAmLwe3Z
status: active
merged_into: null
display_name: 王元愛
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_36K85DKJBeZ3utd2maih9m
        subject_person_id: p_325jrH1EFBwtWtCAmLwe3Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元愛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RYzpjxTmAH5QiCqUt7TB1Q
          claim_id: c_36K85DKJBeZ3utd2maih9m
          source_id: s_yVbFtp7bN2erQWjpqugKKd
          stance: supports
          locator: CBDB:169657
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（169657）
          source: &a1
            id: s_yVbFtp7bN2erQWjpqugKKd
            source_type: api_record
            title: 中国历代人物传记资料库：王元愛（CBDB 169657）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169657&o=json
            external_identifier: CBDB:169657
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.233Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_vL5Ws7C5PJfPkvpcEznvA3
        subject_person_id: p_325jrH1EFBwtWtCAmLwe3Z
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 758年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MZ4JwfNpNHCtRPXeiousDe
          claim_id: c_vL5Ws7C5PJfPkvpcEznvA3
          source_id: s_yVbFtp7bN2erQWjpqugKKd
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
        id: c_7UabR2A1NUD2dTdUKvoDjy
        subject_person_id: p_325jrH1EFBwtWtCAmLwe3Z
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
        - id: cs_92aj3txtJvytAHdjLLQmiF
          claim_id: c_7UabR2A1NUD2dTdUKvoDjy
          source_id: s_yVbFtp7bN2erQWjpqugKKd
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_-7__zDgOq_v7XCAvjXybeK
        subject_person_id: p_325jrH1EFBwtWtCAmLwe3Z
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7VtVn2P2atR33u6A8tLqwk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m3CtAqjQ1lK7Vd3sQvD88T
          claim_id: c_-7__zDgOq_v7XCAvjXybeK
          source_id: s_yVbFtp7bN2erQWjpqugKKd
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7VtVn2P2atR33u6A8tLqwk
        status: active
        display_name: 王諫
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元愛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元愛 | accepted |
| death.date | 758年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_7VtVn2P2atR33u6A8tLqwk | 王諫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王元愛（CBDB 169657）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169657&o=json)
