---
schema: wang-person/v1
id: p_fNiVPxUbUg2MLhyAUGhtYq
status: active
merged_into: null
display_name: 王之全
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5DVJ6EoX3GmFfY144jtNB1
        subject_person_id: p_fNiVPxUbUg2MLhyAUGhtYq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之全
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MXgQEQ98Tt6pNAL35jvBtq
          claim_id: c_5DVJ6EoX3GmFfY144jtNB1
          source_id: s_7AqNEHoSYJS4FhsgU24LG9
          stance: supports
          locator: CBDB:635775
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635775）
          source: &a1
            id: s_7AqNEHoSYJS4FhsgU24LG9
            source_type: api_record
            title: 中国历代人物传记资料库：王之全（CBDB 635775）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635775&o=json
            external_identifier: CBDB:635775
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.788Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vf5t4rY5Sf2yAmHuHWWAB5
        subject_person_id: p_fNiVPxUbUg2MLhyAUGhtYq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之全，清人物。籍贯鳳陽，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 635775）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_w0FFxda_5sux8QYrlahp4k
          claim_id: c_vf5t4rY5Sf2yAmHuHWWAB5
          source_id: s_7AqNEHoSYJS4FhsgU24LG9
          stance: supports
          locator: CBDB:635775
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

# 王之全

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之全 | accepted |
| bio.summary | 王之全，清人物。籍贯鳳陽，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 635775） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之全（CBDB 635775）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635775&o=json)
