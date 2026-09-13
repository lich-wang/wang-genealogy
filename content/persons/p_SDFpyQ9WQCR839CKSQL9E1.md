---
schema: wang-person/v1
id: p_SDFpyQ9WQCR839CKSQL9E1
status: active
merged_into: null
display_name: 王鲁卿
cbdb_id: 175492
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5N59WJEf7zNGH7hriePj94
        subject_person_id: p_SDFpyQ9WQCR839CKSQL9E1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鲁卿（卒于820年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175492）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_2V2CaVCtMaNj1TXNaGwNvQ
          claim_id: c_5N59WJEf7zNGH7hriePj94
          source_id: s_xzHUN5MYJEcaQpwBnKkrAA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_xzHUN5MYJEcaQpwBnKkrAA
            source_type: api_record
            title: 维基数据：王鲁卿（Q45662864）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662864
            external_identifier: Q45662864
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:31.447Z
            metadata_json: null
        - id: cs_nEfCMaxCE1jjPLf0_KClrz
          claim_id: c_5N59WJEf7zNGH7hriePj94
          source_id: s_CC8cxfJwpULd6yy84PKXh5
          stance: supports
          locator: CBDB:175492
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_CC8cxfJwpULd6yy84PKXh5
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王魯卿（175492）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175492&o=json
            external_identifier: CBDB:175492
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:31.602Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_U99Pa4Z4DGUQBxQwVQ6X4v
        subject_person_id: p_SDFpyQ9WQCR839CKSQL9E1
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 820年
            calendar_note: 维基数据 P570 结构化日期，精度：年
            earliest: 0820-01-01
            latest: 0820-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vexNqHPWMfRz25nR75pRo8
          claim_id: c_U99Pa4Z4DGUQBxQwVQ6X4v
          source_id: s_xzHUN5MYJEcaQpwBnKkrAA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_xzHUN5MYJEcaQpwBnKkrAA
            source_type: api_record
            title: 维基数据：王鲁卿（Q45662864）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662864
            external_identifier: Q45662864
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:31.447Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tUer1Qoex6EJBPNcz7gK65
        subject_person_id: p_SDFpyQ9WQCR839CKSQL9E1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鲁卿
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_987N1PjuNB66CaWR8FmavK
          claim_id: c_tUer1Qoex6EJBPNcz7gK65
          source_id: s_xzHUN5MYJEcaQpwBnKkrAA
          stance: supports
          locator: Q45662864
          quotation: null
          interpretation_note: null
          source:
            id: s_xzHUN5MYJEcaQpwBnKkrAA
            source_type: api_record
            title: 维基数据：王鲁卿（Q45662864）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662864
            external_identifier: Q45662864
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:31.447Z
            metadata_json: null
        - id: cs_B7f1bMthqEWXEXu18cqZnV
          claim_id: c_tUer1Qoex6EJBPNcz7gK65
          source_id: s_CC8cxfJwpULd6yy84PKXh5
          stance: supports
          locator: Q45662864
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HGoyumbqidGzHpRFhbq2B3
        subject_person_id: p_CiW5m44PgV5XK7vb3FfKfP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SDFpyQ9WQCR839CKSQL9E1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_EYW6gyj2Ujggu9uHBbXHKa
          claim_id: c_HGoyumbqidGzHpRFhbq2B3
          source_id: s_fjAtzfRPAEtivc4pm3aHLX
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_fjAtzfRPAEtivc4pm3aHLX
            source_type: api_record
            title: 维基数据：王沼（Q45662809）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662809
            external_identifier: Q45662809
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:10:57.666Z
            metadata_json: null
        - id: cs_WhcxxYq5UD1xPgoSeBJHGf
          claim_id: c_HGoyumbqidGzHpRFhbq2B3
          source_id: s_vcUXtN2UDj24T6bxsVkoSD
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_vcUXtN2UDj24T6bxsVkoSD
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王沼（175491）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175491&o=json
            external_identifier: CBDB:175491
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:10:57.839Z
            metadata_json: null
        - id: cs_7Wi6zwaRm1gJVv2wz2137o
          claim_id: c_HGoyumbqidGzHpRFhbq2B3
          source_id: s_xzHUN5MYJEcaQpwBnKkrAA
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_xzHUN5MYJEcaQpwBnKkrAA
            source_type: api_record
            title: 维基数据：王鲁卿（Q45662864）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662864
            external_identifier: Q45662864
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:31.447Z
            metadata_json: null
        - id: cs_XPeSFX5LogGNm9qx1p46Cd
          claim_id: c_HGoyumbqidGzHpRFhbq2B3
          source_id: s_CC8cxfJwpULd6yy84PKXh5
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_CC8cxfJwpULd6yy84PKXh5
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王魯卿（175492）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175492&o=json
            external_identifier: CBDB:175492
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:31.602Z
            metadata_json: null
      object_person:
        id: p_CiW5m44PgV5XK7vb3FfKfP
        status: active
        display_name: 王沼
        merged_into_person_id: null
  children:
    - claim:
        id: c_LdBHPcbHaEEv5gq8W6NR48
        subject_person_id: p_SDFpyQ9WQCR839CKSQL9E1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QAY72V499rZCf2Gb3ZMJcT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_wr347SY9ptjYcYK2K8TFkQ
          claim_id: c_LdBHPcbHaEEv5gq8W6NR48
          source_id: s_xzHUN5MYJEcaQpwBnKkrAA
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_xzHUN5MYJEcaQpwBnKkrAA
            source_type: api_record
            title: 维基数据：王鲁卿（Q45662864）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662864
            external_identifier: Q45662864
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:31.447Z
            metadata_json: null
        - id: cs_z1QzDJUax9fgL7VRNz75xd
          claim_id: c_LdBHPcbHaEEv5gq8W6NR48
          source_id: s_CC8cxfJwpULd6yy84PKXh5
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_CC8cxfJwpULd6yy84PKXh5
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王魯卿（175492）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175492&o=json
            external_identifier: CBDB:175492
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:31.602Z
            metadata_json: null
        - id: cs_sJzgYYtLDC536NFUQY4n4T
          claim_id: c_LdBHPcbHaEEv5gq8W6NR48
          source_id: s_ZQwR7dcT1HV4zDC7F3Fz6g
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_ZQwR7dcT1HV4zDC7F3Fz6g
            source_type: api_record
            title: 维基数据：王质（Q45662922）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662922
            external_identifier: Q45662922
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:48.184Z
            metadata_json: null
        - id: cs_aSxzQqoNyUDWyQgGWiAz8L
          claim_id: c_LdBHPcbHaEEv5gq8W6NR48
          source_id: s_Tmont75HXT8qcmf87vkv8D
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_Tmont75HXT8qcmf87vkv8D
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王質（175493）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175493&o=json
            external_identifier: CBDB:175493
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:48.494Z
            metadata_json: null
      object_person:
        id: p_QAY72V499rZCf2Gb3ZMJcT
        status: active
        display_name: 王质
        merged_into_person_id: null
    - claim:
        id: c_Wyk5MV1gvVyGrwPnPNZ81G
        subject_person_id: p_SDFpyQ9WQCR839CKSQL9E1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wenbgPvgWA9P5GDbaaKLFv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_4J1cJW8VsydC4eBPTGQ4xB
          claim_id: c_Wyk5MV1gvVyGrwPnPNZ81G
          source_id: s_CC8cxfJwpULd6yy84PKXh5
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_CC8cxfJwpULd6yy84PKXh5
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王魯卿（175492）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175492&o=json
            external_identifier: CBDB:175492
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:31.602Z
            metadata_json: null
        - id: cs_BtVBTDFVjurzt3ah7pEQ7N
          claim_id: c_Wyk5MV1gvVyGrwPnPNZ81G
          source_id: s_xzHUN5MYJEcaQpwBnKkrAA
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_xzHUN5MYJEcaQpwBnKkrAA
            source_type: api_record
            title: 维基数据：王鲁卿（Q45662864）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662864
            external_identifier: Q45662864
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:31.447Z
            metadata_json: null
        - id: cs_YyVkmHESfbxTJhWJ47PV9f
          claim_id: c_Wyk5MV1gvVyGrwPnPNZ81G
          source_id: s_7m6gaWcHcANQa6io1JZJMn
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_7m6gaWcHcANQa6io1JZJMn
            source_type: api_record
            title: 维基数据：王宝（Q45662981）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662981
            external_identifier: Q45662981
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:48.185Z
            metadata_json: null
        - id: cs_tFB4QbTNCh6medpmW8f3mH
          claim_id: c_Wyk5MV1gvVyGrwPnPNZ81G
          source_id: s_etxGh6V2efcVB8P3U1Vhjr
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_etxGh6V2efcVB8P3U1Vhjr
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王寶（175494）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175494&o=json
            external_identifier: CBDB:175494
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:48.474Z
            metadata_json: null
      object_person:
        id: p_wenbgPvgWA9P5GDbaaKLFv
        status: active
        display_name: 王宝
        merged_into_person_id: null
    - claim:
        id: c_RJJDKoazXsBkG54fXxrmE9
        subject_person_id: p_SDFpyQ9WQCR839CKSQL9E1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2krv5kfmUbBqxJoZ23CXLC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_3jS7p8AzBLgxexGFfXKWrm
          claim_id: c_RJJDKoazXsBkG54fXxrmE9
          source_id: s_CC8cxfJwpULd6yy84PKXh5
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_CC8cxfJwpULd6yy84PKXh5
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王魯卿（175492）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175492&o=json
            external_identifier: CBDB:175492
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:31.602Z
            metadata_json: null
        - id: cs_pT4oCe2oDYRoepdQww1H8m
          claim_id: c_RJJDKoazXsBkG54fXxrmE9
          source_id: s_xzHUN5MYJEcaQpwBnKkrAA
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_xzHUN5MYJEcaQpwBnKkrAA
            source_type: api_record
            title: 维基数据：王鲁卿（Q45662864）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662864
            external_identifier: Q45662864
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:31.447Z
            metadata_json: null
        - id: cs_HPEfh79nW3WE4sq5cG8eRF
          claim_id: c_RJJDKoazXsBkG54fXxrmE9
          source_id: s_oUrmVYDnUfASHEuDuSmnGc
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_oUrmVYDnUfASHEuDuSmnGc
            source_type: api_record
            title: 维基数据：王贺（Q45663038）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663038
            external_identifier: Q45663038
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:50.063Z
            metadata_json: null
        - id: cs_sr8h7CtiKCCEFzaZnrN1Y3
          claim_id: c_RJJDKoazXsBkG54fXxrmE9
          source_id: s_jeU7GnAwfv7rgTiwAReYnd
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_jeU7GnAwfv7rgTiwAReYnd
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王賀（175495）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175495&o=json
            external_identifier: CBDB:175495
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:50.219Z
            metadata_json: null
      object_person:
        id: p_2krv5kfmUbBqxJoZ23CXLC
        status: active
        display_name: 王贺
        merged_into_person_id: null
    - claim:
        id: c_AvWbiuqx3rwqTEusj39D5B
        subject_person_id: p_SDFpyQ9WQCR839CKSQL9E1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GcPWHTZVMwwJPG6p2NJVgy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_ScAr17es8Kc8HqS2aY9Aj5
          claim_id: c_AvWbiuqx3rwqTEusj39D5B
          source_id: s_CC8cxfJwpULd6yy84PKXh5
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_CC8cxfJwpULd6yy84PKXh5
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王魯卿（175492）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175492&o=json
            external_identifier: CBDB:175492
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:31.602Z
            metadata_json: null
        - id: cs_tqYPknqJnCdbPLCzHQTKEb
          claim_id: c_AvWbiuqx3rwqTEusj39D5B
          source_id: s_xzHUN5MYJEcaQpwBnKkrAA
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_xzHUN5MYJEcaQpwBnKkrAA
            source_type: api_record
            title: 维基数据：王鲁卿（Q45662864）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662864
            external_identifier: Q45662864
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:31.447Z
            metadata_json: null
        - id: cs_tfmF9jxEjJD3L8VUveisob
          claim_id: c_AvWbiuqx3rwqTEusj39D5B
          source_id: s_CeGCxyGckf337sWReWKutS
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_CeGCxyGckf337sWReWKutS
            source_type: api_record
            title: 维基数据：王贽（Q45663095）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663095
            external_identifier: Q45663095
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:50.064Z
            metadata_json: null
        - id: cs_2tZmei3X33Zh965nKPiVwL
          claim_id: c_AvWbiuqx3rwqTEusj39D5B
          source_id: s_qEBkRAgYM9Wsmbr1wGFeb7
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_qEBkRAgYM9Wsmbr1wGFeb7
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王贄（175496）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175496&o=json
            external_identifier: CBDB:175496
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:50.222Z
            metadata_json: null
      object_person:
        id: p_GcPWHTZVMwwJPG6p2NJVgy
        status: active
        display_name: 王贽
        merged_into_person_id: null
    - claim:
        id: c_cMeMRykVchsEBkNRNpyK8h
        subject_person_id: p_SDFpyQ9WQCR839CKSQL9E1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yWDRw7oTPCC7FMqXqU4YFm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_SuQV3Azqf7VMkjEioAjZXd
          claim_id: c_cMeMRykVchsEBkNRNpyK8h
          source_id: s_xzHUN5MYJEcaQpwBnKkrAA
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_xzHUN5MYJEcaQpwBnKkrAA
            source_type: api_record
            title: 维基数据：王鲁卿（Q45662864）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45662864
            external_identifier: Q45662864
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:31.447Z
            metadata_json: null
        - id: cs_ThyhqPykzQggENXt3LaMaP
          claim_id: c_cMeMRykVchsEBkNRNpyK8h
          source_id: s_CC8cxfJwpULd6yy84PKXh5
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_CC8cxfJwpULd6yy84PKXh5
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王魯卿（175492）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175492&o=json
            external_identifier: CBDB:175492
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:31.602Z
            metadata_json: null
        - id: cs_kE4LmC77wNuKjCpQUtuoZL
          claim_id: c_cMeMRykVchsEBkNRNpyK8h
          source_id: s_VYDRif3qN9qAwo3tR4D1zZ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_VYDRif3qN9qAwo3tR4D1zZ
            source_type: api_record
            title: 维基数据：王贾（Q45663152）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45663152
            external_identifier: Q45663152
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:19:50.064Z
            metadata_json: null
        - id: cs_p4CkA65nS4Ns6z9PJJAupn
          claim_id: c_cMeMRykVchsEBkNRNpyK8h
          source_id: s_M8xV2wkVumdKDs1SctqRso
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_M8xV2wkVumdKDs1SctqRso
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王賈（175497）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175497&o=json
            external_identifier: CBDB:175497
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:19:50.223Z
            metadata_json: null
      object_person:
        id: p_yWDRw7oTPCC7FMqXqU4YFm
        status: active
        display_name: 王贾
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鲁卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鲁卿（卒于820年），唐人物。籍贯咸陽。（中国历代人物传记资料库 CBDB 175492） | accepted |
| death.date | 820年 | accepted |
| name.primary | 王鲁卿 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CiW5m44PgV5XK7vb3FfKfP | 王沼 | accepted |
| children | p_QAY72V499rZCf2Gb3ZMJcT | 王质 | accepted |
| children | p_wenbgPvgWA9P5GDbaaKLFv | 王宝 | accepted |
| children | p_2krv5kfmUbBqxJoZ23CXLC | 王贺 | accepted |
| children | p_GcPWHTZVMwwJPG6p2NJVgy | 王贽 | accepted |
| children | p_yWDRw7oTPCC7FMqXqU4YFm | 王贾 | accepted |

## 外部来源

- [维基数据：王宝（Q45662981）](https://www.wikidata.org/wiki/Q45662981)
- [维基数据：王贺（Q45663038）](https://www.wikidata.org/wiki/Q45663038)
- [维基数据：王贾（Q45663152）](https://www.wikidata.org/wiki/Q45663152)
- [维基数据：王鲁卿（Q45662864）](https://www.wikidata.org/wiki/Q45662864)
- [维基数据：王沼（Q45662809）](https://www.wikidata.org/wiki/Q45662809)
- [维基数据：王质（Q45662922）](https://www.wikidata.org/wiki/Q45662922)
- [维基数据：王贽（Q45663095）](https://www.wikidata.org/wiki/Q45663095)
- [CBDB 中国历代人物传记资料库：王寶（175494）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175494&o=json)
- [CBDB 中国历代人物传记资料库：王賀（175495）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175495&o=json)
- [CBDB 中国历代人物传记资料库：王賈（175497）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175497&o=json)
- [CBDB 中国历代人物传记资料库：王魯卿（175492）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175492&o=json)
- [CBDB 中国历代人物传记资料库：王沼（175491）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175491&o=json)
- [CBDB 中国历代人物传记资料库：王質（175493）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175493&o=json)
- [CBDB 中国历代人物传记资料库：王贄（175496）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175496&o=json)
