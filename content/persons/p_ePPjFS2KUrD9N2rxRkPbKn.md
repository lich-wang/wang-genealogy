---
schema: wang-person/v1
id: p_ePPjFS2KUrD9N2rxRkPbKn
status: active
merged_into: null
display_name: 王堯
cbdb_id: 23538
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_47jJHiau16mJrAAXuBBnPE
        subject_person_id: p_ePPjFS2KUrD9N2rxRkPbKn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堯，宋人物。籍贯黃巖。（中国历代人物传记资料库 CBDB 23538）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_87O46uCvmdCUcC3HcQ7vqf
          claim_id: c_47jJHiau16mJrAAXuBBnPE
          source_id: s_M7mdoLc4HewYWQCM4akP5F
          stance: supports
          locator: CBDB:23538
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_M7mdoLc4HewYWQCM4akP5F
            source_type: api_record
            title: 中国历代人物传记资料库：王堯（CBDB 23538）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23538&o=json
            external_identifier: CBDB:23538
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_cFH8rTfBAGV8ZwqUYMiKdm
        subject_person_id: p_ePPjFS2KUrD9N2rxRkPbKn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_rukYw9PThBBPULraVpcw5C
          claim_id: c_cFH8rTfBAGV8ZwqUYMiKdm
          source_id: s_M7mdoLc4HewYWQCM4akP5F
          stance: supports
          locator: CBDB:23538
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_nr32uOjgTGzDp0pbBLSHSf
        subject_person_id: p_heH38VSLSCh5Ab7ysRAb3p
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ePPjFS2KUrD9N2rxRkPbKn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Crj2k7donZ7dBko6ndgTS-
          claim_id: c_nr32uOjgTGzDp0pbBLSHSf
          source_id: s_jdVcHJw97jDqoCPTJ8kF5D
          stance: supports
          locator: CBDB 双向互证（子 王堯 ⇄ 父 王蘊）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_jdVcHJw97jDqoCPTJ8kF5D
            source_type: api_record
            title: 中国历代人物传记资料库：王蘊（CBDB 23537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23537&o=json
            external_identifier: CBDB:23537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.886Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_heH38VSLSCh5Ab7ysRAb3p
        status: active
        display_name: 王蘊
        merged_into_person_id: null
  children:
    - claim:
        id: c_5-nXh2IJEIFQI-YfwDdkU_
        subject_person_id: p_ePPjFS2KUrD9N2rxRkPbKn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DaceSCoivWKakaLS5hN3i4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uHvPQjTnfee5mv798mLdCt
          claim_id: c_5-nXh2IJEIFQI-YfwDdkU_
          source_id: s_ocKxjH5yjwiwoNMWYbQ2Ws
          stance: supports
          locator: CBDB 双向互证（父 王堯 ⇄ 子 王滋）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_ocKxjH5yjwiwoNMWYbQ2Ws
            source_type: api_record
            title: 中国历代人物传记资料库：王滋（CBDB 23539）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23539&o=json
            external_identifier: CBDB:23539
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.886Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DaceSCoivWKakaLS5hN3i4
        status: active
        display_name: 王滋
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王堯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王堯，宋人物。籍贯黃巖。（中国历代人物传记资料库 CBDB 23538） | accepted |
| name.primary | 王堯 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_heH38VSLSCh5Ab7ysRAb3p | 王蘊 | accepted |
| children | p_DaceSCoivWKakaLS5hN3i4 | 王滋 | accepted |

## 外部来源

- [中国历代人物传记资料库：王堯（CBDB 23538）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23538&o=json)
- [中国历代人物传记资料库：王蘊（CBDB 23537）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23537&o=json)
- [中国历代人物传记资料库：王滋（CBDB 23539）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23539&o=json)
