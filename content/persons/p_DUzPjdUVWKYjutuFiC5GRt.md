---
schema: wang-person/v1
id: p_DUzPjdUVWKYjutuFiC5GRt
status: active
merged_into: null
display_name: 王時太
cbdb_id: 236521
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h4TFiBfDZWkrDGey1ZHzKz
        subject_person_id: p_DUzPjdUVWKYjutuFiC5GRt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時太，明人物。籍贯魏縣。（中国历代人物传记资料库 CBDB 236521）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_957ALmrjACOGCZeqoIj97J
          claim_id: c_h4TFiBfDZWkrDGey1ZHzKz
          source_id: s_EQGnvLKmv2DGoP2ZsHS7Wc
          stance: supports
          locator: CBDB:236521
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_EQGnvLKmv2DGoP2ZsHS7Wc
            source_type: api_record
            title: 中国历代人物传记资料库：王時太（CBDB 236521）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236521&o=json
            external_identifier: CBDB:236521
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8vi75PsmgnhaVpXRVv4ZmD
        subject_person_id: p_DUzPjdUVWKYjutuFiC5GRt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時太
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3cHRRbF4CyXtuT6wFikTTt
          claim_id: c_8vi75PsmgnhaVpXRVv4ZmD
          source_id: s_EQGnvLKmv2DGoP2ZsHS7Wc
          stance: supports
          locator: CBDB:236521
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-bzsktuQa3LWQHC8gzLPnu
        subject_person_id: p_9wDw1cnSCGgEg7vtH1AinD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DUzPjdUVWKYjutuFiC5GRt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uTdDCghYYB3KEQBVXOgGH0
          claim_id: c_-bzsktuQa3LWQHC8gzLPnu
          source_id: s_9CKuiuAZKO2rhH7Lc7RrW4
          stance: supports
          locator: CBDB：兄弟 王時和（207820）之父／母 王思忠
          quotation: null
          interpretation_note: 由兄弟关系推断：王時太 与 王時和 为同胞（CBDB 记「弟」），王時和 之父／母即 王時太 之父／母。
          source:
            id: s_9CKuiuAZKO2rhH7Lc7RrW4
            source_type: api_record
            title: 中国历代人物传记资料库：王時太（CBDB 236521）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236521&o=json
            external_identifier: CBDB:236521
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9wDw1cnSCGgEg7vtH1AinD
        status: active
        display_name: 王思忠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_cGWhM9eGk1CEYTTkWpld48
        subject_person_id: p_DUzPjdUVWKYjutuFiC5GRt
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fNnEAvuY1BBmarjaAEXknF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o3LAw1BE3aTszHJGx27jcI
          claim_id: c_cGWhM9eGk1CEYTTkWpld48
          source_id: s_9CKuiuAZKO2rhH7Lc7RrW4
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207820 王時和）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_9CKuiuAZKO2rhH7Lc7RrW4
            source_type: api_record
            title: 中国历代人物传记资料库：王時太（CBDB 236521）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236521&o=json
            external_identifier: CBDB:236521
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fNnEAvuY1BBmarjaAEXknF
        status: active
        display_name: 王時和
        merged_into_person_id: null
---

# 王時太

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王時太，明人物。籍贯魏縣。（中国历代人物传记资料库 CBDB 236521） | accepted |
| name.primary | 王時太 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9wDw1cnSCGgEg7vtH1AinD | 王思忠 | accepted |
| other | p_fNnEAvuY1BBmarjaAEXknF | 王時和 | accepted |

## 外部来源

- [中国历代人物传记资料库：王時太（CBDB 236521）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236521&o=json)
