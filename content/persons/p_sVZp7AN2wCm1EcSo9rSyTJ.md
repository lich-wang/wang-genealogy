---
schema: wang-person/v1
id: p_sVZp7AN2wCm1EcSo9rSyTJ
status: active
merged_into: null
display_name: 王健
revision: 14
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eVZFtgW5PNdKdz1poTBuDK
        subject_person_id: p_sVZp7AN2wCm1EcSo9rSyTJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王健
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dfT1eyEf9MsGNTVJBU8Fyc
          claim_id: c_eVZFtgW5PNdKdz1poTBuDK
          source_id: s_BCyRfsShG9QL8nbBorzPZv
          stance: supports
          locator: CBDB:203037
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203037）
          source: &a1
            id: s_BCyRfsShG9QL8nbBorzPZv
            source_type: api_record
            title: 中国历代人物传记资料库：王健（CBDB 203037）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203037&o=json
            external_identifier: CBDB:203037
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.773Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ZJk6TqpSKqPTWyEQfrSoah
        subject_person_id: p_sVZp7AN2wCm1EcSo9rSyTJ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1502年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vQgo12QSuHFG453L5aAjXC
          claim_id: c_ZJk6TqpSKqPTWyEQfrSoah
          source_id: s_BCyRfsShG9QL8nbBorzPZv
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
        id: c_3JBHrXAdNRjRnbp2Je983K
        subject_person_id: p_sVZp7AN2wCm1EcSo9rSyTJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王健（生于1502年），明人物。明清進士進士，籍贯永嘉，入仕進士。（中国历代人物传记资料库 CBDB 203037）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tklSrUTulp1TOBnDchIFyT
          claim_id: c_3JBHrXAdNRjRnbp2Je983K
          source_id: s_BCyRfsShG9QL8nbBorzPZv
          stance: supports
          locator: CBDB:203037
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__ywE885zfnmlbWUYrniV6z
        subject_person_id: p_1v36CPdP8tsG1X5DfhzMf4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sVZp7AN2wCm1EcSo9rSyTJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AM-P3C9Z1T52-9gexZ7Xer
          claim_id: c__ywE885zfnmlbWUYrniV6z
          source_id: s_FJtEgs9bbiRiw48hNDodxR
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第二甲第十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FJtEgs9bbiRiw48hNDodxR
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 298814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298814&o=json
            external_identifier: CBDB:298814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.595Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1v36CPdP8tsG1X5DfhzMf4
        status: active
        display_name: 王瓚
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_xcEemeS7hSG6CgAGYSrEkY
        subject_person_id: p_GK7aGSmHeJ7FK9HzqsWEuZ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sVZp7AN2wCm1EcSo9rSyTJ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0qrjhIZpjlOYWOJxtK8U6u
          claim_id: c_xcEemeS7hSG6CgAGYSrEkY
          source_id: s_yM4LiZJR6bBCNfFyKudQSQ
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第二甲第十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yM4LiZJR6bBCNfFyKudQSQ
            source_type: api_record
            title: 中国历代人物传记资料库：王文燠（CBDB 298811）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298811&o=json
            external_identifier: CBDB:298811
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.594Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GK7aGSmHeJ7FK9HzqsWEuZ
        status: active
        display_name: 王文燠
        merged_into_person_id: null
    - claim:
        id: c_A5eeE9BYz0NACSe8XDUgHH
        subject_person_id: p_yJm6Y76Tnv3eH4UjkYYFQE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_sVZp7AN2wCm1EcSo9rSyTJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_meQsI7kL-aejITcos8GR8P
          claim_id: c_A5eeE9BYz0NACSe8XDUgHH
          source_id: s_Z4P4vdwVj1CpN67uLmVbws
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第二甲第十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Z4P4vdwVj1CpN67uLmVbws
            source_type: api_record
            title: 中国历代人物传记资料库：王祚（CBDB 298812）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298812&o=json
            external_identifier: CBDB:298812
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.594Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_yJm6Y76Tnv3eH4UjkYYFQE
        status: active
        display_name: 王祚
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_gwg1As-W-7L75NjjALTGTg
        subject_person_id: p_8pyUGDMUqETtZkePgMzuVT
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sVZp7AN2wCm1EcSo9rSyTJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Co1JFqA0pbka-U_E71g018
          claim_id: c_gwg1As-W-7L75NjjALTGTg
          source_id: s_kOUA6JSdSR3LPkg_19X-Cd
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203037 王健）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kOUA6JSdSR3LPkg_19X-Cd
            source_type: api_record
            title: 中国历代人物传记资料库：王傅（CBDB 298821）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298821&o=json
            external_identifier: CBDB:298821
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8pyUGDMUqETtZkePgMzuVT
        status: active
        display_name: 王傅
        merged_into_person_id: null
    - claim:
        id: c_FJgD5YhWQmPQOGhPE2-WFb
        subject_person_id: p_DCTL2KdbqC55Qvd9udxpGV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sVZp7AN2wCm1EcSo9rSyTJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r7fCKTKPiOCm15WJl8wHRp
          claim_id: c_FJgD5YhWQmPQOGhPE2-WFb
          source_id: s_6kOIqOBOzIwa6iPAct1lQh
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203037 王健）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6kOIqOBOzIwa6iPAct1lQh
            source_type: api_record
            title: 中国历代人物传记资料库：王僿（CBDB 298817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298817&o=json
            external_identifier: CBDB:298817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DCTL2KdbqC55Qvd9udxpGV
        status: active
        display_name: 王僿
        merged_into_person_id: null
    - claim:
        id: c_YLWSPIwXIg_5umNrsHqrD_
        subject_person_id: p_ENcVm1Xc9hsauEptkENJPS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sVZp7AN2wCm1EcSo9rSyTJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ebxwEvOHi1XOmOTeI_70RP
          claim_id: c_YLWSPIwXIg_5umNrsHqrD_
          source_id: s_hZ5gbOZZ0Zm1FKPE3VUWE1
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203037 王健）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hZ5gbOZZ0Zm1FKPE3VUWE1
            source_type: api_record
            title: 中国历代人物传记资料库：王備（CBDB 298820）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298820&o=json
            external_identifier: CBDB:298820
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ENcVm1Xc9hsauEptkENJPS
        status: active
        display_name: 王備
        merged_into_person_id: null
    - claim:
        id: c_-3QvDtRpYXcpSZfGmMRS1z
        subject_person_id: p_EYJr83fN6aXrMNRiFcSTF3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sVZp7AN2wCm1EcSo9rSyTJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lrzbAgOzFZnKsu4TsYUrsW
          claim_id: c_-3QvDtRpYXcpSZfGmMRS1z
          source_id: s_DuX4LcV8i0RWSr-IUmofgr
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203037 王健）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_DuX4LcV8i0RWSr-IUmofgr
            source_type: api_record
            title: 中国历代人物传记资料库：王倖（CBDB 298826）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298826&o=json
            external_identifier: CBDB:298826
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EYJr83fN6aXrMNRiFcSTF3
        status: active
        display_name: 王倖
        merged_into_person_id: null
    - claim:
        id: c_qISQJl29JUlQqHMzkS8G5I
        subject_person_id: p_Ky9HmtkWbmCLQKLiK4XwgP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sVZp7AN2wCm1EcSo9rSyTJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uYEsTl_92nGPaArGy9D1Cr
          claim_id: c_qISQJl29JUlQqHMzkS8G5I
          source_id: s_Nrpm0zV0gBwq5cnRJjuFvi
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203037 王健）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Nrpm0zV0gBwq5cnRJjuFvi
            source_type: api_record
            title: 中国历代人物传记资料库：王儯（CBDB 298822）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298822&o=json
            external_identifier: CBDB:298822
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ky9HmtkWbmCLQKLiK4XwgP
        status: active
        display_name: 王儯
        merged_into_person_id: null
    - claim:
        id: c_t9djoJ_1UzVpWj8oDOb9J1
        subject_person_id: p_QE4D5w4qGuBkMD37cTA1Pi
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sVZp7AN2wCm1EcSo9rSyTJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jD4VIGGW1-Jq1EjLEXQF3E
          claim_id: c_t9djoJ_1UzVpWj8oDOb9J1
          source_id: s_BIU0ZOccC8OsznPJkqw0Wa
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203037 王健）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_BIU0ZOccC8OsznPJkqw0Wa
            source_type: api_record
            title: 中国历代人物传记资料库：王偶（CBDB 298818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298818&o=json
            external_identifier: CBDB:298818
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QE4D5w4qGuBkMD37cTA1Pi
        status: active
        display_name: 王偶
        merged_into_person_id: null
    - claim:
        id: c_ixtGYZnj4pATlb5A3JqMYw
        subject_person_id: p_UaHT2ezxNJi4QPQ7dPMc26
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sVZp7AN2wCm1EcSo9rSyTJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TrhL9r220Pbuhvj06dXsRJ
          claim_id: c_ixtGYZnj4pATlb5A3JqMYw
          source_id: s_UNVPx8xJbrgWmEwlsvB_is
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203037 王健）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_UNVPx8xJbrgWmEwlsvB_is
            source_type: api_record
            title: 中国历代人物传记资料库：王儌（CBDB 298823）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298823&o=json
            external_identifier: CBDB:298823
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UaHT2ezxNJi4QPQ7dPMc26
        status: active
        display_name: 王儌
        merged_into_person_id: null
    - claim:
        id: c_2_BOVdfdo4mMAjQ9Tv0r64
        subject_person_id: p_WTHnYizj7FG4VTeGe9h9Rv
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sVZp7AN2wCm1EcSo9rSyTJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n2qZwvQqQD0NtdeTWIvO2h
          claim_id: c_2_BOVdfdo4mMAjQ9Tv0r64
          source_id: s_8YkDop3iXZ-cGcV7ZIcuFq
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203037 王健）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8YkDop3iXZ-cGcV7ZIcuFq
            source_type: api_record
            title: 中国历代人物传记资料库：王僑（CBDB 298819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298819&o=json
            external_identifier: CBDB:298819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WTHnYizj7FG4VTeGe9h9Rv
        status: active
        display_name: 王僑
        merged_into_person_id: null
    - claim:
        id: c_S8DL4VfWCN9OCIysRHyi4Y
        subject_person_id: p_Zio9CvRTuTX6rm19G8kKZP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sVZp7AN2wCm1EcSo9rSyTJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1lPs_3I_GFDPm56hdGYy5K
          claim_id: c_S8DL4VfWCN9OCIysRHyi4Y
          source_id: s_0Ni4g4V0mC23vwYNCiU5l7
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203037 王健）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0Ni4g4V0mC23vwYNCiU5l7
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 298827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298827&o=json
            external_identifier: CBDB:298827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Zio9CvRTuTX6rm19G8kKZP
        status: active
        display_name: 王佐
        merged_into_person_id: null
    - claim:
        id: c_Jn-M-vRzSHeOg_2xm4gK2W
        subject_person_id: p_r6hCv1GK56pMnx7zLTbGLW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sVZp7AN2wCm1EcSo9rSyTJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Iju5m2udSxHmY-g778ydzk
          claim_id: c_Jn-M-vRzSHeOg_2xm4gK2W
          source_id: s_KpRASkFWoHHRO1z0M1qdhx
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203037 王健）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_KpRASkFWoHHRO1z0M1qdhx
            source_type: api_record
            title: 中国历代人物传记资料库：王侹（CBDB 298825）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298825&o=json
            external_identifier: CBDB:298825
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_r6hCv1GK56pMnx7zLTbGLW
        status: active
        display_name: 王侹
        merged_into_person_id: null
---

# 王健

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王健 | accepted |
| birth.date | 1502年 | accepted |
| bio.summary | 王健（生于1502年），明人物。明清進士進士，籍贯永嘉，入仕進士。（中国历代人物传记资料库 CBDB 203037） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1v36CPdP8tsG1X5DfhzMf4 | 王瓚 | accepted |
| ancestors | p_GK7aGSmHeJ7FK9HzqsWEuZ | 王文燠 | accepted |
| ancestors | p_yJm6Y76Tnv3eH4UjkYYFQE | 王祚 | accepted |
| other | p_8pyUGDMUqETtZkePgMzuVT | 王傅 | accepted |
| other | p_DCTL2KdbqC55Qvd9udxpGV | 王僿 | accepted |
| other | p_ENcVm1Xc9hsauEptkENJPS | 王備 | accepted |
| other | p_EYJr83fN6aXrMNRiFcSTF3 | 王倖 | accepted |
| other | p_Ky9HmtkWbmCLQKLiK4XwgP | 王儯 | accepted |
| other | p_QE4D5w4qGuBkMD37cTA1Pi | 王偶 | accepted |
| other | p_UaHT2ezxNJi4QPQ7dPMc26 | 王儌 | accepted |
| other | p_WTHnYizj7FG4VTeGe9h9Rv | 王僑 | accepted |
| other | p_Zio9CvRTuTX6rm19G8kKZP | 王佐 | accepted |
| other | p_r6hCv1GK56pMnx7zLTbGLW | 王侹 | accepted |

## 外部来源

- [中国历代人物传记资料库：王備（CBDB 298820）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298820&o=json)
- [中国历代人物传记资料库：王傅（CBDB 298821）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298821&o=json)
- [中国历代人物传记资料库：王健（CBDB 203037）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203037&o=json)
- [中国历代人物传记资料库：王儌（CBDB 298823）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298823&o=json)
- [中国历代人物传记资料库：王偶（CBDB 298818）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298818&o=json)
- [中国历代人物传记资料库：王僑（CBDB 298819）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298819&o=json)
- [中国历代人物传记资料库：王僿（CBDB 298817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298817&o=json)
- [中国历代人物传记资料库：王儯（CBDB 298822）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298822&o=json)
- [中国历代人物传记资料库：王侹（CBDB 298825）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298825&o=json)
- [中国历代人物传记资料库：王文燠（CBDB 298811）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298811&o=json)
- [中国历代人物传记资料库：王倖（CBDB 298826）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298826&o=json)
- [中国历代人物传记资料库：王瓚（CBDB 298814）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298814&o=json)
- [中国历代人物传记资料库：王佐（CBDB 298827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298827&o=json)
- [中国历代人物传记资料库：王祚（CBDB 298812）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298812&o=json)
