---
schema: wang-person/v1
id: p_pKkLW1uBtTf3sCihfyksSx
status: active
merged_into: null
display_name: 王惟憑
cbdb_id: 308703
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_56SWSA3KLYxwmZbKXEkAJM
        subject_person_id: p_pKkLW1uBtTf3sCihfyksSx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟憑，明人物。嘉靖二十六年進士，籍贯長泰。（中国历代人物传记资料库 CBDB 308703）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_U0cZDqH7OPVKizq6TLrgZX
          claim_id: c_56SWSA3KLYxwmZbKXEkAJM
          source_id: s_GDJQmmBrxop7K3yJugG9YG
          stance: supports
          locator: CBDB:308703
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_GDJQmmBrxop7K3yJugG9YG
            source_type: api_record
            title: 中国历代人物传记资料库：王惟憑（CBDB 308703）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308703&o=json
            external_identifier: CBDB:308703
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZW7UoDA4bzG3Qgu3MGQCLP
        subject_person_id: p_pKkLW1uBtTf3sCihfyksSx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惟憑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MVYzCUihsLpw7st89FAJrK
          claim_id: c_ZW7UoDA4bzG3Qgu3MGQCLP
          source_id: s_GDJQmmBrxop7K3yJugG9YG
          stance: supports
          locator: CBDB:308703
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PujJq4X5YgwfG9L_ZMINIg
        subject_person_id: p_8r5zcHcdRUFJXRuzwFCDPp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pKkLW1uBtTf3sCihfyksSx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1usXS8jtxGQgl8wblgzHRY
          claim_id: c_PujJq4X5YgwfG9L_ZMINIg
          source_id: s_zuC4TuU2ir5_6Dx2T7wrlV
          stance: supports
          locator: CBDB：兄弟 王惟恕（203695）之父／母 王瑩之
          quotation: null
          interpretation_note: 由兄弟关系推断：王惟憑 与 王惟恕 为同胞（CBDB 记「兄」），王惟恕 之父／母即 王惟憑 之父／母。
          source:
            id: s_zuC4TuU2ir5_6Dx2T7wrlV
            source_type: api_record
            title: 中国历代人物传记资料库：王惟憑（CBDB 308703）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308703&o=json
            external_identifier: CBDB:308703
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
        id: c_2_A2xXuhfapbqe6OUAPc1b
        subject_person_id: p_pKkLW1uBtTf3sCihfyksSx
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
        - id: cs_klW14fWR6GwJ6eUglK4XqL
          claim_id: c_2_A2xXuhfapbqe6OUAPc1b
          source_id: s_zuC4TuU2ir5_6Dx2T7wrlV
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203695 王惟恕）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_zuC4TuU2ir5_6Dx2T7wrlV
            source_type: api_record
            title: 中国历代人物传记资料库：王惟憑（CBDB 308703）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308703&o=json
            external_identifier: CBDB:308703
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xXSR8uBFHqUzBi2gqK2tw2
        status: active
        display_name: 王惟恕
        merged_into_person_id: null
---

# 王惟憑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王惟憑，明人物。嘉靖二十六年進士，籍贯長泰。（中国历代人物传记资料库 CBDB 308703） | accepted |
| name.primary | 王惟憑 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8r5zcHcdRUFJXRuzwFCDPp | 王瑩之 | accepted |
| other | p_xXSR8uBFHqUzBi2gqK2tw2 | 王惟恕 | accepted |

## 外部来源

- [中国历代人物传记资料库：王惟憑（CBDB 308703）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308703&o=json)
