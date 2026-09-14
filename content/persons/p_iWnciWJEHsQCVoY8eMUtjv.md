---
schema: wang-person/v1
id: p_iWnciWJEHsQCVoY8eMUtjv
status: active
merged_into: null
display_name: 王佐
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zRYnpafXVaJmYBE2HDo8zq
        subject_person_id: p_iWnciWJEHsQCVoY8eMUtjv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xWajdbFn5buhH3mZsB5auw
          claim_id: c_zRYnpafXVaJmYBE2HDo8zq
          source_id: s_41x7Bc9EFfbhCuQCSux2qf
          stance: supports
          locator: CBDB:286074
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（286074）
          source: &a1
            id: s_41x7Bc9EFfbhCuQCSux2qf
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 286074）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286074&o=json
            external_identifier: CBDB:286074
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.230Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pZcNPM3ajgsQ7qF297xHFt
        subject_person_id: p_iWnciWJEHsQCVoY8eMUtjv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王佐，明人物。正德十六年進士，籍贯金吾右衛。（中国历代人物传记资料库 CBDB 286074）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_y_bqMXa7emf_KwYmqtoZMq
          claim_id: c_pZcNPM3ajgsQ7qF297xHFt
          source_id: s_41x7Bc9EFfbhCuQCSux2qf
          stance: supports
          locator: CBDB:286074
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1Ngj5veiooWsg6nvGJ0VDK
        subject_person_id: p_exNPQqiad19zXtFzRk4E7x
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iWnciWJEHsQCVoY8eMUtjv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DZpp13ehssl2EP9DMi3odt
          claim_id: c_1Ngj5veiooWsg6nvGJ0VDK
          source_id: s_wHguomZVrx7aEgJUVdRfv8
          stance: supports
          locator: CBDB：兄弟 王傅（202284）之父／母 王琦
          quotation: null
          interpretation_note: 由兄弟关系推断：王佐 与 王傅 为同胞（CBDB 记「弟」），王傅 之父／母即 王佐 之父／母。
          source:
            id: s_wHguomZVrx7aEgJUVdRfv8
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 286074）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286074&o=json
            external_identifier: CBDB:286074
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_exNPQqiad19zXtFzRk4E7x
        status: active
        display_name: 王琦
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Yhl9TO4quCDjbiD2khymeL
        subject_person_id: p_UHUqHrmc3KJzYiDRgXCMg7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_iWnciWJEHsQCVoY8eMUtjv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eZLJcoBbP5Ysvb_FrWFZu_
          claim_id: c_Yhl9TO4quCDjbiD2khymeL
          source_id: s_wHguomZVrx7aEgJUVdRfv8
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202284 王傅）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_wHguomZVrx7aEgJUVdRfv8
            source_type: api_record
            title: 中国历代人物传记资料库：王佐（CBDB 286074）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286074&o=json
            external_identifier: CBDB:286074
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UHUqHrmc3KJzYiDRgXCMg7
        status: active
        display_name: 王傅
        merged_into_person_id: null
---

# 王佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王佐 | accepted |
| bio.summary | 王佐，明人物。正德十六年進士，籍贯金吾右衛。（中国历代人物传记资料库 CBDB 286074） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_exNPQqiad19zXtFzRk4E7x | 王琦 | accepted |
| other | p_UHUqHrmc3KJzYiDRgXCMg7 | 王傅 | accepted |

## 外部来源

- [中国历代人物传记资料库：王佐（CBDB 286074）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286074&o=json)
