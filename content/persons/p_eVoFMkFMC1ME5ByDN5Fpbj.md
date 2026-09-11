---
schema: wang-person/v1
id: p_eVoFMkFMC1ME5ByDN5Fpbj
status: active
merged_into: null
display_name: 王脩之
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hj7rGo2adTz1mh9JFuDb61
        subject_person_id: p_eVoFMkFMC1ME5ByDN5Fpbj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王脩之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qzocBEn9fsiRZdmAy13VRJ
          claim_id: c_hj7rGo2adTz1mh9JFuDb61
          source_id: s_xPtABPGKTcY38F3MR1Yxzu
          stance: supports
          locator: CBDB:700903
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（700903）
          source: &a1
            id: s_xPtABPGKTcY38F3MR1Yxzu
            source_type: api_record
            title: 中国历代人物传记资料库：王脩之（CBDB 700903）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700903&o=json
            external_identifier: CBDB:700903
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.790Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_6j6d2JvxLFGgL7tyVJ2GpW
        subject_person_id: p_eVoFMkFMC1ME5ByDN5Fpbj
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1064年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NYFxQMZ3XMxxH5nCjrWFfV
          claim_id: c_6j6d2JvxLFGgL7tyVJ2GpW
          source_id: s_xPtABPGKTcY38F3MR1Yxzu
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
        id: c_QxH8kovbBszJwNFCcYYX4S
        subject_person_id: p_eVoFMkFMC1ME5ByDN5Fpbj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王脩之（卒于1064年），宋人物。籍贯溫縣。（中国历代人物传记资料库 CBDB 700903）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_v4-d2O5h_6ENfo5RxORp5v
          claim_id: c_QxH8kovbBszJwNFCcYYX4S
          source_id: s_xPtABPGKTcY38F3MR1Yxzu
          stance: supports
          locator: CBDB:700903
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TKu7GVHQwKqibzAm3h2Eef
        subject_person_id: p_CNQq29PPARqLQdyYsUrpxT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eVoFMkFMC1ME5ByDN5Fpbj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__TyTYqwNhiSmpimt6r8Uh9
          claim_id: c_TKu7GVHQwKqibzAm3h2Eef
          source_id: s_xPtABPGKTcY38F3MR1Yxzu
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，北宋卷226 王辯墓志：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CNQq29PPARqLQdyYsUrpxT
        status: active
        display_name: 王辯
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王脩之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王脩之 | accepted |
| death.date | 1064年 | accepted |
| bio.summary | 王脩之（卒于1064年），宋人物。籍贯溫縣。（中国历代人物传记资料库 CBDB 700903） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CNQq29PPARqLQdyYsUrpxT | 王辯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王脩之（CBDB 700903）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700903&o=json)
