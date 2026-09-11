---
schema: wang-person/v1
id: p_LyoASDPGtuqCWgcajaiC3o
status: active
merged_into: null
display_name: 王用予
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_i5B7GyGD3T6YiAQrA3uJwd
        subject_person_id: p_LyoASDPGtuqCWgcajaiC3o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用予
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CG6bi8RzPZZJpTzk8E3F8P
          claim_id: c_i5B7GyGD3T6YiAQrA3uJwd
          source_id: s_TMMnhZkAzNyQNSvmh5xTBo
          stance: supports
          locator: CBDB:69147
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69147）
          source: &a1
            id: s_TMMnhZkAzNyQNSvmh5xTBo
            source_type: api_record
            title: 中国历代人物传记资料库：王用予（CBDB 69147）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69147&o=json
            external_identifier: CBDB:69147
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.126Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ai8egLT99PNji8W3tC9gC2
        subject_person_id: p_LyoASDPGtuqCWgcajaiC3o
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1696年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aqB6rrqNKGjFufbSLdSFCN
          claim_id: c_ai8egLT99PNji8W3tC9gC2
          source_id: s_TMMnhZkAzNyQNSvmh5xTBo
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G1Hykzg97E3Caj9J8qLQ1m
        subject_person_id: p_LyoASDPGtuqCWgcajaiC3o
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用予（卒于1696年），清人物。籍贯靖虜衛，曾任守備、鎮總兵官、總兵。（中国历代人物传记资料库 CBDB 69147）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_djwMbdh1pATJNN30lNo-Oi
          claim_id: c_G1Hykzg97E3Caj9J8qLQ1m
          source_id: s_TMMnhZkAzNyQNSvmh5xTBo
          stance: supports
          locator: CBDB:69147
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

# 王用予

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用予 | accepted |
| death.date | 1696年 | accepted |
| bio.summary | 王用予（卒于1696年），清人物。籍贯靖虜衛，曾任守備、鎮總兵官、總兵。（中国历代人物传记资料库 CBDB 69147） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王用予（CBDB 69147）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69147&o=json)
