---
schema: wang-person/v1
id: p_8r84bqHmnvsQLEVC1QUfiu
status: active
merged_into: null
display_name: 王駿聲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ykwyfVM7YJ4iFC9oK54j94
        subject_person_id: p_8r84bqHmnvsQLEVC1QUfiu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王駿聲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hU32WKg4hPQ21vKMFTFyn1
          claim_id: c_ykwyfVM7YJ4iFC9oK54j94
          source_id: s_Lmq11RDiyZPQC69FLHd3Gn
          stance: supports
          locator: CBDB:640892
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640892）
          source: &a1
            id: s_Lmq11RDiyZPQC69FLHd3Gn
            source_type: api_record
            title: 中国历代人物传记资料库：王駿聲（CBDB 640892）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640892&o=json
            external_identifier: CBDB:640892
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.230Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Qf7NgK37PhE82UFtRLsSCJ
        subject_person_id: p_8r84bqHmnvsQLEVC1QUfiu
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
        - id: cs_PykANbgemz4MrVqGUsXahD
          claim_id: c_Qf7NgK37PhE82UFtRLsSCJ
          source_id: s_Lmq11RDiyZPQC69FLHd3Gn
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

# 王駿聲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王駿聲 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王駿聲（CBDB 640892）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640892&o=json)
