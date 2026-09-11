---
schema: wang-person/v1
id: p_PuUiGdtpzWdsK7wcEt3S7p
status: active
merged_into: null
display_name: 王以旂
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_63SwC9inhimfyAmfwLmj8b
        subject_person_id: p_PuUiGdtpzWdsK7wcEt3S7p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以旂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jWjhN9uxMBgC4QnnL5JgoK
          claim_id: c_63SwC9inhimfyAmfwLmj8b
          source_id: s_oN1JN1VYWv8n9Ndz7YmWhF
          stance: supports
          locator: CBDB:68257
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68257）
          source: &a1
            id: s_oN1JN1VYWv8n9Ndz7YmWhF
            source_type: api_record
            title: 中国历代人物传记资料库：王以旂（CBDB 68257）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68257&o=json
            external_identifier: CBDB:68257
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.062Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_KPueUMpFpVaybM4junKKC5
        subject_person_id: p_PuUiGdtpzWdsK7wcEt3S7p
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1486年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r9j59NsPbnyC3mYtuzVEAD
          claim_id: c_KPueUMpFpVaybM4junKKC5
          source_id: s_oN1JN1VYWv8n9Ndz7YmWhF
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
        id: c_RHbFeFGyk8eT6odtXj1r8B
        subject_person_id: p_PuUiGdtpzWdsK7wcEt3S7p
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1553年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CgNzvkwiJXsB7pbN9WKpDw
          claim_id: c_RHbFeFGyk8eT6odtXj1r8B
          source_id: s_oN1JN1VYWv8n9Ndz7YmWhF
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
        id: c_g42VZTQLLQVVtvQ1Q5gGRp
        subject_person_id: p_PuUiGdtpzWdsK7wcEt3S7p
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RBPEhLw5YDax6qYsZXFkv1
          claim_id: c_g42VZTQLLQVVtvQ1Q5gGRp
          source_id: s_oN1JN1VYWv8n9Ndz7YmWhF
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_qLZhxs4vrZkRSvRgQNUz1W
        subject_person_id: p_PuUiGdtpzWdsK7wcEt3S7p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8rcZWL4qM4Zmnf26YD6MXf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tktIQiUon3o6uc7tMxxMqL
          claim_id: c_qLZhxs4vrZkRSvRgQNUz1W
          source_id: s_xASL5aGMSUd6T4Y9GzPE32
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），11918：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xASL5aGMSUd6T4Y9GzPE32
            source_type: api_record
            title: 中国历代人物传记资料库：王簧（CBDB 526004）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526004&o=json
            external_identifier: CBDB:526004
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_8rcZWL4qM4Zmnf26YD6MXf
        status: active
        display_name: 王簧
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_K93cTOCL3KdppoTH9qtYon
        subject_person_id: p_1n6udeiAV3WPwXHR7TEH2x
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PuUiGdtpzWdsK7wcEt3S7p
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U5yDIQN_bLMGf-d8C8oC6K
          claim_id: c_K93cTOCL3KdppoTH9qtYon
          source_id: s_Q4ezfLAD2UeFESzhkorC29
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），11918：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Q4ezfLAD2UeFESzhkorC29
            source_type: api_record
            title: 中国历代人物传记资料库：王䪧（CBDB 526002）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526002&o=json
            external_identifier: CBDB:526002
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.331Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1n6udeiAV3WPwXHR7TEH2x
        status: active
        display_name: 王䪧
        merged_into_person_id: null
    - claim:
        id: c_uKwI1FrdBhr_ScvPQd0Vlj
        subject_person_id: p_xJsRqYi6bQ21m8ncMBogv4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PuUiGdtpzWdsK7wcEt3S7p
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FI2KPTU-bYZYVTWwqU5Z0D
          claim_id: c_uKwI1FrdBhr_ScvPQd0Vlj
          source_id: s_zXk3J9ETwt3Au1CwLjm5kx
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第四十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zXk3J9ETwt3Au1CwLjm5kx
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王民（277428）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277428&o=json
            external_identifier: CBDB:277428
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_xJsRqYi6bQ21m8ncMBogv4
        status: active
        display_name: 王民
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王以旂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王以旂 | accepted |
| birth.date | 1486年 | accepted |
| death.date | 1553年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_8rcZWL4qM4Zmnf26YD6MXf | 王簧 | accepted |
| ancestors | p_1n6udeiAV3WPwXHR7TEH2x | 王䪧 | accepted |
| ancestors | p_xJsRqYi6bQ21m8ncMBogv4 | 王民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王簧（CBDB 526004）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526004&o=json)
- [中国历代人物传记资料库：王以旂（CBDB 68257）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68257&o=json)
- [中国历代人物传记资料库：王䪧（CBDB 526002）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526002&o=json)
- [CBDB 中国历代人物传记资料库：王民（277428）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=277428&o=json)
