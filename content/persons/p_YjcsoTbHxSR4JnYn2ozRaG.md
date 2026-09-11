---
schema: wang-person/v1
id: p_YjcsoTbHxSR4JnYn2ozRaG
status: active
merged_into: null
display_name: 王樂天
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pmiPhGEVSbQcgsKSY1dNRC
        subject_person_id: p_YjcsoTbHxSR4JnYn2ozRaG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樂天
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4fUPLtC8iYTZrPKzeKC73a
          claim_id: c_pmiPhGEVSbQcgsKSY1dNRC
          source_id: s_k4RgtJ6B4RGcM37n8QUP28
          stance: supports
          locator: CBDB:558444
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（558444）
          source: &a1
            id: s_k4RgtJ6B4RGcM37n8QUP28
            source_type: api_record
            title: 中国历代人物传记资料库：王樂天（CBDB 558444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558444&o=json
            external_identifier: CBDB:558444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.545Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VtAR31WQ338qjUcU8FrJtT
        subject_person_id: p_YjcsoTbHxSR4JnYn2ozRaG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王樂天，清人物。籍贯信陽州，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 558444）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_68uwIai2kPRSO0EZu9Dwd8
          claim_id: c_VtAR31WQ338qjUcU8FrJtT
          source_id: s_k4RgtJ6B4RGcM37n8QUP28
          stance: supports
          locator: CBDB:558444
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VxMXhBJcI9Y2LQPGl3d6iP
        subject_person_id: p_RhC617Pvp2mk9j4bcF6rFB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YjcsoTbHxSR4JnYn2ozRaG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Lr1a0i1-2LP4xfRTWz6phc
          claim_id: c_VxMXhBJcI9Y2LQPGl3d6iP
          source_id: s_k4RgtJ6B4RGcM37n8QUP28
          stance: supports
          locator: (乾隆)信陽州志，lgid=868524：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RhC617Pvp2mk9j4bcF6rFB
        status: active
        display_name: 王治
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王樂天

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王樂天 | accepted |
| bio.summary | 王樂天，清人物。籍贯信陽州，入仕學校: 生員(庠生)。（中国历代人物传记资料库 CBDB 558444） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RhC617Pvp2mk9j4bcF6rFB | 王治 | accepted |

## 外部来源

- [中国历代人物传记资料库：王樂天（CBDB 558444）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=558444&o=json)
