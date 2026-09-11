---
schema: wang-person/v1
id: p_1JTYSiPuzU4zie6wknPJxm
status: active
merged_into: null
display_name: 王人紀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SqnNAE8PutGd2xVtCrWw9B
        subject_person_id: p_1JTYSiPuzU4zie6wknPJxm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王人紀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_K1GaDN4eBeG2TqL35t34D2
          claim_id: c_SqnNAE8PutGd2xVtCrWw9B
          source_id: s_QU2suTSFXYULWPRLdYsdSB
          stance: supports
          locator: CBDB:562514
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（562514）
          source: &a1
            id: s_QU2suTSFXYULWPRLdYsdSB
            source_type: api_record
            title: 中国历代人物传记资料库：王人紀（CBDB 562514）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562514&o=json
            external_identifier: CBDB:562514
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.561Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VBqGfTSq75Zeu1EAEtCFjD
        subject_person_id: p_1JTYSiPuzU4zie6wknPJxm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王人紀，清人物。籍贯蕭山，身份为未參加科舉而卒。（中国历代人物传记资料库 CBDB 562514）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_syUfbYcDk0UnuOo7SgSMn8
          claim_id: c_VBqGfTSq75Zeu1EAEtCFjD
          source_id: s_QU2suTSFXYULWPRLdYsdSB
          stance: supports
          locator: CBDB:562514
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

# 王人紀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王人紀 | accepted |
| bio.summary | 王人紀，清人物。籍贯蕭山，身份为未參加科舉而卒。（中国历代人物传记资料库 CBDB 562514） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王人紀（CBDB 562514）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=562514&o=json)
