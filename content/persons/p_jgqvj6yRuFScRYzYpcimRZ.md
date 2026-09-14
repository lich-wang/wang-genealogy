---
schema: wang-person/v1
id: p_jgqvj6yRuFScRYzYpcimRZ
status: active
merged_into: null
display_name: 王士彦
cbdb_id: 307065
revision: 11
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bzPPNZ8nTtrF9bEAKxGqoT
        subject_person_id: p_jgqvj6yRuFScRYzYpcimRZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士彦，明人物。嘉靖二十三年進士，籍贯沂州，入仕監生。（中国历代人物传记资料库 CBDB 307065）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_FeXam6WsPSQcfjAs46Qw8e
          claim_id: c_bzPPNZ8nTtrF9bEAKxGqoT
          source_id: s_xEMP31KRHmMMLJ345jKtsY
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_xEMP31KRHmMMLJ345jKtsY
            source_type: api_record
            title: 维基数据：王士彦（Q45573102）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45573102
            external_identifier: Q45573102
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:52.069Z
            metadata_json: null
        - id: cs__tgXg-8d2oJAsXYb48KpDJ
          claim_id: c_bzPPNZ8nTtrF9bEAKxGqoT
          source_id: s_mSwGzHWH1XVALasnCo5Qnh
          stance: supports
          locator: CBDB:307065
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_mSwGzHWH1XVALasnCo5Qnh
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王士彥（307065）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307065&o=json
            external_identifier: CBDB:307065
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:52.235Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HRQNeWThiKPhTyrSM7QPJR
        subject_person_id: p_jgqvj6yRuFScRYzYpcimRZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王士彦
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_SbSVEENU8pJggz7ChKFw9a
          claim_id: c_HRQNeWThiKPhTyrSM7QPJR
          source_id: s_mSwGzHWH1XVALasnCo5Qnh
          stance: supports
          locator: Q45573102
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_a7eGD43GJYeeYMgcxY6Atg
          claim_id: c_HRQNeWThiKPhTyrSM7QPJR
          source_id: s_xEMP31KRHmMMLJ345jKtsY
          stance: supports
          locator: Q45573102
          quotation: null
          interpretation_note: null
          source:
            id: s_xEMP31KRHmMMLJ345jKtsY
            source_type: api_record
            title: 维基数据：王士彦（Q45573102）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45573102
            external_identifier: Q45573102
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:52.069Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_e9BNNCRp6Rvt364R628KSP
        subject_person_id: p_7koQzcggkeDLYupbQwieGE
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_jgqvj6yRuFScRYzYpcimRZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LM7DkGNhzFQ9R2Tb2vztpE
          claim_id: c_e9BNNCRp6Rvt364R628KSP
          source_id: s_xsPTYDtJ99pFyKQsn3EBUa
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_xsPTYDtJ99pFyKQsn3EBUa
            source_type: api_record
            title: 维基数据：王璟（Q15929306）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15929306
            external_identifier: Q15929306
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:47:35.752Z
            metadata_json: null
        - id: cs_eYx2U1WFbobnbGGUpw5xx6
          claim_id: c_e9BNNCRp6Rvt364R628KSP
          source_id: s_xEMP31KRHmMMLJ345jKtsY
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_xEMP31KRHmMMLJ345jKtsY
            source_type: api_record
            title: 维基数据：王士彦（Q45573102）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45573102
            external_identifier: Q45573102
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:52.069Z
            metadata_json: null
      object_person:
        id: p_7koQzcggkeDLYupbQwieGE
        status: active
        display_name: 王璟
        merged_into_person_id: null
  children:
    - claim:
        id: c_9HQwkGS6MbcyzRmLo8Hcmc
        subject_person_id: p_jgqvj6yRuFScRYzYpcimRZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ABHWjEscFjoCVEgF2qr4dX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VX8eVdiTmFRpVjT6iBMQw8
          claim_id: c_9HQwkGS6MbcyzRmLo8Hcmc
          source_id: s_xEMP31KRHmMMLJ345jKtsY
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_xEMP31KRHmMMLJ345jKtsY
            source_type: api_record
            title: 维基数据：王士彦（Q45573102）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45573102
            external_identifier: Q45573102
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:52.069Z
            metadata_json: null
        - id: cs_yuwJ9AdZyXv4txPkHsQkxc
          claim_id: c_9HQwkGS6MbcyzRmLo8Hcmc
          source_id: s_fhNQgV3E9dkVpKA3u7TQhA
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_fhNQgV3E9dkVpKA3u7TQhA
            source_type: api_record
            title: 维基数据：王宗性（Q45458696）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45458696
            external_identifier: Q45458696
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:54.113Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%97%E6%80%A7
        - id: cs_nRf6EqFxjfUj1gqGP5dAPh
          claim_id: c_9HQwkGS6MbcyzRmLo8Hcmc
          source_id: s_mSwGzHWH1XVALasnCo5Qnh
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：嘉靖二十三年登科錄:一卷
          source: *a1
      object_person:
        id: p_ABHWjEscFjoCVEgF2qr4dX
        status: active
        display_name: 王宗性
        merged_into_person_id: null
    - claim:
        id: c_KnoWqiYBxQY5kqS3XcUDCT
        subject_person_id: p_jgqvj6yRuFScRYzYpcimRZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AeKpdPnFuoSy8UsZKjutz3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EplNyGxq2t95NSxNjZlPDM
          claim_id: c_KnoWqiYBxQY5kqS3XcUDCT
          source_id: s_YEXFIdbZNe5K6hw4qjyVM6
          stance: supports
          locator: CBDB：兄弟 王宗性（203595）之父／母 王士彦
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗文 与 王宗性 为同胞（CBDB 记「弟」），王宗性 之父／母即 王宗文 之父／母。
          source:
            id: s_YEXFIdbZNe5K6hw4qjyVM6
            source_type: api_record
            title: 中国历代人物传记资料库：王宗文（CBDB 307075）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307075&o=json
            external_identifier: CBDB:307075
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AeKpdPnFuoSy8UsZKjutz3
        status: active
        display_name: 王宗文
        merged_into_person_id: null
    - claim:
        id: c_IjF5kMOvdJYGWM21wvaIN4
        subject_person_id: p_jgqvj6yRuFScRYzYpcimRZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ES6fVGAmVRKDWKSC3sDkPc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uZjH6KsUCLNxcHN1B375m6
          claim_id: c_IjF5kMOvdJYGWM21wvaIN4
          source_id: s_aARlbiNBq2--W3bx2PoXgd
          stance: supports
          locator: CBDB：兄弟 王宗性（203595）之父／母 王士彦
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗武 与 王宗性 为同胞（CBDB 记「弟」），王宗性 之父／母即 王宗武 之父／母。
          source:
            id: s_aARlbiNBq2--W3bx2PoXgd
            source_type: api_record
            title: 中国历代人物传记资料库：王宗武（CBDB 307076）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307076&o=json
            external_identifier: CBDB:307076
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ES6fVGAmVRKDWKSC3sDkPc
        status: active
        display_name: 王宗武
        merged_into_person_id: null
    - claim:
        id: c_Xvn_fRd2_TpltyxvK6N0qX
        subject_person_id: p_jgqvj6yRuFScRYzYpcimRZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dBR4fU4nmeNQaLtEzVEPhK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ym9Sme9ePQjji4zoASPiZ8
          claim_id: c_Xvn_fRd2_TpltyxvK6N0qX
          source_id: s_JOO6tyT5ySWNJxT54AdB7A
          stance: supports
          locator: CBDB：兄弟 王宗性（203595）之父／母 王士彦
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗續 与 王宗性 为同胞（CBDB 记「弟」），王宗性 之父／母即 王宗續 之父／母。
          source:
            id: s_JOO6tyT5ySWNJxT54AdB7A
            source_type: api_record
            title: 中国历代人物传记资料库：王宗續（CBDB 307072）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307072&o=json
            external_identifier: CBDB:307072
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dBR4fU4nmeNQaLtEzVEPhK
        status: active
        display_name: 王宗續
        merged_into_person_id: null
    - claim:
        id: c_kPLKwvisPMpSyhCtYsOpiM
        subject_person_id: p_jgqvj6yRuFScRYzYpcimRZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eu4LQ2FyTMckH3c72FdZfs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AoIhlMIGOVbr9BTraP6vNP
          claim_id: c_kPLKwvisPMpSyhCtYsOpiM
          source_id: s_ZNR_SaVybvbR1Za0P7pANF
          stance: supports
          locator: CBDB：兄弟 王宗性（203595）之父／母 王士彦
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗哲 与 王宗性 为同胞（CBDB 记「弟」），王宗性 之父／母即 王宗哲 之父／母。
          source:
            id: s_ZNR_SaVybvbR1Za0P7pANF
            source_type: api_record
            title: 中国历代人物传记资料库：王宗哲（CBDB 307070）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307070&o=json
            external_identifier: CBDB:307070
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eu4LQ2FyTMckH3c72FdZfs
        status: active
        display_name: 王宗哲
        merged_into_person_id: null
    - claim:
        id: c_1htE8m1xFBZKkPzHCLFWdZ
        subject_person_id: p_jgqvj6yRuFScRYzYpcimRZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_io3ooxGXfNCYSF3m4cM433
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Uf50qtW0uaMCgycc-A7QP6
          claim_id: c_1htE8m1xFBZKkPzHCLFWdZ
          source_id: s_B0NhW6OcYw5EXT5nXPoWfS
          stance: supports
          locator: CBDB：兄弟 王宗性（203595）之父／母 王士彦
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗敏 与 王宗性 为同胞（CBDB 记「兄」），王宗性 之父／母即 王宗敏 之父／母。
          source:
            id: s_B0NhW6OcYw5EXT5nXPoWfS
            source_type: api_record
            title: 中国历代人物传记资料库：王宗敏（CBDB 307077）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307077&o=json
            external_identifier: CBDB:307077
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_io3ooxGXfNCYSF3m4cM433
        status: active
        display_name: 王宗敏
        merged_into_person_id: null
    - claim:
        id: c_CqZZunczCNLwC8nY9sYprT
        subject_person_id: p_jgqvj6yRuFScRYzYpcimRZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uApmmCrBKzFCgC6NP1hpUK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KRiIsh0NWy3MOFT7OpV0ER
          claim_id: c_CqZZunczCNLwC8nY9sYprT
          source_id: s_AetCoPryidawCCG1nS7so5
          stance: supports
          locator: CBDB：兄弟 王宗性（203595）之父／母 王士彦
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗明 与 王宗性 为同胞（CBDB 记「弟」），王宗性 之父／母即 王宗明 之父／母。
          source:
            id: s_AetCoPryidawCCG1nS7so5
            source_type: api_record
            title: 中国历代人物传记资料库：王宗明（CBDB 307071）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307071&o=json
            external_identifier: CBDB:307071
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uApmmCrBKzFCgC6NP1hpUK
        status: active
        display_name: 王宗明
        merged_into_person_id: null
    - claim:
        id: c_w4ak6bD6OGZHqqP0xvpMw2
        subject_person_id: p_jgqvj6yRuFScRYzYpcimRZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_w7a8orkaJTtdBTUs96EHNn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ctmG7X8jWB2ptJXhReSnoS
          claim_id: c_w4ak6bD6OGZHqqP0xvpMw2
          source_id: s_qQh1JO8fu6KCYaJ5lQxDEL
          stance: supports
          locator: CBDB：兄弟 王宗性（203595）之父／母 王士彦
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗賢 与 王宗性 为同胞（CBDB 记「弟」），王宗性 之父／母即 王宗賢 之父／母。
          source:
            id: s_qQh1JO8fu6KCYaJ5lQxDEL
            source_type: api_record
            title: 中国历代人物传记资料库：王宗賢（CBDB 307069）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307069&o=json
            external_identifier: CBDB:307069
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_w7a8orkaJTtdBTUs96EHNn
        status: active
        display_name: 王宗賢
        merged_into_person_id: null
    - claim:
        id: c_6CIN_-Z43eq9J-WBZXAMKt
        subject_person_id: p_jgqvj6yRuFScRYzYpcimRZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wc85vRPUK4BvKLCcBWYcH7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QrQlLHWBVvSvc3pYxD-mkf
          claim_id: c_6CIN_-Z43eq9J-WBZXAMKt
          source_id: s_f--_21QikDbboERE5vEkVr
          stance: supports
          locator: CBDB：兄弟 王宗性（203595）之父／母 王士彦
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗業 与 王宗性 为同胞（CBDB 记「弟」），王宗性 之父／母即 王宗業 之父／母。
          source:
            id: s_f--_21QikDbboERE5vEkVr
            source_type: api_record
            title: 中国历代人物传记资料库：王宗業（CBDB 307074）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307074&o=json
            external_identifier: CBDB:307074
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wc85vRPUK4BvKLCcBWYcH7
        status: active
        display_name: 王宗業
        merged_into_person_id: null
    - claim:
        id: c_-Dt85aLE1zwdJj4JSF8J07
        subject_person_id: p_jgqvj6yRuFScRYzYpcimRZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ys6k4xNoKNWa4MPjaTMMPu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GRqjuKeHrE4v_IZvJVrLVP
          claim_id: c_-Dt85aLE1zwdJj4JSF8J07
          source_id: s_H0G1ql3-1JC1cZb84fzxe6
          stance: supports
          locator: CBDB：兄弟 王宗性（203595）之父／母 王士彦
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗遜 与 王宗性 为同胞（CBDB 记「兄」），王宗性 之父／母即 王宗遜 之父／母。
          source:
            id: s_H0G1ql3-1JC1cZb84fzxe6
            source_type: api_record
            title: 中国历代人物传记资料库：王宗遜（CBDB 307078）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307078&o=json
            external_identifier: CBDB:307078
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ys6k4xNoKNWa4MPjaTMMPu
        status: active
        display_name: 王宗遜
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王士彦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王士彦，明人物。嘉靖二十三年進士，籍贯沂州，入仕監生。（中国历代人物传记资料库 CBDB 307065） | accepted |
| name.primary | 王士彦 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7koQzcggkeDLYupbQwieGE | 王璟 | accepted |
| children | p_ABHWjEscFjoCVEgF2qr4dX | 王宗性 | accepted |
| children | p_AeKpdPnFuoSy8UsZKjutz3 | 王宗文 | accepted |
| children | p_ES6fVGAmVRKDWKSC3sDkPc | 王宗武 | accepted |
| children | p_dBR4fU4nmeNQaLtEzVEPhK | 王宗續 | accepted |
| children | p_eu4LQ2FyTMckH3c72FdZfs | 王宗哲 | accepted |
| children | p_io3ooxGXfNCYSF3m4cM433 | 王宗敏 | accepted |
| children | p_uApmmCrBKzFCgC6NP1hpUK | 王宗明 | accepted |
| children | p_w7a8orkaJTtdBTUs96EHNn | 王宗賢 | accepted |
| children | p_wc85vRPUK4BvKLCcBWYcH7 | 王宗業 | accepted |
| children | p_ys6k4xNoKNWa4MPjaTMMPu | 王宗遜 | accepted |

## 外部来源

- [维基数据：王璟（Q15929306）](https://www.wikidata.org/wiki/Q15929306)
- [维基数据：王士彦（Q45573102）](https://www.wikidata.org/wiki/Q45573102)
- [维基数据：王宗性（Q45458696）](https://www.wikidata.org/wiki/Q45458696)
- [中国历代人物传记资料库：王宗敏（CBDB 307077）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307077&o=json)
- [中国历代人物传记资料库：王宗明（CBDB 307071）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307071&o=json)
- [中国历代人物传记资料库：王宗文（CBDB 307075）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307075&o=json)
- [中国历代人物传记资料库：王宗武（CBDB 307076）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307076&o=json)
- [中国历代人物传记资料库：王宗賢（CBDB 307069）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307069&o=json)
- [中国历代人物传记资料库：王宗續（CBDB 307072）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307072&o=json)
- [中国历代人物传记资料库：王宗遜（CBDB 307078）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307078&o=json)
- [中国历代人物传记资料库：王宗業（CBDB 307074）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307074&o=json)
- [中国历代人物传记资料库：王宗哲（CBDB 307070）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307070&o=json)
- [CBDB 中国历代人物传记资料库：王士彥（307065）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307065&o=json)
