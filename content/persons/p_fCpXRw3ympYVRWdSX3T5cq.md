---
schema: wang-person/v1
id: p_fCpXRw3ympYVRWdSX3T5cq
status: active
merged_into: null
display_name: 王福畤
revision: 5
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fg4JUdqKoEUWHKkQvBEugF
        subject_person_id: p_fCpXRw3ympYVRWdSX3T5cq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福畤，唐絳州龍門人，隋大儒王通之子，王勔、王勮、王勃之父。官雍州司功參軍，坐王勃事左遷交趾令（《新唐書·卷二百一·王勃傳》：父福畤，繇雍州司功參軍坐勃故左遷交址令）。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_HPI9GfcMVXF2OvFZY96aES
          claim_id: c_fg4JUdqKoEUWHKkQvBEugF
          source_id: s_xRCzAv6nVYLVijronY2MLM
          stance: supports
          locator: 新唐書/卷201·王福畤
          quotation: null
          interpretation_note: 依正史传主列传中点名的亲属记载补写简介。
          source:
            id: s_xRCzAv6nVYLVijronY2MLM
            source_type: website
            title: 维基文库：新唐書/卷201·王福畤
            creator: 维基文库贡献者
            publisher: 维基媒体基金会
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/新唐書/卷201
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-14T02:14:35.000Z
            metadata_json: null
        - id: cs_KEoinz08T-Jahw8f7H5qrT
          claim_id: c_fg4JUdqKoEUWHKkQvBEugF
          source_id: s_mX2dmPTN6s4Mj2JsAXsT2d
          stance: supports
          locator: Q18905529
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_mX2dmPTN6s4Mj2JsAXsT2d
            source_type: api_record
            title: 維基數據：王福畤（Q18905529）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18905529
            external_identifier: Q18905529
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:48.827Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended: null
    alternatives:
      - claim:
          id: c_e6tEKZWroG2X7qb9dUM8uH
          subject_person_id: p_fCpXRw3ympYVRWdSX3T5cq
          claim_kind: property
          predicate: birth.date
          object_person_id: null
          generation_count: null
          parent_role: null
          value_json:
            date:
              original_text: 622年
              calendar_note: 維基數據 P569 結構化日期，精度：年
              earliest: 0622-01-01
              latest: 0622-12-31
              precision: year
          status: disputed
          confidence: medium
          current_revision: 3
        sources:
          - id: cs_G1akj5GpHxwmagho75mr6p
            claim_id: c_e6tEKZWroG2X7qb9dUM8uH
            source_id: s_mX2dmPTN6s4Mj2JsAXsT2d
            stance: supports
            locator: Q18905529
            quotation: null
            interpretation_note: null
            source:
              id: s_mX2dmPTN6s4Mj2JsAXsT2d
              source_type: api_record
              title: 維基數據：王福畤（Q18905529）
              creator: 維基數據貢獻者
              publisher: Wikimedia Foundation
              published_at_text: null
              canonical_url: https://www.wikidata.org/wiki/Q18905529
              external_identifier: Q18905529
              license_code: CC0-1.0
              accessed_at: 2026-08-24T02:09:48.827Z
              metadata_json: null
        object_person: null
  - predicate: name.primary
    recommended:
      claim:
        id: c_aGAvYCxEbAJ85yew7bgrk6
        subject_person_id: p_fCpXRw3ympYVRWdSX3T5cq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福畤
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_wYzVu6VKCUX63ScSqg5DPj
          claim_id: c_aGAvYCxEbAJ85yew7bgrk6
          source_id: s_mX2dmPTN6s4Mj2JsAXsT2d
          stance: supports
          locator: Q18905529
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_253wc7CdiV75apPWgUBLF9
        subject_person_id: p_g8yjPAazS4duEjdSoPu22v
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fCpXRw3ympYVRWdSX3T5cq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_ug8gprFtpmHGvHnWWjb3DY
          claim_id: c_253wc7CdiV75apPWgUBLF9
          source_id: s_bCzHdKAut3R3z3NcvypHca
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_bCzHdKAut3R3z3NcvypHca
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王福畤（30885）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30885&o=json
            external_identifier: CBDB:30885
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:28.816Z
            metadata_json: null
        - id: cs_wa4z9TUXQB5Fi6TUqx4CB7
          claim_id: c_253wc7CdiV75apPWgUBLF9
          source_id: s_mX2dmPTN6s4Mj2JsAXsT2d
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_mX2dmPTN6s4Mj2JsAXsT2d
            source_type: api_record
            title: 維基數據：王福畤（Q18905529）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18905529
            external_identifier: Q18905529
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:48.827Z
            metadata_json: null
        - id: cs_vb6mECiyuYXSDj3ZNBCNHH
          claim_id: c_253wc7CdiV75apPWgUBLF9
          source_id: s_XEyVmsJi464FkLSXdRq3Hb
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_XEyVmsJi464FkLSXdRq3Hb
            source_type: api_record
            title: 维基数据：王通（Q11573223）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11573223
            external_identifier: Q11573223
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:43.288Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%80%9A_(%E9%9A%8B%E6%9C%9D)
        - id: cs_UyHg41DzeTarmRGXP2K7Bu
          claim_id: c_253wc7CdiV75apPWgUBLF9
          source_id: s_rxH1mb4ysDMZcdEp858Epm
          stance: supports
          locator: 亲属关系：次子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_rxH1mb4ysDMZcdEp858Epm
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王通（11965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=11965&o=json
            external_identifier: CBDB:11965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:48:43.425Z
            metadata_json: null
        - id: cs_vckZ9amryXS4mqhcHBE6ng
          claim_id: c_253wc7CdiV75apPWgUBLF9
          source_id: s_TtHXscz8zhhyz8evgMfJTL
          stance: supports
          locator: 王勃条
          quotation: 祖通……二子：福畤、福郊。
          interpretation_note: null
          source:
            id: s_TtHXscz8zhhyz8evgMfJTL
            source_type: book
            title: 中文维基文库：《旧唐书》卷一百九十上
            creator: null
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/zh-hant/%E8%88%8A%E5%94%90%E6%9B%B8/%E5%8D%B7190%E4%B8%8A
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-01T02:15:17.324Z
            metadata_json: null
      object_person:
        id: p_g8yjPAazS4duEjdSoPu22v
        status: active
        display_name: 王通
        merged_into_person_id: null
  children:
    - claim:
        id: c_qBcvQJkwWrcsKjare3Tvod
        subject_person_id: p_fCpXRw3ympYVRWdSX3T5cq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3rXpgVa7b3w2KvtV9muyJp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_HYGQmozrnRG9r61XwvvHvj
          claim_id: c_qBcvQJkwWrcsKjare3Tvod
          source_id: s_X8MzXpf7FsGfydamHGb5fc
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_X8MzXpf7FsGfydamHGb5fc
            source_type: website
            title: 中文维基百科：王勃
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/王勃
            external_identifier: Q1275321
            license_code: CC-BY-SA-4.0
            accessed_at: null
            metadata_json: null
        - id: cs_uGPZ4WipNY37QjMYDGh5JK
          claim_id: c_qBcvQJkwWrcsKjare3Tvod
          source_id: s_gydJ4uVJLbjjpUGMtMVMZn
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_gydJ4uVJLbjjpUGMtMVMZn
            source_type: api_record
            title: 維基數據：王勃（Q1275321）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q1275321
            external_identifier: Q1275321
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:14:33.940Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8B%83
        - id: cs_83M1xZqDdto5FsUoyVDjBf
          claim_id: c_qBcvQJkwWrcsKjare3Tvod
          source_id: s_mX2dmPTN6s4Mj2JsAXsT2d
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_mX2dmPTN6s4Mj2JsAXsT2d
            source_type: api_record
            title: 維基數據：王福畤（Q18905529）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18905529
            external_identifier: Q18905529
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:48.827Z
            metadata_json: null
        - id: cs_KG6uBEnSWeENzre5VtSJrV
          claim_id: c_qBcvQJkwWrcsKjare3Tvod
          source_id: s_8AfE51pNsWuPRo5JW88tth
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：Pers DB / 唐代人物知識ベース
          source:
            id: s_8AfE51pNsWuPRo5JW88tth
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王勃（30982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30982&o=json
            external_identifier: CBDB:30982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:51:02.310Z
            metadata_json: null
        - id: cs_DpbDL4DZmweU3UVQuZ26T8
          claim_id: c_qBcvQJkwWrcsKjare3Tvod
          source_id: s_bCzHdKAut3R3z3NcvypHca
          stance: supports
          locator: 亲属关系：三子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_bCzHdKAut3R3z3NcvypHca
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王福畤（30885）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30885&o=json
            external_identifier: CBDB:30885
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:28.816Z
            metadata_json: null
        - id: cs_QcX49SMGYAZKJXeE9cmvGi
          claim_id: c_qBcvQJkwWrcsKjare3Tvod
          source_id: s_JYyjCnuhAke416mLw1visU
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 祖父為隋末大儒王通，叔祖為隋唐之際隱士詩人王績，父親王福畤。
          interpretation_note: null
          source:
            id: s_JYyjCnuhAke416mLw1visU
            source_type: website
            title: 中文维基百科：王勃
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8B%83
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:57.929Z
            metadata_json: null
        - id: cs_P9zy47perzCcHM7FqCg69W
          claim_id: c_qBcvQJkwWrcsKjare3Tvod
          source_id: s_Cxty57tteveG3jFX5pWqrm
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 祖父為隋末大儒王通，叔祖為隋唐之際隱士詩人王績，父親王福畤。
          interpretation_note: null
          source:
            id: s_Cxty57tteveG3jFX5pWqrm
            source_type: website
            title: 中文维基百科：王勃
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8B%83
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:55:47.045Z
            metadata_json: null
      object_person:
        id: p_3rXpgVa7b3w2KvtV9muyJp
        status: active
        display_name: 王勃
        merged_into_person_id: null
    - claim:
        id: c_8GK8pwYWZDM5QZn9Pd17Gr
        subject_person_id: p_fCpXRw3ympYVRWdSX3T5cq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3CDBAkcgG1mnkdjqn6afQr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_9PdAYYhxNKyXhfWHTKpE7L
          claim_id: c_8GK8pwYWZDM5QZn9Pd17Gr
          source_id: s_mX2dmPTN6s4Mj2JsAXsT2d
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_mX2dmPTN6s4Mj2JsAXsT2d
            source_type: api_record
            title: 維基數據：王福畤（Q18905529）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18905529
            external_identifier: Q18905529
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:48.827Z
            metadata_json: null
        - id: cs_BYJQ2bVc8BTfW7FP55VbtK
          claim_id: c_8GK8pwYWZDM5QZn9Pd17Gr
          source_id: s_bCzHdKAut3R3z3NcvypHca
          stance: supports
          locator: 亲属关系：次子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_bCzHdKAut3R3z3NcvypHca
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王福畤（30885）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30885&o=json
            external_identifier: CBDB:30885
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:28.816Z
            metadata_json: null
        - id: cs_sFXkwgHZnGyrifVcGJ2UPd
          claim_id: c_8GK8pwYWZDM5QZn9Pd17Gr
          source_id: s_MuKxfAQGNVcC3kGZDshKnb
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_MuKxfAQGNVcC3kGZDshKnb
            source_type: api_record
            title: 维基数据：王勮（Q11572882）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q11572882
            external_identifier: Q11572882
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:48:41.844Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8B%AE
        - id: cs_NQ27JSZ2yn2iEcbgK99fHB
          claim_id: c_8GK8pwYWZDM5QZn9Pd17Gr
          source_id: s_3wa7G18fj2TvuRDsTeDsoy
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_3wa7G18fj2TvuRDsTeDsoy
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王勮（30981）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30981&o=json
            external_identifier: CBDB:30981
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:48:41.977Z
            metadata_json: null
        - id: cs_mYFt2FDvRxgiL6h82DovGq
          claim_id: c_8GK8pwYWZDM5QZn9Pd17Gr
          source_id: s_ZQRhQmUQV7KzNEJdNVZcRr
          stance: supports
          locator: 条文：条文识读（父）
          quotation: 王福畤之子
          interpretation_note: null
          source:
            id: s_ZQRhQmUQV7KzNEJdNVZcRr
            source_type: website
            title: 中文维基百科：王勮
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8B%AE
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:27:01.605Z
            metadata_json: null
        - id: cs_v6ENpfpu5PN2Uq3nkjs9L6
          claim_id: c_8GK8pwYWZDM5QZn9Pd17Gr
          source_id: s_X7CkH8nd2HM7JKNDHBuCFW
          stance: supports
          locator: 条文：条文识读（父亲）
          quotation: 王福畤之子
          interpretation_note: null
          source:
            id: s_X7CkH8nd2HM7JKNDHBuCFW
            source_type: website
            title: 中文维基百科：王勮
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8B%AE
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:09.293Z
            metadata_json: null
      object_person:
        id: p_3CDBAkcgG1mnkdjqn6afQr
        status: active
        display_name: 王勮
        merged_into_person_id: null
    - claim:
        id: c_Lqym9sdd3uXZpdyKUD4y2E
        subject_person_id: p_fCpXRw3ympYVRWdSX3T5cq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1HFrXhR5k8Wh7RX7Cyq9Qe
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_3JtW8n8sEXp6eiUJhKJEg8
          claim_id: c_Lqym9sdd3uXZpdyKUD4y2E
          source_id: s_bCzHdKAut3R3z3NcvypHca
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：Pers DB / 唐代人物知識ベース
          source:
            id: s_bCzHdKAut3R3z3NcvypHca
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王福畤（30885）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30885&o=json
            external_identifier: CBDB:30885
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:28.816Z
            metadata_json: null
        - id: cs_9tkZxaqcJghwy9DY7LAaJf
          claim_id: c_Lqym9sdd3uXZpdyKUD4y2E
          source_id: s_mX2dmPTN6s4Mj2JsAXsT2d
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_mX2dmPTN6s4Mj2JsAXsT2d
            source_type: api_record
            title: 維基數據：王福畤（Q18905529）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18905529
            external_identifier: Q18905529
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:48.827Z
            metadata_json: null
        - id: cs_xMDGti4wrhM2veyPEDEGDc
          claim_id: c_Lqym9sdd3uXZpdyKUD4y2E
          source_id: s_iobfoY5RoUkQ3TWmY4efSY
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_iobfoY5RoUkQ3TWmY4efSY
            source_type: api_record
            title: 维基数据：王助（Q45438791）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45438791
            external_identifier: Q45438791
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:04.818Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8A%A9_(%E5%94%90%E6%9C%9D)
        - id: cs_WegxUWsMz5cjm5VkC5kgFM
          claim_id: c_Lqym9sdd3uXZpdyKUD4y2E
          source_id: s_sxWU5J97Qmr6taVwc4mMrt
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：Pers DB / 唐代人物知識ベース
          source:
            id: s_sxWU5J97Qmr6taVwc4mMrt
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王助（91979）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91979&o=json
            external_identifier: CBDB:91979
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:04.950Z
            metadata_json: null
        - id: cs_juFea3q4Erut8P8euMj2Bk
          claim_id: c_Lqym9sdd3uXZpdyKUD4y2E
          source_id: s_UAbWXhAJNyh9D6LNEHrTMz
          stance: supports
          locator: 条文：父
          quotation: 为父王福畤居丧，哀痛的骨瘦嶙峋
          interpretation_note: null
          source:
            id: s_UAbWXhAJNyh9D6LNEHrTMz
            source_type: website
            title: 中文维基百科：王助 (唐朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8A%A9_(%E5%94%90%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:25:33.354Z
            metadata_json: null
        - id: cs_euGJXiy915US7DtH3KZkm7
          claim_id: c_Lqym9sdd3uXZpdyKUD4y2E
          source_id: s_EEBRBGgmG7xzo6uPRdakg5
          stance: supports
          locator: 条文：父
          quotation: 为父王福畤居丧，哀痛的骨瘦嶙峋
          interpretation_note: null
          source:
            id: s_EEBRBGgmG7xzo6uPRdakg5
            source_type: website
            title: 中文维基百科：王助 (唐朝)
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8A%A9_(%E5%94%90%E6%9C%9D)
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:01.456Z
            metadata_json: null
      object_person:
        id: p_1HFrXhR5k8Wh7RX7Cyq9Qe
        status: active
        display_name: 王助
        merged_into_person_id: null
    - claim:
        id: c_Dh9siP1ieWBG4D5gPYzxN3
        subject_person_id: p_fCpXRw3ympYVRWdSX3T5cq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7Pig6Y7VUyvmBD1MUwthZa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_mm3RcdWES2B5HGnY2oWJF4
          claim_id: c_Dh9siP1ieWBG4D5gPYzxN3
          source_id: s_bCzHdKAut3R3z3NcvypHca
          stance: supports
          locator: 亲属关系：長子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_bCzHdKAut3R3z3NcvypHca
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王福畤（30885）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30885&o=json
            external_identifier: CBDB:30885
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:50:28.816Z
            metadata_json: null
        - id: cs_teYhMDYEY1dN3wF8Aajyvy
          claim_id: c_Dh9siP1ieWBG4D5gPYzxN3
          source_id: s_mX2dmPTN6s4Mj2JsAXsT2d
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_mX2dmPTN6s4Mj2JsAXsT2d
            source_type: api_record
            title: 維基數據：王福畤（Q18905529）
            creator: 維基數據貢獻者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18905529
            external_identifier: Q18905529
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:09:48.827Z
            metadata_json: null
        - id: cs_fVDB18rDLDQB93JrEAdCxx
          claim_id: c_Dh9siP1ieWBG4D5gPYzxN3
          source_id: s_UZsHa8e6u8wx6hx6ym22MQ
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_UZsHa8e6u8wx6hx6ym22MQ
            source_type: api_record
            title: 维基数据：王勔（Q45418879）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45418879
            external_identifier: Q45418879
            license_code: CC0-1.0
            accessed_at: 2026-08-24T02:49:23.837Z
            metadata_json: null
        - id: cs_KrqDuLu9gMhWfHq9rtNMJa
          claim_id: c_Dh9siP1ieWBG4D5gPYzxN3
          source_id: s_Erh9MFrsAQ1i612GUm5gYh
          stance: supports
          locator: 亲属关系：父
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_Erh9MFrsAQ1i612GUm5gYh
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王勔（30980）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30980&o=json
            external_identifier: CBDB:30980
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-08-24T02:49:23.966Z
            metadata_json: null
      object_person:
        id: p_7Pig6Y7VUyvmBD1MUwthZa
        status: active
        display_name: 王勔
        merged_into_person_id: null
    - claim:
        id: c_tHwFh-C_jRJu5nS4CvMuwd
        subject_person_id: p_fCpXRw3ympYVRWdSX3T5cq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UvT6rfvfyeQtGV2w2picuQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oNnGu0F1i7PA3fVDx_Zlli
          claim_id: c_tHwFh-C_jRJu5nS4CvMuwd
          source_id: s_lMIAyIqn0ypYjz7YEc3DZB
          stance: supports
          locator: CBDB：兄弟 王勃（30982）之父／母 王福畤
          quotation: null
          interpretation_note: 由兄弟关系推断：王勮 与 王勃 为同胞（CBDB 记「弟」），王勃 之父／母即 王勮 之父／母。
          source:
            id: s_lMIAyIqn0ypYjz7YEc3DZB
            source_type: api_record
            title: 中国历代人物传记资料库：王勮（CBDB 92110）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92110&o=json
            external_identifier: CBDB:92110
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UvT6rfvfyeQtGV2w2picuQ
        status: active
        display_name: 王勮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王福畤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王福畤，唐絳州龍門人，隋大儒王通之子，王勔、王勮、王勃之父。官雍州司功參軍，坐王勃事左遷交趾令（《新唐書·卷二百一·王勃傳》：父福畤，繇雍州司功參軍坐勃故左遷交址令）。 | accepted |
| birth.date | 622年 | disputed |
| name.primary | 王福畤 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_g8yjPAazS4duEjdSoPu22v | 王通 | accepted |
| children | p_3rXpgVa7b3w2KvtV9muyJp | 王勃 | accepted |
| children | p_3CDBAkcgG1mnkdjqn6afQr | 王勮 | accepted |
| children | p_1HFrXhR5k8Wh7RX7Cyq9Qe | 王助 | accepted |
| children | p_7Pig6Y7VUyvmBD1MUwthZa | 王勔 | accepted |
| children | p_UvT6rfvfyeQtGV2w2picuQ | 王勮 | accepted |

## 外部来源

- [维基数据：王勮（Q11572882）](https://www.wikidata.org/wiki/Q11572882)
- [维基数据：王勔（Q45418879）](https://www.wikidata.org/wiki/Q45418879)
- [维基数据：王通（Q11573223）](https://www.wikidata.org/wiki/Q11573223)
- [维基数据：王助（Q45438791）](https://www.wikidata.org/wiki/Q45438791)
- [维基文库：新唐書/卷201·王福畤](https://zh.wikisource.org/wiki/新唐書/卷201)
- [維基數據：王勃（Q1275321）](https://www.wikidata.org/wiki/Q1275321)
- [維基數據：王福畤（Q18905529）](https://www.wikidata.org/wiki/Q18905529)
- [中国历代人物传记资料库：王勮（CBDB 92110）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92110&o=json)
- [中文维基百科：王勃](https://zh.wikipedia.org/wiki/王勃)
- [中文维基百科：王勃](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8B%83)
- [中文维基百科：王勮](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8B%AE)
- [中文维基百科：王助 (唐朝)](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%8A%A9_(%E5%94%90%E6%9C%9D))
- [中文维基文库：《旧唐书》卷一百九十上](https://zh.wikisource.org/zh-hant/%E8%88%8A%E5%94%90%E6%9B%B8/%E5%8D%B7190%E4%B8%8A)
- [CBDB 中国历代人物传记资料库：王勃（30982）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30982&o=json)
- [CBDB 中国历代人物传记资料库：王福畤（30885）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30885&o=json)
- [CBDB 中国历代人物传记资料库：王勮（30981）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30981&o=json)
- [CBDB 中国历代人物传记资料库：王勔（30980）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30980&o=json)
- [CBDB 中国历代人物传记资料库：王通（11965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=11965&o=json)
- [CBDB 中国历代人物传记资料库：王助（91979）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91979&o=json)
