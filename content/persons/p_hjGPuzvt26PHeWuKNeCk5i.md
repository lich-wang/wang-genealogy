---
schema: wang-person/v1
id: p_hjGPuzvt26PHeWuKNeCk5i
status: active
merged_into: null
display_name: 王文勤
cbdb_id: 300172
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i8cwQLB9aJP4VhDhGmaAoo
        subject_person_id: p_hjGPuzvt26PHeWuKNeCk5i
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文勤，明人物。嘉靖十七年進士，籍贯南充。（中国历代人物传记资料库 CBDB 300172）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_NZirr2JjfRn9vWAOLGL0OL
          claim_id: c_i8cwQLB9aJP4VhDhGmaAoo
          source_id: s_CKTjFLsiwBoCjKTLJPB3Lw
          stance: supports
          locator: CBDB:300172
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_CKTjFLsiwBoCjKTLJPB3Lw
            source_type: api_record
            title: 中国历代人物传记资料库：王文勤（CBDB 300172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300172&o=json
            external_identifier: CBDB:300172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1PYFLGa2ecRVFDCeL19J1M
        subject_person_id: p_hjGPuzvt26PHeWuKNeCk5i
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文勤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FHRgfsqaMUEBhc4C716DqM
          claim_id: c_1PYFLGa2ecRVFDCeL19J1M
          source_id: s_CKTjFLsiwBoCjKTLJPB3Lw
          stance: supports
          locator: CBDB:300172
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Fs_LeoaSVuJfnbPzp9SG5n
        subject_person_id: p_t5Pa7BDdJtGhQZXGCYrN2e
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hjGPuzvt26PHeWuKNeCk5i
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1K4y32cD9SOSsDNZw0SACS
          claim_id: c_Fs_LeoaSVuJfnbPzp9SG5n
          source_id: s_3VW0TdTY33ec-EOxLYO0eU
          stance: supports
          locator: CBDB：兄弟 王之臣（203124）之父／母 王棟
          quotation: null
          interpretation_note: 由兄弟关系推断：王文勤 与 王之臣 为同胞（CBDB 记「弟」），王之臣 之父／母即 王文勤 之父／母。
          source:
            id: s_3VW0TdTY33ec-EOxLYO0eU
            source_type: api_record
            title: 中国历代人物传记资料库：王文勤（CBDB 300172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300172&o=json
            external_identifier: CBDB:300172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_t5Pa7BDdJtGhQZXGCYrN2e
        status: active
        display_name: 王棟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Vh4dJc1WIk6k_1y3BVDIL5
        subject_person_id: p_fYsU7A3SFMfzEtkjj2jnfk
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hjGPuzvt26PHeWuKNeCk5i
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DJ64R90krg7s3NscH4XDpk
          claim_id: c_Vh4dJc1WIk6k_1y3BVDIL5
          source_id: s_3VW0TdTY33ec-EOxLYO0eU
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203124 王之臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3VW0TdTY33ec-EOxLYO0eU
            source_type: api_record
            title: 中国历代人物传记资料库：王文勤（CBDB 300172）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300172&o=json
            external_identifier: CBDB:300172
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fYsU7A3SFMfzEtkjj2jnfk
        status: active
        display_name: 王之臣
        merged_into_person_id: null
---

# 王文勤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王文勤，明人物。嘉靖十七年進士，籍贯南充。（中国历代人物传记资料库 CBDB 300172） | accepted |
| name.primary | 王文勤 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_t5Pa7BDdJtGhQZXGCYrN2e | 王棟 | accepted |
| other | p_fYsU7A3SFMfzEtkjj2jnfk | 王之臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文勤（CBDB 300172）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=300172&o=json)
