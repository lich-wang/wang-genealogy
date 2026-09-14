---
schema: wang-person/v1
id: p_qjyK4NfkvedcDx1Wt3PJq8
status: active
merged_into: null
display_name: 王紀
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sdYCYP3qXGMNcj2h1LUQKT
        subject_person_id: p_qjyK4NfkvedcDx1Wt3PJq8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_az5m5bCqzGCMC73vKN8yEr
          claim_id: c_sdYCYP3qXGMNcj2h1LUQKT
          source_id: s_8oE8nvHkXF3oB2SLA1qqUo
          stance: supports
          locator: CBDB:247205
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（247205）
          source: &a1
            id: s_8oE8nvHkXF3oB2SLA1qqUo
            source_type: api_record
            title: 中国历代人物传记资料库：王紀（CBDB 247205）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247205&o=json
            external_identifier: CBDB:247205
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.099Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tvHgqPzb6TbGKgxZbVxwM8
        subject_person_id: p_qjyK4NfkvedcDx1Wt3PJq8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紀，明人物。成化八年進士，籍贯安化。（中国历代人物传记资料库 CBDB 247205）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_O06r1c8asL_pxqq4kinUu2
          claim_id: c_tvHgqPzb6TbGKgxZbVxwM8
          source_id: s_8oE8nvHkXF3oB2SLA1qqUo
          stance: supports
          locator: CBDB:247205
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Qq5e_so0lhlxyvZdsqGJyD
        subject_person_id: p_9BthKoJ2tXgHihN1qNXn5B
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qjyK4NfkvedcDx1Wt3PJq8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1GXvmwcZdJAAxbp71NjVYM
          claim_id: c_Qq5e_so0lhlxyvZdsqGJyD
          source_id: s_kLhvpHH-04rkD0YGi8udSs
          stance: supports
          locator: CBDB：兄弟 王紳（199607）之父／母 王盛
          quotation: null
          interpretation_note: 由兄弟关系推断：王紀 与 王紳 为同胞（CBDB 记「弟」），王紳 之父／母即 王紀 之父／母。
          source:
            id: s_kLhvpHH-04rkD0YGi8udSs
            source_type: api_record
            title: 中国历代人物传记资料库：王紀（CBDB 247205）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247205&o=json
            external_identifier: CBDB:247205
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9BthKoJ2tXgHihN1qNXn5B
        status: active
        display_name: 王盛
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_4qr6KISVUs95cwn9avRsI7
        subject_person_id: p_SiRDDsb57pG6VTfrkJRXut
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qjyK4NfkvedcDx1Wt3PJq8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WOqyuZq26uJ3NRnf0B_61V
          claim_id: c_4qr6KISVUs95cwn9avRsI7
          source_id: s_kLhvpHH-04rkD0YGi8udSs
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 199607 王紳）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_kLhvpHH-04rkD0YGi8udSs
            source_type: api_record
            title: 中国历代人物传记资料库：王紀（CBDB 247205）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247205&o=json
            external_identifier: CBDB:247205
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_SiRDDsb57pG6VTfrkJRXut
        status: active
        display_name: 王紳
        merged_into_person_id: null
---

# 王紀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紀 | accepted |
| bio.summary | 王紀，明人物。成化八年進士，籍贯安化。（中国历代人物传记资料库 CBDB 247205） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9BthKoJ2tXgHihN1qNXn5B | 王盛 | accepted |
| other | p_SiRDDsb57pG6VTfrkJRXut | 王紳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紀（CBDB 247205）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247205&o=json)
