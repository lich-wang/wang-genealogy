---
schema: wang-person/v1
id: p_j7cTzgP8kPH4PuJJT6Phja
status: active
merged_into: null
display_name: 王宷
cbdb_id: 119740
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yrFdRCroXW1oPvUSKUoRT1
        subject_person_id: p_j7cTzgP8kPH4PuJJT6Phja
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宷，宋人物。中国历代人物传记资料库（CBDB）以人物编号 119740 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_ZTwFpypynzBfB47s8Lerhm
          claim_id: c_yrFdRCroXW1oPvUSKUoRT1
          source_id: s_ok3rTXH2RMUEFz3KCXmNLB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_ok3rTXH2RMUEFz3KCXmNLB
            source_type: api_record
            title: 维基数据：王宷（Q45493354）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45493354
            external_identifier: Q45493354
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:04.864Z
            metadata_json: null
        - id: cs_D5nDJEx-SYeLjPB4jHSRQa
          claim_id: c_yrFdRCroXW1oPvUSKUoRT1
          source_id: s_qcX1VjDMhbTXr7Psa249QR
          stance: supports
          locator: CBDB:119740
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_qcX1VjDMhbTXr7Psa249QR
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王宷（119740）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119740&o=json
            external_identifier: CBDB:119740
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:05.048Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_5wv42PQCpKeSbyLCL5eNSk
        subject_person_id: p_j7cTzgP8kPH4PuJJT6Phja
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宷
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_jCzqZCXCx76K2phpXaa3vM
          claim_id: c_5wv42PQCpKeSbyLCL5eNSk
          source_id: s_ok3rTXH2RMUEFz3KCXmNLB
          stance: supports
          locator: Q45493354
          quotation: null
          interpretation_note: null
          source:
            id: s_ok3rTXH2RMUEFz3KCXmNLB
            source_type: api_record
            title: 维基数据：王宷（Q45493354）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45493354
            external_identifier: Q45493354
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:04.864Z
            metadata_json: null
        - id: cs_r4an5CADJ1a54fFhJj389A
          claim_id: c_5wv42PQCpKeSbyLCL5eNSk
          source_id: s_qcX1VjDMhbTXr7Psa249QR
          stance: supports
          locator: Q45493354
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_nuFPBXjRAM581w231L7ucB
        subject_person_id: p_5QEFg5NX8fdCTZoicRnKAT
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_j7cTzgP8kPH4PuJJT6Phja
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1jo3AjPgb7zdPUxYLJph67
          claim_id: c_nuFPBXjRAM581w231L7ucB
          source_id: s_ok3rTXH2RMUEFz3KCXmNLB
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_ok3rTXH2RMUEFz3KCXmNLB
            source_type: api_record
            title: 维基数据：王宷（Q45493354）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45493354
            external_identifier: Q45493354
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:04.864Z
            metadata_json: null
        - id: cs_Jb57nUod4a41f7dZXkyAmj
          claim_id: c_nuFPBXjRAM581w231L7ucB
          source_id: s_AMCEA11HjgWEugGDaB86eR
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_AMCEA11HjgWEugGDaB86eR
            source_type: api_record
            title: 维基数据：王韶（Q10417893）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10417893
            external_identifier: Q10417893
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:53.940Z
            metadata_json: null
      object_person:
        id: p_5QEFg5NX8fdCTZoicRnKAT
        status: active
        display_name: 王韶
        merged_into_person_id: null
    - claim:
        id: c_3lIVjO6v_sT4Kpqti14c39
        subject_person_id: p_f5uvxnPRT14yx91yn4yLGC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_j7cTzgP8kPH4PuJJT6Phja
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KIHBTZ4KCsp_ktFg-VD4Oh
          claim_id: c_3lIVjO6v_sT4Kpqti14c39
          source_id: s_qcX1VjDMhbTXr7Psa249QR
          stance: supports
          locator: 宋史：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_f5uvxnPRT14yx91yn4yLGC
        status: active
        display_name: 王韶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王宷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宷，宋人物。中国历代人物传记资料库（CBDB）以人物编号 119740 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王宷 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5QEFg5NX8fdCTZoicRnKAT | 王韶 | accepted |
| parents | p_f5uvxnPRT14yx91yn4yLGC | 王韶 | accepted |

## 外部来源

- [维基数据：王韶（Q10417893）](https://www.wikidata.org/wiki/Q10417893)
- [维基数据：王宷（Q45493354）](https://www.wikidata.org/wiki/Q45493354)
- [CBDB 中国历代人物传记资料库：王宷（119740）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119740&o=json)
