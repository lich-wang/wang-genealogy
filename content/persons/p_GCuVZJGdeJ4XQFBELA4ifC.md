---
schema: wang-person/v1
id: p_GCuVZJGdeJ4XQFBELA4ifC
status: active
merged_into: null
display_name: 萬氏
revision: 1
cbdb_id: 5172
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Wf8n2g-YfBGhURLOumwiTI
        subject_person_id: p_GCuVZJGdeJ4XQFBELA4ifC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 萬氏（1083—1149），宋人物。籍贯樂清，入仕封贈。（中国历代人物传记资料库 CBDB 5172）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_citUhnt6vVY5tNr3bNJD4C
          claim_id: c_Wf8n2g-YfBGhURLOumwiTI
          source_id: s_9FztjilX9WXqmHdDZJl_Rl
          stance: supports
          locator: CBDB:5172
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_9FztjilX9WXqmHdDZJl_Rl
            source_type: api_record
            title: 中国历代人物传记资料库：萬氏(王十朋母)（CBDB 5172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5172&o=json
            external_identifier: CBDB:5172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4Z1F1gHBVbhDk4_QZfUF-v
        subject_person_id: p_GCuVZJGdeJ4XQFBELA4ifC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 萬氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PI5h21yOvFtxSrsi3AWUMZ
          claim_id: c_4Z1F1gHBVbhDk4_QZfUF-v
          source_id: s_9FztjilX9WXqmHdDZJl_Rl
          stance: supports
          locator: CBDB:5172
          quotation: null
          interpretation_note: CBDB 明确记录的王輔配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_tRVdX5dze3VRksi73upW0s
        subject_person_id: p_k7FueQ7UqubgKGSwoNs5mw
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_GCuVZJGdeJ4XQFBELA4ifC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2JNpejrYT-GQDNd7bcxUZe
          claim_id: c_tRVdX5dze3VRksi73upW0s
          source_id: s_9FztjilX9WXqmHdDZJl_Rl
          stance: supports
          locator: CBDB 双向互证（妻子 萬氏(王十朋母)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_k7FueQ7UqubgKGSwoNs5mw
        status: active
        display_name: 王輔
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 萬氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 萬氏（1083—1149），宋人物。籍贯樂清，入仕封贈。（中国历代人物传记资料库 CBDB 5172） | accepted |
| name.primary | 萬氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_k7FueQ7UqubgKGSwoNs5mw | 王輔 | accepted |

## 外部来源

- [中国历代人物传记资料库：萬氏(王十朋母)（CBDB 5172）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5172&o=json)
