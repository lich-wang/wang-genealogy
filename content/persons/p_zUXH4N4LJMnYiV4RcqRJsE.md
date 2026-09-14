---
schema: wang-person/v1
id: p_zUXH4N4LJMnYiV4RcqRJsE
status: active
merged_into: null
display_name: 王念
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EpiqK7hMJvu39JERVbFab8
        subject_person_id: p_zUXH4N4LJMnYiV4RcqRJsE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王念
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_w3fAMd35id95sN8hw49HcZ
          claim_id: c_EpiqK7hMJvu39JERVbFab8
          source_id: s_pTsPSJfR2ZpJGBEorhm2kV
          stance: supports
          locator: CBDB:306008
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（306008）
          source: &a1
            id: s_pTsPSJfR2ZpJGBEorhm2kV
            source_type: api_record
            title: 中国历代人物传记资料库：王念（CBDB 306008）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306008&o=json
            external_identifier: CBDB:306008
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.752Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yLvMkCNsMJoXcDZjH8pDSV
        subject_person_id: p_zUXH4N4LJMnYiV4RcqRJsE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王念，明人物。嘉靖二十三年進士，籍贯華亭。（中国历代人物传记资料库 CBDB 306008）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_33SaB59lrW4wiJCRyzYwbs
          claim_id: c_yLvMkCNsMJoXcDZjH8pDSV
          source_id: s_pTsPSJfR2ZpJGBEorhm2kV
          stance: supports
          locator: CBDB:306008
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_HpZsh2qljykq4N_nclWcCd
        subject_person_id: p_26uVgWbWAkUDcgWw8N6zSa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zUXH4N4LJMnYiV4RcqRJsE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dmzX58-mPdwn0Q1aVllJDY
          claim_id: c_HpZsh2qljykq4N_nclWcCd
          source_id: s_koF9ThFNR6tmw1n7myRyGC
          stance: supports
          locator: CBDB：兄弟 王會（126770）之父／母 王良玉
          quotation: null
          interpretation_note: 由兄弟关系推断：王念 与 王會 为同胞（CBDB 记「兄」），王會 之父／母即 王念 之父／母。
          source:
            id: s_koF9ThFNR6tmw1n7myRyGC
            source_type: api_record
            title: 中国历代人物传记资料库：王念（CBDB 306008）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306008&o=json
            external_identifier: CBDB:306008
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_26uVgWbWAkUDcgWw8N6zSa
        status: active
        display_name: 王良玉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ie5-jFNhbXeRGQPVWfiMtG
        subject_person_id: p_Znen7jNez4DsQZ8W2U88iW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zUXH4N4LJMnYiV4RcqRJsE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qj-zjCA3yRQ4cW6g4PShmI
          claim_id: c_ie5-jFNhbXeRGQPVWfiMtG
          source_id: s_koF9ThFNR6tmw1n7myRyGC
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126770 王會）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_koF9ThFNR6tmw1n7myRyGC
            source_type: api_record
            title: 中国历代人物传记资料库：王念（CBDB 306008）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306008&o=json
            external_identifier: CBDB:306008
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Znen7jNez4DsQZ8W2U88iW
        status: active
        display_name: 王會
        merged_into_person_id: null
---

# 王念

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王念 | accepted |
| bio.summary | 王念，明人物。嘉靖二十三年進士，籍贯華亭。（中国历代人物传记资料库 CBDB 306008） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_26uVgWbWAkUDcgWw8N6zSa | 王良玉 | accepted |
| other | p_Znen7jNez4DsQZ8W2U88iW | 王會 | accepted |

## 外部来源

- [中国历代人物传记资料库：王念（CBDB 306008）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306008&o=json)
