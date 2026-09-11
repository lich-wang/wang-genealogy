---
schema: wang-person/v1
id: p_QAdHNFk1MC1wc3rRB6aHXb
status: active
merged_into: null
display_name: 王伯潤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AysLJBCPLGVE4mLZXa3EGT
        subject_person_id: p_QAdHNFk1MC1wc3rRB6aHXb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯潤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aQ8yc5MoFL6PW2X4C44Ha6
          claim_id: c_AysLJBCPLGVE4mLZXa3EGT
          source_id: s_PGHKxjWS2SoAmqzLw8EyvV
          stance: supports
          locator: CBDB:635975
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635975）
          source: &a1
            id: s_PGHKxjWS2SoAmqzLw8EyvV
            source_type: api_record
            title: 中国历代人物传记资料库：王伯潤（CBDB 635975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635975&o=json
            external_identifier: CBDB:635975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.848Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bkHMkrzAhUuVouC3y4DW2z
        subject_person_id: p_QAdHNFk1MC1wc3rRB6aHXb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王伯潤，清人物。籍贯福山，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 635975）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__X9CH0-GPQiiAAcnnE3GPv
          claim_id: c_bkHMkrzAhUuVouC3y4DW2z
          source_id: s_PGHKxjWS2SoAmqzLw8EyvV
          stance: supports
          locator: CBDB:635975
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

# 王伯潤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王伯潤 | accepted |
| bio.summary | 王伯潤，清人物。籍贯福山，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 635975） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王伯潤（CBDB 635975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635975&o=json)
