---
schema: wang-person/v1
id: p_AHCcfYw3Nk2vLTwYf2QJ9P
status: active
merged_into: null
display_name: 王文正
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KbrossU7RdiZ6MtLWKzYQR
        subject_person_id: p_AHCcfYw3Nk2vLTwYf2QJ9P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PLtAjKCpcMTPbLi5dAkZ1P
          claim_id: c_KbrossU7RdiZ6MtLWKzYQR
          source_id: s_LwPMjEwq9ppTAdXBmRpfKQ
          stance: supports
          locator: CBDB:37947
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37947）
          source: &a1
            id: s_LwPMjEwq9ppTAdXBmRpfKQ
            source_type: api_record
            title: 中国历代人物传记资料库：王文正（CBDB 37947）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37947&o=json
            external_identifier: CBDB:37947
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.298Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qfH4dpJCb5s9Se2NNh4xXa
        subject_person_id: p_AHCcfYw3Nk2vLTwYf2QJ9P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文正，宋人物。籍贯萊州，曾任朝散郎。（中国历代人物传记资料库 CBDB 37947）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LSzchRxX9qU-m8X-RA3vSy
          claim_id: c_qfH4dpJCb5s9Se2NNh4xXa
          source_id: s_LwPMjEwq9ppTAdXBmRpfKQ
          stance: supports
          locator: CBDB:37947
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

# 王文正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文正 | accepted |
| bio.summary | 王文正，宋人物。籍贯萊州，曾任朝散郎。（中国历代人物传记资料库 CBDB 37947） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文正（CBDB 37947）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37947&o=json)
