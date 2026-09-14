---
schema: wang-person/v1
id: p_6GZ2bFHWMcuDHDjVZRoMor
status: active
merged_into: null
display_name: 王仕
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fsD6KfFQZPnGz32hWrXkv3
        subject_person_id: p_6GZ2bFHWMcuDHDjVZRoMor
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2w8LBjL2wkf2VrA4jHtjeP
          claim_id: c_fsD6KfFQZPnGz32hWrXkv3
          source_id: s_vtnoQBhX1x7ae2MNm738LH
          stance: supports
          locator: CBDB:284125
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（284125）
          source: &a1
            id: s_vtnoQBhX1x7ae2MNm738LH
            source_type: api_record
            title: 中国历代人物传记资料库：王仕（CBDB 284125）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284125&o=json
            external_identifier: CBDB:284125
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.179Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gu4ZLbHM82QnPWKmJEJwqm
        subject_person_id: p_6GZ2bFHWMcuDHDjVZRoMor
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仕，明人物。正德十六年進士，籍贯濱州。（中国历代人物传记资料库 CBDB 284125）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vl63ThZR_M8l4BCXXeZyxB
          claim_id: c_gu4ZLbHM82QnPWKmJEJwqm
          source_id: s_vtnoQBhX1x7ae2MNm738LH
          stance: supports
          locator: CBDB:284125
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mBAWoyMaPzODJGz4Cz0X_r
        subject_person_id: p_8RMMck1DAhfReSxN8nPCYS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6GZ2bFHWMcuDHDjVZRoMor
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UTVvS6PjZ1DjgYtiYeYbpq
          claim_id: c_mBAWoyMaPzODJGz4Cz0X_r
          source_id: s_WzQ8o49h4JykmUMEU3NcK8
          stance: supports
          locator: CBDB：兄弟 王化（202136）之父／母 王琰
          quotation: null
          interpretation_note: 由兄弟关系推断：王仕 与 王化 为同胞（CBDB 记「兄」），王化 之父／母即 王仕 之父／母。
          source:
            id: s_WzQ8o49h4JykmUMEU3NcK8
            source_type: api_record
            title: 中国历代人物传记资料库：王仕（CBDB 284125）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284125&o=json
            external_identifier: CBDB:284125
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8RMMck1DAhfReSxN8nPCYS
        status: active
        display_name: 王琰
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_MqPrjkRqz41zYQT0VkFROU
        subject_person_id: p_6GZ2bFHWMcuDHDjVZRoMor
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GBfHvW9j1wmH7AtQd6s7JQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aAb4kO3cOJMdCnE0lu7F93
          claim_id: c_MqPrjkRqz41zYQT0VkFROU
          source_id: s_WzQ8o49h4JykmUMEU3NcK8
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202136 王化）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_WzQ8o49h4JykmUMEU3NcK8
            source_type: api_record
            title: 中国历代人物传记资料库：王仕（CBDB 284125）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284125&o=json
            external_identifier: CBDB:284125
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GBfHvW9j1wmH7AtQd6s7JQ
        status: active
        display_name: 王化
        merged_into_person_id: null
---

# 王仕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仕 | accepted |
| bio.summary | 王仕，明人物。正德十六年進士，籍贯濱州。（中国历代人物传记资料库 CBDB 284125） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8RMMck1DAhfReSxN8nPCYS | 王琰 | accepted |
| other | p_GBfHvW9j1wmH7AtQd6s7JQ | 王化 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仕（CBDB 284125）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=284125&o=json)
