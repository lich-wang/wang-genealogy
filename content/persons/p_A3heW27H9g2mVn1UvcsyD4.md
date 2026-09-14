---
schema: wang-person/v1
id: p_A3heW27H9g2mVn1UvcsyD4
status: active
merged_into: null
display_name: 王時佐
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TJQ8uxA6BwR69FQcG9CoMv
        subject_person_id: p_A3heW27H9g2mVn1UvcsyD4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UU4wQKkV1rTbqJueBL4hBU
          claim_id: c_TJQ8uxA6BwR69FQcG9CoMv
          source_id: s_7tAA1KTugFjJh6gC8Msmfe
          stance: supports
          locator: CBDB:256026
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（256026）
          source: &a1
            id: s_7tAA1KTugFjJh6gC8Msmfe
            source_type: api_record
            title: 中国历代人物传记资料库：王時佐（CBDB 256026）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256026&o=json
            external_identifier: CBDB:256026
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.374Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r5dNUe1NdKgsJP9FLXf8iQ
        subject_person_id: p_A3heW27H9g2mVn1UvcsyD4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王時佐，明人物。成化十七年進士，籍贯長垣，曾任推官。（中国历代人物传记资料库 CBDB 256026）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6om1FfatX40cdqK_K9u5Ri
          claim_id: c_r5dNUe1NdKgsJP9FLXf8iQ
          source_id: s_7tAA1KTugFjJh6gC8Msmfe
          stance: supports
          locator: CBDB:256026
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_JV1TiK-VwWtioqf-V-Prhp
        subject_person_id: p_A3heW27H9g2mVn1UvcsyD4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Q746PBZNycHf9YN5GVT1MS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rJI0fIZSIgdgGgMaOCxwNZ
          claim_id: c_JV1TiK-VwWtioqf-V-Prhp
          source_id: s_7tAA1KTugFjJh6gC8Msmfe
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第四十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Q746PBZNycHf9YN5GVT1MS
        status: active
        display_name: 王璇
        merged_into_person_id: null
    - claim:
        id: c_y5-0aZhEZsyCHgDI1g-iEL
        subject_person_id: p_A3heW27H9g2mVn1UvcsyD4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C1SCaHqUKRC2S2QYGHZKFq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zZur1QRfQI9_GWWo_GIic-
          claim_id: c_y5-0aZhEZsyCHgDI1g-iEL
          source_id: s_3GLicWXWe6-BYR0ywTDgJ6
          stance: supports
          locator: CBDB：兄弟 王璇（200297）之父／母 王時佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王璡 与 王璇 为同胞（CBDB 记「兄」），王璇 之父／母即 王璡 之父／母。
          source:
            id: s_3GLicWXWe6-BYR0ywTDgJ6
            source_type: api_record
            title: 中国历代人物传记资料库：王璡（CBDB 256032）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256032&o=json
            external_identifier: CBDB:256032
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_C1SCaHqUKRC2S2QYGHZKFq
        status: active
        display_name: 王璡
        merged_into_person_id: null
    - claim:
        id: c_gZ9mhbRLah8YzwkvUcEdTO
        subject_person_id: p_A3heW27H9g2mVn1UvcsyD4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FDD1rKLJcaD63N9u1W33MZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K9SRr8azVGekVr7FQNzdWB
          claim_id: c_gZ9mhbRLah8YzwkvUcEdTO
          source_id: s_5mJ_mUXkgVPwnJ2UZ5HjmH
          stance: supports
          locator: CBDB：兄弟 王璇（200297）之父／母 王時佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王璽 与 王璇 为同胞（CBDB 记「弟」），王璇 之父／母即 王璽 之父／母。
          source:
            id: s_5mJ_mUXkgVPwnJ2UZ5HjmH
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 256029）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256029&o=json
            external_identifier: CBDB:256029
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FDD1rKLJcaD63N9u1W33MZ
        status: active
        display_name: 王璽
        merged_into_person_id: null
    - claim:
        id: c_uDGNerbYuLNK_D5GJT1FEw
        subject_person_id: p_A3heW27H9g2mVn1UvcsyD4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nPX4pESNvDbTkhUGiuxRin
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rCixTJBLT6xgl4JqvOYx72
          claim_id: c_uDGNerbYuLNK_D5GJT1FEw
          source_id: s_kzpBCBsq-gw2bkmslcSb4N
          stance: supports
          locator: CBDB：兄弟 王璇（200297）之父／母 王時佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑀 与 王璇 为同胞（CBDB 记「弟」），王璇 之父／母即 王瑀 之父／母。
          source:
            id: s_kzpBCBsq-gw2bkmslcSb4N
            source_type: api_record
            title: 中国历代人物传记资料库：王瑀（CBDB 256031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256031&o=json
            external_identifier: CBDB:256031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nPX4pESNvDbTkhUGiuxRin
        status: active
        display_name: 王瑀
        merged_into_person_id: null
    - claim:
        id: c_AVni6fbWhwpwDg06pif_6h
        subject_person_id: p_A3heW27H9g2mVn1UvcsyD4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pJ2QPSMCenPvGoQ2CpyCQD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DYL-dXNqzEpykEE_KbgEQx
          claim_id: c_AVni6fbWhwpwDg06pif_6h
          source_id: s_XRoSuPi4B0AqhPcOn-3E6q
          stance: supports
          locator: CBDB：兄弟 王璇（200297）之父／母 王時佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王琦 与 王璇 为同胞（CBDB 记「弟」），王璇 之父／母即 王琦 之父／母。
          source:
            id: s_XRoSuPi4B0AqhPcOn-3E6q
            source_type: api_record
            title: 中国历代人物传记资料库：王琦（CBDB 256030）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256030&o=json
            external_identifier: CBDB:256030
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pJ2QPSMCenPvGoQ2CpyCQD
        status: active
        display_name: 王琦
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王時佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王時佐 | accepted |
| bio.summary | 王時佐，明人物。成化十七年進士，籍贯長垣，曾任推官。（中国历代人物传记资料库 CBDB 256026） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_Q746PBZNycHf9YN5GVT1MS | 王璇 | accepted |
| children | p_C1SCaHqUKRC2S2QYGHZKFq | 王璡 | accepted |
| children | p_FDD1rKLJcaD63N9u1W33MZ | 王璽 | accepted |
| children | p_nPX4pESNvDbTkhUGiuxRin | 王瑀 | accepted |
| children | p_pJ2QPSMCenPvGoQ2CpyCQD | 王琦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璡（CBDB 256032）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256032&o=json)
- [中国历代人物传记资料库：王琦（CBDB 256030）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256030&o=json)
- [中国历代人物传记资料库：王時佐（CBDB 256026）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256026&o=json)
- [中国历代人物传记资料库：王璽（CBDB 256029）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256029&o=json)
- [中国历代人物传记资料库：王瑀（CBDB 256031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256031&o=json)
