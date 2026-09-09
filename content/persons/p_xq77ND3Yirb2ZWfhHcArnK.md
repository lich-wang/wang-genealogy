---
schema: wang-person/v1
id: p_xq77ND3Yirb2ZWfhHcArnK
status: active
merged_into: null
display_name: 王德
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SJ22Dk2VA3iLsLoSM1atnW
        subject_person_id: p_xq77ND3Yirb2ZWfhHcArnK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_es7mMSZjTEAd6qdcSRnkL4
          claim_id: c_SJ22Dk2VA3iLsLoSM1atnW
          source_id: s_Cw2hEETiUKegMyTEr9G5M1
          stance: supports
          locator: CBDB:68161
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68161）
          source: &a1
            id: s_Cw2hEETiUKegMyTEr9G5M1
            source_type: api_record
            title: 中国历代人物传记资料库：王德（CBDB 68161）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68161&o=json
            external_identifier: CBDB:68161
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.057Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_aLwud7gSeHvejojgaVnuTK
        subject_person_id: p_xq77ND3Yirb2ZWfhHcArnK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1517年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CmR84t4pFazmXMYGT4cAQx
          claim_id: c_aLwud7gSeHvejojgaVnuTK
          source_id: s_Cw2hEETiUKegMyTEr9G5M1
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
        id: c_YJEX5S7JwP85QpnrZVNcPe
        subject_person_id: p_xq77ND3Yirb2ZWfhHcArnK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1558年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G7yj2HiNoc17CJ34Qx4S47
          claim_id: c_YJEX5S7JwP85QpnrZVNcPe
          source_id: s_Cw2hEETiUKegMyTEr9G5M1
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
        id: c_obqsEx2bQhX58y6uyEpoDe
        subject_person_id: p_xq77ND3Yirb2ZWfhHcArnK
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
        - id: cs_Rbdi1PNkHQVVFuxe39d9Em
          claim_id: c_obqsEx2bQhX58y6uyEpoDe
          source_id: s_Cw2hEETiUKegMyTEr9G5M1
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

# 王德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德 | accepted |
| birth.date | 1517年 | accepted |
| death.date | 1558年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德（CBDB 68161）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68161&o=json)
