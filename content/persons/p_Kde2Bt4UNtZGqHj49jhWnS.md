---
schema: wang-person/v1
id: p_Kde2Bt4UNtZGqHj49jhWnS
status: active
merged_into: null
display_name: 王轍
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dsNjPyuMHUJcF4miTNpH3M
        subject_person_id: p_Kde2Bt4UNtZGqHj49jhWnS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王轍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xK5vnHez1Bp48WqemJKrd9
          claim_id: c_dsNjPyuMHUJcF4miTNpH3M
          source_id: s_5RnSLXxLw4sYdft6xFwBTt
          stance: supports
          locator: CBDB:310018
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（310018）
          source: &a1
            id: s_5RnSLXxLw4sYdft6xFwBTt
            source_type: api_record
            title: 中国历代人物传记资料库：王轍（CBDB 310018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310018&o=json
            external_identifier: CBDB:310018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.838Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9eGe1TxKHvL2ZG5CP6F3bp
        subject_person_id: p_Kde2Bt4UNtZGqHj49jhWnS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王轍，明人物。天順四年進士，籍贯南京錦衣衛。（中国历代人物传记资料库 CBDB 310018）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MevaINQrtkzZ_ZHRWHpmek
          claim_id: c_9eGe1TxKHvL2ZG5CP6F3bp
          source_id: s_5RnSLXxLw4sYdft6xFwBTt
          stance: supports
          locator: CBDB:310018
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_hIvgwD0qgzfMckYsxhu3SR
        subject_person_id: p_mmhxQ3mMMbafknFpAgKiQp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Kde2Bt4UNtZGqHj49jhWnS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DhMK78ILtzkRI_-QYbFGkn
          claim_id: c_hIvgwD0qgzfMckYsxhu3SR
          source_id: s_6kOhzZatrUZ2vZW48x7uY9
          stance: supports
          locator: CBDB：兄弟 王徽（67717）之父／母 王寧
          quotation: null
          interpretation_note: 由兄弟关系推断：王轍 与 王徽 为同胞（CBDB 记「兄」），王徽 之父／母即 王轍 之父／母。
          source:
            id: s_6kOhzZatrUZ2vZW48x7uY9
            source_type: api_record
            title: 中国历代人物传记资料库：王轍（CBDB 310018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310018&o=json
            external_identifier: CBDB:310018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mmhxQ3mMMbafknFpAgKiQp
        status: active
        display_name: 王寧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_4s50swjj9wIcehqhRH7cdj
        subject_person_id: p_EL3MrLTYLivcbMQDRsPBD7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Kde2Bt4UNtZGqHj49jhWnS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lsP4LO_rKK2F27639wjKzt
          claim_id: c_4s50swjj9wIcehqhRH7cdj
          source_id: s_6kOhzZatrUZ2vZW48x7uY9
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67717 王徽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6kOhzZatrUZ2vZW48x7uY9
            source_type: api_record
            title: 中国历代人物传记资料库：王轍（CBDB 310018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310018&o=json
            external_identifier: CBDB:310018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EL3MrLTYLivcbMQDRsPBD7
        status: active
        display_name: 王徽
        merged_into_person_id: null
---

# 王轍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王轍 | accepted |
| bio.summary | 王轍，明人物。天順四年進士，籍贯南京錦衣衛。（中国历代人物传记资料库 CBDB 310018） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mmhxQ3mMMbafknFpAgKiQp | 王寧 | accepted |
| other | p_EL3MrLTYLivcbMQDRsPBD7 | 王徽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王轍（CBDB 310018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310018&o=json)
