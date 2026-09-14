---
schema: wang-person/v1
id: p_STyrVbhawRK5QNwptzbque
status: active
merged_into: null
display_name: 王泮
revision: 15
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q8nTGjDF9SLWsGiwq7BNNQ
        subject_person_id: p_STyrVbhawRK5QNwptzbque
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fsH6zFwXQ5gPTM4gscyBFx
          claim_id: c_Q8nTGjDF9SLWsGiwq7BNNQ
          source_id: s_25NmxREkwxfK2c66oWrBF2
          stance: supports
          locator: CBDB:202013
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202013）
          source: &a1
            id: s_25NmxREkwxfK2c66oWrBF2
            source_type: api_record
            title: 中国历代人物传记资料库：王泮（CBDB 202013）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202013&o=json
            external_identifier: CBDB:202013
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.708Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9TMRE7f3dSFRNenj74GTWC
        subject_person_id: p_STyrVbhawRK5QNwptzbque
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1488年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sEc3fuJw3K52KWN98qTAip
          claim_id: c_9TMRE7f3dSFRNenj74GTWC
          source_id: s_25NmxREkwxfK2c66oWrBF2
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
        id: c_3n1J8zFZf9cZb672H8LxhK
        subject_person_id: p_STyrVbhawRK5QNwptzbque
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泮（生于1488年），明人物。明清進士進士，籍贯潞州衛，入仕進士。（中国历代人物传记资料库 CBDB 202013）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_u9a3CTdNmLGWqpDNZUS3vL
          claim_id: c_3n1J8zFZf9cZb672H8LxhK
          source_id: s_25NmxREkwxfK2c66oWrBF2
          stance: supports
          locator: CBDB:202013
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TxpogaEAQuHTK8Gj-4PmAd
        subject_person_id: p_Jk84ENYUVyTz1ayR9hKQUA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_STyrVbhawRK5QNwptzbque
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qwGV6YIrq3rDaVIHI2OCol
          claim_id: c_TxpogaEAQuHTK8Gj-4PmAd
          source_id: s_LAwM7q4mMFQUN2pFQRi6Bz
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百三十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LAwM7q4mMFQUN2pFQRi6Bz
            source_type: api_record
            title: 中国历代人物传记资料库：王鋀（CBDB 281994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281994&o=json
            external_identifier: CBDB:281994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_Jk84ENYUVyTz1ayR9hKQUA
        status: active
        display_name: 王鋀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_ZfHP4BA3gjr_JocsFPG_Vf
        subject_person_id: p_8pnTcjHWUMYxQtPNQSK2SP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_STyrVbhawRK5QNwptzbque
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4kOSZRXxf0PHjEk5HtD5hW
          claim_id: c_ZfHP4BA3gjr_JocsFPG_Vf
          source_id: s_GN1CwD6NS1X5pQn5aMg1KB
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百三十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GN1CwD6NS1X5pQn5aMg1KB
            source_type: api_record
            title: 中国历代人物传记资料库：王憲（CBDB 281993）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281993&o=json
            external_identifier: CBDB:281993
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.056Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8pnTcjHWUMYxQtPNQSK2SP
        status: active
        display_name: 王憲
        merged_into_person_id: null
    - claim:
        id: c_TAJXfykpfJE9TvuSkWDCYe
        subject_person_id: p_CQYvS8eqRQM6jCnjmaneQ4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_STyrVbhawRK5QNwptzbque
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pWFUTlZRsQyyZSSayME1Ma
          claim_id: c_TAJXfykpfJE9TvuSkWDCYe
          source_id: s_eNMxqaYHUeufUWj9Zhyjya
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百三十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eNMxqaYHUeufUWj9Zhyjya
            source_type: api_record
            title: 中国历代人物传记资料库：王春（CBDB 281992）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281992&o=json
            external_identifier: CBDB:281992
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.056Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CQYvS8eqRQM6jCnjmaneQ4
        status: active
        display_name: 王春
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_7EvoWVD2Aw_HZ0EF4QiVUy
        subject_person_id: p_3AokdZcYT8U75hh2eRDx4S
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_STyrVbhawRK5QNwptzbque
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LrlB2IFPzUZz3pDaIfqloG
          claim_id: c_7EvoWVD2Aw_HZ0EF4QiVUy
          source_id: s_mFf__j4HRRC5VcKvYv66qw
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202013 王泮）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_mFf__j4HRRC5VcKvYv66qw
            source_type: api_record
            title: 中国历代人物传记资料库：王學（CBDB 282004）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282004&o=json
            external_identifier: CBDB:282004
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3AokdZcYT8U75hh2eRDx4S
        status: active
        display_name: 王學
        merged_into_person_id: null
    - claim:
        id: c_62SevyPD4AHJcmgCrOr6Qs
        subject_person_id: p_7B549LaasamNja69qSEBtm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_STyrVbhawRK5QNwptzbque
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FhCK41vI9PJPLbFB1OStPw
          claim_id: c_62SevyPD4AHJcmgCrOr6Qs
          source_id: s__i1OWF8NzZV_uNjY08G_53
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202013 王泮）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__i1OWF8NzZV_uNjY08G_53
            source_type: api_record
            title: 中国历代人物传记资料库：王瀾（CBDB 281999）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281999&o=json
            external_identifier: CBDB:281999
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7B549LaasamNja69qSEBtm
        status: active
        display_name: 王瀾
        merged_into_person_id: null
    - claim:
        id: c_LBIHQHxtOym6hnF5DOfIyc
        subject_person_id: p_9spu7KX9j35GAa5eR26Y8a
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_STyrVbhawRK5QNwptzbque
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-5uST9ccIOgCgArksCg4ux
          claim_id: c_LBIHQHxtOym6hnF5DOfIyc
          source_id: s_9FDwSuxtid0jkMxzgkqnP0
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202013 王泮）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_9FDwSuxtid0jkMxzgkqnP0
            source_type: api_record
            title: 中国历代人物传记资料库：王紀（CBDB 282002）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282002&o=json
            external_identifier: CBDB:282002
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9spu7KX9j35GAa5eR26Y8a
        status: active
        display_name: 王紀
        merged_into_person_id: null
    - claim:
        id: c_FIf7ggEdFft5caBC7F5FXA
        subject_person_id: p_E5ejKQJp28b98X9an76Um2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_STyrVbhawRK5QNwptzbque
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_azB9TKFC5hPiSfUmb0diVK
          claim_id: c_FIf7ggEdFft5caBC7F5FXA
          source_id: s_17QvZ108fmYsxxgVX-7r06
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202013 王泮）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_17QvZ108fmYsxxgVX-7r06
            source_type: api_record
            title: 中国历代人物传记资料库：王河（CBDB 282006）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282006&o=json
            external_identifier: CBDB:282006
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_E5ejKQJp28b98X9an76Um2
        status: active
        display_name: 王河
        merged_into_person_id: null
    - claim:
        id: c_PGkg-CZvM4SXIdxchtODwY
        subject_person_id: p_ETDrZ5qP4w6vvdBqYMJLtX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_STyrVbhawRK5QNwptzbque
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xM-1ubUObn3z-qEpd24YVl
          claim_id: c_PGkg-CZvM4SXIdxchtODwY
          source_id: s_dx29bQPBZ4M-43d_jtifUT
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202013 王泮）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dx29bQPBZ4M-43d_jtifUT
            source_type: api_record
            title: 中国历代人物传记资料库：王潺（CBDB 282000）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282000&o=json
            external_identifier: CBDB:282000
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ETDrZ5qP4w6vvdBqYMJLtX
        status: active
        display_name: 王潺
        merged_into_person_id: null
    - claim:
        id: c_W8qIMYfu7ZaTDbLcxeay2Q
        subject_person_id: p_FwcinwtNvRNP4ZKMYFZNSt
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_STyrVbhawRK5QNwptzbque
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Epe_d9UwBBDWd-HxgJvqJM
          claim_id: c_W8qIMYfu7ZaTDbLcxeay2Q
          source_id: s_hgjii-aK-FPrIWmBZSBroC
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202013 王泮）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hgjii-aK-FPrIWmBZSBroC
            source_type: api_record
            title: 中国历代人物传记资料库：王汾（CBDB 282009）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282009&o=json
            external_identifier: CBDB:282009
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FwcinwtNvRNP4ZKMYFZNSt
        status: active
        display_name: 王汾
        merged_into_person_id: null
    - claim:
        id: c_uGasX2kX92V-tYKRceixrP
        subject_person_id: p_Ka98ykn5WmnmYPVBjnYQHP
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_STyrVbhawRK5QNwptzbque
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BoOKNh0I_vxYedIx_7wUaI
          claim_id: c_uGasX2kX92V-tYKRceixrP
          source_id: s_7gvL1jaZPw9Khl4D9HEXRW
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202013 王泮）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7gvL1jaZPw9Khl4D9HEXRW
            source_type: api_record
            title: 中国历代人物传记资料库：王洵（CBDB 281998）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281998&o=json
            external_identifier: CBDB:281998
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ka98ykn5WmnmYPVBjnYQHP
        status: active
        display_name: 王洵
        merged_into_person_id: null
    - claim:
        id: c_6YEks85v4IGQL9c8jJT1bb
        subject_person_id: p_MnaMCeAh8tGpLvYiyvWACQ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_STyrVbhawRK5QNwptzbque
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eRKup7HFa5inJE2LEslKO1
          claim_id: c_6YEks85v4IGQL9c8jJT1bb
          source_id: s_H9I43kdBFDxa4vGkMjUM2e
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202013 王泮）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_H9I43kdBFDxa4vGkMjUM2e
            source_type: api_record
            title: 中国历代人物传记资料库：王可（CBDB 282003）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282003&o=json
            external_identifier: CBDB:282003
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MnaMCeAh8tGpLvYiyvWACQ
        status: active
        display_name: 王可
        merged_into_person_id: null
    - claim:
        id: c_JQ5H2CUmYwKB_paGdPtxo0
        subject_person_id: p_STyrVbhawRK5QNwptzbque
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_aGnwTJ3SbYM6TYDu3oTaSR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P3_CE_bz1HDKYVd0laIRPr
          claim_id: c_JQ5H2CUmYwKB_paGdPtxo0
          source_id: s_EJnaySB4My-cIn_RtWbPKq
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202013 王泮）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_EJnaySB4My-cIn_RtWbPKq
            source_type: api_record
            title: 中国历代人物传记资料库：王濬（CBDB 282001）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282001&o=json
            external_identifier: CBDB:282001
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aGnwTJ3SbYM6TYDu3oTaSR
        status: active
        display_name: 王濬
        merged_into_person_id: null
    - claim:
        id: c_0pty8pF94yQvF4FPh_MOJt
        subject_person_id: p_STyrVbhawRK5QNwptzbque
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xhqt595RpzgjTyznQk9gLZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ph0gUBoi7lhMfrvKkT0tJ4
          claim_id: c_0pty8pF94yQvF4FPh_MOJt
          source_id: s_Tse_sZF9Ypu3H2uZk1hy-L
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202013 王泮）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Tse_sZF9Ypu3H2uZk1hy-L
            source_type: api_record
            title: 中国历代人物传记资料库：王法（CBDB 282007）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282007&o=json
            external_identifier: CBDB:282007
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xhqt595RpzgjTyznQk9gLZ
        status: active
        display_name: 王法
        merged_into_person_id: null
    - claim:
        id: c_YvtSw3HrffJw5BvleaudY0
        subject_person_id: p_STyrVbhawRK5QNwptzbque
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xwfQAzxXNfMPWEyHRQresZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FbQ9M7opf0tl2JlORThATR
          claim_id: c_YvtSw3HrffJw5BvleaudY0
          source_id: s_8a4vGVuqbkAioad1lt5oIy
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202013 王泮）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8a4vGVuqbkAioad1lt5oIy
            source_type: api_record
            title: 中国历代人物传记资料库：王瀛（CBDB 282005）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282005&o=json
            external_identifier: CBDB:282005
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xwfQAzxXNfMPWEyHRQresZ
        status: active
        display_name: 王瀛
        merged_into_person_id: null
---

# 王泮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王泮 | accepted |
| birth.date | 1488年 | accepted |
| bio.summary | 王泮（生于1488年），明人物。明清進士進士，籍贯潞州衛，入仕進士。（中国历代人物传记资料库 CBDB 202013） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Jk84ENYUVyTz1ayR9hKQUA | 王鋀 | accepted |
| ancestors | p_8pnTcjHWUMYxQtPNQSK2SP | 王憲 | accepted |
| ancestors | p_CQYvS8eqRQM6jCnjmaneQ4 | 王春 | accepted |
| other | p_3AokdZcYT8U75hh2eRDx4S | 王學 | accepted |
| other | p_7B549LaasamNja69qSEBtm | 王瀾 | accepted |
| other | p_9spu7KX9j35GAa5eR26Y8a | 王紀 | accepted |
| other | p_E5ejKQJp28b98X9an76Um2 | 王河 | accepted |
| other | p_ETDrZ5qP4w6vvdBqYMJLtX | 王潺 | accepted |
| other | p_FwcinwtNvRNP4ZKMYFZNSt | 王汾 | accepted |
| other | p_Ka98ykn5WmnmYPVBjnYQHP | 王洵 | accepted |
| other | p_MnaMCeAh8tGpLvYiyvWACQ | 王可 | accepted |
| other | p_aGnwTJ3SbYM6TYDu3oTaSR | 王濬 | accepted |
| other | p_xhqt595RpzgjTyznQk9gLZ | 王法 | accepted |
| other | p_xwfQAzxXNfMPWEyHRQresZ | 王瀛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王潺（CBDB 282000）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282000&o=json)
- [中国历代人物传记资料库：王春（CBDB 281992）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281992&o=json)
- [中国历代人物传记资料库：王法（CBDB 282007）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282007&o=json)
- [中国历代人物传记资料库：王汾（CBDB 282009）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282009&o=json)
- [中国历代人物传记资料库：王河（CBDB 282006）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282006&o=json)
- [中国历代人物传记资料库：王紀（CBDB 282002）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282002&o=json)
- [中国历代人物传记资料库：王濬（CBDB 282001）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282001&o=json)
- [中国历代人物传记资料库：王可（CBDB 282003）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282003&o=json)
- [中国历代人物传记资料库：王瀾（CBDB 281999）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281999&o=json)
- [中国历代人物传记资料库：王泮（CBDB 202013）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202013&o=json)
- [中国历代人物传记资料库：王鋀（CBDB 281994）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281994&o=json)
- [中国历代人物传记资料库：王憲（CBDB 281993）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281993&o=json)
- [中国历代人物传记资料库：王學（CBDB 282004）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282004&o=json)
- [中国历代人物传记资料库：王洵（CBDB 281998）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281998&o=json)
- [中国历代人物传记资料库：王瀛（CBDB 282005）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282005&o=json)
