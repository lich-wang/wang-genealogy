---
schema: wang-person/v1
id: p_DpuSp4mmLYMfmUMioXctjR
status: active
merged_into: null
display_name: 王堯封
revision: 16
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qowioZXvNLnZcFvnjDDffK
        subject_person_id: p_DpuSp4mmLYMfmUMioXctjR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堯封
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Qw3MCQGuJRUJ6Zf5CHTsLQ
          claim_id: c_qowioZXvNLnZcFvnjDDffK
          source_id: s_uixiEQGafMsgEK7QifZFvn
          stance: supports
          locator: CBDB:126717
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126717）
          source: &a1
            id: s_uixiEQGafMsgEK7QifZFvn
            source_type: api_record
            title: 中国历代人物传记资料库：王堯封（CBDB 126717）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126717&o=json
            external_identifier: CBDB:126717
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.151Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6qMHnL8wmxhFczYk6j43vm
        subject_person_id: p_DpuSp4mmLYMfmUMioXctjR
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1543年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mNmoPQibuDyLgGeSh4VuUY
          claim_id: c_6qMHnL8wmxhFczYk6j43vm
          source_id: s_uixiEQGafMsgEK7QifZFvn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_HG2Mw3Eq5dvRD1mg1JZJPR
        subject_person_id: p_DpuSp4mmLYMfmUMioXctjR
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1613年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_41Tm43FPgmkBiJnitN8PfS
          claim_id: c_HG2Mw3Eq5dvRD1mg1JZJPR
          source_id: s_uixiEQGafMsgEK7QifZFvn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U4zMbC26CdzVsQii3ixzsA
        subject_person_id: p_DpuSp4mmLYMfmUMioXctjR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堯封（1543年—1613年），明人物。明清進士進士，籍贯金壇，入仕進士，曾任知府。（中国历代人物传记资料库 CBDB 126717）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_65oQ7kp2ATxkaOTmnqz74B
          claim_id: c_U4zMbC26CdzVsQii3ixzsA
          source_id: s_uixiEQGafMsgEK7QifZFvn
          stance: supports
          locator: CBDB:126717
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yMq7gU5uT_OzSZoheAJkUP
        subject_person_id: p_oruQD3pLHzNQ8AvU3GVazK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DpuSp4mmLYMfmUMioXctjR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MCWDkn1BAdGQXi7v0JU_27
          claim_id: c_yMq7gU5uT_OzSZoheAJkUP
          source_id: s_dip9sog27EWtnAMgMLoxRS
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第二甲第六十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dip9sog27EWtnAMgMLoxRS
            source_type: api_record
            title: 中国历代人物传记资料库：王維熊（CBDB 222809）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222809&o=json
            external_identifier: CBDB:222809
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.392Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_oruQD3pLHzNQ8AvU3GVazK
        status: active
        display_name: 王維熊
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_N3FzE8E0J-6n27A8gBulpj
        subject_person_id: p_aewufbD64G6Qk8r5aHNdhe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DpuSp4mmLYMfmUMioXctjR
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ys-jYOFMV1zYBq9DExUkw3
          claim_id: c_N3FzE8E0J-6n27A8gBulpj
          source_id: s_N13F8FSUcxHs1MGFnPWZKn
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第二甲第六十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_N13F8FSUcxHs1MGFnPWZKn
            source_type: api_record
            title: 中国历代人物传记资料库：王瀚（CBDB 222807）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222807&o=json
            external_identifier: CBDB:222807
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.391Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aewufbD64G6Qk8r5aHNdhe
        status: active
        display_name: 王瀚
        merged_into_person_id: null
    - claim:
        id: c_495c8qXsJ6JJnZn6XJMGDG
        subject_person_id: p_inPFV8Tvc2PR92pWnYK5AT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DpuSp4mmLYMfmUMioXctjR
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vUdxqzcr_iX6qqTYxg4ldc
          claim_id: c_495c8qXsJ6JJnZn6XJMGDG
          source_id: s_v3KjvDPd1y8ZB5sxnWkn5T
          stance: supports
          locator: 萬曆十一年進士登科錄:一卷，第二甲第六十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_v3KjvDPd1y8ZB5sxnWkn5T
            source_type: api_record
            title: 中国历代人物传记资料库：王㮣（CBDB 222808）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222808&o=json
            external_identifier: CBDB:222808
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.392Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_inPFV8Tvc2PR92pWnYK5AT
        status: active
        display_name: 王㮣
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_l1RyJ0UR8w5pl0aAi1SU2J
        subject_person_id: p_1veF7VdqFLD1R864GCoBzD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DpuSp4mmLYMfmUMioXctjR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__13jX0NnTdJbeHQqxw-78u
          claim_id: c_l1RyJ0UR8w5pl0aAi1SU2J
          source_id: s__GhAWUXaKU5Ow2NdXVXQoK
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126717 王堯封）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__GhAWUXaKU5Ow2NdXVXQoK
            source_type: api_record
            title: 中国历代人物传记资料库：王思道（CBDB 222813）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222813&o=json
            external_identifier: CBDB:222813
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1veF7VdqFLD1R864GCoBzD
        status: active
        display_name: 王思道
        merged_into_person_id: null
    - claim:
        id: c_kEF8cr9zNscjB1VF88oWU3
        subject_person_id: p_35Lcsnh3TGHhfz59sQBgQ4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DpuSp4mmLYMfmUMioXctjR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XHZReQTguj8mGdLH9uTXVZ
          claim_id: c_kEF8cr9zNscjB1VF88oWU3
          source_id: s_VulNBV7PgVTUkn1YOZu1qr
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126717 王堯封）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VulNBV7PgVTUkn1YOZu1qr
            source_type: api_record
            title: 中国历代人物传记资料库：王坊（CBDB 222814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222814&o=json
            external_identifier: CBDB:222814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_35Lcsnh3TGHhfz59sQBgQ4
        status: active
        display_name: 王坊
        merged_into_person_id: null
    - claim:
        id: c_Nzhep4o9XcQE2aHGwDeFJY
        subject_person_id: p_43gLfFZDJkTnCqgKcveznd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DpuSp4mmLYMfmUMioXctjR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_07RfjhChZ6wQPtA9ql1QyE
          claim_id: c_Nzhep4o9XcQE2aHGwDeFJY
          source_id: s_rm-AfN4BiEhkgmUJiXBqtA
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126717 王堯封）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_rm-AfN4BiEhkgmUJiXBqtA
            source_type: api_record
            title: 中国历代人物传记资料库：王思聰（CBDB 222818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222818&o=json
            external_identifier: CBDB:222818
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_43gLfFZDJkTnCqgKcveznd
        status: active
        display_name: 王思聰
        merged_into_person_id: null
    - claim:
        id: c_R1OD_pdm-y-76htEOwYhWi
        subject_person_id: p_7rbnTG1Lxb1Nu3UW8SrCL4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DpuSp4mmLYMfmUMioXctjR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lQqeU0ToPTpax7dk685NPv
          claim_id: c_R1OD_pdm-y-76htEOwYhWi
          source_id: s_YRCzwi7tbVx2viwNELoCw3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126717 王堯封）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_YRCzwi7tbVx2viwNELoCw3
            source_type: api_record
            title: 中国历代人物传记资料库：王堯甸（CBDB 222823）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222823&o=json
            external_identifier: CBDB:222823
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7rbnTG1Lxb1Nu3UW8SrCL4
        status: active
        display_name: 王堯甸
        merged_into_person_id: null
    - claim:
        id: c_0riz7iJ3cXDqPB77iC5v6V
        subject_person_id: p_DpuSp4mmLYMfmUMioXctjR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Fv4xGzQELfdfoLScmzCEhq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GGxbfbJhTjvBJylxIdIPRv
          claim_id: c_0riz7iJ3cXDqPB77iC5v6V
          source_id: s_e1znalecXyExCpwSHlt7sp
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126717 王堯封）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_e1znalecXyExCpwSHlt7sp
            source_type: api_record
            title: 中国历代人物传记资料库：王元坿（CBDB 222824）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222824&o=json
            external_identifier: CBDB:222824
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Fv4xGzQELfdfoLScmzCEhq
        status: active
        display_name: 王元坿
        merged_into_person_id: null
    - claim:
        id: c_BgG1oMWSNLmlBdNmGyYFU3
        subject_person_id: p_DpuSp4mmLYMfmUMioXctjR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_KLU9Psur1AsU89H8q3MRAb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NQ3fHJAY87QbjOPABiHCeJ
          claim_id: c_BgG1oMWSNLmlBdNmGyYFU3
          source_id: s_OEEbj4EgdaXio76Pwl9fNk
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126717 王堯封）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OEEbj4EgdaXio76Pwl9fNk
            source_type: api_record
            title: 中国历代人物传记资料库：王啟疆（CBDB 222819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222819&o=json
            external_identifier: CBDB:222819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KLU9Psur1AsU89H8q3MRAb
        status: active
        display_name: 王啟疆
        merged_into_person_id: null
    - claim:
        id: c_bX-rlW57MakRU-O2P8FimJ
        subject_person_id: p_DpuSp4mmLYMfmUMioXctjR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Z5KpoCpX2Pjq1iKHAdBCQx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lNLdAOkwoHYQY0xMgr2KD3
          claim_id: c_bX-rlW57MakRU-O2P8FimJ
          source_id: s_tDtK8tycxZ5NHpjlBCGHOY
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126717 王堯封）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_tDtK8tycxZ5NHpjlBCGHOY
            source_type: api_record
            title: 中国历代人物传记资料库：王肯堂（CBDB 222822）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222822&o=json
            external_identifier: CBDB:222822
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Z5KpoCpX2Pjq1iKHAdBCQx
        status: active
        display_name: 王肯堂
        merged_into_person_id: null
    - claim:
        id: c_BDZjCjYuOicIUPA8nCK7A3
        subject_person_id: p_DpuSp4mmLYMfmUMioXctjR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_r4sAd9PLc2f12uwSYcuCCC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oMxM7VGMAg_snGkLHntQAW
          claim_id: c_BDZjCjYuOicIUPA8nCK7A3
          source_id: s_T5_cNbOSifgwxvh5plPcLu
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126717 王堯封）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_T5_cNbOSifgwxvh5plPcLu
            source_type: api_record
            title: 中国历代人物传记资料库：王堯臣（CBDB 222820）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222820&o=json
            external_identifier: CBDB:222820
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_r4sAd9PLc2f12uwSYcuCCC
        status: active
        display_name: 王堯臣
        merged_into_person_id: null
    - claim:
        id: c_5WVxG_DCkNqaAOnA_TX3pS
        subject_person_id: p_DpuSp4mmLYMfmUMioXctjR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rx146yfAJAttd9S4hWxx2n
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_StyWv2V5PPvP2UgyF6lN6W
          claim_id: c_5WVxG_DCkNqaAOnA_TX3pS
          source_id: s_syx7O2FMDArUwhvlwxylX3
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126717 王堯封）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_syx7O2FMDArUwhvlwxylX3
            source_type: api_record
            title: 中国历代人物传记资料库：王堅（CBDB 222817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222817&o=json
            external_identifier: CBDB:222817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rx146yfAJAttd9S4hWxx2n
        status: active
        display_name: 王堅
        merged_into_person_id: null
    - claim:
        id: c_DPrBzdmFIYCB6DMOTfbsFU
        subject_person_id: p_DpuSp4mmLYMfmUMioXctjR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_vHoxdq9TDRoy7D4u6fjgnn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vr-Nzx4N4fYKDYXlDXCu7O
          claim_id: c_DPrBzdmFIYCB6DMOTfbsFU
          source_id: s_4ECyIRN-Y3d6HZO31Osszt
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126717 王堯封）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_4ECyIRN-Y3d6HZO31Osszt
            source_type: api_record
            title: 中国历代人物传记资料库：王邦達（CBDB 222825）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222825&o=json
            external_identifier: CBDB:222825
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vHoxdq9TDRoy7D4u6fjgnn
        status: active
        display_name: 王邦達
        merged_into_person_id: null
    - claim:
        id: c_0rSU5Gdn7yDEaHwDnly8K8
        subject_person_id: p_DpuSp4mmLYMfmUMioXctjR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yLHKZhRHCNxfP7yMtYgTFv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vC61VJHIYKZ66n40fEi_Tb
          claim_id: c_0rSU5Gdn7yDEaHwDnly8K8
          source_id: s_WalMDWXHyGfo9_qMAWbLdd
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126717 王堯封）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_WalMDWXHyGfo9_qMAWbLdd
            source_type: api_record
            title: 中国历代人物传记资料库：王塈（CBDB 222815）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222815&o=json
            external_identifier: CBDB:222815
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yLHKZhRHCNxfP7yMtYgTFv
        status: active
        display_name: 王塈
        merged_into_person_id: null
    - claim:
        id: c_tL_B9tSsGSrk4AVfFPxDj_
        subject_person_id: p_DpuSp4mmLYMfmUMioXctjR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zLfR8pe4RRKoXX7n1YPQzC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SMalOGxH1lReAITgpCqYjs
          claim_id: c_tL_B9tSsGSrk4AVfFPxDj_
          source_id: s_Euxm06HBb5h27GXRHiQUXx
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126717 王堯封）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Euxm06HBb5h27GXRHiQUXx
            source_type: api_record
            title: 中国历代人物传记资料库：王址（CBDB 222821）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222821&o=json
            external_identifier: CBDB:222821
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zLfR8pe4RRKoXX7n1YPQzC
        status: active
        display_name: 王址
        merged_into_person_id: null
---

# 王堯封

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王堯封 | accepted |
| birth.date | 1543年 | accepted |
| death.date | 1613年 | accepted |
| bio.summary | 王堯封（1543年—1613年），明人物。明清進士進士，籍贯金壇，入仕進士，曾任知府。（中国历代人物传记资料库 CBDB 126717） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oruQD3pLHzNQ8AvU3GVazK | 王維熊 | accepted |
| ancestors | p_aewufbD64G6Qk8r5aHNdhe | 王瀚 | accepted |
| ancestors | p_inPFV8Tvc2PR92pWnYK5AT | 王㮣 | accepted |
| other | p_1veF7VdqFLD1R864GCoBzD | 王思道 | accepted |
| other | p_35Lcsnh3TGHhfz59sQBgQ4 | 王坊 | accepted |
| other | p_43gLfFZDJkTnCqgKcveznd | 王思聰 | accepted |
| other | p_7rbnTG1Lxb1Nu3UW8SrCL4 | 王堯甸 | accepted |
| other | p_Fv4xGzQELfdfoLScmzCEhq | 王元坿 | accepted |
| other | p_KLU9Psur1AsU89H8q3MRAb | 王啟疆 | accepted |
| other | p_Z5KpoCpX2Pjq1iKHAdBCQx | 王肯堂 | accepted |
| other | p_r4sAd9PLc2f12uwSYcuCCC | 王堯臣 | accepted |
| other | p_rx146yfAJAttd9S4hWxx2n | 王堅 | accepted |
| other | p_vHoxdq9TDRoy7D4u6fjgnn | 王邦達 | accepted |
| other | p_yLHKZhRHCNxfP7yMtYgTFv | 王塈 | accepted |
| other | p_zLfR8pe4RRKoXX7n1YPQzC | 王址 | accepted |

## 外部来源

- [中国历代人物传记资料库：王邦達（CBDB 222825）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222825&o=json)
- [中国历代人物传记资料库：王坊（CBDB 222814）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222814&o=json)
- [中国历代人物传记资料库：王瀚（CBDB 222807）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222807&o=json)
- [中国历代人物传记资料库：王塈（CBDB 222815）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222815&o=json)
- [中国历代人物传记资料库：王堅（CBDB 222817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222817&o=json)
- [中国历代人物传记资料库：王肯堂（CBDB 222822）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222822&o=json)
- [中国历代人物传记资料库：王啟疆（CBDB 222819）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222819&o=json)
- [中国历代人物传记资料库：王思聰（CBDB 222818）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222818&o=json)
- [中国历代人物传记资料库：王思道（CBDB 222813）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222813&o=json)
- [中国历代人物传记资料库：王維熊（CBDB 222809）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222809&o=json)
- [中国历代人物传记资料库：王堯臣（CBDB 222820）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222820&o=json)
- [中国历代人物传记资料库：王堯甸（CBDB 222823）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222823&o=json)
- [中国历代人物传记资料库：王堯封（CBDB 126717）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126717&o=json)
- [中国历代人物传记资料库：王元坿（CBDB 222824）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222824&o=json)
- [中国历代人物传记资料库：王址（CBDB 222821）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222821&o=json)
- [中国历代人物传记资料库：王㮣（CBDB 222808）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=222808&o=json)
