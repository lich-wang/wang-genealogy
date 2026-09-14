---
schema: wang-person/v1
id: p_7Tia4RakEpFHiC5SDiDZSG
status: active
merged_into: null
display_name: 王让
cbdb_id: 333155
revision: 6
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZyB5W7BAWHx2NYi2432812
        subject_person_id: p_7Tia4RakEpFHiC5SDiDZSG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王让，明人物。天順八年進士，籍贯公安。（中国历代人物传记资料库 CBDB 333155）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_wLB2cwq6K588h7FYBbyMnX
          claim_id: c_ZyB5W7BAWHx2NYi2432812
          source_id: s_E8MK8EbyhqXYE21WkXB53z
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_E8MK8EbyhqXYE21WkXB53z
            source_type: api_record
            title: 维基数据：王让（Q45561003）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45561003
            external_identifier: Q45561003
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:40.608Z
            metadata_json: null
        - id: cs_nET8hOB3yAzyFsS9tMaOs6
          claim_id: c_ZyB5W7BAWHx2NYi2432812
          source_id: s_QJLYD7t1vSgu5q1eeSCmEt
          stance: supports
          locator: CBDB:333155
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_QJLYD7t1vSgu5q1eeSCmEt
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王讓（333155）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333155&o=json
            external_identifier: CBDB:333155
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:40.786Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9qTNvXcpBwByA5XkdyqmLD
        subject_person_id: p_7Tia4RakEpFHiC5SDiDZSG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王让
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2ytfcDT9xZZiBojCDaARBC
          claim_id: c_9qTNvXcpBwByA5XkdyqmLD
          source_id: s_QJLYD7t1vSgu5q1eeSCmEt
          stance: supports
          locator: Q45561003
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_ae4aJvWgJ4qeyWnjnKL4ar
          claim_id: c_9qTNvXcpBwByA5XkdyqmLD
          source_id: s_E8MK8EbyhqXYE21WkXB53z
          stance: supports
          locator: Q45561003
          quotation: null
          interpretation_note: null
          source:
            id: s_E8MK8EbyhqXYE21WkXB53z
            source_type: api_record
            title: 维基数据：王让（Q45561003）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45561003
            external_identifier: Q45561003
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:40.608Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ditAnJAA3G8xFDxrcAiDNR
        subject_person_id: p_vxysH4B8xpbAGBTVKY3Dh2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7Tia4RakEpFHiC5SDiDZSG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JArabU3KGRTYmNWE2ai1kM
          claim_id: c_ditAnJAA3G8xFDxrcAiDNR
          source_id: s_E8MK8EbyhqXYE21WkXB53z
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_TY7SDDcLga4yTBMS4rQKJZ
          claim_id: c_ditAnJAA3G8xFDxrcAiDNR
          source_id: s_FjWPqUA5b5EfEwFHzckW5s
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_FjWPqUA5b5EfEwFHzckW5s
            source_type: api_record
            title: 维基数据：王原道（Q45560451）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45560451
            external_identifier: Q45560451
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:58.883Z
            metadata_json: null
      object_person:
        id: p_vxysH4B8xpbAGBTVKY3Dh2
        status: active
        display_name: 王原道
        merged_into_person_id: null
  children:
    - claim:
        id: c_1k2pZ7SSCQADE6CQeMCjaK
        subject_person_id: p_7Tia4RakEpFHiC5SDiDZSG
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_NPncefunYMmyKCiKheCMKZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_V5gxA41qVaB9M3FNTwU337
          claim_id: c_1k2pZ7SSCQADE6CQeMCjaK
          source_id: s_E8MK8EbyhqXYE21WkXB53z
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_E8MK8EbyhqXYE21WkXB53z
            source_type: api_record
            title: 维基数据：王让（Q45561003）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45561003
            external_identifier: Q45561003
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:40.608Z
            metadata_json: null
        - id: cs_tVspaXc4tK7d1F1konvMVW
          claim_id: c_1k2pZ7SSCQADE6CQeMCjaK
          source_id: s_jV9cZa9HALN5QKmuoMDSV3
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_jV9cZa9HALN5QKmuoMDSV3
            source_type: api_record
            title: 维基数据：王轼（Q15912162）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15912162
            external_identifier: Q15912162
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:06.643Z
            metadata_json: null
      object_person:
        id: p_NPncefunYMmyKCiKheCMKZ
        status: active
        display_name: 王轼
        merged_into_person_id: null
    - claim:
        id: c_SlIRY1cxrOG4IMFRMHoLxK
        subject_person_id: p_7Tia4RakEpFHiC5SDiDZSG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8kvzu18KWCHGBJbrWxW4b9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mxZ85apvdDYOI48VbQKDVR
          claim_id: c_SlIRY1cxrOG4IMFRMHoLxK
          source_id: s_dizqWBK4gRWFn4mBpUaSGR
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第十二名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dizqWBK4gRWFn4mBpUaSGR
            source_type: api_record
            title: 中国历代人物传记资料库：王軾（CBDB 67466）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67466&o=json
            external_identifier: CBDB:67466
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.995Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8kvzu18KWCHGBJbrWxW4b9
        status: active
        display_name: 王軾
        merged_into_person_id: null
    - claim:
        id: c_9Yg4OiyTs7LWZnH1DZjqf_
        subject_person_id: p_7Tia4RakEpFHiC5SDiDZSG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_enLWH5xMh6hD2cwvGp276E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0lgg1cYxIW9LxI8WmcN3C4
          claim_id: c_9Yg4OiyTs7LWZnH1DZjqf_
          source_id: s_ColIeScHJMQd5dmajbH0Ny
          stance: supports
          locator: CBDB：兄弟 王軾（67466）之父／母 王让
          quotation: null
          interpretation_note: 由兄弟关系推断：王軻 与 王軾 为同胞（CBDB 记「兄」），王軾 之父／母即 王軻 之父／母。
          source:
            id: s_ColIeScHJMQd5dmajbH0Ny
            source_type: api_record
            title: 中国历代人物传记资料库：王軻（CBDB 333210）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333210&o=json
            external_identifier: CBDB:333210
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_enLWH5xMh6hD2cwvGp276E
        status: active
        display_name: 王軻
        merged_into_person_id: null
    - claim:
        id: c_yf1inU_ZHS60vFdzccD4TS
        subject_person_id: p_7Tia4RakEpFHiC5SDiDZSG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_f3B8LBgrUtDCW64EF1K5R8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_49accD6GzefdpyFFjpf6IW
          claim_id: c_yf1inU_ZHS60vFdzccD4TS
          source_id: s_vh2EMwT0MeEBVqzwL82zKu
          stance: supports
          locator: CBDB：兄弟 王軾（67466）之父／母 王让
          quotation: null
          interpretation_note: 由兄弟关系推断：王軏 与 王軾 为同胞（CBDB 记「兄」），王軾 之父／母即 王軏 之父／母。
          source:
            id: s_vh2EMwT0MeEBVqzwL82zKu
            source_type: api_record
            title: 中国历代人物传记资料库：王軏（CBDB 333199）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333199&o=json
            external_identifier: CBDB:333199
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_f3B8LBgrUtDCW64EF1K5R8
        status: active
        display_name: 王軏
        merged_into_person_id: null
    - claim:
        id: c_i91-CzZEyJ_aCH6cjGcocl
        subject_person_id: p_7Tia4RakEpFHiC5SDiDZSG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vVwHqUM15KNKtfV7M38Bid
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yEvot4GVki4EfmVessvEzY
          claim_id: c_i91-CzZEyJ_aCH6cjGcocl
          source_id: s_i067xdYO0Mx8HqX6kmbdOF
          stance: supports
          locator: CBDB：兄弟 王軾（67466）之父／母 王让
          quotation: null
          interpretation_note: 由兄弟关系推断：王輗 与 王軾 为同胞（CBDB 记「兄」），王軾 之父／母即 王輗 之父／母。
          source:
            id: s_i067xdYO0Mx8HqX6kmbdOF
            source_type: api_record
            title: 中国历代人物传记资料库：王輗（CBDB 333188）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333188&o=json
            external_identifier: CBDB:333188
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vVwHqUM15KNKtfV7M38Bid
        status: active
        display_name: 王輗
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王让

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王让，明人物。天順八年進士，籍贯公安。（中国历代人物传记资料库 CBDB 333155） | accepted |
| name.primary | 王让 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vxysH4B8xpbAGBTVKY3Dh2 | 王原道 | accepted |
| children | p_NPncefunYMmyKCiKheCMKZ | 王轼 | accepted |
| children | p_8kvzu18KWCHGBJbrWxW4b9 | 王軾 | accepted |
| children | p_enLWH5xMh6hD2cwvGp276E | 王軻 | accepted |
| children | p_f3B8LBgrUtDCW64EF1K5R8 | 王軏 | accepted |
| children | p_vVwHqUM15KNKtfV7M38Bid | 王輗 | accepted |

## 外部来源

- [维基数据：王让（Q45561003）](https://www.wikidata.org/wiki/Q45561003)
- [维基数据：王轼（Q15912162）](https://www.wikidata.org/wiki/Q15912162)
- [维基数据：王原道（Q45560451）](https://www.wikidata.org/wiki/Q45560451)
- [中国历代人物传记资料库：王軻（CBDB 333210）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333210&o=json)
- [中国历代人物传记资料库：王輗（CBDB 333188）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333188&o=json)
- [中国历代人物传记资料库：王軾（CBDB 67466）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67466&o=json)
- [中国历代人物传记资料库：王軏（CBDB 333199）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333199&o=json)
- [CBDB 中国历代人物传记资料库：王讓（333155）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333155&o=json)
