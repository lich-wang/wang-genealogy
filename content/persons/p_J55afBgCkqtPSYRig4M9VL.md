---
schema: wang-person/v1
id: p_J55afBgCkqtPSYRig4M9VL
status: active
merged_into: null
display_name: 王約
revision: 17
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VvTmvbvoCH4RH2i4AW3TJi
        subject_person_id: p_J55afBgCkqtPSYRig4M9VL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王約
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cprmnoeHQj8Faj6oWVcT8V
          claim_id: c_VvTmvbvoCH4RH2i4AW3TJi
          source_id: s_Q9EatNnQ4FxJEyR2y492WM
          stance: supports
          locator: CBDB:206312
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206312）
          source: &a1
            id: s_Q9EatNnQ4FxJEyR2y492WM
            source_type: api_record
            title: 中国历代人物传记资料库：王約（CBDB 206312）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206312&o=json
            external_identifier: CBDB:206312
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.892Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_xug9yAj7TUc7qirhEZfqMv
        subject_person_id: p_J55afBgCkqtPSYRig4M9VL
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1545年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3gPCZRUJRtKfQJ8RxMDC47
          claim_id: c_xug9yAj7TUc7qirhEZfqMv
          source_id: s_Q9EatNnQ4FxJEyR2y492WM
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
        id: c_7gt9LKmG4AA3i7tezADBwN
        subject_person_id: p_J55afBgCkqtPSYRig4M9VL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王約（生于1545年），明人物。明清進士進士，籍贯惠安，入仕進士。（中国历代人物传记资料库 CBDB 206312）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mz-gpXFAyn19OgkTn-b4w3
          claim_id: c_7gt9LKmG4AA3i7tezADBwN
          source_id: s_Q9EatNnQ4FxJEyR2y492WM
          stance: supports
          locator: CBDB:206312
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Xlbgvxg4M5ARYKg0ZwQ8Mo
        subject_person_id: p_oJyHrTtA8vuQzWweqp45TE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_J55afBgCkqtPSYRig4M9VL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OH5PO2KGnFzB2fcNA3JVbK
          claim_id: c_Xlbgvxg4M5ARYKg0ZwQ8Mo
          source_id: s_Q9EatNnQ4FxJEyR2y492WM
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_oJyHrTtA8vuQzWweqp45TE
        status: active
        display_name: 王以佐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_YK9wlY54UAo2yaF_vAiw4R
        subject_person_id: p_J55afBgCkqtPSYRig4M9VL
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_5S7FA1n8vFnm7L7uVG5FbH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P6lWUmYqudL_EFsw9BN26B
          claim_id: c_YK9wlY54UAo2yaF_vAiw4R
          source_id: s_H9clHjMsD2m_ncl7yPfrmb
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_H9clHjMsD2m_ncl7yPfrmb
            source_type: api_record
            title: 中国历代人物传记资料库：連氏(王約妻)（CBDB 216209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216209&o=json
            external_identifier: CBDB:216209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5S7FA1n8vFnm7L7uVG5FbH
        status: active
        display_name: 連氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_cyqj_uqttJYS0giLaS6cQ9
        subject_person_id: p_yMtffJLVDqf78rSVxJ1yF2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_J55afBgCkqtPSYRig4M9VL
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__Npujc0JQhWVcVL2EEWUdR
          claim_id: c_cyqj_uqttJYS0giLaS6cQ9
          source_id: s_Q9EatNnQ4FxJEyR2y492WM
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yMtffJLVDqf78rSVxJ1yF2
        status: active
        display_name: 王璉
        merged_into_person_id: null
    - claim:
        id: c_g1HfTeReKUjXOtfKPK9ZRi
        subject_person_id: p_byePaPbZp6jPRJqt19xyjN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_J55afBgCkqtPSYRig4M9VL
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PqjeWP7NXBGIUWhUjBgAJ8
          claim_id: c_g1HfTeReKUjXOtfKPK9ZRi
          source_id: s_Q9EatNnQ4FxJEyR2y492WM
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_byePaPbZp6jPRJqt19xyjN
        status: active
        display_name: 王奇橙
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_SCPZXizbL3O37P7g9-q6gI
        subject_person_id: p_3wXtvBGTqaPxMPdaYocPsB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_J55afBgCkqtPSYRig4M9VL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TCA5zDXJI21O7hId3mNOFP
          claim_id: c_SCPZXizbL3O37P7g9-q6gI
          source_id: s_qX5F4Oa5qOx1XAfxvCfRcA
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206312 王約）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qX5F4Oa5qOx1XAfxvCfRcA
            source_type: api_record
            title: 中国历代人物传记资料库：王經（CBDB 216211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216211&o=json
            external_identifier: CBDB:216211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3wXtvBGTqaPxMPdaYocPsB
        status: active
        display_name: 王經
        merged_into_person_id: null
    - claim:
        id: c_KbZsDBHRxK1BEuMRzd0A5J
        subject_person_id: p_4Wha6EM9QfU8SMLa35FcMb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_J55afBgCkqtPSYRig4M9VL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VwrVolH70zc0VR8R48Fzsb
          claim_id: c_KbZsDBHRxK1BEuMRzd0A5J
          source_id: s__bB-HArSrP61zZIB609LTn
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206312 王約）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__bB-HArSrP61zZIB609LTn
            source_type: api_record
            title: 中国历代人物传记资料库：王緒（CBDB 216219）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216219&o=json
            external_identifier: CBDB:216219
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4Wha6EM9QfU8SMLa35FcMb
        status: active
        display_name: 王緒
        merged_into_person_id: null
    - claim:
        id: c_mu8tprhIAgPJtxoB9hDgjU
        subject_person_id: p_5TYbP6MDoUN9rZz2riVJEn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_J55afBgCkqtPSYRig4M9VL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZdaIdFojafILT0TbgEPRtp
          claim_id: c_mu8tprhIAgPJtxoB9hDgjU
          source_id: s_I1HN9NZ8N6i_sM48cgql7g
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206312 王約）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_I1HN9NZ8N6i_sM48cgql7g
            source_type: api_record
            title: 中国历代人物传记资料库：王組（CBDB 216221）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216221&o=json
            external_identifier: CBDB:216221
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5TYbP6MDoUN9rZz2riVJEn
        status: active
        display_name: 王組
        merged_into_person_id: null
    - claim:
        id: c_VYDbVlu5rfo5ZBVvRwG8Wd
        subject_person_id: p_8oVoUEeybBRpXSZtAJ43JG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_J55afBgCkqtPSYRig4M9VL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iriJC64yGaAFfzfwHapMjI
          claim_id: c_VYDbVlu5rfo5ZBVvRwG8Wd
          source_id: s_vW4x9VgHconTAOGTW_fYA9
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206312 王約）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vW4x9VgHconTAOGTW_fYA9
            source_type: api_record
            title: 中国历代人物传记资料库：王綗（CBDB 216220）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216220&o=json
            external_identifier: CBDB:216220
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8oVoUEeybBRpXSZtAJ43JG
        status: active
        display_name: 王綗
        merged_into_person_id: null
    - claim:
        id: c_NevovFVw6ZMx1YDFzd2GwC
        subject_person_id: p_Ei3b6mRBgz6HK8Lmk5SYRM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_J55afBgCkqtPSYRig4M9VL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kye2EjVOk54Ovr3hppWHTo
          claim_id: c_NevovFVw6ZMx1YDFzd2GwC
          source_id: s_rr2NKn0Mm3rb_iV-FF97Jw
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206312 王約）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_rr2NKn0Mm3rb_iV-FF97Jw
            source_type: api_record
            title: 中国历代人物传记资料库：王綸（CBDB 216217）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216217&o=json
            external_identifier: CBDB:216217
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ei3b6mRBgz6HK8Lmk5SYRM
        status: active
        display_name: 王綸
        merged_into_person_id: null
    - claim:
        id: c_rPnv5_HZodo79hzIWkNjyc
        subject_person_id: p_FQ6xf8EEGiuyn95dg6WPvA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_J55afBgCkqtPSYRig4M9VL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pXtBZpXnuwm6tT9pS0PCSi
          claim_id: c_rPnv5_HZodo79hzIWkNjyc
          source_id: s_QY1tA4QCDpTd3gm7ljBEZE
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206312 王約）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QY1tA4QCDpTd3gm7ljBEZE
            source_type: api_record
            title: 中国历代人物传记资料库：王繩（CBDB 216222）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216222&o=json
            external_identifier: CBDB:216222
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FQ6xf8EEGiuyn95dg6WPvA
        status: active
        display_name: 王繩
        merged_into_person_id: null
    - claim:
        id: c_5uxX2q0qWefWigClpSivqu
        subject_person_id: p_J55afBgCkqtPSYRig4M9VL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_QuTC5KpJVPEypHFFxaiUGj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dPUHv2iVnS2pBLEGIdHpt6
          claim_id: c_5uxX2q0qWefWigClpSivqu
          source_id: s_qhSJX65Yw3B8dOzf1V999T
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206312 王約）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qhSJX65Yw3B8dOzf1V999T
            source_type: api_record
            title: 中国历代人物传记资料库：王纘（CBDB 216224）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216224&o=json
            external_identifier: CBDB:216224
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QuTC5KpJVPEypHFFxaiUGj
        status: active
        display_name: 王纘
        merged_into_person_id: null
    - claim:
        id: c_Qj3EMWmqJcDfF5mAP1n1Cj
        subject_person_id: p_J55afBgCkqtPSYRig4M9VL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_WdZFqDJ8Ppagnw2nTLm3be
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NzXUndnFkvENXislr5hEwJ
          claim_id: c_Qj3EMWmqJcDfF5mAP1n1Cj
          source_id: s_HntUWixABTyozdQ5Pi23Mf
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206312 王約）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_HntUWixABTyozdQ5Pi23Mf
            source_type: api_record
            title: 中国历代人物传记资料库：王繪（CBDB 216223）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216223&o=json
            external_identifier: CBDB:216223
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WdZFqDJ8Ppagnw2nTLm3be
        status: active
        display_name: 王繪
        merged_into_person_id: null
    - claim:
        id: c_aBz9DKWEQGGZXfs1f4KuBL
        subject_person_id: p_J55afBgCkqtPSYRig4M9VL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_c77MSeXhbgSyFGiUSQQqhk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jquPopJ7ylIwMPdGzG9Ux4
          claim_id: c_aBz9DKWEQGGZXfs1f4KuBL
          source_id: s_ZPf_7STNg8u_dFyxe0gTBv
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206312 王約）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ZPf_7STNg8u_dFyxe0gTBv
            source_type: api_record
            title: 中国历代人物传记资料库：王紹（CBDB 216213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216213&o=json
            external_identifier: CBDB:216213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_c77MSeXhbgSyFGiUSQQqhk
        status: active
        display_name: 王紹
        merged_into_person_id: null
    - claim:
        id: c_sACIJxftqK8uTxAPXlb4cT
        subject_person_id: p_J55afBgCkqtPSYRig4M9VL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_dm9JtAbbhsRuK6N7S2Zy5v
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IwOb5SRFqN8WNP1sV-zJKc
          claim_id: c_sACIJxftqK8uTxAPXlb4cT
          source_id: s_jUpYuyHzNd6subwJvgC-Jc
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206312 王約）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jUpYuyHzNd6subwJvgC-Jc
            source_type: api_record
            title: 中国历代人物传记资料库：王緯（CBDB 216212）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216212&o=json
            external_identifier: CBDB:216212
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dm9JtAbbhsRuK6N7S2Zy5v
        status: active
        display_name: 王緯
        merged_into_person_id: null
    - claim:
        id: c_L_OFPSqqG8g7EomUJMp2Js
        subject_person_id: p_J55afBgCkqtPSYRig4M9VL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_o27JMw6S16NHVcRysyfq9z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JkbuYVO4BpyEeWe1CmN05M
          claim_id: c_L_OFPSqqG8g7EomUJMp2Js
          source_id: s_edIW9d1aD4fK4fkNl36twM
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206312 王約）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_edIW9d1aD4fK4fkNl36twM
            source_type: api_record
            title: 中国历代人物传记资料库：王綵（CBDB 216225）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216225&o=json
            external_identifier: CBDB:216225
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_o27JMw6S16NHVcRysyfq9z
        status: active
        display_name: 王綵
        merged_into_person_id: null
    - claim:
        id: c_FArUg8DqPHw4RM4q5_bYhO
        subject_person_id: p_J55afBgCkqtPSYRig4M9VL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sfgG47nwNSCzr33ze97V2Y
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zx7pK61G8JmdYQyBApI2dj
          claim_id: c_FArUg8DqPHw4RM4q5_bYhO
          source_id: s_Q_zIE_byeG3v9zYUi2VDPM
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206312 王約）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Q_zIE_byeG3v9zYUi2VDPM
            source_type: api_record
            title: 中国历代人物传记资料库：王純（CBDB 216216）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216216&o=json
            external_identifier: CBDB:216216
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sfgG47nwNSCzr33ze97V2Y
        status: active
        display_name: 王純
        merged_into_person_id: null
    - claim:
        id: c_V8_H-iFmugpsPAiAizhXvf
        subject_person_id: p_J55afBgCkqtPSYRig4M9VL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_tQ6nzH2FsCGBPchTs3gMft
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WZOUu1K3_OKLIVAvQGxAuU
          claim_id: c_V8_H-iFmugpsPAiAizhXvf
          source_id: s_sI3K9AmSPXtVf9QKhGH40k
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206312 王約）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_sI3K9AmSPXtVf9QKhGH40k
            source_type: api_record
            title: 中国历代人物传记资料库：王縉（CBDB 216218）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216218&o=json
            external_identifier: CBDB:216218
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tQ6nzH2FsCGBPchTs3gMft
        status: active
        display_name: 王縉
        merged_into_person_id: null
    - claim:
        id: c_uECOKC5q9PVW0XomvzxwTY
        subject_person_id: p_J55afBgCkqtPSYRig4M9VL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_woVBtYjYH41Tdzkh8YPme2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dskQFhVka3_HRd-y_krPk2
          claim_id: c_uECOKC5q9PVW0XomvzxwTY
          source_id: s_iSISy7znpNpySOiQq3jwOO
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206312 王約）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_iSISy7znpNpySOiQq3jwOO
            source_type: api_record
            title: 中国历代人物传记资料库：王汝（CBDB 216210）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216210&o=json
            external_identifier: CBDB:216210
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_woVBtYjYH41Tdzkh8YPme2
        status: active
        display_name: 王汝
        merged_into_person_id: null
---

# 王約

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王約 | accepted |
| birth.date | 1545年 | accepted |
| bio.summary | 王約（生于1545年），明人物。明清進士進士，籍贯惠安，入仕進士。（中国历代人物传记资料库 CBDB 206312） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oJyHrTtA8vuQzWweqp45TE | 王以佐 | accepted |
| spouses | p_5S7FA1n8vFnm7L7uVG5FbH | 連氏 | accepted |
| ancestors | p_yMtffJLVDqf78rSVxJ1yF2 | 王璉 | accepted |
| ancestors | p_byePaPbZp6jPRJqt19xyjN | 王奇橙 | accepted |
| other | p_3wXtvBGTqaPxMPdaYocPsB | 王經 | accepted |
| other | p_4Wha6EM9QfU8SMLa35FcMb | 王緒 | accepted |
| other | p_5TYbP6MDoUN9rZz2riVJEn | 王組 | accepted |
| other | p_8oVoUEeybBRpXSZtAJ43JG | 王綗 | accepted |
| other | p_Ei3b6mRBgz6HK8Lmk5SYRM | 王綸 | accepted |
| other | p_FQ6xf8EEGiuyn95dg6WPvA | 王繩 | accepted |
| other | p_QuTC5KpJVPEypHFFxaiUGj | 王纘 | accepted |
| other | p_WdZFqDJ8Ppagnw2nTLm3be | 王繪 | accepted |
| other | p_c77MSeXhbgSyFGiUSQQqhk | 王紹 | accepted |
| other | p_dm9JtAbbhsRuK6N7S2Zy5v | 王緯 | accepted |
| other | p_o27JMw6S16NHVcRysyfq9z | 王綵 | accepted |
| other | p_sfgG47nwNSCzr33ze97V2Y | 王純 | accepted |
| other | p_tQ6nzH2FsCGBPchTs3gMft | 王縉 | accepted |
| other | p_woVBtYjYH41Tdzkh8YPme2 | 王汝 | accepted |

## 外部来源

- [中国历代人物传记资料库：連氏(王約妻)（CBDB 216209）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216209&o=json)
- [中国历代人物传记资料库：王綵（CBDB 216225）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216225&o=json)
- [中国历代人物传记资料库：王純（CBDB 216216）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216216&o=json)
- [中国历代人物传记资料库：王繪（CBDB 216223）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216223&o=json)
- [中国历代人物传记资料库：王縉（CBDB 216218）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216218&o=json)
- [中国历代人物传记资料库：王經（CBDB 216211）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216211&o=json)
- [中国历代人物传记资料库：王綗（CBDB 216220）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216220&o=json)
- [中国历代人物传记资料库：王綸（CBDB 216217）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216217&o=json)
- [中国历代人物传记资料库：王汝（CBDB 216210）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216210&o=json)
- [中国历代人物传记资料库：王紹（CBDB 216213）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216213&o=json)
- [中国历代人物传记资料库：王繩（CBDB 216222）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216222&o=json)
- [中国历代人物传记资料库：王緯（CBDB 216212）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216212&o=json)
- [中国历代人物传记资料库：王緒（CBDB 216219）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216219&o=json)
- [中国历代人物传记资料库：王約（CBDB 206312）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206312&o=json)
- [中国历代人物传记资料库：王組（CBDB 216221）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216221&o=json)
- [中国历代人物传记资料库：王纘（CBDB 216224）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216224&o=json)
