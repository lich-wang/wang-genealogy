---
schema: wang-person/v1
id: p_BXPg4Uzkhp7cbNvNRe48A2
status: active
merged_into: null
display_name: 王璇
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_74qE9M62xW5F6NtrdtRogn
        subject_person_id: p_BXPg4Uzkhp7cbNvNRe48A2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zGV4tRoHvFEKSWPARntVTc
          claim_id: c_74qE9M62xW5F6NtrdtRogn
          source_id: s_YodT4wteBUsdB8NbLrfsj4
          stance: supports
          locator: CBDB:316188
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（316188）
          source: &a1
            id: s_YodT4wteBUsdB8NbLrfsj4
            source_type: api_record
            title: 中国历代人物传记资料库：王璇（CBDB 316188）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316188&o=json
            external_identifier: CBDB:316188
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.956Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ADfG15TZCx3KSPHf3pssd8
        subject_person_id: p_BXPg4Uzkhp7cbNvNRe48A2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璇，明人物。嘉靖三十二年進士。（中国历代人物传记资料库 CBDB 316188）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Q61-dZzUmhU-1MINm3cJcL
          claim_id: c_ADfG15TZCx3KSPHf3pssd8
          source_id: s_YodT4wteBUsdB8NbLrfsj4
          stance: supports
          locator: CBDB:316188
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_PagbIhskp8KMPWS6f2VGuB
        subject_person_id: p_BXPg4Uzkhp7cbNvNRe48A2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dq3acFriL2Ls2rg2CVb8Es
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MUuLvQynb0dGePYTQ5M2X9
          claim_id: c_PagbIhskp8KMPWS6f2VGuB
          source_id: s_YodT4wteBUsdB8NbLrfsj4
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第十六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dq3acFriL2Ls2rg2CVb8Es
        status: active
        display_name: 王三錫
        merged_into_person_id: null
  other: []
---

# 王璇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璇 | accepted |
| bio.summary | 王璇，明人物。嘉靖三十二年進士。（中国历代人物传记资料库 CBDB 316188） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_dq3acFriL2Ls2rg2CVb8Es | 王三錫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璇（CBDB 316188）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316188&o=json)
