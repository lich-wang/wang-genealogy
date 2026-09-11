---
schema: wang-person/v1
id: p_UiPDxtmmLLRdj9ubrHS9hD
status: active
merged_into: null
display_name: 王龔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M7JJ3jxFfhyPd7kyHJjojE
        subject_person_id: p_UiPDxtmmLLRdj9ubrHS9hD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王龔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_c8U9ePnZGDE7oi4gZLDT2K
          claim_id: c_M7JJ3jxFfhyPd7kyHJjojE
          source_id: s_JwtzNFuyJ21TL5hFv7myYu
          stance: supports
          locator: CBDB:45852
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（45852）
          source: &a1
            id: s_JwtzNFuyJ21TL5hFv7myYu
            source_type: api_record
            title: 中国历代人物传记资料库：王龔（CBDB 45852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45852&o=json
            external_identifier: CBDB:45852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.696Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ghi3Mt3SJP7sdycyjD8P2e
        subject_person_id: p_UiPDxtmmLLRdj9ubrHS9hD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王龔，宋人物。籍贯簡州，身份为收徒講學。（中国历代人物传记资料库 CBDB 45852）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_clVEFYntJ376EjkKRykZxQ
          claim_id: c_ghi3Mt3SJP7sdycyjD8P2e
          source_id: s_JwtzNFuyJ21TL5hFv7myYu
          stance: supports
          locator: CBDB:45852
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

# 王龔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王龔 | accepted |
| bio.summary | 王龔，宋人物。籍贯簡州，身份为收徒講學。（中国历代人物传记资料库 CBDB 45852） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王龔（CBDB 45852）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45852&o=json)
