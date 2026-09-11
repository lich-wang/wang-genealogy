---
schema: wang-person/v1
id: p_izy1XkGQRABqBnA1F9R3jt
status: active
merged_into: null
display_name: 王昹
cbdb_id: 201301
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_apDfw89EHKEh9qPBSr8ani
        subject_person_id: p_izy1XkGQRABqBnA1F9R3jt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昹（生于1468年），明人物。中国历代人物传记资料库（CBDB）以人物编号 201301 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_oMTAAsg2zRECNxHxif16Vs
          claim_id: c_apDfw89EHKEh9qPBSr8ani
          source_id: s_YQnJrBE7mxLoSeDXMePUmf
          stance: supports
          locator: CBDB:201301
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_YQnJrBE7mxLoSeDXMePUmf
            source_type: api_record
            title: 中国历代人物传记资料库：王昹（CBDB 201301）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201301&o=json
            external_identifier: CBDB:201301
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_sTjbB83A5jCQfFLV7gNg2x
        subject_person_id: p_izy1XkGQRABqBnA1F9R3jt
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1468年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1468-01-01
            latest: 1468-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_P8A254ZtdK61b2gDnTytW8
          claim_id: c_sTjbB83A5jCQfFLV7gNg2x
          source_id: s_YQnJrBE7mxLoSeDXMePUmf
          stance: supports
          locator: CBDB:201301
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1468
          source:
            id: s_YQnJrBE7mxLoSeDXMePUmf
            source_type: api_record
            title: 中国历代人物传记资料库：王昹（CBDB 201301）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201301&o=json
            external_identifier: CBDB:201301
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DxrtMqDgXvVKJw3Hr51cJb
        subject_person_id: p_izy1XkGQRABqBnA1F9R3jt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_7nzPbtwvVP9eMzbgiRSkw9
          claim_id: c_DxrtMqDgXvVKJw3Hr51cJb
          source_id: s_YQnJrBE7mxLoSeDXMePUmf
          stance: supports
          locator: CBDB:201301
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1468
          source:
            id: s_YQnJrBE7mxLoSeDXMePUmf
            source_type: api_record
            title: 中国历代人物传记资料库：王昹（CBDB 201301）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201301&o=json
            external_identifier: CBDB:201301
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_g-FV8fWLvpadEOjGGWu6rt
        subject_person_id: p_82EciDCbTEknL5Nksc81QY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_izy1XkGQRABqBnA1F9R3jt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__1kXRsJcJm04pe5ui1mhng
          claim_id: c_g-FV8fWLvpadEOjGGWu6rt
          source_id: s_zr8bBQFCHks24tEAGhr3ec
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第四十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zr8bBQFCHks24tEAGhr3ec
            source_type: api_record
            title: 中国历代人物传记资料库：王輔（CBDB 270222）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270222&o=json
            external_identifier: CBDB:270222
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.823Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_82EciDCbTEknL5Nksc81QY
        status: active
        display_name: 王輔
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_mSZ3r9pMmEhSYfglx_ZXYD
        subject_person_id: p_2JXMA8KNqGrn8Pm23ZgcHU
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_izy1XkGQRABqBnA1F9R3jt
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dK9SXQce8HW6h4yjSP88nn
          claim_id: c_mSZ3r9pMmEhSYfglx_ZXYD
          source_id: s_mz5Gei5vSt6Hq4kY9Aca8s
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第四十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mz5Gei5vSt6Hq4kY9Aca8s
            source_type: api_record
            title: 中国历代人物传记资料库：王敬（CBDB 270221）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270221&o=json
            external_identifier: CBDB:270221
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.823Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2JXMA8KNqGrn8Pm23ZgcHU
        status: active
        display_name: 王敬
        merged_into_person_id: null
    - claim:
        id: c_injSulnVS5GRmC_3YGTfGB
        subject_person_id: p_4ANsAPWkNQqKs6kEeGngD9
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_izy1XkGQRABqBnA1F9R3jt
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sG-T52a4a5fQqNFWXl_vFD
          claim_id: c_injSulnVS5GRmC_3YGTfGB
          source_id: s_n9hEdZ7bKMPpmAkB4d7Ja8
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第四十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_n9hEdZ7bKMPpmAkB4d7Ja8
            source_type: api_record
            title: 中国历代人物传记资料库：王介（CBDB 270220）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270220&o=json
            external_identifier: CBDB:270220
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.823Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4ANsAPWkNQqKs6kEeGngD9
        status: active
        display_name: 王介
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王昹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王昹（生于1468年），明人物。中国历代人物传记资料库（CBDB）以人物编号 201301 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| birth.date | 1468年 | accepted |
| name.primary | 王昹 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_82EciDCbTEknL5Nksc81QY | 王輔 | accepted |
| ancestors | p_2JXMA8KNqGrn8Pm23ZgcHU | 王敬 | accepted |
| ancestors | p_4ANsAPWkNQqKs6kEeGngD9 | 王介 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昹（CBDB 201301）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201301&o=json)
- [中国历代人物传记资料库：王輔（CBDB 270222）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270222&o=json)
- [中国历代人物传记资料库：王介（CBDB 270220）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270220&o=json)
- [中国历代人物传记资料库：王敬（CBDB 270221）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270221&o=json)
