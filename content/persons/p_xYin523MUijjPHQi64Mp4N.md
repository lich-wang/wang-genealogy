---
schema: wang-person/v1
id: p_xYin523MUijjPHQi64Mp4N
status: active
merged_into: null
display_name: 王克緒
cbdb_id: 17760
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h4P6Bv2hrPiEEMo3rJ6puJ
        subject_person_id: p_xYin523MUijjPHQi64Mp4N
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克緒，宋人物。籍贯洛陽，入仕恩蔭、蔭補，曾任尚書左僕射、供奉官。（中国历代人物传记资料库 CBDB 17760）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_VecpV4k_z4r7Hx-T1hZK8B
          claim_id: c_h4P6Bv2hrPiEEMo3rJ6puJ
          source_id: s_cbjTb575mUupTSCPPu8b6e
          stance: supports
          locator: CBDB:17760
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_cbjTb575mUupTSCPPu8b6e
            source_type: api_record
            title: 中国历代人物传记资料库：王克緒（CBDB 17760）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17760&o=json
            external_identifier: CBDB:17760
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DdppZMm25cDtAdNNGLGhrJ
        subject_person_id: p_xYin523MUijjPHQi64Mp4N
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克緒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_jiZDFg9QEM5noootbAHCAJ
          claim_id: c_DdppZMm25cDtAdNNGLGhrJ
          source_id: s_cbjTb575mUupTSCPPu8b6e
          stance: supports
          locator: CBDB:17760
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_PdfiUdKvnWo1BM2nWtoQil
        subject_person_id: p_8M1i94w3acDzg1kYhCgGjB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xYin523MUijjPHQi64Mp4N
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TXTcoU5lILvDOVRK9IDmWq
          claim_id: c_PdfiUdKvnWo1BM2nWtoQil
          source_id: s_BeLePDwb6JfXjxxgyhjGOo
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 17759 王克基）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_BeLePDwb6JfXjxxgyhjGOo
            source_type: api_record
            title: 中国历代人物传记资料库：王克緒（CBDB 17760）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17760&o=json
            external_identifier: CBDB:17760
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8M1i94w3acDzg1kYhCgGjB
        status: active
        display_name: 王克基
        merged_into_person_id: null
    - claim:
        id: c_jlSlJGbZEJREbXGrhp1hCI
        subject_person_id: p_uHDKtrdWZ9yKPXUqubAwsx
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xYin523MUijjPHQi64Mp4N
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u3kz8TRBgNte780u5dx2xK
          claim_id: c_jlSlJGbZEJREbXGrhp1hCI
          source_id: s_BeLePDwb6JfXjxxgyhjGOo
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 17761 王克忠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_BeLePDwb6JfXjxxgyhjGOo
            source_type: api_record
            title: 中国历代人物传记资料库：王克緒（CBDB 17760）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17760&o=json
            external_identifier: CBDB:17760
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uHDKtrdWZ9yKPXUqubAwsx
        status: active
        display_name: 王克忠
        merged_into_person_id: null
    - claim:
        id: c_UrDdycJNj2tJebDjGmSzWH
        subject_person_id: p_L19PHwgKSc3FpMQ79Hyn3z
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xYin523MUijjPHQi64Mp4N
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Mf5hxl-CE36m1b6hfA1nCp
          claim_id: c_UrDdycJNj2tJebDjGmSzWH
          source_id: s_BeLePDwb6JfXjxxgyhjGOo
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 17762 王克明）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_BeLePDwb6JfXjxxgyhjGOo
            source_type: api_record
            title: 中国历代人物传记资料库：王克緒（CBDB 17760）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17760&o=json
            external_identifier: CBDB:17760
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_L19PHwgKSc3FpMQ79Hyn3z
        status: active
        display_name: 王克明
        merged_into_person_id: null
---

# 王克緒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王克緒，宋人物。籍贯洛陽，入仕恩蔭、蔭補，曾任尚書左僕射、供奉官。（中国历代人物传记资料库 CBDB 17760） | accepted |
| name.primary | 王克緒 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_8M1i94w3acDzg1kYhCgGjB | 王克基 | accepted |
| other | p_uHDKtrdWZ9yKPXUqubAwsx | 王克忠 | accepted |
| other | p_L19PHwgKSc3FpMQ79Hyn3z | 王克明 | accepted |

## 外部来源

- [中国历代人物传记资料库：王克緒（CBDB 17760）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17760&o=json)
