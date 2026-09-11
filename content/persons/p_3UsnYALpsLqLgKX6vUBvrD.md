---
schema: wang-person/v1
id: p_3UsnYALpsLqLgKX6vUBvrD
status: active
merged_into: null
display_name: 王淇
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vyX6LgyH8nxw59RF8xer6p
        subject_person_id: p_3UsnYALpsLqLgKX6vUBvrD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uTUN48nB1AWgEspNy7rM6u
          claim_id: c_vyX6LgyH8nxw59RF8xer6p
          source_id: s_dRTXLFNFKDpJZN66tKKwpB
          stance: supports
          locator: CBDB:165256
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（165256）
          source: &a1
            id: s_dRTXLFNFKDpJZN66tKKwpB
            source_type: api_record
            title: 中国历代人物传记资料库：王淇（CBDB 165256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=165256&o=json
            external_identifier: CBDB:165256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.974Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1QrAM3r4293N3Au9DS8tQS
        subject_person_id: p_3UsnYALpsLqLgKX6vUBvrD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淇，史料所见人物。本项目依据《中国历代人物传记资料库：王淇（CBDB 165256）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gZzpV3WqBkGFJsANBAa0Du
          claim_id: c_1QrAM3r4293N3Au9DS8tQS
          source_id: s_dRTXLFNFKDpJZN66tKKwpB
          stance: supports
          locator: CBDB:165256
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KDr0LQth7v7Nem-IJvWAW4
        subject_person_id: p_7QnGBiPzUFUWD8rSwCwAQh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3UsnYALpsLqLgKX6vUBvrD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Urt2w1hbiiztdmH19DnZvQ
          claim_id: c_KDr0LQth7v7Nem-IJvWAW4
          source_id: s_dRTXLFNFKDpJZN66tKKwpB
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Dali27：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7QnGBiPzUFUWD8rSwCwAQh
        status: active
        display_name: 王鈞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王淇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王淇 | accepted |
| bio.summary | 王淇，史料所见人物。本项目依据《中国历代人物传记资料库：王淇（CBDB 165256）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7QnGBiPzUFUWD8rSwCwAQh | 王鈞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淇（CBDB 165256）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=165256&o=json)
