---
schema: wang-person/v1
id: p_QkuBep2mwWaKEfbgHSG4N1
status: active
merged_into: null
display_name: 王十六娘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YULkVo8nAMwuscpJPDB12c
        subject_person_id: p_QkuBep2mwWaKEfbgHSG4N1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王十六娘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mhwAgaPkLW8WwimEZH6k8n
          claim_id: c_YULkVo8nAMwuscpJPDB12c
          source_id: s_j2z8eeWbHkpsU4ip4mEKhQ
          stance: supports
          locator: CBDB:143464
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（143464）
          source: &a1
            id: s_j2z8eeWbHkpsU4ip4mEKhQ
            source_type: api_record
            title: 中国历代人物传记资料库：王十六娘（CBDB 143464）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143464&o=json
            external_identifier: CBDB:143464
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.623Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_diBuVGB46rpGTNKopnRqLQ
        subject_person_id: p_QkuBep2mwWaKEfbgHSG4N1
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 836年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PGUwqfF4EXbRq9sk1Y8Hm5
          claim_id: c_diBuVGB46rpGTNKopnRqLQ
          source_id: s_j2z8eeWbHkpsU4ip4mEKhQ
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
        id: c_ZKCdRqc4JA3Wwh957mgqKX
        subject_person_id: p_QkuBep2mwWaKEfbgHSG4N1
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 849年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8xTiutdmqXKNXuPfjy4Nt6
          claim_id: c_ZKCdRqc4JA3Wwh957mgqKX
          source_id: s_j2z8eeWbHkpsU4ip4mEKhQ
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
        id: c_AP19CDaanBwrkm55ZPR4QV
        subject_person_id: p_QkuBep2mwWaKEfbgHSG4N1
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
        - id: cs_JTa2hMLvMnVQA3fwGascz7
          claim_id: c_AP19CDaanBwrkm55ZPR4QV
          source_id: s_j2z8eeWbHkpsU4ip4mEKhQ
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

# 王十六娘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王十六娘 | accepted |
| birth.date | 836年 | accepted |
| death.date | 849年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王十六娘（CBDB 143464）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143464&o=json)
