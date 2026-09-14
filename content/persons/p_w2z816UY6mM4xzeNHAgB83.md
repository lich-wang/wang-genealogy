---
schema: wang-person/v1
id: p_w2z816UY6mM4xzeNHAgB83
status: active
merged_into: null
display_name: 王渙
revision: 11
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ENs66QU7SCpZohiuc9DzQx
        subject_person_id: p_w2z816UY6mM4xzeNHAgB83
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_12eVTsAk8yXPE8jwAiN6kB
          claim_id: c_ENs66QU7SCpZohiuc9DzQx
          source_id: s_yZ2KcGjuEEDAAR6S9EdMGA
          stance: supports
          locator: CBDB:67928
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67928）
          source: &a1
            id: s_yZ2KcGjuEEDAAR6S9EdMGA
            source_type: api_record
            title: 中国历代人物传记资料库：王渙（CBDB 67928）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67928&o=json
            external_identifier: CBDB:67928
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.030Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cFNY7w1MH4UcRND97QrC1F
        subject_person_id: p_w2z816UY6mM4xzeNHAgB83
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渙，明人物。明清進士進士，籍贯象山，入仕進士，曾任監察御史、御史、知縣。（中国历代人物传记资料库 CBDB 67928）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eh8Blgs9fioQieZ-eJOdir
          claim_id: c_cFNY7w1MH4UcRND97QrC1F
          source_id: s_yZ2KcGjuEEDAAR6S9EdMGA
          stance: supports
          locator: CBDB:67928
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_X_1b8Pkup6keMgPubje5XF
        subject_person_id: p_PbcMSPmGuF3fVvYFwz57Eb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_w2z816UY6mM4xzeNHAgB83
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SgIJ9CMT2rvXqhTUUhZqg4
          claim_id: c_X_1b8Pkup6keMgPubje5XF
          source_id: s_gZTFcD9fNkmK38N3r5jBD1
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第一百三十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_gZTFcD9fNkmK38N3r5jBD1
            source_type: api_record
            title: 中国历代人物传记资料库：王京（CBDB 269144）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269144&o=json
            external_identifier: CBDB:269144
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.805Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PbcMSPmGuF3fVvYFwz57Eb
        status: active
        display_name: 王京
        merged_into_person_id: null
  children:
    - claim:
        id: c_cL16qh1EJrXg4BQ4SHXP9b
        subject_person_id: p_w2z816UY6mM4xzeNHAgB83
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bVxT7EN2J5N6Hv8i7T9bhX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_brBxxVjZaHBRGDzuSAVvMW
          claim_id: c_cL16qh1EJrXg4BQ4SHXP9b
          source_id: s_6H5yiBaFAFmKGatFHmHp4P
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），11574：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6H5yiBaFAFmKGatFHmHp4P
            source_type: api_record
            title: 中国历代人物传记资料库：王挻（CBDB 525668）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525668&o=json
            external_identifier: CBDB:525668
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_bVxT7EN2J5N6Hv8i7T9bhX
        status: active
        display_name: 王挻
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_r4l4ymHPorcTe36lNCnG47
        subject_person_id: p_d3GLG2yi3SZLVMfnxLc5V7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_w2z816UY6mM4xzeNHAgB83
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GmXIQ2tgn3c9u7e3FK1U7L
          claim_id: c_r4l4ymHPorcTe36lNCnG47
          source_id: s_xhomToPMbnL32Qrd1DAE83
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第一百三十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xhomToPMbnL32Qrd1DAE83
            source_type: api_record
            title: 中国历代人物传记资料库：王在明（CBDB 269143）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269143&o=json
            external_identifier: CBDB:269143
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.804Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_d3GLG2yi3SZLVMfnxLc5V7
        status: active
        display_name: 王在明
        merged_into_person_id: null
    - claim:
        id: c_awJEtPB7ViPUMcqbcb_hdE
        subject_person_id: p_RfRv97Z1pxJbb55x6o4qmF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_w2z816UY6mM4xzeNHAgB83
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_83Q-CNUrsv1kX9eQuu4zQg
          claim_id: c_awJEtPB7ViPUMcqbcb_hdE
          source_id: s_rfT8XuG7QSG6P7gbXUiRNS
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第一百三十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rfT8XuG7QSG6P7gbXUiRNS
            source_type: api_record
            title: 中国历代人物传记资料库：王泰寧（CBDB 269142）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269142&o=json
            external_identifier: CBDB:269142
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_RfRv97Z1pxJbb55x6o4qmF
        status: active
        display_name: 王泰寧
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_TNcqk7KPNxkCKCQMGCpQr4
        subject_person_id: p_5PDw9rzQL8EzF7fe3aL3qA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_w2z816UY6mM4xzeNHAgB83
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8MDOHahccOq9iHJWIRCvDT
          claim_id: c_TNcqk7KPNxkCKCQMGCpQr4
          source_id: s_2fhBiIWPvLeY8loLnaE1lZ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67928 王渙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2fhBiIWPvLeY8loLnaE1lZ
            source_type: api_record
            title: 中国历代人物传记资料库：王湧（CBDB 269152）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269152&o=json
            external_identifier: CBDB:269152
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5PDw9rzQL8EzF7fe3aL3qA
        status: active
        display_name: 王湧
        merged_into_person_id: null
    - claim:
        id: c_d3s6r8Xl-G9pijA0YCd0E1
        subject_person_id: p_7a8uh72EC1952tKZbL86pk
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_w2z816UY6mM4xzeNHAgB83
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FDxYywBe8TmHzRqGR9Y0QB
          claim_id: c_d3s6r8Xl-G9pijA0YCd0E1
          source_id: s_G6SgQUqqFyH_GCvJzgqOYq
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67928 王渙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_G6SgQUqqFyH_GCvJzgqOYq
            source_type: api_record
            title: 中国历代人物传记资料库：王濠（CBDB 269153）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269153&o=json
            external_identifier: CBDB:269153
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7a8uh72EC1952tKZbL86pk
        status: active
        display_name: 王濠
        merged_into_person_id: null
    - claim:
        id: c_GoQi8lckW5pf3fC8S1gUpB
        subject_person_id: p_7b6q5NoaWiswfYc6BFQsoU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_w2z816UY6mM4xzeNHAgB83
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nzPME7btQlFJnX_Fb8a0nG
          claim_id: c_GoQi8lckW5pf3fC8S1gUpB
          source_id: s_r1es8pqIOp7XGp790aJoPW
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67928 王渙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_r1es8pqIOp7XGp790aJoPW
            source_type: api_record
            title: 中国历代人物传记资料库：王源（CBDB 269148）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269148&o=json
            external_identifier: CBDB:269148
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7b6q5NoaWiswfYc6BFQsoU
        status: active
        display_name: 王源
        merged_into_person_id: null
    - claim:
        id: c__Tl4CefZzZL1wQdcFyJ3c0
        subject_person_id: p_T66WkW6gkf2UyhSk8A2ne4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_w2z816UY6mM4xzeNHAgB83
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2KTagHFCpi4UVqGVwq1-R5
          claim_id: c__Tl4CefZzZL1wQdcFyJ3c0
          source_id: s_tLNsozr4KZ8onTpPffvyaP
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67928 王渙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_tLNsozr4KZ8onTpPffvyaP
            source_type: api_record
            title: 中国历代人物传记资料库：王澤（CBDB 269151）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269151&o=json
            external_identifier: CBDB:269151
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_T66WkW6gkf2UyhSk8A2ne4
        status: active
        display_name: 王澤
        merged_into_person_id: null
    - claim:
        id: c_v1yy6_htVsy6Fd0wEl6miD
        subject_person_id: p_aJEwPUpJaM9WZbBbyTnDtb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_w2z816UY6mM4xzeNHAgB83
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vSs2SZ2g18P60z_IiXxMiC
          claim_id: c_v1yy6_htVsy6Fd0wEl6miD
          source_id: s_UJVFaJ4QiNDYvLMalgqYWt
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67928 王渙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_UJVFaJ4QiNDYvLMalgqYWt
            source_type: api_record
            title: 中国历代人物传记资料库：王演（CBDB 269147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269147&o=json
            external_identifier: CBDB:269147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aJEwPUpJaM9WZbBbyTnDtb
        status: active
        display_name: 王演
        merged_into_person_id: null
    - claim:
        id: c_nGtqqDKWurSht1cvhKXQFS
        subject_person_id: p_duEBw4z1conX2ra9Q8wMEo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_w2z816UY6mM4xzeNHAgB83
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b9SL2haIfb74Kgk54iAMI9
          claim_id: c_nGtqqDKWurSht1cvhKXQFS
          source_id: s_r-xHoExLDZHvhI-T_TlcVM
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67928 王渙）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_r-xHoExLDZHvhI-T_TlcVM
            source_type: api_record
            title: 中国历代人物传记资料库：王涯（CBDB 269150）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269150&o=json
            external_identifier: CBDB:269150
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_duEBw4z1conX2ra9Q8wMEo
        status: active
        display_name: 王涯
        merged_into_person_id: null
---

# 王渙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王渙 | accepted |
| bio.summary | 王渙，明人物。明清進士進士，籍贯象山，入仕進士，曾任監察御史、御史、知縣。（中国历代人物传记资料库 CBDB 67928） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PbcMSPmGuF3fVvYFwz57Eb | 王京 | accepted |
| children | p_bVxT7EN2J5N6Hv8i7T9bhX | 王挻 | accepted |
| ancestors | p_d3GLG2yi3SZLVMfnxLc5V7 | 王在明 | accepted |
| ancestors | p_RfRv97Z1pxJbb55x6o4qmF | 王泰寧 | accepted |
| other | p_5PDw9rzQL8EzF7fe3aL3qA | 王湧 | accepted |
| other | p_7a8uh72EC1952tKZbL86pk | 王濠 | accepted |
| other | p_7b6q5NoaWiswfYc6BFQsoU | 王源 | accepted |
| other | p_T66WkW6gkf2UyhSk8A2ne4 | 王澤 | accepted |
| other | p_aJEwPUpJaM9WZbBbyTnDtb | 王演 | accepted |
| other | p_duEBw4z1conX2ra9Q8wMEo | 王涯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王濠（CBDB 269153）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269153&o=json)
- [中国历代人物传记资料库：王渙（CBDB 67928）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67928&o=json)
- [中国历代人物传记资料库：王京（CBDB 269144）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269144&o=json)
- [中国历代人物传记资料库：王挻（CBDB 525668）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525668&o=json)
- [中国历代人物传记资料库：王泰寧（CBDB 269142）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269142&o=json)
- [中国历代人物传记资料库：王涯（CBDB 269150）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269150&o=json)
- [中国历代人物传记资料库：王演（CBDB 269147）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269147&o=json)
- [中国历代人物传记资料库：王湧（CBDB 269152）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269152&o=json)
- [中国历代人物传记资料库：王源（CBDB 269148）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269148&o=json)
- [中国历代人物传记资料库：王在明（CBDB 269143）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269143&o=json)
- [中国历代人物传记资料库：王澤（CBDB 269151）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269151&o=json)
