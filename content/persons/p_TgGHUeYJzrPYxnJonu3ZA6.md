---
schema: wang-person/v1
id: p_TgGHUeYJzrPYxnJonu3ZA6
status: active
merged_into: null
display_name: 王世冬
cbdb_id: 384845
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Afia74AzABHUqPggEFQTLT
        subject_person_id: p_TgGHUeYJzrPYxnJonu3ZA6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世冬，宋人物。籍贯蘭溪，入仕進士。（中国历代人物传记资料库 CBDB 384845）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_WWZGz-mnypXpr4WeVRXP5D
          claim_id: c_Afia74AzABHUqPggEFQTLT
          source_id: s_DnYBkQMXFtXGBkfh8Vwdsf
          stance: supports
          locator: CBDB:384845
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_DnYBkQMXFtXGBkfh8Vwdsf
            source_type: api_record
            title: 中国历代人物传记资料库：王世冬（CBDB 384845）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384845&o=json
            external_identifier: CBDB:384845
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:21.809Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_kdxzao2reH6M7SS5hhNBF9
        subject_person_id: p_TgGHUeYJzrPYxnJonu3ZA6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世冬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_WELHVpLR2JxGfKZA8pZQXG
          claim_id: c_kdxzao2reH6M7SS5hhNBF9
          source_id: s_DnYBkQMXFtXGBkfh8Vwdsf
          stance: supports
          locator: CBDB:384845
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4801-4900）｜历史性依据：CBDB 朝代 = 宋
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

# 王世冬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王世冬，宋人物。籍贯蘭溪，入仕進士。（中国历代人物传记资料库 CBDB 384845） | accepted |
| name.primary | 王世冬 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王世冬（CBDB 384845）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384845&o=json)
