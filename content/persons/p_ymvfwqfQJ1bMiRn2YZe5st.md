---
schema: wang-person/v1
id: p_ymvfwqfQJ1bMiRn2YZe5st
status: active
merged_into: null
display_name: 王彥音
cbdb_id: 261601
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zi1a2DeKe4aRqsBu69BMCj
        subject_person_id: p_ymvfwqfQJ1bMiRn2YZe5st
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥音，明人物。弘治三年進士，籍贯雲陽。（中国历代人物传记资料库 CBDB 261601）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_yOn1CdAMF7vBkgAPcebu01
          claim_id: c_zi1a2DeKe4aRqsBu69BMCj
          source_id: s_bBrSddpsDAxs64TMkL7aXB
          stance: supports
          locator: CBDB:261601
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_bBrSddpsDAxs64TMkL7aXB
            source_type: api_record
            title: 中国历代人物传记资料库：王彥音（CBDB 261601）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261601&o=json
            external_identifier: CBDB:261601
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_a8Nc5sA13XEFFuZRYtB9v3
        subject_person_id: p_ymvfwqfQJ1bMiRn2YZe5st
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥音
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5yAQAzucwugYzGCdnqCKVr
          claim_id: c_a8Nc5sA13XEFFuZRYtB9v3
          source_id: s_bBrSddpsDAxs64TMkL7aXB
          stance: supports
          locator: CBDB:261601
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Jlt8GJU3lBqz3hsURhfkcc
        subject_person_id: p_ZqnLzRT9XT7NL5ciADvB8h
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ymvfwqfQJ1bMiRn2YZe5st
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GyBn-WJvnJXXFHK8iYFyNe
          claim_id: c_Jlt8GJU3lBqz3hsURhfkcc
          source_id: s_UMmd30PKIOoxTT-jWb2_zq
          stance: supports
          locator: CBDB：兄弟 王彥奇（126594）之父／母 王景先
          quotation: null
          interpretation_note: 由兄弟关系推断：王彥音 与 王彥奇 为同胞（CBDB 记「兄」），王彥奇 之父／母即 王彥音 之父／母。
          source:
            id: s_UMmd30PKIOoxTT-jWb2_zq
            source_type: api_record
            title: 中国历代人物传记资料库：王彥音（CBDB 261601）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261601&o=json
            external_identifier: CBDB:261601
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZqnLzRT9XT7NL5ciADvB8h
        status: active
        display_name: 王景先
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_kjoxs45tEnqoyECuGt3RoD
        subject_person_id: p_S9XZsVMSPPCYHPg3x3s7jm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ymvfwqfQJ1bMiRn2YZe5st
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jpXqDhe8shS09ER1b5yv2W
          claim_id: c_kjoxs45tEnqoyECuGt3RoD
          source_id: s_UMmd30PKIOoxTT-jWb2_zq
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126594 王彥奇）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_UMmd30PKIOoxTT-jWb2_zq
            source_type: api_record
            title: 中国历代人物传记资料库：王彥音（CBDB 261601）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261601&o=json
            external_identifier: CBDB:261601
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_S9XZsVMSPPCYHPg3x3s7jm
        status: active
        display_name: 王彥奇
        merged_into_person_id: null
---

# 王彥音

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王彥音，明人物。弘治三年進士，籍贯雲陽。（中国历代人物传记资料库 CBDB 261601） | accepted |
| name.primary | 王彥音 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZqnLzRT9XT7NL5ciADvB8h | 王景先 | accepted |
| other | p_S9XZsVMSPPCYHPg3x3s7jm | 王彥奇 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彥音（CBDB 261601）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261601&o=json)
