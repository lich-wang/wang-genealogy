---
schema: wang-person/v1
id: p_WfKGNEwFj8S9f7DUKj8X6D
status: active
merged_into: null
display_name: 王正己
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fq2Wio98kxy727pkg3qJM2
        subject_person_id: p_WfKGNEwFj8S9f7DUKj8X6D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正己
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QPcyvVJhcXfM2aSmKiRktv
          claim_id: c_fq2Wio98kxy727pkg3qJM2
          source_id: s_PDGaLN51VCohN5Cwc5EZEn
          stance: supports
          locator: CBDB:3948
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（3948）
          source: &a1
            id: s_PDGaLN51VCohN5Cwc5EZEn
            source_type: api_record
            title: 中国历代人物传记资料库：王正己（CBDB 3948）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3948&o=json
            external_identifier: CBDB:3948
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.426Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_kqTZsGzVD8PD7R3TZhUkQD
        subject_person_id: p_WfKGNEwFj8S9f7DUKj8X6D
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1119年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zKMW25N2Z5Y8QAMPiHsgB6
          claim_id: c_kqTZsGzVD8PD7R3TZhUkQD
          source_id: s_PDGaLN51VCohN5Cwc5EZEn
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
        id: c_jeBZDaUK8QxBCsFP6MCnFX
        subject_person_id: p_WfKGNEwFj8S9f7DUKj8X6D
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1196年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XRsngn4nfxABYvy88gB5h3
          claim_id: c_jeBZDaUK8QxBCsFP6MCnFX
          source_id: s_PDGaLN51VCohN5Cwc5EZEn
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
        id: c_8ciCKLakcFLSKokW6QWR9Y
        subject_person_id: p_WfKGNEwFj8S9f7DUKj8X6D
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SFLq4DPJytdvJZgGQV4q3k
          claim_id: c_8ciCKLakcFLSKokW6QWR9Y
          source_id: s_PDGaLN51VCohN5Cwc5EZEn
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_d_xwewx_aOXkkvR2A267b4
        subject_person_id: p_LMN8U3w7r8FiSU2N778GMc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WfKGNEwFj8S9f7DUKj8X6D
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c18bPTy_ET1NDOiOW0xXJv
          claim_id: c_d_xwewx_aOXkkvR2A267b4
          source_id: s_PDGaLN51VCohN5Cwc5EZEn
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1234：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LMN8U3w7r8FiSU2N778GMc
        status: active
        display_name: 王勳
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Nyrk8ENkR_6TpndyqyavU-
        subject_person_id: p_WfKGNEwFj8S9f7DUKj8X6D
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ksmqetEKfDBjvzrd8ZgZEW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4ikbPxwt3SjjOZkuPXMsva
          claim_id: c_Nyrk8ENkR_6TpndyqyavU-
          source_id: s_YueGSfenui1tO1wQyAC387
          stance: supports
          locator: CBDB 双向互证（妻子 樓氏(王正己妻)）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YueGSfenui1tO1wQyAC387
            source_type: api_record
            title: 中国历代人物传记资料库：樓氏(王正己妻)（CBDB 35679）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35679&o=json
            external_identifier: CBDB:35679
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ksmqetEKfDBjvzrd8ZgZEW
        status: active
        display_name: 樓氏
        merged_into_person_id: null
  ancestors: []
  descendants:
    - claim:
        id: c_pOueO-otEv30KoSYgqWk1c
        subject_person_id: p_WfKGNEwFj8S9f7DUKj8X6D
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5o9Dk9gzYAokEQZKSrc378
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-bzhsQf6PHnq0u_FDiI5YH
          claim_id: c_pOueO-otEv30KoSYgqWk1c
          source_id: s_Dkt2UKu9ZKjd56VKqKNmkw
          stance: supports
          locator: CBDB 双向互证（曾祖 王正己 ⇄ 曾孫; 重孫 王惟賢）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_Dkt2UKu9ZKjd56VKqKNmkw
            source_type: api_record
            title: 中国历代人物传记资料库：王惟賢（CBDB 19886）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19886&o=json
            external_identifier: CBDB:19886
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.749Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5o9Dk9gzYAokEQZKSrc378
        status: active
        display_name: 王惟賢
        merged_into_person_id: null
    - claim:
        id: c_oNcNRvWQWiR7Y7EI30gTZO
        subject_person_id: p_WfKGNEwFj8S9f7DUKj8X6D
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AZ9sTjiiVDDjzecmG4UuBn
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Hfn_17tNhpU377r89Faj3j
          claim_id: c_oNcNRvWQWiR7Y7EI30gTZO
          source_id: s_CzrKuB5khe9w32c1V3hf5n
          stance: supports
          locator: CBDB 双向互证（曾祖 王正己 ⇄ 曾孫; 重孫 王惟義）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_CzrKuB5khe9w32c1V3hf5n
            source_type: api_record
            title: 中国历代人物传记资料库：王惟義（CBDB 19887）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19887&o=json
            external_identifier: CBDB:19887
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.749Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AZ9sTjiiVDDjzecmG4UuBn
        status: active
        display_name: 王惟義
        merged_into_person_id: null
  other: []
---

# 王正己

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正己 | accepted |
| birth.date | 1119年 | accepted |
| death.date | 1196年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_LMN8U3w7r8FiSU2N778GMc | 王勳 | accepted |
| spouses | p_ksmqetEKfDBjvzrd8ZgZEW | 樓氏 | accepted |
| descendants | p_5o9Dk9gzYAokEQZKSrc378 | 王惟賢 | accepted |
| descendants | p_AZ9sTjiiVDDjzecmG4UuBn | 王惟義 | accepted |

## 外部来源

- [中国历代人物传记资料库：樓氏(王正己妻)（CBDB 35679）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35679&o=json)
- [中国历代人物传记资料库：王惟賢（CBDB 19886）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19886&o=json)
- [中国历代人物传记资料库：王惟義（CBDB 19887）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19887&o=json)
- [中国历代人物传记资料库：王正己（CBDB 3948）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3948&o=json)
