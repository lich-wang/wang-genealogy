---
schema: wang-person/v1
id: p_DpKNJ3621m7pyCWFk9eCiZ
status: active
merged_into: null
display_name: 王明
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q66Tzrn5qFo2E3Por9LM2r
        subject_person_id: p_DpKNJ3621m7pyCWFk9eCiZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o4oxPGNDfLihwzVG46GbKU
          claim_id: c_q66Tzrn5qFo2E3Por9LM2r
          source_id: s_VxKd1DKm3pG41W1J9mENyc
          stance: supports
          locator: CBDB:139773
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139773）
          source: &a1
            id: s_VxKd1DKm3pG41W1J9mENyc
            source_type: api_record
            title: 中国历代人物传记资料库：王明（CBDB 139773）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139773&o=json
            external_identifier: CBDB:139773
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.456Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CNwZVwA1DxAydRP5TR9yQd
        subject_person_id: p_DpKNJ3621m7pyCWFk9eCiZ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 628年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3hjjKbWXvxPNJ138HyZSdU
          claim_id: c_CNwZVwA1DxAydRP5TR9yQd
          source_id: s_VxKd1DKm3pG41W1J9mENyc
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
        id: c_9PnCpRt73PGXM5ww1ySyid
        subject_person_id: p_DpKNJ3621m7pyCWFk9eCiZ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 681年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NBmb7ht9uEzmSNk4xXuwTU
          claim_id: c_9PnCpRt73PGXM5ww1ySyid
          source_id: s_VxKd1DKm3pG41W1J9mENyc
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
        id: c_VCJziKpyoFLhZqoSmYJ2eP
        subject_person_id: p_DpKNJ3621m7pyCWFk9eCiZ
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
        - id: cs_U4mihYTLFjSJh3mxKGE9v5
          claim_id: c_VCJziKpyoFLhZqoSmYJ2eP
          source_id: s_VxKd1DKm3pG41W1J9mENyc
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
  ancestors:
    - claim:
        id: c_X8adPSQX20yfzvWkOyCdyv
        subject_person_id: p_4APHAkfxphUBchHMpLcHUx
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DpKNJ3621m7pyCWFk9eCiZ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YVNglMSbFZY5-lFZ4Dn-XI
          claim_id: c_X8adPSQX20yfzvWkOyCdyv
          source_id: s_4WBy56iMQbtKiuNCdXvkJD
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yonglong 15：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4WBy56iMQbtKiuNCdXvkJD
            source_type: api_record
            title: 中国历代人物传记资料库：王勣（CBDB 148854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148854&o=json
            external_identifier: CBDB:148854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.775Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4APHAkfxphUBchHMpLcHUx
        status: active
        display_name: 王勣
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王明 | accepted |
| birth.date | 628年 | accepted |
| death.date | 681年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_4APHAkfxphUBchHMpLcHUx | 王勣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王勣（CBDB 148854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=148854&o=json)
- [中国历代人物传记资料库：王明（CBDB 139773）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139773&o=json)
