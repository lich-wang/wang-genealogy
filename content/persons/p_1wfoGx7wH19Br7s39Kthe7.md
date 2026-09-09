---
schema: wang-person/v1
id: p_1wfoGx7wH19Br7s39Kthe7
status: active
merged_into: null
display_name: 王畿
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GNAXpQN8rbbTcR6w4ztpxM
        subject_person_id: p_1wfoGx7wH19Br7s39Kthe7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王畿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FQHsyp4po95xb8Jz2PdeH5
          claim_id: c_GNAXpQN8rbbTcR6w4ztpxM
          source_id: s_7RjJUVQ7mh4piBfcTkCF7a
          stance: supports
          locator: CBDB:71276
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71276）
          source: &a1
            id: s_7RjJUVQ7mh4piBfcTkCF7a
            source_type: api_record
            title: 中国历代人物传记资料库：王畿（CBDB 71276）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71276&o=json
            external_identifier: CBDB:71276
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.553Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_a2CkbWQADPgdzLMmyiLiAr
        subject_person_id: p_1wfoGx7wH19Br7s39Kthe7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1621年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kpob1Y62rfUvGH8HL69S4u
          claim_id: c_a2CkbWQADPgdzLMmyiLiAr
          source_id: s_7RjJUVQ7mh4piBfcTkCF7a
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_5iyJoPJUuXd2NZkjaeDA9G
        subject_person_id: p_1wfoGx7wH19Br7s39Kthe7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1703年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XZ6AgdugqqwEHNh7FHaBLP
          claim_id: c_5iyJoPJUuXd2NZkjaeDA9G
          source_id: s_7RjJUVQ7mh4piBfcTkCF7a
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U43SsVdPBzXzv4Y3oYP1C4
        subject_person_id: p_1wfoGx7wH19Br7s39Kthe7
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
        - id: cs_Af9uHYmJjSdfRYrtVMsaGq
          claim_id: c_U43SsVdPBzXzv4Y3oYP1C4
          source_id: s_7RjJUVQ7mh4piBfcTkCF7a
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

# 王畿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王畿 | accepted |
| birth.date | 1621年 | accepted |
| death.date | 1703年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王畿（CBDB 71276）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71276&o=json)
