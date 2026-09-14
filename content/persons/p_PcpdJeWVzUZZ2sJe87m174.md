---
schema: wang-person/v1
id: p_PcpdJeWVzUZZ2sJe87m174
status: active
merged_into: null
display_name: 王仁
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XTdY886Fm26xrcPj3z9iJJ
        subject_person_id: p_PcpdJeWVzUZZ2sJe87m174
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A43ESUYRJzRFhXsV2DLHJj
          claim_id: c_XTdY886Fm26xrcPj3z9iJJ
          source_id: s_ej4mHhCmHodan4F55z2KBD
          stance: supports
          locator: CBDB:324278
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（324278）
          source: &a1
            id: s_ej4mHhCmHodan4F55z2KBD
            source_type: api_record
            title: 中国历代人物传记资料库：王仁（CBDB 324278）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324278&o=json
            external_identifier: CBDB:324278
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.171Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FD3GZygGyDKfoG8GJ4R9Da
        subject_person_id: p_PcpdJeWVzUZZ2sJe87m174
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁，明人物。嘉靖三十八年進士，籍贯嘉興。（中国历代人物传记资料库 CBDB 324278）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_WuAf1V-7lpX2O-8a47fKIN
          claim_id: c_FD3GZygGyDKfoG8GJ4R9Da
          source_id: s_ej4mHhCmHodan4F55z2KBD
          stance: supports
          locator: CBDB:324278
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_oNf2tGLuowpC8xqphPVP8S
        subject_person_id: p_m9QLtFof8trVhJCPC8QcyA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PcpdJeWVzUZZ2sJe87m174
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YVk0L89ORV_8a2i-QIJ8sg
          claim_id: c_oNf2tGLuowpC8xqphPVP8S
          source_id: s_OP9pmu4rWtYIDHkQlGFxnI
          stance: supports
          locator: CBDB：兄弟 王儒（204801）之父／母 王憲
          quotation: null
          interpretation_note: 由兄弟关系推断：王仁 与 王儒 为同胞（CBDB 记「兄」），王儒 之父／母即 王仁 之父／母。
          source:
            id: s_OP9pmu4rWtYIDHkQlGFxnI
            source_type: api_record
            title: 中国历代人物传记资料库：王仁（CBDB 324278）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324278&o=json
            external_identifier: CBDB:324278
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_m9QLtFof8trVhJCPC8QcyA
        status: active
        display_name: 王憲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_-wHhLGb4JZss0qgmNa1Fz9
        subject_person_id: p_16nv23omiPWM5bXpCbD3EC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_PcpdJeWVzUZZ2sJe87m174
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eSvCHIbJONwBcH77jAo4UL
          claim_id: c_-wHhLGb4JZss0qgmNa1Fz9
          source_id: s_OP9pmu4rWtYIDHkQlGFxnI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204801 王儒）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_OP9pmu4rWtYIDHkQlGFxnI
            source_type: api_record
            title: 中国历代人物传记资料库：王仁（CBDB 324278）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324278&o=json
            external_identifier: CBDB:324278
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_16nv23omiPWM5bXpCbD3EC
        status: active
        display_name: 王儒
        merged_into_person_id: null
---

# 王仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁 | accepted |
| bio.summary | 王仁，明人物。嘉靖三十八年進士，籍贯嘉興。（中国历代人物传记资料库 CBDB 324278） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_m9QLtFof8trVhJCPC8QcyA | 王憲 | accepted |
| other | p_16nv23omiPWM5bXpCbD3EC | 王儒 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仁（CBDB 324278）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324278&o=json)
