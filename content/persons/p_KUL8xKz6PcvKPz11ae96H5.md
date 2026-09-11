---
schema: wang-person/v1
id: p_KUL8xKz6PcvKPz11ae96H5
status: active
merged_into: null
display_name: 王難得
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LMRgK98YtUZN1R2TkJuznx
        subject_person_id: p_KUL8xKz6PcvKPz11ae96H5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王難得
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_csRCsZhXrevVFycqTdMBiW
          claim_id: c_LMRgK98YtUZN1R2TkJuznx
          source_id: s_M6xQ6CktzELDRKcwXELz8m
          stance: supports
          locator: CBDB:190672
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（190672）
          source: &a1
            id: s_M6xQ6CktzELDRKcwXELz8m
            source_type: api_record
            title: 中国历代人物传记资料库：王難得（CBDB 190672）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190672&o=json
            external_identifier: CBDB:190672
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.332Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_b4MpzEi9Jsn2vc4wkMFZ5u
        subject_person_id: p_KUL8xKz6PcvKPz11ae96H5
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 763年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gheWoR4ihDSrGiG4YqBW9o
          claim_id: c_b4MpzEi9Jsn2vc4wkMFZ5u
          source_id: s_M6xQ6CktzELDRKcwXELz8m
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
        id: c_Bc9aSRc2r5TXgkZoanpmJQ
        subject_person_id: p_KUL8xKz6PcvKPz11ae96H5
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
        - id: cs_MD4jJTzUmVrD8W2cMKGse9
          claim_id: c_Bc9aSRc2r5TXgkZoanpmJQ
          source_id: s_M6xQ6CktzELDRKcwXELz8m
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
        id: c_QUycQUcJAxoU1COF3t7PmX
        subject_person_id: p_fXAo4C4rah6BR8A59ct6uw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KUL8xKz6PcvKPz11ae96H5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TA4YXPf47F6tO0W47J5UfP
          claim_id: c_QUycQUcJAxoU1COF3t7PmX
          source_id: s_bBYtmFKbGLFH3h7Z1B1QHH
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bBYtmFKbGLFH3h7Z1B1QHH
            source_type: api_record
            title: 中国历代人物传记资料库：王思敬（CBDB 190673）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190673&o=json
            external_identifier: CBDB:190673
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.333Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fXAo4C4rah6BR8A59ct6uw
        status: active
        display_name: 王思敬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王難得

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王難得 | accepted |
| death.date | 763年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fXAo4C4rah6BR8A59ct6uw | 王思敬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王難得（CBDB 190672）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190672&o=json)
- [中国历代人物传记资料库：王思敬（CBDB 190673）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190673&o=json)
