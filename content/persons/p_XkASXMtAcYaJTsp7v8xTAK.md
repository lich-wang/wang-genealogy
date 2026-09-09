---
schema: wang-person/v1
id: p_XkASXMtAcYaJTsp7v8xTAK
status: active
merged_into: null
display_name: 王釗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_u6BHnjS8KHpSfcvF4KVbGE
        subject_person_id: p_XkASXMtAcYaJTsp7v8xTAK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王釗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UWZj4aCHi5LtdpYaxWKHzE
          claim_id: c_u6BHnjS8KHpSfcvF4KVbGE
          source_id: s_xGTuLS1F1DZns6GWqSroHG
          stance: supports
          locator: CBDB:175806
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175806）
          source: &a1
            id: s_xGTuLS1F1DZns6GWqSroHG
            source_type: api_record
            title: 中国历代人物传记资料库：王釗（CBDB 175806）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175806&o=json
            external_identifier: CBDB:175806
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.135Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_TG1SLJ6fL6aW2E5LL7mEAm
        subject_person_id: p_XkASXMtAcYaJTsp7v8xTAK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 748年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KA8vCPJxuu4ECibBgv1UZG
          claim_id: c_TG1SLJ6fL6aW2E5LL7mEAm
          source_id: s_xGTuLS1F1DZns6GWqSroHG
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
        id: c_3YPTb3c21mSvzSv36nK8BM
        subject_person_id: p_XkASXMtAcYaJTsp7v8xTAK
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
        - id: cs_N2cp6sufMCeh81M1uHMDio
          claim_id: c_3YPTb3c21mSvzSv36nK8BM
          source_id: s_xGTuLS1F1DZns6GWqSroHG
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王釗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王釗 | accepted |
| death.date | 748年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王釗（CBDB 175806）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175806&o=json)
