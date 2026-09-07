---
schema: wang-person/v1
id: p_txEz4hCDRU7QsamZGm536K
status: active
merged_into: null
display_name: 王宇
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zvpJNGNS47fLZFczg3fmXn
        subject_person_id: p_txEz4hCDRU7QsamZGm536K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宇（前1世纪—3年），史料所见人物。本项目依据《維基數據：王宇》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_owv5r5KiSz_y4av8b6NY3Q
          claim_id: c_zvpJNGNS47fLZFczg3fmXn
          source_id: s_kPy78YAH2rcamYu2JAoZan
          stance: supports
          locator: Q11573020
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_kPy78YAH2rcamYu2JAoZan
            source_type: api_record
            title: 維基數據：王宇（Q11573020）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573020
            external_identifier: Q11573020
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:39.617Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%87_(%E6%B1%89%E6%9C%9D)
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_tKiWj1WwejwZrxMPH6eLe9
        subject_person_id: p_txEz4hCDRU7QsamZGm536K
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 前1世纪
            calendar_note: 維基數據 P569 結構化日期，精度：世纪
            earliest: null
            latest: null
            precision: unknown
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yXPhVskCLgQt6WcJTTGrqn
          claim_id: c_tKiWj1WwejwZrxMPH6eLe9
          source_id: s_kPy78YAH2rcamYu2JAoZan
          stance: supports
          locator: Q11573020
          quotation: null
          interpretation_note: null
          source:
            id: s_kPy78YAH2rcamYu2JAoZan
            source_type: api_record
            title: 維基數據：王宇（Q11573020）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573020
            external_identifier: Q11573020
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:39.617Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%87_(%E6%B1%89%E6%9C%9D)
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Y5FMaDVKGYshs93mHbY5TZ
        subject_person_id: p_txEz4hCDRU7QsamZGm536K
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 3年
            calendar_note: 維基數據 P570 結構化日期，精度：年
            earliest: null
            latest: null
            precision: unknown
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Vhhrs5v3vEngLrPGryxNZe
          claim_id: c_Y5FMaDVKGYshs93mHbY5TZ
          source_id: s_kPy78YAH2rcamYu2JAoZan
          stance: supports
          locator: Q11573020
          quotation: null
          interpretation_note: null
          source:
            id: s_kPy78YAH2rcamYu2JAoZan
            source_type: api_record
            title: 維基數據：王宇（Q11573020）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573020
            external_identifier: Q11573020
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:39.617Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%87_(%E6%B1%89%E6%9C%9D)
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Rq6DQTTNxc5BVkMVHAeLU5
        subject_person_id: p_txEz4hCDRU7QsamZGm536K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宇
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_rKYbMVun2kcCSFjZ19T36M
          claim_id: c_Rq6DQTTNxc5BVkMVHAeLU5
          source_id: s_kPy78YAH2rcamYu2JAoZan
          stance: supports
          locator: Q11573020
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_v191FiadXbEfcTbT7rNUaj
        subject_person_id: p_ftTmaf71Kwzdeaet16S991
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_txEz4hCDRU7QsamZGm536K
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_8jVFRDg2kFcat7AnmdDEkG
          claim_id: c_v191FiadXbEfcTbT7rNUaj
          source_id: s_EGrTvgmWGEBNKAJcMtkpwp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_EGrTvgmWGEBNKAJcMtkpwp
            source_type: website
            title: 中文维基百科：王莽
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/王莽
            external_identifier: Q7250
            license_code: CC-BY-SA-4.0
            accessed_at: null
            metadata_json: null
        - id: cs_D9igY9pNKyE5Jr7tFs2V8E
          claim_id: c_v191FiadXbEfcTbT7rNUaj
          source_id: s_qaqNC35CuGhESSMxWoCLgu
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_qaqNC35CuGhESSMxWoCLgu
            source_type: api_record
            title: 維基數據：王莽（Q7250）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q7250
            external_identifier: Q7250
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:14:57.290Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%8E%BD
        - id: cs_5SygpQQA2vVDFn2rHEtowF
          claim_id: c_v191FiadXbEfcTbT7rNUaj
          source_id: s_kPy78YAH2rcamYu2JAoZan
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_kPy78YAH2rcamYu2JAoZan
            source_type: api_record
            title: 維基數據：王宇（Q11573020）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573020
            external_identifier: Q11573020
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:39.617Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%87_(%E6%B1%89%E6%9C%9D)
      object_person:
        id: p_ftTmaf71Kwzdeaet16S991
        status: active
        display_name: 王莽
        merged_into_person_id: null
  children:
    - claim:
        id: c_Ppwg1Jy3mj738L5QH8fMPv
        subject_person_id: p_txEz4hCDRU7QsamZGm536K
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eJggnSoGH5ETKvaEZqE886
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_UWMT4VMa7TyyxMpEF2FrS2
          claim_id: c_Ppwg1Jy3mj738L5QH8fMPv
          source_id: s_kPy78YAH2rcamYu2JAoZan
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_kPy78YAH2rcamYu2JAoZan
            source_type: api_record
            title: 維基數據：王宇（Q11573020）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573020
            external_identifier: Q11573020
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:39.617Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%87_(%E6%B1%89%E6%9C%9D)
        - id: cs_9K6vLvG9LHDXF1SMxRawBt
          claim_id: c_Ppwg1Jy3mj738L5QH8fMPv
          source_id: s_sB6fRvP2yPZssCrPLwDPDN
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_sB6fRvP2yPZssCrPLwDPDN
            source_type: api_record
            title: 维基数据：王宗（Q11573021）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573021
            external_identifier: Q11573021
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:48.534Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%97_(%E6%96%B0%E6%9C%9D)
      object_person:
        id: p_eJggnSoGH5ETKvaEZqE886
        status: active
        display_name: 王宗
        merged_into_person_id: null
    - claim:
        id: c_G8xx6FBSY6YPFwXugq2qgM
        subject_person_id: p_txEz4hCDRU7QsamZGm536K
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wmuWBHvwUVcaLhe1AcvAnx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_BLqaHSTF4LQ73qyDeDJ82T
          claim_id: c_G8xx6FBSY6YPFwXugq2qgM
          source_id: s_kPy78YAH2rcamYu2JAoZan
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_kPy78YAH2rcamYu2JAoZan
            source_type: api_record
            title: 維基數據：王宇（Q11573020）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573020
            external_identifier: Q11573020
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:39.617Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%87_(%E6%B1%89%E6%9C%9D)
        - id: cs_Q4tuiNd5FvJr84Us2EQeBn
          claim_id: c_G8xx6FBSY6YPFwXugq2qgM
          source_id: s_UJGg1CBwru6HxpZBEK9hYa
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_UJGg1CBwru6HxpZBEK9hYa
            source_type: api_record
            title: 维基数据：王夫人（Q16077428）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q16077428
            external_identifier: Q16077428
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:51.883Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A4%AB%E4%BA%BA_(%E5%AD%BA%E5%AD%90%E5%A9%B4)
        - id: cs_Pv91YNNfKq2Am5BDaZUuKb
          claim_id: c_G8xx6FBSY6YPFwXugq2qgM
          source_id: s_zBw16Dixh2ok6KGjUkNyhS
          stance: supports
          locator: 条文：之子/之女
          quotation: 王夫人（{{bd|?||?||}}），孺子婴之妻，王莽的孙女、王莽长子王宇的女儿
          interpretation_note: null
          source:
            id: s_zBw16Dixh2ok6KGjUkNyhS
            source_type: website
            title: 中文维基百科：王夫人 (孺子婴)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A4%AB%E4%BA%BA_(%E5%AD%BA%E5%AD%90%E5%A9%B4)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:38.052Z
            metadata_json: null
        - id: cs_zuV5QgGhMqP8yVy2n8aeoj
          claim_id: c_G8xx6FBSY6YPFwXugq2qgM
          source_id: s_m8fD4uoAxpMS3edAfhwGFr
          stance: supports
          locator: 条文：之子/之女
          quotation: 王夫人，孺子婴之妻，王莽的孙女、王莽长子王宇的女儿
          interpretation_note: null
          source:
            id: s_m8fD4uoAxpMS3edAfhwGFr
            source_type: website
            title: 中文维基百科：王夫人 (孺子婴)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A4%AB%E4%BA%BA_(%E5%AD%BA%E5%AD%90%E5%A9%B4)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:08.133Z
            metadata_json: null
      object_person:
        id: p_wmuWBHvwUVcaLhe1AcvAnx
        status: active
        display_name: 王夫人
        merged_into_person_id: null
    - claim:
        id: c_s6wvW3ypU4QqY6RWU8MKTo
        subject_person_id: p_txEz4hCDRU7QsamZGm536K
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pL3s1DMKzjWgm1BnKXHKFv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_GVLk6dBC4YaVjX5hXmSKqG
          claim_id: c_s6wvW3ypU4QqY6RWU8MKTo
          source_id: s_kPy78YAH2rcamYu2JAoZan
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_kPy78YAH2rcamYu2JAoZan
            source_type: api_record
            title: 維基數據：王宇（Q11573020）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573020
            external_identifier: Q11573020
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:39.617Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%87_(%E6%B1%89%E6%9C%9D)
        - id: cs_cQvXo3RyMVMfndVfqcGuDB
          claim_id: c_s6wvW3ypU4QqY6RWU8MKTo
          source_id: s_SuBcaB56aDJBPGE28PFehy
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_SuBcaB56aDJBPGE28PFehy
            source_type: api_record
            title: 维基数据：王千（Q26210093）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26210093
            external_identifier: Q26210093
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:57.186Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8D%83
        - id: cs_PWXdNJ37kaXfDmq7oFE6Lk
          claim_id: c_s6wvW3ypU4QqY6RWU8MKTo
          source_id: s_775vNwcdjUsLGP32Ceukib
          stance: supports
          locator: 条文：之子/之女
          quotation: 王千（{{bd|前1世紀||1世紀|}}），新朝宗室，西汉外戚，王莽的长孙，王宇长子
          interpretation_note: null
          source:
            id: s_775vNwcdjUsLGP32Ceukib
            source_type: website
            title: 中文维基百科：王千
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8D%83
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:39.157Z
            metadata_json: null
        - id: cs_woXDPt1fcWwQ4LH2M36H2G
          claim_id: c_s6wvW3ypU4QqY6RWU8MKTo
          source_id: s_AaKXTENVxgEwN4G494Ysf2
          stance: supports
          locator: 条文：之子/之女
          quotation: 王千，新朝宗室，西汉外戚，王莽的长孙，王宇长子
          interpretation_note: null
          source:
            id: s_AaKXTENVxgEwN4G494Ysf2
            source_type: website
            title: 中文维基百科：王千
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8D%83
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:03.107Z
            metadata_json: null
      object_person:
        id: p_pL3s1DMKzjWgm1BnKXHKFv
        status: active
        display_name: 王千
        merged_into_person_id: null
    - claim:
        id: c_MQA89nQid6JATmQ2JV1U1T
        subject_person_id: p_txEz4hCDRU7QsamZGm536K
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DT6iEeedcbCbJQMn2ra3u7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_diV9f4L1F2DjtPeSAJDSrq
          claim_id: c_MQA89nQid6JATmQ2JV1U1T
          source_id: s_kPy78YAH2rcamYu2JAoZan
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_kPy78YAH2rcamYu2JAoZan
            source_type: api_record
            title: 維基數據：王宇（Q11573020）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573020
            external_identifier: Q11573020
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:39.617Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%87_(%E6%B1%89%E6%9C%9D)
        - id: cs_UrWdNHcniXQmiQF1PaaToT
          claim_id: c_MQA89nQid6JATmQ2JV1U1T
          source_id: s_8v86f77ncWcEZtNKDNzq4T
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_8v86f77ncWcEZtNKDNzq4T
            source_type: api_record
            title: 维基数据：王寿（Q26210102）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26210102
            external_identifier: Q26210102
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:58.144Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%BF_(%E6%96%B0%E6%9C%9D)
        - id: cs_Ho28g1P21z2ZbejuKZHCJh
          claim_id: c_MQA89nQid6JATmQ2JV1U1T
          source_id: s_GXTVghKd8NZDV4PhLJhpyP
          stance: supports
          locator: 条文：之子/之女
          quotation: 王寿{{BD|？||21年||}}，新朝宗室，西汉外戚，王莽之孙，王宇次子
          interpretation_note: null
          source:
            id: s_GXTVghKd8NZDV4PhLJhpyP
            source_type: website
            title: 中文维基百科：王寿 (新朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%BF_(%E6%96%B0%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:40.007Z
            metadata_json: null
        - id: cs_qWWurCCmQYjc5GXwnYZBL2
          claim_id: c_MQA89nQid6JATmQ2JV1U1T
          source_id: s_j49AMEQp47PFYSrB79EPDk
          stance: supports
          locator: 条文：之子/之女
          quotation: 王寿，新朝宗室，西汉外戚，王莽之孙，王宇次子
          interpretation_note: null
          source:
            id: s_j49AMEQp47PFYSrB79EPDk
            source_type: website
            title: 中文维基百科：王寿 (新朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%BF_(%E6%96%B0%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:14.179Z
            metadata_json: null
      object_person:
        id: p_DT6iEeedcbCbJQMn2ra3u7
        status: active
        display_name: 王寿
        merged_into_person_id: null
    - claim:
        id: c_4MmNKfnMoPs117MTteg37Q
        subject_person_id: p_txEz4hCDRU7QsamZGm536K
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PPaivMYWC6cnuvp8NuuPAa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_jRrUXAq812muYh77SJGxTr
          claim_id: c_4MmNKfnMoPs117MTteg37Q
          source_id: s_kPy78YAH2rcamYu2JAoZan
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_kPy78YAH2rcamYu2JAoZan
            source_type: api_record
            title: 維基數據：王宇（Q11573020）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573020
            external_identifier: Q11573020
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:39.617Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%87_(%E6%B1%89%E6%9C%9D)
        - id: cs_HWqbfYGC74S2UwAMdWTLdB
          claim_id: c_4MmNKfnMoPs117MTteg37Q
          source_id: s_gEFXUqMQpzZAsb6ztrMY4E
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_gEFXUqMQpzZAsb6ztrMY4E
            source_type: api_record
            title: 维基数据：王妨（Q26210120）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q26210120
            external_identifier: Q26210120
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:58.777Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A6%A8
        - id: cs_GNCVf4wBsSQn1fL9toePxW
          claim_id: c_4MmNKfnMoPs117MTteg37Q
          source_id: s_h7RK38gr4CgCg9ZrtftcN8
          stance: supports
          locator: 条文：之子/之女
          quotation: 王妨（{{bd|？||18年|}}），新朝宗室，西汉外戚，王莽之孫女，王宇之女
          interpretation_note: null
          source:
            id: s_h7RK38gr4CgCg9ZrtftcN8
            source_type: website
            title: 中文维基百科：王妨
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A6%A8
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:40.742Z
            metadata_json: null
        - id: cs_1fvAA9uD34k4tb3r71Hj7b
          claim_id: c_4MmNKfnMoPs117MTteg37Q
          source_id: s_3TZArvp41gbWNhebv3uw9c
          stance: supports
          locator: 条文：之子/之女
          quotation: 王妨，新朝宗室，西汉外戚，王莽之孫女，王宇之女
          interpretation_note: null
          source:
            id: s_3TZArvp41gbWNhebv3uw9c
            source_type: website
            title: 中文维基百科：王妨
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A6%A8
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:11.041Z
            metadata_json: null
      object_person:
        id: p_PPaivMYWC6cnuvp8NuuPAa
        status: active
        display_name: 王妨
        merged_into_person_id: null
    - claim:
        id: c_EJhbPzuThMUFAm2fBvhPZQ
        subject_person_id: p_txEz4hCDRU7QsamZGm536K
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NboYfASuV6LcEzCa4KgV4k
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_PfmH5WJNQFQMer1KsaAhH7
          claim_id: c_EJhbPzuThMUFAm2fBvhPZQ
          source_id: s_kPy78YAH2rcamYu2JAoZan
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_kPy78YAH2rcamYu2JAoZan
            source_type: api_record
            title: 維基數據：王宇（Q11573020）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573020
            external_identifier: Q11573020
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:39.617Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%87_(%E6%B1%89%E6%9C%9D)
        - id: cs_KygNSPsCucPyKxWm9FYx5Z
          claim_id: c_EJhbPzuThMUFAm2fBvhPZQ
          source_id: s_zAK2thmaTXXS8TtjYYVmGq
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_zAK2thmaTXXS8TtjYYVmGq
            source_type: api_record
            title: 维基数据：王利（Q124476781）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q124476781
            external_identifier: Q124476781
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:50:09.922Z
            metadata_json: null
      object_person:
        id: p_NboYfASuV6LcEzCa4KgV4k
        status: active
        display_name: 王利
        merged_into_person_id: null
    - claim:
        id: c_J5i9k2qJjiNWCZcDwBpbMu
        subject_person_id: p_txEz4hCDRU7QsamZGm536K
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_7BBNW636PfzcwJta8vrVg1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wMfUFq66t98uPhf4eAU8n4
          claim_id: c_J5i9k2qJjiNWCZcDwBpbMu
          source_id: s_Wdk7jF7TeHXo83RGNUTSq8
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 始建国元年（公元9年），王莽建立新朝，封王宇子六人：王千为功隆公，王寿为功明公，王吉为功成公，王宗为功崇公，王世为功昭公，王利为功著公。
          interpretation_note: null
          source:
            id: s_Wdk7jF7TeHXo83RGNUTSq8
            source_type: website
            title: 中文维基百科：王宗 (新朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%97_(%E6%96%B0%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-05T01:14:54.860Z
            metadata_json: null
      object_person:
        id: p_7BBNW636PfzcwJta8vrVg1
        status: active
        display_name: 王吉
        merged_into_person_id: null
    - claim:
        id: c_ivTYfE1qGJENQPEiHXV5KE
        subject_person_id: p_txEz4hCDRU7QsamZGm536K
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_A8tWqKDU4Jkzi47icA6qv6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nVU1AGP8MsL2rf7oFuW2pX
          claim_id: c_ivTYfE1qGJENQPEiHXV5KE
          source_id: s_Wdk7jF7TeHXo83RGNUTSq8
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 始建国元年（公元9年），王莽建立新朝，封王宇子六人：王千为功隆公，王寿为功明公，王吉为功成公，王宗为功崇公，王世为功昭公，王利为功著公。
          interpretation_note: null
          source:
            id: s_Wdk7jF7TeHXo83RGNUTSq8
            source_type: website
            title: 中文维基百科：王宗 (新朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%97_(%E6%96%B0%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-05T01:14:54.860Z
            metadata_json: null
      object_person:
        id: p_A8tWqKDU4Jkzi47icA6qv6
        status: active
        display_name: 王世
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_qo4f2XPNG2dMMoamQMAY1D
        subject_person_id: p_MLQBfjAvoAARt7NYpxYioR
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_txEz4hCDRU7QsamZGm536K
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_24T3jjXM1XPeU52xW13nqs
          claim_id: c_qo4f2XPNG2dMMoamQMAY1D
          source_id: s_kPy78YAH2rcamYu2JAoZan
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_kPy78YAH2rcamYu2JAoZan
            source_type: api_record
            title: 維基數據：王宇（Q11573020）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573020
            external_identifier: Q11573020
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:10:39.617Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%87_(%E6%B1%89%E6%9C%9D)
        - id: cs_M5tQJFXYXxKAQ16sUg5PF4
          claim_id: c_qo4f2XPNG2dMMoamQMAY1D
          source_id: s_hyTEpqFTozdnTATN7bAQGn
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_hyTEpqFTozdnTATN7bAQGn
            source_type: api_record
            title: 维基数据：吕焉（Q122982263）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q122982263
            external_identifier: Q122982263
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:50:09.305Z
            metadata_json: null
      object_person:
        id: p_MLQBfjAvoAARt7NYpxYioR
        status: active
        display_name: 吕焉
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王宇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宇（前1世纪—3年），史料所见人物。本项目依据《維基數據：王宇》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 前1世纪 | accepted |
| death.date | 3年 | accepted |
| name.primary | 王宇 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ftTmaf71Kwzdeaet16S991 | 王莽 | accepted |
| children | p_eJggnSoGH5ETKvaEZqE886 | 王宗 | accepted |
| children | p_wmuWBHvwUVcaLhe1AcvAnx | 王夫人 | accepted |
| children | p_pL3s1DMKzjWgm1BnKXHKFv | 王千 | accepted |
| children | p_DT6iEeedcbCbJQMn2ra3u7 | 王寿 | accepted |
| children | p_PPaivMYWC6cnuvp8NuuPAa | 王妨 | accepted |
| children | p_NboYfASuV6LcEzCa4KgV4k | 王利 | accepted |
| children | p_7BBNW636PfzcwJta8vrVg1 | 王吉 | accepted |
| children | p_A8tWqKDU4Jkzi47icA6qv6 | 王世 | accepted |
| spouses | p_MLQBfjAvoAARt7NYpxYioR | 吕焉 | accepted |

## 外部来源

- [维基数据：吕焉（Q122982263）](https://www.wikidata.org/wiki/Q122982263)
- [维基数据：王妨（Q26210120）](https://www.wikidata.org/wiki/Q26210120)
- [维基数据：王夫人（Q16077428）](https://www.wikidata.org/wiki/Q16077428)
- [维基数据：王利（Q124476781）](https://www.wikidata.org/wiki/Q124476781)
- [维基数据：王千（Q26210093）](https://www.wikidata.org/wiki/Q26210093)
- [维基数据：王寿（Q26210102）](https://www.wikidata.org/wiki/Q26210102)
- [维基数据：王宗（Q11573021）](https://www.wikidata.org/wiki/Q11573021)
- [維基數據：王莽（Q7250）](https://www.wikidata.org/wiki/Q7250)
- [維基數據：王宇（Q11573020）](https://www.wikidata.org/wiki/Q11573020)
- [中文维基百科：王妨](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A6%A8)
- [中文维基百科：王夫人 (孺子婴)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%A4%AB%E4%BA%BA_(%E5%AD%BA%E5%AD%90%E5%A9%B4))
- [中文维基百科：王莽](https://zh.wikipedia.org/wiki/王莽)
- [中文维基百科：王千](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8D%83)
- [中文维基百科：王寿 (新朝)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AF%BF_(%E6%96%B0%E6%9C%9D))
- [中文维基百科：王宗 (新朝)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%AE%97_(%E6%96%B0%E6%9C%9D))
