---
schema: wang-person/v1
id: p_t9YpTR5ZQTqCxnC4tB7M44
status: active
merged_into: null
display_name: 王鎮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B1j9joJwjmFLKvdm9FJ6nH
        subject_person_id: p_t9YpTR5ZQTqCxnC4tB7M44
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_npcEuAcCHDjx2UC6JVPKdB
          claim_id: c_B1j9joJwjmFLKvdm9FJ6nH
          source_id: s_LGnJ1D2CK3HR978BaP6JgK
          stance: supports
          locator: CBDB:156621
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（156621）
          source: &a1
            id: s_LGnJ1D2CK3HR978BaP6JgK
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮（CBDB 156621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156621&o=json
            external_identifier: CBDB:156621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.897Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L4gBg4T8b2aQ12f6N9AnPR
        subject_person_id: p_t9YpTR5ZQTqCxnC4tB7M44
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎮，唐人物。籍贯幽都，曾任都督、州刺史。（中国历代人物传记资料库 CBDB 156621）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5yqf0udoFlOtQPJtNMPwbK
          claim_id: c_L4gBg4T8b2aQ12f6N9AnPR
          source_id: s_LGnJ1D2CK3HR978BaP6JgK
          stance: supports
          locator: CBDB:156621
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wbFBXhwnayLdyW0yO-gI5F
        subject_person_id: p_RYAhUs1ATN2FqSqLmBj15y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_t9YpTR5ZQTqCxnC4tB7M44
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SiYBcxxF-2pTPLYHWIHwgN
          claim_id: c_wbFBXhwnayLdyW0yO-gI5F
          source_id: s_LGnJ1D2CK3HR978BaP6JgK
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yuanhe 60：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RYAhUs1ATN2FqSqLmBj15y
        status: active
        display_name: 王叔原
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鎮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎮 | accepted |
| bio.summary | 王鎮，唐人物。籍贯幽都，曾任都督、州刺史。（中国历代人物传记资料库 CBDB 156621） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RYAhUs1ATN2FqSqLmBj15y | 王叔原 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鎮（CBDB 156621）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156621&o=json)
