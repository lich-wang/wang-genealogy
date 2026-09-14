---
schema: wang-person/v1
id: p_bp914SWLLCUnJ5t8RFw5U3
status: active
merged_into: null
display_name: 王之選
cbdb_id: 335745
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Cv4cwnw8BR89TCYTXqvzAw
        subject_person_id: p_bp914SWLLCUnJ5t8RFw5U3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之選，明人物。隆慶二年進士，籍贯休寧。（中国历代人物传记资料库 CBDB 335745）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_IwcSJ6EaUXbjzRsvmyNJp3
          claim_id: c_Cv4cwnw8BR89TCYTXqvzAw
          source_id: s_Zny1CxEe7guFgg875Ja7iK
          stance: supports
          locator: CBDB:335745
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Zny1CxEe7guFgg875Ja7iK
            source_type: api_record
            title: 中国历代人物传记资料库：王之選（CBDB 335745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335745&o=json
            external_identifier: CBDB:335745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ozEUPvNcgYbF4XBYtVcs4s
        subject_person_id: p_bp914SWLLCUnJ5t8RFw5U3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之選
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_sSrdPA3MmD9gNfgEkdsLJg
          claim_id: c_ozEUPvNcgYbF4XBYtVcs4s
          source_id: s_Zny1CxEe7guFgg875Ja7iK
          stance: supports
          locator: CBDB:335745
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4001-4100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rXMHfNqn0gvgPa9187dHdw
        subject_person_id: p_ymucX7NT8ppRqzhncqq8Wc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bp914SWLLCUnJ5t8RFw5U3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_89nhbef-PDTYSsuJd0zxWL
          claim_id: c_rXMHfNqn0gvgPa9187dHdw
          source_id: s_x0i7R2l8kM6UJ9OxOXXBh4
          stance: supports
          locator: CBDB：兄弟 王之臣（205596）之父／母 王鼎
          quotation: null
          interpretation_note: 由兄弟关系推断：王之選 与 王之臣 为同胞（CBDB 记「弟」），王之臣 之父／母即 王之選 之父／母。
          source:
            id: s_x0i7R2l8kM6UJ9OxOXXBh4
            source_type: api_record
            title: 中国历代人物传记资料库：王之選（CBDB 335745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335745&o=json
            external_identifier: CBDB:335745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ymucX7NT8ppRqzhncqq8Wc
        status: active
        display_name: 王鼎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_QbF6xpynVaqKCj0c_x_qki
        subject_person_id: p_6fvA7tcbJ3QZeAtYpG1JUJ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bp914SWLLCUnJ5t8RFw5U3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VQobKkcu7MnLUZ8ciWB0-V
          claim_id: c_QbF6xpynVaqKCj0c_x_qki
          source_id: s_x0i7R2l8kM6UJ9OxOXXBh4
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205596 王之臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_x0i7R2l8kM6UJ9OxOXXBh4
            source_type: api_record
            title: 中国历代人物传记资料库：王之選（CBDB 335745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335745&o=json
            external_identifier: CBDB:335745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6fvA7tcbJ3QZeAtYpG1JUJ
        status: active
        display_name: 王之臣
        merged_into_person_id: null
---

# 王之選

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王之選，明人物。隆慶二年進士，籍贯休寧。（中国历代人物传记资料库 CBDB 335745） | accepted |
| name.primary | 王之選 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ymucX7NT8ppRqzhncqq8Wc | 王鼎 | accepted |
| other | p_6fvA7tcbJ3QZeAtYpG1JUJ | 王之臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王之選（CBDB 335745）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335745&o=json)
