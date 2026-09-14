---
schema: wang-person/v1
id: p_42gsojvkfoeFS6qHcH6ULC
status: active
merged_into: null
display_name: 王普
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_V6CcVEMywMHEiMnC4mBMrH
        subject_person_id: p_42gsojvkfoeFS6qHcH6ULC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王普
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PbEhmhrkY3VN5bSFZA3NfS
          claim_id: c_V6CcVEMywMHEiMnC4mBMrH
          source_id: s_YWgyc7FqoxN1yBwXMuPe2J
          stance: supports
          locator: CBDB:266967
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（266967）
          source: &a1
            id: s_YWgyc7FqoxN1yBwXMuPe2J
            source_type: api_record
            title: 中国历代人物传记资料库：王普（CBDB 266967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266967&o=json
            external_identifier: CBDB:266967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.752Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5TKqF85BkT3uSwmXvJrcBs
        subject_person_id: p_42gsojvkfoeFS6qHcH6ULC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王普，明人物。弘治九年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 266967）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XWz0v7mYSxGQx6ovF0P6CE
          claim_id: c_5TKqF85BkT3uSwmXvJrcBs
          source_id: s_YWgyc7FqoxN1yBwXMuPe2J
          stance: supports
          locator: CBDB:266967
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_SGD1IgC5ZWnPMBwBZbIuLM
        subject_person_id: p_Ax72Y4zqcv4L6DYQUb7Eu1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_42gsojvkfoeFS6qHcH6ULC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F3UR4fjaDffjLMfN9y-sSe
          claim_id: c_SGD1IgC5ZWnPMBwBZbIuLM
          source_id: s_8l1dj5lNRnTR4sQGUi44Ja
          stance: supports
          locator: CBDB：兄弟 王朝卿（201090）之父／母 王久壽
          quotation: null
          interpretation_note: 由兄弟关系推断：王普 与 王朝卿 为同胞（CBDB 记「兄」），王朝卿 之父／母即 王普 之父／母。
          source:
            id: s_8l1dj5lNRnTR4sQGUi44Ja
            source_type: api_record
            title: 中国历代人物传记资料库：王普（CBDB 266967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266967&o=json
            external_identifier: CBDB:266967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Ax72Y4zqcv4L6DYQUb7Eu1
        status: active
        display_name: 王久壽
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_tD1o6tTnMwD56QJShPVs1S
        subject_person_id: p_42gsojvkfoeFS6qHcH6ULC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fG2ZSSsFcXdaZWCtjXUkRA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mEDLr5akYc-VA7LqYkqXV4
          claim_id: c_tD1o6tTnMwD56QJShPVs1S
          source_id: s_8l1dj5lNRnTR4sQGUi44Ja
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201090 王朝卿）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8l1dj5lNRnTR4sQGUi44Ja
            source_type: api_record
            title: 中国历代人物传记资料库：王普（CBDB 266967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266967&o=json
            external_identifier: CBDB:266967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fG2ZSSsFcXdaZWCtjXUkRA
        status: active
        display_name: 王朝卿
        merged_into_person_id: null
---

# 王普

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王普 | accepted |
| bio.summary | 王普，明人物。弘治九年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 266967） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Ax72Y4zqcv4L6DYQUb7Eu1 | 王久壽 | accepted |
| other | p_fG2ZSSsFcXdaZWCtjXUkRA | 王朝卿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王普（CBDB 266967）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266967&o=json)
