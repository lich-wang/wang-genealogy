---
schema: wang-person/v1
id: p_HZwkKexk2XLbosvJUAyZ7Y
status: active
merged_into: null
display_name: 王七兒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LgaXuR2mTy7wk3ijPC2PTN
        subject_person_id: p_HZwkKexk2XLbosvJUAyZ7Y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王七兒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5imRKEEsKvo38wgL2AHJae
          claim_id: c_LgaXuR2mTy7wk3ijPC2PTN
          source_id: s_4jM26nmDRWtLLJm5iPQcFm
          stance: supports
          locator: CBDB:699456
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（699456）
          source: &a1
            id: s_4jM26nmDRWtLLJm5iPQcFm
            source_type: api_record
            title: 中国历代人物传记资料库：王七兒（CBDB 699456）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699456&o=json
            external_identifier: CBDB:699456
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.585Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TQ8AkwNTQCWEKsto58Z3Yo
        subject_person_id: p_HZwkKexk2XLbosvJUAyZ7Y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3YR6UHq122tGQD6YFFTHZK
          claim_id: c_TQ8AkwNTQCWEKsto58Z3Yo
          source_id: s_4jM26nmDRWtLLJm5iPQcFm
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王七兒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王七兒 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王七兒（CBDB 699456）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=699456&o=json)
