---
schema: wang-person/v1
id: p_oYJGWUyNYPAi41RCr11KNf
status: active
merged_into: null
display_name: 王淺
cbdb_id: 17816
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_c9aVPnpJLu23QLZjqXMGzg
        subject_person_id: p_oYJGWUyNYPAi41RCr11KNf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淺，唐人物。籍贯潯陽。（中国历代人物传记资料库 CBDB 17816）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_sh4u2BgJC7913ahiPtYiIa
          claim_id: c_c9aVPnpJLu23QLZjqXMGzg
          source_id: s_HhDA2Q7T6NFkkhJQNJ42KQ
          stance: supports
          locator: CBDB:17816
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_HhDA2Q7T6NFkkhJQNJ42KQ
            source_type: api_record
            title: 中国历代人物传记资料库：王淺（CBDB 17816）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17816&o=json
            external_identifier: CBDB:17816
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZkaAyBEz64x6zDs7q4rwU1
        subject_person_id: p_oYJGWUyNYPAi41RCr11KNf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王淺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_QFw2Yb664NTXnqLQzdteuK
          claim_id: c_ZkaAyBEz64x6zDs7q4rwU1
          source_id: s_HhDA2Q7T6NFkkhJQNJ42KQ
          stance: supports
          locator: CBDB:17816
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（901-1000）｜历史性依据：CBDB 朝代 = 唐
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

# 王淺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王淺，唐人物。籍贯潯陽。（中国历代人物传记资料库 CBDB 17816） | accepted |
| name.primary | 王淺 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王淺（CBDB 17816）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17816&o=json)
