---
schema: wang-person/v1
id: p_eFhKzbESVxhCuJGXAkMcL9
status: active
merged_into: null
display_name: 王政
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BszCgwjubyxxwrwjL9GMvJ
        subject_person_id: p_eFhKzbESVxhCuJGXAkMcL9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vN9hXdakQPJDViry45VdFw
          claim_id: c_BszCgwjubyxxwrwjL9GMvJ
          source_id: s_w33Wv7iea3nA6rLQ5eDTAH
          stance: supports
          locator: CBDB:231062
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（231062）
          source: &a1
            id: s_w33Wv7iea3nA6rLQ5eDTAH
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 231062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231062&o=json
            external_identifier: CBDB:231062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.635Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xaCfwMHXhLMiukx1ykUiS8
        subject_person_id: p_eFhKzbESVxhCuJGXAkMcL9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王政，明人物。宣德八年進士，籍贯鄱陽。（中国历代人物传记资料库 CBDB 231062）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jchxm9mzHfaYzkNZbg_Sf0
          claim_id: c_xaCfwMHXhLMiukx1ykUiS8
          source_id: s_w33Wv7iea3nA6rLQ5eDTAH
          stance: supports
          locator: CBDB:231062
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Qa-69sCN9P0WMVTvp6gp2y
        subject_person_id: p_HM6CQSrCCHQHgQcCZu6Jrx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eFhKzbESVxhCuJGXAkMcL9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Bhs9Mhf-X2TrLqowk2_inS
          claim_id: c_Qa-69sCN9P0WMVTvp6gp2y
          source_id: s_GhlDsuDez8uevb65FZvl-n
          stance: supports
          locator: CBDB：兄弟 王弼（207304）之父／母 王道昇
          quotation: null
          interpretation_note: 由兄弟关系推断：王政 与 王弼 为同胞（CBDB 记「兄」），王弼 之父／母即 王政 之父／母。
          source:
            id: s_GhlDsuDez8uevb65FZvl-n
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 231062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231062&o=json
            external_identifier: CBDB:231062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HM6CQSrCCHQHgQcCZu6Jrx
        status: active
        display_name: 王道昇
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_BY4hUwK74paDD1i7aIOm7J
        subject_person_id: p_7j83XKHhJr8JnHARH8PeYg
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eFhKzbESVxhCuJGXAkMcL9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N9h8t1TL8ra1h9sOBqUyUg
          claim_id: c_BY4hUwK74paDD1i7aIOm7J
          source_id: s_GhlDsuDez8uevb65FZvl-n
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207304 王弼）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GhlDsuDez8uevb65FZvl-n
            source_type: api_record
            title: 中国历代人物传记资料库：王政（CBDB 231062）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231062&o=json
            external_identifier: CBDB:231062
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7j83XKHhJr8JnHARH8PeYg
        status: active
        display_name: 王弼
        merged_into_person_id: null
---

# 王政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王政 | accepted |
| bio.summary | 王政，明人物。宣德八年進士，籍贯鄱陽。（中国历代人物传记资料库 CBDB 231062） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HM6CQSrCCHQHgQcCZu6Jrx | 王道昇 | accepted |
| other | p_7j83XKHhJr8JnHARH8PeYg | 王弼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王政（CBDB 231062）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231062&o=json)
