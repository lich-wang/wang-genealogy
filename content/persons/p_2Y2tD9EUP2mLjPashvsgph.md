---
schema: wang-person/v1
id: p_2Y2tD9EUP2mLjPashvsgph
status: active
merged_into: null
display_name: 王汝舟
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qN5DvDAUn82ubiJ312ZmcU
        subject_person_id: p_2Y2tD9EUP2mLjPashvsgph
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝舟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XPuyB1hHpQxuNkirPSY1P2
          claim_id: c_qN5DvDAUn82ubiJ312ZmcU
          source_id: s_BaEo1fGnF18taRLwyGNpyy
          stance: supports
          locator: CBDB:11388
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（11388）
          source: &a1
            id: s_BaEo1fGnF18taRLwyGNpyy
            source_type: api_record
            title: 中国历代人物传记资料库：王汝舟（CBDB 11388）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=11388&o=json
            external_identifier: CBDB:11388
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.568Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_asv8vdXP5Gc9uRzQUikyKc
        subject_person_id: p_2Y2tD9EUP2mLjPashvsgph
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝舟，宋人物。籍贯仙遊。（中国历代人物传记资料库 CBDB 11388）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_o6SRyveyKnVXaRu2IHKp1A
          claim_id: c_asv8vdXP5Gc9uRzQUikyKc
          source_id: s_BaEo1fGnF18taRLwyGNpyy
          stance: supports
          locator: CBDB:11388
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JMcxUs-KM74JH5OIiD5XXb
        subject_person_id: p_BnBj1GY8fTQKMsmV3FeuLa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2Y2tD9EUP2mLjPashvsgph
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fpNqGE5QeRwVNkT2X-7T59
          claim_id: c_JMcxUs-KM74JH5OIiD5XXb
          source_id: s_BaEo1fGnF18taRLwyGNpyy
          stance: supports
          locator: CBDB 双向互证（父 王贄 ⇄ 子 王汝舟）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_BnBj1GY8fTQKMsmV3FeuLa
        status: active
        display_name: 王贄
        merged_into_person_id: null
  children:
    - claim:
        id: c_rxqFlmxIcgsZwiG3wXMob5
        subject_person_id: p_2Y2tD9EUP2mLjPashvsgph
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iKrmtsKEeW8GRyF5X6yMqg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ngnOtuQQPhNEWa4yMeCSUl
          claim_id: c_rxqFlmxIcgsZwiG3wXMob5
          source_id: s_BaEo1fGnF18taRLwyGNpyy
          stance: supports
          locator: CBDB 双向互证（子 王鑑 ⇄ 父 王汝舟）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_iKrmtsKEeW8GRyF5X6yMqg
        status: active
        display_name: 王鑑
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王汝舟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝舟 | accepted |
| bio.summary | 王汝舟，宋人物。籍贯仙遊。（中国历代人物传记资料库 CBDB 11388） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BnBj1GY8fTQKMsmV3FeuLa | 王贄 | accepted |
| children | p_iKrmtsKEeW8GRyF5X6yMqg | 王鑑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝舟（CBDB 11388）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=11388&o=json)
