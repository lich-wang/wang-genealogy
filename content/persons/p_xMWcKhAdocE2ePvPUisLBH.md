---
schema: wang-person/v1
id: p_xMWcKhAdocE2ePvPUisLBH
status: active
merged_into: null
display_name: 王上林
cbdb_id: 333538
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xgcHU13CB7brVmke3uwPWd
        subject_person_id: p_xMWcKhAdocE2ePvPUisLBH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王上林，明人物。嘉靖四十四年進士，籍贯掖縣，曾任教授。（中国历代人物传记资料库 CBDB 333538）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_DykD6ylR8PpeV7A805yyF3
          claim_id: c_xgcHU13CB7brVmke3uwPWd
          source_id: s_6xRpY98Q1Ckbizbt8hygfY
          stance: supports
          locator: CBDB:333538
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_6xRpY98Q1Ckbizbt8hygfY
            source_type: api_record
            title: 中国历代人物传记资料库：王上林（CBDB 333538）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333538&o=json
            external_identifier: CBDB:333538
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_V45Yvy8n2iHj9VxQBS1F6y
        subject_person_id: p_xMWcKhAdocE2ePvPUisLBH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王上林
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Eof7Aqg2hQH83BxX8r8wgM
          claim_id: c_V45Yvy8n2iHj9VxQBS1F6y
          source_id: s_6xRpY98Q1Ckbizbt8hygfY
          stance: supports
          locator: CBDB:333538
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
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
  descendants: []
  other: []
---

# 王上林

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王上林，明人物。嘉靖四十四年進士，籍贯掖縣，曾任教授。（中国历代人物传记资料库 CBDB 333538） | accepted |
| name.primary | 王上林 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王上林（CBDB 333538）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333538&o=json)
