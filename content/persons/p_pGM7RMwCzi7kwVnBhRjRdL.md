---
schema: wang-person/v1
id: p_pGM7RMwCzi7kwVnBhRjRdL
status: active
merged_into: null
display_name: 王杰
cbdb_id: 30882
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uFwHBcEQdVmqcRrPcMyXTG
        subject_person_id: p_pGM7RMwCzi7kwVnBhRjRdL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王杰，北齊人物。籍贯龍門。（中国历代人物传记资料库 CBDB 30882）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_99EtpJJWrVAyjynNjV3NaS
          claim_id: c_uFwHBcEQdVmqcRrPcMyXTG
          source_id: s_pS2AvoSTHQe1PygJoudYDu
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_pS2AvoSTHQe1PygJoudYDu
            source_type: api_record
            title: 维基数据：王杰（Q45418700）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418700
            external_identifier: Q45418700
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:25.154Z
            metadata_json: null
        - id: cs_zo4MF2u6oS-U-Q1L3xEBu8
          claim_id: c_uFwHBcEQdVmqcRrPcMyXTG
          source_id: s_2GFRR8sizZhBqPZU9n4H1r
          stance: supports
          locator: CBDB:30882
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_2GFRR8sizZhBqPZU9n4H1r
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王傑（30882）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30882&o=json
            external_identifier: CBDB:30882
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:14:25.290Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KPPxkN2A3VzPctLLA1nhes
        subject_person_id: p_pGM7RMwCzi7kwVnBhRjRdL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王杰
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7W59Wc3xCa7qQHa1HEBQUP
          claim_id: c_KPPxkN2A3VzPctLLA1nhes
          source_id: s_pS2AvoSTHQe1PygJoudYDu
          stance: supports
          locator: Q45418700
          quotation: null
          interpretation_note: null
          source:
            id: s_pS2AvoSTHQe1PygJoudYDu
            source_type: api_record
            title: 维基数据：王杰（Q45418700）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418700
            external_identifier: Q45418700
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:25.154Z
            metadata_json: null
        - id: cs_agRTG39HJTg3tqgkB64YTa
          claim_id: c_KPPxkN2A3VzPctLLA1nhes
          source_id: s_2GFRR8sizZhBqPZU9n4H1r
          stance: supports
          locator: Q45418700
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mxFVBnwLumzHeXEpZPCucL
        subject_person_id: p_kr9VdqKtFAJT7rCj4iNxGQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pGM7RMwCzi7kwVnBhRjRdL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_5Gfn5tnKMFqJpVrWyztRSf
          claim_id: c_mxFVBnwLumzHeXEpZPCucL
          source_id: s_pS2AvoSTHQe1PygJoudYDu
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_pS2AvoSTHQe1PygJoudYDu
            source_type: api_record
            title: 维基数据：王杰（Q45418700）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418700
            external_identifier: Q45418700
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:25.154Z
            metadata_json: null
        - id: cs_hhLNnL7c7puJjb2VE9nZGC
          claim_id: c_mxFVBnwLumzHeXEpZPCucL
          source_id: s_2GFRR8sizZhBqPZU9n4H1r
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_2GFRR8sizZhBqPZU9n4H1r
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王傑（30882）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30882&o=json
            external_identifier: CBDB:30882
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:14:25.290Z
            metadata_json: null
        - id: cs_qnHsqRbV4WGCUaLkxjiyLn
          claim_id: c_mxFVBnwLumzHeXEpZPCucL
          source_id: s_P4tinirCGxq9jxkKJ8Lc8C
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_P4tinirCGxq9jxkKJ8Lc8C
            source_type: api_record
            title: 维基数据：王彦（Q45418699）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418699
            external_identifier: Q45418699
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:17:58.902Z
            metadata_json: null
        - id: cs_33rxMYPa8276va5DK3pHy8
          claim_id: c_mxFVBnwLumzHeXEpZPCucL
          source_id: s_kkoZvxHYknsSCd7XN45CjD
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_kkoZvxHYknsSCd7XN45CjD
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王彥（30881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30881&o=json
            external_identifier: CBDB:30881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:17:59.056Z
            metadata_json: null
      object_person:
        id: p_kr9VdqKtFAJT7rCj4iNxGQ
        status: active
        display_name: 王彦
        merged_into_person_id: null
  children:
    - claim:
        id: c_1xsxQnb11svzucTJyQySx7
        subject_person_id: p_pGM7RMwCzi7kwVnBhRjRdL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FgR9VvAXpxLb9taXRJM7DE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_CFG2mPSMEGtwqUSgGgnF8m
          claim_id: c_1xsxQnb11svzucTJyQySx7
          source_id: s_cVBTHcFW8dh9kfXXkX7AwS
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_cVBTHcFW8dh9kfXXkX7AwS
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王隆（30883）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30883&o=json
            external_identifier: CBDB:30883
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:09:57.713Z
            metadata_json: null
        - id: cs_hgFNoJBo5G71Qtc2Tmf9tm
          claim_id: c_1xsxQnb11svzucTJyQySx7
          source_id: s_Z1SMjtQ6s9uuwomo9vkqme
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_Z1SMjtQ6s9uuwomo9vkqme
            source_type: api_record
            title: 维基数据：王隆（Q45418703）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418703
            external_identifier: Q45418703
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:09:57.561Z
            metadata_json: null
        - id: cs_fZ6t4VV33Eutwg96ujj4JK
          claim_id: c_1xsxQnb11svzucTJyQySx7
          source_id: s_pS2AvoSTHQe1PygJoudYDu
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_pS2AvoSTHQe1PygJoudYDu
            source_type: api_record
            title: 维基数据：王杰（Q45418700）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418700
            external_identifier: Q45418700
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:14:25.154Z
            metadata_json: null
        - id: cs_Lq9MQhDVEsr4thC2Hozqpn
          claim_id: c_1xsxQnb11svzucTJyQySx7
          source_id: s_2GFRR8sizZhBqPZU9n4H1r
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_2GFRR8sizZhBqPZU9n4H1r
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王傑（30882）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30882&o=json
            external_identifier: CBDB:30882
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T03:14:25.290Z
            metadata_json: null
      object_person:
        id: p_FgR9VvAXpxLb9taXRJM7DE
        status: active
        display_name: 王隆
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王杰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王杰，北齊人物。籍贯龍門。（中国历代人物传记资料库 CBDB 30882） | accepted |
| name.primary | 王杰 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kr9VdqKtFAJT7rCj4iNxGQ | 王彦 | accepted |
| children | p_FgR9VvAXpxLb9taXRJM7DE | 王隆 | accepted |

## 外部来源

- [维基数据：王杰（Q45418700）](https://www.wikidata.org/wiki/Q45418700)
- [维基数据：王隆（Q45418703）](https://www.wikidata.org/wiki/Q45418703)
- [维基数据：王彦（Q45418699）](https://www.wikidata.org/wiki/Q45418699)
- [CBDB 中国历代人物传记资料库：王傑（30882）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30882&o=json)
- [CBDB 中国历代人物传记资料库：王隆（30883）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30883&o=json)
- [CBDB 中国历代人物传记资料库：王彥（30881）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30881&o=json)
