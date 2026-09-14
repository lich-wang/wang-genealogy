---
schema: wang-person/v1
id: p_rdQpvSEbMvzFVt6su4bz6E
status: active
merged_into: null
display_name: 王浥
cbdb_id: 301182
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EQSsACkj2w3jZ38yEgEo5Q
        subject_person_id: p_rdQpvSEbMvzFVt6su4bz6E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浥，明人物。嘉靖十七年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 301182）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_LnacAckd3Dwu5r-WK1_XBN
          claim_id: c_EQSsACkj2w3jZ38yEgEo5Q
          source_id: s_UjLWCKMQFtxvBkqbVaiUzw
          stance: supports
          locator: CBDB:301182
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_UjLWCKMQFtxvBkqbVaiUzw
            source_type: api_record
            title: 中国历代人物传记资料库：王浥（CBDB 301182）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301182&o=json
            external_identifier: CBDB:301182
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:04.487Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Huhh6P1HbPBdaNqCgoKxWo
        subject_person_id: p_rdQpvSEbMvzFVt6su4bz6E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_T5vqkxAYQnGF62CEQNFJMZ
          claim_id: c_Huhh6P1HbPBdaNqCgoKxWo
          source_id: s_UjLWCKMQFtxvBkqbVaiUzw
          stance: supports
          locator: CBDB:301182
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3501-3600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_WfSsAuPR6MP7zRi5eEyFH-
        subject_person_id: p_rdQpvSEbMvzFVt6su4bz6E
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xq77ND3Yirb2ZWfhHcArnK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9koZ1Nf7PuHsNm7lv2qTOn
          claim_id: c_WfSsAuPR6MP7zRi5eEyFH-
          source_id: s_Cw2hEETiUKegMyTEr9G5M1
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第三甲第一百四十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Cw2hEETiUKegMyTEr9G5M1
            source_type: api_record
            title: 中国历代人物传记资料库：王德（CBDB 68161）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68161&o=json
            external_identifier: CBDB:68161
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.057Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_xq77ND3Yirb2ZWfhHcArnK
        status: active
        display_name: 王德
        merged_into_person_id: null
    - claim:
        id: c_icheABuZzxiDZPnGWbnLmf
        subject_person_id: p_rdQpvSEbMvzFVt6su4bz6E
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aeMXjXc91ASWqszNd2D6Kh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GGCUNdDAHJvCuvNdmkkjMw
          claim_id: c_icheABuZzxiDZPnGWbnLmf
          source_id: s_WJWVsI62Hnjq8ZlUURhJ9F
          stance: supports
          locator: CBDB：兄弟 王德（68161）之父／母 王浥
          quotation: null
          interpretation_note: 由兄弟关系推断：王慶 与 王德 为同胞（CBDB 记「弟」），王德 之父／母即 王慶 之父／母。
          source:
            id: s_WJWVsI62Hnjq8ZlUURhJ9F
            source_type: api_record
            title: 中国历代人物传记资料库：王慶（CBDB 301185）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301185&o=json
            external_identifier: CBDB:301185
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_aeMXjXc91ASWqszNd2D6Kh
        status: active
        display_name: 王慶
        merged_into_person_id: null
    - claim:
        id: c_e9EWHl2rXtcGRY-hwjEk58
        subject_person_id: p_rdQpvSEbMvzFVt6su4bz6E
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dtfxxQD6WPUNAn2Z7EEP2P
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K6J--fZ35Wi_8sdcNZbYbJ
          claim_id: c_e9EWHl2rXtcGRY-hwjEk58
          source_id: s_3Ff-bR2YBXM67pvmZa8IQ7
          stance: supports
          locator: CBDB：兄弟 王德（68161）之父／母 王浥
          quotation: null
          interpretation_note: 由兄弟关系推断：王立 与 王德 为同胞（CBDB 记「弟」），王德 之父／母即 王立 之父／母。
          source:
            id: s_3Ff-bR2YBXM67pvmZa8IQ7
            source_type: api_record
            title: 中国历代人物传记资料库：王立（CBDB 301186）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301186&o=json
            external_identifier: CBDB:301186
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dtfxxQD6WPUNAn2Z7EEP2P
        status: active
        display_name: 王立
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王浥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王浥，明人物。嘉靖十七年進士，籍贯永嘉。（中国历代人物传记资料库 CBDB 301182） | accepted |
| name.primary | 王浥 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_xq77ND3Yirb2ZWfhHcArnK | 王德 | accepted |
| children | p_aeMXjXc91ASWqszNd2D6Kh | 王慶 | accepted |
| children | p_dtfxxQD6WPUNAn2Z7EEP2P | 王立 | accepted |

## 外部来源

- [中国历代人物传记资料库：王德（CBDB 68161）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68161&o=json)
- [中国历代人物传记资料库：王立（CBDB 301186）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301186&o=json)
- [中国历代人物传记资料库：王慶（CBDB 301185）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301185&o=json)
- [中国历代人物传记资料库：王浥（CBDB 301182）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=301182&o=json)
