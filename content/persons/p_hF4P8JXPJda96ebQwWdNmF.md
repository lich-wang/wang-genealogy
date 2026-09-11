---
schema: wang-person/v1
id: p_hF4P8JXPJda96ebQwWdNmF
status: active
merged_into: null
display_name: 王雍文
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ey2npzd8YfbB2LQ7NHUKCF
        subject_person_id: p_hF4P8JXPJda96ebQwWdNmF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雍文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yDQbuhyoauPmuzchJYyyMt
          claim_id: c_Ey2npzd8YfbB2LQ7NHUKCF
          source_id: s_aySoe18VuE2tLeuFUHKZL6
          stance: supports
          locator: CBDB:570745
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（570745）
          source: &a1
            id: s_aySoe18VuE2tLeuFUHKZL6
            source_type: api_record
            title: 中国历代人物传记资料库：王雍文（CBDB 570745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570745&o=json
            external_identifier: CBDB:570745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.645Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Hn7NopdQH5mY7tTa7tNjVo
        subject_person_id: p_hF4P8JXPJda96ebQwWdNmF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j6JLzmr2H93R7yttwfekeA
          claim_id: c_Hn7NopdQH5mY7tTa7tNjVo
          source_id: s_aySoe18VuE2tLeuFUHKZL6
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
        id: c_HDuNBFnzUfxXVHR0F0cU96
        subject_person_id: p_hF4P8JXPJda96ebQwWdNmF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EioT998cByQrt7a2xuCwZq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FknhVsQ8YQnMF3skusQu4T
          claim_id: c_HDuNBFnzUfxXVHR0F0cU96
          source_id: s_Fwg1C9BuM9jD9PEbUFeZ65
          stance: supports
          locator: 紹興府志:八十卷，lgid=316848：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Fwg1C9BuM9jD9PEbUFeZ65
            source_type: api_record
            title: 中国历代人物传记资料库：王鼎元（CBDB 570747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570747&o=json
            external_identifier: CBDB:570747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.875Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EioT998cByQrt7a2xuCwZq
        status: active
        display_name: 王鼎元
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_bZforFSrK3yiUkxercAX83
        subject_person_id: p_hF4P8JXPJda96ebQwWdNmF
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_BFCCVpWavMajeJbCtwK8e8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6Ppwj_oHvJKnSliCA84ivZ
          claim_id: c_bZforFSrK3yiUkxercAX83
          source_id: s_IqybNQr2nnAA-i3gU2BMmm
          stance: supports
          locator: 紹興府志:八十卷，lgid=316847：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_IqybNQr2nnAA-i3gU2BMmm
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王雍文妾)（CBDB 570744）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570744&o=json
            external_identifier: CBDB:570744
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BFCCVpWavMajeJbCtwK8e8
        status: active
        display_name: 劉氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王雍文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雍文 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_EioT998cByQrt7a2xuCwZq | 王鼎元 | accepted |
| spouses | p_BFCCVpWavMajeJbCtwK8e8 | 劉氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王雍文妾)（CBDB 570744）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570744&o=json)
- [中国历代人物传记资料库：王鼎元（CBDB 570747）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570747&o=json)
- [中国历代人物传记资料库：王雍文（CBDB 570745）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570745&o=json)
