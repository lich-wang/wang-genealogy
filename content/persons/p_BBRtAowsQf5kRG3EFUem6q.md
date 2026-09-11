---
schema: wang-person/v1
id: p_BBRtAowsQf5kRG3EFUem6q
status: active
merged_into: null
display_name: 王愔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d6i5ETY8N6hf4PPKfVJrLD
        subject_person_id: p_BBRtAowsQf5kRG3EFUem6q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_S1PPGkTgUgiQeLFx3MwzKR
          claim_id: c_d6i5ETY8N6hf4PPKfVJrLD
          source_id: s_RgX3kMNskb6CNdMhxqAykk
          stance: supports
          locator: CBDB:303475
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（303475）
          source: &a1
            id: s_RgX3kMNskb6CNdMhxqAykk
            source_type: api_record
            title: 中国历代人物传记资料库：王愔（CBDB 303475）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303475&o=json
            external_identifier: CBDB:303475
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.687Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MzTKYi391dBcThGbHNqiWQ
        subject_person_id: p_BBRtAowsQf5kRG3EFUem6q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王愔，明人物。嘉靖二十年進士，籍贯崑山，曾任布政使司都事。（中国历代人物传记资料库 CBDB 303475）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_qK4NzOgK7z1WQ3AlXJrYzq
          claim_id: c_MzTKYi391dBcThGbHNqiWQ
          source_id: s_RgX3kMNskb6CNdMhxqAykk
          stance: supports
          locator: CBDB:303475
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

# 王愔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王愔 | accepted |
| bio.summary | 王愔，明人物。嘉靖二十年進士，籍贯崑山，曾任布政使司都事。（中国历代人物传记资料库 CBDB 303475） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王愔（CBDB 303475）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303475&o=json)
