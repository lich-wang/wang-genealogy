---
schema: wang-person/v1
id: p_MMmJopvahRJtPzL4kzpn4u
status: active
merged_into: null
display_name: 王之賔
cbdb_id: 413770
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1WYAiJ281RkwD1FPKN8QK7
        subject_person_id: p_MMmJopvahRJtPzL4kzpn4u
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之賔，清人物。曾任知府。（中国历代人物传记资料库 CBDB 413770）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_M1WALAr3F7xWljWXa7C1R6
          claim_id: c_1WYAiJ281RkwD1FPKN8QK7
          source_id: s_dMdjd2fL1Sh23Jwy24aDu1
          stance: supports
          locator: CBDB:413770
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_dMdjd2fL1Sh23Jwy24aDu1
            source_type: api_record
            title: 中国历代人物传记资料库：王之賔（CBDB 413770）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413770&o=json
            external_identifier: CBDB:413770
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:23.724Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HDnWMre97RVHoTzypyvH7J
        subject_person_id: p_MMmJopvahRJtPzL4kzpn4u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之賔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ot2cugArwG94wDJKfLs4hh
          claim_id: c_HDnWMre97RVHoTzypyvH7J
          source_id: s_dMdjd2fL1Sh23Jwy24aDu1
          stance: supports
          locator: CBDB:413770
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4901-5000）｜历史性依据：CBDB 朝代 = 清
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

# 王之賔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王之賔，清人物。曾任知府。（中国历代人物传记资料库 CBDB 413770） | accepted |
| name.primary | 王之賔 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之賔（CBDB 413770）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413770&o=json)
