---
schema: wang-person/v1
id: p_zJ1Pzko9B5NNeaFihXANes
status: active
merged_into: null
display_name: 王客僧
cbdb_id: 162660
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EGHNKkDDBVZ6nnnY8RENzk
        subject_person_id: p_zJ1Pzko9B5NNeaFihXANes
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王客僧，唐人物。中国历代人物传记资料库（CBDB）以人物编号 162660 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_zfvWRPjUq1eoMyDRu7UUsf
          claim_id: c_EGHNKkDDBVZ6nnnY8RENzk
          source_id: s_HnxhownEHVJQnrXLjoU9gH
          stance: supports
          locator: CBDB:162660
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_HnxhownEHVJQnrXLjoU9gH
            source_type: api_record
            title: 中国历代人物传记资料库：王客僧（CBDB 162660）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162660&o=json
            external_identifier: CBDB:162660
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_MBtRPgBeYmRzVQqoLJdfFv
        subject_person_id: p_zJ1Pzko9B5NNeaFihXANes
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王客僧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_DKXqUHd6mA6K9R5E899c8g
          claim_id: c_MBtRPgBeYmRzVQqoLJdfFv
          source_id: s_HnxhownEHVJQnrXLjoU9gH
          stance: supports
          locator: CBDB:162660
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 唐
          source:
            id: s_HnxhownEHVJQnrXLjoU9gH
            source_type: api_record
            title: 中国历代人物传记资料库：王客僧（CBDB 162660）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162660&o=json
            external_identifier: CBDB:162660
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FKqgkvnx4EiEQdj_AjieiU
        subject_person_id: p_pLBQ4Lr5Q5VkSkEccpnRyk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zJ1Pzko9B5NNeaFihXANes
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4m6ewkyBuB2XtsBov24ZZT
          claim_id: c_FKqgkvnx4EiEQdj_AjieiU
          source_id: s_ntk53u5XLSBffeHe5eAWSP
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Yifeng12：嗣子(作為繼承人的兒子)
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ntk53u5XLSBffeHe5eAWSP
            source_type: api_record
            title: 中国历代人物传记资料库：王叡（CBDB 142667）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142667&o=json
            external_identifier: CBDB:142667
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.587Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_pLBQ4Lr5Q5VkSkEccpnRyk
        status: active
        display_name: 王叡
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王客僧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王客僧，唐人物。中国历代人物传记资料库（CBDB）以人物编号 162660 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王客僧 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pLBQ4Lr5Q5VkSkEccpnRyk | 王叡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王客僧（CBDB 162660）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=162660&o=json)
- [中国历代人物传记资料库：王叡（CBDB 142667）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142667&o=json)
