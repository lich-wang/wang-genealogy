---
schema: wang-person/v1
id: p_D2224zhQpTNQ7iY1nRHbQ4
status: active
merged_into: null
display_name: 王振綱
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4rGt54H7C9Yhah7BC2DZBa
        subject_person_id: p_D2224zhQpTNQ7iY1nRHbQ4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振綱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gPw9MmBCfyw697CiGB3Jax
          claim_id: c_4rGt54H7C9Yhah7BC2DZBa
          source_id: s_QVFWnc4SSY2JW9SfmU7TG7
          stance: supports
          locator: CBDB:71950
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71950）
          source: &a1
            id: s_QVFWnc4SSY2JW9SfmU7TG7
            source_type: api_record
            title: 中国历代人物传记资料库：王振綱（CBDB 71950）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71950&o=json
            external_identifier: CBDB:71950
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.936Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_aYoMHKKBmNdhPNsKaKsPqo
        subject_person_id: p_D2224zhQpTNQ7iY1nRHbQ4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1807年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RxGFQgKM52LmKYtr2HmcdW
          claim_id: c_aYoMHKKBmNdhPNsKaKsPqo
          source_id: s_QVFWnc4SSY2JW9SfmU7TG7
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
        id: c_NuJrazaJzVukTpn6i6ERmV
        subject_person_id: p_D2224zhQpTNQ7iY1nRHbQ4
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
        - id: cs_KrGDMQhfMR6WYPrKk3b2yJ
          claim_id: c_NuJrazaJzVukTpn6i6ERmV
          source_id: s_QVFWnc4SSY2JW9SfmU7TG7
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
        id: c_YN2CpECEAX6fzNj5JGiN3y
        subject_person_id: p_D2224zhQpTNQ7iY1nRHbQ4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王振綱（1807年—1877年），清人物。籍贯新城。（中国历代人物传记资料库 CBDB 71950）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1MaI1ZPTGfgJRxpNpxTQ4G
          claim_id: c_YN2CpECEAX6fzNj5JGiN3y
          source_id: s_QVFWnc4SSY2JW9SfmU7TG7
          stance: supports
          locator: CBDB:71950
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

# 王振綱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王振綱 | accepted |
| birth.date | 1807年 | accepted |
| death.date | 1877年 | accepted |
| bio.summary | 王振綱（1807年—1877年），清人物。籍贯新城。（中国历代人物传记资料库 CBDB 71950） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王振綱（CBDB 71950）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71950&o=json)
