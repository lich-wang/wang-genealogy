---
schema: wang-person/v1
id: p_aKTcTcwPwwQP7hVaAj9R1z
status: active
merged_into: null
display_name: 王福畤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nG1F7Kpv9xCbqB5KiNPapj
        subject_person_id: p_aKTcTcwPwwQP7hVaAj9R1z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福畤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_629kswR8xe5yYXaytqkpXJ
          claim_id: c_nG1F7Kpv9xCbqB5KiNPapj
          source_id: s_3HbECvoA8j6WF2Yebzvg69
          stance: supports
          locator: CBDB:30885
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（30885）
          source: &a1
            id: s_3HbECvoA8j6WF2Yebzvg69
            source_type: api_record
            title: 中国历代人物传记资料库：王福畤（CBDB 30885）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30885&o=json
            external_identifier: CBDB:30885
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.043Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9uaKqY4FCQ34MGh58r6ccj
        subject_person_id: p_aKTcTcwPwwQP7hVaAj9R1z
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 622年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mgAbQiB99zuV7oUA2BSKZD
          claim_id: c_9uaKqY4FCQ34MGh58r6ccj
          source_id: s_3HbECvoA8j6WF2Yebzvg69
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_D81TohnPpfPbYbuebYtzgu
        subject_person_id: p_aKTcTcwPwwQP7hVaAj9R1z
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
        - id: cs_hmMsC6Yrp5Lxu3qGPZCUhe
          claim_id: c_D81TohnPpfPbYbuebYtzgu
          source_id: s_3HbECvoA8j6WF2Yebzvg69
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

# 王福畤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福畤 | accepted |
| birth.date | 622年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王福畤（CBDB 30885）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30885&o=json)
