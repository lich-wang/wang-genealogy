---
schema: wang-person/v1
id: p_NuT9NrbF95GBrUJnPKKH1H
status: active
merged_into: null
display_name: 王銳
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PrKGc9KHwkT4UTeYrx9jJ4
        subject_person_id: p_NuT9NrbF95GBrUJnPKKH1H
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gbzDJtbezX3bpfwadBY7ga
          claim_id: c_PrKGc9KHwkT4UTeYrx9jJ4
          source_id: s_ox3YuM7rRdDy4B32NZ91t3
          stance: supports
          locator: CBDB:12849
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（12849）
          source: &a1
            id: s_ox3YuM7rRdDy4B32NZ91t3
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 12849）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12849&o=json
            external_identifier: CBDB:12849
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.607Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nzEtiAjP3RBS6M6C32HX4S
        subject_person_id: p_NuT9NrbF95GBrUJnPKKH1H
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銳，宋人物。籍贯咸平，身份为地方士人/鄉紳。（中国历代人物传记资料库 CBDB 12849）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OzFUZOjYAJHMA6HbSGr-Os
          claim_id: c_nzEtiAjP3RBS6M6C32HX4S
          source_id: s_ox3YuM7rRdDy4B32NZ91t3
          stance: supports
          locator: CBDB:12849
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vKLBG1OQ8g_clq79CC9LY3
        subject_person_id: p_qM3x6kx3VpqHy4njLErPrG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NuT9NrbF95GBrUJnPKKH1H
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fLFS24n_K2cqECCih1RQw5
          claim_id: c_vKLBG1OQ8g_clq79CC9LY3
          source_id: s_ox3YuM7rRdDy4B32NZ91t3
          stance: supports
          locator: CBDB 双向互证（父 王祚 ⇄ 子 王銳）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_qM3x6kx3VpqHy4njLErPrG
        status: active
        display_name: 王祚
        merged_into_person_id: null
  children:
    - claim:
        id: c_qh-g-48aF3oaXZd7DilhzV
        subject_person_id: p_NuT9NrbF95GBrUJnPKKH1H
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_H3E5VxBaQfqgvzveq3gJSK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zn9SZNI3k2BsO0_E0IOksT
          claim_id: c_qh-g-48aF3oaXZd7DilhzV
          source_id: s_2Uy9LcTEbqt4ThFXCehGaG
          stance: supports
          locator: CBDB 双向互证（父 王銳 ⇄ 子 王代恕）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_2Uy9LcTEbqt4ThFXCehGaG
            source_type: api_record
            title: 中国历代人物传记资料库：王代恕（CBDB 12850）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12850&o=json
            external_identifier: CBDB:12850
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.608Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_H3E5VxBaQfqgvzveq3gJSK
        status: active
        display_name: 王代恕
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王銳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銳 | accepted |
| bio.summary | 王銳，宋人物。籍贯咸平，身份为地方士人/鄉紳。（中国历代人物传记资料库 CBDB 12849） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qM3x6kx3VpqHy4njLErPrG | 王祚 | accepted |
| children | p_H3E5VxBaQfqgvzveq3gJSK | 王代恕 | accepted |

## 外部来源

- [中国历代人物传记资料库：王代恕（CBDB 12850）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12850&o=json)
- [中国历代人物传记资料库：王銳（CBDB 12849）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12849&o=json)
