---
schema: wang-person/v1
id: p_HXYvwN6RtEBxcDi3jLfvHs
status: active
merged_into: null
display_name: 王瑜
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zTsT6d7ePcDyHsujsHNTqg
        subject_person_id: p_HXYvwN6RtEBxcDi3jLfvHs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HBRNtk78c1f8nXX7Hx9PHW
          claim_id: c_zTsT6d7ePcDyHsujsHNTqg
          source_id: s_hWWy7BLYk22yzPYs6FviJA
          stance: supports
          locator: CBDB:1931
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1931）
          source: &a1
            id: s_hWWy7BLYk22yzPYs6FviJA
            source_type: api_record
            title: 中国历代人物传记资料库：王瑜（CBDB 1931）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1931&o=json
            external_identifier: CBDB:1931
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.410Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pt9Mu6iHbj2Z3KoqN2yN5j
        subject_person_id: p_HXYvwN6RtEBxcDi3jLfvHs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑜，宋人物。籍贯洛陽，曾任大理寺丞、路提點刑獄公事、轉運副使。（中国历代人物传记资料库 CBDB 1931）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_sM_UiGtiroFKbNI8UtQn7Q
          claim_id: c_pt9Mu6iHbj2Z3KoqN2yN5j
          source_id: s_hWWy7BLYk22yzPYs6FviJA
          stance: supports
          locator: CBDB:1931
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-diCzLDCBSs2xmg9X8CeRN
        subject_person_id: p_rZc2qEJdizKjfm6aY4AiLt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HXYvwN6RtEBxcDi3jLfvHs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tECfvzeYtHquOCzUwJjtrq
          claim_id: c_-diCzLDCBSs2xmg9X8CeRN
          source_id: s_r_gf945GKtVmAenxP31_ba
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1933）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_r_gf945GKtVmAenxP31_ba
            source_type: api_record
            title: 中国历代人物传记资料库：王瑜（CBDB 1931）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1931&o=json
            external_identifier: CBDB:1931
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rZc2qEJdizKjfm6aY4AiLt
        status: active
        display_name: 王說
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瑜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑜 | accepted |
| bio.summary | 王瑜，宋人物。籍贯洛陽，曾任大理寺丞、路提點刑獄公事、轉運副使。（中国历代人物传记资料库 CBDB 1931） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rZc2qEJdizKjfm6aY4AiLt | 王說 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑜（CBDB 1931）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1931&o=json)
