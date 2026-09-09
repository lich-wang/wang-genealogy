---
schema: wang-person/v1
id: p_ddyw2nMVLAixVfzSvshDxc
status: active
merged_into: null
display_name: 王孝祺
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XLuye4J3QjNHfKNdWNZoW2
        subject_person_id: p_ddyw2nMVLAixVfzSvshDxc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝祺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2cUHRu7f5BHfb4q56GD1rT
          claim_id: c_XLuye4J3QjNHfKNdWNZoW2
          source_id: s_K81JuEMB1i65i9UGFKnPbz
          stance: supports
          locator: CBDB:57822
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（57822）
          source: &a1
            id: s_K81JuEMB1i65i9UGFKnPbz
            source_type: api_record
            title: 中国历代人物传记资料库：王孝祺（CBDB 57822）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57822&o=json
            external_identifier: CBDB:57822
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.818Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_edp99JJpN7yMPXgMbvHyru
        subject_person_id: p_ddyw2nMVLAixVfzSvshDxc
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1835年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gKM4QDgKuGEFjEE16CP2P5
          claim_id: c_edp99JJpN7yMPXgMbvHyru
          source_id: s_K81JuEMB1i65i9UGFKnPbz
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
        id: c_rzHYfwKMhfAui5G8CzMgSz
        subject_person_id: p_ddyw2nMVLAixVfzSvshDxc
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1899年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_83wF7Spnz8nZKw5pDNrXeF
          claim_id: c_rzHYfwKMhfAui5G8CzMgSz
          source_id: s_K81JuEMB1i65i9UGFKnPbz
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
        id: c_JYVDL6J5fsAe4HRhTV8V1b
        subject_person_id: p_ddyw2nMVLAixVfzSvshDxc
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
        - id: cs_i7Z1fUnkhgYors32GAoqNb
          claim_id: c_JYVDL6J5fsAe4HRhTV8V1b
          source_id: s_K81JuEMB1i65i9UGFKnPbz
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

# 王孝祺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王孝祺 | accepted |
| birth.date | 1835年 | accepted |
| death.date | 1899年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王孝祺（CBDB 57822）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57822&o=json)
