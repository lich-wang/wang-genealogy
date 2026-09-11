---
schema: wang-person/v1
id: p_AJthCZJzr5eAL2kCMPefer
status: active
merged_into: null
display_name: 王政
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gbLn3AvZ6MSGNj6gUHRnNj
        subject_person_id: p_AJthCZJzr5eAL2kCMPefer
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PmZ8Yj3pebgC7N4QB896HG
          claim_id: c_gbLn3AvZ6MSGNj6gUHRnNj
          source_id: s_9fnqQwS63W6YAWQtEUi1J4
          stance: supports
          locator: CBDB:190795
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（190795）
          source: &a1
            id: s_9fnqQwS63W6YAWQtEUi1J4
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 190795）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190795&o=json
            external_identifier: CBDB:190795
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.335Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_F9vpamEmeYu4vRUh5EDPUq
        subject_person_id: p_AJthCZJzr5eAL2kCMPefer
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 784年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tbpHKjZhGZnLdAr9GCcXkw
          claim_id: c_F9vpamEmeYu4vRUh5EDPUq
          source_id: s_9fnqQwS63W6YAWQtEUi1J4
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
        id: c_Jexhxqmtsn71xGCFSuEEGA
        subject_person_id: p_AJthCZJzr5eAL2kCMPefer
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政（卒于784年），唐人物。籍贯太原，曾任使、州刺史。（中国历代人物传记资料库 CBDB 190795）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9L-SG2yuRoVKZdJBDunkPU
          claim_id: c_Jexhxqmtsn71xGCFSuEEGA
          source_id: s_9fnqQwS63W6YAWQtEUi1J4
          stance: supports
          locator: CBDB:190795
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5I4M1qxmic411YNiIPw9d3
        subject_person_id: p_NA6uA34HWqF44rhfVg8JVc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AJthCZJzr5eAL2kCMPefer
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JoYTxHTbOtshyH78dTWpQp
          claim_id: c_5I4M1qxmic411YNiIPw9d3
          source_id: s_9fnqQwS63W6YAWQtEUi1J4
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NA6uA34HWqF44rhfVg8JVc
        status: active
        display_name: 王景肅
        merged_into_person_id: null
  children:
    - claim:
        id: c_SmXKipZNPBbDxJ3Nk4lchi
        subject_person_id: p_AJthCZJzr5eAL2kCMPefer
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HeGfMzKQ5r77Gp7MCsAkL6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mbBWiS9EvVjfoJevRlo4zb
          claim_id: c_SmXKipZNPBbDxJ3Nk4lchi
          source_id: s_9fnqQwS63W6YAWQtEUi1J4
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HeGfMzKQ5r77Gp7MCsAkL6
        status: active
        display_name: 王仲舒
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王政 | accepted |
| death.date | 784年 | accepted |
| bio.summary | 王政（卒于784年），唐人物。籍贯太原，曾任使、州刺史。（中国历代人物传记资料库 CBDB 190795） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NA6uA34HWqF44rhfVg8JVc | 王景肅 | accepted |
| children | p_HeGfMzKQ5r77Gp7MCsAkL6 | 王仲舒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王政（CBDB 190795）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190795&o=json)
