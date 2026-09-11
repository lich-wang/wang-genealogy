---
schema: wang-person/v1
id: p_HomXZdfv4zgsKfbPDjvqxG
status: active
merged_into: null
display_name: 王約
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VWAYqdUWjQLsNAbpw3fNZy
        subject_person_id: p_HomXZdfv4zgsKfbPDjvqxG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王約
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mFUCKpDh9V7gKBEHE8usts
          claim_id: c_VWAYqdUWjQLsNAbpw3fNZy
          source_id: s_fnqFr5xexnyKFwMi1XySYL
          stance: supports
          locator: CBDB:92002
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92002）
          source: &a1
            id: s_fnqFr5xexnyKFwMi1XySYL
            source_type: api_record
            title: 中国历代人物传记资料库：王約（CBDB 92002）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92002&o=json
            external_identifier: CBDB:92002
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.074Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JwYRpG98VD52t3G29vyED7
        subject_person_id: p_HomXZdfv4zgsKfbPDjvqxG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王約，唐人物。曾任吏部員外郎。（中国历代人物传记资料库 CBDB 92002）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Swfy0HTKJRo3mLgHq_GkNB
          claim_id: c_JwYRpG98VD52t3G29vyED7
          source_id: s_fnqFr5xexnyKFwMi1XySYL
          stance: supports
          locator: CBDB:92002
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

# 王約

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王約 | accepted |
| bio.summary | 王約，唐人物。曾任吏部員外郎。（中国历代人物传记资料库 CBDB 92002） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王約（CBDB 92002）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92002&o=json)
