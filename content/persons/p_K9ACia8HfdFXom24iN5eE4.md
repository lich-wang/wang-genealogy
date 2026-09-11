---
schema: wang-person/v1
id: p_K9ACia8HfdFXom24iN5eE4
status: active
merged_into: null
display_name: 王昌胤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ucxbk39ckj2m8oqJRWF4ro
        subject_person_id: p_K9ACia8HfdFXom24iN5eE4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌胤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9xS4gkKjLZQPtsLRj43PA1
          claim_id: c_ucxbk39ckj2m8oqJRWF4ro
          source_id: s_RC9vnco3dZ9VrQBnRsnmP8
          stance: supports
          locator: CBDB:60649
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（60649）
          source: &a1
            id: s_RC9vnco3dZ9VrQBnRsnmP8
            source_type: api_record
            title: 中国历代人物传记资料库：王昌胤（CBDB 60649）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60649&o=json
            external_identifier: CBDB:60649
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.852Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_6sPeDcsvmCBtnDyFQs9gQZ
        subject_person_id: p_K9ACia8HfdFXom24iN5eE4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1657年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kHKx31AdCo5J96v6HKr6hD
          claim_id: c_6sPeDcsvmCBtnDyFQs9gQZ
          source_id: s_RC9vnco3dZ9VrQBnRsnmP8
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
        id: c_ZBaKUijoPMSrTP3dPJuwVr
        subject_person_id: p_K9ACia8HfdFXom24iN5eE4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昌胤（卒于1657年），清人物。明清進士進士，籍贯淄川，入仕進士，曾任兵備道、僉事、學政。（中国历代人物传记资料库 CBDB 60649）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OyWahqtiwY6Eq-_o0BOcpa
          claim_id: c_ZBaKUijoPMSrTP3dPJuwVr
          source_id: s_RC9vnco3dZ9VrQBnRsnmP8
          stance: supports
          locator: CBDB:60649
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

# 王昌胤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昌胤 | accepted |
| death.date | 1657年 | accepted |
| bio.summary | 王昌胤（卒于1657年），清人物。明清進士進士，籍贯淄川，入仕進士，曾任兵備道、僉事、學政。（中国历代人物传记资料库 CBDB 60649） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昌胤（CBDB 60649）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60649&o=json)
