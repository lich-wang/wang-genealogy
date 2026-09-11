---
schema: wang-person/v1
id: p_TRCuTPTczobHm15RbJcfNP
status: active
merged_into: null
display_name: 劉氏
revision: 1
cbdb_id: 150699
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_I_Jo1tof8k0IRPDfv7xBP1
        subject_person_id: p_TRCuTPTczobHm15RbJcfNP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 劉氏，史料所见人物。本项目依据《中国历代人物传记资料库：劉氏(王素臣妻)（CBDB 150699）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LB3MJjcf_PPp8UlAWNCCxK
          claim_id: c_I_Jo1tof8k0IRPDfv7xBP1
          source_id: s_AhG9PWdh8TRTt0s9UFtdJP
          stance: supports
          locator: CBDB:150699
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_AhG9PWdh8TRTt0s9UFtdJP
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王素臣妻)（CBDB 150699）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150699&o=json
            external_identifier: CBDB:150699
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CazrlCDmtD_U26cy80Fjo1
        subject_person_id: p_TRCuTPTczobHm15RbJcfNP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 劉氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8GLcWlSkdnDE19IMIoxkRu
          claim_id: c_CazrlCDmtD_U26cy80Fjo1
          source_id: s_AhG9PWdh8TRTt0s9UFtdJP
          stance: supports
          locator: CBDB:150699
          quotation: null
          interpretation_note: CBDB 明确记录的王素臣配偶
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
        id: c_H4CWZtQItsy21gdUb3CREH
        subject_person_id: p_bewqQm7i6ZaUyZ1bMYLsJi
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_TRCuTPTczobHm15RbJcfNP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fJq3mE25fzIZZ9HZrHxsQq
          claim_id: c_H4CWZtQItsy21gdUb3CREH
          source_id: s_AhG9PWdh8TRTt0s9UFtdJP
          stance: supports
          locator: 唐代墓誌匯編:二卷，Jinglong 5：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_bewqQm7i6ZaUyZ1bMYLsJi
        status: active
        display_name: 王素臣
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 劉氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 劉氏，史料所见人物。本项目依据《中国历代人物传记资料库：劉氏(王素臣妻)（CBDB 150699）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 劉氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_bewqQm7i6ZaUyZ1bMYLsJi | 王素臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王素臣妻)（CBDB 150699）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150699&o=json)
