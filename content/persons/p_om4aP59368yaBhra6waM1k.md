---
schema: wang-person/v1
id: p_om4aP59368yaBhra6waM1k
status: active
merged_into: null
display_name: 王麟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Af1x3vAHWh6pifQQXUqYNW
        subject_person_id: p_om4aP59368yaBhra6waM1k
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6ub1my8Z8ZCVwryj2GpruW
          claim_id: c_Af1x3vAHWh6pifQQXUqYNW
          source_id: s_PRn8YdKnF1R56k5oyQ4RjL
          stance: supports
          locator: CBDB:697817
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（697817）
          source: &a1
            id: s_PRn8YdKnF1R56k5oyQ4RjL
            source_type: api_record
            title: 中国历代人物传记资料库：王麟（CBDB 697817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697817&o=json
            external_identifier: CBDB:697817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.730Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CCw1R4kGadr8t19jSGvioM
        subject_person_id: p_om4aP59368yaBhra6waM1k
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王麟，明人物。籍贯曹州，身份为詩人，入仕明經，曾任翰林應奉、學正。（中国历代人物传记资料库 CBDB 697817）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_a79I98uzEeUtfgE-qVyH3Y
          claim_id: c_CCw1R4kGadr8t19jSGvioM
          source_id: s_PRn8YdKnF1R56k5oyQ4RjL
          stance: supports
          locator: CBDB:697817
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

# 王麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王麟 | accepted |
| bio.summary | 王麟，明人物。籍贯曹州，身份为詩人，入仕明經，曾任翰林應奉、學正。（中国历代人物传记资料库 CBDB 697817） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王麟（CBDB 697817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=697817&o=json)
