---
schema: wang-person/v1
id: p_LdfbQEGo1ayrq6KX3HotH2
status: active
merged_into: null
display_name: 王攀龍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TcjL88f6ruHVJDGryKKLDT
        subject_person_id: p_LdfbQEGo1ayrq6KX3HotH2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王攀龍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_au8JGnAvUUynvorj7yS8S3
          claim_id: c_TcjL88f6ruHVJDGryKKLDT
          source_id: s_HKQZeGbFJwUrK58zdUTUae
          stance: supports
          locator: CBDB:638163
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638163）
          source: &a1
            id: s_HKQZeGbFJwUrK58zdUTUae
            source_type: api_record
            title: 中国历代人物传记资料库：王攀龍（CBDB 638163）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638163&o=json
            external_identifier: CBDB:638163
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.617Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cp54yc8XNPtSeV7Cq2MLZX
        subject_person_id: p_LdfbQEGo1ayrq6KX3HotH2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王攀龍，清人物。籍贯山西省，入仕行伍，曾任把總。（中国历代人物传记资料库 CBDB 638163）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZWAkhxBZnvXqji282cyHJW
          claim_id: c_cp54yc8XNPtSeV7Cq2MLZX
          source_id: s_HKQZeGbFJwUrK58zdUTUae
          stance: supports
          locator: CBDB:638163
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

# 王攀龍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王攀龍 | accepted |
| bio.summary | 王攀龍，清人物。籍贯山西省，入仕行伍，曾任把總。（中国历代人物传记资料库 CBDB 638163） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王攀龍（CBDB 638163）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638163&o=json)
