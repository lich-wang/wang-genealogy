---
schema: wang-person/v1
id: p_RhB5HQ32Fj1Dq1FEySG5dM
status: active
merged_into: null
display_name: 王貴
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_R3rtTHh97MknDQeEbWwtLt
        subject_person_id: p_RhB5HQ32Fj1Dq1FEySG5dM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4xC23BAirsnGPgW1Fyzfc2
          claim_id: c_R3rtTHh97MknDQeEbWwtLt
          source_id: s_FKNUojg615nU9jHQLQ6vXk
          stance: supports
          locator: CBDB:162876
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（162876）
          source: &a1
            id: s_FKNUojg615nU9jHQLQ6vXk
            source_type: api_record
            title: 中国历代人物传记资料库：王貴（CBDB 162876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162876&o=json
            external_identifier: CBDB:162876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.954Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PLCLNscP5Ap32cKgfJA9Q3
        subject_person_id: p_RhB5HQ32Fj1Dq1FEySG5dM
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
        - id: cs_vVAASCbGtacwNgEpSHcvLW
          claim_id: c_PLCLNscP5Ap32cKgfJA9Q3
          source_id: s_FKNUojg615nU9jHQLQ6vXk
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
        id: c_ssJt_E_VfndOIf1Y8oAgqe
        subject_person_id: p_RhB5HQ32Fj1Dq1FEySG5dM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DXHCabHqiAPVfRY4s5GJCY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xdqhyj-zJ34EOGBJKDw2tJ
          claim_id: c_ssJt_E_VfndOIf1Y8oAgqe
          source_id: s_MmehzZX93GxJjEo1vWTkDQ
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Chuigong8：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MmehzZX93GxJjEo1vWTkDQ
            source_type: api_record
            title: 中国历代人物传记资料库：王敬（CBDB 142720）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142720&o=json
            external_identifier: CBDB:142720
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.591Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DXHCabHqiAPVfRY4s5GJCY
        status: active
        display_name: 王敬
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王貴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貴 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_DXHCabHqiAPVfRY4s5GJCY | 王敬 | accepted |

## 外部来源

- [中国历代人物传记资料库：王貴（CBDB 162876）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162876&o=json)
- [中国历代人物传记资料库：王敬（CBDB 142720）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142720&o=json)
