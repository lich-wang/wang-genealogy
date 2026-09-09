---
schema: wang-person/v1
id: p_HC7p9u6NGQQjM86y7m5YBb
status: active
merged_into: null
display_name: 王随
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BPXXBCse1Pgwpr5ruk4zuN
        subject_person_id: p_HC7p9u6NGQQjM86y7m5YBb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王随
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MuayYrQruLoGQcK7cPEuEr
          claim_id: c_BPXXBCse1Pgwpr5ruk4zuN
          source_id: s_A83z2oFFhwV1uJw4D5NEdm
          stance: supports
          locator: CBDB:468721
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（468721）
          source: &a1
            id: s_A83z2oFFhwV1uJw4D5NEdm
            source_type: api_record
            title: 中国历代人物传记资料库：王随（CBDB 468721）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=468721&o=json
            external_identifier: CBDB:468721
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.101Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_438yJnJyFfdoMi6k33ixBJ
        subject_person_id: p_HC7p9u6NGQQjM86y7m5YBb
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
        - id: cs_EtVeDtnVXu7Bg3MzYikVeY
          claim_id: c_438yJnJyFfdoMi6k33ixBJ
          source_id: s_A83z2oFFhwV1uJw4D5NEdm
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

# 王随

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王随 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王随（CBDB 468721）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=468721&o=json)
