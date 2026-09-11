---
schema: wang-person/v1
id: p_V6qLt7p3ECKTGwiRCVRL1F
status: active
merged_into: null
display_name: 萬氏
revision: 1
cbdb_id: 251785
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_X3S0vkBjFBLXUYjWMal38g
        subject_person_id: p_V6qLt7p3ECKTGwiRCVRL1F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 萬氏，明人物。成化十四年進士。（中国历代人物传记资料库 CBDB 251785）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y85qPc_9EB9OWdHH3TlywT
          claim_id: c_X3S0vkBjFBLXUYjWMal38g
          source_id: s_73ksPFJe3sXtxq5gaVPuR1
          stance: supports
          locator: CBDB:251785
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_73ksPFJe3sXtxq5gaVPuR1
            source_type: api_record
            title: 中国历代人物传记资料库：萬氏(王建妻)（CBDB 251785）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251785&o=json
            external_identifier: CBDB:251785
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3snEKEK-5eoyfBu8NH188S
        subject_person_id: p_V6qLt7p3ECKTGwiRCVRL1F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 萬氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kFdLw_chNAa7ZoeyJXjf3l
          claim_id: c_3snEKEK-5eoyfBu8NH188S
          source_id: s_73ksPFJe3sXtxq5gaVPuR1
          stance: supports
          locator: CBDB:251785
          quotation: null
          interpretation_note: CBDB 明确记录的王建配偶
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
        id: c_bwDPU3tdt7bWFDThlulPfY
        subject_person_id: p_kBqE6QprrhgLRYUsgfWdoz
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_V6qLt7p3ECKTGwiRCVRL1F
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jxFKTszM7ui7sUkOsigVuR
          claim_id: c_bwDPU3tdt7bWFDThlulPfY
          source_id: s_73ksPFJe3sXtxq5gaVPuR1
          stance: supports
          locator: 成化十四年進士登科錄:一卷，第三甲第十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_kBqE6QprrhgLRYUsgfWdoz
        status: active
        display_name: 王建
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 萬氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 萬氏，明人物。成化十四年進士。（中国历代人物传记资料库 CBDB 251785） | accepted |
| name.primary | 萬氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_kBqE6QprrhgLRYUsgfWdoz | 王建 | accepted |

## 外部来源

- [中国历代人物传记资料库：萬氏(王建妻)（CBDB 251785）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251785&o=json)
