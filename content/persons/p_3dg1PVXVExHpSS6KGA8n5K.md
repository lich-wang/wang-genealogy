---
schema: wang-person/v1
id: p_3dg1PVXVExHpSS6KGA8n5K
status: active
merged_into: null
display_name: 王熙
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DjDfAruvyQDojYYgVXRKA9
        subject_person_id: p_3dg1PVXVExHpSS6KGA8n5K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王熙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jjvFccZjj6KJxjQEGki6Tq
          claim_id: c_DjDfAruvyQDojYYgVXRKA9
          source_id: s_VvDkjy8KZNht3SQ24zKw63
          stance: supports
          locator: CBDB:318564
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318564）
          source: &a1
            id: s_VvDkjy8KZNht3SQ24zKw63
            source_type: api_record
            title: 中国历代人物传记资料库：王熙（CBDB 318564）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318564&o=json
            external_identifier: CBDB:318564
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.003Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EYWcqbKqMcgKPxYj32rSVC
        subject_person_id: p_3dg1PVXVExHpSS6KGA8n5K
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王熙，明人物。嘉靖三十二年進士，籍贯保安。（中国历代人物传记资料库 CBDB 318564）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MlKvFI_oZAD1YW3SEMituO
          claim_id: c_EYWcqbKqMcgKPxYj32rSVC
          source_id: s_VvDkjy8KZNht3SQ24zKw63
          stance: supports
          locator: CBDB:318564
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_-lRnvZ1KMTFSk9sIbwQbus
        subject_person_id: p_3dg1PVXVExHpSS6KGA8n5K
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iJvJfwUqKTgqcKUSXQkKTK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xj1uF6lxqfULraPhl0HB-O
          claim_id: c_-lRnvZ1KMTFSk9sIbwQbus
          source_id: s_VvDkjy8KZNht3SQ24zKw63
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二百五十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_iJvJfwUqKTgqcKUSXQkKTK
        status: active
        display_name: 王大任
        merged_into_person_id: null
    - claim:
        id: c_t_HOC0cOXosakxYi9Cnt-X
        subject_person_id: p_3dg1PVXVExHpSS6KGA8n5K
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NANxhnK8tTQGTMb3bYx25V
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bUzjPWoBmV5nuWZ3WBtHwj
          claim_id: c_t_HOC0cOXosakxYi9Cnt-X
          source_id: s_TcCUGfTWGyj4Mh0ALAg9jF
          stance: supports
          locator: CBDB：兄弟 王大任（204398）之父／母 王熙
          quotation: null
          interpretation_note: 由兄弟关系推断：王康 与 王大任 为同胞（CBDB 记「弟」），王大任 之父／母即 王康 之父／母。
          source:
            id: s_TcCUGfTWGyj4Mh0ALAg9jF
            source_type: api_record
            title: 中国历代人物传记资料库：王康（CBDB 318569）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318569&o=json
            external_identifier: CBDB:318569
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NANxhnK8tTQGTMb3bYx25V
        status: active
        display_name: 王康
        merged_into_person_id: null
    - claim:
        id: c_gdnHODi3T8V44tEsAWRJqe
        subject_person_id: p_3dg1PVXVExHpSS6KGA8n5K
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jXoA5vqca6QvZNPdyA5uvk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SSVznxIVY587Jmz7vn_gja
          claim_id: c_gdnHODi3T8V44tEsAWRJqe
          source_id: s_4kCjmQ7eODc5Qj0xRD7SB5
          stance: supports
          locator: CBDB：兄弟 王大任（204398）之父／母 王熙
          quotation: null
          interpretation_note: 由兄弟关系推断：王綏 与 王大任 为同胞（CBDB 记「弟」），王大任 之父／母即 王綏 之父／母。
          source:
            id: s_4kCjmQ7eODc5Qj0xRD7SB5
            source_type: api_record
            title: 中国历代人物传记资料库：王綏（CBDB 318571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318571&o=json
            external_identifier: CBDB:318571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jXoA5vqca6QvZNPdyA5uvk
        status: active
        display_name: 王綏
        merged_into_person_id: null
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
        id: p_kYENZDMXi8nnyQf82XCyE9
        status: active
        display_name: 王泰
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王熙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王熙 | accepted |
| bio.summary | 王熙，明人物。嘉靖三十二年進士，籍贯保安。（中国历代人物传记资料库 CBDB 318564） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_iJvJfwUqKTgqcKUSXQkKTK | 王大任 | accepted |
| children | p_NANxhnK8tTQGTMb3bYx25V | 王康 | accepted |
| children | p_jXoA5vqca6QvZNPdyA5uvk | 王綏 | accepted |
| children | p_kYENZDMXi8nnyQf82XCyE9 | 王泰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王康（CBDB 318569）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318569&o=json)
- [中国历代人物传记资料库：王綏（CBDB 318571）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318571&o=json)
- [中国历代人物传记资料库：王泰（CBDB 318570）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318570&o=json)
- [中国历代人物传记资料库：王熙（CBDB 318564）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318564&o=json)
