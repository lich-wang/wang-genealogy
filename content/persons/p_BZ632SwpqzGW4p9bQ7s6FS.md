---
schema: wang-person/v1
id: p_BZ632SwpqzGW4p9bQ7s6FS
status: active
merged_into: null
display_name: 王廷政
cbdb_id: 324338
revision: 5
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5SjVHjHtquwHtELKjXR6LP
        subject_person_id: p_BZ632SwpqzGW4p9bQ7s6FS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷政，明人物。嘉靖三十八年進士，籍贯歙縣。（中国历代人物传记资料库 CBDB 324338）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_KyvmNoLAE4LgYSnQqQMDRf
          claim_id: c_5SjVHjHtquwHtELKjXR6LP
          source_id: s_ZMW58ooJeCqNM9XCcCLDqk
          stance: supports
          locator: CBDB:324338
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_ZMW58ooJeCqNM9XCcCLDqk
            source_type: api_record
            title: 中国历代人物传记资料库：王廷政（CBDB 324338）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324338&o=json
            external_identifier: CBDB:324338
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_UpWkBJKyhV2rSZP3X414Gb
        subject_person_id: p_BZ632SwpqzGW4p9bQ7s6FS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷政
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_U5jfVFqfDjqdB12KvsjX6o
          claim_id: c_UpWkBJKyhV2rSZP3X414Gb
          source_id: s_ZMW58ooJeCqNM9XCcCLDqk
          stance: supports
          locator: CBDB:324338
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3801-3900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_COxS7jrr0HQmzg5KtJRfke
        subject_person_id: p_BZ632SwpqzGW4p9bQ7s6FS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SVNZL8P3EB13LuNV5sxppY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WGy1LhWLS-sX6c-QdC4LLu
          claim_id: c_COxS7jrr0HQmzg5KtJRfke
          source_id: s_ZMW58ooJeCqNM9XCcCLDqk
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第四十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZMW58ooJeCqNM9XCcCLDqk
            source_type: api_record
            title: 中国历代人物传记资料库：王廷政（CBDB 324338）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324338&o=json
            external_identifier: CBDB:324338
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_SVNZL8P3EB13LuNV5sxppY
        status: active
        display_name: 王天爵
        merged_into_person_id: null
    - claim:
        id: c_429NydxKH2eIu5sNhKMc5i
        subject_person_id: p_BZ632SwpqzGW4p9bQ7s6FS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PYcBXQvYgRSYLrryMvEQY7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PkPQrbVfySj7f7_acZJzdP
          claim_id: c_429NydxKH2eIu5sNhKMc5i
          source_id: s_b88ZbSjufEIIIuZ08GY6gO
          stance: supports
          locator: CBDB：兄弟 王天爵（126474）之父／母 王廷政
          quotation: null
          interpretation_note: 由兄弟关系推断：王天愛 与 王天爵 为同胞（CBDB 记「兄」），王天爵 之父／母即 王天愛 之父／母。
          source:
            id: s_b88ZbSjufEIIIuZ08GY6gO
            source_type: api_record
            title: 中国历代人物传记资料库：王天愛（CBDB 324347）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324347&o=json
            external_identifier: CBDB:324347
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PYcBXQvYgRSYLrryMvEQY7
        status: active
        display_name: 王天愛
        merged_into_person_id: null
    - claim:
        id: c_oXroi0IAuwBw94CKbCB383
        subject_person_id: p_BZ632SwpqzGW4p9bQ7s6FS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gYH3kHwQzEkZsr5ZA1f5qQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OPhVaSY_ExTJheKTAXQnsP
          claim_id: c_oXroi0IAuwBw94CKbCB383
          source_id: s__ynHeNBiv4PPTUUDiXF3xW
          stance: supports
          locator: CBDB：兄弟 王天爵（126474）之父／母 王廷政
          quotation: null
          interpretation_note: 由兄弟关系推断：王天舜 与 王天爵 为同胞（CBDB 记「兄」），王天爵 之父／母即 王天舜 之父／母。
          source:
            id: s__ynHeNBiv4PPTUUDiXF3xW
            source_type: api_record
            title: 中国历代人物传记资料库：王天舜（CBDB 324345）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324345&o=json
            external_identifier: CBDB:324345
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gYH3kHwQzEkZsr5ZA1f5qQ
        status: active
        display_name: 王天舜
        merged_into_person_id: null
    - claim:
        id: c_atBeAemL96bHMauG_09vqo
        subject_person_id: p_BZ632SwpqzGW4p9bQ7s6FS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_yVir1QxzvFAgXhScoEMuq4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qUL7dzOiq6N9rbrw46WRbl
          claim_id: c_atBeAemL96bHMauG_09vqo
          source_id: s_0ElxeHZT3NaDXsOJt-iX7g
          stance: supports
          locator: CBDB：兄弟 王天爵（126474）之父／母 王廷政
          quotation: null
          interpretation_note: 由兄弟关系推断：王天孚 与 王天爵 为同胞（CBDB 记「兄」），王天爵 之父／母即 王天孚 之父／母。
          source:
            id: s_0ElxeHZT3NaDXsOJt-iX7g
            source_type: api_record
            title: 中国历代人物传记资料库：王天孚（CBDB 324346）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324346&o=json
            external_identifier: CBDB:324346
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yVir1QxzvFAgXhScoEMuq4
        status: active
        display_name: 王天孚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王廷政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王廷政，明人物。嘉靖三十八年進士，籍贯歙縣。（中国历代人物传记资料库 CBDB 324338） | accepted |
| name.primary | 王廷政 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_SVNZL8P3EB13LuNV5sxppY | 王天爵 | accepted |
| children | p_PYcBXQvYgRSYLrryMvEQY7 | 王天愛 | accepted |
| children | p_gYH3kHwQzEkZsr5ZA1f5qQ | 王天舜 | accepted |
| children | p_yVir1QxzvFAgXhScoEMuq4 | 王天孚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王天愛（CBDB 324347）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324347&o=json)
- [中国历代人物传记资料库：王天孚（CBDB 324346）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324346&o=json)
- [中国历代人物传记资料库：王天舜（CBDB 324345）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324345&o=json)
- [中国历代人物传记资料库：王廷政（CBDB 324338）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=324338&o=json)
