---
schema: wang-person/v1
id: p_MWAK3SJTta3quLLmo1xEow
status: active
merged_into: null
display_name: 王仰
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AnjvyeiwTEhTbvMBALd4FD
        subject_person_id: p_MWAK3SJTta3quLLmo1xEow
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JLYibH9qYHYPJcXk7J1oUW
          claim_id: c_AnjvyeiwTEhTbvMBALd4FD
          source_id: s_VFM5Hq6nxWZpEMhuC3nPnH
          stance: supports
          locator: CBDB:17843
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（17843）
          source: &a1
            id: s_VFM5Hq6nxWZpEMhuC3nPnH
            source_type: api_record
            title: 中国历代人物传记资料库：王仰（CBDB 17843）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17843&o=json
            external_identifier: CBDB:17843
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.692Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r3bLEgNQYVcyP8Ta3ohx8Z
        subject_person_id: p_MWAK3SJTta3quLLmo1xEow
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仰，宋人物。籍贯鄞縣。（中国历代人物传记资料库 CBDB 17843）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7fvixGD5Y02moUt25lJaqQ
          claim_id: c_r3bLEgNQYVcyP8Ta3ohx8Z
          source_id: s_VFM5Hq6nxWZpEMhuC3nPnH
          stance: supports
          locator: CBDB:17843
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_bl9zYp84630iwdmvZ8REKz
        subject_person_id: p_4RuP1y13HperNdMDJkN6MF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MWAK3SJTta3quLLmo1xEow
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ue5VqAGBRsLSfGpJ7ITNjL
          claim_id: c_bl9zYp84630iwdmvZ8REKz
          source_id: s_ryXjfBob4D77XXAGUgL5gi
          stance: supports
          locator: CBDB 双向互证（子 王仰 ⇄ 父 王震）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_ryXjfBob4D77XXAGUgL5gi
            source_type: api_record
            title: 中国历代人物传记资料库：王震（CBDB 3947）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3947&o=json
            external_identifier: CBDB:3947
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.425Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4RuP1y13HperNdMDJkN6MF
        status: active
        display_name: 王震
        merged_into_person_id: null
  children:
    - claim:
        id: c_twHuvhJItPF2sTrC3u91Tp
        subject_person_id: p_MWAK3SJTta3quLLmo1xEow
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_26tLQutRv9RfwmDpym5T1E
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_86hpSrklFkI_vneD8Zd_99
          claim_id: c_twHuvhJItPF2sTrC3u91Tp
          source_id: s_NRMoGyPxVJjRUhF4g8gkDi
          stance: supports
          locator: CBDB 双向互证（父 王仰 ⇄ 子 王從）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_NRMoGyPxVJjRUhF4g8gkDi
            source_type: api_record
            title: 中国历代人物传记资料库：王從（CBDB 17844）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17844&o=json
            external_identifier: CBDB:17844
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.694Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_26tLQutRv9RfwmDpym5T1E
        status: active
        display_name: 王從
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仰 | accepted |
| bio.summary | 王仰，宋人物。籍贯鄞縣。（中国历代人物传记资料库 CBDB 17843） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4RuP1y13HperNdMDJkN6MF | 王震 | accepted |
| children | p_26tLQutRv9RfwmDpym5T1E | 王從 | accepted |

## 外部来源

- [中国历代人物传记资料库：王從（CBDB 17844）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17844&o=json)
- [中国历代人物传记资料库：王仰（CBDB 17843）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17843&o=json)
- [中国历代人物传记资料库：王震（CBDB 3947）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3947&o=json)
