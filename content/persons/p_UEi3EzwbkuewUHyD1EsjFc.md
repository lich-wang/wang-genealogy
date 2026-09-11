---
schema: wang-person/v1
id: p_UEi3EzwbkuewUHyD1EsjFc
status: active
merged_into: null
display_name: 王同澤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qJtmxgfVJ1HcJ8A7Fchqyj
        subject_person_id: p_UEi3EzwbkuewUHyD1EsjFc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同澤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SYysvjwSwPYLHWhM5NXh4H
          claim_id: c_qJtmxgfVJ1HcJ8A7Fchqyj
          source_id: s_h3DpJWDpDu4Ty6WPAfT2RS
          stance: supports
          locator: CBDB:636509
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636509）
          source: &a1
            id: s_h3DpJWDpDu4Ty6WPAfT2RS
            source_type: api_record
            title: 中国历代人物传记资料库：王同澤（CBDB 636509）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636509&o=json
            external_identifier: CBDB:636509
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.015Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Xtg6T4kN4iQR5zQPv1FcnH
        subject_person_id: p_UEi3EzwbkuewUHyD1EsjFc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同澤，清人物。籍贯新城，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636509）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KaVbzUagtaMLUuBKR5-kD-
          claim_id: c_Xtg6T4kN4iQR5zQPv1FcnH
          source_id: s_h3DpJWDpDu4Ty6WPAfT2RS
          stance: supports
          locator: CBDB:636509
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

# 王同澤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王同澤 | accepted |
| bio.summary | 王同澤，清人物。籍贯新城，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636509） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王同澤（CBDB 636509）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636509&o=json)
