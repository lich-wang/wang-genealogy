---
schema: wang-person/v1
id: p_kYENZDMXi8nnyQf82XCyE9
status: active
merged_into: null
display_name: 王泰
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hvjLRaZiZGyd6JZBv256k2
        subject_person_id: p_kYENZDMXi8nnyQf82XCyE9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GFEPcm976sjG8QK45Ct54t
          claim_id: c_hvjLRaZiZGyd6JZBv256k2
          source_id: s_u5j1DMWS1kNpwAKhMjnXQa
          stance: supports
          locator: CBDB:318570
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318570）
          source: &a1
            id: s_u5j1DMWS1kNpwAKhMjnXQa
            source_type: api_record
            title: 中国历代人物传记资料库：王泰（CBDB 318570）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318570&o=json
            external_identifier: CBDB:318570
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.005Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Xyu8EHQ8YMetKdwUV7KjWi
        subject_person_id: p_kYENZDMXi8nnyQf82XCyE9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泰，明人物。嘉靖三十二年進士，籍贯保安。（中国历代人物传记资料库 CBDB 318570）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_I1WZSq3Ij2IRzUj_v2MpWr
          claim_id: c_Xyu8EHQ8YMetKdwUV7KjWi
          source_id: s_u5j1DMWS1kNpwAKhMjnXQa
          stance: supports
          locator: CBDB:318570
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_lJ3QDBxUVMuGnS7i1027-2
        subject_person_id: p_3dg1PVXVExHpSS6KGA8n5K
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kYENZDMXi8nnyQf82XCyE9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LKRZTWjWcirxaFufxQJXLe
          claim_id: c_lJ3QDBxUVMuGnS7i1027-2
          source_id: s__mvvo1eztM0gW8m7WcDc4y
          stance: supports
          locator: CBDB：兄弟 王大任（204398）之父／母 王熙
          quotation: null
          interpretation_note: 由兄弟关系推断：王泰 与 王大任 为同胞（CBDB 记「弟」），王大任 之父／母即 王泰 之父／母。
          source:
            id: s__mvvo1eztM0gW8m7WcDc4y
            source_type: api_record
            title: 中国历代人物传记资料库：王泰（CBDB 318570）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318570&o=json
            external_identifier: CBDB:318570
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3dg1PVXVExHpSS6KGA8n5K
        status: active
        display_name: 王熙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_eaoagzGMEeAMwJKkSiu5qg
        subject_person_id: p_iJvJfwUqKTgqcKUSXQkKTK
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kYENZDMXi8nnyQf82XCyE9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4DtjmXWCCZjZFiGY_tpfP2
          claim_id: c_eaoagzGMEeAMwJKkSiu5qg
          source_id: s__mvvo1eztM0gW8m7WcDc4y
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204398 王大任）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__mvvo1eztM0gW8m7WcDc4y
            source_type: api_record
            title: 中国历代人物传记资料库：王泰（CBDB 318570）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318570&o=json
            external_identifier: CBDB:318570
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iJvJfwUqKTgqcKUSXQkKTK
        status: active
        display_name: 王大任
        merged_into_person_id: null
---

# 王泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王泰 | accepted |
| bio.summary | 王泰，明人物。嘉靖三十二年進士，籍贯保安。（中国历代人物传记资料库 CBDB 318570） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3dg1PVXVExHpSS6KGA8n5K | 王熙 | accepted |
| other | p_iJvJfwUqKTgqcKUSXQkKTK | 王大任 | accepted |

## 外部来源

- [中国历代人物传记资料库：王泰（CBDB 318570）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318570&o=json)
