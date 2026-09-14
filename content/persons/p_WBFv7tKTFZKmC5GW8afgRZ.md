---
schema: wang-person/v1
id: p_WBFv7tKTFZKmC5GW8afgRZ
status: active
merged_into: null
display_name: 王惟應
cbdb_id: 308705
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EBF5Enw5Dz5UCzuaDgHivE
        subject_person_id: p_WBFv7tKTFZKmC5GW8afgRZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟應，明人物。嘉靖二十六年進士，籍贯長泰。（中国历代人物传记资料库 CBDB 308705）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_43zweLqAssYrWw4t3CX3Mb
          claim_id: c_EBF5Enw5Dz5UCzuaDgHivE
          source_id: s_HW5Xw6PLxRmBR9oP9NDfLv
          stance: supports
          locator: CBDB:308705
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_HW5Xw6PLxRmBR9oP9NDfLv
            source_type: api_record
            title: 中国历代人物传记资料库：王惟應（CBDB 308705）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308705&o=json
            external_identifier: CBDB:308705
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DvL29TFf8W7uCRFzTb2XCm
        subject_person_id: p_WBFv7tKTFZKmC5GW8afgRZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟應
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_qgLHSsbX3XhBaE21sCby8P
          claim_id: c_DvL29TFf8W7uCRFzTb2XCm
          source_id: s_HW5Xw6PLxRmBR9oP9NDfLv
          stance: supports
          locator: CBDB:308705
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dzwewNNauVm0NjXwL5hGr1
        subject_person_id: p_8r5zcHcdRUFJXRuzwFCDPp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WBFv7tKTFZKmC5GW8afgRZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xJrzq5FjZpeLO1LWLYh9oR
          claim_id: c_dzwewNNauVm0NjXwL5hGr1
          source_id: s_JphRc9bwop-MsnP8Vzhg4F
          stance: supports
          locator: CBDB：兄弟 王惟恕（203695）之父／母 王瑩之
          quotation: null
          interpretation_note: 由兄弟关系推断：王惟應 与 王惟恕 为同胞（CBDB 记「兄」），王惟恕 之父／母即 王惟應 之父／母。
          source:
            id: s_JphRc9bwop-MsnP8Vzhg4F
            source_type: api_record
            title: 中国历代人物传记资料库：王惟應（CBDB 308705）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308705&o=json
            external_identifier: CBDB:308705
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_8r5zcHcdRUFJXRuzwFCDPp
        status: active
        display_name: 王瑩之
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_y5c4t8SWLLh-bE1LN7pE4y
        subject_person_id: p_WBFv7tKTFZKmC5GW8afgRZ
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xXSR8uBFHqUzBi2gqK2tw2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3mx5uSvQfv3OCCWVAU4IoO
          claim_id: c_y5c4t8SWLLh-bE1LN7pE4y
          source_id: s_JphRc9bwop-MsnP8Vzhg4F
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203695 王惟恕）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_JphRc9bwop-MsnP8Vzhg4F
            source_type: api_record
            title: 中国历代人物传记资料库：王惟應（CBDB 308705）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308705&o=json
            external_identifier: CBDB:308705
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xXSR8uBFHqUzBi2gqK2tw2
        status: active
        display_name: 王惟恕
        merged_into_person_id: null
---

# 王惟應

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王惟應，明人物。嘉靖二十六年進士，籍贯長泰。（中国历代人物传记资料库 CBDB 308705） | accepted |
| name.primary | 王惟應 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8r5zcHcdRUFJXRuzwFCDPp | 王瑩之 | accepted |
| other | p_xXSR8uBFHqUzBi2gqK2tw2 | 王惟恕 | accepted |

## 外部来源

- [中国历代人物传记资料库：王惟應（CBDB 308705）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308705&o=json)
