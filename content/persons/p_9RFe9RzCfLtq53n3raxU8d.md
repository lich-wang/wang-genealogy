---
schema: wang-person/v1
id: p_9RFe9RzCfLtq53n3raxU8d
status: active
merged_into: null
display_name: 王綬
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_p6woavQ6F5bGkL8x6h8B6G
        subject_person_id: p_9RFe9RzCfLtq53n3raxU8d
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dqNfATM3kPknuDFd6Vn6mB
          claim_id: c_p6woavQ6F5bGkL8x6h8B6G
          source_id: s_89q4qpNWok5qa5JTYihq29
          stance: supports
          locator: CBDB:316189
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（316189）
          source: &a1
            id: s_89q4qpNWok5qa5JTYihq29
            source_type: api_record
            title: 中国历代人物传记资料库：王綬（CBDB 316189）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316189&o=json
            external_identifier: CBDB:316189
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.956Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F1JNtNLn4iM81FBTNLa8ZU
        subject_person_id: p_9RFe9RzCfLtq53n3raxU8d
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綬，明人物。嘉靖三十二年進士，籍贯嘉興。（中国历代人物传记资料库 CBDB 316189）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YO3r--nuJOQ9eOt6niuv6Z
          claim_id: c_F1JNtNLn4iM81FBTNLa8ZU
          source_id: s_89q4qpNWok5qa5JTYihq29
          stance: supports
          locator: CBDB:316189
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Re9ugLsW9EINnRWnbV36WF
        subject_person_id: p_9RFe9RzCfLtq53n3raxU8d
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dq3acFriL2Ls2rg2CVb8Es
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ADDOZXQdJ89h2eZMsKYsBe
          claim_id: c_Re9ugLsW9EINnRWnbV36WF
          source_id: s_89q4qpNWok5qa5JTYihq29
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第十六名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dq3acFriL2Ls2rg2CVb8Es
        status: active
        display_name: 王三錫
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王綬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綬 | accepted |
| bio.summary | 王綬，明人物。嘉靖三十二年進士，籍贯嘉興。（中国历代人物传记资料库 CBDB 316189） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_dq3acFriL2Ls2rg2CVb8Es | 王三錫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綬（CBDB 316189）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316189&o=json)
