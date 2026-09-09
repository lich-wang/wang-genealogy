---
schema: wang-person/v1
id: p_3rB1AVmk8HkFeV89CX3373
status: active
merged_into: null
display_name: 王伯達
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qEMmR1DQqHcGM5D7XEkYin
        subject_person_id: p_3rB1AVmk8HkFeV89CX3373
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯達
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NdC6nrUeWbpBqZkNbnLDPE
          claim_id: c_qEMmR1DQqHcGM5D7XEkYin
          source_id: s_QnCxNaYCuCkkMCBQq5rthW
          stance: supports
          locator: CBDB:256337
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（256337）
          source: &a1
            id: s_QnCxNaYCuCkkMCBQq5rthW
            source_type: api_record
            title: 中国历代人物传记资料库：王伯達（CBDB 256337）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256337&o=json
            external_identifier: CBDB:256337
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.383Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_t1eiUk7Ff4tAU4AnHeWeCC
        subject_person_id: p_3rB1AVmk8HkFeV89CX3373
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
        - id: cs_t1Ah9frMr7HPKkFTLdGk7A
          claim_id: c_t1eiUk7Ff4tAU4AnHeWeCC
          source_id: s_QnCxNaYCuCkkMCBQq5rthW
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

# 王伯達

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伯達 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王伯達（CBDB 256337）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256337&o=json)
