---
schema: wang-person/v1
id: p_4Hjde84UDSxNby7XrvDD1E
status: active
merged_into: null
display_name: 王寂
cbdb_id: 17425
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MzT6dX92jgMdMhWqGYpCey
        subject_person_id: p_4Hjde84UDSxNby7XrvDD1E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寂，宋人物。CBDB 记录其籍贯记录为歷城，曾任太子太傅、少傅。中国历代人物传记资料库（CBDB）以人物编号 17425 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_BPkVvGjTFDYTZXRFFjgoL6
          claim_id: c_MzT6dX92jgMdMhWqGYpCey
          source_id: s_vRaCPeuuKnxFV9tq7HyLW3
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_vRaCPeuuKnxFV9tq7HyLW3
            source_type: api_record
            title: 维基数据：王寂（Q45386119）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45386119
            external_identifier: Q45386119
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:10.721Z
            metadata_json: null
        - id: cs_MDUU8ZeKKTpran7Pd3YLow
          claim_id: c_MzT6dX92jgMdMhWqGYpCey
          source_id: s_LYQVz212NDq8PUvaBty1BP
          stance: supports
          locator: CBDB:17425
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_LYQVz212NDq8PUvaBty1BP
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王寂（17425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17425&o=json
            external_identifier: CBDB:17425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:10.884Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_KDsNN7SHEKbqWabKDrz26P
        subject_person_id: p_4Hjde84UDSxNby7XrvDD1E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寂
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_C7EBKSECZ5KCxQWNEGYQnT
          claim_id: c_KDsNN7SHEKbqWabKDrz26P
          source_id: s_LYQVz212NDq8PUvaBty1BP
          stance: supports
          locator: Q45386119
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_mL48zw6XbK6KwhnX3DJ1HQ
          claim_id: c_KDsNN7SHEKbqWabKDrz26P
          source_id: s_vRaCPeuuKnxFV9tq7HyLW3
          stance: supports
          locator: Q45386119
          quotation: null
          interpretation_note: null
          source:
            id: s_vRaCPeuuKnxFV9tq7HyLW3
            source_type: api_record
            title: 维基数据：王寂（Q45386119）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45386119
            external_identifier: Q45386119
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:10.721Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_xNhK7D71rFc4ZBtdKPT3am
        subject_person_id: p_C5gdwEP6JshLSxPa5isWtq
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4Hjde84UDSxNby7XrvDD1E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EJBahnccATR5Ck1CQFtfAP
          claim_id: c_xNhK7D71rFc4ZBtdKPT3am
          source_id: s_vRaCPeuuKnxFV9tq7HyLW3
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_b7fkQMVBcQ5Go6fMU4Ct77
          claim_id: c_xNhK7D71rFc4ZBtdKPT3am
          source_id: s_A5qwERCBYBB4o9rC5wm7KL
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_A5qwERCBYBB4o9rC5wm7KL
            source_type: api_record
            title: 维基数据：王异（Q45386110）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45386110
            external_identifier: Q45386110
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_C5gdwEP6JshLSxPa5isWtq
        status: active
        display_name: 王异
        merged_into_person_id: null
  children:
    - claim:
        id: c_UAKxhQmLr8Bd41Ck5MF4RZ
        subject_person_id: p_4Hjde84UDSxNby7XrvDD1E
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hEEpn7U7EKTTeFP3ixWWbm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fey3rXL6B8ZQaMB3QxpD82
          claim_id: c_UAKxhQmLr8Bd41Ck5MF4RZ
          source_id: s_eNFZcfGseG5DPkoAbM2fBY
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_eNFZcfGseG5DPkoAbM2fBY
            source_type: api_record
            title: 维基数据：王禔（Q45386120）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45386120
            external_identifier: Q45386120
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:59.236Z
            metadata_json: null
        - id: cs_d348LsME5xo6XJXHzHSsdP
          claim_id: c_UAKxhQmLr8Bd41Ck5MF4RZ
          source_id: s_vRaCPeuuKnxFV9tq7HyLW3
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_LtyHD8ys85b8V9AKuanML7
          claim_id: c_UAKxhQmLr8Bd41Ck5MF4RZ
          source_id: s_LYQVz212NDq8PUvaBty1BP
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source: *a1
      object_person:
        id: p_hEEpn7U7EKTTeFP3ixWWbm
        status: active
        display_name: 王禔
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_gHvL8xjTNojYSVWv31e6Ay
        subject_person_id: p_4Hjde84UDSxNby7XrvDD1E
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_L2ifCRAMx2TbJz5vSmeM6T
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GgWRMPH7aSkSAbYWxQ1ujP
          claim_id: c_gHvL8xjTNojYSVWv31e6Ay
          source_id: s_pquE6piAMMVG6tzVZzsHtU
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_pquE6piAMMVG6tzVZzsHtU
            source_type: api_record
            title: 维基数据：赵氏（Q45430725）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45430725
            external_identifier: Q45430725
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_i5PB6m3zDsMhr8nUmA2fMs
          claim_id: c_gHvL8xjTNojYSVWv31e6Ay
          source_id: s_vRaCPeuuKnxFV9tq7HyLW3
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_4ooDcZ87cbacEjzKd678CM
          claim_id: c_gHvL8xjTNojYSVWv31e6Ay
          source_id: s_LYQVz212NDq8PUvaBty1BP
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source: *a1
      object_person:
        id: p_L2ifCRAMx2TbJz5vSmeM6T
        status: active
        display_name: 赵氏
        merged_into_person_id: null
    - claim:
        id: c_ZeN9zqVb73eMRCviGozeM5
        subject_person_id: p_4Hjde84UDSxNby7XrvDD1E
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_HN9dL1QZo7ng1X3WPN8EcR
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5FSuBhi7vb4ryp5HsYDbQM
          claim_id: c_ZeN9zqVb73eMRCviGozeM5
          source_id: s_5gNFY2WxZYmo4JswXvHa9P
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_5gNFY2WxZYmo4JswXvHa9P
            source_type: api_record
            title: 维基数据：丘氏（Q45431034）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45431034
            external_identifier: Q45431034
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_zxv3KfdnFgLAqdGUzmWhJQ
          claim_id: c_ZeN9zqVb73eMRCviGozeM5
          source_id: s_vRaCPeuuKnxFV9tq7HyLW3
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_9tJiqWAbXjiyYxyLaMQ2D3
          claim_id: c_ZeN9zqVb73eMRCviGozeM5
          source_id: s_LYQVz212NDq8PUvaBty1BP
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source: *a1
      object_person:
        id: p_HN9dL1QZo7ng1X3WPN8EcR
        status: active
        display_name: 丘氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王寂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王寂，宋人物。CBDB 记录其籍贯记录为歷城，曾任太子太傅、少傅。中国历代人物传记资料库（CBDB）以人物编号 17425 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王寂 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_C5gdwEP6JshLSxPa5isWtq | 王异 | accepted |
| children | p_hEEpn7U7EKTTeFP3ixWWbm | 王禔 | accepted |
| spouses | p_L2ifCRAMx2TbJz5vSmeM6T | 赵氏 | accepted |
| spouses | p_HN9dL1QZo7ng1X3WPN8EcR | 丘氏 | accepted |

## 外部来源

- [维基数据：丘氏（Q45431034）](https://www.wikidata.org/wiki/Q45431034)
- [维基数据：王寂（Q45386119）](https://www.wikidata.org/wiki/Q45386119)
- [维基数据：王异（Q45386110）](https://www.wikidata.org/wiki/Q45386110)
- [维基数据：王禔（Q45386120）](https://www.wikidata.org/wiki/Q45386120)
- [维基数据：赵氏（Q45430725）](https://www.wikidata.org/wiki/Q45430725)
- [CBDB 中国历代人物传记资料库：王寂（17425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17425&o=json)
