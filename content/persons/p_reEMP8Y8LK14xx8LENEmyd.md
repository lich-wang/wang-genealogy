---
schema: wang-person/v1
id: p_reEMP8Y8LK14xx8LENEmyd
status: active
merged_into: null
display_name: 王惠风
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ApLkD2g6rsCiwkgN48gCBD
        subject_person_id: p_reEMP8Y8LK14xx8LENEmyd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惠风（生于3世纪），王惠風﹐晉人﹐女。蘭閨寶錄有著錄。维基数据以独立条目 Q21094103 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_BG7xILDegqg9TdsoTVK3r4
          claim_id: c_ApLkD2g6rsCiwkgN48gCBD
          source_id: s_eF6pB86KMxq2kwHrvyh74u
          stance: supports
          locator: Q21094103
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikidata。
          source: &a1
            id: s_eF6pB86KMxq2kwHrvyh74u
            source_type: api_record
            title: 維基數據：王惠风（Q21094103）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q21094103
            external_identifier: Q21094103
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:50.858Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%83%A0%E9%A2%A8
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_YBaTY8FReMXva1Qg6YWV1e
        subject_person_id: p_reEMP8Y8LK14xx8LENEmyd
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 3世纪
            calendar_note: 維基數據 P569 結構化日期，精度：世纪
            earliest: null
            latest: null
            precision: unknown
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WaQWjpbb4qHRgurVfeAPVS
          claim_id: c_YBaTY8FReMXva1Qg6YWV1e
          source_id: s_eF6pB86KMxq2kwHrvyh74u
          stance: supports
          locator: Q21094103
          quotation: null
          interpretation_note: null
          source:
            id: s_eF6pB86KMxq2kwHrvyh74u
            source_type: api_record
            title: 維基數據：王惠风（Q21094103）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q21094103
            external_identifier: Q21094103
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:50.858Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%83%A0%E9%A2%A8
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_g64UuvD3UBnGbZ97r2Hh2H
        subject_person_id: p_reEMP8Y8LK14xx8LENEmyd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惠风
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LWA5Hk8Zz8G5s6pZEpdtY1
          claim_id: c_g64UuvD3UBnGbZ97r2Hh2H
          source_id: s_eF6pB86KMxq2kwHrvyh74u
          stance: supports
          locator: Q21094103
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mMXEk53MFw8eEu2zL7HMMP
        subject_person_id: p_q3FQRLHTWhMBHM5s8M9VaB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_reEMP8Y8LK14xx8LENEmyd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_pN9JGnbtxrMeVgAj5TWaGQ
          claim_id: c_mMXEk53MFw8eEu2zL7HMMP
          source_id: s_hs5JaNuqXqqHpaNVEc1TZn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_hs5JaNuqXqqHpaNVEc1TZn
            source_type: website
            title: 中文维基百科：王衍
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/王衍_(西晉)
            external_identifier: Q15886837
            license_code: CC-BY-SA-4.0
            accessed_at: null
            metadata_json: null
        - id: cs_DAq2d3hdq66ye6AidDLhYq
          claim_id: c_mMXEk53MFw8eEu2zL7HMMP
          source_id: s_w9fFX8M9H2ngc77WZA1erA
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_w9fFX8M9H2ngc77WZA1erA
            source_type: api_record
            title: 維基數據：王衍（Q15886837）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15886837
            external_identifier: Q15886837
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:14:34.613Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%A1%8D_(%E8%A5%BF%E6%99%8B)
        - id: cs_X9NzQ7SvTCFXpHjvGAuEoE
          claim_id: c_mMXEk53MFw8eEu2zL7HMMP
          source_id: s_eF6pB86KMxq2kwHrvyh74u
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_eF6pB86KMxq2kwHrvyh74u
            source_type: api_record
            title: 維基數據：王惠风（Q21094103）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q21094103
            external_identifier: Q21094103
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:50.858Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%83%A0%E9%A2%A8
        - id: cs_yT1PBXHF62vbc2y3KyfSfd
          claim_id: c_mMXEk53MFw8eEu2zL7HMMP
          source_id: s_rPLdsSuuHfN7nX52Q2zEhU
          stance: supports
          locator: 亲属关系：女兒
          quotation: null
          interpretation_note: CBDB 注明此条来源：明清婦女著作數據庫
          source:
            id: s_rPLdsSuuHfN7nX52Q2zEhU
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王衍（135461）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135461&o=json
            external_identifier: CBDB:135461
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:32.886Z
            metadata_json: null
        - id: cs_PCZiu3HBQJoCP8egu2C9xC
          claim_id: c_mMXEk53MFw8eEu2zL7HMMP
          source_id: s_kjaM1C9HYDFEeLbfus4Kgu
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：明清婦女著作數據庫
          source:
            id: s_kjaM1C9HYDFEeLbfus4Kgu
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王惠風（135460）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135460&o=json
            external_identifier: CBDB:135460
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:33.016Z
            metadata_json: null
        - id: cs_3nc9UK5M9Gi3p2bT9F2YAU
          claim_id: c_mMXEk53MFw8eEu2zL7HMMP
          source_id: s_THDkubFKSdg9pJYPBh38XE
          stance: supports
          locator: 条文：信息框 父親
          quotation: 太尉王衍
          interpretation_note: null
          source:
            id: s_THDkubFKSdg9pJYPBh38XE
            source_type: website
            title: 中文维基百科：王惠風
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%83%A0%E9%A2%A8
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:14.707Z
            metadata_json: null
        - id: cs_N62Vd33sz2BSLbpdhoCQrs
          claim_id: c_mMXEk53MFw8eEu2zL7HMMP
          source_id: s_xxA9QxeXbCr1oq7wPHSSCo
          stance: supports
          locator: 条文：之子/之女
          quotation: 王惠風 ，名晉賢，字惠風，以字行，琅邪临沂（今山东省临沂市）人，西晉太尉王衍女，早年聘為司馬遹的太子妃
          interpretation_note: null
          source:
            id: s_xxA9QxeXbCr1oq7wPHSSCo
            source_type: website
            title: 中文维基百科：王惠風
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%83%A0%E9%A2%A8
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:21.017Z
            metadata_json: null
      object_person:
        id: p_q3FQRLHTWhMBHM5s8M9VaB
        status: active
        display_name: 王衍
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_VhS3YmSbU47P7VHt5J31Sa
        subject_person_id: p_YK7ABNV6dntqReNgEsTPMp
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_reEMP8Y8LK14xx8LENEmyd
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_CLX3stmWuun59zJ58K7t5h
          claim_id: c_VhS3YmSbU47P7VHt5J31Sa
          source_id: s_eF6pB86KMxq2kwHrvyh74u
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_eF6pB86KMxq2kwHrvyh74u
            source_type: api_record
            title: 維基數據：王惠风（Q21094103）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q21094103
            external_identifier: Q21094103
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:50.858Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%83%A0%E9%A2%A8
        - id: cs_zmGw9XyVUQ4pxefPx1P74R
          claim_id: c_VhS3YmSbU47P7VHt5J31Sa
          source_id: s_kjaM1C9HYDFEeLbfus4Kgu
          stance: supports
          locator: 亲属关系：丈夫
          quotation: null
          interpretation_note: CBDB 注明此条来源：明清婦女著作數據庫
          source:
            id: s_kjaM1C9HYDFEeLbfus4Kgu
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王惠風（135460）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135460&o=json
            external_identifier: CBDB:135460
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:33.016Z
            metadata_json: null
        - id: cs_yuQY7pv6eao7ncQUNjyukx
          claim_id: c_VhS3YmSbU47P7VHt5J31Sa
          source_id: s_Paow4JEGQK9nH4DQRvHQew
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_Paow4JEGQK9nH4DQRvHQew
            source_type: api_record
            title: 维基数据：司马遹（Q45474029）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45474029
            external_identifier: Q45474029
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:32.125Z
            metadata_json: null
        - id: cs_27PcKJvkvMt66pX278rBYJ
          claim_id: c_VhS3YmSbU47P7VHt5J31Sa
          source_id: s_fX2chXrvXqWFVyw5723NfA
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：明清婦女著作數據庫
          source:
            id: s_fX2chXrvXqWFVyw5723NfA
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：司馬遹（135465）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135465&o=json
            external_identifier: CBDB:135465
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:32.265Z
            metadata_json: null
        - id: cs_VBxDjUKBf8hTdjNWDcCb63
          claim_id: c_VhS3YmSbU47P7VHt5J31Sa
          source_id: s_THDkubFKSdg9pJYPBh38XE
          stance: supports
          locator: 条文：信息框 夫
          quotation: 愍怀太子司馬遹
          interpretation_note: null
          source:
            id: s_THDkubFKSdg9pJYPBh38XE
            source_type: website
            title: 中文维基百科：王惠風
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%83%A0%E9%A2%A8
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:14.707Z
            metadata_json: null
        - id: cs_C4thZj533JDbqt2DchdsPe
          claim_id: c_VhS3YmSbU47P7VHt5J31Sa
          source_id: s_xxA9QxeXbCr1oq7wPHSSCo
          stance: supports
          locator: 条文：信息框 夫
          quotation: 愍怀太子司馬遹
          interpretation_note: null
          source:
            id: s_xxA9QxeXbCr1oq7wPHSSCo
            source_type: website
            title: 中文维基百科：王惠風
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%83%A0%E9%A2%A8
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:21.017Z
            metadata_json: null
      object_person:
        id: p_YK7ABNV6dntqReNgEsTPMp
        status: active
        display_name: 司马遹
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王惠风

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王惠风（生于3世纪），王惠風﹐晉人﹐女。蘭閨寶錄有著錄。维基数据以独立条目 Q21094103 收录该人物；当前资料页据此确认其身份，其他生平细节仍待可靠史料补充。 | accepted |
| birth.date | 3世纪 | accepted |
| name.primary | 王惠风 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_q3FQRLHTWhMBHM5s8M9VaB | 王衍 | accepted |
| spouses | p_YK7ABNV6dntqReNgEsTPMp | 司马遹 | accepted |

## 外部来源

- [维基数据：司马遹（Q45474029）](https://www.wikidata.org/wiki/Q45474029)
- [維基數據：王惠风（Q21094103）](https://www.wikidata.org/wiki/Q21094103)
- [維基數據：王衍（Q15886837）](https://www.wikidata.org/wiki/Q15886837)
- [中文维基百科：王惠風](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%83%A0%E9%A2%A8)
- [中文维基百科：王衍](https://zh.wikipedia.org/wiki/王衍_(西晉))
- [CBDB 中国历代人物传记资料库：司馬遹（135465）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135465&o=json)
- [CBDB 中国历代人物传记资料库：王惠風（135460）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135460&o=json)
- [CBDB 中国历代人物传记资料库：王衍（135461）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135461&o=json)
