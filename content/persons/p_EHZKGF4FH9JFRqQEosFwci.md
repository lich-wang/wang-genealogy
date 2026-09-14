---
schema: wang-person/v1
id: p_EHZKGF4FH9JFRqQEosFwci
status: active
merged_into: null
display_name: 王鋘
cbdb_id: 247846
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Pk8FuXN9ZJ7t7EpDCmkq1r
        subject_person_id: p_EHZKGF4FH9JFRqQEosFwci
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鋘，明人物。成化十一年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 247846）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_GNeEy6OaD131EruOJuxGrx
          claim_id: c_Pk8FuXN9ZJ7t7EpDCmkq1r
          source_id: s_yL4GPbT2oPGxZRTa48miDc
          stance: supports
          locator: CBDB:247846
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_yL4GPbT2oPGxZRTa48miDc
            source_type: api_record
            title: 中国历代人物传记资料库：王鋘（CBDB 247846）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247846&o=json
            external_identifier: CBDB:247846
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_H6oMQuqVo3zY8zn41yys6D
        subject_person_id: p_EHZKGF4FH9JFRqQEosFwci
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鋘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_bSWnp45vZHXbNXPpKu8GSy
          claim_id: c_H6oMQuqVo3zY8zn41yys6D
          source_id: s_yL4GPbT2oPGxZRTa48miDc
          stance: supports
          locator: CBDB:247846
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_m1Mat7DGZEq1ZMRenl5T3m
        subject_person_id: p_gyKQYKFYiRFh2ZMNQQhCtN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EHZKGF4FH9JFRqQEosFwci
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KKNkZGmLKLc8Er2ezp61KZ
          claim_id: c_m1Mat7DGZEq1ZMRenl5T3m
          source_id: s_ftAg57M41EEHTcrbV8eqAE
          stance: supports
          locator: CBDB：兄弟 王鍃（199647）之父／母 王鼎
          quotation: null
          interpretation_note: 由兄弟关系推断：王鋘 与 王鍃 为同胞（CBDB 记「兄」），王鍃 之父／母即 王鋘 之父／母。
          source:
            id: s_ftAg57M41EEHTcrbV8eqAE
            source_type: api_record
            title: 中国历代人物传记资料库：王鋘（CBDB 247846）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247846&o=json
            external_identifier: CBDB:247846
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gyKQYKFYiRFh2ZMNQQhCtN
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
        id: c_NyRlN5saWMwWm687GkD9u0
        subject_person_id: p_EHZKGF4FH9JFRqQEosFwci
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZjuF9BMneyLuUjQuike359
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BQM7l-zkYWd9kbVoecKDTH
          claim_id: c_NyRlN5saWMwWm687GkD9u0
          source_id: s_ftAg57M41EEHTcrbV8eqAE
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199647 王鍃）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ftAg57M41EEHTcrbV8eqAE
            source_type: api_record
            title: 中国历代人物传记资料库：王鋘（CBDB 247846）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247846&o=json
            external_identifier: CBDB:247846
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZjuF9BMneyLuUjQuike359
        status: active
        display_name: 王鍃
        merged_into_person_id: null
---

# 王鋘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鋘，明人物。成化十一年進士，籍贯慈溪。（中国历代人物传记资料库 CBDB 247846） | accepted |
| name.primary | 王鋘 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gyKQYKFYiRFh2ZMNQQhCtN | 王鼎 | accepted |
| other | p_ZjuF9BMneyLuUjQuike359 | 王鍃 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鋘（CBDB 247846）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247846&o=json)
