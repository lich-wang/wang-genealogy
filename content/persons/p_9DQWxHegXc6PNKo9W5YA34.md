---
schema: wang-person/v1
id: p_9DQWxHegXc6PNKo9W5YA34
status: active
merged_into: null
display_name: 王宗舜
revision: 12
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AE5RVJBhV1YPfGBx6wJDms
        subject_person_id: p_9DQWxHegXc6PNKo9W5YA34
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗舜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_R4rxz1L1JdX3vJDFAbALHk
          claim_id: c_AE5RVJBhV1YPfGBx6wJDms
          source_id: s_Eq4KE7NpydGsQ4HTeAspV1
          stance: supports
          locator: CBDB:126560
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126560）
          source: &a1
            id: s_Eq4KE7NpydGsQ4HTeAspV1
            source_type: api_record
            title: 中国历代人物传记资料库：王宗舜（CBDB 126560）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126560&o=json
            external_identifier: CBDB:126560
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.025Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PS7rbgFcKfamLDEwnRvtDV
        subject_person_id: p_9DQWxHegXc6PNKo9W5YA34
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1519年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BC7KN9PUQVUmLRaFFdthaa
          claim_id: c_PS7rbgFcKfamLDEwnRvtDV
          source_id: s_Eq4KE7NpydGsQ4HTeAspV1
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
        id: c_4xZjpK35dFsKqeajZgbGiM
        subject_person_id: p_9DQWxHegXc6PNKo9W5YA34
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1594年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f2GJTN7NLF8k8P35LyGme6
          claim_id: c_4xZjpK35dFsKqeajZgbGiM
          source_id: s_Eq4KE7NpydGsQ4HTeAspV1
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
        id: c_kQQX7L7WytXbxj5XkZdG93
        subject_person_id: p_9DQWxHegXc6PNKo9W5YA34
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗舜（1519年—1594年），明人物。明清進士進士，籍贯聞喜，入仕進士，曾任府推官。（中国历代人物传记资料库 CBDB 126560）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FOyy1umsWoinZkPXtAddOI
          claim_id: c_kQQX7L7WytXbxj5XkZdG93
          source_id: s_Eq4KE7NpydGsQ4HTeAspV1
          stance: supports
          locator: CBDB:126560
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_iuMyfrONJ97UgooVsF91tI
        subject_person_id: p_oBz6NLHmFuUeBahrr88xPZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9DQWxHegXc6PNKo9W5YA34
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ECq9XVnC48-I5gZpwvEv0p
          claim_id: c_iuMyfrONJ97UgooVsF91tI
          source_id: s_EB55GLGH4yBFH7R5XfAe27
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第一百六十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EB55GLGH4yBFH7R5XfAe27
            source_type: api_record
            title: 中国历代人物传记资料库：王澄（CBDB 317688）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317688&o=json
            external_identifier: CBDB:317688
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.978Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_oBz6NLHmFuUeBahrr88xPZ
        status: active
        display_name: 王澄
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_BXpgUkrOGX1yqH05Qubwkb
        subject_person_id: p_1hVXBXzb9AqnWg7U8mKs9Q
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9DQWxHegXc6PNKo9W5YA34
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cOLCYXR7braK14p2CzL9OZ
          claim_id: c_BXpgUkrOGX1yqH05Qubwkb
          source_id: s_nPN3aAkwLKTrcUCaQQDC7G
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第一百六十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nPN3aAkwLKTrcUCaQQDC7G
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 317686）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317686&o=json
            external_identifier: CBDB:317686
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.978Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1hVXBXzb9AqnWg7U8mKs9Q
        status: active
        display_name: 王佐
        merged_into_person_id: null
    - claim:
        id: c_ny72w_7Sj39tplTYdhMAci
        subject_person_id: p_4wa6dwQ4GC2qrjBJkYdiqF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9DQWxHegXc6PNKo9W5YA34
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p81NfSx1_njb4_Hfpx2rBe
          claim_id: c_ny72w_7Sj39tplTYdhMAci
          source_id: s_4KEm7qFZf4iLMi98zEgHm3
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第一百六十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4KEm7qFZf4iLMi98zEgHm3
            source_type: api_record
            title: 中国历代人物传记资料库：王懋（CBDB 317687）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317687&o=json
            external_identifier: CBDB:317687
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.978Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4wa6dwQ4GC2qrjBJkYdiqF
        status: active
        display_name: 王懋
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_bx2WzszXfCYYC6ONzFIkW9
        subject_person_id: p_2BZTYtweXYja81g4qeSs2i
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_9DQWxHegXc6PNKo9W5YA34
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wSlSuOoiXQMujM1ZIE5AYR
          claim_id: c_bx2WzszXfCYYC6ONzFIkW9
          source_id: s_P20B1JZxBP26lsfynwSUwf
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126560 王宗舜）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_P20B1JZxBP26lsfynwSUwf
            source_type: api_record
            title: 中国历代人物传记资料库：王宗孔（CBDB 317693）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317693&o=json
            external_identifier: CBDB:317693
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2BZTYtweXYja81g4qeSs2i
        status: active
        display_name: 王宗孔
        merged_into_person_id: null
    - claim:
        id: c_6IsLxJKIts6jnEVrJfLB7m
        subject_person_id: p_9DQWxHegXc6PNKo9W5YA34
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_AUm5weM8G3aQMhoQ6WrDHY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5TlgRRr5gF2MH4sw5COnO6
          claim_id: c_6IsLxJKIts6jnEVrJfLB7m
          source_id: s_ImW7hmTPVJ8Kvm0hggDSpw
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126560 王宗舜）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ImW7hmTPVJ8Kvm0hggDSpw
            source_type: api_record
            title: 中国历代人物传记资料库：王宗夏（CBDB 317692）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317692&o=json
            external_identifier: CBDB:317692
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AUm5weM8G3aQMhoQ6WrDHY
        status: active
        display_name: 王宗夏
        merged_into_person_id: null
    - claim:
        id: c_Di36tGdjc8prKvOpUezpcP
        subject_person_id: p_9DQWxHegXc6PNKo9W5YA34
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_KzJALsbQkFcqCtr3grZEAQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cUsSA-pkXgeqsUamkCxIQC
          claim_id: c_Di36tGdjc8prKvOpUezpcP
          source_id: s_9JYlIQR_vnXPtdstPBk6Ym
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126560 王宗舜）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_9JYlIQR_vnXPtdstPBk6Ym
            source_type: api_record
            title: 中国历代人物传记资料库：王宗武（CBDB 317700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317700&o=json
            external_identifier: CBDB:317700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KzJALsbQkFcqCtr3grZEAQ
        status: active
        display_name: 王宗武
        merged_into_person_id: null
    - claim:
        id: c_xbyIqav2lQLBKbPi3UPL3x
        subject_person_id: p_9DQWxHegXc6PNKo9W5YA34
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_MEVC7nLdbiCDqY72MuUAmm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t4iiE--ZPl481_O5EP5mad
          claim_id: c_xbyIqav2lQLBKbPi3UPL3x
          source_id: s_5goB6ZCoEAj-RRYJAN_89m
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126560 王宗舜）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5goB6ZCoEAj-RRYJAN_89m
            source_type: api_record
            title: 中国历代人物传记资料库：王宗湯（CBDB 317698）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317698&o=json
            external_identifier: CBDB:317698
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MEVC7nLdbiCDqY72MuUAmm
        status: active
        display_name: 王宗湯
        merged_into_person_id: null
    - claim:
        id: c_1tuwO14Z8MgBdgeSKf-nYs
        subject_person_id: p_9DQWxHegXc6PNKo9W5YA34
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_WSxqscNRKPRdaJc2ZEcAPF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dTOxE6cb6gVaZD7ul3fUyk
          claim_id: c_1tuwO14Z8MgBdgeSKf-nYs
          source_id: s_n2Lw6xW2c9pFKUkxx97HHS
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126560 王宗舜）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_n2Lw6xW2c9pFKUkxx97HHS
            source_type: api_record
            title: 中国历代人物传记资料库：王宗文（CBDB 317699）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317699&o=json
            external_identifier: CBDB:317699
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WSxqscNRKPRdaJc2ZEcAPF
        status: active
        display_name: 王宗文
        merged_into_person_id: null
    - claim:
        id: c_q2KtnH60023VpT4CwaHISa
        subject_person_id: p_9DQWxHegXc6PNKo9W5YA34
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZCSuUHoy8LB9y37MGJqtLn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lSfP6_cTFR4F6TPdfg91Xc
          claim_id: c_q2KtnH60023VpT4CwaHISa
          source_id: s_rv1VIdgp4U7XJWY1rSGz7i
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126560 王宗舜）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_rv1VIdgp4U7XJWY1rSGz7i
            source_type: api_record
            title: 中国历代人物传记资料库：王宗禹（CBDB 317697）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317697&o=json
            external_identifier: CBDB:317697
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZCSuUHoy8LB9y37MGJqtLn
        status: active
        display_name: 王宗禹
        merged_into_person_id: null
    - claim:
        id: c_JRxawkYNQ3YhV2zNs-CSpk
        subject_person_id: p_9DQWxHegXc6PNKo9W5YA34
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rXe3KCvrB8nAMh6vAeQnSM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_84PjRES6Mrygzeh4xymOhC
          claim_id: c_JRxawkYNQ3YhV2zNs-CSpk
          source_id: s_lbdlwWaiqnwGY70BjoNKox
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126560 王宗舜）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_lbdlwWaiqnwGY70BjoNKox
            source_type: api_record
            title: 中国历代人物传记资料库：王宗堯（CBDB 317694）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317694&o=json
            external_identifier: CBDB:317694
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rXe3KCvrB8nAMh6vAeQnSM
        status: active
        display_name: 王宗堯
        merged_into_person_id: null
    - claim:
        id: c_RvAAK6TjBc2wK-355ybwOP
        subject_person_id: p_9DQWxHegXc6PNKo9W5YA34
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_w5cSBr9rgK9hC3xW7Cp3AH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HfPsHGLlMyWLQh83JkDAx3
          claim_id: c_RvAAK6TjBc2wK-355ybwOP
          source_id: s_S8Ye9p11_Rr44WEBUysFSr
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126560 王宗舜）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_S8Ye9p11_Rr44WEBUysFSr
            source_type: api_record
            title: 中国历代人物传记资料库：王宗孟（CBDB 317695）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317695&o=json
            external_identifier: CBDB:317695
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_w5cSBr9rgK9hC3xW7Cp3AH
        status: active
        display_name: 王宗孟
        merged_into_person_id: null
---

# 王宗舜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗舜 | accepted |
| birth.date | 1519年 | accepted |
| death.date | 1594年 | accepted |
| bio.summary | 王宗舜（1519年—1594年），明人物。明清進士進士，籍贯聞喜，入仕進士，曾任府推官。（中国历代人物传记资料库 CBDB 126560） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oBz6NLHmFuUeBahrr88xPZ | 王澄 | accepted |
| ancestors | p_1hVXBXzb9AqnWg7U8mKs9Q | 王佐 | accepted |
| ancestors | p_4wa6dwQ4GC2qrjBJkYdiqF | 王懋 | accepted |
| other | p_2BZTYtweXYja81g4qeSs2i | 王宗孔 | accepted |
| other | p_AUm5weM8G3aQMhoQ6WrDHY | 王宗夏 | accepted |
| other | p_KzJALsbQkFcqCtr3grZEAQ | 王宗武 | accepted |
| other | p_MEVC7nLdbiCDqY72MuUAmm | 王宗湯 | accepted |
| other | p_WSxqscNRKPRdaJc2ZEcAPF | 王宗文 | accepted |
| other | p_ZCSuUHoy8LB9y37MGJqtLn | 王宗禹 | accepted |
| other | p_rXe3KCvrB8nAMh6vAeQnSM | 王宗堯 | accepted |
| other | p_w5cSBr9rgK9hC3xW7Cp3AH | 王宗孟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王澄（CBDB 317688）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317688&o=json)
- [中国历代人物传记资料库：王懋（CBDB 317687）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317687&o=json)
- [中国历代人物传记资料库：王宗孔（CBDB 317693）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317693&o=json)
- [中国历代人物传记资料库：王宗孟（CBDB 317695）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317695&o=json)
- [中国历代人物传记资料库：王宗舜（CBDB 126560）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126560&o=json)
- [中国历代人物传记资料库：王宗湯（CBDB 317698）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317698&o=json)
- [中国历代人物传记资料库：王宗文（CBDB 317699）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317699&o=json)
- [中国历代人物传记资料库：王宗武（CBDB 317700）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317700&o=json)
- [中国历代人物传记资料库：王宗夏（CBDB 317692）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317692&o=json)
- [中国历代人物传记资料库：王宗堯（CBDB 317694）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317694&o=json)
- [中国历代人物传记资料库：王宗禹（CBDB 317697）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317697&o=json)
- [中国历代人物传记资料库：王佐（CBDB 317686）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317686&o=json)
