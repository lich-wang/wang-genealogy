---
schema: wang-person/v1
id: p_RRCU75moaPdZZ4yeCD82Y5
status: active
merged_into: null
display_name: 王穎
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HPwbM5AXcHZW6B7sG3tUZw
        subject_person_id: p_RRCU75moaPdZZ4yeCD82Y5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王穎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5hrP8BDAjUjUBVLuYig2by
          claim_id: c_HPwbM5AXcHZW6B7sG3tUZw
          source_id: s_j9ewAwVF8TqMM5zri2T2P9
          stance: supports
          locator: CBDB:35523
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35523）
          source: &a1
            id: s_j9ewAwVF8TqMM5zri2T2P9
            source_type: api_record
            title: 中国历代人物传记资料库：王穎（CBDB 35523）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35523&o=json
            external_identifier: CBDB:35523
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.138Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BQRahD2TQnaznLfeiwRMGd
        subject_person_id: p_RRCU75moaPdZZ4yeCD82Y5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王穎，明人物。籍贯永和。（中国历代人物传记资料库 CBDB 35523）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BbuG61o887kMGKhR9OElGe
          claim_id: c_BQRahD2TQnaznLfeiwRMGd
          source_id: s_j9ewAwVF8TqMM5zri2T2P9
          stance: supports
          locator: CBDB:35523
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_wzz5-9i469oOE9rzyYqWwQ
        subject_person_id: p_6VfyaJrbVtLEDBvH7EiLTz
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_RRCU75moaPdZZ4yeCD82Y5
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UVrZ0ZtS7Fn150cHIot4lg
          claim_id: c_wzz5-9i469oOE9rzyYqWwQ
          source_id: s_j9ewAwVF8TqMM5zri2T2P9
          stance: supports
          locator: CBDB 双向互证（祖父 王斯覺 ⇄ 孫 王穎）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_6VfyaJrbVtLEDBvH7EiLTz
        status: active
        display_name: 王斯覺
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王穎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王穎 | accepted |
| bio.summary | 王穎，明人物。籍贯永和。（中国历代人物传记资料库 CBDB 35523） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_6VfyaJrbVtLEDBvH7EiLTz | 王斯覺 | accepted |

## 外部来源

- [中国历代人物传记资料库：王穎（CBDB 35523）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35523&o=json)
