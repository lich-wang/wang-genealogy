---
schema: wang-person/v1
id: p_VPuBs39GBsBjBKyqSBQVtk
status: active
merged_into: null
display_name: 王恆德
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tisM62d8YqYWChm8o1Cn4P
        subject_person_id: p_VPuBs39GBsBjBKyqSBQVtk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恆德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dEC2LoG6p1aLmoWdKZ3TXf
          claim_id: c_tisM62d8YqYWChm8o1Cn4P
          source_id: s_4W7jQ8myDaNJUQ4d1puihq
          stance: supports
          locator: CBDB:220121
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（220121）
          source: &a1
            id: s_4W7jQ8myDaNJUQ4d1puihq
            source_type: api_record
            title: 中国历代人物传记资料库：王恆德（CBDB 220121）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220121&o=json
            external_identifier: CBDB:220121
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.297Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4cw4XJ1bQvXxqY4De7oy4N
        subject_person_id: p_VPuBs39GBsBjBKyqSBQVtk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恆德，明人物。萬曆八年進士，籍贯嘉善。（中国历代人物传记资料库 CBDB 220121）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_utuXcrMfK0EBR14HrnoCWB
          claim_id: c_4cw4XJ1bQvXxqY4De7oy4N
          source_id: s_4W7jQ8myDaNJUQ4d1puihq
          stance: supports
          locator: CBDB:220121
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_f5bhF68ZltyxMxp012b734
        subject_person_id: p_EoXnHjFHxPjhcD8KsqKTGz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VPuBs39GBsBjBKyqSBQVtk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hjbUb5KO5KmMboFE6K6VfL
          claim_id: c_f5bhF68ZltyxMxp012b734
          source_id: s_nQSv3EvoWgjKTiPpJ7GZ4a
          stance: supports
          locator: CBDB：兄弟 王慎德（206584）之父／母 王訪
          quotation: null
          interpretation_note: 由兄弟关系推断：王恆德 与 王慎德 为同胞（CBDB 记「兄」），王慎德 之父／母即 王恆德 之父／母。
          source:
            id: s_nQSv3EvoWgjKTiPpJ7GZ4a
            source_type: api_record
            title: 中国历代人物传记资料库：王恆德（CBDB 220121）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220121&o=json
            external_identifier: CBDB:220121
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EoXnHjFHxPjhcD8KsqKTGz
        status: active
        display_name: 王訪
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_WWCYXzJISih3wWYj5bJ3Lz
        subject_person_id: p_1NRJDMaRvyp9yNoVJiZmjE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_VPuBs39GBsBjBKyqSBQVtk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5GLIetw5i91BHbnYsTgdbw
          claim_id: c_WWCYXzJISih3wWYj5bJ3Lz
          source_id: s_nQSv3EvoWgjKTiPpJ7GZ4a
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206584 王慎德）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_nQSv3EvoWgjKTiPpJ7GZ4a
            source_type: api_record
            title: 中国历代人物传记资料库：王恆德（CBDB 220121）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220121&o=json
            external_identifier: CBDB:220121
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1NRJDMaRvyp9yNoVJiZmjE
        status: active
        display_name: 王慎德
        merged_into_person_id: null
---

# 王恆德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恆德 | accepted |
| bio.summary | 王恆德，明人物。萬曆八年進士，籍贯嘉善。（中国历代人物传记资料库 CBDB 220121） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EoXnHjFHxPjhcD8KsqKTGz | 王訪 | accepted |
| other | p_1NRJDMaRvyp9yNoVJiZmjE | 王慎德 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恆德（CBDB 220121）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=220121&o=json)
