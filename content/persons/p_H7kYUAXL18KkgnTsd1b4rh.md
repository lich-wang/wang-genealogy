---
schema: wang-person/v1
id: p_H7kYUAXL18KkgnTsd1b4rh
status: active
merged_into: null
display_name: 王仲起
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hytjrXiQtUjUHg6635ULsJ
        subject_person_id: p_H7kYUAXL18KkgnTsd1b4rh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲起
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CSoYQKU8BLXyjB7KKuL5it
          claim_id: c_hytjrXiQtUjUHg6635ULsJ
          source_id: s_aB86qoeiNcDykuMFvNJfPr
          stance: supports
          locator: CBDB:237750
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237750）
          source: &a1
            id: s_aB86qoeiNcDykuMFvNJfPr
            source_type: api_record
            title: 中国历代人物传记资料库：王仲起（CBDB 237750）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237750&o=json
            external_identifier: CBDB:237750
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.851Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KVgniNQqFkpCmZK445eiwF
        subject_person_id: p_H7kYUAXL18KkgnTsd1b4rh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲起，明人物。正统七年進士，籍贯廬陵。（中国历代人物传记资料库 CBDB 237750）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Q349X4VMaFnNGuaiYvX8rC
          claim_id: c_KVgniNQqFkpCmZK445eiwF
          source_id: s_aB86qoeiNcDykuMFvNJfPr
          stance: supports
          locator: CBDB:237750
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_SXB8hJw8qrzX_48LD9Cid_
        subject_person_id: p_H7kYUAXL18KkgnTsd1b4rh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2N77V679N67chKYe7DivHB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4p1o7tZimDiNq8giCAoThU
          claim_id: c_SXB8hJw8qrzX_48LD9Cid_
          source_id: s_B3XTLgN9zUiELnRumuLQTn
          stance: supports
          locator: 正统七年進士登科錄:一卷，第二甲第二十九名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_B3XTLgN9zUiELnRumuLQTn
            source_type: api_record
            title: 中国历代人物传记资料库：王槩（CBDB 126810）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126810&o=json
            external_identifier: CBDB:126810
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.222Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2N77V679N67chKYe7DivHB
        status: active
        display_name: 王槩
        merged_into_person_id: null
    - claim:
        id: c_5xWpG-aHSgY9ELP-VQI1uz
        subject_person_id: p_H7kYUAXL18KkgnTsd1b4rh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7mN7AeFFAa3arb9bQ1QBHw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uJZaRSyPJxEDzmCXgzht7m
          claim_id: c_5xWpG-aHSgY9ELP-VQI1uz
          source_id: s_s2UFYgkRrlksRks0APk4Lq
          stance: supports
          locator: CBDB：兄弟 王槩（126810）之父／母 王仲起
          quotation: null
          interpretation_note: 由兄弟关系推断：王同仁 与 王槩 为同胞（CBDB 记「兄」），王槩 之父／母即 王同仁 之父／母。
          source:
            id: s_s2UFYgkRrlksRks0APk4Lq
            source_type: api_record
            title: 中国历代人物传记资料库：王同仁（CBDB 237757）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237757&o=json
            external_identifier: CBDB:237757
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7mN7AeFFAa3arb9bQ1QBHw
        status: active
        display_name: 王同仁
        merged_into_person_id: null
    - claim:
        id: c__X7BNbWGBJhNI5v9pQnWHl
        subject_person_id: p_H7kYUAXL18KkgnTsd1b4rh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_XxMa1C4KJrkyVMPMjdkQ4J
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hMq__iawp9DOlxkwqdJT6s
          claim_id: c__X7BNbWGBJhNI5v9pQnWHl
          source_id: s_AXhI2q1M_r-hICtsf7MrkM
          stance: supports
          locator: CBDB：兄弟 王槩（126810）之父／母 王仲起
          quotation: null
          interpretation_note: 由兄弟关系推断：王同心 与 王槩 为同胞（CBDB 记「弟」），王槩 之父／母即 王同心 之父／母。
          source:
            id: s_AXhI2q1M_r-hICtsf7MrkM
            source_type: api_record
            title: 中国历代人物传记资料库：王同心（CBDB 237755）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237755&o=json
            external_identifier: CBDB:237755
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XxMa1C4KJrkyVMPMjdkQ4J
        status: active
        display_name: 王同心
        merged_into_person_id: null
    - claim:
        id: c_acxembDOn4YVUolHZaeqI_
        subject_person_id: p_H7kYUAXL18KkgnTsd1b4rh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_h7Y8CLJ9JCGiaQ5qFd8WSD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PgB2H5vCowZaD12axzIXIT
          claim_id: c_acxembDOn4YVUolHZaeqI_
          source_id: s_gUTYmzO2jgWqThLhEtffgD
          stance: supports
          locator: CBDB：兄弟 王槩（126810）之父／母 王仲起
          quotation: null
          interpretation_note: 由兄弟关系推断：王同求 与 王槩 为同胞（CBDB 记「弟」），王槩 之父／母即 王同求 之父／母。
          source:
            id: s_gUTYmzO2jgWqThLhEtffgD
            source_type: api_record
            title: 中国历代人物传记资料库：王同求（CBDB 237754）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237754&o=json
            external_identifier: CBDB:237754
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_h7Y8CLJ9JCGiaQ5qFd8WSD
        status: active
        display_name: 王同求
        merged_into_person_id: null
    - claim:
        id: c_hBDpV-UcqdIdYLvl8SaD_2
        subject_person_id: p_H7kYUAXL18KkgnTsd1b4rh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_s3Qm6GtW3M8NzyLSpEdc3p
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pXCoaT6hZXxopTsrR7ZFAS
          claim_id: c_hBDpV-UcqdIdYLvl8SaD_2
          source_id: s_sHR0m_2Kdo4H3P4cIvIfg7
          stance: supports
          locator: CBDB：兄弟 王槩（126810）之父／母 王仲起
          quotation: null
          interpretation_note: 由兄弟关系推断：王同和 与 王槩 为同胞（CBDB 记「兄」），王槩 之父／母即 王同和 之父／母。
          source:
            id: s_sHR0m_2Kdo4H3P4cIvIfg7
            source_type: api_record
            title: 中国历代人物传记资料库：王同和（CBDB 237756）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237756&o=json
            external_identifier: CBDB:237756
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_s3Qm6GtW3M8NzyLSpEdc3p
        status: active
        display_name: 王同和
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仲起

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仲起 | accepted |
| bio.summary | 王仲起，明人物。正统七年進士，籍贯廬陵。（中国历代人物传记资料库 CBDB 237750） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2N77V679N67chKYe7DivHB | 王槩 | accepted |
| children | p_7mN7AeFFAa3arb9bQ1QBHw | 王同仁 | accepted |
| children | p_XxMa1C4KJrkyVMPMjdkQ4J | 王同心 | accepted |
| children | p_h7Y8CLJ9JCGiaQ5qFd8WSD | 王同求 | accepted |
| children | p_s3Qm6GtW3M8NzyLSpEdc3p | 王同和 | accepted |

## 外部来源

- [中国历代人物传记资料库：王槩（CBDB 126810）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126810&o=json)
- [中国历代人物传记资料库：王同和（CBDB 237756）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237756&o=json)
- [中国历代人物传记资料库：王同求（CBDB 237754）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237754&o=json)
- [中国历代人物传记资料库：王同仁（CBDB 237757）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237757&o=json)
- [中国历代人物传记资料库：王同心（CBDB 237755）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237755&o=json)
- [中国历代人物传记资料库：王仲起（CBDB 237750）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237750&o=json)
