---
schema: wang-person/v1
id: p_bT1dbunnbqRh1gmTTygBPY
status: active
merged_into: null
display_name: 王九敘
cbdb_id: 268142
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_o23LSDxbxfcKucuptwh9iQ
        subject_person_id: p_bT1dbunnbqRh1gmTTygBPY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九敘，明人物。弘治九年進士，籍贯鄠縣。（中国历代人物传记资料库 CBDB 268142）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_AvBr3M-Xc_9nzTWooz5DZH
          claim_id: c_o23LSDxbxfcKucuptwh9iQ
          source_id: s_w8CiqLNPHhcms73JWacnBT
          stance: supports
          locator: CBDB:268142
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_w8CiqLNPHhcms73JWacnBT
            source_type: api_record
            title: 中国历代人物传记资料库：王九敘（CBDB 268142）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268142&o=json
            external_identifier: CBDB:268142
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9gC1XrXEexfN44SDmQ4rs8
        subject_person_id: p_bT1dbunnbqRh1gmTTygBPY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九敘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_WdjPPwGeR3NWVQ64ZHG6HR
          claim_id: c_9gC1XrXEexfN44SDmQ4rs8
          source_id: s_w8CiqLNPHhcms73JWacnBT
          stance: supports
          locator: CBDB:268142
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_c6TDg3oe7hjnjZGSzUylfK
        subject_person_id: p_AHxos763CxLVJAAUFYkhkc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bT1dbunnbqRh1gmTTygBPY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z0XeyTxeVY9jRu2DLm9P0a
          claim_id: c_c6TDg3oe7hjnjZGSzUylfK
          source_id: s_F4MyRbNBBGwA68IQOBGAhA
          stance: supports
          locator: CBDB：兄弟 王九思（126440）之父／母 王儒
          quotation: null
          interpretation_note: 由兄弟关系推断：王九敘 与 王九思 为同胞（CBDB 记「兄」），王九思 之父／母即 王九敘 之父／母。
          source:
            id: s_F4MyRbNBBGwA68IQOBGAhA
            source_type: api_record
            title: 中国历代人物传记资料库：王九敘（CBDB 268142）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268142&o=json
            external_identifier: CBDB:268142
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AHxos763CxLVJAAUFYkhkc
        status: active
        display_name: 王儒
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_jb3dvifNf-ouUg7GrBYLrv
        subject_person_id: p_BDk6YNhR5VP5UAnHiZAmaN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bT1dbunnbqRh1gmTTygBPY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_huI7giSyyGRTguYyiBrOJu
          claim_id: c_jb3dvifNf-ouUg7GrBYLrv
          source_id: s_F4MyRbNBBGwA68IQOBGAhA
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126440 王九思）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_F4MyRbNBBGwA68IQOBGAhA
            source_type: api_record
            title: 中国历代人物传记资料库：王九敘（CBDB 268142）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268142&o=json
            external_identifier: CBDB:268142
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BDk6YNhR5VP5UAnHiZAmaN
        status: active
        display_name: 王九思
        merged_into_person_id: null
---

# 王九敘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王九敘，明人物。弘治九年進士，籍贯鄠縣。（中国历代人物传记资料库 CBDB 268142） | accepted |
| name.primary | 王九敘 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_AHxos763CxLVJAAUFYkhkc | 王儒 | accepted |
| other | p_BDk6YNhR5VP5UAnHiZAmaN | 王九思 | accepted |

## 外部来源

- [中国历代人物传记资料库：王九敘（CBDB 268142）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=268142&o=json)
