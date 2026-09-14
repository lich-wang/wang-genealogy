---
schema: wang-person/v1
id: p_3K8YMQuna5CRk3d72KDoG1
status: active
merged_into: null
display_name: 王淑民
cbdb_id: 205869
revision: 15
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QPMKWTBurLUgTN8xfXKJ1Y
        subject_person_id: p_3K8YMQuna5CRk3d72KDoG1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑民（生于1537年），明人物。明清進士進士，籍贯合江，入仕進士。（中国历代人物传记资料库 CBDB 205869）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_DPH-JyzNGhLG49NoyHDntz
          claim_id: c_QPMKWTBurLUgTN8xfXKJ1Y
          source_id: s_D6tC55dLNukBU896dwBvpw
          stance: supports
          locator: CBDB:205869
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_D6tC55dLNukBU896dwBvpw
            source_type: api_record
            title: 中国历代人物传记资料库：王淑民（CBDB 205869）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205869&o=json
            external_identifier: CBDB:205869
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_h1PhUcJzczLUowgsPD6iTN
        subject_person_id: p_3K8YMQuna5CRk3d72KDoG1
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1537年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1537-01-01
            latest: 1537-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZbvTLc8MXdfv6AB35TvPha
          claim_id: c_h1PhUcJzczLUowgsPD6iTN
          source_id: s_D6tC55dLNukBU896dwBvpw
          stance: supports
          locator: CBDB:205869
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1537
          source:
            id: s_D6tC55dLNukBU896dwBvpw
            source_type: api_record
            title: 中国历代人物传记资料库：王淑民（CBDB 205869）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205869&o=json
            external_identifier: CBDB:205869
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8k3eg6K7hDXNBbeamj7EQf
        subject_person_id: p_3K8YMQuna5CRk3d72KDoG1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淑民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZGbzVaQXqoGEexRcFR5mE5
          claim_id: c_8k3eg6K7hDXNBbeamj7EQf
          source_id: s_D6tC55dLNukBU896dwBvpw
          stance: supports
          locator: CBDB:205869
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1537
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_b6LbboeZZ_ypk7OMxSKPy3
        subject_person_id: p_MdJHKADyMQk6VMaKNEyXK2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3K8YMQuna5CRk3d72KDoG1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JfYLaylmtfhpA9MXJNsxVV
          claim_id: c_b6LbboeZZ_ypk7OMxSKPy3
          source_id: s_Pm1DFSHsEaGPKCyweGVWKa
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百零四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Pm1DFSHsEaGPKCyweGVWKa
            source_type: api_record
            title: 中国历代人物传记资料库：王棟（CBDB 209976）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209976&o=json
            external_identifier: CBDB:209976
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.990Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MdJHKADyMQk6VMaKNEyXK2
        status: active
        display_name: 王棟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_9tV6oWMTr91oOM7ei-1zsg
        subject_person_id: p_MemBevEtxLnjXYkLG35pym
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3K8YMQuna5CRk3d72KDoG1
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_23Dq8Lo0lDOqY8N9ZlHle6
          claim_id: c_9tV6oWMTr91oOM7ei-1zsg
          source_id: s_tS8WbRbCSoGBQ55FGhWx3P
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百零四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_tS8WbRbCSoGBQ55FGhWx3P
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 209974）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209974&o=json
            external_identifier: CBDB:209974
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.989Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MemBevEtxLnjXYkLG35pym
        status: active
        display_name: 王信
        merged_into_person_id: null
    - claim:
        id: c_udkgLhtSxoUa9YNgpFoIQw
        subject_person_id: p_RNdtC5tC4dGoNM8UX7rM1Q
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3K8YMQuna5CRk3d72KDoG1
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4dTUrbx0hRKly90YRhM-gz
          claim_id: c_udkgLhtSxoUa9YNgpFoIQw
          source_id: s_xpNPmNC8pFyJ8rBLqqstfj
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百零四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xpNPmNC8pFyJ8rBLqqstfj
            source_type: api_record
            title: 中国历代人物传记资料库：王文廣（CBDB 209975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209975&o=json
            external_identifier: CBDB:209975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_RNdtC5tC4dGoNM8UX7rM1Q
        status: active
        display_name: 王文廣
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_txJT0Ki1JTUfFMb3ntqSdK
        subject_person_id: p_2a5b2EncYngS1EeFET9iYo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_3K8YMQuna5CRk3d72KDoG1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mGFftAtz7GFBVrGuUGZ-6p
          claim_id: c_txJT0Ki1JTUfFMb3ntqSdK
          source_id: s_oc8z6jb1vc3mnujEJoEfhl
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205869 王淑民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oc8z6jb1vc3mnujEJoEfhl
            source_type: api_record
            title: 中国历代人物传记资料库：王治民（CBDB 209984）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209984&o=json
            external_identifier: CBDB:209984
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2a5b2EncYngS1EeFET9iYo
        status: active
        display_name: 王治民
        merged_into_person_id: null
    - claim:
        id: c_9ARvKUStQc9Y1kG6UJRjuz
        subject_person_id: p_3K8YMQuna5CRk3d72KDoG1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_4vdSvSD5BUu5uYcGsx6QVM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TkW7MtVf2pRKOm3KX7vdsR
          claim_id: c_9ARvKUStQc9Y1kG6UJRjuz
          source_id: s_n-_myCbE-gKcafyPH73jpp
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205869 王淑民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_n-_myCbE-gKcafyPH73jpp
            source_type: api_record
            title: 中国历代人物传记资料库：王潤民（CBDB 209991）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209991&o=json
            external_identifier: CBDB:209991
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4vdSvSD5BUu5uYcGsx6QVM
        status: active
        display_name: 王潤民
        merged_into_person_id: null
    - claim:
        id: c_Y2D5cRqxkQI02a_IwDFHef
        subject_person_id: p_3K8YMQuna5CRk3d72KDoG1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_9FnMbrqY96eB9jhu5soBKp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TvjR_qpIBhqb4jRohGc4_N
          claim_id: c_Y2D5cRqxkQI02a_IwDFHef
          source_id: s_-olYzWxisAfozf9nG1z5OT
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205869 王淑民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-olYzWxisAfozf9nG1z5OT
            source_type: api_record
            title: 中国历代人物传记资料库：王澤民（CBDB 209980）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209980&o=json
            external_identifier: CBDB:209980
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9FnMbrqY96eB9jhu5soBKp
        status: active
        display_name: 王澤民
        merged_into_person_id: null
    - claim:
        id: c_xmMYJjy3nhfcRK3bsMo9cH
        subject_person_id: p_3K8YMQuna5CRk3d72KDoG1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_A241Q19C1D7aArnNcNR92N
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ofe6n7xej5429i9V7qEiX2
          claim_id: c_xmMYJjy3nhfcRK3bsMo9cH
          source_id: s_y5T4RsPoBoLPWiUC_WEoV1
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205869 王淑民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_y5T4RsPoBoLPWiUC_WEoV1
            source_type: api_record
            title: 中国历代人物传记资料库：王添民（CBDB 209979）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209979&o=json
            external_identifier: CBDB:209979
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_A241Q19C1D7aArnNcNR92N
        status: active
        display_name: 王添民
        merged_into_person_id: null
    - claim:
        id: c_Ps2z8vRO2x5LhrEm1QhT0m
        subject_person_id: p_3K8YMQuna5CRk3d72KDoG1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DnZ4fAo8LTtYb3mHpB6mKy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cDZLuf9x17FD0cS-6-Cf4x
          claim_id: c_Ps2z8vRO2x5LhrEm1QhT0m
          source_id: s_taSKqws-wRv9zexakH1CsA
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205869 王淑民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_taSKqws-wRv9zexakH1CsA
            source_type: api_record
            title: 中国历代人物传记资料库：王洽民（CBDB 209987）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209987&o=json
            external_identifier: CBDB:209987
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DnZ4fAo8LTtYb3mHpB6mKy
        status: active
        display_name: 王洽民
        merged_into_person_id: null
    - claim:
        id: c_avHDAQwSIG5dBjVRMKY3wx
        subject_person_id: p_3K8YMQuna5CRk3d72KDoG1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_EgF6159zTeoxFCZpxCx9LH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ku6Mn-El9tawf9HgDKOLJ9
          claim_id: c_avHDAQwSIG5dBjVRMKY3wx
          source_id: s_WBg9tpiyx6Ki3Y0haeoqQB
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205869 王淑民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_WBg9tpiyx6Ki3Y0haeoqQB
            source_type: api_record
            title: 中国历代人物传记资料库：王漸民（CBDB 209990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209990&o=json
            external_identifier: CBDB:209990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EgF6159zTeoxFCZpxCx9LH
        status: active
        display_name: 王漸民
        merged_into_person_id: null
    - claim:
        id: c_UyD689E0Ew7zHOqlEPVlwu
        subject_person_id: p_3K8YMQuna5CRk3d72KDoG1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GRZw2nCbPbC8htfhCoBGGw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XDEUjz-V8_8tV8xLSmp-g5
          claim_id: c_UyD689E0Ew7zHOqlEPVlwu
          source_id: s_PXPGeVp4pjMuODlM0PGnLI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205869 王淑民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_PXPGeVp4pjMuODlM0PGnLI
            source_type: api_record
            title: 中国历代人物传记资料库：王新民（CBDB 209983）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209983&o=json
            external_identifier: CBDB:209983
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GRZw2nCbPbC8htfhCoBGGw
        status: active
        display_name: 王新民
        merged_into_person_id: null
    - claim:
        id: c_7xPEk1y-eOJEhIz_v1JCha
        subject_person_id: p_3K8YMQuna5CRk3d72KDoG1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_PLdr4HzfLKbdZ815EbDVvb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lqgCkgV8N5TT5ms1KDXi4q
          claim_id: c_7xPEk1y-eOJEhIz_v1JCha
          source_id: s_GBbJQGUDDsFQitplGaufzn
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205869 王淑民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GBbJQGUDDsFQitplGaufzn
            source_type: api_record
            title: 中国历代人物传记资料库：王淶民（CBDB 209986）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209986&o=json
            external_identifier: CBDB:209986
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PLdr4HzfLKbdZ815EbDVvb
        status: active
        display_name: 王淶民
        merged_into_person_id: null
    - claim:
        id: c_AQYDmlcdoz6IiePnjUMQlg
        subject_person_id: p_3K8YMQuna5CRk3d72KDoG1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_PmtdNELQSzzM7UiLsJ1HEf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_egYOVVhiIW0i1Ppu-QQ5Im
          claim_id: c_AQYDmlcdoz6IiePnjUMQlg
          source_id: s_j8QMY5_M7WTurFIuTcjsFa
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205869 王淑民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_j8QMY5_M7WTurFIuTcjsFa
            source_type: api_record
            title: 中国历代人物传记资料库：王溥民（CBDB 209994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209994&o=json
            external_identifier: CBDB:209994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PmtdNELQSzzM7UiLsJ1HEf
        status: active
        display_name: 王溥民
        merged_into_person_id: null
    - claim:
        id: c_v3Jh_lZ4o4yn-EV5zGV_GS
        subject_person_id: p_3K8YMQuna5CRk3d72KDoG1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RN9ocucA86xJHPbc7HAmg6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZP39ZE_v9d81anHWziE3Gs
          claim_id: c_v3Jh_lZ4o4yn-EV5zGV_GS
          source_id: s_OW248VDGMOZbgqJZ5DLpIw
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205869 王淑民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OW248VDGMOZbgqJZ5DLpIw
            source_type: api_record
            title: 中国历代人物传记资料库：王濟民（CBDB 209989）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209989&o=json
            external_identifier: CBDB:209989
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RN9ocucA86xJHPbc7HAmg6
        status: active
        display_name: 王濟民
        merged_into_person_id: null
    - claim:
        id: c_2pxTz6FBH4_NPhyooFtjJ9
        subject_person_id: p_3K8YMQuna5CRk3d72KDoG1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Uy6H9AXTAspCpioXp5nn27
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SLmaYuHQEh8GLjD6tlyN0_
          claim_id: c_2pxTz6FBH4_NPhyooFtjJ9
          source_id: s_e5mLgSb4eOaDFktWZTmSc4
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205869 王淑民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_e5mLgSb4eOaDFktWZTmSc4
            source_type: api_record
            title: 中国历代人物传记资料库：王淳民（CBDB 209985）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209985&o=json
            external_identifier: CBDB:209985
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Uy6H9AXTAspCpioXp5nn27
        status: active
        display_name: 王淳民
        merged_into_person_id: null
    - claim:
        id: c_XfoEB7SUyPkrsW-a9Be-Fc
        subject_person_id: p_3K8YMQuna5CRk3d72KDoG1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wZUHKXVL2uGTGTcwh5LhvR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WTqa1lxu2Yjl2ZKJHJnXqb
          claim_id: c_XfoEB7SUyPkrsW-a9Be-Fc
          source_id: s_qqs5T-GaxLbBWS8VB5WPaT
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205869 王淑民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qqs5T-GaxLbBWS8VB5WPaT
            source_type: api_record
            title: 中国历代人物传记资料库：王俊民（CBDB 209982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209982&o=json
            external_identifier: CBDB:209982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wZUHKXVL2uGTGTcwh5LhvR
        status: active
        display_name: 王俊民
        merged_into_person_id: null
---

# 王淑民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王淑民（生于1537年），明人物。明清進士進士，籍贯合江，入仕進士。（中国历代人物传记资料库 CBDB 205869） | accepted |
| birth.date | 1537年 | accepted |
| name.primary | 王淑民 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MdJHKADyMQk6VMaKNEyXK2 | 王棟 | accepted |
| ancestors | p_MemBevEtxLnjXYkLG35pym | 王信 | accepted |
| ancestors | p_RNdtC5tC4dGoNM8UX7rM1Q | 王文廣 | accepted |
| other | p_2a5b2EncYngS1EeFET9iYo | 王治民 | accepted |
| other | p_4vdSvSD5BUu5uYcGsx6QVM | 王潤民 | accepted |
| other | p_9FnMbrqY96eB9jhu5soBKp | 王澤民 | accepted |
| other | p_A241Q19C1D7aArnNcNR92N | 王添民 | accepted |
| other | p_DnZ4fAo8LTtYb3mHpB6mKy | 王洽民 | accepted |
| other | p_EgF6159zTeoxFCZpxCx9LH | 王漸民 | accepted |
| other | p_GRZw2nCbPbC8htfhCoBGGw | 王新民 | accepted |
| other | p_PLdr4HzfLKbdZ815EbDVvb | 王淶民 | accepted |
| other | p_PmtdNELQSzzM7UiLsJ1HEf | 王溥民 | accepted |
| other | p_RN9ocucA86xJHPbc7HAmg6 | 王濟民 | accepted |
| other | p_Uy6H9AXTAspCpioXp5nn27 | 王淳民 | accepted |
| other | p_wZUHKXVL2uGTGTcwh5LhvR | 王俊民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淳民（CBDB 209985）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209985&o=json)
- [中国历代人物传记资料库：王棟（CBDB 209976）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209976&o=json)
- [中国历代人物传记资料库：王濟民（CBDB 209989）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209989&o=json)
- [中国历代人物传记资料库：王漸民（CBDB 209990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209990&o=json)
- [中国历代人物传记资料库：王俊民（CBDB 209982）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209982&o=json)
- [中国历代人物传记资料库：王淶民（CBDB 209986）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209986&o=json)
- [中国历代人物传记资料库：王溥民（CBDB 209994）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209994&o=json)
- [中国历代人物传记资料库：王洽民（CBDB 209987）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209987&o=json)
- [中国历代人物传记资料库：王潤民（CBDB 209991）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209991&o=json)
- [中国历代人物传记资料库：王淑民（CBDB 205869）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205869&o=json)
- [中国历代人物传记资料库：王添民（CBDB 209979）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209979&o=json)
- [中国历代人物传记资料库：王文廣（CBDB 209975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209975&o=json)
- [中国历代人物传记资料库：王新民（CBDB 209983）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209983&o=json)
- [中国历代人物传记资料库：王信（CBDB 209974）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209974&o=json)
- [中国历代人物传记资料库：王澤民（CBDB 209980）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209980&o=json)
- [中国历代人物传记资料库：王治民（CBDB 209984）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209984&o=json)
