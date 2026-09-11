---
schema: wang-person/v1
id: p_rJ2SZYpPpKqzPVZQghWgkT
status: active
merged_into: null
display_name: 王齊
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8VZmPg9yKC9MbH6HghWH9n
        subject_person_id: p_rJ2SZYpPpKqzPVZQghWgkT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王齊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_13uiYhCKsJ62kAJ5HdvXJZ
          claim_id: c_8VZmPg9yKC9MbH6HghWH9n
          source_id: s_3G8K511siPzACP83r1N2R3
          stance: supports
          locator: CBDB:142860
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142860）
          source: &a1
            id: s_3G8K511siPzACP83r1N2R3
            source_type: api_record
            title: 中国历代人物传记资料库：王齊（CBDB 142860）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142860&o=json
            external_identifier: CBDB:142860
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.599Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_5bNi9wgoMKfzCVCCo5quwZ
        subject_person_id: p_rJ2SZYpPpKqzPVZQghWgkT
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 665年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dPNV27XPiqaPHp32EERvQ8
          claim_id: c_5bNi9wgoMKfzCVCCo5quwZ
          source_id: s_3G8K511siPzACP83r1N2R3
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
        id: c_iQSeq7h612LA1fsqrTxo1K
        subject_person_id: p_rJ2SZYpPpKqzPVZQghWgkT
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 719年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4SSwAuJ6GptYZSneXjR8M7
          claim_id: c_iQSeq7h612LA1fsqrTxo1K
          source_id: s_3G8K511siPzACP83r1N2R3
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
        id: c_Zy7SezBZUAHBWxQZE6ZM5u
        subject_person_id: p_rJ2SZYpPpKqzPVZQghWgkT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王齊（665年—719年），唐人物。籍贯芒山。（中国历代人物传记资料库 CBDB 142860）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iVqDzFYtl8-buGrEwRAU-V
          claim_id: c_Zy7SezBZUAHBWxQZE6ZM5u
          source_id: s_3G8K511siPzACP83r1N2R3
          stance: supports
          locator: CBDB:142860
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uYIkJRCJ_f-98EevZTfwhS
        subject_person_id: p_c4R798ngEpyNwG9UaAoSHg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rJ2SZYpPpKqzPVZQghWgkT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M3a0PslvMQuUX1Dc2ZYsSu
          claim_id: c_uYIkJRCJ_f-98EevZTfwhS
          source_id: s_cED67yKPMHFZ7QnsYmMFee
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Kaiyuan30：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cED67yKPMHFZ7QnsYmMFee
            source_type: api_record
            title: 中国历代人物传记资料库：王本（CBDB 149841）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149841&o=json
            external_identifier: CBDB:149841
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.799Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_c4R798ngEpyNwG9UaAoSHg
        status: active
        display_name: 王本
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王齊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王齊 | accepted |
| birth.date | 665年 | accepted |
| death.date | 719年 | accepted |
| bio.summary | 王齊（665年—719年），唐人物。籍贯芒山。（中国历代人物传记资料库 CBDB 142860） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_c4R798ngEpyNwG9UaAoSHg | 王本 | accepted |

## 外部来源

- [中国历代人物传记资料库：王本（CBDB 149841）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=149841&o=json)
- [中国历代人物传记资料库：王齊（CBDB 142860）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142860&o=json)
