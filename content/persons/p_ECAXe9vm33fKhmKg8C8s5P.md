---
schema: wang-person/v1
id: p_ECAXe9vm33fKhmKg8C8s5P
status: active
merged_into: null
display_name: 王閥
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DEkkWQiLWWKRs4iXWVZfB6
        subject_person_id: p_ECAXe9vm33fKhmKg8C8s5P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王閥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XKmxrKUDxPNgoQzrESwyEZ
          claim_id: c_DEkkWQiLWWKRs4iXWVZfB6
          source_id: s_HB6SDu4MQgA7pSgkXN3gL4
          stance: supports
          locator: CBDB:323754
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（323754）
          source: &a1
            id: s_HB6SDu4MQgA7pSgkXN3gL4
            source_type: api_record
            title: 中国历代人物传记资料库：王閥（CBDB 323754）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323754&o=json
            external_identifier: CBDB:323754
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.149Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kc8S4XW7w9nEBVFggp5N81
        subject_person_id: p_ECAXe9vm33fKhmKg8C8s5P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王閥，明人物。嘉靖三十八年進士，籍贯清苑，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 323754）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wjwcAlWF0mftMi5nL2eTQc
          claim_id: c_kc8S4XW7w9nEBVFggp5N81
          source_id: s_HB6SDu4MQgA7pSgkXN3gL4
          stance: supports
          locator: CBDB:323754
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_qbggB7Ualg-zsZ3frhBa2Q
        subject_person_id: p_7qYVpNXr3rJeGDwdypL9Mb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ECAXe9vm33fKhmKg8C8s5P
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5a13NHJvGMTtzZUKExHPfx
          claim_id: c_qbggB7Ualg-zsZ3frhBa2Q
          source_id: s_6pKUJwr6WNQ2WjOmXhfpx-
          stance: supports
          locator: CBDB：兄弟 王闐（204766）之父／母 王德純
          quotation: null
          interpretation_note: 由兄弟关系推断：王閥 与 王闐 为同胞（CBDB 记「弟」），王闐 之父／母即 王閥 之父／母。
          source:
            id: s_6pKUJwr6WNQ2WjOmXhfpx-
            source_type: api_record
            title: 中国历代人物传记资料库：王閥（CBDB 323754）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323754&o=json
            external_identifier: CBDB:323754
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7qYVpNXr3rJeGDwdypL9Mb
        status: active
        display_name: 王德純
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_JRU5pO0mOLe3aiMlAsGTLL
        subject_person_id: p_ECAXe9vm33fKhmKg8C8s5P
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ck5AXM5Fx2KaAGeW6x29ur
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FYRDvT8-jON-wLtHHVuY7f
          claim_id: c_JRU5pO0mOLe3aiMlAsGTLL
          source_id: s_6pKUJwr6WNQ2WjOmXhfpx-
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204766 王闐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6pKUJwr6WNQ2WjOmXhfpx-
            source_type: api_record
            title: 中国历代人物传记资料库：王閥（CBDB 323754）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323754&o=json
            external_identifier: CBDB:323754
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ck5AXM5Fx2KaAGeW6x29ur
        status: active
        display_name: 王闐
        merged_into_person_id: null
---

# 王閥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王閥 | accepted |
| bio.summary | 王閥，明人物。嘉靖三十八年進士，籍贯清苑，入仕考上會試/貢士。（中国历代人物传记资料库 CBDB 323754） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7qYVpNXr3rJeGDwdypL9Mb | 王德純 | accepted |
| other | p_ck5AXM5Fx2KaAGeW6x29ur | 王闐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王閥（CBDB 323754）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=323754&o=json)
