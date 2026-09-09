---
schema: wang-person/v1
id: p_BMNf3Y1e3GX9M1tCr78uZv
status: active
merged_into: null
display_name: 王臣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RrjrgDEHJZ9ZzRdouUvCCA
        subject_person_id: p_BMNf3Y1e3GX9M1tCr78uZv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GWdZe58ztPfgq8oKurbRMB
          claim_id: c_RrjrgDEHJZ9ZzRdouUvCCA
          source_id: s_zmrfFWfwmHqZxrRkgGutK1
          stance: supports
          locator: CBDB:126514
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126514）
          source: &a1
            id: s_zmrfFWfwmHqZxrRkgGutK1
            source_type: api_record
            title: 中国历代人物传记资料库：王臣（CBDB 126514）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126514&o=json
            external_identifier: CBDB:126514
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.993Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_MicJgadekkMDT3doTQEdsf
        subject_person_id: p_BMNf3Y1e3GX9M1tCr78uZv
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1430年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HzjtpmFANHJzpMLvNH1pua
          claim_id: c_MicJgadekkMDT3doTQEdsf
          source_id: s_zmrfFWfwmHqZxrRkgGutK1
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
        id: c_RAWAP3HHyHCq2Dugnb42K1
        subject_person_id: p_BMNf3Y1e3GX9M1tCr78uZv
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1498年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mjq7escYgzwc7jwXkbeWRy
          claim_id: c_RAWAP3HHyHCq2Dugnb42K1
          source_id: s_zmrfFWfwmHqZxrRkgGutK1
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
        id: c_iLQNCJhR2DWCqKpCNtTjpJ
        subject_person_id: p_BMNf3Y1e3GX9M1tCr78uZv
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
        - id: cs_Nk6k2Zkwbex336bZPT58dG
          claim_id: c_iLQNCJhR2DWCqKpCNtTjpJ
          source_id: s_zmrfFWfwmHqZxrRkgGutK1
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

# 王臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王臣 | accepted |
| birth.date | 1430年 | accepted |
| death.date | 1498年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王臣（CBDB 126514）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126514&o=json)
