---
schema: wang-person/v1
id: p_CNyj7yA6yaeSYkHZ358v8w
status: active
merged_into: null
display_name: 趙氏
revision: 1
cbdb_id: 121356
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RVJMDiBMutnaKvZcULSkPV
        subject_person_id: p_CNyj7yA6yaeSYkHZ358v8w
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 趙氏，史料所见人物。本项目依据《中国历代人物传记资料库：趙氏(王遇妻)（CBDB 121356）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_80Xm_Oqi0EWRRokBYSQ0RQ
          claim_id: c_RVJMDiBMutnaKvZcULSkPV
          source_id: s_-oOhEwGeRv_TBJ5audaZpS
          stance: supports
          locator: CBDB:121356
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_-oOhEwGeRv_TBJ5audaZpS
            source_type: api_record
            title: 中国历代人物传记资料库：趙氏(王遇妻)（CBDB 121356）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121356&o=json
            external_identifier: CBDB:121356
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Gs6EsVDQRLAZCcD2Mk5kb8
        subject_person_id: p_CNyj7yA6yaeSYkHZ358v8w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 趙氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UB3p_U31a4VDN8w4B6s0o6
          claim_id: c_Gs6EsVDQRLAZCcD2Mk5kb8
          source_id: s_-oOhEwGeRv_TBJ5audaZpS
          stance: supports
          locator: CBDB:121356
          quotation: null
          interpretation_note: CBDB 明确记录的王遇配偶
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
        id: c_Ds1jTp33Ihz0MKoPFqf6uc
        subject_person_id: p_sum6MVFhip35P36Z3yzT7J
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_CNyj7yA6yaeSYkHZ358v8w
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A55IQsN9uXOYqPNBTVrNb0
          claim_id: c_Ds1jTp33Ihz0MKoPFqf6uc
          source_id: s_-oOhEwGeRv_TBJ5audaZpS
          stance: supports
          locator: 宋史：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sum6MVFhip35P36Z3yzT7J
        status: active
        display_name: 王遇
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 趙氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 趙氏，史料所见人物。本项目依据《中国历代人物传记资料库：趙氏(王遇妻)（CBDB 121356）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 趙氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_sum6MVFhip35P36Z3yzT7J | 王遇 | accepted |

## 外部来源

- [中国历代人物传记资料库：趙氏(王遇妻)（CBDB 121356）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121356&o=json)
