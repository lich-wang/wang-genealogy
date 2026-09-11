---
schema: wang-person/v1
id: p_NEsjQEvJrhh7Awt4j55Fkb
status: active
merged_into: null
display_name: 王思誠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HHKN7mKAQrqEJXwkNjGNqm
        subject_person_id: p_NEsjQEvJrhh7Awt4j55Fkb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思誠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bx3AhCGe8MtsMoBsRGizNA
          claim_id: c_HHKN7mKAQrqEJXwkNjGNqm
          source_id: s_cQYfomi8PQkdoqMJfuBaRt
          stance: supports
          locator: CBDB:101284
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（101284）
          source: &a1
            id: s_cQYfomi8PQkdoqMJfuBaRt
            source_type: api_record
            title: 中国历代人物传记资料库：王思誠（CBDB 101284）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101284&o=json
            external_identifier: CBDB:101284
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.789Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_teHiYZzKH3GUC9Lx4hnEQ2
        subject_person_id: p_NEsjQEvJrhh7Awt4j55Fkb
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1291年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9eXu1tGv4nxEDFer5LmMeT
          claim_id: c_teHiYZzKH3GUC9Lx4hnEQ2
          source_id: s_cQYfomi8PQkdoqMJfuBaRt
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_gHmWexiX9heBTSo8fuJP6T
        subject_person_id: p_NEsjQEvJrhh7Awt4j55Fkb
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1357年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Hy4MjCxziC9oMyJ6cS6D7V
          claim_id: c_gHmWexiX9heBTSo8fuJP6T
          source_id: s_cQYfomi8PQkdoqMJfuBaRt
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
        id: c_yZ7BiT5dGWKBDyn1p5BxJU
        subject_person_id: p_NEsjQEvJrhh7Awt4j55Fkb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思誠（1291年—1357年），元人物。籍贯兗州，入仕進士，曾任兵部侍郎、國子監國子祭酒、國子監國子司業二員。（中国历代人物传记资料库 CBDB 101284）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZdOSLAuRsxuDMuhzH0ownR
          claim_id: c_yZ7BiT5dGWKBDyn1p5BxJU
          source_id: s_cQYfomi8PQkdoqMJfuBaRt
          stance: supports
          locator: CBDB:101284
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

# 王思誠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思誠 | accepted |
| birth.date | 1291年 | accepted |
| death.date | 1357年 | accepted |
| bio.summary | 王思誠（1291年—1357年），元人物。籍贯兗州，入仕進士，曾任兵部侍郎、國子監國子祭酒、國子監國子司業二員。（中国历代人物传记资料库 CBDB 101284） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思誠（CBDB 101284）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=101284&o=json)
