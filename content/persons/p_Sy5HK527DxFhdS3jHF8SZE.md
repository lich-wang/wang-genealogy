---
schema: wang-person/v1
id: p_Sy5HK527DxFhdS3jHF8SZE
status: active
merged_into: null
display_name: 王誥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aPXAA2vZESVDfTShPamSN7
        subject_person_id: p_Sy5HK527DxFhdS3jHF8SZE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BNC57L5PqVCw9jjmAQ5vwh
          claim_id: c_aPXAA2vZESVDfTShPamSN7
          source_id: s_hKmV1a1go7mK3m1Jj2K2n4
          stance: supports
          locator: CBDB:39162
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39162）
          source: &a1
            id: s_hKmV1a1go7mK3m1Jj2K2n4
            source_type: api_record
            title: 中国历代人物传记资料库：王誥（CBDB 39162）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39162&o=json
            external_identifier: CBDB:39162
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.601Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TxCNk2eeA4qsXDNaQXZGr5
        subject_person_id: p_Sy5HK527DxFhdS3jHF8SZE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誥，宋人物。籍贯莆田，入仕進士。（中国历代人物传记资料库 CBDB 39162）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_coM6yufc3O23g1yidiN-Qh
          claim_id: c_TxCNk2eeA4qsXDNaQXZGr5
          source_id: s_hKmV1a1go7mK3m1Jj2K2n4
          stance: supports
          locator: CBDB:39162
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

# 王誥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王誥 | accepted |
| bio.summary | 王誥，宋人物。籍贯莆田，入仕進士。（中国历代人物传记资料库 CBDB 39162） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王誥（CBDB 39162）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39162&o=json)
