---
schema: wang-person/v1
id: p_NrSbsVxWb6HeSJJMvGiVCq
status: active
merged_into: null
display_name: 王藻
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8PuHx6iKjkxHaDG8wGszVc
        subject_person_id: p_NrSbsVxWb6HeSJJMvGiVCq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XDC7DJRaey8BsYLpdE7WZg
          claim_id: c_8PuHx6iKjkxHaDG8wGszVc
          source_id: s_ci8sUDaa5XuoyXFXTT9f4p
          stance: supports
          locator: CBDB:23167
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（23167）
          source: &a1
            id: s_ci8sUDaa5XuoyXFXTT9f4p
            source_type: api_record
            title: 中国历代人物传记资料库：王藻（CBDB 23167）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23167&o=json
            external_identifier: CBDB:23167
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.869Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jTRhcTRYZfz1aBsbPG6wMp
        subject_person_id: p_NrSbsVxWb6HeSJJMvGiVCq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王藻，宋人物。籍贯太平。（中国历代人物传记资料库 CBDB 23167）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SfmR3TmlRXKnV-9nHCgXqp
          claim_id: c_jTRhcTRYZfz1aBsbPG6wMp
          source_id: s_ci8sUDaa5XuoyXFXTT9f4p
          stance: supports
          locator: CBDB:23167
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6BILkbPrZXDQPP8of4s3mu
        subject_person_id: p_AA5t38FYmMKS3bwu19tA67
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NrSbsVxWb6HeSJJMvGiVCq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rvguGO-jncXLHyIiquOxT1
          claim_id: c_6BILkbPrZXDQPP8of4s3mu
          source_id: s_ci8sUDaa5XuoyXFXTT9f4p
          stance: supports
          locator: CBDB 双向互证（父 王景略 ⇄ 子 王藻）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_AA5t38FYmMKS3bwu19tA67
        status: active
        display_name: 王景略
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王藻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王藻 | accepted |
| bio.summary | 王藻，宋人物。籍贯太平。（中国历代人物传记资料库 CBDB 23167） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AA5t38FYmMKS3bwu19tA67 | 王景略 | accepted |

## 外部来源

- [中国历代人物传记资料库：王藻（CBDB 23167）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23167&o=json)
