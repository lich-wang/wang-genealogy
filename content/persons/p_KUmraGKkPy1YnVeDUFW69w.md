---
schema: wang-person/v1
id: p_KUmraGKkPy1YnVeDUFW69w
status: active
merged_into: null
display_name: 何同文
revision: 1
cbdb_id: 122031
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RQTc5h3WidHHQeFELmkAwP
        subject_person_id: p_KUmraGKkPy1YnVeDUFW69w
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 何同文，史料所见人物。本项目依据《中国历代人物传记资料库：何同文（CBDB 122031）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2WWotpBvGNHeg-SpO6MUz9
          claim_id: c_RQTc5h3WidHHQeFELmkAwP
          source_id: s_uSgZdi6dni6ml7DOM2pvuH
          stance: supports
          locator: CBDB:122031
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_uSgZdi6dni6ml7DOM2pvuH
            source_type: api_record
            title: 中国历代人物传记资料库：何同文（CBDB 122031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122031&o=json
            external_identifier: CBDB:122031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_A55-4AW0BxnWVzYucG5PZz
        subject_person_id: p_KUmraGKkPy1YnVeDUFW69w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 何同文
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UB1Yw0ijqw0oGjgP1Mb85X
          claim_id: c_A55-4AW0BxnWVzYucG5PZz
          source_id: s_uSgZdi6dni6ml7DOM2pvuH
          stance: supports
          locator: CBDB:122031
          quotation: null
          interpretation_note: CBDB 明确记录的王瑞蘭配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_fpOluhnJgT0ahj2aYP4Mxt
        subject_person_id: p_6HFYHDHS5E6MnCtz3M49ZT
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_KUmraGKkPy1YnVeDUFW69w
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rZzIvB8-q7vritz3dgFid4
          claim_id: c_fpOluhnJgT0ahj2aYP4Mxt
          source_id: s_uSgZdi6dni6ml7DOM2pvuH
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2330, HuWenKai #245：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_6HFYHDHS5E6MnCtz3M49ZT
        status: active
        display_name: 王瑞蘭
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 何同文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 何同文，史料所见人物。本项目依据《中国历代人物传记资料库：何同文（CBDB 122031）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 何同文 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_6HFYHDHS5E6MnCtz3M49ZT | 王瑞蘭 | accepted |

## 外部来源

- [中国历代人物传记资料库：何同文（CBDB 122031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=122031&o=json)
