---
schema: wang-person/v1
id: p_mkR6kcUHpe5aBUQaBs5jmA
status: active
merged_into: null
display_name: 王钦臣
cbdb_id: 1767
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r6kio8W7kWtsTMPnpPXHD6
        subject_person_id: p_mkR6kcUHpe5aBUQaBs5jmA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王钦臣，宋人物。籍贯宋城，身份为藏書家、版本學家，入仕科舉學校: 恩賜出身、特賜出身等，曾任尚書省工部侍郎、待制、提舉宮觀。（中国历代人物传记资料库 CBDB 1767）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_q3yL3ajm4u6ERpqR1jMFc2
          claim_id: c_r6kio8W7kWtsTMPnpPXHD6
          source_id: s_wmuuK4uiWJYg465BHQ7M3U
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_wmuuK4uiWJYg465BHQ7M3U
            source_type: api_record
            title: 维基数据：王钦臣（Q45359372）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359372
            external_identifier: Q45359372
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:58.503Z
            metadata_json: null
        - id: cs_5WGpdSealYGnSqDOVWtDy-
          claim_id: c_r6kio8W7kWtsTMPnpPXHD6
          source_id: s_2tPrssMS1NUEiEByiWFaZ7
          stance: supports
          locator: CBDB:1767
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_2tPrssMS1NUEiEByiWFaZ7
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王欽臣（1767）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1767&o=json
            external_identifier: CBDB:1767
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:58.643Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qj3GJNEwhaW2zm5xmiti5d
        subject_person_id: p_mkR6kcUHpe5aBUQaBs5jmA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王钦臣
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_QEc7fLp323AkEDiLGsYAdH
          claim_id: c_qj3GJNEwhaW2zm5xmiti5d
          source_id: s_wmuuK4uiWJYg465BHQ7M3U
          stance: supports
          locator: Q45359372
          quotation: null
          interpretation_note: null
          source:
            id: s_wmuuK4uiWJYg465BHQ7M3U
            source_type: api_record
            title: 维基数据：王钦臣（Q45359372）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359372
            external_identifier: Q45359372
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:58.503Z
            metadata_json: null
        - id: cs_bD6XC911UNdb6hsVsdHgp4
          claim_id: c_qj3GJNEwhaW2zm5xmiti5d
          source_id: s_2tPrssMS1NUEiEByiWFaZ7
          stance: supports
          locator: Q45359372
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hMt5qf8o9WUAyw45ZZT9TE
        subject_person_id: p_eJ5xPSqX9C5GQJFJ6vhqFc
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_mkR6kcUHpe5aBUQaBs5jmA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QFFX3jnMKXPWCkCGiJcGYB
          claim_id: c_hMt5qf8o9WUAyw45ZZT9TE
          source_id: s_wmuuK4uiWJYg465BHQ7M3U
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_wmuuK4uiWJYg465BHQ7M3U
            source_type: api_record
            title: 维基数据：王钦臣（Q45359372）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45359372
            external_identifier: Q45359372
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:58.503Z
            metadata_json: null
        - id: cs_aFQgNMiqEG61HNwKDLJnRH
          claim_id: c_hMt5qf8o9WUAyw45ZZT9TE
          source_id: s_bAVZu7wS9x2wcXBfq2WzC1
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_bAVZu7wS9x2wcXBfq2WzC1
            source_type: api_record
            title: 维基数据：王洙（Q15935485）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15935485
            external_identifier: Q15935485
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:33.095Z
            metadata_json: null
        - id: cs_hdL5U8La8PDLPAWFWXDtJ5
          claim_id: c_hMt5qf8o9WUAyw45ZZT9TE
          source_id: s_ANfzGbinedKmVFoYy6S9xD
          stance: supports
          locator: 亲属关系：三子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_ANfzGbinedKmVFoYy6S9xD
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王洙（3941）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3941&o=json
            external_identifier: CBDB:3941
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:44.711Z
            metadata_json: null
      object_person:
        id: p_eJ5xPSqX9C5GQJFJ6vhqFc
        status: active
        display_name: 王洙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王钦臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王钦臣，宋人物。籍贯宋城，身份为藏書家、版本學家，入仕科舉學校: 恩賜出身、特賜出身等，曾任尚書省工部侍郎、待制、提舉宮觀。（中国历代人物传记资料库 CBDB 1767） | accepted |
| name.primary | 王钦臣 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_eJ5xPSqX9C5GQJFJ6vhqFc | 王洙 | accepted |

## 外部来源

- [维基数据：王钦臣（Q45359372）](https://www.wikidata.org/wiki/Q45359372)
- [维基数据：王洙（Q15935485）](https://www.wikidata.org/wiki/Q15935485)
- [CBDB 中国历代人物传记资料库：王欽臣（1767）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1767&o=json)
- [CBDB 中国历代人物传记资料库：王洙（3941）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3941&o=json)
