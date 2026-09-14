---
schema: wang-person/v1
id: p_AjJ9D9hYYBcRjzGCjrMcoe
status: active
merged_into: null
display_name: 王汾
revision: 14
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vHf9C4MQgR1HxcTAfFQesM
        subject_person_id: p_AjJ9D9hYYBcRjzGCjrMcoe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_97f7S9kQyNaf3WcStS4eE5
          claim_id: c_vHf9C4MQgR1HxcTAfFQesM
          source_id: s_Px6F8GhPpztGfFpkfsF9JT
          stance: supports
          locator: CBDB:292164
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（292164）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_C9TJY4ZDw7rDzXNMpGG2FR
        subject_person_id: p_AjJ9D9hYYBcRjzGCjrMcoe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汾，明人物。嘉靖十一年進士，籍贯南充。（中国历代人物传记资料库 CBDB 292164）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TAjzYvd6gngbcdTf9NMDj2
          claim_id: c_C9TJY4ZDw7rDzXNMpGG2FR
          source_id: s_Px6F8GhPpztGfFpkfsF9JT
          stance: supports
          locator: CBDB:292164
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source: *a1
      object_person:
        id: p_tJDfPMXaXoCJ7dnxXR4ZsL
        status: active
        display_name: 王繼宗
        merged_into_person_id: null
    - claim:
        id: c_Q7CecAMXwxoPUSxZCPcwJL
        subject_person_id: p_AjJ9D9hYYBcRjzGCjrMcoe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2M46oG3opSCSkLixokFsNf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2NAPVJ7qx0YzpwKXbBrXez
          claim_id: c_Q7CecAMXwxoPUSxZCPcwJL
          source_id: s_WLZVMbEDmhT0dzWW3KQxM5
          stance: supports
          locator: CBDB：兄弟 王繼宗（126879）之父／母 王汾
          quotation: null
          interpretation_note: 由兄弟关系推断：王紹宗 与 王繼宗 为同胞（CBDB 记「弟」），王繼宗 之父／母即 王紹宗 之父／母。
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
        id: c_LTq6vJblb4co0Q9jCHSW-T
        subject_person_id: p_AjJ9D9hYYBcRjzGCjrMcoe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4Z86MWLJQpWEBCrytzEZpa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e95ocAcCa3gycuyGmMP64X
          claim_id: c_LTq6vJblb4co0Q9jCHSW-T
          source_id: s_mU6EUAenrpLLLuXtEIEAPb
          stance: supports
          locator: CBDB：兄弟 王繼宗（126879）之父／母 王汾
          quotation: null
          interpretation_note: 由兄弟关系推断：王尚仁 与 王繼宗 为同胞（CBDB 记「弟」），王繼宗 之父／母即 王尚仁 之父／母。
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
        id: c_5eiV4NoaKuPqVBDxJGuRWq
        subject_person_id: p_AjJ9D9hYYBcRjzGCjrMcoe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AToVU13XqSykLMNRBLKQpq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_spGRScciKaLMuMiegeCr7u
          claim_id: c_5eiV4NoaKuPqVBDxJGuRWq
          source_id: s_kP2fo4gTYAXq-LOSSgbTOL
          stance: supports
          locator: CBDB：兄弟 王繼宗（126879）之父／母 王汾
          quotation: null
          interpretation_note: 由兄弟关系推断：王夔 与 王繼宗 为同胞（CBDB 记「兄」），王繼宗 之父／母即 王夔 之父／母。
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
        id: c_RkX9BvBeQStF3BeRmZNlWf
        subject_person_id: p_AjJ9D9hYYBcRjzGCjrMcoe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BCHGSfrxnNkqPmNBFHsYPx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZyN89xEiMtgHv4Lfz3UJq2
          claim_id: c_RkX9BvBeQStF3BeRmZNlWf
          source_id: s_jQIG6vmbVtf6p6OlKALLRh
          stance: supports
          locator: CBDB：兄弟 王繼宗（126879）之父／母 王汾
          quotation: null
          interpretation_note: 由兄弟关系推断：王纉宗 与 王繼宗 为同胞（CBDB 记「兄」），王繼宗 之父／母即 王纉宗 之父／母。
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
        id: c_fDHtn8NlM7nZZZCoZi9-1k
        subject_person_id: p_AjJ9D9hYYBcRjzGCjrMcoe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_D1myxq8uptkCk4odGdTB6t
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cZzN9n9rbUFdH-FxB0ZEhA
          claim_id: c_fDHtn8NlM7nZZZCoZi9-1k
          source_id: s_CZiNpzPIE95LkmlP9JQdHM
          stance: supports
          locator: CBDB：兄弟 王繼宗（126879）之父／母 王汾
          quotation: null
          interpretation_note: 由兄弟关系推断：王綬宗 与 王繼宗 为同胞（CBDB 记「兄」），王繼宗 之父／母即 王綬宗 之父／母。
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
        id: c_-tlj122DKy8yLM6JKJC5Gu
        subject_person_id: p_AjJ9D9hYYBcRjzGCjrMcoe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DJ2KcaAHzhLQmf8pwZEnfS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-5eetLECbGaW30ukcTvhmp
          claim_id: c_-tlj122DKy8yLM6JKJC5Gu
          source_id: s_OSOarZpHHBujuVAZ0DTLB0
          stance: supports
          locator: CBDB：兄弟 王繼宗（126879）之父／母 王汾
          quotation: null
          interpretation_note: 由兄弟关系推断：王純 与 王繼宗 为同胞（CBDB 记「兄」），王繼宗 之父／母即 王純 之父／母。
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
        id: c_IjW1f0sZqLIv7Dptq_WNZy
        subject_person_id: p_AjJ9D9hYYBcRjzGCjrMcoe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GbbDvLEThjkqyC1yaLEzij
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Cl25wFsMQKn1MnVFtXIjvZ
          claim_id: c_IjW1f0sZqLIv7Dptq_WNZy
          source_id: s_z6ujQBZJGA8ubhv7PUM5lf
          stance: supports
          locator: CBDB：兄弟 王繼宗（126879）之父／母 王汾
          quotation: null
          interpretation_note: 由兄弟关系推断：王續宗 与 王繼宗 为同胞（CBDB 记「兄」），王繼宗 之父／母即 王續宗 之父／母。
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
        id: c_97Tb3Spij2MH-jXqaAv34N
        subject_person_id: p_AjJ9D9hYYBcRjzGCjrMcoe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_c3QBMSakbgtmZbGsPQ1RhX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zeIGA7uiF_H0S3CROfZdDt
          claim_id: c_97Tb3Spij2MH-jXqaAv34N
          source_id: s_2MyT_OuLLGznumKnJT-lw6
          stance: supports
          locator: CBDB：兄弟 王繼宗（126879）之父／母 王汾
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝 与 王繼宗 为同胞（CBDB 记「兄」），王繼宗 之父／母即 王汝 之父／母。
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
        id: c_azPUQ2J-uq9P_goNS-uwLu
        subject_person_id: p_AjJ9D9hYYBcRjzGCjrMcoe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cLD4mAhvyaWxZRC6x29WRs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wXFWJDIERPMH_uQqP9o-0q
          claim_id: c_azPUQ2J-uq9P_goNS-uwLu
          source_id: s_8nolP_bh_aMVi-HM3XyPYL
          stance: supports
          locator: CBDB：兄弟 王繼宗（126879）之父／母 王汾
          quotation: null
          interpretation_note: 由兄弟关系推断：王繹宗 与 王繼宗 为同胞（CBDB 记「兄」），王繼宗 之父／母即 王繹宗 之父／母。
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
        id: c_5F3VBckgsRaSt0RM25boWN
        subject_person_id: p_AjJ9D9hYYBcRjzGCjrMcoe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dUkyQNqse3Vqc3dPCUjSjA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MWWL2atjRx3mo-m4fkDdmb
          claim_id: c_5F3VBckgsRaSt0RM25boWN
          source_id: s_4oWkDQuhXyMxIXVEZMSbLP
          stance: supports
          locator: CBDB：兄弟 王繼宗（126879）之父／母 王汾
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝臯 与 王繼宗 为同胞（CBDB 记「弟」），王繼宗 之父／母即 王汝臯 之父／母。
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
        id: c_pchoF5jkDBni5rIxObmfSn
        subject_person_id: p_AjJ9D9hYYBcRjzGCjrMcoe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hW36uz67xrtkAtWh3HFvYT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7NLhrEsNDQV9Vx94lUml1y
          claim_id: c_pchoF5jkDBni5rIxObmfSn
          source_id: s_BY8LJD9QysnTr3UsdoEevm
          stance: supports
          locator: CBDB：兄弟 王繼宗（126879）之父／母 王汾
          quotation: null
          interpretation_note: 由兄弟关系推断：王道 与 王繼宗 为同胞（CBDB 记「兄」），王繼宗 之父／母即 王道 之父／母。
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
        id: c_XOJlfSVWHjDOTLZYEyeCMd
        subject_person_id: p_AjJ9D9hYYBcRjzGCjrMcoe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ovu25tB4PWCdpNaQy1TznJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kNy8Sg9jveGD8jGJ2X0pyr
          claim_id: c_XOJlfSVWHjDOTLZYEyeCMd
          source_id: s_ze2kOCczYAX41NiKiTj-FD
          stance: supports
          locator: CBDB：兄弟 王繼宗（126879）之父／母 王汾
          quotation: null
          interpretation_note: 由兄弟关系推断：王壃 与 王繼宗 为同胞（CBDB 记「兄」），王繼宗 之父／母即 王壃 之父／母。
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王汾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汾 | accepted |
| bio.summary | 王汾，明人物。嘉靖十一年進士，籍贯南充。（中国历代人物传记资料库 CBDB 292164） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_tJDfPMXaXoCJ7dnxXR4ZsL | 王繼宗 | accepted |
| children | p_2M46oG3opSCSkLixokFsNf | 王紹宗 | accepted |
| children | p_4Z86MWLJQpWEBCrytzEZpa | 王尚仁 | accepted |
| children | p_AToVU13XqSykLMNRBLKQpq | 王夔 | accepted |
| children | p_BCHGSfrxnNkqPmNBFHsYPx | 王纉宗 | accepted |
| children | p_D1myxq8uptkCk4odGdTB6t | 王綬宗 | accepted |
| children | p_DJ2KcaAHzhLQmf8pwZEnfS | 王純 | accepted |
| children | p_GbbDvLEThjkqyC1yaLEzij | 王續宗 | accepted |
| children | p_c3QBMSakbgtmZbGsPQ1RhX | 王汝 | accepted |
| children | p_cLD4mAhvyaWxZRC6x29WRs | 王繹宗 | accepted |
| children | p_dUkyQNqse3Vqc3dPCUjSjA | 王汝臯 | accepted |
| children | p_hW36uz67xrtkAtWh3HFvYT | 王道 | accepted |
| children | p_ovu25tB4PWCdpNaQy1TznJ | 王壃 | accepted |

## 外部来源

- [中国历代人物传记资料库：王純（CBDB 292180）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292180&o=json)
- [中国历代人物传记资料库：王道（CBDB 292179）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292179&o=json)
- [中国历代人物传记资料库：王汾（CBDB 292164）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292164&o=json)
- [中国历代人物传记资料库：王壃（CBDB 292176）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292176&o=json)
- [中国历代人物传记资料库：王夔（CBDB 292178）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292178&o=json)
- [中国历代人物传记资料库：王汝（CBDB 292177）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292177&o=json)
- [中国历代人物传记资料库：王汝臯（CBDB 292170）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292170&o=json)
- [中国历代人物传记资料库：王尚仁（CBDB 292169）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292169&o=json)
- [中国历代人物传记资料库：王紹宗（CBDB 292168）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292168&o=json)
- [中国历代人物传记资料库：王綬宗（CBDB 292175）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292175&o=json)
- [中国历代人物传记资料库：王續宗（CBDB 292174）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292174&o=json)
- [中国历代人物传记资料库：王繹宗（CBDB 292172）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292172&o=json)
- [中国历代人物传记资料库：王纉宗（CBDB 292171）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=292171&o=json)
