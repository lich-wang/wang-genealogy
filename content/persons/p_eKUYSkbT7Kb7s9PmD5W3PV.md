---
schema: wang-person/v1
id: p_eKUYSkbT7Kb7s9PmD5W3PV
status: active
merged_into: null
display_name: 段氏
revision: 1
cbdb_id: 236845
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yLRH44PZQxyG7Vq_1PugI3
        subject_person_id: p_eKUYSkbT7Kb7s9PmD5W3PV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 段氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n46mEYXrSEpMgsQVaa8eN6
          claim_id: c_yLRH44PZQxyG7Vq_1PugI3
          source_id: s_fB1shKeQiCn-m-DBMUrrPE
          stance: supports
          locator: CBDB:236845
          quotation: null
          interpretation_note: CBDB 明确记录的王宇配偶
          source: &a1
            id: s_fB1shKeQiCn-m-DBMUrrPE
            source_type: api_record
            title: 中国历代人物传记资料库：段氏(王宇妻)（CBDB 236845）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236845&o=json
            external_identifier: CBDB:236845
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_3ETNPiwnDAwR8r0xMuPZ6G
        subject_person_id: p_AfDGGh6h4aUB2seMFJ2w8R
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_eKUYSkbT7Kb7s9PmD5W3PV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__3wdNDC8z6oWlAEvKUrMD8
          claim_id: c_3ETNPiwnDAwR8r0xMuPZ6G
          source_id: s_fB1shKeQiCn-m-DBMUrrPE
          stance: supports
          locator: 正統四年進士登科錄:一卷，第二甲第二十六名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_AfDGGh6h4aUB2seMFJ2w8R
        status: active
        display_name: 王宇
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 段氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 段氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_AfDGGh6h4aUB2seMFJ2w8R | 王宇 | accepted |

## 外部来源

- [中国历代人物传记资料库：段氏(王宇妻)（CBDB 236845）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=236845&o=json)
