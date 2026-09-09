---
schema: wang-person/v1
id: p_fYhPRV6epSdj5Hnzj57TC6
status: active
merged_into: null
display_name: 王文韶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_B1tfRXbeEbQmhYvGkNuKq1
        subject_person_id: p_fYhPRV6epSdj5Hnzj57TC6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文韶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NViLJezLWxqEyXPRQRvsZ3
          claim_id: c_B1tfRXbeEbQmhYvGkNuKq1
          source_id: s_4j2jjxfAtAgmNjeAv2sgPb
          stance: supports
          locator: CBDB:57121
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（57121）
          source: &a1
            id: s_4j2jjxfAtAgmNjeAv2sgPb
            source_type: api_record
            title: 中国历代人物传记资料库：王文韶（CBDB 57121）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57121&o=json
            external_identifier: CBDB:57121
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.783Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QFQBB3LKAV4brbww2XbND6
        subject_person_id: p_fYhPRV6epSdj5Hnzj57TC6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1830年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GzbJ1UnsZ9wD132qwPyG6N
          claim_id: c_QFQBB3LKAV4brbww2XbND6
          source_id: s_4j2jjxfAtAgmNjeAv2sgPb
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
        id: c_WwL3kyij1YviT1zaJnUAir
        subject_person_id: p_fYhPRV6epSdj5Hnzj57TC6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1908年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L2XrhzeBhWPjiVixDFQj5M
          claim_id: c_WwL3kyij1YviT1zaJnUAir
          source_id: s_4j2jjxfAtAgmNjeAv2sgPb
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
        id: c_q6TXEtGGYsC6ugDZtTWQLW
        subject_person_id: p_fYhPRV6epSdj5Hnzj57TC6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E8HJFMd2kqG27vnHHNiVWQ
          claim_id: c_q6TXEtGGYsC6ugDZtTWQLW
          source_id: s_4j2jjxfAtAgmNjeAv2sgPb
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王文韶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文韶 | accepted |
| birth.date | 1830年 | accepted |
| death.date | 1908年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文韶（CBDB 57121）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57121&o=json)
