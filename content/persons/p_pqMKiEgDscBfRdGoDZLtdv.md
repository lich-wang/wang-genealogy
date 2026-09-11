---
schema: wang-person/v1
id: p_pqMKiEgDscBfRdGoDZLtdv
status: active
merged_into: null
display_name: 王蘊藻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zknJvwA4V93qiBWLNrkCjx
        subject_person_id: p_pqMKiEgDscBfRdGoDZLtdv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王蘊藻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Lv4pCdSuAE2P6cXVtkqaZW
          claim_id: c_zknJvwA4V93qiBWLNrkCjx
          source_id: s_op44Vb9fD8UtBW8HhP3GK6
          stance: supports
          locator: CBDB:640169
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640169）
          source: &a1
            id: s_op44Vb9fD8UtBW8HhP3GK6
            source_type: api_record
            title: 中国历代人物传记资料库：王蘊藻（CBDB 640169）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640169&o=json
            external_identifier: CBDB:640169
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.169Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WnkCV36MGFGBKXT87ewp1C
        subject_person_id: p_pqMKiEgDscBfRdGoDZLtdv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王蘊藻，清人物。籍贯靈璧，入仕學校: 生員(庠生)，曾任知縣。（中国历代人物传记资料库 CBDB 640169）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gw58GPuP2znUHvSSAKIQb_
          claim_id: c_WnkCV36MGFGBKXT87ewp1C
          source_id: s_op44Vb9fD8UtBW8HhP3GK6
          stance: supports
          locator: CBDB:640169
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

# 王蘊藻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王蘊藻 | accepted |
| bio.summary | 王蘊藻，清人物。籍贯靈璧，入仕學校: 生員(庠生)，曾任知縣。（中国历代人物传记资料库 CBDB 640169） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王蘊藻（CBDB 640169）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640169&o=json)
