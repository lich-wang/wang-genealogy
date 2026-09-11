---
schema: wang-person/v1
id: p_ZJUopZAcjUMxN4niZZoT6P
status: active
merged_into: null
display_name: 王繼華
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jumqfGi915mmbaFJE7jmJs
        subject_person_id: p_ZJUopZAcjUMxN4niZZoT6P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼華
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VGf5Z9FQE2Yg5HBTYw75Kp
          claim_id: c_jumqfGi915mmbaFJE7jmJs
          source_id: s_6rNKuuMLEELs4BfbjNKhDz
          stance: supports
          locator: CBDB:17735
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（17735）
          source: &a1
            id: s_6rNKuuMLEELs4BfbjNKhDz
            source_type: api_record
            title: 中国历代人物传记资料库：王繼華（CBDB 17735）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17735&o=json
            external_identifier: CBDB:17735
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.669Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dWJuUvgyy2GAauW4SCBsGW
        subject_person_id: p_ZJUopZAcjUMxN4niZZoT6P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pQ2zLrheFqKLRqHFAYi2x2
          claim_id: c_dWJuUvgyy2GAauW4SCBsGW
          source_id: s_6rNKuuMLEELs4BfbjNKhDz
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
        id: c_jZMWT7CdbUGo80GBxMrgzX
        subject_person_id: p_LFxvpBGgpXjRcssfMFqjqd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZJUopZAcjUMxN4niZZoT6P
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bBwCUg7YywDod-qV01LRF1
          claim_id: c_jZMWT7CdbUGo80GBxMrgzX
          source_id: s_edUQwsd4u4tj3BUQq21WWP
          stance: supports
          locator: CBDB 双向互证（子 王繼華 ⇄ 父 王鐸）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_edUQwsd4u4tj3BUQq21WWP
            source_type: api_record
            title: 中国历代人物传记资料库：王鐸（CBDB 17734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17734&o=json
            external_identifier: CBDB:17734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.668Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_LFxvpBGgpXjRcssfMFqjqd
        status: active
        display_name: 王鐸
        merged_into_person_id: null
  children:
    - claim:
        id: c_GsgXQgFAZtNKEI0Tii31Uu
        subject_person_id: p_ZJUopZAcjUMxN4niZZoT6P
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Pp7M9RgnjpKf6F2mKVs4Gk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XTTdb-7G-cjFQT9KYbCf2G
          claim_id: c_GsgXQgFAZtNKEI0Tii31Uu
          source_id: s_6rNKuuMLEELs4BfbjNKhDz
          stance: supports
          locator: CBDB 双向互证（子 王兼皇 ⇄ 父 王繼華）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_Pp7M9RgnjpKf6F2mKVs4Gk
        status: active
        display_name: 王兼皇
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王繼華

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼華 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LFxvpBGgpXjRcssfMFqjqd | 王鐸 | accepted |
| children | p_Pp7M9RgnjpKf6F2mKVs4Gk | 王兼皇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鐸（CBDB 17734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17734&o=json)
- [中国历代人物传记资料库：王繼華（CBDB 17735）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17735&o=json)
