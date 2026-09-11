---
schema: wang-person/v1
id: p_qmz4NNXH4HsWQ8MERWfsxY
status: active
merged_into: null
display_name: 王易簡
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Y3X7zn2n1gj6UJ2h6mxYHV
        subject_person_id: p_qmz4NNXH4HsWQ8MERWfsxY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王易簡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9AEJWmxHJC3fpyXuxg1vu3
          claim_id: c_Y3X7zn2n1gj6UJ2h6mxYHV
          source_id: s_Yi1BxN9CrEGyqFfoxhiTMJ
          stance: supports
          locator: CBDB:37656
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37656）
          source: &a1
            id: s_Yi1BxN9CrEGyqFfoxhiTMJ
            source_type: api_record
            title: 中国历代人物传记资料库：王易簡（CBDB 37656）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37656&o=json
            external_identifier: CBDB:37656
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.223Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dBJuPL4zEhaFYWomVBPgdh
        subject_person_id: p_qmz4NNXH4HsWQ8MERWfsxY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q7awQjdMmnXvnYcz9DEiyi
          claim_id: c_dBJuPL4zEhaFYWomVBPgdh
          source_id: s_Yi1BxN9CrEGyqFfoxhiTMJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_JLpDN6kBSfSjiU9zJI0oVJ
        subject_person_id: p_BufH5DJwN8VnFNrdw7VT4J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qmz4NNXH4HsWQ8MERWfsxY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZdR-h2yfhkqLC1tW-Ze4vH
          claim_id: c_JLpDN6kBSfSjiU9zJI0oVJ
          source_id: s_mRhfRp93R38HUvjQ6NnFVu
          stance: supports
          locator: 宋史：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mRhfRp93R38HUvjQ6NnFVu
            source_type: api_record
            title: 中国历代人物传记资料库：王貫（CBDB 24947）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24947&o=json
            external_identifier: CBDB:24947
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.901Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BufH5DJwN8VnFNrdw7VT4J
        status: active
        display_name: 王貫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_VjnpseZX5FTff7iRHmldpH
        subject_person_id: p_xHqsdH7Q5dtTb5k8sD7nyo
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qmz4NNXH4HsWQ8MERWfsxY
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H2n1TQeBF58_HcUhpiY6iV
          claim_id: c_VjnpseZX5FTff7iRHmldpH
          source_id: s_8XruKVoRfCPhtcxH52LLDp
          stance: supports
          locator: 宋史：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8XruKVoRfCPhtcxH52LLDp
            source_type: api_record
            title: 中国历代人物传记资料库：王遠（CBDB 120189）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120189&o=json
            external_identifier: CBDB:120189
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.897Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xHqsdH7Q5dtTb5k8sD7nyo
        status: active
        display_name: 王遠
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王易簡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王易簡 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BufH5DJwN8VnFNrdw7VT4J | 王貫 | accepted |
| ancestors | p_xHqsdH7Q5dtTb5k8sD7nyo | 王遠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王貫（CBDB 24947）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=24947&o=json)
- [中国历代人物传记资料库：王易簡（CBDB 37656）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37656&o=json)
- [中国历代人物传记资料库：王遠（CBDB 120189）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=120189&o=json)
