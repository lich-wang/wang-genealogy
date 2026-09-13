---
schema: wang-person/v1
id: p_cZvYCBgN67MGf6TAYHFPB7
status: active
merged_into: null
display_name: 王氏
cbdb_id: 333679
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZjHmPXXsG3AzanBQdp8PBa
        subject_person_id: p_cZvYCBgN67MGf6TAYHFPB7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏，明人物。隆慶二年進士。（中国历代人物传记资料库 CBDB 333679）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_eTrL8ed2GSXAjMwbGfTyEM
          claim_id: c_ZjHmPXXsG3AzanBQdp8PBa
          source_id: s_vyhTKFDzDCgZDcw7SYs5du
          stance: supports
          locator: CBDB:333679
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_vyhTKFDzDCgZDcw7SYs5du
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王氏（333679）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333679&o=json
            external_identifier: CBDB:333679
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T00:38:01.436Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_oJ3Hcm6sNjEGLW8WAp8F57
        subject_person_id: p_cZvYCBgN67MGf6TAYHFPB7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_VAbCZ2HbUcBicCmKrcJRRX
          claim_id: c_oJ3Hcm6sNjEGLW8WAp8F57
          source_id: s_vyhTKFDzDCgZDcw7SYs5du
          stance: supports
          locator: Q65861019
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_tcCc3j6Rjor6RJPZY6WaHT
          claim_id: c_oJ3Hcm6sNjEGLW8WAp8F57
          source_id: s_CCLQ1pJRTuuEF2NxgNkKEX
          stance: supports
          locator: Q65861019
          quotation: null
          interpretation_note: null
          source:
            id: s_CCLQ1pJRTuuEF2NxgNkKEX
            source_type: api_record
            title: 维基数据：王氏（Q65861019）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65861019
            external_identifier: Q65861019
            license_code: CC0-1.0
            accessed_at: 2026-09-05T00:38:01.056Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RFbtK7LRew2zS6qAU4Y4Ah
        subject_person_id: p_g5KSSBRpZ9iAzVfbXmLaWQ
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_cZvYCBgN67MGf6TAYHFPB7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QgnhmtTCDg1m6s1Fy6JAUd
          claim_id: c_RFbtK7LRew2zS6qAU4Y4Ah
          source_id: s_CCLQ1pJRTuuEF2NxgNkKEX
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_CCLQ1pJRTuuEF2NxgNkKEX
            source_type: api_record
            title: 维基数据：王氏（Q65861019）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65861019
            external_identifier: Q65861019
            license_code: CC0-1.0
            accessed_at: 2026-09-05T00:38:01.056Z
            metadata_json: null
        - id: cs_gfyj539E1MLqH7UoPUFaAF
          claim_id: c_RFbtK7LRew2zS6qAU4Y4Ah
          source_id: s_PV6LjnAVB1mi771cCJQAMq
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_PV6LjnAVB1mi771cCJQAMq
            source_type: api_record
            title: 維基數據：王世贞（Q6127545）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q6127545
            external_identifier: Q6127545
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:14:50.038Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%B8%96%E8%B4%9E
      object_person:
        id: p_g5KSSBRpZ9iAzVfbXmLaWQ
        status: active
        display_name: 王世贞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_bG7GMJVb9wtte9FeBPSha3
        subject_person_id: p_FnKoSAfNuscoKyefuKvf8m
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_cZvYCBgN67MGf6TAYHFPB7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_541bqqv1wPikGaXWrBMHKD
          claim_id: c_bG7GMJVb9wtte9FeBPSha3
          source_id: s_CCLQ1pJRTuuEF2NxgNkKEX
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_CCLQ1pJRTuuEF2NxgNkKEX
            source_type: api_record
            title: 维基数据：王氏（Q65861019）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65861019
            external_identifier: Q65861019
            license_code: CC0-1.0
            accessed_at: 2026-09-05T00:38:01.056Z
            metadata_json: null
        - id: cs_ZyxVPQNnJNyHdGLyLXzcNR
          claim_id: c_bG7GMJVb9wtte9FeBPSha3
          source_id: s_vyhTKFDzDCgZDcw7SYs5du
          stance: supports
          locator: 亲属关系：丈夫
          quotation: null
          interpretation_note: CBDB 注明此条来源：隆慶二年進士登科錄:一卷
          source:
            id: s_vyhTKFDzDCgZDcw7SYs5du
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王氏（333679）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333679&o=json
            external_identifier: CBDB:333679
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T00:38:01.436Z
            metadata_json: null
        - id: cs_wfJBcLM4jrxPnvDFdg143Y
          claim_id: c_bG7GMJVb9wtte9FeBPSha3
          source_id: s_iigo2a2RsE9UED8U3mAFtk
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_iigo2a2RsE9UED8U3mAFtk
            source_type: api_record
            title: 维基数据：华叔阳（Q45593520）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45593520
            external_identifier: Q45593520
            license_code: CC0-1.0
            accessed_at: 2026-09-05T00:46:30.696Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E8%8F%AF%E5%8F%94%E9%99%BD
      object_person:
        id: p_FnKoSAfNuscoKyefuKvf8m
        status: active
        display_name: 华叔阳
        merged_into_person_id: null
    - claim:
        id: c__DIZ2yF0QXNTg0kLnIGrZs
        subject_person_id: p_cZvYCBgN67MGf6TAYHFPB7
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_FnKoSAfNuscoKyefuKvf8m
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-47A0oG25_0OwrDJm66G4z
          claim_id: c__DIZ2yF0QXNTg0kLnIGrZs
          source_id: s_vyhTKFDzDCgZDcw7SYs5du
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第十一名：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FnKoSAfNuscoKyefuKvf8m
        status: active
        display_name: 华叔阳
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王氏，明人物。隆慶二年進士。（中国历代人物传记资料库 CBDB 333679） | accepted |
| name.primary | 王氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_g5KSSBRpZ9iAzVfbXmLaWQ | 王世贞 | accepted |
| spouses | p_FnKoSAfNuscoKyefuKvf8m | 华叔阳 | accepted |
| spouses | p_FnKoSAfNuscoKyefuKvf8m | 华叔阳 | accepted |

## 外部来源

- [维基数据：华叔阳（Q45593520）](https://www.wikidata.org/wiki/Q45593520)
- [维基数据：王氏（Q65861019）](https://www.wikidata.org/wiki/Q65861019)
- [維基數據：王世贞（Q6127545）](https://www.wikidata.org/wiki/Q6127545)
- [CBDB 中国历代人物传记资料库：王氏（333679）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333679&o=json)
