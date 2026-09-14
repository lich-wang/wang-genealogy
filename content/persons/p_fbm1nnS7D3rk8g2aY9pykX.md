---
schema: wang-person/v1
id: p_fbm1nnS7D3rk8g2aY9pykX
status: active
merged_into: null
display_name: 王文宣
cbdb_id: 314483
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FxKbqvL6bN6KAmVM6YWPqY
        subject_person_id: p_fbm1nnS7D3rk8g2aY9pykX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文宣，明人物。嘉靖二十九年進士，籍贯蒙城。（中国历代人物传记资料库 CBDB 314483）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_tKz1KC7Y8CVYlzJUkVOmBO
          claim_id: c_FxKbqvL6bN6KAmVM6YWPqY
          source_id: s_mdYzJAqBDbQjTnj5an7BXE
          stance: supports
          locator: CBDB:314483
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_mdYzJAqBDbQjTnj5an7BXE
            source_type: api_record
            title: 中国历代人物传记资料库：王文宣（CBDB 314483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314483&o=json
            external_identifier: CBDB:314483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QRfPMKwoh8cCm8CcsTh9iD
        subject_person_id: p_fbm1nnS7D3rk8g2aY9pykX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文宣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_1NxrrcMmwSebxAzDUtBfJt
          claim_id: c_QRfPMKwoh8cCm8CcsTh9iD
          source_id: s_mdYzJAqBDbQjTnj5an7BXE
          stance: supports
          locator: CBDB:314483
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__vgc8RrmolOyD7uxaep6eM
        subject_person_id: p_vDgtFRNYxuxGwwcAPH4NeN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fbm1nnS7D3rk8g2aY9pykX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CAb9Zk8t_XUSg2TxBFnkuI
          claim_id: c__vgc8RrmolOyD7uxaep6eM
          source_id: s_QoGtNYlKGLBftfR3qwE5Nv
          stance: supports
          locator: CBDB：兄弟 王文翰（204105）之父／母 王繼
          quotation: null
          interpretation_note: 由兄弟关系推断：王文宣 与 王文翰 为同胞（CBDB 记「弟」），王文翰 之父／母即 王文宣 之父／母。
          source:
            id: s_QoGtNYlKGLBftfR3qwE5Nv
            source_type: api_record
            title: 中国历代人物传记资料库：王文宣（CBDB 314483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314483&o=json
            external_identifier: CBDB:314483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vDgtFRNYxuxGwwcAPH4NeN
        status: active
        display_name: 王繼
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_WnVA2sLLNso7a97nR1QvRO
        subject_person_id: p_fbm1nnS7D3rk8g2aY9pykX
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ukJ2qr82oEuCTM4WYW3F7J
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QVWo0xCWYvbhB6JaEYMisV
          claim_id: c_WnVA2sLLNso7a97nR1QvRO
          source_id: s_QoGtNYlKGLBftfR3qwE5Nv
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204105 王文翰）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QoGtNYlKGLBftfR3qwE5Nv
            source_type: api_record
            title: 中国历代人物传记资料库：王文宣（CBDB 314483）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314483&o=json
            external_identifier: CBDB:314483
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ukJ2qr82oEuCTM4WYW3F7J
        status: active
        display_name: 王文翰
        merged_into_person_id: null
---

# 王文宣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王文宣，明人物。嘉靖二十九年進士，籍贯蒙城。（中国历代人物传记资料库 CBDB 314483） | accepted |
| name.primary | 王文宣 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vDgtFRNYxuxGwwcAPH4NeN | 王繼 | accepted |
| other | p_ukJ2qr82oEuCTM4WYW3F7J | 王文翰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文宣（CBDB 314483）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314483&o=json)
