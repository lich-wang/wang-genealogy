---
schema: wang-person/v1
id: p_CJWkxE6qh4oHc5LK9FdFe4
status: active
merged_into: null
display_name: 呂道仁
revision: 1
cbdb_id: 161957
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zbugm9iwx_0uMo5aMGTf4x
        subject_person_id: p_CJWkxE6qh4oHc5LK9FdFe4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 呂道仁
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I8of7C6XyJVX3l3vOhL4M6
          claim_id: c_zbugm9iwx_0uMo5aMGTf4x
          source_id: s_KPrez2HLH4QrCxVQLuJ899
          stance: supports
          locator: CBDB:161957
          quotation: null
          interpretation_note: CBDB 明确记录的王凝華配偶
          source: &a1
            id: s_KPrez2HLH4QrCxVQLuJ899
            source_type: api_record
            title: 中国历代人物传记资料库：呂道仁（CBDB 161957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161957&o=json
            external_identifier: CBDB:161957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_MhGuELkxWu_lPPQM9LctyV
        subject_person_id: p_rZCeAGNurjExGgGFQ9mg9X
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_CJWkxE6qh4oHc5LK9FdFe4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t7sBqa1dcsiN9svexIV_dI
          claim_id: c_MhGuELkxWu_lPPQM9LctyV
          source_id: s_KPrez2HLH4QrCxVQLuJ899
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Zhenguan43：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rZCeAGNurjExGgGFQ9mg9X
        status: active
        display_name: 王凝華
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 呂道仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 呂道仁 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_rZCeAGNurjExGgGFQ9mg9X | 王凝華 | accepted |

## 外部来源

- [中国历代人物传记资料库：呂道仁（CBDB 161957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=161957&o=json)
