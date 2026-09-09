---
schema: wang-person/v1
id: p_MvLZEauc1ah4Zf3TZTTrQs
status: active
merged_into: null
display_name: 王友蘭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8ah7WFbsFxmZRy9BxsZ9pb
        subject_person_id: p_MvLZEauc1ah4Zf3TZTTrQs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友蘭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4y7TC1qvB6yG2AS3qy9Zf9
          claim_id: c_8ah7WFbsFxmZRy9BxsZ9pb
          source_id: s_Sa9hTF94oGxKux1xfMfUUo
          stance: supports
          locator: CBDB:636461
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636461）
          source: &a1
            id: s_Sa9hTF94oGxKux1xfMfUUo
            source_type: api_record
            title: 中国历代人物传记资料库：王友蘭（CBDB 636461）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636461&o=json
            external_identifier: CBDB:636461
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.999Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xPeY6ugMKEP4rgpAAZ9d7K
        subject_person_id: p_MvLZEauc1ah4Zf3TZTTrQs
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
        - id: cs_J4MJ3EBzGMBmWJkak8eqbv
          claim_id: c_xPeY6ugMKEP4rgpAAZ9d7K
          source_id: s_Sa9hTF94oGxKux1xfMfUUo
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

# 王友蘭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王友蘭 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王友蘭（CBDB 636461）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636461&o=json)
