---
schema: wang-person/v1
id: p_q4FXoTb8HM97PMnGJLjicj
status: active
merged_into: null
display_name: 王錫模
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hN8vZT1224ZXFyHgAy8VJB
        subject_person_id: p_q4FXoTb8HM97PMnGJLjicj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫模
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7RTDUoWZxqxCqH38JzGyFL
          claim_id: c_hN8vZT1224ZXFyHgAy8VJB
          source_id: s_BwCWZsKJPSNj8fPjDxLAwF
          stance: supports
          locator: CBDB:562435
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（562435）
          source: &a1
            id: s_BwCWZsKJPSNj8fPjDxLAwF
            source_type: api_record
            title: 中国历代人物传记资料库：王錫模（CBDB 562435）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562435&o=json
            external_identifier: CBDB:562435
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.561Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H2UChvA3C4hq5LgADachkW
        subject_person_id: p_q4FXoTb8HM97PMnGJLjicj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫模，清人物。籍贯山陰，身份为為善鄉里。（中国历代人物传记资料库 CBDB 562435）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gUQb-19pMwhLoKB7fbZkZB
          claim_id: c_H2UChvA3C4hq5LgADachkW
          source_id: s_BwCWZsKJPSNj8fPjDxLAwF
          stance: supports
          locator: CBDB:562435
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
  ancestors:
    - claim:
        id: c_pA7HBRLEt72I3ao0zbSvy4
        subject_person_id: p_4YX2DhkCvTc6ZA91MPgT5B
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_q4FXoTb8HM97PMnGJLjicj
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2Ce4YWqZY2OIXyOnw4CvHs
          claim_id: c_pA7HBRLEt72I3ao0zbSvy4
          source_id: s_avFgkicxCd4vscbCtVsP7v
          stance: supports
          locator: 紹興府志:八十卷，lgid=316594：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_avFgkicxCd4vscbCtVsP7v
            source_type: api_record
            title: 中国历代人物传记资料库：王光美（CBDB 562434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562434&o=json
            external_identifier: CBDB:562434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.560Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4YX2DhkCvTc6ZA91MPgT5B
        status: active
        display_name: 王光美
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王錫模

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫模 | accepted |
| bio.summary | 王錫模，清人物。籍贯山陰，身份为為善鄉里。（中国历代人物传记资料库 CBDB 562435） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_4YX2DhkCvTc6ZA91MPgT5B | 王光美 | accepted |

## 外部来源

- [中国历代人物传记资料库：王光美（CBDB 562434）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562434&o=json)
- [中国历代人物传记资料库：王錫模（CBDB 562435）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562435&o=json)
