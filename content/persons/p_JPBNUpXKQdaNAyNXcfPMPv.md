---
schema: wang-person/v1
id: p_JPBNUpXKQdaNAyNXcfPMPv
status: active
merged_into: null
display_name: 王同任
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iG819MFP5biCiyQfCEpFT8
        subject_person_id: p_JPBNUpXKQdaNAyNXcfPMPv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同任
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Dp7EhBH1f61FP8ESgrXfmu
          claim_id: c_iG819MFP5biCiyQfCEpFT8
          source_id: s_wHefb2xEZydxUpjQNNZEJm
          stance: supports
          locator: CBDB:326626
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（326626）
          source: &a1
            id: s_wHefb2xEZydxUpjQNNZEJm
            source_type: api_record
            title: 中国历代人物传记资料库：王同任（CBDB 326626）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326626&o=json
            external_identifier: CBDB:326626
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.225Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hG2MMHn7mJNFBLG9eBencG
        subject_person_id: p_JPBNUpXKQdaNAyNXcfPMPv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同任，明人物。嘉靖四十一年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 326626）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hHPD_W-GCLOO0wT9W0Jn0c
          claim_id: c_hG2MMHn7mJNFBLG9eBencG
          source_id: s_wHefb2xEZydxUpjQNNZEJm
          stance: supports
          locator: CBDB:326626
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ZKhP-uvNaqvtB57Fykjhhx
        subject_person_id: p_BQt5KMQt85phWutCQLQcnd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_JPBNUpXKQdaNAyNXcfPMPv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_os2qe374D_zJZc5D8oQSMj
          claim_id: c_ZKhP-uvNaqvtB57Fykjhhx
          source_id: s_oFfRfdwRUdzE3GGASVsDm4
          stance: supports
          locator: CBDB：兄弟 王同讚（204969）之父／母 王叔中
          quotation: null
          interpretation_note: 由兄弟关系推断：王同任 与 王同讚 为同胞（CBDB 记「兄」），王同讚 之父／母即 王同任 之父／母。
          source:
            id: s_oFfRfdwRUdzE3GGASVsDm4
            source_type: api_record
            title: 中国历代人物传记资料库：王同任（CBDB 326626）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326626&o=json
            external_identifier: CBDB:326626
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BQt5KMQt85phWutCQLQcnd
        status: active
        display_name: 王叔中
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_FIFVlgluBsGkVlqM31E-oE
        subject_person_id: p_4PMudrRao4a9cRDuakPq7M
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_JPBNUpXKQdaNAyNXcfPMPv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TpAg0pQx7LU44o4rOhUxjp
          claim_id: c_FIFVlgluBsGkVlqM31E-oE
          source_id: s_oFfRfdwRUdzE3GGASVsDm4
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204969 王同讚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oFfRfdwRUdzE3GGASVsDm4
            source_type: api_record
            title: 中国历代人物传记资料库：王同任（CBDB 326626）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326626&o=json
            external_identifier: CBDB:326626
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4PMudrRao4a9cRDuakPq7M
        status: active
        display_name: 王同讚
        merged_into_person_id: null
---

# 王同任

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王同任 | accepted |
| bio.summary | 王同任，明人物。嘉靖四十一年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 326626） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BQt5KMQt85phWutCQLQcnd | 王叔中 | accepted |
| other | p_4PMudrRao4a9cRDuakPq7M | 王同讚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王同任（CBDB 326626）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326626&o=json)
