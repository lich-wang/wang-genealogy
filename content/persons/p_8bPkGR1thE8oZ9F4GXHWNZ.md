---
schema: wang-person/v1
id: p_8bPkGR1thE8oZ9F4GXHWNZ
status: active
merged_into: null
display_name: 王龠
cbdb_id: 276178
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FugPsUt61Qxpc3ggptmxrb
        subject_person_id: p_8bPkGR1thE8oZ9F4GXHWNZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王龠，明人物。正德六年進士，籍贯遷安。（中国历代人物传记资料库 CBDB 276178）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_rnh2ydP9c0pipKelwatmjJ
          claim_id: c_FugPsUt61Qxpc3ggptmxrb
          source_id: s_B2rGfspRkytDyCCJRU3Ygb
          stance: supports
          locator: CBDB:276178
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_B2rGfspRkytDyCCJRU3Ygb
            source_type: api_record
            title: 中国历代人物传记资料库：王龠（CBDB 276178）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276178&o=json
            external_identifier: CBDB:276178
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z5eCWzotbVwNvti7BGVTDx
        subject_person_id: p_8bPkGR1thE8oZ9F4GXHWNZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王龠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_51scS6CJFdEchPQtQywm6K
          claim_id: c_Z5eCWzotbVwNvti7BGVTDx
          source_id: s_B2rGfspRkytDyCCJRU3Ygb
          stance: supports
          locator: CBDB:276178
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Ra-YgHVkTkAjxpVyGPDNzV
        subject_person_id: p_WMDBx8YbaqrfbBxkSxgvG3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8bPkGR1thE8oZ9F4GXHWNZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ddKzZqmDxyXQi3ukkhlZa2
          claim_id: c_Ra-YgHVkTkAjxpVyGPDNzV
          source_id: s_zP4wxlz-Z1j2xbx4iPggNP
          stance: supports
          locator: CBDB：兄弟 王念（126587）之父／母 王和
          quotation: null
          interpretation_note: 由兄弟关系推断：王龠 与 王念 为同胞（CBDB 记「兄」），王念 之父／母即 王龠 之父／母。
          source:
            id: s_zP4wxlz-Z1j2xbx4iPggNP
            source_type: api_record
            title: 中国历代人物传记资料库：王龠（CBDB 276178）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276178&o=json
            external_identifier: CBDB:276178
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WMDBx8YbaqrfbBxkSxgvG3
        status: active
        display_name: 王和
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_6_w9zIpXUQ4Zg9LV8TL0-6
        subject_person_id: p_1kPwo9xT5TtA5YmLc4QpXm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_8bPkGR1thE8oZ9F4GXHWNZ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mUq2ZjJq3aAYepJTu6Jn0-
          claim_id: c_6_w9zIpXUQ4Zg9LV8TL0-6
          source_id: s_zP4wxlz-Z1j2xbx4iPggNP
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126587 王念）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_zP4wxlz-Z1j2xbx4iPggNP
            source_type: api_record
            title: 中国历代人物传记资料库：王龠（CBDB 276178）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276178&o=json
            external_identifier: CBDB:276178
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1kPwo9xT5TtA5YmLc4QpXm
        status: active
        display_name: 王念
        merged_into_person_id: null
---

# 王龠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王龠，明人物。正德六年進士，籍贯遷安。（中国历代人物传记资料库 CBDB 276178） | accepted |
| name.primary | 王龠 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_WMDBx8YbaqrfbBxkSxgvG3 | 王和 | accepted |
| other | p_1kPwo9xT5TtA5YmLc4QpXm | 王念 | accepted |

## 外部来源

- [中国历代人物传记资料库：王龠（CBDB 276178）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=276178&o=json)
