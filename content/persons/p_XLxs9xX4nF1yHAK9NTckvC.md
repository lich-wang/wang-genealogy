---
schema: wang-person/v1
id: p_XLxs9xX4nF1yHAK9NTckvC
status: active
merged_into: null
display_name: 王興滿
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PcdKUZ2Q6qPG1mXWsHVtCb
        subject_person_id: p_XLxs9xX4nF1yHAK9NTckvC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王興滿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ueZpuZbdgXV1JACyNJvAmf
          claim_id: c_PcdKUZ2Q6qPG1mXWsHVtCb
          source_id: s_a2E38NyACYiaaotxNFsRg6
          stance: supports
          locator: CBDB:145578
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145578）
          source: &a1
            id: s_a2E38NyACYiaaotxNFsRg6
            source_type: api_record
            title: 中国历代人物传记资料库：王興滿（CBDB 145578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145578&o=json
            external_identifier: CBDB:145578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.226Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4a9LoAbHkN9rLWAHoXLBDx
        subject_person_id: p_XLxs9xX4nF1yHAK9NTckvC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 730年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CTEg3Ans6wM4JjUaosm2t5
          claim_id: c_4a9LoAbHkN9rLWAHoXLBDx
          source_id: s_a2E38NyACYiaaotxNFsRg6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Xm3kmJq965XReuQM5F7Hw3
        subject_person_id: p_XLxs9xX4nF1yHAK9NTckvC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 787年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7LnzX1bH2KBmd8f19eJrNZ
          claim_id: c_Xm3kmJq965XReuQM5F7Hw3
          source_id: s_a2E38NyACYiaaotxNFsRg6
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6mDnfmKUJJGDuv2V85XmfQ
        subject_person_id: p_XLxs9xX4nF1yHAK9NTckvC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z4yteo84oHVT3XVWVrVQS9
          claim_id: c_6mDnfmKUJJGDuv2V85XmfQ
          source_id: s_a2E38NyACYiaaotxNFsRg6
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
        id: c_ySky8p_itrcqB1S0qRpXyR
        subject_person_id: p_2FV1HrcqkaNTNZ39zXHC6H
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XLxs9xX4nF1yHAK9NTckvC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cG2MvN6yrCoXYeqqEPOF5A
          claim_id: c_ySky8p_itrcqB1S0qRpXyR
          source_id: s_M8be4QKEKRCMJr7nknFqv6
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_M8be4QKEKRCMJr7nknFqv6
            source_type: api_record
            title: 中国历代人物传记资料库：王震處（CBDB 189428）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189428&o=json
            external_identifier: CBDB:189428
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.273Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2FV1HrcqkaNTNZ39zXHC6H
        status: active
        display_name: 王震處
        merged_into_person_id: null
  children:
    - claim:
        id: c_8EPj466D1Gg2AtR0owiEmw
        subject_person_id: p_XLxs9xX4nF1yHAK9NTckvC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_P5RF5BLHoMC8ugGB4BR7ea
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_udBh_qo02WtiFCcg66Fjtr
          claim_id: c_8EPj466D1Gg2AtR0owiEmw
          source_id: s_BK2Sii4yJGooJK7xrUWGNp
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BK2Sii4yJGooJK7xrUWGNp
            source_type: api_record
            title: 中国历代人物传记资料库：王光進（CBDB 189429）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189429&o=json
            external_identifier: CBDB:189429
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.274Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_P5RF5BLHoMC8ugGB4BR7ea
        status: active
        display_name: 王光進
        merged_into_person_id: null
    - claim:
        id: c_dLdyAqDTUUn5HMf53Oztwi
        subject_person_id: p_XLxs9xX4nF1yHAK9NTckvC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PceLKpJcjuF3qH5aXMV9x9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-0LdM6n9GQ83dLD3UmfqGA
          claim_id: c_dLdyAqDTUUn5HMf53Oztwi
          source_id: s_M8T96wgjSGA4JjXv8K7zxW
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_M8T96wgjSGA4JjXv8K7zxW
            source_type: api_record
            title: 中国历代人物传记资料库：王國悅（CBDB 189430）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189430&o=json
            external_identifier: CBDB:189430
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.274Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PceLKpJcjuF3qH5aXMV9x9
        status: active
        display_name: 王國悅
        merged_into_person_id: null
    - claim:
        id: c_4d90lmDNVZeL04oiMKtUYh
        subject_person_id: p_XLxs9xX4nF1yHAK9NTckvC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ywCDUR6r5YJckZ4r6ZE4Bx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1YC1UmwffoAnqrxRN1Ioqx
          claim_id: c_4d90lmDNVZeL04oiMKtUYh
          source_id: s_YLsJpAXKCDwgSZoPnAbFyp
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YLsJpAXKCDwgSZoPnAbFyp
            source_type: api_record
            title: 中国历代人物传记资料库：王惟政（CBDB 189431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189431&o=json
            external_identifier: CBDB:189431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.293Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ywCDUR6r5YJckZ4r6ZE4Bx
        status: active
        display_name: 王惟政
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王興滿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王興滿 | accepted |
| birth.date | 730年 | accepted |
| death.date | 787年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2FV1HrcqkaNTNZ39zXHC6H | 王震處 | accepted |
| children | p_P5RF5BLHoMC8ugGB4BR7ea | 王光進 | accepted |
| children | p_PceLKpJcjuF3qH5aXMV9x9 | 王國悅 | accepted |
| children | p_ywCDUR6r5YJckZ4r6ZE4Bx | 王惟政 | accepted |

## 外部来源

- [中国历代人物传记资料库：王光進（CBDB 189429）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189429&o=json)
- [中国历代人物传记资料库：王國悅（CBDB 189430）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189430&o=json)
- [中国历代人物传记资料库：王惟政（CBDB 189431）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189431&o=json)
- [中国历代人物传记资料库：王興滿（CBDB 145578）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145578&o=json)
- [中国历代人物传记资料库：王震處（CBDB 189428）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=189428&o=json)
