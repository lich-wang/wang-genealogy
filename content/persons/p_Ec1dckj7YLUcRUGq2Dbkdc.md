---
schema: wang-person/v1
id: p_Ec1dckj7YLUcRUGq2Dbkdc
status: active
merged_into: null
display_name: 王尚絅
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J735hzb5HC9sMATu9ceN4k
        subject_person_id: p_Ec1dckj7YLUcRUGq2Dbkdc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚絅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_duusivjvVuj31ZaRwTXpz5
          claim_id: c_J735hzb5HC9sMATu9ceN4k
          source_id: s_wQuGo7m8uxR374JaTqtXBG
          stance: supports
          locator: CBDB:126574
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126574）
          source: &a1
            id: s_wQuGo7m8uxR374JaTqtXBG
            source_type: api_record
            title: 中国历代人物传记资料库：王尚絅（CBDB 126574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126574&o=json
            external_identifier: CBDB:126574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.179Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_xUEpEcVtc343yyaT28wu2H
        subject_person_id: p_Ec1dckj7YLUcRUGq2Dbkdc
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1478年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G15fR7kvtmk71r5kKuEt4f
          claim_id: c_xUEpEcVtc343yyaT28wu2H
          source_id: s_wQuGo7m8uxR374JaTqtXBG
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
        id: c_rTi1m4WhFpqtfqBHhQ7zNW
        subject_person_id: p_Ec1dckj7YLUcRUGq2Dbkdc
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1531年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d8k9HAsoXH21egFP133k3M
          claim_id: c_rTi1m4WhFpqtfqBHhQ7zNW
          source_id: s_wQuGo7m8uxR374JaTqtXBG
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
        id: c_FWNwi2w8CjXL3sJpPxRFVn
        subject_person_id: p_Ec1dckj7YLUcRUGq2Dbkdc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚絅（1478年—1531年），明人物。明清進士進士，籍贯郟縣，入仕進士。（中国历代人物传记资料库 CBDB 126574）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_M3QhS5GbL-1yb5r0dGl4wa
          claim_id: c_FWNwi2w8CjXL3sJpPxRFVn
          source_id: s_wQuGo7m8uxR374JaTqtXBG
          stance: supports
          locator: CBDB:126574
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_24qkfeESX_xrM-_nldnFnI
        subject_person_id: p_BGWgef2Z8E8vPL41NM62UK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ec1dckj7YLUcRUGq2Dbkdc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GvWjV-1_vAaeC0bmrGc0Qw
          claim_id: c_24qkfeESX_xrM-_nldnFnI
          source_id: s_Umd39jp26Ki6HaZcJDWFSZ
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Umd39jp26Ki6HaZcJDWFSZ
            source_type: api_record
            title: 中国历代人物传记资料库：王璇（CBDB 269868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269868&o=json
            external_identifier: CBDB:269868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.820Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BGWgef2Z8E8vPL41NM62UK
        status: active
        display_name: 王璇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_I4u4rSNWBBck4VMQTI4Mjp
        subject_person_id: p_4yGj1H3gVFynqBDVX7MFH7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Ec1dckj7YLUcRUGq2Dbkdc
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MCMYCbZfg2UO-za8aUSk65
          claim_id: c_I4u4rSNWBBck4VMQTI4Mjp
          source_id: s_9AKBa4f5bA2MRFAVm9yroq
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9AKBa4f5bA2MRFAVm9yroq
            source_type: api_record
            title: 中国历代人物传记资料库：王斌（CBDB 269866）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269866&o=json
            external_identifier: CBDB:269866
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.819Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4yGj1H3gVFynqBDVX7MFH7
        status: active
        display_name: 王斌
        merged_into_person_id: null
    - claim:
        id: c_0Rr8hgHuVtMr0SlPf6Vw_G
        subject_person_id: p_Ebxtu5NwDC3XtdY1z6PQAN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Ec1dckj7YLUcRUGq2Dbkdc
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dH3hn1Ky1JLO-dcwuIGQoa
          claim_id: c_0Rr8hgHuVtMr0SlPf6Vw_G
          source_id: s_rukb6YE3QQGyiMcXT7DB75
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_rukb6YE3QQGyiMcXT7DB75
            source_type: api_record
            title: 中国历代人物传记资料库：王宗（CBDB 269867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269867&o=json
            external_identifier: CBDB:269867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.820Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Ebxtu5NwDC3XtdY1z6PQAN
        status: active
        display_name: 王宗
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_MeDnxETmdNQUuVHuLEcG4Y
        subject_person_id: p_Ec1dckj7YLUcRUGq2Dbkdc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_JkvWK4EoDBApW4LQtrVXgV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ic5R_IreC-eLPg0QidceFD
          claim_id: c_MeDnxETmdNQUuVHuLEcG4Y
          source_id: s_wPhjlsuGgEPcmjoxiOMWyi
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126574 王尚絅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_wPhjlsuGgEPcmjoxiOMWyi
            source_type: api_record
            title: 中国历代人物传记资料库：王尚明（CBDB 269875）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269875&o=json
            external_identifier: CBDB:269875
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JkvWK4EoDBApW4LQtrVXgV
        status: active
        display_name: 王尚明
        merged_into_person_id: null
    - claim:
        id: c_331r2YQl9eeU7ufN8CRvhj
        subject_person_id: p_Ec1dckj7YLUcRUGq2Dbkdc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NwL4A3Z1LNjwm9mt2PVtDW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_86MPLXvn9HfdTK_8cwu4tD
          claim_id: c_331r2YQl9eeU7ufN8CRvhj
          source_id: s_dvAoqSuIw0MPKAK4llL0Vl
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126574 王尚絅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dvAoqSuIw0MPKAK4llL0Vl
            source_type: api_record
            title: 中国历代人物传记资料库：王尚忠（CBDB 269871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269871&o=json
            external_identifier: CBDB:269871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NwL4A3Z1LNjwm9mt2PVtDW
        status: active
        display_name: 王尚忠
        merged_into_person_id: null
    - claim:
        id: c_HjmxiJ6vISwriHO2mvLZ19
        subject_person_id: p_Ec1dckj7YLUcRUGq2Dbkdc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gKHZ5LMG5LcaxdFf9REDd4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wCl9oB9EW4HTiNuhLzvszP
          claim_id: c_HjmxiJ6vISwriHO2mvLZ19
          source_id: s_Qm04kJR6NqOwk1VleGhwpO
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126574 王尚絅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Qm04kJR6NqOwk1VleGhwpO
            source_type: api_record
            title: 中国历代人物传记资料库：王尚志（CBDB 269874）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269874&o=json
            external_identifier: CBDB:269874
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gKHZ5LMG5LcaxdFf9REDd4
        status: active
        display_name: 王尚志
        merged_into_person_id: null
    - claim:
        id: c_s4qSYmIOadeq2XH6bNGIT7
        subject_person_id: p_Ec1dckj7YLUcRUGq2Dbkdc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ouA37acd4aaGEAdDoiFLUw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L-jWa2tIu35jGLTck5n9a1
          claim_id: c_s4qSYmIOadeq2XH6bNGIT7
          source_id: s_4j76C1maB6PljwhBlDCPPE
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126574 王尚絅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_4j76C1maB6PljwhBlDCPPE
            source_type: api_record
            title: 中国历代人物传记资料库：王尚文（CBDB 269873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269873&o=json
            external_identifier: CBDB:269873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ouA37acd4aaGEAdDoiFLUw
        status: active
        display_name: 王尚文
        merged_into_person_id: null
    - claim:
        id: c_qMhjVD5ca04Q-UE3uQzYEY
        subject_person_id: p_Ec1dckj7YLUcRUGq2Dbkdc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zfn3sYKH5Tqqef4kMSEFmQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_saZICwSNpFNQ61fAW414pp
          claim_id: c_qMhjVD5ca04Q-UE3uQzYEY
          source_id: s_F96D1dkcvOgPO8rtLQGg73
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126574 王尚絅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_F96D1dkcvOgPO8rtLQGg73
            source_type: api_record
            title: 中国历代人物传记资料库：王尚簡（CBDB 269876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269876&o=json
            external_identifier: CBDB:269876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zfn3sYKH5Tqqef4kMSEFmQ
        status: active
        display_name: 王尚簡
        merged_into_person_id: null
---

# 王尚絅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尚絅 | accepted |
| birth.date | 1478年 | accepted |
| death.date | 1531年 | accepted |
| bio.summary | 王尚絅（1478年—1531年），明人物。明清進士進士，籍贯郟縣，入仕進士。（中国历代人物传记资料库 CBDB 126574） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BGWgef2Z8E8vPL41NM62UK | 王璇 | accepted |
| ancestors | p_4yGj1H3gVFynqBDVX7MFH7 | 王斌 | accepted |
| ancestors | p_Ebxtu5NwDC3XtdY1z6PQAN | 王宗 | accepted |
| other | p_JkvWK4EoDBApW4LQtrVXgV | 王尚明 | accepted |
| other | p_NwL4A3Z1LNjwm9mt2PVtDW | 王尚忠 | accepted |
| other | p_gKHZ5LMG5LcaxdFf9REDd4 | 王尚志 | accepted |
| other | p_ouA37acd4aaGEAdDoiFLUw | 王尚文 | accepted |
| other | p_zfn3sYKH5Tqqef4kMSEFmQ | 王尚簡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王斌（CBDB 269866）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269866&o=json)
- [中国历代人物传记资料库：王尚簡（CBDB 269876）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269876&o=json)
- [中国历代人物传记资料库：王尚絅（CBDB 126574）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126574&o=json)
- [中国历代人物传记资料库：王尚明（CBDB 269875）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269875&o=json)
- [中国历代人物传记资料库：王尚文（CBDB 269873）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269873&o=json)
- [中国历代人物传记资料库：王尚志（CBDB 269874）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269874&o=json)
- [中国历代人物传记资料库：王尚忠（CBDB 269871）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269871&o=json)
- [中国历代人物传记资料库：王璇（CBDB 269868）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269868&o=json)
- [中国历代人物传记资料库：王宗（CBDB 269867）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269867&o=json)
