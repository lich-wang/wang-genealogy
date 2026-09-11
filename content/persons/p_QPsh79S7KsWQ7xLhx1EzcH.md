---
schema: wang-person/v1
id: p_QPsh79S7KsWQ7xLhx1EzcH
status: active
merged_into: null
display_name: 王選
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_99etgq4mx8gMZJyGYXCBJB
        subject_person_id: p_QPsh79S7KsWQ7xLhx1EzcH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王選
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9KCLoKt8tgzGsPGhCEQRPh
          claim_id: c_99etgq4mx8gMZJyGYXCBJB
          source_id: s_QiJo2gtb6JkHm4bJBeC5HZ
          stance: supports
          locator: CBDB:381083
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（381083）
          source: &a1
            id: s_QiJo2gtb6JkHm4bJBeC5HZ
            source_type: api_record
            title: 中国历代人物传记资料库：王選（CBDB 381083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=381083&o=json
            external_identifier: CBDB:381083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.758Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Mg5Q5sh6XJBv1fZ6BnXxQr
        subject_person_id: p_QPsh79S7KsWQ7xLhx1EzcH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王選，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 381083）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hsTS3r3F-99QDTT0oL2Ps9
          claim_id: c_Mg5Q5sh6XJBv1fZ6BnXxQr
          source_id: s_QiJo2gtb6JkHm4bJBeC5HZ
          stance: supports
          locator: CBDB:381083
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

# 王選

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王選 | accepted |
| bio.summary | 王選，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 381083） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王選（CBDB 381083）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=381083&o=json)
