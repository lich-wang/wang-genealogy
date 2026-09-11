---
schema: wang-person/v1
id: p_B91xwNrDqFgSbPCAbCxGqY
status: active
merged_into: null
display_name: 王侃
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_anNCsv8Rz5EjiVSiYRXDPH
        subject_person_id: p_B91xwNrDqFgSbPCAbCxGqY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王侃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_f3zLTj8vXuLQK5YSaqcGE9
          claim_id: c_anNCsv8Rz5EjiVSiYRXDPH
          source_id: s_L8nAJWTtDqSqXrt8PCg1PA
          stance: supports
          locator: CBDB:26892
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（26892）
          source: &a1
            id: s_L8nAJWTtDqSqXrt8PCg1PA
            source_type: api_record
            title: 中国历代人物传记资料库：王侃（CBDB 26892）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26892&o=json
            external_identifier: CBDB:26892
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.950Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wgNaKrrQsutPL97iEKYsFK
        subject_person_id: p_B91xwNrDqFgSbPCAbCxGqY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王侃，宋人物。籍贯揚子，身份为地方士人/鄉紳、士人。（中国历代人物传记资料库 CBDB 26892）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4gQyndSL1bxWJnb_XvK_I2
          claim_id: c_wgNaKrrQsutPL97iEKYsFK
          source_id: s_L8nAJWTtDqSqXrt8PCg1PA
          stance: supports
          locator: CBDB:26892
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_toX2rqXg0-tgo5gFTynULv
        subject_person_id: p_3JngKiuxRcN8yGJHdnL5MC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_B91xwNrDqFgSbPCAbCxGqY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v6AJ0DPOo59dvrZNKcLoSO
          claim_id: c_toX2rqXg0-tgo5gFTynULv
          source_id: s_L8nAJWTtDqSqXrt8PCg1PA
          stance: supports
          locator: CBDB 双向互证（父 王箱 ⇄ 子 王侃）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_3JngKiuxRcN8yGJHdnL5MC
        status: active
        display_name: 王箱
        merged_into_person_id: null
  children:
    - claim:
        id: c_9tRMkXBPfDB8w5Nj5EHFWO
        subject_person_id: p_B91xwNrDqFgSbPCAbCxGqY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YorBp3QdkukixtBGPrhSQo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MDC8EzpBvYAv3TOMR_2nM6
          claim_id: c_9tRMkXBPfDB8w5Nj5EHFWO
          source_id: s_L8nAJWTtDqSqXrt8PCg1PA
          stance: supports
          locator: CBDB 双向互证（子 王伯芻 ⇄ 父 王侃）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_YorBp3QdkukixtBGPrhSQo
        status: active
        display_name: 王伯芻
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王侃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王侃 | accepted |
| bio.summary | 王侃，宋人物。籍贯揚子，身份为地方士人/鄉紳、士人。（中国历代人物传记资料库 CBDB 26892） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3JngKiuxRcN8yGJHdnL5MC | 王箱 | accepted |
| children | p_YorBp3QdkukixtBGPrhSQo | 王伯芻 | accepted |

## 外部来源

- [中国历代人物传记资料库：王侃（CBDB 26892）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26892&o=json)
