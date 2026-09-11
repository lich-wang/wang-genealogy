---
schema: wang-person/v1
id: p_QV5NCTd69avzZPkjFuouET
status: active
merged_into: null
display_name: 王含玖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1eayZcQH2Y5fsf9AYbCAKs
        subject_person_id: p_QV5NCTd69avzZPkjFuouET
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王含玖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wNU9aa7H1CgbFr1Cw6T9bA
          claim_id: c_1eayZcQH2Y5fsf9AYbCAKs
          source_id: s_dh1t4W5px5DVsFdzKSrEHr
          stance: supports
          locator: CBDB:636526
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636526）
          source: &a1
            id: s_dh1t4W5px5DVsFdzKSrEHr
            source_type: api_record
            title: 中国历代人物传记资料库：王含玖（CBDB 636526）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636526&o=json
            external_identifier: CBDB:636526
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.020Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AVgQCGZ1axqfUTqtYHnBVn
        subject_person_id: p_QV5NCTd69avzZPkjFuouET
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王含玖，清人物。籍贯楚雄，曾任訓導。（中国历代人物传记资料库 CBDB 636526）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Se-PE8M8QAJmALW1d9dmQU
          claim_id: c_AVgQCGZ1axqfUTqtYHnBVn
          source_id: s_dh1t4W5px5DVsFdzKSrEHr
          stance: supports
          locator: CBDB:636526
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

# 王含玖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王含玖 | accepted |
| bio.summary | 王含玖，清人物。籍贯楚雄，曾任訓導。（中国历代人物传记资料库 CBDB 636526） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王含玖（CBDB 636526）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636526&o=json)
