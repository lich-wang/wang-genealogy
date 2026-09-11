---
schema: wang-person/v1
id: p_vUusHiy6zpsFwCywaeg2Lv
status: active
merged_into: null
display_name: 朱氏
revision: 1
cbdb_id: 570203
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wBu5-c4iVOu-ctT-1Ut5NN
        subject_person_id: p_vUusHiy6zpsFwCywaeg2Lv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 朱氏，史料所见人物。本项目依据《中国历代人物传记资料库：朱氏(王繼愚妻)（CBDB 570203）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OY1eHSH0zczufQdZh0E6ZH
          claim_id: c_wBu5-c4iVOu-ctT-1Ut5NN
          source_id: s_SDQbun3lIQB19sltqhK1Y7
          stance: supports
          locator: CBDB:570203
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_SDQbun3lIQB19sltqhK1Y7
            source_type: api_record
            title: 中国历代人物传记资料库：朱氏(王繼愚妻)（CBDB 570203）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570203&o=json
            external_identifier: CBDB:570203
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wQ3e4fF4xYDk3fEQAUmiTt
        subject_person_id: p_vUusHiy6zpsFwCywaeg2Lv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 朱氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DgpWY8EFFZI7iRCmQPEWQy
          claim_id: c_wQ3e4fF4xYDk3fEQAUmiTt
          source_id: s_SDQbun3lIQB19sltqhK1Y7
          stance: supports
          locator: CBDB:570203
          quotation: null
          interpretation_note: CBDB 明确记录的王繼愚配偶
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
        id: c_kNpbQaW43NYFSpHhIk9rC8
        subject_person_id: p_2exs9aLFBptzZ7aULpMbnF
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_vUusHiy6zpsFwCywaeg2Lv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WFT17S21owaU0N1Pq2vYir
          claim_id: c_kNpbQaW43NYFSpHhIk9rC8
          source_id: s_SDQbun3lIQB19sltqhK1Y7
          stance: supports
          locator: 紹興府志:八十卷，lgid=316802：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2exs9aLFBptzZ7aULpMbnF
        status: active
        display_name: 王繼愚
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 朱氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 朱氏，史料所见人物。本项目依据《中国历代人物传记资料库：朱氏(王繼愚妻)（CBDB 570203）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 朱氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_2exs9aLFBptzZ7aULpMbnF | 王繼愚 | accepted |

## 外部来源

- [中国历代人物传记资料库：朱氏(王繼愚妻)（CBDB 570203）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=570203&o=json)
