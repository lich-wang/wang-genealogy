---
schema: wang-person/v1
id: p_2LvZRKXC4bvnUqu11G57yb
status: active
merged_into: null
display_name: 王遵
revision: 13
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_46bXfPPUWi8ix2ckAZC74t
        subject_person_id: p_2LvZRKXC4bvnUqu11G57yb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RnmhMA9UPTHBduHMoW8XA7
          claim_id: c_46bXfPPUWi8ix2ckAZC74t
          source_id: s_hSdTPDWiNR5wL1nkYF2yMQ
          stance: supports
          locator: CBDB:202897
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202897）
          source: &a1
            id: s_hSdTPDWiNR5wL1nkYF2yMQ
            source_type: api_record
            title: 中国历代人物传记资料库：王遵（CBDB 202897）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202897&o=json
            external_identifier: CBDB:202897
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.763Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4G7E2R1Mhq4VhuMMBFqBFc
        subject_person_id: p_2LvZRKXC4bvnUqu11G57yb
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1508年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cSvADum8WGeUjC4MZDy6s7
          claim_id: c_4G7E2R1Mhq4VhuMMBFqBFc
          source_id: s_hSdTPDWiNR5wL1nkYF2yMQ
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
        id: c_qrU1fhgU338ZCGpKHA6iVm
        subject_person_id: p_2LvZRKXC4bvnUqu11G57yb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遵（生于1508年），明人物。明清進士進士，籍贯南充，入仕進士。（中国历代人物传记资料库 CBDB 202897）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_z-wU9CLCEHRfQTsyM3B6AD
          claim_id: c_qrU1fhgU338ZCGpKHA6iVm
          source_id: s_hSdTPDWiNR5wL1nkYF2yMQ
          stance: supports
          locator: CBDB:202897
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_K2nHjZDhdgi6A29tsRlF4N
        subject_person_id: p_rw3SZ4WX6NQUFQKsyEHVZ4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2LvZRKXC4bvnUqu11G57yb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5bznlL0p90sW9k05hN8yKY
          claim_id: c_K2nHjZDhdgi6A29tsRlF4N
          source_id: s_hSdTPDWiNR5wL1nkYF2yMQ
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第二十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rw3SZ4WX6NQUFQKsyEHVZ4
        status: active
        display_name: 王希德
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_XZxZW_4KuDlmXjA2jYOb-l
        subject_person_id: p_2LvZRKXC4bvnUqu11G57yb
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_QMF99jgcERPAPKvwnHacMv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QY6MSZcnxApYNQ40LqyK6H
          claim_id: c_XZxZW_4KuDlmXjA2jYOb-l
          source_id: s_aN9QR9J6zJcAwkcRAkqxo1
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第二十八名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_aN9QR9J6zJcAwkcRAkqxo1
            source_type: api_record
            title: 中国历代人物传记资料库：韓氏(王遵妻)（CBDB 296391）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296391&o=json
            external_identifier: CBDB:296391
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_QMF99jgcERPAPKvwnHacMv
        status: active
        display_name: 韓氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_yW48DQyn-gG0-EmTHGWIYS
        subject_person_id: p_6AWFkDwvMEx3gmWMnZMPwe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2LvZRKXC4bvnUqu11G57yb
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5X-Zx25Xqn5bk9ZeHwKwDh
          claim_id: c_yW48DQyn-gG0-EmTHGWIYS
          source_id: s_hSdTPDWiNR5wL1nkYF2yMQ
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第二十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_6AWFkDwvMEx3gmWMnZMPwe
        status: active
        display_name: 王昺
        merged_into_person_id: null
    - claim:
        id: c_Rjkj9x11VC5938GguhT1jg
        subject_person_id: p_bfdWzUXjZU7XhphPpQjdV5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2LvZRKXC4bvnUqu11G57yb
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_81o3aQKSDbfi73tHcUKKZ1
          claim_id: c_Rjkj9x11VC5938GguhT1jg
          source_id: s_hSdTPDWiNR5wL1nkYF2yMQ
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第二十八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bfdWzUXjZU7XhphPpQjdV5
        status: active
        display_name: 王商
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_OW5tVc8nqJ0x12-M55kAhl
        subject_person_id: p_2LvZRKXC4bvnUqu11G57yb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_2UaPva3PJ4SimEwsC8AKh3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_no2LnfHA9MSduSjmZNtQB_
          claim_id: c_OW5tVc8nqJ0x12-M55kAhl
          source_id: s_OZKCRe-FoVy8x6JMTLYS3d
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202897 王遵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OZKCRe-FoVy8x6JMTLYS3d
            source_type: api_record
            title: 中国历代人物传记资料库：王謙（CBDB 290823）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290823&o=json
            external_identifier: CBDB:290823
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2UaPva3PJ4SimEwsC8AKh3
        status: active
        display_name: 王謙
        merged_into_person_id: null
    - claim:
        id: c_ytx8-OVaaNEKMPzx1cnL3Q
        subject_person_id: p_2LvZRKXC4bvnUqu11G57yb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_EhLuzakM77Au4WLhNNyX41
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y_d8-NaiFromPALQHGgtiA
          claim_id: c_ytx8-OVaaNEKMPzx1cnL3Q
          source_id: s_MHqRX7mOhkmgJF2ufs8kt3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202897 王遵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_MHqRX7mOhkmgJF2ufs8kt3
            source_type: api_record
            title: 中国历代人物传记资料库：王遴（CBDB 290820）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290820&o=json
            external_identifier: CBDB:290820
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EhLuzakM77Au4WLhNNyX41
        status: active
        display_name: 王遴
        merged_into_person_id: null
    - claim:
        id: c__CPd_sNo1odUwp7B72ygnn
        subject_person_id: p_2LvZRKXC4bvnUqu11G57yb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_HNXh67GiFTsu28KiwC1hUX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__K1eTKSF-BVLzHKyFIok80
          claim_id: c__CPd_sNo1odUwp7B72ygnn
          source_id: s_Mf8a11WACOkEsRDIrSbUax
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202897 王遵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Mf8a11WACOkEsRDIrSbUax
            source_type: api_record
            title: 中国历代人物传记资料库：王遷（CBDB 290812）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290812&o=json
            external_identifier: CBDB:290812
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HNXh67GiFTsu28KiwC1hUX
        status: active
        display_name: 王遷
        merged_into_person_id: null
    - claim:
        id: c_b-NsqodtvtnjC_oDkkwRbR
        subject_person_id: p_2LvZRKXC4bvnUqu11G57yb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Luud4ynJTZPaQntcrS1NQs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ws7-C9E8N4lc7dvEPiw9tQ
          claim_id: c_b-NsqodtvtnjC_oDkkwRbR
          source_id: s_Nk2pYPIvGM8EWmPWBLAxhu
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202897 王遵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Nk2pYPIvGM8EWmPWBLAxhu
            source_type: api_record
            title: 中国历代人物传记资料库：王述（CBDB 296403）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296403&o=json
            external_identifier: CBDB:296403
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Luud4ynJTZPaQntcrS1NQs
        status: active
        display_name: 王述
        merged_into_person_id: null
    - claim:
        id: c_cAvrjZVSJ7beWUMWVhdEkM
        subject_person_id: p_2LvZRKXC4bvnUqu11G57yb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_PsXxCSg8UX48nkvZWrXMv2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AxeG7wrmsyox3ZZF91spRe
          claim_id: c_cAvrjZVSJ7beWUMWVhdEkM
          source_id: s_ZpAnqmYRLSBAADlr4GyEjY
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202897 王遵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ZpAnqmYRLSBAADlr4GyEjY
            source_type: api_record
            title: 中国历代人物传记资料库：王郁（CBDB 290819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290819&o=json
            external_identifier: CBDB:290819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PsXxCSg8UX48nkvZWrXMv2
        status: active
        display_name: 王郁
        merged_into_person_id: null
    - claim:
        id: c__mOOlhLM9YOv0l8sRCTamD
        subject_person_id: p_2LvZRKXC4bvnUqu11G57yb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_QKjMqf1kcgRnbebgJAAErq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hzxKGyLGI1esC_TxtBXSIP
          claim_id: c__mOOlhLM9YOv0l8sRCTamD
          source_id: s_1xRqa87Xvd7XnOgMEibN98
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202897 王遵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1xRqa87Xvd7XnOgMEibN98
            source_type: api_record
            title: 中国历代人物传记资料库：王選（CBDB 290811）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290811&o=json
            external_identifier: CBDB:290811
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QKjMqf1kcgRnbebgJAAErq
        status: active
        display_name: 王選
        merged_into_person_id: null
    - claim:
        id: c_UyXIrDaEtFOotk0YRGI6lv
        subject_person_id: p_2LvZRKXC4bvnUqu11G57yb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_SXrnVya55CwoArA8f7hzUE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DIlKXExUlZDq8R1v_u83X6
          claim_id: c_UyXIrDaEtFOotk0YRGI6lv
          source_id: s_Ny-f8fa-XjaDXXbzmxGDYo
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202897 王遵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Ny-f8fa-XjaDXXbzmxGDYo
            source_type: api_record
            title: 中国历代人物传记资料库：王達（CBDB 290813）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290813&o=json
            external_identifier: CBDB:290813
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SXrnVya55CwoArA8f7hzUE
        status: active
        display_name: 王達
        merged_into_person_id: null
    - claim:
        id: c_z-qILN0y3fioVBLDhPWZAv
        subject_person_id: p_2LvZRKXC4bvnUqu11G57yb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bqXS9vVUEtwfuY1c1KuxB5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l9D650JZIa3joKzcOtCjct
          claim_id: c_z-qILN0y3fioVBLDhPWZAv
          source_id: s_r1PGKFijZzYi9sqGrXGwns
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202897 王遵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_r1PGKFijZzYi9sqGrXGwns
            source_type: api_record
            title: 中国历代人物传记资料库：王瑤（CBDB 290814）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290814&o=json
            external_identifier: CBDB:290814
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bqXS9vVUEtwfuY1c1KuxB5
        status: active
        display_name: 王瑤
        merged_into_person_id: null
    - claim:
        id: c_Nm2GP8TbUL-esn2Gv2eku6
        subject_person_id: p_2LvZRKXC4bvnUqu11G57yb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fbzKwFnip9EhEf2G4NEZSx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XXY0Pkv1IwSyXCOOgti44m
          claim_id: c_Nm2GP8TbUL-esn2Gv2eku6
          source_id: s_gYbq4vwudUBHSAnV_hMsX3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202897 王遵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_gYbq4vwudUBHSAnV_hMsX3
            source_type: api_record
            title: 中国历代人物传记资料库：王追（CBDB 290817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290817&o=json
            external_identifier: CBDB:290817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fbzKwFnip9EhEf2G4NEZSx
        status: active
        display_name: 王追
        merged_into_person_id: null
    - claim:
        id: c_pGjLS45k9HlGspUn1WVid1
        subject_person_id: p_2LvZRKXC4bvnUqu11G57yb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_q6VgqMMyd8msvogNUJ1wvQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3kxUbbgKHHAWaVIX9-0n1Y
          claim_id: c_pGjLS45k9HlGspUn1WVid1
          source_id: s__7ZRAgQGVoKgPpP7G1Lq2U
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202897 王遵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__7ZRAgQGVoKgPpP7G1Lq2U
            source_type: api_record
            title: 中国历代人物传记资料库：王誥（CBDB 296396）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296396&o=json
            external_identifier: CBDB:296396
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_q6VgqMMyd8msvogNUJ1wvQ
        status: active
        display_name: 王誥
        merged_into_person_id: null
---

# 王遵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遵 | accepted |
| birth.date | 1508年 | accepted |
| bio.summary | 王遵（生于1508年），明人物。明清進士進士，籍贯南充，入仕進士。（中国历代人物传记资料库 CBDB 202897） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_rw3SZ4WX6NQUFQKsyEHVZ4 | 王希德 | accepted |
| spouses | p_QMF99jgcERPAPKvwnHacMv | 韓氏 | accepted |
| ancestors | p_6AWFkDwvMEx3gmWMnZMPwe | 王昺 | accepted |
| ancestors | p_bfdWzUXjZU7XhphPpQjdV5 | 王商 | accepted |
| other | p_2UaPva3PJ4SimEwsC8AKh3 | 王謙 | accepted |
| other | p_EhLuzakM77Au4WLhNNyX41 | 王遴 | accepted |
| other | p_HNXh67GiFTsu28KiwC1hUX | 王遷 | accepted |
| other | p_Luud4ynJTZPaQntcrS1NQs | 王述 | accepted |
| other | p_PsXxCSg8UX48nkvZWrXMv2 | 王郁 | accepted |
| other | p_QKjMqf1kcgRnbebgJAAErq | 王選 | accepted |
| other | p_SXrnVya55CwoArA8f7hzUE | 王達 | accepted |
| other | p_bqXS9vVUEtwfuY1c1KuxB5 | 王瑤 | accepted |
| other | p_fbzKwFnip9EhEf2G4NEZSx | 王追 | accepted |
| other | p_q6VgqMMyd8msvogNUJ1wvQ | 王誥 | accepted |

## 外部来源

- [中国历代人物传记资料库：韓氏(王遵妻)（CBDB 296391）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296391&o=json)
- [中国历代人物传记资料库：王達（CBDB 290813）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290813&o=json)
- [中国历代人物传记资料库：王誥（CBDB 296396）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296396&o=json)
- [中国历代人物传记资料库：王遴（CBDB 290820）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290820&o=json)
- [中国历代人物传记资料库：王遷（CBDB 290812）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290812&o=json)
- [中国历代人物传记资料库：王謙（CBDB 290823）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290823&o=json)
- [中国历代人物传记资料库：王述（CBDB 296403）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=296403&o=json)
- [中国历代人物传记资料库：王選（CBDB 290811）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290811&o=json)
- [中国历代人物传记资料库：王瑤（CBDB 290814）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290814&o=json)
- [中国历代人物传记资料库：王郁（CBDB 290819）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290819&o=json)
- [中国历代人物传记资料库：王追（CBDB 290817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290817&o=json)
- [中国历代人物传记资料库：王遵（CBDB 202897）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202897&o=json)
