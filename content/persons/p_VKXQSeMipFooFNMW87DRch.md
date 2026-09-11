---
schema: wang-person/v1
id: p_VKXQSeMipFooFNMW87DRch
status: active
merged_into: null
display_name: 王安
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vEPyqJJSi243BQEHAJvxTm
        subject_person_id: p_VKXQSeMipFooFNMW87DRch
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JAaW2FNC7wx4Cy74AcwG41
          claim_id: c_vEPyqJJSi243BQEHAJvxTm
          source_id: s_7uz8ofkxJDdn4oNow8q8QL
          stance: supports
          locator: CBDB:21942
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（21942）
          source: &a1
            id: s_7uz8ofkxJDdn4oNow8q8QL
            source_type: api_record
            title: 中国历代人物传记资料库：王安（CBDB 21942）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21942&o=json
            external_identifier: CBDB:21942
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.771Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_X4Zo5BYCfa9x4XUzJKQNpY
        subject_person_id: p_VKXQSeMipFooFNMW87DRch
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
        - id: cs_EwFE9SMXmnrKbNPX5nAttc
          claim_id: c_X4Zo5BYCfa9x4XUzJKQNpY
          source_id: s_7uz8ofkxJDdn4oNow8q8QL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
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
          source:
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
      object_person:
        id: p_oL919BvEnLuuHSmoMFsVv3
        status: active
        display_name: 王慶
        merged_into_person_id: null
  children:
    - claim:
        id: c_BshHK-omSJKn4fYFpWtEhu
        subject_person_id: p_VKXQSeMipFooFNMW87DRch
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jxjmVZWB7LhBSteooLeSqv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lte7KIfm5k77BBQdzKWVaU
          claim_id: c_BshHK-omSJKn4fYFpWtEhu
          source_id: s_Fr5PGSEvSp8jjg7n3C9CpT
          stance: supports
          locator: CBDB 双向互证（父 王安 ⇄ 子 王扆）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_Fr5PGSEvSp8jjg7n3C9CpT
            source_type: api_record
            title: 中国历代人物传记资料库：王扆（CBDB 21943）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21943&o=json
            external_identifier: CBDB:21943
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.772Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jxjmVZWB7LhBSteooLeSqv
        status: active
        display_name: 王扆
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王安 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oL919BvEnLuuHSmoMFsVv3 | 王慶 | accepted |
| children | p_jxjmVZWB7LhBSteooLeSqv | 王扆 | accepted |

## 外部来源

- [中国历代人物传记资料库：王安（CBDB 21942）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21942&o=json)
- [中国历代人物传记资料库：王慶（CBDB 21941）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21941&o=json)
- [中国历代人物传记资料库：王扆（CBDB 21943）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21943&o=json)
