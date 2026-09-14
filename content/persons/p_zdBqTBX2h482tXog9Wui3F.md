---
schema: wang-person/v1
id: p_zdBqTBX2h482tXog9Wui3F
status: active
merged_into: null
display_name: 王琛
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3bU7mjbg63bhqMeWNhhYJj
        subject_person_id: p_zdBqTBX2h482tXog9Wui3F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rxN674k8T3GFPX39NsEujG
          claim_id: c_3bU7mjbg63bhqMeWNhhYJj
          source_id: s_BZXzdtTwFRybY5AgwZ3p8W
          stance: supports
          locator: CBDB:321696
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（321696）
          source: &a1
            id: s_BZXzdtTwFRybY5AgwZ3p8W
            source_type: api_record
            title: 中国历代人物传记资料库：王琛（CBDB 321696）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321696&o=json
            external_identifier: CBDB:321696
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.103Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CBrS23e45Xmqnt1RtKAcAS
        subject_person_id: p_zdBqTBX2h482tXog9Wui3F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琛，明人物。天順四年進士，籍贯易州。（中国历代人物传记资料库 CBDB 321696）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_thkl4Xa4P3eZWd0pG7_KtP
          claim_id: c_CBrS23e45Xmqnt1RtKAcAS
          source_id: s_BZXzdtTwFRybY5AgwZ3p8W
          stance: supports
          locator: CBDB:321696
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_CT_LHJs4LvSvMSx_UWFATd
        subject_person_id: p_2Rh3yGLnnM5LyvxUZe67wC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zdBqTBX2h482tXog9Wui3F
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oe0qZyLysog1W_1EcMZABE
          claim_id: c_CT_LHJs4LvSvMSx_UWFATd
          source_id: s_5qCYDyFUSzaOw5Hk4ccKUu
          stance: supports
          locator: CBDB：兄弟 王甫（198828）之父／母 王傑
          quotation: null
          interpretation_note: 由兄弟关系推断：王琛 与 王甫 为同胞（CBDB 记「兄」），王甫 之父／母即 王琛 之父／母。
          source:
            id: s_5qCYDyFUSzaOw5Hk4ccKUu
            source_type: api_record
            title: 中国历代人物传记资料库：王琛（CBDB 321696）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321696&o=json
            external_identifier: CBDB:321696
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2Rh3yGLnnM5LyvxUZe67wC
        status: active
        display_name: 王傑
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Iry0W0-osJd6PSoZZnaJlv
        subject_person_id: p_DJhG2TFTs2BSF3ec5E2mBn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zdBqTBX2h482tXog9Wui3F
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aiZUqnhaMW-De11-06WOrd
          claim_id: c_Iry0W0-osJd6PSoZZnaJlv
          source_id: s_5qCYDyFUSzaOw5Hk4ccKUu
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198828 王甫）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5qCYDyFUSzaOw5Hk4ccKUu
            source_type: api_record
            title: 中国历代人物传记资料库：王琛（CBDB 321696）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321696&o=json
            external_identifier: CBDB:321696
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DJhG2TFTs2BSF3ec5E2mBn
        status: active
        display_name: 王甫
        merged_into_person_id: null
---

# 王琛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琛 | accepted |
| bio.summary | 王琛，明人物。天順四年進士，籍贯易州。（中国历代人物传记资料库 CBDB 321696） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_2Rh3yGLnnM5LyvxUZe67wC | 王傑 | accepted |
| other | p_DJhG2TFTs2BSF3ec5E2mBn | 王甫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琛（CBDB 321696）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321696&o=json)
