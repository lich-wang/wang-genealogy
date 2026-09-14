---
schema: wang-person/v1
id: p_TwZjG25iBgeMPFsGDBpeu8
status: active
merged_into: null
display_name: 王勉宜
cbdb_id: 217259
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MM7FNhd6xxpFje9bMa83aN
        subject_person_id: p_TwZjG25iBgeMPFsGDBpeu8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勉宜，明人物。天順八年進士，籍贯稷山。（中国历代人物传记资料库 CBDB 217259）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_iGDWie2uLz8s2D8oQ5jZZ0
          claim_id: c_MM7FNhd6xxpFje9bMa83aN
          source_id: s_AL52VhXHt5dPVE9amQkX9M
          stance: supports
          locator: CBDB:217259
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_AL52VhXHt5dPVE9amQkX9M
            source_type: api_record
            title: 中国历代人物传记资料库：王勉宜（CBDB 217259）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217259&o=json
            external_identifier: CBDB:217259
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_MBGKfNWLecADfnHQqvVcfa
        subject_person_id: p_TwZjG25iBgeMPFsGDBpeu8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勉宜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3VasgsK5hymGQxbs79BYZ4
          claim_id: c_MBGKfNWLecADfnHQqvVcfa
          source_id: s_AL52VhXHt5dPVE9amQkX9M
          stance: supports
          locator: CBDB:217259
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_F0HkTloODUBMm768ehNJNC
        subject_person_id: p_12DEVgMDKmXWxrfKEnUPE7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TwZjG25iBgeMPFsGDBpeu8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_veCV6Q4zW9HafT4KWyoYHV
          claim_id: c_F0HkTloODUBMm768ehNJNC
          source_id: s_oZSfE_-CDYusQFBJezWfQ1
          stance: supports
          locator: CBDB：兄弟 王衡（124006）之父／母 王琅
          quotation: null
          interpretation_note: 由兄弟关系推断：王勉宜 与 王衡 为同胞（CBDB 记「兄」），王衡 之父／母即 王勉宜 之父／母。
          source:
            id: s_oZSfE_-CDYusQFBJezWfQ1
            source_type: api_record
            title: 中国历代人物传记资料库：王勉宜（CBDB 217259）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217259&o=json
            external_identifier: CBDB:217259
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_12DEVgMDKmXWxrfKEnUPE7
        status: active
        display_name: 王琅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_6ZfbA1o_aE8RBjirVIUddb
        subject_person_id: p_JL51TddY85M5VjjQdk9Dbd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TwZjG25iBgeMPFsGDBpeu8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EXJ-6GmIdt6gS4PnW3mvTa
          claim_id: c_6ZfbA1o_aE8RBjirVIUddb
          source_id: s_oZSfE_-CDYusQFBJezWfQ1
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 124006 王衡）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oZSfE_-CDYusQFBJezWfQ1
            source_type: api_record
            title: 中国历代人物传记资料库：王勉宜（CBDB 217259）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217259&o=json
            external_identifier: CBDB:217259
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JL51TddY85M5VjjQdk9Dbd
        status: active
        display_name: 王衡
        merged_into_person_id: null
---

# 王勉宜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王勉宜，明人物。天順八年進士，籍贯稷山。（中国历代人物传记资料库 CBDB 217259） | accepted |
| name.primary | 王勉宜 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_12DEVgMDKmXWxrfKEnUPE7 | 王琅 | accepted |
| other | p_JL51TddY85M5VjjQdk9Dbd | 王衡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王勉宜（CBDB 217259）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217259&o=json)
