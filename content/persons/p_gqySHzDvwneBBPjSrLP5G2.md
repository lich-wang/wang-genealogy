---
schema: wang-person/v1
id: p_gqySHzDvwneBBPjSrLP5G2
status: active
merged_into: null
display_name: 王唯元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EuWBCFyK14h8ay9aFa7R8X
        subject_person_id: p_gqySHzDvwneBBPjSrLP5G2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王唯元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9d64ox2rPjzEhkrU6RSfKy
          claim_id: c_EuWBCFyK14h8ay9aFa7R8X
          source_id: s_PDdNA1zQufGBNQX2rSJGwd
          stance: supports
          locator: CBDB:538283
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（538283）
          source: &a1
            id: s_PDdNA1zQufGBNQX2rSJGwd
            source_type: api_record
            title: 中国历代人物传记资料库：王唯元（CBDB 538283）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=538283&o=json
            external_identifier: CBDB:538283
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.416Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_noHbJg9xNpzRD51jksAMMV
        subject_person_id: p_gqySHzDvwneBBPjSrLP5G2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k2P4TiCipyckVpxFspdUGB
          claim_id: c_noHbJg9xNpzRD51jksAMMV
          source_id: s_PDdNA1zQufGBNQX2rSJGwd
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

# 王唯元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王唯元 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王唯元（CBDB 538283）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=538283&o=json)
