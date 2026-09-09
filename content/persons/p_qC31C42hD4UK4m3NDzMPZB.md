---
schema: wang-person/v1
id: p_qC31C42hD4UK4m3NDzMPZB
status: active
merged_into: null
display_name: 王暐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wx4RXFA5Gb15XdpeCudN58
        subject_person_id: p_qC31C42hD4UK4m3NDzMPZB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王暐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GDCu5p3pqHYVZykbee4dXt
          claim_id: c_wx4RXFA5Gb15XdpeCudN58
          source_id: s_FeDJuE3J2mE54BzJxLz2j5
          stance: supports
          locator: CBDB:68343
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68343）
          source: &a1
            id: s_FeDJuE3J2mE54BzJxLz2j5
            source_type: api_record
            title: 中国历代人物传记资料库：王暐（CBDB 68343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68343&o=json
            external_identifier: CBDB:68343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.069Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JCXijJpQpn8waG7mCM63k1
        subject_person_id: p_qC31C42hD4UK4m3NDzMPZB
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
        - id: cs_UYBZVszDoDQ7YD2DfALPaX
          claim_id: c_JCXijJpQpn8waG7mCM63k1
          source_id: s_FeDJuE3J2mE54BzJxLz2j5
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

# 王暐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王暐 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王暐（CBDB 68343）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68343&o=json)
