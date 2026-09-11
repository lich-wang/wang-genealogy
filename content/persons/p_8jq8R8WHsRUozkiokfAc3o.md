---
schema: wang-person/v1
id: p_8jq8R8WHsRUozkiokfAc3o
status: active
merged_into: null
display_name: 王進
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D61v2ESFAeeQEi2pLQWWeh
        subject_person_id: p_8jq8R8WHsRUozkiokfAc3o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王進
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tQBzZBC7AQwC1wuNGAWKga
          claim_id: c_D61v2ESFAeeQEi2pLQWWeh
          source_id: s_VYoAqV3m6bQvihoDJyAUAF
          stance: supports
          locator: CBDB:29194
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（29194）
          source: &a1
            id: s_VYoAqV3m6bQvihoDJyAUAF
            source_type: api_record
            title: 中国历代人物传记资料库：王進（CBDB 29194）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29194&o=json
            external_identifier: CBDB:29194
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.989Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bPB95vVNf4n29qLhFpFoE9
        subject_person_id: p_8jq8R8WHsRUozkiokfAc3o
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王進，金人物。籍贯寧晉。（中国历代人物传记资料库 CBDB 29194）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yXKry90rACnYavX0AqvKnd
          claim_id: c_bPB95vVNf4n29qLhFpFoE9
          source_id: s_VYoAqV3m6bQvihoDJyAUAF
          stance: supports
          locator: CBDB:29194
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_R-nORZxm0z2sa3d63qM3tr
        subject_person_id: p_8jq8R8WHsRUozkiokfAc3o
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aQBAivevG5QTfA7SNaq76h
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_igJ__9Spvqbiwqm2x5jLaH
          claim_id: c_R-nORZxm0z2sa3d63qM3tr
          source_id: s_VYoAqV3m6bQvihoDJyAUAF
          stance: supports
          locator: CBDB 双向互证（子 王守忠 ⇄ 父 王進）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_aQBAivevG5QTfA7SNaq76h
        status: active
        display_name: 王守忠
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王進

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王進 | accepted |
| bio.summary | 王進，金人物。籍贯寧晉。（中国历代人物传记资料库 CBDB 29194） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_aQBAivevG5QTfA7SNaq76h | 王守忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王進（CBDB 29194）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29194&o=json)
