---
schema: wang-person/v1
id: p_oL919BvEnLuuHSmoMFsVv3
status: active
merged_into: null
display_name: 王慶
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1KPsuRxSsCfDeQG842cG2C
        subject_person_id: p_oL919BvEnLuuHSmoMFsVv3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_V9EW74uKst5ftTN6eohmzK
          claim_id: c_1KPsuRxSsCfDeQG842cG2C
          source_id: s_Xa3PxsLRgg2pD3QiwfsQkR
          stance: supports
          locator: CBDB:21941
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（21941）
          source: &a1
            id: s_Xa3PxsLRgg2pD3QiwfsQkR
            source_type: api_record
            title: 中国历代人物传记资料库：王慶（CBDB 21941）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21941&o=json
            external_identifier: CBDB:21941
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.771Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aNz2oHQj9MW5pNaDH9fU7b
        subject_person_id: p_oL919BvEnLuuHSmoMFsVv3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慶，吳越人物。籍贯蕭山。（中国历代人物传记资料库 CBDB 21941）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WV6shWEXXZuZggMW3LzVNf
          claim_id: c_aNz2oHQj9MW5pNaDH9fU7b
          source_id: s_Xa3PxsLRgg2pD3QiwfsQkR
          stance: supports
          locator: CBDB:21941
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_5QYoFZKW3hcDujWGqEvTJP
        subject_person_id: p_oL919BvEnLuuHSmoMFsVv3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VKXQSeMipFooFNMW87DRch
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_miHPhwykuTSuCqo75mGI7k
          claim_id: c_5QYoFZKW3hcDujWGqEvTJP
          source_id: s_Xa3PxsLRgg2pD3QiwfsQkR
          stance: supports
          locator: CBDB 双向互证（子 王安 ⇄ 父 王慶）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_VKXQSeMipFooFNMW87DRch
        status: active
        display_name: 王安
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慶 | accepted |
| bio.summary | 王慶，吳越人物。籍贯蕭山。（中国历代人物传记资料库 CBDB 21941） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_VKXQSeMipFooFNMW87DRch | 王安 | accepted |

## 外部来源

- [中国历代人物传记资料库：王慶（CBDB 21941）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21941&o=json)
