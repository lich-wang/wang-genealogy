---
schema: wang-person/v1
id: p_ARBsKDMivmjbBTxJiQz7Aa
status: active
merged_into: null
display_name: 王朝瑬
cbdb_id: 202059
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gqFyvTbrYtjX4Qp7DA1nxK
        subject_person_id: p_ARBsKDMivmjbBTxJiQz7Aa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝瑬（生于1482年），明人物。正德十二年進士，籍贯朝邑，入仕進士。（中国历代人物传记资料库 CBDB 202059）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_EtJvXBD_hEWkbAtD13jaKL
          claim_id: c_gqFyvTbrYtjX4Qp7DA1nxK
          source_id: s_EGobw13P74wgovSJApHJEL
          stance: supports
          locator: CBDB:202059
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_EGobw13P74wgovSJApHJEL
            source_type: api_record
            title: 中国历代人物传记资料库：王朝瑬（CBDB 202059）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202059&o=json
            external_identifier: CBDB:202059
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_J1ZDp3N9xmMMKmv3w2JH8g
        subject_person_id: p_ARBsKDMivmjbBTxJiQz7Aa
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1482年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1482-01-01
            latest: 1482-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QigVLmrts7VTdERU2D5g5G
          claim_id: c_J1ZDp3N9xmMMKmv3w2JH8g
          source_id: s_EGobw13P74wgovSJApHJEL
          stance: supports
          locator: CBDB:202059
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1482
          source:
            id: s_EGobw13P74wgovSJApHJEL
            source_type: api_record
            title: 中国历代人物传记资料库：王朝瑬（CBDB 202059）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202059&o=json
            external_identifier: CBDB:202059
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Sw82VcF42MrW91tsaFHMxN
        subject_person_id: p_ARBsKDMivmjbBTxJiQz7Aa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝瑬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_N62Z21AeQPaBMD17onB38M
          claim_id: c_Sw82VcF42MrW91tsaFHMxN
          source_id: s_EGobw13P74wgovSJApHJEL
          stance: supports
          locator: CBDB:202059
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1482
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_-Nsnw0xoyCqSEREvUPgnWH
        subject_person_id: p_3qLC2oeE1HhZa2mfE2D9n7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ARBsKDMivmjbBTxJiQz7Aa
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Frvy4tyGj0dF5SvbrzCVSV
          claim_id: c_-Nsnw0xoyCqSEREvUPgnWH
          source_id: s_AuaTr2LbeA8Hf2j8SNgdaM
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二百零三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AuaTr2LbeA8Hf2j8SNgdaM
            source_type: api_record
            title: 中国历代人物传记资料库：王聚（CBDB 282721）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282721&o=json
            external_identifier: CBDB:282721
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.101Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3qLC2oeE1HhZa2mfE2D9n7
        status: active
        display_name: 王聚
        merged_into_person_id: null
    - claim:
        id: c_O-NXs19bm9LCacq6Beccx0
        subject_person_id: p_Jj4S5PPcDKSRchCbetDt1A
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ARBsKDMivmjbBTxJiQz7Aa
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P4H-kKyTFh1yMi7cUJU76s
          claim_id: c_O-NXs19bm9LCacq6Beccx0
          source_id: s_HX3R1nETddGgJvc6uNortK
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二百零三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HX3R1nETddGgJvc6uNortK
            source_type: api_record
            title: 中国历代人物传记资料库：王斌（CBDB 282722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282722&o=json
            external_identifier: CBDB:282722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.102Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Jj4S5PPcDKSRchCbetDt1A
        status: active
        display_name: 王斌
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王朝瑬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王朝瑬（生于1482年），明人物。正德十二年進士，籍贯朝邑，入仕進士。（中国历代人物传记资料库 CBDB 202059） | accepted |
| birth.date | 1482年 | accepted |
| name.primary | 王朝瑬 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_3qLC2oeE1HhZa2mfE2D9n7 | 王聚 | accepted |
| ancestors | p_Jj4S5PPcDKSRchCbetDt1A | 王斌 | accepted |

## 外部来源

- [中国历代人物传记资料库：王斌（CBDB 282722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282722&o=json)
- [中国历代人物传记资料库：王朝瑬（CBDB 202059）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202059&o=json)
- [中国历代人物传记资料库：王聚（CBDB 282721）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282721&o=json)
