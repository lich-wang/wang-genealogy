---
schema: wang-person/v1
id: p_Xfq2hzbf2P25NMCS4qwtRa
status: active
merged_into: null
display_name: 王麟
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E8wDZW7rmaMMBVDx3akLLg
        subject_person_id: p_Xfq2hzbf2P25NMCS4qwtRa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8eYQuLqXj7VwXzdGxg8cx8
          claim_id: c_E8wDZW7rmaMMBVDx3akLLg
          source_id: s_xXyMAt3S9zVZQv7gwo4gF1
          stance: supports
          locator: CBDB:210611
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（210611）
          source: &a1
            id: s_xXyMAt3S9zVZQv7gwo4gF1
            source_type: api_record
            title: 中国历代人物传记资料库：王麟（CBDB 210611）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210611&o=json
            external_identifier: CBDB:210611
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.009Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gat3qBV7MyzznQC4aBMNGq
        subject_person_id: p_Xfq2hzbf2P25NMCS4qwtRa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟，明人物。隆慶五年進士，籍贯壽陽，曾任省祭官。（中国历代人物传记资料库 CBDB 210611）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__FRgHTBeEWge7ooQHxzCat
          claim_id: c_gat3qBV7MyzznQC4aBMNGq
          source_id: s_xXyMAt3S9zVZQv7gwo4gF1
          stance: supports
          locator: CBDB:210611
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_OD8V2ER5KNqDRSh3_ENyIN
        subject_person_id: p_Xfq2hzbf2P25NMCS4qwtRa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TFTLmHU5uD9CZvePXzWQV6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vrCeOayqxBRdvIUOH7ODHP
          claim_id: c_OD8V2ER5KNqDRSh3_ENyIN
          source_id: s_xXyMAt3S9zVZQv7gwo4gF1
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第一百六十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TFTLmHU5uD9CZvePXzWQV6
        status: active
        display_name: 王來聘
        merged_into_person_id: null
    - claim:
        id: c_vrAmVqms3gcmsMFz0rwKhw
        subject_person_id: p_Xfq2hzbf2P25NMCS4qwtRa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AFWocmj236p1w3L2WGr2P6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rywQdsJVJwMw_7n3_Zm1xl
          claim_id: c_vrAmVqms3gcmsMFz0rwKhw
          source_id: s_2D3R0sEbS_EMV6Fpl1Jm63
          stance: supports
          locator: CBDB：兄弟 王來聘（205915）之父／母 王麟
          quotation: null
          interpretation_note: 由兄弟关系推断：王來召 与 王來聘 为同胞（CBDB 记「兄」），王來聘 之父／母即 王來召 之父／母。
          source:
            id: s_2D3R0sEbS_EMV6Fpl1Jm63
            source_type: api_record
            title: 中国历代人物传记资料库：王來召（CBDB 210618）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210618&o=json
            external_identifier: CBDB:210618
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AFWocmj236p1w3L2WGr2P6
        status: active
        display_name: 王來召
        merged_into_person_id: null
    - claim:
        id: c_9bFP29iluQiqrfZkykp3eo
        subject_person_id: p_Xfq2hzbf2P25NMCS4qwtRa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HrkkgqQR2n2D5BStWXVbwx
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_es2ZhXc44EI0iSYJPSlvqI
          claim_id: c_9bFP29iluQiqrfZkykp3eo
          source_id: s_dCEflOvvJXHyYbDzZpWSo4
          stance: supports
          locator: CBDB：兄弟 王來聘（205915）之父／母 王麟
          quotation: null
          interpretation_note: 由兄弟关系推断：王來問 与 王來聘 为同胞（CBDB 记「兄」），王來聘 之父／母即 王來問 之父／母。
          source:
            id: s_dCEflOvvJXHyYbDzZpWSo4
            source_type: api_record
            title: 中国历代人物传记资料库：王來問（CBDB 210619）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210619&o=json
            external_identifier: CBDB:210619
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HrkkgqQR2n2D5BStWXVbwx
        status: active
        display_name: 王來問
        merged_into_person_id: null
    - claim:
        id: c_PWQ2rf51tmTETnRtYRIx4c
        subject_person_id: p_Xfq2hzbf2P25NMCS4qwtRa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_V8Bimj2LPstYmGbjxVkHuP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UpuArgs_cakb4MX64iKv6Y
          claim_id: c_PWQ2rf51tmTETnRtYRIx4c
          source_id: s_yfoPQD_Bp_RUXdRCpuzLL2
          stance: supports
          locator: CBDB：兄弟 王來聘（205915）之父／母 王麟
          quotation: null
          interpretation_note: 由兄弟关系推断：王來賓 与 王來聘 为同胞（CBDB 记「兄」），王來聘 之父／母即 王來賓 之父／母。
          source:
            id: s_yfoPQD_Bp_RUXdRCpuzLL2
            source_type: api_record
            title: 中国历代人物传记资料库：王來賓（CBDB 210617）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210617&o=json
            external_identifier: CBDB:210617
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_V8Bimj2LPstYmGbjxVkHuP
        status: active
        display_name: 王來賓
        merged_into_person_id: null
    - claim:
        id: c_mSex6GPZVIvJh_m63B5tF8
        subject_person_id: p_Xfq2hzbf2P25NMCS4qwtRa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VcoKtGbJVuYrZAZWcmUgkt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QBFtC4PwkvXi6J1yADkQBU
          claim_id: c_mSex6GPZVIvJh_m63B5tF8
          source_id: s_3IyX4cZNPkEKW8bjg-D7ut
          stance: supports
          locator: CBDB：兄弟 王來聘（205915）之父／母 王麟
          quotation: null
          interpretation_note: 由兄弟关系推断：王來薦 与 王來聘 为同胞（CBDB 记「兄」），王來聘 之父／母即 王來薦 之父／母。
          source:
            id: s_3IyX4cZNPkEKW8bjg-D7ut
            source_type: api_record
            title: 中国历代人物传记资料库：王來薦（CBDB 210620）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210620&o=json
            external_identifier: CBDB:210620
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VcoKtGbJVuYrZAZWcmUgkt
        status: active
        display_name: 王來薦
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王麟 | accepted |
| bio.summary | 王麟，明人物。隆慶五年進士，籍贯壽陽，曾任省祭官。（中国历代人物传记资料库 CBDB 210611） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_TFTLmHU5uD9CZvePXzWQV6 | 王來聘 | accepted |
| children | p_AFWocmj236p1w3L2WGr2P6 | 王來召 | accepted |
| children | p_HrkkgqQR2n2D5BStWXVbwx | 王來問 | accepted |
| children | p_V8Bimj2LPstYmGbjxVkHuP | 王來賓 | accepted |
| children | p_VcoKtGbJVuYrZAZWcmUgkt | 王來薦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王來賓（CBDB 210617）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210617&o=json)
- [中国历代人物传记资料库：王來薦（CBDB 210620）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210620&o=json)
- [中国历代人物传记资料库：王來問（CBDB 210619）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210619&o=json)
- [中国历代人物传记资料库：王來召（CBDB 210618）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210618&o=json)
- [中国历代人物传记资料库：王麟（CBDB 210611）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210611&o=json)
