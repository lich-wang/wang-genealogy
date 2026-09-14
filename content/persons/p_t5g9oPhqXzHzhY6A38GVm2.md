---
schema: wang-person/v1
id: p_t5g9oPhqXzHzhY6A38GVm2
status: active
merged_into: null
display_name: 王鎣
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LLu2ekc3FVNP6ZC98XtjDT
        subject_person_id: p_t5g9oPhqXzHzhY6A38GVm2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Rm7G1Z78YUxV9ySE4ChYow
          claim_id: c_LLu2ekc3FVNP6ZC98XtjDT
          source_id: s_FH1DNWechsQteM9Kba3QkT
          stance: supports
          locator: CBDB:297198
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（297198）
          source: &a1
            id: s_FH1DNWechsQteM9Kba3QkT
            source_type: api_record
            title: 中国历代人物传记资料库：王鎣（CBDB 297198）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297198&o=json
            external_identifier: CBDB:297198
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.562Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JMEEXg643M4f5QzxPqFfnU
        subject_person_id: p_t5g9oPhqXzHzhY6A38GVm2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鎣，明人物。嘉靖十四年進士，籍贯侯官，曾任刑部員外郎。（中国历代人物传记资料库 CBDB 297198）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xF7V_NOLVZCIx1S5bjg5zW
          claim_id: c_JMEEXg643M4f5QzxPqFfnU
          source_id: s_FH1DNWechsQteM9Kba3QkT
          stance: supports
          locator: CBDB:297198
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_M5J3iOMGxePIy7mkOkUen3
        subject_person_id: p_EENMQg8ZujQT1unQPpMBb1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_t5g9oPhqXzHzhY6A38GVm2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nyvjo1xxxg4gh1yuC-B1fF
          claim_id: c_M5J3iOMGxePIy7mkOkUen3
          source_id: s_1ZVV99TsreYhfqTkXfjX7E
          stance: supports
          locator: CBDB：兄弟 王鏜（202946）之父／母 王介
          quotation: null
          interpretation_note: 由兄弟关系推断：王鎣 与 王鏜 为同胞（CBDB 记「弟」），王鏜 之父／母即 王鎣 之父／母。
          source:
            id: s_1ZVV99TsreYhfqTkXfjX7E
            source_type: api_record
            title: 中国历代人物传记资料库：王鎣（CBDB 297198）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297198&o=json
            external_identifier: CBDB:297198
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EENMQg8ZujQT1unQPpMBb1
        status: active
        display_name: 王介
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_L-eRBwtwZD52jrdLE8o7Kv
        subject_person_id: p_ejkhqRyi6zguVhFhs63Ax7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_t5g9oPhqXzHzhY6A38GVm2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RfP6F5Pv8Kklbl8C-EM2T9
          claim_id: c_L-eRBwtwZD52jrdLE8o7Kv
          source_id: s_1ZVV99TsreYhfqTkXfjX7E
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202946 王鏜）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1ZVV99TsreYhfqTkXfjX7E
            source_type: api_record
            title: 中国历代人物传记资料库：王鎣（CBDB 297198）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297198&o=json
            external_identifier: CBDB:297198
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ejkhqRyi6zguVhFhs63Ax7
        status: active
        display_name: 王鏜
        merged_into_person_id: null
---

# 王鎣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鎣 | accepted |
| bio.summary | 王鎣，明人物。嘉靖十四年進士，籍贯侯官，曾任刑部員外郎。（中国历代人物传记资料库 CBDB 297198） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EENMQg8ZujQT1unQPpMBb1 | 王介 | accepted |
| other | p_ejkhqRyi6zguVhFhs63Ax7 | 王鏜 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鎣（CBDB 297198）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297198&o=json)
