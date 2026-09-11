---
schema: wang-person/v1
id: p_7fzzJxcbXZYkPTFPz4wvKh
status: active
merged_into: null
display_name: 王緝
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b6ji4tqWWjgJRz1P5tWEAs
        subject_person_id: p_7fzzJxcbXZYkPTFPz4wvKh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王緝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_X3LiPKwFzkftde5Q4g8hCH
          claim_id: c_b6ji4tqWWjgJRz1P5tWEAs
          source_id: s_n3VEAD8PtJrNNjsnm57GMb
          stance: supports
          locator: CBDB:163177
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（163177）
          source: &a1
            id: s_n3VEAD8PtJrNNjsnm57GMb
            source_type: api_record
            title: 中国历代人物传记资料库：王緝（CBDB 163177）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163177&o=json
            external_identifier: CBDB:163177
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.959Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZAZvcMYjKaiJ8b6zpZos1u
        subject_person_id: p_7fzzJxcbXZYkPTFPz4wvKh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为南北朝人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yZPiLAx9U5FcUh9YMf3fnN
          claim_id: c_ZAZvcMYjKaiJ8b6zpZos1u
          source_id: s_n3VEAD8PtJrNNjsnm57GMb
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
        id: c_oQ9ClEa-qkBqwN6fxuYnnx
        subject_person_id: p_7fzzJxcbXZYkPTFPz4wvKh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5Np11bpUk1ewMpdWYFHGy2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4qfxRtHUDcB_cFkIdPgiBA
          claim_id: c_oQ9ClEa-qkBqwN6fxuYnnx
          source_id: s_n3VEAD8PtJrNNjsnm57GMb
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5Np11bpUk1ewMpdWYFHGy2
        status: active
        display_name: 王令思
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_gYKCA7BM6BSw7qyQhT27F_
        subject_person_id: p_7fzzJxcbXZYkPTFPz4wvKh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6YpXxeKRMWr6vVrAX9K1Tv
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-_w-YAnXY5WczcK-iUUD1U
          claim_id: c_gYKCA7BM6BSw7qyQhT27F_
          source_id: s_KFkS5hiMaGh1959L5ARJrJ
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Wansuitongtian4：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KFkS5hiMaGh1959L5ARJrJ
            source_type: api_record
            title: 中国历代人物传记资料库：王婉（CBDB 142690）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142690&o=json
            external_identifier: CBDB:142690
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.589Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6YpXxeKRMWr6vVrAX9K1Tv
        status: active
        display_name: 王婉
        merged_into_person_id: null
  other: []
---

# 王緝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王緝 | accepted |
| bio.summary | CBDB 记载为南北朝人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_5Np11bpUk1ewMpdWYFHGy2 | 王令思 | accepted |
| descendants | p_6YpXxeKRMWr6vVrAX9K1Tv | 王婉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王緝（CBDB 163177）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163177&o=json)
- [中国历代人物传记资料库：王婉（CBDB 142690）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142690&o=json)
