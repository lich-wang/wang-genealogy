---
schema: wang-person/v1
id: p_KXZZnftCABaWNZNVtNAtC7
status: active
merged_into: null
display_name: 王綬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QF5KbXAJDVByyE8qQMah2E
        subject_person_id: p_KXZZnftCABaWNZNVtNAtC7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DfiTFeZqAW2DDHreFsDeM5
          claim_id: c_QF5KbXAJDVByyE8qQMah2E
          source_id: s_i5ReFgZdXpKygCGUWje8tf
          stance: supports
          locator: CBDB:144927
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（144927）
          source: &a1
            id: s_i5ReFgZdXpKygCGUWje8tf
            source_type: api_record
            title: 中国历代人物传记资料库：王綬（CBDB 144927）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144927&o=json
            external_identifier: CBDB:144927
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.641Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_QBsau6PWsDJXVJ4hhdwGQN
        subject_person_id: p_KXZZnftCABaWNZNVtNAtC7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 764年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B3PfWpgxEv85H5ZF5o8oqr
          claim_id: c_QBsau6PWsDJXVJ4hhdwGQN
          source_id: s_i5ReFgZdXpKygCGUWje8tf
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
        id: c_pTBzPLQcKQmgRNPH4nn1Yi
        subject_person_id: p_KXZZnftCABaWNZNVtNAtC7
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 815年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aKKudLz7VmDXK8gid1GMfA
          claim_id: c_pTBzPLQcKQmgRNPH4nn1Yi
          source_id: s_i5ReFgZdXpKygCGUWje8tf
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
        id: c_8WnyRa8PKj84QRQJA8QfPF
        subject_person_id: p_KXZZnftCABaWNZNVtNAtC7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_66riNAMVpP9UNsKDMBh7aH
          claim_id: c_8WnyRa8PKj84QRQJA8QfPF
          source_id: s_i5ReFgZdXpKygCGUWje8tf
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

# 王綬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綬 | accepted |
| birth.date | 764年 | accepted |
| death.date | 815年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王綬（CBDB 144927）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144927&o=json)
