---
schema: wang-person/v1
id: p_NpyCf5W5QfEUuJVcAPTPqZ
status: active
merged_into: null
display_name: 王幹
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Bps6mhgGZoAwtaDXhcUH35
        subject_person_id: p_NpyCf5W5QfEUuJVcAPTPqZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王幹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JqaJHuCt7GpTjA8AK3MoPh
          claim_id: c_Bps6mhgGZoAwtaDXhcUH35
          source_id: s_p72NQewwBZt2YB65MXFGF6
          stance: supports
          locator: CBDB:244695
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（244695）
          source: &a1
            id: s_p72NQewwBZt2YB65MXFGF6
            source_type: api_record
            title: 中国历代人物传记资料库：王幹（CBDB 244695）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244695&o=json
            external_identifier: CBDB:244695
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.036Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HV8c89K9gRppBSTHc9dngo
        subject_person_id: p_NpyCf5W5QfEUuJVcAPTPqZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王幹，明人物。成化五年進士，籍贯鹽山。（中国历代人物传记资料库 CBDB 244695）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1L5aamViqK0crDoGG7PriZ
          claim_id: c_HV8c89K9gRppBSTHc9dngo
          source_id: s_p72NQewwBZt2YB65MXFGF6
          stance: supports
          locator: CBDB:244695
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_URIAKWPjdq3eJREjBEejro
        subject_person_id: p_NpyCf5W5QfEUuJVcAPTPqZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3oKFdGHi8BKifcXxMMERFS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_noYnxOsi-xeVj62Zmsdige
          claim_id: c_URIAKWPjdq3eJREjBEejro
          source_id: s_xwLUvCYcBcqNBGD8AW62Dj
          stance: supports
          locator: 成化五年進士登科錄:一卷，第三甲第一百三十五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xwLUvCYcBcqNBGD8AW62Dj
            source_type: api_record
            title: 中国历代人物传记资料库：王玹（CBDB 126600）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126600&o=json
            external_identifier: CBDB:126600
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.049Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3oKFdGHi8BKifcXxMMERFS
        status: active
        display_name: 王玹
        merged_into_person_id: null
    - claim:
        id: c_HWiVD_d4-va8qv9wSRCLnB
        subject_person_id: p_NpyCf5W5QfEUuJVcAPTPqZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NpdkdEmAFR4uKTD4g6Qb8L
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_STVTHmdu6a6BjDzjAZDgzx
          claim_id: c_HWiVD_d4-va8qv9wSRCLnB
          source_id: s_GCP2n8cgjWu01t1uRbUKP-
          stance: supports
          locator: CBDB：兄弟 王玹（126600）之父／母 王幹
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑤 与 王玹 为同胞（CBDB 记「兄」），王玹 之父／母即 王瑤 之父／母。
          source:
            id: s_GCP2n8cgjWu01t1uRbUKP-
            source_type: api_record
            title: 中国历代人物传记资料库：王瑤（CBDB 244702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244702&o=json
            external_identifier: CBDB:244702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NpdkdEmAFR4uKTD4g6Qb8L
        status: active
        display_name: 王瑤
        merged_into_person_id: null
    - claim:
        id: c_oQenQEJU7Wv9FvLRPsZBT6
        subject_person_id: p_NpyCf5W5QfEUuJVcAPTPqZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iD1eJdJgU3JwR1ZJai5CND
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jxTt6hvuYQfmnF1Yiw22BE
          claim_id: c_oQenQEJU7Wv9FvLRPsZBT6
          source_id: s_gDFhL-rG9kmPNycIIw2gMB
          stance: supports
          locator: CBDB：兄弟 王玹（126600）之父／母 王幹
          quotation: null
          interpretation_note: 由兄弟关系推断：王瓊 与 王玹 为同胞（CBDB 记「兄」），王玹 之父／母即 王瓊 之父／母。
          source:
            id: s_gDFhL-rG9kmPNycIIw2gMB
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊（CBDB 244701）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244701&o=json
            external_identifier: CBDB:244701
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iD1eJdJgU3JwR1ZJai5CND
        status: active
        display_name: 王瓊
        merged_into_person_id: null
    - claim:
        id: c_JYETkz_hjHOiB6gvLUNamR
        subject_person_id: p_NpyCf5W5QfEUuJVcAPTPqZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_snYzLNGdke6etTGK3ye7s6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iq9RG5XaVKawMQ8o3vVyy8
          claim_id: c_JYETkz_hjHOiB6gvLUNamR
          source_id: s_zrdcQQwtO4W8f-VbTuIK9V
          stance: supports
          locator: CBDB：兄弟 王玹（126600）之父／母 王幹
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑞 与 王玹 为同胞（CBDB 记「兄」），王玹 之父／母即 王瑞 之父／母。
          source:
            id: s_zrdcQQwtO4W8f-VbTuIK9V
            source_type: api_record
            title: 中国历代人物传记资料库：王瑞（CBDB 244700）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244700&o=json
            external_identifier: CBDB:244700
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_snYzLNGdke6etTGK3ye7s6
        status: active
        display_name: 王瑞
        merged_into_person_id: null
    - claim:
        id: c_CAhGl2ZL171JwT_SP14r90
        subject_person_id: p_NpyCf5W5QfEUuJVcAPTPqZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uAY352QHQTuLgpQWQyqieh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cXc-eTTan9K2W7s9HFL6F3
          claim_id: c_CAhGl2ZL171JwT_SP14r90
          source_id: s_KhQshS2qmu58c7XsBgU1Un
          stance: supports
          locator: CBDB：兄弟 王玹（126600）之父／母 王幹
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑀 与 王玹 为同胞（CBDB 记「兄」），王玹 之父／母即 王瑀 之父／母。
          source:
            id: s_KhQshS2qmu58c7XsBgU1Un
            source_type: api_record
            title: 中国历代人物传记资料库：王瑀（CBDB 244699）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244699&o=json
            external_identifier: CBDB:244699
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uAY352QHQTuLgpQWQyqieh
        status: active
        display_name: 王瑀
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王幹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王幹 | accepted |
| bio.summary | 王幹，明人物。成化五年進士，籍贯鹽山。（中国历代人物传记资料库 CBDB 244695） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_3oKFdGHi8BKifcXxMMERFS | 王玹 | accepted |
| children | p_NpdkdEmAFR4uKTD4g6Qb8L | 王瑤 | accepted |
| children | p_iD1eJdJgU3JwR1ZJai5CND | 王瓊 | accepted |
| children | p_snYzLNGdke6etTGK3ye7s6 | 王瑞 | accepted |
| children | p_uAY352QHQTuLgpQWQyqieh | 王瑀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王幹（CBDB 244695）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244695&o=json)
- [中国历代人物传记资料库：王瓊（CBDB 244701）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244701&o=json)
- [中国历代人物传记资料库：王瑞（CBDB 244700）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244700&o=json)
- [中国历代人物传记资料库：王玹（CBDB 126600）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126600&o=json)
- [中国历代人物传记资料库：王瑤（CBDB 244702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244702&o=json)
- [中国历代人物传记资料库：王瑀（CBDB 244699）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=244699&o=json)
