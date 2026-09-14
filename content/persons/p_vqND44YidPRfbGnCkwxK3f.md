---
schema: wang-person/v1
id: p_vqND44YidPRfbGnCkwxK3f
status: active
merged_into: null
display_name: 王植
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_obLmVnwPLfU6JJCdGBL9du
        subject_person_id: p_vqND44YidPRfbGnCkwxK3f
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王植
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2itFd47t7Fn8hyFbuSXz73
          claim_id: c_obLmVnwPLfU6JJCdGBL9du
          source_id: s_4zJUiAGGP8vSkGssiSKQEX
          stance: supports
          locator: CBDB:10720
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10720）
          source: &a1
            id: s_4zJUiAGGP8vSkGssiSKQEX
            source_type: api_record
            title: 中国历代人物传记资料库：王植（CBDB 10720）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10720&o=json
            external_identifier: CBDB:10720
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.556Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vNjSJPnYr1vBENdQhWNUDb
        subject_person_id: p_vqND44YidPRfbGnCkwxK3f
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王植，宋人物。籍贯金華，身份为士人。（中国历代人物传记资料库 CBDB 10720）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fDcjunGgnhbbHE1C6TMrsS
          claim_id: c_vNjSJPnYr1vBENdQhWNUDb
          source_id: s_4zJUiAGGP8vSkGssiSKQEX
          stance: supports
          locator: CBDB:10720
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_b8Bft_bQ_0hLVhXXsnIOUc
        subject_person_id: p_vqND44YidPRfbGnCkwxK3f
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2B23wFhCdXcNQ5FpfAsGiT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bWTf8kkKiHVL0ZXsm84D0r
          claim_id: c_b8Bft_bQ_0hLVhXXsnIOUc
          source_id: s_FhYVAWWZmmKTCVCcnp2P0H
          stance: supports
          locator: CBDB 亲属：父（KinPerson 10720）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_FhYVAWWZmmKTCVCcnp2P0H
            source_type: api_record
            title: 中国历代人物传记资料库：王任（CBDB 30519）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30519&o=json
            external_identifier: CBDB:30519
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2B23wFhCdXcNQ5FpfAsGiT
        status: active
        display_name: 王任
        merged_into_person_id: null
    - claim:
        id: c_shObm8Yo3xfC-j0pa1QzdJ
        subject_person_id: p_vqND44YidPRfbGnCkwxK3f
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YegeX5DSdSRsQV8DvG1Sgv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VxTH7GIc7taqLcfed4g8pm
          claim_id: c_shObm8Yo3xfC-j0pa1QzdJ
          source_id: s_luizz2QNihvwSfG69krIpQ
          stance: supports
          locator: CBDB 亲属：父（KinPerson 10720）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_luizz2QNihvwSfG69krIpQ
            source_type: api_record
            title: 中国历代人物传记资料库：王偌（CBDB 30520）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30520&o=json
            external_identifier: CBDB:30520
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YegeX5DSdSRsQV8DvG1Sgv
        status: active
        display_name: 王偌
        merged_into_person_id: null
    - claim:
        id: c_yTa4p7877vFDsqNdpOjUsk
        subject_person_id: p_vqND44YidPRfbGnCkwxK3f
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aaeGDnDkeFzUZAfF2XpwUD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6EctF621ULuLa4PaCzyXwV
          claim_id: c_yTa4p7877vFDsqNdpOjUsk
          source_id: s_FJP56rWj-KS4wlruCHW-7f
          stance: supports
          locator: CBDB 亲属：父（KinPerson 10720）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_FJP56rWj-KS4wlruCHW-7f
            source_type: api_record
            title: 中国历代人物传记资料库：王傳（CBDB 30518）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30518&o=json
            external_identifier: CBDB:30518
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aaeGDnDkeFzUZAfF2XpwUD
        status: active
        display_name: 王傳
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_DiPAc3VDZvBq3h0X8Vv6_3
        subject_person_id: p_vqND44YidPRfbGnCkwxK3f
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_jLMCqxdqoaxA9z7UPVJiqB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8mgUI9Uj2qWYZ4flePGkyO
          claim_id: c_DiPAc3VDZvBq3h0X8Vv6_3
          source_id: s_q3pt7msaRBnwk9eia41Y4M
          stance: supports
          locator: 宋人傳記資料索引(電子版)，982;983：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_q3pt7msaRBnwk9eia41Y4M
            source_type: api_record
            title: 中国历代人物传记资料库：莊則（CBDB 5406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5406&o=json
            external_identifier: CBDB:5406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jLMCqxdqoaxA9z7UPVJiqB
        status: active
        display_name: 莊則
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王植

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王植 | accepted |
| bio.summary | 王植，宋人物。籍贯金華，身份为士人。（中国历代人物传记资料库 CBDB 10720） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2B23wFhCdXcNQ5FpfAsGiT | 王任 | accepted |
| children | p_YegeX5DSdSRsQV8DvG1Sgv | 王偌 | accepted |
| children | p_aaeGDnDkeFzUZAfF2XpwUD | 王傳 | accepted |
| spouses | p_jLMCqxdqoaxA9z7UPVJiqB | 莊則 | accepted |

## 外部来源

- [中国历代人物传记资料库：王傳（CBDB 30518）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30518&o=json)
- [中国历代人物传记资料库：王任（CBDB 30519）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30519&o=json)
- [中国历代人物传记资料库：王偌（CBDB 30520）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30520&o=json)
- [中国历代人物传记资料库：王植（CBDB 10720）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10720&o=json)
- [中国历代人物传记资料库：莊則（CBDB 5406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5406&o=json)
