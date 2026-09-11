---
schema: wang-person/v1
id: p_5Ma5zRu2ZvuxU2DRiwu789
status: active
merged_into: null
display_name: 王楚
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fYW8TzrkVV4xD29WS8yk9q
        subject_person_id: p_5Ma5zRu2ZvuxU2DRiwu789
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C81EL7BjojFSM34e5seG7Z
          claim_id: c_fYW8TzrkVV4xD29WS8yk9q
          source_id: s_cQxtuZNGgRePKLCHNqvjN7
          stance: supports
          locator: CBDB:185486
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（185486）
          source: &a1
            id: s_cQxtuZNGgRePKLCHNqvjN7
            source_type: api_record
            title: 中国历代人物传记资料库：王楚（CBDB 185486）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185486&o=json
            external_identifier: CBDB:185486
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.245Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_bPFuJZEVuWJSrJRSEx8niC
        subject_person_id: p_5Ma5zRu2ZvuxU2DRiwu789
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 875年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MMe4YXzPr7ur4Hqi9LZ91V
          claim_id: c_bPFuJZEVuWJSrJRSEx8niC
          source_id: s_cQxtuZNGgRePKLCHNqvjN7
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
        id: c_yuUCDnoAuJHQ5nGmTKWCGf
        subject_person_id: p_5Ma5zRu2ZvuxU2DRiwu789
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楚（卒于875年），唐人物。籍贯長安。（中国历代人物传记资料库 CBDB 185486）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nriQbktkb-zxdBuBUhnFjK
          claim_id: c_yuUCDnoAuJHQ5nGmTKWCGf
          source_id: s_cQxtuZNGgRePKLCHNqvjN7
          stance: supports
          locator: CBDB:185486
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0l70uugPWlTFQNygkwmamq
        subject_person_id: p_U2YiDmDT6smYK1JJKHRwfQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5Ma5zRu2ZvuxU2DRiwu789
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f5tSENdXcA0RPYfJq9nh3e
          claim_id: c_0l70uugPWlTFQNygkwmamq
          source_id: s_cQxtuZNGgRePKLCHNqvjN7
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_U2YiDmDT6smYK1JJKHRwfQ
        status: active
        display_name: 王顒
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王楚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楚 | accepted |
| death.date | 875年 | accepted |
| bio.summary | 王楚（卒于875年），唐人物。籍贯長安。（中国历代人物传记资料库 CBDB 185486） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_U2YiDmDT6smYK1JJKHRwfQ | 王顒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王楚（CBDB 185486）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185486&o=json)
