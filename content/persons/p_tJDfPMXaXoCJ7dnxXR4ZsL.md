---
schema: wang-person/v1
id: p_tJDfPMXaXoCJ7dnxXR4ZsL
status: active
merged_into: null
display_name: 王繼宗
revision: 16
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3JRVnXURs9pSQ7o4HxXZTJ
        subject_person_id: p_tJDfPMXaXoCJ7dnxXR4ZsL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9p8Rr2P4AbURVF76VTyF8M
          claim_id: c_3JRVnXURs9pSQ7o4HxXZTJ
          source_id: s_YsbC6C8mF8xkNBHSQrY4UZ
          stance: supports
          locator: CBDB:126879
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126879）
          source: &a1
            id: s_YsbC6C8mF8xkNBHSQrY4UZ
            source_type: api_record
            title: 中国历代人物传记资料库：王繼宗（CBDB 126879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126879&o=json
            external_identifier: CBDB:126879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.280Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qx8hgS6eM6BNcbQLABfV1y
        subject_person_id: p_tJDfPMXaXoCJ7dnxXR4ZsL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼宗，明人物。明清進士進士，籍贯南充，入仕進士，曾任兵科都給事中、給事中、知縣。（中国历代人物传记资料库 CBDB 126879）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JE2pqMASYSRCQDhdS-VmBY
          claim_id: c_qx8hgS6eM6BNcbQLABfV1y
          source_id: s_YsbC6C8mF8xkNBHSQrY4UZ
          stance: supports
          locator: CBDB:126879
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Mt_XqczmVMYAX5KF5zHGoK
        subject_person_id: p_AjJ9D9hYYBcRjzGCjrMcoe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tJDfPMXaXoCJ7dnxXR4ZsL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C3HaATzfJIi_VepC06SUwu
          claim_id: c_Mt_XqczmVMYAX5KF5zHGoK
          source_id: s_Px6F8GhPpztGfFpkfsF9JT
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Px6F8GhPpztGfFpkfsF9JT
            source_type: api_record
            title: 中国历代人物传记资料库：王汾（CBDB 292164）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292164&o=json
            external_identifier: CBDB:292164
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.387Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AjJ9D9hYYBcRjzGCjrMcoe
        status: active
        display_name: 王汾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_BvilT6gaxhA14fOujyGGAC
        subject_person_id: p_BXRoqqkhRQ3HBK5WyJrxYd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tJDfPMXaXoCJ7dnxXR4ZsL
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Tclk1bFyDxbYyGcuTkNsa7
          claim_id: c_BvilT6gaxhA14fOujyGGAC
          source_id: s_DJSWDhJcEvGvUHqLs1N6f7
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DJSWDhJcEvGvUHqLs1N6f7
            source_type: api_record
            title: 中国历代人物传记资料库：王榦（CBDB 292161）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292161&o=json
            external_identifier: CBDB:292161
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.386Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BXRoqqkhRQ3HBK5WyJrxYd
        status: active
        display_name: 王榦
        merged_into_person_id: null
    - claim:
        id: c_6qrlBnK6n1HiKsvAJ0ZNhl
        subject_person_id: p_kqLfyJiRBGdWEfBAbF353H
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tJDfPMXaXoCJ7dnxXR4ZsL
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ODRSoX5aLx_XjLdM5XuIlr
          claim_id: c_6qrlBnK6n1HiKsvAJ0ZNhl
          source_id: s_h4N9wZxMWvsrPNG6zP1Ncf
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第二十八名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_h4N9wZxMWvsrPNG6zP1Ncf
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 292163）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292163&o=json
            external_identifier: CBDB:292163
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.387Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kqLfyJiRBGdWEfBAbF353H
        status: active
        display_name: 王儒
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_X-_7GKZay6JG9fVpYmuBpr
        subject_person_id: p_2M46oG3opSCSkLixokFsNf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tJDfPMXaXoCJ7dnxXR4ZsL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DSBzJZ5OvCyCGShsvKv8o6
          claim_id: c_X-_7GKZay6JG9fVpYmuBpr
          source_id: s_WLZVMbEDmhT0dzWW3KQxM5
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126879 王繼宗）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_WLZVMbEDmhT0dzWW3KQxM5
            source_type: api_record
            title: 中国历代人物传记资料库：王紹宗（CBDB 292168）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292168&o=json
            external_identifier: CBDB:292168
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2M46oG3opSCSkLixokFsNf
        status: active
        display_name: 王紹宗
        merged_into_person_id: null
    - claim:
        id: c_mKzPM2_HihHMYDuUO0ut5E
        subject_person_id: p_4Z86MWLJQpWEBCrytzEZpa
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tJDfPMXaXoCJ7dnxXR4ZsL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UbmoxPzVqnSAGJiWe3P9J4
          claim_id: c_mKzPM2_HihHMYDuUO0ut5E
          source_id: s_mU6EUAenrpLLLuXtEIEAPb
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126879 王繼宗）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_mU6EUAenrpLLLuXtEIEAPb
            source_type: api_record
            title: 中国历代人物传记资料库：王尚仁（CBDB 292169）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292169&o=json
            external_identifier: CBDB:292169
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4Z86MWLJQpWEBCrytzEZpa
        status: active
        display_name: 王尚仁
        merged_into_person_id: null
    - claim:
        id: c_tUeKmDsdPjIs1akO05t4Eh
        subject_person_id: p_AToVU13XqSykLMNRBLKQpq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tJDfPMXaXoCJ7dnxXR4ZsL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fn0ZD3y3bzTN6mqHGLeRcx
          claim_id: c_tUeKmDsdPjIs1akO05t4Eh
          source_id: s_kP2fo4gTYAXq-LOSSgbTOL
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126879 王繼宗）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kP2fo4gTYAXq-LOSSgbTOL
            source_type: api_record
            title: 中国历代人物传记资料库：王夔（CBDB 292178）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292178&o=json
            external_identifier: CBDB:292178
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AToVU13XqSykLMNRBLKQpq
        status: active
        display_name: 王夔
        merged_into_person_id: null
    - claim:
        id: c_VZXIMi1uUcMjUAKGNPfNsO
        subject_person_id: p_BCHGSfrxnNkqPmNBFHsYPx
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tJDfPMXaXoCJ7dnxXR4ZsL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9YNlmHNpdodOZZ5N3CGB0t
          claim_id: c_VZXIMi1uUcMjUAKGNPfNsO
          source_id: s_jQIG6vmbVtf6p6OlKALLRh
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126879 王繼宗）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jQIG6vmbVtf6p6OlKALLRh
            source_type: api_record
            title: 中国历代人物传记资料库：王纉宗（CBDB 292171）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292171&o=json
            external_identifier: CBDB:292171
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BCHGSfrxnNkqPmNBFHsYPx
        status: active
        display_name: 王纉宗
        merged_into_person_id: null
    - claim:
        id: c_R9SRr5QKrHN-O3R6S1dRaE
        subject_person_id: p_D1myxq8uptkCk4odGdTB6t
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tJDfPMXaXoCJ7dnxXR4ZsL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JXyZB6QTR2l3gZlnGZFWzm
          claim_id: c_R9SRr5QKrHN-O3R6S1dRaE
          source_id: s_CZiNpzPIE95LkmlP9JQdHM
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126879 王繼宗）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_CZiNpzPIE95LkmlP9JQdHM
            source_type: api_record
            title: 中国历代人物传记资料库：王綬宗（CBDB 292175）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292175&o=json
            external_identifier: CBDB:292175
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_D1myxq8uptkCk4odGdTB6t
        status: active
        display_name: 王綬宗
        merged_into_person_id: null
    - claim:
        id: c_1VDAXUuIm3tCDRHnvdbzZb
        subject_person_id: p_DJ2KcaAHzhLQmf8pwZEnfS
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tJDfPMXaXoCJ7dnxXR4ZsL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KIpqaEgB5Rpwv_QT1-0i_s
          claim_id: c_1VDAXUuIm3tCDRHnvdbzZb
          source_id: s_OSOarZpHHBujuVAZ0DTLB0
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126879 王繼宗）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OSOarZpHHBujuVAZ0DTLB0
            source_type: api_record
            title: 中国历代人物传记资料库：王純（CBDB 292180）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292180&o=json
            external_identifier: CBDB:292180
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DJ2KcaAHzhLQmf8pwZEnfS
        status: active
        display_name: 王純
        merged_into_person_id: null
    - claim:
        id: c_fTNOVQ7cuX8ClTVYSQSlqj
        subject_person_id: p_GbbDvLEThjkqyC1yaLEzij
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tJDfPMXaXoCJ7dnxXR4ZsL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fFDS7BMlsfjgyH_ubZoF1c
          claim_id: c_fTNOVQ7cuX8ClTVYSQSlqj
          source_id: s_z6ujQBZJGA8ubhv7PUM5lf
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126879 王繼宗）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_z6ujQBZJGA8ubhv7PUM5lf
            source_type: api_record
            title: 中国历代人物传记资料库：王續宗（CBDB 292174）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292174&o=json
            external_identifier: CBDB:292174
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GbbDvLEThjkqyC1yaLEzij
        status: active
        display_name: 王續宗
        merged_into_person_id: null
    - claim:
        id: c_I7-dxGrFk6r1AmTi9DX7yx
        subject_person_id: p_c3QBMSakbgtmZbGsPQ1RhX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tJDfPMXaXoCJ7dnxXR4ZsL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LKxRC3oxra46y5OzYT0dPH
          claim_id: c_I7-dxGrFk6r1AmTi9DX7yx
          source_id: s_2MyT_OuLLGznumKnJT-lw6
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126879 王繼宗）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2MyT_OuLLGznumKnJT-lw6
            source_type: api_record
            title: 中国历代人物传记资料库：王汝（CBDB 292177）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292177&o=json
            external_identifier: CBDB:292177
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_c3QBMSakbgtmZbGsPQ1RhX
        status: active
        display_name: 王汝
        merged_into_person_id: null
    - claim:
        id: c_8fEw6PTNe8RD9CvdA7NeHN
        subject_person_id: p_cLD4mAhvyaWxZRC6x29WRs
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tJDfPMXaXoCJ7dnxXR4ZsL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MLI6CfIzIjy_YhJCVymN80
          claim_id: c_8fEw6PTNe8RD9CvdA7NeHN
          source_id: s_8nolP_bh_aMVi-HM3XyPYL
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126879 王繼宗）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8nolP_bh_aMVi-HM3XyPYL
            source_type: api_record
            title: 中国历代人物传记资料库：王繹宗（CBDB 292172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292172&o=json
            external_identifier: CBDB:292172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cLD4mAhvyaWxZRC6x29WRs
        status: active
        display_name: 王繹宗
        merged_into_person_id: null
    - claim:
        id: c_a5RRWpDIpvljxWix32tXSH
        subject_person_id: p_dUkyQNqse3Vqc3dPCUjSjA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tJDfPMXaXoCJ7dnxXR4ZsL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KOlLk1lICeBrsr3OyVGmnq
          claim_id: c_a5RRWpDIpvljxWix32tXSH
          source_id: s_4oWkDQuhXyMxIXVEZMSbLP
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126879 王繼宗）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_4oWkDQuhXyMxIXVEZMSbLP
            source_type: api_record
            title: 中国历代人物传记资料库：王汝臯（CBDB 292170）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292170&o=json
            external_identifier: CBDB:292170
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dUkyQNqse3Vqc3dPCUjSjA
        status: active
        display_name: 王汝臯
        merged_into_person_id: null
    - claim:
        id: c_0tfk2C8wOB78tbDZKkVpyx
        subject_person_id: p_hW36uz67xrtkAtWh3HFvYT
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tJDfPMXaXoCJ7dnxXR4ZsL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kXrIOTSYh-un0n8W_wpyGR
          claim_id: c_0tfk2C8wOB78tbDZKkVpyx
          source_id: s_BY8LJD9QysnTr3UsdoEevm
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126879 王繼宗）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_BY8LJD9QysnTr3UsdoEevm
            source_type: api_record
            title: 中国历代人物传记资料库：王道（CBDB 292179）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292179&o=json
            external_identifier: CBDB:292179
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hW36uz67xrtkAtWh3HFvYT
        status: active
        display_name: 王道
        merged_into_person_id: null
    - claim:
        id: c_WnlN5RrMj2lq55Q4QMsNoj
        subject_person_id: p_ovu25tB4PWCdpNaQy1TznJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tJDfPMXaXoCJ7dnxXR4ZsL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oOID4bvuLRpuBn0SskLGnp
          claim_id: c_WnlN5RrMj2lq55Q4QMsNoj
          source_id: s_ze2kOCczYAX41NiKiTj-FD
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126879 王繼宗）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ze2kOCczYAX41NiKiTj-FD
            source_type: api_record
            title: 中国历代人物传记资料库：王壃（CBDB 292176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292176&o=json
            external_identifier: CBDB:292176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ovu25tB4PWCdpNaQy1TznJ
        status: active
        display_name: 王壃
        merged_into_person_id: null
---

# 王繼宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼宗 | accepted |
| bio.summary | 王繼宗，明人物。明清進士進士，籍贯南充，入仕進士，曾任兵科都給事中、給事中、知縣。（中国历代人物传记资料库 CBDB 126879） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AjJ9D9hYYBcRjzGCjrMcoe | 王汾 | accepted |
| ancestors | p_BXRoqqkhRQ3HBK5WyJrxYd | 王榦 | accepted |
| ancestors | p_kqLfyJiRBGdWEfBAbF353H | 王儒 | accepted |
| other | p_2M46oG3opSCSkLixokFsNf | 王紹宗 | accepted |
| other | p_4Z86MWLJQpWEBCrytzEZpa | 王尚仁 | accepted |
| other | p_AToVU13XqSykLMNRBLKQpq | 王夔 | accepted |
| other | p_BCHGSfrxnNkqPmNBFHsYPx | 王纉宗 | accepted |
| other | p_D1myxq8uptkCk4odGdTB6t | 王綬宗 | accepted |
| other | p_DJ2KcaAHzhLQmf8pwZEnfS | 王純 | accepted |
| other | p_GbbDvLEThjkqyC1yaLEzij | 王續宗 | accepted |
| other | p_c3QBMSakbgtmZbGsPQ1RhX | 王汝 | accepted |
| other | p_cLD4mAhvyaWxZRC6x29WRs | 王繹宗 | accepted |
| other | p_dUkyQNqse3Vqc3dPCUjSjA | 王汝臯 | accepted |
| other | p_hW36uz67xrtkAtWh3HFvYT | 王道 | accepted |
| other | p_ovu25tB4PWCdpNaQy1TznJ | 王壃 | accepted |

## 外部来源

- [中国历代人物传记资料库：王純（CBDB 292180）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292180&o=json)
- [中国历代人物传记资料库：王道（CBDB 292179）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292179&o=json)
- [中国历代人物传记资料库：王汾（CBDB 292164）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292164&o=json)
- [中国历代人物传记资料库：王榦（CBDB 292161）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292161&o=json)
- [中国历代人物传记资料库：王繼宗（CBDB 126879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126879&o=json)
- [中国历代人物传记资料库：王壃（CBDB 292176）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292176&o=json)
- [中国历代人物传记资料库：王夔（CBDB 292178）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292178&o=json)
- [中国历代人物传记资料库：王儒（CBDB 292163）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292163&o=json)
- [中国历代人物传记资料库：王汝（CBDB 292177）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292177&o=json)
- [中国历代人物传记资料库：王汝臯（CBDB 292170）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292170&o=json)
- [中国历代人物传记资料库：王尚仁（CBDB 292169）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292169&o=json)
- [中国历代人物传记资料库：王紹宗（CBDB 292168）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292168&o=json)
- [中国历代人物传记资料库：王綬宗（CBDB 292175）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292175&o=json)
- [中国历代人物传记资料库：王續宗（CBDB 292174）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292174&o=json)
- [中国历代人物传记资料库：王繹宗（CBDB 292172）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292172&o=json)
- [中国历代人物传记资料库：王纉宗（CBDB 292171）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292171&o=json)
