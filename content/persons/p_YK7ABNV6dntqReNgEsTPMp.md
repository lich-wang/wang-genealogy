---
schema: wang-person/v1
id: p_YK7ABNV6dntqReNgEsTPMp
status: active
merged_into: null
display_name: 司马遹
cbdb_id: 135465
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PHZtAfrdgE8QMMpotPD_9d
        subject_person_id: p_YK7ABNV6dntqReNgEsTPMp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 司马遹，史料所见人物。本项目依据《司马遹》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_t0hgqaWrl4BsqOnwdlsdWr
          claim_id: c_PHZtAfrdgE8QMMpotPD_9d
          source_id: s_Paow4JEGQK9nH4DQRvHQew
          stance: supports
          locator: Q45474029
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_yrHKQr1jkwK8Xvrs8s3srB
        subject_person_id: p_YK7ABNV6dntqReNgEsTPMp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 司马遹
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_81Ke5oCDHn3CqDeon9VxB9
          claim_id: c_yrHKQr1jkwK8Xvrs8s3srB
          source_id: s_fX2chXrvXqWFVyw5723NfA
          stance: supports
          locator: Q45474029
          quotation: null
          interpretation_note: null
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
        - id: cs_8sMQEQ1w6qDjbdRmwtG7vX
          claim_id: c_yrHKQr1jkwK8Xvrs8s3srB
          source_id: s_Paow4JEGQK9nH4DQRvHQew
          stance: supports
          locator: Q45474029
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
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
        id: p_reEMP8Y8LK14xx8LENEmyd
        status: active
        display_name: 王惠风
        merged_into_person_id: null
    - claim:
        id: c_7o81BEI8uBBXxmE79nFhXX
        subject_person_id: p_QvmpGGKpmPejSG2VgwKUAo
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_YK7ABNV6dntqReNgEsTPMp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yhRO0n2oZYGAAyNVNRCbTO
          claim_id: c_7o81BEI8uBBXxmE79nFhXX
          source_id: s_22sDkGjqcPctnCzQ7R64Af
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #3052：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_22sDkGjqcPctnCzQ7R64Af
            source_type: api_record
            title: 中国历代人物传记资料库：王惠風（CBDB 135460）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135460&o=json
            external_identifier: CBDB:135460
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.339Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QvmpGGKpmPejSG2VgwKUAo
        status: active
        display_name: 王惠風
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 司马遹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 司马遹，史料所见人物。本项目依据《司马遹》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 司马遹 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_reEMP8Y8LK14xx8LENEmyd | 王惠风 | accepted |
| spouses | p_QvmpGGKpmPejSG2VgwKUAo | 王惠風 | accepted |

## 外部来源

- [维基数据：司马遹（Q45474029）](https://www.wikidata.org/wiki/Q45474029)
- [維基數據：王惠风（Q21094103）](https://www.wikidata.org/wiki/Q21094103)
- [中国历代人物传记资料库：王惠風（CBDB 135460）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135460&o=json)
- [中文维基百科：王惠風](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%83%A0%E9%A2%A8)
- [CBDB 中国历代人物传记资料库：司馬遹（135465）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135465&o=json)
