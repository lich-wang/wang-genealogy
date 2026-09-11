---
schema: wang-person/v1
id: p_nPd1seFAfJZsqKZQBW5CP6
status: active
merged_into: null
display_name: 王素
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_T4mUi4UpffLE7fTK9F3LuW
        subject_person_id: p_nPd1seFAfJZsqKZQBW5CP6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王素
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qMXiQbRA9tCSkAn2SjgYEq
          claim_id: c_T4mUi4UpffLE7fTK9F3LuW
          source_id: s_yqczo887vCriqZr1tKnyKG
          stance: supports
          locator: CBDB:71154
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71154）
          source: &a1
            id: s_yqczo887vCriqZr1tKnyKG
            source_type: api_record
            title: 中国历代人物传记资料库：王素（CBDB 71154）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71154&o=json
            external_identifier: CBDB:71154
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.437Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_UJgipo7o5XHzgJi2KuSLhH
        subject_person_id: p_nPd1seFAfJZsqKZQBW5CP6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1794年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nN4WzaDHwfGZ73sSZMDSAG
          claim_id: c_UJgipo7o5XHzgJi2KuSLhH
          source_id: s_yqczo887vCriqZr1tKnyKG
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
        id: c_3cd5ADhLWfrocs4RvEutYC
        subject_person_id: p_nPd1seFAfJZsqKZQBW5CP6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1877年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7aXdbzvQZKXdNojMAC6aGU
          claim_id: c_3cd5ADhLWfrocs4RvEutYC
          source_id: s_yqczo887vCriqZr1tKnyKG
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
        id: c_G6G3qVt2q6ZGw9JUpgFsm5
        subject_person_id: p_nPd1seFAfJZsqKZQBW5CP6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王素（1794年—1877年），清人物。籍贯甘泉。（中国历代人物传记资料库 CBDB 71154）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KTWUsMSLvwKYOGaThqruLO
          claim_id: c_G6G3qVt2q6ZGw9JUpgFsm5
          source_id: s_yqczo887vCriqZr1tKnyKG
          stance: supports
          locator: CBDB:71154
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

# 王素

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王素 | accepted |
| birth.date | 1794年 | accepted |
| death.date | 1877年 | accepted |
| bio.summary | 王素（1794年—1877年），清人物。籍贯甘泉。（中国历代人物传记资料库 CBDB 71154） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王素（CBDB 71154）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71154&o=json)
