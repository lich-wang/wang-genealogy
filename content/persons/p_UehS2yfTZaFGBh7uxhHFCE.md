---
schema: wang-person/v1
id: p_UehS2yfTZaFGBh7uxhHFCE
status: active
merged_into: null
display_name: 王之翰
revision: 17
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3hNJA2EfhL6aX3hVTsVfeq
        subject_person_id: p_UehS2yfTZaFGBh7uxhHFCE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wAX4BqoTpQsfcSQQubMn1C
          claim_id: c_3hNJA2EfhL6aX3hVTsVfeq
          source_id: s_bTnYoQU1LPPucK9ZQ8SwH7
          stance: supports
          locator: CBDB:207104
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（207104）
          source: &a1
            id: s_bTnYoQU1LPPucK9ZQ8SwH7
            source_type: api_record
            title: 中国历代人物传记资料库：王之翰（CBDB 207104）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207104&o=json
            external_identifier: CBDB:207104
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.910Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_GUNp91W6iBDb7eXGWuF4g1
        subject_person_id: p_UehS2yfTZaFGBh7uxhHFCE
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1557年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gBtSKir6V59iBAKFbpr8EL
          claim_id: c_GUNp91W6iBDb7eXGWuF4g1
          source_id: s_bTnYoQU1LPPucK9ZQ8SwH7
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LmWsvCJuCJGTLBgixwnN2e
        subject_person_id: p_UehS2yfTZaFGBh7uxhHFCE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之翰（生于1557年），明人物。明清進士進士，籍贯蒙陰，入仕進士，曾任禮部觀政。（中国历代人物传记资料库 CBDB 207104）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7XtwwEXxOzbKThxJRBJRKj
          claim_id: c_LmWsvCJuCJGTLBgixwnN2e
          source_id: s_bTnYoQU1LPPucK9ZQ8SwH7
          stance: supports
          locator: CBDB:207104
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_5szM0xOixoWqRzEb6GyeBB
        subject_person_id: p_hfNqr6f1P7uM2hMBq7xoJD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UehS2yfTZaFGBh7uxhHFCE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7PWkk3D9x0o0ODoiI0nj_x
          claim_id: c_5szM0xOixoWqRzEb6GyeBB
          source_id: s_rVUUYi5Q8bixb6BEbrMtKa
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百三十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rVUUYi5Q8bixb6BEbrMtKa
            source_type: api_record
            title: 中国历代人物传记资料库：王崇（CBDB 227709）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227709&o=json
            external_identifier: CBDB:227709
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.513Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hfNqr6f1P7uM2hMBq7xoJD
        status: active
        display_name: 王崇
        merged_into_person_id: null
  children:
    - claim:
        id: c_pVuvgFLevvnVhbF4aHidty
        subject_person_id: p_UehS2yfTZaFGBh7uxhHFCE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6TLnA9FdxSmrgfWhM649JW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W-_pGIxDjKCumxPfVDoCYs
          claim_id: c_pVuvgFLevvnVhbF4aHidty
          source_id: s_Qe8SyPVFuTKQy1dyhabfzv
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百三十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Qe8SyPVFuTKQy1dyhabfzv
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 227724）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227724&o=json
            external_identifier: CBDB:227724
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.528Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6TLnA9FdxSmrgfWhM649JW
        status: active
        display_name: 王鑑
        merged_into_person_id: null
    - claim:
        id: c_FJo91YjssiylrJIw9wngGB
        subject_person_id: p_UehS2yfTZaFGBh7uxhHFCE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eW4eTPBHDjMx65PJvabCUM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DQf_eJoQcLM2ycsPZyZVcL
          claim_id: c_FJo91YjssiylrJIw9wngGB
          source_id: s_PohLVM5c7JpNSHE8Lz3a88
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百三十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PohLVM5c7JpNSHE8Lz3a88
            source_type: api_record
            title: 中国历代人物传记资料库：王錦（CBDB 227726）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227726&o=json
            external_identifier: CBDB:227726
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.531Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_eW4eTPBHDjMx65PJvabCUM
        status: active
        display_name: 王錦
        merged_into_person_id: null
    - claim:
        id: c_4TFHVshTSzDnZp7eemQq2U
        subject_person_id: p_UehS2yfTZaFGBh7uxhHFCE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_J8zEtbSsEBDyvRer5K9Mdx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YN66takJq7EaqVon6uNsZj
          claim_id: c_4TFHVshTSzDnZp7eemQq2U
          source_id: s_JpFHQFhf5auqHvJtnBz8ew
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百三十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JpFHQFhf5auqHvJtnBz8ew
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮（CBDB 227723）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227723&o=json
            external_identifier: CBDB:227723
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.526Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_J8zEtbSsEBDyvRer5K9Mdx
        status: active
        display_name: 王鎮
        merged_into_person_id: null
    - claim:
        id: c_rakhC6GOT_NkZ49NZdkir4
        subject_person_id: p_UehS2yfTZaFGBh7uxhHFCE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zi7YPLSJMDibPYaLWtXv9r
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lmHQZh43qZfCi5sDbcXLL6
          claim_id: c_rakhC6GOT_NkZ49NZdkir4
          source_id: s_kK46QBvjiHAk6d2jB2uh29
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百三十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kK46QBvjiHAk6d2jB2uh29
            source_type: api_record
            title: 中国历代人物传记资料库：王銓（CBDB 227725）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227725&o=json
            external_identifier: CBDB:227725
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.529Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_zi7YPLSJMDibPYaLWtXv9r
        status: active
        display_name: 王銓
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_o9Yg-FFJKA7ec6_EVulC92
        subject_person_id: p_2qDFnQGzqiHheeCqmHKnxS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UehS2yfTZaFGBh7uxhHFCE
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6eBg2ZNHCrtaS8i5-_SPmn
          claim_id: c_o9Yg-FFJKA7ec6_EVulC92
          source_id: s_pcdCmbxyuz1C8JPyT62N6k
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百三十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_pcdCmbxyuz1C8JPyT62N6k
            source_type: api_record
            title: 中国历代人物传记资料库：王談（CBDB 227708）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227708&o=json
            external_identifier: CBDB:227708
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.511Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2qDFnQGzqiHheeCqmHKnxS
        status: active
        display_name: 王談
        merged_into_person_id: null
    - claim:
        id: c_uSDxDkIi1B4rwS_AEuLjRC
        subject_person_id: p_XQSWj6Fjzoxw5CkhLWJYJK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_UehS2yfTZaFGBh7uxhHFCE
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K1A_2_g4Wv3dM7wO5H5Vfc
          claim_id: c_uSDxDkIi1B4rwS_AEuLjRC
          source_id: s_wU8GvPA4Px2HixFLEvJ11H
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百三十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wU8GvPA4Px2HixFLEvJ11H
            source_type: api_record
            title: 中国历代人物传记资料库：王頂（CBDB 227707）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227707&o=json
            external_identifier: CBDB:227707
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.510Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_XQSWj6Fjzoxw5CkhLWJYJK
        status: active
        display_name: 王頂
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_hU8fF0nuFa9IJgfGbxEQ8V
        subject_person_id: p_89h4Z952DsmUzHoDEqDXMB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UehS2yfTZaFGBh7uxhHFCE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AMUh3oOsCk4iBWUky_Hi_H
          claim_id: c_hU8fF0nuFa9IJgfGbxEQ8V
          source_id: s_kEDSNcbIpcYpJspbyAqSR8
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207104 王之翰）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kEDSNcbIpcYpJspbyAqSR8
            source_type: api_record
            title: 中国历代人物传记资料库：王之綱（CBDB 227721）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227721&o=json
            external_identifier: CBDB:227721
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_89h4Z952DsmUzHoDEqDXMB
        status: active
        display_name: 王之綱
        merged_into_person_id: null
    - claim:
        id: c_ma9GaG2aSuQvVllGy_4DBv
        subject_person_id: p_CLYNKsxMjYcSw7B4aiXjMt
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UehS2yfTZaFGBh7uxhHFCE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ikcsp4RJKXWu1_4l1BVFYp
          claim_id: c_ma9GaG2aSuQvVllGy_4DBv
          source_id: s_Swz8CDlZcwcaCV_mQ1G-Ph
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207104 王之翰）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Swz8CDlZcwcaCV_mQ1G-Ph
            source_type: api_record
            title: 中国历代人物传记资料库：王之賓（CBDB 227712）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227712&o=json
            external_identifier: CBDB:227712
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CLYNKsxMjYcSw7B4aiXjMt
        status: active
        display_name: 王之賓
        merged_into_person_id: null
    - claim:
        id: c_z9-sLNRID-hjuk6qmLQfYX
        subject_person_id: p_Egi12iC89gN4vcmygRqSDu
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UehS2yfTZaFGBh7uxhHFCE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qbOUJbinQ9aypoGYFzLQ_G
          claim_id: c_z9-sLNRID-hjuk6qmLQfYX
          source_id: s_aRQ3zVNL-JVZGkY-NfHqw4
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207104 王之翰）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_aRQ3zVNL-JVZGkY-NfHqw4
            source_type: api_record
            title: 中国历代人物传记资料库：王之俊（CBDB 227720）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227720&o=json
            external_identifier: CBDB:227720
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Egi12iC89gN4vcmygRqSDu
        status: active
        display_name: 王之俊
        merged_into_person_id: null
    - claim:
        id: c_LCwgEkUXsd-1-QiYoheC8C
        subject_person_id: p_G5x61NsvfMQAvzBmPKJw9K
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UehS2yfTZaFGBh7uxhHFCE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-qmaTKGNumam5C8PU1hoqz
          claim_id: c_LCwgEkUXsd-1-QiYoheC8C
          source_id: s_gXHubR_XCTdA_hbCb8njyj
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207104 王之翰）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gXHubR_XCTdA_hbCb8njyj
            source_type: api_record
            title: 中国历代人物传记资料库：王之臣（CBDB 227713）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227713&o=json
            external_identifier: CBDB:227713
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_G5x61NsvfMQAvzBmPKJw9K
        status: active
        display_name: 王之臣
        merged_into_person_id: null
    - claim:
        id: c_egmg1NZ85Z7oLyW7IBZJHP
        subject_person_id: p_R6mQ37iqzhHKPsuanKKi1Q
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UehS2yfTZaFGBh7uxhHFCE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_emomgSrwRxxmjd84E1bykI
          claim_id: c_egmg1NZ85Z7oLyW7IBZJHP
          source_id: s_36JHtn9EmOR5K2egu-cJoi
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207104 王之翰）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_36JHtn9EmOR5K2egu-cJoi
            source_type: api_record
            title: 中国历代人物传记资料库：王之佐（CBDB 227718）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227718&o=json
            external_identifier: CBDB:227718
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_R6mQ37iqzhHKPsuanKKi1Q
        status: active
        display_name: 王之佐
        merged_into_person_id: null
    - claim:
        id: c_7tY2pgrKqGntOHIEB4bWq6
        subject_person_id: p_TsLpVMLYQQiMWwhB4Xsesx
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_UehS2yfTZaFGBh7uxhHFCE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__evzUIxg56q47WGEqs60X9
          claim_id: c_7tY2pgrKqGntOHIEB4bWq6
          source_id: s_GVY079iB66agAT6S0KxcTB
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207104 王之翰）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GVY079iB66agAT6S0KxcTB
            source_type: api_record
            title: 中国历代人物传记资料库：王之相（CBDB 227715）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227715&o=json
            external_identifier: CBDB:227715
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TsLpVMLYQQiMWwhB4Xsesx
        status: active
        display_name: 王之相
        merged_into_person_id: null
    - claim:
        id: c_e1uf5yYzlzwdAZpemZFiT1
        subject_person_id: p_UehS2yfTZaFGBh7uxhHFCE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nGPUpdu2RVweqwUZHLG6KZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g9_dXjiu-BUWhLeupCINR5
          claim_id: c_e1uf5yYzlzwdAZpemZFiT1
          source_id: s_-M5GbKs-RTpWxNsceKqjvQ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207104 王之翰）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-M5GbKs-RTpWxNsceKqjvQ
            source_type: api_record
            title: 中国历代人物传记资料库：王之卿（CBDB 227714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227714&o=json
            external_identifier: CBDB:227714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nGPUpdu2RVweqwUZHLG6KZ
        status: active
        display_name: 王之卿
        merged_into_person_id: null
    - claim:
        id: c_75YdzrAqivJvyHIJ0Zcxc5
        subject_person_id: p_UehS2yfTZaFGBh7uxhHFCE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pZ7NoUVDv7MBBHg3mAofaZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wgV6Cr82XdhBL2UfxWzGRK
          claim_id: c_75YdzrAqivJvyHIJ0Zcxc5
          source_id: s_N0fe9EBjly586x6biTC84i
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207104 王之翰）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_N0fe9EBjly586x6biTC84i
            source_type: api_record
            title: 中国历代人物传记资料库：王之紀（CBDB 227722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227722&o=json
            external_identifier: CBDB:227722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pZ7NoUVDv7MBBHg3mAofaZ
        status: active
        display_name: 王之紀
        merged_into_person_id: null
    - claim:
        id: c_qA9QFgL-itH2WIQkTJpMJw
        subject_person_id: p_UehS2yfTZaFGBh7uxhHFCE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xWpD9HAvr5QaRKe9kR48Fw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FiddxjnrttEXSQDEK3pgfh
          claim_id: c_qA9QFgL-itH2WIQkTJpMJw
          source_id: s_x1H70BrUsGna9fTdONnYMu
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207104 王之翰）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_x1H70BrUsGna9fTdONnYMu
            source_type: api_record
            title: 中国历代人物传记资料库：王之屏（CBDB 227719）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227719&o=json
            external_identifier: CBDB:227719
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xWpD9HAvr5QaRKe9kR48Fw
        status: active
        display_name: 王之屏
        merged_into_person_id: null
---

# 王之翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之翰 | accepted |
| birth.date | 1557年 | accepted |
| bio.summary | 王之翰（生于1557年），明人物。明清進士進士，籍贯蒙陰，入仕進士，曾任禮部觀政。（中国历代人物传记资料库 CBDB 207104） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hfNqr6f1P7uM2hMBq7xoJD | 王崇 | accepted |
| children | p_6TLnA9FdxSmrgfWhM649JW | 王鑑 | accepted |
| children | p_eW4eTPBHDjMx65PJvabCUM | 王錦 | accepted |
| children | p_J8zEtbSsEBDyvRer5K9Mdx | 王鎮 | accepted |
| children | p_zi7YPLSJMDibPYaLWtXv9r | 王銓 | accepted |
| ancestors | p_2qDFnQGzqiHheeCqmHKnxS | 王談 | accepted |
| ancestors | p_XQSWj6Fjzoxw5CkhLWJYJK | 王頂 | accepted |
| other | p_89h4Z952DsmUzHoDEqDXMB | 王之綱 | accepted |
| other | p_CLYNKsxMjYcSw7B4aiXjMt | 王之賓 | accepted |
| other | p_Egi12iC89gN4vcmygRqSDu | 王之俊 | accepted |
| other | p_G5x61NsvfMQAvzBmPKJw9K | 王之臣 | accepted |
| other | p_R6mQ37iqzhHKPsuanKKi1Q | 王之佐 | accepted |
| other | p_TsLpVMLYQQiMWwhB4Xsesx | 王之相 | accepted |
| other | p_nGPUpdu2RVweqwUZHLG6KZ | 王之卿 | accepted |
| other | p_pZ7NoUVDv7MBBHg3mAofaZ | 王之紀 | accepted |
| other | p_xWpD9HAvr5QaRKe9kR48Fw | 王之屏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇（CBDB 227709）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227709&o=json)
- [中国历代人物传记资料库：王頂（CBDB 227707）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227707&o=json)
- [中国历代人物传记资料库：王鑑（CBDB 227724）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227724&o=json)
- [中国历代人物传记资料库：王錦（CBDB 227726）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227726&o=json)
- [中国历代人物传记资料库：王銓（CBDB 227725）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227725&o=json)
- [中国历代人物传记资料库：王談（CBDB 227708）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227708&o=json)
- [中国历代人物传记资料库：王鎮（CBDB 227723）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227723&o=json)
- [中国历代人物传记资料库：王之賓（CBDB 227712）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227712&o=json)
- [中国历代人物传记资料库：王之臣（CBDB 227713）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227713&o=json)
- [中国历代人物传记资料库：王之綱（CBDB 227721）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227721&o=json)
- [中国历代人物传记资料库：王之翰（CBDB 207104）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207104&o=json)
- [中国历代人物传记资料库：王之紀（CBDB 227722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227722&o=json)
- [中国历代人物传记资料库：王之俊（CBDB 227720）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227720&o=json)
- [中国历代人物传记资料库：王之屏（CBDB 227719）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227719&o=json)
- [中国历代人物传记资料库：王之卿（CBDB 227714）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227714&o=json)
- [中国历代人物传记资料库：王之相（CBDB 227715）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227715&o=json)
- [中国历代人物传记资料库：王之佐（CBDB 227718）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227718&o=json)
