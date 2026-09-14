---
schema: wang-person/v1
id: p_PGZtNCp6fX43UKKVunQyUd
status: active
merged_into: null
display_name: 王文奎
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VpXHFHghLc3NSPBwA9JB5F
        subject_person_id: p_PGZtNCp6fX43UKKVunQyUd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文奎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wtKL5fqXvr3vNLHCJ2S9Qk
          claim_id: c_VpXHFHghLc3NSPBwA9JB5F
          source_id: s_BV964iQBH7TApDCebH6cA9
          stance: supports
          locator: CBDB:270229
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（270229）
          source: &a1
            id: s_BV964iQBH7TApDCebH6cA9
            source_type: api_record
            title: 中国历代人物传记资料库：王文奎（CBDB 270229）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270229&o=json
            external_identifier: CBDB:270229
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.825Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7B3APn6n23u1gReRuYRRUG
        subject_person_id: p_PGZtNCp6fX43UKKVunQyUd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文奎，明人物。弘治十五年進士，籍贯黃岡。（中国历代人物传记资料库 CBDB 270229）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_X9VtWfPlp7J4IzWg2o6mpI
          claim_id: c_7B3APn6n23u1gReRuYRRUG
          source_id: s_BV964iQBH7TApDCebH6cA9
          stance: supports
          locator: CBDB:270229
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_YDobhEkkZgVj3ruKmyChBN
        subject_person_id: p_PGZtNCp6fX43UKKVunQyUd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CF5LJP7gMSDjjxZDLTJKd5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TapicYKnDacnd619uoEVqd
          claim_id: c_YDobhEkkZgVj3ruKmyChBN
          source_id: s_8MUgv6sNQt8ThP4q5TJstL
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第四十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8MUgv6sNQt8ThP4q5TJstL
            source_type: api_record
            title: 中国历代人物传记资料库：王濟（CBDB 34667）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34667&o=json
            external_identifier: CBDB:34667
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.091Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CF5LJP7gMSDjjxZDLTJKd5
        status: active
        display_name: 王濟
        merged_into_person_id: null
    - claim:
        id: c_HhEhADgVzcU4-Sig0OYd3p
        subject_person_id: p_PGZtNCp6fX43UKKVunQyUd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4RKyBrxN2M8zWuVNpAHZBn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dTAYQavYO2wl-vrgjvd2ty
          claim_id: c_HhEhADgVzcU4-Sig0OYd3p
          source_id: s_LdDVn5qXiEBiNPKxNmGRKW
          stance: supports
          locator: CBDB：兄弟 王濟（34667）之父／母 王文奎
          quotation: null
          interpretation_note: 由兄弟关系推断：王璉 与 王濟 为同胞（CBDB 记「弟」），王濟 之父／母即 王璉 之父／母。
          source:
            id: s_LdDVn5qXiEBiNPKxNmGRKW
            source_type: api_record
            title: 中国历代人物传记资料库：王璉（CBDB 270234）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270234&o=json
            external_identifier: CBDB:270234
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4RKyBrxN2M8zWuVNpAHZBn
        status: active
        display_name: 王璉
        merged_into_person_id: null
    - claim:
        id: c_QMT45_kRKDQTN9IlErT9ox
        subject_person_id: p_PGZtNCp6fX43UKKVunQyUd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aEF2o7vcG8pL19kp3xYCN2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IW_4nH5GsthNl_mVh1lzpq
          claim_id: c_QMT45_kRKDQTN9IlErT9ox
          source_id: s_KLt9YiZ9wzRjbZR_ImT6ac
          stance: supports
          locator: CBDB：兄弟 王濟（34667）之父／母 王文奎
          quotation: null
          interpretation_note: 由兄弟关系推断：王鳳 与 王濟 为同胞（CBDB 记「弟」），王濟 之父／母即 王鳳 之父／母。
          source:
            id: s_KLt9YiZ9wzRjbZR_ImT6ac
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳（CBDB 270233）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270233&o=json
            external_identifier: CBDB:270233
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aEF2o7vcG8pL19kp3xYCN2
        status: active
        display_name: 王鳳
        merged_into_person_id: null
    - claim:
        id: c_bhga1IUckaXzVmDAQZyVeP
        subject_person_id: p_PGZtNCp6fX43UKKVunQyUd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_j2uDVAJvNRLEZL4VuQR9KA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SXorpMOKb5fjSL6TPlbjFk
          claim_id: c_bhga1IUckaXzVmDAQZyVeP
          source_id: s_oM0L6GM7g6RZIWeB7iHoen
          stance: supports
          locator: CBDB：兄弟 王濟（34667）之父／母 王文奎
          quotation: null
          interpretation_note: 由兄弟关系推断：王麟 与 王濟 为同胞（CBDB 记「弟」），王濟 之父／母即 王麟 之父／母。
          source:
            id: s_oM0L6GM7g6RZIWeB7iHoen
            source_type: api_record
            title: 中国历代人物传记资料库：王麟（CBDB 270232）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270232&o=json
            external_identifier: CBDB:270232
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_j2uDVAJvNRLEZL4VuQR9KA
        status: active
        display_name: 王麟
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王文奎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文奎 | accepted |
| bio.summary | 王文奎，明人物。弘治十五年進士，籍贯黃岡。（中国历代人物传记资料库 CBDB 270229） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_CF5LJP7gMSDjjxZDLTJKd5 | 王濟 | accepted |
| children | p_4RKyBrxN2M8zWuVNpAHZBn | 王璉 | accepted |
| children | p_aEF2o7vcG8pL19kp3xYCN2 | 王鳳 | accepted |
| children | p_j2uDVAJvNRLEZL4VuQR9KA | 王麟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鳳（CBDB 270233）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270233&o=json)
- [中国历代人物传记资料库：王濟（CBDB 34667）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=34667&o=json)
- [中国历代人物传记资料库：王璉（CBDB 270234）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270234&o=json)
- [中国历代人物传记资料库：王麟（CBDB 270232）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270232&o=json)
- [中国历代人物传记资料库：王文奎（CBDB 270229）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270229&o=json)
