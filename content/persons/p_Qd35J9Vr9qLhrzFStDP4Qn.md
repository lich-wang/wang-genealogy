---
schema: wang-person/v1
id: p_Qd35J9Vr9qLhrzFStDP4Qn
status: active
merged_into: null
display_name: 张氏
cbdb_id: 264042
revision: 5
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_IgpNYsGmaD6hlrFBm7CmRf
        subject_person_id: p_Qd35J9Vr9qLhrzFStDP4Qn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 张氏，明人物。弘治六年進士。（中国历代人物传记资料库 CBDB 264042）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_eX4_EsY87LArxXc2KLFEJ8
          claim_id: c_IgpNYsGmaD6hlrFBm7CmRf
          source_id: s_d4fM3ZJGKsQRoE6t5pmvQt
          stance: supports
          locator: CBDB:264042
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_d4fM3ZJGKsQRoE6t5pmvQt
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：張氏（264042）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264042&o=json
            external_identifier: CBDB:264042
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:05.936Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_cbCUW98YNHw1CjL8Q2gTQJ
        subject_person_id: p_Qd35J9Vr9qLhrzFStDP4Qn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 张氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_fKbdWgUtx8itp5ADS5RJY2
          claim_id: c_cbCUW98YNHw1CjL8Q2gTQJ
          source_id: s_d4fM3ZJGKsQRoE6t5pmvQt
          stance: supports
          locator: Q65870769
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_xV4MB6ZA4Ppk5C9yQ9ZZYs
          claim_id: c_cbCUW98YNHw1CjL8Q2gTQJ
          source_id: s_VznKdhG3drqW4FvKg6oDCV
          stance: supports
          locator: Q65870769
          quotation: null
          interpretation_note: null
          source:
            id: s_VznKdhG3drqW4FvKg6oDCV
            source_type: api_record
            title: 维基数据：张氏（Q65870769）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65870769
            external_identifier: Q65870769
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:05.625Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_n75KJTq6tPL21D75JARkcu
        subject_person_id: p_Qd35J9Vr9qLhrzFStDP4Qn
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Un98x3Kw7vbgE1taigN1AK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_78BaCnwBGzDSE6v9Cb7eVp
          claim_id: c_n75KJTq6tPL21D75JARkcu
          source_id: s_NFLp5kEQR1Npq5N2yFNW5D
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：弘治六年進士登科錄:一卷
          source:
            id: s_NFLp5kEQR1Npq5N2yFNW5D
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王承裕（67772）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67772&o=json
            external_identifier: CBDB:67772
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:01:56.128Z
            metadata_json: null
        - id: cs_EvP8bK2tCB3wMGrDC3Q2es
          claim_id: c_n75KJTq6tPL21D75JARkcu
          source_id: s_VznKdhG3drqW4FvKg6oDCV
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_VznKdhG3drqW4FvKg6oDCV
            source_type: api_record
            title: 维基数据：张氏（Q65870769）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65870769
            external_identifier: Q65870769
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:00:05.625Z
            metadata_json: null
        - id: cs_mon8Kf5qJC3E8NXbZU5wYV
          claim_id: c_n75KJTq6tPL21D75JARkcu
          source_id: s_5rkXUyJcjjf1SehC3fSzKE
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_5rkXUyJcjjf1SehC3fSzKE
            source_type: api_record
            title: 维基数据：王承裕（Q15941024）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q15941024
            external_identifier: Q15941024
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:48:40.526Z
            metadata_json: null
      object_person:
        id: p_Un98x3Kw7vbgE1taigN1AK
        status: active
        display_name: 王承裕
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 张氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 张氏，明人物。弘治六年進士。（中国历代人物传记资料库 CBDB 264042） | accepted |
| name.primary | 张氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Un98x3Kw7vbgE1taigN1AK | 王承裕 | accepted |

## 外部来源

- [维基数据：王承裕（Q15941024）](https://www.wikidata.org/wiki/Q15941024)
- [维基数据：张氏（Q65870769）](https://www.wikidata.org/wiki/Q65870769)
- [CBDB 中国历代人物传记资料库：王承裕（67772）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67772&o=json)
- [CBDB 中国历代人物传记资料库：張氏（264042）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264042&o=json)
