---
schema: wang-person/v1
id: p_rw5wbgVPxCyUPdh45UQYV3
status: active
merged_into: null
display_name: 王鵬舉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_a9NfPw6puYQyf1aWCbNSR3
        subject_person_id: p_rw5wbgVPxCyUPdh45UQYV3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鵬舉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_pDSMwtEsDzGp6xgyk56pKW
          claim_id: c_a9NfPw6puYQyf1aWCbNSR3
          source_id: s_N1CaKiN8hZuEpbA8PtT5eE
          stance: supports
          locator: CBDB:641010
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（641010）
          source: &a1
            id: s_N1CaKiN8hZuEpbA8PtT5eE
            source_type: api_record
            title: 中国历代人物传记资料库：王鵬舉（CBDB 641010）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641010&o=json
            external_identifier: CBDB:641010
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.272Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sHFTGMQ3cpVUhP52sBXkrE
        subject_person_id: p_rw5wbgVPxCyUPdh45UQYV3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鵬舉，清人物。籍贯萊州府，曾任藍翎侍衛。（中国历代人物传记资料库 CBDB 641010）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CnuunRzu77PzxuTFUfFsVO
          claim_id: c_sHFTGMQ3cpVUhP52sBXkrE
          source_id: s_N1CaKiN8hZuEpbA8PtT5eE
          stance: supports
          locator: CBDB:641010
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

# 王鵬舉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鵬舉 | accepted |
| bio.summary | 王鵬舉，清人物。籍贯萊州府，曾任藍翎侍衛。（中国历代人物传记资料库 CBDB 641010） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鵬舉（CBDB 641010）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=641010&o=json)
