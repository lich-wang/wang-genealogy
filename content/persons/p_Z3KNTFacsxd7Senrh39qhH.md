---
schema: wang-person/v1
id: p_Z3KNTFacsxd7Senrh39qhH
status: active
merged_into: null
display_name: 王漢章
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6WJQtVDu5j9fvPp5qRf3ru
        subject_person_id: p_Z3KNTFacsxd7Senrh39qhH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漢章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Krb647q19P5GRSSbxXLZqz
          claim_id: c_6WJQtVDu5j9fvPp5qRf3ru
          source_id: s_QNdT237ZtNB31Re7q1r1bK
          stance: supports
          locator: CBDB:386698
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（386698）
          source: &a1
            id: s_QNdT237ZtNB31Re7q1r1bK
            source_type: api_record
            title: 中国历代人物传记资料库：王漢章（CBDB 386698）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386698&o=json
            external_identifier: CBDB:386698
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.903Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fd1DaJjTyw2nQCGPoDXW3w
        subject_person_id: p_Z3KNTFacsxd7Senrh39qhH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王漢章，明人物。籍贯金華。（中国历代人物传记资料库 CBDB 386698）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VjHA3GDwP_HdvKMzl055y1
          claim_id: c_fd1DaJjTyw2nQCGPoDXW3w
          source_id: s_QNdT237ZtNB31Re7q1r1bK
          stance: supports
          locator: CBDB:386698
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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
        id: c_lwSXKJeoVy5kVmvWAs2Nhn
        subject_person_id: p_4H3CFz5B9C5wCxTWKJ4ugX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Z3KNTFacsxd7Senrh39qhH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0T99NAPrmgnU62e9OjlJ-Q
          claim_id: c_lwSXKJeoVy5kVmvWAs2Nhn
          source_id: s_kKCa3DaaOJLau9Amff2nAJ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 386698 王漢章）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kKCa3DaaOJLau9Amff2nAJ
            source_type: api_record
            title: 中国历代人物传记资料库：王元功（CBDB 386697）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386697&o=json
            external_identifier: CBDB:386697
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4H3CFz5B9C5wCxTWKJ4ugX
        status: active
        display_name: 王元功
        merged_into_person_id: null
---

# 王漢章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王漢章 | accepted |
| bio.summary | 王漢章，明人物。籍贯金華。（中国历代人物传记资料库 CBDB 386698） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_4H3CFz5B9C5wCxTWKJ4ugX | 王元功 | accepted |

## 外部来源

- [中国历代人物传记资料库：王漢章（CBDB 386698）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386698&o=json)
- [中国历代人物传记资料库：王元功（CBDB 386697）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386697&o=json)
