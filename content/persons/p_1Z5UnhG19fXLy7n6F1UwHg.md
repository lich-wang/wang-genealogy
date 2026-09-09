---
schema: wang-person/v1
id: p_1Z5UnhG19fXLy7n6F1UwHg
status: active
merged_into: null
display_name: 王納誨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5JcVvdHpPKaM78Cph6cPcM
        subject_person_id: p_1Z5UnhG19fXLy7n6F1UwHg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王納誨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BW3e6WUCRDDV2E2cqq2Y5p
          claim_id: c_5JcVvdHpPKaM78Cph6cPcM
          source_id: s_Z5C1Z7dXiFUhSuKwZiKM9C
          stance: supports
          locator: CBDB:126660
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126660）
          source: &a1
            id: s_Z5C1Z7dXiFUhSuKwZiKM9C
            source_type: api_record
            title: 中国历代人物传记资料库：王納誨（CBDB 126660）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126660&o=json
            external_identifier: CBDB:126660
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.101Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bvK8XW7453D6J1XQq6D9HA
        subject_person_id: p_1Z5UnhG19fXLy7n6F1UwHg
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
        - id: cs_aRDfrodxj8zvobo8Y4WEzT
          claim_id: c_bvK8XW7453D6J1XQq6D9HA
          source_id: s_Z5C1Z7dXiFUhSuKwZiKM9C
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

# 王納誨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王納誨 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王納誨（CBDB 126660）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126660&o=json)
