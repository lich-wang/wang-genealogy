---
schema: wang-person/v1
id: p_gBxtbSMpZzLDnyQQBAXFeQ
status: active
merged_into: null
display_name: 王家弼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eZsPtuAYTs7XsXN62NEeZk
        subject_person_id: p_gBxtbSMpZzLDnyQQBAXFeQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家弼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J5zZ4BveqWHSRz8qDhZhYE
          claim_id: c_eZsPtuAYTs7XsXN62NEeZk
          source_id: s_XZ3EDR4JMosHgcwVPAMUHz
          stance: supports
          locator: CBDB:637173
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637173）
          source: &a1
            id: s_XZ3EDR4JMosHgcwVPAMUHz
            source_type: api_record
            title: 中国历代人物传记资料库：王家弼（CBDB 637173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637173&o=json
            external_identifier: CBDB:637173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.359Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NxfgVGrxT16dGjLNp1ysm3
        subject_person_id: p_gBxtbSMpZzLDnyQQBAXFeQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家弼，清人物。籍贯無錫，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 637173）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FQRSOhZvoxH164YoIUsBJ0
          claim_id: c_NxfgVGrxT16dGjLNp1ysm3
          source_id: s_XZ3EDR4JMosHgcwVPAMUHz
          stance: supports
          locator: CBDB:637173
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

# 王家弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家弼 | accepted |
| bio.summary | 王家弼，清人物。籍贯無錫，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 637173） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王家弼（CBDB 637173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637173&o=json)
