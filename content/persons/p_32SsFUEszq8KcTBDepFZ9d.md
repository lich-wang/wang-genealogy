---
schema: wang-person/v1
id: p_32SsFUEszq8KcTBDepFZ9d
status: active
merged_into: null
display_name: 王闍桂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UbB9iUMuzKuY5LvGCSS9YG
        subject_person_id: p_32SsFUEszq8KcTBDepFZ9d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王闍桂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gHHEqkFxg7aFvGPHAUJEQM
          claim_id: c_UbB9iUMuzKuY5LvGCSS9YG
          source_id: s_18ARgpCft1NkkLP5qGCYhD
          stance: supports
          locator: CBDB:138916
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（138916）
          source: &a1
            id: s_18ARgpCft1NkkLP5qGCYhD
            source_type: api_record
            title: 中国历代人物传记资料库：王闍桂（CBDB 138916）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138916&o=json
            external_identifier: CBDB:138916
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.187Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_zTcGG57QfrmCCHgucHd5FL
        subject_person_id: p_32SsFUEszq8KcTBDepFZ9d
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 565年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QpXohCA8oJHPFJK6g3AwLq
          claim_id: c_zTcGG57QfrmCCHgucHd5FL
          source_id: s_18ARgpCft1NkkLP5qGCYhD
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
        id: c_p3VXe97Qg7stGSVyxP52HD
        subject_person_id: p_32SsFUEszq8KcTBDepFZ9d
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 636年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hiHRc3e8MaJ9CLXpAq6QZZ
          claim_id: c_p3VXe97Qg7stGSVyxP52HD
          source_id: s_18ARgpCft1NkkLP5qGCYhD
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
        id: c_ckJr7KCi5Pkv1aqQSQW1Tw
        subject_person_id: p_32SsFUEszq8KcTBDepFZ9d
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
        - id: cs_tZ377LygCypQE2jPgnrp4X
          claim_id: c_ckJr7KCi5Pkv1aqQSQW1Tw
          source_id: s_18ARgpCft1NkkLP5qGCYhD
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

# 王闍桂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王闍桂 | accepted |
| birth.date | 565年 | accepted |
| death.date | 636年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王闍桂（CBDB 138916）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=138916&o=json)
