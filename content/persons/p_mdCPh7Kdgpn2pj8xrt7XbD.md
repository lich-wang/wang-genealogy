---
schema: wang-person/v1
id: p_mdCPh7Kdgpn2pj8xrt7XbD
status: active
merged_into: null
display_name: 王荊
cbdb_id: 523840
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KKKr5Q21qM1G3EMG3KkVTK
        subject_person_id: p_mdCPh7Kdgpn2pj8xrt7XbD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王荊，史料所见人物。本项目依据《中国历代人物传记资料库：王荊（CBDB 523840）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_dDx8-zse-M2eY19WaTKlkf
          claim_id: c_KKKr5Q21qM1G3EMG3KkVTK
          source_id: s_5y9GFu3vp4gT1AQ59h51vm
          stance: supports
          locator: CBDB:523840
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_5y9GFu3vp4gT1AQ59h51vm
            source_type: api_record
            title: 中国历代人物传记资料库：王荊（CBDB 523840）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=523840&o=json
            external_identifier: CBDB:523840
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:17.868Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_sE282akajc2bHq5QLi3R5B
        subject_person_id: p_mdCPh7Kdgpn2pj8xrt7XbD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王荊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5Y5B8Qiu6CzERSMbbf5eh2
          claim_id: c_sE282akajc2bHq5QLi3R5B
          source_id: s_5y9GFu3vp4gT1AQ59h51vm
          stance: supports
          locator: CBDB:523840
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（7001-7100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vBpIKZz5FxGN76FtiRCcDZ
        subject_person_id: p_8d76gJay11NRoC6JqPciri
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_mdCPh7Kdgpn2pj8xrt7XbD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GmoTYMTOR50ldh6D8K5yuK
          claim_id: c_vBpIKZz5FxGN76FtiRCcDZ
          source_id: s_LLuAxyJhBi3Y6P9yCBgLxr
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），10347：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LLuAxyJhBi3Y6P9yCBgLxr
            source_type: api_record
            title: 中国历代人物传记资料库：王景（CBDB 66759）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66759&o=json
            external_identifier: CBDB:66759
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.965Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8d76gJay11NRoC6JqPciri
        status: active
        display_name: 王景
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王荊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王荊，史料所见人物。本项目依据《中国历代人物传记资料库：王荊（CBDB 523840）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王荊 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8d76gJay11NRoC6JqPciri | 王景 | accepted |

## 外部来源

- [中国历代人物传记资料库：王荊（CBDB 523840）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=523840&o=json)
- [中国历代人物传记资料库：王景（CBDB 66759）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=66759&o=json)
