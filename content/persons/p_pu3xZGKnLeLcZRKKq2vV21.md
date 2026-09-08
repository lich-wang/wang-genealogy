---
schema: wang-person/v1
id: p_pu3xZGKnLeLcZRKKq2vV21
status: active
merged_into: null
display_name: 王棫
cbdb_id: 13797
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Jd6K71MGy7LnJadVZx5dyy
        subject_person_id: p_pu3xZGKnLeLcZRKKq2vV21
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棫，宋人物。CBDB 记录其籍贯记录为開封。中国历代人物传记资料库（CBDB）以人物编号 13797 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_jHhHNxrBEXGr1vYwLER3k8
          claim_id: c_Jd6K71MGy7LnJadVZx5dyy
          source_id: s_9JbDebE7ppCUBmG9RhgyR2
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_9JbDebE7ppCUBmG9RhgyR2
            source_type: api_record
            title: 维基数据：王棫（Q45378727）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45378727
            external_identifier: Q45378727
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:57.823Z
            metadata_json: null
        - id: cs_vrdM1FfwDam0xWmbde-Ni1
          claim_id: c_Jd6K71MGy7LnJadVZx5dyy
          source_id: s_5fpEyWaKgyRPyEW6dTPEXM
          stance: supports
          locator: CBDB:13797
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_5fpEyWaKgyRPyEW6dTPEXM
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王棫（13797）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13797&o=json
            external_identifier: CBDB:13797
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:58:57.964Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_na6d6xQL2shmmKjRK9p8jb
        subject_person_id: p_pu3xZGKnLeLcZRKKq2vV21
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棫
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_opRetGDuMgUVFVkPDnY5JR
          claim_id: c_na6d6xQL2shmmKjRK9p8jb
          source_id: s_5fpEyWaKgyRPyEW6dTPEXM
          stance: supports
          locator: Q45378727
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_v9T9D3myGH3zcTEondnGvp
          claim_id: c_na6d6xQL2shmmKjRK9p8jb
          source_id: s_9JbDebE7ppCUBmG9RhgyR2
          stance: supports
          locator: Q45378727
          quotation: null
          interpretation_note: null
          source:
            id: s_9JbDebE7ppCUBmG9RhgyR2
            source_type: api_record
            title: 维基数据：王棫（Q45378727）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45378727
            external_identifier: Q45378727
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:57.823Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dPQTSfz21VGb5ftoJnoFLP
        subject_person_id: p_4JXdLGzMSVWRt7DgGNQQq2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pu3xZGKnLeLcZRKKq2vV21
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3WgEsjQ4MLCUfBEd9D6thJ
          claim_id: c_dPQTSfz21VGb5ftoJnoFLP
          source_id: s_9JbDebE7ppCUBmG9RhgyR2
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_9JbDebE7ppCUBmG9RhgyR2
            source_type: api_record
            title: 维基数据：王棫（Q45378727）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45378727
            external_identifier: Q45378727
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:57.823Z
            metadata_json: null
        - id: cs_2NzM8Yg86P3cXJreFC17W6
          claim_id: c_dPQTSfz21VGb5ftoJnoFLP
          source_id: s_MHUANk8LX5MLkNEYCEfoM2
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_MHUANk8LX5MLkNEYCEfoM2
            source_type: api_record
            title: 维基数据：王仁（Q45378726）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45378726
            external_identifier: Q45378726
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:10.721Z
            metadata_json: null
        - id: cs_8DrJCBrPqbUxE5771jbkKJ
          claim_id: c_dPQTSfz21VGb5ftoJnoFLP
          source_id: s_LqFkpZSCL5c8ztGGNFvh5T
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_LqFkpZSCL5c8ztGGNFvh5T
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王仁（13796）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13796&o=json
            external_identifier: CBDB:13796
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:10.884Z
            metadata_json: null
      object_person:
        id: p_4JXdLGzMSVWRt7DgGNQQq2
        status: active
        display_name: 王仁
        merged_into_person_id: null
  children:
    - claim:
        id: c_uNd9C2Rzqbmmc29u8g1AB7
        subject_person_id: p_pu3xZGKnLeLcZRKKq2vV21
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_Nm2iJSX6JvN22S8n42tuCU
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DoGGSzST2AkRaf9NN5mNQ8
          claim_id: c_uNd9C2Rzqbmmc29u8g1AB7
          source_id: s_WZxztQ1X5HrUXThqKTPoT4
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_WZxztQ1X5HrUXThqKTPoT4
            source_type: api_record
            title: 维基数据：王直方（Q10415993）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10415993
            external_identifier: Q10415993
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:48.321Z
            metadata_json: null
        - id: cs_yQMx5sCYkGHnnjejFiPok5
          claim_id: c_uNd9C2Rzqbmmc29u8g1AB7
          source_id: s_9JbDebE7ppCUBmG9RhgyR2
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_9JbDebE7ppCUBmG9RhgyR2
            source_type: api_record
            title: 维基数据：王棫（Q45378727）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45378727
            external_identifier: Q45378727
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:57.823Z
            metadata_json: null
        - id: cs_xHdVvc4HxY2ZfNyFARWs83
          claim_id: c_uNd9C2Rzqbmmc29u8g1AB7
          source_id: s_5fpEyWaKgyRPyEW6dTPEXM
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source:
            id: s_5fpEyWaKgyRPyEW6dTPEXM
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王棫（13797）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13797&o=json
            external_identifier: CBDB:13797
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:58:57.964Z
            metadata_json: null
      object_person:
        id: p_Nm2iJSX6JvN22S8n42tuCU
        status: active
        display_name: 王直方
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王棫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王棫，宋人物。CBDB 记录其籍贯记录为開封。中国历代人物传记资料库（CBDB）以人物编号 13797 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王棫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4JXdLGzMSVWRt7DgGNQQq2 | 王仁 | accepted |
| children | p_Nm2iJSX6JvN22S8n42tuCU | 王直方 | accepted |

## 外部来源

- [维基数据：王仁（Q45378726）](https://www.wikidata.org/wiki/Q45378726)
- [维基数据：王棫（Q45378727）](https://www.wikidata.org/wiki/Q45378727)
- [维基数据：王直方（Q10415993）](https://www.wikidata.org/wiki/Q10415993)
- [CBDB 中国历代人物传记资料库：王仁（13796）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13796&o=json)
- [CBDB 中国历代人物传记资料库：王棫（13797）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13797&o=json)
