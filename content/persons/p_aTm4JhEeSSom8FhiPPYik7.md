---
schema: wang-person/v1
id: p_aTm4JhEeSSom8FhiPPYik7
status: active
merged_into: null
display_name: 王亹
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_85UAz6nToYqxYz9pcMCS4r
        subject_person_id: p_aTm4JhEeSSom8FhiPPYik7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FvJLBtKMDRtxsxEFQ2JmPF
          claim_id: c_85UAz6nToYqxYz9pcMCS4r
          source_id: s_1HhkUA9EQbTLzbbC9F2yc7
          stance: supports
          locator: CBDB:556624
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（556624）
          source: &a1
            id: s_1HhkUA9EQbTLzbbC9F2yc7
            source_type: api_record
            title: 中国历代人物传记资料库：王亹（CBDB 556624）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556624&o=json
            external_identifier: CBDB:556624
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.655Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Qh45VoEH7tMTFBfHxiDP8d
        subject_person_id: p_aTm4JhEeSSom8FhiPPYik7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亹，明人物。籍贯山陰，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 556624）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZtbTR1pN0euwzhgQ7uVNZe
          claim_id: c_Qh45VoEH7tMTFBfHxiDP8d
          source_id: s_1HhkUA9EQbTLzbbC9F2yc7
          stance: supports
          locator: CBDB:556624
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JPfI1J79fYSSDn9I1o84K1
        subject_person_id: p_kF2uBhCu8BFeymL42FWUdW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aTm4JhEeSSom8FhiPPYik7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PXBqg0Mf4CzgHmBdI-GgPO
          claim_id: c_JPfI1J79fYSSDn9I1o84K1
          source_id: s_1HhkUA9EQbTLzbbC9F2yc7
          stance: supports
          locator: 紹興府志:八十卷，Igid=316285：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kF2uBhCu8BFeymL42FWUdW
        status: active
        display_name: 王舜鼎
        merged_into_person_id: null
  children:
    - claim:
        id: c_8VeKQUuz7Ol7yr0eNu057R
        subject_person_id: p_aTm4JhEeSSom8FhiPPYik7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FJ8kB5ov8PURm7VjHpvGtx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7xIQNv9jx28olHeAgKOYPR
          claim_id: c_8VeKQUuz7Ol7yr0eNu057R
          source_id: s_1HhkUA9EQbTLzbbC9F2yc7
          stance: supports
          locator: 紹興府志:八十卷，Igid=316285：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FJ8kB5ov8PURm7VjHpvGtx
        status: active
        display_name: 王自超
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王亹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王亹 | accepted |
| bio.summary | 王亹，明人物。籍贯山陰，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 556624） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kF2uBhCu8BFeymL42FWUdW | 王舜鼎 | accepted |
| children | p_FJ8kB5ov8PURm7VjHpvGtx | 王自超 | accepted |

## 外部来源

- [中国历代人物传记资料库：王亹（CBDB 556624）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=556624&o=json)
