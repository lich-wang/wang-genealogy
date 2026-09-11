---
schema: wang-person/v1
id: p_bfo5keoL8KwwCJ1osVbesR
status: active
merged_into: null
display_name: 王義
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uRtS2ySwNpnSf36xSvai1W
        subject_person_id: p_bfo5keoL8KwwCJ1osVbesR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Z4c5R8g88AAU25LzGUb7KQ
          claim_id: c_uRtS2ySwNpnSf36xSvai1W
          source_id: s_RRYqU8BFLLK8X2iJL2geL2
          stance: supports
          locator: CBDB:279347
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（279347）
          source: &a1
            id: s_RRYqU8BFLLK8X2iJL2geL2
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 279347）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279347&o=json
            external_identifier: CBDB:279347
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.980Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KqYt178eBX1jWe3iknsm4K
        subject_person_id: p_bfo5keoL8KwwCJ1osVbesR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義，明人物。正德六年進士，籍贯宣城。（中国历代人物传记资料库 CBDB 279347）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VVUPKY4Q3v_92kweWiZLBu
          claim_id: c_KqYt178eBX1jWe3iknsm4K
          source_id: s_RRYqU8BFLLK8X2iJL2geL2
          stance: supports
          locator: CBDB:279347
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

# 王義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王義 | accepted |
| bio.summary | 王義，明人物。正德六年進士，籍贯宣城。（中国历代人物传记资料库 CBDB 279347） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王義（CBDB 279347）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279347&o=json)
