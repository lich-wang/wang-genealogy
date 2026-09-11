---
schema: wang-person/v1
id: p_CJxNevghHWDgVDRMMrkHvk
status: active
merged_into: null
display_name: 王義昭
cbdb_id: 231051
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FuEYzvM8EoDWx7eXDBrnC9
        subject_person_id: p_CJxNevghHWDgVDRMMrkHvk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義昭，明人物。中国历代人物传记资料库（CBDB）以人物编号 231051 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_tk4BQ4WXAbwi4RXmQlAKQe
          claim_id: c_FuEYzvM8EoDWx7eXDBrnC9
          source_id: s_XDJEudZJwjPLBcwttizVN4
          stance: supports
          locator: CBDB:231051
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_XDJEudZJwjPLBcwttizVN4
            source_type: api_record
            title: 中国历代人物传记资料库：王義昭（CBDB 231051）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231051&o=json
            external_identifier: CBDB:231051
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_uvQcdhwf4WND2DE4RutjQy
        subject_person_id: p_CJxNevghHWDgVDRMMrkHvk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義昭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_2LwD6N9KVaCiNDKNmv1QsN
          claim_id: c_uvQcdhwf4WND2DE4RutjQy
          source_id: s_XDJEudZJwjPLBcwttizVN4
          stance: supports
          locator: CBDB:231051
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source:
            id: s_XDJEudZJwjPLBcwttizVN4
            source_type: api_record
            title: 中国历代人物传记资料库：王義昭（CBDB 231051）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231051&o=json
            external_identifier: CBDB:231051
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_L8r8XO_Ahtq4A0LELA9tQc
        subject_person_id: p_CJxNevghHWDgVDRMMrkHvk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7j83XKHhJr8JnHARH8PeYg
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oOdQeVMk7a_jEfWTccj5aN
          claim_id: c_L8r8XO_Ahtq4A0LELA9tQc
          source_id: s_uzW9Ddf4Rc2dppD7goBC2K
          stance: supports
          locator: 宣德八年進士登科錄:一卷，第二甲第十三名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uzW9Ddf4Rc2dppD7goBC2K
            source_type: api_record
            title: 中国历代人物传记资料库：王弼（CBDB 207304）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207304&o=json
            external_identifier: CBDB:207304
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.916Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7j83XKHhJr8JnHARH8PeYg
        status: active
        display_name: 王弼
        merged_into_person_id: null
  other: []
---

# 王義昭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王義昭，明人物。中国历代人物传记资料库（CBDB）以人物编号 231051 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王義昭 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_7j83XKHhJr8JnHARH8PeYg | 王弼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弼（CBDB 207304）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207304&o=json)
- [中国历代人物传记资料库：王義昭（CBDB 231051）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=231051&o=json)
