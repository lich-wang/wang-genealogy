---
schema: wang-person/v1
id: p_LNBpB1wkkkAFmDzGx9QKbK
status: active
merged_into: null
display_name: 王登才
cbdb_id: 341871
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4QKuRfK3A9VA8Q5eTff1UP
        subject_person_id: p_LNBpB1wkkkAFmDzGx9QKbK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王登才，明人物。明清進士進士，籍贯開州，入仕進士。（中国历代人物传记资料库 CBDB 341871）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_amLlsGbOFcylxHXYYt2KiX
          claim_id: c_4QKuRfK3A9VA8Q5eTff1UP
          source_id: s_zV4wx4N36LvQSN7Fg9h43m
          stance: supports
          locator: CBDB:341871
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_zV4wx4N36LvQSN7Fg9h43m
            source_type: api_record
            title: 中国历代人物传记资料库：王登才（CBDB 341871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341871&o=json
            external_identifier: CBDB:341871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:09.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CAXN4RcECjwNQy8h7F7uMU
        subject_person_id: p_LNBpB1wkkkAFmDzGx9QKbK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王登才
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_nwaG77hVBMyz85LA2xPo9T
          claim_id: c_CAXN4RcECjwNQy8h7F7uMU
          source_id: s_zV4wx4N36LvQSN7Fg9h43m
          stance: supports
          locator: CBDB:341871
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4101-4200）｜历史性依据：CBDB 朝代 = 明
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

# 王登才

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王登才，明人物。明清進士進士，籍贯開州，入仕進士。（中国历代人物传记资料库 CBDB 341871） | accepted |
| name.primary | 王登才 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王登才（CBDB 341871）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=341871&o=json)
