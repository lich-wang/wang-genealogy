---
schema: wang-person/v1
id: p_4DYdpigk7s5FeUYbqrH9hx
status: active
merged_into: null
display_name: 王規
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Eq8NuA4uQPhA9yF1XgQUSM
        subject_person_id: p_4DYdpigk7s5FeUYbqrH9hx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王規
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yUBdhzv6rPfhKNE6oK1gif
          claim_id: c_Eq8NuA4uQPhA9yF1XgQUSM
          source_id: s_zrAXjHMEbL9b1NXmB6Eath
          stance: supports
          locator: CBDB:22149
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22149）
          source: &a1
            id: s_zrAXjHMEbL9b1NXmB6Eath
            source_type: api_record
            title: 中国历代人物传记资料库：王規（CBDB 22149）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22149&o=json
            external_identifier: CBDB:22149
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.836Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eKcHqv7sPo611rAK617Q2t
        subject_person_id: p_4DYdpigk7s5FeUYbqrH9hx
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
        - id: cs_ztxnQe5C7UMchKAKTFYk7S
          claim_id: c_eKcHqv7sPo611rAK617Q2t
          source_id: s_zrAXjHMEbL9b1NXmB6Eath
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
        id: c_er1txST0EvNhzG4YPq-UvC
        subject_person_id: p_GGLadgP9m3fJUNC13wBUxU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4DYdpigk7s5FeUYbqrH9hx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J_o_hgEZGfJGhQUnt1R5ZG
          claim_id: c_er1txST0EvNhzG4YPq-UvC
          source_id: s_zrAXjHMEbL9b1NXmB6Eath
          stance: supports
          locator: CBDB 双向互证（父 王元一 ⇄ 子 王規）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_GGLadgP9m3fJUNC13wBUxU
        status: active
        display_name: 王元一
        merged_into_person_id: null
  children:
    - claim:
        id: c_nIvDXK0BRzS2nRgLWECmsw
        subject_person_id: p_4DYdpigk7s5FeUYbqrH9hx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_18zU9DyKwhdtB8WDPSJtZj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HZehq6zDPzoAiWtlr9kH66
          claim_id: c_nIvDXK0BRzS2nRgLWECmsw
          source_id: s_oeommtZkRW5NdH29PcZFdH
          stance: supports
          locator: CBDB PersonKinshipInfo：父（王規）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oeommtZkRW5NdH29PcZFdH
            source_type: api_record
            title: 中国历代人物传记资料库：王森（CBDB 1867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1867&o=json
            external_identifier: CBDB:1867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.362Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_18zU9DyKwhdtB8WDPSJtZj
        status: active
        display_name: 王森
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王規

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王規 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GGLadgP9m3fJUNC13wBUxU | 王元一 | accepted |
| children | p_18zU9DyKwhdtB8WDPSJtZj | 王森 | accepted |

## 外部来源

- [中国历代人物传记资料库：王規（CBDB 22149）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22149&o=json)
- [中国历代人物传记资料库：王森（CBDB 1867）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1867&o=json)
