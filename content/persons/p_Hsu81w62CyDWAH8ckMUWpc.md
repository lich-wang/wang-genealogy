---
schema: wang-person/v1
id: p_Hsu81w62CyDWAH8ckMUWpc
status: active
merged_into: null
display_name: 王立中
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sbTM7xChEKus913G2avPg3
        subject_person_id: p_Hsu81w62CyDWAH8ckMUWpc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_h4Czpe5veiZGVNiy8gEiqf
          claim_id: c_sbTM7xChEKus913G2avPg3
          source_id: s_W2ZoYfiPHyStgtiqk6FH8e
          stance: supports
          locator: CBDB:214287
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（214287）
          source: &a1
            id: s_W2ZoYfiPHyStgtiqk6FH8e
            source_type: api_record
            title: 中国历代人物传记资料库：王立中（CBDB 214287）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214287&o=json
            external_identifier: CBDB:214287
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.156Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6UTv2HEJomAUuUYxzJoR3h
        subject_person_id: p_Hsu81w62CyDWAH8ckMUWpc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王立中，明人物。萬曆二年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 214287）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tS2TW5Z9izX6-vaoAxNGRo
          claim_id: c_6UTv2HEJomAUuUYxzJoR3h
          source_id: s_W2ZoYfiPHyStgtiqk6FH8e
          stance: supports
          locator: CBDB:214287
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_99UBznZgsYABp6R50woNBx
        subject_person_id: p_5pYb5XTgHHLxK22eWK3gGJ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Hsu81w62CyDWAH8ckMUWpc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QUv-Y301obHq7uYDqoCxOE
          claim_id: c_99UBznZgsYABp6R50woNBx
          source_id: s_p57qJ76-UaxJOQnbwZMn-6
          stance: supports
          locator: CBDB：兄弟 王致中（206164）之父／母 王胤
          quotation: null
          interpretation_note: 由兄弟关系推断：王立中 与 王致中 为同胞（CBDB 记「弟」），王致中 之父／母即 王立中 之父／母。
          source:
            id: s_p57qJ76-UaxJOQnbwZMn-6
            source_type: api_record
            title: 中国历代人物传记资料库：王立中（CBDB 214287）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214287&o=json
            external_identifier: CBDB:214287
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5pYb5XTgHHLxK22eWK3gGJ
        status: active
        display_name: 王胤
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_tGfkWaZjaMgZMFt1lHtRtw
        subject_person_id: p_Hsu81w62CyDWAH8ckMUWpc
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nZ6oVMjM9PndsMQA7hdBnN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TGitQ90MCuXR2i2Og9PWVo
          claim_id: c_tGfkWaZjaMgZMFt1lHtRtw
          source_id: s_p57qJ76-UaxJOQnbwZMn-6
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206164 王致中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_p57qJ76-UaxJOQnbwZMn-6
            source_type: api_record
            title: 中国历代人物传记资料库：王立中（CBDB 214287）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214287&o=json
            external_identifier: CBDB:214287
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nZ6oVMjM9PndsMQA7hdBnN
        status: active
        display_name: 王致中
        merged_into_person_id: null
---

# 王立中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王立中 | accepted |
| bio.summary | 王立中，明人物。萬曆二年進士，籍贯無錫。（中国历代人物传记资料库 CBDB 214287） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5pYb5XTgHHLxK22eWK3gGJ | 王胤 | accepted |
| other | p_nZ6oVMjM9PndsMQA7hdBnN | 王致中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王立中（CBDB 214287）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214287&o=json)
