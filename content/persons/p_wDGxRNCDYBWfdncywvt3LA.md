---
schema: wang-person/v1
id: p_wDGxRNCDYBWfdncywvt3LA
status: active
merged_into: null
display_name: 王寧
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B34scvTK5MNwhoEmH8mj2J
        subject_person_id: p_wDGxRNCDYBWfdncywvt3LA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H2gdvJpNzpe9JKX1BMpe4D
          claim_id: c_B34scvTK5MNwhoEmH8mj2J
          source_id: s_LzTNeRjVVY8MNXtJ8Vn5SA
          stance: supports
          locator: CBDB:240509
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（240509）
          source: &a1
            id: s_LzTNeRjVVY8MNXtJ8Vn5SA
            source_type: api_record
            title: 中国历代人物传记资料库：王寧（CBDB 240509）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240509&o=json
            external_identifier: CBDB:240509
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.918Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AxzgqoTKGZPj5QnbBv16uq
        subject_person_id: p_wDGxRNCDYBWfdncywvt3LA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寧，明人物。成化二年進士，籍贯閩縣。（中国历代人物传记资料库 CBDB 240509）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9d4cDDckE13lAM39lTXeoL
          claim_id: c_AxzgqoTKGZPj5QnbBv16uq
          source_id: s_LzTNeRjVVY8MNXtJ8Vn5SA
          stance: supports
          locator: CBDB:240509
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_su1i1NULZXUsuG6jToQH1o
        subject_person_id: p_wDGxRNCDYBWfdncywvt3LA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kPeA425yX1vHGJ6NED9rRs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Wy9Lo-6AyAZUAHe66aIpqG
          claim_id: c_su1i1NULZXUsuG6jToQH1o
          source_id: s_LzTNeRjVVY8MNXtJ8Vn5SA
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第一百一十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kPeA425yX1vHGJ6NED9rRs
        status: active
        display_name: 王俊
        merged_into_person_id: null
    - claim:
        id: c_5K2bx13V_WnWiy3jM8t1h2
        subject_person_id: p_wDGxRNCDYBWfdncywvt3LA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AaKg1Vq75C44DwYEMzzXhb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CQGuVbHu_TZOeATsjmZsC2
          claim_id: c_5K2bx13V_WnWiy3jM8t1h2
          source_id: s_8_fgYvCQSo_nmdG_5NdJD0
          stance: supports
          locator: CBDB：兄弟 王俊（199171）之父／母 王寧
          quotation: null
          interpretation_note: 由兄弟关系推断：王安 与 王俊 为同胞（CBDB 记「弟」），王俊 之父／母即 王安 之父／母。
          source:
            id: s_8_fgYvCQSo_nmdG_5NdJD0
            source_type: api_record
            title: 中国历代人物传记资料库：王安（CBDB 240587）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240587&o=json
            external_identifier: CBDB:240587
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AaKg1Vq75C44DwYEMzzXhb
        status: active
        display_name: 王安
        merged_into_person_id: null
    - claim:
        id: c_cagiLxXqpWcg0FviwAcNys
        subject_person_id: p_wDGxRNCDYBWfdncywvt3LA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Dq57ob6acmoL7bDj2k7d3c
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6fN94RIfzqYmMcAmugdDt0
          claim_id: c_cagiLxXqpWcg0FviwAcNys
          source_id: s_f9qeRT56Mbxsg3nh2ibTmT
          stance: supports
          locator: CBDB：兄弟 王俊（199171）之父／母 王寧
          quotation: null
          interpretation_note: 由兄弟关系推断：王坦 与 王俊 为同胞（CBDB 记「弟」），王俊 之父／母即 王坦 之父／母。
          source:
            id: s_f9qeRT56Mbxsg3nh2ibTmT
            source_type: api_record
            title: 中国历代人物传记资料库：王坦（CBDB 240576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240576&o=json
            external_identifier: CBDB:240576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Dq57ob6acmoL7bDj2k7d3c
        status: active
        display_name: 王坦
        merged_into_person_id: null
    - claim:
        id: c_B3IlUXVs5P6gBKQrxoNmXz
        subject_person_id: p_wDGxRNCDYBWfdncywvt3LA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_grzsYWXe8VFbvp6sPGpP7M
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jrOLqpVZhWmyPjPNSoKaGC
          claim_id: c_B3IlUXVs5P6gBKQrxoNmXz
          source_id: s_eGwrm5wv75xFfRVhUhuVaS
          stance: supports
          locator: CBDB：兄弟 王俊（199171）之父／母 王寧
          quotation: null
          interpretation_note: 由兄弟关系推断：王傑 与 王俊 为同胞（CBDB 记「兄」），王俊 之父／母即 王傑 之父／母。
          source:
            id: s_eGwrm5wv75xFfRVhUhuVaS
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 240598）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240598&o=json
            external_identifier: CBDB:240598
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_grzsYWXe8VFbvp6sPGpP7M
        status: active
        display_name: 王傑
        merged_into_person_id: null
    - claim:
        id: c_ucndUvIQWdgjg8c27S3qoI
        subject_person_id: p_wDGxRNCDYBWfdncywvt3LA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vhDbPxrSCQCMCH7oCENXHS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Gcck0EiJMJPu_QxwFnO8Ql
          claim_id: c_ucndUvIQWdgjg8c27S3qoI
          source_id: s_t9vBVjLOfU6NvVxc_83aIr
          stance: supports
          locator: CBDB：兄弟 王俊（199171）之父／母 王寧
          quotation: null
          interpretation_note: 由兄弟关系推断：王浩 与 王俊 为同胞（CBDB 记「兄」），王俊 之父／母即 王浩 之父／母。
          source:
            id: s_t9vBVjLOfU6NvVxc_83aIr
            source_type: api_record
            title: 中国历代人物传记资料库：王浩（CBDB 240609）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240609&o=json
            external_identifier: CBDB:240609
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_vhDbPxrSCQCMCH7oCENXHS
        status: active
        display_name: 王浩
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寧 | accepted |
| bio.summary | 王寧，明人物。成化二年進士，籍贯閩縣。（中国历代人物传记资料库 CBDB 240509） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_kPeA425yX1vHGJ6NED9rRs | 王俊 | accepted |
| children | p_AaKg1Vq75C44DwYEMzzXhb | 王安 | accepted |
| children | p_Dq57ob6acmoL7bDj2k7d3c | 王坦 | accepted |
| children | p_grzsYWXe8VFbvp6sPGpP7M | 王傑 | accepted |
| children | p_vhDbPxrSCQCMCH7oCENXHS | 王浩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王安（CBDB 240587）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240587&o=json)
- [中国历代人物传记资料库：王浩（CBDB 240609）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240609&o=json)
- [中国历代人物传记资料库：王傑（CBDB 240598）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240598&o=json)
- [中国历代人物传记资料库：王寧（CBDB 240509）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240509&o=json)
- [中国历代人物传记资料库：王坦（CBDB 240576）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240576&o=json)
