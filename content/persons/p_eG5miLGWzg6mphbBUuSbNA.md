---
schema: wang-person/v1
id: p_eG5miLGWzg6mphbBUuSbNA
status: active
merged_into: null
display_name: 王桢之
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_-9X0tkHZ1XVEgbqB21GDs9
        subject_person_id: p_eG5miLGWzg6mphbBUuSbNA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桢之（？—？），字公榦，琅邪郡临沂县（今山东省临沂市）人，王羲之之孙，王徽之之子，在东晋历任侍中、大司马长史。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_y2eEcnQDGdCh1zW0pWxkW1
          claim_id: c_-9X0tkHZ1XVEgbqB21GDs9
          source_id: s_f1uPc5kvMurbrqIgk9TW0v
          stance: supports
          locator: 导言
          quotation: 王桢之（？—？），字公榦，琅邪郡临沂县（今山东省临沂市）人，王羲
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source:
            id: s_f1uPc5kvMurbrqIgk9TW0v
            source_type: website
            title: 中文维基百科：王桢之
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%A1%A2%E4%B9%8B
            external_identifier: Q15956125
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:31:32.727Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CDKPBszUkWcnyeZSFXJDBs
        subject_person_id: p_eG5miLGWzg6mphbBUuSbNA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桢之
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_KBjGazEbFhPAb1pzxwbv2U
          claim_id: c_CDKPBszUkWcnyeZSFXJDBs
          source_id: s_xWPhv7vGbJoFohaN91Gu1f
          stance: supports
          locator: Q15956125
          quotation: null
          interpretation_note: null
          source:
            id: s_xWPhv7vGbJoFohaN91Gu1f
            source_type: api_record
            title: 维基数据：王桢之（Q15956125）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15956125
            external_identifier: Q15956125
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:51.242Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%A1%A2%E4%B9%8B
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_un6R9mkT3FNzXuFBB8nMjW
        subject_person_id: p_AuDnp3tfDdGY8Do4f11kBs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eG5miLGWzg6mphbBUuSbNA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_f3P6a7Gv1SRgSHGLqKBW4y
          claim_id: c_un6R9mkT3FNzXuFBB8nMjW
          source_id: s_zPYxEpH8gHaJEAKuT5R6M3
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_zPYxEpH8gHaJEAKuT5R6M3
            source_type: api_record
            title: 維基數據：王徽之（Q15928529）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15928529
            external_identifier: Q15928529
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:13.674Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BE%BD%E4%B9%8B
        - id: cs_nnRtVofmwGju2k4n4dgNGb
          claim_id: c_un6R9mkT3FNzXuFBB8nMjW
          source_id: s_xWPhv7vGbJoFohaN91Gu1f
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_xWPhv7vGbJoFohaN91Gu1f
            source_type: api_record
            title: 维基数据：王桢之（Q15956125）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15956125
            external_identifier: Q15956125
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:51.242Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%A1%A2%E4%B9%8B
        - id: cs_f16CKVjSGuLsGGyXTN6MsJ
          claim_id: c_un6R9mkT3FNzXuFBB8nMjW
          source_id: s_LzPqCZP5CSutS296cDkJQV
          stance: supports
          locator: 条文：之子/之女
          quotation: 王桢之（{{bd|？||？||}}），字公榦，琅邪郡临沂县（今山东省临沂市）人，王羲之之孙，王徽之之子，在东晋历任侍中、大司马长史
          interpretation_note: null
          source:
            id: s_LzPqCZP5CSutS296cDkJQV
            source_type: website
            title: 中文维基百科：王桢之
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%A1%A2%E4%B9%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:37.129Z
            metadata_json: null
        - id: cs_jMkBXbp3xEWDDFeK2tWqU3
          claim_id: c_un6R9mkT3FNzXuFBB8nMjW
          source_id: s_bM5XXwFKQ8UA6nGHJqzdku
          stance: supports
          locator: 条文：之子/之女
          quotation: 王桢之，字公榦，琅邪郡临沂县（今山东省临沂市）人，王羲之之孙，王徽之之子，在东晋历任侍中、大司马长史
          interpretation_note: null
          source:
            id: s_bM5XXwFKQ8UA6nGHJqzdku
            source_type: website
            title: 中文维基百科：王桢之
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%A1%A2%E4%B9%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:33.799Z
            metadata_json: null
      object_person:
        id: p_AuDnp3tfDdGY8Do4f11kBs
        status: active
        display_name: 王徽之
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_42YcSfVsWP7PhyAQ792WL6
        subject_person_id: p_CDzewbvc57C3MHsFxzq2nG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_eG5miLGWzg6mphbBUuSbNA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_e8qhD93CeppBiw1yp4jB1v
          claim_id: c_42YcSfVsWP7PhyAQ792WL6
          source_id: s_LzPqCZP5CSutS296cDkJQV
          stance: supports
          locator: 条文：条文识读（祖）（2世）
          quotation: 王桢之（），字公榦，琅邪郡临沂县（今山东省临沂市）人，王羲之之孙，王徽之之子
          interpretation_note: null
          source:
            id: s_LzPqCZP5CSutS296cDkJQV
            source_type: website
            title: 中文维基百科：王桢之
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%A1%A2%E4%B9%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:37.129Z
            metadata_json: null
        - id: cs_chMXnMoPRYiP4QxWiNZZtr
          claim_id: c_42YcSfVsWP7PhyAQ792WL6
          source_id: s_bM5XXwFKQ8UA6nGHJqzdku
          stance: supports
          locator: 条文：条文识读（ancestor）（2世）
          quotation: 王羲之之孙，王徽之之子
          interpretation_note: null
          source:
            id: s_bM5XXwFKQ8UA6nGHJqzdku
            source_type: website
            title: 中文维基百科：王桢之
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%A1%A2%E4%B9%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:33.799Z
            metadata_json: null
      object_person:
        id: p_CDzewbvc57C3MHsFxzq2nG
        status: active
        display_name: 王羲之
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王桢之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王桢之（？—？），字公榦，琅邪郡临沂县（今山东省临沂市）人，王羲之之孙，王徽之之子，在东晋历任侍中、大司马长史。 | accepted |
| name.primary | 王桢之 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AuDnp3tfDdGY8Do4f11kBs | 王徽之 | accepted |
| ancestors | p_CDzewbvc57C3MHsFxzq2nG | 王羲之 | accepted |

## 外部来源

- [维基数据：王桢之（Q15956125）](https://www.wikidata.org/wiki/Q15956125)
- [維基數據：王徽之（Q15928529）](https://www.wikidata.org/wiki/Q15928529)
- [中文维基百科：王桢之](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%A1%A2%E4%B9%8B)
