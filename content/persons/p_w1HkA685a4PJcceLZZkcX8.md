---
schema: wang-person/v1
id: p_w1HkA685a4PJcceLZZkcX8
status: active
merged_into: null
display_name: 王祥
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6QPnBhC17u9d4e1R5sxzmK
        subject_person_id: p_w1HkA685a4PJcceLZZkcX8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DsXa524b4LFnB5Xz2BdzvB
          claim_id: c_6QPnBhC17u9d4e1R5sxzmK
          source_id: s_BSaNoDi5DR1tyLsyFWdFa1
          stance: supports
          locator: CBDB:12165
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（12165）
          source: &a1
            id: s_BSaNoDi5DR1tyLsyFWdFa1
            source_type: api_record
            title: 中国历代人物传记资料库：王祥（CBDB 12165）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12165&o=json
            external_identifier: CBDB:12165
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.590Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gpJpfDyV9KcDrKCNLu1gGm
        subject_person_id: p_w1HkA685a4PJcceLZZkcX8
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
        - id: cs_zi5ZfJ59G6MYmP7GZDEPih
          claim_id: c_gpJpfDyV9KcDrKCNLu1gGm
          source_id: s_BSaNoDi5DR1tyLsyFWdFa1
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
        id: c_aQXAc1Kc27NZABDfMnS-4C
        subject_person_id: p_KcKFqp4wzz7NL4rU9Bp3pT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_w1HkA685a4PJcceLZZkcX8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0dTYAj7S4zSuL1TFWBoPyi
          claim_id: c_aQXAc1Kc27NZABDfMnS-4C
          source_id: s_JU56to47fv6QGA7m2HJ2h8
          stance: supports
          locator: CBDB 双向互证（子 王祥 ⇄ 父 王著）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_JU56to47fv6QGA7m2HJ2h8
            source_type: api_record
            title: 中国历代人物传记资料库：王著（CBDB 12160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12160&o=json
            external_identifier: CBDB:12160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.589Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_KcKFqp4wzz7NL4rU9Bp3pT
        status: active
        display_name: 王著
        merged_into_person_id: null
  children:
    - claim:
        id: c_qR_WVCyON6rjusfpxiG8NB
        subject_person_id: p_w1HkA685a4PJcceLZZkcX8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aJHB8uUyaHpd9K8Jr2QCM3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0H3zvk8LPfu8ql2lTugH0j
          claim_id: c_qR_WVCyON6rjusfpxiG8NB
          source_id: s_3xeBR5zYA7qiEg9pxzJpLP
          stance: supports
          locator: CBDB 双向互证（父 王祥 ⇄ 子 王奭）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_3xeBR5zYA7qiEg9pxzJpLP
            source_type: api_record
            title: 中国历代人物传记资料库：王奭（CBDB 12166）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12166&o=json
            external_identifier: CBDB:12166
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.590Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aJHB8uUyaHpd9K8Jr2QCM3
        status: active
        display_name: 王奭
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祥 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_KcKFqp4wzz7NL4rU9Bp3pT | 王著 | accepted |
| children | p_aJHB8uUyaHpd9K8Jr2QCM3 | 王奭 | accepted |

## 外部来源

- [中国历代人物传记资料库：王奭（CBDB 12166）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12166&o=json)
- [中国历代人物传记资料库：王祥（CBDB 12165）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12165&o=json)
- [中国历代人物传记资料库：王著（CBDB 12160）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12160&o=json)
