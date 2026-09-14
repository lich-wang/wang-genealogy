---
schema: wang-person/v1
id: p_Z6GDXea2kdcJroYajoX1dr
status: active
merged_into: null
display_name: 王薳
cbdb_id: 36928
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xoTUNmwfDiQGooDbk3oc5v
        subject_person_id: p_Z6GDXea2kdcJroYajoX1dr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王薳，宋人物。籍贯巢縣。（中国历代人物传记资料库 CBDB 36928）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_G1p2UyTnKbMSfRGyDR7FhR
          claim_id: c_xoTUNmwfDiQGooDbk3oc5v
          source_id: s_8UP9MRU5hnAfpdTdWEKLzv
          stance: supports
          locator: CBDB:36928
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_8UP9MRU5hnAfpdTdWEKLzv
            source_type: api_record
            title: 中国历代人物传记资料库：王薳（CBDB 36928）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36928&o=json
            external_identifier: CBDB:36928
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ezJkp9M54pF1UBY7KdCVeR
        subject_person_id: p_Z6GDXea2kdcJroYajoX1dr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王薳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2HGiFRpNLKyLdP9vE1G45Z
          claim_id: c_ezJkp9M54pF1UBY7KdCVeR
          source_id: s_8UP9MRU5hnAfpdTdWEKLzv
          stance: supports
          locator: CBDB:36928
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1101-1200）｜历史性依据：CBDB 朝代 = 宋
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_flL5W2qVFRQvYErX4z_WcS
        subject_person_id: p_qdfj8n9aJt992f6xYnsVk6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Z6GDXea2kdcJroYajoX1dr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NuXMX9EN9DsHCGWSerkvt6
          claim_id: c_flL5W2qVFRQvYErX4z_WcS
          source_id: s_x4eQ23EVa9yw2zJ8xcOm4b
          stance: supports
          locator: CBDB 亲属：父（KinPerson 1786）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_x4eQ23EVa9yw2zJ8xcOm4b
            source_type: api_record
            title: 中国历代人物传记资料库：王薳（CBDB 36928）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36928&o=json
            external_identifier: CBDB:36928
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qdfj8n9aJt992f6xYnsVk6
        status: active
        display_name: 王之道
        merged_into_person_id: null
    - claim:
        id: c_aGrEUTcBFf1mdB61aGY6x_
        subject_person_id: p_2x1kEfTy9Rrf9vMAC4nm4e
        claim_kind: relationship
        predicate: kinship.mother_of
        object_person_id: p_Z6GDXea2kdcJroYajoX1dr
        generation_count: null
        parent_role: mother
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8MFbUL-EhfhQhLCby8GjyX
          claim_id: c_aGrEUTcBFf1mdB61aGY6x_
          source_id: s_x4eQ23EVa9yw2zJ8xcOm4b
          stance: supports
          locator: CBDB 亲属：母（KinPerson 36923）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_x4eQ23EVa9yw2zJ8xcOm4b
            source_type: api_record
            title: 中国历代人物传记资料库：王薳（CBDB 36928）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36928&o=json
            external_identifier: CBDB:36928
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2x1kEfTy9Rrf9vMAC4nm4e
        status: active
        display_name: 孫氏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王薳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王薳，宋人物。籍贯巢縣。（中国历代人物传记资料库 CBDB 36928） | accepted |
| name.primary | 王薳 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qdfj8n9aJt992f6xYnsVk6 | 王之道 | accepted |
| parents | p_2x1kEfTy9Rrf9vMAC4nm4e | 孫氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：王薳（CBDB 36928）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36928&o=json)
