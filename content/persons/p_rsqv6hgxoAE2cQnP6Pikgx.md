---
schema: wang-person/v1
id: p_rsqv6hgxoAE2cQnP6Pikgx
status: active
merged_into: null
display_name: 王正雅
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MjU8DKSAHWeBPSNXxuNWmj
        subject_person_id: p_rsqv6hgxoAE2cQnP6Pikgx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正雅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bKeACoDn6UJzjehRkVXBLq
          claim_id: c_MjU8DKSAHWeBPSNXxuNWmj
          source_id: s_5W7Z75p4GcEmFyk2ND79mo
          stance: supports
          locator: CBDB:175727
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175727）
          source: &a1
            id: s_5W7Z75p4GcEmFyk2ND79mo
            source_type: api_record
            title: 中国历代人物传记资料库：王正雅（CBDB 175727）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175727&o=json
            external_identifier: CBDB:175727
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.087Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_fSGpGaxs9xzaTJsaeqwUQ6
        subject_person_id: p_rsqv6hgxoAE2cQnP6Pikgx
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 831年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1qjzXoD9vbh1ytEraRQ4s4
          claim_id: c_fSGpGaxs9xzaTJsaeqwUQ6
          source_id: s_5W7Z75p4GcEmFyk2ND79mo
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
        id: c_zmeGYz9wiwNQ9WPpxcyRmA
        subject_person_id: p_rsqv6hgxoAE2cQnP6Pikgx
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
        - id: cs_8fBNzCxVHQq8ovvuT4e5B5
          claim_id: c_zmeGYz9wiwNQ9WPpxcyRmA
          source_id: s_5W7Z75p4GcEmFyk2ND79mo
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
        id: c_84XryGxN8_teIE6aHJKvSR
        subject_person_id: p_pzNEWP653ER35cKhpMWTv7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rsqv6hgxoAE2cQnP6Pikgx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w6CNYfpEQsO9KlqRebZ8nw
          claim_id: c_84XryGxN8_teIE6aHJKvSR
          source_id: s_2qjPyhEFntbgQHfM1kHk1p
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2qjPyhEFntbgQHfM1kHk1p
            source_type: api_record
            title: 中国历代人物传记资料库：王翃（CBDB 175725）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175725&o=json
            external_identifier: CBDB:175725
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.086Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_pzNEWP653ER35cKhpMWTv7
        status: active
        display_name: 王翃
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王正雅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正雅 | accepted |
| death.date | 831年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pzNEWP653ER35cKhpMWTv7 | 王翃 | accepted |

## 外部来源

- [中国历代人物传记资料库：王翃（CBDB 175725）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175725&o=json)
- [中国历代人物传记资料库：王正雅（CBDB 175727）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175727&o=json)
