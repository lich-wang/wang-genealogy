---
schema: wang-person/v1
id: p_PrxK1oesAe8vKYM7JnTjFg
status: active
merged_into: null
display_name: 王仲
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V0FxoX88yr9fySr-nRXocP
        subject_person_id: p_PrxK1oesAe8vKYM7JnTjFg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲，史料所见人物。本项目依据《王仲》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_XSNqu_7I4l6i-rvepxMHM5
          claim_id: c_V0FxoX88yr9fySr-nRXocP
          source_id: s_nm1HkNf9z9kuk1ufYtbJ15
          stance: supports
          locator: Q10412154
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_nm1HkNf9z9kuk1ufYtbJ15
            source_type: api_record
            title: 维基数据：王仲（Q10412154）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10412154
            external_identifier: Q10412154
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:39:52.105Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%B2
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_22KCnnS5ghdvLHx3Trf6an
        subject_person_id: p_PrxK1oesAe8vKYM7JnTjFg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DhtH9ow96Btve2GUSKruDC
          claim_id: c_22KCnnS5ghdvLHx3Trf6an
          source_id: s_nm1HkNf9z9kuk1ufYtbJ15
          stance: supports
          locator: Q10412154
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_tzdwkAJQFpKiPvA2kuJwYc
        subject_person_id: p_PrxK1oesAe8vKYM7JnTjFg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8rmLAjjNeK1vUUwZgEJckW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_mRh2p9d4bgLbKXGUHvW4Nt
          claim_id: c_tzdwkAJQFpKiPvA2kuJwYc
          source_id: s_2cEcyZRMgcs4AGUHbs86Gz
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_2cEcyZRMgcs4AGUHbs86Gz
            source_type: api_record
            title: 维基数据：孝景王皇后（Q448012）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q448012
            external_identifier: Q448012
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:31:31.982Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E5%AD%9D%E6%99%AF%E7%8E%8B%E7%9A%87%E5%90%8E
        - id: cs_ARt5yKJYeM8LzJKDS8xBaA
          claim_id: c_tzdwkAJQFpKiPvA2kuJwYc
          source_id: s_nm1HkNf9z9kuk1ufYtbJ15
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_nm1HkNf9z9kuk1ufYtbJ15
            source_type: api_record
            title: 维基数据：王仲（Q10412154）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10412154
            external_identifier: Q10412154
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:39:52.105Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%B2
        - id: cs_dxcXpdckc3sE2B39cXybPv
          claim_id: c_tzdwkAJQFpKiPvA2kuJwYc
          source_id: s_aN7f8BPXM6LzT6583HPiHt
          stance: supports
          locator: 条文：女
          quotation: 王仲（{{bd|？||？|}}），右扶风槐里县（治所位于今陕西省咸阳市兴平县）人，与妻子臧儿，生有一子两女，子名王信，长女王氏，次女王儿姁
          interpretation_note: null
          source:
            id: s_aN7f8BPXM6LzT6583HPiHt
            source_type: website
            title: 中文维基百科：王仲
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%B2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:09:11.631Z
            metadata_json: null
        - id: cs_EozxE6Tfz2cTBC7MKWPN5j
          claim_id: c_tzdwkAJQFpKiPvA2kuJwYc
          source_id: s_mezkgFipw9NECGSAHVDcpe
          stance: supports
          locator: 条文：女
          quotation: 王仲（{{bd|？||？|}}），右扶风槐里县（治所位于今陕西省咸阳市兴平县）人，与妻子臧儿，生有一子两女，子名王信，长女王氏，次女王儿姁
          interpretation_note: null
          source:
            id: s_mezkgFipw9NECGSAHVDcpe
            source_type: website
            title: 中文维基百科：王仲
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%B2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:40.749Z
            metadata_json: null
        - id: cs_RUb8bfa3qornQNwvY7Abgm
          claim_id: c_tzdwkAJQFpKiPvA2kuJwYc
          source_id: s_jg7eNHWtUMnC6YCLabB4vL
          stance: supports
          locator: 条文：女
          quotation: 王仲（{{bd|？||？|}}），右扶风槐里县（治所位于今陕西省咸阳市兴平县）人，与妻子臧儿，生有一子两女，子名王信，长女王氏，次女王儿姁
          interpretation_note: null
          source:
            id: s_jg7eNHWtUMnC6YCLabB4vL
            source_type: website
            title: 中文维基百科：王仲
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%B2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:40.436Z
            metadata_json: null
        - id: cs_upB5eHe7o1MzxKjReBiJpX
          claim_id: c_tzdwkAJQFpKiPvA2kuJwYc
          source_id: s_JrMiEcKGPZDXpHdravKH5D
          stance: supports
          locator: 条文：女
          quotation: 王仲（{{bd|？||？|}}），右扶风槐里县（治所位于今陕西省咸阳市兴平县）人，与妻子臧儿，生有一子两女，子名王信，长女王氏，次女王儿姁
          interpretation_note: null
          source:
            id: s_JrMiEcKGPZDXpHdravKH5D
            source_type: website
            title: 中文维基百科：王仲
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%B2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:28.347Z
            metadata_json: null
        - id: cs_STJRgiHfZQGjQ91PoPFrSC
          claim_id: c_tzdwkAJQFpKiPvA2kuJwYc
          source_id: s_FD8ddHoNhQbGta7oE8rkvp
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 臧儿嫁給了一個名叫王仲的槐里縣男子，生一子两女。长子王信，长女即王娡
          interpretation_note: null
          source:
            id: s_FD8ddHoNhQbGta7oE8rkvp
            source_type: website
            title: 中文维基百科：孝景王皇后
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%AD%9D%E6%99%AF%E7%8E%8B%E7%9A%87%E5%90%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:28.491Z
            metadata_json: null
        - id: cs_czRPGy7bue9Vp4u78YYm9Q
          claim_id: c_tzdwkAJQFpKiPvA2kuJwYc
          source_id: s_5Nb12UyFLJZEFZyDiLHHsJ
          stance: supports
          locator: 条文：女
          quotation: 王仲，右扶风槐里县（治所位于今陕西省咸阳市兴平县）人，与妻子臧儿，生有一子两女，子名王信，长女王氏，次女王儿姁
          interpretation_note: null
          source:
            id: s_5Nb12UyFLJZEFZyDiLHHsJ
            source_type: website
            title: 中文维基百科：王仲
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%B2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:53.093Z
            metadata_json: null
        - id: cs_26Tbf5uKqWJHLQAGMsRGRU
          claim_id: c_tzdwkAJQFpKiPvA2kuJwYc
          source_id: s_ZmqWFdQWYdaFf9gQyykqjs
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 长子王信，长女即王娡、次女王儿姁。王仲死后
          interpretation_note: null
          source:
            id: s_ZmqWFdQWYdaFf9gQyykqjs
            source_type: website
            title: 中文维基百科：孝景王皇后
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%AD%9D%E6%99%AF%E7%8E%8B%E7%9A%87%E5%90%8E
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:53.228Z
            metadata_json: null
      object_person:
        id: p_8rmLAjjNeK1vUUwZgEJckW
        status: active
        display_name: 王娡
        merged_into_person_id: null
    - claim:
        id: c_tW4DZne9z2M491vCwp5GF9
        subject_person_id: p_PrxK1oesAe8vKYM7JnTjFg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qQBKqxPLCKmZ1zh7Gr5SRe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_No22xRzvhYHyNTvG9CvCwF
          claim_id: c_tW4DZne9z2M491vCwp5GF9
          source_id: s_nm1HkNf9z9kuk1ufYtbJ15
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_nm1HkNf9z9kuk1ufYtbJ15
            source_type: api_record
            title: 维基数据：王仲（Q10412154）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10412154
            external_identifier: Q10412154
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:39:52.105Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%B2
        - id: cs_NdWaqWZKU3HhukRyz7UYfc
          claim_id: c_tW4DZne9z2M491vCwp5GF9
          source_id: s_MDqMGTCG7e1H41sC2woJVf
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_MDqMGTCG7e1H41sC2woJVf
            source_type: api_record
            title: 维基数据：王光（Q28409050）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q28409050
            external_identifier: Q28409050
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:59:58.103Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%85%89_(%E8%A5%BF%E6%B1%89)
      object_person:
        id: p_qQBKqxPLCKmZ1zh7Gr5SRe
        status: active
        display_name: 王光
        merged_into_person_id: null
    - claim:
        id: c_4FtVRL2E8k9YQ44S5x71Pu
        subject_person_id: p_PrxK1oesAe8vKYM7JnTjFg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dRM2nNMR4Y4tMEwG8AxGcm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_dejP3d9V4FFvvmHenGF8U9
          claim_id: c_4FtVRL2E8k9YQ44S5x71Pu
          source_id: s_nm1HkNf9z9kuk1ufYtbJ15
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_nm1HkNf9z9kuk1ufYtbJ15
            source_type: api_record
            title: 维基数据：王仲（Q10412154）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10412154
            external_identifier: Q10412154
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:39:52.105Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%B2
        - id: cs_hvhocBjPdt949dtE3pAq86
          claim_id: c_4FtVRL2E8k9YQ44S5x71Pu
          source_id: s_XaJ4zmShinLkdVNBs8CQR9
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_XaJ4zmShinLkdVNBs8CQR9
            source_type: api_record
            title: 维基数据：王兒姁（Q8253153）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q8253153
            external_identifier: Q8253153
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:40:02.167Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%85%92%E5%A7%81
        - id: cs_vGLX6Xi4ku72jDeLLGyz1h
          claim_id: c_4FtVRL2E8k9YQ44S5x71Pu
          source_id: s_aN7f8BPXM6LzT6583HPiHt
          stance: supports
          locator: 条文：女
          quotation: 王仲（{{bd|？||？|}}），右扶风槐里县（治所位于今陕西省咸阳市兴平县）人，与妻子臧儿，生有一子两女，子名王信，长女王氏，次女王儿姁
          interpretation_note: null
          source:
            id: s_aN7f8BPXM6LzT6583HPiHt
            source_type: website
            title: 中文维基百科：王仲
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%B2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:09:11.631Z
            metadata_json: null
        - id: cs_6Jak3gbakyJPGtGs33pvpZ
          claim_id: c_4FtVRL2E8k9YQ44S5x71Pu
          source_id: s_mezkgFipw9NECGSAHVDcpe
          stance: supports
          locator: 条文：女
          quotation: 王仲（{{bd|？||？|}}），右扶风槐里县（治所位于今陕西省咸阳市兴平县）人，与妻子臧儿，生有一子两女，子名王信，长女王氏，次女王儿姁
          interpretation_note: null
          source:
            id: s_mezkgFipw9NECGSAHVDcpe
            source_type: website
            title: 中文维基百科：王仲
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%B2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:40.749Z
            metadata_json: null
        - id: cs_tLCQ6t83ANtpzpSNDdk3GG
          claim_id: c_4FtVRL2E8k9YQ44S5x71Pu
          source_id: s_jg7eNHWtUMnC6YCLabB4vL
          stance: supports
          locator: 条文：女
          quotation: 王仲（{{bd|？||？|}}），右扶风槐里县（治所位于今陕西省咸阳市兴平县）人，与妻子臧儿，生有一子两女，子名王信，长女王氏，次女王儿姁
          interpretation_note: null
          source:
            id: s_jg7eNHWtUMnC6YCLabB4vL
            source_type: website
            title: 中文维基百科：王仲
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%B2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:40.436Z
            metadata_json: null
        - id: cs_TzYxF27H9Rj9g4W9bXtgsp
          claim_id: c_4FtVRL2E8k9YQ44S5x71Pu
          source_id: s_JrMiEcKGPZDXpHdravKH5D
          stance: supports
          locator: 条文：女
          quotation: 王仲（{{bd|？||？|}}），右扶风槐里县（治所位于今陕西省咸阳市兴平县）人，与妻子臧儿，生有一子两女，子名王信，长女王氏，次女王儿姁
          interpretation_note: null
          source:
            id: s_JrMiEcKGPZDXpHdravKH5D
            source_type: website
            title: 中文维基百科：王仲
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%B2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:28.347Z
            metadata_json: null
        - id: cs_sBx4XZNq59qYpQKnep4KQV
          claim_id: c_4FtVRL2E8k9YQ44S5x71Pu
          source_id: s_5Nb12UyFLJZEFZyDiLHHsJ
          stance: supports
          locator: 条文：女
          quotation: 王仲，右扶风槐里县（治所位于今陕西省咸阳市兴平县）人，与妻子臧儿，生有一子两女，子名王信，长女王氏，次女王儿姁
          interpretation_note: null
          source:
            id: s_5Nb12UyFLJZEFZyDiLHHsJ
            source_type: website
            title: 中文维基百科：王仲
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%B2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:53.093Z
            metadata_json: null
      object_person:
        id: p_dRM2nNMR4Y4tMEwG8AxGcm
        status: active
        display_name: 王兒姁
        merged_into_person_id: null
    - claim:
        id: c_c4s7LZzhY7SaTqsH7tEaFt
        subject_person_id: p_PrxK1oesAe8vKYM7JnTjFg
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_LQXu6gmucEcttUNU5Msr1j
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WKvAz3u61WAQ1dn2a1367d
          claim_id: c_c4s7LZzhY7SaTqsH7tEaFt
          source_id: s_JrMiEcKGPZDXpHdravKH5D
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 生有一子两女，子名王信
          interpretation_note: null
          source:
            id: s_JrMiEcKGPZDXpHdravKH5D
            source_type: website
            title: 中文维基百科：王仲
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%B2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:28.347Z
            metadata_json: null
        - id: cs_ahRmEMp9A35feKm7U8k8ce
          claim_id: c_c4s7LZzhY7SaTqsH7tEaFt
          source_id: s_5Nb12UyFLJZEFZyDiLHHsJ
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 与妻子臧儿，生有一子两女，子名王信，长女王氏，次女王儿姁。
          interpretation_note: null
          source:
            id: s_5Nb12UyFLJZEFZyDiLHHsJ
            source_type: website
            title: 中文维基百科：王仲
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%B2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:53.093Z
            metadata_json: null
        - id: cs_cqFbfmZkJaJsd6dEK7FZCW
          claim_id: c_c4s7LZzhY7SaTqsH7tEaFt
          source_id: s_jg7eNHWtUMnC6YCLabB4vL
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 子名王信
          interpretation_note: null
          source:
            id: s_jg7eNHWtUMnC6YCLabB4vL
            source_type: website
            title: 中文维基百科：王仲
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%B2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:40.436Z
            metadata_json: null
        - id: cs_gRfnQhyhhPDXD8fhcwTLo6
          claim_id: c_c4s7LZzhY7SaTqsH7tEaFt
          source_id: s_aN7f8BPXM6LzT6583HPiHt
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 子名王信
          interpretation_note: null
          source:
            id: s_aN7f8BPXM6LzT6583HPiHt
            source_type: website
            title: 中文维基百科：王仲
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%B2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:09:11.631Z
            metadata_json: null
        - id: cs_ioDQZvZrVsKys16NChgknk
          claim_id: c_c4s7LZzhY7SaTqsH7tEaFt
          source_id: s_mezkgFipw9NECGSAHVDcpe
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 子名王信
          interpretation_note: null
          source:
            id: s_mezkgFipw9NECGSAHVDcpe
            source_type: website
            title: 中文维基百科：王仲
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%B2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:40.749Z
            metadata_json: null
      object_person:
        id: p_LQXu6gmucEcttUNU5Msr1j
        status: active
        display_name: 王信
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_t44fra2eF5Stq9xZwzpau3
        subject_person_id: p_FuGRA6sQUNQW7CFWNedz5E
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_PrxK1oesAe8vKYM7JnTjFg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_XBiC9GEYSAwAd3jF9M7CTE
          claim_id: c_t44fra2eF5Stq9xZwzpau3
          source_id: s_nm1HkNf9z9kuk1ufYtbJ15
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_nm1HkNf9z9kuk1ufYtbJ15
            source_type: api_record
            title: 维基数据：王仲（Q10412154）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10412154
            external_identifier: Q10412154
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:39:52.105Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%B2
        - id: cs_ciVroUKSXkfCPfb9oWsun1
          claim_id: c_t44fra2eF5Stq9xZwzpau3
          source_id: s_rgciGNTZKq9PSfDB6uZUBz
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_rgciGNTZKq9PSfDB6uZUBz
            source_type: api_record
            title: 维基数据：臧兒（Q48919413）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q48919413
            external_identifier: Q48919413
            license_code: CC0-1.0
            accessed_at: 2026-08-24T03:39:56.865Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E8%87%A7%E5%85%92
        - id: cs_VKoG5iQd2XJJ13hNw3tEiC
          claim_id: c_t44fra2eF5Stq9xZwzpau3
          source_id: s_aN7f8BPXM6LzT6583HPiHt
          stance: supports
          locator: 条文：条文识读（妻）
          quotation: 与妻子臧儿
          interpretation_note: null
          source:
            id: s_aN7f8BPXM6LzT6583HPiHt
            source_type: website
            title: 中文维基百科：王仲
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%B2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:09:11.631Z
            metadata_json: null
        - id: cs_HFjNE7jHTJwuBN3ZBdPTsL
          claim_id: c_t44fra2eF5Stq9xZwzpau3
          source_id: s_ZL9D16ncaJ4yyjDxNEpmU2
          stance: supports
          locator: 条文：条文识读（嫁）
          quotation: 嫁槐里人王仲，生二女一子
          interpretation_note: null
          source:
            id: s_ZL9D16ncaJ4yyjDxNEpmU2
            source_type: website
            title: 中文维基百科：臧兒
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E8%87%A7%E5%85%92
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:09:25.809Z
            metadata_json: null
        - id: cs_KiUUf4qtedThhtBXkv1ZRo
          claim_id: c_t44fra2eF5Stq9xZwzpau3
          source_id: s_mezkgFipw9NECGSAHVDcpe
          stance: supports
          locator: 条文：条文识读（妻）
          quotation: 与妻子臧儿
          interpretation_note: null
          source:
            id: s_mezkgFipw9NECGSAHVDcpe
            source_type: website
            title: 中文维基百科：王仲
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%B2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:40.749Z
            metadata_json: null
        - id: cs_6XiVTw89Q31XtBG1JN7a6u
          claim_id: c_t44fra2eF5Stq9xZwzpau3
          source_id: s_xYNJexi5hKBcNn7BL2xg3m
          stance: supports
          locator: 条文：条文识读（嫁）
          quotation: 嫁槐里人王仲，生二女一子
          interpretation_note: null
          source:
            id: s_xYNJexi5hKBcNn7BL2xg3m
            source_type: website
            title: 中文维基百科：臧兒
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E8%87%A7%E5%85%92
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:56.228Z
            metadata_json: null
        - id: cs_GHHhxUAW9yzc1F541HC9wB
          claim_id: c_t44fra2eF5Stq9xZwzpau3
          source_id: s_jg7eNHWtUMnC6YCLabB4vL
          stance: supports
          locator: 条文：条文识读（妻）
          quotation: 与妻子臧儿
          interpretation_note: null
          source:
            id: s_jg7eNHWtUMnC6YCLabB4vL
            source_type: website
            title: 中文维基百科：王仲
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%B2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:40.436Z
            metadata_json: null
        - id: cs_Q8s2DciNRSCWruNVAh4sNM
          claim_id: c_t44fra2eF5Stq9xZwzpau3
          source_id: s_a21ABfDQ8Z137Zje3j3PTv
          stance: supports
          locator: 条文：条文识读（嫁）
          quotation: 嫁槐里人王仲，生二女一子
          interpretation_note: null
          source:
            id: s_a21ABfDQ8Z137Zje3j3PTv
            source_type: website
            title: 中文维基百科：臧兒
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E8%87%A7%E5%85%92
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:57.549Z
            metadata_json: null
        - id: cs_sJMC8JiCtk8GpKRRxkaPMq
          claim_id: c_t44fra2eF5Stq9xZwzpau3
          source_id: s_JrMiEcKGPZDXpHdravKH5D
          stance: supports
          locator: 条文：条文识读（妻子）
          quotation: 与妻子臧儿
          interpretation_note: null
          source:
            id: s_JrMiEcKGPZDXpHdravKH5D
            source_type: website
            title: 中文维基百科：王仲
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%B2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:28.347Z
            metadata_json: null
        - id: cs_KiwnZsDcqLZLVtPZsvLCE4
          claim_id: c_t44fra2eF5Stq9xZwzpau3
          source_id: s_upgNBo8ikofjFigweJiBTW
          stance: supports
          locator: 条文：条文识读（嫁）
          quotation: 嫁槐里人王仲
          interpretation_note: null
          source:
            id: s_upgNBo8ikofjFigweJiBTW
            source_type: website
            title: 中文维基百科：臧兒
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E8%87%A7%E5%85%92
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:52.761Z
            metadata_json: null
        - id: cs_Y4MwYZAkCm4BwudSGP1Lr9
          claim_id: c_t44fra2eF5Stq9xZwzpau3
          source_id: s_5Nb12UyFLJZEFZyDiLHHsJ
          stance: supports
          locator: 条文：条文识读（妻）
          quotation: 与妻子臧儿，生有一子两女
          interpretation_note: null
          source:
            id: s_5Nb12UyFLJZEFZyDiLHHsJ
            source_type: website
            title: 中文维基百科：王仲
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%B2
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:53.093Z
            metadata_json: null
      object_person:
        id: p_FuGRA6sQUNQW7CFWNedz5E
        status: active
        display_name: 臧兒
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王仲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仲，史料所见人物。本项目依据《王仲》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王仲 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_8rmLAjjNeK1vUUwZgEJckW | 王娡 | accepted |
| children | p_qQBKqxPLCKmZ1zh7Gr5SRe | 王光 | accepted |
| children | p_dRM2nNMR4Y4tMEwG8AxGcm | 王兒姁 | accepted |
| children | p_LQXu6gmucEcttUNU5Msr1j | 王信 | accepted |
| spouses | p_FuGRA6sQUNQW7CFWNedz5E | 臧兒 | accepted |

## 外部来源

- [维基数据：王兒姁（Q8253153）](https://www.wikidata.org/wiki/Q8253153)
- [维基数据：王光（Q28409050）](https://www.wikidata.org/wiki/Q28409050)
- [维基数据：王仲（Q10412154）](https://www.wikidata.org/wiki/Q10412154)
- [维基数据：孝景王皇后（Q448012）](https://www.wikidata.org/wiki/Q448012)
- [维基数据：臧兒（Q48919413）](https://www.wikidata.org/wiki/Q48919413)
- [中文维基百科：王仲](https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%B2)
- [中文维基百科：孝景王皇后](https://zh.wikipedia.org/wiki/%E5%AD%9D%E6%99%AF%E7%8E%8B%E7%9A%87%E5%90%8E)
- [中文维基百科：臧兒](https://zh.wikipedia.org/wiki/%E8%87%A7%E5%85%92)
