---
schema: wang-person/v1
id: p_923xZ5qSMZFGgS46h7nLWU
status: active
merged_into: null
display_name: 王樵
revision: 17
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nDYQDQWMdqSn7s74VYkhBn
        subject_person_id: p_923xZ5qSMZFGgS46h7nLWU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6BLafpy1ETKajnYLSEx9PC
          claim_id: c_nDYQDQWMdqSn7s74VYkhBn
          source_id: s_eb5Xn1ejYbkj9jFGqum44L
          stance: supports
          locator: CBDB:34720
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（34720）
          source: &a1
            id: s_eb5Xn1ejYbkj9jFGqum44L
            source_type: api_record
            title: 中国历代人物传记资料库：王樵（CBDB 34720）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34720&o=json
            external_identifier: CBDB:34720
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.097Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_uip2ekr9o19fM4khrz6akc
        subject_person_id: p_923xZ5qSMZFGgS46h7nLWU
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1521年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EgCdnYzBM1BVbwBjZF82Bo
          claim_id: c_uip2ekr9o19fM4khrz6akc
          source_id: s_eb5Xn1ejYbkj9jFGqum44L
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
        id: c_zVcugXkDj8jXsf8uR2GvBE
        subject_person_id: p_923xZ5qSMZFGgS46h7nLWU
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1599年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YFhACDevcg4Kqs7JUpfVWQ
          claim_id: c_zVcugXkDj8jXsf8uR2GvBE
          source_id: s_eb5Xn1ejYbkj9jFGqum44L
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
        id: c_x4EJ5HopoLMSuru43bmke8
        subject_person_id: p_923xZ5qSMZFGgS46h7nLWU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樵（1521年—1599年），明人物。明清進士進士，籍贯金壇，身份为以疾廢、經學家，入仕進士。（中国历代人物传记资料库 CBDB 34720）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mCXMx8sOQD0WUNm8AvOtHC
          claim_id: c_x4EJ5HopoLMSuru43bmke8
          source_id: s_eb5Xn1ejYbkj9jFGqum44L
          stance: supports
          locator: CBDB:34720
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ALbWCDhwM2hL1Vu8wdKDO8
        subject_person_id: p_vpzDXBrQjqPJnEN64LCsPF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_923xZ5qSMZFGgS46h7nLWU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1A4fzo1sn4CjE2_GlMN0F0
          claim_id: c_ALbWCDhwM2hL1Vu8wdKDO8
          source_id: s_eb5Xn1ejYbkj9jFGqum44L
          stance: supports
          locator: CBDB 双向互证（父 王臬 ⇄ 子 王樵）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_vpzDXBrQjqPJnEN64LCsPF
        status: active
        display_name: 王臬
        merged_into_person_id: null
  children:
    - claim:
        id: c_0n3J8E-HuOj0eN0c9yxE8c
        subject_person_id: p_923xZ5qSMZFGgS46h7nLWU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5Jy3mzrK4nD5ZKcdARUJuQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hin3-6Vh6BoZa2vhkBgrcj
          claim_id: c_0n3J8E-HuOj0eN0c9yxE8c
          source_id: s_EBFrf3tktAQ9Uun45jM9MQ
          stance: supports
          locator: CBDB 双向互证（父 王樵 ⇄ 子 王肯堂）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_EBFrf3tktAQ9Uun45jM9MQ
            source_type: api_record
            title: 中国历代人物传记资料库：王肯堂（CBDB 34722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34722&o=json
            external_identifier: CBDB:34722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.100Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5Jy3mzrK4nD5ZKcdARUJuQ
        status: active
        display_name: 王肯堂
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_UI45gWUJ2T1_2-GWZ-W1IQ
        subject_person_id: p_923xZ5qSMZFGgS46h7nLWU
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_bzdWKVmACjcFeJi9xUKPVd
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_e5pMxIpWNiqsafDqaMVZm9
          claim_id: c_UI45gWUJ2T1_2-GWZ-W1IQ
          source_id: s_1VcPrQTLXzm_bxAhN3MzsY
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第十五名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1VcPrQTLXzm_bxAhN3MzsY
            source_type: api_record
            title: 中国历代人物传记资料库：虞氏(王樵妻)（CBDB 309649）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309649&o=json
            external_identifier: CBDB:309649
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bzdWKVmACjcFeJi9xUKPVd
        status: active
        display_name: 虞氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_W5gj3nmCx_8itkP3hEgRsQ
        subject_person_id: p_Eb1QdbChXgN1GA8BEpt3kU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_923xZ5qSMZFGgS46h7nLWU
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6I31ULflWEwLVZt5G_UHB2
          claim_id: c_W5gj3nmCx_8itkP3hEgRsQ
          source_id: s_eb5Xn1ejYbkj9jFGqum44L
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第十五名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Eb1QdbChXgN1GA8BEpt3kU
        status: active
        display_name: 王鎮
        merged_into_person_id: null
    - claim:
        id: c_bA8JxrQeQeYJ68A5jiv00C
        subject_person_id: p_XJ6D4tBNDdCJKx5sTBjB7e
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_923xZ5qSMZFGgS46h7nLWU
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qPGyOjQM9c8V3o6nE3A0Ed
          claim_id: c_bA8JxrQeQeYJ68A5jiv00C
          source_id: s_eb5Xn1ejYbkj9jFGqum44L
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第十五名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XJ6D4tBNDdCJKx5sTBjB7e
        status: active
        display_name: 王瀚
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_Ihr6qn-2q-38e_Sj731pdn
        subject_person_id: p_923xZ5qSMZFGgS46h7nLWU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FE6i55GXzPWLVER3EtdHfo
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wH0WEzXEMCk95cRjv-pxRq
          claim_id: c_Ihr6qn-2q-38e_Sj731pdn
          source_id: s_FjES678jDu1PEn5f7GLKsm
          stance: supports
          locator: 明詩紀事:一百八十七卷，辛籤卷三二：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FjES678jDu1PEn5f7GLKsm
            source_type: api_record
            title: 中国历代人物传记资料库：王彥泓（CBDB 120462）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120462&o=json
            external_identifier: CBDB:120462
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:37.980Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_FE6i55GXzPWLVER3EtdHfo
        status: active
        display_name: 王彥泓
        merged_into_person_id: null
  other:
    - claim:
        id: c_JT6VX09RYcmiDsqAY7Xxam
        subject_person_id: p_2JRR43piFcBKpoGfKJhFCE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_923xZ5qSMZFGgS46h7nLWU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P5p0oWoNor0KRJAIdFQ2Gk
          claim_id: c_JT6VX09RYcmiDsqAY7Xxam
          source_id: s_FJjy6OIHh1-j98Fh76JcOK
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 34720 王樵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_FJjy6OIHh1-j98Fh76JcOK
            source_type: api_record
            title: 中国历代人物传记资料库：王烝（CBDB 309657）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309657&o=json
            external_identifier: CBDB:309657
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2JRR43piFcBKpoGfKJhFCE
        status: active
        display_name: 王烝
        merged_into_person_id: null
    - claim:
        id: c_Uus0y1FeIHbYhS7I_oFFx0
        subject_person_id: p_923xZ5qSMZFGgS46h7nLWU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_9K9PGQwsoS3ZaM5p5w7UtG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R9ksEPRBJC8FXBovsfaUXx
          claim_id: c_Uus0y1FeIHbYhS7I_oFFx0
          source_id: s_C0q4gQWjxzXZ7aRsW8DJPo
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 34720 王樵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_C0q4gQWjxzXZ7aRsW8DJPo
            source_type: api_record
            title: 中国历代人物传记资料库：王夢羔（CBDB 309661）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309661&o=json
            external_identifier: CBDB:309661
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9K9PGQwsoS3ZaM5p5w7UtG
        status: active
        display_name: 王夢羔
        merged_into_person_id: null
    - claim:
        id: c_r959XI6WL726KD9PJAZCtd
        subject_person_id: p_923xZ5qSMZFGgS46h7nLWU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_AmDc6KHSroSoHEQCWdoMVQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tcSPNV6pFen3aQJESuX0Jp
          claim_id: c_r959XI6WL726KD9PJAZCtd
          source_id: s_4pW_IWgieJLZ02iLK0LRKy
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 34720 王樵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_4pW_IWgieJLZ02iLK0LRKy
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 309658）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309658&o=json
            external_identifier: CBDB:309658
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AmDc6KHSroSoHEQCWdoMVQ
        status: active
        display_name: 王傑
        merged_into_person_id: null
    - claim:
        id: c_V2Glg3bYL3ZEU-jvEFailZ
        subject_person_id: p_923xZ5qSMZFGgS46h7nLWU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_CVYQ6ZcLXbA91DnWS8v6Bb
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hvfnhwl4ey6nmLhzoOm6Gu
          claim_id: c_V2Glg3bYL3ZEU-jvEFailZ
          source_id: s_DUFTLFIRj4YLzhSz-gevP6
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 34720 王樵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_DUFTLFIRj4YLzhSz-gevP6
            source_type: api_record
            title: 中国历代人物传记资料库：王維羆（CBDB 309660）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309660&o=json
            external_identifier: CBDB:309660
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CVYQ6ZcLXbA91DnWS8v6Bb
        status: active
        display_name: 王維羆
        merged_into_person_id: null
    - claim:
        id: c_tjsfovXeOtBHqgWT1ZVDZI
        subject_person_id: p_923xZ5qSMZFGgS46h7nLWU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_JBWSAH2Y6gAk3F76hQjFDs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wBw_vhi9SR7Igu1OPqmwJT
          claim_id: c_tjsfovXeOtBHqgWT1ZVDZI
          source_id: s_iJ9MgVwCGnqZIGobbgCCcC
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 34720 王樵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_iJ9MgVwCGnqZIGobbgCCcC
            source_type: api_record
            title: 中国历代人物传记资料库：王燾（CBDB 309653）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309653&o=json
            external_identifier: CBDB:309653
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JBWSAH2Y6gAk3F76hQjFDs
        status: active
        display_name: 王燾
        merged_into_person_id: null
    - claim:
        id: c_yMGungtYmcfvvxOKb1RwOa
        subject_person_id: p_923xZ5qSMZFGgS46h7nLWU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_PWaCFJXXBRP2vf5HKKSrKh
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YdHUwqpUu_TbQ50WmUuI4r
          claim_id: c_yMGungtYmcfvvxOKb1RwOa
          source_id: s_mHFx-NtyCtBbaTeyevix_1
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 34720 王樵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_mHFx-NtyCtBbaTeyevix_1
            source_type: api_record
            title: 中国历代人物传记资料库：王夢魚（CBDB 309664）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309664&o=json
            external_identifier: CBDB:309664
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PWaCFJXXBRP2vf5HKKSrKh
        status: active
        display_name: 王夢魚
        merged_into_person_id: null
    - claim:
        id: c_jt_3hRkTK85H3Tem8COBAY
        subject_person_id: p_923xZ5qSMZFGgS46h7nLWU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_SGSt23a3Q4sV2a7h2gkPyy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E1FhwjAy3T0t99EHPn56j5
          claim_id: c_jt_3hRkTK85H3Tem8COBAY
          source_id: s_1N2e65JkSDej9J3FtFEs8f
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 34720 王樵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1N2e65JkSDej9J3FtFEs8f
            source_type: api_record
            title: 中国历代人物传记资料库：王熙（CBDB 309656）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309656&o=json
            external_identifier: CBDB:309656
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SGSt23a3Q4sV2a7h2gkPyy
        status: active
        display_name: 王熙
        merged_into_person_id: null
    - claim:
        id: c_ZYrGOyHrR18Vhcs9EYAsQ5
        subject_person_id: p_923xZ5qSMZFGgS46h7nLWU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_SJjjhnmN3svVtuzcK9Xvtw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3KbaR31zMZL-cDPLKfIU7g
          claim_id: c_ZYrGOyHrR18Vhcs9EYAsQ5
          source_id: s_Ztds3bwolP9ty4HdqVhdU9
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 34720 王樵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Ztds3bwolP9ty4HdqVhdU9
            source_type: api_record
            title: 中国历代人物传记资料库：王維熊（CBDB 309659）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309659&o=json
            external_identifier: CBDB:309659
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SJjjhnmN3svVtuzcK9Xvtw
        status: active
        display_name: 王維熊
        merged_into_person_id: null
    - claim:
        id: c_okRNOBhmjx83lyVHzWm5qH
        subject_person_id: p_923xZ5qSMZFGgS46h7nLWU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_c3dbqSkrq4n4mT2Q9rX14u
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NwoquB1dPmI7-RG717zNtU
          claim_id: c_okRNOBhmjx83lyVHzWm5qH
          source_id: s_4L3uRVf-NJuKtfWIFiWBDf
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 34720 王樵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_4L3uRVf-NJuKtfWIFiWBDf
            source_type: api_record
            title: 中国历代人物传记资料库：王然（CBDB 309652）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309652&o=json
            external_identifier: CBDB:309652
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_c3dbqSkrq4n4mT2Q9rX14u
        status: active
        display_name: 王然
        merged_into_person_id: null
    - claim:
        id: c_fUwDA-IP3K-2U4l6DYfote
        subject_person_id: p_923xZ5qSMZFGgS46h7nLWU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gj8BDarWAWGpynQXXtTNLe
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z7R6St8oACm0WK-TV_lNtP
          claim_id: c_fUwDA-IP3K-2U4l6DYfote
          source_id: s_7DpTalnYbMe3G9HU0qeAnp
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 34720 王樵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7DpTalnYbMe3G9HU0qeAnp
            source_type: api_record
            title: 中国历代人物传记资料库：王烋（CBDB 309655）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309655&o=json
            external_identifier: CBDB:309655
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gj8BDarWAWGpynQXXtTNLe
        status: active
        display_name: 王烋
        merged_into_person_id: null
    - claim:
        id: c_h_yS48m0VIojjoddcH8QA5
        subject_person_id: p_923xZ5qSMZFGgS46h7nLWU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_j6DxJzANvppv6GwgZTC3qS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DhAde9hT_IIgHZDfCDOiny
          claim_id: c_h_yS48m0VIojjoddcH8QA5
          source_id: s_BOcGsUKvlnoKBObIFxs4fk
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 34720 王樵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_BOcGsUKvlnoKBObIFxs4fk
            source_type: api_record
            title: 中国历代人物传记资料库：王點（CBDB 309654）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309654&o=json
            external_identifier: CBDB:309654
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_j6DxJzANvppv6GwgZTC3qS
        status: active
        display_name: 王點
        merged_into_person_id: null
    - claim:
        id: c_EsLwYa_g3rYo1py7BB8pn7
        subject_person_id: p_923xZ5qSMZFGgS46h7nLWU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qtxusn4jJqk5ydEQUHbQaS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y1dz3zR6reA896qRmreQ_y
          claim_id: c_EsLwYa_g3rYo1py7BB8pn7
          source_id: s_LDi84IdhcouBB4lNXb2IWY
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 34720 王樵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_LDi84IdhcouBB4lNXb2IWY
            source_type: api_record
            title: 中国历代人物传记资料库：王黯（CBDB 309650）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309650&o=json
            external_identifier: CBDB:309650
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qtxusn4jJqk5ydEQUHbQaS
        status: active
        display_name: 王黯
        merged_into_person_id: null
---

# 王樵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樵 | accepted |
| birth.date | 1521年 | accepted |
| death.date | 1599年 | accepted |
| bio.summary | 王樵（1521年—1599年），明人物。明清進士進士，籍贯金壇，身份为以疾廢、經學家，入仕進士。（中国历代人物传记资料库 CBDB 34720） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vpzDXBrQjqPJnEN64LCsPF | 王臬 | accepted |
| children | p_5Jy3mzrK4nD5ZKcdARUJuQ | 王肯堂 | accepted |
| spouses | p_bzdWKVmACjcFeJi9xUKPVd | 虞氏 | accepted |
| ancestors | p_Eb1QdbChXgN1GA8BEpt3kU | 王鎮 | accepted |
| ancestors | p_XJ6D4tBNDdCJKx5sTBjB7e | 王瀚 | accepted |
| descendants | p_FE6i55GXzPWLVER3EtdHfo | 王彥泓 | accepted |
| other | p_2JRR43piFcBKpoGfKJhFCE | 王烝 | accepted |
| other | p_9K9PGQwsoS3ZaM5p5w7UtG | 王夢羔 | accepted |
| other | p_AmDc6KHSroSoHEQCWdoMVQ | 王傑 | accepted |
| other | p_CVYQ6ZcLXbA91DnWS8v6Bb | 王維羆 | accepted |
| other | p_JBWSAH2Y6gAk3F76hQjFDs | 王燾 | accepted |
| other | p_PWaCFJXXBRP2vf5HKKSrKh | 王夢魚 | accepted |
| other | p_SGSt23a3Q4sV2a7h2gkPyy | 王熙 | accepted |
| other | p_SJjjhnmN3svVtuzcK9Xvtw | 王維熊 | accepted |
| other | p_c3dbqSkrq4n4mT2Q9rX14u | 王然 | accepted |
| other | p_gj8BDarWAWGpynQXXtTNLe | 王烋 | accepted |
| other | p_j6DxJzANvppv6GwgZTC3qS | 王點 | accepted |
| other | p_qtxusn4jJqk5ydEQUHbQaS | 王黯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王黯（CBDB 309650）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309650&o=json)
- [中国历代人物传记资料库：王燾（CBDB 309653）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309653&o=json)
- [中国历代人物传记资料库：王點（CBDB 309654）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309654&o=json)
- [中国历代人物传记资料库：王傑（CBDB 309658）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309658&o=json)
- [中国历代人物传记资料库：王肯堂（CBDB 34722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34722&o=json)
- [中国历代人物传记资料库：王夢羔（CBDB 309661）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309661&o=json)
- [中国历代人物传记资料库：王夢魚（CBDB 309664）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309664&o=json)
- [中国历代人物传记资料库：王樵（CBDB 34720）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34720&o=json)
- [中国历代人物传记资料库：王然（CBDB 309652）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309652&o=json)
- [中国历代人物传记资料库：王維羆（CBDB 309660）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309660&o=json)
- [中国历代人物传记资料库：王維熊（CBDB 309659）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309659&o=json)
- [中国历代人物传记资料库：王熙（CBDB 309656）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309656&o=json)
- [中国历代人物传记资料库：王烋（CBDB 309655）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309655&o=json)
- [中国历代人物传记资料库：王彥泓（CBDB 120462）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120462&o=json)
- [中国历代人物传记资料库：王烝（CBDB 309657）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309657&o=json)
- [中国历代人物传记资料库：虞氏(王樵妻)（CBDB 309649）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309649&o=json)
