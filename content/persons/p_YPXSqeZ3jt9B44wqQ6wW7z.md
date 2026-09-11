---
schema: wang-person/v1
id: p_YPXSqeZ3jt9B44wqQ6wW7z
status: active
merged_into: null
display_name: 王貫三
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qaJNNX7rGPhWQChV35JjdM
        subject_person_id: p_YPXSqeZ3jt9B44wqQ6wW7z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貫三
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_71aJUWAdueSPjLw1N9b7gN
          claim_id: c_qaJNNX7rGPhWQChV35JjdM
          source_id: s_H7LMoZuu8pX3JMahCwFMCF
          stance: supports
          locator: CBDB:576104
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（576104）
          source: &a1
            id: s_H7LMoZuu8pX3JMahCwFMCF
            source_type: api_record
            title: 中国历代人物传记资料库：王貫三（CBDB 576104）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576104&o=json
            external_identifier: CBDB:576104
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.939Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H3BSbvnEndcdMf84GG8HkE
        subject_person_id: p_YPXSqeZ3jt9B44wqQ6wW7z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王貫三，清人物。籍贯安定，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576104）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KVQW2BQHQDE6R3nF3-OtxT
          claim_id: c_H3BSbvnEndcdMf84GG8HkE
          source_id: s_H7LMoZuu8pX3JMahCwFMCF
          stance: supports
          locator: CBDB:576104
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

# 王貫三

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王貫三 | accepted |
| bio.summary | 王貫三，清人物。籍贯安定，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576104） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王貫三（CBDB 576104）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576104&o=json)
