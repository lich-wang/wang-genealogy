---
schema: wang-person/v1
id: p_FZxctikAy2KZyE9je3jt6J
status: active
merged_into: null
display_name: 王彥文
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8cuZFM1yrdjv2SRf63gmLK
        subject_person_id: p_FZxctikAy2KZyE9je3jt6J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥文
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LCEawFRdBDNEjfF9Lu2aY7
          claim_id: c_8cuZFM1yrdjv2SRf63gmLK
          source_id: s_CyKdcJpuedt4P93tdF2iin
          stance: supports
          locator: CBDB:334032
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（334032）
          source: &a1
            id: s_CyKdcJpuedt4P93tdF2iin
            source_type: api_record
            title: 中国历代人物传记资料库：王彥文（CBDB 334032）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334032&o=json
            external_identifier: CBDB:334032
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.428Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5dVqrEaaofWR2KyZ47Chwr
        subject_person_id: p_FZxctikAy2KZyE9je3jt6J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彥文，明人物。隆慶二年進士。（中国历代人物传记资料库 CBDB 334032）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TKrynbQM7aoO16G3G7mkNU
          claim_id: c_5dVqrEaaofWR2KyZ47Chwr
          source_id: s_CyKdcJpuedt4P93tdF2iin
          stance: supports
          locator: CBDB:334032
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
        id: c_Xjdpu0uXloCmyD4bgROXDy
        subject_person_id: p_FZxctikAy2KZyE9je3jt6J
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Q5jiewEf7qr9FT4CBgkaYV
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_p9Iy0d3yxmjRRxKjVeTehD
          claim_id: c_Xjdpu0uXloCmyD4bgROXDy
          source_id: s_CyKdcJpuedt4P93tdF2iin
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第四十二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Q5jiewEf7qr9FT4CBgkaYV
        status: active
        display_name: 王繼祖
        merged_into_person_id: null
  other: []
---

# 王彥文

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彥文 | accepted |
| bio.summary | 王彥文，明人物。隆慶二年進士。（中国历代人物传记资料库 CBDB 334032） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Q5jiewEf7qr9FT4CBgkaYV | 王繼祖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王彥文（CBDB 334032）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334032&o=json)
