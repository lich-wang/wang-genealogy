---
schema: wang-person/v1
id: p_qcCVcen8Bt57KMExSuuKZ5
status: active
merged_into: null
display_name: 王似祖
cbdb_id: 236263
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_oEdmbBGyih3ADHjVrud8NU
        subject_person_id: p_qcCVcen8Bt57KMExSuuKZ5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王似祖，明人物。籍贯同州。（中国历代人物传记资料库 CBDB 236263）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_TkA4FezQjQFhLPZQ7QPvba
          claim_id: c_oEdmbBGyih3ADHjVrud8NU
          source_id: s_HDHiRzGjCXgSGJiUF7VTCn
          stance: supports
          locator: CBDB:236263
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_HDHiRzGjCXgSGJiUF7VTCn
            source_type: api_record
            title: 中国历代人物传记资料库：王似祖（CBDB 236263）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236263&o=json
            external_identifier: CBDB:236263
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_xJ9AkjykrAQND8TqEAGam3
        subject_person_id: p_qcCVcen8Bt57KMExSuuKZ5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王似祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_kHLSjQYAWkHcj9cmvt6MZE
          claim_id: c_xJ9AkjykrAQND8TqEAGam3
          source_id: s_HDHiRzGjCXgSGJiUF7VTCn
          stance: supports
          locator: CBDB:236263
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_c8toZcG5rE6C6wkCfmuR4g
        subject_person_id: p_8EDFnNdhzDymseXpHLiztk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qcCVcen8Bt57KMExSuuKZ5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EG0Vo-JcrXv0ofU47QT3yb
          claim_id: c_c8toZcG5rE6C6wkCfmuR4g
          source_id: s_EFfQhclKMAu4-Nxg5PRCUl
          stance: supports
          locator: CBDB：兄弟 王弘祖（207804）之父／母 王應誥
          quotation: null
          interpretation_note: 由兄弟关系推断：王似祖 与 王弘祖 为同胞（CBDB 记「兄」），王弘祖 之父／母即 王似祖 之父／母。
          source:
            id: s_EFfQhclKMAu4-Nxg5PRCUl
            source_type: api_record
            title: 中国历代人物传记资料库：王似祖（CBDB 236263）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236263&o=json
            external_identifier: CBDB:236263
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8EDFnNdhzDymseXpHLiztk
        status: active
        display_name: 王應誥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_DwC9tKwnrBw0ohH7J2W_Xb
        subject_person_id: p_Q4mq6fygocp26TN7xUYfs3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qcCVcen8Bt57KMExSuuKZ5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QcqhPsKDWpZp4GQt3MSTR4
          claim_id: c_DwC9tKwnrBw0ohH7J2W_Xb
          source_id: s_EFfQhclKMAu4-Nxg5PRCUl
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207804 王弘祖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_EFfQhclKMAu4-Nxg5PRCUl
            source_type: api_record
            title: 中国历代人物传记资料库：王似祖（CBDB 236263）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236263&o=json
            external_identifier: CBDB:236263
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Q4mq6fygocp26TN7xUYfs3
        status: active
        display_name: 王弘祖
        merged_into_person_id: null
---

# 王似祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王似祖，明人物。籍贯同州。（中国历代人物传记资料库 CBDB 236263） | accepted |
| name.primary | 王似祖 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8EDFnNdhzDymseXpHLiztk | 王應誥 | accepted |
| other | p_Q4mq6fygocp26TN7xUYfs3 | 王弘祖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王似祖（CBDB 236263）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236263&o=json)
