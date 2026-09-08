---
schema: wang-person/v1
id: p_J3uEtABU9yZpLVpDBsGAq3
status: active
merged_into: null
display_name: 王迈
cbdb_id: 175409
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G6zkEJbhoNjqLZpzhL468t
        subject_person_id: p_J3uEtABU9yZpLVpDBsGAq3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王迈（卒于857年），唐人物。CBDB 记录其籍贯记录为京兆府，曾任令。中国历代人物传记资料库（CBDB）以人物编号 175409 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_rHcHkp3yCk5jTQ1kDLDt1f
          claim_id: c_G6zkEJbhoNjqLZpzhL468t
          source_id: s_RD4sw4bpaLA5KUZpiyg3Qg
          stance: supports
          locator: null
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
        - id: cs_053SJudtMHqUFrLXvJG1-m
          claim_id: c_G6zkEJbhoNjqLZpzhL468t
          source_id: s_1VmAjatw3vy2Jv48pJ6tUR
          stance: supports
          locator: CBDB:175409
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_wJbJ1VnrLnc4BnuS2dUM1Z
        subject_person_id: p_J3uEtABU9yZpLVpDBsGAq3
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
        - id: cs_S6QSWBAb5hprnEbPd6qieF
          claim_id: c_wJbJ1VnrLnc4BnuS2dUM1Z
          source_id: s_RD4sw4bpaLA5KUZpiyg3Qg
          stance: supports
          locator: null
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
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wtedmRoYgwPANo8HFPMymG
        subject_person_id: p_J3uEtABU9yZpLVpDBsGAq3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王迈
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CuUUhWZ5MepMcknYPAiXXi
          claim_id: c_wtedmRoYgwPANo8HFPMymG
          source_id: s_RD4sw4bpaLA5KUZpiyg3Qg
          stance: supports
          locator: Q45657929
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
        - id: cs_JpGPZiMoTqm38B8GDJsBpc
          claim_id: c_wtedmRoYgwPANo8HFPMymG
          source_id: s_1VmAjatw3vy2Jv48pJ6tUR
          stance: supports
          locator: Q45657929
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JjtFokt2CvNpCqowBy1jRw
        subject_person_id: p_zkLScucBk4JK57QATK1P5y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_J3uEtABU9yZpLVpDBsGAq3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9XJMTMFxGJHD6pxDAtEiZs
          claim_id: c_JjtFokt2CvNpCqowBy1jRw
          source_id: s_fmTBFRP6UZ4fK1GZjEfVZU
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_fmTBFRP6UZ4fK1GZjEfVZU
            source_type: api_record
            title: 维基数据：王添（Q45657810）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45657810
            external_identifier: Q45657810
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:14:24.425Z
            metadata_json: null
        - id: cs_je1Uof5iPn3w1QDhZScsSc
          claim_id: c_JjtFokt2CvNpCqowBy1jRw
          source_id: s_z74bZ49AQL7hc4CKyB5mGw
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_z74bZ49AQL7hc4CKyB5mGw
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王添（175407）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175407&o=json
            external_identifier: CBDB:175407
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:14:24.586Z
            metadata_json: null
        - id: cs_rAkRNw4tKC6HL7N1REdFMB
          claim_id: c_JjtFokt2CvNpCqowBy1jRw
          source_id: s_RD4sw4bpaLA5KUZpiyg3Qg
          stance: supports
          locator: P22（父）
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
        - id: cs_h29BJAyajJgC51KcT5ymuN
          claim_id: c_JjtFokt2CvNpCqowBy1jRw
          source_id: s_1VmAjatw3vy2Jv48pJ6tUR
          stance: supports
          locator: 亲属关系：父
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
      object_person:
        id: p_zkLScucBk4JK57QATK1P5y
        status: active
        display_name: 王添
        merged_into_person_id: null
  children:
    - claim:
        id: c_1DQCjB5D9idKnxG2v2MPEG
        subject_person_id: p_J3uEtABU9yZpLVpDBsGAq3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EfKCuLgqrSjtEomjPoc4j2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_FNYDZLQBXMisBUigaFmFwZ
          claim_id: c_1DQCjB5D9idKnxG2v2MPEG
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
        - id: cs_Fird7PaAJngHCwPdZbHRbL
          claim_id: c_1DQCjB5D9idKnxG2v2MPEG
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
        - id: cs_Tkw2e8Xw6t1CM4mEjaE9fY
          claim_id: c_1DQCjB5D9idKnxG2v2MPEG
          source_id: s_RiHeTEyTNCmKY6xwnMqwrP
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_RiHeTEyTNCmKY6xwnMqwrP
            source_type: api_record
            title: 维基数据：王知蕴（Q45450093）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45450093
            external_identifier: Q45450093
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:03.115Z
            metadata_json: null
        - id: cs_nLPAy99fuLBYormFRd9Ltu
          claim_id: c_1DQCjB5D9idKnxG2v2MPEG
          source_id: s_icShKtqHWZEY2X5u6JmSre
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_icShKtqHWZEY2X5u6JmSre
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王知蘊（145209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145209&o=json
            external_identifier: CBDB:145209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:03.266Z
            metadata_json: null
      object_person:
        id: p_EfKCuLgqrSjtEomjPoc4j2
        status: active
        display_name: 王知蕴
        merged_into_person_id: null
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
        id: p_jsMbG8KGCyPS5RDHGFBQf6
        status: active
        display_name: 王知鲁
        merged_into_person_id: null
    - claim:
        id: c_oihiim4UH3FCUKgQTg5LQR
        subject_person_id: p_J3uEtABU9yZpLVpDBsGAq3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sowZJGgJvCcJoNqEDtQzLf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_YYHXjHgeQWL4sLyiS5njeZ
          claim_id: c_oihiim4UH3FCUKgQTg5LQR
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
        - id: cs_oXtA8ircHqFCxjhBTHEQD2
          claim_id: c_oihiim4UH3FCUKgQTg5LQR
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
        - id: cs_8XUKFZnmSUhji2LpHfs1bB
          claim_id: c_oihiim4UH3FCUKgQTg5LQR
          source_id: s_t3Gv1RgFhGT6jEEohkQ8Zj
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_t3Gv1RgFhGT6jEEohkQ8Zj
            source_type: api_record
            title: 维基数据：王知进（Q45658527）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658527
            external_identifier: Q45658527
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:05.102Z
            metadata_json: null
        - id: cs_zEbU6QiVgekBAd8hHEuKyS
          claim_id: c_oihiim4UH3FCUKgQTg5LQR
          source_id: s_4aQUyyWAkgHiU5KgkqYafr
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_4aQUyyWAkgHiU5KgkqYafr
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王知進（175419）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175419&o=json
            external_identifier: CBDB:175419
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:05.284Z
            metadata_json: null
      object_person:
        id: p_sowZJGgJvCcJoNqEDtQzLf
        status: active
        display_name: 王知进
        merged_into_person_id: null
    - claim:
        id: c_YWurYqz2ZkbPcQLz9kCe9J
        subject_person_id: p_J3uEtABU9yZpLVpDBsGAq3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CE78ro1FFrTLnxrDXoohDR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_N5kC656dcwGN57rD9a4nsK
          claim_id: c_YWurYqz2ZkbPcQLz9kCe9J
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
        - id: cs_U1HXUnDDLsc6xUvJfzxdRq
          claim_id: c_YWurYqz2ZkbPcQLz9kCe9J
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
        - id: cs_1G7MTR2cLg3Sxm9RgAZ4qj
          claim_id: c_YWurYqz2ZkbPcQLz9kCe9J
          source_id: s_68tYFjEBBzPBoP61Hr9vNm
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_68tYFjEBBzPBoP61Hr9vNm
            source_type: api_record
            title: 维基数据：王知绶（Q45658587）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45658587
            external_identifier: Q45658587
            license_code: CC0-1.0
            accessed_at: 2026-08-24T04:41:05.102Z
            metadata_json: null
        - id: cs_JLCFKYJNDn1KFXAUF1NQTf
          claim_id: c_YWurYqz2ZkbPcQLz9kCe9J
          source_id: s_2X8PKhjiqT5CeVPokie9gA
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source:
            id: s_2X8PKhjiqT5CeVPokie9gA
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王知綬（175420）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175420&o=json
            external_identifier: CBDB:175420
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T04:41:05.276Z
            metadata_json: null
      object_person:
        id: p_CE78ro1FFrTLnxrDXoohDR
        status: active
        display_name: 王知绶
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王迈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王迈（卒于857年），唐人物。CBDB 记录其籍贯记录为京兆府，曾任令。中国历代人物传记资料库（CBDB）以人物编号 175409 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 857年 | accepted |
| name.primary | 王迈 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zkLScucBk4JK57QATK1P5y | 王添 | accepted |
| children | p_EfKCuLgqrSjtEomjPoc4j2 | 王知蕴 | accepted |
| children | p_jsMbG8KGCyPS5RDHGFBQf6 | 王知鲁 | accepted |
| children | p_sowZJGgJvCcJoNqEDtQzLf | 王知进 | accepted |
| children | p_CE78ro1FFrTLnxrDXoohDR | 王知绶 | accepted |

## 外部来源

- [维基数据：王迈（Q45657929）](https://www.wikidata.org/wiki/Q45657929)
- [维基数据：王添（Q45657810）](https://www.wikidata.org/wiki/Q45657810)
- [维基数据：王知进（Q45658527）](https://www.wikidata.org/wiki/Q45658527)
- [维基数据：王知鲁（Q45657987）](https://www.wikidata.org/wiki/Q45657987)
- [维基数据：王知绶（Q45658587）](https://www.wikidata.org/wiki/Q45658587)
- [维基数据：王知蕴（Q45450093）](https://www.wikidata.org/wiki/Q45450093)
- [CBDB 中国历代人物传记资料库：王邁（175409）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175409&o=json)
- [CBDB 中国历代人物传记资料库：王添（175407）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175407&o=json)
- [CBDB 中国历代人物传记资料库：王知進（175419）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175419&o=json)
- [CBDB 中国历代人物传记资料库：王知魯（175410）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175410&o=json)
- [CBDB 中国历代人物传记资料库：王知綬（175420）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175420&o=json)
- [CBDB 中国历代人物传记资料库：王知蘊（145209）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145209&o=json)
