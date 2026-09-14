---
schema: wang-person/v1
id: p_MbP7H9snAG1vb4zQM8p7Mm
status: active
merged_into: null
display_name: 王臣
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yCuZfCR62ZDANNMM2HkDho
        subject_person_id: p_MbP7H9snAG1vb4zQM8p7Mm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_r16JyS95qmTdGvwMxZ11MD
          claim_id: c_yCuZfCR62ZDANNMM2HkDho
          source_id: s_1QwRLnZXMVR7XYBex9vL4G
          stance: supports
          locator: CBDB:249260
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（249260）
          source: &a1
            id: s_1QwRLnZXMVR7XYBex9vL4G
            source_type: api_record
            title: 中国历代人物传记资料库：王臣（CBDB 249260）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249260&o=json
            external_identifier: CBDB:249260
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.167Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_176tKHQNqV8Gj8QFqPbCcw
        subject_person_id: p_MbP7H9snAG1vb4zQM8p7Mm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臣，明人物。成化十一年進士，籍贯臨海，曾任教授。（中国历代人物传记资料库 CBDB 249260）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ff6Ya_c7BGVhcK3Fhl5a3W
          claim_id: c_176tKHQNqV8Gj8QFqPbCcw
          source_id: s_1QwRLnZXMVR7XYBex9vL4G
          stance: supports
          locator: CBDB:249260
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_1UKzRnMnxGfq_G4Hbg1Ll0
        subject_person_id: p_MbP7H9snAG1vb4zQM8p7Mm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2Gx8pH6sHztKEtkLMN7u1C
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LicUsMSwT56nFx6KVZ3RO8
          claim_id: c_1UKzRnMnxGfq_G4Hbg1Ll0
          source_id: s_vXt7EfqfhFLQRHs9zkrC1p
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第五十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_vXt7EfqfhFLQRHs9zkrC1p
            source_type: api_record
            title: 中国历代人物传记资料库：王瑭（CBDB 199751）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199751&o=json
            external_identifier: CBDB:199751
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.577Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2Gx8pH6sHztKEtkLMN7u1C
        status: active
        display_name: 王瑭
        merged_into_person_id: null
    - claim:
        id: c_noXvGG8EXHTmB6LlDnRsr-
        subject_person_id: p_MbP7H9snAG1vb4zQM8p7Mm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NtBM39m3UoSeCd3NWKZQEL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9kVhqRTUhTNiTcIQm4-Tvv
          claim_id: c_noXvGG8EXHTmB6LlDnRsr-
          source_id: s_CkP6We92o5F4CzGxWt3OnD
          stance: supports
          locator: CBDB：兄弟 王瑭（199751）之父／母 王臣
          quotation: null
          interpretation_note: 由兄弟关系推断：王頡 与 王瑭 为同胞（CBDB 记「弟」），王瑭 之父／母即 王頡 之父／母。
          source:
            id: s_CkP6We92o5F4CzGxWt3OnD
            source_type: api_record
            title: 中国历代人物传记资料库：王頡（CBDB 249263）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249263&o=json
            external_identifier: CBDB:249263
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NtBM39m3UoSeCd3NWKZQEL
        status: active
        display_name: 王頡
        merged_into_person_id: null
    - claim:
        id: c_iP0kG4N_c_AGCJs9UjnW1N
        subject_person_id: p_MbP7H9snAG1vb4zQM8p7Mm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kEpavCvPcpCzU39EsfHJ4X
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H75J6rHQDepPPueC03KLg2
          claim_id: c_iP0kG4N_c_AGCJs9UjnW1N
          source_id: s_r699KJi5X7z_SVxdbluxdO
          stance: supports
          locator: CBDB：兄弟 王瑭（199751）之父／母 王臣
          quotation: null
          interpretation_note: 由兄弟关系推断：王頩 与 王瑭 为同胞（CBDB 记「弟」），王瑭 之父／母即 王頩 之父／母。
          source:
            id: s_r699KJi5X7z_SVxdbluxdO
            source_type: api_record
            title: 中国历代人物传记资料库：王頩（CBDB 249264）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249264&o=json
            external_identifier: CBDB:249264
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kEpavCvPcpCzU39EsfHJ4X
        status: active
        display_name: 王頩
        merged_into_person_id: null
    - claim:
        id: c_C616G5Ym4iwy-POizpFNIU
        subject_person_id: p_MbP7H9snAG1vb4zQM8p7Mm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xC2zbFXBLCPaFP39piNtTA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I9jZUD1oQ6zZ9E4sedou-i
          claim_id: c_C616G5Ym4iwy-POizpFNIU
          source_id: s_bCY8DhD7A244wM_exUkeCX
          stance: supports
          locator: CBDB：兄弟 王瑭（199751）之父／母 王臣
          quotation: null
          interpretation_note: 由兄弟关系推断：王璽 与 王瑭 为同胞（CBDB 记「弟」），王瑭 之父／母即 王璽 之父／母。
          source:
            id: s_bCY8DhD7A244wM_exUkeCX
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 249265）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249265&o=json
            external_identifier: CBDB:249265
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xC2zbFXBLCPaFP39piNtTA
        status: active
        display_name: 王璽
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王臣 | accepted |
| bio.summary | 王臣，明人物。成化十一年進士，籍贯臨海，曾任教授。（中国历代人物传记资料库 CBDB 249260） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2Gx8pH6sHztKEtkLMN7u1C | 王瑭 | accepted |
| children | p_NtBM39m3UoSeCd3NWKZQEL | 王頡 | accepted |
| children | p_kEpavCvPcpCzU39EsfHJ4X | 王頩 | accepted |
| children | p_xC2zbFXBLCPaFP39piNtTA | 王璽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王臣（CBDB 249260）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249260&o=json)
- [中国历代人物传记资料库：王頩（CBDB 249264）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249264&o=json)
- [中国历代人物传记资料库：王瑭（CBDB 199751）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199751&o=json)
- [中国历代人物传记资料库：王璽（CBDB 249265）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249265&o=json)
- [中国历代人物传记资料库：王頡（CBDB 249263）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249263&o=json)
