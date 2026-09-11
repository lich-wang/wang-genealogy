---
schema: wang-person/v1
id: p_VXctFzdW1A9SQFV1nH5uCc
status: active
merged_into: null
display_name: 王章
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TgEhgL4qkHCZm2dBFS9WWa
        subject_person_id: p_VXctFzdW1A9SQFV1nH5uCc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H3JgkQGoEqPx33w4HziZ7C
          claim_id: c_TgEhgL4qkHCZm2dBFS9WWa
          source_id: s_3g1RHnG4UcS762GRpQthc6
          stance: supports
          locator: CBDB:263783
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（263783）
          source: &a1
            id: s_3g1RHnG4UcS762GRpQthc6
            source_type: api_record
            title: 中国历代人物传记资料库：王章（CBDB 263783）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263783&o=json
            external_identifier: CBDB:263783
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.630Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WNngpyS8gwnxC9C5BM6V6i
        subject_person_id: p_VXctFzdW1A9SQFV1nH5uCc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王章，明人物。弘治三年進士，籍贯平山，曾任鴻臚寺署丞。（中国历代人物传记资料库 CBDB 263783）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IRWrdl5eKShXU0rlKbBTwm
          claim_id: c_WNngpyS8gwnxC9C5BM6V6i
          source_id: s_3g1RHnG4UcS762GRpQthc6
          stance: supports
          locator: CBDB:263783
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_KUy9k_heECT3r42OQa-ho0
        subject_person_id: p_VXctFzdW1A9SQFV1nH5uCc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5MQS7xTZ7xaRFjWYKoXEEG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LXUDjCrlHzJfD19syY6D1V
          claim_id: c_KUy9k_heECT3r42OQa-ho0
          source_id: s_nUcJwoZm9zoYm8ziRTQn3w
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第二百零五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nUcJwoZm9zoYm8ziRTQn3w
            source_type: api_record
            title: 中国历代人物传记资料库：王序（CBDB 200871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200871&o=json
            external_identifier: CBDB:200871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.640Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5MQS7xTZ7xaRFjWYKoXEEG
        status: active
        display_name: 王序
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王章 | accepted |
| bio.summary | 王章，明人物。弘治三年進士，籍贯平山，曾任鴻臚寺署丞。（中国历代人物传记资料库 CBDB 263783） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_5MQS7xTZ7xaRFjWYKoXEEG | 王序 | accepted |

## 外部来源

- [中国历代人物传记资料库：王序（CBDB 200871）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200871&o=json)
- [中国历代人物传记资料库：王章（CBDB 263783）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263783&o=json)
