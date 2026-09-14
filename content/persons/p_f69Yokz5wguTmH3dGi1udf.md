---
schema: wang-person/v1
id: p_f69Yokz5wguTmH3dGi1udf
status: active
merged_into: null
display_name: 王宗可
cbdb_id: 327780
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U8aQovCaK8PCW8c6MBWuEt
        subject_person_id: p_f69Yokz5wguTmH3dGi1udf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗可，明人物。嘉靖四十一年進士，籍贯京山。（中国历代人物传记资料库 CBDB 327780）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_LGRlZj94CF9teX4MdfkYUF
          claim_id: c_U8aQovCaK8PCW8c6MBWuEt
          source_id: s_YdHSiU1MMHkJoZzZ4JxAuo
          stance: supports
          locator: CBDB:327780
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_YdHSiU1MMHkJoZzZ4JxAuo
            source_type: api_record
            title: 中国历代人物传记资料库：王宗可（CBDB 327780）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327780&o=json
            external_identifier: CBDB:327780
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_gET8hy1TggA1xm86DUFkpp
        subject_person_id: p_f69Yokz5wguTmH3dGi1udf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗可
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_LnYJzCv1YcxuNg5Kkrr4RJ
          claim_id: c_gET8hy1TggA1xm86DUFkpp
          source_id: s_YdHSiU1MMHkJoZzZ4JxAuo
          stance: supports
          locator: CBDB:327780
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DCjHoLSOdsmspKMrLaeCji
        subject_person_id: p_fHWLZSGPRrVehEZSh8KThr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_f69Yokz5wguTmH3dGi1udf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HOVkA1mZ3Z7ou_tfj7gEOb
          claim_id: c_DCjHoLSOdsmspKMrLaeCji
          source_id: s_37sCNkQaX0Jp7jz7ZohIU8
          stance: supports
          locator: CBDB：兄弟 王宗載（205060）之父／母 王宋
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗可 与 王宗載 为同胞（CBDB 记「弟」），王宗載 之父／母即 王宗可 之父／母。
          source:
            id: s_37sCNkQaX0Jp7jz7ZohIU8
            source_type: api_record
            title: 中国历代人物传记资料库：王宗可（CBDB 327780）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327780&o=json
            external_identifier: CBDB:327780
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fHWLZSGPRrVehEZSh8KThr
        status: active
        display_name: 王宋
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_1jCi2FL-qGyCK7fITukIaG
        subject_person_id: p_f69Yokz5wguTmH3dGi1udf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jmQBNF2thuLTj5CEgg4gFw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-k24QoeRyI1D3pxIUAElKD
          claim_id: c_1jCi2FL-qGyCK7fITukIaG
          source_id: s_37sCNkQaX0Jp7jz7ZohIU8
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205060 王宗載）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_37sCNkQaX0Jp7jz7ZohIU8
            source_type: api_record
            title: 中国历代人物传记资料库：王宗可（CBDB 327780）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327780&o=json
            external_identifier: CBDB:327780
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jmQBNF2thuLTj5CEgg4gFw
        status: active
        display_name: 王宗載
        merged_into_person_id: null
---

# 王宗可

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宗可，明人物。嘉靖四十一年進士，籍贯京山。（中国历代人物传记资料库 CBDB 327780） | accepted |
| name.primary | 王宗可 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fHWLZSGPRrVehEZSh8KThr | 王宋 | accepted |
| other | p_jmQBNF2thuLTj5CEgg4gFw | 王宗載 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗可（CBDB 327780）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327780&o=json)
