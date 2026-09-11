---
schema: wang-person/v1
id: p_m4omCECgB9Kup9Me7EUCYL
status: active
merged_into: null
display_name: 王淮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HX2S4VXJKea1KZ59QNWAnN
        subject_person_id: p_m4omCECgB9Kup9Me7EUCYL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JtWCFGWsWRm3iNY3J47Qkm
          claim_id: c_HX2S4VXJKea1KZ59QNWAnN
          source_id: s_zFprDqFo329KDdGLu8TaNs
          stance: supports
          locator: CBDB:22226
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22226）
          source: &a1
            id: s_zFprDqFo329KDdGLu8TaNs
            source_type: api_record
            title: 中国历代人物传记资料库：王淮（CBDB 22226）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22226&o=json
            external_identifier: CBDB:22226
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.856Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zkgBzPFLsJnDKBha74JkNG
        subject_person_id: p_m4omCECgB9Kup9Me7EUCYL
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
        - id: cs_KKWAC1eM8YYR1T7NT5zP4W
          claim_id: c_zkgBzPFLsJnDKBha74JkNG
          source_id: s_zFprDqFo329KDdGLu8TaNs
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
        id: c_t1_TZitPjkAR_Ka2x-KG9q
        subject_person_id: p_MAiRkitkM5dtxpiXBoh3Jq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_m4omCECgB9Kup9Me7EUCYL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bxKjWn8WwJCG2Gp_EMwynI
          claim_id: c_t1_TZitPjkAR_Ka2x-KG9q
          source_id: s_zFprDqFo329KDdGLu8TaNs
          stance: supports
          locator: CBDB 双向互证（父 王朝隱 ⇄ 子 王淮）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_MAiRkitkM5dtxpiXBoh3Jq
        status: active
        display_name: 王朝隱
        merged_into_person_id: null
  children:
    - claim:
        id: c_GegUijso5m97D-ihLs4Woj
        subject_person_id: p_m4omCECgB9Kup9Me7EUCYL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C4816sfyy713u6fK7hDYic
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sx9ZZ1B7lzRuND-4q1lSxN
          claim_id: c_GegUijso5m97D-ihLs4Woj
          source_id: s_oeFsb4CNCVBRR5UJFCSRwF
          stance: supports
          locator: CBDB 双向互证（父 王淮 ⇄ 子 王當）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_oeFsb4CNCVBRR5UJFCSRwF
            source_type: api_record
            title: 中国历代人物传记资料库：王當（CBDB 10211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10211&o=json
            external_identifier: CBDB:10211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.522Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_C4816sfyy713u6fK7hDYic
        status: active
        display_name: 王當
        merged_into_person_id: null
    - claim:
        id: c_OiCda8ur-30hdZtTsjenEQ
        subject_person_id: p_m4omCECgB9Kup9Me7EUCYL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QsqU52N7W4Y4axXS3YwPEw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-rf81YFi9D1wH2Gaex2EAG
          claim_id: c_OiCda8ur-30hdZtTsjenEQ
          source_id: s_zFprDqFo329KDdGLu8TaNs
          stance: supports
          locator: CBDB 双向互证（子 王賞 ⇄ 父 王淮）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_QsqU52N7W4Y4axXS3YwPEw
        status: active
        display_name: 王賞
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王淮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淮 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_MAiRkitkM5dtxpiXBoh3Jq | 王朝隱 | accepted |
| children | p_C4816sfyy713u6fK7hDYic | 王當 | accepted |
| children | p_QsqU52N7W4Y4axXS3YwPEw | 王賞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王當（CBDB 10211）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10211&o=json)
- [中国历代人物传记资料库：王淮（CBDB 22226）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22226&o=json)
