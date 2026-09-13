---
schema: wang-person/v1
id: p_cZBud2fMcDR6rn4NqeNQf3
status: active
merged_into: null
display_name: 王铨
cbdb_id: 175404
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_spw4c915iuVpaNBgMdZwK6
        subject_person_id: p_cZBud2fMcDR6rn4NqeNQf3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王铨（卒于857年），唐人物。籍贯臨沂。（中国历代人物传记资料库 CBDB 175404）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_myfAY8kBKa2y6DZUNGpcEs
          claim_id: c_spw4c915iuVpaNBgMdZwK6
          source_id: s_gxC4334CKRU2fVv2oRotcA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_gxC4334CKRU2fVv2oRotcA
            source_type: api_record
            title: 维基数据：王铨（Q45657634）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657634
            external_identifier: Q45657634
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:57.050Z
            metadata_json: null
        - id: cs_bnoKT0Dar7FhAKRDZBV_jc
          claim_id: c_spw4c915iuVpaNBgMdZwK6
          source_id: s_wppNwAcNRHuUX9Wdo6H1RQ
          stance: supports
          locator: CBDB:175404
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_wppNwAcNRHuUX9Wdo6H1RQ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王銓（175404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175404&o=json
            external_identifier: CBDB:175404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:57.211Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_k6m1nUae1LEBq1NZB7YMGU
        subject_person_id: p_cZBud2fMcDR6rn4NqeNQf3
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 857年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0857-01-01
            latest: 0857-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SBN7QBLjJLFTTFTyYqz4T9
          claim_id: c_k6m1nUae1LEBq1NZB7YMGU
          source_id: s_gxC4334CKRU2fVv2oRotcA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_gxC4334CKRU2fVv2oRotcA
            source_type: api_record
            title: 维基数据：王铨（Q45657634）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657634
            external_identifier: Q45657634
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:57.050Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_G5RyKxVewHLPp15J7YNJzN
        subject_person_id: p_cZBud2fMcDR6rn4NqeNQf3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王铨
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Pehg2rHH3cVn6a8X4qAFKJ
          claim_id: c_G5RyKxVewHLPp15J7YNJzN
          source_id: s_gxC4334CKRU2fVv2oRotcA
          stance: supports
          locator: Q45657634
          quotation: null
          interpretation_note: null
          source:
            id: s_gxC4334CKRU2fVv2oRotcA
            source_type: api_record
            title: 维基数据：王铨（Q45657634）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657634
            external_identifier: Q45657634
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:57.050Z
            metadata_json: null
        - id: cs_m1enGmEXTfct9KBEgoGJA9
          claim_id: c_G5RyKxVewHLPp15J7YNJzN
          source_id: s_wppNwAcNRHuUX9Wdo6H1RQ
          stance: supports
          locator: Q45657634
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4JW49qBJ15DNW7CF5d9ZqP
        subject_person_id: p_HQnmd4RJFt5d8vk8o8quqE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cZBud2fMcDR6rn4NqeNQf3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_NYx9ntYQgk9uwu9C4feXEW
          claim_id: c_4JW49qBJ15DNW7CF5d9ZqP
          source_id: s_isJBstWqKzB45ufLR5ozHM
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_isJBstWqKzB45ufLR5ozHM
            source_type: api_record
            title: 维基数据：王海（Q45657452）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657452
            external_identifier: Q45657452
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:22.596Z
            metadata_json: null
        - id: cs_WVwF8EBumY9hJmRk93GEu4
          claim_id: c_4JW49qBJ15DNW7CF5d9ZqP
          source_id: s_zSTh8eU5n33uxyVAJyJML5
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_zSTh8eU5n33uxyVAJyJML5
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王海（175401）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175401&o=json
            external_identifier: CBDB:175401
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:22.874Z
            metadata_json: null
        - id: cs_YkZgdbwrMRfK5U9ArfBvR1
          claim_id: c_4JW49qBJ15DNW7CF5d9ZqP
          source_id: s_gxC4334CKRU2fVv2oRotcA
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_gxC4334CKRU2fVv2oRotcA
            source_type: api_record
            title: 维基数据：王铨（Q45657634）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657634
            external_identifier: Q45657634
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:57.050Z
            metadata_json: null
        - id: cs_btM2Rud1c6brNN46xAgPxm
          claim_id: c_4JW49qBJ15DNW7CF5d9ZqP
          source_id: s_wppNwAcNRHuUX9Wdo6H1RQ
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_wppNwAcNRHuUX9Wdo6H1RQ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王銓（175404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175404&o=json
            external_identifier: CBDB:175404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:57.211Z
            metadata_json: null
      object_person:
        id: p_HQnmd4RJFt5d8vk8o8quqE
        status: active
        display_name: 王海
        merged_into_person_id: null
  children:
    - claim:
        id: c_48ETkWZ7U6BnGuU79As1At
        subject_person_id: p_cZBud2fMcDR6rn4NqeNQf3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KEiBPSPoh2XdPxMAg8LpBW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_ZimA4kZHmtU7vfxDJW83Ud
          claim_id: c_48ETkWZ7U6BnGuU79As1At
          source_id: s_wppNwAcNRHuUX9Wdo6H1RQ
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_wppNwAcNRHuUX9Wdo6H1RQ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王銓（175404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175404&o=json
            external_identifier: CBDB:175404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:57.211Z
            metadata_json: null
        - id: cs_bT756r4Cg1RJnaQNUEwvjh
          claim_id: c_48ETkWZ7U6BnGuU79As1At
          source_id: s_gxC4334CKRU2fVv2oRotcA
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_gxC4334CKRU2fVv2oRotcA
            source_type: api_record
            title: 维基数据：王铨（Q45657634）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657634
            external_identifier: Q45657634
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:57.050Z
            metadata_json: null
        - id: cs_S9qjT6zZKQFa55Jd3Lr5iP
          claim_id: c_48ETkWZ7U6BnGuU79As1At
          source_id: s_gK5rQoyV5UsS8TCX7FYq8n
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_gK5rQoyV5UsS8TCX7FYq8n
            source_type: api_record
            title: 维基数据：王宝子（Q45657693）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657693
            external_identifier: Q45657693
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:03.116Z
            metadata_json: null
        - id: cs_WTk7oEP4WQunV5xTHit3Yz
          claim_id: c_48ETkWZ7U6BnGuU79As1At
          source_id: s_qmjcH7sdEzZfj777XiSxJF
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_qmjcH7sdEzZfj777XiSxJF
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王寶子（175405）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175405&o=json
            external_identifier: CBDB:175405
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:03.415Z
            metadata_json: null
      object_person:
        id: p_KEiBPSPoh2XdPxMAg8LpBW
        status: active
        display_name: 王宝子
        merged_into_person_id: null
    - claim:
        id: c_K942xe2YVNsLLJbXGQRzMD
        subject_person_id: p_cZBud2fMcDR6rn4NqeNQf3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uD5gNrJFykDpvvhJEVBAse
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_NXHt48SU4jTYwhAithQbYa
          claim_id: c_K942xe2YVNsLLJbXGQRzMD
          source_id: s_wppNwAcNRHuUX9Wdo6H1RQ
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_wppNwAcNRHuUX9Wdo6H1RQ
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王銓（175404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175404&o=json
            external_identifier: CBDB:175404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:57.211Z
            metadata_json: null
        - id: cs_sLo4P3nNbxJ75Y5Ty5W3Dv
          claim_id: c_K942xe2YVNsLLJbXGQRzMD
          source_id: s_gxC4334CKRU2fVv2oRotcA
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_gxC4334CKRU2fVv2oRotcA
            source_type: api_record
            title: 维基数据：王铨（Q45657634）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657634
            external_identifier: Q45657634
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:57.050Z
            metadata_json: null
        - id: cs_pdZddVz8FMB3mQrQPwL6SD
          claim_id: c_K942xe2YVNsLLJbXGQRzMD
          source_id: s_DxAT5b4ztvnb2qMT2ywcMm
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_DxAT5b4ztvnb2qMT2ywcMm
            source_type: api_record
            title: 维基数据：王马老（Q45657750）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657750
            external_identifier: Q45657750
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:03.117Z
            metadata_json: null
        - id: cs_EoyoU8oJUsr8c92FE9KfZt
          claim_id: c_K942xe2YVNsLLJbXGQRzMD
          source_id: s_J3r1moq2qQNTquvsNvdFar
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_J3r1moq2qQNTquvsNvdFar
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王馬老（175406）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175406&o=json
            external_identifier: CBDB:175406
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:03.401Z
            metadata_json: null
      object_person:
        id: p_uD5gNrJFykDpvvhJEVBAse
        status: active
        display_name: 王马老
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王铨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王铨（卒于857年），唐人物。籍贯臨沂。（中国历代人物传记资料库 CBDB 175404） | accepted |
| death.date | 857年 | accepted |
| name.primary | 王铨 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HQnmd4RJFt5d8vk8o8quqE | 王海 | accepted |
| children | p_KEiBPSPoh2XdPxMAg8LpBW | 王宝子 | accepted |
| children | p_uD5gNrJFykDpvvhJEVBAse | 王马老 | accepted |

## 外部来源

- [维基数据：王宝子（Q45657693）](https://www.wikidata.org/wiki/Q45657693)
- [维基数据：王海（Q45657452）](https://www.wikidata.org/wiki/Q45657452)
- [维基数据：王马老（Q45657750）](https://www.wikidata.org/wiki/Q45657750)
- [维基数据：王铨（Q45657634）](https://www.wikidata.org/wiki/Q45657634)
- [CBDB 中国历代人物传记资料库：王寶子（175405）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175405&o=json)
- [CBDB 中国历代人物传记资料库：王海（175401）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175401&o=json)
- [CBDB 中国历代人物传记资料库：王馬老（175406）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175406&o=json)
- [CBDB 中国历代人物传记资料库：王銓（175404）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175404&o=json)
