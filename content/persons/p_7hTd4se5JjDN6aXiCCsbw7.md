---
schema: wang-person/v1
id: p_7hTd4se5JjDN6aXiCCsbw7
status: active
merged_into: null
display_name: 王孝友
cbdb_id: 267975
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qrJh3hQpYEHyQFHQiTYHjv
        subject_person_id: p_7hTd4se5JjDN6aXiCCsbw7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝友，明人物。弘治九年進士，籍贯南充。（中国历代人物传记资料库 CBDB 267975）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Y_YFBX9-CWTo4Uo4hIzXBM
          claim_id: c_qrJh3hQpYEHyQFHQiTYHjv
          source_id: s_WnAGkLktjVCZ2huNTAZWzC
          stance: supports
          locator: CBDB:267975
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_WnAGkLktjVCZ2huNTAZWzC
            source_type: api_record
            title: 中国历代人物传记资料库：王孝友（CBDB 267975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267975&o=json
            external_identifier: CBDB:267975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_hSKG2Jk6kzAPyJCvn4R8QT
        subject_person_id: p_7hTd4se5JjDN6aXiCCsbw7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孝友
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_YuxiFvGgyPR1BNDAdq9pgz
          claim_id: c_hSKG2Jk6kzAPyJCvn4R8QT
          source_id: s_WnAGkLktjVCZ2huNTAZWzC
          stance: supports
          locator: CBDB:267975
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ykjbLZtvpxZvXJExPfWrMA
        subject_person_id: p_3ctN3Ag7tAGFBEB9PuLpDo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7hTd4se5JjDN6aXiCCsbw7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6frG_4JoqQIc7XrymbGSPr
          claim_id: c_ykjbLZtvpxZvXJExPfWrMA
          source_id: s_RXBgpz0khogFkkw9x87mFP
          stance: supports
          locator: CBDB：兄弟 王孝忠（201152）之父／母 王參
          quotation: null
          interpretation_note: 由兄弟关系推断：王孝友 与 王孝忠 为同胞（CBDB 记「兄」），王孝忠 之父／母即 王孝友 之父／母。
          source:
            id: s_RXBgpz0khogFkkw9x87mFP
            source_type: api_record
            title: 中国历代人物传记资料库：王孝友（CBDB 267975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267975&o=json
            external_identifier: CBDB:267975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3ctN3Ag7tAGFBEB9PuLpDo
        status: active
        display_name: 王參
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_MGuRV_wGj-Ai7eGA7Zpg-3
        subject_person_id: p_7hTd4se5JjDN6aXiCCsbw7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_YmdsA8EmYfF27LWV9ms1VW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G_eyLK8RG4kYcrsU0UqbOr
          claim_id: c_MGuRV_wGj-Ai7eGA7Zpg-3
          source_id: s_RXBgpz0khogFkkw9x87mFP
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201152 王孝忠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_RXBgpz0khogFkkw9x87mFP
            source_type: api_record
            title: 中国历代人物传记资料库：王孝友（CBDB 267975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267975&o=json
            external_identifier: CBDB:267975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YmdsA8EmYfF27LWV9ms1VW
        status: active
        display_name: 王孝忠
        merged_into_person_id: null
---

# 王孝友

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王孝友，明人物。弘治九年進士，籍贯南充。（中国历代人物传记资料库 CBDB 267975） | accepted |
| name.primary | 王孝友 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3ctN3Ag7tAGFBEB9PuLpDo | 王參 | accepted |
| other | p_YmdsA8EmYfF27LWV9ms1VW | 王孝忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王孝友（CBDB 267975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267975&o=json)
