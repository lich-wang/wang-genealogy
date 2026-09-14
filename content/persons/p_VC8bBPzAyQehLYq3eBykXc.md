---
schema: wang-person/v1
id: p_VC8bBPzAyQehLYq3eBykXc
status: active
merged_into: null
display_name: 王時儉
cbdb_id: 203083
revision: 13
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8DWZDriAtHi7P2YmtZjLD1
        subject_person_id: p_VC8bBPzAyQehLYq3eBykXc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時儉（生于1497年），明人物。嘉靖十七年進士，籍贯晉江，入仕進士。（中国历代人物传记资料库 CBDB 203083）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_YW7YfZObm2bqCAiK7ZV1Ds
          claim_id: c_8DWZDriAtHi7P2YmtZjLD1
          source_id: s_s85LLtikxEzvQqhZB5Md9X
          stance: supports
          locator: CBDB:203083
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_s85LLtikxEzvQqhZB5Md9X
            source_type: api_record
            title: 中国历代人物传记资料库：王時儉（CBDB 203083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203083&o=json
            external_identifier: CBDB:203083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QECMnwXKkjk75PPC784htK
        subject_person_id: p_VC8bBPzAyQehLYq3eBykXc
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1497年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1497-01-01
            latest: 1497-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VgBKxMJV3FwRJ4zPPj65Ke
          claim_id: c_QECMnwXKkjk75PPC784htK
          source_id: s_s85LLtikxEzvQqhZB5Md9X
          stance: supports
          locator: CBDB:203083
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1497
          source:
            id: s_s85LLtikxEzvQqhZB5Md9X
            source_type: api_record
            title: 中国历代人物传记资料库：王時儉（CBDB 203083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203083&o=json
            external_identifier: CBDB:203083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_LMCwjH5uWAWThHrhSo3Jgz
        subject_person_id: p_VC8bBPzAyQehLYq3eBykXc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時儉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NpDfDPyTUUEkp9FR3rpHj2
          claim_id: c_LMCwjH5uWAWThHrhSo3Jgz
          source_id: s_s85LLtikxEzvQqhZB5Md9X
          stance: supports
          locator: CBDB:203083
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1497
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_URqAOpyRYOCgONjQ4538Js
        subject_person_id: p_rLGPWGvpfkyHQHmKKEMECW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VC8bBPzAyQehLYq3eBykXc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rtyQa2s94J13v7lqq8S2M_
          claim_id: c_URqAOpyRYOCgONjQ4538Js
          source_id: s_y5BosZXGh6a3zPCcNM7ZwN
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第二甲第七十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_y5BosZXGh6a3zPCcNM7ZwN
            source_type: api_record
            title: 中国历代人物传记资料库：王縉（CBDB 299500）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299500&o=json
            external_identifier: CBDB:299500
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.606Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_rLGPWGvpfkyHQHmKKEMECW
        status: active
        display_name: 王縉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_d7nk7LJ4HPCw7OFasMwsxz
        subject_person_id: p_JaCmStE8FQ4hMkB4kTj6HJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_VC8bBPzAyQehLYq3eBykXc
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AK2RPTAE-G9k81jM2L6JBj
          claim_id: c_d7nk7LJ4HPCw7OFasMwsxz
          source_id: s_ybszx2v3qFbYTM22Cm2skq
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第二甲第七十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ybszx2v3qFbYTM22Cm2skq
            source_type: api_record
            title: 中国历代人物传记资料库：王宗道（CBDB 299498）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299498&o=json
            external_identifier: CBDB:299498
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.604Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JaCmStE8FQ4hMkB4kTj6HJ
        status: active
        display_name: 王宗道
        merged_into_person_id: null
    - claim:
        id: c_y4-sJNIwFI7zR_Wc5KWX_E
        subject_person_id: p_Pu2x9TKf86JgQ9g7MASE5D
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_VC8bBPzAyQehLYq3eBykXc
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l6AfHvdF0ndAqvV1VWYq45
          claim_id: c_y4-sJNIwFI7zR_Wc5KWX_E
          source_id: s_29iEQ8GXjzhkszQfjf5tCj
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第二甲第七十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_29iEQ8GXjzhkszQfjf5tCj
            source_type: api_record
            title: 中国历代人物传记资料库：王繼（CBDB 299499）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299499&o=json
            external_identifier: CBDB:299499
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.605Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Pu2x9TKf86JgQ9g7MASE5D
        status: active
        display_name: 王繼
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_7zAiJZe8TuaiQW5vIfKZ7P
        subject_person_id: p_9R7BBNjfoUDjgA34nWBRmk
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_VC8bBPzAyQehLYq3eBykXc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Un-BtXhyWUAWyekNuTXn5-
          claim_id: c_7zAiJZe8TuaiQW5vIfKZ7P
          source_id: s_bMOryc3CimX9AHyxVQVm-S
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203083 王時儉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_bMOryc3CimX9AHyxVQVm-S
            source_type: api_record
            title: 中国历代人物传记资料库：王時顯（CBDB 299513）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299513&o=json
            external_identifier: CBDB:299513
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9R7BBNjfoUDjgA34nWBRmk
        status: active
        display_name: 王時顯
        merged_into_person_id: null
    - claim:
        id: c_ngXhnXUXgU783JMxETHwPF
        subject_person_id: p_GnavAdUvXuZBGBDBAB9uzm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_VC8bBPzAyQehLYq3eBykXc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6JuyJ21VAs-4gF2E9w_I4p
          claim_id: c_ngXhnXUXgU783JMxETHwPF
          source_id: s_pVVc33hfyf7VFnNrmVZP7r
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203083 王時儉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_pVVc33hfyf7VFnNrmVZP7r
            source_type: api_record
            title: 中国历代人物传记资料库：王時揚（CBDB 299505）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299505&o=json
            external_identifier: CBDB:299505
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GnavAdUvXuZBGBDBAB9uzm
        status: active
        display_name: 王時揚
        merged_into_person_id: null
    - claim:
        id: c_g7O1mbIrDuLX_h34EnOBqu
        subject_person_id: p_P2RiNto8sumSvUL2j6eniw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_VC8bBPzAyQehLYq3eBykXc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sGzFkEdE1SFffkvlQkDjxy
          claim_id: c_g7O1mbIrDuLX_h34EnOBqu
          source_id: s_1zFA5ROv1xc4FSfUcDvVVG
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203083 王時儉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1zFA5ROv1xc4FSfUcDvVVG
            source_type: api_record
            title: 中国历代人物传记资料库：王時溫（CBDB 299506）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299506&o=json
            external_identifier: CBDB:299506
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_P2RiNto8sumSvUL2j6eniw
        status: active
        display_name: 王時溫
        merged_into_person_id: null
    - claim:
        id: c_62YiWn9FIeCwWbXEo9-Gj9
        subject_person_id: p_PGNhZa28GKyhzSRZbDwrrN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_VC8bBPzAyQehLYq3eBykXc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_17p3vzilp4H_1EczLJDyjk
          claim_id: c_62YiWn9FIeCwWbXEo9-Gj9
          source_id: s_eiMVW7zgVVtzlw0UQcwYOQ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203083 王時儉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_eiMVW7zgVVtzlw0UQcwYOQ
            source_type: api_record
            title: 中国历代人物传记资料库：王時良（CBDB 299508）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299508&o=json
            external_identifier: CBDB:299508
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PGNhZa28GKyhzSRZbDwrrN
        status: active
        display_name: 王時良
        merged_into_person_id: null
    - claim:
        id: c_x0Ca_lMrsOH48FKWcMtvhR
        subject_person_id: p_VC8bBPzAyQehLYq3eBykXc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eQoSzNAhnqAfC964i7cVHM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B7bzJAR1XQWmuZ8LUGfqFr
          claim_id: c_x0Ca_lMrsOH48FKWcMtvhR
          source_id: s_2ni_uG4GYe-HVU8tpAY7Cw
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203083 王時儉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2ni_uG4GYe-HVU8tpAY7Cw
            source_type: api_record
            title: 中国历代人物传记资料库：王時恭（CBDB 299509）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299509&o=json
            external_identifier: CBDB:299509
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eQoSzNAhnqAfC964i7cVHM
        status: active
        display_name: 王時恭
        merged_into_person_id: null
    - claim:
        id: c_Tb-ZPO7DGkkySy73bQP21_
        subject_person_id: p_VC8bBPzAyQehLYq3eBykXc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jkjMpCaRnAqGkKH8mdtFRA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G3ZlEadXxQPxalgH7n_etn
          claim_id: c_Tb-ZPO7DGkkySy73bQP21_
          source_id: s_zvKJHlknCwVKGQ5Pn9ZcKj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203083 王時儉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_zvKJHlknCwVKGQ5Pn9ZcKj
            source_type: api_record
            title: 中国历代人物传记资料库：王時達（CBDB 299512）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299512&o=json
            external_identifier: CBDB:299512
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jkjMpCaRnAqGkKH8mdtFRA
        status: active
        display_name: 王時達
        merged_into_person_id: null
    - claim:
        id: c_gXim07RX8nXGwaQm-GYN12
        subject_person_id: p_VC8bBPzAyQehLYq3eBykXc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_m4sfaHG41AJkXB9tRtk3VD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3q5kXBBSKxUNwBFzTg6r7A
          claim_id: c_gXim07RX8nXGwaQm-GYN12
          source_id: s_3eDf8TWuewoKqpuj5wqUoy
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203083 王時儉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3eDf8TWuewoKqpuj5wqUoy
            source_type: api_record
            title: 中国历代人物传记资料库：王時瞻（CBDB 299510）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299510&o=json
            external_identifier: CBDB:299510
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_m4sfaHG41AJkXB9tRtk3VD
        status: active
        display_name: 王時瞻
        merged_into_person_id: null
    - claim:
        id: c_TrWWT7K7F4uOz0S8NTrTCb
        subject_person_id: p_VC8bBPzAyQehLYq3eBykXc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oWDXUPyv9KmoJt18dhD1fe
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hnmGG49zJV3HYgdMduW9w-
          claim_id: c_TrWWT7K7F4uOz0S8NTrTCb
          source_id: s_Ri9YqwnpP2ZzvM4lQwlkLL
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203083 王時儉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Ri9YqwnpP2ZzvM4lQwlkLL
            source_type: api_record
            title: 中国历代人物传记资料库：王時讓（CBDB 299511）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299511&o=json
            external_identifier: CBDB:299511
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oWDXUPyv9KmoJt18dhD1fe
        status: active
        display_name: 王時讓
        merged_into_person_id: null
    - claim:
        id: c_MZX_WsPl4p59paZSYtiik5
        subject_person_id: p_VC8bBPzAyQehLYq3eBykXc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ybJRugWHLcWcvTB254ssJw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MmlBrBeFcE2NWE9O7ijWa5
          claim_id: c_MZX_WsPl4p59paZSYtiik5
          source_id: s_TZRg860dOl2REiXYn1hcJw
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203083 王時儉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_TZRg860dOl2REiXYn1hcJw
            source_type: api_record
            title: 中国历代人物传记资料库：王時通（CBDB 299507）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299507&o=json
            external_identifier: CBDB:299507
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ybJRugWHLcWcvTB254ssJw
        status: active
        display_name: 王時通
        merged_into_person_id: null
---

# 王時儉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王時儉（生于1497年），明人物。嘉靖十七年進士，籍贯晉江，入仕進士。（中国历代人物传记资料库 CBDB 203083） | accepted |
| birth.date | 1497年 | accepted |
| name.primary | 王時儉 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rLGPWGvpfkyHQHmKKEMECW | 王縉 | accepted |
| ancestors | p_JaCmStE8FQ4hMkB4kTj6HJ | 王宗道 | accepted |
| ancestors | p_Pu2x9TKf86JgQ9g7MASE5D | 王繼 | accepted |
| other | p_9R7BBNjfoUDjgA34nWBRmk | 王時顯 | accepted |
| other | p_GnavAdUvXuZBGBDBAB9uzm | 王時揚 | accepted |
| other | p_P2RiNto8sumSvUL2j6eniw | 王時溫 | accepted |
| other | p_PGNhZa28GKyhzSRZbDwrrN | 王時良 | accepted |
| other | p_eQoSzNAhnqAfC964i7cVHM | 王時恭 | accepted |
| other | p_jkjMpCaRnAqGkKH8mdtFRA | 王時達 | accepted |
| other | p_m4sfaHG41AJkXB9tRtk3VD | 王時瞻 | accepted |
| other | p_oWDXUPyv9KmoJt18dhD1fe | 王時讓 | accepted |
| other | p_ybJRugWHLcWcvTB254ssJw | 王時通 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繼（CBDB 299499）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299499&o=json)
- [中国历代人物传记资料库：王縉（CBDB 299500）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299500&o=json)
- [中国历代人物传记资料库：王時達（CBDB 299512）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299512&o=json)
- [中国历代人物传记资料库：王時恭（CBDB 299509）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299509&o=json)
- [中国历代人物传记资料库：王時儉（CBDB 203083）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203083&o=json)
- [中国历代人物传记资料库：王時良（CBDB 299508）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299508&o=json)
- [中国历代人物传记资料库：王時讓（CBDB 299511）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299511&o=json)
- [中国历代人物传记资料库：王時通（CBDB 299507）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299507&o=json)
- [中国历代人物传记资料库：王時溫（CBDB 299506）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299506&o=json)
- [中国历代人物传记资料库：王時顯（CBDB 299513）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299513&o=json)
- [中国历代人物传记资料库：王時揚（CBDB 299505）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299505&o=json)
- [中国历代人物传记资料库：王時瞻（CBDB 299510）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299510&o=json)
- [中国历代人物传记资料库：王宗道（CBDB 299498）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=299498&o=json)
