---
schema: wang-person/v1
id: p_t6iyv1goFP7cHcWGchzLBa
status: active
merged_into: null
display_name: 王文瀾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tAueU8EXB3LDHGU73iR24F
        subject_person_id: p_t6iyv1goFP7cHcWGchzLBa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文瀾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KS9NWFKRMsbEbzn8SER4P4
          claim_id: c_tAueU8EXB3LDHGU73iR24F
          source_id: s_6RyWYhfXcu5ZjRVqSgr8HP
          stance: supports
          locator: CBDB:576144
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（576144）
          source: &a1
            id: s_6RyWYhfXcu5ZjRVqSgr8HP
            source_type: api_record
            title: 中国历代人物传记资料库：王文瀾（CBDB 576144）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576144&o=json
            external_identifier: CBDB:576144
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.710Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Yh3UyzvjiF5qNBkMqS6AH2
        subject_person_id: p_t6iyv1goFP7cHcWGchzLBa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文瀾，清人物。籍贯會稽，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576144）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1p79FyKV2hELXVdMxig3Kk
          claim_id: c_Yh3UyzvjiF5qNBkMqS6AH2
          source_id: s_6RyWYhfXcu5ZjRVqSgr8HP
          stance: supports
          locator: CBDB:576144
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

# 王文瀾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文瀾 | accepted |
| bio.summary | 王文瀾，清人物。籍贯會稽，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576144） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文瀾（CBDB 576144）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576144&o=json)
