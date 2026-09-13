---
schema: wang-person/v1
id: p_Pxigk9D7prDgC8K8RAnBDM
status: active
merged_into: null
display_name: 王伯堃
cbdb_id: 441162
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VJZCt4K2oYbMxANvEopSP1
        subject_person_id: p_Pxigk9D7prDgC8K8RAnBDM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯堃，清人物。籍贯諸城。（中国历代人物传记资料库 CBDB 441162）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_r1VCsLRLuxQoyYLraM4TGT
          claim_id: c_VJZCt4K2oYbMxANvEopSP1
          source_id: s_3PGkunHjGwMn65DpxQfERr
          stance: supports
          locator: CBDB:441162
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_3PGkunHjGwMn65DpxQfERr
            source_type: api_record
            title: 中国历代人物传记资料库：王伯堃（CBDB 441162）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=441162&o=json
            external_identifier: CBDB:441162
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:12.805Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_VUFTFeczWUs6Dco5KiburR
        subject_person_id: p_Pxigk9D7prDgC8K8RAnBDM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯堃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_r6uCNsTkbj7jym2vPThb1G
          claim_id: c_VUFTFeczWUs6Dco5KiburR
          source_id: s_3PGkunHjGwMn65DpxQfERr
          stance: supports
          locator: CBDB:441162
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6501-6600）｜历史性依据：CBDB 朝代 = 清
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

# 王伯堃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王伯堃，清人物。籍贯諸城。（中国历代人物传记资料库 CBDB 441162） | accepted |
| name.primary | 王伯堃 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王伯堃（CBDB 441162）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=441162&o=json)
