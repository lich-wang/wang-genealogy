---
schema: wang-person/v1
id: p_mDg582vLKtSpktwCi5fdNd
status: active
merged_into: null
display_name: 王思忠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hVa45edzoLHGAzgnKA3m35
        subject_person_id: p_mDg582vLKtSpktwCi5fdNd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_USiT1xiy5Z8nU5ERSCCckq
          claim_id: c_hVa45edzoLHGAzgnKA3m35
          source_id: s_5DL67h3wmPUKisxibnHger
          stance: supports
          locator: CBDB:477077
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（477077）
          source: &a1
            id: s_5DL67h3wmPUKisxibnHger
            source_type: api_record
            title: 中国历代人物传记资料库：王思忠（CBDB 477077）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=477077&o=json
            external_identifier: CBDB:477077
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.501Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ChCoVv7rNk1XQvn62C8E6f
        subject_person_id: p_mDg582vLKtSpktwCi5fdNd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a12uS63Q7CPJzP4cuqB8wq
          claim_id: c_ChCoVv7rNk1XQvn62C8E6f
          source_id: s_5DL67h3wmPUKisxibnHger
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

# 王思忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思忠 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思忠（CBDB 477077）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=477077&o=json)
