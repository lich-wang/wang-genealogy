---
schema: wang-person/v1
id: p_FqfLmByX3SjgoPBHz78u6f
status: active
merged_into: null
display_name: 王德宣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rnEPuTA1LScYWHQ5yQuidj
        subject_person_id: p_FqfLmByX3SjgoPBHz78u6f
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德宣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_p6Y2mjFDwVvCHFbaZZgm89
          claim_id: c_rnEPuTA1LScYWHQ5yQuidj
          source_id: s_tn93hNo9SNtug6TLe6mPFD
          stance: supports
          locator: CBDB:474176
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（474176）
          source: &a1
            id: s_tn93hNo9SNtug6TLe6mPFD
            source_type: api_record
            title: 中国历代人物传记资料库：王德宣（CBDB 474176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=474176&o=json
            external_identifier: CBDB:474176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.355Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Qdnt3GWPMysN88fpw8qAr3
        subject_person_id: p_FqfLmByX3SjgoPBHz78u6f
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
        - id: cs_g87RdcSJe2eDh13adRUq1B
          claim_id: c_Qdnt3GWPMysN88fpw8qAr3
          source_id: s_tn93hNo9SNtug6TLe6mPFD
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

# 王德宣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德宣 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德宣（CBDB 474176）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=474176&o=json)
