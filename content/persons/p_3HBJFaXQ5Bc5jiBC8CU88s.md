---
schema: wang-person/v1
id: p_3HBJFaXQ5Bc5jiBC8CU88s
status: active
merged_into: null
display_name: 吴氏
cbdb_id: 145228
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_W5P4-Qk3zfUK3c-uShAx-x
        subject_person_id: p_3HBJFaXQ5Bc5jiBC8CU88s
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 吴氏（764—824），唐人物。籍贯伊闕，曾任太夫人。（中国历代人物传记资料库 CBDB 145228）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_2tI32iBLQ-ah5rRYK8hi2C
          claim_id: c_W5P4-Qk3zfUK3c-uShAx-x
          source_id: s_uw3KYuPq2fiQMz5tHj8svR
          stance: supports
          locator: CBDB:145228
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_uw3KYuPq2fiQMz5tHj8svR
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：吳氏（145228）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145228&o=json
            external_identifier: CBDB:145228
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:37.307Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_VmEzLtiRPDkptycN7vVVJp
        subject_person_id: p_3HBJFaXQ5Bc5jiBC8CU88s
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 吴氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_g7VSh2mPozMnZR5RYV971a
          claim_id: c_VmEzLtiRPDkptycN7vVVJp
          source_id: s_uw3KYuPq2fiQMz5tHj8svR
          stance: supports
          locator: Q65803773
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_myNUod3RNA7xCpB1ib8oEG
          claim_id: c_VmEzLtiRPDkptycN7vVVJp
          source_id: s_B2acvdsAnsvsiY4rjsA1zy
          stance: supports
          locator: Q65803773
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_B2acvdsAnsvsiY4rjsA1zy
            source_type: api_record
            title: 维基数据：吴氏（Q65803773）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65803773
            external_identifier: Q65803773
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:37.127Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_AhwAshcXMYt8RBmr1JtrdV
        subject_person_id: p_3HBJFaXQ5Bc5jiBC8CU88s
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_X1UCfgUyoJHi8W8xdH58BE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wRrhUfqwWziqi1NCT3peyH
          claim_id: c_AhwAshcXMYt8RBmr1JtrdV
          source_id: s_uNFQmZbjnbMWfFpWUMCosA
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_uNFQmZbjnbMWfFpWUMCosA
            source_type: api_record
            title: 维基数据：王士真（Q20026517）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q20026517
            external_identifier: Q20026517
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:26.496Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A3%AB%E7%9C%9F
        - id: cs_pexxxF6VmpPMMf84UkgVLb
          claim_id: c_AhwAshcXMYt8RBmr1JtrdV
          source_id: s_B2acvdsAnsvsiY4rjsA1zy
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_oSPCZNZEoTsx1kGAzNPLuM
          claim_id: c_AhwAshcXMYt8RBmr1JtrdV
          source_id: s_8JcMUxTCwkNV6cEXnmYv9n
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_8JcMUxTCwkNV6cEXnmYv9n
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王士真（169076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169076&o=json
            external_identifier: CBDB:169076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:26.669Z
            metadata_json: null
      object_person:
        id: p_X1UCfgUyoJHi8W8xdH58BE
        status: active
        display_name: 王士真
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 吴氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 吴氏（764—824），唐人物。籍贯伊闕，曾任太夫人。（中国历代人物传记资料库 CBDB 145228） | accepted |
| name.primary | 吴氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_X1UCfgUyoJHi8W8xdH58BE | 王士真 | accepted |

## 外部来源

- [维基数据：王士真（Q20026517）](https://www.wikidata.org/wiki/Q20026517)
- [维基数据：吴氏（Q65803773）](https://www.wikidata.org/wiki/Q65803773)
- [CBDB 中国历代人物传记资料库：王士真（169076）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169076&o=json)
- [CBDB 中国历代人物传记资料库：吳氏（145228）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145228&o=json)
