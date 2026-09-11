---
schema: wang-person/v1
id: p_TM7S9BBBHG197B8XfNvgf5
status: active
merged_into: null
display_name: 王武子
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_es49t7iaH2Ja3pZze9S66n
        subject_person_id: p_TM7S9BBBHG197B8XfNvgf5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王武子
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BbgoNUSxpmB6pfoc3cxCHN
          claim_id: c_es49t7iaH2Ja3pZze9S66n
          source_id: s_H9ptB2xwPH6t3oYWLt2NCc
          stance: supports
          locator: CBDB:549760
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（549760）
          source: &a1
            id: s_H9ptB2xwPH6t3oYWLt2NCc
            source_type: api_record
            title: 中国历代人物传记资料库：王武子（CBDB 549760）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=549760&o=json
            external_identifier: CBDB:549760
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.560Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gdCWJLYaEkWgN76QzXJ9i9
        subject_person_id: p_TM7S9BBBHG197B8XfNvgf5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王武子，宋人物。籍贯豐城，入仕進士。（中国历代人物传记资料库 CBDB 549760）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7nHckhNZ4gFKW8cZipwmhd
          claim_id: c_gdCWJLYaEkWgN76QzXJ9i9
          source_id: s_H9ptB2xwPH6t3oYWLt2NCc
          stance: supports
          locator: CBDB:549760
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
  descendants: []
  other: []
---

# 王武子

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王武子 | accepted |
| bio.summary | 王武子，宋人物。籍贯豐城，入仕進士。（中国历代人物传记资料库 CBDB 549760） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王武子（CBDB 549760）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=549760&o=json)
