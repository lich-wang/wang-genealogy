---
schema: wang-person/v1
id: p_sK1np5ERAT2spWcgarJQGn
status: active
merged_into: null
display_name: 王孟慶
cbdb_id: 239758
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_o2tQjjZaSiaGLSCcDRTF9i
        subject_person_id: p_sK1np5ERAT2spWcgarJQGn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟慶，明人物。正统十年進士，籍贯長壽。（中国历代人物传记资料库 CBDB 239758）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_CH2j-ggGoaMF9cdivGzbEr
          claim_id: c_o2tQjjZaSiaGLSCcDRTF9i
          source_id: s_gszaMGGv3FVvzbkSmU9gbo
          stance: supports
          locator: CBDB:239758
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_gszaMGGv3FVvzbkSmU9gbo
            source_type: api_record
            title: 中国历代人物传记资料库：王孟慶（CBDB 239758）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239758&o=json
            external_identifier: CBDB:239758
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:59.761Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7DGPzJB5z6sYm1QafCquyV
        subject_person_id: p_sK1np5ERAT2spWcgarJQGn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王孟慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Gqmaf1v36wdtRUZF9fq9jv
          claim_id: c_7DGPzJB5z6sYm1QafCquyV
          source_id: s_gszaMGGv3FVvzbkSmU9gbo
          stance: supports
          locator: CBDB:239758
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2901-3000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GV1_iOFHuUuj08G6sFGWLA
        subject_person_id: p_QyVQQbt4VbA4Hx7YZ8Kozc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sK1np5ERAT2spWcgarJQGn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QWtbwxb07XG7H8I2p4Vkgm
          claim_id: c_GV1_iOFHuUuj08G6sFGWLA
          source_id: s_5id-os8DdmI3UZ4l7KJNBj
          stance: supports
          locator: CBDB：兄弟 王宣（208053）之父／母 王宗麒
          quotation: null
          interpretation_note: 由兄弟关系推断：王孟慶 与 王宣 为同胞（CBDB 记「兄」），王宣 之父／母即 王孟慶 之父／母。
          source:
            id: s_5id-os8DdmI3UZ4l7KJNBj
            source_type: api_record
            title: 中国历代人物传记资料库：王孟慶（CBDB 239758）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239758&o=json
            external_identifier: CBDB:239758
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QyVQQbt4VbA4Hx7YZ8Kozc
        status: active
        display_name: 王宗麒
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_tGK5084awY3Pc1S8RAnqi2
        subject_person_id: p_sK1np5ERAT2spWcgarJQGn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ye9VLgV3pJbXBYdJ82vvQv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NjzaFhPoGBXYDhqFSGzo7i
          claim_id: c_tGK5084awY3Pc1S8RAnqi2
          source_id: s_5id-os8DdmI3UZ4l7KJNBj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 208053 王宣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5id-os8DdmI3UZ4l7KJNBj
            source_type: api_record
            title: 中国历代人物传记资料库：王孟慶（CBDB 239758）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239758&o=json
            external_identifier: CBDB:239758
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ye9VLgV3pJbXBYdJ82vvQv
        status: active
        display_name: 王宣
        merged_into_person_id: null
---

# 王孟慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王孟慶，明人物。正统十年進士，籍贯長壽。（中国历代人物传记资料库 CBDB 239758） | accepted |
| name.primary | 王孟慶 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QyVQQbt4VbA4Hx7YZ8Kozc | 王宗麒 | accepted |
| other | p_ye9VLgV3pJbXBYdJ82vvQv | 王宣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王孟慶（CBDB 239758）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239758&o=json)
