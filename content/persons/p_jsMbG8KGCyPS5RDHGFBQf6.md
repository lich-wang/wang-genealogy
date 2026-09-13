---
schema: wang-person/v1
id: p_jsMbG8KGCyPS5RDHGFBQf6
status: active
merged_into: null
display_name: 王知鲁
cbdb_id: 175410
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sH61poi61BBN9aEpGxTuDg
        subject_person_id: p_jsMbG8KGCyPS5RDHGFBQf6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王知鲁（卒于894年），唐人物。籍贯臨沂。（中国历代人物传记资料库 CBDB 175410）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_FGNT6Wubm4H8T68FpMv3MU
          claim_id: c_sH61poi61BBN9aEpGxTuDg
          source_id: s_fHhPeewhaCKuAG54RiHD6g
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_fHhPeewhaCKuAG54RiHD6g
            source_type: api_record
            title: 维基数据：王知鲁（Q45657987）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657987
            external_identifier: Q45657987
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:05.102Z
            metadata_json: null
        - id: cs_NMvZBdQt0rhAwvCL_0pQJY
          claim_id: c_sH61poi61BBN9aEpGxTuDg
          source_id: s_45GGD8HtKejp5LRQhfCFNe
          stance: supports
          locator: CBDB:175410
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_45GGD8HtKejp5LRQhfCFNe
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王知魯（175410）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175410&o=json
            external_identifier: CBDB:175410
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:05.281Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_NGAc81hBJwxjhXrugVmQ1G
        subject_person_id: p_jsMbG8KGCyPS5RDHGFBQf6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 894年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0894-01-01
            latest: 0894-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MCCCPt7WjArmSRV7pNjcMH
          claim_id: c_NGAc81hBJwxjhXrugVmQ1G
          source_id: s_fHhPeewhaCKuAG54RiHD6g
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_fHhPeewhaCKuAG54RiHD6g
            source_type: api_record
            title: 维基数据：王知鲁（Q45657987）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657987
            external_identifier: Q45657987
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:05.102Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gj4ZboNfouAow68aTvgTU1
        subject_person_id: p_jsMbG8KGCyPS5RDHGFBQf6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王知鲁
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3nQ1Qqt5Y6swHNvy1maivf
          claim_id: c_gj4ZboNfouAow68aTvgTU1
          source_id: s_45GGD8HtKejp5LRQhfCFNe
          stance: supports
          locator: Q45657987
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_L6cEu7AU6PWfb1MMiq5V8t
          claim_id: c_gj4ZboNfouAow68aTvgTU1
          source_id: s_fHhPeewhaCKuAG54RiHD6g
          stance: supports
          locator: Q45657987
          quotation: null
          interpretation_note: null
          source:
            id: s_fHhPeewhaCKuAG54RiHD6g
            source_type: api_record
            title: 维基数据：王知鲁（Q45657987）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657987
            external_identifier: Q45657987
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:05.102Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MYsE4bjJkhC6pHLbEkqrK6
        subject_person_id: p_J3uEtABU9yZpLVpDBsGAq3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jsMbG8KGCyPS5RDHGFBQf6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_GtumN47kD7EGqWU1ukYvQR
          claim_id: c_MYsE4bjJkhC6pHLbEkqrK6
          source_id: s_RD4sw4bpaLA5KUZpiyg3Qg
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_RD4sw4bpaLA5KUZpiyg3Qg
            source_type: api_record
            title: 维基数据：王迈（Q45657929）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657929
            external_identifier: Q45657929
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:57.051Z
            metadata_json: null
        - id: cs_Y98Ut3RW2AEa6MAfiGGAYC
          claim_id: c_MYsE4bjJkhC6pHLbEkqrK6
          source_id: s_1VmAjatw3vy2Jv48pJ6tUR
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_1VmAjatw3vy2Jv48pJ6tUR
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王邁（175409）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175409&o=json
            external_identifier: CBDB:175409
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:57.188Z
            metadata_json: null
        - id: cs_q6FJJ5TxqA5UGfnivtU8be
          claim_id: c_MYsE4bjJkhC6pHLbEkqrK6
          source_id: s_fHhPeewhaCKuAG54RiHD6g
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_fHhPeewhaCKuAG54RiHD6g
            source_type: api_record
            title: 维基数据：王知鲁（Q45657987）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657987
            external_identifier: Q45657987
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:05.102Z
            metadata_json: null
        - id: cs_W2yh1EZT4HLQPfb14qvXpN
          claim_id: c_MYsE4bjJkhC6pHLbEkqrK6
          source_id: s_45GGD8HtKejp5LRQhfCFNe
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_45GGD8HtKejp5LRQhfCFNe
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王知魯（175410）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175410&o=json
            external_identifier: CBDB:175410
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:05.281Z
            metadata_json: null
      object_person:
        id: p_J3uEtABU9yZpLVpDBsGAq3
        status: active
        display_name: 王迈
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王知鲁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王知鲁（卒于894年），唐人物。籍贯臨沂。（中国历代人物传记资料库 CBDB 175410） | accepted |
| death.date | 894年 | accepted |
| name.primary | 王知鲁 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_J3uEtABU9yZpLVpDBsGAq3 | 王迈 | accepted |

## 外部来源

- [维基数据：王迈（Q45657929）](https://www.wikidata.org/wiki/Q45657929)
- [维基数据：王知鲁（Q45657987）](https://www.wikidata.org/wiki/Q45657987)
- [CBDB 中国历代人物传记资料库：王邁（175409）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175409&o=json)
- [CBDB 中国历代人物传记资料库：王知魯（175410）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175410&o=json)
