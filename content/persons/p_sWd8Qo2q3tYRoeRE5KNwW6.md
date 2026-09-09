---
schema: wang-person/v1
id: p_sWd8Qo2q3tYRoeRE5KNwW6
status: active
merged_into: null
display_name: 王瑄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CS29CjJy53MVCW7TvaWwgd
        subject_person_id: p_sWd8Qo2q3tYRoeRE5KNwW6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4Au9Nj9ZFEtp3Vxu4SH5B5
          claim_id: c_CS29CjJy53MVCW7TvaWwgd
          source_id: s_2F1q8GK66i9wZLCfWAKk7r
          stance: supports
          locator: CBDB:510695
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（510695）
          source: &a1
            id: s_2F1q8GK66i9wZLCfWAKk7r
            source_type: api_record
            title: 中国历代人物传记资料库：王瑄（CBDB 510695）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510695&o=json
            external_identifier: CBDB:510695
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.250Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F7UsLx5H2C4463ehMfjLNF
        subject_person_id: p_sWd8Qo2q3tYRoeRE5KNwW6
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
        - id: cs_3UteuhbpQt8BPTLFgddTf2
          claim_id: c_F7UsLx5H2C4463ehMfjLNF
          source_id: s_2F1q8GK66i9wZLCfWAKk7r
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

# 王瑄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑄 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑄（CBDB 510695）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=510695&o=json)
