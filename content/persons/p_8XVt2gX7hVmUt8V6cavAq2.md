---
schema: wang-person/v1
id: p_8XVt2gX7hVmUt8V6cavAq2
status: active
merged_into: null
display_name: 王廷鐸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_g7z9iLP93PHDXiFNLNUv8g
        subject_person_id: p_8XVt2gX7hVmUt8V6cavAq2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷鐸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ULzYLRCFuiJvazoNPNXXBQ
          claim_id: c_g7z9iLP93PHDXiFNLNUv8g
          source_id: s_4gjLN9qfjGZ7f564C6WfF4
          stance: supports
          locator: CBDB:414492
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（414492）
          source: &a1
            id: s_4gjLN9qfjGZ7f564C6WfF4
            source_type: api_record
            title: 中国历代人物传记资料库：王廷鐸（CBDB 414492）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414492&o=json
            external_identifier: CBDB:414492
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.958Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Zbr31Q5gRX9MWAbrpZPYke
        subject_person_id: p_8XVt2gX7hVmUt8V6cavAq2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cSj3hyxbGCpLQuSXKaqYdh
          claim_id: c_Zbr31Q5gRX9MWAbrpZPYke
          source_id: s_4gjLN9qfjGZ7f564C6WfF4
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

# 王廷鐸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷鐸 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷鐸（CBDB 414492）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414492&o=json)
