---
schema: wang-person/v1
id: p_1z17ZrN1LTS8BwrQvRvRJf
status: active
merged_into: null
display_name: 王應魁
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9KWf52a5Qqq7kcwCGt9Vzq
        subject_person_id: p_1z17ZrN1LTS8BwrQvRvRJf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應魁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DH9VBFMibd6XY3EhZt8pgi
          claim_id: c_9KWf52a5Qqq7kcwCGt9Vzq
          source_id: s_B34dFmx1gyydHdxj8TKmYj
          stance: supports
          locator: CBDB:562416
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（562416）
          source: &a1
            id: s_B34dFmx1gyydHdxj8TKmYj
            source_type: api_record
            title: 中国历代人物传记资料库：王應魁（CBDB 562416）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562416&o=json
            external_identifier: CBDB:562416
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.781Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hgMN3BjDosbeukPpHv54ur
        subject_person_id: p_1z17ZrN1LTS8BwrQvRvRJf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應魁，清人物。籍贯山陰。（中国历代人物传记资料库 CBDB 562416）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LC-RhJlSkGlyw6yEGcF-KX
          claim_id: c_hgMN3BjDosbeukPpHv54ur
          source_id: s_B34dFmx1gyydHdxj8TKmYj
          stance: supports
          locator: CBDB:562416
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
        id: c_P4nBMvWpO2Fu5J_4LwUzgv
        subject_person_id: p_1z17ZrN1LTS8BwrQvRvRJf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_XyiYPXvNsmqqmL7ZWPjHbs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EtIbxj7uD2v6nmvTO72EoM
          claim_id: c_P4nBMvWpO2Fu5J_4LwUzgv
          source_id: s_T90ACp8ZD0CbwD-j96qL7z
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 562417 王應辰）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_T90ACp8ZD0CbwD-j96qL7z
            source_type: api_record
            title: 中国历代人物传记资料库：王應魁（CBDB 562416）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562416&o=json
            external_identifier: CBDB:562416
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XyiYPXvNsmqqmL7ZWPjHbs
        status: active
        display_name: 王應辰
        merged_into_person_id: null
    - claim:
        id: c_7Yp92oIJaDOjZp_io-Covi
        subject_person_id: p_1z17ZrN1LTS8BwrQvRvRJf
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DHQtiZ1X3EwnyYefEkiP7i
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UJpgtCN7Q5p3KNqjl_S9_Y
          claim_id: c_7Yp92oIJaDOjZp_io-Covi
          source_id: s_T90ACp8ZD0CbwD-j96qL7z
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 562418 王應斗）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_T90ACp8ZD0CbwD-j96qL7z
            source_type: api_record
            title: 中国历代人物传记资料库：王應魁（CBDB 562416）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562416&o=json
            external_identifier: CBDB:562416
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DHQtiZ1X3EwnyYefEkiP7i
        status: active
        display_name: 王應斗
        merged_into_person_id: null
---

# 王應魁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應魁 | accepted |
| bio.summary | 王應魁，清人物。籍贯山陰。（中国历代人物传记资料库 CBDB 562416） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_XyiYPXvNsmqqmL7ZWPjHbs | 王應辰 | accepted |
| other | p_DHQtiZ1X3EwnyYefEkiP7i | 王應斗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應魁（CBDB 562416）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562416&o=json)
