---
schema: wang-person/v1
id: p_syTUjQt193aDPDGP4pHzSQ
status: active
merged_into: null
display_name: 王璇
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_as6ixE5YuoFnys15EGWd24
        subject_person_id: p_syTUjQt193aDPDGP4pHzSQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jSAjdfHQsBCEQrRLrekZMu
          claim_id: c_as6ixE5YuoFnys15EGWd24
          source_id: s_VecGSq2tE2aC2NQPbasJXF
          stance: supports
          locator: CBDB:25796
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（25796）
          source: &a1
            id: s_VecGSq2tE2aC2NQPbasJXF
            source_type: api_record
            title: 中国历代人物传记资料库：王璇（CBDB 25796）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25796&o=json
            external_identifier: CBDB:25796
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.921Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mjgNdH9wVHScgjqaUQSbj2
        subject_person_id: p_syTUjQt193aDPDGP4pHzSQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璇，宋人物。籍贯剡縣。（中国历代人物传记资料库 CBDB 25796）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9PhLQyveL93NLoeCswh6bp
          claim_id: c_mjgNdH9wVHScgjqaUQSbj2
          source_id: s_VecGSq2tE2aC2NQPbasJXF
          stance: supports
          locator: CBDB:25796
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_sdFipIx9osnEGWuyJiE9BT
        subject_person_id: p_syTUjQt193aDPDGP4pHzSQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_F8NZqodJZq6dvtt7kXmm8U
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yoE5TxODTAroRaA5m4Qilz
          claim_id: c_sdFipIx9osnEGWuyJiE9BT
          source_id: s_tbyqf7phVLgW598Z3YwUde
          stance: supports
          locator: CBDB 双向互证（父 王璇 ⇄ 子 王徽）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_tbyqf7phVLgW598Z3YwUde
            source_type: api_record
            title: 中国历代人物传记资料库：王徽（CBDB 25797）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25797&o=json
            external_identifier: CBDB:25797
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.922Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_F8NZqodJZq6dvtt7kXmm8U
        status: active
        display_name: 王徽
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王璇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璇 | accepted |
| bio.summary | 王璇，宋人物。籍贯剡縣。（中国历代人物传记资料库 CBDB 25796） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_F8NZqodJZq6dvtt7kXmm8U | 王徽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王徽（CBDB 25797）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25797&o=json)
- [中国历代人物传记资料库：王璇（CBDB 25796）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=25796&o=json)
