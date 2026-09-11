---
schema: wang-person/v1
id: p_FpqHn8pwLrMWfy1VHw9FJa
status: active
merged_into: null
display_name: 王信
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jECfFxYG1bje342vLpHA2J
        subject_person_id: p_FpqHn8pwLrMWfy1VHw9FJa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pCNPAS2Dux7fVb2CKTrSNd
          claim_id: c_jECfFxYG1bje342vLpHA2J
          source_id: s_H4sam77qGJPQZBgx4LDicZ
          stance: supports
          locator: CBDB:699444
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（699444）
          source: &a1
            id: s_H4sam77qGJPQZBgx4LDicZ
            source_type: api_record
            title: 中国历代人物传记资料库：王信（CBDB 699444）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699444&o=json
            external_identifier: CBDB:699444
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.761Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tA7sV4jK97K66jiWr8EabB
        subject_person_id: p_FpqHn8pwLrMWfy1VHw9FJa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王信，史料所见人物。本项目依据《中国历代人物传记资料库：王信（CBDB 699444）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9yeXbDOhNM2fDFUmpgIjv3
          claim_id: c_tA7sV4jK97K66jiWr8EabB
          source_id: s_H4sam77qGJPQZBgx4LDicZ
          stance: supports
          locator: CBDB:699444
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Z20eGd0qMBDKUdEHlnESjE
        subject_person_id: p_P9pk3GX9ak89DEB5HLBBuW
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FpqHn8pwLrMWfy1VHw9FJa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iZzzwX3Ueg6u7hYPJgwsLb
          claim_id: c_Z20eGd0qMBDKUdEHlnESjE
          source_id: s_H4sam77qGJPQZBgx4LDicZ
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，80：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_P9pk3GX9ak89DEB5HLBBuW
        status: active
        display_name: 王用
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_u30OF1aCp9E-IYLGgwTvP7
        subject_person_id: p_FpqHn8pwLrMWfy1VHw9FJa
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_s6RRAfZ4AkqELrAQg77nFz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wmli5E2IB1eJ3rKub19Kzk
          claim_id: c_u30OF1aCp9E-IYLGgwTvP7
          source_id: s_fNu1KQG6uIk_DCxU46aSoL
          stance: supports
          locator: 新出宋代墓志碑刻輯錄，48：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fNu1KQG6uIk_DCxU46aSoL
            source_type: api_record
            title: 中国历代人物传记资料库：酒氏(王信妻)（CBDB 699446）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699446&o=json
            external_identifier: CBDB:699446
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_s6RRAfZ4AkqELrAQg77nFz
        status: active
        display_name: 酒氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王信

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王信 | accepted |
| bio.summary | 王信，史料所见人物。本项目依据《中国历代人物传记资料库：王信（CBDB 699444）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_P9pk3GX9ak89DEB5HLBBuW | 王用 | accepted |
| spouses | p_s6RRAfZ4AkqELrAQg77nFz | 酒氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：酒氏(王信妻)（CBDB 699446）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699446&o=json)
- [中国历代人物传记资料库：王信（CBDB 699444）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699444&o=json)
