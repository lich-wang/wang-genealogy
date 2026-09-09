---
schema: wang-person/v1
id: p_ZrVPMZwm7fGRq1QgALGJYj
status: active
merged_into: null
display_name: 王采
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UXRj7ecRS6DrLJ11KBW73R
        subject_person_id: p_ZrVPMZwm7fGRq1QgALGJYj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王采
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6HQPhG8RkAiTr1i2L6uaEg
          claim_id: c_UXRj7ecRS6DrLJ11KBW73R
          source_id: s_4j1cy1km4tGC52MrB9xXNd
          stance: supports
          locator: CBDB:30038
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（30038）
          source: &a1
            id: s_4j1cy1km4tGC52MrB9xXNd
            source_type: api_record
            title: 中国历代人物传记资料库：王采（CBDB 30038）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30038&o=json
            external_identifier: CBDB:30038
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.016Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8mCgtTCsvW2Cs2qLsvuTHD
        subject_person_id: p_ZrVPMZwm7fGRq1QgALGJYj
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
        - id: cs_PaivHtVKWBDQot9y7gfSu1
          claim_id: c_8mCgtTCsvW2Cs2qLsvuTHD
          source_id: s_4j1cy1km4tGC52MrB9xXNd
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

# 王采

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王采 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王采（CBDB 30038）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30038&o=json)
