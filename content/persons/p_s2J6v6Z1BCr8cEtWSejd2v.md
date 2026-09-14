---
schema: wang-person/v1
id: p_s2J6v6Z1BCr8cEtWSejd2v
status: active
merged_into: null
display_name: 王時習
cbdb_id: 202373
revision: 14
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GDgs9oFuHoDwTi4jfrdwTo
        subject_person_id: p_s2J6v6Z1BCr8cEtWSejd2v
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時習（生于1375年），明人物。明清進士進士，籍贯南康，入仕進士，曾任巡按御史。（中国历代人物传记资料库 CBDB 202373）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_VB_lZf21OkXQwlUnHrUq-i
          claim_id: c_GDgs9oFuHoDwTi4jfrdwTo
          source_id: s_nKdsMTsdzQnygLpDMcBMeK
          stance: supports
          locator: CBDB:202373
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_nKdsMTsdzQnygLpDMcBMeK
            source_type: api_record
            title: 中国历代人物传记资料库：王時習（CBDB 202373）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202373&o=json
            external_identifier: CBDB:202373
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_n4qLZyAjLH9aJwEKiE9Yih
        subject_person_id: p_s2J6v6Z1BCr8cEtWSejd2v
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1375年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1375-01-01
            latest: 1375-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_z5kW15tucuD5Adi4fWvvHh
          claim_id: c_n4qLZyAjLH9aJwEKiE9Yih
          source_id: s_nKdsMTsdzQnygLpDMcBMeK
          stance: supports
          locator: CBDB:202373
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1375
          source:
            id: s_nKdsMTsdzQnygLpDMcBMeK
            source_type: api_record
            title: 中国历代人物传记资料库：王時習（CBDB 202373）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202373&o=json
            external_identifier: CBDB:202373
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Gn14THt78ygohs1YtUJ9iD
        subject_person_id: p_s2J6v6Z1BCr8cEtWSejd2v
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時習
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LxBZ54bVMTwao86agMJrVA
          claim_id: c_Gn14THt78ygohs1YtUJ9iD
          source_id: s_nKdsMTsdzQnygLpDMcBMeK
          stance: supports
          locator: CBDB:202373
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1375
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gzXtf57vMFWevysZ8_7Iyw
        subject_person_id: p_SeUwbsi3ek9as5xjE9GYzB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_s2J6v6Z1BCr8cEtWSejd2v
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UDI_bH0f9RYZ6GuF-d0dMF
          claim_id: c_gzXtf57vMFWevysZ8_7Iyw
          source_id: s_6kwmYf1L3ZceQWBXBcMTf8
          stance: supports
          locator: 永樂十年進士登科錄:一卷，第三甲第三十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6kwmYf1L3ZceQWBXBcMTf8
            source_type: api_record
            title: 中国历代人物传记资料库：王敏道（CBDB 287084）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287084&o=json
            external_identifier: CBDB:287084
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.250Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_SeUwbsi3ek9as5xjE9GYzB
        status: active
        display_name: 王敏道
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_ZCHbhvNME0fPmW5_fadut1
        subject_person_id: p_duE2PBHEvrNuc5jHv2HX4E
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_s2J6v6Z1BCr8cEtWSejd2v
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NDRBKZT7-vqo1OomTLmltz
          claim_id: c_ZCHbhvNME0fPmW5_fadut1
          source_id: s_hBwua97tprBSm7zJD5A9J3
          stance: supports
          locator: 永樂十年進士登科錄:一卷，第三甲第三十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hBwua97tprBSm7zJD5A9J3
            source_type: api_record
            title: 中国历代人物传记资料库：王誠（CBDB 287082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287082&o=json
            external_identifier: CBDB:287082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.250Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_duE2PBHEvrNuc5jHv2HX4E
        status: active
        display_name: 王誠
        merged_into_person_id: null
    - claim:
        id: c_STGafRP1nyxniRZP0YNCCW
        subject_person_id: p_D3iizU76zuq4k823LE7ekz
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_s2J6v6Z1BCr8cEtWSejd2v
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4_pxYaHPCGJ3SfOYhYiff4
          claim_id: c_STGafRP1nyxniRZP0YNCCW
          source_id: s_YpdEuzKCaPFdh96h2pNEaR
          stance: supports
          locator: 永樂十年進士登科錄:一卷，第三甲第三十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YpdEuzKCaPFdh96h2pNEaR
            source_type: api_record
            title: 中国历代人物传记资料库：王啟賢（CBDB 287083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287083&o=json
            external_identifier: CBDB:287083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.953Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_D3iizU76zuq4k823LE7ekz
        status: active
        display_name: 王啟賢
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_rmAjvpHYZ_1Iari2ZDEYNf
        subject_person_id: p_3jj1QTWJPD4wDNKMDdPvcK
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_s2J6v6Z1BCr8cEtWSejd2v
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ltLGGfQuKuNFLMjtNaFQUp
          claim_id: c_rmAjvpHYZ_1Iari2ZDEYNf
          source_id: s_2bSvugRNfKKCIz566ocSl4
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202373 王時習）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2bSvugRNfKKCIz566ocSl4
            source_type: api_record
            title: 中国历代人物传记资料库：王時俊（CBDB 287092）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287092&o=json
            external_identifier: CBDB:287092
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3jj1QTWJPD4wDNKMDdPvcK
        status: active
        display_name: 王時俊
        merged_into_person_id: null
    - claim:
        id: c_EloHU3I-xzPkDVwIDMD-4w
        subject_person_id: p_BXAv45PCN4HiV4iu43Sso3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_s2J6v6Z1BCr8cEtWSejd2v
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S1CUsCY1FeoGJpqX4ldhHA
          claim_id: c_EloHU3I-xzPkDVwIDMD-4w
          source_id: s_mNUzcTxu3y_CbRU3rE-Xhx
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202373 王時習）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_mNUzcTxu3y_CbRU3rE-Xhx
            source_type: api_record
            title: 中国历代人物传记资料库：王時方（CBDB 287094）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287094&o=json
            external_identifier: CBDB:287094
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BXAv45PCN4HiV4iu43Sso3
        status: active
        display_name: 王時方
        merged_into_person_id: null
    - claim:
        id: c_bSQdnc6Ueqp-bgsIxvhEoN
        subject_person_id: p_DbQa1LeKcZQQ96f1WNkK2a
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_s2J6v6Z1BCr8cEtWSejd2v
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_m8qDG51xicCXDTe2N4YkUB
          claim_id: c_bSQdnc6Ueqp-bgsIxvhEoN
          source_id: s_TZuCkxn47Rs3Owmc3LELr3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202373 王時習）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_TZuCkxn47Rs3Owmc3LELr3
            source_type: api_record
            title: 中国历代人物传记资料库：王時某（CBDB 287093）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287093&o=json
            external_identifier: CBDB:287093
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DbQa1LeKcZQQ96f1WNkK2a
        status: active
        display_name: 王時某
        merged_into_person_id: null
    - claim:
        id: c_8L_9S-suOXbdj8PSkw4fRK
        subject_person_id: p_EjfvNZV4MZXzkEhT5KVGi1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_s2J6v6Z1BCr8cEtWSejd2v
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2bIY39R62LZZIYKQHbsuyS
          claim_id: c_8L_9S-suOXbdj8PSkw4fRK
          source_id: s_ScEW4IWoxjBVOgYGKv4EyZ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202373 王時習）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ScEW4IWoxjBVOgYGKv4EyZ
            source_type: api_record
            title: 中国历代人物传记资料库：王時昶（CBDB 287098）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287098&o=json
            external_identifier: CBDB:287098
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EjfvNZV4MZXzkEhT5KVGi1
        status: active
        display_name: 王時昶
        merged_into_person_id: null
    - claim:
        id: c_9-ir0bGMqGEXTnfs91buLU
        subject_person_id: p_Lmqnm8oPSNLn94tawP91fT
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_s2J6v6Z1BCr8cEtWSejd2v
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g2GEWQdFxF8KZ1NZps3jm0
          claim_id: c_9-ir0bGMqGEXTnfs91buLU
          source_id: s_r8DJUtIWzwD1PtSzDc3vBl
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202373 王時習）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_r8DJUtIWzwD1PtSzDc3vBl
            source_type: api_record
            title: 中国历代人物传记资料库：王時昌（CBDB 287095）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287095&o=json
            external_identifier: CBDB:287095
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Lmqnm8oPSNLn94tawP91fT
        status: active
        display_name: 王時昌
        merged_into_person_id: null
    - claim:
        id: c_Iam1XUa3ZDOzFBeMX4myNe
        subject_person_id: p_MB6gEJBWL8UhCatFpRHAQw
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_s2J6v6Z1BCr8cEtWSejd2v
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ciTNo3oDA-LH-zrt-HXWLB
          claim_id: c_Iam1XUa3ZDOzFBeMX4myNe
          source_id: s_SbqRPndsVdzoyUNVhYNUcE
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202373 王時習）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_SbqRPndsVdzoyUNVhYNUcE
            source_type: api_record
            title: 中国历代人物传记资料库：王時昱（CBDB 287091）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287091&o=json
            external_identifier: CBDB:287091
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MB6gEJBWL8UhCatFpRHAQw
        status: active
        display_name: 王時昱
        merged_into_person_id: null
    - claim:
        id: c_bUYY_ydBRRX7uRUG80ZGGY
        subject_person_id: p_Tt5rjzPc6tmNvVadja1GQ6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_s2J6v6Z1BCr8cEtWSejd2v
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6X9smheGe5yqByaP5RDpSH
          claim_id: c_bUYY_ydBRRX7uRUG80ZGGY
          source_id: s_tZW9YMmWjUvnrde_0vTG0I
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202373 王時習）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_tZW9YMmWjUvnrde_0vTG0I
            source_type: api_record
            title: 中国历代人物传记资料库：王時亨（CBDB 287089）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287089&o=json
            external_identifier: CBDB:287089
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Tt5rjzPc6tmNvVadja1GQ6
        status: active
        display_name: 王時亨
        merged_into_person_id: null
    - claim:
        id: c_HR_l9DFNCCmQ4ELtmzWSlN
        subject_person_id: p_gxdvmoLmnhP9FqKQCCSChB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_s2J6v6Z1BCr8cEtWSejd2v
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AkSoLaXcSnow0tp8PQNMK7
          claim_id: c_HR_l9DFNCCmQ4ELtmzWSlN
          source_id: s_qAgkAR1039SPNW8AOd4dLf
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202373 王時習）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qAgkAR1039SPNW8AOd4dLf
            source_type: api_record
            title: 中国历代人物传记资料库：王時用（CBDB 287088）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287088&o=json
            external_identifier: CBDB:287088
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gxdvmoLmnhP9FqKQCCSChB
        status: active
        display_name: 王時用
        merged_into_person_id: null
    - claim:
        id: c_ety-LYFvJh82zbkcHwwLg0
        subject_person_id: p_s2J6v6Z1BCr8cEtWSejd2v
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sj2b2LsFFAKHhMYVpG5DqE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_15l-HCYswvftsCvVs7S1TJ
          claim_id: c_ety-LYFvJh82zbkcHwwLg0
          source_id: s_0DHYBfreyc4kQJ5PgG7OC7
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202373 王時習）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0DHYBfreyc4kQJ5PgG7OC7
            source_type: api_record
            title: 中国历代人物传记资料库：王時彥（CBDB 287099）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287099&o=json
            external_identifier: CBDB:287099
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sj2b2LsFFAKHhMYVpG5DqE
        status: active
        display_name: 王時彥
        merged_into_person_id: null
    - claim:
        id: c_BXx3luCaqpGtdZjDpZLlWk
        subject_person_id: p_s2J6v6Z1BCr8cEtWSejd2v
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_y5BraMjSLkJg7wJzUqfvAg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mlktg0bIyL949aFI7MP0Vs
          claim_id: c_BXx3luCaqpGtdZjDpZLlWk
          source_id: s_4ouFMZZAdas_VNmoqmIt1b
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202373 王時習）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_4ouFMZZAdas_VNmoqmIt1b
            source_type: api_record
            title: 中国历代人物传记资料库：王時閏（CBDB 287090）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287090&o=json
            external_identifier: CBDB:287090
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_y5BraMjSLkJg7wJzUqfvAg
        status: active
        display_name: 王時閏
        merged_into_person_id: null
---

# 王時習

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王時習（生于1375年），明人物。明清進士進士，籍贯南康，入仕進士，曾任巡按御史。（中国历代人物传记资料库 CBDB 202373） | accepted |
| birth.date | 1375年 | accepted |
| name.primary | 王時習 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SeUwbsi3ek9as5xjE9GYzB | 王敏道 | accepted |
| ancestors | p_duE2PBHEvrNuc5jHv2HX4E | 王誠 | accepted |
| ancestors | p_D3iizU76zuq4k823LE7ekz | 王啟賢 | accepted |
| other | p_3jj1QTWJPD4wDNKMDdPvcK | 王時俊 | accepted |
| other | p_BXAv45PCN4HiV4iu43Sso3 | 王時方 | accepted |
| other | p_DbQa1LeKcZQQ96f1WNkK2a | 王時某 | accepted |
| other | p_EjfvNZV4MZXzkEhT5KVGi1 | 王時昶 | accepted |
| other | p_Lmqnm8oPSNLn94tawP91fT | 王時昌 | accepted |
| other | p_MB6gEJBWL8UhCatFpRHAQw | 王時昱 | accepted |
| other | p_Tt5rjzPc6tmNvVadja1GQ6 | 王時亨 | accepted |
| other | p_gxdvmoLmnhP9FqKQCCSChB | 王時用 | accepted |
| other | p_sj2b2LsFFAKHhMYVpG5DqE | 王時彥 | accepted |
| other | p_y5BraMjSLkJg7wJzUqfvAg | 王時閏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王誠（CBDB 287082）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287082&o=json)
- [中国历代人物传记资料库：王敏道（CBDB 287084）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287084&o=json)
- [中国历代人物传记资料库：王啟賢（CBDB 287083）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287083&o=json)
- [中国历代人物传记资料库：王時昌（CBDB 287095）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287095&o=json)
- [中国历代人物传记资料库：王時昶（CBDB 287098）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287098&o=json)
- [中国历代人物传记资料库：王時方（CBDB 287094）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287094&o=json)
- [中国历代人物传记资料库：王時亨（CBDB 287089）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287089&o=json)
- [中国历代人物传记资料库：王時俊（CBDB 287092）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287092&o=json)
- [中国历代人物传记资料库：王時某（CBDB 287093）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287093&o=json)
- [中国历代人物传记资料库：王時閏（CBDB 287090）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287090&o=json)
- [中国历代人物传记资料库：王時習（CBDB 202373）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202373&o=json)
- [中国历代人物传记资料库：王時彥（CBDB 287099）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287099&o=json)
- [中国历代人物传记资料库：王時用（CBDB 287088）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287088&o=json)
- [中国历代人物传记资料库：王時昱（CBDB 287091）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=287091&o=json)
