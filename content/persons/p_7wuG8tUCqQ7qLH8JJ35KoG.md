---
schema: wang-person/v1
id: p_7wuG8tUCqQ7qLH8JJ35KoG
status: active
merged_into: null
display_name: 王九淵
cbdb_id: 221746
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jjCNzNuyD3YTiEdJxpXu9G
        subject_person_id: p_7wuG8tUCqQ7qLH8JJ35KoG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九淵，明人物。萬曆八年進士，籍贯祥符。（中国历代人物传记资料库 CBDB 221746）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_PlybEia2lTMfQ-YPFfZxdU
          claim_id: c_jjCNzNuyD3YTiEdJxpXu9G
          source_id: s_1dp5XuYEWgCGa6e1eSRihP
          stance: supports
          locator: CBDB:221746
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_1dp5XuYEWgCGa6e1eSRihP
            source_type: api_record
            title: 中国历代人物传记资料库：王九淵（CBDB 221746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221746&o=json
            external_identifier: CBDB:221746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7BjCNeyNtbR7cgfbYkRVu8
        subject_person_id: p_7wuG8tUCqQ7qLH8JJ35KoG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九淵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_AuzuBotF4icBeKNy7CcBNe
          claim_id: c_7BjCNeyNtbR7cgfbYkRVu8
          source_id: s_1dp5XuYEWgCGa6e1eSRihP
          stance: supports
          locator: CBDB:221746
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yR7UgIymh5IeahON9qvt1e
        subject_person_id: p_Xuy9jPb62VMvUCJM1MazAP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7wuG8tUCqQ7qLH8JJ35KoG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yDL9s8aqrq8FPzNvxglSWI
          claim_id: c_yR7UgIymh5IeahON9qvt1e
          source_id: s_I1GDJ_LUniYF72kbJO2hze
          stance: supports
          locator: CBDB：兄弟 王九德（206699）之父／母 王廷相
          quotation: null
          interpretation_note: 由兄弟关系推断：王九淵 与 王九德 为同胞（CBDB 记「兄」），王九德 之父／母即 王九淵 之父／母。
          source:
            id: s_I1GDJ_LUniYF72kbJO2hze
            source_type: api_record
            title: 中国历代人物传记资料库：王九淵（CBDB 221746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221746&o=json
            external_identifier: CBDB:221746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Xuy9jPb62VMvUCJM1MazAP
        status: active
        display_name: 王廷相
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_y2NO9k3GdUf9yX2tEBtpvn
        subject_person_id: p_7F2eLtMppfYhb1rX2t5C3R
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_7wuG8tUCqQ7qLH8JJ35KoG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l81tNoHUcWAezsIBynHGyT
          claim_id: c_y2NO9k3GdUf9yX2tEBtpvn
          source_id: s_I1GDJ_LUniYF72kbJO2hze
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206699 王九德）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_I1GDJ_LUniYF72kbJO2hze
            source_type: api_record
            title: 中国历代人物传记资料库：王九淵（CBDB 221746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221746&o=json
            external_identifier: CBDB:221746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7F2eLtMppfYhb1rX2t5C3R
        status: active
        display_name: 王九德
        merged_into_person_id: null
---

# 王九淵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王九淵，明人物。萬曆八年進士，籍贯祥符。（中国历代人物传记资料库 CBDB 221746） | accepted |
| name.primary | 王九淵 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Xuy9jPb62VMvUCJM1MazAP | 王廷相 | accepted |
| other | p_7F2eLtMppfYhb1rX2t5C3R | 王九德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王九淵（CBDB 221746）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221746&o=json)
