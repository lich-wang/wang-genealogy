---
schema: wang-person/v1
id: p_e3h1zmFg1PnVJNzFCAKikC
status: active
merged_into: null
display_name: 王休言
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TKVaRv23RG3wr6NBDaQz76
        subject_person_id: p_e3h1zmFg1PnVJNzFCAKikC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王休言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nHBus37ovWrftBYi5deFzY
          claim_id: c_TKVaRv23RG3wr6NBDaQz76
          source_id: s_3BG9kwm111e6hJQwdBajUH
          stance: supports
          locator: CBDB:175673
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175673）
          source: &a1
            id: s_3BG9kwm111e6hJQwdBajUH
            source_type: api_record
            title: 中国历代人物传记资料库：王休言（CBDB 175673）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175673&o=json
            external_identifier: CBDB:175673
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.244Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_wwJWZZWaZp8Eeiv8BrNhQg
        subject_person_id: p_e3h1zmFg1PnVJNzFCAKikC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 700年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VxMFzLTHubKvq7PrV3mnQ1
          claim_id: c_wwJWZZWaZp8Eeiv8BrNhQg
          source_id: s_3BG9kwm111e6hJQwdBajUH
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
        id: c_hWPj7p3ahjF4xDfbXhLZfo
        subject_person_id: p_e3h1zmFg1PnVJNzFCAKikC
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
        - id: cs_pqDnPYuGvjxj6KQnY8PKx5
          claim_id: c_hWPj7p3ahjF4xDfbXhLZfo
          source_id: s_3BG9kwm111e6hJQwdBajUH
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
        id: c_z2pR1yULmzMsMS3TKkV8WC
        subject_person_id: p_cwKzjBMKcPC1s1jgGcgBVa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_e3h1zmFg1PnVJNzFCAKikC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9nYfoXtRDpOcK_5h6PYfMb
          claim_id: c_z2pR1yULmzMsMS3TKkV8WC
          source_id: s_nd6ttgrtn13qAwN7NSGjcu
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nd6ttgrtn13qAwN7NSGjcu
            source_type: api_record
            title: 中国历代人物传记资料库：王璿（CBDB 152190）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152190&o=json
            external_identifier: CBDB:152190
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.847Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cwKzjBMKcPC1s1jgGcgBVa
        status: active
        display_name: 王璿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王休言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王休言 | accepted |
| death.date | 700年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cwKzjBMKcPC1s1jgGcgBVa | 王璿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王休言（CBDB 175673）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175673&o=json)
- [中国历代人物传记资料库：王璿（CBDB 152190）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152190&o=json)
