---
schema: wang-person/v1
id: p_dGkjiKdWjUkcef224C6r6D
status: active
merged_into: null
display_name: 王泰
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1sEv9gNC8SWVfLe9DNMu4N
        subject_person_id: p_dGkjiKdWjUkcef224C6r6D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cJjKmNZdFZ294GbKcjS9Yg
          claim_id: c_1sEv9gNC8SWVfLe9DNMu4N
          source_id: s_VNQKyEN1JvKSVGa3FWFoiJ
          stance: supports
          locator: CBDB:142955
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142955）
          source: &a1
            id: s_VNQKyEN1JvKSVGa3FWFoiJ
            source_type: api_record
            title: 中国历代人物传记资料库：王泰（CBDB 142955）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142955&o=json
            external_identifier: CBDB:142955
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.604Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_NVEXtYeRHRA7GEGFSFKUgp
        subject_person_id: p_dGkjiKdWjUkcef224C6r6D
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 668年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WaQpjmkRXKYVGsHzWJXkZK
          claim_id: c_NVEXtYeRHRA7GEGFSFKUgp
          source_id: s_VNQKyEN1JvKSVGa3FWFoiJ
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
        id: c_PLFPbbBNguhrXsjCjwy9nJ
        subject_person_id: p_dGkjiKdWjUkcef224C6r6D
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 742年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9uGAvDB5Wtad7w9hxv6J8w
          claim_id: c_PLFPbbBNguhrXsjCjwy9nJ
          source_id: s_VNQKyEN1JvKSVGa3FWFoiJ
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
        id: c_HUXfY2j2fxRVFAMiSdJ5g5
        subject_person_id: p_dGkjiKdWjUkcef224C6r6D
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5h8vrEkoXCaQ2fMsDDggaY
          claim_id: c_HUXfY2j2fxRVFAMiSdJ5g5
          source_id: s_VNQKyEN1JvKSVGa3FWFoiJ
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
        id: c_BdrBSbdWeElU47HDMEZFsG
        subject_person_id: p_xYgEMDZ5FcUAKj6AucvNLU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dGkjiKdWjUkcef224C6r6D
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IVPB2vf3xvM7hOyIJrNYQs
          claim_id: c_BdrBSbdWeElU47HDMEZFsG
          source_id: s_VNQKyEN1JvKSVGa3FWFoiJ
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Tianbao10：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_xYgEMDZ5FcUAKj6AucvNLU
        status: active
        display_name: 王訓
        merged_into_person_id: null
  children:
    - claim:
        id: c_QyuCzfdh1WhA-TN_-Sel9z
        subject_person_id: p_dGkjiKdWjUkcef224C6r6D
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HTs6qDZ4C5JCDRvZG9rRE4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dwqnpHzbwlQjLXWkljH2Ac
          claim_id: c_QyuCzfdh1WhA-TN_-Sel9z
          source_id: s_VNQKyEN1JvKSVGa3FWFoiJ
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Tianbao10：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HTs6qDZ4C5JCDRvZG9rRE4
        status: active
        display_name: 王大琛
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_hXKewqvd6HYsu1sjH1ecRc
        subject_person_id: p_dGkjiKdWjUkcef224C6r6D
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_x1A9A3Nxtr5y3KyGLm1Zu5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qL6ayp7-Nz7DQylvU75ksT
          claim_id: c_hXKewqvd6HYsu1sjH1ecRc
          source_id: s_kddp0DnpQhiof7ryPZm_Tz
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Tianbao10：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_kddp0DnpQhiof7ryPZm_Tz
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王泰妻)（CBDB 164508）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164508&o=json
            external_identifier: CBDB:164508
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_x1A9A3Nxtr5y3KyGLm1Zu5
        status: active
        display_name: 李氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王泰 | accepted |
| birth.date | 668年 | accepted |
| death.date | 742年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xYgEMDZ5FcUAKj6AucvNLU | 王訓 | accepted |
| children | p_HTs6qDZ4C5JCDRvZG9rRE4 | 王大琛 | accepted |
| spouses | p_x1A9A3Nxtr5y3KyGLm1Zu5 | 李氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王泰妻)（CBDB 164508）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164508&o=json)
- [中国历代人物传记资料库：王泰（CBDB 142955）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142955&o=json)
